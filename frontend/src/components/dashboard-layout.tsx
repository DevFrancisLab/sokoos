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
  Smile,
  Paperclip,
  Image,
  Send,
  Plus,
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

const CARD = "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg";
const CARD_SOFT = "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg";
const SECTION_HEADING = "text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7280]";

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

const SCHEDULED_POSTS = [
  {
    id: "p1",
    caption: "Launch the new summer bundle with a discount offer.",
    date: "Jul 08, 2026",
    time: "09:00 AM",
    image: "Summer bundle",
  },
  {
    id: "p2",
    caption: "Share a customer success story to drive engagement.",
    date: "Jul 10, 2026",
    time: "04:00 PM",
    image: "Customer testimonial",
  },
  {
    id: "p3",
    caption: "Publish a flash sale reminder for weekend shoppers.",
    date: "Jul 12, 2026",
    time: "07:30 PM",
    image: "Flash sale",
  },
];

const CUSTOMERS = [
  {
    id: "u1",
    avatar: "AM",
    name: "Aisha Mwangi",
    phone: "+254 712 345 678",
    leadStatus: "Hot lead",
    interestedProduct: "20 Mbps",
    lastInteraction: "Today, 11:20 AM",
  },
  {
    id: "u2",
    avatar: "JN",
    name: "James Njoroge",
    phone: "+254 700 123 456",
    leadStatus: "Warm lead",
    interestedProduct: "Business Package",
    lastInteraction: "Yesterday, 04:15 PM",
  },
  {
    id: "u3",
    avatar: "GR",
    name: "Grace Wanjiru",
    phone: "+254 733 987 654",
    leadStatus: "New lead",
    interestedProduct: "10 Mbps",
    lastInteraction: "Jul 02, 2026",
  },
  {
    id: "u4",
    avatar: "MK",
    name: "Moses Kimani",
    phone: "+254 711 222 333",
    leadStatus: "Hot lead",
    interestedProduct: "Business Package",
    lastInteraction: "Jul 03, 2026",
  },
  {
    id: "u5",
    avatar: "SR",
    name: "Susan Rono",
    phone: "+254 714 555 777",
    leadStatus: "Cold lead",
    interestedProduct: "10 Mbps",
    lastInteraction: "Jul 01, 2026",
  },
];

const PRODUCTS = [
  { id: "prod1", name: "10 Mbps", price: "KSh 1500", active: true },
  { id: "prod2", name: "20 Mbps", price: "KSh 2500", active: true },
  { id: "prod3", name: "Business Package", price: "KSh 5000", active: false },
];

const ANALYTICS_METRICS = [
  { label: "Messages", value: "13.4k", delta: "+12%", description: "Compared to last week" },
  { label: "Leads", value: "1,280", delta: "+8%", description: "Warm and new leads" },
  { label: "Sales", value: "KSh 4.2M", delta: "+18%", description: "Revenue from campaigns" },
  { label: "AI Resolution", value: "78%", delta: "+6%", description: "Handled without human support" },
];

const ANALYTICS_CHART = [
  { label: "Mon", value: 48 },
  { label: "Tue", value: 62 },
  { label: "Wed", value: 55 },
  { label: "Thu", value: 71 },
  { label: "Fri", value: 85 },
  { label: "Sat", value: 53 },
  { label: "Sun", value: 60 },
];

const TOP_QUESTIONS = [
  { question: "How do I upgrade my plan?", volume: "320" },
  { question: "What are your business hours?", volume: "290" },
  { question: "Can I get a trial?", volume: "215" },
];

const POPULAR_PRODUCTS = [
  { name: "20 Mbps", sales: "520" },
  { name: "Business Package", sales: "320" },
  { name: "10 Mbps", sales: "270" },
];

const LANGUAGES = ["English", "Kiswahili"] as const;
const PERSONALITIES = ["Friendly", "Professional", "Sales Focused"] as const;

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
  leadStatus: "Hot lead",
  interestedProducts: ["10 Mbps", "20 Mbps", "Business Package"],
};

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Home");
  const [activeConversation, setActiveConversation] = useState<string>("c1");
  const [searchQuery, setSearchQuery] = useState("");
   const [customerSearch, setCustomerSearch] = useState("");
  const [activeTab, setActiveTab] = useState<(typeof INBOX_TAB_ITEMS)[number]>("All");
  const filteredCustomers = CUSTOMERS.filter((customer) => {
    const query = customerSearch.toLowerCase();
    return (
      customer.name.toLowerCase().includes(query) ||
      customer.phone.toLowerCase().includes(query) ||
      customer.interestedProduct.toLowerCase().includes(query) ||
      customer.leadStatus.toLowerCase().includes(query)
    );
  });
  const [scheduledPosts, setScheduledPosts] = useState(SCHEDULED_POSTS);
  const [newPost, setNewPost] = useState({
    image: "",
    caption: "",
    date: "",
    time: "",
  });
  const [products, setProducts] = useState(PRODUCTS);
  const chartMax = Math.max(...ANALYTICS_CHART.map((point) => point.value));
  const [aiEnabled, setAiEnabled] = useState(true);
  const [businessHours, setBusinessHours] = useState("Mon–Fri, 8:00 AM - 6:00 PM");
  const [humanTakeover, setHumanTakeover] = useState(true);
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>("English");
  const [personality, setPersonality] = useState<(typeof PERSONALITIES)[number]>("Friendly");
  const [imageLabel, setImageLabel] = useState("No file selected");

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
              <div className={CARD}>
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
                  <div key={stat.label} className={`${CARD} p-5`}> 
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
                <section className={CARD}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Recent Activity</p>
                      <h2 className="mt-2 text-xl font-semibold text-[#111827]">What happened recently</h2>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    {RECENT_ACTIVITY.map((item) => (
                      <div key={item.title} className="rounded-3xl bg-[#F9FAFB] p-4 transition hover:bg-[#ECFDF5]">
                        <div className="flex items-center justify-between gap-4">
                          <p className="font-semibold text-[#111827]">{item.title}</p>
                          <span className="text-xs text-[#6B7280]">{item.time}</span>
                        </div>
                        <p className="mt-2 text-sm text-[#6B7280]">{item.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className={CARD}>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Quick Actions</p>
                    <h2 className="mt-2 text-xl font-semibold text-[#111827]">Jump into work</h2>
                  </div>
                  <div className="mt-6 grid gap-3">
                    {QUICK_ACTIONS.map((action) => (
                      <button
                        key={action}
                        type="button"
                        className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-left text-sm font-semibold text-[#111827] transition hover:border-[#22C55E] hover:bg-[#ECFDF5]"
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
              <section className={CARD}>
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

              <section className={CARD}>
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
                <div className="flex h-[calc(100vh-260px)] flex-col justify-between p-4">
                  <div className="space-y-4 overflow-y-auto pr-2">
                    {INBOX_MESSAGES[activeConversation].map((message, index) => {
                      const isAgent = message.from === "agent";
                      return (
                        <div key={`${message.time}-${index}`} className={`flex ${isAgent ? "justify-start" : "justify-end"}`}>
                          <div className={`rounded-3xl px-4 py-3 text-sm ${
                            isAgent
                              ? "bg-[#F3F4F6] text-[#111827]"
                              : "bg-[#22C55E] text-white"
                          }`}>
                            <p>{message.text}</p>
                            <div className="mt-1 text-[11px] text-[#6B7280] text-right">{message.time}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <button type="button" className="rounded-full p-2 text-[#6B7280] hover:bg-[#F3F4F6]">
                        <Smile className="h-5 w-5" />
                      </button>
                      <button type="button" className="rounded-full p-2 text-[#6B7280] hover:bg-[#F3F4F6]">
                        <Paperclip className="h-5 w-5" />
                      </button>
                      <button type="button" className="rounded-full p-2 text-[#6B7280] hover:bg-[#F3F4F6]">
                        <Image className="h-5 w-5" />
                      </button>
                      <input
                        type="text"
                        placeholder="Type a message"
                        className="min-w-0 flex-1 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
                      />
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full bg-[#22C55E] px-4 py-3 text-white shadow-sm transition hover:bg-[#16A34A]"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section className={`${CARD} p-6`}>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Customer</p>
                    <h2 className="mt-2 text-xl font-semibold text-[#111827]">{CUSTOMER_PROFILE.name}</h2>
                    <p className="text-sm text-[#6B7280]">{CUSTOMER_PROFILE.company}</p>
                  </div>
                  <div className="space-y-4 rounded-3xl bg-[#F9FAFB] p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-[#111827]">
                        <span className="font-medium">Phone</span>
                        <span>{CUSTOMER_PROFILE.phone}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-[#111827]">
                        <span className="font-medium">Lead status</span>
                        <span className="rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#16A34A]">{CUSTOMER_PROFILE.leadStatus}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-[#111827]">
                        <span className="font-medium">Location</span>
                        <span>{CUSTOMER_PROFILE.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-[#111827]">
                        <span className="font-medium">Last order</span>
                        <span>{CUSTOMER_PROFILE.lastOrder}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-medium text-sm text-[#111827]">Tags</span>
                        <div className="flex flex-wrap gap-2">
                          {CUSTOMER_PROFILE.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#16A34A]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-[#E5E7EB] bg-white p-4">
                      <p className="text-sm font-semibold text-[#111827]">Interested products</p>
                      <div className="mt-3 space-y-2">
                        {CUSTOMER_PROFILE.interestedProducts.map((product) => (
                          <div key={product} className="rounded-2xl bg-[#F9FAFB] px-3 py-2 text-sm text-[#111827]">
                            {product}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">AI Assistant</p>
                        <h3 className="mt-2 text-lg font-semibold text-[#111827]">Suggested Reply</h3>
                      </div>
                      <span className="rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#16A34A]">Smart</span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-[#6B7280]">I can help schedule a demo, answer pricing questions, or clarify package details quickly.</p>
                    <div className="mt-4 rounded-3xl bg-[#F9FAFB] p-4 text-sm text-[#111827]">
                      "Hi Aisha, thanks for reaching out! Our 20 Mbps plan includes unlimited data and free installation. Would you like me to share the full pricing details?"
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button className="rounded-2xl bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#16A34A]">Send Reply</button>
                      <button className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] hover:bg-[#F3F4F6]">Regenerate</button>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-5 shadow-sm">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Quick Products</p>
                    <div className="mt-4 space-y-3">
                      {CUSTOMER_PROFILE.interestedProducts.map((product) => (
                        <div key={product} className="flex items-center justify-between rounded-3xl bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827]">
                          <div>
                            <p className="font-semibold">{product}</p>
                          </div>
                          <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#16A34A]">Add</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
          {selected === "Status Scheduler" && (
            <div className={`space-y-6 ${CARD}`}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Status Scheduler</p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Schedule WhatsApp status updates</h2>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl">
                    Plan and publish status posts ahead of time. Use AI to generate copy, then schedule images and captions for the week.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"
                >
                  <Plus className="h-4 w-4" />
                  Create Status Post
                </button>
              </div>

              <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                <section className={CARD}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Scheduled posts</p>
                      <h3 className="mt-2 text-lg font-semibold text-[#111827]">Upcoming posts</h3>
                    </div>
                    <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#6B7280]">Mock data</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {scheduledPosts.map((post) => (
                      <div key={post.id} className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold text-[#111827]">{post.caption}</p>
                            <p className="mt-2 text-sm text-[#6B7280]">{post.image}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-[#111827]">{post.date}</p>
                            <p className="text-sm text-[#6B7280]">{post.time}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] text-[#6B7280]">
                          <span className="rounded-full bg-white px-3 py-1 border border-[#E5E7EB]">Scheduled</span>
                          <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-[#16A34A]">Status</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className={CARD}>
                  <div className="mb-6">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">New status post</p>
                    <h3 className="mt-2 text-lg font-semibold text-[#111827]">Create your post</h3>
                  </div>
                  <div className="space-y-5">
                    <label className="block text-sm font-medium text-[#111827]">
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] file:mr-4 file:rounded-full file:border-0 file:bg-[#22C55E] file:px-4 file:py-2 file:text-sm file:text-white"
                        onChange={(event) => {
                          const fileName = event.target.files?.[0]?.name;
                          setNewPost((prev) => ({ ...prev, image: fileName ?? "" }));
                          setImageLabel(fileName ?? "No file selected");
                        }}
                      />
                      <p className="mt-2 text-xs text-[#6B7280]">{imageLabel}</p>
                    </label>
                    <label className="block text-sm font-medium text-[#111827]">
                      Caption
                        <textarea
                          value={newPost.caption}
                          onChange={(event) => setNewPost((prev) => ({ ...prev, caption: event.target.value }))}
                          placeholder="Write a short caption for this status post"
                          className="mt-2 h-32 w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
                        />
                    </label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-medium text-[#111827]">
                        Date
                        <input
                          type="date"
                          value={newPost.date}
                          onChange={(event) => setNewPost((prev) => ({ ...prev, date: event.target.value }))}
                          className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
                        />
                      </label>
                      <label className="block text-sm font-medium text-[#111827]">
                        Time
                        <input
                          type="time"
                          value={newPost.time}
                          onChange={(event) => setNewPost((prev) => ({ ...prev, time: event.target.value }))}
                          className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
                        />
                      </label>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6] sm:w-auto"
                      >
                        <Image className="h-4 w-4" />
                        Generate With AI
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-2xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A] sm:w-auto"
                      >
                        Schedule Post
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}
          {selected === "Broadcasts" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Broadcasts</div>
          )}
          {selected === "Customers" && (
            <div className={`space-y-6 ${CARD}`}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Customers</p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Customer management</h2>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl">
                    Search and review your WhatsApp leads with easy access to contact details and customer statuses.
                  </p>
                </div>
                <div className="relative w-full sm:w-auto">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
                  <input
                    type="text"
                    value={customerSearch}
                    onChange={(event) => setCustomerSearch(event.target.value)}
                    placeholder="Search customers by name, phone, product or status"
                    className="w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] py-3 pl-11 pr-4 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5] sm:w-85"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] shadow-sm">
                <table className="min-w-full divide-y divide-[#E5E7EB] text-left">
                  <thead className="bg-[#F9FAFB]">
                    <tr>
                      <th className="px-6 py-4 text-sm font-semibold text-[#6B7280]">Avatar</th>
                      <th className="px-6 py-4 text-sm font-semibold text-[#6B7280]">Name</th>
                      <th className="px-6 py-4 text-sm font-semibold text-[#6B7280]">Phone</th>
                      <th className="px-6 py-4 text-sm font-semibold text-[#6B7280]">Lead Status</th>
                      <th className="px-6 py-4 text-sm font-semibold text-[#6B7280]">Interested Product</th>
                      <th className="px-6 py-4 text-sm font-semibold text-[#6B7280]">Last Interaction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB] bg-white">
                    {filteredCustomers.map((customer) => (
                      <tr key={customer.id} className="hover:bg-[#F3F4F6] transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ECFDF5] text-sm font-semibold text-[#16A34A]">
                            {customer.avatar}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-medium text-[#111827]">{customer.name}</p>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#6B7280]">{customer.phone}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                            customer.leadStatus === "Hot lead"
                              ? "bg-[#FEE2E2] text-[#B91C1C]"
                              : customer.leadStatus === "Warm lead"
                              ? "bg-[#FEF3C7] text-[#92400E]"
                              : "bg-[#EFF6FF] text-[#1D4ED8]"
                          }`}>
                            {customer.leadStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#6B7280]">{customer.interestedProduct}</td>
                        <td className="px-6 py-4 text-sm text-[#6B7280]">{customer.lastInteraction}</td>
                      </tr>
                    ))}
                    {filteredCustomers.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center text-sm text-[#6B7280]">
                          No customers match your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {selected === "Catalog" && (
            <div className={`space-y-6 ${CARD}`}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Catalog</p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Product catalog</h2>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl">
                    Manage your product offerings with active toggles, edit actions, and quick deletes.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"
                >
                  Add Product
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <div key={product.id} className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-[#6B7280]">{product.name}</p>
                        <p className="mt-3 text-3xl font-semibold text-[#111827]">{product.price}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setProducts((current) =>
                            current.map((item) =>
                              item.id === product.id ? { ...item, active: !item.active } : item
                            )
                          )
                        }
                        className={`rounded-full px-3 py-2 text-xs font-semibold ${
                          product.active
                            ? "bg-[#DCFCE7] text-[#166534]"
                            : "bg-[#E5E7EB] text-[#6B7280]"
                        }`}
                      >
                        {product.active ? "Active" : "Inactive"}
                      </button>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="rounded-2xl border border-[#FCA5A5] bg-[#FEE2E2] px-4 py-2 text-sm font-semibold text-[#B91C1C] transition hover:bg-[#FECACA]"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selected === "AI Assistant" && (
            <div className={`space-y-6 ${CARD}`}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">AI Assistant</p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Business AI settings</h2>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl">
                    Keep your AI assistant aligned with business hours, handoff rules, languages and tone without the technical jargon.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setAiEnabled((value) => !value)}
                  className={`inline-flex items-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    aiEnabled ? "bg-[#22C55E] text-white" : "bg-[#E5E7EB] text-[#6B7280]"
                  }`}
                >
                  {aiEnabled ? "Enabled" : "Disabled"}
                </button>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <section className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-[#111827]">Business Hours</p>
                          <p className="mt-2 text-sm text-[#6B7280]">Set the hours when support should be prioritized.</p>
                        </div>
                        <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold text-[#0C4A6E]">{businessHours}</span>
                      </div>
                    </div>
                    <div className="rounded-3xl bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-[#111827]">Human Takeover</p>
                          <p className="mt-2 text-sm text-[#6B7280]">Allow a human agent to step in when the customer needs real support.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setHumanTakeover((value) => !value)}
                          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                            humanTakeover
                              ? "bg-[#DCFCE7] text-[#166534]"
                              : "bg-[#E5E7EB] text-[#6B7280]"
                          }`}
                        >
                          {humanTakeover ? "On" : "Off"}
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="space-y-6 rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Languages</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {LANGUAGES.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setLanguage(option)}
                          className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                            language === option
                              ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]"
                              : "border-[#E5E7EB] bg-white text-[#111827] hover:bg-[#F3F4F6]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Personality</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {PERSONALITIES.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setPersonality(option)}
                          className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                            personality === option
                              ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]"
                              : "border-[#E5E7EB] bg-white text-[#111827] hover:bg-[#F3F4F6]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 text-sm text-[#6B7280]">
                    <p className="font-semibold text-[#111827]">Note</p>
                    <p className="mt-2">
                      These settings keep your assistant sounding professional and helpful while making it easy to hand off conversations to a person.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          )}
          {selected === "Analytics" && (
            <div className={`space-y-6 ${CARD}`}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Analytics</p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Business performance overview</h2>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl">
                    Monitor messaging trends, lead growth, sales performance and how AI is resolving customer requests.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {ANALYTICS_METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 shadow-sm">
                    <p className="text-sm font-medium text-[#6B7280]">{metric.label}</p>
                    <div className="mt-4 flex items-end justify-between gap-4">
                      <p className="text-3xl font-semibold text-[#111827]">{metric.value}</p>
                      <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#166534]">{metric.delta}</span>
                    </div>
                    <p className="mt-3 text-sm text-[#6B7280]">{metric.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
                <section className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">Weekly messages</p>
                      <p className="mt-2 text-sm text-[#6B7280]">Volume of incoming messages per day.</p>
                    </div>
                    <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#6B7280]">Mock trends</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-end gap-3">
                      {ANALYTICS_CHART.map((point) => {
                        const height = (point.value / chartMax) * 160;
                        return (
                          <div key={point.label} className="flex-1 text-center">
                            <div className="mx-auto h-40 w-full max-w-12 rounded-4xl bg-[#F3F4F6] p-1">
                              <div className="mx-auto h-full rounded-4xl bg-[#22C55E]" style={{ height: `${height}px`, width: '100%' }} />
                            </div>
                            <p className="mt-3 text-sm text-[#6B7280]">{point.label}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="rounded-3xl bg-[#F9FAFB] p-4 text-sm text-[#6B7280]">
                      This chart shows weekly engagement across your WhatsApp campaign messages.
                    </div>
                  </div>
                </section>

                <section className="space-y-6 rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">Top Questions</p>
                    <div className="mt-4 space-y-3">
                      {TOP_QUESTIONS.map((item) => (
                        <div key={item.question} className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                          <p className="font-medium text-[#111827]">{item.question}</p>
                          <p className="mt-2 text-sm text-[#6B7280]">{item.volume} requests</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">Popular Products</p>
                    <div className="mt-4 space-y-3">
                      {POPULAR_PRODUCTS.map((product) => (
                        <div key={product.name} className="flex items-center justify-between rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                          <div>
                            <p className="font-medium text-[#111827]">{product.name}</p>
                            <p className="text-sm text-[#6B7280]">Top choice for new customers</p>
                          </div>
                          <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold text-[#0C4A6E]">{product.sales} sold</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}
          {selected === "Settings" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Settings</div>
          )}
        </div>
      </main>
    </div>
  );
}
