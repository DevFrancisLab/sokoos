import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Bot,
  Inbox,
  Users,
  Calendar,
  Package,
  BarChart3,
  Clock,
  MessageSquareOff,
  RefreshCw,
  Repeat,
  Database,
  Sparkles,
  Plug,
  Boxes,
  Brain,
  Rocket,
  Star,
  Facebook,
  Linkedin,
  MessageCircle,
  Heart,
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
import solutionDashboard from "@/assets/solution-dashboard.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
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
    <div className="flex items-center gap-2">
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
        <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
      </div>
      <span className="text-lg font-bold tracking-tight">Sokoos</span>
    </div>
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
            ["How it works", "#how"],
            ["Ecosystem", "#ecosystem"],
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
  const [messages, setMessages] = useState<Array<{ id: number; role: "user" | "assistant"; content: string }>>([
    {
      id: 1,
      role: "assistant",
      content: "👋 Welcome! I’m your AI Employee. Ask me about pricing, features, WhatsApp, or growth pages.",
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
    const shouldHideGreeting = typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "true";

    if (shouldHideGreeting) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsGreetingVisible(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isChatOpen) return;
    const timer = window.setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
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

    setMessages((prev) => [...prev, { id: Date.now(), role: "user", content: trimmed }]);
    setMessage("");
    setIsTyping(true);

    window.setTimeout(() => {
      const reply = getMockReply(trimmed);
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "assistant", content: reply }]);
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

      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
        {!isChatOpen && (
          <div
            className={`mb-3 w-[240px] rounded-[24px] border border-[#E5E7EB] bg-white p-4 text-left shadow-[0_20px_50px_rgba(15,23,42,0.16)] transition-all duration-300 ease-out ${
              isGreetingVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0"
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
            <p className="mt-2 text-sm font-semibold text-[#111827]">I&apos;m Sokoos AI.</p>
            <p className="mt-1 text-sm leading-5 text-[#64748B]">Need help learning about Sokoos?</p>
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
          className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#EEF2F6] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.16)] transition-transform duration-200 hover:scale-105"
          style={{ animation: "assistantPulse 2.4s ease-in-out infinite" }}
          aria-label="Open Sokoos AI"
        >
          <div className="absolute inset-0 rounded-full border border-[#22C55E]/20" />
          <div className="absolute -bottom-0.5 -right-0.5 h-4.5 w-4.5 rounded-full border-2 border-white bg-[#22C55E] shadow-sm" />
          <span className="text-3xl">🤖</span>
        </button>
      </div>

      {isChatOpen && (
        <div className="fixed inset-0 z-[110] flex items-end justify-end bg-black/10 p-4 backdrop-blur-[2px]" onClick={closeChat}>
          <div
            className={`w-full max-w-[420px] rounded-[28px] border border-[#EEF2F6] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] transition-all duration-300 ease-out ${
              isChatClosing ? "translate-y-5 scale-95 opacity-0" : "translate-y-0 scale-100 opacity-100"
            }`}
            style={{ height: "560px", animation: "floatingPanelSlide 0.25s ease-out" }}
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
                  <p className="text-sm text-[#64748B]">AI Employee</p>
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
                    <div key={entry.id} className={`flex ${entry.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 shadow-sm ${
                          entry.role === "user"
                            ? "bg-[#16A34A] text-white"
                            : "bg-white text-[#334155]"
                        }`}
                        style={{ animation: "floatingPanelSlide 0.25s ease-out" }}
                      >
                        <p className="whitespace-pre-line">{entry.content}</p>
                      </div>
                    </div>
                  ))}

                  {messages.length === 1 && (
                    <div className="flex justify-start">
                      <div className="max-w-full rounded-2xl bg-white p-3 shadow-sm">
                        <p className="text-sm font-medium text-[#111827]">Try one of these:</p>
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
                          <span className="h-2 w-2 animate-bounce rounded-full bg-[#94A3B8]" style={{ animationDelay: "0ms" }} />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-[#94A3B8]" style={{ animationDelay: "120ms" }} />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-[#94A3B8]" style={{ animationDelay: "240ms" }} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-2 shadow-sm">
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
      className="relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="container-page relative pt-16 pb-10 sm:pt-24 sm:pb-16">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full bg-[#ECFDF5] px-4 py-2 text-sm font-semibold text-[#166534] shadow-sm shadow-[#ECFDF5]/60">
              ✨ Acquire • Convert • Retain
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Never Miss a <span className="text-[#16A34A]">Lead</span> or Lose a{" "}
              <span className="text-[#16A34A]">Customer</span> Again
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Your AI employee that acquires customers, converts leads into sales, and retains customers across every channel.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                to="/sign-up"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="mt-4 flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row">
              <span className="inline-flex items-center gap-2 text-[#166534]">
                <BarChart3 className="h-4 w-4 text-[#16A34A]" />
                Acquire Customers
              </span>
              <span className="hidden sm:inline">→</span>
              <span className="inline-flex items-center gap-2 text-[#166534]">
                <MessageCircle className="h-4 w-4 text-[#16A34A]" />
                Convert Leads
              </span>
              <span className="hidden sm:inline">→</span>
              <span className="inline-flex items-center gap-2 text-[#166534]">
                <Heart className="h-4 w-4 text-[#16A34A]" />
                Retain Customers
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto mt-14 max-w-6xl">
            <div className="absolute inset-x-8 top-8 -z-10 h-full rounded-3xl bg-primary/10 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-elevated)]">
              <img
                src={heroDashboard}
                alt="Sokoos AI Employee dashboard showing conversations, customer responses, scheduled status posts and performance"
                width={1600}
                height={1120}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mx-auto mt-16 max-w-4xl">
            <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Helping Businesses Grow Across Industries
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground/80">
              {[
                "Internet Providers",
                "Retail Shops",
                "Hardware Stores",
                "Schools",
                "Clinics",
                "Real Estate",
                "Restaurants",
              ].map((s, i) => (
                <span key={s} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-border" />}
                  {s}
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

function Problem() {
  const items = [
    { icon: MessageSquareOff, title: "Missed Sales", desc: "Potential customers move on when they don't receive a quick response." },
    { icon: Clock, title: "Slow Response Times", desc: "Delayed replies reduce trust and lower your chances of closing sales." },
    { icon: Repeat, title: "Repetitive Customer Questions", desc: "Your team spends valuable time answering the same questions instead of growing the business." },
    { icon: RefreshCw, title: "Missed Follow-ups", desc: "Without consistent follow-ups, qualified leads are easily forgotten." },
    { icon: Database, title: "No Customer Visibility", desc: "Customer conversations and information are scattered across different devices and team members." },
    { icon: Users, title: "Limited Capacity", desc: "Your business can only grow as fast as your team can respond to customers." },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Why businesses struggle to grow"
            title="Why Growing Businesses Lose Customers"
            subtitle="Growing a business shouldn't mean losing customers. Slow responses, missed follow-ups, scattered conversations, and limited customer engagement quietly reduce sales every day."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const bullets = [
    "Acquire new customers through your digital channels",
    "Respond instantly on WhatsApp with AI",
    "Qualify leads and close more sales",
    "Book appointments automatically",
    "Follow up with customers without manual work",
    "Retain customers with ongoing engagement and insights",
  ];
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                How Sokoos helps you grow
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                How <span className="text-primary">Sokoos Helps You Acquire, Convert & Retain Customers</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Sokoos brings together AI, WhatsApp, automation, and customer engagement tools to help your business attract new customers, convert more leads into sales, and build long-term customer relationships.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-elevated)]">
                <img
                  src={solutionDashboard}
                  alt="Sokoos unified WhatsApp inbox with an AI Employee and product catalogue"
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Bot, title: "AI Employee", desc: "Responds instantly, qualifies leads, and helps customers make buying decisions.", emoji: "🤖" },
    { icon: Inbox, title: "Unified Inbox", desc: "Manage every customer conversation from one shared workspace.", emoji: "💬" },
    { icon: Users, title: "Human Takeover", desc: "Jump into any conversation whenever your team wants to assist.", emoji: "👥" },
    { icon: Calendar, title: "Marketing Automation", desc: "Create and schedule WhatsApp marketing campaigns that keep customers engaged.", emoji: "📅" },
    { icon: Package, title: "Product Catalog", desc: "Showcase products and services that your AI can recommend instantly.", emoji: "📦" },
    { icon: BarChart3, title: "Business Insights", desc: "Track customer engagement, conversions, and business growth from one dashboard.", emoji: "📊" },
  ];
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Features"
            title="Everything You Need to Acquire, Convert & Retain Customers"
            subtitle="Sokoos gives growing businesses the tools to attract customers, automate conversations, close more sales, and build lasting customer relationships."
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
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
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
    { icon: Plug, title: "Connect Your Business", desc: "Connect your WhatsApp Business account and set up your workspace." },
    { icon: Boxes, title: "Train Your AI Employee", desc: "Add products, services, FAQs, business hours and company information." },
    { icon: Brain, title: "Launch Customer Automation", desc: "Your AI starts responding, qualifying leads, booking appointments and supporting customers." },
    { icon: Rocket, title: "Grow With Insights", desc: "Track conversations, leads, sales performance and continuously improve your business." },
  ];
  return (
    <section id="how" className="bg-surface py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="How it works"
            title="Start Growing in Minutes"
            subtitle="Set up Sokoos in minutes and let AI start helping your business acquire, convert, and retain customers."
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
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 text-base font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  const modules = [
    { name: "AI Employee", status: "Available Today", desc: "Respond instantly and qualify leads 24/7.", icon: Bot },
    { name: "Landing Pages", status: "Coming Soon", desc: "Generate beautiful business websites in minutes.", icon: Sparkles },
    { name: "Marketing", status: "Coming Soon", desc: "Launch campaigns across WhatsApp and social media.", icon: MessageCircle },
    { name: "CRM", status: "Coming Soon", desc: "Manage customer relationships in one place.", icon: Users },
    { name: "Payments", status: "Coming Soon", desc: "Collect payments seamlessly from customers.", icon: Package },
    { name: "Analytics", status: "Coming Soon", desc: "Understand customer behaviour and business performance.", icon: BarChart3 },
  ];
  return (
    <section id="ecosystem" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="The Sokoos Growth Platform"
            title="One Platform. Every Stage of Customer Growth."
            subtitle="Sokoos helps businesses acquire customers, convert leads into sales, and retain loyal customers through AI-powered automation."
          />
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Central node */}
          <Reveal>
            <div className="mx-auto flex w-fit items-center gap-3 rounded-2xl border border-border bg-white px-6 py-4 shadow-[var(--shadow-elevated)]">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-lg font-bold">Sokoos</div>
                <div className="text-xs text-muted-foreground">One platform. Every workflow.</div>
              </div>
            </div>
          </Reveal>

          {/* Connectors + modules */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => {
              const available = m.status === "Available Today";
              return (
                <Reveal key={m.name} delay={i * 60}>
                  <div
                    className={`group relative h-full rounded-2xl border p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 ${
                      available
                        ? "border-primary/30 bg-primary-soft"
                        : "border-border bg-card"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`grid h-10 w-10 place-items-center rounded-xl ${
                          available
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        <m.icon className="h-5 w-5" />
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                          available
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {m.status}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "James",
      role: "Internet Provider",
      quote:
        "We went from losing leads to closing them. Instant responses mean more customers stay with us, and our sales doubled without hiring a team.",
    },
    {
      name: "Grace",
      role: "Boutique Owner",
      quote:
        "I save 10 hours a week on customer responses. More time to grow the business, and customers love getting answers instantly. My revenue is up 40%.",
    },
    {
      name: "David",
      role: "Hardware Store Manager",
      quote:
        "Customers get instant answers 24/7. Our close rate jumped by 60%, and I'm not spending my evenings answering the same questions.",
    },
  ];
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader eyebrow="Loved by SMEs" title="Real businesses. Real results." />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-sm font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
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
      desc: "For solo owners just getting started.",
      features: [
        "1 WhatsApp number",
        "AI Employee (500 replies/mo)",
        "Unified inbox",
        "Product catalog",
        "Email support",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Business",
      price: "KSh 5,000",
      period: "/month",
      desc: "For growing teams who sell every day.",
      features: [
        "1 WhatsApp number",
        "AI Employee (unlimited replies)",
        "Human takeover for 5 team members",
        "Status scheduler",
        "Business insights dashboard",
        "Priority support",
      ],
      cta: "Get Started",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For multi-location businesses.",
      features: [
        "Multiple WhatsApp numbers",
        "Unlimited team members",
        "Custom AI training",
        "API access & integrations",
        "Dedicated account manager",
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
            subtitle="Choose a plan that grows with your business."
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
                      t.highlight ? "text-background/70" : "text-muted-foreground"
                    }`}
                  >
                    {t.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{t.price}</span>
                  <span
                    className={`text-sm ${
                      t.highlight ? "text-background/70" : "text-muted-foreground"
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
                Start Growing Your Business with Sokoos
              </h2>
              <p className="mt-4 text-base leading-relaxed text-background/70 sm:text-lg">
                From attracting new customers to closing sales and building customer loyalty, Sokoos helps your business grow with AI-powered automation.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/sign-up"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
                >
                  Get Started
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
              Helping businesses acquire, convert, and retain customers.
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
            { title: "Product", links: [["Features", "#features"], ["Pricing", "#pricing"], ["Ecosystem", "#ecosystem"]] },
            { title: "Company", links: [["Contact", "#"], ["About", "#"]] },
            { title: "Legal", links: [["Privacy Policy", "#"], ["Terms", "#"]] },
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
          <span>© {new Date().getFullYear()} Sokoos. All rights reserved.</span>
          <span>Made for modern businesses.</span>
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
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Ecosystem />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
