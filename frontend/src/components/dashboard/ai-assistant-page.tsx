import type { Dispatch, SetStateAction } from "react";
import { Bot, MessageSquareText, ShieldCheck, Sparkles, ToggleLeft, ToggleRight } from "lucide-react";

type BusinessInfo = {
  name: string;
  type: string;
  about: string;
  hours: string;
  serviceAreas: string;
  paymentMethods: string;
};

type KnowledgeProduct = {
  id: string;
  name: string;
  price: string;
};

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type PolicyState = {
  returnPolicy: string;
  deliveryPolicy: string;
  cancellationPolicy: string;
};

type AIAssistantPageProps = {
  CARD: string;
  aiEnabled: boolean;
  setAiEnabled: Dispatch<SetStateAction<boolean>>;
  assistantTab: AssistantTab;
  setAssistantTab: Dispatch<SetStateAction<AssistantTab>>;
  businessInfo: BusinessInfo;
  setBusinessInfo: Dispatch<SetStateAction<BusinessInfo>>;
  knowledgeProducts: KnowledgeProduct[];
  setKnowledgeProducts: Dispatch<SetStateAction<KnowledgeProduct[]>>;
  faqItems: FaqItem[];
  setFaqItems: Dispatch<SetStateAction<FaqItem[]>>;
  policies: PolicyState;
  setPolicies: Dispatch<SetStateAction<PolicyState>>;
  setSelected: Dispatch<SetStateAction<string>>;
};

const tabs = ["Business Knowledge", "AI Settings", "Test AI", "Escalation Rules", "Conversation Policies"] as const;

type AssistantTab = (typeof tabs)[number];

export default function AIAssistantPage({
  CARD,
  aiEnabled,
  setAiEnabled,
  assistantTab,
  setAssistantTab,
  businessInfo,
  setBusinessInfo,
  knowledgeProducts,
  setKnowledgeProducts,
  faqItems,
  setFaqItems,
  policies,
  setPolicies,
  setSelected,
}: AIAssistantPageProps) {
  return (
    <div className="space-y-6">
      <div className={`${CARD} border-[#ECFDF5] bg-gradient-to-br from-[#F0FDF4] to-white`}>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">AI Employee</p>
            <h1 className="mt-2 text-[34px] font-semibold text-[#0F172A]">Set up your AI Employee</h1>
            <p className="mt-3 text-[15px] text-[#475569]">
              Teach your AI Employee what matters most: your offerings, your tone, and when to hand off to your team.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSelected("Settings")}
            className="inline-flex items-center gap-2 rounded-[24px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white hover:bg-[#16A34A]"
          >
            <Sparkles className="h-4 w-4" />
            Fine-tune business details
          </button>
        </div>
      </div>

      <div className={`${CARD}`}>
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const active = assistantTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setAssistantTab(tab)}
                className={`rounded-full px-3 py-2 text-sm font-medium ${active ? "bg-[#ECFDF5] text-[#047857]" : "bg-[#F8FAFB] text-[#475569]"}`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {assistantTab === "Business Knowledge" && (
              <>
                <div className="rounded-[24px] border border-[#EEF2F6] bg-[#F8FAFB] p-5">
                  <div className="flex items-center gap-2 text-[#111827]">
                    <Bot className="h-5 w-5 text-[#22C55E]" />
                    <h2 className="text-xl font-semibold">Business knowledge</h2>
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-[#475569]">
                    <p><span className="font-semibold text-[#111827]">Business name:</span> {businessInfo.name}</p>
                    <p><span className="font-semibold text-[#111827]">Industry:</span> {businessInfo.type}</p>
                    <p><span className="font-semibold text-[#111827]">What you do:</span> {businessInfo.about}</p>
                    <p><span className="font-semibold text-[#111827]">Hours:</span> {businessInfo.hours}</p>
                    <p><span className="font-semibold text-[#111827]">Service areas:</span> {businessInfo.serviceAreas}</p>
                  </div>
                </div>
                <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5">
                  <h3 className="font-semibold text-[#111827]">Popular offers to teach the AI</h3>
                  <div className="mt-3 space-y-2">
                    {knowledgeProducts.map((product) => (
                      <div key={product.id} className="flex items-center justify-between rounded-[20px] bg-[#F9FAFB] px-3 py-2 text-sm text-[#475569]">
                        <span>{product.name}</span>
                        <span className="font-semibold text-[#111827]">{product.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {assistantTab === "AI Settings" && (
              <div className="space-y-3">
                <div className="rounded-[24px] border border-[#EEF2F6] bg-[#F8FAFB] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-[#111827]">Enable AI Employee</p>
                      <p className="text-sm text-[#64748B]">Let your AI Employee respond to customer questions automatically.</p>
                    </div>
                    <button type="button" onClick={() => setAiEnabled(!aiEnabled)} className="text-[#22C55E]">
                      {aiEnabled ? <ToggleRight className="h-8 w-8" /> : <ToggleLeft className="h-8 w-8" />}
                    </button>
                  </div>
                </div>
                <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5">
                  <p className="font-semibold text-[#111827]">Recommended defaults</p>
                  <ul className="mt-3 space-y-2 text-sm text-[#475569]">
                    <li>• Answer simple questions instantly</li>
                    <li>• Offer product suggestions when relevant</li>
                    <li>• Route urgent issues to you</li>
                  </ul>
                </div>
              </div>
            )}

            {assistantTab === "Test AI" && (
              <div className="rounded-[24px] border border-[#EEF2F6] bg-[#F8FAFB] p-5">
                <div className="flex items-center gap-2 text-[#111827]">
                  <MessageSquareText className="h-5 w-5 text-[#22C55E]" />
                  <h2 className="text-xl font-semibold">Try a customer-style prompt</h2>
                </div>
                <div className="mt-4 space-y-3 text-sm text-[#475569]">
                  <p>“I need internet for my office and I’m not sure which package is best.”</p>
                  <p>“Can you tell me your business hours and whether installation is included?”</p>
                  <p>“I need a follow-up after payment.”</p>
                </div>
                <button type="button" className="mt-4 rounded-[20px] bg-[#EFF6FF] px-4 py-3 text-sm font-semibold text-[#1D4ED8]">
                  Review reply quality
                </button>
              </div>
            )}

            {assistantTab === "Escalation Rules" && (
              <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5">
                <div className="flex items-center gap-2 text-[#111827]">
                  <ShieldCheck className="h-5 w-5 text-[#22C55E]" />
                  <h2 className="text-xl font-semibold">When the AI should hand off</h2>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-[#475569]">
                  <li>• When a customer asks for a live person</li>
                  <li>• After business hours for urgent requests</li>
                  <li>• When a customer asks multiple follow-up questions</li>
                </ul>
              </div>
            )}

            {assistantTab === "Conversation Policies" && (
              <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5">
                <h2 className="text-xl font-semibold text-[#111827]">Conversation guardrails</h2>
                <div className="mt-4 space-y-3 text-sm text-[#475569]">
                  <p>{policies.returnPolicy}</p>
                  <p>{policies.deliveryPolicy}</p>
                  <p>{policies.cancellationPolicy}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-[24px] border border-[#EEF2F6] bg-[#F9FAFB] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">Helpful prompts</p>
              <div className="mt-4 space-y-3 text-sm text-[#475569]">
                <p>“Tell customers about our best package for a small business.”</p>
                <p>“Explain our hours and service area clearly.”</p>
                <p>“Say we can help with installation and support.”</p>
              </div>
            </div>
            <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5">
              <p className="font-semibold text-[#111827]">What this improves</p>
              <ul className="mt-3 space-y-2 text-sm text-[#475569]">
                <li>• Faster answers for common questions</li>
                <li>• Better lead qualification without a developer</li>
                <li>• Clear handoff when a human touch is needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
