"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DashboardLayout;
var react_1 = require("react");
var react_router_1 = require("@tanstack/react-router");
var lucide_react_1 = require("lucide-react");
var NAV_ITEMS = [
    {
        label: "Home",
        href: "/dashboard",
        Icon: lucide_react_1.Home,
    },
    {
        label: "Inbox",
        href: "/dashboard/inbox",
        Icon: lucide_react_1.Inbox,
    },
    {
        label: "AI Employee",
        href: "/dashboard/ai",
        Icon: lucide_react_1.Cpu,
    },
    {
        label: "Growth Pages",
        href: "/dashboard/pages",
        Icon: lucide_react_1.Globe,
    },
    {
        label: "Marketing",
        href: "/dashboard/marketing",
        Icon: lucide_react_1.Megaphone,
    },
    {
        label: "Analytics",
        href: "/dashboard/analytics",
        Icon: lucide_react_1.Activity,
    },
    {
        label: "Settings",
        href: "/dashboard/settings",
        Icon: lucide_react_1.Settings,
    },
];
var STAT_CARDS = [
    { label: "Messages Today", value: "1,284", delta: "+18%" },
    { label: "AI Responses", value: "912", delta: "+24%" },
    { label: "Team Takeovers", value: "72", delta: "-4%" },
    { label: "New Leads", value: "38", delta: "+11%" },
];
// Micro-interaction tokens
var TRANSITION = "transition-all duration-200 ease-out";
var TRANSITION_FAST = "transition-all duration-150 ease-out";
var INTERACTION = "transition-all duration-150 ease-out transform-gpu hover:-translate-y-0.5 active:scale-[0.98]";
// Unified dashboard design system (global tokens)
// - Radius: 20px for cards/inputs/buttons
// - Subtle border: #EEF2F6
// - Consistent shadow across cards
var GLOBAL_RADIUS = "rounded-[24px]";
var SUBTLE_BORDER = "border-[#EEF2F6]";
var CARD_SHADOW = "shadow-[0_10px_30px_rgba(15,23,42,0.06)]";
var CARD = "".concat(GLOBAL_RADIUS, " border ").concat(SUBTLE_BORDER, " bg-white p-6 ").concat(CARD_SHADOW, " transform ") +
    TRANSITION +
    " hover:-translate-y-1";
var CARD_SOFT = "".concat(GLOBAL_RADIUS, " border ").concat(SUBTLE_BORDER, " bg-[#F8FAFB] p-6 ").concat(CARD_SHADOW, " transform ") +
    TRANSITION +
    " hover:-translate-y-1";
var CARD_FLAT = "".concat(GLOBAL_RADIUS, " border ").concat(SUBTLE_BORDER, " bg-[#F9FAFB] p-6 shadow-none transform ") +
    TRANSITION;
var LIST_ITEM = "".concat(GLOBAL_RADIUS, " bg-[#F9FAFB] p-6 transform ") +
    TRANSITION +
    " hover:bg-[#EFF6FF] hover:-translate-y-1";
var buildMockAiSummary = function () { return ({
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
    recommendedNextAction: "Recommend the Business Package and mention the free trial to encourage conversion.",
    suggestedReply: [
        "Hi Aisha 👋",
        "Thanks for your interest.",
        "Our Business Package includes priority support, flexible upgrades, and a free trial so you can explore the plan with confidence.",
    ],
    knowledgeSources: ["Pricing Catalog", "FAQ", "Business Policies", "Product Database"],
}); };
var BUTTON_PRIMARY = "inline-flex items-center justify-center rounded-[24px] bg-[#22C55E] px-4 py-3 text-[15px] font-semibold text-white shadow-none " +
    INTERACTION +
    " hover:bg-[#16A34A]";
var BUTTON_SECONDARY = "inline-flex items-center justify-center rounded-[24px] border ".concat(SUBTLE_BORDER, " bg-white px-4 py-3 text-[15px] font-semibold text-[#111827] ") +
    INTERACTION +
    " hover:bg-[#F3F4F6]";
var BUTTON_TERTIARY = "inline-flex items-center justify-center rounded-[24px] bg-[#F3F4F6] px-4 py-3 text-[15px] font-semibold text-[#374151] " +
    INTERACTION +
    " hover:bg-[#E5E7EB]";
var QUICK_ACTION_BUTTON = "w-full ".concat(GLOBAL_RADIUS, " border ").concat(SUBTLE_BORDER, " bg-[#F9FAFB] p-6 text-left text-[15px] font-semibold text-[#111827] transform ") +
    TRANSITION +
    " hover:border-[#CBD5E1] hover:bg-[#EFF6FF] hover:-translate-y-1";
var INPUT_FIELD = "mt-3 w-full ".concat(GLOBAL_RADIUS, " border ").concat(SUBTLE_BORDER, " bg-[#F9FAFB] px-4 py-3 text-[15px] text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#DCFCE7] ") +
    TRANSITION +
    " focus:shadow-none";
var INPUT_FIELD_WHITE = "mt-3 w-full ".concat(GLOBAL_RADIUS, " border ").concat(SUBTLE_BORDER, " bg-white px-4 py-3 text-[15px] text-[#111827] shadow-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#DCFCE7] ") +
    TRANSITION +
    " focus:shadow-none";
// Typography tokens for consistent hierarchy
var PANEL_TITLE = "text-[24px] font-semibold text-[#111827]";
var SECTION_HEADING = "text-[12px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]";
var CARD_TITLE = "text-[28px] font-semibold mb-6 text-[#0F172A]";
var PAGE_TITLE = "text-[34px] font-semibold text-[#0F172A]";
var CUSTOMER_NAME = "text-[28px] font-semibold text-[#111827]";
var BODY_TEXT = "text-[15px] text-[#475569]";
var BODY_MEDIUM = "text-[15px] font-semibold text-[#111827]";
var SECONDARY = "text-[12px] text-[#64748B]";
var MESSAGE_PREVIEW = "text-[15px] text-[#475569]";
var TIME_LABEL = "text-[12px] text-[#64748B]";
var CAPTION = "text-[13px] text-[#64748B]";
var BADGE = "inline-flex h-7 items-center gap-1.5 rounded-full px-3 text-[12px] font-medium tracking-[0.02em] transition-colors duration-200 ease";
var BADGE_ICON = "h-2.5 w-2.5 rounded-full";
var STATUS_CHIP = "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium flex-shrink-0 transition-all duration-150 ease-out transform hover:scale-[1.02]";
var RECENT_ACTIVITY = [
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
var QUICK_ACTIONS = [
    "Create Status Post",
    "View Inbox",
    "Pause AI",
    "Add Product",
];
var SCHEDULED_POSTS = [
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
var CUSTOMERS = [
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
var PRODUCTS = [
    { id: "prod1", name: "10 Mbps", price: "KSh 1500", active: true },
    { id: "prod2", name: "20 Mbps", price: "KSh 2500", active: true },
    { id: "prod3", name: "Business Package", price: "KSh 5000", active: false },
];
var ANALYTICS_METRICS = [
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
var ANALYTICS_CHART = [
    { label: "Mon", value: 48 },
    { label: "Tue", value: 62 },
    { label: "Wed", value: 55 },
    { label: "Thu", value: 71 },
    { label: "Fri", value: 85 },
    { label: "Sat", value: 53 },
    { label: "Sun", value: 60 },
];
var TOP_QUESTIONS = [
    { question: "How do I upgrade my plan?", volume: "320" },
    { question: "What are your business hours?", volume: "290" },
    { question: "Can I get a trial?", volume: "215" },
];
var POPULAR_PRODUCTS = [
    { name: "20 Mbps", sales: "520" },
    { name: "Business Package", sales: "320" },
    { name: "10 Mbps", sales: "270" },
];
var LANGUAGES = ["English", "Kiswahili"];
var PERSONALITIES = ["Friendly", "Professional", "Sales Focused"];
var TONES = ["Professional", "Friendly", "Formal", "Sales-focused"];
var ASSISTANT_TABS = [
    "Business Knowledge",
    "AI Settings",
    "Test AI",
    "Escalation Rules",
    "Conversation Policies",
];
var BUSINESS_KNOWLEDGE_ITEMS = [
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
var TEST_AI_PROMPTS = [
    "What is the Business Package price?",
    "Can I get a trial before I sign up?",
    "When are you open for support?",
];
var ESCALATION_RULES = [
    {
        label: "Escalate when customer asks for a live person",
        description: "Send urgent requests directly to you when customers request human support.",
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
var CONVERSATION_POLICIES = [
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
var INBOX_CONVERSATIONS = [
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
var formatConversationTime = function (time) { return time || "Unknown"; };
var INBOX_TAB_ITEMS = ["All", "AI Active", "Human", "Needs Reply"];
var INBOX_MESSAGES = {
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
var CUSTOMER_PROFILES = {
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
var OWNER_NAMES = {
    c1: "You",
    c3: "You",
};
// Team Support Architecture
// Current MVP: Single owner business (hasTeam = false)
// Future: Add team functionality by setting hasTeam = true and implementing Team Settings
var hasTeam = false;
// Mock team data (for future implementation)
var MOCK_TEAM_MEMBERS = [
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
function DashboardLayout() {
    var _a, _b, _c, _d, _e, _f, _g;
    // Team context: In future, use React Context or state management library for team data
    // For now: Single owner (hasTeam = false)
    var currentUserId = hasTeam ? "tm1" : "owner"; // Will be from auth context in future
    var currentUserRole = hasTeam ? "admin" : "owner"; // Will be from auth context in future
    var _h = (0, react_1.useState)(false), mobileOpen = _h[0], setMobileOpen = _h[1];
    var _j = (0, react_1.useState)("Home"), selected = _j[0], setSelected = _j[1];
    var _k = (0, react_1.useState)("Identity"), activeWorkspaceSection = _k[0], setActiveWorkspaceSection = _k[1];
    var _l = (0, react_1.useState)("Business Knowledge"), assistantTab = _l[0], setAssistantTab = _l[1];
    var _m = (0, react_1.useState)("c1"), activeConversation = _m[0], setActiveConversation = _m[1];
    var _o = (0, react_1.useState)(""), searchQuery = _o[0], setSearchQuery = _o[1];
    var _p = (0, react_1.useState)(""), customerSearch = _p[0], setCustomerSearch = _p[1];
    var _q = (0, react_1.useState)("All"), activeTab = _q[0], setActiveTab = _q[1];
    var _r = (0, react_1.useState)(false), summaryGenerated = _r[0], setSummaryGenerated = _r[1];
    var _s = (0, react_1.useState)(false), summaryVisible = _s[0], setSummaryVisible = _s[1];
    var _t = (0, react_1.useState)(null), aiSummary = _t[0], setAiSummary = _t[1];
    var activeConversationData = INBOX_CONVERSATIONS.find(function (item) { return item.id === activeConversation; });
    var activeCustomerProfile = (_a = CUSTOMER_PROFILES[activeConversation]) !== null && _a !== void 0 ? _a : CUSTOMER_PROFILES.c1;
    var activeMessages = (_b = INBOX_MESSAGES[activeConversation]) !== null && _b !== void 0 ? _b : [];
    var inboxCounts = {
        All: INBOX_CONVERSATIONS.length,
        "AI Active": INBOX_CONVERSATIONS.filter(function (item) { return item.source === "ai_handling"; }).length,
        Human: INBOX_CONVERSATIONS.filter(function (item) { return item.source === "owner"; }).length,
        "Needs Reply": INBOX_CONVERSATIONS.filter(function (item) { return item.source === "needs_attention"; }).length,
    };
    var _u = (0, react_1.useState)({}), sourceOverrides = _u[0], setSourceOverrides = _u[1];
    var getEffectiveSource = function (id, original) { var _a, _b; return (_b = (_a = sourceOverrides[id]) !== null && _a !== void 0 ? _a : original) !== null && _b !== void 0 ? _b : "owner"; };
    var _v = (0, react_1.useState)(""), messageInput = _v[0], setMessageInput = _v[1];
    var textareaRef = (0, react_1.useRef)(null);
    var identityFormRef = (0, react_1.useRef)(null);
    var _w = (0, react_1.useState)(false), sidebarHovered = _w[0], setSidebarHovered = _w[1];
    var _x = (0, react_1.useState)(false), customerPanelFading = _x[0], setCustomerPanelFading = _x[1];
    var scrollIdentityForm = function (offset) {
        if (!identityFormRef.current)
            return;
        identityFormRef.current.scrollBy({ top: offset, behavior: "smooth" });
    };
    (0, react_1.useEffect)(function () {
        var textarea = textareaRef.current;
        if (!textarea)
            return;
        textarea.style.height = "auto";
        var height = Math.min(textarea.scrollHeight, 120);
        textarea.style.height = "".concat(height, "px");
        textarea.style.overflowY = textarea.scrollHeight > 120 ? "auto" : "hidden";
    }, [messageInput]);
    (0, react_1.useEffect)(function () {
        setCustomerPanelFading(true);
        var timer = window.setTimeout(function () { return setCustomerPanelFading(false); }, 10);
        return function () { return window.clearTimeout(timer); };
    }, [activeConversation]);
    var filteredCustomers = CUSTOMERS.filter(function (customer) {
        var query = customerSearch.toLowerCase();
        return (customer.name.toLowerCase().includes(query) ||
            customer.phone.toLowerCase().includes(query) ||
            customer.interestedProduct.toLowerCase().includes(query) ||
            customer.leadStatus.toLowerCase().includes(query));
    });
    var _y = (0, react_1.useState)(SCHEDULED_POSTS), scheduledPosts = _y[0], setScheduledPosts = _y[1];
    var _z = (0, react_1.useState)({
        image: "",
        caption: "",
        date: "",
        time: "",
        source: "ai",
        needsAttention: true,
    }), newPost = _z[0], setNewPost = _z[1];
    var _0 = (0, react_1.useState)(PRODUCTS), products = _0[0], setProducts = _0[1];
    var chartMax = Math.max.apply(Math, ANALYTICS_CHART.map(function (point) { return point.value; }));
    var _1 = (0, react_1.useState)(true), aiEnabled = _1[0], setAiEnabled = _1[1];
    var _2 = (0, react_1.useState)("Mon–Fri, 8:00 AM - 6:00 PM"), businessHours = _2[0], setBusinessHours = _2[1];
    var _3 = (0, react_1.useState)(true), humanTakeover = _3[0], setHumanTakeover = _3[1];
    var _4 = (0, react_1.useState)("English"), language = _4[0], setLanguage = _4[1];
    var _5 = (0, react_1.useState)("Friendly"), personality = _5[0], setPersonality = _5[1];
    var _6 = (0, react_1.useState)("How much is the Business Package?"), testAiInput = _6[0], setTestAiInput = _6[1];
    var _7 = (0, react_1.useState)([
        {
            id: "m1",
            role: "user",
            text: "How much is your Business Package?",
        },
        {
            id: "m2",
            role: "ai",
            text: "Our Business Package costs KES 5,000/month.",
            source: "Products & Services → Business Package",
        },
    ]), testAiMessages = _7[0], setTestAiMessages = _7[1];
    var testAiScrollRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!testAiScrollRef.current)
            return;
        testAiScrollRef.current.scrollTop = testAiScrollRef.current.scrollHeight;
    }, [testAiMessages]);
    var sendTestAiMessage = function () {
        var trimmed = testAiInput.trim();
        if (!trimmed)
            return;
        var userMessage = {
            id: "user-".concat(Date.now()),
            role: "user",
            text: trimmed,
        };
        var aiMessage = {
            id: "ai-".concat(Date.now()),
            role: "ai",
            text: trimmed.toLowerCase().includes("business package")
                ? "Our Business Package costs KES 5,000/month."
                : "This is a mock reply from your AI assistant based on the configured business knowledge.",
            source: "Products & Services → Business Package",
        };
        setTestAiMessages(function (current) { return __spreadArray(__spreadArray([], current, true), [userMessage, aiMessage], false); });
        setTestAiInput("");
    };
    var _8 = (0, react_1.useState)(true), escalateOnLiveRequest = _8[0], setEscalateOnLiveRequest = _8[1];
    var _9 = (0, react_1.useState)(true), escalateOutsideHours = _9[0], setEscalateOutsideHours = _9[1];
    var _10 = (0, react_1.useState)(false), escalateUnanswered = _10[0], setEscalateUnanswered = _10[1];
    var _11 = (0, react_1.useState)(true), escalateComplaints = _11[0], setEscalateComplaints = _11[1];
    var _12 = (0, react_1.useState)(true), escalateRefunds = _12[0], setEscalateRefunds = _12[1];
    var _13 = (0, react_1.useState)(true), escalateLegalQuestions = _13[0], setEscalateLegalQuestions = _13[1];
    var _14 = (0, react_1.useState)(true), escalateHumanRequested = _14[0], setEscalateHumanRequested = _14[1];
    var _15 = (0, react_1.useState)(true), escalateUnknownQuestions = _15[0], setEscalateUnknownQuestions = _15[1];
    var _16 = (0, react_1.useState)(true), escalateNegotiationsAbove10k = _16[0], setEscalateNegotiationsAbove10k = _16[1];
    var _17 = (0, react_1.useState)(true), policyKeepShort = _17[0], setPolicyKeepShort = _17[1];
    var _18 = (0, react_1.useState)(true), policyUseProfessionalTone = _18[0], setPolicyUseProfessionalTone = _18[1];
    var _19 = (0, react_1.useState)(true), policyRespectHours = _19[0], setPolicyRespectHours = _19[1];
    var _20 = (0, react_1.useState)("collect"), outsideHoursMode = _20[0], setOutsideHoursMode = _20[1];
    var _21 = (0, react_1.useState)(10), maxAiMessages = _21[0], setMaxAiMessages = _21[1];
    var _22 = (0, react_1.useState)(true), allowCloseSales = _22[0], setAllowCloseSales = _22[1];
    var _23 = (0, react_1.useState)(true), allowScheduleAppointments = _23[0], setAllowScheduleAppointments = _23[1];
    var _24 = (0, react_1.useState)("Nuru"), assistantName = _24[0], setAssistantName = _24[1];
    var _25 = (0, react_1.useState)("Customer Success Assistant"), assistantRole = _25[0], setAssistantRole = _25[1];
    var _26 = (0, react_1.useState)("Helps customers find the right internet plan, answer product questions, and support onboarding."), assistantDescription = _26[0], setAssistantDescription = _26[1];
    var _27 = (0, react_1.useState)("English"), primaryLanguage = _27[0], setPrimaryLanguage = _27[1];
    var _28 = (0, react_1.useState)("Kiswahili"), secondaryLanguage = _28[0], setSecondaryLanguage = _28[1];
    var _29 = (0, react_1.useState)("Friendly"), tone = _29[0], setTone = _29[1];
    var _30 = (0, react_1.useState)("East Africa Time (EAT)"), timezone = _30[0], setTimezone = _30[1];
    var _31 = (0, react_1.useState)("Fast"), responseSpeed = _31[0], setResponseSpeed = _31[1];
    var _32 = (0, react_1.useState)("profile-avatar.png"), avatarFileName = _32[0], setAvatarFileName = _32[1];
    var _33 = (0, react_1.useState)(""), saveConfirmation = _33[0], setSaveConfirmation = _33[1];
    var _34 = (0, react_1.useState)(true), upsellProducts = _34[0], setUpsellProducts = _34[1];
    var _35 = (0, react_1.useState)(true), recommendAlternatives = _35[0], setRecommendAlternatives = _35[1];
    var _36 = (0, react_1.useState)(false), closeSalesAutomatically = _36[0], setCloseSalesAutomatically = _36[1];
    var _37 = (0, react_1.useState)({
        name: "Sokoos Internet",
        type: "Telecom & Connectivity",
        about: "We help local businesses stay online with reliable internet plans, fast support, and easy onboarding.",
        hours: "Mon–Fri, 8:00 AM - 6:00 PM",
        serviceAreas: "Nairobi, Kiambu, Thika",
        paymentMethods: "Mobile Money, Bank Transfer, Cash",
    }), businessInfo = _37[0], setBusinessInfo = _37[1];
    var _38 = (0, react_1.useState)([
        { id: "kp1", name: "10 Mbps Internet", price: "KES 2,500/month" },
        { id: "kp2", name: "20 Mbps Internet", price: "KES 3,500/month" },
        { id: "kp3", name: "Business Package", price: "KES 5,000/month" },
    ]), knowledgeProducts = _38[0], setKnowledgeProducts = _38[1];
    var _39 = (0, react_1.useState)([
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
    ]), personalContacts = _39[0], setPersonalContacts = _39[1];
    var _40 = (0, react_1.useState)({
        name: "",
        relationship: "",
        phone: "",
    }), newContact = _40[0], setNewContact = _40[1];
    var addPersonalContact = function () {
        var name = newContact.name.trim();
        var phone = newContact.phone.trim();
        var relationship = newContact.relationship.trim();
        if (!name || !phone)
            return;
        setPersonalContacts(function (c) { return __spreadArray(__spreadArray([], c, true), [
            {
                id: "pc-".concat(Date.now()),
                name: name,
                relationship: relationship || "Contact",
                phone: phone,
            },
        ], false); });
        setNewContact({ name: "", relationship: "", phone: "" });
    };
    // Personal-contact helpers (moved here so personalContacts is defined first)
    var isPersonalByPhone = function (phone) {
        return !!phone && personalContacts.some(function (pc) { return pc.phone === phone; });
    };
    var isPersonalActive = isPersonalByPhone((_c = activeConversationData === null || activeConversationData === void 0 ? void 0 : activeConversationData.phone) !== null && _c !== void 0 ? _c : null);
    var activePersonalEntry = personalContacts.find(function (pc) { return pc.phone === (activeConversationData === null || activeConversationData === void 0 ? void 0 : activeConversationData.phone); });
    var activePersonalIcon = activePersonalEntry &&
        ["wife", "husband", "spouse", "family"].some(function (k) {
            return activePersonalEntry.relationship.toLowerCase().includes(k);
        })
        ? "🏠"
        : "👤";
    var effectiveActiveSource = isPersonalActive
        ? "personal"
        : getEffectiveSource(activeConversation, activeConversationData === null || activeConversationData === void 0 ? void 0 : activeConversationData.source);
    var activeAgentName = isPersonalActive
        ? "Personal"
        : String(effectiveActiveSource).startsWith("ai")
            ? "Sokoos AI"
            : ((_d = OWNER_NAMES[activeConversation]) !== null && _d !== void 0 ? _d : "You");
    // Helper: Generate single conversation status badge
    var getConversationStatusBadge = function (source, isPersonal) {
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
    var toggleAiForActive = function () {
        var _a, _b;
        // Do not allow toggling AI for personal contacts (mock behavior).
        if (isPersonalActive)
            return;
        var current = (_b = (_a = sourceOverrides[activeConversation]) !== null && _a !== void 0 ? _a : activeConversationData === null || activeConversationData === void 0 ? void 0 : activeConversationData.source) !== null && _b !== void 0 ? _b : "";
        if (String(current).startsWith("ai")) {
            setSourceOverrides(function (s) {
                var _a;
                return (__assign(__assign({}, s), (_a = {}, _a[activeConversation] = "owner", _a)));
            });
        }
        else {
            setSourceOverrides(function (s) {
                var _a;
                return (__assign(__assign({}, s), (_a = {}, _a[activeConversation] = "ai_handling", _a)));
            });
        }
    };
    var _41 = (0, react_1.useState)([
        {
            id: "faq1",
            question: "Do you offer installation?",
            answer: "Yes, installation costs KES 2,000.",
        },
    ]), faqItems = _41[0], setFaqItems = _41[1];
    var _42 = (0, react_1.useState)({
        returnPolicy: "Customers may return services within 7 days if there is a technical issue requiring a fix.",
        deliveryPolicy: "We deliver service activation details via WhatsApp within 24 hours of payment.",
        cancellationPolicy: "Cancel anytime with 48 hours notice before the next billing cycle.",
    }), policies = _42[0], setPolicies = _42[1];
    var _43 = (0, react_1.useState)({
        name: "Sokoos Internet",
        industry: "Telecom & Connectivity",
        description: "We help local businesses stay online with reliable internet plans, fast support, and easy onboarding.",
        phone: "+254 20 3949 0101",
        email: "support@sokoos.co.ke",
        location: "Nairobi, Kenya",
        businessHours: "Mon–Fri, 8:00 AM - 6:00 PM",
        serviceAreas: "Nairobi, Kiambu, Thika",
        paymentMethods: { mPesa: true, cash: true, bankTransfer: true },
    }), businessProfile = _43[0], setBusinessProfile = _43[1];
    var _44 = (0, react_1.useState)("No file selected"), imageLabel = _44[0], setImageLabel = _44[1];
    var _45 = (0, react_1.useState)(false), customerCollapsed = _45[0], setCustomerCollapsed = _45[1];
    var router = (0, react_router_1.useRouter)();
    var handleLogout = function () {
        localStorage.removeItem("sokoos-auth");
        void router.navigate({ to: "/signin", replace: true });
    };
    // Future team state (initialized but not used when hasTeam = false)
    var teamMembers = hasTeam ? MOCK_TEAM_MEMBERS : [];
    var currentMember = hasTeam
        ? MOCK_TEAM_MEMBERS.find(function (m) { return m.id === currentUserId; })
        : null;
    return (<div className="h-screen min-h-screen overflow-hidden bg-[#FFFFFF] text-[#111827]">
      {/* Desktop fixed left sidebar */}
      <div className="hidden md:block" onMouseEnter={function () { return setSidebarHovered(true); }} onMouseLeave={function () { return setSidebarHovered(false); }}>
        <aside className="md:fixed md:inset-y-0 md:left-0 md:flex md:flex-col md:pt-4 bg-[#FFFFFF] border-r border-[#E5E7EB]/10 w-[72px] z-20">
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-[20px] bg-[#22C55E] flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <span className="sr-only">Sokoos</span>
              </div>
              <div className="h-10 w-10"/>
            </div>
          </div>

          <nav className="flex-1 px-1.5 overflow-hidden">
            <ul className="space-y-2">
              {NAV_ITEMS.map(function (_a) {
            var label = _a.label, href = _a.href, Icon = _a.Icon;
            var active = selected === label;
            return (<li key={href}>
                    <button onClick={function () { return setSelected(label); }} title={label} aria-label={label} className={"w-full flex items-center justify-center rounded-[20px] p-2 text-sm font-medium transition duration-200 ".concat(active
                    ? "bg-[#ECFDF5] text-[#047857] shadow-sm"
                    : "text-[#6B7280] hover:bg-[#EFF6FF]")}>
                      <Icon className={"h-4 w-4 ".concat(active ? "text-[#059669] opacity-100" : "text-[#6B7280] opacity-90")}/>
                      <span className="sr-only">{label}</span>
                    </button>
                  </li>);
        })}
            </ul>
          </nav>
          {sidebarHovered && (<div className="fixed inset-y-0 left-0 z-50 w-64 min-w-[248px] bg-[#FFFFFF] border-r border-[#E5E7EB]/10 shadow-[0_18px_48px_rgba(15,23,42,0.12)] transition-all duration-200 ease-out">
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
                    {NAV_ITEMS.map(function (_a) {
                var label = _a.label, href = _a.href, Icon = _a.Icon;
                var active = selected === label;
                return (<li key={href}>
                          <button onClick={function () { return setSelected(label); }} title={label} aria-label={label} className={"w-full text-left flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium transition duration-200 ".concat(active
                        ? "bg-[#ECFDF5] text-[#047857]"
                        : "text-[#475569] hover:bg-[#EFF6FF]")}>
                            <Icon className={"h-5 w-5 ".concat(active ? "text-[#059669]" : "text-[#6B7280]")}/>
                            <span>{label}</span>
                          </button>
                        </li>);
            })}
                  </ul>
                </nav>
              </div>
            </div>)}
        </aside>
      </div>

      {/* Mobile top header with menu button */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#FFFFFF] border-b border-[#E5E7EB]/20 flex items-center px-4 z-30">
        <button aria-label="Open menu" onClick={function () { return setMobileOpen(true); }} className="mr-3 inline-flex items-center justify-center rounded-[20px] p-2 text-[#111827] hover:bg-[#F3F4F6]">
          <lucide_react_1.Menu className="h-5 w-5"/>
        </button>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-[20px] bg-[#22C55E] flex items-center justify-center text-white font-semibold">
            S
          </div>
          <span className="font-semibold">Sokoos</span>
        </div>
      </header>

      {/* Mobile slide-over sidebar */}
      {mobileOpen && (<div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={function () { return setMobileOpen(false); }}/>
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#FFFFFF] border-r border-[#E5E7EB]/10 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-[20px] bg-[#22C55E] flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <span className="font-semibold">Sokoos</span>
              </div>
              <button onClick={function () { return setMobileOpen(false); }} className="p-2 rounded-[20px] hover:bg-[#F3F4F6]">
                <lucide_react_1.X className="h-5 w-5"/>
              </button>
            </div>

            <nav>
              <ul className="space-y-1">
                {NAV_ITEMS.map(function (_a) {
                var label = _a.label, href = _a.href, Icon = _a.Icon;
                var active = selected === label;
                return (<li key={href}>
                      <button onClick={function () {
                        setSelected(label);
                        setMobileOpen(false);
                    }} className={"w-full text-left flex items-center gap-2.5 rounded-[20px] px-3 py-2 text-sm font-medium transition duration-200 ".concat(active
                        ? "bg-[#F0FDF4] text-[#065F46] shadow-sm ring-1 ring-[#D1FAE5]/40"
                        : "text-[#475569] hover:bg-[#EFF6FF] hover:text-[#111827]")}>
                        <Icon className="h-4 w-4"/>
                        <span>{label}</span>
                      </button>
                    </li>);
            })}
              </ul>
            </nav>
          </div>
        </div>)}

      {/* Main content area. On desktop, add left padding to allow for fixed sidebar. On mobile, add top padding to account for the header. */}
      <main className="h-full overflow-hidden pt-14 md:pt-0 md:pl-[72px]">
        <div className="max-w-7xl mx-auto h-full p-4">
          {/* Render placeholder pages based on selected state */}
          {selected === "Home" && (<div className="h-full overflow-y-auto space-y-6 pr-2">
              <div className="relative overflow-hidden rounded-[32px] border border-[#DCFCE7] bg-gradient-to-br from-[#F0FDF4] via-white to-[#ECFDF5] p-8 shadow-sm">
                <div className="absolute right-[-60px] top-[-60px] h-56 w-56 rounded-full bg-[#22C55E]/10 blur-3xl"/>
                <div className="absolute bottom-[-80px] left-[-80px] h-72 w-72 rounded-full bg-[#16A34A]/10 blur-3xl"/>

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

                      <button type="button" onClick={handleLogout} className="rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 font-semibold text-[#111827] hover:bg-[#F9FAFB] transition">
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

                  <lucide_react_1.Bot className="h-7 w-7 text-[#22C55E]"/>
                </div>

                <div className="mt-6">
                  <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-5 py-4">
                    <input type="text" placeholder="Ask your AI Employee anything..." className="w-full bg-transparent text-[15px] outline-none placeholder:text-[#94A3B8]"/>
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

                    <lucide_react_1.Bot className="h-8 w-8 text-[#22C55E]"/>
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
            </div>)}
          {selected === "Inbox" && (<div className={"grid gap-6 px-6 py-6 transition-all duration-300 ease-out items-stretch h-full grid-cols-1 ".concat(customerCollapsed ? "md:grid-cols-[320px_1fr]" : "md:grid-cols-[320px_1fr_minmax(330px,360px)]")}>
              <section className={"".concat(CARD, " w-full h-full min-h-0 flex flex-col min-w-0")}>
                <div className="border-b border-[#ECECEC] px-5 py-2">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className={PANEL_TITLE}>Conversations</h2>
                      <p className={"".concat(SECONDARY, " mt-0")}>
                        Recent messages and active chats
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 overflow-x-auto px-5 py-2 flex-nowrap custom-scrollbar">
                  {INBOX_TAB_ITEMS.map(function (tab) { return (<button key={tab} onClick={function () { return setActiveTab(tab); }} className={"whitespace-nowrap rounded-full px-4 py-1 text-xs transform flex-shrink-0 ".concat(TRANSITION, " ").concat(activeTab === tab
                    ? "bg-[#22C55E] text-white font-medium shadow-sm"
                    : "bg-[#F3F4F6] text-[#475569] font-medium", " hover:shadow-sm active:scale-[0.98]")}>
                      <span className="inline-flex items-center gap-2">
                        <span>{tab}</span>
                        <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white px-2 text-[11px] font-semibold text-[#475569] shadow-sm">
                          {inboxCounts[tab]}
                        </span>
                      </span>
                    </button>); })}
                </div>
                <div className="flex min-h-0 flex-1 flex-col px-5 py-2 gap-2">
                  <div className="rounded-[20px] bg-[#F9FAFB] px-4 py-2.5 shadow-none ring-1 ring-[#ECECEC] transition duration-150 ease-out focus-within:ring-2 focus-within:ring-[#22C55E] focus-within:border-[#22C55E] border border-[#E5E7EB]">
                    <div className="flex h-[44px] items-center gap-3 w-full text-[#94A3B8]">
                      <lucide_react_1.Search className="h-4 w-4 flex-shrink-0"/>
                      <input type="search" placeholder="Search conversations" value={searchQuery} onChange={function (event) { return setSearchQuery(event.target.value); }} className={"w-full h-full bg-transparent text-sm text-[#111827] placeholder:text-[#94A3B8] placeholder:font-regular outline-none ".concat(TRANSITION_FAST)}/>
                    </div>
                  </div>
                  <div className="flex-1 min-h-0 space-y-1.5 overflow-y-auto pr-2 scroll-smooth custom-scrollbar">
                    {INBOX_CONVERSATIONS.filter(function (conversation) {
                var _a;
                var src = (_a = sourceOverrides[conversation.id]) !== null && _a !== void 0 ? _a : conversation.source;
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
                .filter(function (conversation) {
                var _a, _b;
                return ((_a = conversation.name) !== null && _a !== void 0 ? _a : "")
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                    ((_b = conversation.phone) !== null && _b !== void 0 ? _b : "")
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    conversation.message
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase());
            })
                .map(function (conversation) {
                var _a, _b, _c;
                var active = conversation.id === activeConversation;
                var effectiveSourceRaw = (_a = sourceOverrides[conversation.id]) !== null && _a !== void 0 ? _a : conversation.source;
                var isPersonal = personalContacts.some(function (pc) { return pc.phone === conversation.phone; });
                var effectiveSource = isPersonal
                    ? "personal"
                    : effectiveSourceRaw;
                return (<button key={conversation.id} onClick={function () {
                        return setActiveConversation(conversation.id);
                    }} className={"w-full overflow-hidden rounded-[20px] px-5 py-3 min-h-[92px] text-left ".concat(TRANSITION, " transform-gpu active:scale-[0.98] flex flex-col gap-4 ").concat(active
                        ? "bg-[#F3FDF7] border border-[#22C55E]/20 ring-1 ring-[#22C55E]/20 shadow-[0_12px_36px_rgba(15,23,42,0.08)]"
                        : "bg-white border border-transparent hover:bg-[#FBFFF8] hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:-translate-y-0.5")}>
                            {/* Header: Avatar + Name + Time */}
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E5E7EB] to-[#D1D5DB] text-sm font-semibold text-[#64748B]">
                                  {conversation.avatar}
                                </div>
                                <div className="min-w-0 flex-1 space-y-1">
                                  {conversation.isSaved && conversation.name ? (<p className="text-[16px] font-semibold truncate" title={conversation.name}>
                                      {conversation.name}
                                    </p>) : (<p className="text-[16px] font-semibold truncate" title={(_b = conversation.phone) !== null && _b !== void 0 ? _b : "Unknown Customer"}>
                                      {(_c = conversation.phone) !== null && _c !== void 0 ? _c : "Unknown Customer"}
                                    </p>)}
                                </div>
                              </div>
                              <div className="flex items-start gap-2 flex-shrink-0">
                                {conversation.badge > 0 ? (<span className={"inline-flex min-w-[18px] h-4 items-center justify-center rounded-full bg-[#22C55E] text-white text-[10px] font-semibold transform-gpu transition duration-200 ease-out px-2"}>
                                    {conversation.badge}
                                  </span>) : null}
                                <span className={"".concat(TIME_LABEL, " whitespace-nowrap text-[11px] text-[#94A3B8]")}>
                                  {formatConversationTime(conversation.time)}
                                </span>
                              </div>
                            </div>

                            {/* Badge Row: Status badge */}
                            <div className="min-w-0">
                              {(function () {
                        var badge = getConversationStatusBadge(effectiveSource, isPersonal);
                        return (<span className={"".concat(STATUS_CHIP, " ").concat(badge.bg, " ").concat(badge.text, " text-xs px-2 py-1")}>
                                    {badge.emoji} {badge.label}
                                  </span>);
                    })()}
                            </div>

                            <p className={"".concat(SECONDARY, " text-[14px] leading-5 min-w-0 truncate")} title={conversation.message}>
                              {conversation.message}
                            </p>
                          </button>);
            })}
                  </div>
                </div>
              </section>

              <section className={"".concat(CARD, " w-full h-full min-h-0 flex flex-col min-w-0")}>
                {/* Header - Fixed */}
                <div className="border-b border-[#ECECEC] px-6 py-4 mb-2 flex-shrink-0">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <h2 className={"".concat(CUSTOMER_NAME, " truncate")}>
                          {(_e = INBOX_CONVERSATIONS.find(function (item) { return item.id === activeConversation; })) === null || _e === void 0 ? void 0 : _e.name}
                        </h2>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[#64748B]">
                          <span className="truncate">
                            {(_f = activeConversationData === null || activeConversationData === void 0 ? void 0 : activeConversationData.phone) !== null && _f !== void 0 ? _f : "Unknown phone"}
                          </span>
                          <span className="text-[#94A3B8]">•</span>
                          {(function () {
                var badge = getConversationStatusBadge(effectiveActiveSource, isPersonalActive);
                return (<span className={"".concat(badge.bg, " ").concat(badge.text, " rounded-full px-2 py-0.5 text-[11px] font-semibold inline-flex items-center gap-1")}> 
                                {badge.emoji} {badge.label}
                              </span>);
            })()}
                        </div>
                        <div className="mt-2 flex flex-col gap-2 text-sm text-[#475569]">
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-medium text-[#111827]">AI Confidence</span>
                            <span className="text-[#16A34A] font-semibold">94%</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-[#DCFCE7]">
                            <div className="h-full w-[94%] rounded-full bg-[#22C55E]"/>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button type="button" onClick={toggleAiForActive} disabled={isPersonalActive} aria-label="AI Assist" className={"inline-flex h-9 rounded-full border px-3.5 text-[10px] font-semibold items-center justify-center ".concat(TRANSITION_FAST, " active:scale-[0.98] ").concat(isPersonalActive
                ? "border-[#E5E7EB] bg-white text-[#9CA3AF] cursor-not-allowed"
                : "border-[#22C55E] bg-white text-[#166534] hover:bg-[#ECFDF5]")} title={isPersonalActive
                ? "Cannot toggle mode for personal contacts"
                : "AI Assist"}>
                          ✨ AI Assist
                        </button>
                        {customerCollapsed && (<button type="button" onClick={function () { return setCustomerCollapsed(false); }} className={"inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] bg-white text-[#64748B] ".concat(TRANSITION, " hover:bg-[#F9FAFB] hover:text-[#111827] flex-shrink-0")} aria-label="Expand customer panel" title="Expand customer panel">
                            <lucide_react_1.ChevronRight className="h-3 w-3"/>
                          </button>)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Messages Area - Scrollable, flex-end aligned */}
                <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-6 pt-3 pb-6 flex flex-col justify-end bg-[#F8FCF7]">
                  <div className="space-y-5 flex flex-col">
                    {activeMessages.map(function (message, index) {
                var originalWasAi = String(activeConversationData === null || activeConversationData === void 0 ? void 0 : activeConversationData.source).startsWith("ai");
                if (message.from === "agent" &&
                    originalWasAi &&
                    !String(effectiveActiveSource).startsWith("ai")) {
                    return null;
                }
                var isAgent = message.from === "agent";
                var isAi = isAgent &&
                    String(effectiveActiveSource).startsWith("ai");
                var senderLabel = isAi ? "Sokoos AI" : activeAgentName;
                return (<div key={"".concat(message.time, "-").concat(index)} className={"".concat(TRANSITION_FAST, " transition-opacity")}>
                          {isAgent ? (<div className="flex items-center gap-1 text-[10px] font-semibold text-[#94A3B8] mb-0.5">
                              {isAi ? (<>
                                  <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-[#ECFDF5] text-[#0C7A4D]">
                                    <lucide_react_1.Bot className="h-1.5 w-1.5"/>
                                  </span>
                                  <span>{senderLabel}</span>
                                </>) : (<span>{senderLabel}</span>)}
                            </div>) : null}
                          <div className={"flex ".concat(isAgent ? "justify-start" : "justify-end")}>
                            <div className={"rounded-[28px] px-3 py-2 text-sm break-words max-w-[70%] ".concat(isAgent
                        ? "bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7]"
                        : "bg-white text-[#111827] border border-[#E5E7EB]", " ").concat(TRANSITION_FAST, " transition-shadow transform-gpu")}>
                              <div className="flex flex-col gap-2">
                                <p className="leading-relaxed text-sm">
                                  {message.text}
                                </p>
                                <div className={"self-end text-[9px] ".concat(isAgent ? "text-[#16A34A]/30" : "text-[#64748B]/30", " font-normal")}>
                                  {message.time}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>);
            })}
                  </div>
                </div>

                {/* Input Area - Sticky at bottom */}
                <div className="shrink-0 border-t border-[#E5E7EB] bg-white px-6 py-3">
                  <div className={"rounded-[20px] bg-[#F9FAFB] border border-[#E5E7EB] flex items-center gap-3 min-h-[52px] px-4 ".concat(TRANSITION)}>
                    <textarea ref={textareaRef} value={messageInput} onChange={function (event) { return setMessageInput(event.target.value); }} placeholder="Type a message..." className={"min-w-0 flex-1 resize-none overflow-y-auto overflow-x-hidden custom-scrollbar bg-transparent text-sm leading-5 text-[#111827] outline-none placeholder:text-[#CBD5E1] placeholder:font-regular ".concat(TRANSITION_FAST)} rows={1} style={{ minHeight: 40, maxHeight: 80 }}/>
                    <button type="button" className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white transition duration-150 ease-out transform hover:bg-[#16A34A] active:scale-95">
                      <lucide_react_1.Send className="h-4 w-4"/>
                    </button>
                  </div>
                </div>
              </section>

              {!customerCollapsed && (<section className={"".concat(CARD, " w-full h-full min-h-0 flex flex-col transition-all duration-300 ease-out ").concat(customerPanelFading ? "opacity-80 translate-y-1" : "opacity-100 translate-y-0", " min-w-[330px] max-w-[360px]")}>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 shrink-0 px-5 py-4 border-b border-[#ECECEC]">
                    <div>
                      <h2 className={"".concat(CUSTOMER_NAME, " mt-1")}>
                        {activeCustomerProfile.name}
                      </h2>
                      <p className={"".concat(SECONDARY, " mt-2")}>
                        {activeCustomerProfile.company}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-2">
                        <span className="inline-flex h-3.5 w-3.5 shrink-0 rounded-full bg-[#22C55E]"/>
                        <span className={"".concat(STATUS_CHIP, " bg-[#ECFDF5] text-[#166534] border border-[#D1FAE5]")}>
                          {activeCustomerProfile.leadStatus}
                        </span>
                      </div>
                    </div>
                    <button type="button" onClick={function () { return setCustomerCollapsed(true); }} className={"inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] bg-white text-[#64748B] ".concat(TRANSITION_FAST, " hover:bg-[#F9FAFB] hover:text-[#111827] active:scale-95 shrink-0")} aria-label="Collapse customer panel" title="Collapse customer panel">
                      <lucide_react_1.ChevronRight className="h-3 w-3 rotate-180"/>
                    </button>
                  </div>

                  <div className="flex-1 min-h-0 overflow-hidden px-5 py-4">
                    {summaryGenerated ? (<div className={"h-full overflow-y-auto pr-2 transition-all duration-300 ease-out ".concat(summaryVisible ? "opacity-100" : "opacity-0", " [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#F3F4F6] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#CBD5E1] [&::-webkit-scrollbar-thumb:hover]:bg-[#22C55E]")} style={{ scrollbarWidth: "thin", scrollbarColor: "#CBD5E1 transparent" }}>
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
                            <div className="mt-4 h-px bg-[#E5E7EB]/80"/>
                          </div>

                          <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Customer Intent</p>
                            <p className="mt-2 text-[15px] leading-6 text-[#475569]">
                              {aiSummary === null || aiSummary === void 0 ? void 0 : aiSummary.customerIntent}
                            </p>
                          </div>

                          <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Buying Probability</p>
                            <div className="mt-3 flex items-center gap-3">
                              <p className="text-[24px] font-semibold text-[#111827]">
                                {aiSummary === null || aiSummary === void 0 ? void 0 : aiSummary.buyingProbability}%
                              </p>
                              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#E5E7EB]">
                                <div className="h-full rounded-full bg-[#22C55E]" style={{
                        width: "".concat((_g = aiSummary === null || aiSummary === void 0 ? void 0 : aiSummary.buyingProbability) !== null && _g !== void 0 ? _g : 0, "%"),
                    }}/>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Customer Sentiment</p>
                            <div className="mt-3">
                              <span className={"inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-semibold ".concat(aiSummary === null || aiSummary === void 0 ? void 0 : aiSummary.sentiment.badgeClassName)}>
                                <span>{aiSummary === null || aiSummary === void 0 ? void 0 : aiSummary.sentiment.icon}</span>
                                {aiSummary === null || aiSummary === void 0 ? void 0 : aiSummary.sentiment.label}
                              </span>
                            </div>
                          </div>

                          <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Buying Signals</p>
                            <ul className="mt-3 space-y-2 text-[15px] text-[#475569]">
                              {aiSummary === null || aiSummary === void 0 ? void 0 : aiSummary.buyingSignals.map(function (signal) { return (<li key={signal} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#22C55E]"/>
                                  <span>{signal}</span>
                                </li>); })}
                            </ul>
                          </div>

                          <div className="rounded-[24px] border border-[#D1FAE5] bg-[#F0FDF4] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Recommended Next Action</p>
                            <p className="mt-2 text-[15px] leading-6 font-semibold text-[#166534]">
                              {aiSummary === null || aiSummary === void 0 ? void 0 : aiSummary.recommendedNextAction}
                            </p>
                          </div>

                          <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Suggested Reply</p>
                            <div className="mt-3 rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                              {aiSummary === null || aiSummary === void 0 ? void 0 : aiSummary.suggestedReply.map(function (line, index) { return (<p key={"".concat(line, "-").concat(index)} className={"text-[14px] leading-6 text-[#334155] ".concat(index === 0 ? "font-semibold text-[#111827]" : "")}>
                                  {line}
                                </p>); })}
                            </div>
                            <button type="button" className="mt-4 inline-flex items-center justify-center rounded-[24px] bg-[#22C55E] px-4 py-2.5 text-[14px] font-semibold text-white transition-all duration-200 ease-out hover:bg-[#16A34A]">
                              Insert Reply
                            </button>
                          </div>

                          <div className="rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                            <p className={SECTION_HEADING}>Knowledge Used</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {aiSummary === null || aiSummary === void 0 ? void 0 : aiSummary.knowledgeSources.map(function (source) { return (<span key={source} className="inline-flex items-center gap-2 rounded-full border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-1.5 text-[12px] font-semibold text-[#166534]">
                                  <span className="text-[11px]">✓</span>
                                  {source}
                                </span>); })}
                            </div>
                          </div>
                        </div>
                      </div>) : (<div className="flex h-full min-h-[220px] flex-col items-start justify-center gap-4 px-1">
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
                    ].map(function (item) { return (<div key={item} className="flex items-start gap-2.5">
                              <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#DCFCE7] text-[9px] font-semibold text-[#166534]">
                                ✓
                              </span>
                              <span className="font-semibold text-[#111827]">
                                {item}
                              </span>
                            </div>); })}
                        </div>
                        <div className="mt-2 w-full max-w-[280px]">
                          <button type="button" onClick={function () {
                        setSummaryGenerated(true);
                        setSummaryVisible(false);
                        setAiSummary(buildMockAiSummary());
                        window.setTimeout(function () { return setSummaryVisible(true); }, 20);
                    }} className="w-full rounded-[24px] bg-[#22C55E] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:bg-[#16A34A] hover:shadow-sm active:scale-[0.98]">
                            Generate AI Summary
                          </button>
                        </div>
                      </div>)}
                  </div>
                </section>)}
            </div>)}
          {selected === "AI Employee" && (<div className={"space-y-6 ".concat(CARD)}>
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
                    {[
                "Identity",
                "Knowledge Hub",
                "Catalogue",
                "Sales Playbooks",
                "Skills",
                "Policies",
                "Test AI",
                "Performance",
            ].map(function (section) {
                var active = activeWorkspaceSection === section;
                return (<button key={section} type="button" onClick={function () { return setActiveWorkspaceSection(section); }} className={"flex w-full items-center justify-between rounded-[20px] px-4 py-3 text-left text-sm font-semibold transition ".concat(active
                        ? "bg-[#22C55E] text-white"
                        : "bg-white text-[#111827] hover:bg-[#EFF6FF]")}>
                          <span>{section}</span>
                          <lucide_react_1.ChevronRight className="h-4 w-4"/>
                        </button>);
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
                    {activeWorkspaceSection === "Identity" && (<div className="relative space-y-8">
                        <div className="absolute right-0 top-0 flex gap-2">
                          <button type="button" onClick={function () { return scrollIdentityForm(-240); }} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] transition hover:bg-[#F3F4F6]">
                            <lucide_react_1.ChevronUp className="h-4 w-4"/>
                          </button>
                          <button type="button" onClick={function () { return scrollIdentityForm(240); }} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] transition hover:bg-[#F3F4F6]">
                            <lucide_react_1.ChevronDown className="h-4 w-4"/>
                          </button>
                        </div>

                        <div ref={identityFormRef} className="max-h-[calc(100vh-280px)] overflow-y-auto pr-4 pb-6">
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
                                    <input id="assistant-name" value={assistantName} onChange={function (event) { return setAssistantName(event.target.value); }} placeholder="Nuru" className={INPUT_FIELD}/>
                                  </div>

                                  <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                    <label className="block text-sm font-semibold text-[#111827]" htmlFor="assistant-role">
                                      Role
                                    </label>
                                    <p className="mt-1 text-sm text-[#64748B]">
                                      Describe the assistant’s primary responsibility.
                                    </p>
                                    <input id="assistant-role" value={assistantRole} onChange={function (event) { return setAssistantRole(event.target.value); }} placeholder="Customer Success Assistant" className={INPUT_FIELD}/>
                                  </div>

                                  <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                    <label className="block text-sm font-semibold text-[#111827]" htmlFor="assistant-description">
                                      Short Description
                                    </label>
                                    <p className="mt-1 text-sm text-[#64748B]">
                                      Summarize the assistant’s voice in one concise sentence.
                                    </p>
                                    <textarea id="assistant-description" value={assistantDescription} onChange={function (event) { return setAssistantDescription(event.target.value); }} rows={4} placeholder="Helps customers find the right internet plan, answer product questions, and support onboarding." className={"".concat(INPUT_FIELD, " min-h-[150px] resize-none")}/>
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
                                      <select id="primary-language" value={primaryLanguage} onChange={function (event) { return setPrimaryLanguage(event.target.value); }} className={INPUT_FIELD}>
                                        {LANGUAGES.map(function (lang) { return (<option key={lang} value={lang}>
                                            {lang}
                                          </option>); })}
                                      </select>
                                    </div>

                                    <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                      <label className="block text-sm font-semibold text-[#111827]" htmlFor="secondary-language">
                                        Secondary Language
                                      </label>
                                      <p className="mt-1 text-sm text-[#64748B]">
                                        Secondary language used for fallback responses.
                                      </p>
                                      <select id="secondary-language" value={secondaryLanguage} onChange={function (event) { return setSecondaryLanguage(event.target.value); }} className={INPUT_FIELD}>
                                        {LANGUAGES.map(function (lang) { return (<option key={lang} value={lang}>
                                            {lang}
                                          </option>); })}
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
                                        {PERSONALITIES.map(function (personalityOption) { return (<button key={personalityOption} type="button" onClick={function () { return setPersonality(personalityOption); }} className={"w-full min-h-[56px] rounded-[20px] px-4 py-3 text-sm font-semibold text-left transition ".concat(personality === personalityOption
                        ? "border-[#22C55E] bg-[#ECFDF5] text-[#111827] shadow-sm"
                        : "border border-[#E5E7EB] bg-white text-[#475569] hover:border-[#CBD5E1]")}>
                                            {personalityOption}
                                          </button>); })}
                                      </div>
                                    </div>

                                    <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4">
                                      <label className="block text-sm font-semibold text-[#111827]" htmlFor="tone">
                                        Tone
                                      </label>
                                      <p className="mt-1 text-sm text-[#64748B]">
                                        The assistant’s formality when replying.
                                      </p>
                                      <select id="tone" value={tone} onChange={function (event) { return setTone(event.target.value); }} className={INPUT_FIELD}>
                                        {TONES.map(function (toneOption) { return (<option key={toneOption} value={toneOption}>
                                            {toneOption}
                                          </option>); })}
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
                                    <input id="business-hours" value={businessHours} onChange={function (event) { return setBusinessHours(event.target.value); }} placeholder="Mon–Fri, 8:00 AM - 6:00 PM" className={INPUT_FIELD}/>
                                  </div>

                                  <div>
                                    <label className="block text-sm font-semibold text-[#111827]" htmlFor="timezone">
                                      Timezone
                                    </label>
                                    <select id="timezone" value={timezone} onChange={function (event) { return setTimezone(event.target.value); }} className={INPUT_FIELD}>
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
                                  <select id="response-speed" value={responseSpeed} onChange={function (event) { return setResponseSpeed(event.target.value); }} className={INPUT_FIELD}>
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
                            <div className={"".concat(CARD, " p-6")}>
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
                                    <lucide_react_1.Image className="mr-2 h-4 w-4"/>
                                    Upload
                                    <input type="file" accept="image/*" className="hidden" onChange={function (event) {
                    var _a;
                    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
                    if (file) {
                        setAvatarFileName(file.name);
                    }
                }}/>
                                  </label>
                                </div>
                                <p className="mt-4 text-sm text-[#64748B]">
                                  Recommended: PNG or JPG, up to 5MB.
                                </p>
                              </div>
                            </div>

                            <div className={"".concat(CARD, " p-6 space-y-6")}>
                              <div>
                                <p className="text-sm font-semibold text-[#111827]">Summary</p>
                                <p className="mt-1 text-sm text-[#6B7280]">
                                  Quick overview of the current assistant configuration.
                                </p>
                              </div>

                              <div className="grid gap-4">
                                <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                                  <p className="text-sm font-semibold text-[#111827]">Name</p>
                                  <p className="mt-1 text-sm text-[#6B7280]">{assistantName}</p>
                                </div>
                                <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                                  <p className="text-sm font-semibold text-[#111827]">Role</p>
                                  <p className="mt-1 text-sm text-[#6B7280]">{assistantRole}</p>
                                </div>
                                <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                                  <p className="text-sm font-semibold text-[#111827]">Timezone</p>
                                  <p className="mt-1 text-sm text-[#6B7280]">{timezone}</p>
                                </div>
                                <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                                  <p className="text-sm font-semibold text-[#111827]">Response Speed</p>
                                  <p className="mt-1 text-sm text-[#6B7280]">{responseSpeed}</p>
                                </div>
                              </div>

                              <button type="button" onClick={function () {
                    setSaveConfirmation("Saved successfully.");
                    window.setTimeout(function () { return setSaveConfirmation(""); }, 3200);
                }} className="w-full rounded-[24px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]">
                                Save Changes
                              </button>

                              {saveConfirmation && (<p className="text-sm text-[#16A34A]">
                                  {saveConfirmation}
                                </p>)}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>)}

                    {activeWorkspaceSection === "Knowledge Hub" && (<div className="space-y-6">
                        <div className="rounded-[24px] bg-[#F9FAFB] p-6">
                          <p className="text-sm font-semibold text-[#111827]">
                            Knowledge sources
                          </p>
                          <p className="mt-3 text-sm text-[#6B7280]">
                            The AI uses these references to answer customers accurately.
                          </p>
                          <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-4">
                              <p className="text-sm font-semibold text-[#111827]">
                                FAQs
                              </p>
                              <p className="mt-2 text-sm text-[#6B7280]">
                                {faqItems.length} saved question-answer pairs.
                              </p>
                            </div>
                            <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-4">
                              <p className="text-sm font-semibold text-[#111827]">
                                Products & services
                              </p>
                              <p className="mt-2 text-sm text-[#6B7280]">
                                {knowledgeProducts.length} product entries.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>)}

                    {activeWorkspaceSection === "Catalogue" && (<div className="space-y-6">
                        <p className="text-sm font-semibold text-[#111827]">
                          Product catalogue
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {knowledgeProducts.slice(0, 4).map(function (product) { return (<div key={product.id} className="rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                              <p className="text-sm font-semibold text-[#111827]">
                                {product.name || "Untitled product"}
                              </p>
                              <p className="mt-2 text-sm text-[#6B7280]">
                                {product.price || "No price set"}
                              </p>
                            </div>); })}
                        </div>
                      </div>)}

                    {activeWorkspaceSection === "Sales Playbooks" && (<div className="space-y-6">
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
                ].map(function (item) { return (<div key={item} className="rounded-[24px] border border-[#E5E7EB] bg-white p-6">
                              <p className="text-sm font-semibold text-[#111827]">
                                {item}
                              </p>
                              <p className="mt-2 text-sm text-[#6B7280]">
                                Mock script for AI responses and lead engagement.
                              </p>
                            </div>); })}
                        </div>
                      </div>)}

                    {activeWorkspaceSection === "Skills" && (<div className="space-y-6">
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
                      </div>)}

                    {activeWorkspaceSection === "Policies" && (<div className="space-y-6">
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
                      </div>)}

                    {activeWorkspaceSection === "Test AI" && (<div className="space-y-6">
                        <div className="rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-6">
                          <p className="text-sm font-semibold text-[#111827]">
                            Test the assistant
                          </p>
                          <p className="mt-3 text-sm text-[#6B7280]">
                            Send a sample prompt and review the mock response.
                          </p>
                        </div>
                        <button type="button" onClick={function () {
                    return setTestAiMessages(function (current) { return __spreadArray(__spreadArray([], current, true), [
                        {
                            id: "user-test-".concat(Date.now()),
                            role: "user",
                            text: "How can I upgrade my plan?",
                        },
                        {
                            id: "ai-test-".concat(Date.now()),
                            role: "ai",
                            text: "You can upgrade anytime through the customer portal. I can send the link now.",
                            source: "Sales Playbooks → Upgrade",
                        },
                    ], false); });
                }} className="rounded-[24px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white hover:bg-[#16A34A]">
                          Run test prompt
                        </button>
                        <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5">
                          <p className="text-sm font-semibold text-[#111827]">
                            Recent mock chat
                          </p>
                          <div className="mt-3 space-y-3 text-sm text-[#6B7280]">
                            {testAiMessages.slice(-2).map(function (message) { return (<div key={message.id} className="rounded-[20px] bg-[#F9FAFB] p-3">
                                <p className="font-semibold text-[#111827]">
                                  {message.role === "ai" ? "AI" : "User"}
                                </p>
                                <p className="mt-1">{message.text}</p>
                              </div>); })}
                          </div>
                        </div>
                      </div>)}

                    {activeWorkspaceSection === "Performance" && (<div className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                          {STAT_CARDS.map(function (metric) { return (<div key={metric.label} className="rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-5">
                              <p className="text-sm font-semibold text-[#111827]">{metric.label}</p>
                              <p className="mt-3 text-3xl font-semibold text-[#111827]">{metric.value}</p>
                              <p className="mt-2 text-sm text-[#6B7280]">{metric.delta} vs last week</p>
                            </div>); })}
                        </div>
                        <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6">
                          <p className="text-sm font-semibold text-[#111827]">AI performance summary</p>
                          <p className="mt-3 text-sm text-[#6B7280]">
                            The assistant is resolving customer inquiries quickly while maintaining high satisfaction.
                          </p>
                        </div>
                      </div>)}
                  </div>
                </main>
              </div>
            </div>)}
          {selected === "Marketing" && (<div className={"space-y-6 ".concat(CARD)}>
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
                <button type="button" className="inline-flex items-center gap-2 rounded-[20px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]">
                  <lucide_react_1.Plus className="h-4 w-4"/>
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
                    {scheduledPosts.map(function (post) { return (<div key={post.id} className="rounded-[24px] border border-[#E5E7EB]/70 bg-[#F8FAFC]/70 p-4">
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
                      </div>); })}
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
                      <input type="file" accept="image/*" className="mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] file:mr-4 file:rounded-full file:border-0 file:bg-[#22C55E] file:px-4 file:py-2 file:text-sm file:text-white" onChange={function (event) {
                var _a, _b;
                var fileName = (_b = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.name;
                setNewPost(function (prev) { return (__assign(__assign({}, prev), { image: fileName !== null && fileName !== void 0 ? fileName : "" })); });
                setImageLabel(fileName !== null && fileName !== void 0 ? fileName : "No file selected");
            }}/>
                      <p className="mt-2 text-xs text-[#6B7280]">
                        {imageLabel}
                      </p>
                    </label>
                    <label className="block text-sm font-medium text-[#111827]">
                      Caption
                      <textarea value={newPost.caption} onChange={function (event) {
                return setNewPost(function (prev) { return (__assign(__assign({}, prev), { caption: event.target.value })); });
            }} placeholder="Write a short caption for this status post" className="mt-2 h-32 w-full rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"/>
                    </label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-medium text-[#111827]">
                        Date
                        <input type="date" value={newPost.date} onChange={function (event) {
                return setNewPost(function (prev) { return (__assign(__assign({}, prev), { date: event.target.value })); });
            }} className={INPUT_FIELD}/>
                      </label>
                      <label className="block text-sm font-medium text-[#111827]">
                        Time
                        <input type="time" value={newPost.time} onChange={function (event) {
                return setNewPost(function (prev) { return (__assign(__assign({}, prev), { time: event.target.value })); });
            }} className={INPUT_FIELD}/>
                      </label>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button type="button" className={"".concat(BUTTON_SECONDARY, " gap-2 sm:w-auto")}>
                        <lucide_react_1.Image className="h-4 w-4"/>
                        Generate With AI
                      </button>
                      <button type="button" className={"".concat(BUTTON_PRIMARY, " sm:w-auto")}>
                        Schedule Post
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>)}
          {selected === "Analytics" && (<div className={"space-y-6 ".concat(CARD)}>
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
                {ANALYTICS_METRICS.map(function (metric) { return (<div key={metric.label} className="rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-5 shadow-sm">
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
                  </div>); })}
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
                      {ANALYTICS_CHART.map(function (point) {
                var height = (point.value / chartMax) * 160;
                return (<div key={point.label} className="flex-1 text-center">
                            <div className="mx-auto h-40 w-full max-w-12 rounded-4xl bg-[#F3F4F6] p-1">
                              <div className="mx-auto h-full rounded-4xl bg-[#22C55E]" style={{ height: "".concat(height, "px"), width: "100%" }}/>
                            </div>
                            <p className="mt-3 text-sm text-[#6B7280]">
                              {point.label}
                            </p>
                          </div>);
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
                      {TOP_QUESTIONS.map(function (item) { return (<div key={item.question} className="rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                          <p className="font-medium text-[#111827]">
                            {item.question}
                          </p>
                          <p className="mt-2 text-sm text-[#6B7280]">
                            {item.volume} requests
                          </p>
                        </div>); })}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      Popular Products
                    </p>
                    <div className="mt-4 space-y-3">
                      {POPULAR_PRODUCTS.map(function (product) { return (<div key={product.name} className="flex items-center justify-between rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
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
                        </div>); })}
                    </div>
                  </div>
                </section>
              </div>
            </div>)}
          {selected === "Settings" && (<div className="space-y-6">
              <div className={"".concat(CARD)}>
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
                      <input type="text" value={businessProfile.name} onChange={function (e) {
                return setBusinessProfile(function (s) { return (__assign(__assign({}, s), { name: e.target.value })); });
            }} className="mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none" placeholder="e.g., Sokoos Internet"/>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Industry
                      </label>
                      <input type="text" value={businessProfile.industry} onChange={function (e) {
                return setBusinessProfile(function (s) { return (__assign(__assign({}, s), { industry: e.target.value })); });
            }} className="mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none" placeholder="e.g., Telecom & Connectivity"/>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Description
                      </label>
                      <textarea value={businessProfile.description} onChange={function (e) {
                return setBusinessProfile(function (s) { return (__assign(__assign({}, s), { description: e.target.value })); });
            }} className="mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none" placeholder="What does your business do?" rows={4}/>
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
                      <input type="tel" value={businessProfile.phone} onChange={function (e) {
                return setBusinessProfile(function (s) { return (__assign(__assign({}, s), { phone: e.target.value })); });
            }} className="mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none" placeholder="e.g., +254 20 3949 0101"/>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Email
                      </label>
                      <input type="email" value={businessProfile.email} onChange={function (e) {
                return setBusinessProfile(function (s) { return (__assign(__assign({}, s), { email: e.target.value })); });
            }} className="mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none" placeholder="e.g., support@sokoos.co.ke"/>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Location
                      </label>
                      <input type="text" value={businessProfile.location} onChange={function (e) {
                return setBusinessProfile(function (s) { return (__assign(__assign({}, s), { location: e.target.value })); });
            }} className="mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none" placeholder="e.g., Nairobi, Kenya"/>
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
                      <input type="text" value={businessProfile.businessHours} onChange={function (e) {
                return setBusinessProfile(function (s) { return (__assign(__assign({}, s), { businessHours: e.target.value })); });
            }} className="mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none" placeholder="e.g., Mon–Fri, 8:00 AM - 6:00 PM"/>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Service Areas
                      </label>
                      <input type="text" value={businessProfile.serviceAreas} onChange={function (e) {
                return setBusinessProfile(function (s) { return (__assign(__assign({}, s), { serviceAreas: e.target.value })); });
            }} className="mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none" placeholder="e.g., Nairobi, Kiambu, Thika"/>
                    </div>
                  </div>
                </section>

                <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#111827]">
                    Payment Methods
                  </p>
                  <div className="mt-4 space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                      <input type="checkbox" checked={businessProfile.paymentMethods.mPesa} onChange={function () {
                return setBusinessProfile(function (s) { return (__assign(__assign({}, s), { paymentMethods: __assign(__assign({}, s.paymentMethods), { mPesa: !s.paymentMethods.mPesa }) })); });
            }} className="w-4 h-4"/>
                      <span className="text-sm font-semibold text-[#111827]">
                        M-Pesa
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                      <input type="checkbox" checked={businessProfile.paymentMethods.cash} onChange={function () {
                return setBusinessProfile(function (s) { return (__assign(__assign({}, s), { paymentMethods: __assign(__assign({}, s.paymentMethods), { cash: !s.paymentMethods.cash }) })); });
            }} className="w-4 h-4"/>
                      <span className="text-sm font-semibold text-[#111827]">
                        Cash
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition">
                      <input type="checkbox" checked={businessProfile.paymentMethods.bankTransfer} onChange={function () {
                return setBusinessProfile(function (s) { return (__assign(__assign({}, s), { paymentMethods: __assign(__assign({}, s.paymentMethods), { bankTransfer: !s.paymentMethods.bankTransfer }) })); });
            }} className="w-4 h-4"/>
                      <span className="text-sm font-semibold text-[#111827]">
                        Bank Transfer
                      </span>
                    </label>
                  </div>
                </section>
              </div>

              <div className={"".concat(CARD)}>
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
                    {personalContacts.map(function (pc) { return (<div key={pc.id} className="rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
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
                      </div>); })}
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
                      <input type="text" value={newContact.name} onChange={function (e) {
                return setNewContact(function (s) { return (__assign(__assign({}, s), { name: e.target.value })); });
            }} className="mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none" placeholder="e.g., Mary Wanjiku"/>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Relationship
                      </label>
                      <input type="text" value={newContact.relationship} onChange={function (e) {
                return setNewContact(function (s) { return (__assign(__assign({}, s), { relationship: e.target.value })); });
            }} className="mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none" placeholder="e.g., Wife, Supplier"/>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#111827]">
                        Phone Number
                      </label>
                      <input type="tel" value={newContact.phone} onChange={function (e) {
                return setNewContact(function (s) { return (__assign(__assign({}, s), { phone: e.target.value })); });
            }} className="mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none" placeholder="e.g., +254712345678"/>
                    </div>
                    <div className="flex items-center justify-end">
                      <button type="button" onClick={addPersonalContact} className="inline-flex items-center justify-center rounded-[24px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#16A34A]">
                        Add contact
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>)}
        </div>
      </main>
    </div>);
}
