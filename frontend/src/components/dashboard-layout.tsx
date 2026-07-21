import { useEffect, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";
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
  ChevronUp,
  ChevronDown,
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
  Globe,
} from "lucide-react";
import AiSummaryCard from "./ui/ai-summary-card";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/dashboard",
    Icon: Home,
  },

  {
    label: "Inbox",
    href: "/dashboard/inbox",
    Icon: Inbox,
  },

  {
    label: "AI Employee",
    href: "/dashboard/ai",
    Icon: Cpu,
  },

  {
    label: "Growth Pages",
    href: "/dashboard/pages",
    Icon: Globe,
  },

  {
    label: "Marketing",
    href: "/dashboard/marketing",
    Icon: Megaphone,
  },

  {
    label: "Analytics",
    href: "/dashboard/analytics",
    Icon: Activity,
  },

  {
    label: "Settings",
    href: "/dashboard/settings",
    Icon: Settings,
  },
];
const STAT_CARDS = [
  { label: "Messages Today", value: "1,284", delta: "+18%" },
  { label: "AI Responses", value: "912", delta: "+24%" },
  { label: "Team Takeovers", value: "72", delta: "-4%" },
  { label: "New Leads", value: "38", delta: "+11%" },
];

const KNOWLEDGE_HUB_SOURCES = [
  {
    title: "Business Information",
    description: "Core company details used for greeting customers and explaining your services.",
    status: "Live",
    statusDetail: "Published",
    lastUpdated: "Today",
  },
  {
    title: "Products & Services",
    description: "Product and service details that the assistant can reference during sales conversations.",
    status: "Live",
    statusDetail: "Updated recently",
    lastUpdated: "2 hours ago",
  },
  {
    title: "Frequently Asked Questions",
    description: "Common customer questions and answers to improve response accuracy.",
    status: "Draft",
    statusDetail: "Needs review",
    lastUpdated: "Yesterday",
  },
  {
    title: "Business Policies",
    description: "Company policies governing returns, delivery, and cancellations.",
    status: "Live",
    statusDetail: "Reviewed",
    lastUpdated: "3 days ago",
  },
  {
    title: "Locations",
    description: "Store and service areas that help the assistant answer location requests.",
    status: "Live",
    statusDetail: "Published",
    lastUpdated: "1 week ago",
  },
  {
    title: "Business Hours",
    description: "Opening and closing times used for responding to time-based questions.",
    status: "Live",
    statusDetail: "Published",
    lastUpdated: "Today",
  },
  {
    title: "Pricing",
    description: "Current pricing details for plans, packages, and add-ons.",
    status: "Draft",
    statusDetail: "Pending approval",
    lastUpdated: "Today",
  },
  {
    title: "Payment Methods",
    description: "Payment options available to customers, including mobile money and bank transfer.",
    status: "Live",
    statusDetail: "Published",
    lastUpdated: "Yesterday",
  },
  {
    title: "Documents",
    description: "Important documents such as contracts, invoices, and onboarding guides.",
    status: "Draft",
    statusDetail: "Add missing files",
    lastUpdated: "4 days ago",
  },
  {
    title: "Website",
    description: "Web content and links that the assistant can reference for online support.",
    status: "Live",
    statusDetail: "Published",
    lastUpdated: "2 days ago",
  },
];

// Micro-interaction tokens
const TRANSITION = "transition-all duration-200 ease-out";
const TRANSITION_FAST = "transition-all duration-150 ease-out";
const INTERACTION =
  "transition-all duration-150 ease-out transform-gpu hover:-translate-y-0.5 active:scale-[0.98]";

// Unified dashboard design system (global tokens)
// - Radius: 20px for cards/inputs/buttons
// - Subtle border: #EEF2F6
// - Consistent shadow across cards
const GLOBAL_RADIUS = "rounded-[24px]";
const SUBTLE_BORDER = "border-[#EEF2F6]";
const CARD_SHADOW = "shadow-[0_10px_30px_rgba(15,23,42,0.06)]";

const CARD =
  `${GLOBAL_RADIUS} border ${SUBTLE_BORDER} bg-white p-6 ${CARD_SHADOW} transform ` +
  TRANSITION +
  " hover:-translate-y-1";
const CARD_SOFT =
  `${GLOBAL_RADIUS} border ${SUBTLE_BORDER} bg-[#F8FAFB] p-6 ${CARD_SHADOW} transform ` +
  TRANSITION +
  " hover:-translate-y-1";
const CARD_FLAT =
  `${GLOBAL_RADIUS} border ${SUBTLE_BORDER} bg-[#F9FAFB] p-6 shadow-none transform ` +
  TRANSITION;
const LIST_ITEM =
  `${GLOBAL_RADIUS} bg-[#F9FAFB] p-6 transform ` +
  TRANSITION +
  " hover:bg-[#EFF6FF] hover:-translate-y-1";

type AiSummaryData = {
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
};

const buildMockAiSummary = (): AiSummaryData => ({
  customerIntent:
    "Looking for pricing and comparing internet plans before making a purchase.",
  buyingProbability: 92,
  sentiment: {
    label: "Positive",
    icon: "😊",
    badgeClassName:
      "border-[#A7F3D0] bg-[#ECFDF5] text-[#166534]",
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
});
const BUTTON_PRIMARY =
  "inline-flex items-center justify-center rounded-[24px] bg-[#22C55E] px-4 py-3 text-[15px] font-semibold text-white shadow-none " +
  INTERACTION +
  " hover:bg-[#16A34A]";
const BUTTON_SECONDARY =
  `inline-flex items-center justify-center rounded-[24px] border ${SUBTLE_BORDER} bg-white px-4 py-3 text-[15px] font-semibold text-[#111827] ` +
  INTERACTION +
  " hover:bg-[#F3F4F6]";
const BUTTON_TERTIARY =
  "inline-flex items-center justify-center rounded-[24px] bg-[#F3F4F6] px-4 py-3 text-[15px] font-semibold text-[#374151] " +
  INTERACTION +
  " hover:bg-[#E5E7EB]";
const QUICK_ACTION_BUTTON =
  `w-full ${GLOBAL_RADIUS} border ${SUBTLE_BORDER} bg-[#F9FAFB] p-6 text-left text-[15px] font-semibold text-[#111827] transform ` +
  TRANSITION +
  " hover:border-[#CBD5E1] hover:bg-[#EFF6FF] hover:-translate-y-1";
const INPUT_FIELD =
  `mt-3 w-full ${GLOBAL_RADIUS} border ${SUBTLE_BORDER} bg-[#F9FAFB] px-4 py-3 text-[15px] text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#DCFCE7] ` +
  TRANSITION +
  " focus:shadow-none";
const INPUT_FIELD_WHITE =
  `mt-3 w-full ${GLOBAL_RADIUS} border ${SUBTLE_BORDER} bg-white px-4 py-3 text-[15px] text-[#111827] shadow-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#DCFCE7] ` +
  TRANSITION +
  " focus:shadow-none";
// Typography tokens for consistent hierarchy
const PANEL_TITLE = "text-[24px] font-semibold text-[#111827]";
const SECTION_HEADING =
  "text-[12px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]";
const CARD_TITLE = "text-[28px] font-semibold mb-6 text-[#0F172A]";
const PAGE_TITLE = "text-[34px] font-semibold text-[#0F172A]";
const CUSTOMER_NAME = "text-[28px] font-semibold text-[#111827]";
const BODY_TEXT = "text-[15px] text-[#475569]";
const BODY_MEDIUM = "text-[15px] font-semibold text-[#111827]";
const SECONDARY = "text-[12px] text-[#64748B]";
const MESSAGE_PREVIEW = "text-[15px] text-[#475569]";
const TIME_LABEL = "text-[12px] text-[#64748B]";
const CAPTION = "text-[13px] text-[#64748B]";
const BADGE =
  "inline-flex h-7 items-center gap-1.5 rounded-full px-3 text-[12px] font-medium tracking-[0.02em] transition-colors duration-200 ease";
const BADGE_ICON = "h-2.5 w-2.5 rounded-full";
const STATUS_CHIP =
  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium flex-shrink-0 transition-all duration-150 ease-out transform hover:scale-[1.02]";

const RECENT_ACTIVITY = [
  {
    title: "New customer inquiry",
    subtitle: "Received in WhatsApp inbox",
    time: "5m ago",
  },
  {
    title: "AI replied to lead",
    subtitle: "Followed up about pricing",
    time: "12m ago",
  },
  {
    title: "Status post scheduled",
    subtitle: "Weekly promotion goes live",
    time: "1h ago",
  },
  {
    title: "New product added",
    subtitle: "Shoes catalog updated",
    time: "3h ago",
  },
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
  {
    label: "Messages",
    value: "13.4k",
    delta: "+12%",
    description: "Compared to last week",
  },
  {
    label: "Leads",
    value: "1,280",
    delta: "+8%",
    description: "Warm and new leads",
  },
  {
    label: "Sales",
    value: "KSh 4.2M",
    delta: "+18%",
    description: "Revenue from campaigns",
  },
  {
    label: "AI Resolution",
    value: "78%",
    delta: "+6%",
    description: "Handled without human support",
  },
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
    description:
      "Friendly, helpful, and sales-aware responses that reflect the business’s local presence.",
  },
  {
    title: "Key offerings",
    description:
      "20 Mbps, Business Package, and 10 Mbps plans are the most common recommendations.",
  },
  {
    title: "FAQ focus",
    description:
      "Business hours, plan pricing, trial availability, and support escalation are prioritized.",
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
    description:
      "Send urgent requests directly to you when customers request human support.",
  },
  {
    label: "Escalate after business hours",
    description:
      "If a message arrives outside the set hours, flag it for your follow-up.",
  },
  {
    label: "Escalate after repeated unanswered questions",
    description:
      "Detect when the customer asks multiple questions in a row without a clear response.",
  },
];

const CONVERSATION_POLICIES = [
  {
    label: "Keep replies concise",
    description:
      "Prefer short, helpful answers that are easy for customers to read on mobile.",
  },
  {
    label: "Use polite and professional language",
    description:
      "Avoid slang and keep tone appropriate for business customers.",
  },
  {
    label: "Respect business hours",
    description:
      "Use outside-hours messages to let customers know when the business will respond next.",
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
    message:
      "Your 20 Mbps plan is perfect for our office. Let's proceed with the order.",
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
    message:
      "We've received your payment. Service activation starts tomorrow morning.",
    time: "Yesterday",
    badge: 0,
    source: "owner",
    isSaved: true,
    avatar: "PO",
  },
];

const formatConversationTime = (time: string | undefined) => time || "Unknown";

const INBOX_TAB_ITEMS = ["All", "AI Active", "Human", "Needs Reply"] as const;

const INBOX_MESSAGES = {
  c1: [
    {
      from: "customer",
      text: "Can you share the latest pricing?",
      time: "2:13 PM",
    },
    {
      from: "agent",
      text: "Sure — our starter plan is available from $29/month.",
      time: "2:14 PM",
    },
    {
      from: "customer",
      text: "Great, and is there a free trial?",
      time: "2:15 PM",
    },
  ],
  c2: [
    {
      from: "agent",
      text: "You can edit availability in Catalog > Products.",
      time: "1:35 PM",
    },
    { from: "customer", text: "Got it, thanks!", time: "1:36 PM" },
  ],
  c3: [
    {
      from: "customer",
      text: "Thanks for the quick response!",
      time: "12:05 PM",
    },
    {
      from: "agent",
      text: "Happy to help — let me know if you need anything else.",
      time: "12:06 PM",
    },
  ],
  c4: [
    {
      from: "customer",
      text: "Please pause the AI for tonight.",
      time: "11:20 AM",
    },
    {
      from: "agent",
      text: "Sure, I’ll pause it from 9PM tonight.",
      time: "11:21 AM",
    },
  ],
  c5: [
    {
      from: "customer",
      text: "I’m interested in your business package — can you share details?",
      time: "4:10 PM",
    },
    {
      from: "agent",
      text: "Absolutely — I’ll send you the package details now.",
      time: "4:12 PM",
    },
  ],
  c6: [
    {
      from: "customer",
      text: "What's the fastest plan you have?",
      time: "2:30 PM",
    },
    {
      from: "agent",
      text: "Our 20 Mbps plan is ideal for offices. Would you like more details?",
      time: "2:32 PM",
    },
    {
      from: "customer",
      text: "Your 20 Mbps plan is perfect for our office. Let's proceed with the order.",
      time: "2:45 PM",
    },
  ],
  c7: [
    {
      from: "customer",
      text: "How long will installation take?",
      time: "11:00 AM",
    },
    {
      from: "agent",
      text: "Installation usually takes 2-3 hours. We can schedule it for next week.",
      time: "11:02 AM",
    },
    {
      from: "customer",
      text: "Thank you! I'll set up the installation for next Monday.",
      time: "11:15 AM",
    },
  ],
  c8: [
    {
      from: "customer",
      text: "I've sent the payment. When does service start?",
      time: "9:00 AM",
    },
    {
      from: "agent",
      text: "We've received your payment. Service activation starts tomorrow morning.",
      time: "9:05 AM",
    },
  ],
};

const CUSTOMER_PROFILES: Record<
  string,
  {
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
  }
> = {
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
  const [activeWorkspaceSection, setActiveWorkspaceSection] =
    useState<
      | "Identity"
      | "Knowledge Hub"
      | "Catalogue"
      | "Sales Playbooks"
      | "Skills"
      | "Policies"
      | "Test AI"
      | "Performance"
    >("Identity");

  const CATALOG_ITEMS = [
    {
      id: "p-restaurant-001",
      name: "Ginger Citrus Salad",
      category: "Restaurant",
      price: "$8.50",
      description: "Fresh mixed greens, candied ginger, citrus segments, and sesame vinaigrette.",
      availability: "In stock",
      imagesCount: 3,
      documentsCount: 0,
      image: "/assets/sample/food-salad.jpg",
    },
    {
      id: "p-retail-001",
      name: "Everyday Cotton Tee",
      category: "Retail",
      price: "$19.99",
      description: "Soft 100% cotton tee available in multiple colors and sizes.",
      availability: "Low stock",
      imagesCount: 4,
      documentsCount: 1,
      image: "/assets/sample/tee.jpg",
    },
    {
      id: "p-clinic-001",
      name: "Adult Wellness Check",
      category: "Clinic",
      price: "$65.00",
      description: "Comprehensive check-up including vitals and basic blood work.",
      availability: "By appointment",
      imagesCount: 1,
      documentsCount: 2,
      image: "/assets/sample/clinic.jpg",
    },
    {
      id: "p-school-001",
      name: "Primary Math Workbook",
      category: "School",
      price: "$12.00",
      description: "Grade 3 math workbook with exercises and answer key.",
      availability: "In stock",
      imagesCount: 2,
      documentsCount: 1,
      image: "/assets/sample/workbook.jpg",
    },
    {
      id: "p-realestate-001",
      name: "2-Bedroom Riverside Apartment",
      category: "Real Estate",
      price: "$250,000",
      description: "Modern apartment with river views, 2 bed, 2 bath, parking included.",
      availability: "Available",
      imagesCount: 8,
      documentsCount: 3,
      image: "/assets/sample/apartment.jpg",
    },
    {
      id: "p-salon-001",
      name: "Deluxe Hair Treatment",
      category: "Salon",
      price: "$45.00",
      description: "Repairing deep-conditioning treatment with scalp massage.",
      availability: "In stock",
      imagesCount: 2,
      documentsCount: 0,
      image: "/assets/sample/salon.jpg",
    },
    {
      id: "p-electronics-001",
      name: "Noise-Cancelling Headphones",
      category: "Electronics",
      price: "$129.99",
      description: "Wireless over-ear headphones with 30h battery life.",
      availability: "In stock",
      imagesCount: 5,
      documentsCount: 2,
      image: "/assets/sample/headphones.jpg",
    },
  ];
  const [assistantTab, setAssistantTab] =
    useState<(typeof ASSISTANT_TABS)[number]>("Business Knowledge");
  const [activeConversation, setActiveConversation] = useState<string>("c1");
  const [searchQuery, setSearchQuery] = useState("");
  const [customerSearch, setCustomerSearch] = useState("");
  const [activeTab, setActiveTab] =
    useState<(typeof INBOX_TAB_ITEMS)[number]>("All");
  const [summaryGenerated, setSummaryGenerated] = useState(false);
  const [summaryVisible, setSummaryVisible] = useState(false);
  const [aiSummary, setAiSummary] = useState<AiSummaryData | null>(null);

  const activeConversationData = INBOX_CONVERSATIONS.find(
    (item) => item.id === activeConversation,
  );
  const activeCustomerProfile =
    CUSTOMER_PROFILES[activeConversation as keyof typeof CUSTOMER_PROFILES] ??
    CUSTOMER_PROFILES.c1;
  const activeMessages =
    INBOX_MESSAGES[activeConversation as keyof typeof INBOX_MESSAGES] ?? [];

  const inboxCounts = {
    All: INBOX_CONVERSATIONS.length,
    "AI Active": INBOX_CONVERSATIONS.filter(
      (item) => item.source === "ai_handling",
    ).length,
    Human: INBOX_CONVERSATIONS.filter((item) => item.source === "owner").length,
    "Needs Reply": INBOX_CONVERSATIONS.filter(
      (item) => item.source === "needs_attention",
    ).length,
  } as const;
  const [sourceOverrides, setSourceOverrides] = useState<
    Record<string, string>
  >({});
  const getEffectiveSource = (id: string, original?: string) =>
    sourceOverrides[id] ?? original ?? "owner";
  const [messageInput, setMessageInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const identityFormRef = useRef<HTMLDivElement | null>(null);
  const [sidebarHovered, setSidebarHovered] = useState(false);
  const [customerPanelFading, setCustomerPanelFading] = useState(false);

  const scrollIdentityForm = (offset: number) => {
    if (!identityFormRef.current) return;
    identityFormRef.current.scrollBy({ top: offset, behavior: "smooth" });
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
  const [businessHours, setBusinessHours] = useState(
    "Mon–Fri, 8:00 AM - 6:00 PM",
  );
  const [humanTakeover, setHumanTakeover] = useState(true);
  const [language, setLanguage] =
    useState<(typeof LANGUAGES)[number]>("English");
  const [personality, setPersonality] =
    useState<(typeof PERSONALITIES)[number]>("Friendly");
  const [testAiInput, setTestAiInput] = useState(
    "How much is the Business Package?",
  );
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
  const [escalateUnknownQuestions, setEscalateUnknownQuestions] =
    useState(true);
  const [escalateNegotiationsAbove10k, setEscalateNegotiationsAbove10k] =
    useState(true);
  const [policyKeepShort, setPolicyKeepShort] = useState(true);
  const [policyUseProfessionalTone, setPolicyUseProfessionalTone] =
    useState(true);
  const [policyRespectHours, setPolicyRespectHours] = useState(true);
  const [outsideHoursMode, setOutsideHoursMode] = useState<
    "continue" | "collect" | "closed"
  >("collect");
  const [maxAiMessages, setMaxAiMessages] = useState(10);
  const [allowCloseSales, setAllowCloseSales] = useState(true);
  const [allowScheduleAppointments, setAllowScheduleAppointments] =
    useState(true);
  const [assistantName, setAssistantName] = useState("Nuru");
  const [assistantRole, setAssistantRole] = useState("Customer Success Assistant");
  const [assistantDescription, setAssistantDescription] = useState(
    "Helps customers find the right internet plan, answer product questions, and support onboarding.",
  );
  const [primaryLanguage, setPrimaryLanguage] =
    useState<(typeof LANGUAGES)[number]>("English");
  const [secondaryLanguage, setSecondaryLanguage] =
    useState<(typeof LANGUAGES)[number]>("Kiswahili");
  const [tone, setTone] = useState<(typeof TONES)[number]>("Friendly");
  const [timezone, setTimezone] = useState("East Africa Time (EAT)");
  const [responseSpeed, setResponseSpeed] = useState("Fast");
  const [avatarFileName, setAvatarFileName] = useState("profile-avatar.png");
  const [saveConfirmation, setSaveConfirmation] = useState("");
  const [upsellProducts, setUpsellProducts] = useState(true);
  const [recommendAlternatives, setRecommendAlternatives] = useState(true);
  const [closeSalesAutomatically, setCloseSalesAutomatically] = useState(false);
  const [businessInfo, setBusinessInfo] = useState({
    name: "Sokoos Internet",
    type: "Telecom & Connectivity",
    about:
      "We help local businesses stay online with reliable internet plans, fast support, and easy onboarding.",
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
    {
      id: "pc1",
      name: "Mary Wanjiku",
      relationship: "Wife",
      phone: "+254712345678",
    },
    {
      id: "pc2",
      name: "Peter Mwangi",
      relationship: "Supplier",
      phone: "+254733222222",
    },
  ]);
  const [newContact, setNewContact] = useState({
    name: "",
    relationship: "",
    phone: "",
  });
  const addPersonalContact = () => {
    const name = newContact.name.trim();
    const phone = newContact.phone.trim();
    const relationship = newContact.relationship.trim();
    if (!name || !phone) return;
    setPersonalContacts((c) => [
      ...c,
      {
        id: `pc-${Date.now()}`,
        name,
        relationship: relationship || "Contact",
        phone,
      },
    ]);
    setNewContact({ name: "", relationship: "", phone: "" });
  };
  // Personal-contact helpers (moved here so personalContacts is defined first)
  const isPersonalByPhone = (phone?: string | null) =>
    !!phone && personalContacts.some((pc) => pc.phone === phone);
  const isPersonalActive = isPersonalByPhone(
    activeConversationData?.phone ?? null,
  );
  const activePersonalEntry = personalContacts.find(
    (pc) => pc.phone === activeConversationData?.phone,
  );
  const activePersonalIcon =
    activePersonalEntry &&
    ["wife", "husband", "spouse", "family"].some((k) =>
      activePersonalEntry.relationship.toLowerCase().includes(k),
    )
      ? "🏠"
      : "👤";
  const effectiveActiveSource = isPersonalActive
    ? "personal"
    : getEffectiveSource(activeConversation, activeConversationData?.source);
  const activeAgentName = isPersonalActive
    ? "Personal"
    : String(effectiveActiveSource).startsWith("ai")
      ? "Sokoos AI"
      : (OWNER_NAMES[activeConversation] ?? "You");
  // Helper: Generate single conversation status badge
  const getConversationStatusBadge = (source: string, isPersonal: boolean) => {
    if (isPersonal) {
      return {
        emoji: "🏠",
        label: "Personal",
        bg: "bg-[#F1F5F9]",
        text: "text-[#334155]",
      };
    }
    switch (source) {
      case "ai_handling":
        return {
          emoji: "🤖",
          label: "AI Active",
          bg: "bg-[#ECFDF5]",
          text: "text-[#059669]",
        };
      case "ai_handled":
        return {
          emoji: "✅",
          label: "AI Resolved",
          bg: "bg-[#F0FDF4]",
          text: "text-[#166534]",
        };
      case "needs_attention":
        return {
          emoji: "🔴",
          label: "Needs Reply",
          bg: "bg-[#FEF2F2]",
          text: "text-[#B91C1C]",
        };
      case "owner":
      default:
        return {
          emoji: "👤",
          label: "Human",
          bg: "bg-[#EFF6FF]",
          text: "text-[#1E3A8A]",
        };
    }
  };

  const toggleAiForActive = () => {
    // Do not allow toggling AI for personal contacts (mock behavior).
    if (isPersonalActive) return;
    const current =
      sourceOverrides[activeConversation] ??
      activeConversationData?.source ??
      "";
    if (String(current).startsWith("ai")) {
      setSourceOverrides((s) => ({ ...s, [activeConversation]: "owner" }));
    } else {
      setSourceOverrides((s) => ({
        ...s,
        [activeConversation]: "ai_handling",
      }));
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
    returnPolicy:
      "Customers may return services within 7 days if there is a technical issue requiring a fix.",
    deliveryPolicy:
      "We deliver service activation details via WhatsApp within 24 hours of payment.",
    cancellationPolicy:
      "Cancel anytime with 48 hours notice before the next billing cycle.",
  });
  const [businessProfile, setBusinessProfile] = useState({
    name: "Sokoos Internet",
    industry: "Telecom & Connectivity",
    description:
      "We help local businesses stay online with reliable internet plans, fast support, and easy onboarding.",
    phone: "+254 20 3949 0101",
    email: "support@sokoos.co.ke",
    location: "Nairobi, Kenya",
    businessHours: "Mon–Fri, 8:00 AM - 6:00 PM",
    serviceAreas: "Nairobi, Kiambu, Thika",
    paymentMethods: { mPesa: true, cash: true, bankTransfer: true },
  });
  const [imageLabel, setImageLabel] = useState("No file selected");
  const [customerCollapsed, setCustomerCollapsed] = useState(false);

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("sokoos-auth");
    void router.navigate({ to: "/signin", replace: true });
  };

  // Future team state (initialized but not used when hasTeam = false)
  const teamMembers = hasTeam ? MOCK_TEAM_MEMBERS : [];
  const currentMember = hasTeam
    ? MOCK_TEAM_MEMBERS.find((m) => m.id === currentUserId)
    : null;

  return (
    <div className="h-screen min-h-screen overflow-hidden bg-[#FFFFFF] text-[#111827]">
      {/* Desktop fixed left sidebar */}
      <div
        className="hidden md:block"
        onMouseEnter={() => setSidebarHovered(true)}
        onMouseLeave={() => setSidebarHovered(false)}
      >
        <aside className="md:fixed md:inset-y-0 md:left-0 md:flex md:flex-col md:pt-4 bg-[#FFFFFF] border-r border-[#E5E7EB]/10 w-[72px] z-20">
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-[20px] bg-[#22C55E] flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <span className="sr-only">Sokoos</span>
              </div>
              <div className="h-10 w-10" />
            </div>
          </div>

          <nav className="flex-1 px-1.5 overflow-hidden">
            <ul className="space-y-2">
              {NAV_ITEMS.map(({ label, href, Icon }) => {
                const active = selected === label;
                return (
                  <li key={href}>
                    <button
                      onClick={() => setSelected(label)}
                      title={label}
                      aria-label={label}
                      className={`w-full flex items-center justify-center rounded-[20px] p-2 text-sm font-medium transition duration-200 ${
                        active
                          ? "bg-[#ECFDF5] text-[#047857] shadow-sm"
                          : "text-[#6B7280] hover:bg-[#EFF6FF]"
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 ${active ? "text-[#059669] opacity-100" : "text-[#6B7280] opacity-90"}`}
                      />
                      <span className="sr-only">{label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          {sidebarHovered && (
            <div className="fixed inset-y-0 left-0 z-50 w-64 min-w-[248px] bg-[#FFFFFF] border-r border-[#E5E7EB]/10 shadow-[0_18px_48px_rgba(15,23,42,0.12)] transition-all duration-200 ease-out">
              <div className="h-full flex flex-col pt-4">
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-[20px] bg-[#22C55E] flex items-center justify-center text-white font-semibold">
                      S
                    </div>
                    <span className="text-lg font-semibold">Sokoos</span>
                  </div>
                </div>
                <nav className="flex-1 overflow-y-auto px-4">
                  <ul className="space-y-2">
                    {NAV_ITEMS.map(({ label, href, Icon }) => {
                      const active = selected === label;
                      return (
                        <li key={href}>
                          <button
                            onClick={() => setSelected(label)}
                            title={label}
                            aria-label={label}
                            className={`w-full text-left flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium transition duration-200 ${
                              active
                                ? "bg-[#ECFDF5] text-[#047857]"
                                : "text-[#475569] hover:bg-[#EFF6FF]"
                            }`}
                          >
                            <Icon
                              className={`h-5 w-5 ${active ? "text-[#059669]" : "text-[#6B7280]"}`}
                            />
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
        </aside>
      </div>

      {/* Mobile top header with menu button */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#FFFFFF] border-b border-[#E5E7EB]/20 flex items-center px-4 z-30">
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="mr-3 inline-flex items-center justify-center rounded-[20px] p-2 text-[#111827] hover:bg-[#F3F4F6]"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-[20px] bg-[#22C55E] flex items-center justify-center text-white font-semibold">
            S
          </div>
          <span className="font-semibold">Sokoos</span>
        </div>
      </header>

      {/* Mobile slide-over sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#FFFFFF] border-r border-[#E5E7EB]/10 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-[20px] bg-[#22C55E] flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <span className="font-semibold">Sokoos</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-[20px] hover:bg-[#F3F4F6]"
              >
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
                        className={`w-full text-left flex items-center gap-2.5 rounded-[20px] px-3 py-2 text-sm font-medium transition duration-200 ${
                          active
                            ? "bg-[#F0FDF4] text-[#065F46] shadow-sm ring-1 ring-[#D1FAE5]/40"
                            : "text-[#475569] hover:bg-[#EFF6FF] hover:text-[#111827]"
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
      <main className="h-full overflow-hidden pt-14 md:pt-0 md:pl-[72px]">
        <div className="max-w-7xl mx-auto h-full p-4">
          {/* Render placeholder pages based on selected state */}
          {selected === "Home" && (
            <div className="h-full overflow-y-auto space-y-6 pr-2">
              <div className="relative overflow-hidden rounded-[32px] border border-[#DCFCE7] bg-gradient-to-br from-[#F0FDF4] via-white to-[#ECFDF5] p-8 shadow-sm">
                <div className="absolute right-[-60px] top-[-60px] h-56 w-56 rounded-full bg-[#22C55E]/10 blur-3xl" />
                <div className="absolute bottom-[-80px] left-[-80px] h-72 w-72 rounded-full bg-[#16A34A]/10 blur-3xl" />

                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#16A34A]">
                      AI Growth Dashboard
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-[#111827]">
                      Good morning, Francis 👋 Your AI Employee is already at
                      work.
                    </h1>

                    <p className="mt-3 max-w-3xl text-lg text-[#64748B] leading-8">
                      Your AI is responding to customers, qualifying leads,
                      booking appointments and following up automatically.
                      Here's how your business is growing today.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <button className="rounded-xl bg-[#16A34A] px-5 py-3 font-semibold text-white hover:bg-[#15803D] transition">
                        Open Inbox
                      </button>

                      <button className="rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 font-semibold text-[#111827] hover:bg-[#F9FAFB] transition">
                        Chat with AI Employee
                      </button>

                      <button className="rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 font-semibold text-[#111827] hover:bg-[#F9FAFB] transition">
                        Create Campaign
                      </button>

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 font-semibold text-[#111827] hover:bg-[#F9FAFB] transition"
                      >
                        Logout
                      </button>
                    </div>
                  </div>

                  <div className="grid w-full max-w-md grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                      <p className="text-sm text-[#64748B]">AI Conversations</p>

                      <p className="mt-2 text-3xl font-bold text-[#111827]">
                        124
                      </p>

                      <p className="mt-1 text-sm text-[#16A34A]">↑ 18 today</p>
                    </div>

                    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                      <p className="text-sm text-[#64748B]">Qualified Leads</p>

                      <p className="mt-2 text-3xl font-bold text-[#111827]">
                        27
                      </p>

                      <p className="mt-1 text-sm text-[#16A34A]">
                        AI identified today
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                      <p className="text-sm text-[#64748B]">Appointments</p>

                      <p className="mt-2 text-3xl font-bold text-[#111827]">
                        8
                      </p>

                      <p className="mt-1 text-sm text-[#16A34A]">
                        Booked automatically
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                      <p className="text-sm text-[#64748B]">Customer Rating</p>

                      <p className="mt-2 text-3xl font-bold text-[#111827]">
                        ★ 4.9
                      </p>

                      <p className="mt-1 text-sm text-[#16A34A]">
                        Based on AI conversations
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <section className={CARD}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={SECTION_HEADING}>Ask Sokoos</p>

                    <h2 className={CARD_TITLE}>Your AI Employee is ready</h2>
                  </div>

                  <Bot className="h-7 w-7 text-[#22C55E]" />
                </div>

                <div className="mt-6">
                  <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-5 py-4">
                    <input
                      type="text"
                      placeholder="Ask your AI Employee anything..."
                      className="w-full bg-transparent text-[15px] outline-none placeholder:text-[#94A3B8]"
                    />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]">
                      Create Campaign
                    </button>

                    <button className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]">
                      Generate Quote
                    </button>

                    <button className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]">
                      Build Landing Page
                    </button>

                    <button className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]">
                      Show Today's Leads
                    </button>

                    <button className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]">
                      Train on PDF
                    </button>

                    <button className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]">
                      Summarize Conversations
                    </button>
                  </div>
                </div>
              </section>

              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {/* AI Command Center */}

                <section className={CARD}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={SECTION_HEADING}>AI Command Center</p>

                      <h2 className={CARD_TITLE}>AI Employee Status</h2>
                    </div>

                    <Bot className="h-8 w-8 text-[#22C55E]" />
                  </div>

                  <div className="mt-6 space-y-5">
                    <div className="flex justify-between">
                      <span>AI Confidence</span>
                      <strong>96%</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>Currently Replying</span>
                      <strong>17 customers</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>Human Takeovers</span>
                      <strong>4</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>Average Response</span>
                      <strong>6 sec</strong>
                    </div>
                  </div>

                  <button className="mt-8 w-full rounded-xl bg-[#16A34A] py-3 font-semibold text-white hover:bg-[#15803D]">
                    Train AI Employee
                  </button>
                </section>

                {/* Business Health */}

                <section className={CARD}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={SECTION_HEADING}>Business Knowledge</p>

                      <h2 className={CARD_TITLE}>Manage Knowledge</h2>
                    </div>

                    <div className="text-3xl">📚</div>
                  </div>

                  <div className="mt-6 space-y-5">
                    <div className="flex justify-between">
                      <span>Products</span>
                      <strong>12</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>FAQs</span>
                      <strong>18</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>Policies</span>
                      <strong>7</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>Training Score</span>
                      <strong className="text-[#16A34A]">92%</strong>
                    </div>
                  </div>

                  <button className="mt-8 w-full rounded-xl border border-[#E5E7EB] py-3 font-semibold hover:bg-[#F9FAFB]">
                    Improve Knowledge
                  </button>
                </section>

                {/* Sales Pipeline */}

                <section className={CARD}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={SECTION_HEADING}>Customer Growth</p>

                      <h2 className={CARD_TITLE}>Growth Today</h2>
                    </div>

                    <div className="text-3xl">💰</div>
                  </div>

                  <div className="mt-6 space-y-5">
                    <div className="flex justify-between">
                      <span>Qualified Leads</span>
                      <strong>24</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>Quotes Sent</span>
                      <strong>11</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>Follow-ups Sent</span>
                      <strong>8</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>Conversions</span>
                      <strong className="text-[#16A34A]">8 customers</strong>
                    </div>
                  </div>

                  <button className="mt-8 w-full rounded-xl border border-[#E5E7EB] py-3 font-semibold hover:bg-[#F9FAFB]">
                    View Customers
                  </button>
                </section>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
                {/* Recent AI Activity */}

                <section className={CARD}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={SECTION_HEADING}>Recent AI Activity</p>

                      <h2 className={CARD_TITLE}>
                        What your AI Employee has been doing
                      </h2>
                    </div>

                    <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#15803D]">
                      Live
                    </span>
                  </div>

                  <div className="mt-8 space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ECFDF5]">
                        🤖
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold">
                          AI answered a pricing enquiry
                        </p>

                        <p className="text-sm text-[#64748B]">
                          James asked about installation pricing and received an
                          instant reply.
                        </p>
                      </div>

                      <span className="text-sm text-[#94A3B8]">2 min ago</span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFF6FF]">
                        📅
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold">Appointment booked</p>

                        <p className="text-sm text-[#64748B]">
                          Site installation scheduled automatically for
                          tomorrow.
                        </p>
                      </div>

                      <span className="text-sm text-[#94A3B8]">12 min ago</span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEF3C7]">
                        💬
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold">Follow-up sent</p>

                        <p className="text-sm text-[#64748B]">
                          AI followed up with a customer who requested a
                          quotation yesterday.
                        </p>
                      </div>

                      <span className="text-sm text-[#94A3B8]">21 min ago</span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEF2F2]">
                        👤
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold">
                          Human takeover requested
                        </p>

                        <p className="text-sm text-[#64748B]">
                          AI detected a negotiation and asked you to continue
                          the conversation.
                        </p>
                      </div>

                      <span className="text-sm text-[#94A3B8]">37 min ago</span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF4FF]">
                        ⭐
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold">
                          Customer left a 5-star rating
                        </p>

                        <p className="text-sm text-[#64748B]">
                          "Fast replies and excellent service."
                        </p>
                      </div>

                      <span className="text-sm text-[#94A3B8]">1 hour ago</span>
                    </div>
                  </div>
                </section>

                {/* WhatsApp Overview */}

                <section className={CARD}>
                  <p className={SECTION_HEADING}>WhatsApp Overview</p>

                  <h2 className={CARD_TITLE}>Current Inbox Status</h2>

                  <div className="mt-8 space-y-5">
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">
                        Unread Conversations
                      </span>

                      <strong>3</strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#64748B]">AI Handling</span>

                      <strong className="text-[#16A34A]">17</strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Waiting For You</span>

                      <strong className="text-[#DC2626]">2</strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Resolved Today</span>

                      <strong>36</strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Average Response</span>

                      <strong className="text-[#16A34A]">6 sec</strong>
                    </div>

                    <button className="mt-6 w-full rounded-xl bg-[#16A34A] py-3 font-semibold text-white transition hover:bg-[#15803D]">
                      Open Inbox
                    </button>
                  </div>
                </section>
              </div>
            </div>
          )}
          {selected === "Inbox" && (
            <div
              className={`grid gap-6 px-6 py-6 transition-all duration-300 ease-out items-stretch h-full grid-cols-1 ${customerCollapsed ? "md:grid-cols-[320px_1fr]" : "md:grid-cols-[320px_1fr_minmax(330px,360px)]"}`}
            >
              <section
                className={`${CARD} w-full h-full min-h-0 flex flex-col min-w-0`}
              >
                <div className="border-b border-[#ECECEC] px-5 py-2">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className={PANEL_TITLE}>Conversations</h2>
                      <p className={`${SECONDARY} mt-0`}>
                        Recent messages and active chats
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 overflow-x-auto px-5 py-2 flex-nowrap custom-scrollbar">
                  {INBOX_TAB_ITEMS.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`whitespace-nowrap rounded-full px-4 py-1 text-xs transform flex-shrink-0 ${TRANSITION} ${
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
                        className={`w-full h-full bg-transparent text-sm text-[#111827] placeholder:text-[#94A3B8] placeholder:font-regular outline-none ${TRANSITION_FAST}`}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-h-0 space-y-1.5 overflow-y-auto pr-2 scroll-smooth custom-scrollbar">
                    {INBOX_CONVERSATIONS.filter((conversation) => {
                      const src =
                        sourceOverrides[conversation.id] ?? conversation.source;
                      if (activeTab === "Needs Reply") {
                        return src === "needs_attention";
                      }
                      if (activeTab === "AI Active") {
                        return src === "ai_handling";
                      }
                      if (activeTab === "Human") {
                        return src === "owner";
                      }
                      return true;
                    })
                      .filter(
                        (conversation) =>
                          (conversation.name ?? "")
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()) ||
                          (conversation.phone ?? "")
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()) ||
                          conversation.message
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()),
                      )
                      .map((conversation) => {
                        const active = conversation.id === activeConversation;
                        const effectiveSourceRaw =
                          sourceOverrides[conversation.id] ??
                          conversation.source;
                        const isPersonal = personalContacts.some(
                          (pc) => pc.phone === conversation.phone,
                        );
                        const effectiveSource = isPersonal
                          ? "personal"
                          : effectiveSourceRaw;
                        return (
                          <button
                            key={conversation.id}
                            onClick={() =>
                              setActiveConversation(conversation.id)
                            }
                            className={`w-full overflow-hidden rounded-[20px] px-5 py-3 min-h-[92px] text-left ${TRANSITION} transform-gpu active:scale-[0.98] flex flex-col gap-4 ${
                              active
                                ? "bg-[#F3FDF7] border border-[#22C55E]/20 ring-1 ring-[#22C55E]/20 shadow-[0_12px_36px_rgba(15,23,42,0.08)]"
                                : "bg-white border border-transparent hover:bg-[#FBFFF8] hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:-translate-y-0.5"
                            }`}
                          >
                            {/* Header: Avatar + Name + Time */}
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E5E7EB] to-[#D1D5DB] text-sm font-semibold text-[#64748B]">
                                  {conversation.avatar}
                                </div>
                                <div className="min-w-0 flex-1 space-y-1">
                                  {conversation.isSaved && conversation.name ? (
                                    <p
                                      className="text-[16px] font-semibold truncate"
                                      title={conversation.name}
                                    >
                                      {conversation.name}
                                    </p>
                                  ) : (
                                    <p
                                      className="text-[16px] font-semibold truncate"
                                      title={
                                        conversation.phone ?? "Unknown Customer"
                                      }
                                    >
                                      {conversation.phone ?? "Unknown Customer"}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-start gap-2 flex-shrink-0">
                                {conversation.badge > 0 ? (
                                  <span
                                    className={`inline-flex min-w-[18px] h-4 items-center justify-center rounded-full bg-[#22C55E] text-white text-[10px] font-semibold transform-gpu transition duration-200 ease-out px-2`}
                                  >
                                    {conversation.badge}
                                  </span>
                                ) : null}
                                <span
                                  className={`${TIME_LABEL} whitespace-nowrap text-[11px] text-[#94A3B8]`}
                                >
                                  {formatConversationTime(conversation.time)}
                                </span>
                              </div>
                            </div>

                            {/* Badge Row: Status badge */}
                            <div className="min-w-0">
                              {(() => {
                                const badge = getConversationStatusBadge(
                                  effectiveSource,
                                  isPersonal,
                                );
                                return (
                                  <span
                                    className={`${STATUS_CHIP} ${badge.bg} ${badge.text} text-xs px-2 py-1`}
                                  >
                                    {badge.emoji} {badge.label}
                                  </span>
                                );
                              })()}
                            </div>

                            <p
                              className={`${SECONDARY} text-[14px] leading-5 min-w-0 truncate`}
                              title={conversation.message}
                            >
                              {conversation.message}
                            </p>
                          </button>
                        );
                      })}
                  </div>
                </div>
              </section>

              <section
                className={`${CARD} w-full h-full min-h-0 flex flex-col min-w-0`}
              >
                {/* Header - Fixed */}
                <div className="border-b border-[#ECECEC] px-6 py-4 mb-2 flex-shrink-0">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <h2 className={`${CUSTOMER_NAME} truncate`}>
                          {
                            INBOX_CONVERSATIONS.find(
                              (item) => item.id === activeConversation,
                            )?.name
                          }
                        </h2>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[#64748B]">
                          <span className="truncate">
                            {activeConversationData?.phone ?? "Unknown phone"}
                          </span>
                          <span className="text-[#94A3B8]">•</span>
                          {(() => {
                            const badge = getConversationStatusBadge(
                              effectiveActiveSource,
                              isPersonalActive,
                            );
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
                          className={`inline-flex h-9 rounded-full border px-3.5 text-[10px] font-semibold items-center justify-center ${TRANSITION_FAST} active:scale-[0.98] ${
                            isPersonalActive
                              ? "border-[#E5E7EB] bg-white text-[#9CA3AF] cursor-not-allowed"
                              : "border-[#22C55E] bg-white text-[#166534] hover:bg-[#ECFDF5]"
                          }`}
                          title={
                            isPersonalActive
                              ? "Cannot toggle mode for personal contacts"
                              : "AI Assist"
                          }
                        >
                          ✨ AI Assist
                        </button>
                        {customerCollapsed && (
                          <button
                            type="button"
                            onClick={() => setCustomerCollapsed(false)}
                            className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] bg-white text-[#64748B] ${TRANSITION} hover:bg-[#F9FAFB] hover:text-[#111827] flex-shrink-0`}
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

                {/* Messages Area - Scrollable, flex-end aligned */}
                <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-6 pt-3 pb-6 flex flex-col justify-end bg-[#F8FCF7]">
                  <div className="space-y-5 flex flex-col">
                    {activeMessages.map((message, index) => {
                      const originalWasAi = String(
                        activeConversationData?.source,
                      ).startsWith("ai");
                      if (
                        message.from === "agent" &&
                        originalWasAi &&
                        !String(effectiveActiveSource).startsWith("ai")
                      ) {
                        return null;
                      }
                      const isAgent = message.from === "agent";
                      const isAi =
                        isAgent &&
                        String(effectiveActiveSource).startsWith("ai");
                      const senderLabel = isAi ? "Sokoos AI" : activeAgentName;

                      return (
                        <div
                          key={`${message.time}-${index}`}
                          className={`${TRANSITION_FAST} transition-opacity`}
                        >
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
                          <div
                            className={`flex ${isAgent ? "justify-start" : "justify-end"}`}
                          >
                            <div
                              className={`rounded-[28px] px-3 py-2 text-sm break-words max-w-[70%] ${
                                isAgent
                                  ? "bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7]"
                                  : "bg-white text-[#111827] border border-[#E5E7EB]"
                              } ${TRANSITION_FAST} transition-shadow transform-gpu`}
                            >
                              <div className="flex flex-col gap-2">
                                <p className="leading-relaxed text-sm">
                                  {message.text}
                                </p>
                                <div
                                  className={`self-end text-[9px] ${isAgent ? "text-[#16A34A]/30" : "text-[#64748B]/30"} font-normal`}
                                >
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

                {/* Input Area - Sticky at bottom */}
                <div className="shrink-0 border-t border-[#E5E7EB] bg-white px-6 py-3">
                  <div
                    className={`rounded-[20px] bg-[#F9FAFB] border border-[#E5E7EB] flex items-center gap-3 min-h-[52px] px-4 ${TRANSITION}`}
                  >
                    <textarea
                      ref={textareaRef}
                      value={messageInput}
                      onChange={(event) => setMessageInput(event.target.value)}
                      placeholder="Type a message..."
                      className={`min-w-0 flex-1 resize-none overflow-y-auto overflow-x-hidden custom-scrollbar bg-transparent text-sm leading-5 text-[#111827] outline-none placeholder:text-[#CBD5E1] placeholder:font-regular ${TRANSITION_FAST}`}
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
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 shrink-0 px-5 py-4 border-b border-[#ECECEC]">
                    <div>
                      <h2 className={`${CUSTOMER_NAME} mt-1`}>
                        {activeCustomerProfile.name}
                      </h2>
                      <p className={`${SECONDARY} mt-2`}>
                        {activeCustomerProfile.company}
                      </p>
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
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] bg-white text-[#64748B] ${TRANSITION_FAST} hover:bg-[#F9FAFB] hover:text-[#111827] active:scale-95 shrink-0`}
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
                                <h3 className="mt-2 text-[18px] font-semibold text-[#111827]">
                                  Sales assistant snapshot
                                </h3>
                              </div>
                              <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#16A34A]">
                                Mock data
                              </span>
                            </div>
                            <div className="mt-4 h-px bg-[#E5E7EB]/80" />
                          </div>

                          <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Customer Intent</p>
                            <p className="mt-2 text-[15px] leading-6 text-[#475569]">
                              {aiSummary?.customerIntent}
                            </p>
                          </div>

                          <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Buying Probability</p>
                            <div className="mt-3 flex items-center gap-3">
                              <p className="text-[24px] font-semibold text-[#111827]">
                                {aiSummary?.buyingProbability}%
                              </p>
                              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#E5E7EB]">
                                <div
                                  className="h-full rounded-full bg-[#22C55E]"
                                  style={{
                                    width: `${aiSummary?.buyingProbability ?? 0}%`,
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Customer Sentiment</p>
                            <div className="mt-3">
                              <span
                                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-semibold ${aiSummary?.sentiment.badgeClassName}`}
                              >
                                <span>{aiSummary?.sentiment.icon}</span>
                                {aiSummary?.sentiment.label}
                              </span>
                            </div>
                          </div>

                          <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Buying Signals</p>
                            <ul className="mt-3 space-y-2 text-[15px] text-[#475569]">
                              {aiSummary?.buyingSignals.map((signal) => (
                                <li key={signal} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#22C55E]" />
                                  <span>{signal}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="rounded-[24px] border border-[#D1FAE5] bg-[#F0FDF4] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Recommended Next Action</p>
                            <p className="mt-2 text-[15px] leading-6 font-semibold text-[#166534]">
                              {aiSummary?.recommendedNextAction}
                            </p>
                          </div>

                          <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Suggested Reply</p>
                            <div className="mt-3 rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                              {aiSummary?.suggestedReply.map((line, index) => (
                                <p
                                  key={`${line}-${index}`}
                                  className={`text-[14px] leading-6 text-[#334155] ${index === 0 ? "font-semibold text-[#111827]" : ""}`}
                                >
                                  {line}
                                </p>
                              ))}
                            </div>
                            <button
                              type="button"
                              className="mt-4 inline-flex items-center justify-center rounded-[24px] bg-[#22C55E] px-4 py-2.5 text-[14px] font-semibold text-white transition-all duration-200 ease-out hover:bg-[#16A34A]"
                            >
                              Insert Reply
                            </button>
                          </div>

                          <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Knowledge Used</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {aiSummary?.knowledgeSources.map((source) => (
                                <span
                                  key={source}
                                  className="inline-flex items-center gap-2 rounded-full border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-1.5 text-[12px] font-semibold text-[#166534]"
                                >
                                  <span className="text-[11px]">✓</span>
                                  {source}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-full min-h-[220px] flex-col items-start justify-center gap-4 px-1">
                        <div className="w-full max-w-[280px] space-y-2 text-left">
                          <p className={SECTION_HEADING}>✨ AI Insights</p>
                          <h3 className="text-[17px] font-semibold leading-6 text-[#111827]">
                            Understand this conversation instantly.
                          </h3>
                          <p className="text-[13px] leading-5 text-[#475569]">
                            Generate a summary to reveal:
                          </p>
                        </div>
                        <div className="flex w-full max-w-[280px] flex-col gap-2 text-left text-[13px] text-[#475569]">
                          {[
                            "Conversation Summary",
                            "Customer Intent",
                            "Buying Signals",
                            "Suggested Reply",
                            "Recommended Next Action",
                          ].map((item) => (
                            <div key={item} className="flex items-start gap-2.5">
                              <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#DCFCE7] text-[9px] font-semibold text-[#166534]">
                                ✓
                              </span>
                              <span className="font-semibold text-[#111827]">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 w-full max-w-[280px]">
                          <button
                            type="button"
                            onClick={() => {
                              setSummaryGenerated(true);
                              setSummaryVisible(false);
                              setAiSummary(buildMockAiSummary());
                              window.setTimeout(() => setSummaryVisible(true), 20);
                            }}
                            className="w-full rounded-[24px] bg-[#22C55E] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:bg-[#16A34A] hover:shadow-sm active:scale-[0.98]"
                          >
                            Generate AI Summary
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}
            </div>
          )}
          {selected === "AI Employee" && (
            <div className={`space-y-6 ${CARD}`}>
              <div className="grid gap-6 xl:grid-cols-[0.35fr_0.65fr]">
                <aside className="sticky top-6 space-y-5 rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                      AI Employee Workspace
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-[#111827]">
                      Assistant workspace
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                      Manage your assistant identity, knowledge sources, and
                      live behavior from one place.
                    </p>
                  </div>

                  <div className="space-y-2">
                    {([
                      "Identity",
                      "Knowledge Hub",
                      "Catalogue",
                      "Sales Playbooks",
                      "Skills",
                      "Policies",
                      "Test AI",
                      "Performance",
                    ] as const).map((section) => {
                      const active = activeWorkspaceSection === section;
                      return (
                        <button
                          key={section}
                          type="button"
                          onClick={() => setActiveWorkspaceSection(section)}
                          className={`flex w-full items-center justify-between rounded-[20px] px-4 py-3 text-left text-sm font-semibold transition ${
                            active
                              ? "bg-[#22C55E] text-white"
                              : "bg-white text-[#111827] hover:bg-[#EFF6FF]"
                          }`}
                        >
                          <span>{section}</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      );
                    })}
                  </div>
                </aside>

                <main className="space-y-6">
                  <div className={CARD_SOFT}>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-[#6B7280]">
                          Workspace overview
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold text-[#111827]">
                          AI Employee command center
                        </h2>
                        <p className="mt-2 text-sm text-[#6B7280]">
                          Review your assistant profile, knowledge, policies,
                          and performance in one place.
                        </p>
                      </div>
                      <div className="space-y-2 text-right">
                        <p className="text-sm font-semibold text-[#111827]">
                          Active section
                        </p>
                        <p className="text-sm text-[#6B7280]">
                          {activeWorkspaceSection}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                    {activeWorkspaceSection === "Identity" && (
                      <div className="relative space-y-8">
                        <div className="absolute right-0 top-0 flex gap-2">
                          <button
                            type="button"
                            onClick={() => scrollIdentityForm(-240)}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] transition hover:bg-[#F3F4F6]"
                          >
                            <ChevronUp className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => scrollIdentityForm(240)}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] transition hover:bg-[#F3F4F6]"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </button>
                        </div>

                        <div
                          ref={identityFormRef}
                          className="max-h-[calc(100vh-280px)] overflow-y-auto pr-4 pb-6"
                        >
                          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                            <div className="space-y-6">
                              <div className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg">
                                <div className="rounded-[24px] bg-[#F8FAFB] p-5">
                                  <p className={SECTION_HEADING}>General</p>
                                  <h3 className={PANEL_TITLE}>AI Employee profile</h3>
                                  <p className="mt-2 text-sm leading-6 text-[#475569]">
                                    Set the assistant identity, business role, and personality used across customer conversations.
                                  </p>
                                </div>

                                <div className="grid gap-5">
                                  <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                    <label className="block text-sm font-semibold text-[#111827]" htmlFor="assistant-name">
                                      AI Employee Name
                                    </label>
                                    <p className="mt-1 text-sm text-[#64748B]">
                                      The name customers see when the assistant greets them.
                                    </p>
                                    <input
                                      id="assistant-name"
                                      value={assistantName}
                                      onChange={(event) => setAssistantName(event.target.value)}
                                      placeholder="Nuru"
                                      className={INPUT_FIELD}
                                    />
                                  </div>

                                  <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                    <label className="block text-sm font-semibold text-[#111827]" htmlFor="assistant-role">
                                      Role
                                    </label>
                                    <p className="mt-1 text-sm text-[#64748B]">
                                      Describe the assistant’s primary responsibility.
                                    </p>
                                    <input
                                      id="assistant-role"
                                      value={assistantRole}
                                      onChange={(event) => setAssistantRole(event.target.value)}
                                      placeholder="Customer Success Assistant"
                                      className={INPUT_FIELD}
                                    />
                                  </div>

                                  <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                    <label className="block text-sm font-semibold text-[#111827]" htmlFor="assistant-description">
                                      Short Description
                                    </label>
                                    <p className="mt-1 text-sm text-[#64748B]">
                                      Summarize the assistant’s voice in one concise sentence.
                                    </p>
                                    <textarea
                                      id="assistant-description"
                                      value={assistantDescription}
                                      onChange={(event) => setAssistantDescription(event.target.value)}
                                      rows={4}
                                      placeholder="Helps customers find the right internet plan, answer product questions, and support onboarding."
                                      className={`${INPUT_FIELD} min-h-[150px] resize-none`}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg">
                                <div className="rounded-[24px] bg-[#F8FAFB] p-5">
                                  <p className={SECTION_HEADING}>Language & tone</p>
                                  <h3 className={PANEL_TITLE}>Conversation style</h3>
                                </div>

                                <div className="space-y-6">
                                  <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                      <label className="block text-sm font-semibold text-[#111827]" htmlFor="primary-language">
                                        Primary Language
                                      </label>
                                      <p className="mt-1 text-sm text-[#64748B]">
                                        Main language for customer greetings and messages.
                                      </p>
                                      <select
                                        id="primary-language"
                                        value={primaryLanguage}
                                        onChange={(event) => setPrimaryLanguage(event.target.value as typeof LANGUAGES[number])}
                                        className={INPUT_FIELD}
                                      >
                                        {LANGUAGES.map((lang) => (
                                          <option key={lang} value={lang}>
                                            {lang}
                                          </option>
                                        ))}
                                      </select>
                                    </div>

                                    <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                      <label className="block text-sm font-semibold text-[#111827]" htmlFor="secondary-language">
                                        Secondary Language
                                      </label>
                                      <p className="mt-1 text-sm text-[#64748B]">
                                        Secondary language used for fallback responses.
                                      </p>
                                      <select
                                        id="secondary-language"
                                        value={secondaryLanguage}
                                        onChange={(event) => setSecondaryLanguage(event.target.value as typeof LANGUAGES[number])}
                                        className={INPUT_FIELD}
                                      >
                                        {LANGUAGES.map((lang) => (
                                          <option key={lang} value={lang}>
                                            {lang}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>

                                  <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                      <p className="block text-sm font-semibold text-[#111827]">Personality</p>
                                      <p className="mt-1 text-sm text-[#64748B]">
                                        Pick a personality that fits your business.
                                      </p>
                                      <div className="mt-3 grid gap-2">
                                        {PERSONALITIES.map((personalityOption) => (
                                          <button
                                            key={personalityOption}
                                            type="button"
                                            onClick={() => setPersonality(personalityOption)}
                                            className={`w-full min-h-[56px] rounded-[20px] px-4 py-3 text-sm font-semibold text-left transition ${
                                              personality === personalityOption
                                                ? "border-[#22C55E] bg-[#ECFDF5] text-[#111827] shadow-sm"
                                                : "border border-[#E5E7EB] bg-white text-[#475569] hover:border-[#CBD5E1]"
                                            }`}
                                          >
                                            {personalityOption}
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                      <label className="block text-sm font-semibold text-[#111827]" htmlFor="tone">
                                        Tone
                                      </label>
                                      <p className="mt-1 text-sm text-[#64748B]">
                                        The assistant’s formality when replying.
                                      </p>
                                      <select
                                        id="tone"
                                        value={tone}
                                        onChange={(event) => setTone(event.target.value as typeof TONES[number])}
                                        className={INPUT_FIELD}
                                      >
                                        {TONES.map((toneOption) => (
                                          <option key={toneOption} value={toneOption}>
                                            {toneOption}
                                          </option>
                                        ))}
                                      </select>
                                      <div className="mt-4 rounded-[20px] border border-dashed border-[#CBD5E1] bg-white p-4 text-sm text-[#475569]">
                                        <p className="font-semibold text-[#111827]">Tone preview</p>
                                        <p className="mt-2">
                                          {tone === "Friendly"
                                            ? "Hi there! I’m here to help you choose the best plan."
                                            : tone === "Professional"
                                            ? "Hello. I’m ready to assist with your service options."
                                            : tone === "Formal"
                                            ? "Good day. I can provide more information on our offerings."
                                            : "Hello. I’m here to help you find the right solution."}
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                      <label className="block text-sm font-semibold text-[#111827]" htmlFor="business-hours">
                                        Business Hours
                                      </label>
                                      <input
                                        id="business-hours"
                                        value={businessHours}
                                        onChange={(event) => setBusinessHours(event.target.value)}
                                        placeholder="Mon–Fri, 8:00 AM - 6:00 PM"
                                        className={INPUT_FIELD}
                                      />
                                    </div>

                                    <div>
                                      <label className="block text-sm font-semibold text-[#111827]" htmlFor="timezone">
                                        Timezone
                                      </label>
                                      <select
                                        id="timezone"
                                        value={timezone}
                                        onChange={(event) => setTimezone(event.target.value)}
                                        className={INPUT_FIELD}
                                      >
                                        <option>East Africa Time (EAT)</option>
                                        <option>West Africa Time (WAT)</option>
                                        <option>Central Africa Time (CAT)</option>
                                        <option>UTC</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div>
                                    <label className="block text-sm font-semibold text-[#111827]" htmlFor="response-speed">
                                      Response Speed
                                    </label>
                                    <p className="mt-1 text-sm text-[#64748B]">
                                      How quickly the assistant responds to customer prompts.
                                    </p>
                                    <select
                                      id="response-speed"
                                      value={responseSpeed}
                                      onChange={(event) => setResponseSpeed(event.target.value)}
                                      className={INPUT_FIELD}
                                    >
                                      <option>Instant</option>
                                      <option>Fast</option>
                                      <option>Balanced</option>
                                      <option>Detailed</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-6">
                              <div className={`${CARD} p-6`}>
                                <div className="flex items-center gap-4">
                                  <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-[#E5F6EC] text-3xl font-semibold text-[#065F46]">
                                    {assistantName.slice(0, 1) || "A"}
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-[#111827]">
                                      Assistant avatar
                                    </p>
                                    <p className="mt-1 text-sm text-[#6B7280]">
                                      Upload a profile image so customers recognize the assistant.
                                    </p>
                                  </div>
                                </div>

                                <div className="mt-6 rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                                  <div className="flex items-center justify-between gap-3">
                                    <div>
                                      <p className="text-sm font-semibold text-[#111827]">Selected file</p>
                                      <p className="mt-1 text-sm text-[#6B7280]">{avatarFileName}</p>
                                    </div>
                                    <label className="inline-flex cursor-pointer items-center rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]">
                                      <Image className="mr-2 h-4 w-4" />
                                      Upload
                                      <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(event) => {
                                          const file = event.target.files?.[0];
                                          if (file) {
                                            setAvatarFileName(file.name);
                                          }
                                        }}
                                      />
                                    </label>
                                  </div>
                                  <p className="mt-4 text-sm text-[#64748B]">
                                    Recommended: PNG or JPG, up to 5MB.
                                  </p>
                                </div>
                              </div>

                              <div className={`${CARD} p-6 space-y-6`}>
                                <div>
                                  <p className="text-sm font-semibold text-[#111827]">Summary</p>
                                  <p className="mt-1 text-sm text-[#6B7280]">
                                    Quick overview of the current assistant configuration.
                                  </p>
                                </div>

                                <div className="grid gap-4">
                                  <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                    <p className="text-sm font-semibold text-[#111827]">Name</p>
                                    <p className="mt-1 text-sm text-[#6B7280]">{assistantName}</p>
                                  </div>
                                  <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                    <p className="text-sm font-semibold text-[#111827]">Role</p>
                                    <p className="mt-1 text-sm text-[#6B7280]">{assistantRole}</p>
                                  </div>
                                  <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                    <p className="text-sm font-semibold text-[#111827]">Timezone</p>
                                    <p className="mt-1 text-sm text-[#6B7280]">{timezone}</p>
                                  </div>
                                  <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                    <p className="text-sm font-semibold text-[#111827]">Response Speed</p>
                                    <p className="mt-1 text-sm text-[#6B7280]">{responseSpeed}</p>
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => {
                                    setSaveConfirmation("Saved successfully.");
                                    window.setTimeout(() => setSaveConfirmation(""), 3200);
                                  }}
                                  className="w-full rounded-[24px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"
                                >
                                  Save Changes
                                </button>

                                {saveConfirmation && (
                                  <p className="text-sm text-[#16A34A]">
                                    {saveConfirmation}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                    {activeWorkspaceSection === "Knowledge Hub" && (
                      <div className="space-y-6">
                        <div className={`${CARD_SOFT} space-y-6 max-h-[calc(100vh-280px)] overflow-hidden`}>
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p className="text-sm uppercase tracking-[0.2em] text-[#6B7280]">Knowledge Hub</p>
                              <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Manage your knowledge sources</h2>
                              <p className="mt-2 text-sm text-[#6B7280]">Keep your assistant up to date with the latest business knowledge.</p>
                            </div>
                            <button
                              type="button"
                              className="inline-flex items-center justify-center rounded-[20px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"
                            >
                              <Plus className="mr-2 h-4 w-4" />
                              Add Knowledge Source
                            </button>
                          </div>

                          <div className="max-h-[calc(100vh-360px)] overflow-y-auto pr-2">
                            <div className="grid gap-6 xl:grid-cols-2">
                              {KNOWLEDGE_HUB_SOURCES.map((source) => (
                                <div key={source.title} className={`${CARD} p-6`}>
                                  <div className="flex items-start justify-between gap-4">
                                    <div>
                                      <p className="text-sm font-semibold text-[#111827]">{source.title}</p>
                                      <p className="mt-2 text-sm text-[#64748B]">{source.description}</p>
                                    </div>
                                    <span className="rounded-full border border-[#E5E7EB] bg-[#F8FAFB] px-3 py-1 text-xs font-semibold text-[#475569]">{source.status}</span>
                                  </div>

                                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                      <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">Last updated</p>
                                      <p className="mt-2 text-sm font-semibold text-[#111827]">{source.lastUpdated}</p>
                                    </div>
                                    <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                      <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">Knowledge status</p>
                                      <p className="mt-2 text-sm font-semibold text-[#111827]">{source.statusDetail}</p>
                                    </div>
                                  </div>

                                  <div className="mt-6 flex justify-end">
                                    <button type="button" className="rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]">Edit</button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Catalogue" && (
                      <div className="space-y-6">
                        <div className="grid gap-6 xl:grid-cols-[300px_1fr] items-start">
                          <aside className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 sticky top-6">
                            <p className="text-sm font-semibold text-[#111827]">Products & Services</p>
                            <div className="mt-3 space-y-2 text-sm text-[#475569]">
                              {[
                                "Products & Services",
                                "Categories",
                                "Collections",
                                "Media Library",
                                "Documents",
                                "Price Lists",
                                "Quote Templates",
                                "Imports",
                              ].map((item) => (
                                <button
                                  key={item}
                                  type="button"
                                  className="flex w-full items-center justify-between rounded-[12px] px-3 py-2 text-left text-sm font-medium transition hover:bg-[#EFF6FF]"
                                >
                                  <span>{item}</span>
                                  <ChevronRight className="h-4 w-4 text-[#94A3B8]" />
                                </button>
                              ))}
                            </div>
                          </aside>

                          <div>
                            <div className="mb-4 flex items-center justify-between gap-3">
                              <div className="flex flex-wrap gap-2">
                                <button type="button" className="inline-flex items-center gap-2 rounded-[12px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Add Item</button>
                                <button type="button" className="inline-flex items-center gap-2 rounded-[12px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold">Upload Files</button>
                                <button type="button" className="inline-flex items-center gap-2 rounded-[12px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold">Import Excel</button>
                                <button type="button" className="inline-flex items-center gap-2 rounded-[12px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold">Import CSV</button>
                                <button type="button" className="inline-flex items-center gap-2 rounded-[12px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold">Upload PDF</button>
                              </div>
                              <div className="text-sm text-[#64748B]">Showing {CATALOG_ITEMS.length} items</div>
                            </div>

                            <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {CATALOG_ITEMS.map((item) => (
                                  <div key={item.id} className="rounded-[12px] border border-[#EEF2F6] bg-white p-4 min-h-[160px] flex flex-col justify-between">
                                    <div className="flex items-start gap-4">
                                      <img src={item.image} alt={item.name} className="h-20 w-28 flex-shrink-0 rounded-lg object-cover" />
                                      <div className="flex-1">
                                        <p className="text-sm font-semibold text-[#111827]">{item.name}</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">{item.category} • {item.imagesCount} images • {item.documentsCount} docs</p>
                                        <p className="mt-2 text-sm text-[#475569] line-clamp-3">{item.description}</p>
                                      </div>
                                      <div className="text-right ml-2">
                                        <p className="text-sm font-semibold text-[#111827]">{item.price}</p>
                                        <p className={`mt-2 text-xs ${item.availability === 'In stock' || item.availability === 'Available' ? 'text-[#16A34A]' : 'text-[#F59E0B]'}`}>{item.availability}</p>
                                      </div>
                                    </div>

                                    <div className="mt-3 flex justify-end gap-2">
                                      <button type="button" className="rounded-[10px] border border-[#E5E7EB] bg-white px-3 py-1 text-sm font-semibold">Edit</button>
                                      <button type="button" className="rounded-[10px] border border-[#FECACA] bg-white px-3 py-1 text-sm font-semibold text-[#B91C1C]">Delete</button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Sales Playbooks" && (
                      <div className="space-y-6">
                        <div className="rounded-[24px] bg-[#F9FAFB] p-6">
                          <p className="text-sm font-semibold text-[#111827]">
                            Sales playbooks
                          </p>
                          <p className="mt-3 text-sm text-[#6B7280]">
                            Ready prompts to help the AI support sales conversations.
                          </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {[
                            "Welcome message",
                            "Price quote follow-up",
                            "Upgrade recommendation",
                          ].map((item) => (
                            <div
                              key={item}
                              className="rounded-[24px] border border-[#E5E7EB] bg-white p-6"
                            >
                              <p className="text-sm font-semibold text-[#111827]">
                                {item}
                              </p>
                              <p className="mt-2 text-sm text-[#6B7280]">
                                Mock script for AI responses and lead engagement.
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Skills" && (
                      <div className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-[24px] bg-[#F9FAFB] p-6">
                            <p className="text-sm font-semibold text-[#111827]">
                              Upsell behavior
                            </p>
                            <p className="mt-3 text-sm text-[#6B7280]">
                              {upsellProducts ? "AI may suggest add-ons." : "AI avoids upselling."}
                            </p>
                          </div>
                          <div className="rounded-[24px] bg-[#F9FAFB] p-6">
                            <p className="text-sm font-semibold text-[#111827]">
                              Recommendation style
                            </p>
                            <p className="mt-3 text-sm text-[#6B7280]">
                              {recommendAlternatives ? "Offers alternatives automatically." : "Only answers direct questions."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Policies" && (
                      <div className="space-y-6">
                        <div className="rounded-[24px] bg-[#F9FAFB] p-6">
                          <p className="text-sm font-semibold text-[#111827]">
                            Policies
                          </p>
                          <p className="mt-3 text-sm text-[#6B7280]">
                            Rules that guide how the AI responds.
                          </p>
                        </div>
                        <div className="space-y-4">
                          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
                            <p className="text-sm font-semibold text-[#111827]">
                              Return policy
                            </p>
                            <p className="mt-2 text-sm text-[#6B7280]">
                              {policies.returnPolicy}
                            </p>
                          </div>
                          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
                            <p className="text-sm font-semibold text-[#111827]">
                              Delivery policy
                            </p>
                            <p className="mt-2 text-sm text-[#6B7280]">
                              {policies.deliveryPolicy}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Test AI" && (
                      <div className="space-y-6">
                        <div className="rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-6">
                          <p className="text-sm font-semibold text-[#111827]">
                            Test the assistant
                          </p>
                          <p className="mt-3 text-sm text-[#6B7280]">
                            Send a sample prompt and review the mock response.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            setTestAiMessages((current) => [
                              ...current,
                              {
                                id: `user-test-${Date.now()}`,
                                role: "user",
                                text: "How can I upgrade my plan?",
                              },
                              {
                                id: `ai-test-${Date.now()}`,
                                role: "ai",
                                text: "You can upgrade anytime through the customer portal. I can send the link now.",
                                source: "Sales Playbooks → Upgrade",
                              },
                            ])
                          }
                          className="rounded-[24px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white hover:bg-[#16A34A]"
                        >
                          Run test prompt
                        </button>
                        <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
                          <p className="text-sm font-semibold text-[#111827]">
                            Recent mock chat
                          </p>
                          <div className="mt-3 space-y-3 text-sm text-[#6B7280]">
                            {testAiMessages.slice(-2).map((message) => (
                              <div key={message.id} className="rounded-[20px] bg-[#F9FAFB] p-3">
                                <p className="font-semibold text-[#111827]">
                                  {message.role === "ai" ? "AI" : "User"}
                                </p>
                                <p className="mt-1">{message.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Performance" && (
                      <div className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                          {STAT_CARDS.map((metric) => (
                            <div key={metric.label} className="rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                              <p className="text-sm font-semibold text-[#111827]">{metric.label}</p>
                              <p className="mt-3 text-3xl font-semibold text-[#111827]">{metric.value}</p>
                              <p className="mt-2 text-sm text-[#6B7280]">{metric.delta} vs last week</p>
                            </div>
                          ))}
                        </div>
                        <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6">
                          <p className="text-sm font-semibold text-[#111827]">AI performance summary</p>
                          <p className="mt-3 text-sm text-[#6B7280]">
                            The assistant is resolving customer inquiries quickly while maintaining high satisfaction.
                          </p>
                        </div>
                      </div>
                    )}
                </main>
              </div>
            </div>
          )}
          {selected === "Marketing" && (
            <div className={`space-y-6 ${CARD}`}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6B7280]">
                    Status Scheduler
                  </p>
                  <p className="mt-1 text-sm text-[#6B7280]">
                    Plan and publish status posts ahead of time. Use AI to
                    generate copy, then schedule images and captions for the
                    week.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-[20px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"
                >
                  <Plus className="h-4 w-4" />
                  Create Status Post
                </button>
              </div>

              <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                <section className={CARD}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">
                        Scheduled posts
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-[#111827]">
                        Upcoming posts
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#6B7280]">
                      Mock data
                    </span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {scheduledPosts.map((post) => (
                      <div
                        key={post.id}
                        className="rounded-[24px] border border-[#E5E7EB]/70 bg-[#F8FAFC]/70 p-4"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-[#111827]">
                              {post.caption}
                            </p>
                            <p className="mt-2 text-sm text-[#6B7280]">
                              {post.image}
                            </p>
                          </div>
                          <div className="text-right text-sm text-[#6B7280]">
                            <p className="font-semibold text-[#111827]">
                              {post.date}
                            </p>
                            <p>{post.time}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] text-[#6B7280]">
                          <span className="rounded-full bg-white px-3 py-1 border border-[#E5E7EB]">
                            Scheduled
                          </span>
                          <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-[#16A34A]">
                            Status
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className={CARD}>
                  <div className="mb-6">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">
                      New status post
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[#111827]">
                      Create your post
                    </h3>
                  </div>
                  <div className="space-y-5">
                    <label className="block text-sm font-medium text-[#111827]">
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        className="mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] file:mr-4 file:rounded-full file:border-0 file:bg-[#22C55E] file:px-4 file:py-2 file:text-sm file:text-white"
                        onChange={(event) => {
                          const fileName = event.target.files?.[0]?.name;
                          setNewPost((prev) => ({
                            ...prev,
                            image: fileName ?? "",
                          }));
                          setImageLabel(fileName ?? "No file selected");
                        }}
                      />
                      <p className="mt-2 text-xs text-[#6B7280]">
                        {imageLabel}
                      </p>
                    </label>
                    <label className="block text-sm font-medium text-[#111827]">
                      Caption
                      <textarea
                        value={newPost.caption}
                        onChange={(event) =>
                          setNewPost((prev) => ({
                            ...prev,
                            caption: event.target.value,
                          }))
                        }
                        placeholder="Write a short caption for this status post"
                        className="mt-2 h-32 w-full rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
                      />
                    </label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-medium text-[#111827]">
                        Date
                        <input
                          type="date"
                          value={newPost.date}
                          onChange={(event) =>
                            setNewPost((prev) => ({
                              ...prev,
                              date: event.target.value,
                            }))
                          }
                          className={INPUT_FIELD}
                        />
                      </label>
                      <label className="block text-sm font-medium text-[#111827]">
                        Time
                        <input
                          type="time"
                          value={newPost.time}
                          onChange={(event) =>
                            setNewPost((prev) => ({
                              ...prev,
                              time: event.target.value,
                            }))
                          }
                          className={INPUT_FIELD}
                        />
                      </label>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="button"
                        className={`${BUTTON_SECONDARY} gap-2 sm:w-auto`}
                      >
                        <Image className="h-4 w-4" />
                        Generate With AI
                      </button>
                      <button
                        type="button"
                        className={`${BUTTON_PRIMARY} sm:w-auto`}
                      >
                        Schedule Post
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}
          {selected === "Analytics" && (
            <div className={`space-y-6 ${CARD}`}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">
                    Analytics
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#111827]">
                    Business performance overview
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl">
                    Monitor messaging trends, lead growth, sales performance and
                    how AI is resolving customer requests.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {ANALYTICS_METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-5 shadow-sm"
                  >
                    <p className="text-sm font-medium text-[#6B7280]">
                      {metric.label}
                    </p>
                    <div className="mt-4 flex items-end justify-between gap-4">
                      <p className="text-3xl font-semibold text-[#111827]">
                        {metric.value}
                      </p>
                      <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#166534]">
                        {metric.delta}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-[#6B7280]">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
                <section className="rounded-[24px] border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#6B7280]">
                        Weekly messages
                      </p>
                      <p className="mt-2 text-sm text-[#6B7280]">
                        Volume of incoming messages per day.
                      </p>
                    </div>
                    <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#6B7280]">
                      Mock trends
                    </span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-end gap-3">
                      {ANALYTICS_CHART.map((point) => {
                        const height = (point.value / chartMax) * 160;
                        return (
                          <div key={point.label} className="flex-1 text-center">
                            <div className="mx-auto h-40 w-full max-w-12 rounded-4xl bg-[#F3F4F6] p-1">
                              <div
                                className="mx-auto h-full rounded-4xl bg-[#22C55E]"
                                style={{ height: `${height}px`, width: "100%" }}
                              />
                            </div>
                            <p className="mt-3 text-sm text-[#6B7280]">
                              {point.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="rounded-[24px] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]">
                      This chart shows weekly engagement across your WhatsApp
                      campaign messages.
                    </div>
                  </div>
                </section>

                <section className="space-y-6 rounded-[24px] border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      Top Questions
                    </p>
                    <div className="mt-4 space-y-3">
                      {TOP_QUESTIONS.map((item) => (
                        <div
                          key={item.question}
                          className="rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-4"
                        >
                          <p className="font-medium text-[#111827]">
                            {item.question}
                          </p>
                          <p className="mt-2 text-sm text-[#6B7280]">
                            {item.volume} requests
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      Popular Products
                    </p>
                    <div className="mt-4 space-y-3">
                      {POPULAR_PRODUCTS.map((product) => (
                        <div
                          key={product.name}
                          className="flex items-center justify-between rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-4"
                        >
                          <div>
                            <p className="font-medium text-[#111827]">
                              {product.name}
                            </p>
                            <p className="text-sm text-[#6B7280]">
                              Top choice for new customers
                            </p>
                          </div>
                          <span className="rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold text-[#0C4A6E]">
                            {product.sales} sold
                          </span>
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
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">
                      Settings
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#111827]">
                      Business Profile
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl">
                      This information is used by the AI assistant when
                      communicating with customers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">
                    Business Details
                  </p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={businessProfile.name}
                        onChange={(e) =>
                          setBusinessProfile((s) => ({
                            ...s,
                            name: e.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Sokoos Internet"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Industry
                      </label>
                      <input
                        type="text"
                        value={businessProfile.industry}
                        onChange={(e) =>
                          setBusinessProfile((s) => ({
                            ...s,
                            industry: e.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Telecom & Connectivity"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Description
                      </label>
                      <textarea
                        value={businessProfile.description}
                        onChange={(e) =>
                          setBusinessProfile((s) => ({
                            ...s,
                            description: e.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="What does your business do?"
                        rows={4}
                      />
                    </div>
                  </div>
                </section>

                <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">
                    Contact Information
                  </p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={businessProfile.phone}
                        onChange={(e) =>
                          setBusinessProfile((s) => ({
                            ...s,
                            phone: e.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., +254 20 3949 0101"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Email
                      </label>
                      <input
                        type="email"
                        value={businessProfile.email}
                        onChange={(e) =>
                          setBusinessProfile((s) => ({
                            ...s,
                            email: e.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., support@sokoos.co.ke"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Location
                      </label>
                      <input
                        type="text"
                        value={businessProfile.location}
                        onChange={(e) =>
                          setBusinessProfile((s) => ({
                            ...s,
                            location: e.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Nairobi, Kenya"
                      />
                    </div>
                  </div>
                </section>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">
                    Operations
                  </p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Business Hours
                      </label>
                      <input
                        type="text"
                        value={businessProfile.businessHours}
                        onChange={(e) =>
                          setBusinessProfile((s) => ({
                            ...s,
                            businessHours: e.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Mon–Fri, 8:00 AM - 6:00 PM"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Service Areas
                      </label>
                      <input
                        type="text"
                        value={businessProfile.serviceAreas}
                        onChange={(e) =>
                          setBusinessProfile((s) => ({
                            ...s,
                            serviceAreas: e.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Nairobi, Kiambu, Thika"
                      />
                    </div>
                  </div>
                </section>

                <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">
                    Payment Methods
                  </p>
                  <div className="mt-4 space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                      <input
                        type="checkbox"
                        checked={businessProfile.paymentMethods.mPesa}
                        onChange={() =>
                          setBusinessProfile((s) => ({
                            ...s,
                            paymentMethods: {
                              ...s.paymentMethods,
                              mPesa: !s.paymentMethods.mPesa,
                            },
                          }))
                        }
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-semibold text-[#111827]">
                        M-Pesa
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                      <input
                        type="checkbox"
                        checked={businessProfile.paymentMethods.cash}
                        onChange={() =>
                          setBusinessProfile((s) => ({
                            ...s,
                            paymentMethods: {
                              ...s.paymentMethods,
                              cash: !s.paymentMethods.cash,
                            },
                          }))
                        }
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-semibold text-[#111827]">
                        Cash
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                      <input
                        type="checkbox"
                        checked={businessProfile.paymentMethods.bankTransfer}
                        onChange={() =>
                          setBusinessProfile((s) => ({
                            ...s,
                            paymentMethods: {
                              ...s.paymentMethods,
                              bankTransfer: !s.paymentMethods.bankTransfer,
                            },
                          }))
                        }
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-semibold text-[#111827]">
                        Bank Transfer
                      </span>
                    </label>
                  </div>
                </section>
              </div>

              <div className={`${CARD}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">
                      Settings
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#111827]">
                      Personal Contacts
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl">
                      Manage personal contacts the business owner may need quick
                      access to.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
                <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">
                    Contacts
                  </p>
                  <p className="mt-1 text-sm text-[#6B7280]">
                    Card view of personal contacts stored for quick reference.
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {personalContacts.map((pc) => (
                      <div
                        key={pc.id}
                        className="rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-lg font-semibold text-[#111827]">
                              {pc.name}
                            </p>
                            <p className="mt-1 text-sm text-[#6B7280]">
                              {pc.relationship}
                            </p>
                          </div>
                          <div className="text-sm text-[#111827]">
                            {pc.phone}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <aside className="rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">
                    Add Contact
                  </p>
                  <p className="mt-1 text-sm text-[#6B7280]">
                    Add a personal contact for quick access.
                  </p>
                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Name
                      </label>
                      <input
                        type="text"
                        value={newContact.name}
                        onChange={(e) =>
                          setNewContact((s) => ({ ...s, name: e.target.value }))
                        }
                        className="mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Mary Wanjiku"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Relationship
                      </label>
                      <input
                        type="text"
                        value={newContact.relationship}
                        onChange={(e) =>
                          setNewContact((s) => ({
                            ...s,
                            relationship: e.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., Wife, Supplier"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={newContact.phone}
                        onChange={(e) =>
                          setNewContact((s) => ({
                            ...s,
                            phone: e.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
                        placeholder="e.g., +254712345678"
                      />
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        type="button"
                        onClick={addPersonalContact}
                        className="inline-flex items-center justify-center rounded-[24px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
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
