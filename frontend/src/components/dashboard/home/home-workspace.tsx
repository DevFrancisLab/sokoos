import { ArrowRight, Bot, CheckCircle2, CircleAlert, MessageCircle, UsersRound } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface HomeWorkspaceProps {
  userName: string;
  aiEmployeeLaunched: boolean;
  aiEnabled: boolean;
  attentionConversations: Array<{ id: string; name: string | null; source: string; needsAttention?: boolean }>;
  CARD: string;
  SECTION_HEADING: string;
  CARD_TITLE: string;
}

const todayMetrics = [
  { label: "Conversations", Icon: MessageCircle },
  { label: "Customers", Icon: UsersRound },
  { label: "Sales", Icon: CheckCircle2 },
];

const getTimeBasedGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

type AiEmployeeStatus = "Active" | "Needs attention" | "Not set up" | "Paused";

const aiStatusStyles: Record<AiEmployeeStatus, { badge: string; dot: string; description: string }> = {
  Active: {
    badge: "bg-[#ECFDF5] text-[#15803D]",
    dot: "bg-[#22C55E]",
    description: "Your AI employee is working and handling customer interactions.",
  },
  "Needs attention": {
    badge: "bg-[#FFF7ED] text-[#C2410C]",
    dot: "bg-[#F97316]",
    description: "Your AI employee needs your review before it can continue.",
  },
  "Not set up": {
    badge: "bg-[#F1F5F9] text-[#475569]",
    dot: "bg-[#94A3B8]",
    description: "Set up your AI employee to start handling customer interactions.",
  },
  Paused: {
    badge: "bg-[#FEF2F2] text-[#B91C1C]",
    dot: "bg-[#EF4444]",
    description: "Your AI employee is paused and is not handling customer interactions.",
  },
};

export function HomeWorkspace({ userName, aiEmployeeLaunched, aiEnabled, attentionConversations, CARD, SECTION_HEADING, CARD_TITLE }: HomeWorkspaceProps) {
  const firstName = userName.trim().split(/\s+/)[0] || "there";
  const greeting = getTimeBasedGreeting();
  const actionableItems = attentionConversations.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention);
  const aiStatus: AiEmployeeStatus = !aiEmployeeLaunched ? "Not set up" : !aiEnabled ? "Paused" : actionableItems.length > 0 ? "Needs attention" : "Active";
  const statusDetails = aiStatusStyles[aiStatus];

  return (
    <div className="h-full overflow-y-auto space-y-6 pr-2">
      <header className="px-1 pt-2">
        <p className={SECTION_HEADING}>Home</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-[#111827] sm:text-4xl">{greeting}, {firstName} 👋</h1>
        <p className="mt-2 text-sm leading-6 text-[#64748B] sm:text-base">Here&apos;s what&apos;s happening with your business.</p>
      </header>

      <section className={CARD} aria-labelledby="ai-employee-heading">
        {!aiEmployeeLaunched ? (
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#15803D]">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h2 id="ai-employee-heading" className={CARD_TITLE}>AI Employee</h2>
                <p className="text-sm leading-6 text-[#64748B]">Complete your setup so Sokoos can start working for your business.</p>
              </div>
            </div>
            <Link to="/dashboard/ai" className="inline-flex shrink-0 items-center gap-1 rounded-md text-sm font-semibold text-[#047857] transition hover:text-[#065F46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2">
              Continue setup <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#15803D]">
                  <Bot className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 id="ai-employee-heading" className={CARD_TITLE}>AI Employee</h2>
                  <p className="text-sm leading-6 text-[#64748B]">{statusDetails.description}</p>
                </div>
              </div>
              <div className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${statusDetails.badge}`}>
                <span className={`h-2 w-2 rounded-full ${statusDetails.dot}`} /> {aiStatus}
              </div>
            </div>
            <Link to="/dashboard/ai" className="mt-5 inline-flex items-center gap-1 rounded-md text-sm font-semibold text-[#047857] transition hover:text-[#065F46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2">
              View AI Employee <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </>
        )}
      </section>

      <section className={CARD} aria-labelledby="attention-heading">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="attention-heading" className={CARD_TITLE}>Needs your attention</h2>
          </div>
          {actionableItems.length > 0 ? (
            <Link to="/dashboard/inbox" className="inline-flex shrink-0 items-center gap-1 rounded-md text-sm font-semibold text-[#047857] transition hover:text-[#065F46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2">
              View <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
        {actionableItems.length > 0 ? (
          <div className="mt-4 space-y-2">
            {actionableItems.slice(0, 3).map((conversation) => (
              <Link
                key={conversation.id}
                to="/dashboard/inbox"
                className="flex items-center gap-3 rounded-xl bg-[#FFF7ED] px-3 py-3 text-sm transition hover:bg-[#FFEDD5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2"
              >
                <CircleAlert className="h-4 w-4 shrink-0 text-[#C2410C]" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate font-medium text-[#111827]">
                  Conversation{conversation.name ? ` with ${conversation.name}` : ""} needs a response
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#C2410C]" aria-hidden="true" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-4 flex items-start gap-3 rounded-xl bg-[#F8FAFC] px-4 py-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#16A34A]" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#111827]">You&apos;re all caught up.</p>
              <p className="mt-1 text-sm leading-6 text-[#64748B]">Your AI employee is handling everything.</p>
            </div>
          </div>
        )}
      </section>

      <section aria-labelledby="today-heading">
        <div className="mb-4 px-1">
          <h2 id="today-heading" className={CARD_TITLE}>Today</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {todayMetrics.map(({ label, Icon }) => (
            <article key={label} className="rounded-[20px] border border-[#E5E7EB] bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-[#64748B]">{label}</p>
                <Icon className="h-5 w-5 text-[#16A34A]" aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm font-medium text-[#64748B]">Not available</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-4 sm:px-5" aria-labelledby="performance-heading">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="performance-heading" className="text-base font-semibold text-[#111827]">Performance</h2>
            <p className="mt-1 text-sm leading-6 text-[#64748B]">A summary of your conversations, customers, and sales will appear when data is available.</p>
          </div>
          <Link to="/dashboard/performance" className="inline-flex shrink-0 items-center gap-1 rounded-md text-sm font-semibold text-[#047857] transition hover:text-[#065F46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2">
            View Performance <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
