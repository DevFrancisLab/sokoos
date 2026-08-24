import { createFileRoute, Link } from "@tanstack/react-router";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  ArrowRight,
  Check,
  Bot,
  Inbox,
  Users,
  Calendar,
  Package,
  BarChart3,
  Plug,
  Boxes,
  Brain,
  Rocket,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import sokoosLogo from "@/assets/sokoos_logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("fade-in-up");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ animationDelay: `${delay}ms`, opacity: 0 }}>
      {children}
    </div>
  );
}

function Logo() {
  return (
    <a href="/#hero" aria-label="Sokoos home" className="flex items-center gap-2">
      <img
        src={sokoosLogo}
        alt=""
        className="h-8 w-8 rounded-lg object-cover"
      />
      <span className="text-lg font-bold tracking-tight">Sokoos</span>
    </a>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Features", "#features"],
            ["How It Works", "#how-it-works"],
            ["Pricing", "#pricing"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/signin"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            to="/sign-up"
            className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function FloatingSokoosAI() {
  const STORAGE_KEY = "sokoos-ai-greeting-shown";
  const [isGreetingVisible, setIsGreetingVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatClosing, setIsChatClosing] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ id: number; role: "user" | "assistant"; content: string }>
  >([
    {
      id: 1,
      role: "assistant",
      content:
        "👋 Welcome! I’m your Business Bot. Ask me about pricing, features, WhatsApp, or growth.",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const suggestedQuestions = [
    "How much does Sokoos cost?",
    "Can I connect WhatsApp?",
    "Can I use Sokoos for my ISP?",
    "How does the AI learn my business?",
  ];

  useEffect(() => {
    const shouldHideGreeting = sessionStorage.getItem(STORAGE_KEY) === "true";

    if (shouldHideGreeting) {
      return;
    }

    let timer: number;
    const showGreeting = () => {
      setIsGreetingVisible(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
    };
    const resetIdleTimer = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(showGreeting, 15000);
    };
    const idleEvents = ["pointerdown", "keydown", "scroll", "touchstart"];

    idleEvents.forEach((eventName) => {
      window.addEventListener(eventName, resetIdleTimer);
    });
    resetIdleTimer();

    return () => {
      window.clearTimeout(timer);
      idleEvents.forEach((eventName) => {
        window.removeEventListener(eventName, resetIdleTimer);
      });
    };
  }, []);

  useEffect(() => {
    if (!isChatOpen) return;
    const timer = window.setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [messages, isTyping, isChatOpen]);

  const openChat = () => {
    setIsGreetingVisible(false);
    setIsChatClosing(false);
    setIsChatOpen(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "true");
    }
  };

  const closeGreeting = () => {
    setIsGreetingVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "true");
    }
  };

  const closeChat = () => {
    setIsChatClosing(true);
    window.setTimeout(() => {
      setIsChatOpen(false);
      setIsChatClosing(false);
    }, 220);
  };

  const getMockReply = (value: string) => {
    const normalized = value.toLowerCase();

    if (/(price|pricing|cost)/.test(normalized)) {
      return "Our plans are designed for businesses of every size.";
    }

    if (/(isp|internet service provider)/.test(normalized)) {
      return "Sokoos is perfect for Internet Service Providers.";
    }

    if (/school/.test(normalized)) {
      return "Sokoos helps schools answer parent enquiries automatically.";
    }

    if (/restaurant/.test(normalized)) {
      return "Sokoos helps restaurants automate customer conversations.";
    }

    if (/whatsapp/.test(normalized)) {
      return "Sokoos connects directly with WhatsApp Business.";
    }

    return "That’s a great question. Once connected to the backend I’ll answer using the real AI.";
  };

  const sendMessage = (content: string) => {
    const trimmed = content.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user", content: trimmed },
    ]);
    setMessage("");
    setIsTyping(true);

    window.setTimeout(() => {
      const reply = getMockReply(trimmed);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "assistant", content: reply },
      ]);
      setIsTyping(false);
    }, 700);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendMessage(message);
  };

  return (
    <>
      <style>{`
        @keyframes floatingPanelSlide {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes assistantPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.28);
          }
          50% {
            transform: scale(1.03);
            box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
          }
        }
      `}</style>

      <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end sm:bottom-8 sm:right-8">
        {!isChatOpen && (
          <div
            className={`mb-3 w-[240px] rounded-[24px] border border-[#E5E7EB] bg-white p-4 text-left shadow-[0_20px_50px_rgba(15,23,42,0.16)] transition-all duration-300 ease-out ${
              isGreetingVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-2 scale-95 opacity-0"
            }`}
            style={{ transformOrigin: "bottom right" }}
          >
            <button
              type="button"
              onClick={closeGreeting}
              aria-label="Close greeting"
              className="absolute right-3 top-3 rounded-full p-1 text-[#64748B] transition-colors hover:bg-[#F3F4F6] hover:text-[#111827]"
            >
              ×
            </button>
            <p className="pr-6 text-2xl leading-none">👋 Hi!</p>
            <p className="mt-2 text-sm font-semibold text-[#111827]">
              I&apos;m Sokoos AI.
            </p>
            <p className="mt-1 text-sm leading-5 text-[#64748B]">
              Need help learning about Sokoos?
            </p>
            <button
              type="button"
              onClick={openChat}
              className="mt-3 inline-flex items-center rounded-full bg-[#16A34A] px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Ask me
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={openChat}
          className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#EEF2F6] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.16)] transition-transform duration-200 hover:scale-105 sm:h-[72px] sm:w-[72px]"
          style={{ animation: "assistantPulse 2.4s ease-in-out infinite" }}
          aria-label="Open Sokoos AI"
        >
          <div className="absolute inset-0 rounded-full border border-[#22C55E]/20" />
          <div className="absolute -bottom-0.5 -right-0.5 h-4.5 w-4.5 rounded-full border-2 border-white bg-[#22C55E] shadow-sm" />
          <span className="text-3xl">🤖</span>
        </button>
      </div>

      {isChatOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-end justify-end bg-black/10 p-4 backdrop-blur-[2px]"
          onClick={closeChat}
        >
          <div
            className={`w-full max-w-[420px] rounded-[28px] border border-[#EEF2F6] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] transition-all duration-300 ease-out ${
              isChatClosing
                ? "translate-y-5 scale-95 opacity-0"
                : "translate-y-0 scale-100 opacity-100"
            }`}
            style={{
              height: "560px",
              animation: "floatingPanelSlide 0.25s ease-out",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#F3F4F6] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D1FAE5] bg-[#F0FDF4] text-xl">
                  🤖
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-[#111827]">Sokoos AI</p>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                  </div>
                  <p className="text-sm text-[#64748B]">Business Bot</p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeChat}
                aria-label="Close chat"
                className="rounded-full p-2 text-[#64748B] transition-colors hover:bg-[#F3F4F6] hover:text-[#111827]"
              >
                ×
              </button>
            </div>

            <div className="flex h-[calc(560px-88px)] flex-col px-5 py-5">
              <div className="flex-1 overflow-y-auto rounded-[24px] bg-[#F8FAFC] p-4">
                <div className="space-y-3">
                  {messages.map((entry) => (
                    <div
                      key={entry.id}
                      className={`flex ${entry.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 shadow-sm ${
                          entry.role === "user"
                            ? "bg-[#16A34A] text-white"
                            : "bg-white text-[#334155]"
                        }`}
                        style={{
                          animation: "floatingPanelSlide 0.25s ease-out",
                        }}
                      >
                        <p className="whitespace-pre-line">{entry.content}</p>
                      </div>
                    </div>
                  ))}

                  {messages.length === 1 && (
                    <div className="flex justify-start">
                      <div className="max-w-full rounded-2xl bg-white p-3 shadow-sm">
                        <p className="text-sm font-medium text-[#111827]">
                          Try one of these:
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {suggestedQuestions.map((suggestion) => (
                            <button
                              key={suggestion}
                              type="button"
                              onClick={() => sendMessage(suggestion)}
                              className="rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-1.5 text-sm text-[#334155] transition-all hover:border-[#16A34A] hover:bg-[#ECFDF5] hover:text-[#166534]"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="rounded-2xl bg-white px-3.5 py-2.5 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="h-2 w-2 animate-bounce rounded-full bg-[#94A3B8]"
                            style={{ animationDelay: "0ms" }}
                          />
                          <span
                            className="h-2 w-2 animate-bounce rounded-full bg-[#94A3B8]"
                            style={{ animationDelay: "120ms" }}
                          />
                          <span
                            className="h-2 w-2 animate-bounce rounded-full bg-[#94A3B8]"
                            style={{ animationDelay: "240ms" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-4 flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-2 shadow-sm"
              >
                <input
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Ask anything..."
                  className="h-11 flex-1 border-0 bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#94A3B8]"
                />
                <button
                  type="submit"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16A34A] text-white transition-transform hover:scale-105"
                  aria-label="Send message"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="container-page relative py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Your Business With a <br className="hidden sm:block" />
              <span className="text-[#16A34A]">Bot</span> That Sells
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sokoos gives your business a bot that attracts customers, answers
              questions, follows up, helps close sales, and keeps customers
              coming back across{" "}
              <span className="relative isolate font-semibold text-[#166534] after:absolute after:bottom-[-0.16em] after:left-0 after:-z-10 after:h-[0.42em] after:w-full after:-rotate-[1.5deg] after:rounded-[55%_45%_50%_45%] after:bg-[#86EFAC]/70">
                all your channels.
              </span>
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                to="/sign-up"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                Get Your Business Bot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function Industries() {
  const industries = [
    "Internet Providers",
    "Retail",
    "Hardware",
    "Schools",
    "Clinics",
    "Insurance",
    "Real Estate",
    "Restaurants",
    "Service Businesses",
  ];

  return (
    <section
      id="industries"
      className="border-y border-border bg-surface py-14 sm:py-16"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Industries"
            title="Built for Businesses That Sell"
            subtitle="Whether you sell products, services, subscriptions, appointments, or expertise, Sokoos helps you turn customer conversations into sales."
          />
          <div className="relative mt-10 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max animate-marquee-right motion-reduce:animate-none hover:[animation-play-state:paused]">
              {[...industries, ...industries].map((industry, index) => (
                <span
                  key={`${industry}-${index}`}
                  className="mx-2 inline-flex items-center whitespace-nowrap rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm sm:mx-3"
                  aria-hidden={index >= industries.length}
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: Bot,
      title: "Business Bot",
      desc: "Responds to customers instantly, answers questions, qualifies leads, recommends products or services, and helps move conversations toward a sale.",
    },
    {
      icon: Calendar,
      title: "Marketing Automation",
      desc: "Create and send campaigns that attract customers and keep your business top of mind.",
    },
    {
      icon: Inbox,
      title: "Unified Inbox",
      desc: "Manage customer conversations from your connected channels in one shared workspace.",
    },
    {
      icon: Users,
      title: "Human Takeover",
      desc: "Jump into any conversation whenever your team needs to take over.",
    },
    {
      icon: Package,
      title: "Products & Services",
      desc: "Give your bot your products, services, prices, FAQs, and business information so it can give customers accurate answers and recommendations.",
    },
    {
      icon: BarChart3,
      title: "Business Insights",
      desc: "See conversations, leads, conversions, and customer activity from one dashboard.",
    },
  ];
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Features"
            title="Everything Your Business Bot Needs to Sell"
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-125" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Plug,
      title: "Connect",
      desc: "Connect your business channels and set up your Sokoos workspace.",
    },
    {
      icon: Boxes,
      title: "Teach",
      desc: "Add your products, services, prices, FAQs, business hours, and business information.",
    },
    {
      icon: Brain,
      title: "Let It Work",
      desc: "Your bot responds to customers, answers questions, qualifies leads, follows up, and helps close sales.",
    },
    {
      icon: Rocket,
      title: "Grow",
      desc: "Track conversations, leads, sales, and customer activity.",
    },
  ];
  return (
    <section id="how-it-works" className="bg-surface py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="How It Works"
            title="Get Your Business Bot Working in Minutes"
          />
        </Reveal>
        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="absolute left-8 right-8 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="relative">
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-border bg-white text-primary shadow-[var(--shadow-soft)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-base font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "KSh 2,500",
      period: "/month",
      desc: "For solo businesses getting started.",
      features: [
        "1 WhatsApp number",
        "Business Bot — 500 replies/month",
        "Unified inbox",
        "Products & services catalog",
        "Email support",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Business",
      price: "KSh 5,000",
      period: "/month",
      desc: "For growing businesses selling every day.",
      features: [
        "1 WhatsApp number",
        "Business Bot — unlimited replies",
        "Human takeover — up to 5 team members",
        "Status scheduler",
        "Business insights",
        "Priority support",
      ],
      cta: "Get Started",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For larger and multi-location businesses.",
      features: [
        "Multiple WhatsApp numbers",
        "Unlimited team members",
        "Custom bot training",
        "API access & integrations",
        "Dedicated account support",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Pricing"
            title="Simple Pricing for Growing Businesses"
            subtitle="Choose a plan that fits your business and upgrade as you grow."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 ${
                  t.highlight
                    ? "border-primary bg-foreground text-background shadow-[var(--shadow-glow)]"
                    : "border-border bg-card shadow-[var(--shadow-soft)]"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    Recommended
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p
                    className={`mt-1 text-sm ${
                      t.highlight
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {t.price}
                  </span>
                  <span
                    className={`text-sm ${
                      t.highlight
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t.period}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          t.highlight ? "text-primary" : "text-primary"
                        }`}
                        strokeWidth={3}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {t.cta === "Get Started" ? (
                  <Link
                    to="/sign-up"
                    className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      t.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    {t.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <a
                    href="#"
                    className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      t.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    {t.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background shadow-[var(--shadow-elevated)] sm:p-16">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
                Put Your Business Bot to Work
              </h2>
              <p className="mt-4 text-base leading-relaxed text-background/70 sm:text-lg">
                Start attracting customers, closing sales, and bringing them
                back with Sokoos.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/sign-up"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
                >
                  Get Your Business Bot
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-14">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Your business. Your bot. More sales.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: MessageCircle, label: "WhatsApp" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {[
            {
              title: "Product",
              links: [
                ["Features", "#features"],
                ["Pricing", "#pricing"],
              ],
            },
            {
              title: "Company",
              links: [
                ["About", "#"],
                ["Contact", "#"],
              ],
            },
            {
              title: "Legal",
              links: [
                ["Privacy Policy", "#"],
                ["Terms", "#"],
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 Sokoos. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <FloatingSokoosAI />
      <main>
        <Hero />
        <Industries />
        <Features />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
