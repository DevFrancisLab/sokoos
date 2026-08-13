import { type ChangeEvent, type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import {
  Home,
  Inbox,
  Cpu,
  Globe,
  Megaphone,
  Activity,
  Bot,
  Settings,
  Smile,
  Paperclip,
  Image,
  Send,
  MessageCircle,
  Calendar,
  Box,
  Phone,
  Tag,
  Check,
  Plus,
  User,
  BookOpen,
  Package,
  Target,
  Sparkles,
  Shield,
  Plug,
  BarChart3,
  CircleAlert,
  MapPin,
  MoreVertical,
  LayoutGrid,
  List,
  X,
  ChevronRight,
  ChevronLeft,
  Clock,
  Menu,
  Search,
  ChevronDown,
  Upload,
  MessageSquareText,
  LogOut,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { KnowledgeWorkspace } from "@/components/knowledge-workspace";
import { HomeWorkspace } from "@/components/dashboard/home/home-workspace";
import { InboxWorkspace } from "@/components/dashboard/inbox/inbox-workspace";
import { CustomersWorkspace } from "@/components/dashboard/customers/customers-workspace";
import { PerformanceWorkspace } from "@/components/dashboard/ai-employee/performance/performance-workspace";
import { AccountSettings } from "@/components/dashboard/account-settings";
import { getMockUser, signOutMock } from "@/lib/auth";
import EditProfileDialog from "@/components/dashboard/edit-profile-dialog";
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
    label: "Customers",
    href: "/dashboard/customers",
    Icon: User,
  },

  {
    label: "AI Employee",
    Icon: Bot,
    children: [
      {
        label: "Training",
        href: "/dashboard/ai",
        Icon: Cpu,
      },
      {
        label: "Performance",
        href: "/dashboard/performance",
        Icon: Activity,
      },
    ],
  },

  // {
  //   label: "Growth Pages",
  //   href: "/dashboard/pages",
  //   Icon: Globe,
  // },

  // {
  //   label: "Marketing",
  //   href: "/dashboard/marketing",
  //   Icon: Megaphone,
  // },
  // {
  //   label: "Integrations",
  //   href: "/dashboard/integrations",
  //   Icon: Cpu,
  // },

];
const STAT_CARDS = [
  { label: "Messages Today", value: "1,284", delta: "+18%" },
  { label: "AI Responses", value: "912", delta: "+24%" },
  { label: "Team Takeovers", value: "72", delta: "-4%" },
  { label: "New Leads", value: "38", delta: "+11%" },
];

type SidebarUser = { id: string; name: string; email?: string; avatarUrl?: string };

type ProfileMenuProps = {
  user: SidebarUser;
  onEditProfile: () => void;
  onAccountSettings: () => void;
  onLogout: () => void;
  variant?: "compact" | "card";
  onOpenChange?: (open: boolean) => void;
};

function ProfileMenu({ user, onEditProfile, onAccountSettings, onLogout, variant = "card", onOpenChange }: ProfileMenuProps) {
  const initials = user.name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((segment) => segment[0])
    .join("")
    .toUpperCase();

  const trigger =
    variant === "compact" ? (
      <button
        type="button"
        title={user.name}
        className="relative mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition hover:bg-[#E5E7EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        <Avatar className="h-9 w-9 rounded-full bg-[#FFFFFF] text-[#111827] shadow-sm">
          {user.avatarUrl ? <AvatarImage src={user.avatarUrl} alt={user.name} /> : <AvatarFallback>{initials}</AvatarFallback>}
        </Avatar>
      </button>
    ) : (
      <button
        type="button"
        title={user.name}
        aria-label={`Open profile menu for ${user.name}`}
        className="mt-4 flex w-full items-center gap-3 rounded-[24px] border border-[#E5E7EB] bg-white p-3 text-left shadow-sm transition hover:bg-[#F9FAFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        <Avatar className="h-11 w-11 rounded-full bg-[#F8FAFC] text-[#111827]">
          {user.avatarUrl ? <AvatarImage src={user.avatarUrl} alt={user.name} /> : <AvatarFallback>{initials}</AvatarFallback>}
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-[#111827]">{user.name}</p>
          {user.email ? <p className="truncate text-xs text-[#64748B]">{user.email}</p> : null}
        </div>
        <ChevronRight className="h-4 w-4 text-[#94A3B8]" />
      </button>
    );

  const handleOpenChange = (nextOpen: boolean) => {
    onOpenChange?.(nextOpen);
  };

  return (
    <DropdownMenu onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={variant === "compact" ? "right" : "top"}
        align={variant === "compact" ? "start" : "start"}
        className="w-72 rounded-[24px] border border-[#E5E7EB] bg-white shadow-sm z-60"
      >
        <div className="rounded-t-[20px] border-b border-[#E5E7EB] bg-[#F8FAFC] p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-11 w-11 rounded-full bg-white text-[#111827] shadow-sm">
              {user.avatarUrl ? <AvatarImage src={user.avatarUrl} alt={user.name} /> : <AvatarFallback>{initials}</AvatarFallback>}
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[#111827]">{user.name}</p>
              {user.email ? <p className="truncate text-xs text-[#64748B]">{user.email}</p> : null}
            </div>
          </div>
        </div>
        <DropdownMenuSeparator className="bg-[#E5E7EB]" />
        <DropdownMenuItem
          onSelect={onEditProfile}
          className="gap-3 px-4 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#ECFDF5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <User className="h-4 w-4 text-[#16A34A]" />
          <span>Edit profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={onAccountSettings}
          className="gap-3 px-4 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#ECFDF5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <Settings className="h-4 w-4 text-[#16A34A]" />
          <span>Account settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-[#E5E7EB]" />
        <DropdownMenuItem
          onSelect={onLogout}
          className="gap-3 px-4 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#ECFDF5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <LogOut className="h-4 w-4 text-[#16A34A]" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

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

const BUSINESS_INDUSTRY_OPTIONS = [
  "Restaurant",
  "Retail Shop",
  "Hardware Store",
  "Electronics Store",
  "Pharmacy",
  "Salon",
  "Clinic",
  "School",
  "ISP",
  "Real Estate",
  "Hotel",
  "Agency",
  "Manufacturer",
  "Wholesaler",
  "Other",
];

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

const calculateCatalogueHealthConfidence = (metrics: Array<{ percentage: number }>) => {
  if (metrics.length === 0) return 0;
  return Math.round(metrics.reduce((sum, item) => sum + item.percentage, 0) / metrics.length);
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

// Small card variant used across integration lists
const SMALL_CARD = "rounded-[24px] border border-[#E5E7EF] bg-white p-4";
const ICON_WRAP_AVAILABLE = "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#166534]";
const ICON_WRAP_DEFAULT = "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F3F4F6] text-[#9CA3AF]";

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
    section: "Channels",
    items: [
      {
        id: "whatsapp",
        name: "WhatsApp Business",
        Icon: MessageCircle,
        description: "Allow Sokoos AI to reply to customers directly inside WhatsApp.",
        status: "connected",
      },
      {
        id: "facebook",
        name: "Facebook Messenger",
        Icon: MessageCircle,
        description: "Allow Sokoos AI to reply to customers on Facebook Messenger.",
        status: "available",
      },
      {
        id: "instagram",
        name: "Instagram",
        Icon: Image,
        description: "Allow Sokoos AI to respond to Instagram messages and DMs.",
        status: "available",
      },
      {
        id: "telegram",
        name: "Telegram",
        Icon: Send,
        description: "Allow Sokoos AI to manage Telegram conversations.",
        status: "available",
      },
      {
        id: "email",
        name: "Email",
        Icon: Send,
        description: "Allow Sokoos AI to read and send business emails.",
        status: "connected",
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
        status: "available",
      },
      {
        id: "stripe",
        name: "Stripe",
        Icon: Tag,
        description: "Allow the AI to generate payment links.",
        status: "available",
      },
      {
        id: "paypal",
        name: "PayPal",
        Icon: Tag,
        description: "Allow the AI to generate PayPal payment links.",
        status: "available",
      },
      {
        id: "flutterwave",
        name: "Flutterwave",
        Icon: Globe,
        description: "Allow the AI to process payments across Africa and generate payment links.",
        status: "coming_soon",
      },
    ],
  },
  {
    section: "Business Tools",
    items: [
      {
        id: "shopify",
        name: "Shopify",
        Icon: Box,
        description: "Allow the AI to answer product questions using your store catalog.",
        status: "connected",
      },
      {
        id: "woocommerce",
        name: "WooCommerce",
        Icon: Box,
        description: "Allow the AI to access your WooCommerce product catalog and orders.",
        status: "available",
      },
      {
        id: "custom_api",
        name: "Custom Website API",
        Icon: Globe,
        description: "Allow the AI to query your site's product and order APIs.",
        status: "available",
      },
      {
        id: "google_business",
        name: "Google Business Profile",
        Icon: Globe,
        description: "Allow the AI to update and read your business profile and respond to reviews.",
        status: "available",
      },
      {
        id: "google_calendar",
        name: "Google Calendar",
        Icon: Calendar,
        description: "Allow the AI to schedule appointments.",
        status: "connected",
      },
      {
        id: "outlook",
        name: "Microsoft Outlook",
        Icon: Calendar,
        description: "Allow the AI to schedule meetings and manage business email/calendar.",
        status: "available",
      },
    ],
  },
  {
    section: "Communication & Marketing",
    items: [
      {
        id: "meta_ads",
        name: "Meta Ads",
        Icon: Megaphone,
        description: "Allow the AI to sync campaign data and create audiences.",
        status: "available",
      },
      {
        id: "google_ads",
        name: "Google Ads",
        Icon: Globe,
        description: "Allow the AI to pull campaign performance and recommend optimizations.",
        status: "available",
      },
      {
        id: "tiktok",
        name: "TikTok",
        Icon: Globe,
        description: "Allow the AI to manage TikTok ad campaigns and creatives.",
        status: "coming_soon",
      },
      {
        id: "mailchimp",
        name: "Mailchimp",
        Icon: Send,
        description: "Allow the AI to sync contact lists and send marketing campaigns.",
        status: "connected",
      },
      {
        id: "brevo",
        name: "Brevo",
        Icon: Send,
        description: "Allow the AI to send campaigns and sync contact lists.",
        status: "available",
      },
    ],
  },
  {
    section: "Data & Knowledge",
    items: [
      {
        id: "gdrive",
        name: "Google Drive",
        Icon: Paperclip,
        description: "Allow the AI to access business documents and knowledge files.",
        status: "connected",
      },
      {
        id: "dropbox",
        name: "Dropbox",
        Icon: Paperclip,
        description: "Allow the AI to access business documents stored in Dropbox.",
        status: "available",
      },
      {
        id: "onedrive",
        name: "OneDrive",
        Icon: Paperclip,
        description: "Allow the AI to access business documents stored in OneDrive.",
        status: "available",
      },
    ],
  },
  {
    section: "Review",
    items: [],
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

type IntegrationStatus = "connected" | "available" | "setup_required" | "coming_soon";

const normalizeIntegrationStatus = (status?: string): IntegrationStatus => {
  if (!status) return "available";
  const normalized = status.trim().toLowerCase().replace(/\s+/g, "_");
  switch (normalized) {
    case "connected":
      return "connected";
    case "coming_soon":
    case "comingsoon":
      return "coming_soon";
    case "setup_required":
      return "setup_required";
    case "not_connected":
    case "disconnected":
    case "available":
    default:
      return "available";
  }
};

const formatIntegrationStatusLabel = (status?: string) => {
  const normalized = normalizeIntegrationStatus(status);
  if (normalized === "connected") return "Connected";
  if (normalized === "available") return "Available";
  if (normalized === "setup_required") return "Setup required";
  if (normalized === "coming_soon") return "Coming soon";
  return "Available";
};

const ANALYTICS_CHART: { label: string; value: number }[] = [
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
  const [expandedNavItem, setExpandedNavItem] = useState<string | null>("AI Employee");
  const [selected, setSelected] = useState<string>("Home");
  const [integrationStates, setIntegrationStates] = useState<Record<string, { status: IntegrationStatus; accountName?: string; lastSynced?: string }>>(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem("sokoos.integrationStates") : null;
      if (raw) {
        const parsed = JSON.parse(raw) as Record<string, { status: string; accountName?: string; lastSynced?: string }>;
        const normalizedStates: Record<string, { status: IntegrationStatus; accountName?: string; lastSynced?: string }> = {};
        for (const [id, value] of Object.entries(parsed)) {
          normalizedStates[id] = {
            ...value,
            status: normalizeIntegrationStatus(value.status),
          };
        }
        return normalizedStates;
      }
    } catch (e) {
      // ignore
    }

    const map: Record<string, { status: IntegrationStatus; accountName?: string; lastSynced?: string }> = {};
    INTEGRATION_SECTIONS.forEach((section) => {
      section.items.forEach((it) => {
        map[it.id] = { status: normalizeIntegrationStatus(it.status) };
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
      [id]: { status: "available" },
    }));
    closeDrawer();
  };

  const handleSyncNow = (id: string) => {
    setIntegrationStates((s) => ({
      ...s,
      [id]: {
        ...(s[id] || {}),
        status: "connected",
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

  const getIntegrationDefaultStatus = (id: string): IntegrationStatus => {
    const item = INTEGRATION_SECTIONS.flatMap((section) => section.items).find((integration) => integration.id === id);
    return normalizeIntegrationStatus(item?.status);
  };

  const getIntegrationStatus = (id: string): IntegrationStatus => {
    return integrationStates[id]?.status ?? getIntegrationDefaultStatus(id);
  };

  const getIntegrationDisplayStatus = (id: string): string => {
    return formatStatusLabel(getIntegrationStatus(id));
  };

  const getAllIntegrationItems = () => INTEGRATION_SECTIONS.flatMap((section) => section.items);

  const getIntegrationSection = (sectionName: string) =>
    INTEGRATION_SECTIONS.find((section) => section.section === sectionName);

  const getIntegrationSectionItems = (sectionName: string) =>
    getIntegrationSection(sectionName)?.items ?? [];

  const getTotalIntegrations = () => getAllIntegrationItems().length;

  const getIntegrationStatusCounts = (items: Array<{ id: string }>) => {
    const counts: Record<IntegrationStatus, number> = {
      connected: 0,
      available: 0,
      setup_required: 0,
      coming_soon: 0,
    };

    items.forEach((item) => {
      counts[getIntegrationStatus(item.id)] += 1;
    });

    return counts;
  };

  const integrationSectionSummaries = useMemo(() => {
    return INTEGRATION_SECTIONS.reduce((acc, section) => {
      const counts = getIntegrationStatusCounts(section.items);
      acc[section.section] = {
        section: section.section,
        total: section.items.length,
        ...counts,
      };
      return acc;
    }, {} as Record<string, { section: string; total: number; connected: number; available: number; setup_required: number; coming_soon: number }>);
  }, [integrationStates]);

  const isDevMode = typeof import.meta !== "undefined" && Boolean((import.meta as any).env?.DEV);

  const allIntegrationSummary = useMemo(() => {
    const items = getAllIntegrationItems();
    return {
      total: items.length,
      ...getIntegrationStatusCounts(items),
    };
  }, [integrationStates]);

  useEffect(() => {
    if (!isDevMode) return;
    Object.values(integrationSectionSummaries).forEach((summary) => {
      const totalCount = summary.connected + summary.available + summary.setup_required + summary.coming_soon;
      if (totalCount !== summary.total) {
        console.warn(
          `Integration summary mismatch for ${summary.section}: expected total=${summary.total} but got ${totalCount} from counts`,
          summary,
        );
      }
    });
    const totalCount = allIntegrationSummary.connected + allIntegrationSummary.available + allIntegrationSummary.setup_required + allIntegrationSummary.coming_soon;
    if (totalCount !== allIntegrationSummary.total) {
      console.warn(
        `Integration summary mismatch for all integrations: expected total=${allIntegrationSummary.total} but got ${totalCount} from counts`,
        allIntegrationSummary,
      );
    }
  }, [integrationSectionSummaries, allIntegrationSummary, isDevMode]);

  const getIntegrationSummaryForSection = (sectionName: string) =>
    integrationSectionSummaries[sectionName] ?? {
      section: sectionName,
      total: 0,
      connected: 0,
      available: 0,
      setup_required: 0,
      coming_soon: 0,
    };

  const getIntegrationCardCapabilities = (id: string) => {
    return (INTEGRATION_CAPABILITIES[id] ?? []).slice(0, 3);
  };

  const getIntegrationStatusBadgeClass = (displayStatus: string) => {
    if (displayStatus === "Connected") return "border-[#A7F3D0] bg-[#ECFDF5] text-[#166534]";
    if (displayStatus === "Coming soon") return "border-[#E9D5FF] bg-[#F5F3FF] text-[#6D28D9]";
    if (displayStatus === "Setup required" || displayStatus === "Disabled") return "border-[#FDE68A] bg-[#FEF9C3] text-[#92400E]";
    return "border-[#F3F4F6] bg-[#F3F4F6] text-[#6B7280]";
  };

  const getIntegrationCardAction = (displayStatus: string, id: string) => {
    const trimmedStatus = displayStatus.trim();
    const isConnected = trimmedStatus === "Connected";
    const isComingSoon = trimmedStatus === "Coming soon";
    const isSetupRequired = trimmedStatus === "Setup required" || trimmedStatus === "Disabled";
    const isAvailable = ["Available", "Active", "Ready"].includes(trimmedStatus);
    const isSpecialChannel = id === "website" || id === "sms";

    if (isConnected) {
      return {
        label: "Manage",
        className: BUTTON_SECONDARY,
        onClick: () => openDrawer(id),
        disabled: false,
      };
    }

    if (isComingSoon) {
      return {
        label: "Coming soon",
        className: `${BUTTON_TERTIARY} opacity-60 pointer-events-none`,
        disabled: true,
      };
    }

    if (isSetupRequired) {
      return {
        label: "Configure",
        className: isSpecialChannel ? `${BUTTON_PRIMARY} opacity-60 pointer-events-none` : BUTTON_PRIMARY,
        onClick: isSpecialChannel
          ? undefined
          : () => {
              setConnectModalId(id);
              setConnectForm({ email: "", businessName: "", phone: "" });
              setConnectModalOpen(true);
            },
        disabled: isSpecialChannel,
      };
    }

    if (isAvailable) {
      return {
        label: "Connect",
        className: isSpecialChannel ? `${BUTTON_PRIMARY} opacity-60 pointer-events-none` : BUTTON_PRIMARY,
        onClick: isSpecialChannel
          ? undefined
          : () => {
              setConnectModalId(id);
              setConnectForm({ email: "", businessName: "", phone: "" });
              setConnectModalOpen(true);
            },
        disabled: isSpecialChannel,
      };
    }

    return {
      label: "Configure",
      className: `${BUTTON_PRIMARY} opacity-60 pointer-events-none`,
      disabled: true,
    };
  };

  const renderIntegrationCard = (item: {
    id: string;
    label: string;
    Icon: any;
    description: string;
    status: string;
  }) => {
    const displayStatus = formatStatusLabel(item.status);
    const capabilities = getIntegrationCardCapabilities(item.id);
    const action = getIntegrationCardAction(displayStatus, item.id);
    const statusBadgeClass = getIntegrationStatusBadgeClass(displayStatus);

    return (
      <div key={item.id} className={SMALL_CARD}>
        <div className="flex items-start gap-3">
          <div className={displayStatus === "Connected" ? ICON_WRAP_AVAILABLE : ICON_WRAP_DEFAULT}>
            <item.Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#111827]">{item.label}</p>
            <p className="mt-2 text-sm text-[#64748B]">{item.description}</p>
            {capabilities.length > 0 && (
              <div className="mt-4 text-sm text-[#475569]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#64748B]">AI can</p>
                <ul className="mt-2 space-y-1 list-disc pl-4">
                  {capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className={`${BADGE} ${statusBadgeClass}`}>{displayStatus}</span>
          <button
            type="button"
            onClick={() => {
              if (!action.disabled && action.onClick) action.onClick();
            }}
            className={action.className}
            disabled={action.disabled}
          >
            {action.label}
          </button>
        </div>
      </div>
    );
  };

  const isIntegrationConnected = (id: string): boolean => getIntegrationStatus(id) === "connected";
  const isIntegrationComingSoon = (id: string): boolean => getIntegrationStatus(id) === "coming_soon";
  const isIntegrationSetupRequired = (id: string): boolean => getIntegrationStatus(id) === "setup_required";

  const formatStatusLabel = (status: string): string => {
    const trimmed = status.trim();
    if (["Active", "Ready", "Disabled", "Setup required"].includes(trimmed)) return trimmed;
    return formatIntegrationStatusLabel(status);
  };

  const handleModalConnect = () => {
    if (!connectModalId) return;
    const name = getIntegrationName(connectModalId);
    setIntegrationStates((s) => ({
      ...s,
      [connectModalId]: {
        status: "connected",
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
  const integrationsPageRef = useRef<HTMLDivElement | null>(null);

  const goToIntegrationsSection = () => {
    setSelected("Integrations");
    window.setTimeout(() => {
      if (!integrationsPageRef.current) return;
      integrationsPageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      integrationsPageRef.current.focus({ preventScroll: true });
    }, 100);
  };
  const [completedIdentitySteps, setCompletedIdentitySteps] = useState<number[]>([]);
  const [activeIntegrationStep, setActiveIntegrationStep] = useState(0);
  const [completedIntegrationSteps, setCompletedIntegrationSteps] = useState<number[]>([]);
  const [activeKnowledgeStep, setActiveKnowledgeStep] = useState(0);
  const [completedKnowledgeSteps, setCompletedKnowledgeSteps] = useState<number[]>([]);
  const [selectedKnowledgeSources, setSelectedKnowledgeSources] = useState<string[]>([]);
  const [completionToast, setCompletionToast] = useState<string | null>(null);
  const [previewReplyVisible, setPreviewReplyVisible] = useState(true);
  const [onboardingRestored, setOnboardingRestored] = useState(false);
  const identityLessonRef = useRef<HTMLDivElement>(null);
  const knowledgeLessonRef = useRef<HTMLDivElement>(null);
  const integrationLessonRef = useRef<HTMLDivElement>(null);
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
  const CATALOG_ITEMS: CatalogProduct[] = [
    {
      id: "p-restaurant-001",
      name: "Ginger Citrus Salad",
      category: "Restaurant",
      type: "Service",
      price: "$8.50",
      description: "Fresh mixed greens, candied ginger, citrus segments, and sesame vinaigrette.",
      availability: "In stock",
      image: "/assets/sample/food-salad.jpg",
      mediaAssets: [],
    },
    {
      id: "p-retail-001",
      name: "Everyday Cotton Tee",
      category: "Retail",
      type: "Product",
      price: "$19.99",
      description: "Soft 100% cotton tee available in multiple colors and sizes.",
      availability: "Low stock",
      image: "/assets/sample/tee.jpg",
      mediaAssets: [],
    },
    {
      id: "p-clinic-001",
      name: "Adult Wellness Check",
      category: "Clinic",
      type: "Service",
      price: "$65.00",
      description: "Comprehensive check-up including vitals and basic blood work.",
      availability: "By appointment",
      image: "/assets/sample/clinic.jpg",
      mediaAssets: [],
    },
    {
      id: "p-school-001",
      name: "Primary Math Workbook",
      category: "School",
      type: "Digital Product",
      price: "$12.00",
      description: "Grade 3 math workbook with exercises and answer key.",
      availability: "In stock",
      image: "/assets/sample/workbook.jpg",
      mediaAssets: [],
    },
    {
      id: "p-realestate-001",
      name: "2-Bedroom Riverside Apartment",
      category: "Real Estate",
      type: "Service",
      price: "$250,000",
      description: "Modern apartment with river views, 2 bed, 2 bath, parking included.",
      availability: "Available",
      image: "/assets/sample/apartment.jpg",
      mediaAssets: [],
    },
    {
      id: "p-salon-001",
      name: "Deluxe Hair Treatment",
      category: "Salon",
      type: "Service",
      price: "$45.00",
      description: "Repairing deep-conditioning treatment with scalp massage.",
      availability: "In stock",
      image: "/assets/sample/salon.jpg",
      mediaAssets: [],
    },
    {
      id: "p-electronics-001",
      name: "Noise-Cancelling Headphones",
      category: "Electronics",
      type: "Product",
      price: "$129.99",
      description: "Wireless over-ear headphones with 30h battery life.",
      availability: "In stock",
      image: "/assets/sample/headphones.jpg",
      mediaAssets: [],
    },
  ];
  const [businessModelSelections, setBusinessModelSelections] = useState<string[]>([]);
  const toggleBusinessModelSelection = (option: string) => {
    setBusinessModelSelections((current) =>
      current.includes(option) ? current.filter((item) => item !== option) : [...current, option],
    );
    setHasUnsavedChanges(true);
  };
  const [catalogProducts, setCatalogProducts] = useState<CatalogProduct[]>(() => CATALOG_ITEMS.map((product) => ({ ...product, mediaAssets: product.mediaAssets ?? [] })));
  const [productSearch, setProductSearch] = useState("");
  const [catalogView, setCatalogView] = useState<'grid' | 'table'>('grid');
  type CatalogueTab = "All" | "Products" | "Services" | "Subscriptions" | "Digital Products" | "Memberships" | "Rentals";
  const BUSINESS_MODEL_TO_CATALOG_TAB: Record<string, Exclude<CatalogueTab, "All">> = {
    "Physical Products": "Products",
    Services: "Services",
    "Digital Products": "Digital Products",
    Subscriptions: "Subscriptions",
    Memberships: "Memberships",
    Rentals: "Rentals",
  };
  const CATALOG_TAB_TO_PRODUCT_TYPE: Record<Exclude<CatalogueTab, "All">, string> = {
    Products: "Product",
    Services: "Service",
    Subscriptions: "Subscription",
    "Digital Products": "Digital Product",
    Memberships: "Membership",
    Rentals: "Rental",
  };
  const BUSINESS_MODEL_TO_ADD_LABEL: Record<string, string> = {
    "Physical Products": "Product",
    Services: "Service",
    Subscriptions: "Subscription",
    "Digital Products": "Digital Product",
    Memberships: "Membership",
    Rentals: "Rental",
  };
  const getAddButtonLabel = (models: string[]) => {
    const normalized = models.filter(Boolean);
    if (normalized.length === 1) {
      const label = BUSINESS_MODEL_TO_ADD_LABEL[normalized[0]];
      return label ? `Add ${label}` : "Add Item";
    }
    return "Add Item";
  };
  const addButtonLabel = getAddButtonLabel(businessModelSelections);

  const catalogueFilterTabs = useMemo(() => {
    const tabs: CatalogueTab[] = ["All"];
    const seen = new Set<CatalogueTab>(tabs);

    businessModelSelections.forEach((selection) => {
      const tab = BUSINESS_MODEL_TO_CATALOG_TAB[selection];
      if (tab && !seen.has(tab)) {
        tabs.push(tab);
        seen.add(tab);
      }
    });

    return tabs;
  }, [businessModelSelections]);
  const catalogueFilterTabOrder: CatalogueTab[] = ["All", "Products", "Services", "Subscriptions", "Digital Products", "Memberships", "Rentals"];
  const sortedCatalogueFilterTabs = useMemo(
    () => [...catalogueFilterTabs].sort((a, b) => catalogueFilterTabOrder.indexOf(a) - catalogueFilterTabOrder.indexOf(b)),
    [catalogueFilterTabs],
  );
  const [selectedCatalogueTab, setSelectedCatalogueTab] = useState<CatalogueTab>("All");
  useEffect(() => {
    if (!catalogueFilterTabs.includes(selectedCatalogueTab)) {
      setSelectedCatalogueTab("All");
    }
  }, [catalogueFilterTabs, selectedCatalogueTab]);
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
      type,
      price: "$0.00",
      description: "",
      availability: "Available",
      image: "/assets/sample/placeholder.png",
      mediaAssets: [],
    };
    setCatalogProducts((p) => [newItem, ...p]);
    // Open the product editor immediately so users don't need to scroll
    setSelectedProductId(id);
    setProductDrawerTab("general");
    setProductDrawerOpen(true);
  };

  const handleAddItemSelection = (type: string) => {
    setAddItemChoiceOpen(false);
    addProduct(type);
  };

  const handleAddItemClick = () => {
    const normalizedModels = businessModelSelections.filter(Boolean);

    if (normalizedModels.length <= 1) {
      const singleModel = normalizedModels[0];
      if (singleModel === "Services") {
        handleAddItemSelection("Service");
      } else if (singleModel === "Subscriptions") {
        handleAddItemSelection("Subscription");
      } else if (singleModel === "Digital Products") {
        handleAddItemSelection("Digital Product");
      } else if (singleModel === "Rentals") {
        handleAddItemSelection("Rental");
      } else {
        handleAddItemSelection("Product");
      }
      return;
    }

    setAddItemChoiceOpen(true);
  };
  const updateCatalogProductField = (id: string, field: string, value: any) => {
    setCatalogProducts((list) => list.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };
  const deleteCatalogProduct = (id: string) => {
    setCatalogProducts((list) => list.filter((product) => product.id !== id));
  };
  const duplicateCatalogProduct = (id: string) => {
    const original = catalogProducts.find((product) => product.id === id);
    if (!original) return;
    const duplicated = {
      ...original,
      id: `p-${Date.now()}`,
      name: `${original.name} copy`,
    };
    setCatalogProducts((list) => [duplicated, ...list]);
  };
  const previewCatalogProduct = (id: string) => {
    console.log(`Preview catalogue item ${id} - placeholder`);
  };
  const trainCatalogProductAI = (id: string) => {
    console.log(`Train AI for catalogue item ${id} - placeholder`);
  };
  const getCatalogueItemReadinessLabel = (item: CatalogProduct) => {
    const hasDescription = typeof item.description === "string" && item.description.trim().length > 0;
    const hasImages = Boolean(
      (item.image && item.image.trim().length > 0) ||
      ((item.mediaAssets ?? []).length > 0),
    );
    const hasFAQs = Boolean((item as any).faqs && (item as any).faqs.length > 0);
    const hasPrice = typeof item.price === "string" && item.price.trim().length > 0;
    const hasInventory = typeof item.currentStock === "number";

    if (!hasImages) return "Needs Images";
    if (!hasFAQs) return "Needs FAQ";
    if (!hasDescription) return "Needs Description";
    if (!hasPrice) return "Needs Pricing";
    if (!hasInventory) return "Needs Inventory";

    return "100% Ready";
  };
  const archiveCatalogProduct = (id: string) => {
    setCatalogProducts((list) => list.filter((product) => product.id !== id));
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
    duration?: string;
    altText?: string;
    isThumbnail?: boolean;
  };

  type CatalogProduct = {
    id: string;
    name: string;
    category: string;
    type: string;
    price: string;
    description: string;
    availability: string;
    image: string;
    mediaAssets: MediaAsset[];
    sku?: string;
    tags?: string[];
    priceNote?: string;
    currentStock?: number;
    stockStatus?: string;
    lowStockThreshold?: number;
    warehouseLocation?: string;
  };

  const [pricingSaved, setPricingSaved] = useState(false);
  const [pricingSectionComplete, setPricingSectionComplete] = useState(false);
  const [availabilitySaved, setAvailabilitySaved] = useState(false);
  const [importMenuOpen, setImportMenuOpen] = useState(false);
  const [showProductTypeDialog, setShowProductTypeDialog] = useState(false);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [selectedProductType, setSelectedProductType] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [productDrawerOpen, setProductDrawerOpen] = useState(false);
  const [addItemChoiceOpen, setAddItemChoiceOpen] = useState(false);
  const [productDrawerTab, setProductDrawerTab] = useState<"general" | "pricing" | "media" | "inventory" | "ai">("general");
  const [completedProductStepIds, setCompletedProductStepIds] = useState<string[]>([]);
  const [addProductFormData, setAddProductFormData] = useState<{ name: string; category: string; price: string; availability: string; image?: string; type: string } | null>(null);
  const productSectionIds = ["products","pricing"];
  const selectedProduct = selectedProductId ? catalogProducts.find((product) => product.id === selectedProductId) ?? null : null;
  const createProductMediaAssets = (files: FileList | null) => {
    if (!files) return [];
    return Array.from(files).map((file) => ({
      id: `asset-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: file.name,
      fileType: file.type.split("/")[0] || "file",
      uploadDate: new Date().toLocaleString(),
      size: `${Math.round(file.size / 1024)} KB`,
      url: URL.createObjectURL(file),
      mime: file.type,
      altText: "",
      isThumbnail: false,
    }));
  };
  const addProductMediaAssets = (productId: string, files: FileList | null) => {
    if (!files) return;
    const assets = createProductMediaAssets(files);
    setCatalogProducts((list: CatalogProduct[]) =>
      list.map((product) =>
        product.id === productId ? { ...product, mediaAssets: [...assets, ...(product.mediaAssets ?? [])] } : product
      )
    );
  };
  const updateProductMediaAssetField = (productId: string, assetId: string, field: string, value: any) => {
    setCatalogProducts((list: CatalogProduct[]) =>
      list.map((product) =>
        product.id === productId
          ? {
              ...product,
              mediaAssets: (product.mediaAssets ?? []).map((asset) =>
                asset.id === assetId ? { ...asset, [field]: value } : asset
              ),
            }
          : product
      )
    );
  };
  const deleteProductMediaAsset = (productId: string, assetId: string) => {
    setCatalogProducts((list: CatalogProduct[]) =>
      list.map((product) =>
        product.id === productId
          ? { ...product, mediaAssets: (product.mediaAssets ?? []).filter((asset) => asset.id !== assetId) }
          : product
      )
    );
  };
  const selectProductThumbnail = (productId: string, assetId: string) => {
    setCatalogProducts((list: CatalogProduct[]) =>
      list.map((product) =>
        product.id === productId
          ? {
              ...product,
              mediaAssets: (product.mediaAssets ?? []).map((asset) => ({
                ...asset,
                isThumbnail: asset.id === assetId,
              })),
            }
          : product
      )
    );
  };
  const openProductDrawer = (id: string) => {
    setSelectedProductId(id);
    setProductDrawerOpen(true);
    setProductDrawerTab("general");
  };
  const openProductDrawerToTab = (id: string, tab: "general" | "pricing" | "media" | "inventory" | "ai") => {
    setSelectedProductId(id);
    setProductDrawerTab(tab);
    setProductDrawerOpen(true);
  };

  const fixMissingDescriptions = () => {
    const target = catalogProducts.find((p) => !(p.description && p.description.trim().length > 0));
    if (target) openProductDrawerToTab(target.id, "ai");
  };

  const fixMissingImages = () => {
    const target = catalogProducts.find((p) => !(p.image && p.image.trim().length > 0) && ((p.mediaAssets ?? []).length === 0));
    if (target) openProductDrawerToTab(target.id, "media");
  };

  const fixMissingFaqs = () => {
    const target = catalogProducts.find((p) => !((p as any).faqs && (p as any).faqs.length > 0));
    if (target) openProductDrawerToTab(target.id, "ai");
  };
  const closeProductDrawer = () => {
    setProductDrawerOpen(false);
    setSelectedProductId(null);
  };
  const handleProductImageUpload = (files: FileList | null) => {
    if (!files || !selectedProduct) return;
    const file = files[0];
    const url = URL.createObjectURL(file);
    updateCatalogProductField(selectedProduct.id, "image", url);
  };

  const renderPricingEditor = () => (
    <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-[#111827]">Services editor</p>
          <p className="mt-2 text-sm text-[#64748B]">Manage service details, booking options, and media for your AI recommendations.</p>
        </div>
        <button type="button" onClick={addService} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Add Service</button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-[0.12em] text-[#6B7280]">
              <th className="px-2 py-2">Service</th>
              <th className="px-2 py-2">Category</th>
              <th className="px-2 py-2">Price</th>
              <th className="px-2 py-2">Duration</th>
              <th className="px-2 py-2">Area</th>
              <th className="px-2 py-2">Appt.</th>
            </tr>
          </thead>
          <tbody>
            {catalogServices.map((service) => (
              <tr key={service.id} className={`border-t cursor-pointer ${service.id === selectedServiceId ? "bg-[#ECFDF5]" : "hover:bg-[#F8FAFB]"}`} onClick={() => setSelectedServiceId(service.id)}>
                <td className="px-2 py-2 align-middle text-sm text-[#111827]">{service.name}</td>
                <td className="px-2 py-2 align-middle text-sm text-[#475569]">{service.category}</td>
                <td className="px-2 py-2 align-middle text-sm text-[#475569]">{service.price}</td>
                <td className="px-2 py-2 align-middle text-sm text-[#475569]">{service.duration}</td>
                <td className="px-2 py-2 align-middle text-sm text-[#475569]">{service.area}</td>
                <td className="px-2 py-2 align-middle text-sm text-[#475569]">{service.appointmentRequired ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-6">
          <p className="text-sm font-semibold text-[#111827]">Service details</p>
          <div className="mt-5 space-y-4">
            <div>
              <label className="text-xs text-[#6B7280]">Name</label>
              <input value={selectedService.name} onChange={(e) => updateServiceField(selectedService.id, "name", e.target.value)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs text-[#6B7280]">Description</label>
              <textarea value={selectedService.description} onChange={(e) => updateServiceField(selectedService.id, "description", e.target.value)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-[#6B7280]">Category</label>
                <input value={selectedService.category} onChange={(e) => updateServiceField(selectedService.id, "category", e.target.value)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-xs text-[#6B7280]">Price</label>
                <input value={selectedService.price} onChange={(e) => updateServiceField(selectedService.id, "price", e.target.value)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-[#6B7280]">Duration</label>
                <input value={selectedService.duration} onChange={(e) => updateServiceField(selectedService.id, "duration", e.target.value)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="text-xs text-[#6B7280]">Service area</label>
                <input value={selectedService.area} onChange={(e) => updateServiceField(selectedService.id, "area", e.target.value)} className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2 text-sm text-[#111827]">
                <input type="checkbox" checked={selectedService.appointmentRequired} onChange={(e) => updateServiceField(selectedService.id, "appointmentRequired", e.target.checked)} className="h-4 w-4 rounded border border-[#D1D5DB] text-[#22C55E] focus:ring-[#22C55E]" />
                Appointment required
              </label>
            </div>
          </div>
        </div>

        <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-6">
          <p className="text-sm font-semibold text-[#111827]">Media and files</p>
          <p className="mt-2 text-sm text-[#64748B]">Upload images, videos, or supporting documents for this service.</p>
          <div className="mt-4 rounded-[12px] border-dashed border-2 border-[#E5E7EB] bg-[#FAFAFB] p-4 text-center">
            <p className="text-sm font-semibold text-[#111827]">Drag & drop files here</p>
            <p className="mt-2 text-sm text-[#64748B]">Images, videos, documents, or any service resources.</p>
            <div className="mt-4">
              <input ref={serviceFileInputRef} type="file" multiple className="hidden" onChange={(e) => handleServiceFiles(e.target.files)} />
              <button type="button" onClick={() => serviceFileInputRef.current?.click()} className="inline-flex items-center gap-2 rounded-[12px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Upload files</button>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            <div className="rounded-[12px] border border-[#EEF2F6] bg-white p-4">
              <p className="text-sm font-semibold text-[#111827]">Files uploaded</p>
              <p className="mt-1 text-xs text-[#64748B]">{selectedService.mediaAssets.length} assets attached</p>
            </div>
            {selectedService.mediaAssets.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {selectedService.mediaAssets.map((asset) => (
                  <div key={asset.id} className="flex h-full flex-col rounded-[14px] border border-[#EEF2F6] bg-white p-3 shadow-sm">
                    <div className="mb-3 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[10px] bg-[#F8FAFB]">
                      {asset.mime?.startsWith("image") ? (
                        <img src={asset.url} alt={asset.name} className="h-full w-full object-cover" />
                      ) : asset.mime?.startsWith("video") ? (
                        <video src={asset.url} controls className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-sm text-[#475569]">
                          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span className="mt-2">File</span>
                        </div>
                      )}
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col">
                      <p className="truncate text-sm font-semibold text-[#111827]">{asset.name}</p>
                      <div className="mt-2 space-y-1 text-xs text-[#6B7280]">
                        <p>{asset.fileType} • {asset.size}</p>
                        <p className="text-[#94A3B8]">{asset.uploadDate}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-end gap-2">
                        <button type="button" onClick={() => viewServiceAsset(asset)} className="rounded-[8px] border border-[#E5E7EB] bg-white px-2.5 py-1.5 text-xs font-semibold">Preview</button>
                        <button type="button" onClick={() => deleteServiceAsset(asset.id)} className="rounded-[8px] border border-[#FECACA] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#B91C1C]">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  const [activeProductStep, setActiveProductStep] = useState(0);
  const productStepRefs = useRef<(HTMLElement | null)[]>([]);
  const focusProductStep = (index: number) => {
    const id = productSectionIds[index];
    const el = document.getElementById(id);
    if (!el) return;
    setActiveProductStep(index);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    const ids = productSectionIds;
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const idx = ids.indexOf(visible[0].target.id);
          if (idx !== -1) setActiveProductStep(idx);
        } else {
          const rects = els.map((el) => ({ id: el.id, top: Math.abs(el.getBoundingClientRect().top - 120) }));
          rects.sort((a, b) => a.top - b.top);
          setActiveProductStep(ids.indexOf(rects[0].id));
        }
      },
      { threshold: [0.25, 0.5, 0.75], root: null, rootMargin: "-40% 0px -40% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [catalogProducts.length]);

  const getProductCompletionMessage = (id: string) => {
    switch (id) {
      case "product-types":
        return "Product Types complete — your AI can now distinguish between your catalog formats.";
      case "products":
        return "Products complete — your catalogue has been added and is ready to be managed.";
      case "pricing":
        return "Pricing complete — your product prices are saved and ready to publish.";
      case "product-media":
        return "Product Media complete — your catalogue now includes visual assets.";
      default:
        return "Panel complete — your catalogue workspace is moving forward.";
    }
  };

  const productSteps = useMemo(
    () => [
      { id: "products", title: "Products", detail: "Add and manage catalog items", done: catalogProducts.length > 0 },
      { id: "pricing", title: "Pricing", detail: "Set prices and billing", done: pricingSectionComplete },
    ],
    [catalogProducts.length, pricingSectionComplete],
  );

  const catalogueHealthMetrics = useMemo(() => {
    const totalProducts = catalogProducts.length;
    const pricesCompleted = catalogProducts.filter((product) => typeof product.price === "string" && product.price.trim().length > 0).length;
    const mediaCompleted = catalogProducts.filter((product) => (product.mediaAssets ?? []).length > 0).length;
    const aiReadyCompleted = catalogProducts.filter((product) => {
      const hasName = typeof product.name === "string" && product.name.trim().length > 0;
      const hasCategory = typeof product.category === "string" && product.category.trim().length > 0;
      const hasDescription = typeof product.description === "string" && product.description.trim().length > 0;
      return hasName && hasCategory && hasDescription;
    }).length;

    return [
      { label: "Products", completed: totalProducts, missing: Math.max(0, 1 - totalProducts), percentage: totalProducts > 0 ? 100 : 0 },
      { label: "Prices", completed: pricesCompleted, missing: Math.max(0, totalProducts - pricesCompleted), percentage: totalProducts > 0 ? Math.round((pricesCompleted / totalProducts) * 100) : 0 },
      { label: "Media", completed: mediaCompleted, missing: Math.max(0, totalProducts - mediaCompleted), percentage: totalProducts > 0 ? Math.round((mediaCompleted / totalProducts) * 100) : 0 },
      { label: "AI Ready", completed: aiReadyCompleted, missing: Math.max(0, totalProducts - aiReadyCompleted), percentage: totalProducts > 0 ? Math.round((aiReadyCompleted / totalProducts) * 100) : 0 },
    ];
  }, [catalogProducts]);

  const catalogueHealthConfidence = useMemo(
    () => calculateCatalogueHealthConfidence(catalogueHealthMetrics),
    [catalogueHealthMetrics],
  );

  const productLessonCompleted = productSteps.filter((step) => step.done).length;
  const productLessonProgress = Math.round((productLessonCompleted / productSteps.length) * 100);

  const productCompletionMounted = useRef(false);

  useEffect(() => {
    if (!productCompletionMounted.current) {
      productCompletionMounted.current = true;
      return;
    }

    const completedIds = productSteps.filter((step) => step.done).map((step) => step.id);
    const newlyCompleted = completedIds.filter((id) => !completedProductStepIds.includes(id));
    if (newlyCompleted.length === 0) return;

    setCompletedProductStepIds((current) => [...current, ...newlyCompleted]);

    newlyCompleted.forEach((id, index) => {
      window.setTimeout(() => {
        setCompletionToast(getProductCompletionMessage(id));
        window.setTimeout(() => setCompletionToast(null), 2200);
      }, index * 2400);
    });
  }, [completedProductStepIds, productSteps]);

  const productMediaFileInputRef = useRef<HTMLInputElement | null>(null);
  const serviceFileInputRef = useRef<HTMLInputElement | null>(null);

  const handleProductMediaFiles = (productId: string, files: FileList | null) => {
    if (!files || files.length === 0) return;
    addProductMediaAssets(productId, files);
    if (productMediaFileInputRef.current) productMediaFileInputRef.current.value = "";
  };

  type ServiceItem = {
    id: string;
    name: string;
    description: string;
    category: string;
    price: string;
    duration: string;
    area: string;
    appointmentRequired: boolean;
    image: string;
    mediaAssets: MediaAsset[];
  };

  const SERVICE_ITEMS: ServiceItem[] = [
    {
      id: "s-hair-001",
      name: "Deluxe Hair Treatment",
      description: "Repairing deep-conditioning treatment with scalp massage and styling guidance.",
      category: "Salon",
      price: "$45.00",
      duration: "60 minutes",
      area: "Salon",
      appointmentRequired: true,
      image: "/assets/sample/salon.jpg",
      mediaAssets: [],
    },
    {
      id: "s-clinic-001",
      name: "Adult Wellness Check",
      description: "Comprehensive check-up including vitals and basic blood work.",
      category: "Clinic",
      price: "$65.00",
      duration: "45 minutes",
      area: "Clinic",
      appointmentRequired: true,
      image: "/assets/sample/clinic.jpg",
      mediaAssets: [],
    },
    {
      id: "s-consult-001",
      name: "Business Strategy Session",
      description: "One-on-one planning session to align your product roadmap and marketing approach.",
      category: "Consulting",
      price: "$120.00",
      duration: "90 minutes",
      area: "Remote",
      appointmentRequired: true,
      image: "/assets/sample/meeting.jpg",
      mediaAssets: [],
    },
  ];

  const [catalogServices, setCatalogServices] = useState<ServiceItem[]>(SERVICE_ITEMS);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICE_ITEMS[0]?.id ?? "");

  const createMediaAssets = (files: FileList | null) => {
    if (!files || files.length === 0) return [] as MediaAsset[];
    return Array.from(files).map((f) => ({
      id: `service-asset-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: f.name,
      fileType: f.type.split("/")[0] || "file",
      uploadDate: new Date().toLocaleString(),
      size: `${Math.round(f.size / 1024)} KB`,
      url: URL.createObjectURL(f),
      mime: f.type,
    }));
  };

  const updateServiceField = <K extends keyof ServiceItem>(id: string, field: K, value: ServiceItem[K]) => {
    setCatalogServices((list) => list.map((service) => (service.id === id ? { ...service, [field]: value } : service)));
  };

  const selectedService = catalogServices.find((service) => service.id === selectedServiceId) ?? SERVICE_ITEMS[0];

  const handleServiceFiles = (files: FileList | null) => {
    if (!files || files.length === 0 || !selectedService) return;
    const arr = createMediaAssets(files);
    setCatalogServices((list) =>
      list.map((service) =>
        service.id === selectedService.id ? { ...service, mediaAssets: [...arr, ...service.mediaAssets] } : service
      )
    );
    if (serviceFileInputRef.current) serviceFileInputRef.current.value = "";
  };

  const onServiceDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleServiceFiles(e.dataTransfer.files);
  };

  const onServiceDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  const viewServiceAsset = (asset: MediaAsset) => {
    window.open(asset.url, "_blank");
  };

  const renameServiceAsset = (id: string) => {
    if (!selectedService) return;
    const asset = selectedService.mediaAssets.find((m) => m.id === id);
    if (!asset) return;
    const newName = window.prompt("Rename file", asset.name);
    if (!newName) return;
    setCatalogServices((list) =>
      list.map((service) =>
        service.id === selectedService.id
          ? {
              ...service,
              mediaAssets: service.mediaAssets.map((m) => (m.id === id ? { ...m, name: newName } : m)),
            }
          : service
      )
    );
  };

  const deleteServiceAsset = (id: string) => {
    if (!selectedService) return;
    const asset = selectedService.mediaAssets.find((m) => m.id === id);
    if (!asset) return;
    if (!window.confirm(`Delete ${asset.name}?`)) return;
    try {
      if (asset.url.startsWith("blob:")) URL.revokeObjectURL(asset.url);
    } catch {
      /* ignore */
    }
    setCatalogServices((list) =>
      list.map((service) =>
        service.id === selectedService.id
          ? { ...service, mediaAssets: service.mediaAssets.filter((m) => m.id !== id) }
          : service
      )
    );
  };

  const addService = () => {
    const id = `s-${Date.now()}`;
    const newService: ServiceItem = {
      id,
      name: `Service ${catalogServices.length + 1}`,
      description: "Describe this service for customers and your AI.",
      category: "General",
      price: "$0.00",
      duration: "30 minutes",
      area: "Online",
      appointmentRequired: false,
      image: "/assets/sample/placeholder.png",
      mediaAssets: [],
    };
    setCatalogServices((list) => [newService, ...list]);
    setSelectedServiceId(id);
  };
  const addProductWithData = (data: { name: string; category: string; price: string; availability: string; image?: string; type: string }) => {
    const id = `p-${Date.now()}`;
    const newItem = {
      id,
      name: data.name,
      category: data.category,
      type: data.type || 'Product',
      price: data.price,
      description: "",
      availability: data.availability,
      image: data.image || "/assets/sample/placeholder.png",
      mediaAssets: [],
    };
    setCatalogProducts((p) => [newItem, ...p]);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, productId: string) => {
    e.preventDefault();
    addProductMediaAssets(productId, e.dataTransfer.files);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  const viewAsset = (url: string) => {
    window.open(url, "_blank");
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

  const [playbooks, setPlaybooks] = useState<Playbook[]>([]);

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


  type PolicySection = {
    id: string;
    title: string;
    content: string;
    expanded?: boolean;
  };

  const [policySections, setPolicySections] = useState<PolicySection[]>([
    { id: 'pol-1', title: 'Customer Policies', content: 'Define the customer-facing policies that guide order handling, returns, and service levels.' },
    { id: 'pol-2', title: 'Pricing & Payment', content: 'Set rules for pricing, accepted payment methods, discounts, and invoice handling.' },
    { id: 'pol-3', title: 'Orders & Fulfillment', content: 'Specify order processing, shipping, delivery expectations, and fulfillment exceptions.' },
    { id: 'pol-4', title: 'Privacy & Customer Data', content: 'Document how customer data is collected, stored, shared, and protected within the system.' },
    { id: 'pol-5', title: 'AI Boundaries', content: 'Define the actions your AI can take and the tasks it should avoid to keep behavior on policy.' },
    { id: 'pol-6', title: 'Escalation Rules', content: 'Escalate issues to the right team or manager when requests exceed defined thresholds.' },
    { id: 'pol-7', title: 'Review', content: 'Review the full policy set to ensure every rule is clear and aligned with your business standards.' },
  ]);

  type CustomerPolicyItem = {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    editing?: boolean;
  };

  const policyTypeOptions = [
    'Returns',
    'Refunds',
    'Exchanges',
    'Cancellations',
    'Warranty',
    'Delivery',
    'Shipping',
    'Appointment cancellation',
    'Membership cancellation',
  ];

  const [customerPolicies, setCustomerPolicies] = useState<CustomerPolicyItem[]>([
    { id: 'cust-1', name: 'Returns', description: 'Customers can return items within 30 days when products are unused and returned in original condition.', enabled: true },
    { id: 'cust-2', name: 'Refunds', description: 'Refunds are issued after approval when returned items meet policy requirements.', enabled: true },
    { id: 'cust-3', name: 'Exchanges', description: 'Exchanges are accepted for items returned in original condition, subject to stock availability.', enabled: false },
    { id: 'cust-4', name: 'Cancellations', description: 'Orders may be cancelled within two hours unless already shipped or fulfilled.', enabled: true },
  ]);

  const toggleCustomerPolicyEnabled = (id: string) => setCustomerPolicies((s) => s.map((policy) => policy.id === id ? { ...policy, enabled: !policy.enabled } : policy));

  const toggleCustomerPolicyEditing = (id: string) => setCustomerPolicies((s) => s.map((policy) => policy.id === id ? { ...policy, editing: !policy.editing } : policy));

  const updateCustomerPolicyField = (id: string, field: 'name' | 'description', value: string) => {
    setCustomerPolicies((s) => s.map((policy) => policy.id === id ? { ...policy, [field]: value } : policy));
  };

  const addCustomerPolicy = (name?: string) => {
    setCustomerPolicies((s) => [
      ...s,
      {
        id: `cust-${Date.now()}`,
        name: name ?? 'New policy',
        description: name ? `Define your ${name.toLowerCase()} policy so AI can answer customer questions accurately.` : 'Describe this policy for your AI to reference when customers ask.',
        enabled: false,
        editing: true,
      },
    ]);
  };

  type PaymentMethodItem = {
    id: string;
    name: string;
    enabled: boolean;
    editing?: boolean;
  };

  type PricingRuleItem = {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    editing?: boolean;
  };

  type PaymentTimingItem = {
    id: string;
    label: string;
    selected: boolean;
  };

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodItem[]>([
    { id: 'pay-1', name: 'Credit cards', enabled: true },
    { id: 'pay-2', name: 'Bank transfers', enabled: true },
    { id: 'pay-3', name: 'Mobile money', enabled: false },
  ]);

  const [pricingRules, setPricingRules] = useState<PricingRuleItem[]>([
    { id: 'rule-1', name: 'Taxes included', description: 'Displayed prices include applicable taxes unless otherwise noted.', enabled: true },
    { id: 'rule-2', name: 'Fixed pricing', description: 'Displayed prices are fixed for standard items unless a custom quotation is required.', enabled: true },
    { id: 'rule-3', name: 'Quotation required', description: 'Certain requests require a quotation before the final price is confirmed.', enabled: false },
  ]);

  const [paymentTiming, setPaymentTiming] = useState<PaymentTimingItem[]>([
    { id: 'timing-1', label: 'Before fulfillment', selected: true },
    { id: 'timing-2', label: 'At fulfillment', selected: true },
    { id: 'timing-3', label: 'Deposit required', selected: false },
    { id: 'timing-4', label: 'Other', selected: false },
  ]);

  const [paymentNotes, setPaymentNotes] = useState('Add any business-specific payment instructions that customers should know.');

  const [notApplicableSections, setNotApplicableSections] = useState<string[]>([]);
  const isNotApplicable = (id: string) => notApplicableSections.includes(id);
  const toggleNotApplicable = (id: string) => setNotApplicableSections((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);

  const togglePaymentMethodEnabled = (id: string) => setPaymentMethods((s) => s.map((method) => method.id === id ? { ...method, enabled: !method.enabled } : method));

  const togglePaymentMethodEditing = (id: string) => setPaymentMethods((s) => s.map((method) => method.id === id ? { ...method, editing: !method.editing } : method));

  const updatePaymentMethodField = (id: string, value: string) => {
    setPaymentMethods((s) => s.map((method) => method.id === id ? { ...method, name: value } : method));
  };

  const addPaymentMethod = () => {
    setPaymentMethods((s) => [
      ...s,
      { id: `pay-${Date.now()}`, name: 'New payment method', enabled: false, editing: true },
    ]);
  };

  const deletePaymentMethod = (id: string) => setPaymentMethods((s) => s.filter((method) => method.id !== id));

  const togglePricingRuleEnabled = (id: string) => setPricingRules((s) => s.map((rule) => rule.id === id ? { ...rule, enabled: !rule.enabled } : rule));

  const togglePricingRuleEditing = (id: string) => setPricingRules((s) => s.map((rule) => rule.id === id ? { ...rule, editing: !rule.editing } : rule));

  const updatePricingRuleField = (id: string, field: 'name' | 'description', value: string) => {
    setPricingRules((s) => s.map((rule) => rule.id === id ? { ...rule, [field]: value } : rule));
  };

  const addPricingRule = () => {
    setPricingRules((s) => [
      ...s,
      { id: `rule-${Date.now()}`, name: 'New pricing rule', description: 'Describe when this pricing rule applies.', enabled: false, editing: true },
    ]);
  };

  const deletePricingRule = (id: string) => setPricingRules((s) => s.filter((rule) => rule.id !== id));

  const togglePaymentTiming = (id: string) => setPaymentTiming((s) => s.map((item) => item.id === id ? { ...item, selected: !item.selected } : item));

  // Orders & Fulfillment state and helpers
  type FulfillmentRuleItem = {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    editing?: boolean;
  };

  const [orderProcessingRules, setOrderProcessingRules] = useState<FulfillmentRuleItem[]>([
    { id: 'ord-1', name: 'Processing time', description: 'Typical time to process orders before fulfillment.', enabled: true },
    { id: 'ord-2', name: 'Order confirmation', description: 'What information is provided in order confirmations.', enabled: true },
  ]);

  const [deliveryRules, setDeliveryRules] = useState<FulfillmentRuleItem[]>([
    { id: 'del-1', name: 'Delivery options', description: 'Delivery methods offered (courier, in-house, third-party).', enabled: true },
    { id: 'del-2', name: 'Pickup options', description: 'Whether customers can pick up orders and where.', enabled: true },
    { id: 'del-3', name: 'Fulfillment locations', description: 'Locations where orders are fulfilled or shipped from.', enabled: true },
    { id: 'del-4', name: 'Typical fulfillment timeframe', description: 'Estimated timeframe customers should expect for fulfillment.', enabled: true },
  ]);

  const [changesCancellationRules, setChangesCancellationRules] = useState<FulfillmentRuleItem[]>([
    { id: 'chg-1', name: 'Change window', description: 'When customers can change an order after placing it.', enabled: true },
    { id: 'can-1', name: 'Cancellation policy', description: 'When customers can cancel and any fees that apply.', enabled: true },
  ]);

  const [unavailableRules, setUnavailableRules] = useState<FulfillmentRuleItem[]>([
    { id: 'unv-1', name: 'Unavailable items handling', description: 'What happens when an item or service is unavailable (refund, substitute, backorder).', enabled: true },
  ]);

  const toggleFulfillmentEnabled = (id: string, list: 'order' | 'delivery' | 'changes' | 'unavailable') => {
    if (list === 'order') setOrderProcessingRules((s) => s.map((r) => r.id === id ? { ...r, enabled: !r.enabled } : r));
    if (list === 'delivery') setDeliveryRules((s) => s.map((r) => r.id === id ? { ...r, enabled: !r.enabled } : r));
    if (list === 'changes') setChangesCancellationRules((s) => s.map((r) => r.id === id ? { ...r, enabled: !r.enabled } : r));
    if (list === 'unavailable') setUnavailableRules((s) => s.map((r) => r.id === id ? { ...r, enabled: !r.enabled } : r));
  };

  const toggleFulfillmentEditing = (id: string, list: 'order' | 'delivery' | 'changes' | 'unavailable') => {
    if (list === 'order') setOrderProcessingRules((s) => s.map((r) => r.id === id ? { ...r, editing: !r.editing } : r));
    if (list === 'delivery') setDeliveryRules((s) => s.map((r) => r.id === id ? { ...r, editing: !r.editing } : r));
    if (list === 'changes') setChangesCancellationRules((s) => s.map((r) => r.id === id ? { ...r, editing: !r.editing } : r));
    if (list === 'unavailable') setUnavailableRules((s) => s.map((r) => r.id === id ? { ...r, editing: !r.editing } : r));
  };

  const updateFulfillmentField = (id: string, field: 'name' | 'description', value: string, list: 'order' | 'delivery' | 'changes' | 'unavailable') => {
    if (list === 'order') setOrderProcessingRules((s) => s.map((r) => r.id === id ? { ...r, [field]: value } : r));
    if (list === 'delivery') setDeliveryRules((s) => s.map((r) => r.id === id ? { ...r, [field]: value } : r));
    if (list === 'changes') setChangesCancellationRules((s) => s.map((r) => r.id === id ? { ...r, [field]: value } : r));
    if (list === 'unavailable') setUnavailableRules((s) => s.map((r) => r.id === id ? { ...r, [field]: value } : r));
  };

  const addFulfillmentRule = (list: 'order' | 'delivery' | 'changes' | 'unavailable', name?: string) => {
    const item = { id: `${list}-${Date.now()}`, name: name ?? 'New rule', description: name ? `${name} details` : 'Describe this rule.', enabled: false, editing: true } as FulfillmentRuleItem;
    if (list === 'order') setOrderProcessingRules((s) => [...s, item]);
    if (list === 'delivery') setDeliveryRules((s) => [...s, item]);
    if (list === 'changes') setChangesCancellationRules((s) => [...s, item]);
    if (list === 'unavailable') setUnavailableRules((s) => [...s, item]);
  };

  const deleteFulfillmentRule = (id: string, list: 'order' | 'delivery' | 'changes' | 'unavailable') => {
    if (list === 'order') setOrderProcessingRules((s) => s.filter((r) => r.id !== id));
    if (list === 'delivery') setDeliveryRules((s) => s.filter((r) => r.id !== id));
    if (list === 'changes') setChangesCancellationRules((s) => s.filter((r) => r.id !== id));
    if (list === 'unavailable') setUnavailableRules((s) => s.filter((r) => r.id !== id));
  };

  // Privacy & Customer Data state and helpers
  type PrivacyRuleItem = {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    editing?: boolean;
  };

  const [mayCollectRules, setMayCollectRules] = useState<PrivacyRuleItem[]>([
    { id: 'pc-1', name: 'Name', description: 'Customer full name for identification and orders.', enabled: true },
    { id: 'pc-2', name: 'Phone number', description: 'Phone number for contact and delivery updates.', enabled: true },
  ]);

  const [doNotRequestRules, setDoNotRequestRules] = useState<PrivacyRuleItem[]>([
    { id: 'dnr-1', name: 'Passwords', description: 'Do not request account passwords from customers.', enabled: true },
    { id: 'dnr-2', name: 'Payment card security codes', description: 'Never ask for CVV or full card numbers in chat.', enabled: true },
  ]);

  const [dataSharingRules, setDataSharingRules] = useState<PrivacyRuleItem[]>([
    { id: 'ds-1', name: 'Internal support', description: 'Share customer data with internal support for order resolution when necessary.', enabled: true },
  ]);

  const mayCollectExamples = ['Name', 'Phone number', 'Email', 'Location', 'Order details'];
  const doNotRequestExamples = ['Passwords', 'Payment card security codes', 'Authentication codes', 'Other sensitive credentials'];

  const togglePrivacyEnabled = (id: string, list: 'collect' | 'doNot' | 'share') => {
    if (list === 'collect') setMayCollectRules((s) => s.map((r) => r.id === id ? { ...r, enabled: !r.enabled } : r));
    if (list === 'doNot') setDoNotRequestRules((s) => s.map((r) => r.id === id ? { ...r, enabled: !r.enabled } : r));
    if (list === 'share') setDataSharingRules((s) => s.map((r) => r.id === id ? { ...r, enabled: !r.enabled } : r));
  };

  const togglePrivacyEditing = (id: string, list: 'collect' | 'doNot' | 'share') => {
    if (list === 'collect') setMayCollectRules((s) => s.map((r) => r.id === id ? { ...r, editing: !r.editing } : r));
    if (list === 'doNot') setDoNotRequestRules((s) => s.map((r) => r.id === id ? { ...r, editing: !r.editing } : r));
    if (list === 'share') setDataSharingRules((s) => s.map((r) => r.id === id ? { ...r, editing: !r.editing } : r));
  };

  const updatePrivacyField = (id: string, field: 'name' | 'description', value: string, list: 'collect' | 'doNot' | 'share') => {
    if (list === 'collect') setMayCollectRules((s) => s.map((r) => r.id === id ? { ...r, [field]: value } : r));
    if (list === 'doNot') setDoNotRequestRules((s) => s.map((r) => r.id === id ? { ...r, [field]: value } : r));
    if (list === 'share') setDataSharingRules((s) => s.map((r) => r.id === id ? { ...r, [field]: value } : r));
  };

  const addPrivacyRule = (list: 'collect' | 'doNot' | 'share', name?: string) => {
    const item = { id: `${list}-${Date.now()}`, name: name ?? 'New rule', description: name ? `${name} details` : 'Describe this rule.', enabled: false, editing: true } as PrivacyRuleItem;
    if (list === 'collect') setMayCollectRules((s) => [...s, item]);
    if (list === 'doNot') setDoNotRequestRules((s) => [...s, item]);
    if (list === 'share') setDataSharingRules((s) => [...s, item]);
  };

  const deletePrivacyRule = (id: string, list: 'collect' | 'doNot' | 'share') => {
    if (list === 'collect') setMayCollectRules((s) => s.filter((r) => r.id !== id));
    if (list === 'doNot') setDoNotRequestRules((s) => s.filter((r) => r.id !== id));
    if (list === 'share') setDataSharingRules((s) => s.filter((r) => r.id !== id));
  };

  // AI Boundaries state and helpers
  type BoundaryRuleItem = {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    editing?: boolean;
  };

  const [boundaryRules, setBoundaryRules] = useState<BoundaryRuleItem[]>([
    { id: 'b-1', name: 'Never invent prices', description: 'The AI must not fabricate prices for products or services.', enabled: true },
    { id: 'b-2', name: 'Do not claim availability incorrectly', description: 'Never claim an item or service is available when the catalogue does not show it as available.', enabled: true },
    { id: 'b-3', name: 'Do not promise unconfirmed actions', description: 'Never promise an action has been completed unless the system confirms it.', enabled: true },
    { id: 'b-4', name: 'Never invent business policies', description: 'Do not make up company policies; refer to configured policies.', enabled: true },
    { id: 'b-5', name: 'Do not disclose internal information', description: 'Never disclose internal business information in customer conversations.', enabled: true },
    { id: 'b-6', name: 'Respect authority limits', description: 'Never make promises outside its configured authority.', enabled: true },
    { id: 'b-7', name: 'Do not provide unknown information', description: 'Never provide information it does not have.', enabled: true },
    { id: 'b-8', name: 'Ask for human help when unsure', description: 'Ask for human help when it cannot confidently answer.', enabled: true },
  ]);

  const toggleBoundaryEnabled = (id: string) => setBoundaryRules((s) => s.map((r) => r.id === id ? { ...r, enabled: !r.enabled } : r));
  const toggleBoundaryEditing = (id: string) => setBoundaryRules((s) => s.map((r) => r.id === id ? { ...r, editing: !r.editing } : r));
  const updateBoundaryField = (id: string, field: 'name' | 'description', value: string) => setBoundaryRules((s) => s.map((r) => r.id === id ? { ...r, [field]: value } : r));
  const addBoundaryRule = (name?: string) => setBoundaryRules((s) => [...s, { id: `b-${Date.now()}`, name: name ?? 'New boundary', description: name ? `${name} details` : 'Describe this boundary rule.', enabled: false, editing: true }]);
  const deleteBoundaryRule = (id: string) => setBoundaryRules((s) => s.filter((r) => r.id !== id));

  // Escalation Rules state and helpers
  type EscalationRuleItem = {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    editing?: boolean;
  };

  const [escalationRules, setEscalationRules] = useState<EscalationRuleItem[]>([
    { id: 'e-1', name: 'Customer explicitly requests a human', description: 'Hand over when a customer asks to speak to a human.', enabled: true },
    { id: 'e-2', name: 'Serious complaint', description: 'Escalate serious complaints immediately for human review.', enabled: true },
    { id: 'e-3', name: 'Legal or regulatory concern', description: 'Escalate any legal or regulatory issues to legal/human team.', enabled: true },
    { id: 'e-4', name: 'Privacy or data request', description: 'Escalate data access or deletion requests to the appropriate human.', enabled: true },
    { id: 'e-5', name: 'Refund dispute', description: 'Escalate disputes over refunds to human agents.', enabled: true },
    { id: 'e-6', name: 'Payment problem', description: 'Escalate payment failures or disputes.', enabled: true },
    { id: 'e-7', name: 'Situation outside documented policies', description: 'Escalate when the request falls outside configured policies.', enabled: true },
    { id: 'e-8', name: 'Request requiring human approval', description: 'Escalate requests that require manual approval.', enabled: true },
    { id: 'e-9', name: 'AI is unable to answer confidently', description: 'Escalate when confidence is low or AI cannot answer.', enabled: true },
  ]);

  const toggleEscalationEnabled = (id: string) => setEscalationRules((s) => s.map((r) => r.id === id ? { ...r, enabled: !r.enabled } : r));
  const toggleEscalationEditing = (id: string) => setEscalationRules((s) => s.map((r) => r.id === id ? { ...r, editing: !r.editing } : r));
  const updateEscalationField = (id: string, field: 'name' | 'description', value: string) => setEscalationRules((s) => s.map((r) => r.id === id ? { ...r, [field]: value } : r));
  const addEscalationRule = (name?: string) => setEscalationRules((s) => [...s, { id: `e-${Date.now()}`, name: name ?? 'New escalation', description: name ? `${name} details` : 'Describe this escalation trigger.', enabled: false, editing: true }]);
  const deleteEscalationRule = (id: string) => setEscalationRules((s) => s.filter((r) => r.id !== id));

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
  const [sidebarHovered, setSidebarHovered] = useState(false);
  const [sidebarForceOpen, setSidebarForceOpen] = useState(false);
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
  const [industrySearch, setIndustrySearch] = useState("");
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [otherIndustryValue, setOtherIndustryValue] = useState("");
  const [serviceAreaInput, setServiceAreaInput] = useState("");
  const [companyAbout, setCompanyAbout] = useState<string>("");
  const [companyMission, setCompanyMission] = useState<string>("");
  const [companyVision, setCompanyVision] = useState<string>("");
  const [yearsInBusiness, setYearsInBusiness] = useState<string>("");
  const [industriesServed, setIndustriesServed] = useState<string>("");
  const [targetCustomers, setTargetCustomers] = useState<string>("");
  const [differentiators, setDifferentiators] = useState<string>("");
  const [customerProblems, setCustomerProblems] = useState<string>("");

  const filteredIndustryOptions = useMemo(() => {
    const searchValue = industrySearch.trim().toLowerCase();
    if (!searchValue) return BUSINESS_INDUSTRY_OPTIONS;
    return BUSINESS_INDUSTRY_OPTIONS.filter((option) => option.toLowerCase().includes(searchValue));
  }, [industrySearch]);

  const businessIndustryValue = businessInfo.type === "Other"
    ? otherIndustryValue.trim()
    : businessInfo.type.trim();

  useEffect(() => {
    if (!businessInfo.type || businessInfo.type === "Other") return;

    if (BUSINESS_INDUSTRY_OPTIONS.includes(businessInfo.type)) {
      setOtherIndustryValue("");
      return;
    }

    setOtherIndustryValue(businessInfo.type);
  }, [businessInfo.type]);

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
      businessIndustry: businessIndustryValue,
      businessModels: businessModelSelections,
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

  const handleIndustrySelection = (value: string) => {
    setBusinessInfo((current) => ({ ...current, type: value }));
    setOtherIndustryValue("");
    setIndustrySearch("");
    setIsIndustryDropdownOpen(false);
    setHasUnsavedChanges(true);
  };

  const handleOtherIndustryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setOtherIndustryValue(nextValue);
    setBusinessInfo((current) => ({ ...current, type: nextValue }));
    setHasUnsavedChanges(true);
  };

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
    setBusinessModelSelections([]);
    setOtherIndustryValue("");
    setIndustrySearch("");
    setIsIndustryDropdownOpen(false);
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
  const totalProductMediaAssets = catalogProducts.reduce((count, product) => count + (product.mediaAssets?.length ?? 0), 0);
  const knowledgeSourceSummary = [
    { label: "Website", value: "42 pages", Icon: Globe, ready: websiteImportStatus !== "syncing" },
    { label: "FAQ", value: `${faqItems.length} items`, Icon: MessageCircle, ready: faqItems.length > 0 },
    { label: "Products", value: `${knowledgeProducts.length} products`, Icon: Package, ready: knowledgeProducts.length > 0 },
    { label: "Policies", value: `${Object.values(policies).filter(Boolean).length}`, Icon: Shield, ready: Object.values(policies).some(Boolean) },
    { label: "Documents", value: `${knowledgeDocuments.length}`, Icon: Paperclip, ready: knowledgeDocuments.length > 0 },
    { label: "Images", value: `${totalProductMediaAssets} files`, Icon: Image, ready: totalProductMediaAssets > 0 },
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
    Skills: 0,
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
        const progress = JSON.parse(saved) as {
          step?: number;
          completed?: number[];
          launched?: boolean;
          scrollY?: number;
          businessInfo?: typeof businessInfo;
          businessIndustry?: string;
          businessModels?: string[];
          businessHours?: string;
        };
        if (isDevMode) {
          window.localStorage.removeItem("sokoos-ai-training-progress-v2");
        } else {
          if (progress.businessInfo) setBusinessInfo(normalizeBusinessInfo(progress.businessInfo));
          if (typeof progress.businessIndustry === "string") {
            const industryValue = progress.businessIndustry.trim();
            if (industryValue) {
              if (BUSINESS_INDUSTRY_OPTIONS.includes(industryValue)) {
                setBusinessInfo((current) => normalizeBusinessInfo({ ...current, type: industryValue }));
              } else {
                setBusinessInfo((current) => normalizeBusinessInfo({ ...current, type: "Other" }));
                setOtherIndustryValue(industryValue);
              }
            }
          }
          if (Array.isArray(progress.businessModels)) {
            setBusinessModelSelections(progress.businessModels.filter((value): value is string => typeof value === "string" && value.trim().length > 0));
          }
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
      businessIndustry: businessIndustryValue,
      businessModels: businessModelSelections,
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

  const router = useRouter();

  const getSelectionFromPath = (pathname: string) => {
    if (pathname === "/dashboard/ai" || pathname === "/dashboard/ai/") return "Training";
    if (pathname === "/dashboard/performance" || pathname === "/dashboard/performance/") return "Performance";
    if (pathname === "/dashboard/inbox" || pathname === "/dashboard/inbox/") return "Inbox";
    if (pathname === "/dashboard/integrations" || pathname === "/dashboard/integrations/") return "Integrations";
    if (pathname === "/dashboard/settings" || pathname === "/dashboard/settings/") return "Settings";
    if (pathname === "/dashboard/customers" || pathname === "/dashboard/customers/") return "Customers";
    if (pathname === "/dashboard/catalog" || pathname === "/dashboard/catalog/") return "Catalog";
    if (pathname === "/dashboard" || pathname === "/dashboard/" || pathname === "/") return "Home";
    return "Home";
  };

  useEffect(() => {
    const pathname = router.state.location.pathname;
    const nextSelection = getSelectionFromPath(pathname);
    setSelected(nextSelection);
    if (nextSelection === "Training") {
      setActiveWorkspaceSection("Identity");
    }
  }, [router.state.location.pathname]);

  const handleNavSelection = (label: string, href?: string) => {
    if (label === "Training") {
      setSelected("Training");
      setActiveWorkspaceSection("Identity");
      if (href) {
        void router.navigate({ to: href as never });
      }
      return;
    }

    if (label === "Performance") {
      setSelected("Performance");
      if (href) {
        void router.navigate({ to: href as never });
      }
      return;
    }

    setSelected(label);
    if (href) {
      void router.navigate({ to: href as never });
    }
  };

  const renderSidebarNavItems = (variant: "icon" | "expanded" | "mobile") => {
    const isCompact = variant === "icon";
    const isMobile = variant === "mobile";

    return (
      <ul className={isCompact ? "space-y-2" : isMobile ? "space-y-1" : "space-y-2"}>
        {NAV_ITEMS.map((item) => {
          const isParent = Boolean(item.children);
          const isParentActive =
            isParent &&
            (selected === "AI Employee" || selected === "Training" || selected === "Performance");
          const isExpanded = expandedNavItem === item.label;
          const parentActive = isParent ? isParentActive : selected === item.label;
          const iconClass = isCompact || isMobile ? "h-4 w-4" : "h-5 w-5";

          if (!isParent) {
            return (
              <li key={item.label}>
                <button
                  onClick={() => handleNavSelection(item.label, item.href)}
                  title={item.label}
                  aria-label={item.label}
                  className={isCompact
                    ? `w-full flex items-center justify-center rounded-[20px] p-2 text-sm font-medium transition duration-200 ${parentActive ? "bg-[#ECFDF5] text-[#047857] shadow-sm" : "text-[#6B7280] hover:bg-[#EFF6FF]"}`
                    : isMobile
                      ? `w-full text-left flex items-center gap-2.5 rounded-[20px] px-3 py-2 text-sm font-medium transition duration-200 ${parentActive ? "bg-[#F0FDF4] text-[#065F46] shadow-sm ring-1 ring-[#D1FAE5]/40" : "text-[#475569] hover:bg-[#EFF6FF] hover:text-[#111827]"}`
                      : `w-full text-left flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium transition duration-200 ${parentActive ? "bg-[#ECFDF5] text-[#047857]" : "text-[#475569] hover:bg-[#EFF6FF]"}`}
                >
                  <item.Icon className={`${iconClass} ${parentActive ? "text-[#059669] opacity-100" : "text-[#6B7280] opacity-90"}`} />
                  {!isCompact && <span>{item.label}</span>}
                </button>
              </li>
            );
          }

          return (
            <li key={item.label}>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    if (expandedNavItem === item.label) {
                      setExpandedNavItem(null);
                    } else {
                      setExpandedNavItem(item.label);
                    }
                  }}
                  title={item.label}
                  aria-label={item.label}
                  className={isCompact
                    ? `w-full flex items-center justify-center rounded-[20px] p-2 text-sm font-medium transition duration-200 ${parentActive ? "bg-[#ECFDF5] text-[#047857] shadow-sm" : "text-[#6B7280] hover:bg-[#EFF6FF]"}`
                    : isMobile
                      ? `w-full text-left flex items-center gap-2.5 rounded-[20px] px-3 py-2 text-sm font-medium transition duration-200 ${parentActive ? "bg-[#F0FDF4] text-[#065F46] shadow-sm ring-1 ring-[#D1FAE5]/40" : "text-[#475569] hover:bg-[#EFF6FF] hover:text-[#111827]"}`
                      : `w-full text-left flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium transition duration-200 ${parentActive ? "bg-[#ECFDF5] text-[#047857]" : "text-[#475569] hover:bg-[#EFF6FF]"}`}
                >
                  <item.Icon className={`${iconClass} ${parentActive ? "text-[#059669]" : "text-[#6B7280]"}`} />
                  {!isCompact && <span className="flex-1 text-left">{item.label}</span>}
                  {!isCompact && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : "rotate-0"}`} />
                  )}
                </button>
                {isExpanded && !isCompact && (
                  <ul className="mt-1 space-y-1 pl-6">
                    {item.children?.map((child) => {
                      const childActive =
                        selected === child.label ||
                        (child.label === "Training" && selected === "Training") ||
                        (child.label === "Performance" && selected === "Performance");
                      return (
                        <li key={child.label}>
                          <button
                            onClick={() => {
                              setExpandedNavItem(item.label);
                              handleNavSelection(child.label, child.href);
                            }}
                            className={isMobile
                              ? `w-full text-left flex items-center gap-2.5 rounded-[20px] px-3 py-2 text-sm font-medium transition duration-200 ${childActive ? "bg-[#F0FDF4] text-[#065F46] shadow-sm ring-1 ring-[#D1FAE5]/40" : "text-[#475569] hover:bg-[#EFF6FF] hover:text-[#111827]"}`
                              : `w-full text-left flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium transition duration-200 ${childActive ? "bg-[#ECFDF5] text-[#047857]" : "text-[#475569] hover:bg-[#EFF6FF]"}`}
                          >
                            <child.Icon className={isMobile ? "h-4 w-4" : "h-5 w-5"} />
                            <span>{child.label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  const [user, setUser] = useState<SidebarUser | null>(null);
  const [editProfileOpen, setEditProfileOpen] = useState(false);

  const handleLogout = () => {
    signOutMock();
    localStorage.removeItem("sokoos-auth");
    void router.navigate({ to: "/signin", replace: true });
  };

  const handleAccountSettings = () => {
    setSelected("Settings");
    void router.navigate({ to: "/dashboard/settings" });
  };

  const handleEditProfile = () => {
    setEditProfileOpen(true);
  };

  const handleProfileSave = (updated: SidebarUser) => {
    setUser(updated);
    try {
      localStorage.setItem("mock_user", JSON.stringify(updated));
    } catch {
      // Frontend-only persistence; if storage fails, state is still updated for this session.
    }
  };

  useEffect(() => {
    const raw = getMockUser();
    if (!raw || typeof raw !== "object") {
      setUser(null);
      return;
    }
    setUser({
      id: String(raw.id ?? ""),
      name: String(raw.name ?? ""),
      email: typeof raw.email === "string" ? raw.email : undefined,
      avatarUrl: typeof raw.avatarUrl === "string" ? raw.avatarUrl : undefined,
    });
  }, []);

  // Future team state (initialized but not used when hasTeam = false)
  const teamMembers = hasTeam ? MOCK_TEAM_MEMBERS : [];
  const currentMember = hasTeam
    ? MOCK_TEAM_MEMBERS.find((m) => m.id === currentUserId)
    : null;

  const IntegrationWorkspace = ({ children }: { children: ReactNode }) => (
    <section className="space-y-5" aria-label="Integrations training">
      {children}
    </section>
  );

  const integrationLessonSlugs = ["channels", "payments", "business-tools", "communication", "data-sync", "review"] as const;
  const integrationLessonSequence = ["Channels", "Payments", "Business Tools", "Communication", "Data & Sync", "Review"] as const;
  const integrationLessonCompletionNames = integrationLessonSequence;
  const integrationLessonSlugToStep = Object.fromEntries(
    integrationLessonSlugs.map((slug, index) => [slug, index]),
  ) as Record<string, number>;

  const getIntegrationLessonStepFromPath = (pathname: string) => {
    const prefix = "/dashboard/integrations";
    if (!pathname.startsWith(prefix)) return 0;
    const slug = pathname.slice(prefix.length).replace(/^\/|\/+$/g, "");
    if (!slug) return 0;
    return integrationLessonSlugToStep[slug] ?? 0;
  };

  const getIntegrationLessonUrl = (step: number) => {
    const slug = integrationLessonSlugs[Math.min(Math.max(step, 0), integrationLessonSlugs.length - 1)] ?? "channels";
    return `/dashboard/integrations/${slug}`;
  };

  const pushIntegrationLessonUrl = (step: number) => {
    if (typeof window === "undefined") return;
    const url = getIntegrationLessonUrl(step);
    if (window.location.pathname !== url) {
      window.history.pushState({}, "", url);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const normalizeIntegrationPath = () => {
      const pathname = window.location.pathname;
      if (!pathname.startsWith("/dashboard/integrations")) return;

      const nextStep = getIntegrationLessonStepFromPath(pathname);
      const nextUrl = getIntegrationLessonUrl(nextStep);

      setSelected("Integrations");
      setActiveIntegrationStep(nextStep);

      if (pathname !== nextUrl) {
        window.history.replaceState({}, "", nextUrl);
      }
    };

    normalizeIntegrationPath();

    const handlePopState = () => {
      const nextPath = window.location.pathname;
      if (nextPath.startsWith("/dashboard/integrations")) {
        setSelected("Integrations");
        setActiveIntegrationStep(getIntegrationLessonStepFromPath(nextPath));
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const focusIntegrationLesson = (step: number, pushUrl = true) => {
    setActiveIntegrationStep(step);
    if (pushUrl) {
      pushIntegrationLessonUrl(step);
    }
    window.setTimeout(() => {
      const target = integrationLessonRef.current?.querySelector<HTMLElement>(`[data-lesson-index="${step}"]`);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstField = target.querySelector<HTMLElement>("input, select, textarea, button");
      firstField?.focus({ preventScroll: true });
    }, 0);
  };

  const completeIntegrationLesson = (step: number) => {
    setCompletedIntegrationSteps((current) => (current.includes(step) ? current : [...current, step]));
    setCompletionToast(`${integrationLessonCompletionNames[step]} complete — your integrations training path is moving forward.`);
    window.setTimeout(() => setCompletionToast(null), 2200);
    if (step < integrationLessonSequence.length - 1) {
      window.setTimeout(() => focusIntegrationLesson(step + 1), 500);
    }
  };

  const integrationLessonCardClass = (step: number) => `rounded-[28px] border bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 sm:p-6 ${completedIntegrationSteps.includes(step) ? "border-[#86EFAC] shadow-[0_14px_34px_rgba(34,197,94,0.14)]" : "border-[#E5E7EB]"}`;

  const canContinueIntegrationLesson = (_step: number) => true;

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

  const IntegrationLessonTabs = () => (
    <section className="relative z-20 rounded-[24px] border border-[#E5E7EB] bg-white px-3 py-3 shadow-[0_6px_18px_rgba(15,23,42,0.04)]" aria-label="Integrations onboarding progress">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#166534]">Integrations training curriculum</p>
          <p className="mt-1 text-base font-semibold text-[#111827]">Guide your AI through the systems it can connect to and use.</p>
          <p className="mt-3 text-sm text-[#475569]">Complete each lesson to confirm the right channels, payments, tools, and data sources are connected.</p>
        </div>
        <div className="rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#166534]">
          {completedIntegrationSteps.length}/{integrationLessonSequence.length} lessons complete
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {integrationLessonSequence.map((lesson, index) => {
          const active = activeIntegrationStep === index;
          const completed = completedIntegrationSteps.includes(index);
          return (
            <button
              key={lesson}
              type="button"
              onClick={() => focusIntegrationLesson(index)}
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

  const CurrentIntegrationLesson = () => {
    const lessonConfigs = [
      { title: "Channels", description: "Connect the customer channels where the AI communicates.", Icon: MessageCircle, section: "Channels" },
      { title: "Payments", description: "Connect payment systems the AI can use for payment-related tasks.", Icon: Tag, section: "Payments" },
      { title: "Business Tools", description: "Connect the business systems the AI can use to perform work.", Icon: Box, section: "Business Tools" },
      { title: "Communication", description: "Connect communication and marketing tools the AI can use to keep customers and the team informed.", Icon: Megaphone, section: "Communication & Marketing" },
      { title: "Data & Sync", description: "Connect external data sources that keep the AI's business information up to date.", Icon: Paperclip, section: "Data & Knowledge" },
      { title: "Review", description: "Review connected integrations and integration readiness before completing training.", Icon: Check, section: "Review" },
    ] as const;

    const activeLesson = lessonConfigs[activeIntegrationStep] ?? lessonConfigs[0];
    const lessonItems = activeLesson.section === "Review"
      ? []
      : (getIntegrationSection(activeLesson.section)?.items ?? []).map((item) => ({
          id: item.id,
          label: item.name,
          Icon: item.Icon,
          description: item.description,
          status: getIntegrationStatus(item.id),
        }));

    return (
      <section ref={integrationLessonRef} data-lesson-index={String(activeIntegrationStep)} className={integrationLessonCardClass(activeIntegrationStep)}>
        <div className="space-y-5">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]"><activeLesson.Icon className="h-5 w-5" /></div>
            <div>
              <p className="text-[20px] font-semibold text-[#111827]">{activeLesson.title}</p>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">{activeLesson.description}</p>
            </div>
          </div>

          {lessonItems.length > 0 ? (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {lessonItems.map((item) => renderIntegrationCard(item))}
            </div>
          ) : (
            <div className="rounded-[24px] border border-[#E5E7EB] bg-[#F8FAFC] p-5 text-sm text-[#475569]">
              Review your connected integrations and confirm your AI has the systems it needs.
            </div>
          )}

          {activeLesson.title === "Review" && (
            <div className="space-y-5 rounded-[24px] border border-[#EEF2F6] bg-white p-5">
              {[
                { title: "Channels", summary: getIntegrationSummaryForSection("Channels") },
                { title: "Payments", summary: getIntegrationSummaryForSection("Payments") },
                { title: "Business Tools", summary: getIntegrationSummaryForSection("Business Tools") },
                { title: "Communication", summary: getIntegrationSummaryForSection("Communication & Marketing") },
                { title: "Data & Sync", summary: getIntegrationSummaryForSection("Data & Knowledge") },
              ].map((group) => (
                <div key={group.title} className="rounded-[20px] border border-[#E5E7EF] bg-[#F8FAFC] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-[#111827]">{group.title}</p>
                    <span className="text-sm text-[#64748B]">{group.summary.total} integrations</span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-4">
                    {[
                      { label: "Connected", value: group.summary.connected },
                      { label: "Available", value: group.summary.available },
                      { label: "Setup required", value: group.summary.setup_required },
                      { label: "Coming soon", value: group.summary.coming_soon },
                    ].map((metric) => (
                      <div key={metric.label} className="rounded-[16px] border border-[#E5E7EF] bg-white p-3">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#64748B]">{metric.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-[#111827]">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between border-t border-[#EEF2F6] pt-4">
            <button
              type="button"
              onClick={() => focusIntegrationLesson(activeIntegrationStep - 1)}
              disabled={activeIntegrationStep === 0}
              className="text-sm font-semibold text-[#64748B] transition hover:text-[#111827] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => completeIntegrationLesson(activeIntegrationStep)}
              disabled={!canContinueIntegrationLesson(activeIntegrationStep)}
              className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155] disabled:cursor-not-allowed disabled:opacity-45"
            >
              {activeIntegrationStep === integrationLessonSequence.length - 1 ? "Finish training" : "Save & Continue"}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    );
  };

  const salesLessons = [
    'Sales Objectives',
    'Customer Qualification',
    'Sales Strategy',
    'Pricing & Negotiation',
    'Human Handoff',
    'Closing & Follow-up',
    'Review',
  ];

  const SkillsLessonTabs = () => {
    type SkillCapability = {
      id: string;
      name: string;
      description: string;
      enabled: boolean;
      requires?: string[];
    };

    const [activeSkillsStep, setActiveSkillsStep] = useState(0);
    const [communicationCapabilities, setCommunicationCapabilities] = useState<SkillCapability[]>([
      {
        id: 'comm-1',
        name: 'Answer customer questions',
        description: 'Enable the AI to respond to customer inquiries using your configured identity, knowledge, and catalogue settings.',
        enabled: true,
      },
      {
        id: 'comm-2',
        name: 'Explain products and services',
        description: 'Allow the AI to describe available products and services using your existing catalogue information.',
        enabled: true,
      },
      {
        id: 'comm-3',
        name: 'Provide business information',
        description: 'Permit the AI to share business details from your configured identity profile without creating new business information fields.',
        enabled: false,
      },
      {
        id: 'comm-4',
        name: 'Handle common customer requests',
        description: 'Let the AI manage frequent requests based on policies, FAQs, and configured customer workflows.',
        enabled: false,
      },
      {
        id: 'comm-5',
        name: 'Communicate in configured languages',
        description: 'Allow the AI to speak with customers in languages already set up in your identity settings.',
        enabled: true,
      },
    ]);

    const [leadsSalesCapabilities, setLeadsSalesCapabilities] = useState<SkillCapability[]>([
      {
        id: 'sales-1',
        name: 'Capture leads',
        description: 'Enable the AI to collect lead contact information and interest through customer interactions.',
        enabled: true,
      },
      {
        id: 'sales-2',
        name: 'Qualify leads',
        description: 'Allow the AI to assess lead readiness using configured identity and customer context, without adding qualification flows.',
        enabled: true,
      },
      {
        id: 'sales-3',
        name: 'Recommend products or services',
        description: 'Permit the AI to suggest relevant products or services based on catalogue data and customer needs.',
        enabled: false,
      },
      {
        id: 'sales-4',
        name: 'Upsell',
        description: 'Allow the AI to offer higher-value items or upgrades using existing catalogue and business information.',
        enabled: false,
      },
      {
        id: 'sales-5',
        name: 'Cross-sell',
        description: 'Enable the AI to suggest complementary products and services from your catalogue.',
        enabled: false,
      },
      {
        id: 'sales-6',
        name: 'Collect customer requirements',
        description: 'Allow the AI to gather customer needs and preferences without adding new CRM fields.',
        enabled: true,
      },
      {
        id: 'sales-7',
        name: 'Request human follow-up',
        description: 'Allow the AI to flag conversations that should be continued by a person when needed.',
        enabled: false,
      },
    ]);

    const skillsLessons = [
      'Communication',
      'Leads & Sales',
      'Bookings',
      'Orders & Payments',
      'Customer Support',
      'Follow-up',
      'Review',
    ];

    const toggleCommunicationCapability = (id: string) => {
      setCommunicationCapabilities((items) =>
        items.map((item) =>
          item.id === id ? { ...item, enabled: !item.enabled } : item,
        ),
      );
    };

    const toggleLeadsSalesCapability = (id: string) => {
      setLeadsSalesCapabilities((items) =>
        items.map((item) =>
          item.id === id ? { ...item, enabled: !item.enabled } : item,
        ),
      );
    };

    const [bookingCapabilities, setBookingCapabilities] = useState<SkillCapability[]>([
      {
        id: 'book-1',
        name: 'Book appointments',
        description: 'Enable the AI to create appointments using your connected calendar integration.',
        requires: ['google_calendar', 'outlook'],
        enabled: false,
      },
      {
        id: 'book-2',
        name: 'Check availability',
        description: 'Allow the AI to verify availability before booking without adding new scheduling fields.',
        requires: ['google_calendar', 'outlook'],
        enabled: false,
      },
      {
        id: 'book-3',
        name: 'Reschedule appointments',
        description: 'Permit the AI to move appointments when a connected calendar integration is available.',
        requires: ['google_calendar', 'outlook'],
        enabled: false,
      },
      {
        id: 'book-4',
        name: 'Cancel appointments',
        description: 'Allow the AI to cancel bookings when appointment integration is configured.',
        requires: ['google_calendar', 'outlook'],
        enabled: false,
      },
      {
        id: 'book-5',
        name: 'Send booking confirmations',
        description: 'Let the AI send confirmations through your connected communication or calendar integrations.',
        requires: ['google_calendar', 'outlook'],
        enabled: false,
      },
    ]);

    const integrationAvailable = (requires?: string[]) =>
      !!requires && requires.some((id) => isIntegrationConnected(id));

    const getBookingStatus = (requires: string[] | undefined, enabled: boolean) => {
      if (!requires || !integrationAvailable(requires)) return 'Requires integration';
      return enabled ? 'Enabled' : 'Available';
    };

    const toggleBookingCapability = (id: string) => {
      setBookingCapabilities((items) =>
        items.map((item) =>
          item.id === id ? { ...item, enabled: !item.enabled } : item,
        ),
      );
    };

    const [ordersPaymentsCapabilities, setOrdersPaymentsCapabilities] = useState<SkillCapability[]>([
      {
        id: 'order-1',
        name: 'Create orders',
        description: 'Enable the AI to initiate orders using your connected order or commerce integration.',
        requires: ['shopify', 'woocommerce', 'custom_api'],
        enabled: false,
      },
      {
        id: 'order-2',
        name: 'Check order status',
        description: 'Allow the AI to look up order status using existing order integrations.',
        requires: ['shopify', 'woocommerce', 'custom_api'],
        enabled: false,
      },
      {
        id: 'order-3',
        name: 'Generate quotations',
        description: 'Permit the AI to prepare order quotes using your current catalogue and commerce integrations.',
        requires: ['whatsapp', 'shopify', 'custom_api', 'woocommerce'].filter(Boolean),
        enabled: false,
      },
      {
        id: 'order-4',
        name: 'Send payment instructions',
        description: 'Allow the AI to provide payment directions when payment integrations are available.',
        requires: ['mpesa', 'stripe', 'paypal', 'flutterwave'].filter(Boolean),
        enabled: false,
      },
      {
        id: 'order-5',
        name: 'Confirm payment',
        description: 'Enable the AI to mark payments as confirmed when a connected payment integration exists.',
        requires: ['mpesa', 'stripe', 'paypal', 'flutterwave'].filter(Boolean),
        enabled: false,
      },
      {
        id: 'order-6',
        name: 'Update order information',
        description: 'Allow the AI to update order details using your connected commerce integrations.',
        requires: ['shopify', 'woocommerce', 'custom_api'],
        enabled: false,
      },
      {
        id: 'order-7',
        name: 'Cancel orders',
        description: 'Permit the AI to cancel orders when order management integrations are configured.',
        requires: ['shopify', 'woocommerce', 'custom_api'],
        enabled: false,
      },
    ]);

    const [customerSupportCapabilities, setCustomerSupportCapabilities] = useState<SkillCapability[]>([
      {
        id: 'support-1',
        name: 'Answer support questions',
        description: 'Enable the AI to respond to support inquiries using existing Knowledge and Policies content.',
        enabled: true,
      },
      {
        id: 'support-2',
        name: 'Troubleshoot common issues',
        description: 'Allow the AI to offer troubleshooting steps for known problems based on configured knowledge.',
        enabled: false,
      },
      {
        id: 'support-3',
        name: 'Explain documented solutions',
        description: 'Permit the AI to explain support solutions that already exist in your Knowledge workspace.',
        enabled: true,
      },
      {
        id: 'support-4',
        name: 'Create support requests',
        description: 'Allow the AI to record customer issues and create support requests without adding a new support system.',
        enabled: false,
      },
      {
        id: 'support-5',
        name: 'Collect information for support',
        description: 'Enable the AI to gather customer details needed by support agents while relying on existing Policies and Knowledge.',
        enabled: true,
      },
      {
        id: 'support-6',
        name: 'Escalate to a human',
        description: 'Allow the AI to escalate issues to a human when a request exceeds its configured support capabilities.',
        enabled: true,
      },
    ]);

    const [followUpCapabilities, setFollowUpCapabilities] = useState<SkillCapability[]>([
      {
        id: 'follow-1',
        name: 'Follow up with leads',
        description: 'Enable the AI to follow up on leads through connected messaging channels.',
        requires: ['whatsapp', 'facebook', 'instagram'],
        enabled: false,
      },
      {
        id: 'follow-2',
        name: 'Send appointment reminders',
        description: 'Allow the AI to send reminders using available messaging integrations.',
        requires: ['whatsapp', 'facebook', 'instagram'],
        enabled: false,
      },
      {
        id: 'follow-3',
        name: 'Send order updates',
        description: 'Permit the AI to notify customers about order changes through connected channels.',
        requires: ['whatsapp', 'facebook', 'instagram'],
        enabled: false,
      },
      {
        id: 'follow-4',
        name: 'Re-engage inactive conversations',
        description: 'Allow the AI to re-open inactive customer conversations when messaging integration is available.',
        requires: ['whatsapp', 'facebook', 'instagram'],
        enabled: false,
      },
      {
        id: 'follow-5',
        name: 'Request additional information',
        description: 'Enable the AI to ask customers for more details after an interaction.',
        requires: ['whatsapp', 'facebook', 'instagram'],
        enabled: true,
      },
      {
        id: 'follow-6',
        name: 'Notify a human when follow-up is required',
        description: 'Allow the AI to alert a human team member when it cannot complete follow-up on its own.',
        enabled: true,
      },
    ]);

    const getOrderPaymentStatus = (requires: string[] | undefined, enabled: boolean) => {
      if (!requires || !integrationAvailable(requires)) return 'Requires integration';
      return enabled ? 'Enabled' : 'Available';
    };

    const toggleOrderPaymentCapability = (id: string) => {
      setOrdersPaymentsCapabilities((items) =>
        items.map((item) =>
          item.id === id ? { ...item, enabled: !item.enabled } : item,
        ),
      );
    };

    const toggleCustomerSupportCapability = (id: string) => {
      setCustomerSupportCapabilities((items) =>
        items.map((item) =>
          item.id === id ? { ...item, enabled: !item.enabled } : item,
        ),
      );
    };

    const toggleFollowUpCapability = (id: string) => {
      setFollowUpCapabilities((items) =>
        items.map((item) =>
          item.id === id ? { ...item, enabled: !item.enabled } : item,
        ),
      );
    };

    return (
      <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#111827]">Skills lessons</p>
            <p className="mt-1 text-sm text-[#6B7280]">Select the Skills lesson you want to focus on.</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {skillsLessons.map((lesson, index) => {
            const active = index === activeSkillsStep;
            return (
              <button
                key={lesson}
                type="button"
                onClick={() => setActiveSkillsStep(index)}
                aria-current={active ? 'step' : undefined}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition-colors duration-200 ${active ? 'border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm' : 'border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]'}`}
              >
                <span>{lesson}</span>
              </button>
            );
          })}
        </div>

        {activeSkillsStep === 0 && (
          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
              <p className="text-sm font-semibold text-[#111827]">Communication</p>
              <p className="mt-2 text-sm text-[#6B7280]">Choose the communication tasks your AI employee can handle for customers.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {communicationCapabilities.map((capability) => (
                <div key={capability.id} className="flex flex-col justify-between gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">{capability.name}</p>
                    <p className="mt-2 text-sm text-[#64748B]">{capability.description}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className={`text-sm font-medium ${capability.enabled ? 'text-[#16A34A]' : 'text-[#64748B]'}`}>{capability.enabled ? 'Enabled' : 'Disabled'}</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={capability.enabled} onChange={() => toggleCommunicationCapability(capability.id)} className="sr-only peer" />
                      <div className="w-11 h-6 rounded-full bg-[#E5E7EB] peer-checked:bg-[#22C55E] peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors" />
                      <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm peer-checked:translate-x-5 transform transition-transform" />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSkillsStep === 1 && (
          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
              <p className="text-sm font-semibold text-[#111827]">Leads & Sales</p>
              <p className="mt-2 text-sm text-[#6B7280]">Choose the sales and lead-management tasks your AI employee can perform.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {leadsSalesCapabilities.map((capability) => (
                <div key={capability.id} className="flex flex-col justify-between gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">{capability.name}</p>
                    <p className="mt-2 text-sm text-[#64748B]">{capability.description}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className={`text-sm font-medium ${capability.enabled ? 'text-[#16A34A]' : 'text-[#64748B]'}`}>{capability.enabled ? 'Enabled' : 'Disabled'}</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={capability.enabled} onChange={() => toggleLeadsSalesCapability(capability.id)} className="sr-only peer" />
                      <div className="w-11 h-6 rounded-full bg-[#E5E7EB] peer-checked:bg-[#22C55E] peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors" />
                      <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm peer-checked:translate-x-5 transform transition-transform" />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSkillsStep === 2 && (
          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
              <p className="text-sm font-semibold text-[#111827]">Bookings</p>
              <p className="mt-2 text-sm text-[#6B7280]">Choose the booking and scheduling tasks your AI employee can perform.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {bookingCapabilities.map((capability) => {
                const status = getBookingStatus(capability.requires, capability.enabled);
                const available = integrationAvailable(capability.requires);
                return (
                  <div key={capability.id} className="flex flex-col justify-between gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">{capability.name}</p>
                      <p className="mt-2 text-sm text-[#64748B]">{capability.description}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <p className={`text-sm font-medium ${status === 'Enabled' ? 'text-[#16A34A]' : status === 'Available' ? 'text-[#0F766E]' : 'text-[#B91C1C]'}`}>{status}</p>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={capability.enabled && available} onChange={() => toggleBookingCapability(capability.id)} className="sr-only peer" disabled={!available} />
                        <div className={`w-11 h-6 rounded-full ${available ? 'bg-[#E5E7EB] peer-checked:bg-[#22C55E]' : 'bg-[#F1F5F9]'} peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors`} />
                        <div className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform ${available ? 'peer-checked:translate-x-5' : ''}`} />
                      </label>
                    </div>
                    {!available && capability.requires && (
                      <p className="text-xs text-[#B91C1C]">Requires: {capability.requires.map((id) => getIntegrationName(id)).join(', ')}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeSkillsStep === 3 && (
          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
              <p className="text-sm font-semibold text-[#111827]">Orders & Payments</p>
              <p className="mt-2 text-sm text-[#6B7280]">Choose the order and payment-related tasks your AI employee can perform.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {ordersPaymentsCapabilities.map((capability) => {
                const status = getOrderPaymentStatus(capability.requires, capability.enabled);
                const available = integrationAvailable(capability.requires);
                return (
                  <div key={capability.id} className="flex flex-col justify-between gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">{capability.name}</p>
                      <p className="mt-2 text-sm text-[#64748B]">{capability.description}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <p className={`text-sm font-medium ${status === 'Enabled' ? 'text-[#16A34A]' : status === 'Available' ? 'text-[#0F766E]' : 'text-[#B91C1C]'}`}>{status}</p>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={capability.enabled && available} onChange={() => toggleOrderPaymentCapability(capability.id)} className="sr-only peer" disabled={!available} />
                        <div className={`w-11 h-6 rounded-full ${available ? 'bg-[#E5E7EB] peer-checked:bg-[#22C55E]' : 'bg-[#F1F5F9]'} peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors`} />
                        <div className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform ${available ? 'peer-checked:translate-x-5' : ''}`} />
                      </label>
                    </div>
                    {!available && capability.requires && (
                      <p className="text-xs text-[#B91C1C]">Requires: {capability.requires.map((id) => getIntegrationName(id)).join(', ')}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeSkillsStep === 4 && (
          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
              <p className="text-sm font-semibold text-[#111827]">Customer Support</p>
              <p className="mt-2 text-sm text-[#6B7280]">Choose the support tasks your AI employee can handle before involving a human.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {customerSupportCapabilities.map((capability) => (
                <div key={capability.id} className="flex flex-col justify-between gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">{capability.name}</p>
                    <p className="mt-2 text-sm text-[#64748B]">{capability.description}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className={`text-sm font-medium ${capability.enabled ? 'text-[#16A34A]' : 'text-[#64748B]'}`}>{capability.enabled ? 'Enabled' : 'Disabled'}</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={capability.enabled} onChange={() => toggleCustomerSupportCapability(capability.id)} className="sr-only peer" />
                      <div className="w-11 h-6 rounded-full bg-[#E5E7EB] peer-checked:bg-[#22C55E] peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors" />
                      <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm peer-checked:translate-x-5 transform transition-transform" />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSkillsStep === 5 && (
          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
              <p className="text-sm font-semibold text-[#111827]">Follow-up</p>
              <p className="mt-2 text-sm text-[#6B7280]">Choose the follow-up tasks your AI employee can perform after a customer interaction.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {followUpCapabilities.map((capability) => {
                const available = capability.requires ? integrationAvailable(capability.requires) : true;
                const status = capability.requires ? (available ? (capability.enabled ? 'Enabled' : 'Available') : 'Requires integration') : (capability.enabled ? 'Enabled' : 'Available');
                return (
                  <div key={capability.id} className="flex flex-col justify-between gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5">
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">{capability.name}</p>
                      <p className="mt-2 text-sm text-[#64748B]">{capability.description}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <p className={`text-sm font-medium ${status === 'Enabled' ? 'text-[#16A34A]' : status === 'Available' ? 'text-[#0F766E]' : 'text-[#B91C1C]'}`}>{status}</p>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={capability.enabled && available} onChange={() => toggleFollowUpCapability(capability.id)} className="sr-only peer" disabled={!available} />
                        <div className={`w-11 h-6 rounded-full ${available ? 'bg-[#E5E7EB] peer-checked:bg-[#22C55E]' : 'bg-[#F1F5F9]'} peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors`} />
                        <div className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform ${available ? 'peer-checked:translate-x-5' : ''}`} />
                      </label>
                    </div>
                    {!available && capability.requires && (
                      <p className="text-xs text-[#B91C1C]">Requires: {capability.requires.map((id) => getIntegrationName(id)).join(', ')}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeSkillsStep === 6 && (
          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
              <p className="text-sm font-semibold text-[#111827]">Review</p>
              <p className="mt-2 text-sm text-[#6B7280]">Review what your AI employee can do before continuing.</p>
            </div>

            {[
              { title: 'Communication', items: communicationCapabilities },
              { title: 'Leads & Sales', items: leadsSalesCapabilities },
              { title: 'Bookings', items: bookingCapabilities },
              { title: 'Orders & Payments', items: ordersPaymentsCapabilities },
              { title: 'Customer Support', items: customerSupportCapabilities },
              { title: 'Follow-up', items: followUpCapabilities },
            ].map((section) => {
              const enabled = section.items.filter((capability) => capability.enabled);
              const requiresIntegration = section.items.filter((capability) => capability.requires && !integrationAvailable(capability.requires));
              const notEnabled = section.items.filter((capability) => !capability.enabled && !(capability.requires && !integrationAvailable(capability.requires)));
              const warnings = section.items.filter((capability) => capability.enabled && capability.requires && !integrationAvailable(capability.requires));

              return (
                <div key={section.title} className="rounded-[20px] border border-[#E5E7EB] bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">{section.title}</p>
                      <p className="mt-1 text-sm text-[#6B7280]">{section.title} capabilities grouped by current status.</p>
                    </div>
                    <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#166534]">{section.items.length} total</span>
                  </div>

                  {warnings.length > 0 && (
                    <div className="mb-4 rounded-[16px] border border-[#FCA5A5] bg-[#FEF2F2] p-4 text-sm text-[#B91C1C]">
                      <p className="font-semibold">Warning</p>
                      <p className="mt-1">{warnings.map((capability) => capability.name).join(', ')} requires a connected integration before it can be fully enabled.</p>
                    </div>
                  )}

                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">Enabled capabilities</p>
                      <ul className="mt-2 space-y-2 text-sm text-[#475569]">
                        {enabled.length > 0 ? enabled.map((capability) => (
                          <li key={capability.id} className="rounded-[12px] border border-[#E5E7EB] bg-[#F8FAFB] px-3 py-2">{capability.name}</li>
                        )) : <li className="text-[#94A3B8]">None yet</li>}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#111827]">Capabilities requiring integration</p>
                      <ul className="mt-2 space-y-2 text-sm text-[#475569]">
                        {requiresIntegration.length > 0 ? requiresIntegration.map((capability) => (
                          <li key={capability.id} className="rounded-[12px] border border-[#E5E7EB] bg-[#FFF7ED] px-3 py-2">
                            <div className="font-medium text-[#92400E]">{capability.name}</div>
                            <div className="text-xs text-[#7C2D12]">Requires: {capability.requires?.map((id) => getIntegrationName(id)).join(', ')}</div>
                          </li>
                        )) : <li className="text-[#94A3B8]">None</li>}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#111827]">Capabilities not enabled</p>
                      <ul className="mt-2 space-y-2 text-sm text-[#475569]">
                        {notEnabled.length > 0 ? notEnabled.map((capability) => (
                          <li key={capability.id} className="rounded-[12px] border border-[#E5E7EB] bg-[#F8FAFB] px-3 py-2">{capability.name}</li>
                        )) : <li className="text-[#94A3B8]">None</li>}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="mt-4 flex justify-end">
              <button type="button" onClick={() => { handleSaveChanges(); setActiveWorkspaceSection('Policies'); }} className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]">Save & Continue</button>
            </div>
          </div>
        )}
      </section>
    );
  };

  const SalesLessonTabs = () => {
    const [activeSalesStep, setActiveSalesStep] = useState(0);

    const initialObjectives = [
      'Sell products or services',
      'Generate qualified leads',
      'Book appointments',
      'Collect customer information',
      'Answer pre-sales questions',
      'Increase order value (Upsell)',
      'Retain existing customers',
    ];

    const salesLessons = [
      'Sales Objectives',
      'Customer Qualification',
      'Sales Strategy',
      'Pricing & Negotiation',
      'Human Handoff',
      'Closing & Follow-up',
      'Review',
    ];

    const [objectives, setObjectives] = useState(
      initialObjectives.map((label, i) => ({ id: `obj-${i + 1}`, label, selected: false })),
    );

    const dragId = useRef<string | null>(null);

    const onToggle = (id: string) => {
      setObjectives((s) => s.map((o) => (o.id === id ? { ...o, selected: !o.selected } : o)));
    };

    const onDragStart = (e: React.DragEvent, id: string) => {
      dragId.current = id;
      e.dataTransfer.effectAllowed = 'move';
    };

    const onDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    };

    const onDrop = (e: React.DragEvent, targetId: string) => {
      e.preventDefault();
      const srcId = dragId.current;
      if (!srcId || srcId === targetId) return;
      setObjectives((s) => {
        const copy = [...s];
        const srcIndex = copy.findIndex((x) => x.id === srcId);
        const tgtIndex = copy.findIndex((x) => x.id === targetId);
        if (srcIndex === -1 || tgtIndex === -1) return s;
        const [moved] = copy.splice(srcIndex, 1);
        copy.splice(tgtIndex, 0, moved);
        return copy;
      });
      dragId.current = null;
    };

    return (
      <div className="mt-4">
        <p className="mt-1 text-base font-semibold text-[#111827]">Teach your AI how to sell with focused lessons.</p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {salesLessons.map((lesson, index) => {
            const active = index === activeSalesStep;
            return (
              <button
                key={lesson}
                type="button"
                onClick={() => setActiveSalesStep(index)}
                aria-current={active ? 'step' : undefined}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition-colors duration-200 ${active ? 'border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm' : 'border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]'}`}
              >
                <span>{lesson}</span>
              </button>
            );
          })}
        </div>

        {/* Lesson content: implement Sales Objectives (step 0) and Customer Qualification (step 1) per request */}
        {activeSalesStep === 0 && (
          <section className="mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm">
            <div className="mb-3">
              <h3 className="text-[18px] font-semibold text-[#111827]">Sales Objectives</h3>
              <p className="mt-1 text-sm text-[#6B7280]">Choose what success looks like for your AI employee. These objectives help it prioritize customer conversations.</p>
            </div>

            <div className="grid gap-3">
              {objectives.map((obj, idx) => (
                <div
                  key={obj.id}
                  draggable
                  onDragStart={(e) => onDragStart(e, obj.id)}
                  onDragOver={onDragOver}
                  onDrop={(e) => onDrop(e, obj.id)}
                  className="flex items-center gap-3 rounded-[12px] border border-[#E5E7EB] bg-white p-3 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="select-none text-sm font-semibold text-[#64748B]">{idx + 1}</div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={obj.selected} onChange={() => onToggle(obj.id)} className="h-4 w-4 rounded border border-[#E5E7EB] text-[#111827]" />
                      <span className="text-sm text-[#111827]">{obj.label}</span>
                    </label>
                  </div>
                  <div className="ml-auto text-xs text-[#94A3B8]">Drag to reorder priority</div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-sm text-[#64748B]">Your AI will prioritize higher-ranked objectives during conversations.</p>
          </section>
        )}

        {activeSalesStep === 1 && (
          <section className="mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm">
            <div className="mb-3">
              <h3 className="text-[18px] font-semibold text-[#111827]">Customer Qualification</h3>
              <p className="mt-1 text-sm text-[#6B7280]">Teach your AI what information to collect before making recommendations.</p>
            </div>

            <QuestionsList />
          </section>
        )}
 
        {activeSalesStep === 2 && (
          <section className="mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm">
            <div className="mb-3">
              <h3 className="text-[18px] font-semibold text-[#111827]">Sales Strategy</h3>
              <p className="mt-1 text-sm text-[#6B7280]">Decide how your AI recommends products and services during conversations.</p>
            </div>

            <StrategyOptions />

            <p className="mt-3 text-sm text-[#64748B]">Your AI will use these strategies together with your catalogue.</p>
          </section>
        )}

        {activeSalesStep === 3 && (
          <section className="mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm">
            <div className="mb-3">
              <h3 className="text-[18px] font-semibold text-[#111827]">Pricing & Negotiation</h3>
              <p className="mt-1 text-sm text-[#6B7280]">Define what pricing information and negotiation authority your AI is allowed to use.</p>
            </div>

            <PricingNegotiation />
          </section>
        )}

        {activeSalesStep === 4 && (
          <section className="mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm">
            <div className="mb-3">
              <h3 className="text-[18px] font-semibold text-[#111827]">Human Handoff</h3>
              <p className="mt-1 text-sm text-[#6B7280]">Choose when your AI should stop the conversation and involve a human.</p>
            </div>

            <HumanHandoffOptions />

            <p className="mt-3 text-sm text-[#64748B]">The AI will immediately notify the assigned team member when these situations occur.</p>
          </section>
        )}

        {activeSalesStep === 5 && (
          <section className="mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm">
            <div className="mb-3">
              <h3 className="text-[18px] font-semibold text-[#111827]">Closing & Follow-up</h3>
              <p className="mt-1 text-sm text-[#6B7280]">Teach your AI how to end successful conversations and follow up with potential customers.</p>
            </div>

            <ClosingFollowUp />

            <p className="mt-3 text-sm text-[#64748B]">Follow-ups should only be sent if the customer has not completed the intended action.</p>
          </section>
        )}

        {activeSalesStep === 6 && (
          <section className="mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm">
            <div className="mb-3">
              <h3 className="text-[18px] font-semibold text-[#111827]">Review</h3>
              <p className="mt-1 text-sm text-[#6B7280]">Review your AI employee's sales behaviour before continuing.</p>
            </div>

            <div className="grid gap-3">
              {[
                { key: 'objectives', label: 'Sales Objectives', configured: objectives.some((o) => o.selected) || activeSalesStep > 0 },
                { key: 'qualification', label: 'Customer Qualification', configured: activeSalesStep > 1 },
                { key: 'strategy', label: 'Sales Strategy', configured: activeSalesStep > 2 },
                { key: 'pricing', label: 'Pricing & Negotiation', configured: activeSalesStep > 3 },
                { key: 'handoff', label: 'Human Handoff', configured: activeSalesStep > 4 },
                { key: 'closing', label: 'Closing & Follow-up', configured: activeSalesStep > 5 },
              ].map((sec) => (
                <div key={sec.key} className="flex items-center justify-between rounded-[12px] border border-[#E5E7EB] bg-white p-3">
                  <div className="text-sm text-[#111827]">{sec.label}</div>
                  <div className="flex items-center gap-3">
                    {sec.configured ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#166534]"><Check className="h-4 w-4" />Configured</span>
                    ) : (
                      <span className="text-sm text-[#94A3B8]">Not configured</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-end gap-3">
              <button type="button" onClick={() => { handleSaveChanges(); setActiveWorkspaceSection('Policies'); }} className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]">Save & Continue to Policies</button>
            </div>
          </section>
        )}
      </div>
    );
  };

  // QuestionsList: UI-only component for Lesson 2 (Customer Qualification)
  const QuestionsList = () => {
    type Q = { id: string; text: string; required: boolean; editing?: boolean };
    const [questions, setQuestions] = useState<Q[]>([
      { id: 'q-1', text: 'Budget', required: false },
      { id: 'q-2', text: 'Preferred location', required: false },
      { id: 'q-3', text: 'Timeline', required: false },
      { id: 'q-4', text: 'Company size', required: false },
      { id: 'q-5', text: 'Industry', required: false },
    ]);

    const addQuestion = () => {
      const id = `q-${Date.now()}`;
      setQuestions((s) => [...s, { id, text: 'New question', required: false, editing: true }]);
    };

    const toggleRequired = (id: string) => setQuestions((s) => s.map((q) => (q.id === id ? { ...q, required: !q.required } : q)));
    const deleteQuestion = (id: string) => setQuestions((s) => s.filter((q) => q.id !== id));
    const startEdit = (id: string) => setQuestions((s) => s.map((q) => (q.id === id ? { ...q, editing: true } : q)));
    const saveEdit = (id: string, text: string) => setQuestions((s) => s.map((q) => (q.id === id ? { ...q, text, editing: false } : q)));

    return (
      <div>
        <div className="space-y-3">
          {questions.map((q, idx) => (
            <div key={q.id} className="flex items-center gap-3 rounded-[12px] border border-[#E5E7EB] bg-white p-3 shadow-sm">
              <div className="select-none text-sm font-semibold text-[#64748B]">{idx + 1}</div>

              <div className="flex-1">
                {q.editing ? (
                  <div className="flex gap-2">
                    <input defaultValue={q.text} className="w-full rounded-md border border-[#E5E7EB] px-2 py-1 text-sm" onBlur={(e) => saveEdit(q.id, e.target.value)} />
                    <button onClick={() => saveEdit(q.id, q.text)} className="rounded-md border border-[#E5E7EB] px-2 py-1 text-sm">Save</button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#111827]">{q.text}</div>
                    <div className="ml-4 flex items-center gap-2">
                      <label className="inline-flex items-center gap-2 text-sm text-[#475569]"><input type="checkbox" checked={q.required} onChange={() => toggleRequired(q.id)} /> Required</label>
                      <button onClick={() => startEdit(q.id)} className="rounded-[8px] border border-[#E5E7EB] px-2 py-1 text-xs">Edit</button>
                      <button onClick={() => deleteQuestion(q.id)} className="rounded-[8px] border border-[#FECACA] px-2 py-1 text-xs text-[#B91C1C]">Delete</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-[#64748B]">The AI should later use these questions during conversations.</p>
          <button type="button" onClick={addQuestion} className="inline-flex items-center gap-2 rounded-[10px] bg-[#111827] px-3 py-2 text-sm font-semibold text-white">Add Question</button>
        </div>
      </div>
    );
  };

  // StrategyOptions: UI-only component for Lesson 3 (Sales Strategy)
  const StrategyOptions = () => {
    const initial = [
      'Recommend the best match',
      'Recommend best sellers',
      'Recommend premium options',
      'Recommend budget alternatives',
      'Recommend complementary items',
      'Recommend promotional items',
      'Recommend newest items',
    ];
    const [options, setOptions] = useState(initial.map((label, i) => ({ id: `s-${i + 1}`, label, enabled: false })));

    const toggle = (id: string) => setOptions((s) => s.map((o) => (o.id === id ? { ...o, enabled: !o.enabled } : o)));

    return (
      <div className="grid gap-3">
        {options.map((opt) => (
          <div key={opt.id} className="flex items-center gap-3 rounded-[12px] border border-[#E5E7EB] bg-white p-3 shadow-sm">
            <label className="flex items-center gap-3 w-full cursor-pointer">
              <input type="checkbox" checked={opt.enabled} onChange={() => toggle(opt.id)} className="h-4 w-4 rounded border border-[#E5E7EB] text-[#111827]" />
              <span className="text-sm text-[#111827]">{opt.label}</span>
            </label>
          </div>
        ))}
      </div>
    );
  };

  // PricingNegotiation: UI-only component for Lesson 4 (Pricing & Negotiation)
  const PricingNegotiation = () => {
    const [permissions, setPermissions] = useState([
      { id: 'p-share', label: 'Share prices', enabled: false },
      { id: 'p-quote', label: 'Generate quotations', enabled: false },
      { id: 'p-discount', label: 'Offer discounts', enabled: false },
      { id: 'p-coupons', label: 'Apply coupons', enabled: false },
      { id: 'p-reserve', label: 'Reserve inventory', enabled: false },
    ]);

    const togglePerm = (id: string) => setPermissions((s) => s.map((x) => (x.id === id ? { ...x, enabled: !x.enabled } : x)));

    const [maxDiscount, setMaxDiscount] = useState(10);
    const [approval, setApproval] = useState<'always' | 'above' | 'never'>('above');

    return (
      <div className="space-y-4">
        <div className="grid gap-3">
          {permissions.map((perm) => (
            <label key={perm.id} className="flex items-center gap-3 rounded-[12px] border border-[#E5E7EB] bg-white p-3 shadow-sm cursor-pointer">
              <input type="checkbox" checked={perm.enabled} onChange={() => togglePerm(perm.id)} className="h-4 w-4 rounded border border-[#E5E7EB] text-[#111827]" />
              <span className="text-sm text-[#111827]">{perm.label}</span>
            </label>
          ))}
        </div>

        <div className="rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-[#111827]">Maximum discount</p>
          <div className="mt-3 flex items-center gap-4">
            <input type="range" min={0} max={20} value={maxDiscount} onChange={(e) => setMaxDiscount(Number(e.target.value))} className="w-full" />
            <div className="w-20 text-right text-sm font-semibold text-[#111827]">{maxDiscount}%</div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold text-[#111827]">Human approval</p>
            <div className="mt-2 flex gap-3">
              <label className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 ${approval === 'always' ? 'border-[#111827] bg-[#111827] text-white' : 'border-[#E5E7EB] bg-white text-[#475569]'}`}>
                <input type="radio" name="approval" checked={approval === 'always'} onChange={() => setApproval('always')} className="sr-only" />
                Always
              </label>
              <label className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 ${approval === 'above' ? 'border-[#111827] bg-[#111827] text-white' : 'border-[#E5E7EB] bg-white text-[#475569]'}`}>
                <input type="radio" name="approval" checked={approval === 'above'} onChange={() => setApproval('above')} className="sr-only" />
                Above maximum discount
              </label>
              <label className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 ${approval === 'never' ? 'border-[#111827] bg-[#111827] text-white' : 'border-[#E5E7EB] bg-white text-[#475569]'}`}>
                <input type="radio" name="approval" checked={approval === 'never'} onChange={() => setApproval('never')} className="sr-only" />
                Never
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HumanHandoffOptions = () => {
    const triggers = [
      'Customer requests a human',
      'Complaint',
      'Refund request',
      'Payment issue',
      'Large order',
      'Custom quotation',
      'Technical issue',
      'VIP customer',
    ];
    const [selected, setSelected] = useState<string[]>([]);
    const toggle = (label: string) => setSelected((s) => (s.includes(label) ? s.filter((x) => x !== label) : [...s, label]));

    return (
      <div className="grid gap-3">
        {triggers.map((t, i) => (
          <button key={t} type="button" onClick={() => toggle(t)} className={`text-left rounded-[12px] border p-3 transition ${selected.includes(t) ? 'border-[#22C55E] bg-[#F7FEF9]' : 'border-[#E5E7EB] bg-white hover:shadow-sm'}`}>
            <div className="flex items-center justify-between">
              <div className="text-sm text-[#111827]">{t}</div>
              <div className="text-sm text-[#64748B]">{selected.includes(t) ? 'Selected' : 'Tap to select'}</div>
            </div>
          </button>
        ))}
      </div>
    );
  };

  const ClosingFollowUp = () => {
    const actions = [
      'Share checkout link',
      'Book appointment',
      'Send quotation',
      'Collect phone number',
      'Collect email',
      'Connect to staff',
    ];
    const [selectedActions, setSelectedActions] = useState<string[]>([]);
    const toggleAction = (label: string) => setSelectedActions((s) => (s.includes(label) ? s.filter((x) => x !== label) : [...s, label]));

    const followUpOptions = ['Never', 'After 2 hours', 'After 24 hours', 'After 3 days'];
    const [followUpTiming, setFollowUpTiming] = useState<string>(followUpOptions[2]);

    return (
      <div className="space-y-4">
        <div className="grid gap-3">
          {actions.map((a) => (
            <label key={a} className={`flex items-center gap-3 rounded-[12px] border p-3 ${selectedActions.includes(a) ? 'border-[#22C55E] bg-[#F7FEF9]' : 'border-[#E5E7EB] bg-white'}`}>
              <input type="checkbox" checked={selectedActions.includes(a)} onChange={() => toggleAction(a)} className="h-4 w-4 rounded border border-[#E5E7EB] text-[#111827]" />
              <span className="text-sm text-[#111827]">{a}</span>
            </label>
          ))}
        </div>

        <div className="rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-[#111827]">Follow-up timing</p>
          <div className="mt-3 flex items-center gap-3">
            <select value={followUpTiming} onChange={(e) => setFollowUpTiming(e.target.value)} className="rounded-md border border-[#E5E7EB] px-3 py-2 text-sm">
              {followUpOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <div className="text-sm text-[#64748B]">Selected: {followUpTiming}</div>
          </div>
        </div>
      </div>
    );
  };

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
            {renderSidebarNavItems("icon")}
          </nav>
          <div className="px-3 pb-5">
            {user && !(sidebarHovered || sidebarForceOpen) ? (
              <ProfileMenu
                user={user}
                onEditProfile={handleEditProfile}
                onAccountSettings={handleAccountSettings}
                onLogout={handleLogout}
                variant="compact"
              />
            ) : null}
          </div>
          {(sidebarHovered || sidebarForceOpen) && (
            <div
              className="fixed inset-y-0 left-0 z-70 w-[248px] min-w-[248px] bg-[#FFFFFF] border-r border-[#E5E7EB]/10 shadow-[0_18px_48px_rgba(15,23,42,0.12)] transition-all duration-200 ease-out"
              onMouseEnter={() => setSidebarHovered(true)}
              onMouseLeave={() => setSidebarHovered(false)}
            >
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
                  {renderSidebarNavItems("expanded")}
                </nav>
                <div className="border-t border-[#E5E7EB]/50 px-4 py-4">
                  {user ? (
                    <ProfileMenu
                      user={user}
                      onEditProfile={handleEditProfile}
                      onAccountSettings={handleAccountSettings}
                      onLogout={handleLogout}
                      onOpenChange={(open) => setSidebarForceOpen(open)}
                    />
                  ) : null}
                </div>
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
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#FFFFFF] border-r border-[#E5E7EB]/10 flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-[#E5E7EB]/50 p-4">
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

            <nav className="flex-1 overflow-y-auto px-4 py-4">
              {renderSidebarNavItems("mobile")}
            </nav>
            <div className="flex-shrink-0 border-t border-[#E5E7EB]/50 p-4">
              {user ? (
                <ProfileMenu
                  user={user}
                  onEditProfile={handleEditProfile}
                  onAccountSettings={handleAccountSettings}
                  onLogout={handleLogout}
                />
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* Main content area. On desktop, add left padding to allow for fixed sidebar. On mobile, add top padding to account for the header. */}
      <main className="h-full overflow-x-hidden pt-14 md:pt-0 md:pl-[72px]">
        <div className={`${selected === "Integrations" ? "max-w-[1600px]" : "max-w-7xl"} mx-auto h-full p-4 overflow-x-hidden`}>
          {/* Render placeholder pages based on selected state */}
          {selected === "Home" && (
            <HomeWorkspace
              userName={user?.name || "there"}
              aiEmployeeLaunched={aiEmployeeLaunched}
              aiEnabled={aiEnabled}
              attentionConversations={INBOX_CONVERSATIONS}
              CARD={CARD}
              SECTION_HEADING={SECTION_HEADING}
              CARD_TITLE={CARD_TITLE}
            />
          )}
          {selected === "Inbox" && (
            <InboxWorkspace
              conversations={INBOX_CONVERSATIONS}
              messages={INBOX_MESSAGES}
              customerProfiles={CUSTOMER_PROFILES}
              ownerNames={OWNER_NAMES}
              personalContacts={personalContacts}
              CARD={CARD}
              PANEL_TITLE={PANEL_TITLE}
              SECONDARY={SECONDARY}
              TIME_LABEL={TIME_LABEL}
              STATUS_CHIP={STATUS_CHIP}
              CUSTOMER_NAME={CUSTOMER_NAME}
              SECTION_HEADING={SECTION_HEADING}
            />
          )}
          {selected === "Customers" && (
            <CustomersWorkspace
              customers={CUSTOMERS}
              inboxConversations={INBOX_CONVERSATIONS}
              setSelected={setSelected}
              setActiveConversation={setActiveConversation}
            />
          )}

          {(selected === "AI Employee" || selected === "Training") && (
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
                        ? "Catalogue workspace"
                        : activeWorkspaceSection === "Skills"
                        ? "Skills"
                        : activeWorkspaceSection === "Policies"
                        ? "Policies"
                        : activeWorkspaceSection === "Sales Playbooks"
                        ? "Sales Playbook"
                        : activeWorkspaceSection === "Integrations"
                        ? "Integrations"
                        : "KNOWLEDGE TRAINING"}
                    </p>
                    <p className="mt-1 text-sm text-[#475569]">
                      {activeWorkspaceSection === "Identity"
                        ? "Onboard your AI employee one focused decision at a time."
                        : activeWorkspaceSection === "Catalogue"
                        ? "Manage your AI catalogue so it can recommend products and services with confidence."
                        : activeWorkspaceSection === "Skills"
                        ? "Choose what your AI employee can do for your customers and your business."
                        : activeWorkspaceSection === "Policies"
                        ? "Teach your AI employee the rules, boundaries, and customer policies it must follow."
                        : activeWorkspaceSection === "Sales Playbooks"
                        ? "Train your AI employee to qualify customers, recommend the right solutions, negotiate within your rules, know when to involve a human, and confidently close conversations."
                        : activeWorkspaceSection === "Integrations"
                        ? "Connect your AI employee to the channels and business tools it needs to serve customers and get work done."
                        : "Build and refine your knowledge base so your AI responds with relevant, trusted answers."}
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
                                          Business Industry
                                        </label>
                                        <div className="relative">
                                          <button
                                            type="button"
                                            id="industry"
                                            onClick={() => {
                                              setIsIndustryDropdownOpen((current) => !current);
                                              setIndustrySearch("");
                                            }}
                                            className={`${AI_TRAINING_FIELD} flex w-full items-center justify-between text-left`}
                                          >
                                            <span className={businessIndustryValue ? "text-[#111827]" : "text-[#64748B]"}>
                                              {businessIndustryValue || "Select an industry"}
                                            </span>
                                            <ChevronDown className={`h-4 w-4 text-[#64748B] transition ${isIndustryDropdownOpen ? "rotate-180" : ""}`} />
                                          </button>
                                          {businessIndustryValue && <Check className="pointer-events-none absolute right-10 top-[13px] h-4 w-4 text-[#22C55E]" aria-label="Business industry is ready" />}
                                          {isIndustryDropdownOpen && (
                                            <div className="absolute z-20 mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-[0_12px_24px_rgba(15,23,42,0.12)]">
                                              <div className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-2">
                                                <Search className="h-4 w-4 text-[#64748B]" />
                                                <input
                                                  type="text"
                                                  value={industrySearch}
                                                  onChange={(event) => setIndustrySearch(event.target.value)}
                                                  placeholder="Search industries"
                                                  className="w-full border-none bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#94A3B8]"
                                                />
                                              </div>
                                              <div className="mt-2 max-h-56 space-y-1 overflow-y-auto">
                                                {filteredIndustryOptions.map((option) => (
                                                  <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => handleIndustrySelection(option)}
                                                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition ${businessInfo.type === option ? "bg-[#ECFDF5] text-[#166534]" : "text-[#334155] hover:bg-[#F8FAFC] hover:text-[#111827]"}`}
                                                  >
                                                    <span>{option}</span>
                                                    {businessInfo.type === option && <Check className="h-4 w-4 text-[#22C55E]" />}
                                                  </button>
                                                ))}
                                                {filteredIndustryOptions.length === 0 && (
                                                  <div className="px-3 py-2 text-sm text-[#64748B]">No industries found.</div>
                                                )}
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                        {businessInfo.type === "Other" && (
                                          <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-[#111827]" htmlFor="other-industry">
                                              Specify Industry
                                            </label>
                                            <input
                                              id="other-industry"
                                              value={otherIndustryValue}
                                              onChange={handleOtherIndustryChange}
                                              placeholder="Enter your industry"
                                              className={`${AI_TRAINING_FIELD} w-full`}
                                            />
                                          </div>
                                        )}
                                      </div>

                                      <div className="relative w-full space-y-3 md:col-span-2">
                                        <label className="block text-sm font-semibold text-[#111827]">
                                          Business Model
                                        </label>
                                        <div className="grid gap-2 sm:grid-cols-2">
                                          {[
                                            "Physical Products",
                                            "Services",
                                            "Digital Products",
                                            "Subscriptions",
                                            "Memberships",
                                            "Rentals",
                                          ].map((option) => {
                                            const isSelected = businessModelSelections.includes(option);
                                            return (
                                              <label
                                                key={option}
                                                className={`flex items-center gap-3 rounded-xl border px-3 py-3 text-sm font-medium transition ${isSelected ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#334155] hover:border-[#86EFAC] hover:bg-[#F8FAFC]"}`}
                                              >
                                                <input
                                                  type="checkbox"
                                                  checked={isSelected}
                                                  onChange={() => toggleBusinessModelSelection(option)}
                                                  className="h-4 w-4 rounded border-[#CBD5E1] text-[#22C55E] focus:ring-[#22C55E]"
                                                />
                                                <span>{option}</span>
                                              </label>
                                            );
                                          })}
                                        </div>
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
                                      disabled={!businessInfo.name.trim() || !businessIndustryValue || !businessInfo.country.trim() || !businessInfo.about.trim()}
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
                      <div className="w-full max-w-[1600px] min-w-0 space-y-6 overflow-x-hidden lg:space-y-6">
                        <div className="rounded-[32px] border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)] sm:p-7">
                          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                            <div className="min-w-0">
                              <h1 className="text-3xl font-semibold tracking-[-0.02em] text-[#111827]">Catalogue Workspace</h1>
                              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#475569]">Manage your catalogue items, pricing, inventory, media, and AI readiness in one modern workspace.</p>
                            </div>

                            <div className="w-full lg:w-[340px]">
                              <div className="lg:sticky lg:top-4 rounded-[26px] border border-[#E5E7EB] bg-[#F8FBFF] p-4 shadow-sm">
                                <div className="flex items-center justify-between gap-4">
                                  <div className="min-w-0">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#64748B]">Catalogue Health</p>
                                    <p className="mt-1 text-sm font-semibold text-[#111827]">AI readiness</p>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-[11px] text-[#64748B]">Overall</div>
                                    <div className="mt-1 text-lg font-semibold text-[#111827]">{catalogueHealthConfidence}%</div>
                                  </div>
                                </div>

                                <div className="mt-4 space-y-3 text-sm text-[#475569]">
                                  {[
                                    {
                                      label: "AI Readiness",
                                      percentage: catalogueHealthMetrics.find((item) => item.label === "AI Ready")?.percentage ?? 0,
                                    },
                                    {
                                      label: "Products",
                                      percentage: catalogueHealthMetrics.find((item) => item.label === "Products")?.percentage ?? 0,
                                    },
                                    {
                                      label: "Prices",
                                      percentage: catalogueHealthMetrics.find((item) => item.label === "Prices")?.percentage ?? 0,
                                    },
                                    {
                                      label: "Media",
                                      percentage: catalogueHealthMetrics.find((item) => item.label === "Media")?.percentage ?? 0,
                                    },
                                    {
                                      label: "FAQs",
                                      percentage:
                                        catalogProducts.length > 0
                                          ? Math.round(
                                              (catalogProducts.filter((product) => (product as any).faqs && (product as any).faqs.length > 0).length / catalogProducts.length) * 100,
                                            )
                                          : 0,
                                    },
                                  ].map((item) => (
                                    <div key={item.label} className="space-y-2">
                                      <div className="flex items-center justify-between gap-2 text-xs text-[#475569]">
                                        <span>{item.label}</span>
                                        <span className="font-semibold text-[#111827]">{item.percentage}%</span>
                                      </div>
                                      <div className="h-2 rounded-full bg-[#E5E7EB]">
                                        <div className="h-full rounded-full bg-[#22C55E]" style={{ width: `${item.percentage}%` }} />
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <div className="mt-4 rounded-[12px] border border-[#E5E7EB] bg-white p-3 text-[11px] text-[#475569]">
                                  <div className="flex items-center justify-between gap-2 py-1">
                                    <span>Missing descriptions</span>
                                    <span className="font-semibold text-[#111827]">{catalogProducts.filter((p) => !(p.description && p.description.trim().length > 0)).length}</span>
                                  </div>
                                  <div className="flex items-center justify-between gap-2 py-1">
                                    <span>Missing images</span>
                                    <span className="font-semibold text-[#111827]">{catalogProducts.filter((p) => !(p.image && p.image.trim().length > 0) && ((p.mediaAssets ?? []).length === 0)).length}</span>
                                  </div>
                                  <div className="flex items-center justify-between gap-2 py-1">
                                    <span>Missing FAQs</span>
                                    <span className="font-semibold text-[#111827]">{catalogProducts.filter((p) => !((p as any).faqs && (p as any).faqs.length > 0)).length}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-5 w-full xl:max-w-[1100px]">
                            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                              <div className="flex items-center gap-3">
                                <button type="button" onClick={handleAddItemClick} className="inline-flex h-11 items-center justify-center rounded-[16px] bg-[#111827] px-5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#1F2937]">{addButtonLabel}</button>
                                <div className="relative">
                                  <button type="button" onClick={() => setImportMenuOpen((s) => !s)} className="inline-flex h-11 items-center justify-center rounded-[16px] border border-[#E5E7EB] bg-white px-5 text-sm font-semibold text-[#111827] shadow-sm transition duration-200 hover:bg-[#F8FAFB]">
                                    Import
                                    <ChevronDown className="ml-2 h-4 w-4 text-[#6B7280]" />
                                  </button>
                                  {importMenuOpen && (
                                    <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-[18px] border border-[#E5E7EB] bg-white shadow-lg">
                                      <label className="block cursor-pointer px-3 py-3 text-sm text-[#111827] transition hover:bg-[#F8FAFB]">
                                        CSV
                                        <input type="file" accept=".csv" className="hidden" onChange={(e) => { setImportMenuOpen(false); simulateImport('CSV', e.target.files?.[0] ?? null); }} />
                                      </label>
                                      <label className="block cursor-pointer px-3 py-3 text-sm text-[#111827] transition hover:bg-[#F8FAFB]">
                                        Excel
                                        <input type="file" accept=".xlsx,.xls" className="hidden" onChange={(e) => { setImportMenuOpen(false); simulateImport('Excel', e.target.files?.[0] ?? null); }} />
                                      </label>
                                      <label className="block cursor-pointer rounded-b-[18px] px-3 py-3 text-sm text-[#111827] transition hover:bg-[#F8FAFB]">
                                        PDF
                                        <input type="file" accept=".pdf" className="hidden" onChange={(e) => { setImportMenuOpen(false); simulateImport('PDF Catalogues', e.target.files?.[0] ?? null); }} />
                                      </label>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid gap-6">
                            {(() => {
                              const query = productSearch.trim().toLowerCase();
                              const filtered = catalogProducts
                                .filter((product) => {
                                  if (!query) return true;

                                  const searchableText = [
                                    product.name,
                                    product.category,
                                    product.sku ?? "",
                                    ...(product.tags ?? []),
                                    product.description,
                                  ]
                                    .filter((value): value is string => typeof value === "string")
                                    .join(" ")
                                    .toLowerCase();

                                  return searchableText.includes(query);
                                })
                                .filter((product) => {
                                  if (selectedCatalogueTab === "All") return true;
                                  const expectedType = CATALOG_TAB_TO_PRODUCT_TYPE[selectedCatalogueTab as Exclude<CatalogueTab, "All">];
                                  return expectedType ? product.type === expectedType : true;
                                });

                              return (
                                <div className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                                  <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                                    <div>
                                      <p className="text-sm font-semibold text-[#111827]">Catalogue items</p>
                                      <p className="mt-2 text-sm text-[#64748B]">Products and services are managed as catalogue items. Update pricing, inventory, media, and AI readiness directly on each item.</p>
                                    </div>
                                    <div className="inline-flex items-center gap-3 rounded-[18px] border border-[#E5E7EB] bg-[#F8FAFB] px-4 py-3 text-sm font-semibold text-[#111827] shadow-sm">
                                      <span>{filtered.length}</span>
                                      <span className="text-[#64748B]">items</span>
                                    </div>
                                  </div>
<div className="mt-4 flex flex-wrap items-center gap-3">
                                          <div className="flex flex-wrap items-center gap-3">
                                            {[...sortedCatalogueFilterTabs].map((tab) => (
                                              <button
                                                key={tab}
                                                type="button"
                                                onClick={() => setSelectedCatalogueTab(tab)}
                                                className={`inline-flex h-10 items-center justify-center rounded-full border px-4 text-xs font-semibold transition-colors duration-200 ${selectedCatalogueTab === tab ? 'border-[#111827] bg-[#111827] text-white shadow-sm' : 'border-[#E5E7EB] bg-white text-[#475569] hover:border-[#CBD5E1] hover:bg-[#F8FAFB]'}`}
                                        >
                                          {tab}
                                        </button>
                                      ))}
                                    </div>

                                    <div className="ml-auto inline-flex items-center gap-2 rounded-full bg-white/50 p-1">
                                      <button aria-label="Grid view" title="Grid view" onClick={() => setCatalogView('grid')} className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${catalogView === 'grid' ? 'bg-[#111827] text-white shadow-sm' : 'text-[#475569] hover:bg-[#F3F4F6]'}`}>
                                        <LayoutGrid className="h-4 w-4" />
                                      </button>
                                      <button aria-label="Table view" title="Table view" onClick={() => setCatalogView('table')} className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${catalogView === 'table' ? 'bg-[#111827] text-white shadow-sm' : 'text-[#475569] hover:bg-[#F3F4F6]'}`}>
                                        <List className="h-4 w-4" />
                                      </button>
                                    </div>
                                  </div>

                                  <div className="mt-3 flex flex-wrap items-center gap-3">
                                    <button type="button" onClick={() => {}} className="inline-flex h-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-4 text-xs font-semibold text-[#111827] shadow-sm transition-colors duration-200 hover:border-[#CBD5E1] hover:bg-[#F8FAFB]">
                                      Total Items: {filtered.length}
                                    </button>
                                    <button type="button" onClick={() => {}} className="inline-flex h-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-4 text-xs font-semibold text-[#111827] shadow-sm transition hover:border-[#CBD5E1] hover:bg-[#F8FAFB]">
                                      Low Stock: {filtered.filter((product) => typeof (product as any).currentStock === 'number' && (product as any).currentStock <= 5).length}
                                    </button>
                                    <button type="button" onClick={() => {}} className="inline-flex h-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-4 text-xs font-semibold text-[#111827] shadow-sm transition hover:border-[#CBD5E1] hover:bg-[#F8FAFB]">
                                      Missing Images: {filtered.filter((product) => !(product.image && product.image.trim().length > 0) && ((product.mediaAssets ?? []).length === 0)).length}
                                    </button>
                                    <button type="button" onClick={() => {}} className="inline-flex h-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-4 text-xs font-semibold text-[#111827] shadow-sm transition hover:border-[#CBD5E1] hover:bg-[#F8FAFB]">
                                      Missing FAQs: {filtered.filter((product) => !((product as any).faqs && (product as any).faqs.length > 0)).length}
                                    </button>
                                    <button type="button" onClick={() => {}} className="inline-flex h-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-4 text-xs font-semibold text-[#111827] shadow-sm transition hover:border-[#CBD5E1] hover:bg-[#F8FAFB]">
                                      AI Ready: {filtered.length > 0 ? Math.round(filtered.filter((product) => product.name?.trim() && product.category?.trim() && product.description?.trim()).length / filtered.length * 100) : 0}%
                                    </button>
                                  </div>

                                  {catalogProducts.length === 0 ? (
                                    <div className="mt-6 rounded-[28px] border border-dashed border-[#CBD5E1] bg-[#F8FAFB] p-8 text-center shadow-sm">
                                      <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-[2rem] bg-white shadow-sm">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-[#DBEAFE] text-[#1D4ED8]">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" className="h-16 w-16">
                                            <rect x="8" y="20" width="48" height="32" rx="8" fill="#EFF6FF" />
                                            <path d="M16 28h32" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                                            <path d="M16 36h20" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                                            <path d="M30 20v-8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v8" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                                            <circle cx="44" cy="34" r="4" fill="#2563EB" />
                                          </svg>
                                        </div>
                                      </div>
                                      <p className="text-2xl font-semibold text-[#111827]">No catalogue items yet</p>
                                      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#475569]">Add your first product or service to train your AI.</p>
                                      <div className="mt-6 flex justify-center">
                                        <button type="button" onClick={handleAddItemClick} className="inline-flex h-12 items-center justify-center rounded-[16px] bg-[#111827] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1F2937]">Add Item</button>
                                      </div>
                                    </div>
                                  ) : filtered.length === 0 ? (
                                    <div className="mt-6 rounded-[28px] border border-dashed border-[#CBD5E1] bg-[#F8FAFB] p-10 text-center shadow-sm">
                                      <div className="mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-[2rem] bg-white shadow-sm">
                                        <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-[#DBEAFE] text-[#1D4ED8]">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="h-12 w-12">
                                            <rect x="8" y="14" width="32" height="20" rx="6" fill="#EFF6FF" />
                                            <path d="M14 20h20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M14 26h12" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                                            <circle cx="34" cy="18" r="3" fill="#2563EB" />
                                            <path d="M34 22v8" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M31 25h6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                                          </svg>
                                        </div>
                                      </div>
                                      <p className="text-2xl font-semibold text-[#111827]">No items found.</p>
                                      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#475569]">The selected filter returned no catalogue items. Add your first item to populate the catalogue workspace.</p>
                                      <button type="button" onClick={handleAddItemClick} className="mt-6 inline-flex items-center justify-center rounded-[16px] bg-[#111827] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1F2937]">Add your first item</button>
                                    </div>
                                  ) : (
                                    <div className="mt-6">
                                      {catalogView === 'grid' ? (
                                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                          {filtered.map((item) => {
                                            const readinessLabel = getCatalogueItemReadinessLabel(item);
                                            const isAvailable = item.availability === 'In stock' || item.availability === 'Available';
                                            const itemTypeLabel = {
                                              Product: 'Product',
                                              Service: 'Service',
                                              Subscription: 'Subscription',
                                              'Digital Product': 'Digital',
                                              Rental: 'Rental',
                                              Membership: 'Membership',
                                            }[item.type] ?? item.type;
                                            const itemCategory = typeof item.category === 'string' ? item.category.trim() : '';
                                            const hasFaqs = (item as any).faqs && (item as any).faqs.length > 0;
                                            const faqLabel = hasFaqs ? 'FAQ Ready' : 'Needs FAQ';
                                            const faqClass = hasFaqs ? 'bg-[#ECFDF5] text-[#166534]' : 'bg-[#FEF3C7] text-[#B45309]';

                                            return (
                                              <article role="button" tabIndex={0} onClick={() => openProductDrawer(item.id)} onKeyDown={(e) => e.key === 'Enter' && openProductDrawer(item.id)} key={item.id} className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(15,23,42,0.12)]">
                                                <div className="relative overflow-hidden bg-[#F5F5F4] h-40 sm:h-44">
                                                  {item.image ? (
                                                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                                                  ) : (
                                                    <div className="flex h-full w-full items-center justify-center bg-[#E5E7EB]">
                                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-12 w-12 text-[#94A3B8]" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7.5a4.5 4.5 0 0 1 9 0 4.5 4.5 0 1 1 9 0v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 15.75 9 13.5l1.5 1.5 3-3 3.75 3.75" />
                                                      </svg>
                                                    </div>
                                                  )}
                                                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                                                  <div className="absolute right-3 top-3" onClick={(e) => e.stopPropagation()}>
                                                    <DropdownMenu>
                                                      <DropdownMenuTrigger asChild>
                                                        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#475569] shadow-sm ring-1 ring-[#E5E7EB] transition-colors duration-200 hover:bg-white">
                                                          <MoreVertical className="h-4 w-4" />
                                                        </button>
                                                      </DropdownMenuTrigger>
                                                      <DropdownMenuContent align="end" className="w-40">
                                                        <DropdownMenuItem onSelect={() => openProductDrawer(item.id)}>Edit</DropdownMenuItem>
                                                        <DropdownMenuItem onSelect={() => duplicateCatalogProduct(item.id)}>Duplicate</DropdownMenuItem>
                                                        <DropdownMenuItem onSelect={() => previewCatalogProduct(item.id)}>Preview</DropdownMenuItem>
                                                        <DropdownMenuItem onSelect={() => trainCatalogProductAI(item.id)}>Train AI</DropdownMenuItem>
                                                        <DropdownMenuItem onSelect={() => deleteCatalogProduct(item.id)}>Delete</DropdownMenuItem>
                                                      </DropdownMenuContent>
                                                    </DropdownMenu>
                                                  </div>
                                                </div>

                                                <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                                                  <div className="space-y-3">
                                                    <div className="flex items-start justify-between gap-3">
                                                      <div className="min-w-0">
                                                        <p className="text-base font-semibold text-[#111827] line-clamp-2">{item.name}</p>
                                                        {itemCategory ? (
                                                          <p className="mt-1 text-sm text-[#64748B] line-clamp-1">{itemCategory}</p>
                                                        ) : null}
                                                      </div>
                                                      <p className="shrink-0 text-sm font-semibold text-[#111827]">{item.price}</p>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2">
                                                      <span className="inline-flex h-9 items-center rounded-full border border-[#E5E7EB] bg-[#F8FAFB] px-3.5 text-xs font-semibold text-[#475569]">
                                                        {itemTypeLabel}
                                                      </span>
                                                      <span className={`inline-flex h-9 items-center rounded-full px-3.5 text-xs font-semibold ${isAvailable ? 'bg-[#ECFDF5] text-[#166534]' : 'bg-[#FFFBEB] text-[#B45309]'}`}>
                                                        {item.availability}
                                                      </span>
                                                      <span className={`inline-flex h-9 items-center rounded-full px-3.5 text-xs font-semibold ${readinessLabel === '100% Ready' ? 'bg-[#ECFDF5] text-[#166534]' : 'bg-[#FFFBEB] text-[#B45309]'}`}>
                                                        {readinessLabel}
                                                      </span>
                                                      <span className={`inline-flex h-9 items-center rounded-full px-3.5 text-xs font-semibold ${faqClass}`}>
                                                        {faqLabel}
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </article>
                                            );
                                          })}
                                        </div>
                                      ) : (
                                        <div className="overflow-hidden rounded-[12px] border border-[#E5E7EB]">
                                          <table className="min-w-full text-sm">
                                            <thead className="bg-[#F8FAFB]">
                                              <tr>
                                                <th className="px-4 py-3 text-left font-semibold text-[#475569]">Image</th>
                                                <th className="px-4 py-3 text-left font-semibold text-[#475569]">Name</th>
                                                <th className="px-4 py-3 text-left font-semibold text-[#475569]">Category</th>
                                                <th className="px-4 py-3 text-left font-semibold text-[#475569]">Price</th>
                                                <th className="px-4 py-3 text-left font-semibold text-[#475569]">Inventory</th>
                                                <th className="px-4 py-3 text-left font-semibold text-[#475569]">AI Ready</th>
                                                <th className="px-4 py-3 text-left font-semibold text-[#475569]">Status</th>
                                                <th className="px-4 py-3 text-right font-semibold text-[#475569]">Actions</th>
                                              </tr>
                                            </thead>
                                            <tbody className="divide-y bg-white">
                                              {filtered.map((item) => {
                                                const readinessLabel = getCatalogueItemReadinessLabel(item);
                                                return (
                                                  <tr key={item.id} onClick={() => openProductDrawer(item.id)} className="hover:bg-white hover:shadow-sm transition-transform hover:-translate-y-1 cursor-pointer">
                                                    <td className="px-4 py-3 align-top">
                                                      <img src={item.image} alt={item.name} className="h-12 w-12 rounded-md object-cover" />
                                                    </td>
                                                    <td className="px-4 py-3 align-top">
                                                      <div className="text-sm font-semibold text-[#111827]">{item.name}</div>
                                                    </td>
                                                    <td className="px-4 py-3 align-top text-sm text-[#64748B]">{item.category}</td>
                                                    <td className="px-4 py-3 align-top text-sm text-[#111827]">{item.price}</td>
                                                    <td className="px-4 py-3 align-top text-sm text-[#111827]">{(item as any).currentStock ?? '-'}</td>
                                                    <td className="px-4 py-3 align-top">
                                                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${readinessLabel === '100% Ready' ? 'bg-[#ECFDF5] text-[#166534]' : 'bg-[#FFFBEB] text-[#B45309]'}`}>{readinessLabel}</span>
                                                    </td>
                                                    <td className="px-4 py-3 align-top text-sm">{item.availability}</td>
                                                    <td className="px-4 py-3 align-top text-right" onClick={(e) => e.stopPropagation()}>
                                                      <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                          <button type="button" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-[#475569] shadow-sm ring-1 ring-[#E5E7EB] transition hover:bg-white">
                                                            <MoreVertical className="h-4 w-4" />
                                                          </button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end" className="w-40">
                                                          <DropdownMenuItem onSelect={() => openProductDrawer(item.id)}>Edit</DropdownMenuItem>
                                                          <DropdownMenuItem onSelect={() => duplicateCatalogProduct(item.id)}>Duplicate</DropdownMenuItem>
                                                          <DropdownMenuItem onSelect={() => previewCatalogProduct(item.id)}>Preview</DropdownMenuItem>
                                                          <DropdownMenuItem onSelect={() => trainCatalogProductAI(item.id)}>Train AI</DropdownMenuItem>
                                                          <DropdownMenuItem onSelect={() => deleteCatalogProduct(item.id)}>Delete</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                      </DropdownMenu>
                                                    </td>
                                                  </tr>
                                                );
                                              })}
                                            </tbody>
                                          </table>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })()}
                          </div>
                        </div>

                        {/* Dialogs removed: catalogue now focuses on item list only. Use drawer to edit items. */}
                      </div>
                    )}

                    {activeWorkspaceSection === "Sales Playbooks" && (
                      <div className="space-y-6">
                        <div className="flex justify-end">
                          <button type="button" onClick={addPlaybook} className="rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white">Create Playbook</button>
                        </div>

                        <SalesLessonTabs />

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
                            ) : null}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Skills" && (
                      <div className="space-y-6">
                        <SkillsLessonTabs />
                      </div>
                    )}

                    {activeWorkspaceSection === "Policies" && (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          {policySections.map((sec) => (
                            <div key={sec.id} className="overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white">
                              <button onClick={() => togglePolicy(sec.id)} className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-[#F8FAFC]">
                                <div>
                                  <p className="text-base font-semibold text-[#111827]">{sec.title}</p>
                                  <p className="mt-1 text-sm text-[#64748B]">Click to expand and edit</p>
                                </div>
                                <div className="text-sm font-medium text-[#475569]">{sec.expanded ? 'Collapse' : 'Expand'}</div>
                              </button>
                              {sec.expanded && (
                                <div className="px-4 pb-4 pt-2 space-y-4">
                                  {sec.id === 'pol-1' ? (
                                    <>
                                      <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                        <div className="flex items-start justify-between">
                                          <div>
                                            <p className="text-sm font-semibold text-[#111827]">Customer Policies</p>
                                            <p className="mt-2 text-sm text-[#475569]">Define the policies your AI should explain when customers ask about returns, refunds, cancellations, warranties, or other customer-facing rules.</p>
                                          </div>
                                          <div>
                                            <button type="button" onClick={() => toggleNotApplicable('pol-1')} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${isNotApplicable('pol-1') ? 'bg-[#F3F4F6] text-[#64748B]' : 'bg-white border border-[#E5E7EB] hover:bg-[#F8FAFC]'}`}>{isNotApplicable('pol-1') ? 'Not applicable' : 'Mark not applicable'}</button>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="space-y-4">
                                        {customerPolicies.map((policy) => (
                                          <div key={policy.id} className="rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                              <div className="space-y-2">
                                                <div className="flex flex-wrap items-center gap-2">
                                                  <p className="text-sm font-semibold text-[#111827]">{policy.name}</p>
                                                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${policy.enabled ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEE2E2] text-[#B91C1C]'}`}>
                                                    {policy.enabled ? 'Enabled' : 'Disabled'}
                                                  </span>
                                                </div>
                                                <p className="text-sm text-[#475569]">{policy.description}</p>
                                              </div>
                                              <div className="flex items-center gap-2">
                                                <button type="button" onClick={() => toggleCustomerPolicyEnabled(policy.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                  {policy.enabled ? 'Disable' : 'Mark not applicable'}
                                                </button>
                                                <button type="button" onClick={() => toggleCustomerPolicyEditing(policy.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                  {policy.editing ? 'Save' : 'Edit'}
                                                </button>
                                              </div>
                                            </div>
                                            {policy.editing && (
                                              <div className="mt-3 space-y-3 rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                                <input value={policy.name} onChange={(e) => updateCustomerPolicyField(policy.id, 'name', e.target.value)} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                                <textarea value={policy.description} onChange={(e) => updateCustomerPolicyField(policy.id, 'description', e.target.value)} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]" />
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>

                                      <div className="rounded-[16px] border border-dashed border-[#E5E7EB] bg-white p-4">
                                        <p className="text-sm font-semibold text-[#111827]">Common optional policy types</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                          {policyTypeOptions.map((type) => (
                                            <button key={type} type="button" onClick={() => addCustomerPolicy(type)} className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-[#475569] hover:bg-[#F8FAFC]">
                                              {type}
                                            </button>
                                          ))}
                                        </div>
                                      </div>

                                      <div className="flex justify-end">
                                        <button type="button" onClick={() => addCustomerPolicy()} className="rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]">
                                          Add Policy
                                        </button>
                                      </div>
                                    </>
                                  ) : sec.id === 'pol-2' ? (
                                    <>
                                      <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                        <div className="flex items-start justify-between">
                                          <div>
                                            <p className="text-sm font-semibold text-[#111827]">Pricing & Payment</p>
                                            <p className="mt-2 text-sm text-[#475569]">Define the payment and pricing rules your AI should communicate accurately to customers.</p>
                                          </div>
                                          <div>
                                            <button type="button" onClick={() => toggleNotApplicable('pol-2')} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${isNotApplicable('pol-2') ? 'bg-[#F3F4F6] text-[#64748B]' : 'bg-white border border-[#E5E7EB] hover:bg-[#F8FAFC]'}`}>{isNotApplicable('pol-2') ? 'Not applicable' : 'Mark not applicable'}</button>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="space-y-4">
                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                                          <div className="flex items-center justify-between gap-4">
                                            <div>
                                              <p className="text-sm font-semibold text-[#111827]">Payment Methods</p>
                                              <p className="mt-2 text-sm text-[#475569]">List the payment methods your AI can communicate to customers.</p>
                                            </div>
                                          </div>
                                          <div className="mt-4 space-y-3">
                                            {paymentMethods.map((method) => (
                                              <div key={method.id} className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                  <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                      <p className="text-sm font-semibold text-[#111827]">{method.name}</p>
                                                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${method.enabled ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEE2E2] text-[#B91C1C]'}`}>
                                                        {method.enabled ? 'Accepted' : 'Disabled'}
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="flex flex-wrap gap-2">
                                                    <button type="button" onClick={() => togglePaymentMethodEnabled(method.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      {method.enabled ? 'Disable' : 'Mark not accepted'}
                                                    </button>
                                                    <button type="button" onClick={() => togglePaymentMethodEditing(method.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      {method.editing ? 'Save' : 'Edit'}
                                                    </button>
                                                    <button type="button" onClick={() => deletePaymentMethod(method.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      Delete
                                                    </button>
                                                  </div>
                                                </div>
                                                {method.editing && (
                                                  <div className="mt-3">
                                                    <input value={method.name} onChange={(e) => updatePaymentMethodField(method.id, e.target.value)} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                          <div className="mt-4 flex justify-end">
                                            <button type="button" onClick={addPaymentMethod} className="rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]">
                                              Add payment method
                                            </button>
                                          </div>
                                        </div>

                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                          <p className="text-sm font-semibold text-[#111827]">Payment Timing</p>
                                          <p className="mt-2 text-sm text-[#475569]">Select when payments are collected or whether a deposit is required.</p>
                                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                            {paymentTiming.map((item) => (
                                              <button key={item.id} type="button" onClick={() => togglePaymentTiming(item.id)} className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${item.selected ? 'border-[#22C55E] bg-[#ECFDF5] text-[#166534]' : 'border-[#E5E7EB] bg-white text-[#475569]'}`}>
                                                <div className="flex items-center justify-between gap-3">
                                                  <span>{item.label}</span>
                                                  <span className="text-xs font-semibold">{item.selected ? 'Selected' : 'Not selected'}</span>
                                                </div>
                                              </button>
                                            ))}
                                          </div>
                                        </div>

                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                                          <div className="flex items-center justify-between gap-4">
                                            <div>
                                              <p className="text-sm font-semibold text-[#111827]">Pricing Rules</p>
                                              <p className="mt-2 text-sm text-[#475569]">Capture pricing guidance the AI should use when describing costs.</p>
                                            </div>
                                          </div>
                                          <div className="mt-4 space-y-3">
                                            {pricingRules.map((rule) => (
                                              <div key={rule.id} className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                  <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                      <p className="text-sm font-semibold text-[#111827]">{rule.name}</p>
                                                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${rule.enabled ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEE2E2] text-[#B91C1C]'}`}>
                                                        {rule.enabled ? 'Active' : 'Disabled'}
                                                      </span>
                                                    </div>
                                                    <p className="text-sm text-[#475569]">{rule.description}</p>
                                                  </div>
                                                  <div className="flex flex-wrap gap-2">
                                                    <button type="button" onClick={() => togglePricingRuleEnabled(rule.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      {rule.enabled ? 'Disable' : 'Enable'}
                                                    </button>
                                                    <button type="button" onClick={() => togglePricingRuleEditing(rule.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      {rule.editing ? 'Save' : 'Edit'}
                                                    </button>
                                                    <button type="button" onClick={() => deletePricingRule(rule.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      Delete
                                                    </button>
                                                  </div>
                                                </div>
                                                {rule.editing && (
                                                  <div className="mt-3 space-y-3 rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                                                    <input value={rule.name} onChange={(e) => updatePricingRuleField(rule.id, 'name', e.target.value)} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                                    <textarea value={rule.description} onChange={(e) => updatePricingRuleField(rule.id, 'description', e.target.value)} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]" />
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                          <div className="mt-4 flex justify-end">
                                            <button type="button" onClick={addPricingRule} className="rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]">
                                              Add pricing rule
                                            </button>
                                          </div>
                                        </div>

                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                          <p className="text-sm font-semibold text-[#111827]">Payment Notes</p>
                                          <p className="mt-2 text-sm text-[#475569]">Optional instructions for customers about payment and pricing.</p>
                                          <textarea value={paymentNotes} onChange={(e) => setPaymentNotes(e.target.value)} className="mt-3 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[120px]" />
                                        </div>
                                      </div>
                                    </>
                                  ) : sec.id === 'pol-3' ? (
                                    <>
                                      <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                        <div className="flex items-start justify-between">
                                          <div>
                                            <p className="text-sm font-semibold text-[#111827]">Orders & Fulfillment</p>
                                            <p className="mt-2 text-sm text-[#475569]">Teach your AI what customers should expect after placing an order, booking a service, or requesting fulfillment.</p>
                                          </div>
                                          <div>
                                            <button type="button" onClick={() => toggleNotApplicable('pol-3')} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${isNotApplicable('pol-3') ? 'bg-[#F3F4F6] text-[#64748B]' : 'bg-white border border-[#E5E7EB] hover:bg-[#F8FAFC]'}`}>{isNotApplicable('pol-3') ? 'Not applicable' : 'Mark not applicable'}</button>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="space-y-5">
                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                                          <div className="flex items-center justify-between gap-4">
                                            <div>
                                              <p className="text-sm font-semibold text-[#111827]">Order Processing</p>
                                              <p className="mt-2 text-sm text-[#475569]">Define processing times and what order confirmations include.</p>
                                            </div>
                                          </div>
                                          <div className="mt-4 space-y-3">
                                            {orderProcessingRules.map((rule) => (
                                              <div key={rule.id} className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                  <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                      <p className="text-sm font-semibold text-[#111827]">{rule.name}</p>
                                                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${rule.enabled ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEE2E2] text-[#B91C1C]'}`}>
                                                        {rule.enabled ? 'Active' : 'Disabled'}
                                                      </span>
                                                    </div>
                                                    <p className="text-sm text-[#475569]">{rule.description}</p>
                                                  </div>
                                                  <div className="flex flex-wrap gap-2">
                                                    <button type="button" onClick={() => toggleFulfillmentEnabled(rule.id, 'order')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      {rule.enabled ? 'Disable' : 'Enable'}
                                                    </button>
                                                    <button type="button" onClick={() => toggleFulfillmentEditing(rule.id, 'order')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      {rule.editing ? 'Save' : 'Edit'}
                                                    </button>
                                                    <button type="button" onClick={() => deleteFulfillmentRule(rule.id, 'order')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      Delete
                                                    </button>
                                                  </div>
                                                </div>
                                                {rule.editing && (
                                                  <div className="mt-3">
                                                    <input value={rule.name} onChange={(e) => updateFulfillmentField(rule.id, 'name', e.target.value, 'order')} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                                    <textarea value={rule.description} onChange={(e) => updateFulfillmentField(rule.id, 'description', e.target.value, 'order')} className="mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]" />
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                          <div className="mt-4 flex justify-end">
                                            <button type="button" onClick={() => addFulfillmentRule('order')} className="rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]">
                                              Add order rule
                                            </button>
                                          </div>
                                        </div>

                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                          <p className="text-sm font-semibold text-[#111827]">Delivery / Fulfillment</p>
                                          <p className="mt-2 text-sm text-[#475569]">Configure delivery, pickup options, fulfillment locations, and typical timeframes.</p>
                                          <div className="mt-4 space-y-3">
                                            {deliveryRules.map((rule) => (
                                              <div key={rule.id} className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                  <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                      <p className="text-sm font-semibold text-[#111827]">{rule.name}</p>
                                                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${rule.enabled ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEE2E2] text-[#B91C1C]'}`}>
                                                        {rule.enabled ? 'Active' : 'Disabled'}
                                                      </span>
                                                    </div>
                                                    <p className="text-sm text-[#475569]">{rule.description}</p>
                                                  </div>
                                                  <div className="flex flex-wrap gap-2">
                                                    <button type="button" onClick={() => toggleFulfillmentEnabled(rule.id, 'delivery')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      {rule.enabled ? 'Disable' : 'Enable'}
                                                    </button>
                                                    <button type="button" onClick={() => toggleFulfillmentEditing(rule.id, 'delivery')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      {rule.editing ? 'Save' : 'Edit'}
                                                    </button>
                                                    <button type="button" onClick={() => deleteFulfillmentRule(rule.id, 'delivery')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      Delete
                                                    </button>
                                                  </div>
                                                </div>
                                                {rule.editing && (
                                                  <div className="mt-3">
                                                    <input value={rule.name} onChange={(e) => updateFulfillmentField(rule.id, 'name', e.target.value, 'delivery')} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                                    <textarea value={rule.description} onChange={(e) => updateFulfillmentField(rule.id, 'description', e.target.value, 'delivery')} className="mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]" />
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                          <div className="mt-4 flex justify-end">
                                            <button type="button" onClick={() => addFulfillmentRule('delivery')} className="rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]">
                                              Add delivery rule
                                            </button>
                                          </div>
                                        </div>

                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                                          <p className="text-sm font-semibold text-[#111827]">Changes & Cancellation</p>
                                          <p className="mt-2 text-sm text-[#475569]">Specify when customers can change or cancel orders.</p>
                                          <div className="mt-4 space-y-3">
                                            {changesCancellationRules.map((rule) => (
                                              <div key={rule.id} className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                  <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                      <p className="text-sm font-semibold text-[#111827]">{rule.name}</p>
                                                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${rule.enabled ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEE2E2] text-[#B91C1C]'}`}>
                                                        {rule.enabled ? 'Active' : 'Disabled'}
                                                      </span>
                                                    </div>
                                                    <p className="text-sm text-[#475569]">{rule.description}</p>
                                                  </div>
                                                  <div className="flex flex-wrap gap-2">
                                                    <button type="button" onClick={() => toggleFulfillmentEnabled(rule.id, 'changes')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      {rule.enabled ? 'Disable' : 'Enable'}
                                                    </button>
                                                    <button type="button" onClick={() => toggleFulfillmentEditing(rule.id, 'changes')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      {rule.editing ? 'Save' : 'Edit'}
                                                    </button>
                                                    <button type="button" onClick={() => deleteFulfillmentRule(rule.id, 'changes')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      Delete
                                                    </button>
                                                  </div>
                                                </div>
                                                {rule.editing && (
                                                  <div className="mt-3">
                                                    <input value={rule.name} onChange={(e) => updateFulfillmentField(rule.id, 'name', e.target.value, 'changes')} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                                    <textarea value={rule.description} onChange={(e) => updateFulfillmentField(rule.id, 'description', e.target.value, 'changes')} className="mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]" />
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                          <div className="mt-4 flex justify-end">
                                            <button type="button" onClick={() => addFulfillmentRule('changes')} className="rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]">
                                              Add change/cancellation rule
                                            </button>
                                          </div>
                                        </div>

                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                          <p className="text-sm font-semibold text-[#111827]">Unavailable Items / Services</p>
                                          <p className="mt-2 text-sm text-[#475569]">Define what should happen when an item or service is unavailable.</p>
                                          <div className="mt-4 space-y-3">
                                            {unavailableRules.map((rule) => (
                                              <div key={rule.id} className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                  <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                      <p className="text-sm font-semibold text-[#111827]">{rule.name}</p>
                                                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${rule.enabled ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEE2E2] text-[#B91C1C]'}`}>
                                                        {rule.enabled ? 'Active' : 'Disabled'}
                                                      </span>
                                                    </div>
                                                    <p className="text-sm text-[#475569]">{rule.description}</p>
                                                  </div>
                                                  <div className="flex flex-wrap gap-2">
                                                    <button type="button" onClick={() => toggleFulfillmentEnabled(rule.id, 'unavailable')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      {rule.enabled ? 'Disable' : 'Enable'}
                                                    </button>
                                                    <button type="button" onClick={() => toggleFulfillmentEditing(rule.id, 'unavailable')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      {rule.editing ? 'Save' : 'Edit'}
                                                    </button>
                                                    <button type="button" onClick={() => deleteFulfillmentRule(rule.id, 'unavailable')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">
                                                      Delete
                                                    </button>
                                                  </div>
                                                </div>
                                                {rule.editing && (
                                                  <div className="mt-3">
                                                    <input value={rule.name} onChange={(e) => updateFulfillmentField(rule.id, 'name', e.target.value, 'unavailable')} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                                    <textarea value={rule.description} onChange={(e) => updateFulfillmentField(rule.id, 'description', e.target.value, 'unavailable')} className="mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]" />
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                          <div className="mt-4 flex justify-end">
                                            <button type="button" onClick={() => addFulfillmentRule('unavailable')} className="rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]">
                                              Add unavailable-item rule
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : sec.id === 'pol-4' ? (
                                    <>
                                      <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                        <div className="flex items-start justify-between">
                                          <div>
                                            <p className="text-sm font-semibold text-[#111827]">Privacy & Customer Data</p>
                                            <p className="mt-2 text-sm text-[#475569]">Define what customer information your AI may collect, use, and share during conversations.</p>
                                          </div>
                                          <div>
                                            <button type="button" onClick={() => toggleNotApplicable('pol-4')} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${isNotApplicable('pol-4') ? 'bg-[#F3F4F6] text-[#64748B]' : 'bg-white border border-[#E5E7EB] hover:bg-[#F8FAFC]'}`}>{isNotApplicable('pol-4') ? 'Not applicable' : 'Mark not applicable'}</button>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="space-y-5">
                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                                          <p className="text-sm font-semibold text-[#111827]">Information the AI may collect</p>
                                          <p className="mt-2 text-sm text-[#475569]">Allow the business to list accepted information the AI may request or use.</p>
                                          <div className="mt-3 space-y-3">
                                            {mayCollectRules.map((rule) => (
                                              <div key={rule.id} className="rounded-[12px] border border-[#E5E7EB] bg-white p-3">
                                                <div className="flex items-start justify-between gap-3">
                                                  <div>
                                                    <p className="text-sm font-semibold">{rule.name}</p>
                                                    <p className="text-sm text-[#475569]">{rule.description}</p>
                                                  </div>
                                                  <div className="flex flex-wrap gap-2">
                                                    <button type="button" onClick={() => togglePrivacyEnabled(rule.id, 'collect')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">{rule.enabled ? 'Disable' : 'Enable'}</button>
                                                    <button type="button" onClick={() => togglePrivacyEditing(rule.id, 'collect')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">{rule.editing ? 'Save' : 'Edit'}</button>
                                                    <button type="button" onClick={() => deletePrivacyRule(rule.id, 'collect')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">Delete</button>
                                                  </div>
                                                </div>
                                                {rule.editing && (
                                                  <div className="mt-3">
                                                    <input value={rule.name} onChange={(e) => updatePrivacyField(rule.id, 'name', e.target.value, 'collect')} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                                    <textarea value={rule.description} onChange={(e) => updatePrivacyField(rule.id, 'description', e.target.value, 'collect')} className="mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]" />
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                          <div className="mt-3 flex flex-wrap gap-2">
                                            {mayCollectExamples.map((ex) => (
                                              <button key={ex} type="button" onClick={() => addPrivacyRule('collect', ex)} className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-[#475569] hover:bg-[#F8FAFC]">{ex}</button>
                                            ))}
                                          </div>
                                          <div className="mt-4 flex justify-end">
                                            <button type="button" onClick={() => addPrivacyRule('collect')} className="rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white">Add rule</button>
                                          </div>
                                        </div>

                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                          <p className="text-sm font-semibold text-[#111827]">Information the AI should not request</p>
                                          <p className="mt-2 text-sm text-[#475569]">List information your AI must never ask customers to provide during conversations.</p>
                                          <div className="mt-3 space-y-3">
                                            {doNotRequestRules.map((rule) => (
                                              <div key={rule.id} className="rounded-[12px] border border-[#E5E7EB] bg-white p-3">
                                                <div className="flex items-start justify-between gap-3">
                                                  <div>
                                                    <p className="text-sm font-semibold">{rule.name}</p>
                                                    <p className="text-sm text-[#475569]">{rule.description}</p>
                                                  </div>
                                                  <div className="flex flex-wrap gap-2">
                                                    <button type="button" onClick={() => togglePrivacyEnabled(rule.id, 'doNot')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">{rule.enabled ? 'Disable' : 'Enable'}</button>
                                                    <button type="button" onClick={() => togglePrivacyEditing(rule.id, 'doNot')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">{rule.editing ? 'Save' : 'Edit'}</button>
                                                    <button type="button" onClick={() => deletePrivacyRule(rule.id, 'doNot')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">Delete</button>
                                                  </div>
                                                </div>
                                                {rule.editing && (
                                                  <div className="mt-3">
                                                    <input value={rule.name} onChange={(e) => updatePrivacyField(rule.id, 'name', e.target.value, 'doNot')} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                                    <textarea value={rule.description} onChange={(e) => updatePrivacyField(rule.id, 'description', e.target.value, 'doNot')} className="mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]" />
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                          <div className="mt-3 flex flex-wrap gap-2">
                                            {doNotRequestExamples.map((ex) => (
                                              <button key={ex} type="button" onClick={() => addPrivacyRule('doNot', ex)} className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-[#475569] hover:bg-[#F8FAFC]">{ex}</button>
                                            ))}
                                          </div>
                                          <p className="mt-2 text-xs text-[#6B7280]">These are examples and not legal advice.</p>
                                          <div className="mt-4 flex justify-end">
                                            <button type="button" onClick={() => addPrivacyRule('doNot')} className="rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white">Add rule</button>
                                          </div>
                                        </div>

                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                                          <p className="text-sm font-semibold text-[#111827]">Data-sharing instructions</p>
                                          <p className="mt-2 text-sm text-[#475569]">Specify when and with whom customer data may be shared.</p>
                                          <div className="mt-3 space-y-3">
                                            {dataSharingRules.map((rule) => (
                                              <div key={rule.id} className="rounded-[12px] border border-[#E5E7EB] bg-white p-3">
                                                <div className="flex items-start justify-between gap-3">
                                                  <div>
                                                    <p className="text-sm font-semibold">{rule.name}</p>
                                                    <p className="text-sm text-[#475569]">{rule.description}</p>
                                                  </div>
                                                  <div className="flex flex-wrap gap-2">
                                                    <button type="button" onClick={() => togglePrivacyEnabled(rule.id, 'share')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">{rule.enabled ? 'Disable' : 'Enable'}</button>
                                                    <button type="button" onClick={() => togglePrivacyEditing(rule.id, 'share')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">{rule.editing ? 'Save' : 'Edit'}</button>
                                                    <button type="button" onClick={() => deletePrivacyRule(rule.id, 'share')} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">Delete</button>
                                                  </div>
                                                </div>
                                                {rule.editing && (
                                                  <div className="mt-3">
                                                    <input value={rule.name} onChange={(e) => updatePrivacyField(rule.id, 'name', e.target.value, 'share')} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                                    <textarea value={rule.description} onChange={(e) => updatePrivacyField(rule.id, 'description', e.target.value, 'share')} className="mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]" />
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                          <div className="mt-4 flex justify-end">
                                            <button type="button" onClick={() => addPrivacyRule('share')} className="rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white">Add sharing rule</button>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : sec.id === 'pol-5' ? (
                                    <>
                                      <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                        <div className="flex items-start justify-between">
                                          <div>
                                            <p className="text-sm font-semibold text-[#111827]">AI Boundaries</p>
                                            <p className="mt-2 text-sm text-[#475569]">Define what your AI employee must never do or claim during a customer conversation.</p>
                                          </div>
                                          <div>
                                            <button type="button" onClick={() => toggleNotApplicable('pol-5')} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${isNotApplicable('pol-5') ? 'bg-[#F3F4F6] text-[#64748B]' : 'bg-white border border-[#E5E7EB] hover:bg-[#F8FAFC]'}`}>{isNotApplicable('pol-5') ? 'Not applicable' : 'Mark not applicable'}</button>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="space-y-4">
                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                                          <p className="text-sm font-semibold text-[#111827]">Boundary Rules</p>
                                          <p className="mt-2 text-sm text-[#475569]">Configure rules your AI must follow. These are instructions for behavior—not enforcement logic.</p>
                                          <div className="mt-4 space-y-3">
                                            {boundaryRules.map((rule) => (
                                              <div key={rule.id} className="rounded-[12px] border border-[#E5E7EB] bg-white p-3">
                                                <div className="flex items-start justify-between gap-3">
                                                  <div>
                                                    <p className="text-sm font-semibold">{rule.name}</p>
                                                    <p className="text-sm text-[#475569]">{rule.description}</p>
                                                  </div>
                                                  <div className="flex flex-wrap gap-2">
                                                    <button type="button" onClick={() => toggleBoundaryEnabled(rule.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">{rule.enabled ? 'Disable' : 'Enable'}</button>
                                                    <button type="button" onClick={() => toggleBoundaryEditing(rule.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">{rule.editing ? 'Save' : 'Edit'}</button>
                                                    <button type="button" onClick={() => deleteBoundaryRule(rule.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">Delete</button>
                                                  </div>
                                                </div>
                                                {rule.editing && (
                                                  <div className="mt-3">
                                                    <input value={rule.name} onChange={(e) => updateBoundaryField(rule.id, 'name', e.target.value)} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                                    <textarea value={rule.description} onChange={(e) => updateBoundaryField(rule.id, 'description', e.target.value)} className="mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]" />
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                          <div className="mt-4 flex justify-end">
                                            <button type="button" onClick={() => addBoundaryRule()} className="rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white">Add Boundary</button>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : sec.id === 'pol-6' ? (
                                    <>
                                      <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                        <div className="flex items-start justify-between">
                                          <div>
                                            <p className="text-sm font-semibold text-[#111827]">Escalation Rules</p>
                                            <p className="mt-2 text-sm text-[#475569]">Tell your AI when a conversation should be handed to a human.</p>
                                          </div>
                                          <div>
                                            <button type="button" onClick={() => toggleNotApplicable('pol-6')} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${isNotApplicable('pol-6') ? 'bg-[#F3F4F6] text-[#64748B]' : 'bg-white border border-[#E5E7EB]'}`}>{isNotApplicable('pol-6') ? 'Not applicable' : 'Mark not applicable'}</button>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="space-y-4">
                                        <div className="rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                                          <p className="text-sm font-semibold text-[#111827]">Escalation triggers</p>
                                          <p className="mt-2 text-sm text-[#475569]">Configure triggers that indicate a conversation should be escalated to a human.</p>
                                          <div className="mt-4 space-y-3">
                                            {escalationRules.map((rule) => (
                                              <div key={rule.id} className="rounded-[12px] border border-[#E5E7EB] bg-white p-3">
                                                <div className="flex items-start justify-between gap-3">
                                                  <div>
                                                    <p className="text-sm font-semibold">{rule.name}</p>
                                                    <p className="text-sm text-[#475569]">{rule.description}</p>
                                                  </div>
                                                  <div className="flex flex-wrap gap-2">
                                                    <button type="button" onClick={() => toggleEscalationEnabled(rule.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">{rule.enabled ? 'Disable' : 'Enable'}</button>
                                                    <button type="button" onClick={() => toggleEscalationEditing(rule.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">{rule.editing ? 'Save' : 'Edit'}</button>
                                                    <button type="button" onClick={() => deleteEscalationRule(rule.id)} className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]">Delete</button>
                                                  </div>
                                                </div>
                                                {rule.editing && (
                                                  <div className="mt-3">
                                                    <input value={rule.name} onChange={(e) => updateEscalationField(rule.id, 'name', e.target.value)} className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm" />
                                                    <textarea value={rule.description} onChange={(e) => updateEscalationField(rule.id, 'description', e.target.value)} className="mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]" />
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                          <div className="mt-4 flex justify-end">
                                            <button type="button" onClick={() => addEscalationRule()} className="rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white">Add Escalation Rule</button>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : sec.id === 'pol-7' ? (
                                    <>
                                      <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4">
                                        <p className="text-sm font-semibold text-[#111827]">Review</p>
                                        <p className="mt-2 text-sm text-[#475569]">Review the rules your AI employee will follow before continuing.</p>
                                      </div>

                                      <div className="space-y-4">
                                        <div className="rounded-[12px] border border-[#E5E7EB] bg-white p-4">
                                          <div className="grid gap-3">
                                            {[
                                              { id: 'pol-1', key: 'Customer Policies', configured: customerPolicies.length > 0 },
                                              { id: 'pol-2', key: 'Pricing & Payment', configured: paymentMethods.length > 0 || pricingRules.length > 0 || paymentTiming.some((t) => t.selected) || (paymentNotes || '').trim() !== '' },
                                              { id: 'pol-3', key: 'Orders & Fulfillment', configured: orderProcessingRules.length + deliveryRules.length + changesCancellationRules.length + unavailableRules.length > 0 },
                                              { id: 'pol-4', key: 'Privacy & Customer Data', configured: mayCollectRules.length + doNotRequestRules.length + dataSharingRules.length > 0 },
                                              { id: 'pol-5', key: 'AI Boundaries', configured: boundaryRules.length > 0 },
                                              { id: 'pol-6', key: 'Escalation Rules', configured: escalationRules.length > 0 },
                                            ].map((item) => {
                                              const finalConfigured = item.configured || isNotApplicable(item.id);
                                              return (
                                                <div key={item.key} className="flex items-center justify-between">
                                                  <div>
                                                    <p className="text-sm font-semibold text-[#111827]">{item.key}</p>
                                                  </div>
                                                  <div>
                                                    <span className={`inline-flex h-7 items-center gap-2 rounded-full px-3 text-[12px] font-medium ${finalConfigured ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#F3F4F6] text-[#64748B]'}`}>
                                                      {finalConfigured ? 'Configured' : 'Not configured'}
                                                    </span>
                                                  </div>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        </div>

                                        <div className="flex justify-end">
                                          <button type="button" onClick={() => { handleSaveChanges(); }} className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]">Save & Continue <ChevronRight className="h-4 w-4" /></button>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <textarea value={sec.content} onChange={(e) => updatePolicyContent(sec.id, e.target.value)} className="mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[120px]" />
                                      <div className="mt-2 flex justify-end gap-2">
                                        <button onClick={() => togglePolicy(sec.id)} className="rounded-[8px] border border-[#E5E7EB] px-3 py-2 text-sm">Done</button>
                                      </div>
                                    </>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeWorkspaceSection === "Integrations" && (
                      <div ref={integrationsPageRef} tabIndex={-1} className="space-y-5">
                        <IntegrationLessonTabs />
                        <CurrentIntegrationLesson />
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
                    {selected === "Performance" && (
            <PerformanceWorkspace
              setSelected={setSelected}
              setActiveWorkspaceSection={setActiveWorkspaceSection}
              INBOX_CONVERSATIONS={INBOX_CONVERSATIONS}
              CUSTOMERS={CUSTOMERS}
              PRODUCTS={PRODUCTS}
              playbooks={playbooks}
              getAllIntegrationItems={getAllIntegrationItems}
              getIntegrationStatus={getIntegrationStatus}
              CARD={CARD}
              PERFORMANCE_METRICS={PERFORMANCE_METRICS}
              KNOWLEDGE_USAGE={KNOWLEDGE_USAGE}
              PERFORMANCE_TOP_QUESTIONS={PERFORMANCE_TOP_QUESTIONS}
              MOST_VIEWED_PRODUCTS={MOST_VIEWED_PRODUCTS}
              RECENT_AI_ACTIVITY={RECENT_AI_ACTIVITY}
            />
          )}
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
                        {(() => {
                          const id = drawerIntegrationId as string;
                          for (const section of INTEGRATION_SECTIONS) {
                            const found = section.items.find((item) => item.id === id);
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
                    <div className="flex items-center justify-between gap-3">
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

          {selected === "Settings" && user && (
            <>
              <AccountSettings user={user} onEditProfile={handleEditProfile} />
              {/*
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
              </div>*/}
            </>
          )}
        </div>
      </main>
      {user ? (
        <EditProfileDialog
          user={user}
          open={editProfileOpen}
          onOpenChange={setEditProfileOpen}
          onSave={handleProfileSave}
        />
      ) : null}
    </div>
  );
}
