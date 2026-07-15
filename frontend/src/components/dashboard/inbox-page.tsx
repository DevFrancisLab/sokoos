import type { Dispatch, RefObject, SetStateAction } from "react";
import { Inbox, MessageCircle, Sparkles, User } from "lucide-react";

type Conversation = {
  id: string;
  name: string | null;
  phone: string;
  message: string;
  time: string;
  badge: number;
  source: string;
  isSaved?: boolean;
  avatar: string;
  needsAttention?: boolean;
};

type Message = {
  id: string;
  from: string;
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

type InboxPageProps = {
  CARD: string;
  PANEL_TITLE: string;
  SECONDARY: string;
  TRANSITION: string;
  TRANSITION_FAST: string;
  MESSAGE_PREVIEW: string;
  STATUS_CHIP: string;
  CUSTOMER_NAME: string;
  SECTION_HEADING: string;
  INBOX_TAB_ITEMS: readonly string[];
  INBOX_CONVERSATIONS: Conversation[];
  searchQuery: string;
  BODY_MEDIUM: string;
  TIME_LABEL: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeConversation: string;
  setActiveConversation: Dispatch<SetStateAction<string>>;
  customerCollapsed: boolean;
  setCustomerCollapsed: Dispatch<SetStateAction<boolean>>;
  sourceOverrides: Record<string, string>;
  setSourceOverrides: Dispatch<SetStateAction<Record<string, string>>>;
  activeChatMode: "ai" | "human";
  setActiveChatMode: Dispatch<SetStateAction<"ai" | "human">>;
  personalContacts: Array<{ id: string; name: string; relationship: string; phone: string }>;
  activeConversationData: Conversation | undefined;
  activeMessages: Message[];
  effectiveActiveSource: string;
  isPersonalActive: boolean;
  activeAgentName: string;
  messageInput: string;
  setMessageInput: Dispatch<SetStateAction<string>>;
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  toggleAiForActive: () => void;
  customerPanelFading: boolean;
  activeCustomerProfile: CustomerProfile;
  formatConversationTime: (value: string | undefined) => string;
  getConversationStatusBadge: (source: string, isPersonal: boolean) => { icon: React.ElementType; label: string; bg: string; text: string };
};

export default function InboxPage(props: InboxPageProps) {
  const { CARD, PANEL_TITLE, SECONDARY, MESSAGE_PREVIEW, STATUS_CHIP, CUSTOMER_NAME, SECTION_HEADING, INBOX_TAB_ITEMS, INBOX_CONVERSATIONS, searchQuery, setSearchQuery, activeTab, setActiveTab, activeConversation, setActiveConversation, activeConversationData, activeMessages, effectiveActiveSource, isPersonalActive, activeAgentName, messageInput, setMessageInput, textareaRef, toggleAiForActive, activeCustomerProfile, formatConversationTime, getConversationStatusBadge } = props;

  return (
    <div className="space-y-6">
      <div className={`${CARD} border-[#ECFDF5] bg-gradient-to-br from-[#F0FDF4] to-white`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">Inbox</p>
            <h1 className="mt-2 text-[34px] font-semibold text-[#0F172A]">Stay on top of customer conversations</h1>
            <p className="mt-3 text-[15px] text-[#475569]">The inbox remains intact, while the rest of the dashboard now focuses on making setup and onboarding feel simple for a business owner.</p>
          </div>
          <div className="rounded-[24px] border border-[#D1FAE5] bg-white/80 px-4 py-3 text-sm font-semibold text-[#065F46]">
            <div className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Keep every reply moving</div>
          </div>
        </div>
      </div>

      <div className={`${CARD} p-0 overflow-hidden`}>
        <div className="grid min-h-[640px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border-b border-[#EEF2F6] lg:border-b-0 lg:border-r">
            <div className="p-5">
              <div className="flex items-center gap-2">
                <Inbox className="h-5 w-5 text-[#22C55E]" />
                <h2 className={PANEL_TITLE}>Messages</h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {INBOX_TAB_ITEMS.map((tab) => (
                  <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`rounded-full px-3 py-2 text-sm font-medium ${activeTab === tab ? "bg-[#ECFDF5] text-[#047857]" : "bg-[#F8FAFB] text-[#475569]"}`}>
                    {tab}
                  </button>
                ))}
              </div>
              <div className="mt-4 rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] px-3 py-3">
                <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search conversations" className="w-full bg-transparent outline-none text-sm" />
              </div>
              <div className="mt-4 space-y-2">
                {INBOX_CONVERSATIONS.filter((conversation) => conversation.name?.toLowerCase().includes(searchQuery.toLowerCase()) || conversation.message.toLowerCase().includes(searchQuery.toLowerCase())).map((conversation) => {
                  const isActive = activeConversation === conversation.id;
                  const badge = getConversationStatusBadge(conversation.source, false);
                  return (
                    <button key={conversation.id} type="button" onClick={() => setActiveConversation(conversation.id)} className={`w-full rounded-[20px] border p-3 text-left ${isActive ? "border-[#D1FAE5] bg-[#F0FDF4]" : "border-[#EEF2F6] bg-white"}`}>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DBEAFE] font-semibold text-[#1D4ED8]">{conversation.avatar}</div>
                          <div>
                            <p className="font-semibold text-[#111827]">{conversation.name ?? "Unknown"}</p>
                            <p className="text-sm text-[#64748B]">{conversation.message}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-[#64748B]">{conversation.time}</p>
                          {conversation.badge > 0 ? <span className="mt-2 inline-flex rounded-full bg-[#22C55E] px-2 py-0.5 text-xs font-semibold text-white">{conversation.badge}</span> : null}
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className={`rounded-full px-2 py-1 text-xs font-semibold ${badge.bg} ${badge.text}`}>{badge.label}</span>
                        <span className="text-xs text-[#64748B]">{conversation.phone}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className={SECTION_HEADING}>Conversation</p>
                <h2 className={CUSTOMER_NAME}>{activeConversationData?.name ?? "Customer"}</h2>
              </div>
              <button type="button" onClick={toggleAiForActive} className="rounded-full border border-[#EEF2F6] bg-[#F9FAFB] px-3 py-2 text-sm font-semibold text-[#475569]">
                {isPersonalActive ? "Personal" : effectiveActiveSource === "ai" ? "AI mode" : "Human mode"}
              </button>
            </div>
            <div className="mt-4 rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DBEAFE] text-[#1D4ED8]">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">{activeAgentName}</p>
                  <p className="text-sm text-[#64748B]">{activeConversationData?.phone}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-3 rounded-[20px] border border-[#EEF2F6] bg-white p-4">
              {activeMessages.map((message) => (
                <div key={message.id} className={`max-w-[85%] rounded-[20px] px-4 py-3 text-sm ${message.from === "customer" ? "bg-[#F3F4F6] text-[#111827]" : "ml-auto bg-[#ECFDF5] text-[#047857]"}`}>
                  <p>{message.text}</p>
                  <p className="mt-2 text-[11px] opacity-80">{message.time}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] p-3">
              <div className="flex items-center gap-2 text-sm text-[#64748B]">
                <MessageCircle className="h-4 w-4 text-[#22C55E]" />
                Reply to keep the conversation moving
              </div>
              <textarea ref={textareaRef} value={messageInput} onChange={(event) => setMessageInput(event.target.value)} placeholder="Type a reply" className="mt-3 min-h-20 w-full rounded-[20px] border border-[#EEF2F6] bg-white px-3 py-3 outline-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
