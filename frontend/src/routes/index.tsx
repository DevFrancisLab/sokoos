import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
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
          <a
            href="/dashboard"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary sm:inline-flex"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Start free
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
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
              Acquire, Convert & Retain <span className="text-[#16A34A]">More Customers</span> with AI
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sokoos helps businesses attract new customers, respond instantly on WhatsApp, close more sales, automate follow-ups, and turn one-time buyers into loyal customers—all from one platform.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
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
                alt="Sokoos WhatsApp assistant dashboard showing conversations, AI responses, scheduled status posts and analytics"
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
                  alt="Sokoos unified WhatsApp inbox with AI assistant and product catalog"
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
            subtitle="Sokoos gives African businesses the tools to attract customers, automate conversations, close more sales, and build lasting customer relationships."
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
        "AI Assistant (500 replies/mo)",
        "Unified inbox",
        "Product catalog",
        "Email support",
      ],
      cta: "Start Free Trial",
      highlight: false,
    },
    {
      name: "Business",
      price: "KSh 5,000",
      period: "/month",
      desc: "For growing teams who sell every day.",
      features: [
        "1 WhatsApp number",
        "AI Assistant (unlimited replies)",
        "Human takeover for 5 team members",
        "Status scheduler",
        "Business insights dashboard",
        "Priority support",
      ],
      cta: "Start Free Trial",
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
            subtitle="Choose a plan that grows with your business. Start free for 14 days."
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
                <a
                  href="#cta"
                  className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    t.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {t.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
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
                Never Miss Another Customer Again
              </h2>
              <p className="mt-4 text-base leading-relaxed text-background/70 sm:text-lg">
                Let Sokoos handle your WhatsApp conversations while you focus on growing your
                business.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-white/10"
                >
                  Book Demo
                </a>
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
              The Operating System for African Businesses.
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
          <span>Made for African SMEs.</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
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
