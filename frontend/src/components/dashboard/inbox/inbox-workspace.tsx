import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Calendar, ChevronRight, MessageCircle, Search, Send, User, X } from "lucide-react";

type InboxConversation = {
  id: string;
  name: string | null;
  phone: string;
  message: string;
  time: string;
  badge: number;
  source: string;
  isSaved: boolean;
  avatar: string;
};

type InboxMessage = {
  from: "customer" | "agent";
  text: string;
  time: string;
};

type CustomerProfile = {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  tags: string[];
  status: string;
  lastOrder: string;
  leadStatus: string;
  interestedProducts: string[];
};

type InboxWorkspaceProps = {
  conversations: InboxConversation[];
  messages: Record<string, Array<{ from: string; text: string; time: string }>>;
  customerProfiles: Record<string, CustomerProfile>;
  ownerNames: Record<string, string>;
  personalContacts: Array<{ id: string; name: string; phone: string; relationship: string; notes?: string }>;
  CARD: string;
  PANEL_TITLE: string;
  SECONDARY: string;
  TIME_LABEL: string;
  STATUS_CHIP: string;
  CUSTOMER_NAME: string;
  SECTION_HEADING: string;
};

const formatConversationTime = (time: string | undefined) => time || "Unknown";

export function InboxWorkspace({
  conversations,
  messages,
  customerProfiles,
  ownerNames,
  personalContacts,
  CARD,
  PANEL_TITLE,
  SECONDARY,
  TIME_LABEL,
  STATUS_CHIP,
  CUSTOMER_NAME,
  SECTION_HEADING,
}: InboxWorkspaceProps) {
  const INBOX_TAB_ITEMS = ["All", "AI Active", "Human", "Needs Reply"] as const;
  type InboxTab = (typeof INBOX_TAB_ITEMS)[number];

  const [activeTab, setActiveTab] = useState<InboxTab>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeConversation, setActiveConversation] = useState<string>(conversations[0]?.id ?? "");
  const [sourceOverrides, setSourceOverrides] = useState<Record<string, string>>({});
  const [customerCollapsed, setCustomerCollapsed] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [customerPanelFading, setCustomerPanelFading] = useState(false);
  const [summaryGenerated, setSummaryGenerated] = useState(false);
  const [summaryVisible, setSummaryVisible] = useState(false);
  const [aiSummary, setAiSummary] = useState<{
    customerIntent: string;
    buyingProbability: number;
    sentiment: {
      label: string;
      icon: string;
      badgeClassName: string;
    };
    buyingSignals: string[];
    recommendedNextAction: string;
    suggestedReply: string[];
    knowledgeSources: string[];
  } | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const activeConversationData = conversations.find((item) => item.id === activeConversation);
  const activeCustomerProfile = customerProfiles[activeConversation as keyof typeof customerProfiles] ?? customerProfiles.c1;
  const activeMessages = messages[activeConversation as keyof typeof messages] ?? [];

  const inboxCounts = useMemo(
    () => ({
      All: conversations.length,
      "AI Active": conversations.filter((item) => item.source === "ai_handling").length,
      Human: conversations.filter((item) => item.source === "owner").length,
      "Needs Reply": conversations.filter((item) => item.source === "needs_attention").length,
    }),
    [conversations],
  );

  const getEffectiveSource = (id: string, original?: string) => sourceOverrides[id] ?? original ?? "owner";

  const isPersonalByPhone = (phone?: string | null) => !!phone && personalContacts.some((pc) => pc.phone === phone);

  const isPersonalActive = isPersonalByPhone(activeConversationData?.phone ?? null);
  const effectiveActiveSource = isPersonalActive ? "personal" : getEffectiveSource(activeConversation, activeConversationData?.source);
  const activeAgentName = isPersonalActive ? "Personal" : String(effectiveActiveSource).startsWith("ai") ? "Sokoos AI" : ownerNames[activeConversation] ?? "You";

  const getConversationStatusBadge = (source: string, isPersonal: boolean) => {
    if (isPersonal) {
      return {
        label: "Personal",
        emoji: "👤",
        bg: "bg-[#E0F2FE]",
        text: "text-[#075985]",
      };
    }

    const normalizedSource = source ?? "owner";
    if (normalizedSource === "ai_handling" || normalizedSource === "ai_handled") {
      return {
        label: "AI Active",
        emoji: "✨",
        bg: "bg-[#ECFDF5]",
        text: "text-[#166534]",
      };
    }

    if (normalizedSource === "needs_attention") {
      return {
        label: "Needs Reply",
        emoji: "⚠️",
        bg: "bg-[#FFF7ED]",
        text: "text-[#9A5B00]",
      };
    }

    return {
      label: "Human",
      emoji: "👤",
      bg: "bg-[#F1F5F9]",
      text: "text-[#475569]",
    };
  };

  const toggleAiForActive = () => {
    if (isPersonalActive) return;

    const currentSource = getEffectiveSource(activeConversation, activeConversationData?.source);
    const nextSource = currentSource === "ai_handling" ? "owner" : "ai_handling";
    setSourceOverrides((s) => ({ ...s, [activeConversation]: nextSource }));
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const height = Math.min(textarea.scrollHeight, 120);
    textarea.style.height = `${height}px`;
    textarea.style.overflowY = textarea.scrollHeight > 120 ? "auto" : "hidden";
  }, [messageInput]);

  useEffect(() => {
    setCustomerPanelFading(true);
    const timer = window.setTimeout(() => setCustomerPanelFading(false), 10);
    return () => window.clearTimeout(timer);
  }, [activeConversation]);

  useEffect(() => {
    const summary = {
      customerIntent: "Looking for pricing and comparing internet plans before making a purchase.",
      buyingProbability: 92,
      sentiment: {
        label: "Positive",
        icon: "😊",
        badgeClassName: "border-[#A7F3D0] bg-[#ECFDF5] text-[#166534]",
      },
      buyingSignals: [
        "Asked for pricing",
        "Asked about the free trial",
        "Replied quickly",
        "Comparing plans",
      ],
      recommendedNextAction:
        "Recommend the Business Package and mention the free trial to encourage conversion.",
      suggestedReply: [
        "Hi Aisha 👋",
        "Thanks for your interest.",
        "Our Business Package includes priority support, flexible upgrades, and a free trial so you can explore the plan with confidence.",
      ],
      knowledgeSources: ["Pricing Catalog", "FAQ", "Business Policies", "Product Database"],
    };

    setAiSummary(summary);
    setSummaryGenerated(true);
    const timer = window.setTimeout(() => setSummaryVisible(true), 150);
    return () => window.clearTimeout(timer);
  }, [activeConversation]);

  return (
    <div className={`grid gap-6 px-6 py-6 transition-all duration-300 ease-out items-stretch h-full grid-cols-1 ${customerCollapsed ? "md:grid-cols-[320px_1fr]" : "md:grid-cols-[320px_1fr_minmax(330px,360px)]"}`}>
      <section className={`${CARD} w-full h-full min-h-0 flex flex-col min-w-0`}>
        <div className="border-b border-[#ECECEC] px-5 py-2">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className={PANEL_TITLE}>Conversations</h2>
              <p className={`${SECONDARY} mt-0`}>Recent messages and active chats</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto px-5 py-2 flex-nowrap custom-scrollbar">
          {INBOX_TAB_ITEMS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap rounded-full px-4 py-1 text-xs transform flex-shrink-0 transition-all duration-200 ease-out ${
                activeTab === tab
                  ? "bg-[#22C55E] text-white font-medium shadow-sm"
                  : "bg-[#F3F4F6] text-[#475569] font-medium"
              } hover:shadow-sm active:scale-[0.98]`}
            >
              <span className="inline-flex items-center gap-2">
                <span>{tab}</span>
                <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white px-2 text-[11px] font-semibold text-[#475569] shadow-sm">
                  {inboxCounts[tab]}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="flex min-h-0 flex-1 flex-col px-5 py-2 gap-2">
          <div className="rounded-[20px] bg-[#F9FAFB] px-4 py-2.5 shadow-none ring-1 ring-[#ECECEC] transition duration-150 ease-out focus-within:ring-2 focus-within:ring-[#22C55E] focus-within:border-[#22C55E] border border-[#E5E7EB]">
            <div className="flex h-[44px] items-center gap-3 w-full text-[#94A3B8]">
              <Search className="h-4 w-4 flex-shrink-0" />
              <input
                type="search"
                placeholder="Search conversations"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full h-full bg-transparent text-sm text-[#111827] placeholder:text-[#94A3B8] placeholder:font-regular outline-none transition-all duration-150 ease-out"
              />
            </div>
          </div>

          <div className="flex-1 min-h-0 space-y-1.5 overflow-y-auto pr-2 scroll-smooth custom-scrollbar">
            {conversations
              .filter((conversation) => {
                const src = sourceOverrides[conversation.id] ?? conversation.source;
                if (activeTab === "Needs Reply") return src === "needs_attention";
                if (activeTab === "AI Active") return src === "ai_handling";
                if (activeTab === "Human") return src === "owner";
                return true;
              })
              .filter(
                (conversation) =>
                  (conversation.name ?? "").toLowerCase().includes(searchQuery.toLowerCase()) ||
                  (conversation.phone ?? "").toLowerCase().includes(searchQuery.toLowerCase()) ||
                  conversation.message.toLowerCase().includes(searchQuery.toLowerCase()),
              )
              .map((conversation) => {
                const active = conversation.id === activeConversation;
                const effectiveSourceRaw = sourceOverrides[conversation.id] ?? conversation.source;
                const isPersonal = personalContacts.some((pc) => pc.phone === conversation.phone);
                const effectiveSource = isPersonal ? "personal" : effectiveSourceRaw;

                return (
                  <button
                    key={conversation.id}
                    type="button"
                    onClick={() => setActiveConversation(conversation.id)}
                    className={`w-full overflow-hidden rounded-[20px] px-5 py-3 min-h-[92px] text-left transition-all duration-200 ease-out transform-gpu active:scale-[0.98] flex flex-col gap-4 ${
                      active
                        ? "bg-[#F3FDF7] border border-[#22C55E]/20 ring-1 ring-[#22C55E]/20 shadow-[0_12px_36px_rgba(15,23,42,0.08)]"
                        : "bg-white border border-transparent hover:bg-[#FBFFF8] hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E5E7EB] to-[#D1D5DB] text-sm font-semibold text-[#64748B]">
                          {conversation.avatar}
                        </div>
                        <div className="min-w-0 flex-1 space-y-1">
                          {conversation.isSaved && conversation.name ? (
                            <p className="text-[16px] font-semibold truncate" title={conversation.name}>{conversation.name}</p>
                          ) : (
                            <p className="text-[16px] font-semibold truncate" title={conversation.phone ?? "Unknown Customer"}>
                              {conversation.phone ?? "Unknown Customer"}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start gap-2 flex-shrink-0">
                        {conversation.badge > 0 ? (
                          <span className="inline-flex min-w-[18px] h-4 items-center justify-center rounded-full bg-[#22C55E] text-white text-[10px] font-semibold transform-gpu transition duration-200 ease-out px-2">
                            {conversation.badge}
                          </span>
                        ) : null}
                        <span className={`${TIME_LABEL} whitespace-nowrap text-[11px] text-[#94A3B8]`}>
                          {formatConversationTime(conversation.time)}
                        </span>
                      </div>
                    </div>

                    <div className="min-w-0">
                      {(() => {
                        const badge = getConversationStatusBadge(effectiveSource, isPersonal);
                        return (
                          <span className={`${STATUS_CHIP} ${badge.bg} ${badge.text} text-xs px-2 py-1`}>
                            {badge.emoji} {badge.label}
                          </span>
                        );
                      })()}
                    </div>

                    <p className={`${SECONDARY} text-[14px] leading-5 min-w-0 truncate`} title={conversation.message}>
                      {conversation.message}
                    </p>
                  </button>
                );
              })}
          </div>
        </div>
      </section>

      <section className={`${CARD} w-full h-full min-h-0 flex flex-col min-w-0`}>
        <div className="border-b border-[#ECECEC] px-6 py-4 mb-2 flex-shrink-0">
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h2 className={`${CUSTOMER_NAME} truncate`}>
                  {conversations.find((item) => item.id === activeConversation)?.name}
                </h2>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[#64748B]">
                  <span className="truncate">{activeConversationData?.phone ?? "Unknown phone"}</span>
                  <span className="text-[#94A3B8]">•</span>
                  {(() => {
                    const badge = getConversationStatusBadge(effectiveActiveSource, isPersonalActive);
                    return (
                      <span className={`${badge.bg} ${badge.text} rounded-full px-2 py-0.5 text-[11px] font-semibold inline-flex items-center gap-1`}>
                        {badge.emoji} {badge.label}
                      </span>
                    );
                  })()}
                </div>
                <div className="mt-2 flex flex-col gap-2 text-sm text-[#475569]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-[#111827]">AI Confidence</span>
                    <span className="text-[#16A34A] font-semibold">94%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#DCFCE7]">
                    <div className="h-full w-[94%] rounded-full bg-[#22C55E]" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={toggleAiForActive}
                  disabled={isPersonalActive}
                  aria-label="AI Assist"
                  className={`inline-flex h-9 rounded-full border px-3.5 text-[10px] font-semibold items-center justify-center transition-all duration-150 ease-out active:scale-[0.98] ${
                    isPersonalActive
                      ? "border-[#E5E7EB] bg-white text-[#9CA3AF] cursor-not-allowed"
                      : "border-[#22C55E] bg-white text-[#166534] hover:bg-[#ECFDF5]"
                  }`}
                  title={isPersonalActive ? "Cannot toggle mode for personal contacts" : "AI Assist"}
                >
                  ✨ AI Assist
                </button>
                {customerCollapsed && (
                  <button
                    type="button"
                    onClick={() => setCustomerCollapsed(false)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] bg-white text-[#64748B] transition-all duration-200 ease-out hover:bg-[#F9FAFB] hover:text-[#111827] flex-shrink-0"
                    aria-label="Expand customer panel"
                    title="Expand customer panel"
                  >
                    <ChevronRight className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-6 pt-3 pb-6 flex flex-col justify-end bg-[#F8FCF7]">
          <div className="space-y-5 flex flex-col">
            {activeMessages.map((message, index) => {
              const originalWasAi = String(activeConversationData?.source).startsWith("ai");
              if (message.from === "agent" && originalWasAi && !String(effectiveActiveSource).startsWith("ai")) {
                return null;
              }

              const isAgent = message.from === "agent";
              const isAi = isAgent && String(effectiveActiveSource).startsWith("ai");
              const senderLabel = isAi ? "Sokoos AI" : activeAgentName;

              return (
                <div key={`${message.time}-${index}`} className="transition-all duration-150 ease-out transition-opacity">
                  {isAgent ? (
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-[#94A3B8] mb-0.5">
                      {isAi ? (
                        <>
                          <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-[#ECFDF5] text-[#0C7A4D]">
                            <Bot className="h-1.5 w-1.5" />
                          </span>
                          <span>{senderLabel}</span>
                        </>
                      ) : (
                        <span>{senderLabel}</span>
                      )}
                    </div>
                  ) : null}
                  <div className={`flex ${isAgent ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`rounded-[28px] px-3 py-2 text-sm break-words max-w-[70%] ${
                        isAgent
                          ? "bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7]"
                          : "bg-white text-[#111827] border border-[#E5E7EB]"
                      } transition-all duration-150 ease-out transition-shadow transform-gpu`}
                    >
                      <div className="flex flex-col gap-2">
                        <p className="leading-relaxed text-sm">{message.text}</p>
                        <div className={`self-end text-[9px] ${isAgent ? "text-[#16A34A]/30" : "text-[#64748B]/30"} font-normal`}>
                          {message.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="shrink-0 border-t border-[#E5E7EB] bg-white px-6 py-3">
          <div className="rounded-[20px] bg-[#F9FAFB] border border-[#E5E7EB] flex items-center gap-3 min-h-[52px] px-4 transition-all duration-200 ease-out">
            <textarea
              ref={textareaRef}
              value={messageInput}
              onChange={(event) => setMessageInput(event.target.value)}
              placeholder="Type a message..."
              className="min-w-0 flex-1 resize-none overflow-y-auto overflow-x-hidden custom-scrollbar bg-transparent text-sm leading-5 text-[#111827] outline-none placeholder:text-[#CBD5E1] placeholder:font-regular transition-all duration-150 ease-out"
              rows={1}
              style={{ minHeight: 40, maxHeight: 80 }}
            />
            <button
              type="button"
              className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white transition duration-150 ease-out transform hover:bg-[#16A34A] active:scale-95"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {!customerCollapsed && (
        <section
          className={`${CARD} w-full h-full min-h-0 flex flex-col transition-all duration-300 ease-out ${customerPanelFading ? "opacity-80 translate-y-1" : "opacity-100 translate-y-0"} min-w-[330px] max-w-[360px]`}
        >
          <div className="flex items-start justify-between gap-3 shrink-0 px-5 py-4 border-b border-[#ECECEC]">
            <div>
              <h2 className={`${CUSTOMER_NAME} mt-1`}>{activeCustomerProfile.name}</h2>
              <p className={`${SECONDARY} mt-2`}>{activeCustomerProfile.company}</p>
              <div className="mt-3 inline-flex items-center gap-2">
                <span className="inline-flex h-3.5 w-3.5 shrink-0 rounded-full bg-[#22C55E]" />
                <span className={`${STATUS_CHIP} bg-[#ECFDF5] text-[#166534] border border-[#D1FAE5]`}>
                  {activeCustomerProfile.leadStatus}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setCustomerCollapsed(true)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] bg-white text-[#64748B] transition-all duration-150 ease-out hover:bg-[#F9FAFB] hover:text-[#111827] active:scale-95 shrink-0"
              aria-label="Collapse customer panel"
              title="Collapse customer panel"
            >
              <ChevronRight className="h-3 w-3 rotate-180" />
            </button>
          </div>

          <div className="flex-1 min-h-0 overflow-hidden px-5 py-4">
            {summaryGenerated ? (
              <div
                className={`h-full overflow-y-auto pr-2 transition-all duration-300 ease-out ${summaryVisible ? "opacity-100" : "opacity-0"} [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#F3F4F6] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#CBD5E1] [&::-webkit-scrollbar-thumb:hover]:bg-[#22C55E]`}
                style={{ scrollbarWidth: "thin", scrollbarColor: "#CBD5E1 transparent" }}
              >
                <div className="space-y-4 pb-2">
                  <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className={SECTION_HEADING}>✨ AI Summary</p>
                        <h3 className="mt-2 text-[18px] font-semibold text-[#111827]">AI Employee snapshot</h3>
                      </div>
                      <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#16A34A]">
                        Mock data
                      </span>
                    </div>
                    <div className="mt-4 h-px bg-[#E5E7EB]/80" />
                  </div>

                  <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <p className={SECTION_HEADING}>Customer Intent</p>
                    <p className="mt-2 text-[15px] leading-6 text-[#475569]">{aiSummary?.customerIntent}</p>
                  </div>

                  <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <p className={SECTION_HEADING}>Buying Probability</p>
                    <div className="mt-3 flex items-center gap-3">
                      <p className="text-[24px] font-semibold text-[#111827]">{aiSummary?.buyingProbability}%</p>
                      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#E5E7EB]">
                        <div className="h-full rounded-full bg-[#22C55E]" style={{ width: `${aiSummary?.buyingProbability ?? 0}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <p className={SECTION_HEADING}>Customer Sentiment</p>
                    <div className="mt-3">
                      <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-semibold ${aiSummary?.sentiment.badgeClassName}`}>
                        <span>{aiSummary?.sentiment.icon}</span>
                        {aiSummary?.sentiment.label}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <p className={SECTION_HEADING}>Buying Signals</p>
                    <ul className="mt-3 space-y-2 text-[14px] leading-6 text-[#475569]">
                      {aiSummary?.buyingSignals.map((signal) => (
                        <li key={signal} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#22C55E]" />
                          <span>{signal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <p className={SECTION_HEADING}>Recommended Next Action</p>
                    <p className="mt-3 text-[15px] leading-6 text-[#475569]">{aiSummary?.recommendedNextAction}</p>
                  </div>

                  <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <p className={SECTION_HEADING}>Suggested Reply</p>
                    <div className="mt-3 space-y-2 text-[14px] leading-6 text-[#475569]">
                      {aiSummary?.suggestedReply.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                    <p className={SECTION_HEADING}>Knowledge Sources</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {aiSummary?.knowledgeSources.map((source) => (
                        <span key={source} className="rounded-full bg-[#F3F4F6] px-2.5 py-1 text-[11px] font-semibold text-[#475569]">
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-[#64748B]">Preparing AI summary…</div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
