import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Calendar, ChevronRight, MessageCircle, Search, Send, User, X } from "lucide-react";
import { ApiError, getConversationMessages, getConversations, markConversationRead, sendConversationMessage, sendWhatsAppReply, updateConversation, type Conversation, type ConversationMessage } from "@/lib/api";

type InboxWorkspaceProps = {
  CARD: string;
  PANEL_TITLE: string;
  SECONDARY: string;
  TIME_LABEL: string;
  STATUS_CHIP: string;
  CUSTOMER_NAME: string;
  SECTION_HEADING: string;
};

const formatConversationTime = (value: string | null | undefined) => {
  if (!value) return "Unknown";
  const date = new Date(value);
  const elapsed = Date.now() - date.getTime();
  if (elapsed < 60_000) return "Now";
  if (elapsed < 3_600_000) return `${Math.floor(elapsed / 60_000)}m`;
  if (elapsed < 86_400_000) return `${Math.floor(elapsed / 3_600_000)}h`;
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
};

const formatMessageTime = (value: string) => new Date(value).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
const errorMessage = (error: unknown) => {
  if (!(error instanceof ApiError)) return "Unable to complete the inbox request.";
  const errors = (error.data as { errors?: Record<string, string[] | string> } | null)?.errors;
  return errors ? Object.values(errors).flat().join(" ") : error.message;
};

export function InboxWorkspace({
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
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversation, setActiveConversation] = useState<number | null>(null);
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [listLoading, setListLoading] = useState(true);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [modeLoading, setModeLoading] = useState(false);
  const [inboxError, setInboxError] = useState<string | null>(null);
  const [customerCollapsed, setCustomerCollapsed] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [customerPanelFading, setCustomerPanelFading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const activeConversationData = conversations.find((item) => item.id === activeConversation);
  const activeCustomerProfile = activeConversationData?.customer ?? null;

  const inboxCounts = useMemo(
    () => ({
      All: conversations.length,
      "AI Active": conversations.filter((item) => item.handling_mode === "ai").length,
      Human: conversations.filter((item) => item.handling_mode === "human").length,
      "Needs Reply": conversations.filter((item) => item.status === "needs_reply").length,
    }),
    [conversations],
  );

  const getConversationStatusBadge = (conversation?: Conversation) => {
    if (conversation?.handling_mode === "ai") {
      return {
        label: "AI Active",
        emoji: "✨",
        bg: "bg-[#ECFDF5]",
        text: "text-[#166534]",
      };
    }

    if (conversation?.status === "needs_reply") {
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

  const loadConversations = async () => {
    setListLoading(true); setInboxError(null);
    try {
      const result = await getConversations({ search: searchQuery, handling_mode: activeTab === "AI Active" ? "ai" : activeTab === "Human" ? "human" : undefined, status: activeTab === "Needs Reply" ? "needs_reply" : undefined, ordering: "-last_message_at" });
      const next = result.data ?? [];
      setConversations(next);
      setActiveConversation((current) => next.some((conversation) => conversation.id === current) ? current : next[0]?.id ?? null);
    } catch (error) { setInboxError(errorMessage(error)); }
    finally { setListLoading(false); }
  };

  const toggleAiForActive = async () => {
    if (!activeConversationData || modeLoading) return;
    setModeLoading(true); setInboxError(null);
    try {
      const result = await updateConversation(activeConversationData.id, { handling_mode: activeConversationData.handling_mode === "ai" ? "human" : "ai" });
      setConversations((items) => items.map((item) => item.id === result.data!.conversation.id ? result.data!.conversation : item));
    } catch (error) { setInboxError(errorMessage(error)); }
    finally { setModeLoading(false); }
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
    const timer = window.setTimeout(() => { void loadConversations(); }, searchQuery ? 250 : 0);
    return () => window.clearTimeout(timer);
  }, [activeTab, searchQuery]);

  useEffect(() => {
    if (!activeConversation) { setMessages([]); return; }
    let active = true;
    void (async () => {
      setMessagesLoading(true); setInboxError(null);
      try {
        const [messageResult, readResult] = await Promise.all([getConversationMessages(activeConversation), markConversationRead(activeConversation)]);
        if (!active) return;
        setMessages(messageResult.data ?? []);
        if (readResult.data) setConversations((items) => items.map((item) => item.id === activeConversation ? readResult.data!.conversation : item));
      } catch (error) { if (active) setInboxError(errorMessage(error)); }
      finally { if (active) setMessagesLoading(false); }
    })();
    return () => { active = false; };
  }, [activeConversation]);

  useEffect(() => {
    setCustomerPanelFading(true);
    const timer = window.setTimeout(() => setCustomerPanelFading(false), 10);
    return () => window.clearTimeout(timer);
  }, [activeConversation]);

  const sendMessage = async () => {
    const body = messageInput.trim();
    if (!body || !activeConversation || sending) return;
    setSending(true); setInboxError(null);
    try {
      const result = activeConversationData?.channel === "whatsapp"
        ? await sendWhatsAppReply(activeConversation, body)
        : await sendConversationMessage(activeConversation, body);
      setMessages((items) => [...items, result.data!.message]);
      setMessageInput("");
      await loadConversations();
    } catch (error) { setInboxError(errorMessage(error)); }
    finally { setSending(false); }
  };

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
            {inboxError ? <p role="alert" className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-3 text-sm text-[#B91C1C]">{inboxError}</p> : null}
            {listLoading ? <p className="p-4 text-center text-sm text-[#64748B]">Loading conversations…</p> : conversations.length === 0 ? <p className="p-4 text-center text-sm text-[#64748B]">{searchQuery || activeTab !== "All" ? "No conversations found." : "No conversations yet."}</p> : conversations.map((conversation) => {
                const active = conversation.id === activeConversation;
                const customerName = conversation.customer?.name || conversation.participant_address || "Unknown contact";
                const avatar = customerName.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "?";
                const preview = conversation.latest_message?.body || "No messages yet";

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
                          {avatar}
                        </div>
                        <div className="min-w-0 flex-1 space-y-1">
                          <p className="text-[16px] font-semibold truncate" title={customerName}>{customerName}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 flex-shrink-0">
                        {conversation.unread_count > 0 ? (
                          <span className="inline-flex min-w-[18px] h-4 items-center justify-center rounded-full bg-[#22C55E] text-white text-[10px] font-semibold transform-gpu transition duration-200 ease-out px-2">
                            {conversation.unread_count}
                          </span>
                        ) : null}
                        <span className={`${TIME_LABEL} whitespace-nowrap text-[11px] text-[#94A3B8]`}>
                          {formatConversationTime(conversation.last_message_at)}
                        </span>
                      </div>
                    </div>

                    <div className="min-w-0">
                      {(() => {
                        const badge = getConversationStatusBadge(conversation);
                        return (
                          <span className={`${STATUS_CHIP} ${badge.bg} ${badge.text} text-xs px-2 py-1`}>
                            {badge.emoji} {badge.label}
                          </span>
                        );
                      })()}
                    </div>

                    <p className={`${SECONDARY} text-[14px] leading-5 min-w-0 truncate`} title={preview}>
                      {preview}
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
                  {activeCustomerProfile?.name || activeConversationData?.participant_address || "Unknown contact"}
                </h2>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[#64748B]">
                  <span className="truncate">{activeCustomerProfile?.phone || activeConversationData?.participant_address || "Unknown contact"}</span>
                  <span className="text-[#94A3B8]">•</span>
                  {(() => {
                    const badge = getConversationStatusBadge(activeConversationData);
                    return (
                      <span className={`${badge.bg} ${badge.text} rounded-full px-2 py-0.5 text-[11px] font-semibold inline-flex items-center gap-1`}>
                        {badge.emoji} {badge.label}
                      </span>
                    );
                  })()}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={toggleAiForActive}
                  disabled={!activeConversationData || modeLoading}
                  aria-label="AI Assist"
                  className={`inline-flex h-9 rounded-full border px-3.5 text-[10px] font-semibold items-center justify-center transition-all duration-150 ease-out active:scale-[0.98] ${
                    !activeConversationData || modeLoading
                      ? "border-[#E5E7EB] bg-white text-[#9CA3AF] cursor-not-allowed"
                      : "border-[#22C55E] bg-white text-[#166534] hover:bg-[#ECFDF5]"
                  }`}
                  title="Toggle AI Assist"
                >
                  {modeLoading ? "Updating…" : `✨ AI Assist${activeConversationData?.handling_mode === "ai" ? " On" : ""}`}
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
            {messagesLoading ? <p className="text-center text-sm text-[#64748B]">Loading messages…</p> : messages.map((message) => {
              const isCustomer = message.sender_type === "customer";
              const isAi = message.sender_type === "ai";
              const senderLabel = isAi ? "Sokoos AI" : "Human operator";

              return (
                <div key={message.id} className="transition-all duration-150 ease-out transition-opacity">
                  {!isCustomer ? (
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
                  <div className={`flex ${isCustomer ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`rounded-[28px] px-3 py-2 text-sm break-words max-w-[70%] ${
                        !isCustomer
                          ? "bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7]"
                          : "bg-white text-[#111827] border border-[#E5E7EB]"
                      } transition-all duration-150 ease-out transition-shadow transform-gpu`}
                    >
                      <div className="flex flex-col gap-2">
                        <p className="leading-relaxed text-sm">{message.body}</p>
                        <div className={`self-end text-[9px] ${!isCustomer ? "text-[#16A34A]/30" : "text-[#64748B]/30"} font-normal`}>
                          {formatMessageTime(message.created_at)}
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
              onClick={() => { void sendMessage(); }}
              disabled={!activeConversation || !messageInput.trim() || sending}
              className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white transition duration-150 ease-out transform hover:bg-[#16A34A] active:scale-95 disabled:opacity-60"
            >
              {sending ? <span className="text-[10px]">…</span> : <Send className="h-4 w-4" />}
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
              <h2 className={`${CUSTOMER_NAME} mt-1`}>{activeCustomerProfile?.name || "Unknown contact"}</h2>
              <p className={`${SECONDARY} mt-2`}>{activeCustomerProfile?.company || activeConversationData?.participant_address || "No customer profile linked"}</p>
              {activeCustomerProfile ? <div className="mt-3 inline-flex items-center gap-2">
                <span className="inline-flex h-3.5 w-3.5 shrink-0 rounded-full bg-[#22C55E]" />
                <span className={`${STATUS_CHIP} bg-[#ECFDF5] text-[#166534] border border-[#D1FAE5]`}>
                  {activeCustomerProfile.lead_status}
                </span>
              </div> : null}
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

          <div className="flex-1 min-h-0 overflow-hidden px-5 py-4"><div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 text-sm leading-6 text-[#64748B] shadow-[0_10px_30px_rgba(15,23,42,0.06)]"><p className={SECTION_HEADING}>AI Summary</p><p className="mt-2">AI insights and suggested replies are not available in this phase.</p></div></div>
        </section>
      )}
    </div>
  );
}
