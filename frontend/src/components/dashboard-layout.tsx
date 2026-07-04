import { useState } from "react";
import {
  Home,
  Inbox,
  Calendar,
  Megaphone,
  Users,
  Box,
  Cpu,
  Activity,
  Settings,
  Menu,
  X,
  Search,
  MessageCircle,
  Clock,
  Phone,
  Tag,
} from "lucide-react";

const NAV_ITEMS: { label: string; href: string; Icon: any }[] = [
  { label: "Home", href: "/dashboard", Icon: Home },
  { label: "Inbox", href: "/dashboard/inbox", Icon: Inbox },
  { label: "Status Scheduler", href: "/dashboard/status", Icon: Calendar },
  { label: "Broadcasts", href: "/dashboard/broadcasts", Icon: Megaphone },
  { label: "Customers", href: "/dashboard/customers", Icon: Users },
  { label: "Catalog", href: "/dashboard/catalog", Icon: Box },
  { label: "AI Assistant", href: "/dashboard/assistant", Icon: Cpu },
  { label: "Analytics", href: "/dashboard/analytics", Icon: Activity },
  { label: "Settings", href: "/dashboard/settings", Icon: Settings },
];

const STAT_CARDS = [
  { label: "Messages Today", value: "1,284", delta: "+18%" },
  { label: "AI Responses", value: "912", delta: "+24%" },
  { label: "Human Takeovers", value: "72", delta: "-4%" },
  { label: "New Leads", value: "38", delta: "+11%" },
];

const RECENT_ACTIVITY = [
  { title: "New customer inquiry", subtitle: "Received in WhatsApp inbox", time: "5m ago" },
  { title: "AI replied to lead", subtitle: "Followed up about pricing", time: "12m ago" },
  { title: "Status post scheduled", subtitle: "Weekly promotion goes live", time: "1h ago" },
  { title: "New product added", subtitle: "Shoes catalog updated", time: "3h ago" },
];

const QUICK_ACTIONS = [
  "Create Status Post",
  "View Inbox",
  "Pause AI",
  "Add Product",
];

const INBOX_CONVERSATIONS = [
  {
    id: "c1",
    name: "Aisha from Nairobi",
    message: "Can you share the latest pricing?",
    time: "2m",
    unread: 3,
    source: "Human",
    avatar: "AM",
  },
  {
    id: "c2",
    name: "James - Tech Store",
    message: "How do I update product availability?",
    time: "14m",
    unread: 0,
    source: "AI",
    avatar: "J",
  },
  {
    id: "c3",
    name: "Grace",
    message: "Thanks for the quick response!",
    time: "37m",
    unread: 1,
    source: "Human",
    avatar: "G",
  },
  {
    id: "c4",
    name: "Michael",
    message: "Please pause the AI for tonight.",
    time: "1h",
    unread: 0,
    source: "AI",
    avatar: "M",
  },
];

const INBOX_TAB_ITEMS = ["All", "Unread", "AI", "Human"] as const;

const INBOX_MESSAGES = {
  c1: [
    { from: "customer", text: "Can you share the latest pricing?", time: "2:13 PM" },
    { from: "agent", text: "Sure — our starter plan is available from $29/month.", time: "2:14 PM" },
    { from: "customer", text: "Great, and is there a free trial?", time: "2:15 PM" },
  ],
  c2: [
    { from: "agent", text: "You can edit availability in Catalog > Products.", time: "1:35 PM" },
    { from: "customer", text: "Got it, thanks!", time: "1:36 PM" },
  ],
  c3: [
    { from: "customer", text: "Thanks for the quick response!", time: "12:05 PM" },
    { from: "agent", text: "Happy to help — let me know if you need anything else.", time: "12:06 PM" },
  ],
  c4: [
    { from: "customer", text: "Please pause the AI for tonight.", time: "11:20 AM" },
    { from: "agent", text: "Sure, I’ll pause it from 9PM tonight.", time: "11:21 AM" },
  ],
};

const CUSTOMER_PROFILE = {
  name: "Aisha Mwangi",
  company: "Nairobi Essentials",
  phone: "+254 712 345 678",
  email: "aisha@nairobiessentials.co.ke",
  location: "Nairobi, Kenya",
  tags: ["VIP", "Retail", "High priority"],
  status: "Active",
  lastOrder: "2 days ago",
};

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Home");
  const [activeConversation, setActiveConversation] = useState<string>("c1");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<(typeof INBOX_TAB_ITEMS)[number]>("All");

  return (
    <div className="h-screen min-h-screen bg-[#FFFFFF] text-[#111827]">
      {/* Desktop fixed left sidebar */}
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:w-64 md:flex md:flex-col md:pt-6 bg-[#FFFFFF] border-r border-[#E5E7EB]">
        <div className="px-4 pb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-[#22C55E] flex items-center justify-center text-white font-bold">S</div>
            <span className="text-lg font-bold">Sokoos</span>
          </div>
        </div>

        <nav className="flex-1 px-2 overflow-y-auto">
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ label, href, Icon }) => {
              const active = selected === label;
              return (
                <li key={href}>
                  <button
                    onClick={() => setSelected(label)}
                    className={`w-full text-left flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[#22C55E] text-white"
                        : "text-[#111827] hover:bg-[#F3F4F6] hover:text-[#111827]"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${active ? "opacity-100" : "opacity-80"}`} />
                    <span>{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile top header with menu button */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#FFFFFF] border-b border-[#E5E7EB] flex items-center px-4 z-30">
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="mr-3 inline-flex items-center justify-center rounded-md p-2 text-[#111827] hover:bg-[#F3F4F6]"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-[#22C55E] flex items-center justify-center text-white font-bold">S</div>
          <span className="font-semibold">Sokoos</span>
        </div>
      </header>

      {/* Mobile slide-over sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#FFFFFF] border-r border-[#E5E7EB] p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-[#22C55E] flex items-center justify-center text-white font-bold">S</div>
                <span className="font-semibold">Sokoos</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-md hover:bg-[#F3F4F6]">
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav>
              <ul className="space-y-1">
                {NAV_ITEMS.map(({ label, href, Icon }) => {
                  const active = selected === label;
                  return (
                    <li key={href}>
                      <button
                        onClick={() => {
                          setSelected(label);
                          setMobileOpen(false);
                        }}
                        className={`w-full text-left flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          active
                            ? "bg-[#22C55E] text-white"
                            : "text-[#111827] hover:bg-[#F3F4F6] hover:text-[#111827]"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Main content area. On desktop, add left padding to allow for fixed sidebar. On mobile, add top padding to account for the header. */}
      <main className="h-full md:pl-64 pt-14 md:pt-0">
        <div className="max-w-7xl mx-auto h-full p-4">
          {/* Render placeholder pages based on selected state */}
          {selected === "Home" && (
            <div className="space-y-6">
              <div className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#22C55E]">Good Afternoon, Frank 👋</p>
                    <h1 className="mt-2 text-3xl font-semibold text-[#111827]">Welcome back to Sokoos</h1>
                    <p className="mt-2 text-sm text-[#6B7280]">Here’s what’s happening with your business today.</p>
                  </div>
                  <div className="rounded-2xl bg-[#F9FAFB] px-4 py-2 text-sm text-[#111827]">
                    Updated just now
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {STAT_CARDS.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-5 shadow-sm">
                    <p className="text-sm font-medium text-[#6B7280]">{stat.label}</p>
                    <div className="mt-4 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-3xl font-semibold text-[#111827]">{stat.value}</p>
                      </div>
                      <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#16A34A]">
                        {stat.delta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
                <section className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Recent Activity</p>
                      <h2 className="mt-2 text-xl font-semibold text-[#111827]">What happened recently</h2>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    {RECENT_ACTIVITY.map((item) => (
                      <div key={item.title} className="rounded-3xl bg-[#F9FAFB] p-4">
                        <div className="flex items-center justify-between gap-4">
                          <p className="font-semibold text-[#111827]">{item.title}</p>
                          <span className="text-xs text-[#6B7280]">{item.time}</span>
                        </div>
                        <p className="mt-2 text-sm text-[#6B7280]">{item.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Quick Actions</p>
                    <h2 className="mt-2 text-xl font-semibold text-[#111827]">Jump into work</h2>
                  </div>
                  <div className="mt-6 grid gap-3">
                    {QUICK_ACTIONS.map((action) => (
                      <button
                        key={action}
                        type="button"
                        className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-left text-sm font-medium text-[#111827] transition hover:border-[#22C55E] hover:bg-[#ECFDF5]"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          )}
          {selected === "Inbox" && (
            <div className="grid gap-4 xl:grid-cols-[280px_minmax(0,1fr)_320px]">
              <section className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] shadow-sm">
                <div className="border-b border-[#E5E7EB] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold text-[#111827]">Conversations</h2>
                      <p className="text-sm text-[#6B7280]">Recent messages and active chats</p>
                    </div>
                    <button className="rounded-full bg-[#F9FAFB] px-3 py-1 text-xs font-semibold text-[#111827] hover:bg-[#F3F4F6]">
                      New
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 px-4 pb-4">
                  {INBOX_TAB_ITEMS.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                        activeTab === tab
                          ? "bg-[#22C55E] text-white"
                          : "bg-[#F3F4F6] text-[#111827] hover:bg-[#E5E7EB]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="p-4">
                  <div className="mb-4 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2">
                    <div className="flex items-center gap-2 text-[#6B7280]">
                      <Search className="h-4 w-4" />
                      <input
                        type="search"
                        placeholder="Search conversations"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        className="w-full bg-transparent text-sm text-[#111827] outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    {INBOX_CONVERSATIONS.filter((conversation) => {
                      if (activeTab === "Unread") {
                        return conversation.unread > 0;
                      }
                      if (activeTab === "AI") {
                        return conversation.source === "AI";
                      }
                      if (activeTab === "Human") {
                        return conversation.source === "Human";
                      }
                      return true;
                    })
                      .filter((conversation) =>
                        conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        conversation.message.toLowerCase().includes(searchQuery.toLowerCase()),
                      )
                      .map((conversation) => {
                      const active = conversation.id === activeConversation;
                      return (
                        <button
                          key={conversation.id}
                          onClick={() => setActiveConversation(conversation.id)}
                          className={`w-full rounded-3xl border px-4 py-4 text-left transition ${
                            active
                              ? "border-[#22C55E] bg-[#ECFDF5]"
                              : "border-transparent bg-[#FFFFFF] hover:border-[#E5E7EB] hover:bg-[#F9FAFB]"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22C55E] text-sm font-semibold text-white">
                                {conversation.avatar}
                              </div>
                              <div>
                                <p className="font-semibold text-[#111827]">{conversation.name}</p>
                                <p className="text-xs text-[#6B7280]">{conversation.source}</p>
                              </div>
                            </div>
                            <span className="text-xs text-[#6B7280]">{conversation.time}</span>
                          </div>
                          <div className="mt-2 flex items-center justify-between gap-2 text-sm text-[#6B7280]">
                            <p>{conversation.message}</p>
                            {conversation.unread > 0 ? (
                              <span className="rounded-full bg-[#22C55E] px-2 py-0.5 text-[10px] font-semibold text-white">
                                {conversation.unread}
                              </span>
                            ) : null}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] shadow-sm">
                <div className="border-b border-[#E5E7EB] p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#6B7280]">Live chat</p>
                      <h2 className="text-xl font-semibold text-[#111827]">{INBOX_CONVERSATIONS.find((item) => item.id === activeConversation)?.name}</h2>
                    </div>
                    <div className="rounded-2xl bg-[#F9FAFB] px-3 py-2 text-sm text-[#111827]">
                      Active now
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between p-4">
                  <div className="space-y-3 overflow-y-auto pr-2">
                    {INBOX_MESSAGES[activeConversation].map((message, index) => (
                      <div key={`${message.time}-${index}`} className={`flex ${message.from === "agent" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[74%] rounded-3xl px-4 py-3 text-sm ${
                          message.from === "agent"
                            ? "bg-[#22C55E] text-white"
                            : "bg-[#F3F4F6] text-[#111827]"
                        }`}>
                          {message.text}
                          <div className="mt-1 text-[11px] text-[#6B7280]">{message.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-3">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-[#6B7280]" />
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full bg-transparent text-sm text-[#111827] outline-none"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] shadow-sm p-6">
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Customer</p>
                    <h2 className="mt-2 text-xl font-semibold text-[#111827]">{CUSTOMER_PROFILE.name}</h2>
                    <p className="text-sm text-[#6B7280]">{CUSTOMER_PROFILE.company}</p>
                  </div>
                  <div className="space-y-3 rounded-3xl bg-[#F9FAFB] p-4">
                    <div className="flex items-center gap-3 text-sm text-[#111827]">
                      <Phone className="h-4 w-4" />
                      <span>{CUSTOMER_PROFILE.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#111827]">
                      <Tag className="h-4 w-4" />
                      <span>{CUSTOMER_PROFILE.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#111827]">
                      <Clock className="h-4 w-4" />
                      <span>Last order: {CUSTOMER_PROFILE.lastOrder}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#111827]">
                      <Phone className="h-4 w-4" />
                      <span>{CUSTOMER_PROFILE.location}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {CUSTOMER_PROFILE.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#16A34A]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          )}
          {selected === "Status Scheduler" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Status Scheduler</div>
          )}
          {selected === "Broadcasts" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Broadcasts</div>
          )}
          {selected === "Customers" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Customers</div>
          )}
          {selected === "Catalog" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Catalog</div>
          )}
          {selected === "AI Assistant" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos AI Assistant</div>
          )}
          {selected === "Analytics" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Analytics</div>
          )}
          {selected === "Settings" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Settings</div>
          )}
        </div>
      </main>
    </div>
  );
}
