import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type PerformanceSection = "overview" | "conversations" | "sales" | "customer-experience" | "issues";

type Conversation = {
  id: string;
  source: string;
  needsAttention?: boolean;
  name?: string | null;
  message: string;
};

type Customer = {
  leadStatus: string;
  name: string;
};

type Product = {
  active?: boolean;
};

type IntegrationItem = {
  id: string;
};

type PerformanceWorkspaceProps = {
  setSelected: (value: string) => void;
  setActiveWorkspaceSection: (section: any) => void;
  INBOX_CONVERSATIONS: Conversation[];
  CUSTOMERS: Customer[];
  PRODUCTS: Product[];
  playbooks: unknown[];
  getAllIntegrationItems: () => IntegrationItem[];
  getIntegrationStatus: (id: string) => string;
  CARD: string;
  PERFORMANCE_METRICS: Array<{ label: string; value: string; trend: Array<number>; delta: string; progress: number }>;
  KNOWLEDGE_USAGE: Array<{ label: string; percent: number }>;
  PERFORMANCE_TOP_QUESTIONS: string[];
  MOST_VIEWED_PRODUCTS: Array<{ name: string; views: number }>;
  RECENT_AI_ACTIVITY: Array<{ type: string; title: string; time: string }>;
};

export function PerformanceWorkspace({
  setSelected,
  setActiveWorkspaceSection,
  INBOX_CONVERSATIONS,
  CUSTOMERS,
  PRODUCTS,
  playbooks,
  getAllIntegrationItems,
  getIntegrationStatus,
  CARD,
  PERFORMANCE_METRICS,
  KNOWLEDGE_USAGE,
  PERFORMANCE_TOP_QUESTIONS,
  MOST_VIEWED_PRODUCTS,
  RECENT_AI_ACTIVITY,
}: PerformanceWorkspaceProps) {
  const [performanceSection, setPerformanceSection] = useState<PerformanceSection>("overview");

  return (
    <div className={`space-y-6 ${CARD}`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Performance</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#111827]">See how your AI employee is doing.</h2>
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            Review live workspace activity, recent conversations, lead progress, and areas to improve without switching into training mode.
          </p>
        </div>
      </div>

      <Tabs value={performanceSection} onValueChange={(value) => setPerformanceSection(value as PerformanceSection)} className="w-full">
        <TabsList className="grid w-full grid-cols-2 gap-2 sm:grid-cols-5">
          {[
            { value: "overview", label: "Overview" },
            { value: "conversations", label: "Conversations" },
            { value: "sales", label: "Sales" },
            { value: "customer-experience", label: "Customer Experience" },
            { value: "issues", label: "Issues & Improvements" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-[20px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-medium text-[#475569] data-[state=active]:border-[#22C55E] data-[state=active]:bg-[#ECFDF5] data-[state=active]:text-[#166534]"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">AI EMPLOYEE ACTIVITY</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  This view uses the current inbox and customer data already present in the dashboard.
                </p>
              </div>
              <div className="rounded-full bg-[#F9FAFB] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]">
                Based on current workspace data
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  label: "Conversations handled",
                  value: INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "ai_handling" || conversation.source === "ai_handled").length.toString(),
                  detail: "Conversations currently marked as AI handling or AI handled.",
                },
                {
                  label: "Leads captured",
                  value: CUSTOMERS.length.toString(),
                  detail: "Customer leads recorded in the current workspace.",
                },
                {
                  label: "Human handoffs",
                  value: INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).length.toString(),
                  detail: "Conversations flagged for follow-up or escalation.",
                },
                {
                  label: "Tasks completed",
                  value: "No tracked tasks",
                  detail: "No completed-task history is available in the current data.",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                  <p className="text-sm font-medium text-[#6B7280]">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-[#111827]">{item.value}</p>
                  <p className="mt-2 text-sm text-[#6B7280]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">AI EFFECTIVENESS</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    label: "Average response time",
                    value: "No response-time data",
                    detail: "Response timing is not being tracked in the current workspace.",
                  },
                  {
                    label: "Resolution rate",
                    value: "No resolution data",
                    detail: "No resolved-conversation metric is available yet.",
                  },
                  {
                    label: "Customer satisfaction",
                    value: "No satisfaction data",
                    detail: "No satisfaction feedback has been captured yet.",
                  },
                  {
                    label: "Escalation rate",
                    value: "No escalation metric",
                    detail: "Escalation history is not tracked in the current data.",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                    <p className="text-sm font-medium text-[#6B7280]">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-[#111827]">{item.value}</p>
                    <p className="mt-2 text-sm text-[#6B7280]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">BUSINESS IMPACT</p>
              <div className="mt-4 grid gap-3">
                {[
                  {
                    label: "Sales influenced",
                    value: "No sales influence data",
                    detail: "No sales outcome data is available in the current workspace.",
                  },
                  {
                    label: "Follow-ups completed",
                    value: "No completed follow-ups",
                    detail: "No completed follow-ups are not tracked in the current data.",
                  },
                  {
                    label: "Qualified leads",
                    value: CUSTOMERS.filter((customer) => customer.leadStatus !== "Cold lead").length.toString(),
                    detail: "Hot and warm leads currently recorded.",
                  },
                  {
                    label: "Conversions",
                    value: "No conversion data",
                    detail: "No conversion events have been logged yet.",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                    <p className="text-sm font-medium text-[#6B7280]">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-[#111827]">{item.value}</p>
                    <p className="mt-2 text-sm text-[#6B7280]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">NEEDS ATTENTION</p>
            <div className="mt-4 space-y-3">
              {INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).length > 0 ? (
                INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).map((conversation) => (
                  <div key={conversation.id} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-[#111827]">{conversation.name || "Unknown contact"}</p>
                        <p className="mt-1 text-sm text-[#6B7280]">{conversation.message}</p>
                      </div>
                      <span className="rounded-full bg-[#FEF2F2] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#991B1B]">
                        Needs review
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-[20px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]">
                  No performance issues detected yet.
                </div>
              )}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="conversations" className="mt-6 space-y-6">
          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">CONVERSATION PERFORMANCE</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  This view uses the conversation activity already available in the current inbox and shows only what can be supported by that data.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelected("Inbox")}
                className="inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]"
              >
                Open Conversations workspace
              </button>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {[
                {
                  label: "Conversations handled",
                  value: INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "ai_handling" || conversation.source === "ai_handled").length.toString(),
                  detail: "Current conversations marked as AI handling or AI handled.",
                },
                {
                  label: "Resolved conversations",
                  value: INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "ai_handled").length.toString(),
                  detail: "Conversations currently marked as AI handled.",
                },
                {
                  label: "Human handoffs",
                  value: INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).length.toString(),
                  detail: "Conversations flagged for follow-up or review.",
                },
                {
                  label: "Unresolved conversations",
                  value: Math.max(0, INBOX_CONVERSATIONS.length - INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "ai_handled").length).toString(),
                  detail: "Open conversations that are not marked as AI handled.",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                  <p className="text-sm font-medium text-[#6B7280]">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-[#111827]">{item.value}</p>
                  <p className="mt-2 text-sm text-[#6B7280]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">RESPONSE QUALITY</p>
              <div className="mt-4 space-y-3">
                {[
                  {
                    label: "Average response time",
                    value: "No response-time data",
                    detail: "Response timing is not tracked in the current workspace.",
                  },
                  {
                    label: "Customer satisfaction",
                    value: "No satisfaction data",
                    detail: "No satisfaction feedback has been captured yet.",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                    <p className="text-sm font-medium text-[#6B7280]">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-[#111827]">{item.value}</p>
                    <p className="mt-2 text-sm text-[#6B7280]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">FREQUENTLY ESCALATED TOPICS</p>
              <div className="mt-4 space-y-3">
                {(() => {
                  const flaggedTopics = Array.from(
                    new Set(
                      INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention)
                        .map((conversation) => {
                          const message = conversation.message.toLowerCase();
                          if (message.includes("pricing") || message.includes("price")) return "Pricing questions";
                          if (message.includes("availability") || message.includes("product")) return "Product availability";
                          if (message.includes("installation")) return "Installation requests";
                          if (message.includes("pause")) return "AI control requests";
                          return "Follow-up requests";
                        }),
                    ),
                  );

                  return flaggedTopics.length > 0 ? (
                    flaggedTopics.map((topic) => (
                      <div key={topic} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]">
                        {topic}
                      </div>
                    ))
                  ) : (
                    <div className="rounded-[20px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]">
                      No conversation performance data yet. Once your AI employee starts handling customer conversations, performance insights will appear here.
                    </div>
                  );
                })()}
              </div>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="sales" className="mt-6 space-y-6">
          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">SALES PERFORMANCE</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  This view uses the current lead, conversation, and catalogue data already in the workspace.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelected("AI Employee");
                    setActiveWorkspaceSection("Sales Playbooks");
                  }}
                  className="inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]"
                >
                  Open Sales Playbook
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelected("AI Employee");
                    setActiveWorkspaceSection("Catalogue");
                  }}
                  className="inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]"
                >
                  Open Catalogue
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {[
                {
                  label: "Leads engaged",
                  value: INBOX_CONVERSATIONS.filter((conversation) => {
                    const message = (conversation.name || "").toLowerCase();
                    return CUSTOMERS.some((customer) => message.includes(customer.name.toLowerCase()) || customer.name.toLowerCase().includes(message));
                  }).length.toString(),
                  detail: "Customer conversations that match existing lead records.",
                },
                {
                  label: "Leads qualified",
                  value: CUSTOMERS.filter((customer) => customer.leadStatus !== "Cold lead").length.toString(),
                  detail: "Warm and hot leads currently recorded in the workspace.",
                },
                {
                  label: "Recommendations made",
                  value: "No tracked recommendations",
                  detail: "No recommendation activity is available in the current data.",
                },
                {
                  label: "Quotes/offers sent",
                  value: "No tracked offers",
                  detail: "No sent-offer history is available in the current data.",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                  <p className="text-sm font-medium text-[#6B7280]">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-[#111827]">{item.value}</p>
                  <p className="mt-2 text-sm text-[#6B7280]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">SALES SIGNALS</p>
              <div className="mt-4 space-y-3">
                {[
                  {
                    label: "Follow-ups completed",
                    value: "No follow-up history",
                    detail: "Completed follow-up activity is not tracked in the current workspace.",
                  },
                  {
                    label: "Conversions",
                    value: "No conversion data",
                    detail: "No conversion events have been logged yet.",
                  },
                  {
                    label: "Conversion rate",
                    value: "No conversion rate",
                    detail: "Conversion rate cannot be calculated without logged sales outcomes.",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                    <p className="text-sm font-medium text-[#6B7280]">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-[#111827]">{item.value}</p>
                    <p className="mt-2 text-sm text-[#6B7280]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">SALES CONTEXT</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]">
                  Sales performance will appear here once the AI has handled enough customer interactions to create measurable sales activity.
                </div>
                <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]">
                  Review the existing Sales Playbooks and Catalogue workspaces to strengthen the buyer journey and product guidance the AI uses.
                </div>
              </div>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="customer-experience" className="mt-6 space-y-6">
          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">CUSTOMER EXPERIENCE</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  This view uses existing conversation and customer data only. It does not invent ratings or sentiment scores.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelected("Inbox")}
                  className="inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]"
                >
                  Open Conversations
                </button>
                <button
                  type="button"
                  onClick={() => setSelected("Customers")}
                  className="inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]"
                >
                  Open Customers
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {[
                {
                  label: "Customer satisfaction",
                  value: "No satisfaction data",
                  detail: "No satisfaction feedback has been captured yet.",
                },
                {
                  label: "Positive feedback",
                  value: INBOX_CONVERSATIONS.filter((conversation) => conversation.message.toLowerCase().includes("thanks") || conversation.message.toLowerCase().includes("thank you") || conversation.message.toLowerCase().includes("great")).length.toString(),
                  detail: "Conversations that include positive wording in the current inbox.",
                },
                {
                  label: "Negative feedback",
                  value: INBOX_CONVERSATIONS.filter((conversation) => conversation.message.toLowerCase().includes("problem") || conversation.message.toLowerCase().includes("issue") || conversation.message.toLowerCase().includes("pause")).length.toString(),
                  detail: "Conversations that mention a problem or request for change.",
                },
                {
                  label: "Unresolved requests",
                  value: Math.max(0, INBOX_CONVERSATIONS.length - INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "ai_handled").length).toString(),
                  detail: "Conversations that are still open or not marked as AI handled.",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                  <p className="text-sm font-medium text-[#6B7280]">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-[#111827]">{item.value}</p>
                  <p className="mt-2 text-sm text-[#6B7280]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">HUMAN ESCALATIONS</p>
              <div className="mt-4 space-y-3">
                {INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).length > 0 ? (
                  INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).map((conversation) => (
                    <div key={conversation.id} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                      <p className="text-sm font-semibold text-[#111827]">{conversation.name || "Unknown contact"}</p>
                      <p className="mt-1 text-sm text-[#6B7280]">{conversation.message}</p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[20px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]">
                    No human escalations are currently flagged.
                  </div>
                )}
              </div>
            </section>

            <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">FREQUENTLY REPEATED QUESTIONS</p>
              <div className="mt-4 space-y-3">
                {(() => {
                  const repeatedQuestions = Array.from(
                    new Set(
                      INBOX_CONVERSATIONS.filter((conversation) => conversation.message.toLowerCase().includes("pricing") || conversation.message.toLowerCase().includes("price") || conversation.message.toLowerCase().includes("product") || conversation.message.toLowerCase().includes("installation"))
                        .map((conversation) => {
                          const message = conversation.message.toLowerCase();
                          if (message.includes("pricing") || message.includes("price")) return "Pricing questions";
                          if (message.includes("product") || message.includes("availability")) return "Product availability";
                          if (message.includes("installation")) return "Installation requests";
                          return "Other questions";
                        }),
                    ),
                  );

                  return repeatedQuestions.length > 0 ? (
                    repeatedQuestions.map((question) => (
                      <div key={question} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]">
                        {question}
                      </div>
                    ))
                  ) : (
                    <div className="rounded-[20px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]">
                      Customer experience insights will appear once your AI employee has handled enough conversations.
                    </div>
                  );
                })()}
              </div>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="issues" className="mt-6 space-y-6">
          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">ISSUES & IMPROVEMENTS</p>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                These issues are based only on current conversations, catalog state, playbooks, and escalation data already present in the workspace.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {(() => {
                const issueGroups = [
                  {
                    title: "Knowledge",
                    items: [
                      {
                        issue: "Customers are asking about pricing, product availability, or related product details.",
                        why: "These conversations point to a likely knowledge gap in the AI's current answers.",
                        source: "Knowledge",
                        actionLabel: "Open Knowledge",
                        onAction: () => {
                          setSelected("AI Employee");
                          setActiveWorkspaceSection("Knowledge Hub");
                        },
                        enabled: INBOX_CONVERSATIONS.some((conversation) => {
                          const message = conversation.message.toLowerCase();
                          return message.includes("pricing") || message.includes("price") || message.includes("availability") || message.includes("product") || message.includes("catalogue");
                        }),
                      },
                    ],
                  },
                  {
                    title: "Catalogue",
                    items: [
                      {
                        issue: "At least one offer is currently inactive in the catalogue.",
                        why: "The AI may be directing customers toward an offer that is not currently available.",
                        source: "Catalogue",
                        actionLabel: "Open Catalogue",
                        onAction: () => {
                          setSelected("AI Employee");
                          setActiveWorkspaceSection("Catalogue");
                        },
                        enabled: PRODUCTS.some((product) => !product.active),
                      },
                    ],
                  },
                  {
                    title: "Sales Playbooks",
                    items: [
                      {
                        issue: "There are customer conversations and leads, but no sales playbooks are available yet.",
                        why: "This suggests the AI is missing a structured guide for qualification and follow-up.",
                        source: "Sales",
                        actionLabel: "Open Sales Playbooks",
                        onAction: () => {
                          setSelected("AI Employee");
                          setActiveWorkspaceSection("Sales Playbooks");
                        },
                        enabled: playbooks.length === 0 && (INBOX_CONVERSATIONS.length > 0 || CUSTOMERS.length > 0),
                      },
                    ],
                  },
                  {
                    title: "Policies",
                    items: [
                      {
                        issue: "At least one conversation has been flagged for human review.",
                        why: "This points to a policy-sensitive case that should be reviewed in the AI's policy workspace.",
                        source: "Policies",
                        actionLabel: "Open Policies",
                        onAction: () => {
                          setSelected("AI Employee");
                          setActiveWorkspaceSection("Policies");
                        },
                        enabled: INBOX_CONVERSATIONS.some((conversation) => conversation.source === "needs_attention" || conversation.needsAttention),
                      },
                    ],
                  },
                  {
                    title: "Skills",
                    items: [
                      {
                        issue: "Support and follow-up requests are appearing in customer conversations.",
                        why: "These cases likely need stronger skill coverage in the AI's support and follow-up capabilities.",
                        source: "Skills",
                        actionLabel: "Open Skills",
                        onAction: () => {
                          setSelected("AI Employee");
                          setActiveWorkspaceSection("Skills");
                        },
                        enabled: INBOX_CONVERSATIONS.some((conversation) => {
                          const message = conversation.message.toLowerCase();
                          return message.includes("support") || message.includes("issue") || message.includes("problem") || message.includes("cancel") || message.includes("refund") || message.includes("follow up");
                        }),
                      },
                    ],
                  },
                  {
                    title: "Integrations",
                    items: [
                      {
                        issue: "Some integrations are still not fully connected or require setup.",
                        why: "This suggests the AI may be missing the data or channels it needs to act effectively.",
                        source: "Integrations",
                        actionLabel: "Open Integrations",
                        onAction: () => {
                          setSelected("AI Employee");
                          setActiveWorkspaceSection("Integrations");
                        },
                        enabled: getAllIntegrationItems().some((item) => getIntegrationStatus(item.id) === "setup_required" || getIntegrationStatus(item.id) === "available"),
                      },
                    ],
                  },
                ];

                const visibleIssues = issueGroups.flatMap((group) => group.items.filter((item) => item.enabled));

                return visibleIssues.length > 0 ? (
                  visibleIssues.map((item, index) => (
                    <div key={`${item.source}-${index}`} className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-2xl">
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">{item.source}</p>
                          <p className="mt-2 text-base font-semibold text-[#111827]">{item.issue}</p>
                          <p className="mt-2 text-sm text-[#6B7280]">
                            <span className="font-semibold text-[#111827]">Why it matters:</span> {item.why}
                          </p>
                          <p className="mt-2 text-sm text-[#6B7280]">
                            <span className="font-semibold text-[#111827]">Recommended action:</span> {item.actionLabel}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={item.onAction}
                          className="inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]"
                        >
                          {item.actionLabel}
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[20px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-5 text-sm text-[#6B7280]">
                    No current issues detected. Your AI employee is not showing any supported performance problems right now.
                  </div>
                );
              })()}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
