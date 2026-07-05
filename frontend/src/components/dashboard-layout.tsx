import { useEffect, useRef, useState } from "react";
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
  ChevronLeft,
  ChevronRight,
  Search,
  MessageCircle,
  Clock,
  Phone,
  Tag,
  Smile,
  Paperclip,
  Image,
  Send,
  Bot,
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
  { label: "Team Takeovers", value: "72", delta: "-4%" },
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

const AI_ASSISTANT_TABS = ["Business Knowledge", "AI Settings", "Test AI", "Escalation Rules", "Conversation Policies"] as const;
const BUSINESS_INFO = {
  businessName: "Sokoos Internet Solutions",
  businessType: "Telecom & ISP",
  aboutUs: "We deliver affordable, reliable internet solutions for small and medium businesses across Nairobi and surrounding regions.",
  businessHours: "Mon–Fri 8:00 AM - 6:00 PM",
  serviceAreas: "Nairobi, Thika, Mombasa, Kisumu",
  paymentMethods: "Mobile money, bank transfer, cash on delivery",
};

const PRODUCTS_AND_SERVICES = [
  { title: "10 Mbps Internet", price: "KES 2,500/month" },
  { title: "20 Mbps Internet", price: "KES 3,500/month" },
  { title: "Business Package", price: "KES 5,000/month" },
];

const FAQ_ITEMS = [
  {
    question: "Do you offer installation?",
    answer: "Yes, installation costs KES 2,000.",
  },
];

const BUSINESS_POLICIES = {
  returnPolicy: "Customers can request a refund within 7 days of installation if the service is not delivered as promised.",
  deliveryPolicy: "Installation appointments are scheduled within 48 hours of payment confirmation.",
  cancellationPolicy: "Customers may cancel within 24 hours of booking without penalty.",
};

const AI_SETTINGS_ITEMS = [
  { setting: "Conversation Tone", value: "Friendly & Professional", status: "Active" },
  { setting: "Response Language", value: "English (default) + Kiswahili", status: "Active" },
  { setting: "Max Response Length", value: "500 characters", status: "Active" },
  { setting: "Follow-up Frequency", value: "Auto-follow-up after 2 hours of inactivity", status: "Active" },
];

const ESCALATION_RULES_ITEMS = [
  { trigger: "Angry sentiment detected", action: "Escalate to owner", priority: "High" },
  { trigger: "3+ customer questions unanswered", action: "Escalate & notify owner", priority: "High" },
  { trigger: "Request for billing info", action: "Escalate to owner", priority: "Critical" },
  { trigger: "Refund request", action: "Escalate to owner", priority: "Critical" },
];

const CONVERSATION_POLICIES_ITEMS = [
  { policy: "Max conversation length", value: "50 messages before summary required" },
  { policy: "Inactivity timeout", value: "Close after 24 hours of no messages" },
  { policy: "Customer re-engagement", value: "Send reminder after 7 days of inactivity" },
  { policy: "Data retention", value: "Keep conversation history for 90 days" },
];

const INBOX_CONVERSATIONS = [
  {
    id: "c1",
    name: "Aisha from Nairobi",
    phone: "+254712345678",
    message: "Can you share the latest pricing?",
    time: "2m",
    badge: 3,
    source: "owner",
    isSaved: true,
    avatar: "AM",
  },
  {
    id: "c2",
    name: "James - Tech Store",
    phone: "+254700123456",
    message: "How do I update product availability?",
    time: "14m",
    badge: 0,
    source: "ai_handling",
    isSaved: true,
    avatar: "J",
  },
  {
    id: "c3",
    name: "Grace",
    phone: "+254733987654",
    message: "Thanks for the quick response!",
    time: "37m",
    badge: 1,
    source: "needs_attention",
    needsAttention: true,
    isSaved: true,
    avatar: "G",
  },
  {
    id: "c4",
    name: "Michael",
    phone: "+254711222333",
    message: "Please pause the AI for tonight.",
    time: "1h",
    badge: 0,
    source: "ai_handled",
    isSaved: true,
    avatar: "M",
  },
  {
    id: "c5",
    name: null,
    phone: "+254712345678",
    message: "I’m interested in your business package — can you share details?",
    time: "Yesterday",
    badge: 0,
    source: "owner",
    isSaved: false,
    avatar: "UC",
  },
];

const formatConversationTime = (time: string | undefined) => time || "Unknown";

const INBOX_TAB_ITEMS = ["All", "AI", "Owner", "Needs Attention"] as const;

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
  c5: [
    { from: "customer", text: "I’m interested in your business package — can you share details?", time: "4:10 PM" },
    { from: "agent", text: "Absolutely — I’ll send you the package details now.", time: "4:12 PM" },
  ],
};

const CUSTOMER_PROFILES: Record<string, {
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
}> = {
  c1: {
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
  },
  c2: {
    name: "James Njoroge",
    company: "Tech Store",
    phone: "+254 700 123 456",
    email: "james@techstore.co.ke",
    location: "Thika, Kenya",
    tags: ["Team", "Wholesale", "Priority"],
    status: "Active",
    lastOrder: "Yesterday",
    leadStatus: "Warm lead",
    interestedProducts: ["Business Package", "20 Mbps"],
  },
  c3: {
    name: "Grace Wanjiru",
    company: "Wanjiru Boutique",
    phone: "+254 733 987 654",
    email: "grace@wanjiruboutique.co.ke",
    location: "Nairobi, Kenya",
    tags: ["New lead", "Fashion", "Important"],
    status: "Active",
    lastOrder: "3 days ago",
    leadStatus: "New lead",
    interestedProducts: ["10 Mbps", "20 Mbps"],
  },
  c4: {
    name: "Michael",
    company: "Service Solutions",
    phone: "+254 711 222 333",
    email: "michael@servicesolutions.co.ke",
    location: "Mombasa, Kenya",
    tags: ["AI", "Support", "Follow-up"],
    status: "Active",
    lastOrder: "Today",
    leadStatus: "Hot lead",
    interestedProducts: ["Business Package", "20 Mbps"],
  },
  c5: {
    name: "Unknown Customer",
    company: "New Inquiry",
    phone: "+254 712 345 678",
    email: "",
    location: "Nairobi, Kenya",
    tags: ["New lead", "Unknown", "Needs follow-up"],
    status: "New",
    lastOrder: "N/A",
    leadStatus: "New lead",
    interestedProducts: ["Business Package"],
  },
};

const OWNER_NAMES: Record<string, string> = {
  c1: "Owner",
  c3: "Owner",
};

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Home");
  const [activeConversation, setActiveConversation] = useState<string>("c1");
  const [searchQuery, setSearchQuery] = useState("");
   const [customerSearch, setCustomerSearch] = useState("");
  const [activeTab, setActiveTab] = useState<(typeof INBOX_TAB_ITEMS)[number]>("All");
  const activeConversationData = INBOX_CONVERSATIONS.find((item) => item.id === activeConversation);
  const activeCustomerProfile = CUSTOMER_PROFILES[activeConversation as keyof typeof CUSTOMER_PROFILES] ?? CUSTOMER_PROFILES.c1;
  const activeMessages = INBOX_MESSAGES[activeConversation as keyof typeof INBOX_MESSAGES] ?? [];
  const [sourceOverrides, setSourceOverrides] = useState<Record<string, string>>({});
  const getEffectiveSource = (id: string, original?: string) => sourceOverrides[id] ?? original ?? "owner";
  const effectiveActiveSource = getEffectiveSource(activeConversation, activeConversationData?.source);
  const activeAgentName = String(effectiveActiveSource).startsWith("ai") ? "Sokoos AI" : OWNER_NAMES[activeConversation] ?? "Owner";
  const toggleAiForActive = () => {
    const current = sourceOverrides[activeConversation] ?? activeConversationData?.source ?? "";
    if (String(current).startsWith("ai")) {
      setSourceOverrides((s) => ({ ...s, [activeConversation]: "owner" }));
    } else {
      setSourceOverrides((s) => ({ ...s, [activeConversation]: "ai_handling" }));
    }
  };
  const [messageInput, setMessageInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [aiAssistantTab, setAiAssistantTab] = useState<(typeof AI_ASSISTANT_TABS)[number]>("Business Knowledge");

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const height = Math.min(textarea.scrollHeight, 120);
    textarea.style.height = `${height}px`;
    textarea.style.overflowY = textarea.scrollHeight > 120 ? "auto" : "hidden";
  }, [messageInput]);
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
    source: "ai",
    needsAttention: true,
  });
  const [products, setProducts] = useState(PRODUCTS);
  const chartMax = Math.max(...ANALYTICS_CHART.map((point) => point.value));
  const [aiEnabled, setAiEnabled] = useState(true);
  const [businessHours, setBusinessHours] = useState("Mon–Fri, 8:00 AM - 6:00 PM");
  const [humanTakeover, setHumanTakeover] = useState(true);
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>("English");
  const [personality, setPersonality] = useState<(typeof PERSONALITIES)[number]>("Friendly");
  const [imageLabel, setImageLabel] = useState("No file selected");
  const [customerCollapsed, setCustomerCollapsed] = useState(false);

  return (
    <div className="h-screen min-h-screen bg-[#FFFFFF] text-[#111827]">
      {/* Desktop fixed left sidebar */}
      <aside className={`hidden md:fixed md:inset-y-0 md:left-0 md:flex md:flex-col md:pt-6 bg-[#FFFFFF] border-r border-[#E5E7EB] transition-all duration-300 ease-out ${
        sidebarCollapsed ? "md:w-[80px]" : "md:w-[240px]"
      }`}>
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-[#22C55E] flex items-center justify-center text-white font-bold">S</div>
              {!sidebarCollapsed && <span className="text-lg font-bold">Sokoos</span>}
            </div>
            <button
              type="button"
              onClick={() => setSidebarCollapsed((value) => !value)}
              title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] transition hover:bg-[#F3F4F6]"
            >
              {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <nav className={`flex-1 overflow-y-auto transition-all duration-300 ${sidebarCollapsed ? "px-1" : "px-2"}`}>
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ label, href, Icon }) => {
              const active = selected === label;
              return (
                <li key={href}>
                  <button
                    onClick={() => setSelected(label)}
                    title={label}
                    aria-label={label}
                    className={`w-full flex items-center gap-3 rounded-md py-2 text-sm font-medium transition-colors ${
                      sidebarCollapsed ? "justify-center" : "justify-start px-3"
                    } ${
                      active
                        ? "bg-[#22C55E] text-white"
                        : "text-[#111827] hover:bg-[#F3F4F6] hover:text-[#111827]"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${active ? "opacity-100" : "opacity-80"}`} />
                    {!sidebarCollapsed && <span>{label}</span>}
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
      <main className={`h-full pt-14 md:pt-0 transition-all duration-300 ${sidebarCollapsed ? "md:pl-[80px]" : "md:pl-[240px]"}`}>
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
            <div className={`grid h-[calc(100vh-4.5rem)] min-h-[calc(100vh-4.5rem)] gap-4 transition-all duration-300 ease-out items-stretch auto-rows-fr ${
              customerCollapsed ? "xl:grid-cols-[280px_minmax(0,1fr)]" : "xl:grid-cols-[280px_minmax(0,1fr)_320px]"
            }`}>
              <section className={`${CARD} h-full min-h-0 flex flex-col self-stretch overflow-hidden`}>
                <div className="border-b border-[#E5E7EB] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold text-[#111827]">Conversations</h2>
                      <p className="text-sm text-[#6B7280]">Recent messages and active chats</p>
                    </div>
                    {/* Removed 'New' button to simplify header per design request */}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 px-4 pb-4">
                  {INBOX_TAB_ITEMS.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition duration-200 ease-in-out ${
                        activeTab === tab
                          ? "bg-[#22C55E] text-white shadow-sm"
                          : "bg-[#F3F4F6] text-[#111827] hover:bg-[#ECFDF5] hover:-translate-y-0.5"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="flex min-h-0 flex-1 flex-col p-4">
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
                  <div className="flex-1 space-y-3 overflow-y-auto overflow-x-hidden pr-2 scroll-smooth custom-scrollbar">
                    {INBOX_CONVERSATIONS.filter((conversation) => {
                      const src = sourceOverrides[conversation.id] ?? conversation.source;
                      if (activeTab === "Needs Attention") {
                        return src === "needs_attention";
                      }
                      if (activeTab === "AI") {
                        return String(src).startsWith("ai");
                      }
                        if (activeTab === "Owner") {
                        return src === "owner";
                      }
                      return true;
                    })
                      .filter((conversation) =>
                        (conversation.name ?? "").toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (conversation.phone ?? "").toLowerCase().includes(searchQuery.toLowerCase()) ||
                        conversation.message.toLowerCase().includes(searchQuery.toLowerCase()),
                      )
                      .map((conversation) => {
                      const active = conversation.id === activeConversation;
                      const effectiveSource = sourceOverrides[conversation.id] ?? conversation.source;
                      return (
                        <button
                          key={conversation.id}
                          onClick={() => setActiveConversation(conversation.id)}
                          className={`w-full overflow-hidden rounded-3xl border px-3 py-3 text-left transition ${
                            active
                              ? "border-[#22C55E] bg-[#ECFDF5]"
                              : "border-transparent bg-[#FFFFFF] hover:border-[#E5E7EB] hover:bg-[#F9FAFB]"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex min-w-0 gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-sm font-semibold text-white">
                                {conversation.avatar}
                              </div>
                              <div className="min-w-0">
                                {conversation.isSaved && conversation.name ? (
                                  <div className="flex flex-wrap items-center gap-2">
                                    <p
                                      className="min-w-0 text-base font-medium text-[#111827] truncate"
                                      title={conversation.name}
                                    >
                                      {conversation.name.length > 22 ? `${conversation.name.slice(0, 22)}…` : conversation.name}
                                    </p>
                                    {effectiveSource === "needs_attention" ? (
                                      <span className="inline-flex items-center gap-1 rounded-full bg-[#fee2e2] px-2 py-1 text-xs font-semibold text-[#b91c1c]">
                                        <span className="inline-block h-2 w-2 rounded-full bg-[#b91c1c]" aria-hidden />
                                        Attention
                                      </span>
                                    ) : null}
                                  </div>
                                ) : (
                                  <div className="space-y-0.5">
                                    <p
                                      className="text-base font-medium text-[#111827] truncate"
                                      title={conversation.phone ?? "Unknown Customer"}
                                    >
                                      {conversation.phone ?? "Unknown Customer"}
                                    </p>
                                  </div>
                                )}
                                {effectiveSource === "ai_handling" ? (
                                  <span className="inline-flex mt-1 items-center gap-1 rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#166534]">
                                    <span aria-hidden>🤖</span>
                                    AI Handling
                                  </span>
                                ) : effectiveSource === "ai_handled" ? (
                                  <span className="inline-flex mt-1 items-center gap-1 rounded-full bg-[#F0FDF4] px-2 py-1 text-xs font-semibold text-[#14532d]">
                                    <span aria-hidden>🤖</span>
                                    AI Handled
                                  </span>
                                ) : effectiveSource === "owner" ? (
                                  <span className="inline-flex mt-1 items-center gap-1 rounded-full bg-[#EFF6FF] px-2 py-1 text-xs font-semibold text-[#1E3A8A]">
                                    <span aria-hidden>👤</span>
                                    Owner
                                  </span>
                                ) : effectiveSource !== "needs_attention" ? (
                                  <span
                                    className="inline-block mt-1 h-2 w-2 rounded-full bg-[#6B7280]"
                                    aria-hidden
                                  />
                                ) : null}
                              </div>
                            </div>
                            <span className="shrink-0 text-xs text-[#6B7280]">{formatConversationTime(conversation.time)}</span>
                          </div>
                          <div className="mt-2 flex items-center justify-between gap-2 text-sm text-[#6B7280]">
                            <p className="min-w-0 truncate">{conversation.message}</p>
                            {conversation.badge > 0 ? (
                              <span className="rounded-full bg-[#22C55E] px-2 py-0.5 text-[10px] font-semibold text-white">
                                {conversation.badge}
                              </span>
                            ) : effectiveSource === "ai_handling" ? (
                              <span className="inline-flex rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#166534]">
                                🤖 AI Handling
                              </span>
                            ) : effectiveSource === "ai_handled" ? (
                              <span className="inline-flex rounded-full bg-[#F0FDF4] px-2 py-1 text-xs font-semibold text-[#14532d]">
                                🤖 AI Handled
                              </span>
                            ) : effectiveSource === "needs_attention" ? (
                              <span className="inline-flex rounded-full bg-[#FEF2F2] px-2 py-1 text-xs font-semibold text-[#B91C1C]">
                                🔴 Needs Owner
                              </span>
                            ) : effectiveSource === "owner" ? (
                              <span className="inline-flex rounded-full bg-[#EFF6FF] px-2 py-1 text-xs font-semibold text-[#1E3A8A]">
                                👤 Owner
                              </span>
                            ) : null}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </section>

              <section className={`${CARD} flex h-full min-h-0 flex-col overflow-hidden self-stretch`}>
                <div className="border-b border-[#E5E7EB] p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#6B7280]">Live chat</p>
                      <div className="flex flex-col">
                        <h2 className="text-xl font-semibold text-[#111827]">{INBOX_CONVERSATIONS.find((item) => item.id === activeConversation)?.name}</h2>
                        <p className="mt-1 text-sm text-[#6B7280]">
                          {activeConversationData?.message
                            ? `Last customer message • ${formatConversationTime(activeConversationData?.time)}`
                            : "Waiting for customer response"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={toggleAiForActive}
                        aria-label="Toggle AI/Owner mode"
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold transition ${effectiveActiveSource.startsWith("ai") ? "bg-[#ECFDF5] text-[#166534]" : effectiveActiveSource === "needs_attention" ? "bg-[#FEF2F2] text-[#B91C1C]" : "bg-[#EFF6FF] text-[#1E3A8A]"}`}
                      >
                        {effectiveActiveSource.startsWith("ai") ? (
                          effectiveActiveSource === "ai_handling" ? "🤖 AI ON" : "🤖 AI Handled"
                        ) : effectiveActiveSource === "needs_attention" ? (
                          "🔴 Needs Owner"
                        ) : (
                          "👤 Owner Mode"
                        )}
                      </button>
                      {customerCollapsed && (
                        <button
                          type="button"
                          onClick={() => setCustomerCollapsed(false)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] transition hover:bg-[#F3F4F6]"
                          aria-label="Expand customer panel"
                          title="Expand customer panel"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex min-h-0 flex-1 flex-col p-4">
                  <div className="flex-1 min-h-0 space-y-4 overflow-y-auto pr-2 pb-4 custom-scrollbar">
                    {activeMessages.map((message, index) => {
                      const originalWasAi = String(activeConversationData?.source).startsWith("ai");
                      // If the AI originally handled messages but AI is toggled off, hide AI-generated agent messages (mock behavior)
                      if (message.from === "agent" && originalWasAi && !String(effectiveActiveSource).startsWith("ai")) {
                        return null;
                      }
                      const isCustomer = message.from === "customer";
                      const isAgent = message.from === "agent";
                      const isAi = isAgent && String(effectiveActiveSource).startsWith("ai");
                      const senderLabel = isAi ? "Sokoos AI" : activeAgentName;

                      return (
                        <div key={`${message.time}-${index}`} className="space-y-2">
                          {isAgent ? (
                            <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
                              {isAi ? (
                                <>
                                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ECFDF5] text-[#0C4A6E]">
                                    <Bot className="h-4 w-4" />
                                  </span>
                                  <span>{senderLabel}</span>
                                  <span className="rounded-full bg-[#E0F2FE] px-2 py-0.5 text-[11px] font-semibold text-[#0C4A6E]">
                                    AI
                                  </span>
                                </>
                              ) : (
                                <span>{senderLabel}</span>
                              )}
                            </div>
                          ) : null}
                          <div className={`flex ${isAgent ? "justify-start" : "justify-end"}`}>
                            <div className={`rounded-3xl px-4 py-3 text-sm ${
                              isAgent
                                ? "bg-[#F3F4F6] text-[#111827]"
                                : "bg-[#22C55E] text-white"
                            }`}>
                              <p>{message.text}</p>
                              <div className="mt-1 text-[11px] text-[#6B7280] text-right">{message.time}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="sticky bottom-0 z-10 mt-4 bg-white/95 pt-4 pb-4 backdrop-blur-sm">
                    <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-3 shadow-sm">
                      <div className="flex items-center gap-4">
                        <textarea
                          ref={textareaRef}
                          value={messageInput}
                          onChange={(event) => setMessageInput(event.target.value)}
                          placeholder={`Type a message to ${activeCustomerProfile.name}...`}
                          className="min-w-0 flex-1 resize-none overflow-y-auto custom-scrollbar rounded-[20px] border border-[#E5E7EB] bg-white px-5 py-3.5 text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
                          rows={1}
                          style={{ minHeight: 48, maxHeight: 120 }}
                        />
                        <button
                          type="button"
                          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-lg transition hover:bg-[#16A34A]"
                        >
                          <Send className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {!customerCollapsed && (
                <section className={`${CARD} h-full min-h-0 flex flex-col self-stretch overflow-hidden transition-opacity duration-300 ease-out opacity-100 p-6`}>
                <div className="flex flex-col gap-3 min-h-0 flex-1">
                  <div className="flex items-start justify-between gap-3 shrink-0">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Customer</p>
                      <h2 className="mt-2 text-xl font-semibold text-[#111827]">{activeCustomerProfile.name}</h2>
                      <p className="text-sm text-[#6B7280]">{activeCustomerProfile.company}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCustomerCollapsed(true)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] transition hover:bg-[#F3F4F6] shrink-0"
                      aria-label="Collapse customer panel"
                      title="Collapse customer panel"
                    >
                      <ChevronRight className="h-4 w-4 rotate-180" />
                    </button>
                  </div>
                  <div className="space-y-4 rounded-3xl bg-[#F9FAFB] p-4 overflow-y-auto flex-1 min-h-0 custom-scrollbar">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-[#111827]">
                        <span className="font-medium">Phone</span>
                        <span>{activeCustomerProfile.phone}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-[#111827]">
                        <span className="font-medium">Lead status</span>
                        <span className="rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#16A34A]">{activeCustomerProfile.leadStatus}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-medium text-sm text-[#111827]">Tags</span>
                        <div className="flex flex-wrap gap-2">
                          {activeCustomerProfile.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#16A34A]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-[#E5E7EB] bg-white p-4 space-y-4">
                      <p className="text-sm font-semibold text-[#111827]">Interested products</p>
                      <div className="mt-3 space-y-2">
                        {activeCustomerProfile.interestedProducts.map((product) => (
                          <div key={product} className="rounded-2xl bg-[#F9FAFB] px-3 py-2 text-sm text-[#111827]">
                            {product}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Assistant and Quick Products removed from Customer card per request */}
                </section>
              )}
            </div>
          )}
          {selected === "Status Scheduler" && (
            <div className={`space-y-6 ${CARD}`}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6B7280]">Status Scheduler</p>
                  <p className="mt-1 text-sm text-[#6B7280]">Plan and publish status posts ahead of time. Use AI to generate copy, then schedule images and captions for the week.</p>
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
                          <p className="text-sm font-semibold text-[#111827]">Team Takeover</p>
                          <p className="mt-2 text-sm text-[#6B7280]">Allow a team member to step in when the customer needs real support.</p>
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
          {selected === "AI Assistant" && (
            <div className="space-y-6">
              <div className={CARD}>
                <div>
                  <p className="text-sm font-medium text-[#6B7280]">AI Assistant Control Center</p>
                  <h1 className="mt-2 text-3xl font-semibold text-[#111827]">Customize Your AI Agent</h1>
                  <p className="mt-2 text-sm text-[#6B7280]">Configure business knowledge, AI behavior, escalation rules, and conversation policies.</p>
                </div>
              </div>

              <div className={CARD}>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {AI_ASSISTANT_TABS.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setAiAssistantTab(tab)}
                      className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition duration-200 ease-in-out ${
                        aiAssistantTab === tab
                          ? "bg-[#22C55E] text-white shadow-sm"
                          : "bg-[#F3F4F6] text-[#111827] hover:bg-[#ECFDF5] hover:-translate-y-0.5"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {aiAssistantTab === "Business Knowledge" && (
                <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
                  <div className={CARD}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#6B7280]">Business Information</p>
                        <h3 className="mt-2 text-lg font-semibold text-[#111827]">About your business</h3>
                      </div>
                      <button className="rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#166534] hover:bg-[#DCF4F0]">
                        Edit
                      </button>
                    </div>
                    <div className="mt-4 space-y-4 text-sm text-[#6B7280]">
                      <div>
                        <p className="font-semibold text-[#111827]">Business Name</p>
                        <p>{BUSINESS_INFO.businessName}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#111827]">Business Type</p>
                        <p>{BUSINESS_INFO.businessType}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#111827]">About Us</p>
                        <p>{BUSINESS_INFO.aboutUs}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#111827]">Business Hours</p>
                        <p>{BUSINESS_INFO.businessHours}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#111827]">Service Areas</p>
                        <p>{BUSINESS_INFO.serviceAreas}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#111827]">Payment Methods</p>
                        <p>{BUSINESS_INFO.paymentMethods}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className={CARD}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-[#6B7280]">Products & Services</p>
                          <h3 className="mt-2 text-lg font-semibold text-[#111827]">What you sell</h3>
                        </div>
                        <button className="rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#166534] hover:bg-[#DCF4F0]">
                          Add item
                        </button>
                      </div>
                      <div className="mt-4 space-y-3 text-sm text-[#6B7280]">
                        {PRODUCTS_AND_SERVICES.map((product) => (
                          <div key={product.title} className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                            <p className="font-semibold text-[#111827]">{product.title}</p>
                            <p className="mt-1">{product.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={CARD}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-[#6B7280]">FAQs</p>
                          <h3 className="mt-2 text-lg font-semibold text-[#111827]">Common customer questions</h3>
                        </div>
                        <button className="rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#166534] hover:bg-[#DCF4F0]">
                          Add FAQ
                        </button>
                      </div>
                      <div className="mt-4 space-y-4 text-sm text-[#6B7280]">
                        {FAQ_ITEMS.map((item) => (
                          <div key={item.question} className="rounded-3xl border border-[#E5E7EB] bg-white p-4">
                            <p className="font-semibold text-[#111827]">Question</p>
                            <p className="mt-1">{item.question}</p>
                            <p className="mt-3 font-semibold text-[#111827]">Answer</p>
                            <p className="mt-1">{item.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={CARD}>
                      <div>
                        <p className="text-sm font-medium text-[#6B7280]">Policies</p>
                        <h3 className="mt-2 text-lg font-semibold text-[#111827]">AI response reference</h3>
                        <p className="mt-2 text-sm text-[#6B7280]">This information is used by the AI when responding to customers.</p>
                      </div>
                      <div className="mt-4 space-y-4 text-sm text-[#6B7280]">
                        <div>
                          <p className="font-semibold text-[#111827]">Return Policy</p>
                          <textarea
                            readOnly
                            className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none"
                            rows={3}
                            value={BUSINESS_POLICIES.returnPolicy}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-[#111827]">Delivery Policy</p>
                          <textarea
                            readOnly
                            className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none"
                            rows={3}
                            value={BUSINESS_POLICIES.deliveryPolicy}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-[#111827]">Cancellation Policy</p>
                          <textarea
                            readOnly
                            className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none"
                            rows={3}
                            value={BUSINESS_POLICIES.cancellationPolicy}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {aiAssistantTab === "AI Settings" && (
                <div className="space-y-4">
                  {AI_SETTINGS_ITEMS.map((item) => (
                    <div key={item.setting} className={CARD}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-[#6B7280]">{item.setting}</p>
                          <p className="mt-2 text-base font-semibold text-[#111827]">{item.value}</p>
                        </div>
                        <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#166534]">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {aiAssistantTab === "Test AI" && (
                <div className={CARD}>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-[#6B7280]">Test Your AI Agent</p>
                      <h3 className="mt-2 text-lg font-semibold text-[#111827]">Try conversations with your AI</h3>
                      <p className="mt-2 text-sm text-[#6B7280]">Test how your AI responds to common questions. Use this to refine business knowledge and tone.</p>
                    </div>
                    <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                      <textarea
                        placeholder="Ask your AI a test question..."
                        className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
                        rows={3}
                      />
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-2xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]">
                      <Send className="h-4 w-4" />
                      Send Test Message
                    </button>
                  </div>
                </div>
              )}

              {aiAssistantTab === "Escalation Rules" && (
                <div className="space-y-4">
                  {ESCALATION_RULES_ITEMS.map((item) => (
                    <div key={item.trigger} className={CARD}>
                      <div className="flex items-start justify-between">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-[#6B7280]">Trigger</p>
                          <p className="mt-2 font-semibold text-[#111827]">{item.trigger}</p>
                          <p className="mt-2 text-sm text-[#6B7280]">Action: {item.action}</p>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.priority === "Critical" ? "bg-[#FEF2F2] text-[#B91C1C]" : "bg-[#FEF3C7] text-[#B45309]"}`}>
                          {item.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {aiAssistantTab === "Conversation Policies" && (
                <div className="space-y-4">
                  {CONVERSATION_POLICIES_ITEMS.map((item) => (
                    <div key={item.policy} className={CARD}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-[#6B7280]">{item.policy}</p>
                          <p className="mt-2 font-semibold text-[#111827]">{item.value}</p>
                        </div>
                        <button className="rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#166534] hover:bg-[#DCF4F0]">
                          Configure
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
