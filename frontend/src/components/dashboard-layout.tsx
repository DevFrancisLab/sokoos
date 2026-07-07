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

// Visual style: larger radius, softer shadows, consistent internal padding (24-28px)
const CARD = "rounded-[20px] bg-white p-7 shadow-[0_10px_30px_rgba(2,6,23,0.04)] transition-shadow duration-200 hover:shadow-[0_12px_36px_rgba(2,6,23,0.05)]";
const CARD_SOFT = "rounded-[20px] bg-[#F9FAFB] p-7 shadow-[0_10px_30px_rgba(2,6,23,0.04)] transition-shadow duration-200 hover:shadow-[0_12px_36px_rgba(2,6,23,0.05)]";
// Typography tokens for consistent hierarchy
const SECTION_HEADING = "text-xs font-medium uppercase tracking-[0.12em] text-[#6B7280]";
const CARD_TITLE = "text-[28px] font-bold mb-6 text-[#111827]"; // 28px, weight 700, 24px spacing below
const CUSTOMER_NAME = "text-lg font-semibold text-[#111827]"; // larger semibold customer name
const SECONDARY = "text-sm text-[#6B7280]"; // muted secondary info
const MESSAGE_PREVIEW = "text-sm text-[#374151]"; // slightly darker than secondary
const TIME_LABEL = "text-xs text-[#6B7280]"; // small consistent time label
const BADGE = "inline-flex h-6 items-center gap-1 rounded-full px-2.5 text-[12px] font-semibold";
const BADGE_ICON = "h-2.5 w-2.5 rounded-full";

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
const TONES = ["Professional", "Friendly", "Formal", "Sales-focused"] as const;

const ASSISTANT_TABS = [
  "Business Knowledge",
  "AI Settings",
  "Test AI",
  "Escalation Rules",
  "Conversation Policies",
] as const;

const BUSINESS_KNOWLEDGE_ITEMS = [
  {
    title: "Brand voice",
    description: "Friendly, helpful, and sales-aware responses that reflect the business’s local presence.",
  },
  {
    title: "Key offerings",
    description: "20 Mbps, Business Package, and 10 Mbps plans are the most common recommendations.",
  },
  {
    title: "FAQ focus",
    description: "Business hours, plan pricing, trial availability, and support escalation are prioritized.",
  },
];

const TEST_AI_PROMPTS = [
  "What is the Business Package price?",
  "Can I get a trial before I sign up?",
  "When are you open for support?",
];

const ESCALATION_RULES = [
  {
    label: "Escalate when customer asks for a live person",
    description: "Send urgent requests directly to you when customers request human support."
  },
  {
    label: "Escalate after business hours",
    description: "If a message arrives outside the set hours, flag it for your follow-up.",
  },
  {
    label: "Escalate after repeated unanswered questions",
    description: "Detect when the customer asks multiple questions in a row without a clear response.",
  },
];

const CONVERSATION_POLICIES = [
  {
    label: "Keep replies concise",
    description: "Prefer short, helpful answers that are easy for customers to read on mobile.",
  },
  {
    label: "Use polite and professional language",
    description: "Avoid slang and keep tone appropriate for business customers.",
  },
  {
    label: "Respect business hours",
    description: "Use outside-hours messages to let customers know when the business will respond next.",
  },
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
  {
    id: "c6",
    name: "Samuel Kipkemboi",
    phone: "+254722888999",
    message: "Your 20 Mbps plan is perfect for our office. Let's proceed with the order.",
    time: "3h ago",
    badge: 0,
    source: "owner",
    isSaved: true,
    avatar: "SK",
  },
  {
    id: "c7",
    name: "Fatima Hassan",
    phone: "+254744555666",
    message: "Thank you! I'll set up the installation for next Monday.",
    time: "5h ago",
    badge: 0,
    source: "owner",
    isSaved: true,
    avatar: "FH",
  },
  {
    id: "c8",
    name: "Peter Ochieng",
    phone: "+254701333222",
    message: "We've received your payment. Service activation starts tomorrow morning.",
    time: "Yesterday",
    badge: 0,
    source: "owner",
    isSaved: true,
    avatar: "PO",
  },
];

const formatConversationTime = (time: string | undefined) => time || "Unknown";

const INBOX_TAB_ITEMS = ["All", "AI", "You", "Needs Attention"] as const;

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
  c6: [
    { from: "customer", text: "What's the fastest plan you have?", time: "2:30 PM" },
    { from: "agent", text: "Our 20 Mbps plan is ideal for offices. Would you like more details?", time: "2:32 PM" },
    { from: "customer", text: "Your 20 Mbps plan is perfect for our office. Let's proceed with the order.", time: "2:45 PM" },
  ],
  c7: [
    { from: "customer", text: "How long will installation take?", time: "11:00 AM" },
    { from: "agent", text: "Installation usually takes 2-3 hours. We can schedule it for next week.", time: "11:02 AM" },
    { from: "customer", text: "Thank you! I'll set up the installation for next Monday.", time: "11:15 AM" },
  ],
  c8: [
    { from: "customer", text: "I've sent the payment. When does service start?", time: "9:00 AM" },
    { from: "agent", text: "We've received your payment. Service activation starts tomorrow morning.", time: "9:05 AM" },
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
  c1: "You",
  c3: "You",
};

// Team Support Architecture
// Current MVP: Single owner business (hasTeam = false)
// Future: Add team functionality by setting hasTeam = true and implementing Team Settings
const hasTeam = false;

// Mock team member type (for future team support)
interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "admin" | "agent" | "viewer";
  avatar: string;
  status: "active" | "inactive";
  joinedDate: string;
}

// Mock team data (for future implementation)
const MOCK_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm1",
    name: "Frank Kariuki",
    email: "frank@sokoos.co.ke",
    role: "admin",
    avatar: "FK",
    status: "active",
    joinedDate: "Jun 01, 2026",
  },
  {
    id: "tm2",
    name: "Jane Kipchoge",
    email: "jane@sokoos.co.ke",
    role: "agent",
    avatar: "JK",
    status: "active",
    joinedDate: "Jun 15, 2026",
  },
  {
    id: "tm3",
    name: "David Omondi",
    email: "david@sokoos.co.ke",
    role: "agent",
    avatar: "DO",
    status: "inactive",
    joinedDate: "Jul 01, 2026",
  },
];

export default function DashboardLayout() {
  // Team context: In future, use React Context or state management library for team data
  // For now: Single owner (hasTeam = false)
  const currentUserId = hasTeam ? "tm1" : "owner"; // Will be from auth context in future
  const currentUserRole = hasTeam ? "admin" : "owner"; // Will be from auth context in future

  const [mobileOpen, setMobileOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Home");
  const [assistantTab, setAssistantTab] = useState<(typeof ASSISTANT_TABS)[number]>("Business Knowledge");
  const [activeConversation, setActiveConversation] = useState<string>("c1");
  const [searchQuery, setSearchQuery] = useState("");
   const [customerSearch, setCustomerSearch] = useState("");
  const [activeTab, setActiveTab] = useState<(typeof INBOX_TAB_ITEMS)[number]>("All");
  
  const activeConversationData = INBOX_CONVERSATIONS.find((item) => item.id === activeConversation);
  const activeCustomerProfile = CUSTOMER_PROFILES[activeConversation as keyof typeof CUSTOMER_PROFILES] ?? CUSTOMER_PROFILES.c1;
  const activeMessages = INBOX_MESSAGES[activeConversation as keyof typeof INBOX_MESSAGES] ?? [];
  const [sourceOverrides, setSourceOverrides] = useState<Record<string, string>>({});
  const getEffectiveSource = (id: string, original?: string) => sourceOverrides[id] ?? original ?? "owner";
  const [messageInput, setMessageInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
  const [testAiInput, setTestAiInput] = useState("How much is the Business Package?");
  const [testAiMessages, setTestAiMessages] = useState([
    {
      id: "m1",
      role: "user" as const,
      text: "How much is your Business Package?",
    },
    {
      id: "m2",
      role: "ai" as const,
      text: "Our Business Package costs KES 5,000/month.",
      source: "Products & Services → Business Package",
    },
  ]);
  const testAiScrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!testAiScrollRef.current) return;
    testAiScrollRef.current.scrollTop = testAiScrollRef.current.scrollHeight;
  }, [testAiMessages]);

  const sendTestAiMessage = () => {
    const trimmed = testAiInput.trim();
    if (!trimmed) return;
    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user" as const,
      text: trimmed,
    };
    const aiMessage = {
      id: `ai-${Date.now()}`,
      role: "ai" as const,
      text: trimmed.toLowerCase().includes("business package")
        ? "Our Business Package costs KES 5,000/month."
        : "This is a mock reply from your AI assistant based on the configured business knowledge.",
      source: "Products & Services → Business Package",
    };
    setTestAiMessages((current) => [...current, userMessage, aiMessage]);
    setTestAiInput("");
  };
  const [escalateOnLiveRequest, setEscalateOnLiveRequest] = useState(true);
  const [escalateOutsideHours, setEscalateOutsideHours] = useState(true);
  const [escalateUnanswered, setEscalateUnanswered] = useState(false);
  const [escalateComplaints, setEscalateComplaints] = useState(true);
  const [escalateRefunds, setEscalateRefunds] = useState(true);
  const [escalateLegalQuestions, setEscalateLegalQuestions] = useState(true);
  const [escalateHumanRequested, setEscalateHumanRequested] = useState(true);
  const [escalateUnknownQuestions, setEscalateUnknownQuestions] = useState(true);
  const [escalateNegotiationsAbove10k, setEscalateNegotiationsAbove10k] = useState(true);
  const [policyKeepShort, setPolicyKeepShort] = useState(true);
  const [policyUseProfessionalTone, setPolicyUseProfessionalTone] = useState(true);
  const [policyRespectHours, setPolicyRespectHours] = useState(true);
  const [outsideHoursMode, setOutsideHoursMode] = useState<"continue" | "collect" | "closed">("collect");
  const [maxAiMessages, setMaxAiMessages] = useState(10);
  const [allowCloseSales, setAllowCloseSales] = useState(true);
  const [allowScheduleAppointments, setAllowScheduleAppointments] = useState(true);
  const [assistantName, setAssistantName] = useState("Nuru");
  const [primaryLanguage, setPrimaryLanguage] = useState<(typeof LANGUAGES)[number]>("English");
  const [secondaryLanguage, setSecondaryLanguage] = useState<(typeof LANGUAGES)[number]>("Kiswahili");
  const [tone, setTone] = useState<(typeof TONES)[number]>("Friendly");
  const [upsellProducts, setUpsellProducts] = useState(true);
  const [recommendAlternatives, setRecommendAlternatives] = useState(true);
  const [closeSalesAutomatically, setCloseSalesAutomatically] = useState(false);
  const [businessInfo, setBusinessInfo] = useState({
    name: "Sokoos Internet",
    type: "Telecom & Connectivity",
    about: "We help local businesses stay online with reliable internet plans, fast support, and easy onboarding.",
    hours: "Mon–Fri, 8:00 AM - 6:00 PM",
    serviceAreas: "Nairobi, Kiambu, Thika",
    paymentMethods: "Mobile Money, Bank Transfer, Cash",
  });
  const [knowledgeProducts, setKnowledgeProducts] = useState([
    { id: "kp1", name: "10 Mbps Internet", price: "KES 2,500/month" },
    { id: "kp2", name: "20 Mbps Internet", price: "KES 3,500/month" },
    { id: "kp3", name: "Business Package", price: "KES 5,000/month" },
  ]);
  const [personalContacts, setPersonalContacts] = useState([
    { id: "pc1", name: "Mary Wanjiku", relationship: "Wife", phone: "+254712345678" },
    { id: "pc2", name: "Peter Mwangi", relationship: "Supplier", phone: "+254733222222" },
  ]);
  const [newContact, setNewContact] = useState({ name: "", relationship: "", phone: "" });
  const addPersonalContact = () => {
    const name = newContact.name.trim();
    const phone = newContact.phone.trim();
    const relationship = newContact.relationship.trim();
    if (!name || !phone) return;
    setPersonalContacts((c) => [
      ...c,
      { id: `pc-${Date.now()}`, name, relationship: relationship || "Contact", phone },
    ]);
    setNewContact({ name: "", relationship: "", phone: "" });
  };
  // Personal-contact helpers (moved here so personalContacts is defined first)
  const isPersonalByPhone = (phone?: string | null) => !!phone && personalContacts.some((pc) => pc.phone === phone);
  const isPersonalActive = isPersonalByPhone(activeConversationData?.phone ?? null);
  const activePersonalEntry = personalContacts.find((pc) => pc.phone === activeConversationData?.phone);
  const activePersonalIcon = activePersonalEntry && ["wife", "husband", "spouse", "family"].some((k) => activePersonalEntry.relationship.toLowerCase().includes(k)) ? "🏠" : "👤";
  const effectiveActiveSource = isPersonalActive ? "personal" : getEffectiveSource(activeConversation, activeConversationData?.source);
  const activeAgentName = isPersonalActive ? "Personal" : String(effectiveActiveSource).startsWith("ai") ? "Sokoos AI" : OWNER_NAMES[activeConversation] ?? "You";
  const toggleAiForActive = () => {
    // Do not allow toggling AI for personal contacts (mock behavior).
    if (isPersonalActive) return;
    const current = sourceOverrides[activeConversation] ?? activeConversationData?.source ?? "";
    if (String(current).startsWith("ai")) {
      setSourceOverrides((s) => ({ ...s, [activeConversation]: "owner" }));
    } else {
      setSourceOverrides((s) => ({ ...s, [activeConversation]: "ai_handling" }));
    }
  };
  const [faqItems, setFaqItems] = useState([
    {
      id: "faq1",
      question: "Do you offer installation?",
      answer: "Yes, installation costs KES 2,000.",
    },
  ]);
  const [policies, setPolicies] = useState({
    returnPolicy: "Customers may return services within 7 days if there is a technical issue requiring a fix.",
    deliveryPolicy: "We deliver service activation details via WhatsApp within 24 hours of payment.",
    cancellationPolicy: "Cancel anytime with 48 hours notice before the next billing cycle.",
  });
  const [businessProfile, setBusinessProfile] = useState({
    name: "Sokoos Internet",
    industry: "Telecom & Connectivity",
    description: "We help local businesses stay online with reliable internet plans, fast support, and easy onboarding.",
    phone: "+254 20 3949 0101",
    email: "support@sokoos.co.ke",
    location: "Nairobi, Kenya",
    businessHours: "Mon–Fri, 8:00 AM - 6:00 PM",
    serviceAreas: "Nairobi, Kiambu, Thika",
    paymentMethods: { mPesa: true, cash: true, bankTransfer: true },
  });
  const [imageLabel, setImageLabel] = useState("No file selected");
  const [customerCollapsed, setCustomerCollapsed] = useState(false);
  
  // Future team state (initialized but not used when hasTeam = false)
  const teamMembers = hasTeam ? MOCK_TEAM_MEMBERS : [];
  const currentMember = hasTeam ? MOCK_TEAM_MEMBERS.find((m) => m.id === currentUserId) : null;

  return (
    <div className="h-screen min-h-screen bg-[#FFFFFF] text-[#111827]">
      {/* Desktop fixed left sidebar */}
      <aside className={`hidden md:fixed md:inset-y-0 md:left-0 md:flex md:flex-col md:pt-6 bg-[#FFFFFF] border-r border-[#E5E7EB]/20 transition-all duration-300 ease-out ${
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
      <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#FFFFFF] border-b border-[#E5E7EB]/20 flex items-center px-4 z-30">
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
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#FFFFFF] border-r border-[#E5E7EB]/20 p-4 overflow-y-auto">
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
                    <p className="text-sm font-medium text-[#475569]">Good Afternoon, Frank 👋</p>
                    <h1 className={CARD_TITLE}>Welcome back to Sokoos</h1>
                    <p className={`mt-6 ${SECONDARY}`}>Here’s what’s happening with your business today.</p>
                  </div>
                  <div className="rounded-2xl bg-[#F9FAFB] px-4 py-2 text-sm text-[#111827]">
                    Updated just now
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {STAT_CARDS.map((stat) => (
                  <div key={stat.label} className={CARD}>
                    <p className={SECTION_HEADING}>{stat.label}</p>
                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-3xl font-semibold text-[#111827]">{stat.value}</p>
                      </div>
                      <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#166534]">
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
                      <p className={SECTION_HEADING}>Recent Activity</p>
                      <h2 className={CARD_TITLE}>What happened recently</h2>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    {RECENT_ACTIVITY.map((item) => (
                      <div key={item.title} className="rounded-[20px] bg-[#F9FAFB] p-7 transition hover:bg-[#F1F5F9]">
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
                    <p className={SECTION_HEADING}>Quick Actions</p>
                    <h2 className={CARD_TITLE}>Jump into work</h2>
                  </div>
                  <div className="mt-6 grid gap-3">
                    {QUICK_ACTIONS.map((action) => (
                    <button
                        key={action}
                        type="button"
                        className="w-full rounded-[20px] border border-[#E5E7EB]/10 bg-[#F9FAFB] p-6 text-left text-sm font-semibold text-[#111827] transition hover:border-[#CBD5E1] hover:bg-[#F1F5F9]"
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
                <div className="border-b border-[#E5E7EB]/20 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className={CARD_TITLE}>Conversations</h2>
                      <p className={SECONDARY}>Recent messages and active chats</p>
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
                  <div className="mb-4 rounded-[20px] bg-[#F3F4F6] px-5 py-3 shadow-sm shadow-slate-200/60 ring-1 ring-[#D1D5DB]/40 transition duration-200 ease-out focus-within:ring-2 focus-within:ring-slate-200">
                    <div className="flex items-center gap-3 text-[#64748B]">
                      <Search className="h-4 w-4" />
                      <input
                        type="search"
                        placeholder="Search conversations"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        className="w-full bg-transparent px-2 py-2 text-sm text-[#111827] placeholder:text-[#94A3B8] placeholder:font-medium outline-none"
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
                        if (activeTab === "You") {
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
                      const effectiveSourceRaw = sourceOverrides[conversation.id] ?? conversation.source;
                      const isPersonal = personalContacts.some((pc) => pc.phone === conversation.phone);
                      const effectiveSource = isPersonal ? "personal" : effectiveSourceRaw;
                      return (
                        <button
                          key={conversation.id}
                          onClick={() => setActiveConversation(conversation.id)}
                          className={`w-full overflow-hidden rounded-[20px] p-6 text-left transition-colors duration-150 flex flex-col justify-between min-h-[92px] ${
                            active
                              ? "bg-[#ECFDF5] ring-1 ring-[#22C55E]/30 shadow-[0_8px_24px_rgba(34,197,94,0.06)]"
                              : "bg-white hover:bg-[#F8FAFC]"
                          }`}
                        >
                          {/* Top row: avatar, name, timestamp */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3 min-w-0">
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#CBD5E1] text-sm font-semibold text-slate-700">{conversation.avatar}</div>
                              <div className="min-w-0">
                                {conversation.isSaved && conversation.name ? (
                                  <p className={`truncate ${CUSTOMER_NAME}`} title={conversation.name}>
                                    {conversation.name.length > 28 ? `${conversation.name.slice(0, 28)}…` : conversation.name}
                                  </p>
                                ) : (
                                  <p className={`truncate ${CUSTOMER_NAME}`} title={conversation.phone ?? "Unknown Customer"}>{conversation.phone ?? "Unknown Customer"}</p>
                                )}
                                {/* second row inside left column for compact badges */}
                                <div className="mt-2 flex items-center gap-2">
                                  {effectiveSource === "needs_attention" && (
                                    <span className={`${BADGE} bg-[#FEF2F2] text-[#B91C1C]`}><span className={`${BADGE_ICON} bg-[#B91C1C]`} aria-hidden /> Attention</span>
                                  )}
                                  {effectiveSource === "personal" && (
                                    <span className={`${BADGE} bg-[#F1F5F9] text-[#334155]`}>👤 Personal</span>
                                  )}
                                  {effectiveSource === "ai_handling" && (
                                    <span className={`${BADGE} bg-[#ECFDF5] text-[#166534]`}>🤖 AI Handling</span>
                                  )}
                                  {effectiveSource === "ai_handled" && (
                                    <span className={`${BADGE} bg-[#F0FDF4] text-[#14532d]`}>🤖 AI Handled</span>
                                  )}
                                  {effectiveSource === "owner" && (
                                    <span className={`${BADGE} bg-[#EFF6FF] text-[#1E3A8A]`}>👤 You</span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink-0">
                              <span className={`${TIME_LABEL}`}>{formatConversationTime(conversation.time)}</span>
                            </div>
                          </div>

                          {/* Third row: message preview and optional badge */}
                          <div className="mt-4 flex items-center justify-between gap-3">
                            <p className={`min-w-0 ${MESSAGE_PREVIEW} truncate`}>{conversation.message}</p>
                            <div className="flex-shrink-0">
                              {conversation.badge > 0 ? (
                                <span className={`${BADGE} min-w-[24px] justify-center bg-[#22C55E] text-white`}>{conversation.badge}</span>
                              ) : null}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </section>

              <section className={`${CARD} flex h-full min-h-0 flex-col overflow-hidden self-stretch`}>
                <div className="border-b border-[#E5E7EB]/20 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#6B7280]">Live chat</p>
                      <div className="flex flex-col">
                        <h2 className="text-[20px] font-semibold text-[#111827]">{INBOX_CONVERSATIONS.find((item) => item.id === activeConversation)?.name}</h2>
                        <p className="mt-3 text-sm text-[#6B7280]">
                          {isPersonalActive ? (
                            "Personal contact — AI disabled for this conversation"
                          ) : activeConversationData?.message ? (
                            `Last customer message • ${formatConversationTime(activeConversationData?.time)}`
                          ) : (
                            "Waiting for customer response"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {isPersonalActive ? (
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#E5E7EB] px-3 py-1 text-xs font-semibold text-[#6B7280]">
                          <span aria-hidden>👤</span>
                          Personal
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={toggleAiForActive}
                          aria-label="Toggle AI/Human mode"
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold transition ${effectiveActiveSource.startsWith("ai") ? "bg-[#ECFDF5] text-[#166534]" : effectiveActiveSource === "needs_attention" ? "bg-[#FEF2F2] text-[#B91C1C]" : "bg-[#EFF6FF] text-[#1E3A8A]"}`}
                        >
                          {effectiveActiveSource.startsWith("ai") ? (
                            effectiveActiveSource === "ai_handling" ? "🤖 AI Mode" : "🤖 AI Handled"
                          ) : effectiveActiveSource === "needs_attention" ? (
                            "🔴 Needs You"
                          ) : (
                            "👤 Human Mode"
                          )}
                        </button>
                      )}
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
                <div className="flex min-h-0 flex-1 flex-col p-6">
                  <div className="flex-1 min-h-0 space-y-6 overflow-y-auto pr-4 pb-6 custom-scrollbar">
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
                        <div key={`${message.time}-${index}`} className="space-y-4">
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
                            <div className={`rounded-[16px] px-5 py-4 text-sm max-w-[78%] break-words ${
                              isAgent
                                ? isAi
                                  ? "bg-[#ECFDF5] text-[#064E3B]"
                                  : "bg-[#F3F4F6] text-[#111827]"
                                : "bg-white text-[#111827] border border-[#E5E7EB]/20 shadow-[0_6px_18px_rgba(2,6,23,0.03)]"
                            }`}>
                              <p className="mb-2 leading-relaxed">{message.text}</p>
                              <div className={`${TIME_LABEL} text-right`}>{message.time}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="sticky bottom-0 z-10 mt-6 bg-white/95 pt-6 pb-6 backdrop-blur-sm">
                    <div className="rounded-[20px] bg-[#F8FAFB]/85 p-4 border border-[#E5E7EB]/10 shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                      <div className="flex items-center gap-3">
                        <textarea
                          ref={textareaRef}
                          value={messageInput}
                          onChange={(event) => setMessageInput(event.target.value)}
                          placeholder={`Type a message to ${activeCustomerProfile.name}...`}
                          className="min-w-0 flex-1 resize-none overflow-y-auto overflow-x-hidden custom-scrollbar rounded-[18px] border border-[#D1D5DB]/30 bg-white/95 px-5 py-4 text-sm leading-6 text-[#111827] outline-none placeholder:text-[#94A3B8] placeholder:font-medium focus:border-[#94A3B8] focus:ring-2 focus:ring-slate-200"
                          rows={2}
                          style={{ minHeight: 72, maxHeight: 180 }}
                        />
                        <button
                          type="button"
                          className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-sm transition hover:bg-[#16A34A]"
                        >
                          <Send className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {!customerCollapsed && (
                <section className={`${CARD} h-full min-h-0 flex flex-col self-stretch overflow-hidden transition-opacity duration-300 ease-out opacity-100`}>
                <div className="flex flex-col gap-6 min-h-0 flex-1">
                  <div className="flex items-start justify-between gap-3 shrink-0">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#6B7280]">Customer</p>
                      <h2 className="mt-3 text-[28px] font-semibold text-[#111827]">{activeCustomerProfile.name}</h2>
                      <p className="mt-1 text-sm text-[#6B7280]">{activeCustomerProfile.company}</p>
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
                    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
                      <div className="space-y-6 rounded-[20px] border border-[#E5E7EB]/10 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between gap-4 text-sm text-[#111827]">
                            <span className="font-medium text-[#334155]">Phone</span>
                            <span className="text-[#0F172A]">{activeCustomerProfile.phone}</span>
                          </div>
                          {isPersonalActive ? (
                            <>
                              <div className="flex items-center justify-between gap-4 text-sm text-[#111827]">
                                <span className="font-medium text-[#334155]">Contact type</span>
                                <span className={`${BADGE} bg-[#EFF6FF] text-[#1E40AF]`}>
                                  <span aria-hidden>{activePersonalIcon}</span>
                                  {activePersonalEntry?.relationship ?? "Personal"}
                                </span>
                              </div>
                              <p className="text-sm text-[#475569]">This is a personal contact. AI, analytics, and lead tracking are disabled for this conversation.</p>
                            </>
                          ) : (
                            <>
                              <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between gap-4 text-sm text-[#111827]">
                                  <span className="font-medium text-[#334155]">Lead status</span>
                                  <span className={`${BADGE} bg-[#ECFDF5] text-[#166534]`}>{activeCustomerProfile.leadStatus}</span>
                                </div>
                                <div className="space-y-3">
                                  <span className="font-medium text-sm text-[#111827]">Tags</span>
                                  <div className="flex flex-wrap gap-2">
                                    {activeCustomerProfile.tags.map((tag) => (
                                      <span key={tag} className={`${BADGE} bg-[#F8FAFC] text-[#334155]`}>{tag}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="space-y-4 pt-4 border-t border-[#E5E7EB]/15">
                          <p className="text-sm font-semibold text-[#111827]">Interested products</p>
                          <div className="grid gap-2">
                            {activeCustomerProfile.interestedProducts.map((product) => (
                              <span key={product} className={`${BADGE} bg-[#F8FAFC] text-[#334155]`}>{product}</span>
                            ))}
                          </div>
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
                       <div key={post.id} className="rounded-[20px] border border-[#E5E7EB]/70 bg-[#F8FAFC]/70 p-4">
                         <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                           <div className="min-w-0">
                             <p className="text-sm font-semibold text-[#111827]">{post.caption}</p>
                             <p className="mt-2 text-sm text-[#6B7280]">{post.image}</p>
                           </div>
                           <div className="text-right text-sm text-[#6B7280]">
                             <p className="font-semibold text-[#111827]">{post.date}</p>
                             <p>{post.time}</p>
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
              <div className="p-7 bg-white rounded-md border border-[#E5E7EB]/30 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">Sokoos Broadcasts</div>
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

              <div className="overflow-hidden rounded-3xl border border-[#E5E7EB]/20 bg-[#FFFFFF] shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
                <table className="min-w-full divide-y divide-[#E5E7EB]/20 text-left">
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
                  <tbody className="divide-y divide-[#E5E7EB]/20 bg-white">
                    {filteredCustomers.filter((customer) => !isPersonalByPhone(customer.phone)).map((customer) => (
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
            <div className="space-y-6">
              <div className={CARD}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">AI Assistant</p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Customize your business AI agent</h2>
                    <p className="mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl">
                      Manage knowledge, behavior rules, escalation and testing from one place. All settings are mocked for now.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAiEnabled((value) => !value)}
                    className={`inline-flex items-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      aiEnabled ? "bg-[#22C55E] text-white" : "bg-[#E5E7EB] text-[#6B7280]"
                    }`}
                  >
                    {aiEnabled ? "AI Enabled" : "AI Disabled"}
                  </button>
                </div>

                <div className="mt-6 border-b border-[#E5E7EB] pb-4">
                  <div className="flex flex-wrap gap-2">
                    {ASSISTANT_TABS.map((tab) => {
                      const active = assistantTab === tab;
                      return (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setAssistantTab(tab)}
                          className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                            active
                              ? "bg-[#22C55E] text-white"
                              : "bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]"
                          }`}
                        >
                          {tab}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  {assistantTab === "Business Knowledge" && (
                    <div className="space-y-6">
                      <section className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                          <div>
                            <p className="text-sm font-semibold text-[#111827]">Business Information</p>
                            <p className="mt-2 text-sm text-[#6B7280]">This information helps the AI respond accurately to customer questions.</p>
                          </div>
                        </div>
                        <div className="mt-6 grid gap-4 lg:grid-cols-2">
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-semibold text-[#111827]">Business Name</label>
                              <input
                                value={businessInfo.name}
                                onChange={(event) => setBusinessInfo((prev) => ({ ...prev, name: event.target.value }))}
                                className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-semibold text-[#111827]">Business Type</label>
                              <input
                                value={businessInfo.type}
                                onChange={(event) => setBusinessInfo((prev) => ({ ...prev, type: event.target.value }))}
                                className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-semibold text-[#111827]">Business Hours</label>
                              <input
                                value={businessInfo.hours}
                                onChange={(event) => setBusinessInfo((prev) => ({ ...prev, hours: event.target.value }))}
                                className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                              />
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-semibold text-[#111827]">About Us</label>
                              <textarea
                                value={businessInfo.about}
                                onChange={(event) => setBusinessInfo((prev) => ({ ...prev, about: event.target.value }))}
                                className="mt-2 min-h-[130px] w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-semibold text-[#111827]">Service Areas</label>
                              <input
                                value={businessInfo.serviceAreas}
                                onChange={(event) => setBusinessInfo((prev) => ({ ...prev, serviceAreas: event.target.value }))}
                                className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-semibold text-[#111827]">Payment Methods</label>
                              <input
                                value={businessInfo.paymentMethods}
                                onChange={(event) => setBusinessInfo((prev) => ({ ...prev, paymentMethods: event.target.value }))}
                                className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-sm font-semibold text-[#111827]">Products & Services</p>
                            <p className="mt-2 text-sm text-[#6B7280]">Add the plans and prices your AI assistant should know.</p>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setKnowledgeProducts((current) => [
                                ...current,
                                { id: `kp${current.length + 1}`, name: "", price: "" },
                              ])
                            }
                            className="inline-flex items-center rounded-2xl bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
                          >
                            Add product
                          </button>
                        </div>
                        <div className="mt-6 space-y-4">
                          {knowledgeProducts.map((product) => (
                            <div key={product.id} className="grid gap-4 lg:grid-cols-[1fr_0.6fr]">
                              <input
                                value={product.name}
                                onChange={(event) =>
                                  setKnowledgeProducts((current) =>
                                    current.map((item) =>
                                      item.id === product.id ? { ...item, name: event.target.value } : item
                                    )
                                  )
                                }
                                placeholder="Product name"
                                className="w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                              />
                              <input
                                value={product.price}
                                onChange={(event) =>
                                  setKnowledgeProducts((current) =>
                                    current.map((item) =>
                                      item.id === product.id ? { ...item, price: event.target.value } : item
                                    )
                                  )
                                }
                                placeholder="Price"
                                className="w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                              />
                            </div>
                          ))}
                        </div>
                      </section>

                      <section className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-sm font-semibold text-[#111827]">FAQs</p>
                            <p className="mt-2 text-sm text-[#6B7280]">Common customer questions the assistant will use when answering.</p>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setFaqItems((current) => [
                                ...current,
                                { id: `faq${current.length + 1}`, question: "", answer: "" },
                              ])
                            }
                            className="inline-flex items-center rounded-2xl bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
                          >
                            Add FAQ
                          </button>
                        </div>
                        <div className="mt-6 space-y-4">
                          {faqItems.map((faq) => (
                            <div key={faq.id} className="space-y-3 rounded-3xl bg-white p-5 shadow-sm">
                              <div>
                                <label className="text-sm font-semibold text-[#111827]">Question</label>
                                <input
                                  value={faq.question}
                                  onChange={(event) =>
                                    setFaqItems((current) =>
                                      current.map((item) =>
                                        item.id === faq.id ? { ...item, question: event.target.value } : item
                                      )
                                    )
                                  }
                                  className="mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="text-sm font-semibold text-[#111827]">Answer</label>
                                <textarea
                                  value={faq.answer}
                                  onChange={(event) =>
                                    setFaqItems((current) =>
                                      current.map((item) =>
                                        item.id === faq.id ? { ...item, answer: event.target.value } : item
                                      )
                                    )
                                  }
                                  className="mt-2 min-h-[100px] w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-semibold text-[#111827]">Policies</p>
                            <p className="mt-2 text-sm text-[#6B7280]">
                              This information is used by the AI when responding to customers.
                            </p>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-semibold text-[#111827]">Return Policy</label>
                              <textarea
                                value={policies.returnPolicy}
                                onChange={(event) => setPolicies((prev) => ({ ...prev, returnPolicy: event.target.value }))}
                                className="mt-2 min-h-[100px] w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-semibold text-[#111827]">Delivery Policy</label>
                              <textarea
                                value={policies.deliveryPolicy}
                                onChange={(event) => setPolicies((prev) => ({ ...prev, deliveryPolicy: event.target.value }))}
                                className="mt-2 min-h-[100px] w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-semibold text-[#111827]">Cancellation Policy</label>
                              <textarea
                                value={policies.cancellationPolicy}
                                onChange={(event) => setPolicies((prev) => ({ ...prev, cancellationPolicy: event.target.value }))}
                                className="mt-2 min-h-[100px] w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  )}

                  {assistantTab === "AI Settings" && (
                    <div className="space-y-6">
                      <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold text-[#111827]">AI Identity</p>
                        <p className="mt-1 text-sm text-[#6B7280]">Give your assistant a name and personality.</p>
                        <div className="mt-4 space-y-4">
                          <div>
                            <label className="text-sm font-semibold text-[#111827]" htmlFor="assistant-name">
                              Assistant Name
                            </label>
                            <input
                              id="assistant-name"
                              type="text"
                              value={assistantName}
                              onChange={(event) => setAssistantName(event.target.value)}
                              className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                              placeholder="e.g., Nuru"
                            />
                          </div>
                        </div>
                      </section>

                      <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold text-[#111827]">Languages</p>
                        <p className="mt-1 text-sm text-[#6B7280]">Choose which languages your assistant uses.</p>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="text-sm font-semibold text-[#111827]" htmlFor="primary-language">
                              Primary Language
                            </label>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {LANGUAGES.map((option) => (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => setPrimaryLanguage(option)}
                                  className={`rounded-2xl border px-3 py-2 text-sm font-semibold transition ${
                                    primaryLanguage === option
                                      ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]"
                                      : "border-[#E5E7EB] bg-[#F9FAFB] text-[#111827] hover:bg-white"
                                  }`}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-[#111827]" htmlFor="secondary-language">
                              Secondary Language
                            </label>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {LANGUAGES.map((option) => (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => setSecondaryLanguage(option)}
                                  className={`rounded-2xl border px-3 py-2 text-sm font-semibold transition ${
                                    secondaryLanguage === option
                                      ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]"
                                      : "border-[#E5E7EB] bg-[#F9FAFB] text-[#111827] hover:bg-white"
                                  }`}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold text-[#111827]">Tone</p>
                        <p className="mt-1 text-sm text-[#6B7280]">Select how your assistant communicates with customers.</p>
                        <div className="mt-4 space-y-3">
                          {TONES.map((option) => (
                            <label key={option} className="flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                              <input
                                type="radio"
                                name="tone"
                                value={option}
                                checked={tone === option}
                                onChange={() => setTone(option)}
                                className="w-4 h-4"
                              />
                              <span className="text-sm font-semibold text-[#111827]">{option}</span>
                            </label>
                          ))}
                        </div>
                      </section>

                      <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold text-[#111827]">Sales Behavior</p>
                        <p className="mt-1 text-sm text-[#6B7280]">Configure how your assistant handles sales interactions.</p>
                        <div className="mt-4 space-y-3">
                          <label className="flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                            <input
                              type="checkbox"
                              checked={upsellProducts}
                              onChange={() => setUpsellProducts((value) => !value)}
                              className="w-4 h-4"
                            />
                            <span className="text-sm font-semibold text-[#111827]">Upsell Products</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                            <input
                              type="checkbox"
                              checked={recommendAlternatives}
                              onChange={() => setRecommendAlternatives((value) => !value)}
                              className="w-4 h-4"
                            />
                            <span className="text-sm font-semibold text-[#111827]">Recommend Alternatives</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                            <input
                              type="checkbox"
                              checked={closeSalesAutomatically}
                              onChange={() => setCloseSalesAutomatically((value) => !value)}
                              className="w-4 h-4"
                            />
                            <span className="text-sm font-semibold text-[#111827]">Close Sales Automatically</span>
                          </label>
                        </div>
                      </section>

                      <div className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 text-sm text-[#6B7280]">
                        <p className="font-semibold text-[#111827]">Note</p>
                        <p className="mt-2">
                          These settings control how your assistant represents your business and interacts with customers. All changes are saved automatically.
                        </p>
                      </div>
                    </div>
                  )}

                  {assistantTab === "Test AI" && (
                    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
                      <section className="rounded-3xl border border-[#E5E7EB] bg-white shadow-sm">
                        <div className="flex h-full min-h-[620px] flex-col">
                          <div className="border-b border-[#E5E7EB] p-6">
                            <p className="text-sm font-semibold text-[#111827]">Test your assistant</p>
                            <p className="mt-2 text-sm text-[#6B7280]">Run a mock conversation before customers interact with the AI.</p>
                          </div>
                          <div ref={testAiScrollRef} className="flex-1 overflow-y-auto px-6 py-5 space-y-4 bg-[#F9FAFB]">
                            {testAiMessages.map((message) => (
                              <div key={message.id} className={`max-w-[90%] ${message.role === "user" ? "ml-auto text-right" : "mr-auto text-left"}`}>
                                <div className={`inline-block rounded-3xl px-5 py-4 text-sm shadow-sm ${
                                  message.role === "user"
                                    ? "bg-[#22C55E] text-white"
                                    : "bg-white text-[#111827]"
                                }`}>
                                  <p>{message.text}</p>
                                </div>
                                {message.role === "ai" && message.source ? (
                                  <span className="mt-2 inline-flex rounded-full bg-[#E5E7EB] px-3 py-1 text-[11px] font-semibold text-[#475569]">
                                    Source: {message.source}
                                  </span>
                                ) : null}
                              </div>
                            ))}
                          </div>
                          <div className="sticky bottom-0 border-t border-[#E5E7EB] bg-white p-4">
                            <div className="space-y-3">
                              <label className="text-sm font-semibold text-[#111827]" htmlFor="test-ai-prompt">
                                Message
                              </label>
                              <textarea
                                id="test-ai-prompt"
                                value={testAiInput}
                                onChange={(event) => setTestAiInput(event.target.value)}
                                onKeyDown={(event) => {
                                  if (event.key === "Enter" && !event.shiftKey) {
                                    event.preventDefault();
                                    sendTestAiMessage();
                                  }
                                }}
                                className="min-h-[110px] w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                                placeholder="Type a message to the assistant..."
                              />
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs text-[#6B7280]">This is a mocked experience only; no backend call is made.</p>
                                <button
                                  type="button"
                                  onClick={sendTestAiMessage}
                                  className="inline-flex items-center justify-center rounded-2xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
                                >
                                  Send message
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Quick prompts</p>
                        <div className="mt-4 space-y-3">
                          {TEST_AI_PROMPTS.map((prompt) => (
                            <button
                              key={prompt}
                              type="button"
                              onClick={() => setTestAiInput(prompt)}
                              className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-left text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]"
                            >
                              {prompt}
                            </button>
                          ))}
                        </div>
                      </section>
                    </div>
                  )}

                  {assistantTab === "Escalation Rules" && (
                    <div className="space-y-6">
                      <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold text-[#111827]">Escalation Rules</p>
                        <p className="mt-2 text-sm text-[#6B7280]">Choose which situations trigger handoff to a human representative.</p>
                        <div className="mt-6 space-y-3">
                          <label className="flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition">
                            <input
                              type="checkbox"
                              checked={escalateComplaints}
                              onChange={() => setEscalateComplaints((value) => !value)}
                              className="mt-1 w-4 h-4"
                            />
                            <div>
                              <span className="text-sm font-semibold text-[#111827]">Complaints</span>
                              <p className="mt-1 text-xs text-[#6B7280]">Detect negative sentiment and escalate immediately.</p>
                            </div>
                          </label>
                          <label className="flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition">
                            <input
                              type="checkbox"
                              checked={escalateRefunds}
                              onChange={() => setEscalateRefunds((value) => !value)}
                              className="mt-1 w-4 h-4"
                            />
                            <div>
                              <span className="text-sm font-semibold text-[#111827]">Refund Requests</span>
                              <p className="mt-1 text-xs text-[#6B7280]">Hand off all refund-related conversations to the owner.</p>
                            </div>
                          </label>
                          <label className="flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition">
                            <input
                              type="checkbox"
                              checked={escalateLegalQuestions}
                              onChange={() => setEscalateLegalQuestions((value) => !value)}
                              className="mt-1 w-4 h-4"
                            />
                            <div>
                              <span className="text-sm font-semibold text-[#111827]">Legal Questions</span>
                              <p className="mt-1 text-xs text-[#6B7280]">Escalate any conversation involving legal matters or regulations.</p>
                            </div>
                          </label>
                          <label className="flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition">
                            <input
                              type="checkbox"
                              checked={escalateHumanRequested}
                              onChange={() => setEscalateHumanRequested((value) => !value)}
                              className="mt-1 w-4 h-4"
                            />
                            <div>
                              <span className="text-sm font-semibold text-[#111827]">Human Requested</span>
                              <p className="mt-1 text-xs text-[#6B7280]">Stop responding when customers explicitly ask for a person.</p>
                            </div>
                          </label>
                          <label className="flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition">
                            <input
                              type="checkbox"
                              checked={escalateUnknownQuestions}
                              onChange={() => setEscalateUnknownQuestions((value) => !value)}
                              className="mt-1 w-4 h-4"
                            />
                            <div>
                              <span className="text-sm font-semibold text-[#111827]">Unknown Questions</span>
                              <p className="mt-1 text-xs text-[#6B7280]">Hand off queries outside the AI's knowledge base.</p>
                            </div>
                          </label>
                          <label className="flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition">
                            <input
                              type="checkbox"
                              checked={escalateNegotiationsAbove10k}
                              onChange={() => setEscalateNegotiationsAbove10k((value) => !value)}
                              className="mt-1 w-4 h-4"
                            />
                            <div>
                              <span className="text-sm font-semibold text-[#111827]">Negotiations Above KES 10,000</span>
                              <p className="mt-1 text-xs text-[#6B7280]">Escalate any negotiation involving amounts above KES 10,000.</p>
                            </div>
                          </label>
                        </div>
                      </section>

                      <div className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 text-sm text-[#6B7280]">
                        <p className="font-semibold text-[#111827]">How escalation works</p>
                        <p className="mt-2">
                          When these situations occur, the AI stops responding and requests owner intervention. You'll receive a notification and can take over the conversation.
                        </p>
                      </div>
                    </div>
                  )}

                  {assistantTab === "Conversation Policies" && (
                    <div className="space-y-6">
                      <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold text-[#111827]">Business Hours</p>
                        <p className="mt-2 text-sm text-[#6B7280]">Set the hours when your business operates.</p>
                        <div className="mt-4">
                          <label className="text-sm font-semibold text-[#111827]" htmlFor="business-hours">
                            Operating Hours
                          </label>
                          <input
                            id="business-hours"
                            type="text"
                            value={businessHours}
                            onChange={(event) => setBusinessHours(event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                            placeholder="e.g., 8:00 AM - 6:00 PM"
                          />
                          <p className="mt-2 text-xs text-[#6B7280]">Example: Mon–Fri 8:00 AM - 6:00 PM, Sat 9:00 AM - 2:00 PM</p>
                        </div>
                      </section>

                      <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold text-[#111827]">Outside Business Hours</p>
                        <p className="mt-2 text-sm text-[#6B7280]">Choose how the AI behaves when customers message outside operating hours.</p>
                        <div className="mt-4 space-y-3">
                          <label className="flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition">
                            <input
                              type="radio"
                              name="outside-hours"
                              value="continue"
                              checked={outsideHoursMode === "continue"}
                              onChange={() => setOutsideHoursMode("continue")}
                              className="mt-1 w-4 h-4"
                            />
                            <div>
                              <span className="text-sm font-semibold text-[#111827]">Continue AI conversations</span>
                              <p className="mt-1 text-xs text-[#6B7280]">AI responds normally, treating it as in-hours.</p>
                            </div>
                          </label>
                          <label className="flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition">
                            <input
                              type="radio"
                              name="outside-hours"
                              value="collect"
                              checked={outsideHoursMode === "collect"}
                              onChange={() => setOutsideHoursMode("collect")}
                              className="mt-1 w-4 h-4"
                            />
                            <div>
                              <span className="text-sm font-semibold text-[#111827]">Collect customer information only</span>
                              <p className="mt-1 text-xs text-[#6B7280]">AI gathers contact details and messages for follow-up.</p>
                            </div>
                          </label>
                          <label className="flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition">
                            <input
                              type="radio"
                              name="outside-hours"
                              value="closed"
                              checked={outsideHoursMode === "closed"}
                              onChange={() => setOutsideHoursMode("closed")}
                              className="mt-1 w-4 h-4"
                            />
                            <div>
                              <span className="text-sm font-semibold text-[#111827]">Inform customers that the business is closed</span>
                              <p className="mt-1 text-xs text-[#6B7280]">AI informs customers of next opening time and offers to store messages.</p>
                            </div>
                          </label>
                        </div>
                      </section>

                      <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold text-[#111827]">Maximum AI Messages</p>
                        <p className="mt-2 text-sm text-[#6B7280]">Limit how many consecutive messages the AI can send before escalating to a human.</p>
                        <div className="mt-4">
                          <div className="flex items-center gap-3">
                            <input
                              type="number"
                              value={maxAiMessages}
                              onChange={(event) => setMaxAiMessages(Math.max(1, parseInt(event.target.value) || 1))}
                              min="1"
                              max="50"
                              className="w-20 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                            />
                            <span className="text-sm text-[#6B7280]">messages per conversation</span>
                          </div>
                          <p className="mt-2 text-xs text-[#6B7280]">Recommended: 8–12 messages before human escalation.</p>
                        </div>
                      </section>

                      <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm space-y-4">
                        <div>
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="text-sm font-semibold text-[#111827]">Allow AI to Close Sales</p>
                              <p className="mt-1 text-sm text-[#6B7280]">Let the AI send purchase confirmations and checkout links.</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => setAllowCloseSales((value) => !value)}
                              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                                allowCloseSales
                                  ? "bg-[#DCFCE7] text-[#166534]"
                                  : "bg-[#E5E7EB] text-[#6B7280]"
                              }`}
                            >
                              {allowCloseSales ? "On" : "Off"}
                            </button>
                          </div>
                        </div>
                        <div className="border-t border-[#E5E7EB] pt-4">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="text-sm font-semibold text-[#111827]">Allow AI to Schedule Appointments</p>
                              <p className="mt-1 text-sm text-[#6B7280]">Let the AI book consultations or service visits without human review.</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => setAllowScheduleAppointments((value) => !value)}
                              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                                allowScheduleAppointments
                                  ? "bg-[#DCFCE7] text-[#166534]"
                                  : "bg-[#E5E7EB] text-[#6B7280]"
                              }`}
                            >
                              {allowScheduleAppointments ? "On" : "Off"}
                            </button>
                          </div>
                        </div>
                      </section>

                      <div className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 text-sm text-[#6B7280]">
                        <p className="font-semibold text-[#111827]">Note</p>
                        <p className="mt-2">
                          These policies guide how your AI assistant handles conversations across different scenarios. All changes are automatically saved and take effect immediately.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
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
            <div className="space-y-6">
              <div className={`${CARD}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Settings</p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Business Profile</h2>
                    <p className="mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl">This information is used by the AI assistant when communicating with customers.</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">Business Details</p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">Business Name</label>
                      <input
                        type="text"
                        value={businessProfile.name}
                        onChange={(e) => setBusinessProfile((s) => ({ ...s, name: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Sokoos Internet"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">Industry</label>
                      <input
                        type="text"
                        value={businessProfile.industry}
                        onChange={(e) => setBusinessProfile((s) => ({ ...s, industry: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Telecom & Connectivity"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">Description</label>
                      <textarea
                        value={businessProfile.description}
                        onChange={(e) => setBusinessProfile((s) => ({ ...s, description: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="What does your business do?"
                        rows={4}
                      />
                    </div>
                  </div>
                </section>

                <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">Contact Information</p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">Phone</label>
                      <input
                        type="tel"
                        value={businessProfile.phone}
                        onChange={(e) => setBusinessProfile((s) => ({ ...s, phone: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., +254 20 3949 0101"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">Email</label>
                      <input
                        type="email"
                        value={businessProfile.email}
                        onChange={(e) => setBusinessProfile((s) => ({ ...s, email: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., support@sokoos.co.ke"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">Location</label>
                      <input
                        type="text"
                        value={businessProfile.location}
                        onChange={(e) => setBusinessProfile((s) => ({ ...s, location: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Nairobi, Kenya"
                      />
                    </div>
                  </div>
                </section>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">Operations</p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">Business Hours</label>
                      <input
                        type="text"
                        value={businessProfile.businessHours}
                        onChange={(e) => setBusinessProfile((s) => ({ ...s, businessHours: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Mon–Fri, 8:00 AM - 6:00 PM"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">Service Areas</label>
                      <input
                        type="text"
                        value={businessProfile.serviceAreas}
                        onChange={(e) => setBusinessProfile((s) => ({ ...s, serviceAreas: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Nairobi, Kiambu, Thika"
                      />
                    </div>
                  </div>
                </section>

                <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">Payment Methods</p>
                  <div className="mt-4 space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                      <input
                        type="checkbox"
                        checked={businessProfile.paymentMethods.mPesa}
                        onChange={() => setBusinessProfile((s) => ({
                          ...s,
                          paymentMethods: { ...s.paymentMethods, mPesa: !s.paymentMethods.mPesa },
                        }))}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-semibold text-[#111827]">M-Pesa</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                      <input
                        type="checkbox"
                        checked={businessProfile.paymentMethods.cash}
                        onChange={() => setBusinessProfile((s) => ({
                          ...s,
                          paymentMethods: { ...s.paymentMethods, cash: !s.paymentMethods.cash },
                        }))}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-semibold text-[#111827]">Cash</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                      <input
                        type="checkbox"
                        checked={businessProfile.paymentMethods.bankTransfer}
                        onChange={() => setBusinessProfile((s) => ({
                          ...s,
                          paymentMethods: { ...s.paymentMethods, bankTransfer: !s.paymentMethods.bankTransfer },
                        }))}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-semibold text-[#111827]">Bank Transfer</span>
                    </label>
                  </div>
                </section>
              </div>

              <div className={`${CARD}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Settings</p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Personal Contacts</h2>
                    <p className="mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl">Manage personal contacts the business owner may need quick access to.</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
                <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">Contacts</p>
                  <p className="mt-1 text-sm text-[#6B7280]">Card view of personal contacts stored for quick reference.</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {personalContacts.map((pc) => (
                      <div key={pc.id} className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-lg font-semibold text-[#111827]">{pc.name}</p>
                            <p className="mt-1 text-sm text-[#6B7280]">{pc.relationship}</p>
                          </div>
                          <div className="text-sm text-[#111827]">{pc.phone}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <aside className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">Add Contact</p>
                  <p className="mt-1 text-sm text-[#6B7280]">Add a personal contact for quick access.</p>
                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">Name</label>
                      <input
                        type="text"
                        value={newContact.name}
                        onChange={(e) => setNewContact((s) => ({ ...s, name: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Mary Wanjiku"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">Relationship</label>
                      <input
                        type="text"
                        value={newContact.relationship}
                        onChange={(e) => setNewContact((s) => ({ ...s, relationship: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Wife, Supplier"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">Phone Number</label>
                      <input
                        type="tel"
                        value={newContact.phone}
                        onChange={(e) => setNewContact((s) => ({ ...s, phone: e.target.value }))}
                        className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., +254712345678"
                      />
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        type="button"
                        onClick={addPersonalContact}
                        className="inline-flex items-center justify-center rounded-2xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
                      >
                        Add contact
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
