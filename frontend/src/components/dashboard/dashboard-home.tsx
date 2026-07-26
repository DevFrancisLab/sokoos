import type { ReactNode } from "react";
import {
  Bot,
  CheckCircle2,
  Circle,
  MessageCircleMore,
  Sparkles,
  Smartphone,
  UserRoundCheck,
} from "lucide-react";

type StatCard = {
  label: string;
  value: string;
  delta: string;
};

type ActivityItem = {
  title: string;
  description: string;
  time: string;
  icon: ReactNode;
  badgeClass: string;
};

type DashboardHomeProps = {
  statCards: StatCard[];
  activityTimeline: ActivityItem[];
  hasCompletedOnboarding: boolean;
  CARD: string;
  SECTION_HEADING: string;
  PAGE_TITLE: string;
  SECONDARY: string;
  CARD_TITLE: string;
};

export default function DashboardHome({
  hasCompletedOnboarding,
  CARD,
  SECTION_HEADING,
  PAGE_TITLE,
  SECONDARY,
  CARD_TITLE,
}: DashboardHomeProps) {
  const onboardingCards = [
    {
      id: "ai",
      icon: Bot,
    },
    {
      id: "whatsapp",
      icon: Smartphone,
    },
    {
      id: "knowledge",
      icon: UserRoundCheck,
    },
    {
      id: "performance",
      icon: MessageCircleMore,
    },
  ];

  const checklistItems = [
    { label: "Connect WhatsApp", done: true },
    { label: "Complete Business Profile", done: true },
    { label: "Teach Sokoo about your business", done: true },
    { label: "Test your AI", done: false },
    { label: "Enable AI Employee", done: true },
  ];

  const quickActions = [
    {
      title: "Open Inbox",
      description: "Respond to customers waiting for you.",
      color: "bg-blue-50 text-blue-700",
    },
    {
      title: "Teach Sokoo",
      description: "Improve AI knowledge.",
      color: "bg-green-50 text-green-700",
    },
    {
      title: "Test AI",
      description: "See how your AI responds.",
      color: "bg-purple-50 text-purple-700",
    },
    {
      title: "Connect WhatsApp",
      description: "Link another business number.",
      color: "bg-orange-50 text-orange-700",
    },
  ];

  const recentActivities = [
    {
      title: "AI closed a sale",
      time: "2 min ago",
    },
    {
      title: "Customer booked installation",
      time: "9 min ago",
    },
    {
      title: "AI answered pricing question",
      time: "18 min ago",
    },
    {
      title: "Business knowledge updated",
      time: "Today",
    },
  ];

  const insights = [
    "Most customers asked about Business Package today.",
    "AI confidence improved by 4% this week.",
    "Customers respond best between 8 AM and 10 AM.",
  ];

  return (
    <div className="space-y-6">
      <div
        className={`${CARD} border-[#ECFDF5] bg-linear-to-br from-[#F0FDF4] to-white`}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className={SECTION_HEADING}>Home</p>
            <h1 className={PAGE_TITLE}>
              Get your AI Employee ready to represent your business
            </h1>
            <p className={`${SECONDARY} max-w-xl`}>
              This view focuses on onboarding progress so a business owner can
              see what is connected, what is complete, and what should be done
              next.
            </p>
          </div>
          <div className="rounded-[24px] border border-[#D1FAE5] bg-white/80 px-4 py-3 text-sm text-[#065F46]">
            <div className="flex items-center gap-2 font-semibold">
              <Sparkles className="h-4 w-4" />
              {hasCompletedOnboarding
                ? "Ready to go live"
                : "Onboarding in progress"}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {onboardingCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.id}
              className={`${CARD} p-6 hover:border-[#22C55E]/30 transition-all duration-300`}
            >
              {card.id === "ai" && (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">AI Employee</p>

                      <h3 className="mt-1 text-2xl font-bold text-slate-900">
                        Active
                      </h3>
                    </div>

                    <div className="h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center">
                      <Bot className="h-6 w-6 text-green-600" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Confidence</span>

                      <span className="font-semibold">94%</span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full w-[94%] bg-green-500 rounded-full"></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Last reply</span>

                      <span>2 mins ago</span>
                    </div>
                  </div>
                </>
              )}

              {card.id === "whatsapp" && (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">WhatsApp</p>

                      <h3 className="mt-1 text-2xl font-bold">Connected</h3>
                    </div>

                    <div className="h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-green-600" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="rounded-xl bg-green-50 p-3">
                      <p className="font-medium text-green-700">
                        Business Number
                      </p>

                      <p className="text-sm text-slate-600 mt-1">
                        +254 700 123 456
                      </p>
                    </div>
                  </div>
                </>
              )}

              {card.id === "knowledge" && (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">AI Knowledge</p>

                      <h3 className="mt-1 text-2xl font-bold">83%</h3>
                    </div>

                    <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                      <UserRoundCheck className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full w-[83%] rounded-full bg-blue-500"></div>
                    </div>

                    <p className="mt-3 text-sm text-slate-500">
                      Teach your AI a little more to reach 100%.
                    </p>
                  </div>
                </>
              )}

              {card.id === "performance" && (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">
                        Today's Performance
                      </p>

                      <h3 className="mt-1 text-2xl font-bold">24</h3>
                    </div>

                    <div className="h-12 w-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                      <MessageCircleMore className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-xs text-slate-500">Resolved</p>

                      <p className="font-bold">20</p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-xs text-slate-500">Escalated</p>

                      <p className="font-bold">4</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className={`${CARD}`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className={SECTION_HEADING}>Onboarding checklist</p>
            <h2 className={CARD_TITLE}>Finish the setup steps below</h2>
          </div>
          <div className="rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#047857]">
            {hasCompletedOnboarding ? "Complete" : "In progress"}
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {checklistItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${item.done ? "bg-[#ECFDF5] text-[#047857]" : "bg-[#F3F4F6] text-[#64748B]"}`}
                >
                  {item.done ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Circle className="h-4 w-4" />
                  )}
                </div>
                <span className="font-medium text-[#111827]">{item.label}</span>
              </div>
              <span
                className={`text-sm font-semibold ${item.done ? "text-[#047857]" : "text-[#64748B]"}`}
              >
                {item.done ? "Complete" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
