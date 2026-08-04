import { type ReactNode, useEffect, useRef, useState } from "react";
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
  Check,
  Plus,
  Globe,
  User,
  BookOpen,
  Package,
  Target,
  Sparkles,
  Shield,
  Plug,
  BarChart3,
  CircleAlert,
  Hash,
  Mail,
  Loader2,
  MapPin,
} from "lucide-react";
import AiSummaryCard from "./ui/ai-summary-card";
import { TextInput } from "@/components/auth/text-input";
import { Textarea } from "@/components/ui/textarea";
import sokoosLogo from "@/assets/sokoos_logo.png";

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
    label: "Integrations",
    href: "/dashboard/integrations",
    Icon: Bot,
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

const PERFORMANCE_METRICS = [
  { label: "Messages Handled", value: "1,842", trend: [26, 38, 32, 46, 51, 58, 63], delta: "+26%", progress: 82 },
  { label: "Resolution Rate", value: "93%", trend: [72, 78, 82, 86, 91, 92, 93], delta: "+5 pts", progress: 93 },
  { label: "Human Takeovers", value: "84", trend: [90, 86, 80, 77, 78, 84, 84], delta: "-7%", progress: 75 },
  { label: "Quotes Generated", value: "312", trend: [24, 28, 34, 42, 48, 56, 62], delta: "+18%", progress: 78 },
  { label: "Sales Closed", value: "128", trend: [12, 15, 19, 24, 28, 32, 36], delta: "+14%", progress: 68 },
  { label: "Revenue Influenced", value: "$72.4k", trend: [42, 44, 52, 58, 64, 69, 72], delta: "+21%", progress: 72 },
  { label: "Average Response Time", value: "1.2m", trend: [1.8, 1.7, 1.6, 1.4, 1.3, 1.2, 1.2], delta: "-12%", progress: 88 },
  { label: "Top Questions", value: "8", trend: [4, 5, 6, 7, 8, 9, 8], delta: "+11%", progress: 65 },
];

const KNOWLEDGE_USAGE = [
  { label: "FAQ Docs", percent: 78 },
  { label: "Product Catalog", percent: 63 },
  { label: "Policies", percent: 52 },
  { label: "Service Guide", percent: 41 },
];

const PERFORMANCE_TOP_QUESTIONS = [
  "How much does delivery cost?",
  "Can I get a discount?",
  "What’s the lead time?",
  "Do you offer installation?",
];

const MOST_VIEWED_PRODUCTS = [
  { name: "Smart POS Terminal", views: 512 },
  { name: "AI Employee", views: 438 },
  { name: "Service Plan", views: 387 },
  { name: "Inventory Package", views: 312 },
];

const EMPTY_BUSINESS_INFO = {
  name: "",
  type: "",
  country: "",
  about: "",
  website: "",
  email: "",
  address: "",
  phone: "",
  whatsapp: "",
  hours: "",
  serviceAreas: "",
  paymentMethods: "",
};

const normalizeBusinessInfo = (value?: Partial<typeof EMPTY_BUSINESS_INFO>) => ({
  ...EMPTY_BUSINESS_INFO,
  ...(value || {}),
  name: value?.name ?? "",
  type: value?.type ?? "",
  country: value?.country ?? "",
  about: value?.about ?? "",
  website: value?.website ?? "",
  email: value?.email ?? "",
  address: value?.address ?? "",
  phone: value?.phone ?? "",
  whatsapp: value?.whatsapp ?? "",
  hours: value?.hours ?? "",
  serviceAreas: value?.serviceAreas ?? "",
  paymentMethods: value?.paymentMethods ?? "",
});

const parseServiceAreas = (value?: string | string[]) => {
  if (Array.isArray(value)) return value.filter(Boolean).map((item) => item.trim()).filter(Boolean);
  if (!value) return [];
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

const RECENT_AI_ACTIVITY = [
  { type: "Reply", title: "Answered pricing question", time: "2m ago" },
  { type: "Quote", title: "Generated quote for 10 units", time: "14m ago" },
  { type: "Follow-up", title: "Suggested follow-up message", time: "42m ago" },
  { type: "Support", title: "Escalated to human agent", time: "1h ago" },
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
    description: "Product and service details your AI Employee can use in sales conversations.",
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
    description: "Store and service areas that help your AI Employee answer location requests.",
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
    description: "Web content and links your AI Employee can use for customer support.",
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
const AI_WORKSPACE_PANEL =
  "rounded-[28px] border border-[#E5E7EB] bg-[#F9FAFB] p-8 lg:p-10";
const AI_WORKSPACE_SECTION =
  "rounded-[24px] border border-[#E5E7EB] bg-white p-6";
const AI_WORKSPACE_SUBTLE =
  "rounded-[24px] border border-[#E5E7EB] bg-[#FCFCFD] p-6";

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
const AI_TRAINING_FIELD =
  "mt-2 h-12 w-full rounded-xl border border-[#E2E8F0] bg-white px-3.5 pr-10 text-sm text-[#111827] shadow-sm outline-none transition placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-4 focus:ring-[#DCFCE7]/70";
const AI_TRAINING_TEXTAREA =
  "mt-2 min-h-[96px] w-full rounded-xl border border-[#E2E8F0] bg-white px-3.5 py-3 text-sm text-[#111827] shadow-sm outline-none transition placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-4 focus:ring-[#DCFCE7]/70";
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

const INTEGRATION_SECTIONS = [
  {
    section: "Communication",
    items: [
      {
        id: "whatsapp",
        name: "WhatsApp Business",
        Icon: MessageCircle,
        description: "Allow Sokoos AI to reply to customers directly inside WhatsApp.",
        status: "Connected",
      },
      {
        id: "facebook",
        name: "Facebook Messenger",
        Icon: MessageCircle,
        description: "Allow Sokoos AI to reply to customers on Facebook Messenger.",
        status: "Not Connected",
      },
      {
        id: "instagram",
        name: "Instagram",
        Icon: Image,
        description: "Allow Sokoos AI to respond to Instagram messages and DMs.",
        status: "Not Connected",
      },
      {
        id: "telegram",
        name: "Telegram",
        Icon: Send,
        description: "Allow Sokoos AI to manage Telegram conversations.",
        status: "Not Connected",
      },
      {
        id: "email",
        name: "Email",
        Icon: Send,
        description: "Allow Sokoos AI to read and send business emails.",
        status: "Connected",
      },
    ],
  },
  {
    section: "Payments",
    items: [
      {
        id: "mpesa",
        name: "M-Pesa",
        Icon: Phone,
        description: "Enable mobile money payments and reconciliation.",
        status: "Not Connected",
      },
      {
        id: "stripe",
        name: "Stripe",
        Icon: Tag,
        description: "Allow the AI to generate payment links.",
        status: "Not Connected",
      },
      {
        id: "paypal",
        name: "PayPal",
        Icon: Tag,
        description: "Allow the AI to generate PayPal payment links.",
        status: "Not Connected",
      },
      {
        id: "flutterwave",
        name: "Flutterwave",
        Icon: Globe,
        description: "Allow the AI to process payments across Africa and generate payment links.",
        status: "Coming Soon",
      },
    ],
  },
  {
    section: "E-commerce",
    items: [
      {
        id: "shopify",
        name: "Shopify",
        Icon: Box,
        description: "Allow the AI to answer product questions using your store catalog.",
        status: "Connected",
      },
      {
        id: "woocommerce",
        name: "WooCommerce",
        Icon: Box,
        description: "Allow the AI to access your WooCommerce product catalog and orders.",
        status: "Not Connected",
      },
      {
        id: "custom_api",
        name: "Custom Website API",
        Icon: Globe,
        description: "Allow the AI to query your site's product and order APIs.",
        status: "Not Connected",
      },
    ],
  },
  {
    section: "Business",
    items: [
      {
        id: "google_business",
        name: "Google Business Profile",
        Icon: Globe,
        description: "Allow the AI to update and read your business profile and respond to reviews.",
        status: "Not Connected",
      },
      {
        id: "google_calendar",
        name: "Google Calendar",
        Icon: Calendar,
        description: "Allow the AI to schedule appointments.",
        status: "Connected",
      },
      {
        id: "outlook",
        name: "Microsoft Outlook",
        Icon: Calendar,
        description: "Allow the AI to schedule meetings and manage business email/calendar.",
        status: "Not Connected",
      },
      {
        id: "gdrive",
        name: "Google Drive",
        Icon: Paperclip,
        description: "Allow the AI to access business documents and knowledge files.",
        status: "Connected",
      },
      {
        id: "dropbox",
        name: "Dropbox",
        Icon: Paperclip,
        description: "Allow the AI to access business documents stored in Dropbox.",
        status: "Not Connected",
      },
      {
        id: "onedrive",
        name: "OneDrive",
        Icon: Paperclip,
        description: "Allow the AI to access business documents stored in OneDrive.",
        status: "Not Connected",
      },
    ],
  },
  {
    section: "Marketing",
    items: [
      {
        id: "meta_ads",
        name: "Meta Ads",
        Icon: Megaphone,
        description: "Allow the AI to sync campaign data and create audiences.",
        status: "Not Connected",
      },
      {
        id: "google_ads",
        name: "Google Ads",
        Icon: Globe,
        description: "Allow the AI to pull campaign performance and recommend optimizations.",
        status: "Not Connected",
      },
      {
        id: "tiktok",
        name: "TikTok",
        Icon: Globe,
        description: "Allow the AI to manage TikTok ad campaigns and creatives.",
        status: "Coming Soon",
      },
      {
        id: "mailchimp",
        name: "Mailchimp",
        Icon: Send,
        description: "Allow the AI to sync contact lists and send marketing campaigns.",
        status: "Connected",
      },
      {
        id: "brevo",
        name: "Brevo",
        Icon: Send,
        description: "Allow the AI to send campaigns and sync contact lists.",
        status: "Not Connected",
      },
    ],
  },
];

const INTEGRATION_CAPABILITIES: Record<string, string[]> = {
  whatsapp: [
    "Read messages",
    "Send replies",
    "Send images",
    "Send PDFs",
    "Send quotations",
    "Send invoices",
    "Read delivery status",
    "Human takeover",
  ],
  facebook: ["Read messages", "Send replies"],
  instagram: ["Read DMs", "Send replies"],
  telegram: ["Read messages", "Send replies"],
  email: ["Read emails", "Send emails"],
  mpesa: ["Initiate payments", "Reconcile transactions"],
  stripe: ["Create payment links", "Refunds"],
  paypal: ["Create payment links"],
  flutterwave: ["Create payment links"],
  shopify: ["Read products", "Sync orders", "Update inventory"],
  woocommerce: ["Read products", "Sync orders"],
  custom_api: ["Query products", "Read orders"],
  google_business: ["Read profile", "Respond to reviews"],
  google_calendar: ["Read events", "Create events"],
  outlook: ["Read calendar", "Create events"],
  gdrive: ["Read files", "Upload files"],
  dropbox: ["Read files"],
  onedrive: ["Read files"],
  meta_ads: ["Read campaigns", "Create audiences"],
  google_ads: ["Read campaigns"],
  tiktok: ["Read campaigns"],
  mailchimp: ["Sync contacts", "Send campaigns"],
  brevo: ["Sync contacts"],
};

const CAPABILITY_FEATURES: { id: string; title: string; requires: string[] }[] = [
  { id: "receive_whatsapp", title: "Receive WhatsApp messages", requires: ["whatsapp"] },
  { id: "send_quotations", title: "Send quotations", requires: ["whatsapp", "shopify", "custom_api", "woocommerce"].filter(Boolean) },
  { id: "schedule_appointments", title: "Schedule appointments", requires: ["google_calendar"] },
  { id: "collect_payments", title: "Collect payments", requires: ["mpesa", "stripe"] },
  { id: "send_invoices", title: "Send invoices", requires: ["mpesa", "stripe", "shopify", "custom_api"].filter(Boolean) },
  { id: "product_recommendations", title: "Generate product recommendations", requires: ["shopify", "custom_api", "woocommerce", "gdrive" /* business knowledge often stored in drive */] },
  { id: "read_business_documents", title: "Read business documents", requires: ["gdrive", "dropbox"] },
  { id: "reply_facebook", title: "Reply on Facebook", requires: ["facebook"] },
  { id: "reply_instagram", title: "Reply on Instagram", requires: ["instagram"] },
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

const ANALYTICS_TOP_QUESTIONS = [
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
const LANGUAGE_OPTIONS = ["English", "Kiswahili", "French", "Arabic", "German", "Spanish", "Portuguese", "Somali", "Amharic", "Hindi", "Chinese", "Italian"];
const PERSONALITIES = ["Friendly", "Professional", "Warm", "Playful", "Luxury", "Technical", "Casual", "Formal"] as const;
const COMMUNICATION_STYLE_OPTIONS = ["Short & Direct", "Balanced", "Detailed"] as const;
const EMOJI_USAGE_OPTIONS = ["Never", "Sometimes", "Often"] as const;
const PREFERRED_TONE_OPTIONS = ["Helpful", "Confident", "Educational", "Sales-focused", "Conversational"] as const;

const BRAND_VOICE_DETAILS: Record<
  (typeof PERSONALITIES)[number],
  { description: string; example: string }
> = {
  Friendly: {
    description: "Warm, helpful and approachable.",
    example: "Hello 👋 We’re happy to help. What can we do for you?",
  },
  Professional: {
    description: "Clear, polished and dependable.",
    example: "Thank you for reaching out. How may we assist you today?",
  },
  Warm: {
    description: "Gentle, caring and reassuring.",
    example: "Of course, we’re here to guide you every step of the way.",
  },
  Playful: {
    description: "Upbeat, lively and full of personality.",
    example: "Hey there! Let’s find exactly what you need ✨",
  },
  Luxury: {
    description: "Refined, attentive and elevated.",
    example: "Welcome. We would be delighted to assist you.",
  },
  Technical: {
    description: "Precise, informative and direct.",
    example: "Hello. Please share the details and we’ll help you resolve it.",
  },
  Casual: {
    description: "Relaxed, simple and conversational.",
    example: "Hi! What can we help you with today?",
  },
  Formal: {
    description: "Polished, respectful and structured.",
    example: "Good day. We appreciate your inquiry and will assist accordingly.",
  },
};
const LOGO_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'%3E%3Crect width='240' height='240' rx='32' fill='%23E5F6EC'/%3E%3Cpath d='M73 91h94v58H73z' rx='8' fill='%2322C55E'/%3E%3Cpath d='M91 72h58v19H91z' fill='%23065F46'/%3E%3Ccircle cx='120' cy='120' r='17' fill='white'/%3E%3C/svg%3E";
const TONES = ["Friendly", "Professional", "Formal", "Sales-focused", "Technical", "Custom"] as const;

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
  const [integrationStates, setIntegrationStates] = useState<Record<string, { status: string; accountName?: string; lastSynced?: string }>>(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem("sokoos.integrationStates") : null;
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      // ignore
    }

    const map: Record<string, { status: string; accountName?: string; lastSynced?: string }> = {};
    INTEGRATION_SECTIONS.forEach((section) => {
      section.items.forEach((it) => {
        map[it.id] = { status: it.status };
      });
    });

    return map;
  });
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [connectModalId, setConnectModalId] = useState<string | null>(null);
  const [connectForm, setConnectForm] = useState({ email: "", businessName: "", phone: "" });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerIntegrationId, setDrawerIntegrationId] = useState<string | null>(null);

  const openDrawer = (id: string) => {
    setDrawerIntegrationId(id);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setDrawerIntegrationId(null);
  };

  const handleDisconnect = (id: string) => {
    setIntegrationStates((s) => ({
      ...s,
      [id]: { status: "Not Connected" },
    }));
    closeDrawer();
  };

  const handleSyncNow = (id: string) => {
    setIntegrationStates((s) => ({
      ...s,
      [id]: {
        ...(s[id] || {}),
        status: "Connected",
        lastSynced: "Just now",
      },
    }));
  };

  const handleReconnect = (id: string) => {
    setConnectModalId(id);
    setConnectForm({ email: "", businessName: "", phone: "" });
    setConnectModalOpen(true);
  };

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("sokoos.integrationStates", JSON.stringify(integrationStates));
      }
    } catch (e) {
      // ignore
    }
  }, [integrationStates]);

  const getIntegrationName = (id: string | null) => {
    if (!id) return "Integration";
    for (const section of INTEGRATION_SECTIONS) {
      const found = section.items.find((i) => i.id === id);
      if (found) return found.name;
    }
    return id;
  };

  const handleModalConnect = () => {
    if (!connectModalId) return;
    const name = getIntegrationName(connectModalId);
    setIntegrationStates((s) => ({
      ...s,
      [connectModalId]: {
        status: "Connected",
        accountName: connectForm.businessName || connectForm.email || `${name} Account`,
        lastSynced: "Just now",
      },
    }));
    setConnectModalOpen(false);
    setConnectModalId(null);
  };
  const [activeWorkspaceSection, setActiveWorkspaceSection] =
    useState<
      | "Identity"
      | "Knowledge Hub"
      | "Catalogue"
      | "Sales Playbooks"
      | "Skills"
      | "Policies"
      | "Integrations"
      | "Test AI"
      | "Performance"
    >("Identity");
  const [activeIdentityStep, setActiveIdentityStep] = useState(0);
  const [completedIdentitySteps, setCompletedIdentitySteps] = useState<number[]>([]);
  const [activeKnowledgeStep, setActiveKnowledgeStep] = useState(0);
  const [completedKnowledgeSteps, setCompletedKnowledgeSteps] = useState<number[]>([]);
  const [selectedKnowledgeSources, setSelectedKnowledgeSources] = useState<string[]>([]);
  const [completionToast, setCompletionToast] = useState<string | null>(null);
  const [previewReplyVisible, setPreviewReplyVisible] = useState(true);
  const [onboardingRestored, setOnboardingRestored] = useState(false);
  const identityLessonRef = useRef<HTMLDivElement>(null);
  const knowledgeLessonRef = useRef<HTMLDivElement>(null);
  const previewMessagesRef = useRef<HTMLDivElement>(null);
  const identityLessons = ["Business Identity", "Brand Voice", "Greetings", "Languages", "Business Hours", "Locations", "Complete Identity"];
  const identityLessonCompletionNames = ["Business Identity", "Brand Voice", "Greetings", "Languages", "Business Hours", "Locations", "Complete Identity"];
  const knowledgeLessons = ["Knowledge Sources", "Review"];
  const knowledgeSourceLessonTitles = {
    company: "Business Information",
    faqs: "Frequently Asked Questions",
    documents: "Resources",
    website: "Products & Services",
  } as const;
  const knowledgeLessonSequence = [
    "Knowledge Sources",
    ...selectedKnowledgeSources.map((source) => knowledgeSourceLessonTitles[source as keyof typeof knowledgeSourceLessonTitles] ?? source),
    "Review",
  ];
  const knowledgeLessonCompletionNames = knowledgeLessonSequence;
  const isDevMode = typeof import.meta !== "undefined" && Boolean((import.meta as any).env?.DEV);
  const sanitizeStepIndices = (steps: unknown[], maxLength: number) =>
    Array.isArray(steps)
      ? steps
          .filter((step) => typeof step === "number" && step >= 0 && step < maxLength)
          .map((step) => Number(step))
          .sort((a, b) => a - b)
      : [];

  const sanitizeSelectedKnowledgeSources = (sources: unknown[]) =>
    Array.isArray(sources)
      ? sources.filter((source) => typeof source === "string").map((source) => String(source))
      : [];

  const focusIdentityLesson = (step: number) => {
    setActiveIdentityStep(step);
    window.setTimeout(() => {
      const target = identityLessonRef.current?.querySelector<HTMLElement>(`[data-lesson-index="${step}"]`);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstField = target.querySelector<HTMLElement>("input, select, textarea, button");
      firstField?.focus({ preventScroll: true });
    }, 0);
  };

  const completeIdentityLesson = (step: number) => {
    setCompletedIdentitySteps((current) => (current.includes(step) ? current : [...current, step]));
    setCompletionToast(`${identityLessonCompletionNames[step]} complete — your onboarding path is moving forward.`);
    window.setTimeout(() => setCompletionToast(null), 2200);
    if (step < identityLessons.length - 1) {
      window.setTimeout(() => focusIdentityLesson(step + 1), 500);
    }
  };
  const focusKnowledgeLesson = (step: number) => {
    setActiveKnowledgeStep(step);
    window.setTimeout(() => {
      const target = knowledgeLessonRef.current?.querySelector<HTMLElement>(`[data-lesson-index="${step}"]`);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstField = target.querySelector<HTMLElement>("input, select, textarea, button");
      firstField?.focus({ preventScroll: true });
    }, 0);
  };
  const completeKnowledgeLesson = (step: number) => {
    setCompletedKnowledgeSteps((current) => (current.includes(step) ? current : [...current, step]));
    setCompletionToast(`${knowledgeLessonCompletionNames[step]} complete — your knowledge onboarding path is moving forward.`);
    window.setTimeout(() => setCompletionToast(null), 2200);
    if (step < knowledgeLessonSequence.length - 1) {
      window.setTimeout(() => focusKnowledgeLesson(step + 1), 500);
    }
  };
  const identityLessonCardClass = (step: number) => `rounded-[28px] border bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 sm:p-6 ${completedIdentitySteps.includes(step) ? "border-[#86EFAC] shadow-[0_14px_34px_rgba(34,197,94,0.14)]" : "border-[#E5E7EB]"}`;
  const knowledgeLessonCardClass = (step: number) => `rounded-[28px] border bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 sm:p-6 ${completedKnowledgeSteps.includes(step) ? "border-[#86EFAC] shadow-[0_14px_34px_rgba(34,197,94,0.14)]" : "border-[#E5E7EB]"}`;
  useEffect(() => {
    document.getElementById("ai-workspace-content")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [activeWorkspaceSection]);
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
  const [catalogProducts, setCatalogProducts] = useState(() => CATALOG_ITEMS);
  const [productSearch, setProductSearch] = useState("");
  const [categories, setCategories] = useState(() =>
    Array.from(new Set(CATALOG_ITEMS.map((product) => product.category).filter(Boolean))).map((name, index) => ({
      id: `category-${index + 1}`,
      name: name as string,
      productCount: CATALOG_ITEMS.filter((product) => product.category === name).length,
    }))
  );
  const [showAddCategoryInput, setShowAddCategoryInput] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [categoryDrafts, setCategoryDrafts] = useState<Record<string, string>>({});
  const addProduct = (type: string = "Product") => {
    const id = `p-${Date.now()}`;
    const newItem = {
      id,
      name: `${type} ${catalogProducts.length + 1}`,
      category: type,
      price: "$0.00",
      description: "Add a short description...",
      availability: "Available",
      imagesCount: 0,
      documentsCount: 0,
      image: "/assets/sample/placeholder.png",
    };
    setCatalogProducts((p) => [newItem, ...p]);
  };
  const updateCatalogProductField = (id: string, field: string, value: any) => {
    setCatalogProducts((list) => list.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };
  const handleAddCategory = () => {
    const trimmedName = newCategoryName.trim();
    if (!trimmedName) return;

    const normalizedName = trimmedName.toLowerCase();
    const exists = categories.some((category) => category.name.toLowerCase() === normalizedName);
    if (exists) {
      setNewCategoryName("");
      setShowAddCategoryInput(false);
      return;
    }

    setCategories((current) => [...current, { id: `category-${Date.now()}`, name: trimmedName, productCount: 0 }]);
    setNewCategoryName("");
    setShowAddCategoryInput(false);
  };
  const handleEditCategory = (categoryId: string) => {
    const nextName = (categoryDrafts[categoryId] ?? "").trim();
    if (!nextName) return;

    const normalizedName = nextName.toLowerCase();
    const exists = categories.some((category) => category.id !== categoryId && category.name.toLowerCase() === normalizedName);
    if (exists) return;

    const currentCategory = categories.find((category) => category.id === categoryId);
    if (!currentCategory) return;

    setCategories((current) => current.map((category) => (category.id === categoryId ? { ...category, name: nextName } : category)));
    setCatalogProducts((list) => list.map((product) => (product.category === currentCategory.name ? { ...product, category: nextName } : product)));
    setEditingCategoryId(null);
    setCategoryDrafts((current) => {
      const { [categoryId]: _, ...rest } = current;
      return rest;
    });
  };
  const handleDeleteCategory = (categoryId: string) => {
    const currentCategory = categories.find((category) => category.id === categoryId);
    if (!currentCategory) return;

    setCategories((current) => current.filter((category) => category.id !== categoryId));
    setCatalogProducts((list) => list.map((product) => (product.category === currentCategory.name ? { ...product, category: "Uncategorized" } : product)));
  };
  type MediaAsset = {
    id: string;
    name: string;
    fileType: string;
    uploadDate: string;
    size: string;
    url: string;
    mime?: string;
  };

  type Promotion = {
    id: string;
    title: string;
    description: string;
    productsIncluded: string;
    discountType: "Percentage" | "Fixed";
    discountValue: string;
    startDate: string;
    endDate: string;
    status: "Active" | "Paused" | "Expired";
  };

  type CatalogueSubsection =
    | "Products & Services"
    | "Pricing"
    | "Availability"
    | "Bundles & Promotions"
    | "Review"
    | "Categories"
    | "Collections"
    | "Media Library"
    | "Documents"
    | "Price Lists"
    | "Quote Templates"
    | "Imports";

  const [catalogueSubsection, setCatalogueSubsection] = useState<CatalogueSubsection>("Products & Services");
  const [pricingSaved, setPricingSaved] = useState(false);
  const [availabilitySaved, setAvailabilitySaved] = useState(false);
  const [importMenuOpen, setImportMenuOpen] = useState(false);
  const [addProductMenuOpen, setAddProductMenuOpen] = useState(false);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [selectedProductType, setSelectedProductType] = useState<string | null>(null);
  const [addProductFormData, setAddProductFormData] = useState<{ name: string; category: string; price: string; availability: string; image?: string } | null>(null);
  const [promotions, setPromotions] = useState<Promotion[]>([
    {
      id: "promo-1",
      title: "Summer Bundle",
      description: "Bundle the top 3 summer essentials with 20% off.",
      productsIncluded: "Ginger Citrus Salad, Deluxe Hair Treatment, Noise-Cancelling Headphones",
      discountType: "Percentage",
      discountValue: "20",
      startDate: "2026-07-01",
      endDate: "2026-08-31",
      status: "Active",
    },
    {
      id: "promo-2",
      title: "New Customer Welcome",
      description: "Give first-time buyers a fixed discount on their first order.",
      productsIncluded: "10 Mbps, 20 Mbps, Business Package",
      discountType: "Fixed",
      discountValue: "500",
      startDate: "2026-08-01",
      endDate: "2026-09-30",
      status: "Paused",
    },
  ]);
  const [mediaAssets, setMediaAssets] = useState<MediaAsset[]>([
    {
      id: "m-img-1",
      name: "Ginger Citrus Salad.jpg",
      fileType: "Image",
      uploadDate: new Date().toLocaleString(),
      size: "128 KB",
      url: "/assets/sample/food-salad.jpg",
      mime: "image/jpeg",
    },
    {
      id: "m-pdf-1",
      name: "Restaurant Menu.pdf",
      fileType: "PDF",
      uploadDate: new Date().toLocaleString(),
      size: "320 KB",
      url: "/assets/sample/menu.pdf",
      mime: "application/pdf",
    },
    {
      id: "m-video-1",
      name: "Salon Promo.mp4",
      fileType: "Video",
      uploadDate: new Date().toLocaleString(),
      size: "6.2 MB",
      url: "/assets/sample/promo.mp4",
      mime: "video/mp4",
    },
    {
      id: "m-logo-1",
      name: "Clinic Logo.png",
      fileType: "Logo",
      uploadDate: new Date().toLocaleString(),
      size: "48 KB",
      url: "/assets/sample/clinic.jpg",
      mime: "image/png",
    },
  ]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const arr = Array.from(files).map((f) => ({
      id: `asset-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: f.name,
      fileType: f.type.split("/")[0] || "file",
      uploadDate: new Date().toLocaleString(),
      size: `${Math.round(f.size / 1024)} KB`,
      url: URL.createObjectURL(f),
      mime: f.type,
    }));
    setMediaAssets((prev) => [...arr, ...prev]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  const addProductWithData = (data: { name: string; category: string; price: string; availability: string; image?: string }) => {
    const id = `p-${Date.now()}`;
    const newItem = {
      id,
      name: data.name,
      category: data.category,
      price: data.price,
      description: "",
      availability: data.availability,
      imagesCount: 0,
      documentsCount: 0,
      image: data.image || "/assets/sample/placeholder.png",
    };
    setCatalogProducts((p) => [newItem, ...p]);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  const viewAsset = (asset: MediaAsset) => {
    window.open(asset.url, "_blank");
  };

  const renameAsset = (id: string) => {
    const a = mediaAssets.find((m) => m.id === id);
    if (!a) return;
    const newName = window.prompt("Rename file", a.name);
    if (newName) setMediaAssets((prev) => prev.map((m) => (m.id === id ? { ...m, name: newName } : m)));
  };

  const deleteAsset = (id: string) => {
    const a = mediaAssets.find((m) => m.id === id);
    if (!a) return;
    if (!window.confirm(`Delete ${a.name}?`)) return;
    // revoke object URL if it was created dynamically
    try {
      if (a.url.startsWith("blob:")) URL.revokeObjectURL(a.url);
    } catch (e) {
      /* ignore */
    }
    setMediaAssets((prev) => prev.filter((m) => m.id !== id));
  };

  const IMPORT_TYPES = ["Excel", "CSV", "PDF Catalogues", "Website Import"] as const;

  type ImportResult = {
    productsImported: number;
    warnings: string[];
    duplicatesFound: number;
    message: string;
  };

  const [importState, setImportState] = useState<Record<string, { progress: number; status: "idle" | "uploading" | "done"; result?: ImportResult }>>(
    () =>
      IMPORT_TYPES.reduce((acc, t) => {
        acc[t] = { progress: 0, status: "idle" };
        return acc;
      }, {} as Record<string, { progress: number; status: "idle" | "uploading" | "done"; result?: ImportResult }>),
  );

  const simulateImport = (type: string, file?: File | null) => {
    setImportState((s) => ({ ...s, [type]: { progress: 0, status: "uploading" } }));
    let progress = 0;
    const id = setInterval(() => {
      progress += Math.floor(Math.random() * 12) + 8;
      if (progress >= 100) progress = 100;
      setImportState((s) => ({ ...s, [type]: { ...(s[type] || { progress: 0, status: "uploading" }), progress } }));
      if (progress >= 100) {
        clearInterval(id);
        // Create mock result
        const productsImported = Math.floor(Math.random() * 90) + 10;
        const duplicatesFound = Math.floor(Math.random() * 5);
        const warnings: string[] = [];
        if (Math.random() > 0.7) warnings.push("Some rows had missing prices");
        if (Math.random() > 0.85) warnings.push("Invalid category mappings for 2 items");
        const message = `Imported ${productsImported} products successfully.`;
        setImportState((s) => ({ ...s, [type]: { progress: 100, status: "done", result: { productsImported, duplicatesFound, warnings, message } } }));
      }
    }, 400 + Math.random() * 300);
  };

  type QuoteTemplate = {
    id: string;
    companyLogo?: string; // url
    companyName: string;
    header: string;
    footer: string;
    terms: string;
    currency: string;
    tax: string;
    signature: string;
    primaryColor: string;
  };

  const [quoteTemplates, setQuoteTemplates] = useState<QuoteTemplate[]>([
    {
      id: "t-1",
      companyLogo: "/assets/sample/clinic.jpg",
      companyName: "Acme Services Ltd",
      header: "Quote",
      footer: "Thank you for your business.",
      terms: "Payment due within 30 days.",
      currency: "USD",
      tax: "16%",
      signature: "Authorized Signatory",
      primaryColor: "#065F46",
    },
    {
      id: "t-2",
      companyLogo: "/assets/sample/tee.jpg",
      companyName: "Everyday Retail Co.",
      header: "Sales Quote",
      footer: "All sales subject to terms.",
      terms: "Return within 14 days.",
      currency: "KES",
      tax: "0%",
      signature: "Store Manager",
      primaryColor: "#0F172A",
    },
  ]);

  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(quoteTemplates[0].id);

  const addQuoteTemplate = () => {
    const newT: QuoteTemplate = {
      id: `t-${Date.now()}`,
      companyName: "New Company",
      header: "Quote",
      footer: "",
      terms: "",
      currency: "USD",
      tax: "0%",
      signature: "",
      primaryColor: "#065F46",
    };
    setQuoteTemplates((s) => [newT, ...s]);
    setSelectedTemplateId(newT.id);
  };

  const updateTemplate = (id: string, patch: Partial<QuoteTemplate>) => {
    setQuoteTemplates((s) => s.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  };

  const duplicateTemplate = (id: string) => {
    const t = quoteTemplates.find((x) => x.id === id);
    if (!t) return;
    const copy = { ...t, id: `t-${Date.now()}` };
    setQuoteTemplates((s) => [copy, ...s]);
    setSelectedTemplateId(copy.id);
  };

  const deleteTemplate = (id: string) => {
    if (!window.confirm("Delete this template?")) return;
    setQuoteTemplates((s) => s.filter((t) => t.id !== id));
    setSelectedTemplateId((prev) => (prev === id ? (quoteTemplates[0]?.id ?? null) : prev));
  };

  const uploadLogoForTemplate = (id: string, f: File | null) => {
    if (!f) return;
    const url = URL.createObjectURL(f);
    updateTemplate(id, { companyLogo: url });
  };

  type Playbook = {
    id: string;
    title: string;
    steps: string[];
    allowed?: boolean;
  };

  const [playbooks, setPlaybooks] = useState<Playbook[]>([
    {
      id: 'p-1',
      title: 'Pricing & Quote Flow',
      steps: [
        'Customer asks about pricing',
        'Recommend suitable product',
        'Suggest upgrade',
        'Offer discount if available',
        'Collect customer details',
        'Generate quotation',
        'Ask to proceed',
      ],
      allowed: true,
    },
  ]);

  const [editingPlaybookId, setEditingPlaybookId] = useState<string | null>(null);

  const addPlaybook = () => {
    const p: Playbook = { id: `p-${Date.now()}`, title: 'New Playbook', steps: ['Start'], allowed: false };
    setPlaybooks((s) => [p, ...s]);
    setEditingPlaybookId(p.id);
  };

  const updatePlaybook = (id: string, patch: Partial<Playbook>) => {
    setPlaybooks((s) => s.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  };

  const duplicatePlaybook = (id: string) => {
    const p = playbooks.find((x) => x.id === id);
    if (!p) return;
    const copy = { ...p, id: `p-${Date.now()}`, title: `${p.title} (copy)` };
    setPlaybooks((s) => [copy, ...s]);
  };

  const deletePlaybook = (id: string) => {
    if (!window.confirm('Delete this playbook?')) return;
    setPlaybooks((s) => s.filter((x) => x.id !== id));
    if (editingPlaybookId === id) setEditingPlaybookId(null);
  };

  const addStep = (id: string, afterIndex = -1) => {
    setPlaybooks((s) => s.map((p) => {
      if (p.id !== id) return p;
      const steps = [...p.steps];
      steps.splice(afterIndex + 1, 0, 'New step');
      return { ...p, steps };
    }));
  };

  const updateStep = (id: string, index: number, text: string) => {
    setPlaybooks((s) => s.map((p) => {
      if (p.id !== id) return p;
      const steps = [...p.steps];
      steps[index] = text;
      return { ...p, steps };
    }));
  };

  const removeStep = (id: string, index: number) => {
    setPlaybooks((s) => s.map((p) => {
      if (p.id !== id) return p;
      const steps = [...p.steps];
      steps.splice(index, 1);
      return { ...p, steps };
    }));
  };

  type Skill = {
    id: string;
    name: string;
    icon?: string;
    description: string;
    enabled: boolean;
    status: 'Active' | 'Idle' | 'Disabled';
  };

  const [skills, setSkills] = useState<Skill[]>([
    { id: 's-1', name: 'Answer Questions', icon: '💬', description: 'Respond to customer queries with helpful answers.', enabled: true, status: 'Active' },
    { id: 's-2', name: 'Recommend Products', icon: '🛍️', description: 'Suggest products based on customer needs.', enabled: true, status: 'Active' },
    { id: 's-3', name: 'Upsell Customers', icon: '⬆️', description: 'Recommend higher tier or add-ons.', enabled: false, status: 'Disabled' },
    { id: 's-4', name: 'Cross-sell', icon: '🔗', description: 'Suggest complementary products.', enabled: false, status: 'Disabled' },
    { id: 's-5', name: 'Generate Quotes', icon: '🧾', description: 'Create quotations based on selected items.', enabled: true, status: 'Active' },
    { id: 's-6', name: 'Book Appointments', icon: '📅', description: 'Schedule appointments with customers.', enabled: false, status: 'Disabled' },
    { id: 's-7', name: 'Collect Leads', icon: '📇', description: 'Capture lead details for follow-up.', enabled: true, status: 'Active' },
    { id: 's-8', name: 'Generate Invoices', icon: '💳', description: 'Produce invoices for completed sales.', enabled: false, status: 'Disabled' },
    { id: 's-9', name: 'Follow-up Customers', icon: '🔔', description: 'Send follow-ups or reminders.', enabled: false, status: 'Idle' },
    { id: 's-10', name: 'Translate Messages', icon: '🌐', description: 'Translate customer messages to preferred language.', enabled: true, status: 'Active' },
  ]);

  const toggleSkill = (id: string) => {
    setSkills((s) => s.map((k) => k.id === id ? { ...k, enabled: !k.enabled, status: k.enabled ? 'Disabled' : 'Active' } : k));
  };

  type PolicySection = {
    id: string;
    title: string;
    content: string;
    expanded?: boolean;
  };

  const [policySections, setPolicySections] = useState<PolicySection[]>([
    { id: 'pol-1', title: 'Business Rules', content: 'Business rules that govern pricing, discounts, and who can approve special offers.' },
    { id: 'pol-2', title: 'Refund Policy', content: 'Refunds processed within 30 days with receipt and original packaging.' },
    { id: 'pol-3', title: 'Cancellation Policy', content: 'Orders can be cancelled within 2 hours of placement; after that contact support.' },
    { id: 'pol-4', title: 'Delivery Policy', content: 'Standard delivery in 3-5 business days. Express options available.' },
    { id: 'pol-5', title: 'Escalation Rules', content: 'Escalate to manager for refunds over $1000 or repeated complaints.' },
    { id: 'pol-6', title: 'Outside Business Hours', content: 'Outside hours, log requests and respond next business day.' },
    { id: 'pol-7', title: 'Allowed AI Actions', content: 'AI may suggest products and collect basic contact info; it must not provide legal advice.' },
  ]);

  const togglePolicy = (id: string) => setPolicySections((s) => s.map((p) => p.id === id ? { ...p, expanded: !p.expanded } : p));

  const updatePolicyContent = (id: string, value: string) => setPolicySections((s) => s.map((p) => p.id === id ? { ...p, content: value } : p));

  type ChatMessage = { id: string; role: 'user' | 'ai'; text: string; time: string };
  type Conversation = { id: string; title: string; messages: ChatMessage[] };

  const SAMPLE_PROMPTS = [
    'What is your return policy?',
    'Recommend a product for a small restaurant',
    'Offer an upgrade for this customer',
    'Generate a quote for 10 units of Item X',
  ];

  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 'c-1',
      title: 'Pricing test',
      messages: [
        { id: 'm-1', role: 'user', text: 'How much does Product A cost?', time: new Date().toLocaleTimeString() },
        { id: 'm-2', role: 'ai', text: 'Product A is $99. Would you like a bulk discount?', time: new Date().toLocaleTimeString() },
      ],
    },
    {
      id: 'c-2',
      title: 'Booking flow',
      messages: [
        { id: 'm-1', role: 'user', text: 'Can I book an installation?', time: new Date().toLocaleTimeString() },
      ],
    },
  ]);

  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(conversations[0]?.id ?? null);
  const [inputText, setInputText] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState<any>(null);

  const createConversation = (title?: string) => {
    const c: Conversation = { id: `c-${Date.now()}`, title: title ?? `Conversation ${conversations.length + 1}`, messages: [] };
    setConversations((s) => [c, ...s]);
    setSelectedConversationId(c.id);
  };

  const addMessage = (convId: string, role: 'user' | 'ai', text: string) => {
    const msg: ChatMessage = { id: `m-${Date.now()}`, role, text, time: new Date().toLocaleTimeString() };
    setConversations((s) => s.map((c) => c.id === convId ? { ...c, messages: [...c.messages, msg] } : c));
    return msg;
  };

  const generateMockAnalysis = (userText: string, aiText: string) => {
    const intents = ['Pricing Query', 'Booking', 'Upgrade Request', 'General Inquiry'];
    const actions = ['Recommend product', 'Generate quote', 'Schedule appointment', 'Collect contact info'];
    return {
      intent: intents[Math.floor(Math.random() * intents.length)],
      confidence: `${Math.floor(70 + Math.random() * 30)}%`,
      knowledgeUsed: ['Product DB', 'Pricing Rules', 'FAQ'].slice(0, 1 + Math.floor(Math.random() * 3)),
      suggestedActions: actions.slice(0, 1 + Math.floor(Math.random() * actions.length)),
      responseTime: `${Math.floor(100 + Math.random() * 400)}ms`,
      generatedReply: aiText,
      knowledgeSources: ['Products API', 'Pricing Table'].slice(0, 1 + Math.floor(Math.random() * 2)),
    };
  };

  const simulateAiResponse = (convId: string, userText: string) => {
    addMessage(convId, 'user', userText);
    setInputText('');
    // simulate typing
    setAiAnalysis(null);
    setTimeout(() => {
      const aiReply = `Mock reply to: "${userText}"`;
      const aiMsg = addMessage(convId, 'ai', aiReply);
      const analysis = generateMockAnalysis(userText, aiMsg.text);
      setAiAnalysis(analysis);
    }, 600 + Math.random() * 400);
  };

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
  const [sidebarHovered, setSidebarHovered] = useState(false);
  const [customerPanelFading, setCustomerPanelFading] = useState(false);

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
  const chartMax = Math.max(...ANALYTICS_CHART.map((point) => point.value));
  const [aiEnabled, setAiEnabled] = useState(true);
  const [businessHours, setBusinessHours] = useState(
    "",
  );
  const [humanTakeover, setHumanTakeover] = useState(true);
  const [language, setLanguage] =
    useState<(typeof LANGUAGES)[number]>("English");
  const [personality, setPersonality] =
    useState<(typeof PERSONALITIES)[number]>("Friendly");
  const [communicationStyle, setCommunicationStyle] =
    useState<(typeof COMMUNICATION_STYLE_OPTIONS)[number]>("Balanced");
  const [emojiUsage, setEmojiUsage] =
    useState<(typeof EMOJI_USAGE_OPTIONS)[number]>("Sometimes");
  const [preferredTone, setPreferredTone] =
    useState<(typeof PREFERRED_TONE_OPTIONS)[number]>("Helpful");
  const [writingExamples, setWritingExamples] = useState(
    "Hi James 👋\nThanks for reaching out.\nInstallation takes less than 24 hours.",
  );
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
  const [testAiExplanation, setTestAiExplanation] = useState({
    answer: "Our Business Package costs KES 5,000/month.",
    confidence: 96,
    source: "Products & Services → Business Package",
    missing: "None — pricing is available.",
    improvements: "Add a comparison of all packages to help customers choose faster.",
  });
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
    const lowerQuestion = trimmed.toLowerCase();
    const explanation = lowerQuestion.includes("installation")
      ? { answer: "Yes, we offer installation for KES 2,000.", confidence: 94, source: "FAQ → Installation", missing: "None — installation details are available.", improvements: "Add estimated installation times for each service area." }
      : lowerQuestion.includes("m-pesa") || lowerQuestion.includes("mpesa") || lowerQuestion.includes("pay")
        ? { answer: "Yes, you can pay with M-Pesa, bank transfer, or cash.", confidence: 91, source: "Business Identity → Payment methods", missing: "M-Pesa paybill details are not yet included.", improvements: "Add your M-Pesa paybill number and payment confirmation steps." }
        : lowerQuestion.includes("price") || lowerQuestion.includes("cost") || lowerQuestion.includes("business package")
          ? { answer: "Our Business Package costs KES 5,000/month.", confidence: 96, source: "Products & Services → Business Package", missing: "None — pricing is available.", improvements: "Add a comparison of all packages to help customers choose faster." }
          : { answer: "This is a mock reply from your AI Employee based on the configured business knowledge.", confidence: 68, source: "Business Overview", missing: "More specific information may be needed for this question.", improvements: "Add a focused FAQ or knowledge item for this topic." };
    const aiMessage = {
      id: `ai-${Date.now()}`,
      role: "ai" as const,
      text: explanation.answer,
      source: explanation.source,
    };
    setTestAiMessages((current) => [...current, userMessage, aiMessage]);
    setTestAiExplanation(explanation);
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
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hello 👋 How can we help?",
  );
  const [awayMessage, setAwayMessage] = useState(
    "Thanks for your message. We’re away right now, but we’ll get back to you during working hours.",
  );
  const [closingMessage, setClosingMessage] = useState(
    "Thanks for reaching out. We’re here whenever you need us.",
  );
  const [aiEmployeeLaunched, setAiEmployeeLaunched] = useState(false);
  const [communicationChannels, setCommunicationChannels] = useState({
    whatsapp: true,
    websiteChat: true,
    instagram: false,
    facebookMessenger: false,
    googleBusinessMessages: false,
    telegram: false,
    slack: false,
    email: false,
  });
  const [primaryLanguage, setPrimaryLanguage] = useState("English");
  const [secondaryLanguage, setSecondaryLanguage] = useState("Kiswahili");
  const [supportedLanguages, setSupportedLanguages] = useState<string[]>([
    "English",
    "Kiswahili",
  ]);
  const [languageSearch, setLanguageSearch] = useState("");
  const filteredLanguageOptions = LANGUAGE_OPTIONS.filter((language) =>
    language.toLowerCase().includes(languageSearch.trim().toLowerCase()),
  );
  const [tone, setTone] = useState<(typeof TONES)[number]>("Friendly");
  const [writingStyleOptions, setWritingStyleOptions] = useState<Record<string, boolean>>({
    "Use emojis": false,
    "Keep replies short": true,
    "Explain simply": true,
    "Ask follow-up questions": false,
    "Personalize responses": true,
  });
  const [timezone, setTimezone] = useState("East Africa Time (EAT)");
  const [avatarFileName, setAvatarFileName] = useState("");
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [logoPreviewOpen, setLogoPreviewOpen] = useState(false);
  const [logoError, setLogoError] = useState("");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved">("idle");
  const [identitySaveState, setIdentitySaveState] = useState<"idle" | "saving" | "success">("idle");
  const [upsellProducts, setUpsellProducts] = useState(true);
  const [recommendAlternatives, setRecommendAlternatives] = useState(true);
  const [closeSalesAutomatically, setCloseSalesAutomatically] = useState(false);
  const [businessInfo, setBusinessInfo] = useState(() => normalizeBusinessInfo());
  const [serviceAreaInput, setServiceAreaInput] = useState("");
  const [companyAbout, setCompanyAbout] = useState<string>("");
  const [companyMission, setCompanyMission] = useState<string>("");
  const [companyVision, setCompanyVision] = useState<string>("");
  const [yearsInBusiness, setYearsInBusiness] = useState<string>("");
  const [industriesServed, setIndustriesServed] = useState<string>("");
  const [targetCustomers, setTargetCustomers] = useState<string>("");
  const [differentiators, setDifferentiators] = useState<string>("");
  const [customerProblems, setCustomerProblems] = useState<string>("");

  useEffect(() => {
    setCompanyAbout(businessInfo.about || "");
  }, [businessInfo.about]);
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const savedSignup = window.localStorage.getItem("sokoos-workspace-signup");
      if (!savedSignup) return;

      const parsedSignup = JSON.parse(savedSignup) as {
        businessName?: string;
        businessType?: string;
        country?: string;
        businessEmail?: string;
        phoneNumber?: string;
      };

      setBusinessInfo((current) => normalizeBusinessInfo({
        ...current,
        name: parsedSignup.businessName?.trim() || current.name,
        type: parsedSignup.businessType?.trim() || current.type,
        country: parsedSignup.country?.trim() || current.country,
        email: parsedSignup.businessEmail?.trim() || current.email,
        phone: parsedSignup.phoneNumber?.trim() || current.phone,
      }));
    } catch {
      // ignore storage errors
    }
  }, []);

  const previewLanguageCopy = primaryLanguage === "Kiswahili"
    ? {
        customerGreeting: "Habari",
        pricingQuestion: "Intaneti yenu ni bei gani?",
        availabilityQuestion: "Nahitaji kufungiwa intaneti leo jioni.",
        defaultWelcome: "Habari! Tunawezaje kukusaidia leo?",
      }
    : {
        customerGreeting: "Hi",
        pricingQuestion: "How much is your internet?",
        availabilityQuestion: "I need internet installed this evening.",
        defaultWelcome: "Hello 👋 How can we help?",
      };
  const previewPersonalityReply = {
    Professional: "Our internet packages start from KES 2,500/month. Which area are you in?",
    Friendly: `Our internet packages start from KES 2,500/month. Which area are you in${writingStyleOptions["Use emojis"] ? "? 😊" : "?"}`,
    Warm: "Our internet packages start from KES 2,500/month. We’d love to help you find the right fit.",
    Luxury: "Our internet packages begin at KES 2,500/month. Which area would you like us to serve?",
    Casual: "Our internet packages start from KES 2,500/month. Which area are you in?",
    Technical: "Our internet packages start from KES 2,500/month. Which area are you in so we can check coverage?",
    Playful: `Our internet packages start from KES 2,500/month. Which area are you in${writingStyleOptions["Use emojis"] ? "? ✨" : "?"}`,
    Formal: "Our internet packages begin at KES 2,500/month. We would be pleased to assist you with your area.",
  }[personality];
  const previewBusinessContext = writingStyleOptions["Keep replies short"]
    ? previewPersonalityReply
    : `${previewPersonalityReply} ${businessInfo.about || "We’re here to help."}`;
  const previewFollowUp = writingStyleOptions["Ask follow-up questions"]
    ? primaryLanguage === "Kiswahili"
      ? "Ungependa kujua nini hasa?"
      : "What would you like to know first?"
    : null;
  const [previewQuestion, setPreviewQuestion] = useState<string | null>(null);
  const [previewRefreshKey, setPreviewRefreshKey] = useState(0);
  useEffect(() => {
    setPreviewReplyVisible(false);
    const replyTimer = window.setTimeout(() => {
      setPreviewRefreshKey((current) => current + 1);
      setPreviewReplyVisible(true);
      previewMessagesRef.current?.scrollTo({ top: previewMessagesRef.current.scrollHeight, behavior: "smooth" });
    }, 500);
    return () => window.clearTimeout(replyTimer);
  }, [businessHours, businessInfo, personality, primaryLanguage, supportedLanguages, welcomeMessage, awayMessage, previewQuestion]);
  const previewQuestionReply = previewQuestion?.toLowerCase().includes("located")
    ? `We’re based in ${businessInfo.address || "your area"}.`
    : previewQuestion?.toLowerCase().includes("hours")
      ? `We’re available ${businessHours || "during business hours"}.`
      : previewQuestion?.toLowerCase().includes("hello")
        ? welcomeMessage || previewLanguageCopy.defaultWelcome
        : previewBusinessContext;
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
  const handleSaveChanges = () => {
    if (saveState === "saving") return;
    setSaveState("saving");
    window.setTimeout(() => {
      setHasUnsavedChanges(false);
      setSaveState("saved");
      window.setTimeout(() => setSaveState("idle"), 1200);
    }, 650);
  };

  const saveIdentityAndContinue = () => {
    if (identitySaveState === "saving" || !identityFormIsValid) return;

    const progressPayload = {
      step: activeIdentityStep,
      completed: completedIdentitySteps.includes(0) ? completedIdentitySteps : [...completedIdentitySteps, 0],
      launched: aiEmployeeLaunched,
      scrollY: typeof window !== "undefined" ? window.scrollY : 0,
      businessInfo: normalizeBusinessInfo(businessInfo),
      businessHours,
    };

    setIdentitySaveState("saving");
    if (typeof window !== "undefined") {
      window.localStorage.setItem("sokoos-ai-training-progress-v2", JSON.stringify(progressPayload));
    }

    window.setTimeout(() => {
      setCompletedIdentitySteps((current) => current.includes(0) ? current : [...current, 0]);
      setActiveWorkspaceSection("Knowledge Hub");
      setIdentitySaveState("success");
      setCompletionToast("Identity saved — opening Knowledge workspace.");
      window.setTimeout(() => {
        setIdentitySaveState("idle");
        setCompletionToast(null);
      }, 1200);
    }, 650);
  };
  useEffect(() => {
    if (!hasUnsavedChanges) return;
    const autosaveTimer = window.setTimeout(() => {
      setHasUnsavedChanges(false);
      setSaveState("idle");
    }, 450);
    return () => window.clearTimeout(autosaveTimer);
  }, [hasUnsavedChanges]);

  const handleResetChanges = () => {
    setWelcomeMessage("Hello 👋 How can we help?");
    setAwayMessage("Thanks for your message. We’re away right now, but we’ll get back to you during working hours.");
    setClosingMessage("Thanks for reaching out. We’re here whenever you need us.");
    setAiEmployeeLaunched(false);
    setCommunicationChannels({
      whatsapp: true,
      websiteChat: true,
      instagram: false,
      facebookMessenger: false,
      googleBusinessMessages: false,
      telegram: false,
      slack: false,
      email: false,
    });
    setBusinessInfo(normalizeBusinessInfo({
      name: "Sokoos Internet",
      type: "Telecom & Connectivity",
      country: "Kenya",
      about: "We help local businesses stay online with reliable internet plans, fast support, and easy onboarding.",
      website: "https://sokoos.com",
      email: "support@sokoos.com",
      address: "Nairobi, Kenya",
      phone: "+254 700 000 000",
      whatsapp: "+254 700 000 000",
      hours: "Mon–Fri, 8:00 AM - 6:00 PM",
      serviceAreas: "Nairobi, Kiambu, Thika",
      paymentMethods: "Mobile Money, Bank Transfer, Cash",
    }));
    setPrimaryLanguage("English");
    setSecondaryLanguage("Kiswahili");
    setSupportedLanguages(["English", "Kiswahili"]);
    setPersonality("Friendly");
    setWritingStyleOptions({
      "Use emojis": false,
      "Keep replies short": true,
      "Explain simply": true,
      "Ask follow-up questions": false,
      "Personalize responses": true,
    });
    setTone("Friendly");
    setBusinessHours("Mon–Fri, 8:00 AM - 6:00 PM");
    setTimezone("East Africa Time (EAT)");
    setAvatarFileName("");
    setLogoPreview(null);
    setLogoPreviewOpen(false);
    setLogoError("");
    setHasUnsavedChanges(false);
    setSaveState("idle");
  };

  const addServiceArea = (value?: string) => {
    const trimmed = (value ?? serviceAreaInput).trim();
    if (!trimmed) return;

    const existingAreas = parseServiceAreas(businessInfo.serviceAreas);
    if (!existingAreas.includes(trimmed)) {
      setBusinessInfo((current) => ({
        ...current,
        serviceAreas: [...existingAreas, trimmed].join(", "),
      }));
      setHasUnsavedChanges(true);
    }
    setServiceAreaInput("");
  };

  const removeServiceArea = (value: string) => {
    const existingAreas = parseServiceAreas(businessInfo.serviceAreas);
    const nextAreas = existingAreas.filter((item) => item !== value);
    setBusinessInfo((current) => ({
      ...current,
      serviceAreas: nextAreas.join(", "),
    }));
    setHasUnsavedChanges(true);
  };

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
  const [editingFaqId, setEditingFaqId] = useState<string | null>(null);
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>(null);
  const [policiesText, setPoliciesText] = useState<Record<string, string>>({
    refund: "",
    return: "",
    warranty: "",
    support: "",
    privacy: "",
    cancellation: "",
  });
  const [knowledgeLibraryItems, setKnowledgeLibraryItems] = useState([
    { id: "knowledge-faq-1", type: "FAQ", title: "Do you offer installation?", summary: "Yes, installation costs KES 2,000.", source: "Customer FAQ", category: "Support", tags: ["installation", "setup"], status: "Ready", detail: "Question · Answer" },
    { id: "knowledge-product-1", type: "Product", title: "10 Mbps Internet", summary: "Reliable home internet for everyday browsing and streaming.", source: "Product catalogue", category: "Internet plans", tags: ["popular", "home"], status: "Ready", detail: "KES 2,500/month · 2 images" },
    { id: "knowledge-policy-1", type: "Policy", title: "Cancellation policy", summary: "Customers can cancel with 48 hours notice before the next billing cycle.", source: "Business policy", category: "Account", tags: ["billing"], status: "Ready", detail: "Priority · High" },
    { id: "knowledge-page-1", type: "Website Page", title: "Home internet plans", summary: "Packages, coverage details, and installation information imported from your website.", source: "sokoos.com/plans", category: "Website", tags: ["website", "pricing"], status: "Synced", detail: "Last synced · Just now" },
  ]);
  const [knowledgeSearch, setKnowledgeSearch] = useState("");
  const [knowledgeFilter, setKnowledgeFilter] = useState("All");
  const [selectedKnowledgeItems, setSelectedKnowledgeItems] = useState<string[]>([]);
  const [editingKnowledgeId, setEditingKnowledgeId] = useState<string | null>(null);
  const [previewKnowledgeId, setPreviewKnowledgeId] = useState<string | null>(null);
  const [websiteImportUrl, setWebsiteImportUrl] = useState("https://theirbusiness.com");
  const [websiteImportProgress, setWebsiteImportProgress] = useState(100);
  const [websiteImportStatus, setWebsiteImportStatus] = useState<"ready" | "syncing" | "complete">("ready");
  const [websiteImportHistory, setWebsiteImportHistory] = useState([
    { id: "website-sync-1", time: "Today, 10:42 AM", result: "18 pages scanned · 42 knowledge items updated" },
    { id: "website-sync-2", time: "Jul 24, 2:18 PM", result: "16 pages scanned · 38 knowledge items updated" },
  ]);
  const [aiLearningTimeline, setAiLearningTimeline] = useState([
    { id: "learning-1", day: "Today", title: "Imported website", detail: "42 knowledge items learned from 18 pages", Icon: Globe },
    { id: "learning-2", day: "Yesterday", title: "Uploaded product catalogue", detail: "37 products and current pricing added", Icon: Package },
    { id: "learning-3", day: "Yesterday", title: "Added FAQ", detail: "Installation and support answers are ready", Icon: MessageCircle },
    { id: "learning-4", day: "2 days ago", title: "Updated business hours", detail: "Availability expectations refreshed", Icon: Clock },
    { id: "learning-5", day: "3 days ago", title: "Added refund policy", detail: "Customer policy guidance added", Icon: Shield },
  ]);
  const knowledgeDocumentInputRef = useRef<HTMLInputElement>(null);
  type KnowledgeDocument = {
    id: string;
    name: string;
    size: string;
    uploaded: string;
    status: string;
    extracted: string;
    kind: string;
    progress?: number;
  };
  const [knowledgeDocuments, setKnowledgeDocuments] = useState<KnowledgeDocument[]>([
    { id: "knowledge-doc-1", name: "Internet Plans 2026.pdf", size: "2.4 MB", uploaded: "Today, 9:42 AM", status: "Ready", extracted: "16 knowledge items", kind: "PDF" },
    { id: "knowledge-doc-2", name: "Customer Support FAQ.docx", size: "86 KB", uploaded: "Jul 26, 2026", status: "Ready", extracted: "24 knowledge items", kind: "DOCX" },
  ]);
  const [knowledgeDocumentDragActive, setKnowledgeDocumentDragActive] = useState(false);
  const [replacingKnowledgeDocumentId, setReplacingKnowledgeDocumentId] = useState<string | null>(null);
  const [previewKnowledgeDocumentId, setPreviewKnowledgeDocumentId] = useState<string | null>(null);
  const addKnowledgeDocuments = (files: FileList | File[]) => {
    const entries = Array.from(files).map((file) => ({ id: `knowledge-doc-${Date.now()}-${file.name}`, name: file.name, size: file.size >= 1024 * 1024 ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` : `${Math.max(1, Math.round(file.size / 1024))} KB`, uploaded: "Just now", status: "Processing", extracted: "Extracting knowledge…", kind: file.name.split(".").pop()?.toUpperCase() || "FILE" }));
    if (replacingKnowledgeDocumentId && entries[0]) {
      setKnowledgeDocuments((documents) => documents.map((document) => document.id === replacingKnowledgeDocumentId ? { ...entries[0], id: document.id } : document));
      setReplacingKnowledgeDocumentId(null);
    } else setKnowledgeDocuments((documents) => [...entries, ...documents]);
    if (entries.length) setAiLearningTimeline((timeline) => [{ id: `learning-doc-${Date.now()}`, day: "Today", title: replacingKnowledgeDocumentId ? "Replaced knowledge document" : "Uploaded knowledge document", detail: `${entries.length} document${entries.length === 1 ? "" : "s"} sent for AI learning`, Icon: Paperclip }, ...timeline]);
    window.setTimeout(() => setKnowledgeDocuments((documents) => documents.map((document) => entries.some((entry) => entry.id === document.id) || (replacingKnowledgeDocumentId && document.id === replacingKnowledgeDocumentId) ? { ...document, status: "Ready", extracted: "Knowledge extracted" } : document)), 700);
  };

  const uploadMock = (files: FileList | File[]) => {
    const entries = Array.from(files).map((file) => ({
      id: `knowledge-doc-${Date.now()}-${file.name}`,
      name: file.name,
      size: file.size >= 1024 * 1024 ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` : `${Math.max(1, Math.round(file.size / 1024))} KB`,
      uploaded: "Just now",
      status: "Reading...",
      progress: 0,
      extracted: "Pending extraction",
      kind: file.name.split(".").pop()?.toUpperCase() || "FILE",
    }));

    setKnowledgeDocuments((docs) => [...entries, ...docs]);

    entries.forEach((entry, idx) => {
      const startDelay = idx * 250;
      window.setTimeout(() => {
        let p = 0;
        const timer = window.setInterval(() => {
          p += Math.floor(15 + Math.random() * 30);
          if (p >= 100) {
            p = 100;
            setKnowledgeDocuments((docs) => docs.map((d) => (d.id === entry.id ? { ...d, progress: p, status: "Indexed" } : d)));
            window.clearInterval(timer as any);
            window.setTimeout(() => setKnowledgeDocuments((docs) => docs.map((d) => (d.id === entry.id ? { ...d, progress: 100, status: "Ready" } : d))), 600 + Math.random() * 600);
          } else {
            setKnowledgeDocuments((docs) => docs.map((d) => (d.id === entry.id ? { ...d, progress: p, status: "Reading..." } : d)));
          }
        }, 300 + Math.random() * 200);
      }, startDelay);
    });
    setAiLearningTimeline((timeline) => [{ id: `learning-doc-${Date.now()}`, day: "Today", title: "Uploaded knowledge document", detail: `${entries.length} document${entries.length === 1 ? "" : "s"} sent for AI learning`, Icon: Paperclip }, ...timeline]);
  };
  const syncWebsiteKnowledge = () => {
    setWebsiteImportStatus("syncing");
    setWebsiteImportProgress(18);
    window.setTimeout(() => setWebsiteImportProgress(58), 450);
    window.setTimeout(() => {
      setWebsiteImportProgress(100);
      setWebsiteImportStatus("complete");
      setWebsiteImportHistory((history) => [{ id: `website-sync-${Date.now()}`, time: "Just now", result: "18 pages scanned · 42 knowledge items updated" }, ...history]);
      setAiLearningTimeline((timeline) => [{ id: `learning-${Date.now()}`, day: "Today", title: "Imported website", detail: "42 knowledge items learned from 18 pages", Icon: Globe }, ...timeline]);
    }, 950);
  };
  const [websiteScanSummary, setWebsiteScanSummary] = useState<null | { pages: number; products: number; faqs: number; contact: number; policies: number; blog: number; }>(null);

  // Enhanced mock scanning: set a fake summary after scanning completes
  const scanWebsite = () => {
    setWebsiteScanSummary(null);
    setWebsiteImportStatus("syncing");
    setWebsiteImportProgress(6);
    // animated progress steps
    window.setTimeout(() => setWebsiteImportProgress(24), 300);
    window.setTimeout(() => setWebsiteImportProgress(46), 700);
    window.setTimeout(() => setWebsiteImportProgress(72), 1200);
    window.setTimeout(() => {
      setWebsiteImportProgress(100);
      setWebsiteImportStatus("complete");
      const summary = { pages: 34, products: 12, faqs: 8, contact: 1, policies: 3, blog: 6 };
      setWebsiteScanSummary(summary);
      setWebsiteImportHistory((history) => [{ id: `website-sync-${Date.now()}`, time: "Just now", result: `${summary.pages} pages discovered · ${summary.products + summary.faqs + summary.policies} knowledge items found` }, ...history]);
      setAiLearningTimeline((timeline) => [{ id: `learning-${Date.now()}`, day: "Today", title: "Scanned website", detail: `${summary.pages} pages discovered`, Icon: Globe }, ...timeline]);
    }, 2200);
  };
  const [testQuery, setTestQuery] = useState("");
  const [testConversations, setTestConversations] = useState<Array<{ id: string; user: string; ai?: string; source?: string }>>([]);
  const handleTestAsk = (question: string) => {
    if (!question.trim()) return;
    const id = `test-${Date.now()}`;
    setTestConversations((c) => [...c, { id, user: question }]);
    setTestQuery("");
    // simulate AI response
    window.setTimeout(() => {
      const sources = [] as string[];
      if (faqItems.length > 0) sources.push("FAQ");
      if (knowledgeDocuments.length > 0) sources.push("Document");
      if (websiteScanSummary && websiteScanSummary.pages > 0) sources.push("Website");
      if (businessInfo.name) sources.push("Company Information");
      const source = sources.length ? sources[Math.floor(Math.random() * sources.length)] : "Company Information";
      const ai = question.toLowerCase().includes("install") || question.toLowerCase().includes("installation") ? `Installation costs KES 2,000 according to your uploaded pricing document.` : `I can help with that — here's a suggested reply based on your ${source.toLowerCase()} knowledge.`;
      setTestConversations((c) => c.map((entry) => entry.id === id ? { ...entry, ai, source } : entry));
    }, 700 + Math.random() * 800);
  };
  const [policies, setPolicies] = useState({
    returnPolicy:
      "Customers may return services within 7 days if there is a technical issue requiring a fix.",
    deliveryPolicy:
      "We deliver service activation details via WhatsApp within 24 hours of payment.",
    cancellationPolicy:
      "Cancel anytime with 48 hours notice before the next billing cycle.",
  });
  const identityWorkspaceComplete = Boolean(
    (businessInfo.name || "").trim() &&
    (businessInfo.type || "").trim() &&
    (businessInfo.country || "").trim() &&
    (businessInfo.about || "").trim() &&
    (businessInfo.email || "").trim() &&
    (businessInfo.phone || "").trim() &&
    (businessInfo.whatsapp || "").trim() &&
    (businessInfo.address || "").trim(),
  );
  const identityFormIsValid = Boolean(
    identityWorkspaceComplete &&
    (businessInfo.email || "").includes("@") &&
    (businessInfo.email || "").includes(".") &&
    (businessInfo.phone || "").replace(/\D/g, "").length >= 7 &&
    (businessInfo.whatsapp || "").replace(/\D/g, "").length >= 7,
  );

  const identityLessonProgress = [
    Math.round(([
      businessInfo.name,
      businessInfo.type,
      businessInfo.country,
      businessInfo.about,
    ].filter(Boolean).length / 4) * 100),
    Math.round(([
      personality,
      communicationStyle,
      emojiUsage,
      preferredTone,
      writingExamples,
    ].filter(Boolean).length / 5) * 100),
    Math.round(([
      welcomeMessage,
      awayMessage,
      closingMessage,
    ].filter(Boolean).length / 3) * 100),
    Math.round(([
      primaryLanguage,
      supportedLanguages.length ? "x" : "",
    ].filter(Boolean).length / 2) * 100),
    businessHours.trim() ? 100 : 0,
    Math.round(([
      businessInfo.address,
      businessInfo.serviceAreas,
    ].filter(Boolean).length / 2) * 100),
    identityWorkspaceComplete ? 100 : 0,
  ];
  const identityLessonActivityPercent = Math.min(100, Math.round(
    identityLessonProgress.reduce((sum, value) => sum + value, 0) / identityLessonProgress.length,
  ));

  const knowledgeSourceLessonProgress = selectedKnowledgeSources.map((source) => {
    if (source === "company") {
      return Math.round(([
        businessInfo.name,
        businessInfo.about,
        companyAbout || companyMission || companyVision || targetCustomers,
      ].filter(Boolean).length / 3) * 100);
    }
    if (source === "faqs") {
      return faqItems.length > 0 ? 100 : 0;
    }
    if (source === "documents") {
      return knowledgeDocuments.length > 0 ? 100 : 0;
    }
    if (source === "website") {
      return websiteScanSummary?.pages ? 100 : 0;
    }
    return 0;
  });

  const knowledgeLessonProgress = [
    selectedKnowledgeSources.length > 0 ? 100 : 0,
    ...knowledgeSourceLessonProgress,
    completedKnowledgeSteps.includes(knowledgeLessonSequence.length - 1) ? 100 : 0,
  ];
  const knowledgeLessonActivityPercent = Math.min(100, Math.round(
    knowledgeLessonProgress.reduce((sum, value) => sum + value, 0) / Math.max(1, knowledgeLessonProgress.length),
  ));

  const trainingCompletedSteps = [...new Set(
    (identityWorkspaceComplete ? [...completedIdentitySteps, 0] : completedIdentitySteps)
      .filter((step) => step >= 0 && step < identityLessons.length),
  )];
  const onboardingComplete = aiEmployeeLaunched || trainingCompletedSteps.length >= identityLessons.length;
  const minutesRemaining = Math.max(0, 6 - trainingCompletedSteps.length);
  const trainingPercent = Math.round((trainingCompletedSteps.length / identityLessons.length) * 100);
  const completedTrainingLessonCount = completedIdentitySteps.length + completedKnowledgeSteps.length;
  const totalTrainingLessonCount = identityLessons.length + knowledgeLessonSequence.length;
  const overallTrainingPercent = Math.round((completedTrainingLessonCount / Math.max(1, totalTrainingLessonCount)) * 100);
  const overallTrainingComplete = completedTrainingLessonCount >= totalTrainingLessonCount;
  const currentTrainingLessonLabel = activeWorkspaceSection === "Knowledge Hub"
    ? knowledgeLessonSequence[activeKnowledgeStep] ?? knowledgeLessonSequence[0]
    : identityLessons[activeIdentityStep] ?? identityLessons[0];
  const currentTrainingLessonCount = activeWorkspaceSection === "Knowledge Hub" ? knowledgeLessonSequence.length : identityLessons.length;
  const currentTrainingStepNumber = activeWorkspaceSection === "Knowledge Hub" ? activeKnowledgeStep + 1 : activeIdentityStep + 1;
  const aiReadiness = overallTrainingComplete ? 100 : Math.min(100, Math.round(18 + (completedTrainingLessonCount / Math.max(1, totalTrainingLessonCount)) * 82));
  const knowledgeSourceSummary = [
    { label: "Website", value: "42 pages", Icon: Globe, ready: websiteImportStatus !== "syncing" },
    { label: "FAQ", value: `${faqItems.length} items`, Icon: MessageCircle, ready: faqItems.length > 0 },
    { label: "Products", value: `${knowledgeProducts.length} products`, Icon: Package, ready: knowledgeProducts.length > 0 },
    { label: "Policies", value: `${Object.values(policies).filter(Boolean).length}`, Icon: Shield, ready: Object.values(policies).some(Boolean) },
    { label: "Documents", value: `${knowledgeDocuments.length}`, Icon: Paperclip, ready: knowledgeDocuments.length > 0 },
    { label: "Images", value: `${mediaAssets.length}`, Icon: Image, ready: mediaAssets.length > 0 },
    { label: "Catalogues", value: `${CATALOG_ITEMS.length}`, Icon: BookOpen, ready: CATALOG_ITEMS.length > 0 },
  ];
  const knowledgeCoverage = Math.round((knowledgeSourceSummary.filter((source) => source.ready).length / knowledgeSourceSummary.length) * 100);
  const knowledgeConfidence = Math.min(98, 62 + knowledgeCoverage / 3);
  const estimatedAnswerAccuracy = Math.min(97, 68 + knowledgeCoverage / 4);
  const knowledgeHealthChecks = [
    { label: "Business hours", complete: Boolean(businessHours) },
    { label: "Refund policy", complete: Boolean(policies.returnPolicy) },
    { label: "Warranty", complete: false },
    { label: "Payment methods", complete: Boolean(businessInfo.paymentMethods) },
    { label: "Service areas", complete: Boolean(businessInfo.serviceAreas) },
  ];
  const missingKnowledgeInformation = knowledgeHealthChecks.filter((check) => !check.complete);
  const knowledgeCompleteness = Math.round((knowledgeHealthChecks.filter((check) => check.complete).length / knowledgeHealthChecks.length) * 100);
  const filteredKnowledgeLibraryItems = knowledgeLibraryItems.filter((item) => (knowledgeFilter === "All" || item.type === knowledgeFilter) && `${item.title} ${item.summary} ${item.source} ${item.category} ${item.tags.join(" ")}`.toLowerCase().includes(knowledgeSearch.trim().toLowerCase()));
  const knowledgeEmptyState = knowledgeFilter === "FAQ"
    ? { title: "No FAQs yet", description: "Teach your AI the questions customers ask most.", action: "Add FAQ" }
    : knowledgeFilter === "Product"
      ? { title: "No products yet", description: "Upload your first product catalogue so your AI can recommend the right offer.", action: "Upload catalogue" }
      : knowledgeFilter === "Policy"
        ? { title: "No policies yet", description: "Add your customer rules so your AI knows how to handle sensitive requests.", action: "Add policy" }
        : knowledgeFilter === "Website Page"
          ? { title: "No website pages yet", description: "Import your website to give your AI a fast, trusted starting point.", action: "Import website" }
          : { title: "No knowledge items yet", description: "Add a focused FAQ, product, policy, or website page to start teaching your AI.", action: "Add knowledge" };
  const workspacePrerequisites: Record<string, string[]> = {
    Identity: [],
    "Knowledge Hub": ["Identity"],
    Catalogue: ["Knowledge Hub"],
    "Sales Playbooks": ["Catalogue"],
    Policies: ["Knowledge Hub"],
    Skills: ["Policies"],
    Integrations: ["Knowledge Hub"],
    Performance: ["Integrations"],
  };
  const workspaceProgressBySection = {
    Identity: identityLessonActivityPercent,
    "Knowledge Hub": knowledgeLessonActivityPercent,
    Catalogue: Math.min(100, Math.round((knowledgeProducts.length > 0 ? 45 : 0) + (CATALOG_ITEMS.length > 0 ? 35 : 0) + (knowledgeProducts.length > 2 ? 20 : 0))),
    "Sales Playbooks": Math.min(100, upsellProducts || recommendAlternatives ? 100 : 0),
    Policies: Math.min(100, Math.round((Object.values(policies).filter(Boolean).length / 3) * 100)),
    Skills: Math.min(100, Math.round((skills.filter((skill) => skill.enabled).length / Math.max(1, skills.length)) * 100)),
    Integrations: Math.min(100, Math.round((Object.values(communicationChannels).filter(Boolean).length / Math.max(1, Object.keys(communicationChannels).length)) * 100)),
    Performance: aiEmployeeLaunched ? 100 : Math.min(100, 20 + (trainingCompletedSteps.length > 0 ? 10 : 0)),
  };
  const workspaceNavigatorItems = [
    { title: "Identity", description: "Who your AI represents", section: "Identity" as const, Icon: User, complete: workspaceProgressBySection.Identity >= 100, percent: workspaceProgressBySection.Identity, unlocked: true },
    { title: "Knowledge", description: "What it can answer", section: "Knowledge Hub" as const, Icon: BookOpen, complete: workspaceProgressBySection["Knowledge Hub"] >= 100, percent: workspaceProgressBySection["Knowledge Hub"], unlocked: true },
    { title: "Catalogue", description: "Offers it can recommend", section: "Catalogue" as const, Icon: Package, complete: workspaceProgressBySection.Catalogue >= 100, percent: workspaceProgressBySection.Catalogue, unlocked: true },
    { title: "Sales Playbooks", description: "How it handles selling", section: "Sales Playbooks" as const, Icon: Target, complete: workspaceProgressBySection["Sales Playbooks"] >= 100, percent: workspaceProgressBySection["Sales Playbooks"], unlocked: true },
    { title: "Policies", description: "Rules it follows", section: "Policies" as const, Icon: Shield, complete: workspaceProgressBySection.Policies >= 100, percent: workspaceProgressBySection.Policies, unlocked: true },
    { title: "Skills", description: "Work it can do", section: "Skills" as const, Icon: Sparkles, complete: workspaceProgressBySection.Skills >= 100, percent: workspaceProgressBySection.Skills, unlocked: true },
    { title: "Integrations", description: "Where it connects", section: "Integrations" as const, Icon: Plug, complete: workspaceProgressBySection.Integrations >= 100, percent: workspaceProgressBySection.Integrations, unlocked: true },
    { title: "Performance", description: "How it is improving", section: "Performance" as const, Icon: BarChart3, complete: workspaceProgressBySection.Performance >= 100, percent: workspaceProgressBySection.Performance, unlocked: true },
  ];
  const handleWorkspaceSectionSelection = (section: (typeof workspaceNavigatorItems)[number]["section"]) => {
    setActiveWorkspaceSection(section);
  };
  useEffect(() => {
    const saved = window.localStorage.getItem("sokoos-ai-training-progress-v2");
    if (saved) {
      try {
        const progress = JSON.parse(saved) as { step?: number; completed?: number[]; launched?: boolean; scrollY?: number; businessInfo?: typeof businessInfo; businessHours?: string };
        if (isDevMode) {
          window.localStorage.removeItem("sokoos-ai-training-progress-v2");
        } else {
          if (progress.businessInfo) setBusinessInfo(normalizeBusinessInfo(progress.businessInfo));
          if (typeof progress.businessHours === "string") setBusinessHours(progress.businessHours);
          if (typeof progress.step === "number") setActiveIdentityStep(progress.step);
          if (Array.isArray(progress.completed)) setCompletedIdentitySteps(sanitizeStepIndices(progress.completed, identityLessons.length));
          const loadedSelectedKnowledgeSources = Array.isArray((progress as any).selectedKnowledgeSources)
            ? sanitizeSelectedKnowledgeSources((progress as any).selectedKnowledgeSources)
            : [];
          if (loadedSelectedKnowledgeSources.length > 0) setSelectedKnowledgeSources(loadedSelectedKnowledgeSources);
          const loadedKnowledgeSequenceLength = 1 + loadedSelectedKnowledgeSources.length + 1;
          if (Array.isArray((progress as any).completedKnowledge)) setCompletedKnowledgeSteps(sanitizeStepIndices((progress as any).completedKnowledge, loadedKnowledgeSequenceLength));
          if (typeof (progress as any).activeKnowledgeStep === "number") setActiveKnowledgeStep(Math.min(Math.max((progress as any).activeKnowledgeStep, 0), loadedKnowledgeSequenceLength - 1));
          if (progress.launched) setAiEmployeeLaunched(true);
          if (typeof progress.scrollY === "number") window.requestAnimationFrame(() => window.scrollTo({ top: progress.scrollY, behavior: "auto" }));
        }
      } catch {
        window.localStorage.removeItem("sokoos-ai-training-progress-v2");
      }
    }
    setOnboardingRestored(true);
  }, []);
  useEffect(() => {
    setCompletedIdentitySteps((current) => {
      if (identityWorkspaceComplete && !current.includes(0)) {
        return [...current, 0];
      }
      if (!identityWorkspaceComplete && current.includes(0)) {
        return current.filter((step) => step !== 0);
      }
      return current;
    });
  }, [identityWorkspaceComplete]);

  useEffect(() => {
    if (!onboardingRestored) return;
    window.localStorage.setItem("sokoos-ai-training-progress-v2", JSON.stringify({
      step: activeIdentityStep,
      completed: completedIdentitySteps,
      activeKnowledgeStep,
      completedKnowledge: completedKnowledgeSteps,
      selectedKnowledgeSources,
      launched: aiEmployeeLaunched,
      scrollY: window.scrollY,
      businessInfo,
      businessHours,
    }));
  }, [activeIdentityStep, completedIdentitySteps, activeKnowledgeStep, completedKnowledgeSteps, selectedKnowledgeSources, aiEmployeeLaunched, businessHours, businessInfo, onboardingRestored]);
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

  const KnowledgeWorkspace = ({ children }: { children: ReactNode }) => (
    <section className="space-y-5" aria-label="Knowledge training">
      {children}
    </section>
  );

  const canContinueKnowledgeLesson = (step: number) => {
    if (step === 0) {
      return selectedKnowledgeSources.length > 0;
    }
    return true;
  };

  useEffect(() => {
    const maxStep = knowledgeLessonSequence.length - 1;
    if (activeKnowledgeStep > maxStep) {
      setActiveKnowledgeStep(maxStep);
    }
    setCompletedKnowledgeSteps((current) => current.filter((step) => step >= 0 && step <= maxStep));
  }, [knowledgeLessonSequence.length]);

  const KnowledgeLessonTabs = () => (
    <section className="relative z-20 rounded-[24px] border border-[#E5E7EB] bg-white px-3 py-3 shadow-[0_6px_18px_rgba(15,23,42,0.04)]" aria-label="Knowledge onboarding progress">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#166534]">Knowledge onboarding curriculum</p>
          <p className="mt-1 text-base font-semibold text-[#111827]">Teach your AI in a few focused lessons so it can answer with confidence.</p>
          {selectedKnowledgeSources.length > 0 ? (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[#475569]">
              <span className="font-semibold text-[#111827]">Selected sources:</span>
              {selectedKnowledgeSources.map((source) => (
                <span key={source} className="rounded-full bg-[#F3F4F6] px-2.5 py-1 text-xs font-semibold text-[#475569]">
                  {source === "company" ? "Company Information" : source === "faqs" ? "FAQs" : source === "documents" ? "Documents" : source === "website" ? "Website" : source}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#166534]">
          {completedKnowledgeSteps.length}/{knowledgeLessonSequence.length} lessons complete
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {knowledgeLessonSequence.map((lesson, index) => {
          const active = activeKnowledgeStep === index;
          const completed = completedKnowledgeSteps.includes(index);
          return (
            <button
              key={lesson}
              type="button"
              onClick={() => focusKnowledgeLesson(index)}
              aria-current={active ? "step" : undefined}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${active ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm" : completed ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]"}`}
            >
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${completed ? "bg-[#22C55E] text-white" : active ? "bg-[#111827] text-white" : "bg-[#F8FAFC] text-[#64748B]"}`}>
                {completed ? <Check className="h-3.5 w-3.5" /> : <span className="text-[11px]">{index + 1}</span>}
              </span>
              <span>{lesson}</span>
              {completed && <span className="text-[10px] uppercase tracking-[0.12em]">Done</span>}
            </button>
          );
        })}
      </div>
    </section>
  );

  const CurrentLesson = () => {
    const currentLesson = knowledgeLessonSequence[activeKnowledgeStep] ?? knowledgeLessonSequence[0];
    const isSourceLesson = activeKnowledgeStep > 0 && activeKnowledgeStep < knowledgeLessonSequence.length - 1;
    const sourceKey = isSourceLesson ? selectedKnowledgeSources[activeKnowledgeStep - 1] : undefined;

    const renderKnowledgeSourcesLesson = () => (
      <section data-lesson-index="0" className={knowledgeLessonCardClass(0)}>
        <div className="space-y-5">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#166534]"><Bot className="h-5 w-5" /></div>
            <div>
              <p className="text-[20px] font-semibold text-[#111827]">Knowledge Sources</p>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">Teach the AI where it should learn from. Select one or more sources.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { key: "company", title: "Company Information", desc: "Give your AI important company information it should remember.", Icon: User },
              { key: "faqs", title: "FAQs", desc: "Teach your AI the answers customers ask most.", Icon: MessageCircle },
              { key: "documents", title: "Documents", desc: "Provide documents and references your AI can use.", Icon: Paperclip },
              { key: "website", title: "Website", desc: "Teach your AI everything you offer.", Icon: Globe },
            ].map((item) => {
              const selected = selectedKnowledgeSources.includes(item.key);
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setSelectedKnowledgeSources((cur) => cur.includes(item.key) ? cur.filter((k) => k !== item.key) : [...cur, item.key])}
                  className={`text-left rounded-2xl border p-4 transition ${selected ? "border-[#22C55E] bg-[#F7FEF9] shadow-sm" : "border-[#E5E7EB] bg-white hover:shadow-sm"}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${selected ? "bg-[#22C55E] text-white" : "bg-[#F1F5F9] text-[#475569]"}`}><item.Icon className="h-4 w-4" /></span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-[#111827]">{item.title}</p>
                        {selected && <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] text-white"><Check className="h-3.5 w-3.5" /></span>}
                      </div>
                      <p className="mt-2 text-sm text-[#64748B]">{item.desc}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-between border-t border-[#EEF2F6] pt-4">
            <button type="button" onClick={() => setActiveWorkspaceSection("Identity")} className="text-sm font-semibold text-[#64748B] transition hover:text-[#111827]">Back</button>
            <button type="button" onClick={() => completeKnowledgeLesson(0)} disabled={!canContinueKnowledgeLesson(0)} className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155] disabled:cursor-not-allowed disabled:opacity-45">Save & Continue <ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>
    );

    const renderSourceLesson = () => {
      if (!sourceKey) return null;
      const title = knowledgeSourceLessonTitles[sourceKey as keyof typeof knowledgeSourceLessonTitles] ?? sourceKey;
      const desc = sourceKey === "company"
        ? "Give your AI important company information it should remember."
        : sourceKey === "faqs"
          ? "Teach your AI the answers customers ask most."
          : sourceKey === "documents"
            ? "Provide documents and references your AI can use."
            : "Teach your AI everything you offer.";
      const Icon = sourceKey === "company" ? User : sourceKey === "faqs" ? MessageCircle : sourceKey === "documents" ? Paperclip : Globe;

      return (
        <section data-lesson-index={String(activeKnowledgeStep)} className={knowledgeLessonCardClass(activeKnowledgeStep)}>
          <div className="space-y-5">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]"><Icon className="h-5 w-5" /></div>
              <div>
                <p className="text-[20px] font-semibold text-[#111827]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{desc}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6">
              <p className="text-sm font-semibold text-[#111827]">Next step</p>
              <p className="mt-3 text-sm text-[#475569]">This lesson is tailored to the source you selected. Continue when you’re ready to move on.</p>
            </div>
            <div className="flex items-center justify-between border-t border-[#EEF2F6] pt-4">
              <button type="button" onClick={() => focusKnowledgeLesson(activeKnowledgeStep - 1)} className="text-sm font-semibold text-[#64748B] transition hover:text-[#111827]">Back</button>
              <button type="button" onClick={() => completeKnowledgeLesson(activeKnowledgeStep)} className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]">Save & Continue <ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </section>
      );
    };

    const renderReviewLesson = () => (
      <section data-lesson-index={String(activeKnowledgeStep)} className={activeKnowledgeStep === knowledgeLessonSequence.length - 1 ? "relative overflow-hidden rounded-[28px] border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] via-white to-[#F8FAFC] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-6" : "hidden"}>
        <div className="space-y-5">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#166534]"><Sparkles className="h-5 w-5" /></div>
            <div>
              <p className="text-[20px] font-semibold text-[#111827]">Review</p>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">Confirm your AI has everything it needs to answer confidently.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#EEF2F6] bg-white p-5">
              <p className="text-sm font-semibold text-[#111827]">Selected knowledge sources</p>
              <div className="mt-3 space-y-2 text-sm text-[#475569]">
                {selectedKnowledgeSources.length > 0 ? (
                  selectedKnowledgeSources.map((source) => (
                    <div key={source} className="rounded-lg bg-[#F8FAFC] px-3 py-2">
                      {source === "company" ? "Business Information" : source === "faqs" ? "Frequently Asked Questions" : source === "documents" ? "Resources" : source === "website" ? "Products & Services" : source}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-[#94A3B8]">No knowledge source selected yet.</p>
                )}
              </div>
            </div>
            <div className="rounded-2xl border border-[#EEF2F6] bg-white p-5">
              <p className="text-sm font-semibold text-[#111827]">Policies training</p>
              <p className="mt-3 text-sm text-[#475569]">Policy rules are configured in the Policies workspace, so this step focuses on knowledge sources only.</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-[#D1FAE5] pt-4">
            <button type="button" onClick={() => focusKnowledgeLesson(activeKnowledgeStep - 1)} className="text-sm font-semibold text-[#64748B] transition hover:text-[#111827]">Back</button>
            <button type="button" onClick={() => { completeKnowledgeLesson(activeKnowledgeStep); setActiveWorkspaceSection("Catalogue"); }} className="inline-flex items-center gap-2 rounded-lg bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"><Sparkles className="h-4 w-4" />Finish training</button>
          </div>
        </div>
      </section>
    );

    return (
      <div ref={knowledgeLessonRef} className="space-y-4 scroll-mt-36 scroll-smooth">
        {activeKnowledgeStep === 0 && renderKnowledgeSourcesLesson()}
        {isSourceLesson && renderSourceLesson()}
        {currentLesson === "Review" && renderReviewLesson()}
      </div>
    );
  };

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
                <div className="h-8 w-8 rounded-[20px] overflow-hidden">
                  <img src={sokoosLogo} alt="Sokoos" className="h-8 w-8 object-cover" />
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
                        onClick={() => {
                          setSelected(label);
                          if (typeof window !== "undefined") {
                            window.history.pushState({}, "", href);
                          }
                        }}
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
                    <div className="h-8 w-8 rounded-[20px] overflow-hidden">
                      <img src={sokoosLogo} alt="Sokoos" className="h-8 w-8 object-cover" />
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
                            onClick={() => {
                              setSelected(label);
                              if (typeof window !== "undefined") {
                                window.history.pushState({}, "", href);
                              }
                            }}
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
          <div className="h-8 w-8 rounded-[20px] overflow-hidden">
            <img src={sokoosLogo} alt="Sokoos" className="h-8 w-8 object-cover" />
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
                <div className="h-8 w-8 rounded-[20px] overflow-hidden">
                  <img src={sokoosLogo} alt="Sokoos" className="h-8 w-8 object-cover" />
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
                          if (typeof window !== "undefined") {
                            window.history.pushState({}, "", href);
                          }
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
      <main className="h-full overflow-x-hidden pt-14 md:pt-0 md:pl-[72px]">
        <div className="max-w-7xl mx-auto h-full p-4 overflow-x-hidden">
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
                                  AI Employee snapshot
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
            <div className="mx-auto w-full max-w-[1280px] space-y-6 px-4 pb-10 lg:px-6">
              <div className="border-b border-[#E5E7EB] pb-5">
                <div className="flex flex-col gap-5">
                  <div className="max-w-3xl">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6B7280]">
                      Your new teammate
                    </p>
                    <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-[#111827] lg:text-[26px]">
                      Hire and train your AI Employee.
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                      Give your new teammate the context, voice, and tools it needs to do great work from day one.
                    </p>
                  </div>

                  <section className="rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)]" aria-label="AI setup score">
                    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
                      <div className="flex gap-3"><span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg shadow-sm ${overallTrainingComplete ? "bg-[#22C55E] text-white" : "bg-[#ECFDF5] text-[#166534]"}`}>{overallTrainingComplete ? "🎉" : "🤖"}</span><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-[#111827]">{overallTrainingComplete ? "Your AI Employee is Ready" : "Training Your AI Employee"}</p><p className="mt-1 text-xs text-[#475569]">{overallTrainingComplete ? "Your AI has completed the available training and is ready to represent your business." : `Step ${currentTrainingStepNumber} of ${currentTrainingLessonCount} · ${currentTrainingLessonLabel}`}</p><p className="mt-1 text-xs leading-5 text-[#64748B]">{overallTrainingComplete ? "Keep teaching your AI as your business grows." : activeWorkspaceSection === "Knowledge Hub" ? "Your AI is building knowledge so it can answer with more confidence." : "Your AI is learning about your business so it can represent you confidently in every customer conversation."}</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#EEF2F6]"><div className="h-full rounded-full bg-[#22C55E] transition-all duration-300" style={{ width: `${overallTrainingComplete ? 100 : overallTrainingPercent}%` }} /></div><p className="mt-2 text-[11px] font-semibold text-[#166534]">{completedTrainingLessonCount} of {totalTrainingLessonCount} lessons complete · {overallTrainingComplete ? 100 : overallTrainingPercent}% trained</p></div></div>
                      <div className="rounded-xl border border-[#BBF7D0] bg-[#F7FEF9] p-3"><p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#166534]">AI Readiness</p><p className="mt-1 text-lg font-semibold text-[#111827]">{overallTrainingComplete ? 100 : aiReadiness}% ready</p><p className="mt-1 text-xs text-[#64748B]">{overallTrainingComplete ? "Ready for customer conversations" : `About ${Math.max(1, 6 - completedTrainingLessonCount)} min left`}</p><button type="button" onClick={() => { if (activeWorkspaceSection === "Knowledge Hub") { setActiveWorkspaceSection("Knowledge Hub"); focusKnowledgeLesson(activeKnowledgeStep); } else { setActiveWorkspaceSection("Identity"); focusIdentityLesson(activeIdentityStep); } }} className="mt-3 text-xs font-semibold text-[#166534] transition hover:text-[#047857]">Continue training <ChevronRight className="inline h-3.5 w-3.5" /></button></div>
                    </div>
                  </section>

                  <nav aria-label="AI employee workspace sections" className="sticky top-0 z-30 -mx-4 border-y border-[#E5E7EB] bg-white/95 px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur lg:hidden">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {workspaceNavigatorItems.map((tab) => {
                      const active = activeWorkspaceSection === tab.section;
                      return (
                        <button
                          key={tab.title}
                          type="button"
                          onClick={() => handleWorkspaceSectionSelection(tab.section)}
                          aria-current={active ? "page" : undefined}
                          className={`relative flex min-w-0 flex-col gap-2 rounded-xl border px-2.5 py-2.5 text-left text-xs font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 ${
                            active
                              ? "border-[#86EFAC] bg-[#ECFDF5] text-[#166534] shadow-sm"
                              : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#D1FAE5] hover:bg-[#F9FCFA]"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5">
                              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${active ? "bg-[#22C55E] text-white" : tab.complete ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#F1F5F9] text-[#64748B]"}`}>
                                {tab.complete ? <Check className="h-3.5 w-3.5" /> : <tab.Icon className="h-3.5 w-3.5" />}
                              </span>
                              <span className="truncate">{tab.title}</span>
                            </div>
                            {tab.complete ? <Check className="h-3.5 w-3.5 shrink-0 text-[#16A34A]" /> : null}
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-[#E5E7EB]">
                            <div className={`h-full rounded-full transition-all duration-500 ${tab.complete ? "bg-[#22C55E]" : "bg-[#CBD5E1]"}`} style={{ width: `${Math.max(4, tab.percent)}%` }} />
                          </div>
                          <span className="text-[10px] font-medium text-[#64748B]">{tab.percent}%</span>
                        </button>
                      );
                    })}
                    </div>
                  </nav>
                </div>
              </div>

              <main className="relative space-y-5 pb-28 lg:pl-[252px]">
                <aside className="hidden w-[228px] lg:sticky lg:top-5 lg:float-left lg:-ml-[252px] lg:block" aria-label="AI employee workspaces">
                  <div className="rounded-xl border border-[#E5E7EB] bg-white p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                    <div className="px-2.5 pb-2 pt-1.5"><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">AI training</p><p className="mt-1 text-xs text-[#64748B]">Watch your AI grow one workspace at a time.</p></div>
                    <nav className="space-y-2" aria-label="AI Employee workspace navigator">
                      {workspaceNavigatorItems.map((item) => {
                        const active = activeWorkspaceSection === item.section;
                        return <button key={item.title} type="button" onClick={() => handleWorkspaceSectionSelection(item.section)} aria-current={active ? "page" : undefined} className={`w-full rounded-xl border px-2.5 py-2.5 text-left transition-all duration-200 ease-out ${active ? "border-[#86EFAC] bg-[#ECFDF5] shadow-sm" : "border-[#E5E7EB] bg-white hover:border-[#D1FAE5] hover:bg-[#F9FCFA]"}`}>
                          <div className="flex items-center gap-2.5">
                            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${active ? "bg-[#22C55E] text-white" : item.complete ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#F1F5F9] text-[#64748B]"}`}>
                              {item.complete ? <Check className="h-3.5 w-3.5" /> : <item.Icon className="h-3.5 w-3.5" />}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className={`block truncate text-xs font-semibold ${active ? "text-[#166534]" : "text-[#111827]"}`}>{item.title}</span>
                              <span className="mt-0.5 block truncate text-[10px] text-[#64748B]">{item.description}</span>
                            </span>
                            {item.complete && <Check className="h-3.5 w-3.5 shrink-0 text-[#16A34A]" />}
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E5E7EB]">
                            <div className={`h-full rounded-full transition-all duration-500 ${item.complete ? "bg-[#22C55E]" : "bg-[#CBD5E1]"}`} style={{ width: `${Math.max(4, item.percent)}%` }} />
                          </div>
                          <div className="mt-1 flex items-center justify-between text-[10px] font-medium text-[#64748B]">
                            <span>{active ? "In progress" : "Ready"}</span>
                            <span>{item.percent}%</span>
                          </div>
                        </button>;
                      })}
                    </nav>
                  </div>
                </aside>
                <div className="border-b border-[#E5E7EB] pb-4">
                  <div className="max-w-3xl">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                      {activeWorkspaceSection === "Identity"
                        ? "Identity training"
                        : activeWorkspaceSection === "Catalogue"
                        ? "Catalogue Training"
                        : "AI Employee workspace"}
                    </p>
                    <p className="mt-1 text-sm text-[#475569]">
                      {activeWorkspaceSection === "Identity"
                        ? "Onboard your AI employee one focused decision at a time."
                        : activeWorkspaceSection === "Catalogue"
                        ? "Train your AI to understand everything you sell so it can recommend products and services with confidence."
                        : "Train and manage your AI employee."}
                    </p>
                  </div>
                </div>

                {activeWorkspaceSection === "Identity" && (
                  <>
                  <section className="relative z-20 rounded-[24px] border border-[#E5E7EB] bg-white px-3 py-3 shadow-[0_6px_18px_rgba(15,23,42,0.04)]" aria-label="AI employee onboarding progress">
                    {onboardingComplete ? (
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-in fade-in-0 zoom-in-95 duration-300">
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22C55E] text-lg text-white shadow-sm">✓</span>
                          <div><p className="text-base font-semibold text-[#111827]">Your AI Employee is Ready</p><p className="mt-1 text-sm text-[#64748B]">Your AI has successfully completed the identity curriculum and is ready to represent your business.</p><div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold text-[#166534]">{identityLessons.map((lesson) => <span key={lesson}>✓ {lesson}</span>)}</div></div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button type="button" onClick={() => setActiveWorkspaceSection("Performance")} className="rounded-lg bg-[#111827] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#334155]">View AI Profile</button>
                          <button type="button" onClick={() => { setSelected("Inbox"); window.history.pushState({}, "", "/dashboard/inbox"); }} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition hover:bg-[#F8FAFC] hover:text-[#111827]">Start Conversations</button>
                          <button type="button" onClick={() => setActiveWorkspaceSection("Test AI")} className="rounded-lg border border-[#BBF7D0] bg-[#ECFDF5] px-3 py-2 text-xs font-semibold text-[#166534] transition hover:bg-[#DCFCE7]">Test AI</button>
                          <button type="button" onClick={() => { setAiEmployeeLaunched(false); setCompletedIdentitySteps([]); focusIdentityLesson(0); }} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition hover:bg-[#F8FAFC] hover:text-[#111827]">Teach More</button>
                        </div>
                      </div>
                    ) : <>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#166534]">Identity Training</p>
                        <p className="mt-1 text-base font-semibold text-[#111827]">Help your AI understand who your business is, what it stands for, and how it should represent your brand in every customer conversation.</p>
                      </div>
                      <div className="rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#166534]">
                        {trainingCompletedSteps.length}/{identityLessons.length} lessons complete
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {identityLessons.map((lesson, index) => {
                        const active = activeIdentityStep === index;
                        const completed = completedIdentitySteps.includes(index);
                        return (
                          <button key={lesson} type="button" onClick={() => focusIdentityLesson(index)} aria-current={active ? "step" : undefined} className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${active ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm" : completed ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]"}`}>
                            <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${completed ? "bg-[#22C55E] text-white" : active ? "bg-[#111827] text-white" : "bg-[#F8FAFC] text-[#64748B]"}`}>
                              {completed ? <Check className="h-3.5 w-3.5" /> : <span className="text-[11px]">{index + 1}</span>}
                            </span>
                            <span>{lesson}</span>
                          </button>
                        );
                      })}
                    </div>
                    </>}
                  </section>
                  </>
                )}

                {completionToast && (
                  <div role="status" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-[#BBF7D0] bg-white px-4 py-3 text-sm font-semibold text-[#166534] shadow-[0_14px_32px_rgba(15,23,42,0.14)] animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#22C55E] text-white"><Check className="h-3.5 w-3.5" /></span>
                    <span>{completionToast}</span>
                  </div>
                )}

                <div id="ai-workspace-content" className="w-full scroll-mt-28">
                    {activeWorkspaceSection === "Identity" && !onboardingComplete && (
                      <div className="space-y-5">
                        <div onChangeCapture={() => setHasUnsavedChanges(true)}>
                          <div>
                            <div ref={identityLessonRef} className="space-y-4 scroll-mt-36 scroll-smooth">
                              <section data-lesson-index="0" className={activeIdentityStep === 0 ? identityLessonCardClass(0) : "hidden"}>
                                <div className="space-y-5">
                                  <div className="flex gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#166534]"><User className="h-5 w-5" /></div>
                                    <div>
                                      <p className="text-[20px] font-semibold text-[#111827]">Business Identity</p>
                                      <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                                        Teach your AI who you are and what your business does.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6">
                                    <div className="space-y-2">
                                      <p className="text-[15px] font-semibold tracking-[-0.01em] text-[#111827]">Who is this AI representing?</p>
                                      <p className="text-sm leading-6 text-[#6B7280]">Start with the basics so your AI can introduce the business clearly.</p>
                                    </div>
                                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                                      <div className="relative w-full space-y-2 md:col-span-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="business-name">
                                          Business Name
                                        </label>
                                        <input
                                          id="business-name"
                                          autoComplete="organization"
                                          required
                                          value={businessInfo.name}
                                          onChange={(event) => setBusinessInfo((current) => ({ ...current, name: event.target.value }))}
                                          placeholder="Your business name"
                                          className={`${AI_TRAINING_FIELD} w-full`}
                                        />
                                        {businessInfo.name && <Check className="pointer-events-none absolute right-3 top-[39px] h-4 w-4 text-[#22C55E]" aria-label="Business name is ready" />}
                                      </div>

                                      <div className="relative w-full space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="industry">
                                          Business Type
                                        </label>
                                        <input
                                          id="industry"
                                          required
                                          value={businessInfo.type}
                                          onChange={(event) => setBusinessInfo((current) => ({ ...current, type: event.target.value }))}
                                          placeholder="e.g. Retail, Hospitality, Services"
                                          className={`${AI_TRAINING_FIELD} w-full`}
                                        />
                                        {businessInfo.type && <Check className="pointer-events-none absolute right-3 top-[39px] h-4 w-4 text-[#22C55E]" aria-label="Business type is ready" />}
                                      </div>

                                      <div className="relative w-full space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="business-country">
                                          Country
                                        </label>
                                        <input
                                          id="business-country"
                                          required
                                          value={businessInfo.country}
                                          onChange={(event) => setBusinessInfo((current) => ({ ...current, country: event.target.value }))}
                                          placeholder="e.g. Kenya"
                                          className={`${AI_TRAINING_FIELD} w-full`}
                                        />
                                        {businessInfo.country && <Check className="pointer-events-none absolute right-3 top-[39px] h-4 w-4 text-[#22C55E]" aria-label="Country is ready" />}
                                      </div>
                                    </div>
                                    <div className="mt-6 space-y-2">
                                      <label className="block text-sm font-semibold text-[#111827]" htmlFor="business-description">
                                        Business Description
                                      </label>
                                      <textarea
                                        id="business-description"
                                        required
                                        value={businessInfo.about}
                                        onChange={(event) => setBusinessInfo((current) => ({ ...current, about: event.target.value }))}
                                        placeholder="We provide affordable fibre internet for homes and businesses across Nairobi with fast installation and friendly customer support."
                                        rows={4}
                                        className={`${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`}
                                      />
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-end border-t border-[#EEF2F6] pt-5">
                                    <button
                                      type="button"
                                      disabled={!businessInfo.name.trim() || !businessInfo.type.trim() || !businessInfo.country.trim() || !businessInfo.about.trim()}
                                      onClick={() => completeIdentityLesson(0)}
                                      className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155] disabled:cursor-not-allowed disabled:opacity-45"
                                    >
                                      <span>Save & Continue</span>
                                      <ChevronRight className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                              </section>

                              <section data-lesson-index="1" className={activeIdentityStep === 1 ? identityLessonCardClass(1) : "hidden"}>
                                <div className="space-y-5">
                                  <div className="flex gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF7ED] text-[#C2410C]"><Smile className="h-5 w-5" /></div>
                                    <div>
                                      <p className="text-[20px] font-semibold text-[#111827]">Brand Voice</p>
                                      <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                                        Teach your AI how to communicate in your brand's tone.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6">
                                    <div className="space-y-2">
                                      <p className="text-[15px] font-semibold tracking-[-0.01em] text-[#111827]">Brand Personality</p>
                                      <p className="text-sm leading-6 text-[#6B7280]">Pick the character your AI should reflect in conversations.</p>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                      {PERSONALITIES.map((personalityOption) => {
                                        const active = personality === personalityOption;
                                        return (
                                          <button
                                            key={personalityOption}
                                            type="button"
                                            aria-pressed={active}
                                            onClick={() => { setPersonality(personalityOption); setHasUnsavedChanges(true); }}
                                            className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${active ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#A7F3D0] hover:text-[#111827]"}`}
                                          >
                                            {personalityOption}
                                          </button>
                                        );
                                      })}
                                    </div>

                                    <div className="mt-6 space-y-3">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Communication Style</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                          {COMMUNICATION_STYLE_OPTIONS.map((styleOption) => {
                                            const active = communicationStyle === styleOption;
                                            return (
                                              <button
                                                key={styleOption}
                                                type="button"
                                                onClick={() => { setCommunicationStyle(styleOption); setHasUnsavedChanges(true); }}
                                                className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${active ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#A7F3D0] hover:text-[#111827]"}`}
                                              >
                                                {styleOption}
                                              </button>
                                            );
                                          })}
                                        </div>
                                      </div>

                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Emoji Usage</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                          {EMOJI_USAGE_OPTIONS.map((emojiOption) => {
                                            const active = emojiUsage === emojiOption;
                                            return (
                                              <button
                                                key={emojiOption}
                                                type="button"
                                                onClick={() => { setEmojiUsage(emojiOption); setHasUnsavedChanges(true); }}
                                                className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${active ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#A7F3D0] hover:text-[#111827]"}`}
                                              >
                                                {emojiOption}
                                              </button>
                                            );
                                          })}
                                        </div>
                                      </div>

                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Preferred Tone</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                          {PREFERRED_TONE_OPTIONS.map((toneOption) => {
                                            const active = preferredTone === toneOption;
                                            return (
                                              <button
                                                key={toneOption}
                                                type="button"
                                                onClick={() => { setPreferredTone(toneOption); setHasUnsavedChanges(true); }}
                                                className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${active ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#A7F3D0] hover:text-[#111827]"}`}
                                              >
                                                {toneOption}
                                              </button>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mt-6 rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-4">
                                      <div className="flex items-center gap-2">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] text-white"><Check className="h-3.5 w-3.5" /></span>
                                        <p className="text-sm font-semibold text-[#166534]">Voice preview</p>
                                      </div>
                                      <div className="mt-3 space-y-2 rounded-2xl bg-white p-4 shadow-sm">
                                        <div className="flex items-center gap-2">
                                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#22C55E] text-[10px] font-bold text-white">AI</span>
                                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">{personality} · {preferredTone}</span>
                                        </div>
                                        <p className="text-sm leading-6 text-[#111827]">{BRAND_VOICE_DETAILS[personality].example}</p>
                                        <p className="text-xs leading-5 text-[#64748B]">Style: {communicationStyle} · Emojis: {emojiUsage}</p>
                                      </div>
                                    </div>

                                    <div className="mt-6 space-y-2">
                                      <label className="block text-sm font-semibold text-[#111827]" htmlFor="writing-examples">
                                        Writing Examples
                                      </label>
                                      <p className="text-sm leading-6 text-[#6B7280]">Write 2–3 example replies so the AI learns from them directly.</p>
                                      <textarea
                                        id="writing-examples"
                                        value={writingExamples}
                                        onChange={(event) => { setWritingExamples(event.target.value); setHasUnsavedChanges(true); }}
                                        rows={6}
                                        placeholder={`Hi James 👋\nThanks for reaching out.\nInstallation takes less than 24 hours.`}
                                        className={`${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`}
                                      />
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between border-t border-[#EEF2F6] pt-4">
                                    <button type="button" onClick={() => focusIdentityLesson(0)} className="text-sm font-semibold text-[#64748B] transition hover:text-[#111827]">Back</button>
                                    <button type="button" onClick={() => completeIdentityLesson(1)} className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]">Save & Continue <ChevronRight className="h-4 w-4" /></button>
                                  </div>
                                </div>
                              </section>

                              <section data-lesson-index="2" className={activeIdentityStep === 2 ? identityLessonCardClass(2) : "hidden"}>
                                <div className="space-y-5">
                                  <div className="flex gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#1D4ED8]"><MessageCircle className="h-5 w-5" /></div>
                                    <div>
                                      <p className="text-[20px] font-semibold text-[#111827]">Greetings</p>
                                      <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                                        Teach your AI how to greet customers and start conversations consistently.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="grid gap-5 lg:grid-cols-[1.45fr_0.9fr]">
                                    <div className="space-y-4 rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6">
                                      <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="welcome-message">
                                          Welcome Message
                                        </label>
                                        <textarea
                                          id="welcome-message"
                                          value={welcomeMessage}
                                          onChange={(event) => { setWelcomeMessage(event.target.value); setHasUnsavedChanges(true); }}
                                          rows={3}
                                          placeholder="Hi 👋\nWelcome to Sokoos Internet.\nHow can I help you today?"
                                          className={`${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`}
                                        />
                                        <p className="text-xs leading-5 text-[#64748B]">Use this when a customer starts a conversation.</p>
                                      </div>

                                      <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="returning-greeting">
                                          Returning Customer Greeting
                                        </label>
                                        <textarea
                                          id="returning-greeting"
                                          value={welcomeMessage}
                                          onChange={(event) => { setWelcomeMessage(event.target.value); setHasUnsavedChanges(true); }}
                                          rows={2}
                                          placeholder="Welcome back! We’re glad to help again."
                                          className={`${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`}
                                        />
                                      </div>

                                      <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="away-message">
                                          Offline Message
                                        </label>
                                        <textarea
                                          id="away-message"
                                          value={awayMessage}
                                          onChange={(event) => { setAwayMessage(event.target.value); setHasUnsavedChanges(true); }}
                                          rows={2}
                                          placeholder="Thanks for your message. We’ll get back to you soon."
                                          className={`${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`}
                                        />
                                      </div>

                                      <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="closing-message">
                                          After Hours Message
                                        </label>
                                        <textarea
                                          id="closing-message"
                                          value={closingMessage}
                                          onChange={(event) => { setClosingMessage(event.target.value); setHasUnsavedChanges(true); }}
                                          rows={2}
                                          placeholder="We’re currently offline. Please leave a message and we’ll reply when we’re back."
                                          className={`${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`}
                                        />
                                      </div>

                                      <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="thank-you-message">
                                          Thank You Message
                                        </label>
                                        <textarea
                                          id="thank-you-message"
                                          value={closingMessage}
                                          onChange={(event) => { setClosingMessage(event.target.value); setHasUnsavedChanges(true); }}
                                          rows={2}
                                          placeholder="Thanks for reaching out. We’re here whenever you need us."
                                          className={`${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`}
                                        />
                                      </div>
                                    </div>

                                    <div className="rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-5 shadow-sm">
                                      <div className="flex items-center gap-2">
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#22C55E] text-white"><Check className="h-3.5 w-3.5" /></span>
                                        <p className="text-sm font-semibold text-[#166534]">Default conversation starters</p>
                                      </div>
                                      <p className="mt-2 text-sm leading-6 text-[#475569]">
                                        Teach your AI where your business operates so it can confirm service areas and coverage.
                                      </p>
                                      <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">Example</p>
                                        <p className="mt-2 text-sm leading-6 text-[#111827]">
                                          Hi 👋 Welcome to Sokoos Internet. How can I help you today?
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between border-t border-[#EEF2F6] pt-4">
                                    <button type="button" onClick={() => focusIdentityLesson(1)} className="text-sm font-semibold text-[#64748B] transition hover:text-[#111827]">Back</button>
                                    <button type="button" onClick={() => completeIdentityLesson(2)} className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]">Save & Continue <ChevronRight className="h-4 w-4" /></button>
                                  </div>
                                </div>
                              </section>

                              <section data-lesson-index="3" className={activeIdentityStep === 3 ? identityLessonCardClass(3) : "hidden"}>
                                <div className="space-y-5">
                                  <div className="flex gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F3FF] text-[#6D28D9]"><Globe className="h-5 w-5" /></div>
                                    <div>
                                      <p className="text-[20px] font-semibold text-[#111827]">Languages</p>
                                      <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                                        Teach your AI which languages to understand and use when customers reach out.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6">
                                    <div className="space-y-2">
                                      <label className="block text-sm font-semibold text-[#111827]" htmlFor="primary-language">
                                        Primary Language
                                      </label>
                                      <p className="text-sm leading-6 text-[#6B7280]">This is the default language your AI uses first.</p>
                                      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Primary language">
                                        {filteredLanguageOptions.map((language) => (
                                          <button
                                            key={language}
                                            type="button"
                                            aria-pressed={primaryLanguage === language}
                                            onClick={() => { setPrimaryLanguage(language); setHasUnsavedChanges(true); }}
                                            className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${primaryLanguage === language ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#A7F3D0] hover:text-[#111827]"}`}
                                          >
                                            {language}
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="mt-6 space-y-2">
                                      <label className="block text-sm font-semibold text-[#111827]" htmlFor="additional-languages">
                                        Additional Languages
                                      </label>
                                      <p className="text-sm leading-6 text-[#6B7280]">Allow multiple selection so the AI can respond naturally in more than one language.</p>
                                      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Additional languages">
                                        {filteredLanguageOptions.map((language) => {
                                          const selected = supportedLanguages.includes(language);
                                          return (
                                            <button
                                              key={language}
                                              type="button"
                                              aria-pressed={selected}
                                              onClick={() => {
                                                setHasUnsavedChanges(true);
                                                setSupportedLanguages((current) =>
                                                  current.includes(language)
                                                    ? current.filter((item) => item !== language)
                                                    : [...current, language],
                                                );
                                              }}
                                              className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${selected ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#A7F3D0] hover:text-[#111827]"}`}
                                            >
                                              {language}
                                            </button>
                                          );
                                        })}
                                      </div>
                                    </div>

                                    <div className="mt-6 rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-4">
                                      <div className="flex items-center gap-2">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] text-white"><Check className="h-3.5 w-3.5" /></span>
                                        <p className="text-sm font-semibold text-[#166534]">Automatic language switching</p>
                                      </div>
                                      <p className="mt-3 text-sm leading-6 text-[#475569]">
                                        When a customer writes in a supported language, your AI can switch automatically. Unsupported languages are translated before the AI responds, so the conversation stays smooth.
                                      </p>
                                      <div className="mt-3 rounded-2xl bg-white p-3 shadow-sm">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">Examples</p>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                          {['English', 'Swahili', 'French', 'Arabic'].map((example) => (
                                            <span key={example} className="rounded-full bg-[#F8FAFC] px-2.5 py-1 text-xs font-semibold text-[#111827]">{example}</span>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between border-t border-[#EEF2F6] pt-4">
                                    <button type="button" onClick={() => focusIdentityLesson(2)} className="text-sm font-semibold text-[#64748B] transition hover:text-[#111827]">Back</button>
                                    <button type="button" onClick={() => completeIdentityLesson(3)} className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]">Continue to business hours <ChevronRight className="h-4 w-4" /></button>
                                  </div>
                                </div>
                              </section>

                              <section data-lesson-index="4" className={activeIdentityStep === 4 ? identityLessonCardClass(4) : "hidden"}>
                                <div className="space-y-5">
                                  <div className="flex gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF7ED] text-[#C2410C]"><Clock className="h-5 w-5" /></div>
                                    <div>
                                      <p className="text-[20px] font-semibold text-[#111827]">Business Hours</p>
                                      <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                                        Teach your AI when your business is open so it can answer availability questions.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6">
                                    <div className="grid gap-4 md:grid-cols-2">
                                      <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="timezone">Timezone</label>
                                        <select
                                          id="timezone"
                                          value={timezone}
                                          onChange={(event) => { setTimezone(event.target.value); setHasUnsavedChanges(true); }}
                                          className={AI_TRAINING_FIELD}
                                        >
                                          <option>East Africa Time (EAT)</option>
                                          <option>West Africa Time (WAT)</option>
                                          <option>Central Africa Time (CAT)</option>
                                          <option>UTC</option>
                                        </select>
                                      </div>
                                      <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="business-hours">Weekly schedule</label>
                                        <input
                                          id="business-hours"
                                          value={businessHours}
                                          onChange={(event) => { setBusinessHours(event.target.value); setHasUnsavedChanges(true); }}
                                          placeholder="Mon–Fri, 8:00 AM - 6:00 PM"
                                          className={AI_TRAINING_FIELD}
                                        />
                                      </div>
                                    </div>

                                    <div className="mt-5 space-y-3">
                                      {['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((day) => (
                                        <div key={day} className="rounded-xl border border-[#E5E7EB] bg-white p-3">
                                          <div className="flex flex-wrap items-center justify-between gap-3">
                                            <p className="text-sm font-semibold text-[#111827]">{day}</p>
                                            <label className="inline-flex items-center gap-2 text-sm font-medium text-[#475569]">
                                              <input type="checkbox" className="h-4 w-4 rounded border-[#CBD5E1] text-[#22C55E] focus:ring-[#22C55E]" />
                                              <span>Closed</span>
                                            </label>
                                          </div>
                                          <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                            <div>
                                              <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">Open</label>
                                              <input type="text" placeholder="08:00" className="mt-1 h-10 w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-sm outline-none focus:border-[#22C55E] focus:bg-white" />
                                            </div>
                                            <div>
                                              <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">Close</label>
                                              <input type="text" placeholder="17:00" className="mt-1 h-10 w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-sm outline-none focus:border-[#22C55E] focus:bg-white" />
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                    <div className="mt-6 space-y-3">
                                      <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="holiday-mode">Holiday Mode</label>
                                        <textarea id="holiday-mode" rows={2} placeholder="We are closed for public holidays and reopen on the next business day." className={`${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`} />
                                      </div>
                                      <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="vacation-mode">Vacation Mode</label>
                                        <textarea id="vacation-mode" rows={2} placeholder="We are currently on vacation and will respond once we are back." className={`${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`} />
                                      </div>
                                      <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="emergency-contact">Emergency Contact</label>
                                        <input id="emergency-contact" placeholder="+254 700 000 000" className={AI_TRAINING_FIELD} />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-4">
                                    <div className="flex items-center gap-2">
                                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] text-white"><Check className="h-3.5 w-3.5" /></span>
                                      <p className="text-sm font-semibold text-[#166534]">How the AI uses these hours</p>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-[#475569]">
                                      These hours are used by the AI when customers ask whether the business is open. They help set accurate expectations and guide when the AI should respond with availability information.
                                    </p>
                                  </div>

                                  <div className="flex items-center justify-between border-t border-[#EEF2F6] pt-4">
                                    <button type="button" onClick={() => focusIdentityLesson(3)} className="text-sm font-semibold text-[#64748B] transition hover:text-[#111827]">Back</button>
                                    <button type="button" disabled={!businessHours.trim()} onClick={() => completeIdentityLesson(4)} className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155] disabled:cursor-not-allowed disabled:opacity-45">Save & Continue <ChevronRight className="h-4 w-4" /></button>
                                  </div>
                                </div>
                              </section>

                              <section data-lesson-index="5" className={activeIdentityStep === 5 ? identityLessonCardClass(5) : "hidden"}>
                                <div className="space-y-5">
                                  <div className="flex gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#166534]"><MapPin className="h-5 w-5" /></div>
                                    <div>
                                      <p className="text-[20px] font-semibold text-[#111827]">Locations</p>
                                      <p className="mt-2 text-sm leading-6 text-[#6B7280]">Tell your AI where your business operates so it can answer area coverage questions confidently.</p>
                                    </div>
                                  </div>
                                  <div className="rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6">
                                    <div className="grid gap-4 md:grid-cols-2">
                                      <div className="w-full space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="identity-address">Head Office</label>
                                        <input id="identity-address" value={businessInfo.address} onChange={(event) => { setBusinessInfo((current) => ({ ...current, address: event.target.value })); setHasUnsavedChanges(true); }} placeholder="Nairobi, Kenya" className={`${AI_TRAINING_FIELD} w-full`} />
                                        <p className="text-xs text-[#64748B]">This is the main office your AI can share with customers.</p>
                                      </div>
                                      <div className="w-full space-y-2">
                                        <label className="block text-sm font-semibold text-[#111827]" htmlFor="identity-service-areas">Service Areas</label>
                                        <input id="identity-service-areas" value={serviceAreaInput} onChange={(event) => setServiceAreaInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); addServiceArea(); } }} placeholder="Nairobi, Westlands, Karen" className={`${AI_TRAINING_FIELD} w-full`} />
                                        <div className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs leading-5 text-[#475569]">
                                          Type one location at a time, then press Enter to add it. Example: Nairobi, Westlands, Karen.
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                          {parseServiceAreas(businessInfo.serviceAreas).map((area) => (
                                            <button key={area} type="button" onClick={() => removeServiceArea(area)} className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1 text-xs font-semibold text-[#111827] transition hover:border-[#86EFAC] hover:bg-[#F0FDF4]">
                                              <span>{area}</span>
                                              <span className="text-[#64748B]">×</span>
                                            </button>
                                          ))}
                                        </div>

                                      </div>
                                    </div>
                                  </div>

                                  <div className="rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-4">
                                    <div className="flex items-center gap-2">
                                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] text-white"><Check className="h-3.5 w-3.5" /></span>
                                      <p className="text-sm font-semibold text-[#166534]">How the AI uses these locations</p>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-[#475569]">
                                      These locations are used by the AI when customers ask, “Do you serve my area?” so it can answer accurately and confidently.
                                    </p>
                                  </div>

                                  <div className="flex items-center justify-between border-t border-[#EEF2F6] pt-4">
                                    <button type="button" onClick={() => focusIdentityLesson(4)} className="text-sm font-semibold text-[#64748B] transition hover:text-[#111827]">Back</button>
                                    <button type="button" onClick={() => completeIdentityLesson(5)} className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]">Save & Continue <ChevronRight className="h-4 w-4" /></button>
                                  </div>
                                </div>
                              </section>
                              <section data-lesson-index="6" className={activeIdentityStep === 6 ? "relative overflow-hidden rounded-[28px] border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] via-white to-[#F8FAFC] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-6" : "hidden"}>
                                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                                  <div className="absolute -right-10 -top-8 h-24 w-24 rounded-full bg-[#22C55E]/10 blur-3xl" />
                                  <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-[#3B82F6]/10 blur-3xl" />
                                  <span className="absolute left-8 top-8 h-3 w-3 rounded-full bg-[#22C55E] animate-bounce" />
                                  <span className="absolute right-12 top-12 h-2.5 w-2.5 rounded-full bg-[#F59E0B] animate-bounce" style={{ animationDelay: "180ms" }} />
                                  <span className="absolute bottom-14 left-12 h-2 w-2 rounded-full bg-[#6366F1] animate-bounce" style={{ animationDelay: "320ms" }} />
                                </div>
                                <div className="relative space-y-6">
                                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="max-w-2xl">
                                      <div className="inline-flex items-center gap-2 rounded-full border border-[#BBF7D0] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#166534]">
                                        <Sparkles className="h-3.5 w-3.5" />
                                        Identity training complete
                                      </div>
                                      <p className="mt-3 text-[24px] font-semibold tracking-[-0.02em] text-[#111827]">You’ve finished the Identity curriculum</p>
                                      <p className="mt-2 text-sm leading-6 text-[#475569]">Your AI now has the voice, greetings, languages, hours, and location details you chose, so it can represent your business with confidence.</p>
                                    </div>
                                    <div className="flex items-center gap-4 rounded-2xl border border-[#D1FAE5] bg-white/80 p-4 shadow-sm">
                                      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#D1FAE5] p-1" style={{ background: `conic-gradient(#22C55E ${trainingPercent}%, #E5E7EB 0)` }}>
                                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                                          <div className="text-center">
                                            <p className="text-[20px] font-semibold text-[#111827]">{trainingPercent}%</p>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">ready</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Training progress</p>
                                        <p className="mt-1 text-sm text-[#64748B]">All key identity lessons are now locked in and ready for use.</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                                    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
                                      <p className="text-sm font-semibold text-[#111827]">What’s ready now</p>
                                      <div className="mt-4 space-y-3">
                                        {[
                                          { label: "Business identity", value: businessInfo.name || "Not added", complete: Boolean(businessInfo.name) },
                                          { label: "Brand voice", value: personality, complete: Boolean(personality) },
                                          { label: "Greetings", value: welcomeMessage || "Default welcome set", complete: Boolean(welcomeMessage) },
                                          { label: "Languages", value: supportedLanguages.length ? supportedLanguages.join(" · ") : primaryLanguage, complete: Boolean(primaryLanguage) },
                                          { label: "Business hours", value: businessHours || "Schedule captured", complete: Boolean(businessHours) },
                                          { label: "Locations", value: businessInfo.address || businessInfo.serviceAreas || "Service area added", complete: Boolean(businessInfo.address || businessInfo.serviceAreas) },
                                        ].map((item) => (
                                          <div key={item.label} className="flex items-start justify-between gap-3 rounded-xl border border-[#EEF2F6] bg-[#F8FAFC] px-3 py-3">
                                            <div>
                                              <p className="text-sm font-semibold text-[#111827]">{item.label}</p>
                                              <p className="mt-1 text-sm text-[#64748B]">{item.value}</p>
                                            </div>
                                            <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${item.complete ? "bg-[#22C55E] text-white" : "bg-[#F1F5F9] text-[#64748B]"}`}>
                                              <Check className="h-3.5 w-3.5" />
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-5 shadow-sm">
                                      <div className="flex items-center gap-2">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E] text-white"><Sparkles className="h-4 w-4" /></span>
                                        <div>
                                          <p className="text-sm font-semibold text-[#166534]">Next step</p>
                                          <p className="text-[11px] uppercase tracking-[0.24em] text-[#64748B]">Train the knowledge layer</p>
                                        </div>
                                      </div>
                                      <p className="mt-3 text-sm leading-6 text-[#475569]">You’ve completed the identity training. Continue into Knowledge so your AI can answer frequently asked questions, policies, and offer details with confidence.</p>
                                      <div className="mt-5 flex flex-wrap gap-2">
                                        <button type="button" onClick={() => { setActiveWorkspaceSection("Knowledge Hub"); setAiEmployeeLaunched(true); handleSaveChanges(); }} className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]">Continue to Knowledge <ChevronRight className="h-4 w-4" /></button>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between border-t border-[#D1FAE5] pt-4">
                                    <button type="button" onClick={() => focusIdentityLesson(5)} className="text-sm font-semibold text-[#64748B] transition hover:text-[#111827]">Back</button>
                                    <button type="button" onClick={() => { completeIdentityLesson(6); setAiEmployeeLaunched(true); handleSaveChanges(); }} className="inline-flex items-center gap-2 rounded-lg bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"><Sparkles className="h-4 w-4" />{aiEmployeeLaunched ? "Completed" : "Finish Identity"}</button>
                                  </div>
                                </div>
                              </section>
                            </div>

                            <div className="hidden" aria-hidden="true">
                              <details className="group rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0_12px_32px_rgba(15,23,42,0.10)] transition-shadow duration-200 ease-out hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)]">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold text-[#111827] [&::-webkit-details-marker]:hidden xl:hidden">
                                  Live AI Preview
                                  <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
                                </summary>
                                <div className="max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-200 ease-out group-open:max-h-[720px] group-open:opacity-100 xl:mt-0 xl:max-h-[720px] xl:opacity-100">
                                  <div className="hidden xl:flex items-center justify-between gap-3">
                                    <div>
                                      <p className="text-base font-semibold text-[#111827]">Live AI Preview</p>
                                      <p className="mt-0.5 text-xs text-[#6B7280]">Watch your AI learn in real time.</p>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[11px] font-semibold text-[#166534]">
                                      <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" /> Live
                                    </span>
                                  </div>

                                  <div className="mx-auto mt-4 w-full max-w-[326px] rounded-[32px] bg-[#111827] p-2 shadow-[0_18px_42px_rgba(15,23,42,0.22)]">
                                    <div className="overflow-hidden rounded-[25px] bg-[#F8FAFB]">
                                      <div className="flex items-center justify-between bg-[#111827] px-5 py-2 text-[10px] font-semibold text-white">
                                        <span>9:41</span><span className="h-3 w-16 rounded-full bg-white/90" /><span>●●●</span>
                                      </div>
                                      <div className="flex items-center gap-3 border-b border-[#E5E7EB] bg-white px-3.5 py-3">
                                        <div className="flex h-9 w-9 overflow-hidden items-center justify-center rounded-full bg-[#ECFDF5] text-sm font-semibold text-[#166534]">
                                          {logoPreview ? <img src={logoPreview} alt="Business logo" className="h-full w-full object-cover" /> : (businessInfo.name.slice(0, 1) || "B")}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                          <p className="truncate text-sm font-semibold text-[#111827]">{businessInfo.name || "Your business"}</p>
                                          <p className="text-[11px] text-[#16A34A]">Online · replies instantly</p>
                                        </div>
                                        <MessageCircle className="h-4 w-4 text-[#94A3B8]" />
                                      </div>
                                      <div ref={previewMessagesRef} key={`${previewRefreshKey}-${previewQuestion ?? "default"}`} aria-live="polite" aria-atomic="true" className="max-h-[330px] min-h-[286px] space-y-2.5 overflow-y-auto bg-[#F8FAFB] p-3 animate-in fade-in-0 slide-in-from-bottom-1 duration-300">
                                        <p className="text-center text-[10px] font-medium text-[#94A3B8]">Today</p>
                                        <div className="ml-auto w-fit max-w-[86%] rounded-2xl rounded-br-sm bg-[#DCFCE7] px-3 py-2 text-[12px] text-[#111827]">{previewLanguageCopy.customerGreeting}</div>
                                        {previewReplyVisible ? <div className="w-fit max-w-[91%] animate-in fade-in-0 slide-in-from-bottom-1 duration-300 rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12px] leading-5 text-[#111827] shadow-sm">{welcomeMessage || previewLanguageCopy.defaultWelcome}</div> : <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-3 py-3 shadow-sm" aria-label="AI is typing"><span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#94A3B8]" /><span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#94A3B8] [animation-delay:120ms]" /><span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#94A3B8] [animation-delay:240ms]" /></div>}
                                        {previewQuestion && <>
                                          <div className="ml-auto w-fit max-w-[86%] rounded-2xl rounded-br-sm bg-[#DCFCE7] px-3 py-2 text-[12px] text-[#111827]">{previewQuestion}</div>
                                          {previewReplyVisible && <div className="w-fit max-w-[91%] animate-in fade-in-0 slide-in-from-bottom-1 duration-300 rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12px] leading-5 text-[#111827] shadow-sm">{previewQuestionReply}</div>}
                                        </>}
                                        {!previewQuestion && <>
                                          <div className="ml-auto w-fit max-w-[86%] rounded-2xl rounded-br-sm bg-[#DCFCE7] px-3 py-2 text-[12px] text-[#111827]">{previewLanguageCopy.pricingQuestion}</div>
                                          {previewReplyVisible && <div className="w-fit max-w-[91%] animate-in fade-in-0 slide-in-from-bottom-1 duration-300 rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12px] leading-5 text-[#111827] shadow-sm">{previewBusinessContext}</div>}
                                          {previewReplyVisible && previewFollowUp && <div className="w-fit max-w-[91%] animate-in fade-in-0 duration-300 rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12px] leading-5 text-[#111827] shadow-sm">{previewFollowUp}</div>}
                                        </>}
                                      </div>
                                      <div className="flex items-center gap-2 border-t border-[#E5E7EB] bg-white px-3 py-2.5"><Plus className="h-4 w-4 text-[#94A3B8]" /><div className="flex-1 rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[11px] text-[#94A3B8]">Message</div><Send className="h-4 w-4 text-[#22C55E]" /></div>
                                    </div>
                                  </div>

                                  <div className="mt-4 grid grid-cols-3 gap-2">
                                    <button type="button" onClick={() => setPreviewQuestion("Hello") } className="rounded-lg border border-[#E5E7EB] bg-white px-2 py-2 text-[11px] font-semibold text-[#475569] transition hover:border-[#86EFAC] hover:text-[#166534]">Test greeting</button>
                                    <button type="button" onClick={() => setPreviewQuestion("How much is your service?") } className="rounded-lg border border-[#E5E7EB] bg-white px-2 py-2 text-[11px] font-semibold text-[#475569] transition hover:border-[#86EFAC] hover:text-[#166534]">Ask question</button>
                                    <button type="button" onClick={() => setPreviewQuestion(null)} className="rounded-lg border border-[#E5E7EB] bg-white px-2 py-2 text-[11px] font-semibold text-[#475569] transition hover:border-[#CBD5E1] hover:text-[#111827]">Reset</button>
                                  </div>
                                  <div className="mt-3">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">Try a quick prompt</p>
                                    <div className="mt-2 flex flex-wrap gap-1.5">
                                      {["How much is your service?", "Where are you located?", "What are your hours?"].map((prompt) => <button key={prompt} type="button" onClick={() => setPreviewQuestion(prompt)} className="rounded-full bg-[#F1F5F9] px-2.5 py-1.5 text-[11px] font-medium text-[#475569] transition hover:bg-[#ECFDF5] hover:text-[#166534]">{prompt}</button>)}
                                    </div>
                                  </div>
                                  <div className="mt-4 border-t border-[#EEF2F6] pt-3">
                                    <p className="text-xs font-semibold text-[#111827]">What changed</p>
                                    <div className="mt-2 grid gap-1.5 text-[11px] text-[#64748B]">
                                      {["Greeting updated", `${personality} personality`, supportedLanguages.join(" + ") || primaryLanguage, `Available ${businessHours || "not set"}`].map((change) => <span key={change} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-[#22C55E]" />{change}</span>)}
                                    </div>
                                  </div>
                                </div>
                              </details>

                              <section className={activeIdentityStep === 0 ? "rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]" : "hidden"}>
                                <div className="rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F9FAFB] p-3">
                                  {logoPreview ? (
                                    <img src={logoPreview} alt="Uploaded business logo" className="mx-auto h-20 w-20 rounded-[16px] object-cover" />
                                  ) : (
                                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[16px] bg-[#E5F6EC] text-2xl font-semibold text-[#065F46]">
                                      {businessInfo.name.slice(0, 1) || "B"}
                                    </div>
                                  )}
                                  <p className="mt-3 text-center text-xs text-[#64748B]">PNG, JPG or SVG · Maximum 5MB</p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                  <label className="inline-flex cursor-pointer items-center justify-center rounded-[16px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#F3F4F6] hover:shadow-sm">
                                    <Image className="mr-2 h-4 w-4" />
                                    Add logo
                                    <input
                                      type="file"
                                      accept="image/png,image/jpeg,image/svg+xml"
                                      className="hidden"
                                      onChange={(event) => {
                                        const file = event.target.files?.[0];
                                        if (!file) return;
                                        const supportedTypes = ["image/png", "image/jpeg", "image/svg+xml"];
                                        if (!supportedTypes.includes(file.type)) {
                                          setLogoError("Please upload a PNG, JPG or SVG file.");
                                          return;
                                        }
                                        if (file.size > 5 * 1024 * 1024) {
                                          setLogoError("Logo files must be 5MB or smaller.");
                                          return;
                                        }
                                        setAvatarFileName(file.name);
                                        setLogoPreview(LOGO_PLACEHOLDER);
                                        setLogoError("");
                                      }}
                                    />
                                  </label>
                                  <button type="button" onClick={() => { setLogoPreview(null); setLogoPreviewOpen(false); setAvatarFileName(""); setLogoError(""); setHasUnsavedChanges(true); }} disabled={!logoPreview} className="rounded-[16px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#F3F4F6] hover:shadow-sm disabled:cursor-not-allowed disabled:text-[#94A3B8]">
                                    Remove
                                  </button>
                                  <button type="button" onClick={() => setLogoPreviewOpen(true)} disabled={!logoPreview} className="rounded-[16px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#F3F4F6] hover:shadow-sm disabled:cursor-not-allowed disabled:text-[#94A3B8]">
                                    Preview
                                  </button>
                                </div>

                                <p className="mt-3 text-sm text-[#64748B]">{logoError || avatarFileName || "No logo added yet"}</p>

                                {logoPreviewOpen && logoPreview && (
                                  <div className="mt-4 rounded-[16px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                                    <div className="flex items-center justify-between gap-3">
                                      <p className="text-sm font-semibold text-[#111827]">Your AI’s logo</p>
                                      <button type="button" onClick={() => setLogoPreviewOpen(false)} className="text-sm font-semibold text-[#475569] transition-colors duration-200 hover:text-[#111827]">Close</button>
                                    </div>
                                    <img src={logoPreview} alt="Business logo preview" className="mt-4 h-40 w-full rounded-[16px] bg-white object-contain" />
                                  </div>
                                )}
                              </section>

                            </div>

                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                    {activeWorkspaceSection === "Knowledge Hub" && (
                      <KnowledgeWorkspace>
                        <KnowledgeLessonTabs />
                        <CurrentLesson />
                      </KnowledgeWorkspace>
                    )}

                    {activeWorkspaceSection === "Catalogue" && (
                      <div className="w-full max-w-[1600px] min-w-0 space-y-6 overflow-x-hidden lg:space-y-8">
                        <div className="grid gap-6 items-start">
                          <div className="min-w-0 flex-1">
                            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                              <div className="flex flex-wrap items-center gap-3">
                                <div className="relative">
                                  <button type="button" onClick={() => setAddProductMenuOpen((s) => !s)} className="inline-flex items-center gap-2 rounded-[12px] bg-[#22C55E] px-3 py-1 text-sm font-semibold text-white transition duration-200 ease-out hover:shadow-sm hover:bg-[#16A34A]">+ Add Product</button>

                                  {addProductMenuOpen && (
                                    <div className="absolute left-0 mt-2 w-56 rounded-md border bg-white shadow-lg z-50">
                                      {[
                                        'Physical Product',
                                        'Service',
                                        'Subscription',
                                        'Digital Product',
                                        'Rental',
                                        'Booking',
                                        'Gift Card',
                                      ].map((t) => (
                                        <button
                                          key={t}
                                          onClick={() => {
                                            setSelectedProductType(t);
                                            setAddProductMenuOpen(false);
                                            setAddProductFormData({ name: `${t} ${catalogProducts.length + 1}`, category: t, price: '$0.00', availability: 'Available' });
                                            setShowAddProductForm(true);
                                          }}
                                          className="w-full text-left px-3 py-2 text-sm hover:bg-[#F8FAFB]"
                                        >
                                          {t}
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>

                                <div className="relative">
                                  <button type="button" onClick={() => setImportMenuOpen((s) => !s)} className="inline-flex items-center gap-2 rounded-[12px] border border-[#E5E7EB] bg-white px-3 py-1 text-sm font-semibold transition duration-200 ease-out hover:shadow-sm hover:bg-[#F8FAFB]">
                                    Import
                                    <ChevronDown className="h-4 w-4 text-[#6B7280]" />
                                  </button>

                                  {importMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white shadow-lg z-50">
                                      <label className="block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer">
                                        CSV
                                        <input type="file" accept=".csv" className="hidden" onChange={(e) => { setImportMenuOpen(false); simulateImport('CSV', e.target.files?.[0] ?? null); }} />
                                      </label>
                                      <label className="block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer">
                                        Excel
                                        <input type="file" accept=".xlsx,.xls" className="hidden" onChange={(e) => { setImportMenuOpen(false); simulateImport('Excel', e.target.files?.[0] ?? null); }} />
                                      </label>
                                      <label className="block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer">
                                        PDF
                                        <input type="file" accept=".pdf" className="hidden" onChange={(e) => { setImportMenuOpen(false); simulateImport('PDF Catalogues', e.target.files?.[0] ?? null); }} />
                                      </label>
                                      <label className="block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer">
                                        Images
                                        <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => { setImportMenuOpen(false); handleFiles(e.target.files); }} />
                                      </label>
                                      <label className="block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer">
                                        Bulk Upload
                                        <input type="file" accept="*/*" multiple className="hidden" onChange={(e) => { setImportMenuOpen(false); handleFiles(e.target.files); }} />
                                      </label>
                                    </div>
                                  )}
                                </div>

                                <div className="flex-1">
                                  <input
                                    value={productSearch}
                                    onChange={(e) => setProductSearch(e.target.value)}
                                    placeholder="Search products, categories, or descriptions"
                                    className="w-full rounded-[12px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm shadow-sm focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#ECFDF5]"
                                  />
                                </div>
                              </div>

                              <div className="text-sm text-[#64748B]">Showing {CATALOG_ITEMS.length} items</div>

                              {/* Add Product Form Modal */}
                              {showAddProductForm && addProductFormData && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                                  <div className="w-full max-w-lg rounded-[12px] bg-white p-6">
                                    <div className="flex items-center justify-between">
                                      <h3 className="text-lg font-semibold">Add {selectedProductType}</h3>
                                      <button onClick={() => { setShowAddProductForm(false); setSelectedProductType(null); }} className="text-sm text-[#6B7280]">Close</button>
                                    </div>

                                    <div className="mt-4 space-y-3">
                                      <div>
                                        <label className="text-xs text-[#6B7280]">Name</label>
                                        <input value={addProductFormData.name} onChange={(e) => setAddProductFormData((d) => d ? { ...d, name: e.target.value } : d)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                      </div>

                                      <div className="grid grid-cols-2 gap-3">
                                        <div>
                                          <label className="text-xs text-[#6B7280]">Category</label>
                                          <input value={addProductFormData.category} onChange={(e) => setAddProductFormData((d) => d ? { ...d, category: e.target.value } : d)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                        </div>
                                        <div>
                                          <label className="text-xs text-[#6B7280]">Price</label>
                                          <input value={addProductFormData.price} onChange={(e) => setAddProductFormData((d) => d ? { ...d, price: e.target.value } : d)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                        </div>
                                      </div>

                                      <div>
                                        <label className="text-xs text-[#6B7280]">Availability</label>
                                        <select value={addProductFormData.availability} onChange={(e) => setAddProductFormData((d) => d ? { ...d, availability: e.target.value } : d)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm">
                                          <option>Available</option>
                                          <option>In stock</option>
                                          <option>Out of stock</option>
                                          <option>By appointment</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="mt-6 flex justify-end gap-3">
                                      <button onClick={() => { setShowAddProductForm(false); setSelectedProductType(null); }} className="rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm">Cancel</button>
                                      <button onClick={() => { if (addProductFormData) addProductWithData(addProductFormData); setShowAddProductForm(false); setSelectedProductType(null); }} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Create Product</button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {catalogueSubsection === "Media Library" ? (
                              <div>
                                <div className="mb-6">
                                  <div className="overflow-x-auto pb-1 custom-scrollbar">
                                    <div className="flex min-w-max items-center gap-3 px-1 py-1">
                                      {[
                                        { label: "Products", value: "Products & Services" as CatalogueSubsection },
                                        { label: "Pricing", value: "Pricing" as CatalogueSubsection },
                                        { label: "Availability", value: "Availability" as CatalogueSubsection },
                                        { label: "Categories", value: "Categories" as CatalogueSubsection },
                                        { label: "Media", value: "Media Library" as CatalogueSubsection },
                                        { label: "Import Catalogue", value: "Imports" as CatalogueSubsection },
                                        { label: "Review", value: "Review" as CatalogueSubsection },
                                      ].map((lesson, index) => {
                                        const lessonOrder: CatalogueSubsection[] = [
                                          "Products & Services",
                                          "Pricing",
                                          "Availability",
                                          "Categories",
                                          "Media Library",
                                          "Imports",
                                          "Review",
                                        ];
                                        const selectedIndex = lessonOrder.indexOf(catalogueSubsection);
                                        const isActive = selectedIndex === index;
                                        const isCompleted = selectedIndex >= 0 && index < selectedIndex;

                                        return (
                                          <button
                                            key={lesson.label}
                                            type="button"
                                            onClick={() => setCatalogueSubsection(lesson.value as CatalogueSubsection)}
                                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${isActive ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm" : isCompleted ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]"}`}
                                          >
                                            {isCompleted ? (
                                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A] text-[11px] text-white">
                                                <Check className="h-3.5 w-3.5" />
                                              </span>
                                            ) : (
                                              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isCompleted ? "bg-[#22C55E] text-white" : isActive ? "bg-[#111827] text-white" : "bg-[#F8FAFC] text-[#64748B]"}`}>
                                                {isCompleted ? <Check className="h-3.5 w-3.5" /> : <span className="text-[11px]">{index + 1}</span>}
                                              </span>
                                            )}
                                            <span>{lesson.label}</span>
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                                <div
                                  onDrop={onDrop}
                                  onDragOver={onDragOver}
                                  className="rounded-[12px] border-dashed border-2 border-[#E5E7EB] bg-[#FAFAFB] p-6 text-center mb-5"
                                >
                                  <p className="text-sm font-semibold text-[#111827]">Drag & drop files here</p>
                                  <p className="mt-2 text-sm text-[#64748B]">Images, PDFs, videos, logos, brochures, flyers, certificates, menus, floor plans</p>
                                  <div className="mt-5">
                                    <input ref={fileInputRef} type="file" multiple className="hidden" onChange={(e) => handleFiles(e.target.files)} />
                                    <button type="button" onClick={() => fileInputRef.current?.click()} className="inline-flex items-center gap-2 rounded-[12px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Upload files</button>
                                  </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                                  {mediaAssets.map((asset) => (
                                    <div key={asset.id} className="flex h-full flex-col rounded-[14px] border border-[#EEF2F6] bg-white p-3 shadow-sm">
                                      <div className="mb-3 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[10px] bg-[#F8FAFB]">
                                        {asset.mime?.startsWith("image") ? (
                                          <img src={asset.url} alt={asset.name} className="h-full w-full object-cover" />
                                        ) : asset.mime?.startsWith("video") ? (
                                          <video src={asset.url} controls className="h-full w-full object-cover" />
                                        ) : asset.mime?.includes("pdf") ? (
                                          <div className="flex flex-col items-center justify-center text-sm text-[#475569]">
                                            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            <span className="mt-2">PDF</span>
                                          </div>
                                        ) : (
                                          <div className="text-sm text-[#475569]">{asset.fileType}</div>
                                        )}
                                      </div>

                                      <div className="flex min-h-0 flex-1 flex-col">
                                        <p className="truncate text-sm font-semibold text-[#111827]">{asset.name}</p>
                                        <div className="mt-2 space-y-1 text-xs text-[#6B7280]">
                                          <p>{asset.fileType} • {asset.size}</p>
                                          <p className="text-[#94A3B8]">{asset.uploadDate}</p>
                                        </div>

                                        <div className="mt-4 flex items-center justify-end gap-2">
                                          <button type="button" onClick={() => viewAsset(asset)} className="rounded-[8px] border border-[#E5E7EB] bg-white px-2.5 py-1.5 text-xs font-semibold">View</button>
                                          <button type="button" onClick={() => renameAsset(asset.id)} className="rounded-[8px] border border-[#E5E7EB] bg-white px-2.5 py-1.5 text-xs font-semibold">Rename</button>
                                          <button type="button" onClick={() => deleteAsset(asset.id)} className="rounded-[8px] border border-[#FECACA] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#B91C1C]">Delete</button>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : catalogueSubsection === "Imports" ? (
                              <div>
                                <div className="mb-6">
                                  <div className="overflow-x-auto pb-1 custom-scrollbar">
                                    <div className="flex min-w-max items-center gap-3 px-1 py-1">
                                      {[
                                        { label: "Products", value: "Products & Services" as CatalogueSubsection },
                                        { label: "Pricing", value: "Pricing" as CatalogueSubsection },
                                        { label: "Availability", value: "Availability" as CatalogueSubsection },
                                        { label: "Categories", value: "Categories" as CatalogueSubsection },
                                        { label: "Media", value: "Media Library" as CatalogueSubsection },
                                        { label: "Import Catalogue", value: "Imports" as CatalogueSubsection },
                                        { label: "Review", value: "Review" as CatalogueSubsection },
                                      ].map((lesson, index) => {
                                        const lessonOrder: CatalogueSubsection[] = [
                                          "Products & Services",
                                          "Pricing",
                                          "Availability",
                                          "Categories",
                                          "Media Library",
                                          "Imports",
                                          "Review",
                                        ];
                                        const selectedIndex = lessonOrder.indexOf(catalogueSubsection);
                                        const isActive = selectedIndex === index;
                                        const isCompleted = selectedIndex >= 0 && index < selectedIndex;

                                        return (
                                          <button
                                            key={lesson.label}
                                            type="button"
                                            onClick={() => setCatalogueSubsection(lesson.value as CatalogueSubsection)}
                                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${isActive ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm" : isCompleted ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]"}`}
                                          >
                                            {isCompleted ? (
                                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A] text-[11px] text-white">
                                                <Check className="h-3.5 w-3.5" />
                                              </span>
                                            ) : (
                                              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isCompleted ? "bg-[#22C55E] text-white" : isActive ? "bg-[#111827] text-white" : "bg-[#F8FAFC] text-[#64748B]"}`}>
                                                {isCompleted ? <Check className="h-3.5 w-3.5" /> : <span className="text-[11px]">{index + 1}</span>}
                                              </span>
                                            )}
                                            <span>{lesson.label}</span>
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                  {IMPORT_TYPES.map((t) => (
                                    <div key={t} className="flex h-full flex-col rounded-[14px] border border-[#EEF2F6] bg-white p-4 shadow-sm">
                                      <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#F8FAFB] text-[#22C55E]">
                                          {t === "Website Import" ? (
                                            <Globe className="h-5 w-5" />
                                          ) : t === "PDF Catalogues" ? (
                                            <Image className="h-5 w-5" />
                                          ) : (
                                            <Package className="h-5 w-5" />
                                          )}
                                        </div>
                                        <p className="text-sm font-semibold text-[#111827]">{t}</p>
                                      </div>

                                      <p className="mt-3 text-sm leading-5 text-[#64748B]">
                                        {t === "Excel" && "Import products, SKUs, prices, categories, and stock levels from an .xlsx file."}
                                        {t === "CSV" && "Import simple product lists and pricing from CSV files."}
                                        {t === "PDF Catalogues" && "Extract product listings from PDF catalogs with best-effort parsing."}
                                        {t === "Website Import" && "Pull product pages from a website URL and turn them into catalog entries."}
                                      </p>

                                      <div className="mt-4">
                                        {t === "Website Import" ? (
                                          <div className="flex gap-2">
                                            <input placeholder="https://example.com/catalog" className="flex-1 rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm" id={`url-${t}`} />
                                            <button type="button" onClick={() => simulateImport(t as string, null)} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-xs font-semibold text-white">Start</button>
                                          </div>
                                        ) : (
                                          <div className="flex items-center gap-2">
                                            <input type="file" accept={t === "Excel" ? ".xlsx, .xls" : ".csv"} onChange={(e) => simulateImport(t as string, e.target.files?.[0] ?? null)} className="text-sm" />
                                          </div>
                                        )}
                                      </div>

                                      <div className="mt-4">
                                        <div className="h-2 w-full overflow-hidden rounded-full bg-[#F1F5F9]">
                                          <div className="h-2 bg-[#22C55E]" style={{ width: `${importState[t]?.progress ?? 0}%` }} />
                                        </div>
                                        <p className="mt-2 text-xs text-[#64748B]">{importState[t]?.status === "uploading" ? `Uploading (${importState[t]?.progress ?? 0}%)` : importState[t]?.status === "done" ? "Completed" : "Idle"}</p>
                                      </div>

                                      {importState[t]?.status === "done" && importState[t]?.result && (
                                        <div className="mt-4 rounded-[10px] bg-[#F8FAFB] p-3 text-sm">
                                          <p className="font-semibold text-[#111827]">{importState[t]!.result!.message}</p>
                                          <p className="mt-1 text-xs text-[#64748B]">Products imported: {importState[t]!.result!.productsImported}</p>
                                          <p className="mt-1 text-xs text-[#F59E0B]">Duplicates found: {importState[t]!.result!.duplicatesFound}</p>
                                          {importState[t]!.result!.warnings.length > 0 && (
                                            <div className="mt-2 text-xs text-[#F59E0B]">
                                              <p className="font-semibold">Warnings:</p>
                                              <ul className="ml-4 list-disc">
                                                {importState[t]!.result!.warnings.map((w, i) => (
                                                  <li key={i}>{w}</li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : catalogueSubsection === "Quote Templates" ? (
                              <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
                                <div>
                                  <div className="mb-4 flex items-center justify-between">
                                    <p className="text-sm font-semibold text-[#111827]">Quote Templates</p>
                                    <div className="flex gap-2">
                                      <button type="button" onClick={addQuoteTemplate} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Create Template</button>
                                      <button type="button" onClick={() => { const t = quoteTemplates.find(x => x.id === selectedTemplateId); if (t) alert(`Create Quote from template: ${t.companyName}`); }} className="rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm font-semibold">Create Quote</button>
                                    </div>
                                  </div>

                                  <div className="space-y-3">
                                    <div className="flex gap-3 overflow-x-auto pb-2">
                                      {quoteTemplates.map((t) => (
                                        <button key={t.id} onClick={() => setSelectedTemplateId(t.id)} className={`min-w-[160px] flex-shrink-0 rounded-[10px] border p-3 text-left ${selectedTemplateId === t.id ? 'border-[#22C55E] bg-[#ECFDF5]' : 'bg-white'}`}>
                                          <p className="text-sm font-semibold">{t.companyName}</p>
                                          <p className="text-xs text-[#64748B] truncate">{t.header}</p>
                                        </button>
                                      ))}
                                    </div>

                                    {selectedTemplateId && (
                                      <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-4">
                                        <div className="grid gap-3">
                                          <div className="flex items-center gap-3">
                                            <div className="h-12 w-12 rounded-md overflow-hidden bg-[#F8FAFB] flex items-center justify-center">
                                              {quoteTemplates.find(q => q.id === selectedTemplateId)?.companyLogo ? (
                                                <img src={quoteTemplates.find(q => q.id === selectedTemplateId)!.companyLogo} alt="logo" className="h-full w-full object-cover" />
                                              ) : (
                                                <div className="text-xs text-[#94A3B8]">Logo</div>
                                              )}
                                            </div>
                                            <div className="flex-1">
                                              <input value={quoteTemplates.find(q => q.id === selectedTemplateId)?.companyName || ''} onChange={(e) => updateTemplate(selectedTemplateId, { companyName: e.target.value })} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                              <label className="text-xs text-[#6B7280]">Logo</label>
                                              <input type="file" accept="image/*" onChange={(e) => uploadLogoForTemplate(selectedTemplateId, e.target.files?.[0] ?? null)} />
                                            </div>
                                          </div>

                                          <div>
                                            <label className="text-xs text-[#6B7280]">Header</label>
                                            <input value={quoteTemplates.find(q => q.id === selectedTemplateId)?.header || ''} onChange={(e) => updateTemplate(selectedTemplateId, { header: e.target.value })} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                          </div>

                                          <div>
                                            <label className="text-xs text-[#6B7280]">Footer</label>
                                            <input value={quoteTemplates.find(q => q.id === selectedTemplateId)?.footer || ''} onChange={(e) => updateTemplate(selectedTemplateId, { footer: e.target.value })} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                          </div>

                                          <div>
                                            <label className="text-xs text-[#6B7280]">Terms & Conditions</label>
                                            <textarea value={quoteTemplates.find(q => q.id === selectedTemplateId)?.terms || ''} onChange={(e) => updateTemplate(selectedTemplateId, { terms: e.target.value })} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]" />
                                          </div>

                                          <div className="grid grid-cols-2 gap-3">
                                            <div>
                                              <label className="text-xs text-[#6B7280]">Currency</label>
                                              <input value={quoteTemplates.find(q => q.id === selectedTemplateId)?.currency || ''} onChange={(e) => updateTemplate(selectedTemplateId, { currency: e.target.value })} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                            </div>
                                            <div>
                                              <label className="text-xs text-[#6B7280]">Tax</label>
                                              <input value={quoteTemplates.find(q => q.id === selectedTemplateId)?.tax || ''} onChange={(e) => updateTemplate(selectedTemplateId, { tax: e.target.value })} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                            </div>
                                          </div>

                                          <div>
                                            <label className="text-xs text-[#6B7280]">Signature</label>
                                            <input value={quoteTemplates.find(q => q.id === selectedTemplateId)?.signature || ''} onChange={(e) => updateTemplate(selectedTemplateId, { signature: e.target.value })} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                          </div>

                                          <div>
                                            <label className="text-xs text-[#6B7280]">Primary Color</label>
                                            <input type="color" value={quoteTemplates.find(q => q.id === selectedTemplateId)?.primaryColor || '#065F46'} onChange={(e) => updateTemplate(selectedTemplateId, { primaryColor: e.target.value })} className="mt-1 h-10 w-20 p-0 border-none" />
                                          </div>

                                          <div className="flex justify-end gap-2">
                                            <button type="button" onClick={() => duplicateTemplate(selectedTemplateId!)} className="rounded-[8px] border border-[#E5E7EB] px-3 py-2 text-sm">Duplicate</button>
                                            <button type="button" onClick={() => deleteTemplate(selectedTemplateId!)} className="rounded-[8px] border border-[#FECACA] px-3 py-2 text-sm text-[#B91C1C]">Delete</button>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div>
                                  <div className={`${AI_WORKSPACE_SUBTLE}`}>
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-md overflow-hidden bg-[#F8FAFB] flex items-center justify-center">
                                          {quoteTemplates.find(q => q.id === selectedTemplateId)?.companyLogo ? (
                                            <img src={quoteTemplates.find(q => q.id === selectedTemplateId)!.companyLogo} alt="logo" className="h-full w-full object-cover" />
                                          ) : (
                                            <div className="text-xs text-[#94A3B8]">Logo</div>
                                          )}
                                        </div>
                                        <div>
                                          <p className="text-sm font-semibold">{quoteTemplates.find(q => q.id === selectedTemplateId)?.companyName}</p>
                                          <p className="text-xs text-[#64748B]">{quoteTemplates.find(q => q.id === selectedTemplateId)?.header}</p>
                                        </div>
                                      </div>
                                      <div className="text-sm text-[#6B7280]">{quoteTemplates.find(q => q.id === selectedTemplateId)?.currency}</div>
                                    </div>

                                    <div className="mt-4 border-t pt-4">
                                      <p className="text-sm text-[#475569]">Item lines would appear here in a real quote. Tax: {quoteTemplates.find(q => q.id === selectedTemplateId)?.tax}</p>
                                    </div>

                                    <div className="mt-6 border-t pt-4">
                                      <p className="text-sm text-[#64748B]">Terms</p>
                                      <p className="mt-1 text-sm text-[#475569]">{quoteTemplates.find(q => q.id === selectedTemplateId)?.terms}</p>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                      <div>
                                        <p className="text-sm font-semibold">{quoteTemplates.find(q => q.id === selectedTemplateId)?.signature}</p>
                                      </div>
                                      <div>
                                        <button type="button" className="rounded-[10px] bg-white border border-[#E5E7EB] px-3 py-2 text-sm">Preview</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-6">
                                <div className="mb-6">
                                  <div className="overflow-x-auto pb-1 custom-scrollbar">
                                    <div className="flex min-w-max items-center gap-3 px-1 py-1">
                                      {[
                                        { label: "Products", value: "Products & Services" as CatalogueSubsection },
                                        { label: "Pricing", value: "Pricing" as CatalogueSubsection },
                                        { label: "Availability", value: "Availability" as CatalogueSubsection },
                                        { label: "Categories", value: "Categories" as CatalogueSubsection },
                                        { label: "Media", value: "Media Library" as CatalogueSubsection },
                                        { label: "Import Catalogue", value: "Imports" as CatalogueSubsection },
                                        { label: "Review", value: "Review" as CatalogueSubsection },
                                      ].map((lesson, index) => {
                                        const lessonOrder: CatalogueSubsection[] = [
                                          "Products & Services",
                                          "Pricing",
                                          "Availability",
                                          "Categories",
                                          "Media Library",
                                          "Imports",
                                          "Review",
                                        ];
                                        const selectedIndex = lessonOrder.indexOf(catalogueSubsection);
                                        const isActive = selectedIndex === index;
                                        const isCompleted = selectedIndex >= 0 && index < selectedIndex;
                                        const isFuture = selectedIndex >= 0 && index > selectedIndex;

                                        return (
                                          <button
                                            key={lesson.label}
                                            type="button"
                                            onClick={() => setCatalogueSubsection(lesson.value as CatalogueSubsection)}
                                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${isActive ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm" : isCompleted ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]"}`}
                                          >
                                            {isCompleted ? (
                                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A] text-[11px] text-white">
                                                <Check className="h-3.5 w-3.5" />
                                              </span>
                                            ) : (
                                              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isCompleted ? "bg-[#22C55E] text-white" : isActive ? "bg-[#111827] text-white" : "bg-[#F8FAFC] text-[#64748B]"}`}>
                                                {isCompleted ? <Check className="h-3.5 w-3.5" /> : <span className="text-[11px]">{index + 1}</span>}
                                              </span>
                                            )}
                                            <span>{lesson.label}</span>
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {catalogueSubsection === "Pricing" ? (
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Pricing</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">Teach your AI how much everything costs.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#EEF2F6] bg-[#F8FAFB] px-3 py-2">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">AI tip</p>
                                        <p className="mt-1 text-xs text-[#475569]">Add clear pricing so replies stay accurate.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]">
                                        <span className="font-semibold">Est.</span> {catalogProducts.length > 0 ? "In progress" : "Not started"}
                                      </div>
                                    </div>
                                  ) : catalogueSubsection === "Availability" ? (
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Availability</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">Teach your AI when products and services can be sold.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#EEF2F6] bg-[#F8FAFB] px-3 py-2">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">AI tip</p>
                                        <p className="mt-1 text-xs text-[#475569]">Share stock status to avoid bad recommendations.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]">
                                        <span className="font-semibold">Est.</span> {catalogProducts.length > 0 ? "In progress" : "Not started"}
                                      </div>
                                    </div>
                                  ) : catalogueSubsection === "Review" ? (
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Review</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">Verify your catalogue before your AI starts recommending products.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#EEF2F6] bg-[#F8FAFB] px-3 py-2">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">AI tip</p>
                                        <p className="mt-1 text-xs text-[#475569]">A quick review helps your AI respond confidently.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]">
                                        <span className="font-semibold">Est.</span> {catalogProducts.length > 0 ? "Almost ready" : "Needs setup"}
                                      </div>
                                    </div>
                                  ) : catalogueSubsection === "Categories" ? (
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Categories</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">Organize your catalogue so your AI can recommend accurately.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#EEF2F6] bg-[#F8FAFB] px-3 py-2">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">AI tip</p>
                                        <p className="mt-1 text-xs text-[#475569]">Clear categories improve matching and suggestions.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]">
                                        <span className="font-semibold">Est.</span> {catalogProducts.length > 0 ? "In progress" : "Not started"}
                                      </div>
                                    </div>
                                  ) : catalogueSubsection === "Media Library" ? (
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Media</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">Give your AI images, documents, and files it can use to better assist customers.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#EEF2F6] bg-[#F8FAFB] px-3 py-2">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">AI tip</p>
                                        <p className="mt-1 text-xs text-[#475569]">Upload rich media so the AI has more helpful references.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]">
                                        <span className="font-semibold">Est.</span> {mediaAssets.length > 0 ? "In progress" : "Not started"}
                                      </div>
                                    </div>
                                  ) : catalogueSubsection === "Imports" ? (
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Import Catalogue</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">Quickly teach your AI using your existing catalogue.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#EEF2F6] bg-[#F8FAFB] px-3 py-2">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">AI tip</p>
                                        <p className="mt-1 text-xs text-[#475569]">Import existing catalogue data to speed up training.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]">
                                        <span className="font-semibold">Est.</span> {Object.keys(importState).length > 0 ? "In progress" : "Not started"}
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                      <div>
                                        <p className="text-sm font-semibold text-[#111827]">Products</p>
                                        <p className="mt-1 text-xs text-[#6B7280]">Teach your AI what you sell.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#EEF2F6] bg-[#F8FAFB] px-3 py-2">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">AI tip</p>
                                        <p className="mt-1 text-xs text-[#475569]">Start with your core offers so recommendations stay relevant.</p>
                                      </div>
                                      <div className="rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]">
                                        <span className="font-semibold">Est.</span> {catalogProducts.length > 0 ? "In progress" : "Not started"}
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
                                  {[
                                    { key: "Product", desc: "Physical product" },
                                    { key: "Service", desc: "Bookable service" },
                                    { key: "Subscription", desc: "Recurring plan" },
                                    { key: "Digital Product", desc: "Downloadable item" },
                                  ].map((t) => (
                                    <button key={t.key} onClick={() => addProduct(t.key)} className={`text-left rounded-2xl border p-4 transition hover:shadow-sm bg-white`}>
                                      <div className="flex items-start gap-3">
                                        <div className="h-9 w-9 flex-shrink-0 rounded-xl bg-[#F1F5F9] items-center justify-center flex text-[#475569]"><Package className="h-4 w-4" /></div>
                                        <div className="min-w-0 flex-1">
                                          <p className="text-sm font-semibold text-[#111827]">{t.key}</p>
                                          <p className="mt-1 text-xs text-[#64748B]">{t.desc}</p>
                                        </div>
                                      </div>
                                    </button>
                                  ))}
                                </div>

                                {catalogueSubsection === "Pricing" ? (
                                  <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-4">
                                    <div className="overflow-x-auto">
                                      <table className="min-w-full text-sm">
                                        <thead>
                                          <tr className="text-left text-[11px] uppercase tracking-[0.12em] text-[#6B7280]">
                                            <th className="px-2 py-2">Product</th>
                                            <th className="px-2 py-2">Price</th>
                                            <th className="px-2 py-2">Currency</th>
                                            <th className="px-2 py-2">Billing Period</th>
                                            <th className="px-2 py-2">Discount</th>
                                            <th className="px-2 py-2">Status</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {catalogProducts.map((item) => (
                                            <tr key={item.id} className="border-t">
                                              <td className="px-2 py-2 align-middle text-sm text-[#111827]">{item.name}</td>
                                              <td className="px-2 py-2 align-middle">
                                                <input value={item.price || ''} onChange={(e) => updateCatalogProductField(item.id, 'price', e.target.value)} className="w-24 rounded border border-[#E5E7EB] px-2 py-1 text-sm" />
                                              </td>
                                              <td className="px-2 py-2 align-middle">
                                                <select value={(item as any).currency || 'USD'} onChange={(e) => updateCatalogProductField(item.id, 'currency', e.target.value)} className="w-20 rounded border border-[#E5E7EB] px-2 py-1 text-sm">
                                                  <option>USD</option>
                                                  <option>KES</option>
                                                  <option>EUR</option>
                                                  <option>NGN</option>
                                                </select>
                                              </td>
                                              <td className="px-2 py-2 align-middle">
                                                <select value={(item as any).billingPeriod || 'One-time'} onChange={(e) => updateCatalogProductField(item.id, 'billingPeriod', e.target.value)} className="w-28 rounded border border-[#E5E7EB] px-2 py-1 text-sm">
                                                  <option>One-time</option>
                                                  <option>Monthly</option>
                                                  <option>Yearly</option>
                                                  <option>Usage-based</option>
                                                </select>
                                              </td>
                                              <td className="px-2 py-2 align-middle">
                                                <input type="number" value={(item as any).discount ?? ''} onChange={(e) => updateCatalogProductField(item.id, 'discount', e.target.value ? Number(e.target.value) : '')} className="w-16 rounded border border-[#E5E7EB] px-2 py-1 text-sm" />
                                              </td>
                                              <td className="px-2 py-2 align-middle">
                                                <select value={(item as any).status || item.availability || 'Available'} onChange={(e) => updateCatalogProductField(item.id, 'status', e.target.value)} className="w-28 rounded border border-[#E5E7EB] px-2 py-1 text-sm">
                                                  <option>Available</option>
                                                  <option>Low stock</option>
                                                  <option>By appointment</option>
                                                  <option>Out of stock</option>
                                                </select>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between gap-4">
                                      <div className="text-sm text-[#64748B]">Pricing supports one-time, recurring and usage-based models.</div>
                                      <div>
                                        <button onClick={() => {
                                          setPricingSaved(true);
                                          window.setTimeout(() => setPricingSaved(false), 1800);
                                        }} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Save Pricing</button>
                                        {pricingSaved ? <span className="ml-3 text-sm text-[#16A34A]">Saved</span> : null}
                                      </div>
                                    </div>
                                  </div>
                                ) : catalogueSubsection === "Availability" ? (
                                  <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-4">
                                    <div className="overflow-x-auto">
                                      <table className="min-w-full text-sm">
                                        <thead>
                                          <tr className="text-left text-[11px] uppercase tracking-[0.12em] text-[#6B7280]">
                                            <th className="px-2 py-2">Product</th>
                                            <th className="px-2 py-2">Availability</th>
                                            <th className="px-2 py-2">Inventory Status</th>
                                            <th className="px-2 py-2">Available Locations</th>
                                            <th className="px-2 py-2">Estimated Delivery</th>
                                            <th className="px-2 py-2">Visible to AI</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {catalogProducts.map((item) => (
                                            <tr key={item.id} className="border-t hover:bg-[#F8FAFB]">
                                              <td className="px-2 py-2 align-middle text-sm text-[#111827]">{item.name}</td>
                                              <td className="px-2 py-2 align-middle">
                                                <input value={(item.availability || 'Available')} onChange={(e) => updateCatalogProductField(item.id, 'availability', e.target.value)} className="w-28 rounded border border-[#E5E7EB] px-2 py-1 text-sm" />
                                              </td>
                                              <td className="px-2 py-2 align-middle">
                                                <select value={(item as any).inventoryStatus || 'In stock'} onChange={(e) => updateCatalogProductField(item.id, 'inventoryStatus', e.target.value)} className="w-28 rounded border border-[#E5E7EB] px-2 py-1 text-sm">
                                                  <option>In stock</option>
                                                  <option>Low stock</option>
                                                  <option>Out of stock</option>
                                                  <option>Pre-order</option>
                                                </select>
                                              </td>
                                              <td className="px-2 py-2 align-middle">
                                                <input value={(item as any).availableLocations || 'All locations'} onChange={(e) => updateCatalogProductField(item.id, 'availableLocations', e.target.value)} className="w-40 rounded border border-[#E5E7EB] px-2 py-1 text-sm" />
                                              </td>
                                              <td className="px-2 py-2 align-middle">
                                                <input value={(item as any).estimatedDelivery || '2-5 days'} onChange={(e) => updateCatalogProductField(item.id, 'estimatedDelivery', e.target.value)} className="w-28 rounded border border-[#E5E7EB] px-2 py-1 text-sm" />
                                              </td>
                                              <td className="px-2 py-2 align-middle">
                                                <label className="inline-flex items-center gap-2 text-sm">
                                                  <input type="checkbox" checked={(item as any).visibleToAi ?? true} onChange={(e) => updateCatalogProductField(item.id, 'visibleToAi', e.target.checked)} className="h-4 w-4 rounded border border-[#D1D5DB] text-[#22C55E] focus:ring-[#22C55E]" />
                                                  <span>{(item as any).visibleToAi ?? true ? 'Yes' : 'No'}</span>
                                                </label>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between gap-4">
                                      <div className="text-sm text-[#64748B]">Teach your AI when products are available and where they can be sold.</div>
                                      <div>
                                        <button onClick={() => {
                                          setAvailabilitySaved(true);
                                          window.setTimeout(() => setAvailabilitySaved(false), 1800);
                                        }} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Save Availability</button>
                                        {availabilitySaved ? <span className="ml-3 text-sm text-[#16A34A]">Saved</span> : null}
                                      </div>
                                    </div>
                                  </div>
                                ) : catalogueSubsection === "Review" ? (
                                  <div className="rounded-[12px] border border-[#E5E7EB] bg-white p-6">
                                    <p className="text-lg font-semibold text-[#111827]">Review</p>
                                    <p className="mt-2 text-sm text-[#64748B]">A checklist of sections in your catalogue. Complete any missing items before finishing.</p>

                                    {(() => {
                                      const hasProducts = catalogProducts.length > 0;
                                      const categoriesCount = Array.from(new Set(catalogProducts.map((p) => p.category).filter(Boolean))).length;
                                      const hasCategories = categoriesCount > 0;
                                      const hasMedia = mediaAssets.length > 0;
                                      const pricingComplete = hasProducts && catalogProducts.every((p) => p.price && p.price !== '$0.00');
                                      const pricingConfiguredCount = catalogProducts.filter((p) => p.price && p.price !== '$0.00').length;
                                      const availabilityComplete = hasProducts && catalogProducts.every((p) => (p as any).availability && (p as any).availability !== '');
                                      const availabilityConfiguredCount = catalogProducts.filter((p) => (p as any).availability && (p as any).availability !== '').length;
                                      const bundlesComplete = promotions.length > 0;
                                      const sections = [
                                        {
                                          key: 'Products',
                                          done: hasProducts,
                                          jump: 'Products & Services',
                                          configuredCount: catalogProducts.length,
                                          missingItems: hasProducts ? [] : ['Add at least one product'],
                                        },
                                        {
                                          key: 'Categories',
                                          done: hasCategories,
                                          jump: 'Categories',
                                          configuredCount: categoriesCount,
                                          missingItems: hasCategories ? [] : ['Add at least one category'],
                                        },
                                        {
                                          key: 'Media',
                                          done: hasMedia,
                                          jump: 'Media Library',
                                          configuredCount: mediaAssets.length,
                                          missingItems: hasMedia ? [] : ['Upload at least one asset'],
                                        },
                                        {
                                          key: 'Pricing',
                                          done: pricingComplete,
                                          jump: 'Pricing',
                                          configuredCount: pricingConfiguredCount,
                                          missingItems: pricingConfiguredCount === catalogProducts.length ? [] : catalogProducts.filter((p) => !p.price || p.price === '$0.00').map((p) => p.name || 'Unnamed product'),
                                        },
                                        {
                                          key: 'Availability',
                                          done: availabilityComplete,
                                          jump: 'Availability',
                                          configuredCount: availabilityConfiguredCount,
                                          missingItems: availabilityConfiguredCount === catalogProducts.length ? [] : catalogProducts.filter((p) => !(p as any).availability || (p as any).availability === '').map((p) => p.name || 'Unnamed product'),
                                        },
                                        {
                                          key: 'Bundles',
                                          done: bundlesComplete,
                                          jump: 'Bundles & Promotions',
                                          configuredCount: promotions.length,
                                          missingItems: bundlesComplete ? [] : ['Add a bundle or promotion'],
                                        },
                                      ];

                                      const allDone = sections.every((s) => s.done);

                                      return (
                                        <div className="mt-6 space-y-5">
                                          <div className="grid gap-4 md:grid-cols-2">
                                            {sections.map((s, index) => (
                                              <div key={`${s.key}-${index}`} className={`rounded-[12px] border p-4 ${s.done ? 'border-[#D1FAE5] bg-[#F0FDF4]' : 'border-[#EEF2F6] bg-white'}`}>
                                                <div className="flex items-start justify-between gap-3">
                                                  <div className="flex items-center gap-3">
                                                    <div className={`flex h-9 w-9 items-center justify-center rounded-full ${s.done ? 'bg-[#DCFCE7] text-[#16A34A]' : 'bg-[#F1F5F9] text-[#64748B]'}`}>
                                                      {s.done ? (
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                      ) : (
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                                      )}
                                                    </div>
                                                    <div>
                                                      <p className="text-sm font-semibold text-[#111827]">{s.key}</p>
                                                      <p className={`text-xs ${s.done ? 'text-[#16A34A]' : 'text-[#64748B]'}`}>{s.done ? 'Completed' : 'Incomplete'}</p>
                                                    </div>
                                                  </div>
                                                  {s.done ? (
                                                    <span className="rounded-full bg-[#DCFCE7] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#166534]">Ready</span>
                                                  ) : (
                                                    <button onClick={() => setCatalogueSubsection(s.jump as any)} className="text-sm font-semibold text-[#065F46]">Complete now →</button>
                                                  )}
                                                </div>

                                                <div className="mt-4">
                                                  <p className="text-xs font-medium uppercase tracking-wide text-[#64748B]">Configured items</p>
                                                  <p className="mt-1 text-lg font-semibold text-[#111827]">{s.configuredCount}</p>
                                                </div>

                                                <div className="mt-4">
                                                  <p className="text-xs font-medium uppercase tracking-wide text-[#64748B]">Missing items</p>
                                                  {s.missingItems.length > 0 ? (
                                                    <ul className="mt-2 space-y-2 text-sm text-[#64748B]">
                                                      {s.missingItems.map((item, itemIndex) => (
                                                        <li key={`${s.key}-${itemIndex}`} className="flex items-start gap-2">
                                                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
                                                          <span>{item}</span>
                                                        </li>
                                                      ))}
                                                    </ul>
                                                  ) : (
                                                    <p className="mt-2 text-sm text-[#16A34A]">No missing items</p>
                                                  )}
                                                </div>
                                              </div>
                                            ))}
                                          </div>

                                          <div className="rounded-[12px] border border-[#EEF2F6] bg-[#F8FAFB] p-4">
                                            <p className="text-sm font-semibold text-[#111827]">Review summary</p>
                                            {!allDone ? (
                                              <div className="mt-2 text-sm text-[#64748B]">Some sections are still incomplete — complete them to improve AI recommendations.</div>
                                            ) : (
                                              <div className="mt-2 text-sm text-[#16A34A]">Everything looks ready to finish your catalogue.</div>
                                            )}
                                          </div>

                                          <div className="flex items-center justify-end gap-3">
                                            <button onClick={() => setCatalogueSubsection('Products & Services' as any)} className="rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm">Back</button>
                                            <button onClick={() => setActiveWorkspaceSection('Sales Playbooks')} className={`rounded-[10px] px-3 py-2 text-sm font-semibold text-white ${allDone ? 'bg-[#16A34A]' : 'bg-[#9AE6B4]'}`}>Finish Catalogue</button>
                                          </div>
                                        </div>
                                      );
                                    })()}
                                  </div>
                                ) : catalogueSubsection === "Categories" ? (
                                  <div className="space-y-4">
                                    <div className="flex items-center justify-between gap-3">
                                      <div className="text-sm text-[#64748B]">Organize products into clear, reusable categories.</div>
                                      <button type="button" onClick={() => setShowAddCategoryInput(true)} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Add Category</button>
                                    </div>

                                    {showAddCategoryInput && (
                                      <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-3">
                                        <input
                                          value={newCategoryName}
                                          onChange={(e) => setNewCategoryName(e.target.value)}
                                          placeholder="Category name"
                                          className="w-full rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm"
                                        />
                                        <div className="mt-3 flex justify-end gap-2">
                                          <button type="button" onClick={() => { setShowAddCategoryInput(false); setNewCategoryName(""); }} className="rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm">Cancel</button>
                                          <button type="button" onClick={handleAddCategory} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Save</button>
                                        </div>
                                      </div>
                                    )}

                                    <div className="grid gap-3">
                                      {categories.map((category) => {
                                        const isEditing = editingCategoryId === category.id;
                                        const productCount = catalogProducts.filter((product) => product.category === category.name).length;

                                        return (
                                          <div key={category.id} className="flex items-center justify-between gap-3 rounded-[12px] border border-[#EEF2F6] bg-white p-3">
                                            <div className="min-w-0 flex-1">
                                              {isEditing ? (
                                                <input
                                                  value={categoryDrafts[category.id] ?? category.name}
                                                  onChange={(e) => setCategoryDrafts((current) => ({ ...current, [category.id]: e.target.value }))}
                                                  className="w-full rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm"
                                                />
                                              ) : (
                                                <p className="text-sm font-semibold text-[#111827]">{category.name}</p>
                                              )}
                                              <p className="mt-1 text-xs text-[#64748B]">{productCount} product{productCount === 1 ? "" : "s"}</p>
                                            </div>

                                            <div className="flex items-center gap-2">
                                              {isEditing ? (
                                                <>
                                                  <button type="button" onClick={() => handleEditCategory(category.id)} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Save</button>
                                                  <button type="button" onClick={() => { setEditingCategoryId(null); setCategoryDrafts((current) => { const { [category.id]: _, ...rest } = current; return rest; }); }} className="rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm">Cancel</button>
                                                </>
                                              ) : (
                                                <>
                                                  <button type="button" onClick={() => { setEditingCategoryId(category.id); setCategoryDrafts((current) => ({ ...current, [category.id]: category.name })); }} className="rounded-[10px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold text-[#111827]">Edit</button>
                                                  <button type="button" onClick={() => handleDeleteCategory(category.id)} className="rounded-[10px] border border-[#FECACA] bg-white px-3 py-2 text-sm font-semibold text-[#B91C1C]">Delete</button>
                                                </>
                                              )}
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="space-y-4">
                                    {(() => {
                                      // Empty state when there are no products at all
                                      if (catalogProducts.length === 0) {
                                        return (
                                          <div className="rounded-[12px] border border-dashed border-[#E5E7EB] bg-white p-10 text-center">
                                            <div className="mx-auto mb-6 h-36 w-36 rounded-lg bg-[#F8FAFB] flex items-center justify-center">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 3v4M8 3v4" />
                                              </svg>
                                            </div>
                                            <p className="text-2xl font-semibold text-[#111827]">No products yet</p>
                                            <p className="mt-2 text-sm text-[#64748B]">Add your products and services so your AI can recommend them to customers.</p>

                                            <div className="mt-6 flex items-center justify-center gap-3">
                                              <button onClick={() => addProduct()} className="rounded-[12px] bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white">Add Product</button>
                                              <button onClick={() => setCatalogueSubsection("Imports")} className="rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold">Import Catalogue</button>
                                            </div>
                                          </div>
                                        );
                                      }
                                      const query = productSearch.trim().toLowerCase();
                                      const filtered = catalogProducts.filter((p) =>
                                        p.name.toLowerCase().includes(query) ||
                                        p.category.toLowerCase().includes(query) ||
                                        (p.description || "").toLowerCase().includes(query),
                                      );
                                      if (filtered.length === 0) return <p className="text-sm text-[#94A3B8]">No products found. Use "Add Product" to create one.</p>;
                                      return (
                                        <div className="grid gap-4 items-stretch" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
                                          {filtered.map((item) => (
                                            <div key={item.id} className="group h-full overflow-hidden rounded-[16px] border border-[#EEF2F6] bg-white shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">
                                              <div className="aspect-[4/3] w-full overflow-hidden bg-[#F8FAFB]">
                                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                              </div>

                                              <div className="flex flex-col gap-2 p-3">
                                                <div className="min-h-0">
                                                  <p className="text-sm font-semibold text-[#111827] leading-5 line-clamp-2">{item.name}</p>
                                                  <p className="mt-1 text-[11px] text-[#6B7280] uppercase tracking-[0.12em]">{item.category}</p>

                                                  <div className="mt-2">
                                                    <p className="text-sm font-semibold text-[#111827]">{item.price}</p>
                                                  </div>

                                                  <div className={`mt-2 inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${item.availability === 'In stock' || item.availability === 'Available' ? 'border-[#D1FAE5] bg-[#ECFDF5] text-[#065F46]' : 'border-[#FDE8C7] bg-[#FFFBEB] text-[#B45309]'}`}>
                                                    {item.availability}
                                                  </div>
                                                </div>

                                                <div className="mt-auto pt-2">
                                                  <button type="button" className="w-full rounded-[10px] border border-[#E5E7EB] bg-white px-2.5 py-2 text-sm font-semibold text-[#111827] transition duration-200 ease-out hover:bg-[#F8FAFB] hover:shadow-sm">Edit</button>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      );
                                    })()}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <aside className="hidden xl:block rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 xl:sticky xl:top-6 xl:min-w-[280px]">
                            {catalogueSubsection === "Review" ? (
                              <div className="space-y-4">
                                <p className="text-sm font-semibold">Next steps</p>
                                <p className="text-sm text-[#64748B]">You're ready — continue to Sales Playbooks to define selling flows.</p>
                                <div className="mt-3">
                                  <button onClick={() => setActiveWorkspaceSection("Sales Playbooks")} className="w-full rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Continue</button>
                                </div>
                              </div>
                            ) : catalogueSubsection === "Categories" ? (
                              <div className="space-y-3">
                                <p className="text-sm font-semibold">Category tips</p>
                                <p className="text-sm text-[#64748B]">Keep categories short and consistent so products are easier to find and recommend.</p>
                              </div>
                            ) : null}
                          </aside>
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Sales Playbooks" && (
                      <div className="space-y-6">
                        <div className="flex flex-col gap-4 rounded-[24px] border border-[#E5E7EB] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-sm font-semibold text-[#111827]">Sales playbooks</p>
                            <p className="mt-2 text-sm text-[#6B7280]">Define how your AI Employee sells in customer conversations.</p>
                          </div>
                          <div className="flex gap-2">
                            <button type="button" onClick={addPlaybook} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Create Playbook</button>
                          </div>
                        </div>

                        <div className="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
                          <div>
                            <div className="space-y-2">
                              {playbooks.map((p) => (
                                <div key={p.id} className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <p className="text-sm font-semibold">{p.title}</p>
                                      <p className="text-xs text-[#64748B]">{p.steps.length} steps</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <button onClick={() => updatePlaybook(p.id, { allowed: !p.allowed })} className={`rounded-[8px] px-2 py-1 text-sm ${p.allowed ? 'bg-[#ECFDF5] border border-[#22C55E] text-[#065F46]' : 'border border-[#E5E7EB] bg-white'}`}>{p.allowed ? 'Allowed' : 'Allow'}</button>
                                      <button onClick={() => { setEditingPlaybookId(p.id); }} className="rounded-[8px] border border-[#E5E7EB] px-2 py-1 text-sm">Edit</button>
                                      <button onClick={() => duplicatePlaybook(p.id)} className="rounded-[8px] border border-[#E5E7EB] px-2 py-1 text-sm">Duplicate</button>
                                      <button onClick={() => deletePlaybook(p.id)} className="rounded-[8px] border border-[#FECACA] px-2 py-1 text-sm text-[#B91C1C]">Delete</button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            {editingPlaybookId ? (
                              (() => {
                                const p = playbooks.find((x) => x.id === editingPlaybookId)!;
                                return (
                                  <div className="space-y-4">
                                    <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-4">
                                      <div className="flex items-center justify-between">
                                        <input value={p.title} onChange={(e) => updatePlaybook(p.id, { title: e.target.value })} className="text-lg font-semibold w-full rounded-md border border-transparent px-2 py-1" />
                                        <div className="flex gap-2 ml-4">
                                          <button onClick={() => { setEditingPlaybookId(null); }} className="rounded-[8px] border border-[#E5E7EB] px-3 py-1 text-sm">Done</button>
                                        </div>
                                      </div>

                                      <div className="mt-4 overflow-auto">
                                        <div className="flex items-center gap-2">
                                          {p.steps.map((s, i) => (
                                            <div key={i} className="flex items-center">
                                              <div className="rounded-[8px] border border-[#E5E7EB] bg-white px-3 py-2 min-w-[160px]">
                                                <input value={s} onChange={(e) => updateStep(p.id, i, e.target.value)} className="w-full text-sm" />
                                                <div className="mt-2 flex gap-1">
                                                  <button onClick={() => addStep(p.id, i)} className="text-xs rounded px-2 py-1 border border-[#E5E7EB]">+ Add after</button>
                                                  <button onClick={() => removeStep(p.id, i)} className="text-xs rounded px-2 py-1 border border-[#FECACA] text-[#B91C1C]">Remove</button>
                                                </div>
                                              </div>
                                              {i < p.steps.length - 1 && (
                                                <div className="mx-2 flex items-center">
                                                  <svg width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 5l7 7-7 7" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                </div>
                                              )}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-4">
                                      <p className="text-sm text-[#64748B]">Preview</p>
                                      <div className="mt-3 flex items-center gap-3 overflow-auto">
                                        {p.steps.map((s, i) => (
                                          <div key={i} className="flex items-center">
                                            <div className="rounded-[8px] bg-[#F8FAFB] px-4 py-2 text-sm">{s}</div>
                                            {i < p.steps.length - 1 && (
                                              <svg className="mx-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 5l7 7-7 7" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })()
                            ) : (
                              <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-6">
                                <p className="text-sm text-[#64748B]">Select a playbook to edit or create a new one.</p>
                                <div className="mt-4">
                                  <div className="flex gap-2">
                                    <button onClick={() => { if (playbooks[0]) setEditingPlaybookId(playbooks[0].id); }} className="rounded-[8px] border border-[#E5E7EB] px-3 py-2 text-sm">Edit first</button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Skills" && (
                      <div className="space-y-6">
                        <div className="flex flex-col gap-4 rounded-[24px] border border-[#E5E7EB] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-sm font-semibold text-[#111827]">Skills</p>
                            <p className="mt-2 text-sm text-[#6B7280]">Choose the actions your AI Employee can perform.</p>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => setSkills(skills.map(s => ({ ...s, enabled: true, status: 'Active' })))} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Enable All</button>
                            <button onClick={() => setSkills(skills.map(s => ({ ...s, enabled: false, status: 'Disabled' })))} className="rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm font-semibold">Disable All</button>
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                          {skills.map((sk) => (
                            <div key={sk.id} className="flex items-start gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                              <div className="h-12 w-12 rounded-md bg-[#F8FAFB] flex items-center justify-center text-2xl">{sk.icon}</div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <p className="text-sm font-semibold">{sk.name}</p>
                                    <p className="mt-1 text-xs text-[#64748B]">{sk.description}</p>
                                  </div>
                                  <div className="text-right">
                                    <div className="inline-flex items-center gap-2">
                                      <p className={`text-xs font-medium ${sk.status === 'Active' ? 'text-[#16A34A]' : sk.status === 'Idle' ? 'text-[#F59E0B]' : 'text-[#B91C1C]'}`}>{sk.status}</p>
                                      <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" checked={sk.enabled} onChange={() => toggleSkill(sk.id)} className="sr-only peer" />
                                        <div className="w-11 h-6 bg-[#E5E7EB] peer-checked:bg-[#22C55E] rounded-full peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors" />
                                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full peer-checked:translate-x-5 transform transition-transform" />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Policies" && (
                      <div className="space-y-6">
                        <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
                          <p className="text-sm font-semibold text-[#111827]">Policies</p>
                          <p className="mt-3 text-sm text-[#6B7280]">Set what your AI Employee can and cannot do for your business.</p>
                        </div>

                        <div className="space-y-2">
                          {policySections.map((sec) => (
                            <div key={sec.id} className="rounded-[16px] border border-[#E5E7EB] bg-white">
                              <button onClick={() => togglePolicy(sec.id)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                                <div>
                                  <p className="text-sm font-semibold">{sec.title}</p>
                                  <p className="text-xs text-[#94A3B8]">Click to expand and edit</p>
                                </div>
                                <div className="text-xs text-[#64748B]">{sec.expanded ? 'Collapse' : 'Expand'}</div>
                              </button>
                              {sec.expanded && (
                                <div className="px-4 pb-4">
                                  <textarea value={sec.content} onChange={(e) => updatePolicyContent(sec.id, e.target.value)} className="mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[120px]" />
                                  <div className="mt-2 flex justify-end gap-2">
                                    <button onClick={() => togglePolicy(sec.id)} className="rounded-[8px] border border-[#E5E7EB] px-3 py-2 text-sm">Done</button>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Integrations" && (
                      <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#166534]"><Plug className="h-5 w-5" /></div>
                          <div>
                            <p className="text-lg font-semibold text-[#111827]">Connect your AI’s tools</p>
                            <p className="mt-1 text-sm leading-6 text-[#64748B]">Give your AI Employee access to the systems it needs to serve customers well.</p>
                          </div>
                        </div>
                        <div className="mt-5 flex flex-wrap items-center gap-3 rounded-xl border border-[#FEF3C7] bg-[#FFFBEB] p-4 text-sm text-[#92400E]">
                          <CircleAlert className="h-4 w-4 shrink-0" />
                          <span className="flex-1">Some tools still need to be connected.</span>
                          <button type="button" onClick={() => setSelected("Integrations")} className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#92400E] shadow-sm transition hover:bg-[#FEF3C7]">Manage integrations</button>
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Test AI" && (
                      <div className="space-y-6">
                        <section className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]" aria-label="AI knowledge test">
                          <div className="flex items-start gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#166534]"><Bot className="h-5 w-5" /></span><div><p className="text-base font-semibold text-[#111827]">Ask your AI</p><p className="mt-1 text-sm text-[#64748B]">Test how your AI uses the knowledge you have configured, then see exactly why it answered that way.</p></div></div>
                          <div className="mt-5 flex flex-col gap-2 sm:flex-row"><input value={testAiInput} onChange={(event) => setTestAiInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") sendTestAiMessage(); }} placeholder="Ask a customer question" className="h-11 min-w-0 flex-1 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-sm outline-none transition focus:border-[#22C55E] focus:bg-white focus:ring-4 focus:ring-[#DCFCE7]/70" /><button type="button" onClick={sendTestAiMessage} className="rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]">Ask AI</button></div>
                          <div className="mt-3 flex flex-wrap gap-2">{["Do you offer installation?", "What are your prices?", "Can I pay with M-Pesa?"].map((question) => <button key={question} type="button" onClick={() => setTestAiInput(question)} className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-[#475569] transition hover:border-[#86EFAC] hover:bg-[#ECFDF5] hover:text-[#166534]">{question}</button>)}</div>
                          <div className="mt-5 grid gap-3 border-t border-[#EEF2F6] pt-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]"><div className="rounded-xl bg-[#F8FAFC] p-4"><p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">AI answer</p><p className="mt-2 text-sm leading-6 text-[#111827]">{testAiExplanation.answer}</p></div><div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1"><div className="rounded-lg border border-[#BBF7D0] bg-[#F7FEF9] p-3"><p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#166534]">Confidence</p><p className="mt-1 text-sm font-semibold text-[#111827]">{testAiExplanation.confidence}%</p></div><div className="rounded-lg border border-[#E2E8F0] bg-white p-3"><p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#64748B]">Knowledge source</p><p className="mt-1 text-xs font-semibold text-[#111827]">{testAiExplanation.source}</p></div></div></div>
                          <div className="mt-3 grid gap-3 sm:grid-cols-2"><div className="rounded-lg border border-[#FEF3C7] bg-[#FFFBEB] p-3"><p className="text-xs font-semibold text-[#92400E]">Missing information</p><p className="mt-1 text-xs leading-5 text-[#92400E]">{testAiExplanation.missing}</p></div><div className="rounded-lg border border-[#BFDBFE] bg-[#EFF6FF] p-3"><p className="text-xs font-semibold text-[#1D4ED8]">Suggested improvement</p><p className="mt-1 text-xs leading-5 text-[#1D4ED8]">{testAiExplanation.improvements}</p></div></div>
                        </section>
                        <div className="flex flex-col gap-4 rounded-[24px] border border-[#E5E7EB] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-sm font-semibold text-[#111827]">Test your AI Employee</p>
                            <p className="mt-2 text-sm text-[#6B7280]">Run mock conversations and review AI analysis.</p>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => createConversation()} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">New Conversation</button>
                          </div>
                        </div>

                        <div className="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
                          <div>
                            <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-4">
                              <p className="text-sm font-semibold">Conversations</p>
                              <div className="mt-3 space-y-2">
                                {conversations.map((c) => (
                                  <button key={c.id} onClick={() => setSelectedConversationId(c.id)} className={`w-full text-left rounded-[8px] p-3 ${selectedConversationId === c.id ? 'bg-[#ECFDF5] border border-[#22C55E]' : 'bg-white border border-[#EEF2F6]'}`}>
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <p className="text-sm font-semibold">{c.title}</p>
                                        <p className="text-xs text-[#64748B] truncate">{c.messages[c.messages.length - 1]?.text || 'No messages yet'}</p>
                                      </div>
                                      <div className="text-xs text-[#94A3B8]">{c.messages.length}</div>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4">
                              <p className="text-sm font-semibold">Suggested prompts</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {SAMPLE_PROMPTS.map((p) => (
                                  <button key={p} onClick={() => { if (selectedConversationId) simulateAiResponse(selectedConversationId, p); else { createConversation('New'); setTimeout(()=> simulateAiResponse(conversations[0]?.id ?? '', p),100); } }} className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-sm">{p}</button>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold">Chat</p>
                                <div className="text-xs text-[#94A3B8]">{conversations.find(c=>c.id===selectedConversationId)?.title}</div>
                              </div>

                              <div className="mt-3 max-h-[320px] overflow-auto space-y-3">
                                {(conversations.find(c=>c.id===selectedConversationId)?.messages ?? []).map((m) => (
                                  <div key={m.id} className={`rounded-[12px] p-3 ${m.role === 'ai' ? 'bg-[#F8FAFB]' : 'bg-[#ECFDF5] text-right'}`}>
                                    <p className="text-xs text-[#64748B]">{m.role === 'ai' ? 'AI' : 'You'}</p>
                                    <p className="mt-1 text-sm">{m.text}</p>
                                    <p className="mt-1 text-xs text-[#94A3B8]">{m.time}</p>
                                  </div>
                                ))}
                              </div>

                              <div className="mt-4">
                                <div className="flex gap-2">
                                  <input value={inputText} onChange={(e)=>setInputText(e.target.value)} placeholder="Type a test prompt" className="flex-1 rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                  <button onClick={() => { if (selectedConversationId && inputText.trim()) simulateAiResponse(selectedConversationId, inputText.trim()); }} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Send</button>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                              <p className="text-sm font-semibold">AI Analysis</p>
                              {aiAnalysis ? (
                                <div className="mt-3 text-sm text-[#475569] space-y-2">
                                  <p><span className="font-semibold">Intent:</span> {aiAnalysis.intent}</p>
                                  <p><span className="font-semibold">Confidence:</span> {aiAnalysis.confidence}</p>
                                  <p><span className="font-semibold">Knowledge Used:</span> {aiAnalysis.knowledgeUsed.join(', ')}</p>
                                  <p><span className="font-semibold">Suggested Actions:</span> {aiAnalysis.suggestedActions.join(', ')}</p>
                                  <p><span className="font-semibold">Response Time:</span> {aiAnalysis.responseTime}</p>
                                  <p><span className="font-semibold">Generated Reply:</span> {aiAnalysis.generatedReply}</p>
                                  <p><span className="font-semibold">Knowledge Sources:</span> {aiAnalysis.knowledgeSources.join(', ')}</p>
                                </div>
                              ) : (
                                <p className="mt-3 text-sm text-[#94A3B8]">No analysis yet. Send a prompt to generate a mock response and analysis.</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Performance" && (
                      <div className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                          {PERFORMANCE_METRICS.slice(0, 4).map((metric) => (
                            <div key={metric.label} className="rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                              <div className="flex items-center justify-between gap-3">
                                <p className="text-sm font-semibold text-[#111827]">{metric.label}</p>
                                <span className="rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#16A34A]">{metric.delta}</span>
                              </div>
                              <p className="mt-5 text-3xl font-semibold text-[#111827]">{metric.value}</p>
                              <div className="mt-5 flex items-center gap-2">
                                {metric.trend.map((point, index) => (
                                  <div key={index} className="h-2 rounded-full bg-[#22C55E]" style={{ width: `${Math.max(8, point)}%` }} />
                                ))}
                              </div>
                              <div className="mt-4 h-2 w-full rounded-full bg-[#E5E7EB]">
                                <div className="h-2 rounded-full bg-[#22C55E]" style={{ width: `${metric.progress}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="grid gap-4 xl:grid-cols-4">
                          {PERFORMANCE_METRICS.slice(4).map((metric) => (
                            <div key={metric.label} className="rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                              <div className="flex items-center justify-between gap-3">
                                <p className="text-sm font-semibold text-[#111827]">{metric.label}</p>
                                <span className="text-sm text-[#6B7280]">{metric.delta}</span>
                              </div>
                              <p className="mt-5 text-3xl font-semibold text-[#111827]">{metric.value}</p>
                              <div className="mt-4 h-2 w-full rounded-full bg-[#E5E7EB]">
                                <div className="h-2 rounded-full bg-[#2563EB]" style={{ width: `${metric.progress}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
                          <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-sm font-semibold text-[#111827]">Knowledge Usage</p>
                                <p className="mt-2 text-sm text-[#6B7280]">How often the AI referred to internal knowledge sources.</p>
                              </div>
                              <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#6B7280]">Mock data</span>
                            </div>
                            <div className="mt-6 space-y-4">
                              {KNOWLEDGE_USAGE.map((item) => (
                                <div key={item.label}>
                                  <div className="flex items-center justify-between text-sm text-[#475569]">
                                    <span>{item.label}</span>
                                    <span>{item.percent}%</span>
                                  </div>
                                  <div className="mt-2 h-2 w-full rounded-full bg-[#E5E7EB]">
                                    <div className="h-2 rounded-full bg-[#2563EB]" style={{ width: `${item.percent}%` }} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="grid gap-4">
                            <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                              <p className="text-sm font-semibold text-[#111827]">Top Questions</p>
                              <p className="mt-2 text-sm text-[#6B7280]">Most asked questions this week.</p>
                              <div className="mt-4 space-y-3">
                                {PERFORMANCE_TOP_QUESTIONS.map((question) => (
                                  <div key={question} className="rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFB] px-4 py-3 text-sm text-[#111827]">{question}</div>
                                ))}
                              </div>
                            </div>

                            <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                              <p className="text-sm font-semibold text-[#111827]">Most Viewed Products</p>
                              <p className="mt-2 text-sm text-[#6B7280]">Products the AI referenced most in conversations.</p>
                              <div className="mt-4 space-y-3">
                                {MOST_VIEWED_PRODUCTS.map((product) => (
                                  <div key={product.name}>
                                    <div className="flex items-center justify-between text-sm text-[#475569]">
                                      <span>{product.name}</span>
                                      <span className="font-semibold text-[#111827]">{product.views}</span>
                                    </div>
                                    <div className="mt-2 h-2 w-full rounded-full bg-[#E5E7EB]">
                                      <div className="h-2 rounded-full bg-[#22C55E]" style={{ width: `${Math.min(100, (product.views / 512) * 100)}%` }} />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-semibold text-[#111827]">Recent AI Activity</p>
                              <p className="mt-2 text-sm text-[#6B7280]">Timeline of the latest AI Employee actions.</p>
                            </div>
                          </div>
                          <div className="mt-6 space-y-4">
                            {RECENT_AI_ACTIVITY.map((activity) => (
                              <div key={activity.title} className="rounded-[20px] border border-[#F3F4F6] bg-[#F8FAFB] p-4">
                                <div className="flex items-center justify-between gap-2">
                                  <div>
                                    <p className="text-sm font-semibold text-[#111827]">{activity.title}</p>
                                    <p className="text-xs text-[#6B7280]">{activity.type}</p>
                                  </div>
                                  <p className="text-xs text-[#94A3B8]">{activity.time}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                </main>
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
                      {ANALYTICS_TOP_QUESTIONS.map((item) => (
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
          {selected === "Integrations" && (
            <div className="h-full overflow-y-auto overflow-x-hidden space-y-6 pr-2">
              <div className={`${CARD}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">
                      Integrations
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#111827]">
                      Integrations
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl">
                      Connect the systems your AI Employee can access across your business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Readiness summary card */}
              <div className={`${CARD} flex items-center justify-between gap-6`}> 
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    {/* Circular progress */}
                    {(() => {
                      const totalIntegrations = INTEGRATION_SECTIONS.reduce((a, s) => a + s.items.length, 0);
                      const connectedCount = Object.values(integrationStates).filter((v) => v.status === "Connected").length;
                      const percent = totalIntegrations === 0 ? 0 : Math.round((connectedCount / totalIntegrations) * 100);
                      const radius = 36;
                      const circumference = 2 * Math.PI * radius;
                      const offset = Math.max(0, circumference * (1 - percent / 100));

                      return (
                        <div className="flex items-center gap-4">
                          <svg width="88" height="88" viewBox="0 0 88 88">
                            <defs />
                            <g transform="translate(44,44)">
                              <circle r={radius} stroke="#F3F4F6" strokeWidth="8" fill="none" />
                              <circle
                                r={radius}
                                stroke="#22C55E"
                                strokeWidth="8"
                                strokeLinecap="round"
                                fill="none"
                                strokeDasharray={circumference}
                                strokeDashoffset={offset}
                                transform="rotate(-90)"
                                style={{ transition: "stroke-dashoffset 300ms ease-out" }}
                              />
                              <text x="0" y="4" textAnchor="middle" className="text-[20px] font-semibold" fill="#0F172A">
                                {percent}%
                              </text>
                            </g>
                          </svg>
                        </div>
                      );
                    })()}

                    <div>
                      <p className="text-sm font-semibold">AI Employee Readiness</p>
                      <p className="mt-1 text-sm text-[#6B7280]">Connected integrations and capability readiness</p>
                      <div className="mt-3 grid grid-cols-4 gap-3 text-sm">
                        {(() => {
                          const sectionsForMetrics: { label: string; reqs: string[] }[] = [
                            { label: "Communication", reqs: ["whatsapp", "facebook", "instagram", "telegram", "email"] },
                            { label: "Payments", reqs: ["mpesa", "stripe", "paypal", "flutterwave"] },
                            { label: "Knowledge", reqs: ["gdrive", "dropbox", "onedrive"] },
                            { label: "Scheduling", reqs: ["google_calendar", "outlook"] },
                          ];

                          return sectionsForMetrics.map((m) => {
                            const connected = m.reqs.filter((r) => (integrationStates[r] || { status: "Not Connected" }).status === "Connected").length;
                            const status = connected === 0 ? "Missing" : connected < m.reqs.length ? "Partial" : "Ready";
                            const statusClass = status === "Ready" ? "text-[#16A34A]" : status === "Partial" ? "text-[#B45309]" : "text-[#B91C1C]";
                            return (
                              <div key={m.label} className="flex flex-col items-start">
                                <span className="text-xs text-[#6B7280]">{m.label}</span>
                                <span className={`text-sm font-semibold ${statusClass}`}>{status}</span>
                              </div>
                            );
                          });
                        })()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-auto text-right">
                  <div className="text-sm text-[#6B7280]">Connected integrations</div>
                  <div className="text-2xl font-semibold">{Object.values(integrationStates).filter((v) => v.status === "Connected").length} / {INTEGRATION_SECTIONS.reduce((a, s) => a + s.items.length, 0)}</div>
                  <div className="mt-2 text-sm text-[#6B7280]">AI capabilities unlocked</div>
                  <div className="text-2xl font-semibold">{CAPABILITY_FEATURES.filter((cap) => cap.requires.every((r) => (integrationStates[r] || { status: "Not Connected" }).status === "Connected")).length}</div>
                </div>
              </div>

              {INTEGRATION_SECTIONS.map((section) => (
                <div key={section.section}>
                  <h3 className="text-sm font-semibold text-[#6B7280] mb-3">{section.section}</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {section.items.map((it) => {
                      const state = integrationStates[it.id] || { status: it.status };

                      const isConnected = state.status === "Connected";
                      const isComing = state.status === "Coming Soon" || state.status === "ComingSoon";
                      const isDisconnected = !isConnected && !isComing;

                      const badgeClass = isConnected
                        ? "border-[#A7F3D0] bg-[#ECFDF5] text-[#166534]"
                        : isComing
                        ? "border-[#E9D5FF] bg-[#F5F3FF] text-[#6D28D9]"
                        : "border-[#F3F4F6] bg-[#F3F4F6] text-[#6B7280]";

                      const iconWrapClass = isConnected
                        ? "h-12 w-12 rounded-[12px] bg-[#ECFDF5] flex items-center justify-center text-[#166534]"
                        : isComing
                        ? "h-12 w-12 rounded-[12px] bg-[#F9FAFB] flex items-center justify-center text-[#94A3B8] opacity-80"
                        : "h-12 w-12 rounded-[12px] bg-[#F3F4F6] flex items-center justify-center text-[#9CA3AF]";

                      const cardStateClass = isComing ? "opacity-70 grayscale" : "opacity-100";

                      const onConnect = () => {
                        if (isComing) return;
                        setConnectModalId(it.id);
                        setConnectForm({ email: "", businessName: "", phone: "" });
                        setConnectModalOpen(true);
                      };

                      const onManage = () => {
                        openDrawer(it.id);
                      };

                      return (
                        <div
                          key={it.id}
                          className={`${CARD} flex flex-col justify-between ${cardStateClass} transition-all duration-300 ease-out transform-gpu`}
                        >
                          <div>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-center gap-4">
                                <div className={iconWrapClass}>
                                  <it.Icon className={`h-6 w-6 ${isDisconnected ? "opacity-60" : ""}`} />
                                </div>
                                <div>
                                  <p className={`text-sm font-semibold ${isComing ? "text-[#6B7280]" : "text-[#111827]"}`}> {it.name}</p>
                                  <p className="mt-1 text-sm text-[#6B7280]">{it.description}</p>
                                  {isConnected && (
                                    <div className="mt-2 flex items-center gap-3 text-sm text-[#6B7280]">
                                      <span className="inline-flex items-center gap-2 text-[13px] text-[#374151]">
                                        <Check className="h-4 w-4 text-[#16A34A]" /> {state.accountName}
                                      </span>
                                      <span className="text-[12px] text-[#94A3B8]">Last synced {state.lastSynced}</span>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div>
                                <span className={`${BADGE} ${badgeClass} ${isComing ? "text-[11px]" : ""}`}>
                                  {isConnected ? (
                                    <span className="inline-flex items-center gap-2"><Check className="h-3 w-3 text-[#16A34A]" /> Connected</span>
                                  ) : isComing ? (
                                    <span>Coming Soon</span>
                                  ) : (
                                    <span>Disconnected</span>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <div className="transition-all duration-250 ease-out transform">
                              {isConnected && (
                                <>
                                  <button onClick={onManage} className={`${BUTTON_SECONDARY} w-full`}>Manage</button>
                                </>
                              )}

                              {isDisconnected && (
                                <button onClick={onConnect} className={`${BUTTON_PRIMARY} w-full`}>Connect</button>
                              )}

                              {isComing && (
                                <button className={`${BUTTON_TERTIARY} w-full opacity-60 pointer-events-none`}>Coming Soon</button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-[#6B7280] mb-3">What your AI Employee can do</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {CAPABILITY_FEATURES.map((cap) => {
                    const missing = cap.requires.filter((r) => (integrationStates[r] || { status: "Not Connected" }).status !== "Connected");
                    const enabled = missing.length === 0;
                    const badgeClass = enabled ? "border-[#A7F3D0] bg-[#ECFDF5] text-[#166534]" : "border-[#F3F4F6] bg-[#F3F4F6] text-[#6B7280]";

                    return (
                      <div key={cap.id} className={`${AI_WORKSPACE_SUBTLE}`}> 
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-[#111827]">{cap.title}</p>
                            <p className="mt-1 text-sm text-[#6B7280]">Requires: {cap.requires.map((r) => getIntegrationName(r)).join(", ")}</p>
                          </div>
                          <div>
                            <span className={`${BADGE} ${badgeClass}`}>{enabled ? "Enabled" : "Disabled"}</span>
                          </div>
                        </div>

                        {!enabled && (
                          <div className="mt-4 text-sm text-[#374151]">
                            <p className="font-medium mb-2">Missing integrations</p>
                            <ul className="list-none space-y-2">
                              {missing.map((mid) => (
                                <li key={mid} className="flex items-center gap-3">
                                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#FEE2E2] text-[#B91C1C]">×</span>
                                  <span>{getIntegrationName(mid)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              {connectModalOpen && connectModalId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/40" onClick={() => setConnectModalOpen(false)} />
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`${GLOBAL_RADIUS} bg-white p-6 z-10 w-full max-w-md transform transition-all duration-200 ease-out shadow-lg scale-100`}
                    role="dialog"
                    aria-modal="true"
                  >
                    <h3 className="text-lg font-semibold mb-1">Connect {getIntegrationName(connectModalId)}</h3>
                    <p className="text-sm text-[#6B7280] mb-4">Connect your {getIntegrationName(connectModalId)} account.</p>

                    <label className="text-sm font-medium">Account Email</label>
                    <input
                      type="email"
                      value={connectForm.email}
                      onChange={(e) => setConnectForm((s) => ({ ...s, email: e.target.value }))}
                      className={INPUT_FIELD_WHITE}
                      placeholder="you@business.com"
                    />

                    <label className="mt-3 text-sm font-medium">Business Name</label>
                    <input
                      type="text"
                      value={connectForm.businessName}
                      onChange={(e) => setConnectForm((s) => ({ ...s, businessName: e.target.value }))}
                      className={INPUT_FIELD_WHITE}
                      placeholder="Business Name"
                    />

                    <label className="mt-3 text-sm font-medium">Phone Number</label>
                    <input
                      type="tel"
                      value={connectForm.phone}
                      onChange={(e) => setConnectForm((s) => ({ ...s, phone: e.target.value }))}
                      className={INPUT_FIELD_WHITE}
                      placeholder="+254 7xx xxx xxx"
                    />

                    <div className="mt-4 flex justify-end gap-3">
                      <button onClick={() => setConnectModalOpen(false)} className={BUTTON_TERTIARY}>
                        Cancel
                      </button>
                      <button onClick={handleModalConnect} className={BUTTON_PRIMARY}>
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {drawerOpen && drawerIntegrationId && (
                <div className="fixed inset-0 z-40 pointer-events-none">
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={closeDrawer} />
                  <aside className="pointer-events-auto fixed right-0 top-0 h-full w-[420px] z-50 bg-white shadow-lg transform transition-transform duration-200 ease-out">
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-[12px] bg-[#F3F4F6] flex items-center justify-center text-[#111827]">
                            {/* icon */}
                            {(() => {
                              const id = drawerIntegrationId as string;
                              for (const s of INTEGRATION_SECTIONS) {
                                const found = s.items.find((i) => i.id === id);
                                if (found) return <found.Icon className="h-6 w-6" />;
                              }
                              return null;
                            })()}
                          </div>
                          <div>
                            <p className="text-lg font-semibold">{getIntegrationName(drawerIntegrationId)}</p>
                            <p className="text-sm text-[#6B7280]">{(integrationStates[drawerIntegrationId] || {}).accountName || "Connected account"}</p>
                          </div>
                        </div>
                        <button onClick={closeDrawer} className="rounded-full p-2 text-[#6B7280] hover:bg-[#F3F4F6]">
                          <X className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="mt-4 rounded-md border border-[#E5E7EB] p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium">Connection status</span>
                            <span className="text-sm text-[#6B7280]">{(integrationStates[drawerIntegrationId] || {}).status}</span>
                          </div>
                          <div className="text-sm text-[#94A3B8]">Last sync: {(integrationStates[drawerIntegrationId] || {}).lastSynced || "—"}</div>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <button onClick={() => handleReconnect(drawerIntegrationId as string)} className={BUTTON_TERTIARY}>Reconnect</button>
                          <button onClick={() => handleDisconnect(drawerIntegrationId as string)} className={BUTTON_SECONDARY}>Disconnect</button>
                          <button onClick={() => handleSyncNow(drawerIntegrationId as string)} className={BUTTON_PRIMARY}>Sync Now</button>
                        </div>
                      </div>

                      <div className="mt-6 flex-1 overflow-y-auto">
                        <p className="text-sm font-semibold text-[#111827] mb-3">Permissions granted</p>
                        <ul className="space-y-2">
                          {(INTEGRATION_CAPABILITIES[drawerIntegrationId as string] || []).map((cap) => (
                            <li key={cap} className="flex items-center gap-3 text-sm text-[#374151]">
                              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#ECFDF5] text-[#16A34A]">✓</span>
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>
              )}
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
                      This information is used by your AI Employee when
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
