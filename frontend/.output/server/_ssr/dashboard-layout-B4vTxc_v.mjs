import { n as __toESM } from "../_runtime.mjs";
import { t as sokoos_logo_default } from "./sokoos_logo-B5_i8UVb.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { $ as Activity, A as Image, B as Clock, C as Menu, E as List, G as ChartColumn, H as ChevronRight, K as Calendar, L as EllipsisVertical, N as Globe, O as LayoutGrid, S as MessageCircle, T as MapPin, U as ChevronDown, V as Circle, W as Check, X as Bot, Y as Box, Z as BookOpen, _ as Plug, a as Tag, b as Package, c as Smile, d as Send, f as Search, g as Plus, i as Target, j as House, k as Inbox, l as Shield, r as User, s as Sparkles, t as X, u as Settings, v as Phone, w as Megaphone, y as Paperclip, z as Cpu } from "../_libs/lucide-react.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { i as Trigger$1, n as List$1, r as Root2$1, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-layout-B4vTxc_v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Tabs = Root2$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List$1, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List$1.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger$1.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var NAV_ITEMS = [
	{
		label: "Home",
		href: "/dashboard",
		Icon: House
	},
	{
		label: "Inbox",
		href: "/dashboard/inbox",
		Icon: Inbox
	},
	{
		label: "Customers",
		href: "/dashboard/customers",
		Icon: User
	},
	{
		label: "AI Employee",
		Icon: Bot,
		children: [{
			label: "Training",
			href: "/dashboard/ai",
			Icon: Cpu
		}, {
			label: "Performance",
			href: "/dashboard/performance",
			Icon: Activity
		}]
	},
	{
		label: "Settings",
		href: "/dashboard/settings",
		Icon: Settings
	}
];
var PERFORMANCE_METRICS = [
	{
		label: "Messages Handled",
		value: "1,842",
		trend: [
			26,
			38,
			32,
			46,
			51,
			58,
			63
		],
		delta: "+26%",
		progress: 82
	},
	{
		label: "Resolution Rate",
		value: "93%",
		trend: [
			72,
			78,
			82,
			86,
			91,
			92,
			93
		],
		delta: "+5 pts",
		progress: 93
	},
	{
		label: "Human Takeovers",
		value: "84",
		trend: [
			90,
			86,
			80,
			77,
			78,
			84,
			84
		],
		delta: "-7%",
		progress: 75
	},
	{
		label: "Quotes Generated",
		value: "312",
		trend: [
			24,
			28,
			34,
			42,
			48,
			56,
			62
		],
		delta: "+18%",
		progress: 78
	},
	{
		label: "Sales Closed",
		value: "128",
		trend: [
			12,
			15,
			19,
			24,
			28,
			32,
			36
		],
		delta: "+14%",
		progress: 68
	},
	{
		label: "Revenue Influenced",
		value: "$72.4k",
		trend: [
			42,
			44,
			52,
			58,
			64,
			69,
			72
		],
		delta: "+21%",
		progress: 72
	},
	{
		label: "Average Response Time",
		value: "1.2m",
		trend: [
			1.8,
			1.7,
			1.6,
			1.4,
			1.3,
			1.2,
			1.2
		],
		delta: "-12%",
		progress: 88
	},
	{
		label: "Top Questions",
		value: "8",
		trend: [
			4,
			5,
			6,
			7,
			8,
			9,
			8
		],
		delta: "+11%",
		progress: 65
	}
];
var KNOWLEDGE_USAGE = [
	{
		label: "FAQ Docs",
		percent: 78
	},
	{
		label: "Product Catalog",
		percent: 63
	},
	{
		label: "Policies",
		percent: 52
	},
	{
		label: "Service Guide",
		percent: 41
	}
];
var PERFORMANCE_TOP_QUESTIONS = [
	"How much does delivery cost?",
	"Can I get a discount?",
	"What’s the lead time?",
	"Do you offer installation?"
];
var MOST_VIEWED_PRODUCTS = [
	{
		name: "Smart POS Terminal",
		views: 512
	},
	{
		name: "AI Employee",
		views: 438
	},
	{
		name: "Service Plan",
		views: 387
	},
	{
		name: "Inventory Package",
		views: 312
	}
];
var EMPTY_BUSINESS_INFO = {
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
	paymentMethods: ""
};
var BUSINESS_INDUSTRY_OPTIONS = [
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
	"Other"
];
var normalizeBusinessInfo = (value) => ({
	...EMPTY_BUSINESS_INFO,
	...value || {},
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
	paymentMethods: value?.paymentMethods ?? ""
});
var parseServiceAreas = (value) => {
	if (Array.isArray(value)) return value.filter(Boolean).map((item) => item.trim()).filter(Boolean);
	if (!value) return [];
	return value.split(",").map((item) => item.trim()).filter(Boolean);
};
var calculateCatalogueHealthConfidence = (metrics) => {
	if (metrics.length === 0) return 0;
	return Math.round(metrics.reduce((sum, item) => sum + item.percentage, 0) / metrics.length);
};
var RECENT_AI_ACTIVITY = [
	{
		type: "Reply",
		title: "Answered pricing question",
		time: "2m ago"
	},
	{
		type: "Quote",
		title: "Generated quote for 10 units",
		time: "14m ago"
	},
	{
		type: "Follow-up",
		title: "Suggested follow-up message",
		time: "42m ago"
	},
	{
		type: "Support",
		title: "Escalated to human agent",
		time: "1h ago"
	}
];
var TRANSITION = "transition-all duration-200 ease-out";
var TRANSITION_FAST = "transition-all duration-150 ease-out";
var GLOBAL_RADIUS = "rounded-[24px]";
var SUBTLE_BORDER = "border-[#EEF2F6]";
var CARD = `${GLOBAL_RADIUS} border ${SUBTLE_BORDER} bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transform transition-all duration-200 ease-out hover:-translate-y-1`;
var buildMockAiSummary = () => ({
	customerIntent: "Looking for pricing and comparing internet plans before making a purchase.",
	buyingProbability: 92,
	sentiment: {
		label: "Positive",
		icon: "😊",
		badgeClassName: "border-[#A7F3D0] bg-[#ECFDF5] text-[#166534]"
	},
	buyingSignals: [
		"Asked for pricing",
		"Asked about the free trial",
		"Replied quickly",
		"Comparing plans"
	],
	recommendedNextAction: "Recommend the Business Package and mention the free trial to encourage conversion.",
	suggestedReply: [
		"Hi Aisha 👋",
		"Thanks for your interest.",
		"Our Business Package includes priority support, flexible upgrades, and a free trial so you can explore the plan with confidence."
	],
	knowledgeSources: [
		"Pricing Catalog",
		"FAQ",
		"Business Policies",
		"Product Database"
	]
});
var BUTTON_PRIMARY = "inline-flex items-center justify-center rounded-[24px] bg-[#22C55E] px-4 py-3 text-[15px] font-semibold text-white shadow-none transition-all duration-150 ease-out transform-gpu hover:-translate-y-0.5 active:scale-[0.98] hover:bg-[#16A34A]";
var BUTTON_SECONDARY = `inline-flex items-center justify-center rounded-[24px] border ${SUBTLE_BORDER} bg-white px-4 py-3 text-[15px] font-semibold text-[#111827] transition-all duration-150 ease-out transform-gpu hover:-translate-y-0.5 active:scale-[0.98] hover:bg-[#F3F4F6]`;
var BUTTON_TERTIARY = "inline-flex items-center justify-center rounded-[24px] bg-[#F3F4F6] px-4 py-3 text-[15px] font-semibold text-[#374151] transition-all duration-150 ease-out transform-gpu hover:-translate-y-0.5 active:scale-[0.98] hover:bg-[#E5E7EB]";
var INPUT_FIELD = `mt-3 w-full ${GLOBAL_RADIUS} border ${SUBTLE_BORDER} bg-[#F9FAFB] px-4 py-3 text-[15px] text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#DCFCE7] transition-all duration-200 ease-out focus:shadow-none`;
var INPUT_FIELD_WHITE = `mt-3 w-full ${GLOBAL_RADIUS} border ${SUBTLE_BORDER} bg-white px-4 py-3 text-[15px] text-[#111827] shadow-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#DCFCE7] transition-all duration-200 ease-out focus:shadow-none`;
var AI_TRAINING_FIELD = "mt-2 h-12 w-full rounded-xl border border-[#E2E8F0] bg-white px-3.5 pr-10 text-sm text-[#111827] shadow-sm outline-none transition placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-4 focus:ring-[#DCFCE7]/70";
var AI_TRAINING_TEXTAREA = "mt-2 min-h-[96px] w-full rounded-xl border border-[#E2E8F0] bg-white px-3.5 py-3 text-sm text-[#111827] shadow-sm outline-none transition placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-4 focus:ring-[#DCFCE7]/70";
var PANEL_TITLE = "text-[24px] font-semibold text-[#111827]";
var SECTION_HEADING = "text-[12px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]";
var CARD_TITLE = "text-[28px] font-semibold mb-6 text-[#0F172A]";
var CUSTOMER_NAME = "text-[28px] font-semibold text-[#111827]";
var SECONDARY = "text-[12px] text-[#64748B]";
var TIME_LABEL = "text-[12px] text-[#64748B]";
var BADGE = "inline-flex h-7 items-center gap-1.5 rounded-full px-3 text-[12px] font-medium tracking-[0.02em] transition-colors duration-200 ease";
var STATUS_CHIP = "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium flex-shrink-0 transition-all duration-150 ease-out transform hover:scale-[1.02]";
var SMALL_CARD = "rounded-[24px] border border-[#E5E7EF] bg-white p-4";
var ICON_WRAP_AVAILABLE = "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#166534]";
var ICON_WRAP_DEFAULT = "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F3F4F6] text-[#9CA3AF]";
var SCHEDULED_POSTS = [
	{
		id: "p1",
		caption: "Launch the new summer bundle with a discount offer.",
		date: "Jul 08, 2026",
		time: "09:00 AM",
		image: "Summer bundle"
	},
	{
		id: "p2",
		caption: "Share a customer success story to drive engagement.",
		date: "Jul 10, 2026",
		time: "04:00 PM",
		image: "Customer testimonial"
	},
	{
		id: "p3",
		caption: "Publish a flash sale reminder for weekend shoppers.",
		date: "Jul 12, 2026",
		time: "07:30 PM",
		image: "Flash sale"
	}
];
var CUSTOMERS = [
	{
		id: "u1",
		avatar: "AM",
		name: "Aisha Mwangi",
		phone: "+254 712 345 678",
		leadStatus: "Hot lead",
		interestedProduct: "20 Mbps",
		lastInteraction: "Today, 11:20 AM"
	},
	{
		id: "u2",
		avatar: "JN",
		name: "James Njoroge",
		phone: "+254 700 123 456",
		leadStatus: "Warm lead",
		interestedProduct: "Business Package",
		lastInteraction: "Yesterday, 04:15 PM"
	},
	{
		id: "u3",
		avatar: "GR",
		name: "Grace Wanjiru",
		phone: "+254 733 987 654",
		leadStatus: "New lead",
		interestedProduct: "10 Mbps",
		lastInteraction: "Jul 02, 2026"
	},
	{
		id: "u4",
		avatar: "MK",
		name: "Moses Kimani",
		phone: "+254 711 222 333",
		leadStatus: "Hot lead",
		interestedProduct: "Business Package",
		lastInteraction: "Jul 03, 2026"
	},
	{
		id: "u5",
		avatar: "SR",
		name: "Susan Rono",
		phone: "+254 714 555 777",
		leadStatus: "Cold lead",
		interestedProduct: "10 Mbps",
		lastInteraction: "Jul 01, 2026"
	}
];
var PRODUCTS = [
	{
		id: "prod1",
		name: "10 Mbps",
		price: "KSh 1500",
		active: true
	},
	{
		id: "prod2",
		name: "20 Mbps",
		price: "KSh 2500",
		active: true
	},
	{
		id: "prod3",
		name: "Business Package",
		price: "KSh 5000",
		active: false
	}
];
var INTEGRATION_SECTIONS = [
	{
		section: "Channels",
		items: [
			{
				id: "whatsapp",
				name: "WhatsApp Business",
				Icon: MessageCircle,
				description: "Allow Sokoos AI to reply to customers directly inside WhatsApp.",
				status: "connected"
			},
			{
				id: "facebook",
				name: "Facebook Messenger",
				Icon: MessageCircle,
				description: "Allow Sokoos AI to reply to customers on Facebook Messenger.",
				status: "available"
			},
			{
				id: "instagram",
				name: "Instagram",
				Icon: Image,
				description: "Allow Sokoos AI to respond to Instagram messages and DMs.",
				status: "available"
			},
			{
				id: "telegram",
				name: "Telegram",
				Icon: Send,
				description: "Allow Sokoos AI to manage Telegram conversations.",
				status: "available"
			},
			{
				id: "email",
				name: "Email",
				Icon: Send,
				description: "Allow Sokoos AI to read and send business emails.",
				status: "connected"
			}
		]
	},
	{
		section: "Payments",
		items: [
			{
				id: "mpesa",
				name: "M-Pesa",
				Icon: Phone,
				description: "Enable mobile money payments and reconciliation.",
				status: "available"
			},
			{
				id: "stripe",
				name: "Stripe",
				Icon: Tag,
				description: "Allow the AI to generate payment links.",
				status: "available"
			},
			{
				id: "paypal",
				name: "PayPal",
				Icon: Tag,
				description: "Allow the AI to generate PayPal payment links.",
				status: "available"
			},
			{
				id: "flutterwave",
				name: "Flutterwave",
				Icon: Globe,
				description: "Allow the AI to process payments across Africa and generate payment links.",
				status: "coming_soon"
			}
		]
	},
	{
		section: "Business Tools",
		items: [
			{
				id: "shopify",
				name: "Shopify",
				Icon: Box,
				description: "Allow the AI to answer product questions using your store catalog.",
				status: "connected"
			},
			{
				id: "woocommerce",
				name: "WooCommerce",
				Icon: Box,
				description: "Allow the AI to access your WooCommerce product catalog and orders.",
				status: "available"
			},
			{
				id: "custom_api",
				name: "Custom Website API",
				Icon: Globe,
				description: "Allow the AI to query your site's product and order APIs.",
				status: "available"
			},
			{
				id: "google_business",
				name: "Google Business Profile",
				Icon: Globe,
				description: "Allow the AI to update and read your business profile and respond to reviews.",
				status: "available"
			},
			{
				id: "google_calendar",
				name: "Google Calendar",
				Icon: Calendar,
				description: "Allow the AI to schedule appointments.",
				status: "connected"
			},
			{
				id: "outlook",
				name: "Microsoft Outlook",
				Icon: Calendar,
				description: "Allow the AI to schedule meetings and manage business email/calendar.",
				status: "available"
			}
		]
	},
	{
		section: "Communication & Marketing",
		items: [
			{
				id: "meta_ads",
				name: "Meta Ads",
				Icon: Megaphone,
				description: "Allow the AI to sync campaign data and create audiences.",
				status: "available"
			},
			{
				id: "google_ads",
				name: "Google Ads",
				Icon: Globe,
				description: "Allow the AI to pull campaign performance and recommend optimizations.",
				status: "available"
			},
			{
				id: "tiktok",
				name: "TikTok",
				Icon: Globe,
				description: "Allow the AI to manage TikTok ad campaigns and creatives.",
				status: "coming_soon"
			},
			{
				id: "mailchimp",
				name: "Mailchimp",
				Icon: Send,
				description: "Allow the AI to sync contact lists and send marketing campaigns.",
				status: "connected"
			},
			{
				id: "brevo",
				name: "Brevo",
				Icon: Send,
				description: "Allow the AI to send campaigns and sync contact lists.",
				status: "available"
			}
		]
	},
	{
		section: "Data & Knowledge",
		items: [
			{
				id: "gdrive",
				name: "Google Drive",
				Icon: Paperclip,
				description: "Allow the AI to access business documents and knowledge files.",
				status: "connected"
			},
			{
				id: "dropbox",
				name: "Dropbox",
				Icon: Paperclip,
				description: "Allow the AI to access business documents stored in Dropbox.",
				status: "available"
			},
			{
				id: "onedrive",
				name: "OneDrive",
				Icon: Paperclip,
				description: "Allow the AI to access business documents stored in OneDrive.",
				status: "available"
			}
		]
	},
	{
		section: "Review",
		items: []
	}
];
var INTEGRATION_CAPABILITIES = {
	whatsapp: [
		"Read messages",
		"Send replies",
		"Send images",
		"Send PDFs",
		"Send quotations",
		"Send invoices",
		"Read delivery status",
		"Human takeover"
	],
	facebook: ["Read messages", "Send replies"],
	instagram: ["Read DMs", "Send replies"],
	telegram: ["Read messages", "Send replies"],
	email: ["Read emails", "Send emails"],
	mpesa: ["Initiate payments", "Reconcile transactions"],
	stripe: ["Create payment links", "Refunds"],
	paypal: ["Create payment links"],
	flutterwave: ["Create payment links"],
	shopify: [
		"Read products",
		"Sync orders",
		"Update inventory"
	],
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
	brevo: ["Sync contacts"]
};
[
	"whatsapp",
	"shopify",
	"custom_api",
	"woocommerce"
].filter(Boolean), [
	"mpesa",
	"stripe",
	"shopify",
	"custom_api"
].filter(Boolean);
var normalizeIntegrationStatus = (status) => {
	if (!status) return "available";
	switch (status.trim().toLowerCase().replace(/\s+/g, "_")) {
		case "connected": return "connected";
		case "coming_soon":
		case "comingsoon": return "coming_soon";
		case "setup_required": return "setup_required";
		default: return "available";
	}
};
var formatIntegrationStatusLabel = (status) => {
	const normalized = normalizeIntegrationStatus(status);
	if (normalized === "connected") return "Connected";
	if (normalized === "available") return "Available";
	if (normalized === "setup_required") return "Setup required";
	if (normalized === "coming_soon") return "Coming soon";
	return "Available";
};
var ANALYTICS_CHART = [
	{
		label: "Mon",
		value: 48
	},
	{
		label: "Tue",
		value: 62
	},
	{
		label: "Wed",
		value: 55
	},
	{
		label: "Thu",
		value: 71
	},
	{
		label: "Fri",
		value: 85
	},
	{
		label: "Sat",
		value: 53
	},
	{
		label: "Sun",
		value: 60
	}
];
var LANGUAGE_OPTIONS = [
	"English",
	"Kiswahili",
	"French",
	"Arabic",
	"German",
	"Spanish",
	"Portuguese",
	"Somali",
	"Amharic",
	"Hindi",
	"Chinese",
	"Italian"
];
var PERSONALITIES = [
	"Friendly",
	"Professional",
	"Warm",
	"Playful",
	"Luxury",
	"Technical",
	"Casual",
	"Formal"
];
var COMMUNICATION_STYLE_OPTIONS = [
	"Short & Direct",
	"Balanced",
	"Detailed"
];
var EMOJI_USAGE_OPTIONS = [
	"Never",
	"Sometimes",
	"Often"
];
var PREFERRED_TONE_OPTIONS = [
	"Helpful",
	"Confident",
	"Educational",
	"Sales-focused",
	"Conversational"
];
var BRAND_VOICE_DETAILS = {
	Friendly: {
		description: "Warm, helpful and approachable.",
		example: "Hello 👋 We’re happy to help. What can we do for you?"
	},
	Professional: {
		description: "Clear, polished and dependable.",
		example: "Thank you for reaching out. How may we assist you today?"
	},
	Warm: {
		description: "Gentle, caring and reassuring.",
		example: "Of course, we’re here to guide you every step of the way."
	},
	Playful: {
		description: "Upbeat, lively and full of personality.",
		example: "Hey there! Let’s find exactly what you need ✨"
	},
	Luxury: {
		description: "Refined, attentive and elevated.",
		example: "Welcome. We would be delighted to assist you."
	},
	Technical: {
		description: "Precise, informative and direct.",
		example: "Hello. Please share the details and we’ll help you resolve it."
	},
	Casual: {
		description: "Relaxed, simple and conversational.",
		example: "Hi! What can we help you with today?"
	},
	Formal: {
		description: "Polished, respectful and structured.",
		example: "Good day. We appreciate your inquiry and will assist accordingly."
	}
};
var LOGO_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'%3E%3Crect width='240' height='240' rx='32' fill='%23E5F6EC'/%3E%3Cpath d='M73 91h94v58H73z' rx='8' fill='%2322C55E'/%3E%3Cpath d='M91 72h58v19H91z' fill='%23065F46'/%3E%3Ccircle cx='120' cy='120' r='17' fill='white'/%3E%3C/svg%3E";
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
		avatar: "AM"
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
		avatar: "J"
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
		avatar: "G"
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
		avatar: "M"
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
		avatar: "UC"
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
		avatar: "SK"
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
		avatar: "FH"
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
		avatar: "PO"
	}
];
var formatConversationTime = (time) => time || "Unknown";
var INBOX_TAB_ITEMS = [
	"All",
	"AI Active",
	"Human",
	"Needs Reply"
];
var INBOX_MESSAGES = {
	c1: [
		{
			from: "customer",
			text: "Can you share the latest pricing?",
			time: "2:13 PM"
		},
		{
			from: "agent",
			text: "Sure — our starter plan is available from $29/month.",
			time: "2:14 PM"
		},
		{
			from: "customer",
			text: "Great, and is there a free trial?",
			time: "2:15 PM"
		}
	],
	c2: [{
		from: "agent",
		text: "You can edit availability in Catalog > Products.",
		time: "1:35 PM"
	}, {
		from: "customer",
		text: "Got it, thanks!",
		time: "1:36 PM"
	}],
	c3: [{
		from: "customer",
		text: "Thanks for the quick response!",
		time: "12:05 PM"
	}, {
		from: "agent",
		text: "Happy to help — let me know if you need anything else.",
		time: "12:06 PM"
	}],
	c4: [{
		from: "customer",
		text: "Please pause the AI for tonight.",
		time: "11:20 AM"
	}, {
		from: "agent",
		text: "Sure, I’ll pause it from 9PM tonight.",
		time: "11:21 AM"
	}],
	c5: [{
		from: "customer",
		text: "I’m interested in your business package — can you share details?",
		time: "4:10 PM"
	}, {
		from: "agent",
		text: "Absolutely — I’ll send you the package details now.",
		time: "4:12 PM"
	}],
	c6: [
		{
			from: "customer",
			text: "What's the fastest plan you have?",
			time: "2:30 PM"
		},
		{
			from: "agent",
			text: "Our 20 Mbps plan is ideal for offices. Would you like more details?",
			time: "2:32 PM"
		},
		{
			from: "customer",
			text: "Your 20 Mbps plan is perfect for our office. Let's proceed with the order.",
			time: "2:45 PM"
		}
	],
	c7: [
		{
			from: "customer",
			text: "How long will installation take?",
			time: "11:00 AM"
		},
		{
			from: "agent",
			text: "Installation usually takes 2-3 hours. We can schedule it for next week.",
			time: "11:02 AM"
		},
		{
			from: "customer",
			text: "Thank you! I'll set up the installation for next Monday.",
			time: "11:15 AM"
		}
	],
	c8: [{
		from: "customer",
		text: "I've sent the payment. When does service start?",
		time: "9:00 AM"
	}, {
		from: "agent",
		text: "We've received your payment. Service activation starts tomorrow morning.",
		time: "9:05 AM"
	}]
};
var CUSTOMER_PROFILES = {
	c1: {
		name: "Aisha Mwangi",
		company: "Nairobi Essentials",
		phone: "+254 712 345 678",
		email: "aisha@nairobiessentials.co.ke",
		location: "Nairobi, Kenya",
		tags: [
			"VIP",
			"Retail",
			"High priority"
		],
		status: "Active",
		lastOrder: "2 days ago",
		leadStatus: "Hot lead",
		interestedProducts: [
			"10 Mbps",
			"20 Mbps",
			"Business Package"
		]
	},
	c2: {
		name: "James Njoroge",
		company: "Tech Store",
		phone: "+254 700 123 456",
		email: "james@techstore.co.ke",
		location: "Thika, Kenya",
		tags: [
			"Team",
			"Wholesale",
			"Priority"
		],
		status: "Active",
		lastOrder: "Yesterday",
		leadStatus: "Warm lead",
		interestedProducts: ["Business Package", "20 Mbps"]
	},
	c3: {
		name: "Grace Wanjiru",
		company: "Wanjiru Boutique",
		phone: "+254 733 987 654",
		email: "grace@wanjiruboutique.co.ke",
		location: "Nairobi, Kenya",
		tags: [
			"New lead",
			"Fashion",
			"Important"
		],
		status: "Active",
		lastOrder: "3 days ago",
		leadStatus: "New lead",
		interestedProducts: ["10 Mbps", "20 Mbps"]
	},
	c4: {
		name: "Michael",
		company: "Service Solutions",
		phone: "+254 711 222 333",
		email: "michael@servicesolutions.co.ke",
		location: "Mombasa, Kenya",
		tags: [
			"AI",
			"Support",
			"Follow-up"
		],
		status: "Active",
		lastOrder: "Today",
		leadStatus: "Hot lead",
		interestedProducts: ["Business Package", "20 Mbps"]
	},
	c5: {
		name: "Unknown Customer",
		company: "New Inquiry",
		phone: "+254 712 345 678",
		email: "",
		location: "Nairobi, Kenya",
		tags: [
			"New lead",
			"Unknown",
			"Needs follow-up"
		],
		status: "New",
		lastOrder: "N/A",
		leadStatus: "New lead",
		interestedProducts: ["Business Package"]
	}
};
var OWNER_NAMES = {
	c1: "You",
	c3: "You"
};
function DashboardLayout() {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [expandedNavItem, setExpandedNavItem] = (0, import_react.useState)("AI Employee");
	const [selected, setSelected] = (0, import_react.useState)("Home");
	const [performanceSection, setPerformanceSection] = (0, import_react.useState)("overview");
	const [integrationStates, setIntegrationStates] = (0, import_react.useState)(() => {
		try {
			const raw = typeof window !== "undefined" ? window.localStorage.getItem("sokoos.integrationStates") : null;
			if (raw) {
				const parsed = JSON.parse(raw);
				const normalizedStates = {};
				for (const [id, value] of Object.entries(parsed)) normalizedStates[id] = {
					...value,
					status: normalizeIntegrationStatus(value.status)
				};
				return normalizedStates;
			}
		} catch (e) {}
		const map = {};
		INTEGRATION_SECTIONS.forEach((section) => {
			section.items.forEach((it) => {
				map[it.id] = { status: normalizeIntegrationStatus(it.status) };
			});
		});
		return map;
	});
	const [connectModalOpen, setConnectModalOpen] = (0, import_react.useState)(false);
	const [connectModalId, setConnectModalId] = (0, import_react.useState)(null);
	const [connectForm, setConnectForm] = (0, import_react.useState)({
		email: "",
		businessName: "",
		phone: ""
	});
	const [drawerOpen, setDrawerOpen] = (0, import_react.useState)(false);
	const [drawerIntegrationId, setDrawerIntegrationId] = (0, import_react.useState)(null);
	const openDrawer = (id) => {
		setDrawerIntegrationId(id);
		setDrawerOpen(true);
	};
	const closeDrawer = () => {
		setDrawerOpen(false);
		setDrawerIntegrationId(null);
	};
	const handleDisconnect = (id) => {
		setIntegrationStates((s) => ({
			...s,
			[id]: { status: "available" }
		}));
		closeDrawer();
	};
	const handleSyncNow = (id) => {
		setIntegrationStates((s) => ({
			...s,
			[id]: {
				...s[id] || {},
				status: "connected",
				lastSynced: "Just now"
			}
		}));
	};
	const handleReconnect = (id) => {
		setConnectModalId(id);
		setConnectForm({
			email: "",
			businessName: "",
			phone: ""
		});
		setConnectModalOpen(true);
	};
	(0, import_react.useEffect)(() => {
		try {
			if (typeof window !== "undefined") window.localStorage.setItem("sokoos.integrationStates", JSON.stringify(integrationStates));
		} catch (e) {}
	}, [integrationStates]);
	const getIntegrationName = (id) => {
		if (!id) return "Integration";
		for (const section of INTEGRATION_SECTIONS) {
			const found = section.items.find((i) => i.id === id);
			if (found) return found.name;
		}
		return id;
	};
	const getIntegrationDefaultStatus = (id) => {
		return normalizeIntegrationStatus(INTEGRATION_SECTIONS.flatMap((section) => section.items).find((integration) => integration.id === id)?.status);
	};
	const getIntegrationStatus = (id) => {
		return integrationStates[id]?.status ?? getIntegrationDefaultStatus(id);
	};
	const getAllIntegrationItems = () => INTEGRATION_SECTIONS.flatMap((section) => section.items);
	const getIntegrationSection = (sectionName) => INTEGRATION_SECTIONS.find((section) => section.section === sectionName);
	const getIntegrationStatusCounts = (items) => {
		const counts = {
			connected: 0,
			available: 0,
			setup_required: 0,
			coming_soon: 0
		};
		items.forEach((item) => {
			counts[getIntegrationStatus(item.id)] += 1;
		});
		return counts;
	};
	const integrationSectionSummaries = (0, import_react.useMemo)(() => {
		return INTEGRATION_SECTIONS.reduce((acc, section) => {
			const counts = getIntegrationStatusCounts(section.items);
			acc[section.section] = {
				section: section.section,
				total: section.items.length,
				...counts
			};
			return acc;
		}, {});
	}, [integrationStates]);
	const isDevMode = typeof import.meta !== "undefined" && Boolean(false);
	const allIntegrationSummary = (0, import_react.useMemo)(() => {
		const items = getAllIntegrationItems();
		return {
			total: items.length,
			...getIntegrationStatusCounts(items)
		};
	}, [integrationStates]);
	(0, import_react.useEffect)(() => {
		if (!isDevMode) return;
		Object.values(integrationSectionSummaries).forEach((summary) => {
			const totalCount = summary.connected + summary.available + summary.setup_required + summary.coming_soon;
			if (totalCount !== summary.total) console.warn(`Integration summary mismatch for ${summary.section}: expected total=${summary.total} but got ${totalCount} from counts`, summary);
		});
		const totalCount = allIntegrationSummary.connected + allIntegrationSummary.available + allIntegrationSummary.setup_required + allIntegrationSummary.coming_soon;
		if (totalCount !== allIntegrationSummary.total) console.warn(`Integration summary mismatch for all integrations: expected total=${allIntegrationSummary.total} but got ${totalCount} from counts`, allIntegrationSummary);
	}, [
		integrationSectionSummaries,
		allIntegrationSummary,
		isDevMode
	]);
	const getIntegrationSummaryForSection = (sectionName) => integrationSectionSummaries[sectionName] ?? {
		section: sectionName,
		total: 0,
		connected: 0,
		available: 0,
		setup_required: 0,
		coming_soon: 0
	};
	const getIntegrationCardCapabilities = (id) => {
		return (INTEGRATION_CAPABILITIES[id] ?? []).slice(0, 3);
	};
	const getIntegrationStatusBadgeClass = (displayStatus) => {
		if (displayStatus === "Connected") return "border-[#A7F3D0] bg-[#ECFDF5] text-[#166534]";
		if (displayStatus === "Coming soon") return "border-[#E9D5FF] bg-[#F5F3FF] text-[#6D28D9]";
		if (displayStatus === "Setup required" || displayStatus === "Disabled") return "border-[#FDE68A] bg-[#FEF9C3] text-[#92400E]";
		return "border-[#F3F4F6] bg-[#F3F4F6] text-[#6B7280]";
	};
	const getIntegrationCardAction = (displayStatus, id) => {
		const trimmedStatus = displayStatus.trim();
		const isConnected = trimmedStatus === "Connected";
		const isComingSoon = trimmedStatus === "Coming soon";
		const isSetupRequired = trimmedStatus === "Setup required" || trimmedStatus === "Disabled";
		const isAvailable = [
			"Available",
			"Active",
			"Ready"
		].includes(trimmedStatus);
		const isSpecialChannel = id === "website" || id === "sms";
		if (isConnected) return {
			label: "Manage",
			className: BUTTON_SECONDARY,
			onClick: () => openDrawer(id),
			disabled: false
		};
		if (isComingSoon) return {
			label: "Coming soon",
			className: `${BUTTON_TERTIARY} opacity-60 pointer-events-none`,
			disabled: true
		};
		if (isSetupRequired) return {
			label: "Configure",
			className: isSpecialChannel ? `${BUTTON_PRIMARY} opacity-60 pointer-events-none` : BUTTON_PRIMARY,
			onClick: isSpecialChannel ? void 0 : () => {
				setConnectModalId(id);
				setConnectForm({
					email: "",
					businessName: "",
					phone: ""
				});
				setConnectModalOpen(true);
			},
			disabled: isSpecialChannel
		};
		if (isAvailable) return {
			label: "Connect",
			className: isSpecialChannel ? `${BUTTON_PRIMARY} opacity-60 pointer-events-none` : BUTTON_PRIMARY,
			onClick: isSpecialChannel ? void 0 : () => {
				setConnectModalId(id);
				setConnectForm({
					email: "",
					businessName: "",
					phone: ""
				});
				setConnectModalOpen(true);
			},
			disabled: isSpecialChannel
		};
		return {
			label: "Configure",
			className: `${BUTTON_PRIMARY} opacity-60 pointer-events-none`,
			disabled: true
		};
	};
	const renderIntegrationCard = (item) => {
		const displayStatus = formatStatusLabel(item.status);
		const capabilities = getIntegrationCardCapabilities(item.id);
		const action = getIntegrationCardAction(displayStatus, item.id);
		const statusBadgeClass = getIntegrationStatusBadgeClass(displayStatus);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: SMALL_CARD,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: displayStatus === "Connected" ? ICON_WRAP_AVAILABLE : ICON_WRAP_DEFAULT,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#111827]",
							children: item.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#64748B]",
							children: item.description
						}),
						capabilities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 text-sm text-[#475569]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.18em] text-[#64748B]",
								children: "AI can"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 space-y-1 list-disc pl-4",
								children: capabilities.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: capability }, capability))
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `${BADGE} ${statusBadgeClass}`,
					children: displayStatus
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						if (!action.disabled && action.onClick) action.onClick();
					},
					className: action.className,
					disabled: action.disabled,
					children: action.label
				})]
			})]
		}, item.id);
	};
	const isIntegrationConnected = (id) => getIntegrationStatus(id) === "connected";
	const formatStatusLabel = (status) => {
		const trimmed = status.trim();
		if ([
			"Active",
			"Ready",
			"Disabled",
			"Setup required"
		].includes(trimmed)) return trimmed;
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
				lastSynced: "Just now"
			}
		}));
		setConnectModalOpen(false);
		setConnectModalId(null);
	};
	const [activeWorkspaceSection, setActiveWorkspaceSection] = (0, import_react.useState)("Identity");
	const [activeIdentityStep, setActiveIdentityStep] = (0, import_react.useState)(0);
	const integrationsPageRef = (0, import_react.useRef)(null);
	const [completedIdentitySteps, setCompletedIdentitySteps] = (0, import_react.useState)([]);
	const [activeIntegrationStep, setActiveIntegrationStep] = (0, import_react.useState)(0);
	const [completedIntegrationSteps, setCompletedIntegrationSteps] = (0, import_react.useState)([]);
	const [activeKnowledgeStep, setActiveKnowledgeStep] = (0, import_react.useState)(0);
	const [completedKnowledgeSteps, setCompletedKnowledgeSteps] = (0, import_react.useState)([]);
	const [selectedKnowledgeSources, setSelectedKnowledgeSources] = (0, import_react.useState)([]);
	const [completionToast, setCompletionToast] = (0, import_react.useState)(null);
	const [previewReplyVisible, setPreviewReplyVisible] = (0, import_react.useState)(true);
	const [onboardingRestored, setOnboardingRestored] = (0, import_react.useState)(false);
	const identityLessonRef = (0, import_react.useRef)(null);
	const knowledgeLessonRef = (0, import_react.useRef)(null);
	const integrationLessonRef = (0, import_react.useRef)(null);
	const previewMessagesRef = (0, import_react.useRef)(null);
	const identityLessons = [
		"Business Identity",
		"Brand Voice",
		"Greetings",
		"Languages",
		"Business Hours",
		"Locations",
		"Complete Identity"
	];
	const identityLessonCompletionNames = [
		"Business Identity",
		"Brand Voice",
		"Greetings",
		"Languages",
		"Business Hours",
		"Locations",
		"Complete Identity"
	];
	const knowledgeSourceLessonTitles = {
		company: "Business Information",
		faqs: "Frequently Asked Questions",
		documents: "Resources",
		website: "Products & Services"
	};
	const knowledgeLessonSequence = [
		"Knowledge Sources",
		...selectedKnowledgeSources.map((source) => knowledgeSourceLessonTitles[source] ?? source),
		"Review"
	];
	const knowledgeLessonCompletionNames = knowledgeLessonSequence;
	const sanitizeStepIndices = (steps, maxLength) => Array.isArray(steps) ? steps.filter((step) => typeof step === "number" && step >= 0 && step < maxLength).map((step) => Number(step)).sort((a, b) => a - b) : [];
	const sanitizeSelectedKnowledgeSources = (sources) => Array.isArray(sources) ? sources.filter((source) => typeof source === "string").map((source) => String(source)) : [];
	const focusIdentityLesson = (step) => {
		setActiveIdentityStep(step);
		window.setTimeout(() => {
			const target = identityLessonRef.current?.querySelector(`[data-lesson-index="${step}"]`);
			if (!target) return;
			target.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			target.querySelector("input, select, textarea, button")?.focus({ preventScroll: true });
		}, 0);
	};
	const completeIdentityLesson = (step) => {
		setCompletedIdentitySteps((current) => current.includes(step) ? current : [...current, step]);
		setCompletionToast(`${identityLessonCompletionNames[step]} complete — your onboarding path is moving forward.`);
		window.setTimeout(() => setCompletionToast(null), 2200);
		if (step < identityLessons.length - 1) window.setTimeout(() => focusIdentityLesson(step + 1), 500);
	};
	const focusKnowledgeLesson = (step) => {
		setActiveKnowledgeStep(step);
		window.setTimeout(() => {
			const target = knowledgeLessonRef.current?.querySelector(`[data-lesson-index="${step}"]`);
			if (!target) return;
			target.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			target.querySelector("input, select, textarea, button")?.focus({ preventScroll: true });
		}, 0);
	};
	const completeKnowledgeLesson = (step) => {
		setCompletedKnowledgeSteps((current) => current.includes(step) ? current : [...current, step]);
		setCompletionToast(`${knowledgeLessonCompletionNames[step]} complete — your knowledge onboarding path is moving forward.`);
		window.setTimeout(() => setCompletionToast(null), 2200);
		if (step < knowledgeLessonSequence.length - 1) window.setTimeout(() => focusKnowledgeLesson(step + 1), 500);
	};
	const identityLessonCardClass = (step) => `rounded-[28px] border bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 sm:p-6 ${completedIdentitySteps.includes(step) ? "border-[#86EFAC] shadow-[0_14px_34px_rgba(34,197,94,0.14)]" : "border-[#E5E7EB]"}`;
	const knowledgeLessonCardClass = (step) => `rounded-[28px] border bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 sm:p-6 ${completedKnowledgeSteps.includes(step) ? "border-[#86EFAC] shadow-[0_14px_34px_rgba(34,197,94,0.14)]" : "border-[#E5E7EB]"}`;
	(0, import_react.useEffect)(() => {
		document.getElementById("ai-workspace-content")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [activeWorkspaceSection]);
	const CATALOG_ITEMS = [
		{
			id: "p-restaurant-001",
			name: "Ginger Citrus Salad",
			category: "Restaurant",
			type: "Service",
			price: "$8.50",
			description: "Fresh mixed greens, candied ginger, citrus segments, and sesame vinaigrette.",
			availability: "In stock",
			image: "/assets/sample/food-salad.jpg",
			mediaAssets: []
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
			mediaAssets: []
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
			mediaAssets: []
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
			mediaAssets: []
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
			mediaAssets: []
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
			mediaAssets: []
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
			mediaAssets: []
		}
	];
	const [businessModelSelections, setBusinessModelSelections] = (0, import_react.useState)([]);
	const toggleBusinessModelSelection = (option) => {
		setBusinessModelSelections((current) => current.includes(option) ? current.filter((item) => item !== option) : [...current, option]);
		setHasUnsavedChanges(true);
	};
	const [catalogProducts, setCatalogProducts] = (0, import_react.useState)(() => CATALOG_ITEMS.map((product) => ({
		...product,
		mediaAssets: product.mediaAssets ?? []
	})));
	const [productSearch, setProductSearch] = (0, import_react.useState)("");
	const [catalogView, setCatalogView] = (0, import_react.useState)("grid");
	const BUSINESS_MODEL_TO_CATALOG_TAB = {
		"Physical Products": "Products",
		Services: "Services",
		"Digital Products": "Digital Products",
		Subscriptions: "Subscriptions",
		Memberships: "Memberships",
		Rentals: "Rentals"
	};
	const CATALOG_TAB_TO_PRODUCT_TYPE = {
		Products: "Product",
		Services: "Service",
		Subscriptions: "Subscription",
		"Digital Products": "Digital Product",
		Memberships: "Membership",
		Rentals: "Rental"
	};
	const BUSINESS_MODEL_TO_ADD_LABEL = {
		"Physical Products": "Product",
		Services: "Service",
		Subscriptions: "Subscription",
		"Digital Products": "Digital Product",
		Memberships: "Membership",
		Rentals: "Rental"
	};
	const getAddButtonLabel = (models) => {
		const normalized = models.filter(Boolean);
		if (normalized.length === 1) {
			const label = BUSINESS_MODEL_TO_ADD_LABEL[normalized[0]];
			return label ? `Add ${label}` : "Add Item";
		}
		return "Add Item";
	};
	const addButtonLabel = getAddButtonLabel(businessModelSelections);
	const catalogueFilterTabs = (0, import_react.useMemo)(() => {
		const tabs = ["All"];
		const seen = new Set(tabs);
		businessModelSelections.forEach((selection) => {
			const tab = BUSINESS_MODEL_TO_CATALOG_TAB[selection];
			if (tab && !seen.has(tab)) {
				tabs.push(tab);
				seen.add(tab);
			}
		});
		return tabs;
	}, [businessModelSelections]);
	const catalogueFilterTabOrder = [
		"All",
		"Products",
		"Services",
		"Subscriptions",
		"Digital Products",
		"Memberships",
		"Rentals"
	];
	const sortedCatalogueFilterTabs = (0, import_react.useMemo)(() => [...catalogueFilterTabs].sort((a, b) => catalogueFilterTabOrder.indexOf(a) - catalogueFilterTabOrder.indexOf(b)), [catalogueFilterTabs]);
	const [selectedCatalogueTab, setSelectedCatalogueTab] = (0, import_react.useState)("All");
	(0, import_react.useEffect)(() => {
		if (!catalogueFilterTabs.includes(selectedCatalogueTab)) setSelectedCatalogueTab("All");
	}, [catalogueFilterTabs, selectedCatalogueTab]);
	const [categories, setCategories] = (0, import_react.useState)(() => Array.from(new Set(CATALOG_ITEMS.map((product) => product.category).filter(Boolean))).map((name, index) => ({
		id: `category-${index + 1}`,
		name,
		productCount: CATALOG_ITEMS.filter((product) => product.category === name).length
	})));
	const [showAddCategoryInput, setShowAddCategoryInput] = (0, import_react.useState)(false);
	const [newCategoryName, setNewCategoryName] = (0, import_react.useState)("");
	const [editingCategoryId, setEditingCategoryId] = (0, import_react.useState)(null);
	const [categoryDrafts, setCategoryDrafts] = (0, import_react.useState)({});
	const addProduct = (type = "Product") => {
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
			mediaAssets: []
		};
		setCatalogProducts((p) => [newItem, ...p]);
		setSelectedProductId(id);
		setProductDrawerTab("general");
		setProductDrawerOpen(true);
	};
	const handleAddItemSelection = (type) => {
		setAddItemChoiceOpen(false);
		addProduct(type);
	};
	const handleAddItemClick = () => {
		const normalizedModels = businessModelSelections.filter(Boolean);
		if (normalizedModels.length <= 1) {
			const singleModel = normalizedModels[0];
			if (singleModel === "Services") handleAddItemSelection("Service");
			else if (singleModel === "Subscriptions") handleAddItemSelection("Subscription");
			else if (singleModel === "Digital Products") handleAddItemSelection("Digital Product");
			else if (singleModel === "Rentals") handleAddItemSelection("Rental");
			else handleAddItemSelection("Product");
			return;
		}
		setAddItemChoiceOpen(true);
	};
	const deleteCatalogProduct = (id) => {
		setCatalogProducts((list) => list.filter((product) => product.id !== id));
	};
	const duplicateCatalogProduct = (id) => {
		const original = catalogProducts.find((product) => product.id === id);
		if (!original) return;
		const duplicated = {
			...original,
			id: `p-${Date.now()}`,
			name: `${original.name} copy`
		};
		setCatalogProducts((list) => [duplicated, ...list]);
	};
	const previewCatalogProduct = (id) => {
		console.log(`Preview catalogue item ${id} - placeholder`);
	};
	const trainCatalogProductAI = (id) => {
		console.log(`Train AI for catalogue item ${id} - placeholder`);
	};
	const getCatalogueItemReadinessLabel = (item) => {
		const hasDescription = typeof item.description === "string" && item.description.trim().length > 0;
		const hasImages = Boolean(item.image && item.image.trim().length > 0 || (item.mediaAssets ?? []).length > 0);
		const hasFAQs = Boolean(item.faqs && item.faqs.length > 0);
		const hasPrice = typeof item.price === "string" && item.price.trim().length > 0;
		const hasInventory = typeof item.currentStock === "number";
		if (!hasImages) return "Needs Images";
		if (!hasFAQs) return "Needs FAQ";
		if (!hasDescription) return "Needs Description";
		if (!hasPrice) return "Needs Pricing";
		if (!hasInventory) return "Needs Inventory";
		return "100% Ready";
	};
	const [pricingSaved, setPricingSaved] = (0, import_react.useState)(false);
	const [pricingSectionComplete, setPricingSectionComplete] = (0, import_react.useState)(false);
	const [availabilitySaved, setAvailabilitySaved] = (0, import_react.useState)(false);
	const [importMenuOpen, setImportMenuOpen] = (0, import_react.useState)(false);
	const [showProductTypeDialog, setShowProductTypeDialog] = (0, import_react.useState)(false);
	const [showAddProductForm, setShowAddProductForm] = (0, import_react.useState)(false);
	const [selectedProductType, setSelectedProductType] = (0, import_react.useState)(null);
	const [selectedProductId, setSelectedProductId] = (0, import_react.useState)(null);
	const [productDrawerOpen, setProductDrawerOpen] = (0, import_react.useState)(false);
	const [addItemChoiceOpen, setAddItemChoiceOpen] = (0, import_react.useState)(false);
	const [productDrawerTab, setProductDrawerTab] = (0, import_react.useState)("general");
	const [completedProductStepIds, setCompletedProductStepIds] = (0, import_react.useState)([]);
	const [addProductFormData, setAddProductFormData] = (0, import_react.useState)(null);
	const productSectionIds = ["products", "pricing"];
	selectedProductId && catalogProducts.find((product) => product.id === selectedProductId);
	const openProductDrawer = (id) => {
		setSelectedProductId(id);
		setProductDrawerOpen(true);
		setProductDrawerTab("general");
	};
	const [activeProductStep, setActiveProductStep] = (0, import_react.useState)(0);
	(0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		const ids = productSectionIds;
		const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
		if (els.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting);
			if (visible.length > 0) {
				visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				const idx = ids.indexOf(visible[0].target.id);
				if (idx !== -1) setActiveProductStep(idx);
			} else {
				const rects = els.map((el) => ({
					id: el.id,
					top: Math.abs(el.getBoundingClientRect().top - 120)
				}));
				rects.sort((a, b) => a.top - b.top);
				setActiveProductStep(ids.indexOf(rects[0].id));
			}
		}, {
			threshold: [
				.25,
				.5,
				.75
			],
			root: null,
			rootMargin: "-40% 0px -40% 0px"
		});
		els.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, [catalogProducts.length]);
	const getProductCompletionMessage = (id) => {
		switch (id) {
			case "product-types": return "Product Types complete — your AI can now distinguish between your catalog formats.";
			case "products": return "Products complete — your catalogue has been added and is ready to be managed.";
			case "pricing": return "Pricing complete — your product prices are saved and ready to publish.";
			case "product-media": return "Product Media complete — your catalogue now includes visual assets.";
			default: return "Panel complete — your catalogue workspace is moving forward.";
		}
	};
	const productSteps = (0, import_react.useMemo)(() => [{
		id: "products",
		title: "Products",
		detail: "Add and manage catalog items",
		done: catalogProducts.length > 0
	}, {
		id: "pricing",
		title: "Pricing",
		detail: "Set prices and billing",
		done: pricingSectionComplete
	}], [catalogProducts.length, pricingSectionComplete]);
	const catalogueHealthMetrics = (0, import_react.useMemo)(() => {
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
			{
				label: "Products",
				completed: totalProducts,
				missing: Math.max(0, 1 - totalProducts),
				percentage: totalProducts > 0 ? 100 : 0
			},
			{
				label: "Prices",
				completed: pricesCompleted,
				missing: Math.max(0, totalProducts - pricesCompleted),
				percentage: totalProducts > 0 ? Math.round(pricesCompleted / totalProducts * 100) : 0
			},
			{
				label: "Media",
				completed: mediaCompleted,
				missing: Math.max(0, totalProducts - mediaCompleted),
				percentage: totalProducts > 0 ? Math.round(mediaCompleted / totalProducts * 100) : 0
			},
			{
				label: "AI Ready",
				completed: aiReadyCompleted,
				missing: Math.max(0, totalProducts - aiReadyCompleted),
				percentage: totalProducts > 0 ? Math.round(aiReadyCompleted / totalProducts * 100) : 0
			}
		];
	}, [catalogProducts]);
	const catalogueHealthConfidence = (0, import_react.useMemo)(() => calculateCatalogueHealthConfidence(catalogueHealthMetrics), [catalogueHealthMetrics]);
	const productLessonCompleted = productSteps.filter((step) => step.done).length;
	Math.round(productLessonCompleted / productSteps.length * 100);
	const productCompletionMounted = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!productCompletionMounted.current) {
			productCompletionMounted.current = true;
			return;
		}
		const newlyCompleted = productSteps.filter((step) => step.done).map((step) => step.id).filter((id) => !completedProductStepIds.includes(id));
		if (newlyCompleted.length === 0) return;
		setCompletedProductStepIds((current) => [...current, ...newlyCompleted]);
		newlyCompleted.forEach((id, index) => {
			window.setTimeout(() => {
				setCompletionToast(getProductCompletionMessage(id));
				window.setTimeout(() => setCompletionToast(null), 2200);
			}, index * 2400);
		});
	}, [completedProductStepIds, productSteps]);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	const SERVICE_ITEMS = [
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
			mediaAssets: []
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
			mediaAssets: []
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
			mediaAssets: []
		}
	];
	const [catalogServices, setCatalogServices] = (0, import_react.useState)(SERVICE_ITEMS);
	const [selectedServiceId, setSelectedServiceId] = (0, import_react.useState)(SERVICE_ITEMS[0]?.id ?? "");
	catalogServices.find((service) => service.id === selectedServiceId) ?? SERVICE_ITEMS[0];
	const IMPORT_TYPES = [
		"Excel",
		"CSV",
		"PDF Catalogues",
		"Website Import"
	];
	const [importState, setImportState] = (0, import_react.useState)(() => IMPORT_TYPES.reduce((acc, t) => {
		acc[t] = {
			progress: 0,
			status: "idle"
		};
		return acc;
	}, {}));
	const simulateImport = (type, file) => {
		setImportState((s) => ({
			...s,
			[type]: {
				progress: 0,
				status: "uploading"
			}
		}));
		let progress = 0;
		const id = setInterval(() => {
			progress += Math.floor(Math.random() * 12) + 8;
			if (progress >= 100) progress = 100;
			setImportState((s) => ({
				...s,
				[type]: {
					...s[type] || {
						progress: 0,
						status: "uploading"
					},
					progress
				}
			}));
			if (progress >= 100) {
				clearInterval(id);
				const productsImported = Math.floor(Math.random() * 90) + 10;
				const duplicatesFound = Math.floor(Math.random() * 5);
				const warnings = [];
				if (Math.random() > .7) warnings.push("Some rows had missing prices");
				if (Math.random() > .85) warnings.push("Invalid category mappings for 2 items");
				const message = `Imported ${productsImported} products successfully.`;
				setImportState((s) => ({
					...s,
					[type]: {
						progress: 100,
						status: "done",
						result: {
							productsImported,
							duplicatesFound,
							warnings,
							message
						}
					}
				}));
			}
		}, 400 + Math.random() * 300);
	};
	const [quoteTemplates, setQuoteTemplates] = (0, import_react.useState)([{
		id: "t-1",
		companyLogo: "/assets/sample/clinic.jpg",
		companyName: "Acme Services Ltd",
		header: "Quote",
		footer: "Thank you for your business.",
		terms: "Payment due within 30 days.",
		currency: "USD",
		tax: "16%",
		signature: "Authorized Signatory",
		primaryColor: "#065F46"
	}, {
		id: "t-2",
		companyLogo: "/assets/sample/tee.jpg",
		companyName: "Everyday Retail Co.",
		header: "Sales Quote",
		footer: "All sales subject to terms.",
		terms: "Return within 14 days.",
		currency: "KES",
		tax: "0%",
		signature: "Store Manager",
		primaryColor: "#0F172A"
	}]);
	const [selectedTemplateId, setSelectedTemplateId] = (0, import_react.useState)(quoteTemplates[0].id);
	const [playbooks, setPlaybooks] = (0, import_react.useState)([]);
	const [editingPlaybookId, setEditingPlaybookId] = (0, import_react.useState)(null);
	const addPlaybook = () => {
		const p = {
			id: `p-${Date.now()}`,
			title: "New Playbook",
			steps: ["Start"],
			allowed: false
		};
		setPlaybooks((s) => [p, ...s]);
		setEditingPlaybookId(p.id);
	};
	const updatePlaybook = (id, patch) => {
		setPlaybooks((s) => s.map((x) => x.id === id ? {
			...x,
			...patch
		} : x));
	};
	const duplicatePlaybook = (id) => {
		const p = playbooks.find((x) => x.id === id);
		if (!p) return;
		const copy = {
			...p,
			id: `p-${Date.now()}`,
			title: `${p.title} (copy)`
		};
		setPlaybooks((s) => [copy, ...s]);
	};
	const deletePlaybook = (id) => {
		if (!window.confirm("Delete this playbook?")) return;
		setPlaybooks((s) => s.filter((x) => x.id !== id));
		if (editingPlaybookId === id) setEditingPlaybookId(null);
	};
	const addStep = (id, afterIndex = -1) => {
		setPlaybooks((s) => s.map((p) => {
			if (p.id !== id) return p;
			const steps = [...p.steps];
			steps.splice(afterIndex + 1, 0, "New step");
			return {
				...p,
				steps
			};
		}));
	};
	const updateStep = (id, index, text) => {
		setPlaybooks((s) => s.map((p) => {
			if (p.id !== id) return p;
			const steps = [...p.steps];
			steps[index] = text;
			return {
				...p,
				steps
			};
		}));
	};
	const removeStep = (id, index) => {
		setPlaybooks((s) => s.map((p) => {
			if (p.id !== id) return p;
			const steps = [...p.steps];
			steps.splice(index, 1);
			return {
				...p,
				steps
			};
		}));
	};
	const [policySections, setPolicySections] = (0, import_react.useState)([
		{
			id: "pol-1",
			title: "Customer Policies",
			content: "Define the customer-facing policies that guide order handling, returns, and service levels."
		},
		{
			id: "pol-2",
			title: "Pricing & Payment",
			content: "Set rules for pricing, accepted payment methods, discounts, and invoice handling."
		},
		{
			id: "pol-3",
			title: "Orders & Fulfillment",
			content: "Specify order processing, shipping, delivery expectations, and fulfillment exceptions."
		},
		{
			id: "pol-4",
			title: "Privacy & Customer Data",
			content: "Document how customer data is collected, stored, shared, and protected within the system."
		},
		{
			id: "pol-5",
			title: "AI Boundaries",
			content: "Define the actions your AI can take and the tasks it should avoid to keep behavior on policy."
		},
		{
			id: "pol-6",
			title: "Escalation Rules",
			content: "Escalate issues to the right team or manager when requests exceed defined thresholds."
		},
		{
			id: "pol-7",
			title: "Review",
			content: "Review the full policy set to ensure every rule is clear and aligned with your business standards."
		}
	]);
	const policyTypeOptions = [
		"Returns",
		"Refunds",
		"Exchanges",
		"Cancellations",
		"Warranty",
		"Delivery",
		"Shipping",
		"Appointment cancellation",
		"Membership cancellation"
	];
	const [customerPolicies, setCustomerPolicies] = (0, import_react.useState)([
		{
			id: "cust-1",
			name: "Returns",
			description: "Customers can return items within 30 days when products are unused and returned in original condition.",
			enabled: true
		},
		{
			id: "cust-2",
			name: "Refunds",
			description: "Refunds are issued after approval when returned items meet policy requirements.",
			enabled: true
		},
		{
			id: "cust-3",
			name: "Exchanges",
			description: "Exchanges are accepted for items returned in original condition, subject to stock availability.",
			enabled: false
		},
		{
			id: "cust-4",
			name: "Cancellations",
			description: "Orders may be cancelled within two hours unless already shipped or fulfilled.",
			enabled: true
		}
	]);
	const toggleCustomerPolicyEnabled = (id) => setCustomerPolicies((s) => s.map((policy) => policy.id === id ? {
		...policy,
		enabled: !policy.enabled
	} : policy));
	const toggleCustomerPolicyEditing = (id) => setCustomerPolicies((s) => s.map((policy) => policy.id === id ? {
		...policy,
		editing: !policy.editing
	} : policy));
	const updateCustomerPolicyField = (id, field, value) => {
		setCustomerPolicies((s) => s.map((policy) => policy.id === id ? {
			...policy,
			[field]: value
		} : policy));
	};
	const addCustomerPolicy = (name) => {
		setCustomerPolicies((s) => [...s, {
			id: `cust-${Date.now()}`,
			name: name ?? "New policy",
			description: name ? `Define your ${name.toLowerCase()} policy so AI can answer customer questions accurately.` : "Describe this policy for your AI to reference when customers ask.",
			enabled: false,
			editing: true
		}]);
	};
	const [paymentMethods, setPaymentMethods] = (0, import_react.useState)([
		{
			id: "pay-1",
			name: "Credit cards",
			enabled: true
		},
		{
			id: "pay-2",
			name: "Bank transfers",
			enabled: true
		},
		{
			id: "pay-3",
			name: "Mobile money",
			enabled: false
		}
	]);
	const [pricingRules, setPricingRules] = (0, import_react.useState)([
		{
			id: "rule-1",
			name: "Taxes included",
			description: "Displayed prices include applicable taxes unless otherwise noted.",
			enabled: true
		},
		{
			id: "rule-2",
			name: "Fixed pricing",
			description: "Displayed prices are fixed for standard items unless a custom quotation is required.",
			enabled: true
		},
		{
			id: "rule-3",
			name: "Quotation required",
			description: "Certain requests require a quotation before the final price is confirmed.",
			enabled: false
		}
	]);
	const [paymentTiming, setPaymentTiming] = (0, import_react.useState)([
		{
			id: "timing-1",
			label: "Before fulfillment",
			selected: true
		},
		{
			id: "timing-2",
			label: "At fulfillment",
			selected: true
		},
		{
			id: "timing-3",
			label: "Deposit required",
			selected: false
		},
		{
			id: "timing-4",
			label: "Other",
			selected: false
		}
	]);
	const [paymentNotes, setPaymentNotes] = (0, import_react.useState)("Add any business-specific payment instructions that customers should know.");
	const [notApplicableSections, setNotApplicableSections] = (0, import_react.useState)([]);
	const isNotApplicable = (id) => notApplicableSections.includes(id);
	const toggleNotApplicable = (id) => setNotApplicableSections((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);
	const togglePaymentMethodEnabled = (id) => setPaymentMethods((s) => s.map((method) => method.id === id ? {
		...method,
		enabled: !method.enabled
	} : method));
	const togglePaymentMethodEditing = (id) => setPaymentMethods((s) => s.map((method) => method.id === id ? {
		...method,
		editing: !method.editing
	} : method));
	const updatePaymentMethodField = (id, value) => {
		setPaymentMethods((s) => s.map((method) => method.id === id ? {
			...method,
			name: value
		} : method));
	};
	const addPaymentMethod = () => {
		setPaymentMethods((s) => [...s, {
			id: `pay-${Date.now()}`,
			name: "New payment method",
			enabled: false,
			editing: true
		}]);
	};
	const deletePaymentMethod = (id) => setPaymentMethods((s) => s.filter((method) => method.id !== id));
	const togglePricingRuleEnabled = (id) => setPricingRules((s) => s.map((rule) => rule.id === id ? {
		...rule,
		enabled: !rule.enabled
	} : rule));
	const togglePricingRuleEditing = (id) => setPricingRules((s) => s.map((rule) => rule.id === id ? {
		...rule,
		editing: !rule.editing
	} : rule));
	const updatePricingRuleField = (id, field, value) => {
		setPricingRules((s) => s.map((rule) => rule.id === id ? {
			...rule,
			[field]: value
		} : rule));
	};
	const addPricingRule = () => {
		setPricingRules((s) => [...s, {
			id: `rule-${Date.now()}`,
			name: "New pricing rule",
			description: "Describe when this pricing rule applies.",
			enabled: false,
			editing: true
		}]);
	};
	const deletePricingRule = (id) => setPricingRules((s) => s.filter((rule) => rule.id !== id));
	const togglePaymentTiming = (id) => setPaymentTiming((s) => s.map((item) => item.id === id ? {
		...item,
		selected: !item.selected
	} : item));
	const [orderProcessingRules, setOrderProcessingRules] = (0, import_react.useState)([{
		id: "ord-1",
		name: "Processing time",
		description: "Typical time to process orders before fulfillment.",
		enabled: true
	}, {
		id: "ord-2",
		name: "Order confirmation",
		description: "What information is provided in order confirmations.",
		enabled: true
	}]);
	const [deliveryRules, setDeliveryRules] = (0, import_react.useState)([
		{
			id: "del-1",
			name: "Delivery options",
			description: "Delivery methods offered (courier, in-house, third-party).",
			enabled: true
		},
		{
			id: "del-2",
			name: "Pickup options",
			description: "Whether customers can pick up orders and where.",
			enabled: true
		},
		{
			id: "del-3",
			name: "Fulfillment locations",
			description: "Locations where orders are fulfilled or shipped from.",
			enabled: true
		},
		{
			id: "del-4",
			name: "Typical fulfillment timeframe",
			description: "Estimated timeframe customers should expect for fulfillment.",
			enabled: true
		}
	]);
	const [changesCancellationRules, setChangesCancellationRules] = (0, import_react.useState)([{
		id: "chg-1",
		name: "Change window",
		description: "When customers can change an order after placing it.",
		enabled: true
	}, {
		id: "can-1",
		name: "Cancellation policy",
		description: "When customers can cancel and any fees that apply.",
		enabled: true
	}]);
	const [unavailableRules, setUnavailableRules] = (0, import_react.useState)([{
		id: "unv-1",
		name: "Unavailable items handling",
		description: "What happens when an item or service is unavailable (refund, substitute, backorder).",
		enabled: true
	}]);
	const toggleFulfillmentEnabled = (id, list) => {
		if (list === "order") setOrderProcessingRules((s) => s.map((r) => r.id === id ? {
			...r,
			enabled: !r.enabled
		} : r));
		if (list === "delivery") setDeliveryRules((s) => s.map((r) => r.id === id ? {
			...r,
			enabled: !r.enabled
		} : r));
		if (list === "changes") setChangesCancellationRules((s) => s.map((r) => r.id === id ? {
			...r,
			enabled: !r.enabled
		} : r));
		if (list === "unavailable") setUnavailableRules((s) => s.map((r) => r.id === id ? {
			...r,
			enabled: !r.enabled
		} : r));
	};
	const toggleFulfillmentEditing = (id, list) => {
		if (list === "order") setOrderProcessingRules((s) => s.map((r) => r.id === id ? {
			...r,
			editing: !r.editing
		} : r));
		if (list === "delivery") setDeliveryRules((s) => s.map((r) => r.id === id ? {
			...r,
			editing: !r.editing
		} : r));
		if (list === "changes") setChangesCancellationRules((s) => s.map((r) => r.id === id ? {
			...r,
			editing: !r.editing
		} : r));
		if (list === "unavailable") setUnavailableRules((s) => s.map((r) => r.id === id ? {
			...r,
			editing: !r.editing
		} : r));
	};
	const updateFulfillmentField = (id, field, value, list) => {
		if (list === "order") setOrderProcessingRules((s) => s.map((r) => r.id === id ? {
			...r,
			[field]: value
		} : r));
		if (list === "delivery") setDeliveryRules((s) => s.map((r) => r.id === id ? {
			...r,
			[field]: value
		} : r));
		if (list === "changes") setChangesCancellationRules((s) => s.map((r) => r.id === id ? {
			...r,
			[field]: value
		} : r));
		if (list === "unavailable") setUnavailableRules((s) => s.map((r) => r.id === id ? {
			...r,
			[field]: value
		} : r));
	};
	const addFulfillmentRule = (list, name) => {
		const item = {
			id: `${list}-${Date.now()}`,
			name: name ?? "New rule",
			description: name ? `${name} details` : "Describe this rule.",
			enabled: false,
			editing: true
		};
		if (list === "order") setOrderProcessingRules((s) => [...s, item]);
		if (list === "delivery") setDeliveryRules((s) => [...s, item]);
		if (list === "changes") setChangesCancellationRules((s) => [...s, item]);
		if (list === "unavailable") setUnavailableRules((s) => [...s, item]);
	};
	const deleteFulfillmentRule = (id, list) => {
		if (list === "order") setOrderProcessingRules((s) => s.filter((r) => r.id !== id));
		if (list === "delivery") setDeliveryRules((s) => s.filter((r) => r.id !== id));
		if (list === "changes") setChangesCancellationRules((s) => s.filter((r) => r.id !== id));
		if (list === "unavailable") setUnavailableRules((s) => s.filter((r) => r.id !== id));
	};
	const [mayCollectRules, setMayCollectRules] = (0, import_react.useState)([{
		id: "pc-1",
		name: "Name",
		description: "Customer full name for identification and orders.",
		enabled: true
	}, {
		id: "pc-2",
		name: "Phone number",
		description: "Phone number for contact and delivery updates.",
		enabled: true
	}]);
	const [doNotRequestRules, setDoNotRequestRules] = (0, import_react.useState)([{
		id: "dnr-1",
		name: "Passwords",
		description: "Do not request account passwords from customers.",
		enabled: true
	}, {
		id: "dnr-2",
		name: "Payment card security codes",
		description: "Never ask for CVV or full card numbers in chat.",
		enabled: true
	}]);
	const [dataSharingRules, setDataSharingRules] = (0, import_react.useState)([{
		id: "ds-1",
		name: "Internal support",
		description: "Share customer data with internal support for order resolution when necessary.",
		enabled: true
	}]);
	const mayCollectExamples = [
		"Name",
		"Phone number",
		"Email",
		"Location",
		"Order details"
	];
	const doNotRequestExamples = [
		"Passwords",
		"Payment card security codes",
		"Authentication codes",
		"Other sensitive credentials"
	];
	const togglePrivacyEnabled = (id, list) => {
		if (list === "collect") setMayCollectRules((s) => s.map((r) => r.id === id ? {
			...r,
			enabled: !r.enabled
		} : r));
		if (list === "doNot") setDoNotRequestRules((s) => s.map((r) => r.id === id ? {
			...r,
			enabled: !r.enabled
		} : r));
		if (list === "share") setDataSharingRules((s) => s.map((r) => r.id === id ? {
			...r,
			enabled: !r.enabled
		} : r));
	};
	const togglePrivacyEditing = (id, list) => {
		if (list === "collect") setMayCollectRules((s) => s.map((r) => r.id === id ? {
			...r,
			editing: !r.editing
		} : r));
		if (list === "doNot") setDoNotRequestRules((s) => s.map((r) => r.id === id ? {
			...r,
			editing: !r.editing
		} : r));
		if (list === "share") setDataSharingRules((s) => s.map((r) => r.id === id ? {
			...r,
			editing: !r.editing
		} : r));
	};
	const updatePrivacyField = (id, field, value, list) => {
		if (list === "collect") setMayCollectRules((s) => s.map((r) => r.id === id ? {
			...r,
			[field]: value
		} : r));
		if (list === "doNot") setDoNotRequestRules((s) => s.map((r) => r.id === id ? {
			...r,
			[field]: value
		} : r));
		if (list === "share") setDataSharingRules((s) => s.map((r) => r.id === id ? {
			...r,
			[field]: value
		} : r));
	};
	const addPrivacyRule = (list, name) => {
		const item = {
			id: `${list}-${Date.now()}`,
			name: name ?? "New rule",
			description: name ? `${name} details` : "Describe this rule.",
			enabled: false,
			editing: true
		};
		if (list === "collect") setMayCollectRules((s) => [...s, item]);
		if (list === "doNot") setDoNotRequestRules((s) => [...s, item]);
		if (list === "share") setDataSharingRules((s) => [...s, item]);
	};
	const deletePrivacyRule = (id, list) => {
		if (list === "collect") setMayCollectRules((s) => s.filter((r) => r.id !== id));
		if (list === "doNot") setDoNotRequestRules((s) => s.filter((r) => r.id !== id));
		if (list === "share") setDataSharingRules((s) => s.filter((r) => r.id !== id));
	};
	const [boundaryRules, setBoundaryRules] = (0, import_react.useState)([
		{
			id: "b-1",
			name: "Never invent prices",
			description: "The AI must not fabricate prices for products or services.",
			enabled: true
		},
		{
			id: "b-2",
			name: "Do not claim availability incorrectly",
			description: "Never claim an item or service is available when the catalogue does not show it as available.",
			enabled: true
		},
		{
			id: "b-3",
			name: "Do not promise unconfirmed actions",
			description: "Never promise an action has been completed unless the system confirms it.",
			enabled: true
		},
		{
			id: "b-4",
			name: "Never invent business policies",
			description: "Do not make up company policies; refer to configured policies.",
			enabled: true
		},
		{
			id: "b-5",
			name: "Do not disclose internal information",
			description: "Never disclose internal business information in customer conversations.",
			enabled: true
		},
		{
			id: "b-6",
			name: "Respect authority limits",
			description: "Never make promises outside its configured authority.",
			enabled: true
		},
		{
			id: "b-7",
			name: "Do not provide unknown information",
			description: "Never provide information it does not have.",
			enabled: true
		},
		{
			id: "b-8",
			name: "Ask for human help when unsure",
			description: "Ask for human help when it cannot confidently answer.",
			enabled: true
		}
	]);
	const toggleBoundaryEnabled = (id) => setBoundaryRules((s) => s.map((r) => r.id === id ? {
		...r,
		enabled: !r.enabled
	} : r));
	const toggleBoundaryEditing = (id) => setBoundaryRules((s) => s.map((r) => r.id === id ? {
		...r,
		editing: !r.editing
	} : r));
	const updateBoundaryField = (id, field, value) => setBoundaryRules((s) => s.map((r) => r.id === id ? {
		...r,
		[field]: value
	} : r));
	const addBoundaryRule = (name) => setBoundaryRules((s) => [...s, {
		id: `b-${Date.now()}`,
		name: name ?? "New boundary",
		description: name ? `${name} details` : "Describe this boundary rule.",
		enabled: false,
		editing: true
	}]);
	const deleteBoundaryRule = (id) => setBoundaryRules((s) => s.filter((r) => r.id !== id));
	const [escalationRules, setEscalationRules] = (0, import_react.useState)([
		{
			id: "e-1",
			name: "Customer explicitly requests a human",
			description: "Hand over when a customer asks to speak to a human.",
			enabled: true
		},
		{
			id: "e-2",
			name: "Serious complaint",
			description: "Escalate serious complaints immediately for human review.",
			enabled: true
		},
		{
			id: "e-3",
			name: "Legal or regulatory concern",
			description: "Escalate any legal or regulatory issues to legal/human team.",
			enabled: true
		},
		{
			id: "e-4",
			name: "Privacy or data request",
			description: "Escalate data access or deletion requests to the appropriate human.",
			enabled: true
		},
		{
			id: "e-5",
			name: "Refund dispute",
			description: "Escalate disputes over refunds to human agents.",
			enabled: true
		},
		{
			id: "e-6",
			name: "Payment problem",
			description: "Escalate payment failures or disputes.",
			enabled: true
		},
		{
			id: "e-7",
			name: "Situation outside documented policies",
			description: "Escalate when the request falls outside configured policies.",
			enabled: true
		},
		{
			id: "e-8",
			name: "Request requiring human approval",
			description: "Escalate requests that require manual approval.",
			enabled: true
		},
		{
			id: "e-9",
			name: "AI is unable to answer confidently",
			description: "Escalate when confidence is low or AI cannot answer.",
			enabled: true
		}
	]);
	const toggleEscalationEnabled = (id) => setEscalationRules((s) => s.map((r) => r.id === id ? {
		...r,
		enabled: !r.enabled
	} : r));
	const toggleEscalationEditing = (id) => setEscalationRules((s) => s.map((r) => r.id === id ? {
		...r,
		editing: !r.editing
	} : r));
	const updateEscalationField = (id, field, value) => setEscalationRules((s) => s.map((r) => r.id === id ? {
		...r,
		[field]: value
	} : r));
	const addEscalationRule = (name) => setEscalationRules((s) => [...s, {
		id: `e-${Date.now()}`,
		name: name ?? "New escalation",
		description: name ? `${name} details` : "Describe this escalation trigger.",
		enabled: false,
		editing: true
	}]);
	const deleteEscalationRule = (id) => setEscalationRules((s) => s.filter((r) => r.id !== id));
	const togglePolicy = (id) => setPolicySections((s) => s.map((p) => p.id === id ? {
		...p,
		expanded: !p.expanded
	} : p));
	const updatePolicyContent = (id, value) => setPolicySections((s) => s.map((p) => p.id === id ? {
		...p,
		content: value
	} : p));
	const SAMPLE_PROMPTS = [
		"What is your return policy?",
		"Recommend a product for a small restaurant",
		"Offer an upgrade for this customer",
		"Generate a quote for 10 units of Item X"
	];
	const [conversations, setConversations] = (0, import_react.useState)([{
		id: "c-1",
		title: "Pricing test",
		messages: [{
			id: "m-1",
			role: "user",
			text: "How much does Product A cost?",
			time: (/* @__PURE__ */ new Date()).toLocaleTimeString()
		}, {
			id: "m-2",
			role: "ai",
			text: "Product A is $99. Would you like a bulk discount?",
			time: (/* @__PURE__ */ new Date()).toLocaleTimeString()
		}]
	}, {
		id: "c-2",
		title: "Booking flow",
		messages: [{
			id: "m-1",
			role: "user",
			text: "Can I book an installation?",
			time: (/* @__PURE__ */ new Date()).toLocaleTimeString()
		}]
	}]);
	const [selectedConversationId, setSelectedConversationId] = (0, import_react.useState)(conversations[0]?.id ?? null);
	const [inputText, setInputText] = (0, import_react.useState)("");
	const [aiAnalysis, setAiAnalysis] = (0, import_react.useState)(null);
	const createConversation = (title) => {
		const c = {
			id: `c-${Date.now()}`,
			title: title ?? `Conversation ${conversations.length + 1}`,
			messages: []
		};
		setConversations((s) => [c, ...s]);
		setSelectedConversationId(c.id);
	};
	const addMessage = (convId, role, text) => {
		const msg = {
			id: `m-${Date.now()}`,
			role,
			text,
			time: (/* @__PURE__ */ new Date()).toLocaleTimeString()
		};
		setConversations((s) => s.map((c) => c.id === convId ? {
			...c,
			messages: [...c.messages, msg]
		} : c));
		return msg;
	};
	const generateMockAnalysis = (userText, aiText) => {
		const intents = [
			"Pricing Query",
			"Booking",
			"Upgrade Request",
			"General Inquiry"
		];
		const actions = [
			"Recommend product",
			"Generate quote",
			"Schedule appointment",
			"Collect contact info"
		];
		return {
			intent: intents[Math.floor(Math.random() * intents.length)],
			confidence: `${Math.floor(70 + Math.random() * 30)}%`,
			knowledgeUsed: [
				"Product DB",
				"Pricing Rules",
				"FAQ"
			].slice(0, 1 + Math.floor(Math.random() * 3)),
			suggestedActions: actions.slice(0, 1 + Math.floor(Math.random() * actions.length)),
			responseTime: `${Math.floor(100 + Math.random() * 400)}ms`,
			generatedReply: aiText,
			knowledgeSources: ["Products API", "Pricing Table"].slice(0, 1 + Math.floor(Math.random() * 2))
		};
	};
	const simulateAiResponse = (convId, userText) => {
		addMessage(convId, "user", userText);
		setInputText("");
		setAiAnalysis(null);
		setTimeout(() => {
			setAiAnalysis(generateMockAnalysis(userText, addMessage(convId, "ai", `Mock reply to: "${userText}"`).text));
		}, 600 + Math.random() * 400);
	};
	const [assistantTab, setAssistantTab] = (0, import_react.useState)("Business Knowledge");
	const [activeConversation, setActiveConversation] = (0, import_react.useState)("c1");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [customerSearch, setCustomerSearch] = (0, import_react.useState)("");
	const [activeTab, setActiveTab] = (0, import_react.useState)("All");
	const [summaryGenerated, setSummaryGenerated] = (0, import_react.useState)(false);
	const [summaryVisible, setSummaryVisible] = (0, import_react.useState)(false);
	const [aiSummary, setAiSummary] = (0, import_react.useState)(null);
	const activeConversationData = INBOX_CONVERSATIONS.find((item) => item.id === activeConversation);
	const activeCustomerProfile = CUSTOMER_PROFILES[activeConversation] ?? CUSTOMER_PROFILES.c1;
	const activeMessages = INBOX_MESSAGES[activeConversation] ?? [];
	const inboxCounts = {
		All: INBOX_CONVERSATIONS.length,
		"AI Active": INBOX_CONVERSATIONS.filter((item) => item.source === "ai_handling").length,
		Human: INBOX_CONVERSATIONS.filter((item) => item.source === "owner").length,
		"Needs Reply": INBOX_CONVERSATIONS.filter((item) => item.source === "needs_attention").length
	};
	const [sourceOverrides, setSourceOverrides] = (0, import_react.useState)({});
	const getEffectiveSource = (id, original) => sourceOverrides[id] ?? original ?? "owner";
	const [messageInput, setMessageInput] = (0, import_react.useState)("");
	const textareaRef = (0, import_react.useRef)(null);
	const [sidebarHovered, setSidebarHovered] = (0, import_react.useState)(false);
	const [customerPanelFading, setCustomerPanelFading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const textarea = textareaRef.current;
		if (!textarea) return;
		textarea.style.height = "auto";
		const height = Math.min(textarea.scrollHeight, 120);
		textarea.style.height = `${height}px`;
		textarea.style.overflowY = textarea.scrollHeight > 120 ? "auto" : "hidden";
	}, [messageInput]);
	(0, import_react.useEffect)(() => {
		setCustomerPanelFading(true);
		const timer = window.setTimeout(() => setCustomerPanelFading(false), 10);
		return () => window.clearTimeout(timer);
	}, [activeConversation]);
	CUSTOMERS.filter((customer) => {
		const query = customerSearch.toLowerCase();
		return customer.name.toLowerCase().includes(query) || customer.phone.toLowerCase().includes(query) || customer.interestedProduct.toLowerCase().includes(query) || customer.leadStatus.toLowerCase().includes(query);
	});
	const [scheduledPosts, setScheduledPosts] = (0, import_react.useState)(SCHEDULED_POSTS);
	const [newPost, setNewPost] = (0, import_react.useState)({
		image: "",
		caption: "",
		date: "",
		time: "",
		source: "ai",
		needsAttention: true
	});
	Math.max(...ANALYTICS_CHART.map((point) => point.value));
	const [aiEnabled, setAiEnabled] = (0, import_react.useState)(true);
	const [businessHours, setBusinessHours] = (0, import_react.useState)("");
	const [humanTakeover, setHumanTakeover] = (0, import_react.useState)(true);
	const [language, setLanguage] = (0, import_react.useState)("English");
	const [personality, setPersonality] = (0, import_react.useState)("Friendly");
	const [communicationStyle, setCommunicationStyle] = (0, import_react.useState)("Balanced");
	const [emojiUsage, setEmojiUsage] = (0, import_react.useState)("Sometimes");
	const [preferredTone, setPreferredTone] = (0, import_react.useState)("Helpful");
	const [writingExamples, setWritingExamples] = (0, import_react.useState)("Hi James 👋\nThanks for reaching out.\nInstallation takes less than 24 hours.");
	const [testAiInput, setTestAiInput] = (0, import_react.useState)("How much is the Business Package?");
	const [testAiMessages, setTestAiMessages] = (0, import_react.useState)([{
		id: "m1",
		role: "user",
		text: "How much is your Business Package?"
	}, {
		id: "m2",
		role: "ai",
		text: "Our Business Package costs KES 5,000/month.",
		source: "Products & Services → Business Package"
	}]);
	const [testAiExplanation, setTestAiExplanation] = (0, import_react.useState)({
		answer: "Our Business Package costs KES 5,000/month.",
		confidence: 96,
		source: "Products & Services → Business Package",
		missing: "None — pricing is available.",
		improvements: "Add a comparison of all packages to help customers choose faster."
	});
	const testAiScrollRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!testAiScrollRef.current) return;
		testAiScrollRef.current.scrollTop = testAiScrollRef.current.scrollHeight;
	}, [testAiMessages]);
	const sendTestAiMessage = () => {
		const trimmed = testAiInput.trim();
		if (!trimmed) return;
		const userMessage = {
			id: `user-${Date.now()}`,
			role: "user",
			text: trimmed
		};
		const lowerQuestion = trimmed.toLowerCase();
		const explanation = lowerQuestion.includes("installation") ? {
			answer: "Yes, we offer installation for KES 2,000.",
			confidence: 94,
			source: "FAQ → Installation",
			missing: "None — installation details are available.",
			improvements: "Add estimated installation times for each service area."
		} : lowerQuestion.includes("m-pesa") || lowerQuestion.includes("mpesa") || lowerQuestion.includes("pay") ? {
			answer: "Yes, you can pay with M-Pesa, bank transfer, or cash.",
			confidence: 91,
			source: "Business Identity → Payment methods",
			missing: "M-Pesa paybill details are not yet included.",
			improvements: "Add your M-Pesa paybill number and payment confirmation steps."
		} : lowerQuestion.includes("price") || lowerQuestion.includes("cost") || lowerQuestion.includes("business package") ? {
			answer: "Our Business Package costs KES 5,000/month.",
			confidence: 96,
			source: "Products & Services → Business Package",
			missing: "None — pricing is available.",
			improvements: "Add a comparison of all packages to help customers choose faster."
		} : {
			answer: "This is a mock reply from your AI Employee based on the configured business knowledge.",
			confidence: 68,
			source: "Business Overview",
			missing: "More specific information may be needed for this question.",
			improvements: "Add a focused FAQ or knowledge item for this topic."
		};
		const aiMessage = {
			id: `ai-${Date.now()}`,
			role: "ai",
			text: explanation.answer,
			source: explanation.source
		};
		setTestAiMessages((current) => [
			...current,
			userMessage,
			aiMessage
		]);
		setTestAiExplanation(explanation);
		setTestAiInput("");
	};
	const [escalateOnLiveRequest, setEscalateOnLiveRequest] = (0, import_react.useState)(true);
	const [escalateOutsideHours, setEscalateOutsideHours] = (0, import_react.useState)(true);
	const [escalateUnanswered, setEscalateUnanswered] = (0, import_react.useState)(false);
	const [escalateComplaints, setEscalateComplaints] = (0, import_react.useState)(true);
	const [escalateRefunds, setEscalateRefunds] = (0, import_react.useState)(true);
	const [escalateLegalQuestions, setEscalateLegalQuestions] = (0, import_react.useState)(true);
	const [escalateHumanRequested, setEscalateHumanRequested] = (0, import_react.useState)(true);
	const [escalateUnknownQuestions, setEscalateUnknownQuestions] = (0, import_react.useState)(true);
	const [escalateNegotiationsAbove10k, setEscalateNegotiationsAbove10k] = (0, import_react.useState)(true);
	const [policyKeepShort, setPolicyKeepShort] = (0, import_react.useState)(true);
	const [policyUseProfessionalTone, setPolicyUseProfessionalTone] = (0, import_react.useState)(true);
	const [policyRespectHours, setPolicyRespectHours] = (0, import_react.useState)(true);
	const [outsideHoursMode, setOutsideHoursMode] = (0, import_react.useState)("collect");
	const [maxAiMessages, setMaxAiMessages] = (0, import_react.useState)(10);
	const [allowCloseSales, setAllowCloseSales] = (0, import_react.useState)(true);
	const [allowScheduleAppointments, setAllowScheduleAppointments] = (0, import_react.useState)(true);
	const [welcomeMessage, setWelcomeMessage] = (0, import_react.useState)("Hello 👋 How can we help?");
	const [awayMessage, setAwayMessage] = (0, import_react.useState)("Thanks for your message. We’re away right now, but we’ll get back to you during working hours.");
	const [closingMessage, setClosingMessage] = (0, import_react.useState)("Thanks for reaching out. We’re here whenever you need us.");
	const [aiEmployeeLaunched, setAiEmployeeLaunched] = (0, import_react.useState)(false);
	const [communicationChannels, setCommunicationChannels] = (0, import_react.useState)({
		whatsapp: true,
		websiteChat: true,
		instagram: false,
		facebookMessenger: false,
		googleBusinessMessages: false,
		telegram: false,
		slack: false,
		email: false
	});
	const [primaryLanguage, setPrimaryLanguage] = (0, import_react.useState)("English");
	const [secondaryLanguage, setSecondaryLanguage] = (0, import_react.useState)("Kiswahili");
	const [supportedLanguages, setSupportedLanguages] = (0, import_react.useState)(["English", "Kiswahili"]);
	const [languageSearch, setLanguageSearch] = (0, import_react.useState)("");
	const filteredLanguageOptions = LANGUAGE_OPTIONS.filter((language) => language.toLowerCase().includes(languageSearch.trim().toLowerCase()));
	const [tone, setTone] = (0, import_react.useState)("Friendly");
	const [writingStyleOptions, setWritingStyleOptions] = (0, import_react.useState)({
		"Use emojis": false,
		"Keep replies short": true,
		"Explain simply": true,
		"Ask follow-up questions": false,
		"Personalize responses": true
	});
	const [timezone, setTimezone] = (0, import_react.useState)("East Africa Time (EAT)");
	const [avatarFileName, setAvatarFileName] = (0, import_react.useState)("");
	const [logoPreview, setLogoPreview] = (0, import_react.useState)(null);
	const [logoPreviewOpen, setLogoPreviewOpen] = (0, import_react.useState)(false);
	const [logoError, setLogoError] = (0, import_react.useState)("");
	const [hasUnsavedChanges, setHasUnsavedChanges] = (0, import_react.useState)(false);
	const [saveState, setSaveState] = (0, import_react.useState)("idle");
	const [identitySaveState, setIdentitySaveState] = (0, import_react.useState)("idle");
	const [upsellProducts, setUpsellProducts] = (0, import_react.useState)(true);
	const [recommendAlternatives, setRecommendAlternatives] = (0, import_react.useState)(true);
	const [closeSalesAutomatically, setCloseSalesAutomatically] = (0, import_react.useState)(false);
	const [businessInfo, setBusinessInfo] = (0, import_react.useState)(() => normalizeBusinessInfo());
	const [industrySearch, setIndustrySearch] = (0, import_react.useState)("");
	const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = (0, import_react.useState)(false);
	const [otherIndustryValue, setOtherIndustryValue] = (0, import_react.useState)("");
	const [serviceAreaInput, setServiceAreaInput] = (0, import_react.useState)("");
	const [companyAbout, setCompanyAbout] = (0, import_react.useState)("");
	const [companyMission, setCompanyMission] = (0, import_react.useState)("");
	const [companyVision, setCompanyVision] = (0, import_react.useState)("");
	const [yearsInBusiness, setYearsInBusiness] = (0, import_react.useState)("");
	const [industriesServed, setIndustriesServed] = (0, import_react.useState)("");
	const [targetCustomers, setTargetCustomers] = (0, import_react.useState)("");
	const [differentiators, setDifferentiators] = (0, import_react.useState)("");
	const [customerProblems, setCustomerProblems] = (0, import_react.useState)("");
	const filteredIndustryOptions = (0, import_react.useMemo)(() => {
		const searchValue = industrySearch.trim().toLowerCase();
		if (!searchValue) return BUSINESS_INDUSTRY_OPTIONS;
		return BUSINESS_INDUSTRY_OPTIONS.filter((option) => option.toLowerCase().includes(searchValue));
	}, [industrySearch]);
	const businessIndustryValue = businessInfo.type === "Other" ? otherIndustryValue.trim() : businessInfo.type.trim();
	(0, import_react.useEffect)(() => {
		if (!businessInfo.type || businessInfo.type === "Other") return;
		if (BUSINESS_INDUSTRY_OPTIONS.includes(businessInfo.type)) {
			setOtherIndustryValue("");
			return;
		}
		setOtherIndustryValue(businessInfo.type);
	}, [businessInfo.type]);
	(0, import_react.useEffect)(() => {
		setCompanyAbout(businessInfo.about || "");
	}, [businessInfo.about]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		try {
			const savedSignup = window.localStorage.getItem("sokoos-workspace-signup");
			if (!savedSignup) return;
			const parsedSignup = JSON.parse(savedSignup);
			setBusinessInfo((current) => normalizeBusinessInfo({
				...current,
				name: parsedSignup.businessName?.trim() || current.name,
				type: parsedSignup.businessType?.trim() || current.type,
				country: parsedSignup.country?.trim() || current.country,
				email: parsedSignup.businessEmail?.trim() || current.email,
				phone: parsedSignup.phoneNumber?.trim() || current.phone
			}));
		} catch {}
	}, []);
	const previewLanguageCopy = primaryLanguage === "Kiswahili" ? {
		customerGreeting: "Habari",
		pricingQuestion: "Intaneti yenu ni bei gani?",
		availabilityQuestion: "Nahitaji kufungiwa intaneti leo jioni.",
		defaultWelcome: "Habari! Tunawezaje kukusaidia leo?"
	} : {
		customerGreeting: "Hi",
		pricingQuestion: "How much is your internet?",
		availabilityQuestion: "I need internet installed this evening.",
		defaultWelcome: "Hello 👋 How can we help?"
	};
	const previewPersonalityReply = {
		Professional: "Our internet packages start from KES 2,500/month. Which area are you in?",
		Friendly: `Our internet packages start from KES 2,500/month. Which area are you in${writingStyleOptions["Use emojis"] ? "? 😊" : "?"}`,
		Warm: "Our internet packages start from KES 2,500/month. We’d love to help you find the right fit.",
		Luxury: "Our internet packages begin at KES 2,500/month. Which area would you like us to serve?",
		Casual: "Our internet packages start from KES 2,500/month. Which area are you in?",
		Technical: "Our internet packages start from KES 2,500/month. Which area are you in so we can check coverage?",
		Playful: `Our internet packages start from KES 2,500/month. Which area are you in${writingStyleOptions["Use emojis"] ? "? ✨" : "?"}`,
		Formal: "Our internet packages begin at KES 2,500/month. We would be pleased to assist you with your area."
	}[personality];
	const previewBusinessContext = writingStyleOptions["Keep replies short"] ? previewPersonalityReply : `${previewPersonalityReply} ${businessInfo.about || "We’re here to help."}`;
	const previewFollowUp = writingStyleOptions["Ask follow-up questions"] ? primaryLanguage === "Kiswahili" ? "Ungependa kujua nini hasa?" : "What would you like to know first?" : null;
	const [previewQuestion, setPreviewQuestion] = (0, import_react.useState)(null);
	const [previewRefreshKey, setPreviewRefreshKey] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setPreviewReplyVisible(false);
		const replyTimer = window.setTimeout(() => {
			setPreviewRefreshKey((current) => current + 1);
			setPreviewReplyVisible(true);
			previewMessagesRef.current?.scrollTo({
				top: previewMessagesRef.current.scrollHeight,
				behavior: "smooth"
			});
		}, 500);
		return () => window.clearTimeout(replyTimer);
	}, [
		businessHours,
		businessInfo,
		personality,
		primaryLanguage,
		supportedLanguages,
		welcomeMessage,
		awayMessage,
		previewQuestion
	]);
	const previewQuestionReply = previewQuestion?.toLowerCase().includes("located") ? `We’re based in ${businessInfo.address || "your area"}.` : previewQuestion?.toLowerCase().includes("hours") ? `We’re available ${businessHours || "during business hours"}.` : previewQuestion?.toLowerCase().includes("hello") ? welcomeMessage || previewLanguageCopy.defaultWelcome : previewBusinessContext;
	const [knowledgeProducts, setKnowledgeProducts] = (0, import_react.useState)([
		{
			id: "kp1",
			name: "10 Mbps Internet",
			price: "KES 2,500/month"
		},
		{
			id: "kp2",
			name: "20 Mbps Internet",
			price: "KES 3,500/month"
		},
		{
			id: "kp3",
			name: "Business Package",
			price: "KES 5,000/month"
		}
	]);
	const [personalContacts, setPersonalContacts] = (0, import_react.useState)([{
		id: "pc1",
		name: "Mary Wanjiku",
		relationship: "Wife",
		phone: "+254712345678"
	}, {
		id: "pc2",
		name: "Peter Mwangi",
		relationship: "Supplier",
		phone: "+254733222222"
	}]);
	const [newContact, setNewContact] = (0, import_react.useState)({
		name: "",
		relationship: "",
		phone: ""
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
	(0, import_react.useEffect)(() => {
		if (!hasUnsavedChanges) return;
		const autosaveTimer = window.setTimeout(() => {
			setHasUnsavedChanges(false);
			setSaveState("idle");
		}, 450);
		return () => window.clearTimeout(autosaveTimer);
	}, [hasUnsavedChanges]);
	const handleIndustrySelection = (value) => {
		setBusinessInfo((current) => ({
			...current,
			type: value
		}));
		setOtherIndustryValue("");
		setIndustrySearch("");
		setIsIndustryDropdownOpen(false);
		setHasUnsavedChanges(true);
	};
	const handleOtherIndustryChange = (event) => {
		const nextValue = event.target.value;
		setOtherIndustryValue(nextValue);
		setBusinessInfo((current) => ({
			...current,
			type: nextValue
		}));
		setHasUnsavedChanges(true);
	};
	const addServiceArea = (value) => {
		const trimmed = (value ?? serviceAreaInput).trim();
		if (!trimmed) return;
		const existingAreas = parseServiceAreas(businessInfo.serviceAreas);
		if (!existingAreas.includes(trimmed)) {
			setBusinessInfo((current) => ({
				...current,
				serviceAreas: [...existingAreas, trimmed].join(", ")
			}));
			setHasUnsavedChanges(true);
		}
		setServiceAreaInput("");
	};
	const removeServiceArea = (value) => {
		const nextAreas = parseServiceAreas(businessInfo.serviceAreas).filter((item) => item !== value);
		setBusinessInfo((current) => ({
			...current,
			serviceAreas: nextAreas.join(", ")
		}));
		setHasUnsavedChanges(true);
	};
	const addPersonalContact = () => {
		const name = newContact.name.trim();
		const phone = newContact.phone.trim();
		const relationship = newContact.relationship.trim();
		if (!name || !phone) return;
		setPersonalContacts((c) => [...c, {
			id: `pc-${Date.now()}`,
			name,
			relationship: relationship || "Contact",
			phone
		}]);
		setNewContact({
			name: "",
			relationship: "",
			phone: ""
		});
	};
	const isPersonalByPhone = (phone) => !!phone && personalContacts.some((pc) => pc.phone === phone);
	const isPersonalActive = isPersonalByPhone(activeConversationData?.phone ?? null);
	const activePersonalEntry = personalContacts.find((pc) => pc.phone === activeConversationData?.phone);
	activePersonalEntry && [
		"wife",
		"husband",
		"spouse",
		"family"
	].some((k) => activePersonalEntry.relationship.toLowerCase().includes(k));
	const effectiveActiveSource = isPersonalActive ? "personal" : getEffectiveSource(activeConversation, activeConversationData?.source);
	const activeAgentName = isPersonalActive ? "Personal" : String(effectiveActiveSource).startsWith("ai") ? "Sokoos AI" : OWNER_NAMES[activeConversation] ?? "You";
	const getConversationStatusBadge = (source, isPersonal) => {
		if (isPersonal) return {
			emoji: "🏠",
			label: "Personal",
			bg: "bg-[#F1F5F9]",
			text: "text-[#334155]"
		};
		switch (source) {
			case "ai_handling": return {
				emoji: "🤖",
				label: "AI Active",
				bg: "bg-[#ECFDF5]",
				text: "text-[#059669]"
			};
			case "ai_handled": return {
				emoji: "✅",
				label: "AI Resolved",
				bg: "bg-[#F0FDF4]",
				text: "text-[#166534]"
			};
			case "needs_attention": return {
				emoji: "🔴",
				label: "Needs Reply",
				bg: "bg-[#FEF2F2]",
				text: "text-[#B91C1C]"
			};
			default: return {
				emoji: "👤",
				label: "Human",
				bg: "bg-[#EFF6FF]",
				text: "text-[#1E3A8A]"
			};
		}
	};
	const toggleAiForActive = () => {
		if (isPersonalActive) return;
		const current = sourceOverrides[activeConversation] ?? activeConversationData?.source ?? "";
		if (String(current).startsWith("ai")) setSourceOverrides((s) => ({
			...s,
			[activeConversation]: "owner"
		}));
		else setSourceOverrides((s) => ({
			...s,
			[activeConversation]: "ai_handling"
		}));
	};
	const [faqItems, setFaqItems] = (0, import_react.useState)([{
		id: "faq1",
		question: "Do you offer installation?",
		answer: "Yes, installation costs KES 2,000."
	}]);
	const [editingFaqId, setEditingFaqId] = (0, import_react.useState)(null);
	const [expandedPolicy, setExpandedPolicy] = (0, import_react.useState)(null);
	const [policiesText, setPoliciesText] = (0, import_react.useState)({
		refund: "",
		return: "",
		warranty: "",
		support: "",
		privacy: "",
		cancellation: ""
	});
	const [knowledgeLibraryItems, setKnowledgeLibraryItems] = (0, import_react.useState)([
		{
			id: "knowledge-faq-1",
			type: "FAQ",
			title: "Do you offer installation?",
			summary: "Yes, installation costs KES 2,000.",
			source: "Customer FAQ",
			category: "Support",
			tags: ["installation", "setup"],
			status: "Ready",
			detail: "Question · Answer"
		},
		{
			id: "knowledge-product-1",
			type: "Product",
			title: "10 Mbps Internet",
			summary: "Reliable home internet for everyday browsing and streaming.",
			source: "Product catalogue",
			category: "Internet plans",
			tags: ["popular", "home"],
			status: "Ready",
			detail: "KES 2,500/month · 2 images"
		},
		{
			id: "knowledge-policy-1",
			type: "Policy",
			title: "Cancellation policy",
			summary: "Customers can cancel with 48 hours notice before the next billing cycle.",
			source: "Business policy",
			category: "Account",
			tags: ["billing"],
			status: "Ready",
			detail: "Priority · High"
		},
		{
			id: "knowledge-page-1",
			type: "Website Page",
			title: "Home internet plans",
			summary: "Packages, coverage details, and installation information imported from your website.",
			source: "sokoos.com/plans",
			category: "Website",
			tags: ["website", "pricing"],
			status: "Synced",
			detail: "Last synced · Just now"
		}
	]);
	const [knowledgeSearch, setKnowledgeSearch] = (0, import_react.useState)("");
	const [knowledgeFilter, setKnowledgeFilter] = (0, import_react.useState)("All");
	const [selectedKnowledgeItems, setSelectedKnowledgeItems] = (0, import_react.useState)([]);
	const [editingKnowledgeId, setEditingKnowledgeId] = (0, import_react.useState)(null);
	const [previewKnowledgeId, setPreviewKnowledgeId] = (0, import_react.useState)(null);
	const [websiteImportUrl, setWebsiteImportUrl] = (0, import_react.useState)("https://theirbusiness.com");
	const [websiteImportProgress, setWebsiteImportProgress] = (0, import_react.useState)(100);
	const [websiteImportStatus, setWebsiteImportStatus] = (0, import_react.useState)("ready");
	const [websiteImportHistory, setWebsiteImportHistory] = (0, import_react.useState)([{
		id: "website-sync-1",
		time: "Today, 10:42 AM",
		result: "18 pages scanned · 42 knowledge items updated"
	}, {
		id: "website-sync-2",
		time: "Jul 24, 2:18 PM",
		result: "16 pages scanned · 38 knowledge items updated"
	}]);
	const [aiLearningTimeline, setAiLearningTimeline] = (0, import_react.useState)([
		{
			id: "learning-1",
			day: "Today",
			title: "Imported website",
			detail: "42 knowledge items learned from 18 pages",
			Icon: Globe
		},
		{
			id: "learning-2",
			day: "Yesterday",
			title: "Uploaded product catalogue",
			detail: "37 products and current pricing added",
			Icon: Package
		},
		{
			id: "learning-3",
			day: "Yesterday",
			title: "Added FAQ",
			detail: "Installation and support answers are ready",
			Icon: MessageCircle
		},
		{
			id: "learning-4",
			day: "2 days ago",
			title: "Updated business hours",
			detail: "Availability expectations refreshed",
			Icon: Clock
		},
		{
			id: "learning-5",
			day: "3 days ago",
			title: "Added refund policy",
			detail: "Customer policy guidance added",
			Icon: Shield
		}
	]);
	(0, import_react.useRef)(null);
	const [knowledgeDocuments, setKnowledgeDocuments] = (0, import_react.useState)([{
		id: "knowledge-doc-1",
		name: "Internet Plans 2026.pdf",
		size: "2.4 MB",
		uploaded: "Today, 9:42 AM",
		status: "Ready",
		extracted: "16 knowledge items",
		kind: "PDF"
	}, {
		id: "knowledge-doc-2",
		name: "Customer Support FAQ.docx",
		size: "86 KB",
		uploaded: "Jul 26, 2026",
		status: "Ready",
		extracted: "24 knowledge items",
		kind: "DOCX"
	}]);
	const [knowledgeDocumentDragActive, setKnowledgeDocumentDragActive] = (0, import_react.useState)(false);
	const [replacingKnowledgeDocumentId, setReplacingKnowledgeDocumentId] = (0, import_react.useState)(null);
	const [previewKnowledgeDocumentId, setPreviewKnowledgeDocumentId] = (0, import_react.useState)(null);
	const [websiteScanSummary, setWebsiteScanSummary] = (0, import_react.useState)(null);
	const [testQuery, setTestQuery] = (0, import_react.useState)("");
	const [testConversations, setTestConversations] = (0, import_react.useState)([]);
	const [policies, setPolicies] = (0, import_react.useState)({
		returnPolicy: "Customers may return services within 7 days if there is a technical issue requiring a fix.",
		deliveryPolicy: "We deliver service activation details via WhatsApp within 24 hours of payment.",
		cancellationPolicy: "Cancel anytime with 48 hours notice before the next billing cycle."
	});
	const identityWorkspaceComplete = Boolean((businessInfo.name || "").trim() && (businessInfo.type || "").trim() && (businessInfo.country || "").trim() && (businessInfo.about || "").trim() && (businessInfo.email || "").trim() && (businessInfo.phone || "").trim() && (businessInfo.whatsapp || "").trim() && (businessInfo.address || "").trim());
	Boolean(identityWorkspaceComplete && (businessInfo.email || "").includes("@") && (businessInfo.email || "").includes(".") && (businessInfo.phone || "").replace(/\D/g, "").length >= 7 && (businessInfo.whatsapp || "").replace(/\D/g, "").length >= 7);
	const identityLessonProgress = [
		Math.round([
			businessInfo.name,
			businessInfo.type,
			businessInfo.country,
			businessInfo.about
		].filter(Boolean).length / 4 * 100),
		Math.round([
			personality,
			communicationStyle,
			emojiUsage,
			preferredTone,
			writingExamples
		].filter(Boolean).length / 5 * 100),
		Math.round([
			welcomeMessage,
			awayMessage,
			closingMessage
		].filter(Boolean).length / 3 * 100),
		Math.round([primaryLanguage, supportedLanguages.length ? "x" : ""].filter(Boolean).length / 2 * 100),
		businessHours.trim() ? 100 : 0,
		Math.round([businessInfo.address, businessInfo.serviceAreas].filter(Boolean).length / 2 * 100),
		identityWorkspaceComplete ? 100 : 0
	];
	const identityLessonActivityPercent = Math.min(100, Math.round(identityLessonProgress.reduce((sum, value) => sum + value, 0) / identityLessonProgress.length));
	const knowledgeSourceLessonProgress = selectedKnowledgeSources.map((source) => {
		if (source === "company") return Math.round([
			businessInfo.name,
			businessInfo.about,
			companyAbout || companyMission || companyVision || targetCustomers
		].filter(Boolean).length / 3 * 100);
		if (source === "faqs") return faqItems.length > 0 ? 100 : 0;
		if (source === "documents") return knowledgeDocuments.length > 0 ? 100 : 0;
		if (source === "website") return websiteScanSummary?.pages ? 100 : 0;
		return 0;
	});
	const knowledgeLessonProgress = [
		selectedKnowledgeSources.length > 0 ? 100 : 0,
		...knowledgeSourceLessonProgress,
		completedKnowledgeSteps.includes(knowledgeLessonSequence.length - 1) ? 100 : 0
	];
	const knowledgeLessonActivityPercent = Math.min(100, Math.round(knowledgeLessonProgress.reduce((sum, value) => sum + value, 0) / Math.max(1, knowledgeLessonProgress.length)));
	const trainingCompletedSteps = [...new Set((identityWorkspaceComplete ? [...completedIdentitySteps, 0] : completedIdentitySteps).filter((step) => step >= 0 && step < identityLessons.length))];
	const onboardingComplete = aiEmployeeLaunched || trainingCompletedSteps.length >= identityLessons.length;
	Math.max(0, 6 - trainingCompletedSteps.length);
	const trainingPercent = Math.round(trainingCompletedSteps.length / identityLessons.length * 100);
	const completedTrainingLessonCount = completedIdentitySteps.length + completedKnowledgeSteps.length;
	const totalTrainingLessonCount = identityLessons.length + knowledgeLessonSequence.length;
	const overallTrainingPercent = Math.round(completedTrainingLessonCount / Math.max(1, totalTrainingLessonCount) * 100);
	const overallTrainingComplete = completedTrainingLessonCount >= totalTrainingLessonCount;
	const currentTrainingLessonLabel = activeWorkspaceSection === "Knowledge Hub" ? knowledgeLessonSequence[activeKnowledgeStep] ?? knowledgeLessonSequence[0] : identityLessons[activeIdentityStep] ?? identityLessons[0];
	const currentTrainingLessonCount = activeWorkspaceSection === "Knowledge Hub" ? knowledgeLessonSequence.length : identityLessons.length;
	const currentTrainingStepNumber = activeWorkspaceSection === "Knowledge Hub" ? activeKnowledgeStep + 1 : activeIdentityStep + 1;
	const aiReadiness = overallTrainingComplete ? 100 : Math.min(100, Math.round(18 + completedTrainingLessonCount / Math.max(1, totalTrainingLessonCount) * 82));
	const totalProductMediaAssets = catalogProducts.reduce((count, product) => count + (product.mediaAssets?.length ?? 0), 0);
	const knowledgeSourceSummary = [
		{
			label: "Website",
			value: "42 pages",
			Icon: Globe,
			ready: websiteImportStatus !== "syncing"
		},
		{
			label: "FAQ",
			value: `${faqItems.length} items`,
			Icon: MessageCircle,
			ready: faqItems.length > 0
		},
		{
			label: "Products",
			value: `${knowledgeProducts.length} products`,
			Icon: Package,
			ready: knowledgeProducts.length > 0
		},
		{
			label: "Policies",
			value: `${Object.values(policies).filter(Boolean).length}`,
			Icon: Shield,
			ready: Object.values(policies).some(Boolean)
		},
		{
			label: "Documents",
			value: `${knowledgeDocuments.length}`,
			Icon: Paperclip,
			ready: knowledgeDocuments.length > 0
		},
		{
			label: "Images",
			value: `${totalProductMediaAssets} files`,
			Icon: Image,
			ready: totalProductMediaAssets > 0
		},
		{
			label: "Catalogues",
			value: `${CATALOG_ITEMS.length}`,
			Icon: BookOpen,
			ready: CATALOG_ITEMS.length > 0
		}
	];
	const knowledgeCoverage = Math.round(knowledgeSourceSummary.filter((source) => source.ready).length / knowledgeSourceSummary.length * 100);
	Math.min(98, 62 + knowledgeCoverage / 3);
	Math.min(97, 68 + knowledgeCoverage / 4);
	const knowledgeHealthChecks = [
		{
			label: "Business hours",
			complete: Boolean(businessHours)
		},
		{
			label: "Refund policy",
			complete: Boolean(policies.returnPolicy)
		},
		{
			label: "Warranty",
			complete: false
		},
		{
			label: "Payment methods",
			complete: Boolean(businessInfo.paymentMethods)
		},
		{
			label: "Service areas",
			complete: Boolean(businessInfo.serviceAreas)
		}
	];
	knowledgeHealthChecks.filter((check) => !check.complete);
	Math.round(knowledgeHealthChecks.filter((check) => check.complete).length / knowledgeHealthChecks.length * 100);
	knowledgeLibraryItems.filter((item) => (knowledgeFilter === "All" || item.type === knowledgeFilter) && `${item.title} ${item.summary} ${item.source} ${item.category} ${item.tags.join(" ")}`.toLowerCase().includes(knowledgeSearch.trim().toLowerCase()));
	const workspaceProgressBySection = {
		Identity: identityLessonActivityPercent,
		"Knowledge Hub": knowledgeLessonActivityPercent,
		Catalogue: Math.min(100, Math.round((knowledgeProducts.length > 0 ? 45 : 0) + (CATALOG_ITEMS.length > 0 ? 35 : 0) + (knowledgeProducts.length > 2 ? 20 : 0))),
		"Sales Playbooks": Math.min(100, upsellProducts || recommendAlternatives ? 100 : 0),
		Policies: Math.min(100, Math.round(Object.values(policies).filter(Boolean).length / 3 * 100)),
		Skills: 0,
		Integrations: Math.min(100, Math.round(Object.values(communicationChannels).filter(Boolean).length / Math.max(1, Object.keys(communicationChannels).length) * 100)),
		Performance: aiEmployeeLaunched ? 100 : Math.min(100, 20 + (trainingCompletedSteps.length > 0 ? 10 : 0))
	};
	const workspaceNavigatorItems = [
		{
			title: "Identity",
			description: "Who your AI represents",
			section: "Identity",
			Icon: User,
			complete: workspaceProgressBySection.Identity >= 100,
			percent: workspaceProgressBySection.Identity,
			unlocked: true
		},
		{
			title: "Knowledge",
			description: "What it can answer",
			section: "Knowledge Hub",
			Icon: BookOpen,
			complete: workspaceProgressBySection["Knowledge Hub"] >= 100,
			percent: workspaceProgressBySection["Knowledge Hub"],
			unlocked: true
		},
		{
			title: "Catalogue",
			description: "Offers it can recommend",
			section: "Catalogue",
			Icon: Package,
			complete: workspaceProgressBySection.Catalogue >= 100,
			percent: workspaceProgressBySection.Catalogue,
			unlocked: true
		},
		{
			title: "Sales Playbooks",
			description: "How it handles selling",
			section: "Sales Playbooks",
			Icon: Target,
			complete: workspaceProgressBySection["Sales Playbooks"] >= 100,
			percent: workspaceProgressBySection["Sales Playbooks"],
			unlocked: true
		},
		{
			title: "Policies",
			description: "Rules it follows",
			section: "Policies",
			Icon: Shield,
			complete: workspaceProgressBySection.Policies >= 100,
			percent: workspaceProgressBySection.Policies,
			unlocked: true
		},
		{
			title: "Skills",
			description: "Work it can do",
			section: "Skills",
			Icon: Sparkles,
			complete: workspaceProgressBySection.Skills >= 100,
			percent: workspaceProgressBySection.Skills,
			unlocked: true
		},
		{
			title: "Integrations",
			description: "Where it connects",
			section: "Integrations",
			Icon: Plug,
			complete: workspaceProgressBySection.Integrations >= 100,
			percent: workspaceProgressBySection.Integrations,
			unlocked: true
		},
		{
			title: "Performance",
			description: "How it is improving",
			section: "Performance",
			Icon: ChartColumn,
			complete: workspaceProgressBySection.Performance >= 100,
			percent: workspaceProgressBySection.Performance,
			unlocked: true
		}
	];
	const handleWorkspaceSectionSelection = (section) => {
		setActiveWorkspaceSection(section);
	};
	(0, import_react.useEffect)(() => {
		const saved = window.localStorage.getItem("sokoos-ai-training-progress-v2");
		if (saved) try {
			const progress = JSON.parse(saved);
			if (isDevMode) window.localStorage.removeItem("sokoos-ai-training-progress-v2");
			else {
				if (progress.businessInfo) setBusinessInfo(normalizeBusinessInfo(progress.businessInfo));
				if (typeof progress.businessIndustry === "string") {
					const industryValue = progress.businessIndustry.trim();
					if (industryValue) if (BUSINESS_INDUSTRY_OPTIONS.includes(industryValue)) setBusinessInfo((current) => normalizeBusinessInfo({
						...current,
						type: industryValue
					}));
					else {
						setBusinessInfo((current) => normalizeBusinessInfo({
							...current,
							type: "Other"
						}));
						setOtherIndustryValue(industryValue);
					}
				}
				if (Array.isArray(progress.businessModels)) setBusinessModelSelections(progress.businessModels.filter((value) => typeof value === "string" && value.trim().length > 0));
				if (typeof progress.businessHours === "string") setBusinessHours(progress.businessHours);
				if (typeof progress.step === "number") setActiveIdentityStep(progress.step);
				if (Array.isArray(progress.completed)) setCompletedIdentitySteps(sanitizeStepIndices(progress.completed, identityLessons.length));
				const loadedSelectedKnowledgeSources = Array.isArray(progress.selectedKnowledgeSources) ? sanitizeSelectedKnowledgeSources(progress.selectedKnowledgeSources) : [];
				if (loadedSelectedKnowledgeSources.length > 0) setSelectedKnowledgeSources(loadedSelectedKnowledgeSources);
				const loadedKnowledgeSequenceLength = 1 + loadedSelectedKnowledgeSources.length + 1;
				if (Array.isArray(progress.completedKnowledge)) setCompletedKnowledgeSteps(sanitizeStepIndices(progress.completedKnowledge, loadedKnowledgeSequenceLength));
				if (typeof progress.activeKnowledgeStep === "number") setActiveKnowledgeStep(Math.min(Math.max(progress.activeKnowledgeStep, 0), loadedKnowledgeSequenceLength - 1));
				if (progress.launched) setAiEmployeeLaunched(true);
				if (typeof progress.scrollY === "number") window.requestAnimationFrame(() => window.scrollTo({
					top: progress.scrollY,
					behavior: "auto"
				}));
			}
		} catch {
			window.localStorage.removeItem("sokoos-ai-training-progress-v2");
		}
		setOnboardingRestored(true);
	}, []);
	(0, import_react.useEffect)(() => {
		setCompletedIdentitySteps((current) => {
			if (identityWorkspaceComplete && !current.includes(0)) return [...current, 0];
			if (!identityWorkspaceComplete && current.includes(0)) return current.filter((step) => step !== 0);
			return current;
		});
	}, [identityWorkspaceComplete]);
	(0, import_react.useEffect)(() => {
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
			businessHours
		}));
	}, [
		activeIdentityStep,
		completedIdentitySteps,
		activeKnowledgeStep,
		completedKnowledgeSteps,
		selectedKnowledgeSources,
		aiEmployeeLaunched,
		businessHours,
		businessInfo,
		onboardingRestored
	]);
	const [businessProfile, setBusinessProfile] = (0, import_react.useState)({
		name: "Sokoos Internet",
		industry: "Telecom & Connectivity",
		description: "We help local businesses stay online with reliable internet plans, fast support, and easy onboarding.",
		phone: "+254 20 3949 0101",
		email: "support@sokoos.co.ke",
		location: "Nairobi, Kenya",
		businessHours: "Mon–Fri, 8:00 AM - 6:00 PM",
		serviceAreas: "Nairobi, Kiambu, Thika",
		paymentMethods: {
			mPesa: true,
			cash: true,
			bankTransfer: true
		}
	});
	const [imageLabel, setImageLabel] = (0, import_react.useState)("No file selected");
	const [customerCollapsed, setCustomerCollapsed] = (0, import_react.useState)(false);
	const router = useRouter();
	const getSelectionFromPath = (pathname) => {
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
	(0, import_react.useEffect)(() => {
		const pathname = router.state.location.pathname;
		const nextSelection = getSelectionFromPath(pathname);
		setSelected(nextSelection);
		if (nextSelection === "Training") setActiveWorkspaceSection("Identity");
	}, [router.state.location.pathname]);
	const handleNavSelection = (label, href) => {
		if (label === "Training") {
			setSelected("Training");
			setActiveWorkspaceSection("Identity");
			if (href) router.navigate({ to: href });
			return;
		}
		if (label === "Performance") {
			setSelected("Performance");
			if (href) router.navigate({ to: href });
			return;
		}
		setSelected(label);
		if (href) router.navigate({ to: href });
	};
	const renderSidebarNavItems = (variant) => {
		const isCompact = variant === "icon";
		const isMobile = variant === "mobile";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: isCompact ? "space-y-2" : isMobile ? "space-y-1" : "space-y-2",
			children: NAV_ITEMS.map((item) => {
				const isParent = Boolean(item.children);
				const isParentActive = isParent && (selected === "AI Employee" || selected === "Training" || selected === "Performance");
				const isExpanded = expandedNavItem === item.label;
				const parentActive = isParent ? isParentActive : selected === item.label;
				const iconClass = isCompact || isMobile ? "h-4 w-4" : "h-5 w-5";
				if (!isParent) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => handleNavSelection(item.label, item.href),
					title: item.label,
					"aria-label": item.label,
					className: isCompact ? `w-full flex items-center justify-center rounded-[20px] p-2 text-sm font-medium transition duration-200 ${parentActive ? "bg-[#ECFDF5] text-[#047857] shadow-sm" : "text-[#6B7280] hover:bg-[#EFF6FF]"}` : isMobile ? `w-full text-left flex items-center gap-2.5 rounded-[20px] px-3 py-2 text-sm font-medium transition duration-200 ${parentActive ? "bg-[#F0FDF4] text-[#065F46] shadow-sm ring-1 ring-[#D1FAE5]/40" : "text-[#475569] hover:bg-[#EFF6FF] hover:text-[#111827]"}` : `w-full text-left flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium transition duration-200 ${parentActive ? "bg-[#ECFDF5] text-[#047857]" : "text-[#475569] hover:bg-[#EFF6FF]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { className: `${iconClass} ${parentActive ? "text-[#059669] opacity-100" : "text-[#6B7280] opacity-90"}` }), !isCompact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
				}) }, item.label);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setSelected("AI Employee");
							if (expandedNavItem === item.label) setExpandedNavItem(null);
							else setExpandedNavItem(item.label);
						},
						title: item.label,
						"aria-label": item.label,
						className: isCompact ? `w-full flex items-center justify-center rounded-[20px] p-2 text-sm font-medium transition duration-200 ${parentActive ? "bg-[#ECFDF5] text-[#047857] shadow-sm" : "text-[#6B7280] hover:bg-[#EFF6FF]"}` : isMobile ? `w-full text-left flex items-center gap-2.5 rounded-[20px] px-3 py-2 text-sm font-medium transition duration-200 ${parentActive ? "bg-[#F0FDF4] text-[#065F46] shadow-sm ring-1 ring-[#D1FAE5]/40" : "text-[#475569] hover:bg-[#EFF6FF] hover:text-[#111827]"}` : `w-full text-left flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium transition duration-200 ${parentActive ? "bg-[#ECFDF5] text-[#047857]" : "text-[#475569] hover:bg-[#EFF6FF]"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { className: `${iconClass} ${parentActive ? "text-[#059669]" : "text-[#6B7280]"}` }),
							!isCompact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-left",
								children: item.label
							}),
							!isCompact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : "rotate-0"}` })
						]
					}), isExpanded && !isCompact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-1 space-y-1 pl-6",
						children: item.children?.map((child) => {
							const childActive = selected === child.label || child.label === "Training" && selected === "Training" || child.label === "Performance" && selected === "Performance";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setExpandedNavItem(item.label);
									handleNavSelection(child.label, child.href);
								},
								className: isMobile ? `w-full text-left flex items-center gap-2.5 rounded-[20px] px-3 py-2 text-sm font-medium transition duration-200 ${childActive ? "bg-[#F0FDF4] text-[#065F46] shadow-sm ring-1 ring-[#D1FAE5]/40" : "text-[#475569] hover:bg-[#EFF6FF] hover:text-[#111827]"}` : `w-full text-left flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium transition duration-200 ${childActive ? "bg-[#ECFDF5] text-[#047857]" : "text-[#475569] hover:bg-[#EFF6FF]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(child.Icon, { className: isMobile ? "h-4 w-4" : "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: child.label })]
							}) }, child.label);
						})
					})]
				}) }, item.label);
			})
		});
	};
	const handleLogout = () => {
		localStorage.removeItem("sokoos-auth");
		router.navigate({
			to: "/signin",
			replace: true
		});
	};
	const KnowledgeWorkspace = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "space-y-5",
		"aria-label": "Knowledge training",
		children
	});
	const integrationLessonSlugs = [
		"channels",
		"payments",
		"business-tools",
		"communication",
		"data-sync",
		"review"
	];
	const integrationLessonSequence = [
		"Channels",
		"Payments",
		"Business Tools",
		"Communication",
		"Data & Sync",
		"Review"
	];
	const integrationLessonCompletionNames = integrationLessonSequence;
	const integrationLessonSlugToStep = Object.fromEntries(integrationLessonSlugs.map((slug, index) => [slug, index]));
	const getIntegrationLessonStepFromPath = (pathname) => {
		if (!pathname.startsWith("/dashboard/integrations")) return 0;
		const slug = pathname.slice(23).replace(/^\/|\/+$/g, "");
		if (!slug) return 0;
		return integrationLessonSlugToStep[slug] ?? 0;
	};
	const getIntegrationLessonUrl = (step) => {
		return `/dashboard/integrations/${integrationLessonSlugs[Math.min(Math.max(step, 0), integrationLessonSlugs.length - 1)] ?? "channels"}`;
	};
	const pushIntegrationLessonUrl = (step) => {
		if (typeof window === "undefined") return;
		const url = getIntegrationLessonUrl(step);
		if (window.location.pathname !== url) window.history.pushState({}, "", url);
	};
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const normalizeIntegrationPath = () => {
			const pathname = window.location.pathname;
			if (!pathname.startsWith("/dashboard/integrations")) return;
			const nextStep = getIntegrationLessonStepFromPath(pathname);
			const nextUrl = getIntegrationLessonUrl(nextStep);
			setSelected("Integrations");
			setActiveIntegrationStep(nextStep);
			if (pathname !== nextUrl) window.history.replaceState({}, "", nextUrl);
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
	const focusIntegrationLesson = (step, pushUrl = true) => {
		setActiveIntegrationStep(step);
		if (pushUrl) pushIntegrationLessonUrl(step);
		window.setTimeout(() => {
			const target = integrationLessonRef.current?.querySelector(`[data-lesson-index="${step}"]`);
			if (!target) return;
			target.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			target.querySelector("input, select, textarea, button")?.focus({ preventScroll: true });
		}, 0);
	};
	const completeIntegrationLesson = (step) => {
		setCompletedIntegrationSteps((current) => current.includes(step) ? current : [...current, step]);
		setCompletionToast(`${integrationLessonCompletionNames[step]} complete — your integrations training path is moving forward.`);
		window.setTimeout(() => setCompletionToast(null), 2200);
		if (step < integrationLessonSequence.length - 1) window.setTimeout(() => focusIntegrationLesson(step + 1), 500);
	};
	const integrationLessonCardClass = (step) => `rounded-[28px] border bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 sm:p-6 ${completedIntegrationSteps.includes(step) ? "border-[#86EFAC] shadow-[0_14px_34px_rgba(34,197,94,0.14)]" : "border-[#E5E7EB]"}`;
	const canContinueIntegrationLesson = (_step) => true;
	const canContinueKnowledgeLesson = (step) => {
		if (step === 0) return selectedKnowledgeSources.length > 0;
		return true;
	};
	(0, import_react.useEffect)(() => {
		const maxStep = knowledgeLessonSequence.length - 1;
		if (activeKnowledgeStep > maxStep) setActiveKnowledgeStep(maxStep);
		setCompletedKnowledgeSteps((current) => current.filter((step) => step >= 0 && step <= maxStep));
	}, [knowledgeLessonSequence.length]);
	const KnowledgeLessonTabs = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-20 rounded-[24px] border border-[#E5E7EB] bg-white px-3 py-3 shadow-[0_6px_18px_rgba(15,23,42,0.04)]",
		"aria-label": "Knowledge onboarding progress",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-[#166534]",
					children: "Knowledge onboarding curriculum"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-base font-semibold text-[#111827]",
					children: "Teach your AI in a few focused lessons so it can answer with confidence."
				}),
				selectedKnowledgeSources.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap items-center gap-2 text-sm text-[#475569]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-[#111827]",
						children: "Selected sources:"
					}), selectedKnowledgeSources.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-[#F3F4F6] px-2.5 py-1 text-xs font-semibold text-[#475569]",
						children: source === "company" ? "Company Information" : source === "faqs" ? "FAQs" : source === "documents" ? "Documents" : source === "website" ? "Website" : source
					}, source))]
				}) : null
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#166534]",
				children: [
					completedKnowledgeSteps.length,
					"/",
					knowledgeLessonSequence.length,
					" lessons complete"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-wrap gap-2",
			children: knowledgeLessonSequence.map((lesson, index) => {
				const active = activeKnowledgeStep === index;
				const completed = completedKnowledgeSteps.includes(index);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => focusKnowledgeLesson(index),
					"aria-current": active ? "step" : void 0,
					className: `inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${active ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm" : completed ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${completed ? "bg-[#22C55E] text-white" : active ? "bg-[#111827] text-white" : "bg-[#F8FAFC] text-[#64748B]"}`,
							children: completed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px]",
								children: index + 1
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lesson }),
						completed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.12em]",
							children: "Done"
						})
					]
				}, lesson);
			})
		})]
	});
	const IntegrationLessonTabs = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-20 rounded-[24px] border border-[#E5E7EB] bg-white px-3 py-3 shadow-[0_6px_18px_rgba(15,23,42,0.04)]",
		"aria-label": "Integrations onboarding progress",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-[#166534]",
					children: "Integrations training curriculum"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-base font-semibold text-[#111827]",
					children: "Guide your AI through the systems it can connect to and use."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-[#475569]",
					children: "Complete each lesson to confirm the right channels, payments, tools, and data sources are connected."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#166534]",
				children: [
					completedIntegrationSteps.length,
					"/",
					integrationLessonSequence.length,
					" lessons complete"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-wrap gap-2",
			children: integrationLessonSequence.map((lesson, index) => {
				const active = activeIntegrationStep === index;
				const completed = completedIntegrationSteps.includes(index);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => focusIntegrationLesson(index),
					"aria-current": active ? "step" : void 0,
					className: `inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${active ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm" : completed ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${completed ? "bg-[#22C55E] text-white" : active ? "bg-[#111827] text-white" : "bg-[#F8FAFC] text-[#64748B]"}`,
							children: completed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px]",
								children: index + 1
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lesson }),
						completed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.12em]",
							children: "Done"
						})
					]
				}, lesson);
			})
		})]
	});
	const CurrentIntegrationLesson = () => {
		const lessonConfigs = [
			{
				title: "Channels",
				description: "Connect the customer channels where the AI communicates.",
				Icon: MessageCircle,
				section: "Channels"
			},
			{
				title: "Payments",
				description: "Connect payment systems the AI can use for payment-related tasks.",
				Icon: Tag,
				section: "Payments"
			},
			{
				title: "Business Tools",
				description: "Connect the business systems the AI can use to perform work.",
				Icon: Box,
				section: "Business Tools"
			},
			{
				title: "Communication",
				description: "Connect communication and marketing tools the AI can use to keep customers and the team informed.",
				Icon: Megaphone,
				section: "Communication & Marketing"
			},
			{
				title: "Data & Sync",
				description: "Connect external data sources that keep the AI's business information up to date.",
				Icon: Paperclip,
				section: "Data & Knowledge"
			},
			{
				title: "Review",
				description: "Review connected integrations and integration readiness before completing training.",
				Icon: Check,
				section: "Review"
			}
		];
		const activeLesson = lessonConfigs[activeIntegrationStep] ?? lessonConfigs[0];
		const lessonItems = activeLesson.section === "Review" ? [] : (getIntegrationSection(activeLesson.section)?.items ?? []).map((item) => ({
			id: item.id,
			label: item.name,
			Icon: item.Icon,
			description: item.description,
			status: getIntegrationStatus(item.id)
		}));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: integrationLessonRef,
			"data-lesson-index": String(activeIntegrationStep),
			className: integrationLessonCardClass(activeIntegrationStep),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(activeLesson.Icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[20px] font-semibold text-[#111827]",
							children: activeLesson.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-[#6B7280]",
							children: activeLesson.description
						})] })]
					}),
					lessonItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid gap-3 sm:grid-cols-2",
						children: lessonItems.map((item) => renderIntegrationCard(item))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-[24px] border border-[#E5E7EB] bg-[#F8FAFC] p-5 text-sm text-[#475569]",
						children: "Review your connected integrations and confirm your AI has the systems it needs."
					}),
					activeLesson.title === "Review" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5 rounded-[24px] border border-[#EEF2F6] bg-white p-5",
						children: [
							{
								title: "Channels",
								summary: getIntegrationSummaryForSection("Channels")
							},
							{
								title: "Payments",
								summary: getIntegrationSummaryForSection("Payments")
							},
							{
								title: "Business Tools",
								summary: getIntegrationSummaryForSection("Business Tools")
							},
							{
								title: "Communication",
								summary: getIntegrationSummaryForSection("Communication & Marketing")
							},
							{
								title: "Data & Sync",
								summary: getIntegrationSummaryForSection("Data & Knowledge")
							}
						].map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[20px] border border-[#E5E7EF] bg-[#F8FAFC] p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-[#111827]",
									children: group.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-[#64748B]",
									children: [group.summary.total, " integrations"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid gap-3 sm:grid-cols-4",
								children: [
									{
										label: "Connected",
										value: group.summary.connected
									},
									{
										label: "Available",
										value: group.summary.available
									},
									{
										label: "Setup required",
										value: group.summary.setup_required
									},
									{
										label: "Coming soon",
										value: group.summary.coming_soon
									}
								].map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-[16px] border border-[#E5E7EF] bg-white p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-[0.2em] text-[#64748B]",
										children: metric.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-2xl font-semibold text-[#111827]",
										children: metric.value
									})]
								}, metric.label))
							})]
						}, group.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-t border-[#EEF2F6] pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => focusIntegrationLesson(activeIntegrationStep - 1),
							disabled: activeIntegrationStep === 0,
							className: "text-sm font-semibold text-[#64748B] transition hover:text-[#111827] disabled:cursor-not-allowed disabled:opacity-45",
							children: "Back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => completeIntegrationLesson(activeIntegrationStep),
							disabled: !canContinueIntegrationLesson(activeIntegrationStep),
							className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155] disabled:cursor-not-allowed disabled:opacity-45",
							children: [activeIntegrationStep === integrationLessonSequence.length - 1 ? "Finish training" : "Save & Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
						})]
					})
				]
			})
		});
	};
	const SkillsLessonTabs = () => {
		const [activeSkillsStep, setActiveSkillsStep] = (0, import_react.useState)(0);
		const [communicationCapabilities, setCommunicationCapabilities] = (0, import_react.useState)([
			{
				id: "comm-1",
				name: "Answer customer questions",
				description: "Enable the AI to respond to customer inquiries using your configured identity, knowledge, and catalogue settings.",
				enabled: true
			},
			{
				id: "comm-2",
				name: "Explain products and services",
				description: "Allow the AI to describe available products and services using your existing catalogue information.",
				enabled: true
			},
			{
				id: "comm-3",
				name: "Provide business information",
				description: "Permit the AI to share business details from your configured identity profile without creating new business information fields.",
				enabled: false
			},
			{
				id: "comm-4",
				name: "Handle common customer requests",
				description: "Let the AI manage frequent requests based on policies, FAQs, and configured customer workflows.",
				enabled: false
			},
			{
				id: "comm-5",
				name: "Communicate in configured languages",
				description: "Allow the AI to speak with customers in languages already set up in your identity settings.",
				enabled: true
			}
		]);
		const [leadsSalesCapabilities, setLeadsSalesCapabilities] = (0, import_react.useState)([
			{
				id: "sales-1",
				name: "Capture leads",
				description: "Enable the AI to collect lead contact information and interest through customer interactions.",
				enabled: true
			},
			{
				id: "sales-2",
				name: "Qualify leads",
				description: "Allow the AI to assess lead readiness using configured identity and customer context, without adding qualification flows.",
				enabled: true
			},
			{
				id: "sales-3",
				name: "Recommend products or services",
				description: "Permit the AI to suggest relevant products or services based on catalogue data and customer needs.",
				enabled: false
			},
			{
				id: "sales-4",
				name: "Upsell",
				description: "Allow the AI to offer higher-value items or upgrades using existing catalogue and business information.",
				enabled: false
			},
			{
				id: "sales-5",
				name: "Cross-sell",
				description: "Enable the AI to suggest complementary products and services from your catalogue.",
				enabled: false
			},
			{
				id: "sales-6",
				name: "Collect customer requirements",
				description: "Allow the AI to gather customer needs and preferences without adding new CRM fields.",
				enabled: true
			},
			{
				id: "sales-7",
				name: "Request human follow-up",
				description: "Allow the AI to flag conversations that should be continued by a person when needed.",
				enabled: false
			}
		]);
		const skillsLessons = [
			"Communication",
			"Leads & Sales",
			"Bookings",
			"Orders & Payments",
			"Customer Support",
			"Follow-up",
			"Review"
		];
		const toggleCommunicationCapability = (id) => {
			setCommunicationCapabilities((items) => items.map((item) => item.id === id ? {
				...item,
				enabled: !item.enabled
			} : item));
		};
		const toggleLeadsSalesCapability = (id) => {
			setLeadsSalesCapabilities((items) => items.map((item) => item.id === id ? {
				...item,
				enabled: !item.enabled
			} : item));
		};
		const [bookingCapabilities, setBookingCapabilities] = (0, import_react.useState)([
			{
				id: "book-1",
				name: "Book appointments",
				description: "Enable the AI to create appointments using your connected calendar integration.",
				requires: ["google_calendar", "outlook"],
				enabled: false
			},
			{
				id: "book-2",
				name: "Check availability",
				description: "Allow the AI to verify availability before booking without adding new scheduling fields.",
				requires: ["google_calendar", "outlook"],
				enabled: false
			},
			{
				id: "book-3",
				name: "Reschedule appointments",
				description: "Permit the AI to move appointments when a connected calendar integration is available.",
				requires: ["google_calendar", "outlook"],
				enabled: false
			},
			{
				id: "book-4",
				name: "Cancel appointments",
				description: "Allow the AI to cancel bookings when appointment integration is configured.",
				requires: ["google_calendar", "outlook"],
				enabled: false
			},
			{
				id: "book-5",
				name: "Send booking confirmations",
				description: "Let the AI send confirmations through your connected communication or calendar integrations.",
				requires: ["google_calendar", "outlook"],
				enabled: false
			}
		]);
		const integrationAvailable = (requires) => !!requires && requires.some((id) => isIntegrationConnected(id));
		const getBookingStatus = (requires, enabled) => {
			if (!requires || !integrationAvailable(requires)) return "Requires integration";
			return enabled ? "Enabled" : "Available";
		};
		const toggleBookingCapability = (id) => {
			setBookingCapabilities((items) => items.map((item) => item.id === id ? {
				...item,
				enabled: !item.enabled
			} : item));
		};
		const [ordersPaymentsCapabilities, setOrdersPaymentsCapabilities] = (0, import_react.useState)([
			{
				id: "order-1",
				name: "Create orders",
				description: "Enable the AI to initiate orders using your connected order or commerce integration.",
				requires: [
					"shopify",
					"woocommerce",
					"custom_api"
				],
				enabled: false
			},
			{
				id: "order-2",
				name: "Check order status",
				description: "Allow the AI to look up order status using existing order integrations.",
				requires: [
					"shopify",
					"woocommerce",
					"custom_api"
				],
				enabled: false
			},
			{
				id: "order-3",
				name: "Generate quotations",
				description: "Permit the AI to prepare order quotes using your current catalogue and commerce integrations.",
				requires: [
					"whatsapp",
					"shopify",
					"custom_api",
					"woocommerce"
				].filter(Boolean),
				enabled: false
			},
			{
				id: "order-4",
				name: "Send payment instructions",
				description: "Allow the AI to provide payment directions when payment integrations are available.",
				requires: [
					"mpesa",
					"stripe",
					"paypal",
					"flutterwave"
				].filter(Boolean),
				enabled: false
			},
			{
				id: "order-5",
				name: "Confirm payment",
				description: "Enable the AI to mark payments as confirmed when a connected payment integration exists.",
				requires: [
					"mpesa",
					"stripe",
					"paypal",
					"flutterwave"
				].filter(Boolean),
				enabled: false
			},
			{
				id: "order-6",
				name: "Update order information",
				description: "Allow the AI to update order details using your connected commerce integrations.",
				requires: [
					"shopify",
					"woocommerce",
					"custom_api"
				],
				enabled: false
			},
			{
				id: "order-7",
				name: "Cancel orders",
				description: "Permit the AI to cancel orders when order management integrations are configured.",
				requires: [
					"shopify",
					"woocommerce",
					"custom_api"
				],
				enabled: false
			}
		]);
		const [customerSupportCapabilities, setCustomerSupportCapabilities] = (0, import_react.useState)([
			{
				id: "support-1",
				name: "Answer support questions",
				description: "Enable the AI to respond to support inquiries using existing Knowledge and Policies content.",
				enabled: true
			},
			{
				id: "support-2",
				name: "Troubleshoot common issues",
				description: "Allow the AI to offer troubleshooting steps for known problems based on configured knowledge.",
				enabled: false
			},
			{
				id: "support-3",
				name: "Explain documented solutions",
				description: "Permit the AI to explain support solutions that already exist in your Knowledge workspace.",
				enabled: true
			},
			{
				id: "support-4",
				name: "Create support requests",
				description: "Allow the AI to record customer issues and create support requests without adding a new support system.",
				enabled: false
			},
			{
				id: "support-5",
				name: "Collect information for support",
				description: "Enable the AI to gather customer details needed by support agents while relying on existing Policies and Knowledge.",
				enabled: true
			},
			{
				id: "support-6",
				name: "Escalate to a human",
				description: "Allow the AI to escalate issues to a human when a request exceeds its configured support capabilities.",
				enabled: true
			}
		]);
		const [followUpCapabilities, setFollowUpCapabilities] = (0, import_react.useState)([
			{
				id: "follow-1",
				name: "Follow up with leads",
				description: "Enable the AI to follow up on leads through connected messaging channels.",
				requires: [
					"whatsapp",
					"facebook",
					"instagram"
				],
				enabled: false
			},
			{
				id: "follow-2",
				name: "Send appointment reminders",
				description: "Allow the AI to send reminders using available messaging integrations.",
				requires: [
					"whatsapp",
					"facebook",
					"instagram"
				],
				enabled: false
			},
			{
				id: "follow-3",
				name: "Send order updates",
				description: "Permit the AI to notify customers about order changes through connected channels.",
				requires: [
					"whatsapp",
					"facebook",
					"instagram"
				],
				enabled: false
			},
			{
				id: "follow-4",
				name: "Re-engage inactive conversations",
				description: "Allow the AI to re-open inactive customer conversations when messaging integration is available.",
				requires: [
					"whatsapp",
					"facebook",
					"instagram"
				],
				enabled: false
			},
			{
				id: "follow-5",
				name: "Request additional information",
				description: "Enable the AI to ask customers for more details after an interaction.",
				requires: [
					"whatsapp",
					"facebook",
					"instagram"
				],
				enabled: true
			},
			{
				id: "follow-6",
				name: "Notify a human when follow-up is required",
				description: "Allow the AI to alert a human team member when it cannot complete follow-up on its own.",
				enabled: true
			}
		]);
		const getOrderPaymentStatus = (requires, enabled) => {
			if (!requires || !integrationAvailable(requires)) return "Requires integration";
			return enabled ? "Enabled" : "Available";
		};
		const toggleOrderPaymentCapability = (id) => {
			setOrdersPaymentsCapabilities((items) => items.map((item) => item.id === id ? {
				...item,
				enabled: !item.enabled
			} : item));
		};
		const toggleCustomerSupportCapability = (id) => {
			setCustomerSupportCapabilities((items) => items.map((item) => item.id === id ? {
				...item,
				enabled: !item.enabled
			} : item));
		};
		const toggleFollowUpCapability = (id) => {
			setFollowUpCapabilities((items) => items.map((item) => item.id === id ? {
				...item,
				enabled: !item.enabled
			} : item));
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-[24px] border border-[#E5E7EB] bg-white p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-[#111827]",
						children: "Skills lessons"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-[#6B7280]",
						children: "Select the Skills lesson you want to focus on."
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap items-center gap-3",
					children: skillsLessons.map((lesson, index) => {
						const active = index === activeSkillsStep;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveSkillsStep(index),
							"aria-current": active ? "step" : void 0,
							className: `inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition-colors duration-200 ${active ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lesson })
						}, lesson);
					})
				}),
				activeSkillsStep === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[24px] border border-[#E5E7EB] bg-white p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#111827]",
							children: "Communication"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#6B7280]",
							children: "Choose the communication tasks your AI employee can handle for customers."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
						children: communicationCapabilities.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#111827]",
								children: capability.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-[#64748B]",
								children: capability.description
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-sm font-medium ${capability.enabled ? "text-[#16A34A]" : "text-[#64748B]"}`,
									children: capability.enabled ? "Enabled" : "Disabled"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative inline-flex items-center cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: capability.enabled,
											onChange: () => toggleCommunicationCapability(capability.id),
											className: "sr-only peer"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-11 h-6 rounded-full bg-[#E5E7EB] peer-checked:bg-[#22C55E] peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm peer-checked:translate-x-5 transform transition-transform" })
									]
								})]
							})]
						}, capability.id))
					})]
				}),
				activeSkillsStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[24px] border border-[#E5E7EB] bg-white p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#111827]",
							children: "Leads & Sales"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#6B7280]",
							children: "Choose the sales and lead-management tasks your AI employee can perform."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
						children: leadsSalesCapabilities.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#111827]",
								children: capability.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-[#64748B]",
								children: capability.description
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-sm font-medium ${capability.enabled ? "text-[#16A34A]" : "text-[#64748B]"}`,
									children: capability.enabled ? "Enabled" : "Disabled"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative inline-flex items-center cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: capability.enabled,
											onChange: () => toggleLeadsSalesCapability(capability.id),
											className: "sr-only peer"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-11 h-6 rounded-full bg-[#E5E7EB] peer-checked:bg-[#22C55E] peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm peer-checked:translate-x-5 transform transition-transform" })
									]
								})]
							})]
						}, capability.id))
					})]
				}),
				activeSkillsStep === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[24px] border border-[#E5E7EB] bg-white p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#111827]",
							children: "Bookings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#6B7280]",
							children: "Choose the booking and scheduling tasks your AI employee can perform."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
						children: bookingCapabilities.map((capability) => {
							const status = getBookingStatus(capability.requires, capability.enabled);
							const available = integrationAvailable(capability.requires);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-between gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-[#111827]",
										children: capability.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-[#64748B]",
										children: capability.description
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-sm font-medium ${status === "Enabled" ? "text-[#16A34A]" : status === "Available" ? "text-[#0F766E]" : "text-[#B91C1C]"}`,
											children: status
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "relative inline-flex items-center cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: capability.enabled && available,
													onChange: () => toggleBookingCapability(capability.id),
													className: "sr-only peer",
													disabled: !available
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-11 h-6 rounded-full ${available ? "bg-[#E5E7EB] peer-checked:bg-[#22C55E]" : "bg-[#F1F5F9]"} peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors` }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform ${available ? "peer-checked:translate-x-5" : ""}` })
											]
										})]
									}),
									!available && capability.requires && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-[#B91C1C]",
										children: ["Requires: ", capability.requires.map((id) => getIntegrationName(id)).join(", ")]
									})
								]
							}, capability.id);
						})
					})]
				}),
				activeSkillsStep === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[24px] border border-[#E5E7EB] bg-white p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#111827]",
							children: "Orders & Payments"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#6B7280]",
							children: "Choose the order and payment-related tasks your AI employee can perform."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
						children: ordersPaymentsCapabilities.map((capability) => {
							const status = getOrderPaymentStatus(capability.requires, capability.enabled);
							const available = integrationAvailable(capability.requires);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-between gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-[#111827]",
										children: capability.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-[#64748B]",
										children: capability.description
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-sm font-medium ${status === "Enabled" ? "text-[#16A34A]" : status === "Available" ? "text-[#0F766E]" : "text-[#B91C1C]"}`,
											children: status
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "relative inline-flex items-center cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: capability.enabled && available,
													onChange: () => toggleOrderPaymentCapability(capability.id),
													className: "sr-only peer",
													disabled: !available
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-11 h-6 rounded-full ${available ? "bg-[#E5E7EB] peer-checked:bg-[#22C55E]" : "bg-[#F1F5F9]"} peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors` }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform ${available ? "peer-checked:translate-x-5" : ""}` })
											]
										})]
									}),
									!available && capability.requires && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-[#B91C1C]",
										children: ["Requires: ", capability.requires.map((id) => getIntegrationName(id)).join(", ")]
									})
								]
							}, capability.id);
						})
					})]
				}),
				activeSkillsStep === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[24px] border border-[#E5E7EB] bg-white p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#111827]",
							children: "Customer Support"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#6B7280]",
							children: "Choose the support tasks your AI employee can handle before involving a human."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
						children: customerSupportCapabilities.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#111827]",
								children: capability.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-[#64748B]",
								children: capability.description
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-sm font-medium ${capability.enabled ? "text-[#16A34A]" : "text-[#64748B]"}`,
									children: capability.enabled ? "Enabled" : "Disabled"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative inline-flex items-center cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: capability.enabled,
											onChange: () => toggleCustomerSupportCapability(capability.id),
											className: "sr-only peer"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-11 h-6 rounded-full bg-[#E5E7EB] peer-checked:bg-[#22C55E] peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm peer-checked:translate-x-5 transform transition-transform" })
									]
								})]
							})]
						}, capability.id))
					})]
				}),
				activeSkillsStep === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[24px] border border-[#E5E7EB] bg-white p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#111827]",
							children: "Follow-up"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#6B7280]",
							children: "Choose the follow-up tasks your AI employee can perform after a customer interaction."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
						children: followUpCapabilities.map((capability) => {
							const available = capability.requires ? integrationAvailable(capability.requires) : true;
							const status = capability.requires ? available ? capability.enabled ? "Enabled" : "Available" : "Requires integration" : capability.enabled ? "Enabled" : "Available";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-between gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-[#111827]",
										children: capability.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-[#64748B]",
										children: capability.description
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-sm font-medium ${status === "Enabled" ? "text-[#16A34A]" : status === "Available" ? "text-[#0F766E]" : "text-[#B91C1C]"}`,
											children: status
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "relative inline-flex items-center cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: capability.enabled && available,
													onChange: () => toggleFollowUpCapability(capability.id),
													className: "sr-only peer",
													disabled: !available
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-11 h-6 rounded-full ${available ? "bg-[#E5E7EB] peer-checked:bg-[#22C55E]" : "bg-[#F1F5F9]"} peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors` }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform ${available ? "peer-checked:translate-x-5" : ""}` })
											]
										})]
									}),
									!available && capability.requires && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-[#B91C1C]",
										children: ["Requires: ", capability.requires.map((id) => getIntegrationName(id)).join(", ")]
									})
								]
							}, capability.id);
						})
					})]
				}),
				activeSkillsStep === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[24px] border border-[#E5E7EB] bg-white p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#111827]",
								children: "Review"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-[#6B7280]",
								children: "Review what your AI employee can do before continuing."
							})]
						}),
						[
							{
								title: "Communication",
								items: communicationCapabilities
							},
							{
								title: "Leads & Sales",
								items: leadsSalesCapabilities
							},
							{
								title: "Bookings",
								items: bookingCapabilities
							},
							{
								title: "Orders & Payments",
								items: ordersPaymentsCapabilities
							},
							{
								title: "Customer Support",
								items: customerSupportCapabilities
							},
							{
								title: "Follow-up",
								items: followUpCapabilities
							}
						].map((section) => {
							const enabled = section.items.filter((capability) => capability.enabled);
							const requiresIntegration = section.items.filter((capability) => capability.requires && !integrationAvailable(capability.requires));
							const notEnabled = section.items.filter((capability) => !capability.enabled && !(capability.requires && !integrationAvailable(capability.requires)));
							const warnings = section.items.filter((capability) => capability.enabled && capability.requires && !integrationAvailable(capability.requires));
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[20px] border border-[#E5E7EB] bg-white p-5 shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#111827]",
											children: section.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-sm text-[#6B7280]",
											children: [section.title, " capabilities grouped by current status."]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#166534]",
											children: [section.items.length, " total"]
										})]
									}),
									warnings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 rounded-[16px] border border-[#FCA5A5] bg-[#FEF2F2] p-4 text-sm text-[#B91C1C]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: "Warning"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1",
											children: [warnings.map((capability) => capability.name).join(", "), " requires a connected integration before it can be fully enabled."]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 md:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#111827]",
												children: "Enabled capabilities"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-2 space-y-2 text-sm text-[#475569]",
												children: enabled.length > 0 ? enabled.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "rounded-[12px] border border-[#E5E7EB] bg-[#F8FAFB] px-3 py-2",
													children: capability.name
												}, capability.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "text-[#94A3B8]",
													children: "None yet"
												})
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#111827]",
												children: "Capabilities requiring integration"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-2 space-y-2 text-sm text-[#475569]",
												children: requiresIntegration.length > 0 ? requiresIntegration.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "rounded-[12px] border border-[#E5E7EB] bg-[#FFF7ED] px-3 py-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-medium text-[#92400E]",
														children: capability.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-xs text-[#7C2D12]",
														children: ["Requires: ", capability.requires?.map((id) => getIntegrationName(id)).join(", ")]
													})]
												}, capability.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "text-[#94A3B8]",
													children: "None"
												})
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#111827]",
												children: "Capabilities not enabled"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-2 space-y-2 text-sm text-[#475569]",
												children: notEnabled.length > 0 ? notEnabled.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "rounded-[12px] border border-[#E5E7EB] bg-[#F8FAFB] px-3 py-2",
													children: capability.name
												}, capability.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "text-[#94A3B8]",
													children: "None"
												})
											})] })
										]
									})
								]
							}, section.title);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									handleSaveChanges();
									setActiveWorkspaceSection("Policies");
								},
								className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]",
								children: "Save & Continue"
							})
						})
					]
				})
			]
		});
	};
	const SalesLessonTabs = () => {
		const [activeSalesStep, setActiveSalesStep] = (0, import_react.useState)(0);
		const initialObjectives = [
			"Sell products or services",
			"Generate qualified leads",
			"Book appointments",
			"Collect customer information",
			"Answer pre-sales questions",
			"Increase order value (Upsell)",
			"Retain existing customers"
		];
		const salesLessons = [
			"Sales Objectives",
			"Customer Qualification",
			"Sales Strategy",
			"Pricing & Negotiation",
			"Human Handoff",
			"Closing & Follow-up",
			"Review"
		];
		const [objectives, setObjectives] = (0, import_react.useState)(initialObjectives.map((label, i) => ({
			id: `obj-${i + 1}`,
			label,
			selected: false
		})));
		const dragId = (0, import_react.useRef)(null);
		const onToggle = (id) => {
			setObjectives((s) => s.map((o) => o.id === id ? {
				...o,
				selected: !o.selected
			} : o));
		};
		const onDragStart = (e, id) => {
			dragId.current = id;
			e.dataTransfer.effectAllowed = "move";
		};
		const onDragOver = (e) => {
			e.preventDefault();
			e.dataTransfer.dropEffect = "move";
		};
		const onDrop = (e, targetId) => {
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
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-base font-semibold text-[#111827]",
					children: "Teach your AI how to sell with focused lessons."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap items-center gap-3",
					children: salesLessons.map((lesson, index) => {
						const active = index === activeSalesStep;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveSalesStep(index),
							"aria-current": active ? "step" : void 0,
							className: `inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition-colors duration-200 ${active ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lesson })
						}, lesson);
					})
				}),
				activeSalesStep === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[18px] font-semibold text-[#111827]",
								children: "Sales Objectives"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-[#6B7280]",
								children: "Choose what success looks like for your AI employee. These objectives help it prioritize customer conversations."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3",
							children: objectives.map((obj, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								draggable: true,
								onDragStart: (e) => onDragStart(e, obj.id),
								onDragOver,
								onDrop: (e) => onDrop(e, obj.id),
								className: "flex items-center gap-3 rounded-[12px] border border-[#E5E7EB] bg-white p-3 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "select-none text-sm font-semibold text-[#64748B]",
										children: idx + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-3 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: obj.selected,
											onChange: () => onToggle(obj.id),
											className: "h-4 w-4 rounded border border-[#E5E7EB] text-[#111827]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-[#111827]",
											children: obj.label
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ml-auto text-xs text-[#94A3B8]",
									children: "Drag to reorder priority"
								})]
							}, obj.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-[#64748B]",
							children: "Your AI will prioritize higher-ranked objectives during conversations."
						})
					]
				}),
				activeSalesStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[18px] font-semibold text-[#111827]",
							children: "Customer Qualification"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-[#6B7280]",
							children: "Teach your AI what information to collect before making recommendations."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionsList, {})]
				}),
				activeSalesStep === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[18px] font-semibold text-[#111827]",
								children: "Sales Strategy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-[#6B7280]",
								children: "Decide how your AI recommends products and services during conversations."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StrategyOptions, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-[#64748B]",
							children: "Your AI will use these strategies together with your catalogue."
						})
					]
				}),
				activeSalesStep === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[18px] font-semibold text-[#111827]",
							children: "Pricing & Negotiation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-[#6B7280]",
							children: "Define what pricing information and negotiation authority your AI is allowed to use."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingNegotiation, {})]
				}),
				activeSalesStep === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[18px] font-semibold text-[#111827]",
								children: "Human Handoff"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-[#6B7280]",
								children: "Choose when your AI should stop the conversation and involve a human."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HumanHandoffOptions, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-[#64748B]",
							children: "The AI will immediately notify the assigned team member when these situations occur."
						})
					]
				}),
				activeSalesStep === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[18px] font-semibold text-[#111827]",
								children: "Closing & Follow-up"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-[#6B7280]",
								children: "Teach your AI how to end successful conversations and follow up with potential customers."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingFollowUp, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-[#64748B]",
							children: "Follow-ups should only be sent if the customer has not completed the intended action."
						})
					]
				}),
				activeSalesStep === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[18px] font-semibold text-[#111827]",
								children: "Review"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-[#6B7280]",
								children: "Review your AI employee's sales behaviour before continuing."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3",
							children: [
								{
									key: "objectives",
									label: "Sales Objectives",
									configured: objectives.some((o) => o.selected) || activeSalesStep > 0
								},
								{
									key: "qualification",
									label: "Customer Qualification",
									configured: activeSalesStep > 1
								},
								{
									key: "strategy",
									label: "Sales Strategy",
									configured: activeSalesStep > 2
								},
								{
									key: "pricing",
									label: "Pricing & Negotiation",
									configured: activeSalesStep > 3
								},
								{
									key: "handoff",
									label: "Human Handoff",
									configured: activeSalesStep > 4
								},
								{
									key: "closing",
									label: "Closing & Follow-up",
									configured: activeSalesStep > 5
								}
							].map((sec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-[12px] border border-[#E5E7EB] bg-white p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-[#111827]",
									children: sec.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-3",
									children: sec.configured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#166534]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), "Configured"]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-[#94A3B8]",
										children: "Not configured"
									})
								})]
							}, sec.key))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex items-center justify-end gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									handleSaveChanges();
									setActiveWorkspaceSection("Policies");
								},
								className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]",
								children: "Save & Continue to Policies"
							})
						})
					]
				})
			]
		});
	};
	const QuestionsList = () => {
		const [questions, setQuestions] = (0, import_react.useState)([
			{
				id: "q-1",
				text: "Budget",
				required: false
			},
			{
				id: "q-2",
				text: "Preferred location",
				required: false
			},
			{
				id: "q-3",
				text: "Timeline",
				required: false
			},
			{
				id: "q-4",
				text: "Company size",
				required: false
			},
			{
				id: "q-5",
				text: "Industry",
				required: false
			}
		]);
		const addQuestion = () => {
			const id = `q-${Date.now()}`;
			setQuestions((s) => [...s, {
				id,
				text: "New question",
				required: false,
				editing: true
			}]);
		};
		const toggleRequired = (id) => setQuestions((s) => s.map((q) => q.id === id ? {
			...q,
			required: !q.required
		} : q));
		const deleteQuestion = (id) => setQuestions((s) => s.filter((q) => q.id !== id));
		const startEdit = (id) => setQuestions((s) => s.map((q) => q.id === id ? {
			...q,
			editing: true
		} : q));
		const saveEdit = (id, text) => setQuestions((s) => s.map((q) => q.id === id ? {
			...q,
			text,
			editing: false
		} : q));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: questions.map((q, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 rounded-[12px] border border-[#E5E7EB] bg-white p-3 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "select-none text-sm font-semibold text-[#64748B]",
					children: idx + 1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: q.editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							defaultValue: q.text,
							className: "w-full rounded-md border border-[#E5E7EB] px-2 py-1 text-sm",
							onBlur: (e) => saveEdit(q.id, e.target.value)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => saveEdit(q.id, q.text),
							className: "rounded-md border border-[#E5E7EB] px-2 py-1 text-sm",
							children: "Save"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-[#111827]",
							children: q.text
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-4 flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "inline-flex items-center gap-2 text-sm text-[#475569]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: q.required,
										onChange: () => toggleRequired(q.id)
									}), " Required"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => startEdit(q.id),
									className: "rounded-[8px] border border-[#E5E7EB] px-2 py-1 text-xs",
									children: "Edit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => deleteQuestion(q.id),
									className: "rounded-[8px] border border-[#FECACA] px-2 py-1 text-xs text-[#B91C1C]",
									children: "Delete"
								})
							]
						})]
					})
				})]
			}, q.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-[#64748B]",
				children: "The AI should later use these questions during conversations."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: addQuestion,
				className: "inline-flex items-center gap-2 rounded-[10px] bg-[#111827] px-3 py-2 text-sm font-semibold text-white",
				children: "Add Question"
			})]
		})] });
	};
	const StrategyOptions = () => {
		const [options, setOptions] = (0, import_react.useState)([
			"Recommend the best match",
			"Recommend best sellers",
			"Recommend premium options",
			"Recommend budget alternatives",
			"Recommend complementary items",
			"Recommend promotional items",
			"Recommend newest items"
		].map((label, i) => ({
			id: `s-${i + 1}`,
			label,
			enabled: false
		})));
		const toggle = (id) => setOptions((s) => s.map((o) => o.id === id ? {
			...o,
			enabled: !o.enabled
		} : o));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-3 rounded-[12px] border border-[#E5E7EB] bg-white p-3 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-3 w-full cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: opt.enabled,
						onChange: () => toggle(opt.id),
						className: "h-4 w-4 rounded border border-[#E5E7EB] text-[#111827]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-[#111827]",
						children: opt.label
					})]
				})
			}, opt.id))
		});
	};
	const PricingNegotiation = () => {
		const [permissions, setPermissions] = (0, import_react.useState)([
			{
				id: "p-share",
				label: "Share prices",
				enabled: false
			},
			{
				id: "p-quote",
				label: "Generate quotations",
				enabled: false
			},
			{
				id: "p-discount",
				label: "Offer discounts",
				enabled: false
			},
			{
				id: "p-coupons",
				label: "Apply coupons",
				enabled: false
			},
			{
				id: "p-reserve",
				label: "Reserve inventory",
				enabled: false
			}
		]);
		const togglePerm = (id) => setPermissions((s) => s.map((x) => x.id === id ? {
			...x,
			enabled: !x.enabled
		} : x));
		const [maxDiscount, setMaxDiscount] = (0, import_react.useState)(10);
		const [approval, setApproval] = (0, import_react.useState)("above");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: permissions.map((perm) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-3 rounded-[12px] border border-[#E5E7EB] bg-white p-3 shadow-sm cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: perm.enabled,
						onChange: () => togglePerm(perm.id),
						className: "h-4 w-4 rounded border border-[#E5E7EB] text-[#111827]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-[#111827]",
						children: perm.label
					})]
				}, perm.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-[#111827]",
						children: "Maximum discount"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: 20,
							value: maxDiscount,
							onChange: (e) => setMaxDiscount(Number(e.target.value)),
							className: "w-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-20 text-right text-sm font-semibold text-[#111827]",
							children: [maxDiscount, "%"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#111827]",
							children: "Human approval"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: `inline-flex items-center gap-2 rounded-md border px-3 py-2 ${approval === "always" ? "border-[#111827] bg-[#111827] text-white" : "border-[#E5E7EB] bg-white text-[#475569]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "approval",
										checked: approval === "always",
										onChange: () => setApproval("always"),
										className: "sr-only"
									}), "Always"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: `inline-flex items-center gap-2 rounded-md border px-3 py-2 ${approval === "above" ? "border-[#111827] bg-[#111827] text-white" : "border-[#E5E7EB] bg-white text-[#475569]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "approval",
										checked: approval === "above",
										onChange: () => setApproval("above"),
										className: "sr-only"
									}), "Above maximum discount"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: `inline-flex items-center gap-2 rounded-md border px-3 py-2 ${approval === "never" ? "border-[#111827] bg-[#111827] text-white" : "border-[#E5E7EB] bg-white text-[#475569]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "approval",
										checked: approval === "never",
										onChange: () => setApproval("never"),
										className: "sr-only"
									}), "Never"]
								})
							]
						})]
					})
				]
			})]
		});
	};
	const HumanHandoffOptions = () => {
		const triggers = [
			"Customer requests a human",
			"Complaint",
			"Refund request",
			"Payment issue",
			"Large order",
			"Custom quotation",
			"Technical issue",
			"VIP customer"
		];
		const [selected, setSelected] = (0, import_react.useState)([]);
		const toggle = (label) => setSelected((s) => s.includes(label) ? s.filter((x) => x !== label) : [...s, label]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: triggers.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => toggle(t),
				className: `text-left rounded-[12px] border p-3 transition ${selected.includes(t) ? "border-[#22C55E] bg-[#F7FEF9]" : "border-[#E5E7EB] bg-white hover:shadow-sm"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-[#111827]",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-[#64748B]",
						children: selected.includes(t) ? "Selected" : "Tap to select"
					})]
				})
			}, t))
		});
	};
	const ClosingFollowUp = () => {
		const actions = [
			"Share checkout link",
			"Book appointment",
			"Send quotation",
			"Collect phone number",
			"Collect email",
			"Connect to staff"
		];
		const [selectedActions, setSelectedActions] = (0, import_react.useState)([]);
		const toggleAction = (label) => setSelectedActions((s) => s.includes(label) ? s.filter((x) => x !== label) : [...s, label]);
		const followUpOptions = [
			"Never",
			"After 2 hours",
			"After 24 hours",
			"After 3 days"
		];
		const [followUpTiming, setFollowUpTiming] = (0, import_react.useState)(followUpOptions[2]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: actions.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: `flex items-center gap-3 rounded-[12px] border p-3 ${selectedActions.includes(a) ? "border-[#22C55E] bg-[#F7FEF9]" : "border-[#E5E7EB] bg-white"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: selectedActions.includes(a),
						onChange: () => toggleAction(a),
						className: "h-4 w-4 rounded border border-[#E5E7EB] text-[#111827]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-[#111827]",
						children: a
					})]
				}, a))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-[#111827]",
					children: "Follow-up timing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: followUpTiming,
						onChange: (e) => setFollowUpTiming(e.target.value),
						className: "rounded-md border border-[#E5E7EB] px-3 py-2 text-sm",
						children: followUpOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: o,
							children: o
						}, o))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm text-[#64748B]",
						children: ["Selected: ", followUpTiming]
					})]
				})]
			})]
		});
	};
	const CurrentLesson = () => {
		const currentLesson = knowledgeLessonSequence[activeKnowledgeStep] ?? knowledgeLessonSequence[0];
		const isSourceLesson = activeKnowledgeStep > 0 && activeKnowledgeStep < knowledgeLessonSequence.length - 1;
		const sourceKey = isSourceLesson ? selectedKnowledgeSources[activeKnowledgeStep - 1] : void 0;
		const renderKnowledgeSourcesLesson = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"data-lesson-index": "0",
			className: knowledgeLessonCardClass(0),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#166534]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[20px] font-semibold text-[#111827]",
							children: "Knowledge Sources"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-[#6B7280]",
							children: "Teach the AI where it should learn from. Select one or more sources."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [
							{
								key: "company",
								title: "Company Information",
								desc: "Give your AI important company information it should remember.",
								Icon: User
							},
							{
								key: "faqs",
								title: "FAQs",
								desc: "Teach your AI the answers customers ask most.",
								Icon: MessageCircle
							},
							{
								key: "documents",
								title: "Documents",
								desc: "Provide documents and references your AI can use.",
								Icon: Paperclip
							},
							{
								key: "website",
								title: "Website",
								desc: "Teach your AI everything you offer.",
								Icon: Globe
							}
						].map((item) => {
							const selected = selectedKnowledgeSources.includes(item.key);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSelectedKnowledgeSources((cur) => cur.includes(item.key) ? cur.filter((k) => k !== item.key) : [...cur, item.key]),
								className: `text-left rounded-2xl border p-4 transition ${selected ? "border-[#22C55E] bg-[#F7FEF9] shadow-sm" : "border-[#E5E7EB] bg-white hover:shadow-sm"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `flex h-9 w-9 items-center justify-center rounded-xl ${selected ? "bg-[#22C55E] text-white" : "bg-[#F1F5F9] text-[#475569]"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#111827]",
												children: item.title
											}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] text-white",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-[#64748B]",
											children: item.desc
										})]
									})]
								})
							}, item.key);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-t border-[#EEF2F6] pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveWorkspaceSection("Identity"),
							className: "text-sm font-semibold text-[#64748B] transition hover:text-[#111827]",
							children: "Back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => completeKnowledgeLesson(0),
							disabled: !canContinueKnowledgeLesson(0),
							className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155] disabled:cursor-not-allowed disabled:opacity-45",
							children: ["Save & Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
						})]
					})
				]
			})
		});
		const renderSourceLesson = () => {
			if (!sourceKey) return null;
			const title = knowledgeSourceLessonTitles[sourceKey] ?? sourceKey;
			const desc = sourceKey === "company" ? "Give your AI important company information it should remember." : sourceKey === "faqs" ? "Teach your AI the answers customers ask most." : sourceKey === "documents" ? "Provide documents and references your AI can use." : "Teach your AI everything you offer.";
			const Icon = sourceKey === "company" ? User : sourceKey === "faqs" ? MessageCircle : sourceKey === "documents" ? Paperclip : Globe;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"data-lesson-index": String(activeKnowledgeStep),
				className: knowledgeLessonCardClass(activeKnowledgeStep),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[20px] font-semibold text-[#111827]",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-[#6B7280]",
								children: desc
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#111827]",
								children: "Next step"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-[#475569]",
								children: "This lesson is tailored to the source you selected. Continue when you’re ready to move on."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-t border-[#EEF2F6] pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => focusKnowledgeLesson(activeKnowledgeStep - 1),
								className: "text-sm font-semibold text-[#64748B] transition hover:text-[#111827]",
								children: "Back"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => completeKnowledgeLesson(activeKnowledgeStep),
								className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]",
								children: ["Save & Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
							})]
						})
					]
				})
			});
		};
		const renderReviewLesson = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"data-lesson-index": String(activeKnowledgeStep),
			className: activeKnowledgeStep === knowledgeLessonSequence.length - 1 ? "relative overflow-hidden rounded-[28px] border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] via-white to-[#F8FAFC] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-6" : "hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#166534]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[20px] font-semibold text-[#111827]",
							children: "Review"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-[#6B7280]",
							children: "Confirm your AI has everything it needs to answer confidently."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-[#EEF2F6] bg-white p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#111827]",
								children: "Selected knowledge sources"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 space-y-2 text-sm text-[#475569]",
								children: selectedKnowledgeSources.length > 0 ? selectedKnowledgeSources.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg bg-[#F8FAFC] px-3 py-2",
									children: source === "company" ? "Business Information" : source === "faqs" ? "Frequently Asked Questions" : source === "documents" ? "Resources" : source === "website" ? "Products & Services" : source
								}, source)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-[#94A3B8]",
									children: "No knowledge source selected yet."
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-[#EEF2F6] bg-white p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#111827]",
								children: "Policies training"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-[#475569]",
								children: "Policy rules are configured in the Policies workspace, so this step focuses on knowledge sources only."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-t border-[#D1FAE5] pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => focusKnowledgeLesson(activeKnowledgeStep - 1),
							className: "text-sm font-semibold text-[#64748B] transition hover:text-[#111827]",
							children: "Back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								completeKnowledgeLesson(activeKnowledgeStep);
								setActiveWorkspaceSection("Catalogue");
							},
							className: "inline-flex items-center gap-2 rounded-lg bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), "Finish training"]
						})]
					})
				]
			})
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: knowledgeLessonRef,
			className: "space-y-4 scroll-mt-36 scroll-smooth",
			children: [
				activeKnowledgeStep === 0 && renderKnowledgeSourcesLesson(),
				isSourceLesson && renderSourceLesson(),
				currentLesson === "Review" && renderReviewLesson()
			]
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-screen min-h-screen overflow-hidden bg-[#FFFFFF] text-[#111827]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden md:block",
				onMouseEnter: () => setSidebarHovered(true),
				onMouseLeave: () => setSidebarHovered(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "md:fixed md:inset-y-0 md:left-0 md:flex md:flex-col md:pt-4 bg-[#FFFFFF] border-r border-[#E5E7EB]/10 w-[72px] z-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-4 pb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-8 w-8 rounded-[20px] overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: sokoos_logo_default,
											alt: "Sokoos",
											className: "h-8 w-8 object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Sokoos"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex-1 px-1.5 overflow-hidden",
							children: renderSidebarNavItems("icon")
						}),
						sidebarHovered && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "fixed inset-y-0 left-0 z-50 w-64 min-w-[248px] bg-[#FFFFFF] border-r border-[#E5E7EB]/10 shadow-[0_18px_48px_rgba(15,23,42,0.12)] transition-all duration-200 ease-out",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-full flex flex-col pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-4 pb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-8 w-8 rounded-[20px] overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/assets/sokoos_logo-DQynRsip.png",
												alt: "Sokoos",
												className: "h-8 w-8 object-cover"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg font-semibold",
											children: "Sokoos"
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									className: "flex-1 overflow-y-auto px-4",
									children: renderSidebarNavItems("expanded")
								})]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "md:hidden fixed top-0 left-0 right-0 h-14 bg-[#FFFFFF] border-b border-[#E5E7EB]/20 flex items-center px-4 z-30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Open menu",
					onClick: () => setMobileOpen(true),
					className: "mr-3 inline-flex items-center justify-center rounded-[20px] p-2 text-[#111827] hover:bg-[#F3F4F6]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-8 w-8 rounded-[20px] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: sokoos_logo_default,
							alt: "Sokoos",
							className: "h-8 w-8 object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: "Sokoos"
					})]
				})]
			}),
			mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-black/40",
					onClick: () => setMobileOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-0 top-0 bottom-0 w-72 bg-[#FFFFFF] border-r border-[#E5E7EB]/10 p-4 overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-8 w-8 rounded-[20px] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/assets/sokoos_logo-DQynRsip.png",
									alt: "Sokoos",
									className: "h-8 w-8 object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: "Sokoos"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMobileOpen(false),
							className: "p-2 rounded-[20px] hover:bg-[#F3F4F6]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { children: renderSidebarNavItems("mobile") })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "h-full overflow-x-hidden pt-14 md:pt-0 md:pl-[72px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `${selected === "Integrations" ? "max-w-[1600px]" : "max-w-7xl"} mx-auto h-full p-4 overflow-x-hidden`,
					children: [
						selected === "Home" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full overflow-y-auto space-y-6 pr-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative overflow-hidden rounded-[32px] border border-[#DCFCE7] bg-gradient-to-br from-[#F0FDF4] via-white to-[#ECFDF5] p-8 shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[-60px] top-[-60px] h-56 w-56 rounded-full bg-[#22C55E]/10 blur-3xl" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-80px] left-[-80px] h-72 w-72 rounded-full bg-[#16A34A]/10 blur-3xl" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold uppercase tracking-[0.2em] text-[#16A34A]",
														children: "AI Growth Dashboard"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
														className: "mt-3 text-4xl font-bold text-[#111827]",
														children: "Good morning, Francis 👋 Your AI Employee is already at work."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-3 max-w-3xl text-lg text-[#64748B] leading-8",
														children: "Your AI is responding to customers, qualifying leads, booking appointments and following up automatically. Here's how your business is growing today."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-8 flex flex-wrap gap-3",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																className: "rounded-xl bg-[#16A34A] px-5 py-3 font-semibold text-white hover:bg-[#15803D] transition",
																children: "Open Inbox"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																className: "rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 font-semibold text-[#111827] hover:bg-[#F9FAFB] transition",
																children: "Chat with AI Employee"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																className: "rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 font-semibold text-[#111827] hover:bg-[#F9FAFB] transition",
																children: "Create Campaign"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: handleLogout,
																className: "rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 font-semibold text-[#111827] hover:bg-[#F9FAFB] transition",
																children: "Logout"
															})
														]
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid w-full max-w-md grid-cols-2 gap-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm text-[#64748B]",
																children: "AI Conversations"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-3xl font-bold text-[#111827]",
																children: "124"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-sm text-[#16A34A]",
																children: "↑ 18 today"
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm text-[#64748B]",
																children: "Qualified Leads"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-3xl font-bold text-[#111827]",
																children: "27"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-sm text-[#16A34A]",
																children: "AI identified today"
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm text-[#64748B]",
																children: "Appointments"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-3xl font-bold text-[#111827]",
																children: "8"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-sm text-[#16A34A]",
																children: "Booked automatically"
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm text-[#64748B]",
																children: "Customer Rating"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-3xl font-bold text-[#111827]",
																children: "★ 4.9"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-sm text-[#16A34A]",
																children: "Based on AI conversations"
															})
														]
													})
												]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: CARD,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: SECTION_HEADING,
											children: "Ask Sokoos"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: CARD_TITLE,
											children: "Your AI Employee is ready"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-7 w-7 text-[#22C55E]" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-5 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: "Ask your AI Employee anything...",
												className: "w-full bg-transparent text-[15px] outline-none placeholder:text-[#94A3B8]"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 flex flex-wrap gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]",
													children: "Create Campaign"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]",
													children: "Generate Quote"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]",
													children: "Build Landing Page"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]",
													children: "Show Today's Leads"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]",
													children: "Train on PDF"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]",
													children: "Summarize Conversations"
												})
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
											className: CARD,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: SECTION_HEADING,
														children: "AI Command Center"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
														className: CARD_TITLE,
														children: "AI Employee Status"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-8 w-8 text-[#22C55E]" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-6 space-y-5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AI Confidence" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "96%" })]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Currently Replying" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "17 customers" })]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Human Takeovers" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "4" })]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Average Response" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "6 sec" })]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "mt-8 w-full rounded-xl bg-[#16A34A] py-3 font-semibold text-white hover:bg-[#15803D]",
													children: "Train AI Employee"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
											className: CARD,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: SECTION_HEADING,
														children: "Business Knowledge"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
														className: CARD_TITLE,
														children: "Manage Knowledge"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-3xl",
														children: "📚"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-6 space-y-5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Products" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "12" })]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FAQs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "18" })]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Policies" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "7" })]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Training Score" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
																className: "text-[#16A34A]",
																children: "92%"
															})]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "mt-8 w-full rounded-xl border border-[#E5E7EB] py-3 font-semibold hover:bg-[#F9FAFB]",
													children: "Improve Knowledge"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
											className: CARD,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: SECTION_HEADING,
														children: "Customer Growth"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
														className: CARD_TITLE,
														children: "Growth Today"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-3xl",
														children: "💰"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-6 space-y-5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Qualified Leads" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "24" })]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Quotes Sent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "11" })]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Follow-ups Sent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "8" })]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Conversions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
																className: "text-[#16A34A]",
																children: "8 customers"
															})]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "mt-8 w-full rounded-xl border border-[#E5E7EB] py-3 font-semibold hover:bg-[#F9FAFB]",
													children: "View Customers"
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 lg:grid-cols-[1.8fr_1fr]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: CARD,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: SECTION_HEADING,
												children: "Recent AI Activity"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: CARD_TITLE,
												children: "What your AI Employee has been doing"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#15803D]",
												children: "Live"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 space-y-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start gap-4",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#ECFDF5]",
															children: "🤖"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-semibold",
																children: "AI answered a pricing enquiry"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm text-[#64748B]",
																children: "James asked about installation pricing and received an instant reply."
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-sm text-[#94A3B8]",
															children: "2 min ago"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start gap-4",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#EFF6FF]",
															children: "📅"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-semibold",
																children: "Appointment booked"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm text-[#64748B]",
																children: "Site installation scheduled automatically for tomorrow."
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-sm text-[#94A3B8]",
															children: "12 min ago"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start gap-4",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#FEF3C7]",
															children: "💬"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-semibold",
																children: "Follow-up sent"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm text-[#64748B]",
																children: "AI followed up with a customer who requested a quotation yesterday."
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-sm text-[#94A3B8]",
															children: "21 min ago"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start gap-4",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#FEF2F2]",
															children: "👤"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-semibold",
																children: "Human takeover requested"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm text-[#64748B]",
																children: "AI detected a negotiation and asked you to continue the conversation."
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-sm text-[#94A3B8]",
															children: "37 min ago"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start gap-4",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF4FF]",
															children: "⭐"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-semibold",
																children: "Customer left a 5-star rating"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm text-[#64748B]",
																children: "\"Fast replies and excellent service.\""
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-sm text-[#94A3B8]",
															children: "1 hour ago"
														})
													]
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: CARD,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: SECTION_HEADING,
												children: "WhatsApp Overview"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: CARD_TITLE,
												children: "Current Inbox Status"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-8 space-y-5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[#64748B]",
															children: "Unread Conversations"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "3" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[#64748B]",
															children: "AI Handling"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
															className: "text-[#16A34A]",
															children: "17"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[#64748B]",
															children: "Waiting For You"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
															className: "text-[#DC2626]",
															children: "2"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[#64748B]",
															children: "Resolved Today"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "36" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[#64748B]",
															children: "Average Response"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
															className: "text-[#16A34A]",
															children: "6 sec"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														className: "mt-6 w-full rounded-xl bg-[#16A34A] py-3 font-semibold text-white transition hover:bg-[#15803D]",
														children: "Open Inbox"
													})
												]
											})
										]
									})]
								})
							]
						}),
						selected === "Inbox" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `grid gap-6 px-6 py-6 transition-all duration-300 ease-out items-stretch h-full grid-cols-1 ${customerCollapsed ? "md:grid-cols-[320px_1fr]" : "md:grid-cols-[320px_1fr_minmax(330px,360px)]"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: `${CARD} w-full h-full min-h-0 flex flex-col min-w-0`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "border-b border-[#ECECEC] px-5 py-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center justify-between gap-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: PANEL_TITLE,
													children: "Conversations"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: `${SECONDARY} mt-0`,
													children: "Recent messages and active chats"
												})] })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-3 overflow-x-auto px-5 py-2 flex-nowrap custom-scrollbar",
											children: INBOX_TAB_ITEMS.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setActiveTab(tab),
												className: `whitespace-nowrap rounded-full px-4 py-1 text-xs transform flex-shrink-0 ${TRANSITION} ${activeTab === tab ? "bg-[#22C55E] text-white font-medium shadow-sm" : "bg-[#F3F4F6] text-[#475569] font-medium"} hover:shadow-sm active:scale-[0.98]`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white px-2 text-[11px] font-semibold text-[#475569] shadow-sm",
														children: inboxCounts[tab]
													})]
												})
											}, tab))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex min-h-0 flex-1 flex-col px-5 py-2 gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-[20px] bg-[#F9FAFB] px-4 py-2.5 shadow-none ring-1 ring-[#ECECEC] transition duration-150 ease-out focus-within:ring-2 focus-within:ring-[#22C55E] focus-within:border-[#22C55E] border border-[#E5E7EB]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex h-[44px] items-center gap-3 w-full text-[#94A3B8]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "search",
														placeholder: "Search conversations",
														value: searchQuery,
														onChange: (event) => setSearchQuery(event.target.value),
														className: `w-full h-full bg-transparent text-sm text-[#111827] placeholder:text-[#94A3B8] placeholder:font-regular outline-none ${TRANSITION_FAST}`
													})]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex-1 min-h-0 space-y-1.5 overflow-y-auto pr-2 scroll-smooth custom-scrollbar",
												children: INBOX_CONVERSATIONS.filter((conversation) => {
													const src = sourceOverrides[conversation.id] ?? conversation.source;
													if (activeTab === "Needs Reply") return src === "needs_attention";
													if (activeTab === "AI Active") return src === "ai_handling";
													if (activeTab === "Human") return src === "owner";
													return true;
												}).filter((conversation) => (conversation.name ?? "").toLowerCase().includes(searchQuery.toLowerCase()) || (conversation.phone ?? "").toLowerCase().includes(searchQuery.toLowerCase()) || conversation.message.toLowerCase().includes(searchQuery.toLowerCase())).map((conversation) => {
													const active = conversation.id === activeConversation;
													const effectiveSourceRaw = sourceOverrides[conversation.id] ?? conversation.source;
													const isPersonal = personalContacts.some((pc) => pc.phone === conversation.phone);
													const effectiveSource = isPersonal ? "personal" : effectiveSourceRaw;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														onClick: () => setActiveConversation(conversation.id),
														className: `w-full overflow-hidden rounded-[20px] px-5 py-3 min-h-[92px] text-left ${TRANSITION} transform-gpu active:scale-[0.98] flex flex-col gap-4 ${active ? "bg-[#F3FDF7] border border-[#22C55E]/20 ring-1 ring-[#22C55E]/20 shadow-[0_12px_36px_rgba(15,23,42,0.08)]" : "bg-white border border-transparent hover:bg-[#FBFFF8] hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:-translate-y-0.5"}`,
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between gap-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center gap-3 min-w-0 flex-1",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E5E7EB] to-[#D1D5DB] text-sm font-semibold text-[#64748B]",
																		children: conversation.avatar
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "min-w-0 flex-1 space-y-1",
																		children: conversation.isSaved && conversation.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-[16px] font-semibold truncate",
																			title: conversation.name,
																			children: conversation.name
																		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-[16px] font-semibold truncate",
																			title: conversation.phone ?? "Unknown Customer",
																			children: conversation.phone ?? "Unknown Customer"
																		})
																	})]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-start gap-2 flex-shrink-0",
																	children: [conversation.badge > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: `inline-flex min-w-[18px] h-4 items-center justify-center rounded-full bg-[#22C55E] text-white text-[10px] font-semibold transform-gpu transition duration-200 ease-out px-2`,
																		children: conversation.badge
																	}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: `${TIME_LABEL} whitespace-nowrap text-[11px] text-[#94A3B8]`,
																		children: formatConversationTime(conversation.time)
																	})]
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "min-w-0",
																children: (() => {
																	const badge = getConversationStatusBadge(effectiveSource, isPersonal);
																	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: `${STATUS_CHIP} ${badge.bg} ${badge.text} text-xs px-2 py-1`,
																		children: [
																			badge.emoji,
																			" ",
																			badge.label
																		]
																	});
																})()
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: `${SECONDARY} text-[14px] leading-5 min-w-0 truncate`,
																title: conversation.message,
																children: conversation.message
															})
														]
													}, conversation.id);
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: `${CARD} w-full h-full min-h-0 flex flex-col min-w-0`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "border-b border-[#ECECEC] px-6 py-4 mb-2 flex-shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-col gap-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start justify-between gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0 flex-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
																className: `${CUSTOMER_NAME} truncate`,
																children: INBOX_CONVERSATIONS.find((item) => item.id === activeConversation)?.name
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "mt-1 flex flex-wrap items-center gap-2 text-sm text-[#64748B]",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "truncate",
																		children: activeConversationData?.phone ?? "Unknown phone"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-[#94A3B8]",
																		children: "•"
																	}),
																	(() => {
																		const badge = getConversationStatusBadge(effectiveActiveSource, isPersonalActive);
																		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																			className: `${badge.bg} ${badge.text} rounded-full px-2 py-0.5 text-[11px] font-semibold inline-flex items-center gap-1`,
																			children: [
																				badge.emoji,
																				" ",
																				badge.label
																			]
																		});
																	})()
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "mt-2 flex flex-col gap-2 text-sm text-[#475569]",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center justify-between gap-3",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "font-medium text-[#111827]",
																		children: "AI Confidence"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-[#16A34A] font-semibold",
																		children: "94%"
																	})]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "h-2 w-full overflow-hidden rounded-full bg-[#DCFCE7]",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-[94%] rounded-full bg-[#22C55E]" })
																})]
															})
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 flex-shrink-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: toggleAiForActive,
															disabled: isPersonalActive,
															"aria-label": "AI Assist",
															className: `inline-flex h-9 rounded-full border px-3.5 text-[10px] font-semibold items-center justify-center ${TRANSITION_FAST} active:scale-[0.98] ${isPersonalActive ? "border-[#E5E7EB] bg-white text-[#9CA3AF] cursor-not-allowed" : "border-[#22C55E] bg-white text-[#166534] hover:bg-[#ECFDF5]"}`,
															title: isPersonalActive ? "Cannot toggle mode for personal contacts" : "AI Assist",
															children: "✨ AI Assist"
														}), customerCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setCustomerCollapsed(false),
															className: `inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] bg-white text-[#64748B] ${TRANSITION} hover:bg-[#F9FAFB] hover:text-[#111827] flex-shrink-0`,
															"aria-label": "Expand customer panel",
															title: "Expand customer panel",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })
														})]
													})]
												})
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar px-6 pt-3 pb-6 flex flex-col justify-end bg-[#F8FCF7]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "space-y-5 flex flex-col",
												children: activeMessages.map((message, index) => {
													const originalWasAi = String(activeConversationData?.source).startsWith("ai");
													if (message.from === "agent" && originalWasAi && !String(effectiveActiveSource).startsWith("ai")) return null;
													const isAgent = message.from === "agent";
													const isAi = isAgent && String(effectiveActiveSource).startsWith("ai");
													const senderLabel = isAi ? "Sokoos AI" : activeAgentName;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: `${TRANSITION_FAST} transition-opacity`,
														children: [isAgent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex items-center gap-1 text-[10px] font-semibold text-[#94A3B8] mb-0.5",
															children: isAi ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "inline-flex h-3 w-3 items-center justify-center rounded-full bg-[#ECFDF5] text-[#0C7A4D]",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-1.5 w-1.5" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: senderLabel })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: senderLabel })
														}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: `flex ${isAgent ? "justify-start" : "justify-end"}`,
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: `rounded-[28px] px-3 py-2 text-sm break-words max-w-[70%] ${isAgent ? "bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7]" : "bg-white text-[#111827] border border-[#E5E7EB]"} ${TRANSITION_FAST} transition-shadow transform-gpu`,
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex flex-col gap-2",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "leading-relaxed text-sm",
																		children: message.text
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: `self-end text-[9px] ${isAgent ? "text-[#16A34A]/30" : "text-[#64748B]/30"} font-normal`,
																		children: message.time
																	})]
																})
															})
														})]
													}, `${message.time}-${index}`);
												})
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "shrink-0 border-t border-[#E5E7EB] bg-white px-6 py-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `rounded-[20px] bg-[#F9FAFB] border border-[#E5E7EB] flex items-center gap-3 min-h-[52px] px-4 ${TRANSITION}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													ref: textareaRef,
													value: messageInput,
													onChange: (event) => setMessageInput(event.target.value),
													placeholder: "Type a message...",
													className: `min-w-0 flex-1 resize-none overflow-y-auto overflow-x-hidden custom-scrollbar bg-transparent text-sm leading-5 text-[#111827] outline-none placeholder:text-[#CBD5E1] placeholder:font-regular ${TRANSITION_FAST}`,
													rows: 1,
													style: {
														minHeight: 40,
														maxHeight: 80
													}
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white transition duration-150 ease-out transform hover:bg-[#16A34A] active:scale-95",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
												})]
											})
										})
									]
								}),
								!customerCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: `${CARD} w-full h-full min-h-0 flex flex-col transition-all duration-300 ease-out ${customerPanelFading ? "opacity-80 translate-y-1" : "opacity-100 translate-y-0"} min-w-[330px] max-w-[360px]`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3 shrink-0 px-5 py-4 border-b border-[#ECECEC]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: `${CUSTOMER_NAME} mt-1`,
												children: activeCustomerProfile.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: `${SECONDARY} mt-2`,
												children: activeCustomerProfile.company
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 inline-flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex h-3.5 w-3.5 shrink-0 rounded-full bg-[#22C55E]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `${STATUS_CHIP} bg-[#ECFDF5] text-[#166534] border border-[#D1FAE5]`,
													children: activeCustomerProfile.leadStatus
												})]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setCustomerCollapsed(true),
											className: `inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] bg-white text-[#64748B] ${TRANSITION_FAST} hover:bg-[#F9FAFB] hover:text-[#111827] active:scale-95 shrink-0`,
											"aria-label": "Collapse customer panel",
											title: "Collapse customer panel",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 rotate-180" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex-1 min-h-0 overflow-hidden px-5 py-4",
										children: summaryGenerated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `h-full overflow-y-auto pr-2 transition-all duration-300 ease-out ${summaryVisible ? "opacity-100" : "opacity-0"} [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#F3F4F6] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#CBD5E1] [&::-webkit-scrollbar-thumb:hover]:bg-[#22C55E]`,
											style: {
												scrollbarWidth: "thin",
												scrollbarColor: "#CBD5E1 transparent"
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-4 pb-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start justify-between gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: SECTION_HEADING,
																children: "✨ AI Summary"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "mt-2 text-[18px] font-semibold text-[#111827]",
																children: "AI Employee snapshot"
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-[#ECFDF5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#16A34A]",
																children: "Mock data"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-px bg-[#E5E7EB]/80" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: SECTION_HEADING,
															children: "Customer Intent"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-[15px] leading-6 text-[#475569]",
															children: aiSummary?.customerIntent
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: SECTION_HEADING,
															children: "Buying Probability"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-3 flex items-center gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-[24px] font-semibold text-[#111827]",
																children: [aiSummary?.buyingProbability, "%"]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "h-2.5 flex-1 overflow-hidden rounded-full bg-[#E5E7EB]",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "h-full rounded-full bg-[#22C55E]",
																	style: { width: `${aiSummary?.buyingProbability ?? 0}%` }
																})
															})]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: SECTION_HEADING,
															children: "Customer Sentiment"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-3",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: `inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-semibold ${aiSummary?.sentiment.badgeClassName}`,
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: aiSummary?.sentiment.icon }), aiSummary?.sentiment.label]
															})
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: SECTION_HEADING,
															children: "Buying Signals"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
															className: "mt-3 space-y-2 text-[15px] text-[#475569]",
															children: aiSummary?.buyingSignals.map((signal) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
																className: "flex items-start gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#22C55E]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: signal })]
															}, signal))
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[24px] border border-[#D1FAE5] bg-[#F0FDF4] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: SECTION_HEADING,
															children: "Recommended Next Action"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-[15px] leading-6 font-semibold text-[#166534]",
															children: aiSummary?.recommendedNextAction
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: SECTION_HEADING,
																children: "Suggested Reply"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-3 rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4",
																children: aiSummary?.suggestedReply.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: `text-[14px] leading-6 text-[#334155] ${index === 0 ? "font-semibold text-[#111827]" : ""}`,
																	children: line
																}, `${line}-${index}`))
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																className: "mt-4 inline-flex items-center justify-center rounded-[24px] bg-[#22C55E] px-4 py-2.5 text-[14px] font-semibold text-white transition-all duration-200 ease-out hover:bg-[#16A34A]",
																children: "Insert Reply"
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[24px] border border-[#EEF2F6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: SECTION_HEADING,
															children: "Knowledge Used"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-3 flex flex-wrap gap-2",
															children: aiSummary?.knowledgeSources.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "inline-flex items-center gap-2 rounded-full border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-1.5 text-[12px] font-semibold text-[#166534]",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[11px]",
																	children: "✓"
																}), source]
															}, source))
														})]
													})
												]
											})
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex h-full min-h-[220px] flex-col items-start justify-center gap-4 px-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "w-full max-w-[280px] space-y-2 text-left",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: SECTION_HEADING,
															children: "✨ AI Insights"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "text-[17px] font-semibold leading-6 text-[#111827]",
															children: "Understand this conversation instantly."
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[13px] leading-5 text-[#475569]",
															children: "Generate a summary to reveal:"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex w-full max-w-[280px] flex-col gap-2 text-left text-[13px] text-[#475569]",
													children: [
														"Conversation Summary",
														"Customer Intent",
														"Buying Signals",
														"Suggested Reply",
														"Recommended Next Action"
													].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-start gap-2.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#DCFCE7] text-[9px] font-semibold text-[#166534]",
															children: "✓"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold text-[#111827]",
															children: item
														})]
													}, item))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 w-full max-w-[280px]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															setSummaryGenerated(true);
															setSummaryVisible(false);
															setAiSummary(buildMockAiSummary());
															window.setTimeout(() => setSummaryVisible(true), 20);
														},
														className: "w-full rounded-[24px] bg-[#22C55E] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:bg-[#16A34A] hover:shadow-sm active:scale-[0.98]",
														children: "Generate AI Summary"
													})
												})
											]
										})
									})]
								})
							]
						}),
						(selected === "AI Employee" || selected === "Training") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto w-full max-w-[1280px] space-y-6 px-4 pb-10 lg:px-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-b border-[#E5E7EB] pb-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "max-w-3xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6B7280]",
													children: "Your new teammate"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "mt-2 text-[24px] font-semibold tracking-[-0.02em] text-[#111827] lg:text-[26px]",
													children: "Hire and train your AI Employee."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm leading-6 text-[#6B7280]",
													children: "Give your new teammate the context, voice, and tools it needs to do great work from day one."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
											className: "rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)]",
											"aria-label": "AI setup score",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg shadow-sm ${overallTrainingComplete ? "bg-[#22C55E] text-white" : "bg-[#ECFDF5] text-[#166534]"}`,
														children: overallTrainingComplete ? "🎉" : "🤖"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0 flex-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: overallTrainingComplete ? "Your AI Employee is Ready" : "Training Your AI Employee"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-xs text-[#475569]",
																children: overallTrainingComplete ? "Your AI has completed the available training and is ready to represent your business." : `Step ${currentTrainingStepNumber} of ${currentTrainingLessonCount} · ${currentTrainingLessonLabel}`
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-xs leading-5 text-[#64748B]",
																children: overallTrainingComplete ? "Keep teaching your AI as your business grows." : activeWorkspaceSection === "Knowledge Hub" ? "Your AI is building knowledge so it can answer with more confidence." : "Your AI is learning about your business so it can represent you confidently in every customer conversation."
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-3 h-1.5 overflow-hidden rounded-full bg-[#EEF2F6]",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "h-full rounded-full bg-[#22C55E] transition-all duration-300",
																	style: { width: `${overallTrainingComplete ? 100 : overallTrainingPercent}%` }
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "mt-2 text-[11px] font-semibold text-[#166534]",
																children: [
																	completedTrainingLessonCount,
																	" of ",
																	totalTrainingLessonCount,
																	" lessons complete · ",
																	overallTrainingComplete ? 100 : overallTrainingPercent,
																	"% trained"
																]
															})
														]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl border border-[#BBF7D0] bg-[#F7FEF9] p-3",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[10px] font-semibold uppercase tracking-[0.12em] text-[#166534]",
															children: "AI Readiness"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "mt-1 text-lg font-semibold text-[#111827]",
															children: [overallTrainingComplete ? 100 : aiReadiness, "% ready"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-xs text-[#64748B]",
															children: overallTrainingComplete ? "Ready for customer conversations" : `About ${Math.max(1, 6 - completedTrainingLessonCount)} min left`
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
															type: "button",
															onClick: () => {
																if (activeWorkspaceSection === "Knowledge Hub") {
																	setActiveWorkspaceSection("Knowledge Hub");
																	focusKnowledgeLesson(activeKnowledgeStep);
																} else {
																	setActiveWorkspaceSection("Identity");
																	focusIdentityLesson(activeIdentityStep);
																}
															},
															className: "mt-3 text-xs font-semibold text-[#166534] transition hover:text-[#047857]",
															children: ["Continue training ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "inline h-3.5 w-3.5" })]
														})
													]
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
											"aria-label": "AI employee workspace sections",
											className: "sticky top-0 z-30 -mx-4 border-y border-[#E5E7EB] bg-white/95 px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur lg:hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
												children: workspaceNavigatorItems.map((tab) => {
													const active = activeWorkspaceSection === tab.section;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => handleWorkspaceSectionSelection(tab.section),
														"aria-current": active ? "page" : void 0,
														className: `relative flex min-w-0 flex-col gap-2 rounded-xl border px-2.5 py-2.5 text-left text-xs font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 ${active ? "border-[#86EFAC] bg-[#ECFDF5] text-[#166534] shadow-sm" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#D1FAE5] hover:bg-[#F9FCFA]"}`,
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center gap-1.5",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: `flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${active ? "bg-[#22C55E] text-white" : tab.complete ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#F1F5F9] text-[#64748B]"}`,
																		children: tab.complete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tab.Icon, { className: "h-3.5 w-3.5" })
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "truncate",
																		children: tab.title
																	})]
																}), tab.complete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 shrink-0 text-[#16A34A]" }) : null]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "h-1.5 overflow-hidden rounded-full bg-[#E5E7EB]",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: `h-full rounded-full transition-all duration-500 ${tab.complete ? "bg-[#22C55E]" : "bg-[#CBD5E1]"}`,
																	style: { width: `${Math.max(4, tab.percent)}%` }
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-[10px] font-medium text-[#64748B]",
																children: [tab.percent, "%"]
															})
														]
													}, tab.title);
												})
											})
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
								className: "relative space-y-5 pb-28 lg:pl-[252px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
										className: "hidden w-[228px] lg:sticky lg:top-5 lg:float-left lg:-ml-[252px] lg:block",
										"aria-label": "AI employee workspaces",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-[#E5E7EB] bg-white p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "px-2.5 pb-2 pt-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#94A3B8]",
													children: "AI training"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-[#64748B]",
													children: "Watch your AI grow one workspace at a time."
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
												className: "space-y-2",
												"aria-label": "AI Employee workspace navigator",
												children: workspaceNavigatorItems.map((item) => {
													const active = activeWorkspaceSection === item.section;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => handleWorkspaceSectionSelection(item.section),
														"aria-current": active ? "page" : void 0,
														className: `w-full rounded-xl border px-2.5 py-2.5 text-left transition-all duration-200 ease-out ${active ? "border-[#86EFAC] bg-[#ECFDF5] shadow-sm" : "border-[#E5E7EB] bg-white hover:border-[#D1FAE5] hover:bg-[#F9FCFA]"}`,
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-2.5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: `flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${active ? "bg-[#22C55E] text-white" : item.complete ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#F1F5F9] text-[#64748B]"}`,
																		children: item.complete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { className: "h-3.5 w-3.5" })
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "min-w-0 flex-1",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: `block truncate text-xs font-semibold ${active ? "text-[#166534]" : "text-[#111827]"}`,
																			children: item.title
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "mt-0.5 block truncate text-[10px] text-[#64748B]",
																			children: item.description
																		})]
																	}),
																	item.complete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 shrink-0 text-[#16A34A]" })
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-2 h-1.5 overflow-hidden rounded-full bg-[#E5E7EB]",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: `h-full rounded-full transition-all duration-500 ${item.complete ? "bg-[#22C55E]" : "bg-[#CBD5E1]"}`,
																	style: { width: `${Math.max(4, item.percent)}%` }
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "mt-1 flex items-center justify-between text-[10px] font-medium text-[#64748B]",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: active ? "In progress" : "Ready" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [item.percent, "%"] })]
															})
														]
													}, item.title);
												})
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "border-b border-[#E5E7EB] pb-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "max-w-3xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[12px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]",
												children: activeWorkspaceSection === "Identity" ? "Identity training" : activeWorkspaceSection === "Catalogue" ? "Catalogue workspace" : activeWorkspaceSection === "Skills" ? "Skills" : activeWorkspaceSection === "Policies" ? "Policies" : activeWorkspaceSection === "Sales Playbooks" ? "Sales Playbook" : activeWorkspaceSection === "Integrations" ? "Integrations" : "KNOWLEDGE TRAINING"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-[#475569]",
												children: activeWorkspaceSection === "Identity" ? "Onboard your AI employee one focused decision at a time." : activeWorkspaceSection === "Catalogue" ? "Manage your AI catalogue so it can recommend products and services with confidence." : activeWorkspaceSection === "Skills" ? "Choose what your AI employee can do for your customers and your business." : activeWorkspaceSection === "Policies" ? "Teach your AI employee the rules, boundaries, and customer policies it must follow." : activeWorkspaceSection === "Sales Playbooks" ? "Train your AI employee to qualify customers, recommend the right solutions, negotiate within your rules, know when to involve a human, and confidently close conversations." : activeWorkspaceSection === "Integrations" ? "Connect your AI employee to the channels and business tools it needs to serve customers and get work done." : "Build and refine your knowledge base so your AI responds with relevant, trusted answers."
											})]
										})
									}),
									activeWorkspaceSection === "Identity" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
										className: "relative z-20 rounded-[24px] border border-[#E5E7EB] bg-white px-3 py-3 shadow-[0_6px_18px_rgba(15,23,42,0.04)]",
										"aria-label": "AI employee onboarding progress",
										children: onboardingComplete ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-in fade-in-0 zoom-in-95 duration-300",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22C55E] text-lg text-white shadow-sm",
													children: "✓"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-base font-semibold text-[#111827]",
														children: "Your AI Employee is Ready"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm text-[#64748B]",
														children: "Your AI has successfully completed the identity curriculum and is ready to represent your business."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold text-[#166534]",
														children: identityLessons.map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["✓ ", lesson] }, lesson))
													})
												] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setActiveWorkspaceSection("Performance"),
														className: "rounded-lg bg-[#111827] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#334155]",
														children: "View AI Profile"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															setSelected("Inbox");
															window.history.pushState({}, "", "/dashboard/inbox");
														},
														className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition hover:bg-[#F8FAFC] hover:text-[#111827]",
														children: "Start Conversations"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setActiveWorkspaceSection("Test AI"),
														className: "rounded-lg border border-[#BBF7D0] bg-[#ECFDF5] px-3 py-2 text-xs font-semibold text-[#166534] transition hover:bg-[#DCFCE7]",
														children: "Test AI"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															setAiEmployeeLaunched(false);
															setCompletedIdentitySteps([]);
															focusIdentityLesson(0);
														},
														className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition hover:bg-[#F8FAFC] hover:text-[#111827]",
														children: "Teach More"
													})
												]
											})]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-[#166534]",
												children: "Identity Training"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-base font-semibold text-[#111827]",
												children: "Help your AI understand who your business is, what it stands for, and how it should represent your brand in every customer conversation."
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#166534]",
												children: [
													trainingCompletedSteps.length,
													"/",
													identityLessons.length,
													" lessons complete"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 flex flex-wrap gap-2",
											children: identityLessons.map((lesson, index) => {
												const active = activeIdentityStep === index;
												const completed = completedIdentitySteps.includes(index);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => focusIdentityLesson(index),
													"aria-current": active ? "step" : void 0,
													className: `inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${active ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm" : completed ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${completed ? "bg-[#22C55E] text-white" : active ? "bg-[#111827] text-white" : "bg-[#F8FAFC] text-[#64748B]"}`,
														children: completed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[11px]",
															children: index + 1
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lesson })]
												}, lesson);
											})
										})] })
									}) }),
									completionToast && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										role: "status",
										className: "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-[#BBF7D0] bg-white px-4 py-3 text-sm font-semibold text-[#166534] shadow-[0_14px_32px_rgba(15,23,42,0.14)] animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#22C55E] text-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: completionToast })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										id: "ai-workspace-content",
										className: "w-full scroll-mt-28",
										children: activeWorkspaceSection === "Identity" && !onboardingComplete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												onChangeCapture: () => setHasUnsavedChanges(true),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													ref: identityLessonRef,
													className: "space-y-4 scroll-mt-36 scroll-smooth",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
															"data-lesson-index": "0",
															className: activeIdentityStep === 0 ? identityLessonCardClass(0) : "hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex gap-3",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#166534]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" })
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-[20px] font-semibold text-[#111827]",
																			children: "Business Identity"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-2 text-sm leading-6 text-[#6B7280]",
																			children: "Teach your AI who you are and what your business does."
																		})] })]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "space-y-2",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-[15px] font-semibold tracking-[-0.01em] text-[#111827]",
																					children: "Who is this AI representing?"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-sm leading-6 text-[#6B7280]",
																					children: "Start with the basics so your AI can introduce the business clearly."
																				})]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-6 grid gap-4 md:grid-cols-2",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "relative w-full space-y-2 md:col-span-2",
																						children: [
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																								className: "block text-sm font-semibold text-[#111827]",
																								htmlFor: "business-name",
																								children: "Business Name"
																							}),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																								id: "business-name",
																								autoComplete: "organization",
																								required: true,
																								value: businessInfo.name,
																								onChange: (event) => setBusinessInfo((current) => ({
																									...current,
																									name: event.target.value
																								})),
																								placeholder: "Your business name",
																								className: `${AI_TRAINING_FIELD} w-full`
																							}),
																							businessInfo.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
																								className: "pointer-events-none absolute right-3 top-[39px] h-4 w-4 text-[#22C55E]",
																								"aria-label": "Business name is ready"
																							})
																						]
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "relative w-full space-y-2",
																						children: [
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																								className: "block text-sm font-semibold text-[#111827]",
																								htmlFor: "industry",
																								children: "Business Industry"
																							}),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																								className: "relative",
																								children: [
																									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																										type: "button",
																										id: "industry",
																										onClick: () => {
																											setIsIndustryDropdownOpen((current) => !current);
																											setIndustrySearch("");
																										},
																										className: `${AI_TRAINING_FIELD} flex w-full items-center justify-between text-left`,
																										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																											className: businessIndustryValue ? "text-[#111827]" : "text-[#64748B]",
																											children: businessIndustryValue || "Select an industry"
																										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 text-[#64748B] transition ${isIndustryDropdownOpen ? "rotate-180" : ""}` })]
																									}),
																									businessIndustryValue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
																										className: "pointer-events-none absolute right-10 top-[13px] h-4 w-4 text-[#22C55E]",
																										"aria-label": "Business industry is ready"
																									}),
																									isIndustryDropdownOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																										className: "absolute z-20 mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-[0_12px_24px_rgba(15,23,42,0.12)]",
																										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																											className: "flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-2",
																											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-[#64748B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																												type: "text",
																												value: industrySearch,
																												onChange: (event) => setIndustrySearch(event.target.value),
																												placeholder: "Search industries",
																												className: "w-full border-none bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#94A3B8]"
																											})]
																										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																											className: "mt-2 max-h-56 space-y-1 overflow-y-auto",
																											children: [filteredIndustryOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																												type: "button",
																												onClick: () => handleIndustrySelection(option),
																												className: `flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition ${businessInfo.type === option ? "bg-[#ECFDF5] text-[#166534]" : "text-[#334155] hover:bg-[#F8FAFC] hover:text-[#111827]"}`,
																												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: option }), businessInfo.type === option && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#22C55E]" })]
																											}, option)), filteredIndustryOptions.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																												className: "px-3 py-2 text-sm text-[#64748B]",
																												children: "No industries found."
																											})]
																										})]
																									})
																								]
																							}),
																							businessInfo.type === "Other" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																								className: "space-y-2",
																								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																									className: "block text-sm font-semibold text-[#111827]",
																									htmlFor: "other-industry",
																									children: "Specify Industry"
																								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																									id: "other-industry",
																									value: otherIndustryValue,
																									onChange: handleOtherIndustryChange,
																									placeholder: "Enter your industry",
																									className: `${AI_TRAINING_FIELD} w-full`
																								})]
																							})
																						]
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "relative w-full space-y-3 md:col-span-2",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																							className: "block text-sm font-semibold text-[#111827]",
																							children: "Business Model"
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																							className: "grid gap-2 sm:grid-cols-2",
																							children: [
																								"Physical Products",
																								"Services",
																								"Digital Products",
																								"Subscriptions",
																								"Memberships",
																								"Rentals"
																							].map((option) => {
																								const isSelected = businessModelSelections.includes(option);
																								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																									className: `flex items-center gap-3 rounded-xl border px-3 py-3 text-sm font-medium transition ${isSelected ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#334155] hover:border-[#86EFAC] hover:bg-[#F8FAFC]"}`,
																									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																										type: "checkbox",
																										checked: isSelected,
																										onChange: () => toggleBusinessModelSelection(option),
																										className: "h-4 w-4 rounded border-[#CBD5E1] text-[#22C55E] focus:ring-[#22C55E]"
																									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: option })]
																								}, option);
																							})
																						})]
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "relative w-full space-y-2",
																						children: [
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																								className: "block text-sm font-semibold text-[#111827]",
																								htmlFor: "business-country",
																								children: "Country"
																							}),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																								id: "business-country",
																								required: true,
																								value: businessInfo.country,
																								onChange: (event) => setBusinessInfo((current) => ({
																									...current,
																									country: event.target.value
																								})),
																								placeholder: "e.g. Kenya",
																								className: `${AI_TRAINING_FIELD} w-full`
																							}),
																							businessInfo.country && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
																								className: "pointer-events-none absolute right-3 top-[39px] h-4 w-4 text-[#22C55E]",
																								"aria-label": "Country is ready"
																							})
																						]
																					})
																				]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-6 space-y-2",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																					className: "block text-sm font-semibold text-[#111827]",
																					htmlFor: "business-description",
																					children: "Business Description"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																					id: "business-description",
																					required: true,
																					value: businessInfo.about,
																					onChange: (event) => setBusinessInfo((current) => ({
																						...current,
																						about: event.target.value
																					})),
																					placeholder: "We provide affordable fibre internet for homes and businesses across Nairobi with fast installation and friendly customer support.",
																					rows: 4,
																					className: `${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`
																				})]
																			})
																		]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "flex items-center justify-end border-t border-[#EEF2F6] pt-5",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			disabled: !businessInfo.name.trim() || !businessIndustryValue || !businessInfo.country.trim() || !businessInfo.about.trim(),
																			onClick: () => completeIdentityLesson(0),
																			className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155] disabled:cursor-not-allowed disabled:opacity-45",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save & Continue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
																		})
																	})
																]
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
															"data-lesson-index": "1",
															className: activeIdentityStep === 1 ? identityLessonCardClass(1) : "hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex gap-3",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF7ED] text-[#C2410C]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smile, { className: "h-5 w-5" })
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-[20px] font-semibold text-[#111827]",
																			children: "Brand Voice"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-2 text-sm leading-6 text-[#6B7280]",
																			children: "Teach your AI how to communicate in your brand's tone."
																		})] })]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "space-y-2",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-[15px] font-semibold tracking-[-0.01em] text-[#111827]",
																					children: "Brand Personality"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-sm leading-6 text-[#6B7280]",
																					children: "Pick the character your AI should reflect in conversations."
																				})]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "mt-4 flex flex-wrap gap-2",
																				children: PERSONALITIES.map((personalityOption) => {
																					const active = personality === personalityOption;
																					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																						type: "button",
																						"aria-pressed": active,
																						onClick: () => {
																							setPersonality(personalityOption);
																							setHasUnsavedChanges(true);
																						},
																						className: `rounded-full border px-3 py-2 text-sm font-semibold transition ${active ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#A7F3D0] hover:text-[#111827]"}`,
																						children: personalityOption
																					}, personalityOption);
																				})
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-6 space-y-3",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm font-semibold text-[#111827]",
																						children: "Communication Style"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "mt-3 flex flex-wrap gap-2",
																						children: COMMUNICATION_STYLE_OPTIONS.map((styleOption) => {
																							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																								type: "button",
																								onClick: () => {
																									setCommunicationStyle(styleOption);
																									setHasUnsavedChanges(true);
																								},
																								className: `rounded-full border px-3 py-2 text-sm font-semibold transition ${communicationStyle === styleOption ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#A7F3D0] hover:text-[#111827]"}`,
																								children: styleOption
																							}, styleOption);
																						})
																					})] }),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm font-semibold text-[#111827]",
																						children: "Emoji Usage"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "mt-3 flex flex-wrap gap-2",
																						children: EMOJI_USAGE_OPTIONS.map((emojiOption) => {
																							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																								type: "button",
																								onClick: () => {
																									setEmojiUsage(emojiOption);
																									setHasUnsavedChanges(true);
																								},
																								className: `rounded-full border px-3 py-2 text-sm font-semibold transition ${emojiUsage === emojiOption ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#A7F3D0] hover:text-[#111827]"}`,
																								children: emojiOption
																							}, emojiOption);
																						})
																					})] }),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm font-semibold text-[#111827]",
																						children: "Preferred Tone"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "mt-3 flex flex-wrap gap-2",
																						children: PREFERRED_TONE_OPTIONS.map((toneOption) => {
																							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																								type: "button",
																								onClick: () => {
																									setPreferredTone(toneOption);
																									setHasUnsavedChanges(true);
																								},
																								className: `rounded-full border px-3 py-2 text-sm font-semibold transition ${preferredTone === toneOption ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#A7F3D0] hover:text-[#111827]"}`,
																								children: toneOption
																							}, toneOption);
																						})
																					})] })
																				]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-6 rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-4",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex items-center gap-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																						className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] text-white",
																						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm font-semibold text-[#166534]",
																						children: "Voice preview"
																					})]
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "mt-3 space-y-2 rounded-2xl bg-white p-4 shadow-sm",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																							className: "flex items-center gap-2",
																							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																								className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#22C55E] text-[10px] font-bold text-white",
																								children: "AI"
																							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																								className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]",
																								children: [
																									personality,
																									" · ",
																									preferredTone
																								]
																							})]
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-sm leading-6 text-[#111827]",
																							children: BRAND_VOICE_DETAILS[personality].example
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																							className: "text-xs leading-5 text-[#64748B]",
																							children: [
																								"Style: ",
																								communicationStyle,
																								" · Emojis: ",
																								emojiUsage
																							]
																						})
																					]
																				})]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-6 space-y-2",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "block text-sm font-semibold text-[#111827]",
																						htmlFor: "writing-examples",
																						children: "Writing Examples"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm leading-6 text-[#6B7280]",
																						children: "Write 2–3 example replies so the AI learns from them directly."
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																						id: "writing-examples",
																						value: writingExamples,
																						onChange: (event) => {
																							setWritingExamples(event.target.value);
																							setHasUnsavedChanges(true);
																						},
																						rows: 6,
																						placeholder: `Hi James 👋\nThanks for reaching out.\nInstallation takes less than 24 hours.`,
																						className: `${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`
																					})
																				]
																			})
																		]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center justify-between border-t border-[#EEF2F6] pt-4",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => focusIdentityLesson(0),
																			className: "text-sm font-semibold text-[#64748B] transition hover:text-[#111827]",
																			children: "Back"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => completeIdentityLesson(1),
																			className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]",
																			children: ["Save & Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
																		})]
																	})
																]
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
															"data-lesson-index": "2",
															className: activeIdentityStep === 2 ? identityLessonCardClass(2) : "hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex gap-3",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#1D4ED8]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-[20px] font-semibold text-[#111827]",
																			children: "Greetings"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-2 text-sm leading-6 text-[#6B7280]",
																			children: "Teach your AI how to greet customers and start conversations consistently."
																		})] })]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "grid gap-5 lg:grid-cols-[1.45fr_0.9fr]",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "space-y-4 rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "space-y-2",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																							className: "block text-sm font-semibold text-[#111827]",
																							htmlFor: "welcome-message",
																							children: "Welcome Message"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																							id: "welcome-message",
																							value: welcomeMessage,
																							onChange: (event) => {
																								setWelcomeMessage(event.target.value);
																								setHasUnsavedChanges(true);
																							},
																							rows: 3,
																							placeholder: "Hi 👋\\nWelcome to Sokoos Internet.\\nHow can I help you today?",
																							className: `${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-xs leading-5 text-[#64748B]",
																							children: "Use this when a customer starts a conversation."
																						})
																					]
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "space-y-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "block text-sm font-semibold text-[#111827]",
																						htmlFor: "returning-greeting",
																						children: "Returning Customer Greeting"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																						id: "returning-greeting",
																						value: welcomeMessage,
																						onChange: (event) => {
																							setWelcomeMessage(event.target.value);
																							setHasUnsavedChanges(true);
																						},
																						rows: 2,
																						placeholder: "Welcome back! We’re glad to help again.",
																						className: `${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`
																					})]
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "space-y-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "block text-sm font-semibold text-[#111827]",
																						htmlFor: "away-message",
																						children: "Offline Message"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																						id: "away-message",
																						value: awayMessage,
																						onChange: (event) => {
																							setAwayMessage(event.target.value);
																							setHasUnsavedChanges(true);
																						},
																						rows: 2,
																						placeholder: "Thanks for your message. We’ll get back to you soon.",
																						className: `${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`
																					})]
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "space-y-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "block text-sm font-semibold text-[#111827]",
																						htmlFor: "closing-message",
																						children: "After Hours Message"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																						id: "closing-message",
																						value: closingMessage,
																						onChange: (event) => {
																							setClosingMessage(event.target.value);
																							setHasUnsavedChanges(true);
																						},
																						rows: 2,
																						placeholder: "We’re currently offline. Please leave a message and we’ll reply when we’re back.",
																						className: `${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`
																					})]
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "space-y-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "block text-sm font-semibold text-[#111827]",
																						htmlFor: "thank-you-message",
																						children: "Thank You Message"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																						id: "thank-you-message",
																						value: closingMessage,
																						onChange: (event) => {
																							setClosingMessage(event.target.value);
																							setHasUnsavedChanges(true);
																						},
																						rows: 2,
																						placeholder: "Thanks for reaching out. We’re here whenever you need us.",
																						className: `${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`
																					})]
																				})
																			]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-5 shadow-sm",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex items-center gap-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																						className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#22C55E] text-white",
																						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm font-semibold text-[#166534]",
																						children: "Default conversation starters"
																					})]
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "mt-2 text-sm leading-6 text-[#475569]",
																					children: "Teach your AI where your business operates so it can confirm service areas and coverage."
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "mt-4 rounded-2xl bg-white p-4 shadow-sm",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]",
																						children: "Example"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "mt-2 text-sm leading-6 text-[#111827]",
																						children: "Hi 👋 Welcome to Sokoos Internet. How can I help you today?"
																					})]
																				})
																			]
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center justify-between border-t border-[#EEF2F6] pt-4",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => focusIdentityLesson(1),
																			className: "text-sm font-semibold text-[#64748B] transition hover:text-[#111827]",
																			children: "Back"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => completeIdentityLesson(2),
																			className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]",
																			children: ["Save & Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
																		})]
																	})
																]
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
															"data-lesson-index": "3",
															className: activeIdentityStep === 3 ? identityLessonCardClass(3) : "hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex gap-3",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F3FF] text-[#6D28D9]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-5 w-5" })
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-[20px] font-semibold text-[#111827]",
																			children: "Languages"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-2 text-sm leading-6 text-[#6B7280]",
																			children: "Teach your AI which languages to understand and use when customers reach out."
																		})] })]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "space-y-2",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "block text-sm font-semibold text-[#111827]",
																						htmlFor: "primary-language",
																						children: "Primary Language"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm leading-6 text-[#6B7280]",
																						children: "This is the default language your AI uses first."
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "mt-3 flex flex-wrap gap-2",
																						role: "group",
																						"aria-label": "Primary language",
																						children: filteredLanguageOptions.map((language) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							"aria-pressed": primaryLanguage === language,
																							onClick: () => {
																								setPrimaryLanguage(language);
																								setHasUnsavedChanges(true);
																							},
																							className: `rounded-full border px-3 py-2 text-sm font-semibold transition ${primaryLanguage === language ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#A7F3D0] hover:text-[#111827]"}`,
																							children: language
																						}, language))
																					})
																				]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-6 space-y-2",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "block text-sm font-semibold text-[#111827]",
																						htmlFor: "additional-languages",
																						children: "Additional Languages"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm leading-6 text-[#6B7280]",
																						children: "Allow multiple selection so the AI can respond naturally in more than one language."
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "mt-3 flex flex-wrap gap-2",
																						role: "group",
																						"aria-label": "Additional languages",
																						children: filteredLanguageOptions.map((language) => {
																							const selected = supportedLanguages.includes(language);
																							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																								type: "button",
																								"aria-pressed": selected,
																								onClick: () => {
																									setHasUnsavedChanges(true);
																									setSupportedLanguages((current) => current.includes(language) ? current.filter((item) => item !== language) : [...current, language]);
																								},
																								className: `rounded-full border px-3 py-2 text-sm font-semibold transition ${selected ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#A7F3D0] hover:text-[#111827]"}`,
																								children: language
																							}, language);
																						})
																					})
																				]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-6 rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-4",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex items-center gap-2",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																							className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] text-white",
																							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-sm font-semibold text-[#166534]",
																							children: "Automatic language switching"
																						})]
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "mt-3 text-sm leading-6 text-[#475569]",
																						children: "When a customer writes in a supported language, your AI can switch automatically. Unsupported languages are translated before the AI responds, so the conversation stays smooth."
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "mt-3 rounded-2xl bg-white p-3 shadow-sm",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]",
																							children: "Examples"
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																							className: "mt-2 flex flex-wrap gap-2",
																							children: [
																								"English",
																								"Swahili",
																								"French",
																								"Arabic"
																							].map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																								className: "rounded-full bg-[#F8FAFC] px-2.5 py-1 text-xs font-semibold text-[#111827]",
																								children: example
																							}, example))
																						})]
																					})
																				]
																			})
																		]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center justify-between border-t border-[#EEF2F6] pt-4",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => focusIdentityLesson(2),
																			className: "text-sm font-semibold text-[#64748B] transition hover:text-[#111827]",
																			children: "Back"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => completeIdentityLesson(3),
																			className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]",
																			children: ["Continue to business hours ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
																		})]
																	})
																]
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
															"data-lesson-index": "4",
															className: activeIdentityStep === 4 ? identityLessonCardClass(4) : "hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex gap-3",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF7ED] text-[#C2410C]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5" })
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-[20px] font-semibold text-[#111827]",
																			children: "Business Hours"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-2 text-sm leading-6 text-[#6B7280]",
																			children: "Teach your AI when your business is open so it can answer availability questions."
																		})] })]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "grid gap-4 md:grid-cols-2",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "space-y-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "block text-sm font-semibold text-[#111827]",
																						htmlFor: "timezone",
																						children: "Timezone"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
																						id: "timezone",
																						value: timezone,
																						onChange: (event) => {
																							setTimezone(event.target.value);
																							setHasUnsavedChanges(true);
																						},
																						className: AI_TRAINING_FIELD,
																						children: [
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "East Africa Time (EAT)" }),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "West Africa Time (WAT)" }),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Central Africa Time (CAT)" }),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "UTC" })
																						]
																					})]
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "space-y-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "block text-sm font-semibold text-[#111827]",
																						htmlFor: "business-hours",
																						children: "Weekly schedule"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																						id: "business-hours",
																						value: businessHours,
																						onChange: (event) => {
																							setBusinessHours(event.target.value);
																							setHasUnsavedChanges(true);
																						},
																						placeholder: "Mon–Fri, 8:00 AM - 6:00 PM",
																						className: AI_TRAINING_FIELD
																					})]
																				})]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "mt-5 space-y-3",
																				children: [
																					"Monday",
																					"Tuesday",
																					"Wednesday",
																					"Thursday",
																					"Friday",
																					"Saturday",
																					"Sunday"
																				].map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "rounded-xl border border-[#E5E7EB] bg-white p-3",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex flex-wrap items-center justify-between gap-3",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-sm font-semibold text-[#111827]",
																							children: day
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																							className: "inline-flex items-center gap-2 text-sm font-medium text-[#475569]",
																							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																								type: "checkbox",
																								className: "h-4 w-4 rounded border-[#CBD5E1] text-[#22C55E] focus:ring-[#22C55E]"
																							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Closed" })]
																						})]
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "mt-3 grid gap-3 sm:grid-cols-2",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																							className: "block text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]",
																							children: "Open"
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																							type: "text",
																							placeholder: "08:00",
																							className: "mt-1 h-10 w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-sm outline-none focus:border-[#22C55E] focus:bg-white"
																						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																							className: "block text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]",
																							children: "Close"
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																							type: "text",
																							placeholder: "17:00",
																							className: "mt-1 h-10 w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-sm outline-none focus:border-[#22C55E] focus:bg-white"
																						})] })]
																					})]
																				}, day))
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-6 space-y-3",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "space-y-2",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																							className: "block text-sm font-semibold text-[#111827]",
																							htmlFor: "holiday-mode",
																							children: "Holiday Mode"
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																							id: "holiday-mode",
																							rows: 2,
																							placeholder: "We are closed for public holidays and reopen on the next business day.",
																							className: `${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`
																						})]
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "space-y-2",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																							className: "block text-sm font-semibold text-[#111827]",
																							htmlFor: "vacation-mode",
																							children: "Vacation Mode"
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																							id: "vacation-mode",
																							rows: 2,
																							placeholder: "We are currently on vacation and will respond once we are back.",
																							className: `${AI_TRAINING_TEXTAREA} mt-0 w-full resize-none`
																						})]
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "space-y-2",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																							className: "block text-sm font-semibold text-[#111827]",
																							htmlFor: "emergency-contact",
																							children: "Emergency Contact"
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																							id: "emergency-contact",
																							placeholder: "+254 700 000 000",
																							className: AI_TRAINING_FIELD
																						})]
																					})
																				]
																			})
																		]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-4",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center gap-2",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] text-white",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-sm font-semibold text-[#166534]",
																				children: "How the AI uses these hours"
																			})]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-3 text-sm leading-6 text-[#475569]",
																			children: "These hours are used by the AI when customers ask whether the business is open. They help set accurate expectations and guide when the AI should respond with availability information."
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center justify-between border-t border-[#EEF2F6] pt-4",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => focusIdentityLesson(3),
																			className: "text-sm font-semibold text-[#64748B] transition hover:text-[#111827]",
																			children: "Back"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			disabled: !businessHours.trim(),
																			onClick: () => completeIdentityLesson(4),
																			className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155] disabled:cursor-not-allowed disabled:opacity-45",
																			children: ["Save & Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
																		})]
																	})
																]
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
															"data-lesson-index": "5",
															className: activeIdentityStep === 5 ? identityLessonCardClass(5) : "hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex gap-3",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#166534]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-[20px] font-semibold text-[#111827]",
																			children: "Locations"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-2 text-sm leading-6 text-[#6B7280]",
																			children: "Tell your AI where your business operates so it can answer area coverage questions confidently."
																		})] })]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "rounded-2xl border border-[#EEF2F6] bg-[#F8FAFC] p-5 sm:p-6",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "grid gap-4 md:grid-cols-2",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "w-full space-y-2",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "block text-sm font-semibold text-[#111827]",
																						htmlFor: "identity-address",
																						children: "Head Office"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																						id: "identity-address",
																						value: businessInfo.address,
																						onChange: (event) => {
																							setBusinessInfo((current) => ({
																								...current,
																								address: event.target.value
																							}));
																							setHasUnsavedChanges(true);
																						},
																						placeholder: "Nairobi, Kenya",
																						className: `${AI_TRAINING_FIELD} w-full`
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-xs text-[#64748B]",
																						children: "This is the main office your AI can share with customers."
																					})
																				]
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "w-full space-y-2",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "block text-sm font-semibold text-[#111827]",
																						htmlFor: "identity-service-areas",
																						children: "Service Areas"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																						id: "identity-service-areas",
																						value: serviceAreaInput,
																						onChange: (event) => setServiceAreaInput(event.target.value),
																						onKeyDown: (event) => {
																							if (event.key === "Enter") {
																								event.preventDefault();
																								addServiceArea();
																							}
																						},
																						placeholder: "Nairobi, Westlands, Karen",
																						className: `${AI_TRAINING_FIELD} w-full`
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs leading-5 text-[#475569]",
																						children: "Type one location at a time, then press Enter to add it. Example: Nairobi, Westlands, Karen."
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "mt-2 flex flex-wrap gap-2",
																						children: parseServiceAreas(businessInfo.serviceAreas).map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																							type: "button",
																							onClick: () => removeServiceArea(area),
																							className: "inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1 text-xs font-semibold text-[#111827] transition hover:border-[#86EFAC] hover:bg-[#F0FDF4]",
																							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: area }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																								className: "text-[#64748B]",
																								children: "×"
																							})]
																						}, area))
																					})
																				]
																			})]
																		})
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-4",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center gap-2",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] text-white",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-sm font-semibold text-[#166534]",
																				children: "How the AI uses these locations"
																			})]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-3 text-sm leading-6 text-[#475569]",
																			children: "These locations are used by the AI when customers ask, “Do you serve my area?” so it can answer accurately and confidently."
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center justify-between border-t border-[#EEF2F6] pt-4",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => focusIdentityLesson(4),
																			className: "text-sm font-semibold text-[#64748B] transition hover:text-[#111827]",
																			children: "Back"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => completeIdentityLesson(5),
																			className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]",
																			children: ["Save & Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
																		})]
																	})
																]
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
															"data-lesson-index": "6",
															className: activeIdentityStep === 6 ? "relative overflow-hidden rounded-[28px] border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] via-white to-[#F8FAFC] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-6" : "hidden",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "pointer-events-none absolute inset-0 overflow-hidden",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-8 h-24 w-24 rounded-full bg-[#22C55E]/10 blur-3xl" }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-[#3B82F6]/10 blur-3xl" }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-8 top-8 h-3 w-3 rounded-full bg-[#22C55E] animate-bounce" }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "absolute right-12 top-12 h-2.5 w-2.5 rounded-full bg-[#F59E0B] animate-bounce",
																		style: { animationDelay: "180ms" }
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "absolute bottom-14 left-12 h-2 w-2 rounded-full bg-[#6366F1] animate-bounce",
																		style: { animationDelay: "320ms" }
																	})
																]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "relative space-y-6",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "max-w-2xl",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "inline-flex items-center gap-2 rounded-full border border-[#BBF7D0] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#166534]",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Identity training complete"]
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "mt-3 text-[24px] font-semibold tracking-[-0.02em] text-[#111827]",
																					children: "You’ve finished the Identity curriculum"
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "mt-2 text-sm leading-6 text-[#475569]",
																					children: "Your AI now has the voice, greetings, languages, hours, and location details you chose, so it can represent your business with confidence."
																				})
																			]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center gap-4 rounded-2xl border border-[#D1FAE5] bg-white/80 p-4 shadow-sm",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "relative flex h-24 w-24 items-center justify-center rounded-full border border-[#D1FAE5] p-1",
																				style: { background: `conic-gradient(#22C55E ${trainingPercent}%, #E5E7EB 0)` },
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																					className: "flex h-full w-full items-center justify-center rounded-full bg-white",
																					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "text-center",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																							className: "text-[20px] font-semibold text-[#111827]",
																							children: [trainingPercent, "%"]
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-[10px] font-semibold uppercase tracking-[0.2em] text-[#64748B]",
																							children: "ready"
																						})]
																					})
																				})
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-sm font-semibold text-[#111827]",
																				children: "Training progress"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "mt-1 text-sm text-[#64748B]",
																				children: "All key identity lessons are now locked in and ready for use."
																			})] })]
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "grid gap-4 lg:grid-cols-[1.1fr_0.9fr]",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-sm font-semibold text-[#111827]",
																				children: "What’s ready now"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "mt-4 space-y-3",
																				children: [
																					{
																						label: "Business identity",
																						value: businessInfo.name || "Not added",
																						complete: Boolean(businessInfo.name)
																					},
																					{
																						label: "Brand voice",
																						value: personality,
																						complete: Boolean(personality)
																					},
																					{
																						label: "Greetings",
																						value: welcomeMessage || "Default welcome set",
																						complete: Boolean(welcomeMessage)
																					},
																					{
																						label: "Languages",
																						value: supportedLanguages.length ? supportedLanguages.join(" · ") : primaryLanguage,
																						complete: Boolean(primaryLanguage)
																					},
																					{
																						label: "Business hours",
																						value: businessHours || "Schedule captured",
																						complete: Boolean(businessHours)
																					},
																					{
																						label: "Locations",
																						value: businessInfo.address || businessInfo.serviceAreas || "Service area added",
																						complete: Boolean(businessInfo.address || businessInfo.serviceAreas)
																					}
																				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex items-start justify-between gap-3 rounded-xl border border-[#EEF2F6] bg-[#F8FAFC] px-3 py-3",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm font-semibold text-[#111827]",
																						children: item.label
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "mt-1 text-sm text-[#64748B]",
																						children: item.value
																					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																						className: `inline-flex h-6 w-6 items-center justify-center rounded-full ${item.complete ? "bg-[#22C55E] text-white" : "bg-[#F1F5F9] text-[#64748B]"}`,
																						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
																					})]
																				}, item.label))
																			})]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-5 shadow-sm",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex items-center gap-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																						className: "flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E] text-white",
																						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm font-semibold text-[#166534]",
																						children: "Next step"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-[11px] uppercase tracking-[0.24em] text-[#64748B]",
																						children: "Train the knowledge layer"
																					})] })]
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "mt-3 text-sm leading-6 text-[#475569]",
																					children: "You’ve completed the identity training. Continue into Knowledge so your AI can answer frequently asked questions, policies, and offer details with confidence."
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																					className: "mt-5 flex flex-wrap gap-2",
																					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																						type: "button",
																						onClick: () => {
																							setActiveWorkspaceSection("Knowledge Hub");
																							setAiEmployeeLaunched(true);
																							handleSaveChanges();
																						},
																						className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]",
																						children: ["Continue to Knowledge ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
																					})
																				})
																			]
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center justify-between border-t border-[#D1FAE5] pt-4",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => focusIdentityLesson(5),
																			className: "text-sm font-semibold text-[#64748B] transition hover:text-[#111827]",
																			children: "Back"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => {
																				completeIdentityLesson(6);
																				setAiEmployeeLaunched(true);
																				handleSaveChanges();
																			},
																			className: "inline-flex items-center gap-2 rounded-lg bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), aiEmployeeLaunched ? "Completed" : "Finish Identity"]
																		})]
																	})
																]
															})]
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "hidden",
													"aria-hidden": "true",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
														className: "group rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0_12px_32px_rgba(15,23,42,0.10)] transition-shadow duration-200 ease-out hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
															className: "flex cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold text-[#111827] [&::-webkit-details-marker]:hidden xl:hidden",
															children: ["Live AI Preview", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-5 w-5 transition group-open:rotate-180" })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-200 ease-out group-open:max-h-[720px] group-open:opacity-100 xl:mt-0 xl:max-h-[720px] xl:opacity-100",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "hidden xl:flex items-center justify-between gap-3",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-base font-semibold text-[#111827]",
																		children: "Live AI Preview"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-0.5 text-xs text-[#6B7280]",
																		children: "Watch your AI learn in real time."
																	})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[11px] font-semibold text-[#166534]",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#22C55E]" }), " Live"]
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mx-auto mt-4 w-full max-w-[326px] rounded-[32px] bg-[#111827] p-2 shadow-[0_18px_42px_rgba(15,23,42,0.22)]",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "overflow-hidden rounded-[25px] bg-[#F8FAFB]",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex items-center justify-between bg-[#111827] px-5 py-2 text-[10px] font-semibold text-white",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "9:41" }),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-16 rounded-full bg-white/90" }),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "●●●" })
																				]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex items-center gap-3 border-b border-[#E5E7EB] bg-white px-3.5 py-3",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "flex h-9 w-9 overflow-hidden items-center justify-center rounded-full bg-[#ECFDF5] text-sm font-semibold text-[#166534]",
																						children: logoPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																							src: logoPreview,
																							alt: "Business logo",
																							className: "h-full w-full object-cover"
																						}) : businessInfo.name.slice(0, 1) || "B"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "min-w-0 flex-1",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "truncate text-sm font-semibold text-[#111827]",
																							children: businessInfo.name || "Your business"
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-[11px] text-[#16A34A]",
																							children: "Online · replies instantly"
																						})]
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-[#94A3B8]" })
																				]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				ref: previewMessagesRef,
																				"aria-live": "polite",
																				"aria-atomic": "true",
																				className: "max-h-[330px] min-h-[286px] space-y-2.5 overflow-y-auto bg-[#F8FAFB] p-3 animate-in fade-in-0 slide-in-from-bottom-1 duration-300",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-center text-[10px] font-medium text-[#94A3B8]",
																						children: "Today"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "ml-auto w-fit max-w-[86%] rounded-2xl rounded-br-sm bg-[#DCFCE7] px-3 py-2 text-[12px] text-[#111827]",
																						children: previewLanguageCopy.customerGreeting
																					}),
																					previewReplyVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "w-fit max-w-[91%] animate-in fade-in-0 slide-in-from-bottom-1 duration-300 rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12px] leading-5 text-[#111827] shadow-sm",
																						children: welcomeMessage || previewLanguageCopy.defaultWelcome
																					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-3 py-3 shadow-sm",
																						"aria-label": "AI is typing",
																						children: [
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-[#94A3B8]" }),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-[#94A3B8] [animation-delay:120ms]" }),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-[#94A3B8] [animation-delay:240ms]" })
																						]
																					}),
																					previewQuestion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "ml-auto w-fit max-w-[86%] rounded-2xl rounded-br-sm bg-[#DCFCE7] px-3 py-2 text-[12px] text-[#111827]",
																						children: previewQuestion
																					}), previewReplyVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "w-fit max-w-[91%] animate-in fade-in-0 slide-in-from-bottom-1 duration-300 rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12px] leading-5 text-[#111827] shadow-sm",
																						children: previewQuestionReply
																					})] }),
																					!previewQuestion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																							className: "ml-auto w-fit max-w-[86%] rounded-2xl rounded-br-sm bg-[#DCFCE7] px-3 py-2 text-[12px] text-[#111827]",
																							children: previewLanguageCopy.pricingQuestion
																						}),
																						previewReplyVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																							className: "w-fit max-w-[91%] animate-in fade-in-0 slide-in-from-bottom-1 duration-300 rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12px] leading-5 text-[#111827] shadow-sm",
																							children: previewBusinessContext
																						}),
																						previewReplyVisible && previewFollowUp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																							className: "w-fit max-w-[91%] animate-in fade-in-0 duration-300 rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12px] leading-5 text-[#111827] shadow-sm",
																							children: previewFollowUp
																						})
																					] })
																				]
																			}, `${previewRefreshKey}-${previewQuestion ?? "default"}`),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex items-center gap-2 border-t border-[#E5E7EB] bg-white px-3 py-2.5",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 text-[#94A3B8]" }),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "flex-1 rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[11px] text-[#94A3B8]",
																						children: "Message"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 text-[#22C55E]" })
																				]
																			})
																		]
																	})
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-4 grid grid-cols-3 gap-2",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => setPreviewQuestion("Hello"),
																			className: "rounded-lg border border-[#E5E7EB] bg-white px-2 py-2 text-[11px] font-semibold text-[#475569] transition hover:border-[#86EFAC] hover:text-[#166534]",
																			children: "Test greeting"
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => setPreviewQuestion("How much is your service?"),
																			className: "rounded-lg border border-[#E5E7EB] bg-white px-2 py-2 text-[11px] font-semibold text-[#475569] transition hover:border-[#86EFAC] hover:text-[#166534]",
																			children: "Ask question"
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => setPreviewQuestion(null),
																			className: "rounded-lg border border-[#E5E7EB] bg-white px-2 py-2 text-[11px] font-semibold text-[#475569] transition hover:border-[#CBD5E1] hover:text-[#111827]",
																			children: "Reset"
																		})
																	]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-3",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]",
																		children: "Try a quick prompt"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-2 flex flex-wrap gap-1.5",
																		children: [
																			"How much is your service?",
																			"Where are you located?",
																			"What are your hours?"
																		].map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => setPreviewQuestion(prompt),
																			className: "rounded-full bg-[#F1F5F9] px-2.5 py-1.5 text-[11px] font-medium text-[#475569] transition hover:bg-[#ECFDF5] hover:text-[#166534]",
																			children: prompt
																		}, prompt))
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-4 border-t border-[#EEF2F6] pt-3",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-xs font-semibold text-[#111827]",
																		children: "What changed"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-2 grid gap-1.5 text-[11px] text-[#64748B]",
																		children: [
																			"Greeting updated",
																			`${personality} personality`,
																			supportedLanguages.join(" + ") || primaryLanguage,
																			`Available ${businessHours || "not set"}`
																		].map((change) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																			className: "flex items-center gap-2",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 shrink-0 text-[#22C55E]" }), change]
																		}, change))
																	})]
																})
															]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
														className: activeIdentityStep === 0 ? "rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]" : "hidden",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F9FAFB] p-3",
																children: [logoPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: logoPreview,
																	alt: "Uploaded business logo",
																	className: "mx-auto h-20 w-20 rounded-[16px] object-cover"
																}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mx-auto flex h-20 w-20 items-center justify-center rounded-[16px] bg-[#E5F6EC] text-2xl font-semibold text-[#065F46]",
																	children: businessInfo.name.slice(0, 1) || "B"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-3 text-center text-xs text-[#64748B]",
																	children: "PNG, JPG or SVG · Maximum 5MB"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "mt-4 flex flex-wrap gap-2",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																		className: "inline-flex cursor-pointer items-center justify-center rounded-[16px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#F3F4F6] hover:shadow-sm",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "mr-2 h-4 w-4" }),
																			"Add logo",
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																				type: "file",
																				accept: "image/png,image/jpeg,image/svg+xml",
																				className: "hidden",
																				onChange: (event) => {
																					const file = event.target.files?.[0];
																					if (!file) return;
																					if (![
																						"image/png",
																						"image/jpeg",
																						"image/svg+xml"
																					].includes(file.type)) {
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
																				}
																			})
																		]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		type: "button",
																		onClick: () => {
																			setLogoPreview(null);
																			setLogoPreviewOpen(false);
																			setAvatarFileName("");
																			setLogoError("");
																			setHasUnsavedChanges(true);
																		},
																		disabled: !logoPreview,
																		className: "rounded-[16px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#F3F4F6] hover:shadow-sm disabled:cursor-not-allowed disabled:text-[#94A3B8]",
																		children: "Remove"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		type: "button",
																		onClick: () => setLogoPreviewOpen(true),
																		disabled: !logoPreview,
																		className: "rounded-[16px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#F3F4F6] hover:shadow-sm disabled:cursor-not-allowed disabled:text-[#94A3B8]",
																		children: "Preview"
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-3 text-sm text-[#64748B]",
																children: logoError || avatarFileName || "No logo added yet"
															}),
															logoPreviewOpen && logoPreview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "mt-4 rounded-[16px] border border-[#E5E7EB] bg-[#F9FAFB] p-4",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center justify-between gap-3",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Your AI’s logo"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		type: "button",
																		onClick: () => setLogoPreviewOpen(false),
																		className: "text-sm font-semibold text-[#475569] transition-colors duration-200 hover:text-[#111827]",
																		children: "Close"
																	})]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: logoPreview,
																	alt: "Business logo preview",
																	className: "mt-4 h-40 w-full rounded-[16px] bg-white object-contain"
																})]
															})
														]
													})]
												})] })
											})
										})
									}),
									activeWorkspaceSection === "Knowledge Hub" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KnowledgeWorkspace, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeLessonTabs, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrentLesson, {})] }),
									activeWorkspaceSection === "Catalogue" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full max-w-[1600px] min-w-0 space-y-6 overflow-x-hidden lg:space-y-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-[32px] border border-[#E5E7EB] bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)] sm:p-7",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
															className: "text-3xl font-semibold tracking-[-0.02em] text-[#111827]",
															children: "Catalogue Workspace"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 max-w-3xl text-sm leading-6 text-[#475569]",
															children: "Manage your catalogue items, pricing, inventory, media, and AI readiness in one modern workspace."
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "w-full lg:w-[340px]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "lg:sticky lg:top-4 rounded-[26px] border border-[#E5E7EB] bg-[#F8FBFF] p-4 shadow-sm",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center justify-between gap-4",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "min-w-0",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-[10px] font-semibold uppercase tracking-[0.24em] text-[#64748B]",
																			children: "Catalogue Health"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-1 text-sm font-semibold text-[#111827]",
																			children: "AI readiness"
																		})]
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "text-right",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "text-[11px] text-[#64748B]",
																			children: "Overall"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "mt-1 text-lg font-semibold text-[#111827]",
																			children: [catalogueHealthConfidence, "%"]
																		})]
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mt-4 space-y-3 text-sm text-[#475569]",
																	children: [
																		{
																			label: "AI Readiness",
																			percentage: catalogueHealthMetrics.find((item) => item.label === "AI Ready")?.percentage ?? 0
																		},
																		{
																			label: "Products",
																			percentage: catalogueHealthMetrics.find((item) => item.label === "Products")?.percentage ?? 0
																		},
																		{
																			label: "Prices",
																			percentage: catalogueHealthMetrics.find((item) => item.label === "Prices")?.percentage ?? 0
																		},
																		{
																			label: "Media",
																			percentage: catalogueHealthMetrics.find((item) => item.label === "Media")?.percentage ?? 0
																		},
																		{
																			label: "FAQs",
																			percentage: catalogProducts.length > 0 ? Math.round(catalogProducts.filter((product) => product.faqs && product.faqs.length > 0).length / catalogProducts.length * 100) : 0
																		}
																	].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "space-y-2",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center justify-between gap-2 text-xs text-[#475569]",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																				className: "font-semibold text-[#111827]",
																				children: [item.percentage, "%"]
																			})]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "h-2 rounded-full bg-[#E5E7EB]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "h-full rounded-full bg-[#22C55E]",
																				style: { width: `${item.percentage}%` }
																			})
																		})]
																	}, item.label))
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-4 rounded-[12px] border border-[#E5E7EB] bg-white p-3 text-[11px] text-[#475569]",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center justify-between gap-2 py-1",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Missing descriptions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "font-semibold text-[#111827]",
																				children: catalogProducts.filter((p) => !(p.description && p.description.trim().length > 0)).length
																			})]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center justify-between gap-2 py-1",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Missing images" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "font-semibold text-[#111827]",
																				children: catalogProducts.filter((p) => !(p.image && p.image.trim().length > 0) && (p.mediaAssets ?? []).length === 0).length
																			})]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center justify-between gap-2 py-1",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Missing FAQs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "font-semibold text-[#111827]",
																				children: catalogProducts.filter((p) => !(p.faqs && p.faqs.length > 0)).length
																			})]
																		})
																	]
																})
															]
														})
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-5 w-full xl:max-w-[1100px]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: handleAddItemClick,
																className: "inline-flex h-11 items-center justify-center rounded-[16px] bg-[#111827] px-5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#1F2937]",
																children: addButtonLabel
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "relative",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																	type: "button",
																	onClick: () => setImportMenuOpen((s) => !s),
																	className: "inline-flex h-11 items-center justify-center rounded-[16px] border border-[#E5E7EB] bg-white px-5 text-sm font-semibold text-[#111827] shadow-sm transition duration-200 hover:bg-[#F8FAFB]",
																	children: ["Import", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "ml-2 h-4 w-4 text-[#6B7280]" })]
																}), importMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "absolute right-0 top-full z-50 mt-2 w-48 rounded-[18px] border border-[#E5E7EB] bg-white shadow-lg",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																			className: "block cursor-pointer px-3 py-3 text-sm text-[#111827] transition hover:bg-[#F8FAFB]",
																			children: ["CSV", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																				type: "file",
																				accept: ".csv",
																				className: "hidden",
																				onChange: (e) => {
																					setImportMenuOpen(false);
																					simulateImport("CSV", e.target.files?.[0] ?? null);
																				}
																			})]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																			className: "block cursor-pointer px-3 py-3 text-sm text-[#111827] transition hover:bg-[#F8FAFB]",
																			children: ["Excel", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																				type: "file",
																				accept: ".xlsx,.xls",
																				className: "hidden",
																				onChange: (e) => {
																					setImportMenuOpen(false);
																					simulateImport("Excel", e.target.files?.[0] ?? null);
																				}
																			})]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																			className: "block cursor-pointer rounded-b-[18px] px-3 py-3 text-sm text-[#111827] transition hover:bg-[#F8FAFB]",
																			children: ["PDF", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																				type: "file",
																				accept: ".pdf",
																				className: "hidden",
																				onChange: (e) => {
																					setImportMenuOpen(false);
																					simulateImport("PDF Catalogues", e.target.files?.[0] ?? null);
																				}
																			})]
																		})
																	]
																})]
															})]
														})
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid gap-6",
													children: (() => {
														const query = productSearch.trim().toLowerCase();
														const filtered = catalogProducts.filter((product) => {
															if (!query) return true;
															return [
																product.name,
																product.category,
																product.sku ?? "",
																...product.tags ?? [],
																product.description
															].filter((value) => typeof value === "string").join(" ").toLowerCase().includes(query);
														}).filter((product) => {
															if (selectedCatalogueTab === "All") return true;
															const expectedType = CATALOG_TAB_TO_PRODUCT_TYPE[selectedCatalogueTab];
															return expectedType ? product.type === expectedType : true;
														});
														return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Catalogue items"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-sm text-[#64748B]",
																		children: "Products and services are managed as catalogue items. Update pricing, inventory, media, and AI readiness directly on each item."
																	})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "inline-flex items-center gap-3 rounded-[18px] border border-[#E5E7EB] bg-[#F8FAFB] px-4 py-3 text-sm font-semibold text-[#111827] shadow-sm",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: filtered.length }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-[#64748B]",
																			children: "items"
																		})]
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-4 flex flex-wrap items-center gap-3",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "flex flex-wrap items-center gap-3",
																		children: [...sortedCatalogueFilterTabs].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => setSelectedCatalogueTab(tab),
																			className: `inline-flex h-10 items-center justify-center rounded-full border px-4 text-xs font-semibold transition-colors duration-200 ${selectedCatalogueTab === tab ? "border-[#111827] bg-[#111827] text-white shadow-sm" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#CBD5E1] hover:bg-[#F8FAFB]"}`,
																			children: tab
																		}, tab))
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "ml-auto inline-flex items-center gap-2 rounded-full bg-white/50 p-1",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			"aria-label": "Grid view",
																			title: "Grid view",
																			onClick: () => setCatalogView("grid"),
																			className: `inline-flex h-10 w-10 items-center justify-center rounded-full ${catalogView === "grid" ? "bg-[#111827] text-white shadow-sm" : "text-[#475569] hover:bg-[#F3F4F6]"}`,
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "h-4 w-4" })
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			"aria-label": "Table view",
																			title: "Table view",
																			onClick: () => setCatalogView("table"),
																			className: `inline-flex h-10 w-10 items-center justify-center rounded-full ${catalogView === "table" ? "bg-[#111827] text-white shadow-sm" : "text-[#475569] hover:bg-[#F3F4F6]"}`,
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-4 w-4" })
																		})]
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-3 flex flex-wrap items-center gap-3",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => {},
																			className: "inline-flex h-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-4 text-xs font-semibold text-[#111827] shadow-sm transition-colors duration-200 hover:border-[#CBD5E1] hover:bg-[#F8FAFB]",
																			children: ["Total Items: ", filtered.length]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => {},
																			className: "inline-flex h-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-4 text-xs font-semibold text-[#111827] shadow-sm transition hover:border-[#CBD5E1] hover:bg-[#F8FAFB]",
																			children: ["Low Stock: ", filtered.filter((product) => typeof product.currentStock === "number" && product.currentStock <= 5).length]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => {},
																			className: "inline-flex h-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-4 text-xs font-semibold text-[#111827] shadow-sm transition hover:border-[#CBD5E1] hover:bg-[#F8FAFB]",
																			children: ["Missing Images: ", filtered.filter((product) => !(product.image && product.image.trim().length > 0) && (product.mediaAssets ?? []).length === 0).length]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => {},
																			className: "inline-flex h-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-4 text-xs font-semibold text-[#111827] shadow-sm transition hover:border-[#CBD5E1] hover:bg-[#F8FAFB]",
																			children: ["Missing FAQs: ", filtered.filter((product) => !(product.faqs && product.faqs.length > 0)).length]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => {},
																			className: "inline-flex h-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-4 text-xs font-semibold text-[#111827] shadow-sm transition hover:border-[#CBD5E1] hover:bg-[#F8FAFB]",
																			children: [
																				"AI Ready: ",
																				filtered.length > 0 ? Math.round(filtered.filter((product) => product.name?.trim() && product.category?.trim() && product.description?.trim()).length / filtered.length * 100) : 0,
																				"%"
																			]
																		})
																	]
																}),
																catalogProducts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-6 rounded-[28px] border border-dashed border-[#CBD5E1] bg-[#F8FAFB] p-8 text-center shadow-sm",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-[2rem] bg-white shadow-sm",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-[#DBEAFE] text-[#1D4ED8]",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
																					xmlns: "http://www.w3.org/2000/svg",
																					viewBox: "0 0 64 64",
																					fill: "none",
																					className: "h-16 w-16",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
																							x: "8",
																							y: "20",
																							width: "48",
																							height: "32",
																							rx: "8",
																							fill: "#EFF6FF"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																							d: "M16 28h32",
																							stroke: "#2563EB",
																							strokeWidth: "3",
																							strokeLinecap: "round"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																							d: "M16 36h20",
																							stroke: "#2563EB",
																							strokeWidth: "3",
																							strokeLinecap: "round"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																							d: "M30 20v-8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v8",
																							stroke: "#2563EB",
																							strokeWidth: "3",
																							strokeLinecap: "round"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																							cx: "44",
																							cy: "34",
																							r: "4",
																							fill: "#2563EB"
																						})
																					]
																				})
																			})
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-2xl font-semibold text-[#111827]",
																			children: "No catalogue items yet"
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mx-auto mt-3 max-w-md text-sm leading-6 text-[#475569]",
																			children: "Add your first product or service to train your AI."
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "mt-6 flex justify-center",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																				type: "button",
																				onClick: handleAddItemClick,
																				className: "inline-flex h-12 items-center justify-center rounded-[16px] bg-[#111827] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1F2937]",
																				children: "Add Item"
																			})
																		})
																	]
																}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-6 rounded-[28px] border border-dashed border-[#CBD5E1] bg-[#F8FAFB] p-10 text-center shadow-sm",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-[2rem] bg-white shadow-sm",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "flex h-20 w-20 items-center justify-center rounded-[2rem] bg-[#DBEAFE] text-[#1D4ED8]",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
																					xmlns: "http://www.w3.org/2000/svg",
																					viewBox: "0 0 48 48",
																					fill: "none",
																					className: "h-12 w-12",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
																							x: "8",
																							y: "14",
																							width: "32",
																							height: "20",
																							rx: "6",
																							fill: "#EFF6FF"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																							d: "M14 20h20",
																							stroke: "#2563EB",
																							strokeWidth: "2",
																							strokeLinecap: "round"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																							d: "M14 26h12",
																							stroke: "#2563EB",
																							strokeWidth: "2",
																							strokeLinecap: "round"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																							cx: "34",
																							cy: "18",
																							r: "3",
																							fill: "#2563EB"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																							d: "M34 22v8",
																							stroke: "#2563EB",
																							strokeWidth: "2",
																							strokeLinecap: "round"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																							d: "M31 25h6",
																							stroke: "#2563EB",
																							strokeWidth: "2",
																							strokeLinecap: "round"
																						})
																					]
																				})
																			})
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-2xl font-semibold text-[#111827]",
																			children: "No items found."
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mx-auto mt-3 max-w-xl text-sm leading-6 text-[#475569]",
																			children: "The selected filter returned no catalogue items. Add your first item to populate the catalogue workspace."
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: handleAddItemClick,
																			className: "mt-6 inline-flex items-center justify-center rounded-[16px] bg-[#111827] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1F2937]",
																			children: "Add your first item"
																		})
																	]
																}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mt-6",
																	children: catalogView === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
																		children: filtered.map((item) => {
																			const readinessLabel = getCatalogueItemReadinessLabel(item);
																			const isAvailable = item.availability === "In stock" || item.availability === "Available";
																			const itemTypeLabel = {
																				Product: "Product",
																				Service: "Service",
																				Subscription: "Subscription",
																				"Digital Product": "Digital",
																				Rental: "Rental",
																				Membership: "Membership"
																			}[item.type] ?? item.type;
																			const itemCategory = typeof item.category === "string" ? item.category.trim() : "";
																			const hasFaqs = item.faqs && item.faqs.length > 0;
																			const faqLabel = hasFaqs ? "FAQ Ready" : "Needs FAQ";
																			const faqClass = hasFaqs ? "bg-[#ECFDF5] text-[#166534]" : "bg-[#FEF3C7] text-[#B45309]";
																			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
																				role: "button",
																				tabIndex: 0,
																				onClick: () => openProductDrawer(item.id),
																				onKeyDown: (e) => e.key === "Enter" && openProductDrawer(item.id),
																				className: "group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(15,23,42,0.12)]",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "relative overflow-hidden bg-[#F5F5F4] h-40 sm:h-44",
																					children: [
																						item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																							src: item.image,
																							alt: item.name,
																							className: "h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
																						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																							className: "flex h-full w-full items-center justify-center bg-[#E5E7EB]",
																							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
																								xmlns: "http://www.w3.org/2000/svg",
																								viewBox: "0 0 24 24",
																								fill: "none",
																								stroke: "currentColor",
																								className: "h-12 w-12 text-[#94A3B8]",
																								"aria-hidden": "true",
																								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																									strokeLinecap: "round",
																									strokeLinejoin: "round",
																									strokeWidth: 1.5,
																									d: "M3 7.5a4.5 4.5 0 0 1 9 0 4.5 4.5 0 1 1 9 0v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6Z"
																								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																									strokeLinecap: "round",
																									strokeLinejoin: "round",
																									strokeWidth: 1.5,
																									d: "M6.75 15.75 9 13.5l1.5 1.5 3-3 3.75 3.75"
																								})]
																							})
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" }),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																							className: "absolute right-3 top-3",
																							onClick: (e) => e.stopPropagation(),
																							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
																								asChild: true,
																								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																									type: "button",
																									className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#475569] shadow-sm ring-1 ring-[#E5E7EB] transition-colors duration-200 hover:bg-white",
																									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "h-4 w-4" })
																								})
																							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
																								align: "end",
																								className: "w-40",
																								children: [
																									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
																										onSelect: () => openProductDrawer(item.id),
																										children: "Edit"
																									}),
																									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
																										onSelect: () => duplicateCatalogProduct(item.id),
																										children: "Duplicate"
																									}),
																									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
																										onSelect: () => previewCatalogProduct(item.id),
																										children: "Preview"
																									}),
																									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
																										onSelect: () => trainCatalogProductAI(item.id),
																										children: "Train AI"
																									}),
																									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
																										onSelect: () => deleteCatalogProduct(item.id),
																										children: "Delete"
																									})
																								]
																							})] })
																						})
																					]
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																					className: "flex flex-1 flex-col justify-between gap-4 p-5",
																					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "space-y-3",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																							className: "flex items-start justify-between gap-3",
																							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																								className: "min-w-0",
																								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																									className: "text-base font-semibold text-[#111827] line-clamp-2",
																									children: item.name
																								}), itemCategory ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																									className: "mt-1 text-sm text-[#64748B] line-clamp-1",
																									children: itemCategory
																								}) : null]
																							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																								className: "shrink-0 text-sm font-semibold text-[#111827]",
																								children: item.price
																							})]
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																							className: "flex flex-wrap gap-2",
																							children: [
																								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																									className: "inline-flex h-9 items-center rounded-full border border-[#E5E7EB] bg-[#F8FAFB] px-3.5 text-xs font-semibold text-[#475569]",
																									children: itemTypeLabel
																								}),
																								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																									className: `inline-flex h-9 items-center rounded-full px-3.5 text-xs font-semibold ${isAvailable ? "bg-[#ECFDF5] text-[#166534]" : "bg-[#FFFBEB] text-[#B45309]"}`,
																									children: item.availability
																								}),
																								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																									className: `inline-flex h-9 items-center rounded-full px-3.5 text-xs font-semibold ${readinessLabel === "100% Ready" ? "bg-[#ECFDF5] text-[#166534]" : "bg-[#FFFBEB] text-[#B45309]"}`,
																									children: readinessLabel
																								}),
																								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																									className: `inline-flex h-9 items-center rounded-full px-3.5 text-xs font-semibold ${faqClass}`,
																									children: faqLabel
																								})
																							]
																						})]
																					})
																				})]
																			}, item.id);
																		})
																	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "overflow-hidden rounded-[12px] border border-[#E5E7EB]",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
																			className: "min-w-full text-sm",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
																				className: "bg-[#F8FAFB]",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
																						className: "px-4 py-3 text-left font-semibold text-[#475569]",
																						children: "Image"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
																						className: "px-4 py-3 text-left font-semibold text-[#475569]",
																						children: "Name"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
																						className: "px-4 py-3 text-left font-semibold text-[#475569]",
																						children: "Category"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
																						className: "px-4 py-3 text-left font-semibold text-[#475569]",
																						children: "Price"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
																						className: "px-4 py-3 text-left font-semibold text-[#475569]",
																						children: "Inventory"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
																						className: "px-4 py-3 text-left font-semibold text-[#475569]",
																						children: "AI Ready"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
																						className: "px-4 py-3 text-left font-semibold text-[#475569]",
																						children: "Status"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
																						className: "px-4 py-3 text-right font-semibold text-[#475569]",
																						children: "Actions"
																					})
																				] })
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
																				className: "divide-y bg-white",
																				children: filtered.map((item) => {
																					const readinessLabel = getCatalogueItemReadinessLabel(item);
																					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
																						onClick: () => openProductDrawer(item.id),
																						className: "hover:bg-white hover:shadow-sm transition-transform hover:-translate-y-1 cursor-pointer",
																						children: [
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																								className: "px-4 py-3 align-top",
																								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																									src: item.image,
																									alt: item.name,
																									className: "h-12 w-12 rounded-md object-cover"
																								})
																							}),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																								className: "px-4 py-3 align-top",
																								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																									className: "text-sm font-semibold text-[#111827]",
																									children: item.name
																								})
																							}),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																								className: "px-4 py-3 align-top text-sm text-[#64748B]",
																								children: item.category
																							}),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																								className: "px-4 py-3 align-top text-sm text-[#111827]",
																								children: item.price
																							}),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																								className: "px-4 py-3 align-top text-sm text-[#111827]",
																								children: item.currentStock ?? "-"
																							}),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																								className: "px-4 py-3 align-top",
																								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																									className: `rounded-full px-3 py-1 text-xs font-semibold ${readinessLabel === "100% Ready" ? "bg-[#ECFDF5] text-[#166534]" : "bg-[#FFFBEB] text-[#B45309]"}`,
																									children: readinessLabel
																								})
																							}),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																								className: "px-4 py-3 align-top text-sm",
																								children: item.availability
																							}),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																								className: "px-4 py-3 align-top text-right",
																								onClick: (e) => e.stopPropagation(),
																								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
																									asChild: true,
																									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																										type: "button",
																										className: "inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-[#475569] shadow-sm ring-1 ring-[#E5E7EB] transition hover:bg-white",
																										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "h-4 w-4" })
																									})
																								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
																									align: "end",
																									className: "w-40",
																									children: [
																										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
																											onSelect: () => openProductDrawer(item.id),
																											children: "Edit"
																										}),
																										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
																											onSelect: () => duplicateCatalogProduct(item.id),
																											children: "Duplicate"
																										}),
																										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
																											onSelect: () => previewCatalogProduct(item.id),
																											children: "Preview"
																										}),
																										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
																											onSelect: () => trainCatalogProductAI(item.id),
																											children: "Train AI"
																										}),
																										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
																											onSelect: () => deleteCatalogProduct(item.id),
																											children: "Delete"
																										})
																									]
																								})] })
																							})
																						]
																					}, item.id);
																				})
																			})]
																		})
																	})
																})
															]
														});
													})()
												})
											]
										})
									}),
									activeWorkspaceSection === "Sales Playbooks" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex justify-end",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: addPlaybook,
													className: "rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white",
													children: "Create Playbook"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesLessonTabs, {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "space-y-2",
													children: playbooks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold",
																children: p.title
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-xs text-[#64748B]",
																children: [p.steps.length, " steps"]
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-2",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		onClick: () => updatePlaybook(p.id, { allowed: !p.allowed }),
																		className: `rounded-[8px] px-2 py-1 text-sm ${p.allowed ? "bg-[#ECFDF5] border border-[#22C55E] text-[#065F46]" : "border border-[#E5E7EB] bg-white"}`,
																		children: p.allowed ? "Allowed" : "Allow"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		onClick: () => {
																			setEditingPlaybookId(p.id);
																		},
																		className: "rounded-[8px] border border-[#E5E7EB] px-2 py-1 text-sm",
																		children: "Edit"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		onClick: () => duplicatePlaybook(p.id),
																		className: "rounded-[8px] border border-[#E5E7EB] px-2 py-1 text-sm",
																		children: "Duplicate"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		onClick: () => deletePlaybook(p.id),
																		className: "rounded-[8px] border border-[#FECACA] px-2 py-1 text-sm text-[#B91C1C]",
																		children: "Delete"
																	})
																]
															})]
														})
													}, p.id))
												}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: editingPlaybookId ? (() => {
													const p = playbooks.find((x) => x.id === editingPlaybookId);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-[12px] border border-[#EEF2F6] bg-white p-4",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	value: p.title,
																	onChange: (e) => updatePlaybook(p.id, { title: e.target.value }),
																	className: "text-lg font-semibold w-full rounded-md border border-transparent px-2 py-1"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "flex gap-2 ml-4",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		onClick: () => {
																			setEditingPlaybookId(null);
																		},
																		className: "rounded-[8px] border border-[#E5E7EB] px-3 py-1 text-sm",
																		children: "Done"
																	})
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-4 overflow-auto",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "flex items-center gap-2",
																	children: p.steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-[8px] border border-[#E5E7EB] bg-white px-3 py-2 min-w-[160px]",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																				value: s,
																				onChange: (e) => updateStep(p.id, i, e.target.value),
																				className: "w-full text-sm"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-2 flex gap-1",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																					onClick: () => addStep(p.id, i),
																					className: "text-xs rounded px-2 py-1 border border-[#E5E7EB]",
																					children: "+ Add after"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																					onClick: () => removeStep(p.id, i),
																					className: "text-xs rounded px-2 py-1 border border-[#FECACA] text-[#B91C1C]",
																					children: "Remove"
																				})]
																			})]
																		}), i < p.steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "mx-2 flex items-center",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
																				width: "30",
																				height: "24",
																				viewBox: "0 0 24 24",
																				fill: "none",
																				xmlns: "http://www.w3.org/2000/svg",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																					d: "M3 12h14",
																					stroke: "#9CA3AF",
																					strokeWidth: "1.5",
																					strokeLinecap: "round",
																					strokeLinejoin: "round"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																					d: "M14 5l7 7-7 7",
																					stroke: "#9CA3AF",
																					strokeWidth: "1.5",
																					strokeLinecap: "round",
																					strokeLinejoin: "round"
																				})]
																			})
																		})]
																	}, i))
																})
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-[12px] border border-[#EEF2F6] bg-white p-4",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm text-[#64748B]",
																children: "Preview"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-3 flex items-center gap-3 overflow-auto",
																children: p.steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "rounded-[8px] bg-[#F8FAFB] px-4 py-2 text-sm",
																		children: s
																	}), i < p.steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
																		className: "mx-2",
																		width: "24",
																		height: "24",
																		viewBox: "0 0 24 24",
																		fill: "none",
																		xmlns: "http://www.w3.org/2000/svg",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																			d: "M3 12h14",
																			stroke: "#9CA3AF",
																			strokeWidth: "1.5",
																			strokeLinecap: "round",
																			strokeLinejoin: "round"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																			d: "M14 5l7 7-7 7",
																			stroke: "#9CA3AF",
																			strokeWidth: "1.5",
																			strokeLinecap: "round",
																			strokeLinejoin: "round"
																		})]
																	})]
																}, i))
															})]
														})]
													});
												})() : null })]
											})
										]
									}),
									activeWorkspaceSection === "Skills" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsLessonTabs, {})
									}),
									activeWorkspaceSection === "Policies" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-4",
											children: policySections.map((sec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => togglePolicy(sec.id),
													className: "group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-[#F8FAFC]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-base font-semibold text-[#111827]",
														children: sec.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm text-[#64748B]",
														children: "Click to expand and edit"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm font-medium text-[#475569]",
														children: sec.expanded ? "Collapse" : "Expand"
													})]
												}), sec.expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "px-4 pb-4 pt-2 space-y-4",
													children: sec.id === "pol-1" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-start justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Customer Policies"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-2 text-sm text-[#475569]",
																	children: "Define the policies your AI should explain when customers ask about returns, refunds, cancellations, warranties, or other customer-facing rules."
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => toggleNotApplicable("pol-1"),
																	className: `rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${isNotApplicable("pol-1") ? "bg-[#F3F4F6] text-[#64748B]" : "bg-white border border-[#E5E7EB] hover:bg-[#F8FAFC]"}`,
																	children: isNotApplicable("pol-1") ? "Not applicable" : "Mark not applicable"
																}) })]
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "space-y-4",
															children: customerPolicies.map((policy) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "space-y-2",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex flex-wrap items-center gap-2",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-sm font-semibold text-[#111827]",
																				children: policy.name
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: `rounded-full px-2 py-0.5 text-[11px] font-semibold ${policy.enabled ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#FEE2E2] text-[#B91C1C]"}`,
																				children: policy.enabled ? "Enabled" : "Disabled"
																			})]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-sm text-[#475569]",
																			children: policy.description
																		})]
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center gap-2",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => toggleCustomerPolicyEnabled(policy.id),
																			className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																			children: policy.enabled ? "Disable" : "Mark not applicable"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => toggleCustomerPolicyEditing(policy.id),
																			className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																			children: policy.editing ? "Save" : "Edit"
																		})]
																	})]
																}), policy.editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-3 space-y-3 rounded-[16px] border border-[#E5E7EB] bg-white p-4",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		value: policy.name,
																		onChange: (e) => updateCustomerPolicyField(policy.id, "name", e.target.value),
																		className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																		value: policy.description,
																		onChange: (e) => updateCustomerPolicyField(policy.id, "description", e.target.value),
																		className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]"
																	})]
																})]
															}, policy.id))
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-[16px] border border-dashed border-[#E5E7EB] bg-white p-4",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Common optional policy types"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-3 flex flex-wrap gap-2",
																children: policyTypeOptions.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => addCustomerPolicy(type),
																	className: "rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-[#475569] hover:bg-[#F8FAFC]",
																	children: type
																}, type))
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex justify-end",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => addCustomerPolicy(),
																className: "rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]",
																children: "Add Policy"
															})
														})
													] }) : sec.id === "pol-2" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Pricing & Payment"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#475569]",
																children: "Define the payment and pricing rules your AI should communicate accurately to customers."
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => toggleNotApplicable("pol-2"),
																className: `rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${isNotApplicable("pol-2") ? "bg-[#F3F4F6] text-[#64748B]" : "bg-white border border-[#E5E7EB] hover:bg-[#F8FAFC]"}`,
																children: isNotApplicable("pol-2") ? "Not applicable" : "Mark not applicable"
															}) })]
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-4",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "flex items-center justify-between gap-4",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: "Payment Methods"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-2 text-sm text-[#475569]",
																			children: "List the payment methods your AI can communicate to customers."
																		})] })
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 space-y-3",
																		children: paymentMethods.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																					className: "space-y-2",
																					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex items-center gap-2",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-sm font-semibold text-[#111827]",
																							children: method.name
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																							className: `rounded-full px-2 py-0.5 text-[11px] font-semibold ${method.enabled ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#FEE2E2] text-[#B91C1C]"}`,
																							children: method.enabled ? "Accepted" : "Disabled"
																						})]
																					})
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex flex-wrap gap-2",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => togglePaymentMethodEnabled(method.id),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: method.enabled ? "Disable" : "Mark not accepted"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => togglePaymentMethodEditing(method.id),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: method.editing ? "Save" : "Edit"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => deletePaymentMethod(method.id),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: "Delete"
																						})
																					]
																				})]
																			}), method.editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "mt-3",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																					value: method.name,
																					onChange: (e) => updatePaymentMethodField(method.id, e.target.value),
																					className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																				})
																			})]
																		}, method.id))
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 flex justify-end",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: addPaymentMethod,
																			className: "rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]",
																			children: "Add payment method"
																		})
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Payment Timing"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-sm text-[#475569]",
																		children: "Select when payments are collected or whether a deposit is required."
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 grid gap-3 sm:grid-cols-2",
																		children: paymentTiming.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => togglePaymentTiming(item.id),
																			className: `rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${item.selected ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569]"}`,
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex items-center justify-between gap-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																					className: "text-xs font-semibold",
																					children: item.selected ? "Selected" : "Not selected"
																				})]
																			})
																		}, item.id))
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "flex items-center justify-between gap-4",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: "Pricing Rules"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-2 text-sm text-[#475569]",
																			children: "Capture pricing guidance the AI should use when describing costs."
																		})] })
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 space-y-3",
																		children: pricingRules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "space-y-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex items-center gap-2",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-sm font-semibold text-[#111827]",
																							children: rule.name
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																							className: `rounded-full px-2 py-0.5 text-[11px] font-semibold ${rule.enabled ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#FEE2E2] text-[#B91C1C]"}`,
																							children: rule.enabled ? "Active" : "Disabled"
																						})]
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm text-[#475569]",
																						children: rule.description
																					})]
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex flex-wrap gap-2",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => togglePricingRuleEnabled(rule.id),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.enabled ? "Disable" : "Enable"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => togglePricingRuleEditing(rule.id),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.editing ? "Save" : "Edit"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => deletePricingRule(rule.id),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: "Delete"
																						})
																					]
																				})]
																			}), rule.editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-3 space-y-3 rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																					value: rule.name,
																					onChange: (e) => updatePricingRuleField(rule.id, "name", e.target.value),
																					className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																					value: rule.description,
																					onChange: (e) => updatePricingRuleField(rule.id, "description", e.target.value),
																					className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]"
																				})]
																			})]
																		}, rule.id))
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 flex justify-end",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: addPricingRule,
																			className: "rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]",
																			children: "Add pricing rule"
																		})
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Payment Notes"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-sm text-[#475569]",
																		children: "Optional instructions for customers about payment and pricing."
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																		value: paymentNotes,
																		onChange: (e) => setPaymentNotes(e.target.value),
																		className: "mt-3 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[120px]"
																	})
																]
															})
														]
													})] }) : sec.id === "pol-3" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Orders & Fulfillment"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#475569]",
																children: "Teach your AI what customers should expect after placing an order, booking a service, or requesting fulfillment."
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => toggleNotApplicable("pol-3"),
																className: `rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${isNotApplicable("pol-3") ? "bg-[#F3F4F6] text-[#64748B]" : "bg-white border border-[#E5E7EB] hover:bg-[#F8FAFC]"}`,
																children: isNotApplicable("pol-3") ? "Not applicable" : "Mark not applicable"
															}) })]
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "flex items-center justify-between gap-4",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: "Order Processing"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-2 text-sm text-[#475569]",
																			children: "Define processing times and what order confirmations include."
																		})] })
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 space-y-3",
																		children: orderProcessingRules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "space-y-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex items-center gap-2",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-sm font-semibold text-[#111827]",
																							children: rule.name
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																							className: `rounded-full px-2 py-0.5 text-[11px] font-semibold ${rule.enabled ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#FEE2E2] text-[#B91C1C]"}`,
																							children: rule.enabled ? "Active" : "Disabled"
																						})]
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm text-[#475569]",
																						children: rule.description
																					})]
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex flex-wrap gap-2",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => toggleFulfillmentEnabled(rule.id, "order"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.enabled ? "Disable" : "Enable"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => toggleFulfillmentEditing(rule.id, "order"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.editing ? "Save" : "Edit"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => deleteFulfillmentRule(rule.id, "order"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: "Delete"
																						})
																					]
																				})]
																			}), rule.editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																					value: rule.name,
																					onChange: (e) => updateFulfillmentField(rule.id, "name", e.target.value, "order"),
																					className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																					value: rule.description,
																					onChange: (e) => updateFulfillmentField(rule.id, "description", e.target.value, "order"),
																					className: "mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]"
																				})]
																			})]
																		}, rule.id))
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 flex justify-end",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => addFulfillmentRule("order"),
																			className: "rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]",
																			children: "Add order rule"
																		})
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Delivery / Fulfillment"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-sm text-[#475569]",
																		children: "Configure delivery, pickup options, fulfillment locations, and typical timeframes."
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 space-y-3",
																		children: deliveryRules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "space-y-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex items-center gap-2",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-sm font-semibold text-[#111827]",
																							children: rule.name
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																							className: `rounded-full px-2 py-0.5 text-[11px] font-semibold ${rule.enabled ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#FEE2E2] text-[#B91C1C]"}`,
																							children: rule.enabled ? "Active" : "Disabled"
																						})]
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm text-[#475569]",
																						children: rule.description
																					})]
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex flex-wrap gap-2",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => toggleFulfillmentEnabled(rule.id, "delivery"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.enabled ? "Disable" : "Enable"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => toggleFulfillmentEditing(rule.id, "delivery"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.editing ? "Save" : "Edit"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => deleteFulfillmentRule(rule.id, "delivery"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: "Delete"
																						})
																					]
																				})]
																			}), rule.editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																					value: rule.name,
																					onChange: (e) => updateFulfillmentField(rule.id, "name", e.target.value, "delivery"),
																					className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																					value: rule.description,
																					onChange: (e) => updateFulfillmentField(rule.id, "description", e.target.value, "delivery"),
																					className: "mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]"
																				})]
																			})]
																		}, rule.id))
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 flex justify-end",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => addFulfillmentRule("delivery"),
																			className: "rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]",
																			children: "Add delivery rule"
																		})
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Changes & Cancellation"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-sm text-[#475569]",
																		children: "Specify when customers can change or cancel orders."
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 space-y-3",
																		children: changesCancellationRules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "space-y-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex items-center gap-2",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-sm font-semibold text-[#111827]",
																							children: rule.name
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																							className: `rounded-full px-2 py-0.5 text-[11px] font-semibold ${rule.enabled ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#FEE2E2] text-[#B91C1C]"}`,
																							children: rule.enabled ? "Active" : "Disabled"
																						})]
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm text-[#475569]",
																						children: rule.description
																					})]
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex flex-wrap gap-2",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => toggleFulfillmentEnabled(rule.id, "changes"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.enabled ? "Disable" : "Enable"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => toggleFulfillmentEditing(rule.id, "changes"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.editing ? "Save" : "Edit"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => deleteFulfillmentRule(rule.id, "changes"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: "Delete"
																						})
																					]
																				})]
																			}), rule.editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																					value: rule.name,
																					onChange: (e) => updateFulfillmentField(rule.id, "name", e.target.value, "changes"),
																					className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																					value: rule.description,
																					onChange: (e) => updateFulfillmentField(rule.id, "description", e.target.value, "changes"),
																					className: "mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]"
																				})]
																			})]
																		}, rule.id))
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 flex justify-end",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => addFulfillmentRule("changes"),
																			className: "rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]",
																			children: "Add change/cancellation rule"
																		})
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Unavailable Items / Services"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-sm text-[#475569]",
																		children: "Define what should happen when an item or service is unavailable."
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 space-y-3",
																		children: unavailableRules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "space-y-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex items-center gap-2",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-sm font-semibold text-[#111827]",
																							children: rule.name
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																							className: `rounded-full px-2 py-0.5 text-[11px] font-semibold ${rule.enabled ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#FEE2E2] text-[#B91C1C]"}`,
																							children: rule.enabled ? "Active" : "Disabled"
																						})]
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm text-[#475569]",
																						children: rule.description
																					})]
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex flex-wrap gap-2",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => toggleFulfillmentEnabled(rule.id, "unavailable"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.enabled ? "Disable" : "Enable"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => toggleFulfillmentEditing(rule.id, "unavailable"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.editing ? "Save" : "Edit"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => deleteFulfillmentRule(rule.id, "unavailable"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: "Delete"
																						})
																					]
																				})]
																			}), rule.editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																					value: rule.name,
																					onChange: (e) => updateFulfillmentField(rule.id, "name", e.target.value, "unavailable"),
																					className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																					value: rule.description,
																					onChange: (e) => updateFulfillmentField(rule.id, "description", e.target.value, "unavailable"),
																					className: "mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]"
																				})]
																			})]
																		}, rule.id))
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 flex justify-end",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => addFulfillmentRule("unavailable"),
																			className: "rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F2937]",
																			children: "Add unavailable-item rule"
																		})
																	})
																]
															})
														]
													})] }) : sec.id === "pol-4" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Privacy & Customer Data"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#475569]",
																children: "Define what customer information your AI may collect, use, and share during conversations."
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => toggleNotApplicable("pol-4"),
																className: `rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${isNotApplicable("pol-4") ? "bg-[#F3F4F6] text-[#64748B]" : "bg-white border border-[#E5E7EB] hover:bg-[#F8FAFC]"}`,
																children: isNotApplicable("pol-4") ? "Not applicable" : "Mark not applicable"
															}) })]
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Information the AI may collect"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-sm text-[#475569]",
																		children: "Allow the business to list accepted information the AI may request or use."
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-3 space-y-3",
																		children: mayCollectRules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-[12px] border border-[#E5E7EB] bg-white p-3",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex items-start justify-between gap-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-sm font-semibold",
																					children: rule.name
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-sm text-[#475569]",
																					children: rule.description
																				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex flex-wrap gap-2",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => togglePrivacyEnabled(rule.id, "collect"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.enabled ? "Disable" : "Enable"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => togglePrivacyEditing(rule.id, "collect"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.editing ? "Save" : "Edit"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => deletePrivacyRule(rule.id, "collect"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: "Delete"
																						})
																					]
																				})]
																			}), rule.editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																					value: rule.name,
																					onChange: (e) => updatePrivacyField(rule.id, "name", e.target.value, "collect"),
																					className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																					value: rule.description,
																					onChange: (e) => updatePrivacyField(rule.id, "description", e.target.value, "collect"),
																					className: "mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]"
																				})]
																			})]
																		}, rule.id))
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-3 flex flex-wrap gap-2",
																		children: mayCollectExamples.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => addPrivacyRule("collect", ex),
																			className: "rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-[#475569] hover:bg-[#F8FAFC]",
																			children: ex
																		}, ex))
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 flex justify-end",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => addPrivacyRule("collect"),
																			className: "rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white",
																			children: "Add rule"
																		})
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Information the AI should not request"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-sm text-[#475569]",
																		children: "List information your AI must never ask customers to provide during conversations."
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-3 space-y-3",
																		children: doNotRequestRules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-[12px] border border-[#E5E7EB] bg-white p-3",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex items-start justify-between gap-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-sm font-semibold",
																					children: rule.name
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-sm text-[#475569]",
																					children: rule.description
																				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex flex-wrap gap-2",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => togglePrivacyEnabled(rule.id, "doNot"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.enabled ? "Disable" : "Enable"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => togglePrivacyEditing(rule.id, "doNot"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.editing ? "Save" : "Edit"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => deletePrivacyRule(rule.id, "doNot"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: "Delete"
																						})
																					]
																				})]
																			}), rule.editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																					value: rule.name,
																					onChange: (e) => updatePrivacyField(rule.id, "name", e.target.value, "doNot"),
																					className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																					value: rule.description,
																					onChange: (e) => updatePrivacyField(rule.id, "description", e.target.value, "doNot"),
																					className: "mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]"
																				})]
																			})]
																		}, rule.id))
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-3 flex flex-wrap gap-2",
																		children: doNotRequestExamples.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => addPrivacyRule("doNot", ex),
																			className: "rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-[#475569] hover:bg-[#F8FAFC]",
																			children: ex
																		}, ex))
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-xs text-[#6B7280]",
																		children: "These are examples and not legal advice."
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 flex justify-end",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => addPrivacyRule("doNot"),
																			className: "rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white",
																			children: "Add rule"
																		})
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Data-sharing instructions"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-sm text-[#475569]",
																		children: "Specify when and with whom customer data may be shared."
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-3 space-y-3",
																		children: dataSharingRules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "rounded-[12px] border border-[#E5E7EB] bg-white p-3",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex items-start justify-between gap-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-sm font-semibold",
																					children: rule.name
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-sm text-[#475569]",
																					children: rule.description
																				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex flex-wrap gap-2",
																					children: [
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => togglePrivacyEnabled(rule.id, "share"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.enabled ? "Disable" : "Enable"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => togglePrivacyEditing(rule.id, "share"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: rule.editing ? "Save" : "Edit"
																						}),
																						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																							type: "button",
																							onClick: () => deletePrivacyRule(rule.id, "share"),
																							className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																							children: "Delete"
																						})
																					]
																				})]
																			}), rule.editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																					value: rule.name,
																					onChange: (e) => updatePrivacyField(rule.id, "name", e.target.value, "share"),
																					className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																					value: rule.description,
																					onChange: (e) => updatePrivacyField(rule.id, "description", e.target.value, "share"),
																					className: "mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]"
																				})]
																			})]
																		}, rule.id))
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4 flex justify-end",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => addPrivacyRule("share"),
																			className: "rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white",
																			children: "Add sharing rule"
																		})
																	})
																]
															})
														]
													})] }) : sec.id === "pol-5" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "AI Boundaries"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#475569]",
																children: "Define what your AI employee must never do or claim during a customer conversation."
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => toggleNotApplicable("pol-5"),
																className: `rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${isNotApplicable("pol-5") ? "bg-[#F3F4F6] text-[#64748B]" : "bg-white border border-[#E5E7EB] hover:bg-[#F8FAFC]"}`,
																children: isNotApplicable("pol-5") ? "Not applicable" : "Mark not applicable"
															}) })]
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "space-y-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Boundary Rules"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-2 text-sm text-[#475569]",
																	children: "Configure rules your AI must follow. These are instructions for behavior—not enforcement logic."
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mt-4 space-y-3",
																	children: boundaryRules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "rounded-[12px] border border-[#E5E7EB] bg-white p-3",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-start justify-between gap-3",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-sm font-semibold",
																				children: rule.name
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-sm text-[#475569]",
																				children: rule.description
																			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex flex-wrap gap-2",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																						type: "button",
																						onClick: () => toggleBoundaryEnabled(rule.id),
																						className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																						children: rule.enabled ? "Disable" : "Enable"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																						type: "button",
																						onClick: () => toggleBoundaryEditing(rule.id),
																						className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																						children: rule.editing ? "Save" : "Edit"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																						type: "button",
																						onClick: () => deleteBoundaryRule(rule.id),
																						className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																						children: "Delete"
																					})
																				]
																			})]
																		}), rule.editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "mt-3",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																				value: rule.name,
																				onChange: (e) => updateBoundaryField(rule.id, "name", e.target.value),
																				className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																				value: rule.description,
																				onChange: (e) => updateBoundaryField(rule.id, "description", e.target.value),
																				className: "mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]"
																			})]
																		})]
																	}, rule.id))
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mt-4 flex justify-end",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		type: "button",
																		onClick: () => addBoundaryRule(),
																		className: "rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white",
																		children: "Add Boundary"
																	})
																})
															]
														})
													})] }) : sec.id === "pol-6" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Escalation Rules"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#475569]",
																children: "Tell your AI when a conversation should be handed to a human."
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => toggleNotApplicable("pol-6"),
																className: `rounded-full px-3 py-1.5 text-xs font-semibold ${isNotApplicable("pol-6") ? "bg-[#F3F4F6] text-[#64748B]" : "bg-white border border-[#E5E7EB]"}`,
																children: isNotApplicable("pol-6") ? "Not applicable" : "Mark not applicable"
															}) })]
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "space-y-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFC] p-4",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Escalation triggers"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-2 text-sm text-[#475569]",
																	children: "Configure triggers that indicate a conversation should be escalated to a human."
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mt-4 space-y-3",
																	children: escalationRules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "rounded-[12px] border border-[#E5E7EB] bg-white p-3",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-start justify-between gap-3",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-sm font-semibold",
																				children: rule.name
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-sm text-[#475569]",
																				children: rule.description
																			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex flex-wrap gap-2",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																						type: "button",
																						onClick: () => toggleEscalationEnabled(rule.id),
																						className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																						children: rule.enabled ? "Disable" : "Enable"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																						type: "button",
																						onClick: () => toggleEscalationEditing(rule.id),
																						className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																						children: rule.editing ? "Save" : "Edit"
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																						type: "button",
																						onClick: () => deleteEscalationRule(rule.id),
																						className: "rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[#475569] transition-colors duration-200 hover:bg-[#F8FAFC] hover:text-[#111827]",
																						children: "Delete"
																					})
																				]
																			})]
																		}), rule.editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "mt-3",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																				value: rule.name,
																				onChange: (e) => updateEscalationField(rule.id, "name", e.target.value),
																				className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																				value: rule.description,
																				onChange: (e) => updateEscalationField(rule.id, "description", e.target.value),
																				className: "mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]"
																			})]
																		})]
																	}, rule.id))
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mt-4 flex justify-end",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		type: "button",
																		onClick: () => addEscalationRule(),
																		className: "rounded-[12px] bg-[#111827] px-4 py-2 text-sm font-semibold text-white",
																		children: "Add Escalation Rule"
																	})
																})
															]
														})
													})] }) : sec.id === "pol-7" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[16px] border border-[#E5E7EB] bg-white p-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold text-[#111827]",
															children: "Review"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-sm text-[#475569]",
															children: "Review the rules your AI employee will follow before continuing."
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "rounded-[12px] border border-[#E5E7EB] bg-white p-4",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "grid gap-3",
																children: [
																	{
																		id: "pol-1",
																		key: "Customer Policies",
																		configured: customerPolicies.length > 0
																	},
																	{
																		id: "pol-2",
																		key: "Pricing & Payment",
																		configured: paymentMethods.length > 0 || pricingRules.length > 0 || paymentTiming.some((t) => t.selected) || (paymentNotes || "").trim() !== ""
																	},
																	{
																		id: "pol-3",
																		key: "Orders & Fulfillment",
																		configured: orderProcessingRules.length + deliveryRules.length + changesCancellationRules.length + unavailableRules.length > 0
																	},
																	{
																		id: "pol-4",
																		key: "Privacy & Customer Data",
																		configured: mayCollectRules.length + doNotRequestRules.length + dataSharingRules.length > 0
																	},
																	{
																		id: "pol-5",
																		key: "AI Boundaries",
																		configured: boundaryRules.length > 0
																	},
																	{
																		id: "pol-6",
																		key: "Escalation Rules",
																		configured: escalationRules.length > 0
																	}
																].map((item) => {
																	const finalConfigured = item.configured || isNotApplicable(item.id);
																	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center justify-between",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: item.key
																		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: `inline-flex h-7 items-center gap-2 rounded-full px-3 text-[12px] font-medium ${finalConfigured ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#F3F4F6] text-[#64748B]"}`,
																			children: finalConfigured ? "Configured" : "Not configured"
																		}) })]
																	}, item.key);
																})
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex justify-end",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																type: "button",
																onClick: () => {
																	handleSaveChanges();
																},
																className: "inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]",
																children: ["Save & Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
															})
														})]
													})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
														value: sec.content,
														onChange: (e) => updatePolicyContent(sec.id, e.target.value),
														className: "mt-2 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[120px]"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-2 flex justify-end gap-2",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => togglePolicy(sec.id),
															className: "rounded-[8px] border border-[#E5E7EB] px-3 py-2 text-sm",
															children: "Done"
														})
													})] })
												})]
											}, sec.id))
										})
									}),
									activeWorkspaceSection === "Integrations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										ref: integrationsPageRef,
										tabIndex: -1,
										className: "space-y-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationLessonTabs, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrentIntegrationLesson, {})]
									}),
									activeWorkspaceSection === "Test AI" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
												className: "rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]",
												"aria-label": "AI knowledge test",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-start gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#166534]",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-base font-semibold text-[#111827]",
															children: "Ask your AI"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-sm text-[#64748B]",
															children: "Test how your AI uses the knowledge you have configured, then see exactly why it answered that way."
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-5 flex flex-col gap-2 sm:flex-row",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															value: testAiInput,
															onChange: (event) => setTestAiInput(event.target.value),
															onKeyDown: (event) => {
																if (event.key === "Enter") sendTestAiMessage();
															},
															placeholder: "Ask a customer question",
															className: "h-11 min-w-0 flex-1 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-sm outline-none transition focus:border-[#22C55E] focus:bg-white focus:ring-4 focus:ring-[#DCFCE7]/70"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: sendTestAiMessage,
															className: "rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155]",
															children: "Ask AI"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-3 flex flex-wrap gap-2",
														children: [
															"Do you offer installation?",
															"What are your prices?",
															"Can I pay with M-Pesa?"
														].map((question) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setTestAiInput(question),
															className: "rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-[#475569] transition hover:border-[#86EFAC] hover:bg-[#ECFDF5] hover:text-[#166534]",
															children: question
														}, question))
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-5 grid gap-3 border-t border-[#EEF2F6] pt-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-xl bg-[#F8FAFC] p-4",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]",
																children: "AI answer"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm leading-6 text-[#111827]",
																children: testAiExplanation.answer
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-lg border border-[#BBF7D0] bg-[#F7FEF9] p-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[10px] font-semibold uppercase tracking-[0.1em] text-[#166534]",
																	children: "Confidence"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																	className: "mt-1 text-sm font-semibold text-[#111827]",
																	children: [testAiExplanation.confidence, "%"]
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-lg border border-[#E2E8F0] bg-white p-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[10px] font-semibold uppercase tracking-[0.1em] text-[#64748B]",
																	children: "Knowledge source"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-1 text-xs font-semibold text-[#111827]",
																	children: testAiExplanation.source
																})]
															})]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-3 grid gap-3 sm:grid-cols-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-lg border border-[#FEF3C7] bg-[#FFFBEB] p-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-xs font-semibold text-[#92400E]",
																children: "Missing information"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-xs leading-5 text-[#92400E]",
																children: testAiExplanation.missing
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-lg border border-[#BFDBFE] bg-[#EFF6FF] p-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-xs font-semibold text-[#1D4ED8]",
																children: "Suggested improvement"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-xs leading-5 text-[#1D4ED8]",
																children: testAiExplanation.improvements
															})]
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-4 rounded-[24px] border border-[#E5E7EB] bg-white p-5 sm:flex-row sm:items-center sm:justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold text-[#111827]",
													children: "Test your AI Employee"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-[#6B7280]",
													children: "Run mock conversations and review AI analysis."
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex gap-2",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => createConversation(),
														className: "rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white",
														children: "New Conversation"
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-[20px] border border-[#E5E7EB] bg-white p-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold",
														children: "Conversations"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-3 space-y-2",
														children: conversations.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => setSelectedConversationId(c.id),
															className: `w-full text-left rounded-[8px] p-3 ${selectedConversationId === c.id ? "bg-[#ECFDF5] border border-[#22C55E]" : "bg-white border border-[#EEF2F6]"}`,
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold",
																	children: c.title
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-xs text-[#64748B] truncate",
																	children: c.messages[c.messages.length - 1]?.text || "No messages yet"
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "text-xs text-[#94A3B8]",
																	children: c.messages.length
																})]
															})
														}, c.id))
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold",
														children: "Suggested prompts"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-3 flex flex-wrap gap-2",
														children: SAMPLE_PROMPTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => {
																if (selectedConversationId) simulateAiResponse(selectedConversationId, p);
																else {
																	createConversation("New");
																	setTimeout(() => simulateAiResponse(conversations[0]?.id ?? "", p), 100);
																}
															},
															className: "rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-sm",
															children: p
														}, p))
													})]
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-[20px] border border-[#E5E7EB] bg-white p-5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold",
																children: "Chat"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-xs text-[#94A3B8]",
																children: conversations.find((c) => c.id === selectedConversationId)?.title
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-3 max-h-[320px] overflow-auto space-y-3",
															children: (conversations.find((c) => c.id === selectedConversationId)?.messages ?? []).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: `rounded-[12px] p-3 ${m.role === "ai" ? "bg-[#F8FAFB]" : "bg-[#ECFDF5] text-right"}`,
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-xs text-[#64748B]",
																		children: m.role === "ai" ? "AI" : "You"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-1 text-sm",
																		children: m.text
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-1 text-xs text-[#94A3B8]",
																		children: m.time
																	})
																]
															}, m.id))
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-4",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	value: inputText,
																	onChange: (e) => setInputText(e.target.value),
																	placeholder: "Type a test prompt",
																	className: "flex-1 rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	onClick: () => {
																		if (selectedConversationId && inputText.trim()) simulateAiResponse(selectedConversationId, inputText.trim());
																	},
																	className: "rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white",
																	children: "Send"
																})]
															})
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold",
														children: "AI Analysis"
													}), aiAnalysis ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-3 text-sm text-[#475569] space-y-2",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold",
																	children: "Intent:"
																}),
																" ",
																aiAnalysis.intent
															] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold",
																	children: "Confidence:"
																}),
																" ",
																aiAnalysis.confidence
															] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold",
																	children: "Knowledge Used:"
																}),
																" ",
																aiAnalysis.knowledgeUsed.join(", ")
															] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold",
																	children: "Suggested Actions:"
																}),
																" ",
																aiAnalysis.suggestedActions.join(", ")
															] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold",
																	children: "Response Time:"
																}),
																" ",
																aiAnalysis.responseTime
															] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold",
																	children: "Generated Reply:"
																}),
																" ",
																aiAnalysis.generatedReply
															] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold",
																	children: "Knowledge Sources:"
																}),
																" ",
																aiAnalysis.knowledgeSources.join(", ")
															] })
														]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-3 text-sm text-[#94A3B8]",
														children: "No analysis yet. Send a prompt to generate a mock response and analysis."
													})]
												})] })]
											})
										]
									}),
									activeWorkspaceSection === "Performance" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
												children: PERFORMANCE_METRICS.slice(0, 4).map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-[20px] border border-[#E5E7EB] bg-white p-5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: metric.label
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#16A34A]",
																children: metric.delta
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-5 text-3xl font-semibold text-[#111827]",
															children: metric.value
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-5 flex items-center gap-2",
															children: metric.trend.map((point, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "h-2 rounded-full bg-[#22C55E]",
																style: { width: `${Math.max(8, point)}%` }
															}, index))
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-4 h-2 w-full rounded-full bg-[#E5E7EB]",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "h-2 rounded-full bg-[#22C55E]",
																style: { width: `${metric.progress}%` }
															})
														})
													]
												}, metric.label))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid gap-4 xl:grid-cols-4",
												children: PERFORMANCE_METRICS.slice(4).map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-[20px] border border-[#E5E7EB] bg-white p-5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: metric.label
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-sm text-[#6B7280]",
																children: metric.delta
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-5 text-3xl font-semibold text-[#111827]",
															children: metric.value
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-4 h-2 w-full rounded-full bg-[#E5E7EB]",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "h-2 rounded-full bg-[#2563EB]",
																style: { width: `${metric.progress}%` }
															})
														})
													]
												}, metric.label))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-4 xl:grid-cols-[1.1fr_0.9fr]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-[20px] border border-[#E5E7EB] bg-white p-5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-start justify-between gap-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold text-[#111827]",
															children: "Knowledge Usage"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-sm text-[#6B7280]",
															children: "How often the AI referred to internal knowledge sources."
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#6B7280]",
															children: "Mock data"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-6 space-y-4",
														children: KNOWLEDGE_USAGE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between text-sm text-[#475569]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [item.percent, "%"] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-2 h-2 w-full rounded-full bg-[#E5E7EB]",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "h-2 rounded-full bg-[#2563EB]",
																style: { width: `${item.percent}%` }
															})
														})] }, item.label))
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[20px] border border-[#E5E7EB] bg-white p-5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Top Questions"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#6B7280]",
																children: "Most asked questions this week."
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-4 space-y-3",
																children: PERFORMANCE_TOP_QUESTIONS.map((question) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFB] px-4 py-3 text-sm text-[#111827]",
																	children: question
																}, question))
															})
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[20px] border border-[#E5E7EB] bg-white p-5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Most Viewed Products"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#6B7280]",
																children: "Products the AI referenced most in conversations."
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-4 space-y-3",
																children: MOST_VIEWED_PRODUCTS.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center justify-between text-sm text-[#475569]",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "font-semibold text-[#111827]",
																		children: product.views
																	})]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mt-2 h-2 w-full rounded-full bg-[#E5E7EB]",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "h-2 rounded-full bg-[#22C55E]",
																		style: { width: `${Math.min(100, product.views / 512 * 100)}%` }
																	})
																})] }, product.name))
															})
														]
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-[20px] border border-[#E5E7EB] bg-white p-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center justify-between",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold text-[#111827]",
														children: "Recent AI Activity"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-sm text-[#6B7280]",
														children: "Timeline of the latest AI Employee actions."
													})] })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-6 space-y-4",
													children: RECENT_AI_ACTIVITY.map((activity) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[20px] border border-[#F3F4F6] bg-[#F8FAFB] p-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: activity.title
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-xs text-[#6B7280]",
																children: activity.type
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-xs text-[#94A3B8]",
																children: activity.time
															})]
														})
													}, activity.title))
												})]
											})
										]
									})
								]
							})]
						}),
						selected === "Marketing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `space-y-6 ${CARD}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-[#6B7280]",
									children: "Status Scheduler"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-[#6B7280]",
									children: "Plan and publish status posts ahead of time. Use AI to generate copy, then schedule images and captions for the week."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "inline-flex items-center gap-2 rounded-[20px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "Create Status Post"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 xl:grid-cols-[1.2fr_0.8fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: CARD,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
											children: "Scheduled posts"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 text-lg font-semibold text-[#111827]",
											children: "Upcoming posts"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#6B7280]",
											children: "Mock data"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 space-y-4",
										children: scheduledPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-[24px] border border-[#E5E7EB]/70 bg-[#F8FAFC]/70 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold text-[#111827]",
														children: post.caption
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-sm text-[#6B7280]",
														children: post.image
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-right text-sm text-[#6B7280]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-semibold text-[#111827]",
														children: post.date
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: post.time })]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 flex flex-wrap items-center gap-2 text-[13px] text-[#6B7280]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-white px-3 py-1 border border-[#E5E7EB]",
													children: "Scheduled"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#ECFDF5] px-3 py-1 text-[#16A34A]",
													children: "Status"
												})]
											})]
										}, post.id))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: CARD,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
											children: "New status post"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 text-lg font-semibold text-[#111827]",
											children: "Create your post"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block text-sm font-medium text-[#111827]",
												children: [
													"Upload Image",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "file",
														accept: "image/*",
														className: "mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] file:mr-4 file:rounded-full file:border-0 file:bg-[#22C55E] file:px-4 file:py-2 file:text-sm file:text-white",
														onChange: (event) => {
															const fileName = event.target.files?.[0]?.name;
															setNewPost((prev) => ({
																...prev,
																image: fileName ?? ""
															}));
															setImageLabel(fileName ?? "No file selected");
														}
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-xs text-[#6B7280]",
														children: imageLabel
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block text-sm font-medium text-[#111827]",
												children: ["Caption", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													value: newPost.caption,
													onChange: (event) => setNewPost((prev) => ({
														...prev,
														caption: event.target.value
													})),
													placeholder: "Write a short caption for this status post",
													className: "mt-2 h-32 w-full rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-4 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "block text-sm font-medium text-[#111827]",
													children: ["Date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "date",
														value: newPost.date,
														onChange: (event) => setNewPost((prev) => ({
															...prev,
															date: event.target.value
														})),
														className: INPUT_FIELD
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "block text-sm font-medium text-[#111827]",
													children: ["Time", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "time",
														value: newPost.time,
														onChange: (event) => setNewPost((prev) => ({
															...prev,
															time: event.target.value
														})),
														className: INPUT_FIELD
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													className: `${BUTTON_SECONDARY} gap-2 sm:w-auto`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4" }), "Generate With AI"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: `${BUTTON_PRIMARY} sm:w-auto`,
													children: "Schedule Post"
												})]
											})
										]
									})]
								})]
							})]
						}),
						selected === "Performance" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `space-y-6 ${CARD}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
											children: "Performance"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-2 text-2xl font-semibold text-[#111827]",
											children: "See how your AI employee is doing."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-6 text-[#6B7280]",
											children: "Review live workspace activity, recent conversations, lead progress, and areas to improve without switching into training mode."
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
								value: performanceSection,
								onValueChange: (value) => setPerformanceSection(value),
								className: "w-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
										className: "grid w-full grid-cols-2 gap-2 sm:grid-cols-5",
										children: [
											{
												value: "overview",
												label: "Overview"
											},
											{
												value: "conversations",
												label: "Conversations"
											},
											{
												value: "sales",
												label: "Sales"
											},
											{
												value: "customer-experience",
												label: "Customer Experience"
											},
											{
												value: "issues",
												label: "Issues & Improvements"
											}
										].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
											value: tab.value,
											className: "rounded-[20px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-medium text-[#475569] data-[state=active]:border-[#22C55E] data-[state=active]:bg-[#ECFDF5] data-[state=active]:text-[#166534]",
											children: tab.label
										}, tab.value))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
										value: "overview",
										className: "mt-6 space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col gap-4 md:flex-row md:items-start md:justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "max-w-2xl",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
															children: "AI EMPLOYEE ACTIVITY"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-sm leading-6 text-[#6B7280]",
															children: "This view uses the current inbox and customer data already present in the dashboard."
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-full bg-[#F9FAFB] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]",
														children: "Based on current workspace data"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-6 grid gap-4 md:grid-cols-2",
													children: [
														{
															label: "Conversations handled",
															value: INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "ai_handling" || conversation.source === "ai_handled").length.toString(),
															detail: "Conversations currently marked as AI handling or AI handled."
														},
														{
															label: "Leads captured",
															value: CUSTOMERS.length.toString(),
															detail: "Customer leads recorded in the current workspace."
														},
														{
															label: "Human handoffs",
															value: INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).length.toString(),
															detail: "Conversations flagged for follow-up or escalation."
														},
														{
															label: "Tasks completed",
															value: "No tracked tasks",
															detail: "No completed-task history is available in the current data."
														}
													].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-medium text-[#6B7280]",
																children: item.label
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-3 text-2xl font-semibold text-[#111827]",
																children: item.value
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#6B7280]",
																children: item.detail
															})
														]
													}, item.label))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-6 xl:grid-cols-[1.1fr_0.9fr]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
													className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
														children: "AI EFFECTIVENESS"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-4 grid gap-3 sm:grid-cols-2",
														children: [
															{
																label: "Average response time",
																value: "No response-time data",
																detail: "Response timing is not being tracked in the current workspace."
															},
															{
																label: "Resolution rate",
																value: "No resolution data",
																detail: "No resolved-conversation metric is available yet."
															},
															{
																label: "Customer satisfaction",
																value: "No satisfaction data",
																detail: "No satisfaction feedback has been captured yet."
															},
															{
																label: "Escalation rate",
																value: "No escalation metric",
																detail: "Escalation history is not tracked in the current data."
															}
														].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-medium text-[#6B7280]",
																	children: item.label
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-2 text-lg font-semibold text-[#111827]",
																	children: item.value
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-2 text-sm text-[#6B7280]",
																	children: item.detail
																})
															]
														}, item.label))
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
													className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
														children: "BUSINESS IMPACT"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-4 grid gap-3",
														children: [
															{
																label: "Sales influenced",
																value: "No sales influence data",
																detail: "No sales outcome data is available in the current workspace."
															},
															{
																label: "Follow-ups completed",
																value: "No completed follow-ups",
																detail: "Completed follow-ups are not tracked in the current data."
															},
															{
																label: "Qualified leads",
																value: CUSTOMERS.filter((customer) => customer.leadStatus !== "Cold lead").length.toString(),
																detail: "Hot and warm leads currently recorded."
															},
															{
																label: "Conversions",
																value: "No conversion data",
																detail: "No conversion events have been logged yet."
															}
														].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-medium text-[#6B7280]",
																	children: item.label
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-2 text-lg font-semibold text-[#111827]",
																	children: item.value
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-2 text-sm text-[#6B7280]",
																	children: item.detail
																})
															]
														}, item.label))
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
												className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
													children: "NEEDS ATTENTION"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4 space-y-3",
													children: INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).length > 0 ? INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).map((conversation) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start justify-between gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: conversation.name || "Unknown contact"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-sm text-[#6B7280]",
																children: conversation.message
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-[#FEF2F2] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#991B1B]",
																children: "Needs review"
															})]
														})
													}, conversation.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[20px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]",
														children: "No performance issues detected yet."
													})
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
										value: "conversations",
										className: "mt-6 space-y-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "max-w-2xl",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
														children: "CONVERSATION PERFORMANCE"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-sm leading-6 text-[#6B7280]",
														children: "This view uses the conversation activity already available in the current inbox and shows only what can be supported by that data."
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setSelected("Inbox"),
													className: "inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]",
													children: "Open Conversations workspace"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-6 grid gap-4 lg:grid-cols-2",
												children: [
													{
														label: "Conversations handled",
														value: INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "ai_handling" || conversation.source === "ai_handled").length.toString(),
														detail: "Current conversations marked as AI handling or AI handled."
													},
													{
														label: "Resolved conversations",
														value: INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "ai_handled").length.toString(),
														detail: "Conversations currently marked as AI handled."
													},
													{
														label: "Human handoffs",
														value: INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).length.toString(),
														detail: "Conversations flagged for follow-up or review."
													},
													{
														label: "Unresolved conversations",
														value: Math.max(0, INBOX_CONVERSATIONS.length - INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "ai_handled").length).toString(),
														detail: "Open conversations that are not marked as AI handled."
													}
												].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-medium text-[#6B7280]",
															children: item.label
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-3 text-2xl font-semibold text-[#111827]",
															children: item.value
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-sm text-[#6B7280]",
															children: item.detail
														})
													]
												}, item.label))
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
												className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
													children: "RESPONSE QUALITY"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4 space-y-3",
													children: [{
														label: "Average response time",
														value: "No response-time data",
														detail: "Response timing is not tracked in the current workspace."
													}, {
														label: "Customer satisfaction",
														value: "No satisfaction data",
														detail: "No satisfaction feedback has been captured yet."
													}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-medium text-[#6B7280]",
																children: item.label
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-lg font-semibold text-[#111827]",
																children: item.value
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#6B7280]",
																children: item.detail
															})
														]
													}, item.label))
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
												className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
													children: "FREQUENTLY ESCALATED TOPICS"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4 space-y-3",
													children: (() => {
														const flaggedTopics = Array.from(new Set(INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).map((conversation) => {
															const message = conversation.message.toLowerCase();
															if (message.includes("pricing") || message.includes("price")) return "Pricing questions";
															if (message.includes("availability") || message.includes("product")) return "Product availability";
															if (message.includes("installation")) return "Installation requests";
															if (message.includes("pause")) return "AI control requests";
															return "Follow-up requests";
														})));
														return flaggedTopics.length > 0 ? flaggedTopics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]",
															children: topic
														}, topic)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "rounded-[20px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]",
															children: "No conversation performance data yet. Once your AI employee starts handling customer conversations, performance insights will appear here."
														});
													})()
												})]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
										value: "sales",
										className: "mt-6 space-y-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "max-w-2xl",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
														children: "SALES PERFORMANCE"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-sm leading-6 text-[#6B7280]",
														children: "This view uses the current lead, conversation, and catalogue data already in the workspace."
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															setSelected("AI Employee");
															setActiveWorkspaceSection("Sales Playbooks");
														},
														className: "inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]",
														children: "Open Sales Playbook"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															setSelected("AI Employee");
															setActiveWorkspaceSection("Catalogue");
														},
														className: "inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]",
														children: "Open Catalogue"
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-6 grid gap-4 lg:grid-cols-2",
												children: [
													{
														label: "Leads engaged",
														value: INBOX_CONVERSATIONS.filter((conversation) => {
															const message = (conversation.name || "").toLowerCase();
															return CUSTOMERS.some((customer) => message.includes(customer.name.toLowerCase()) || customer.name.toLowerCase().includes(message));
														}).length.toString(),
														detail: "Customer conversations that match existing lead records."
													},
													{
														label: "Leads qualified",
														value: CUSTOMERS.filter((customer) => customer.leadStatus !== "Cold lead").length.toString(),
														detail: "Warm and hot leads currently recorded in the workspace."
													},
													{
														label: "Recommendations made",
														value: "No tracked recommendations",
														detail: "No recommendation activity is available in the current data."
													},
													{
														label: "Quotes/offers sent",
														value: "No tracked offers",
														detail: "No sent-offer history is available in the current data."
													}
												].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-medium text-[#6B7280]",
															children: item.label
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-3 text-2xl font-semibold text-[#111827]",
															children: item.value
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-sm text-[#6B7280]",
															children: item.detail
														})
													]
												}, item.label))
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
												className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
													children: "SALES SIGNALS"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4 space-y-3",
													children: [
														{
															label: "Follow-ups completed",
															value: "No follow-up history",
															detail: "Completed follow-up activity is not tracked in the current workspace."
														},
														{
															label: "Conversions",
															value: "No conversion data",
															detail: "No conversion events have been logged yet."
														},
														{
															label: "Conversion rate",
															value: "No conversion rate",
															detail: "Conversion rate cannot be calculated without logged sales outcomes."
														}
													].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-medium text-[#6B7280]",
																children: item.label
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-lg font-semibold text-[#111827]",
																children: item.value
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#6B7280]",
																children: item.detail
															})
														]
													}, item.label))
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
												className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
													children: "SALES CONTEXT"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-4 space-y-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]",
														children: "Sales performance will appear here once the AI has handled enough customer interactions to create measurable sales activity."
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]",
														children: "Review the existing Sales Playbooks and Catalogue workspaces to strengthen the buyer journey and product guidance the AI uses."
													})]
												})]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
										value: "customer-experience",
										className: "mt-6 space-y-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "max-w-2xl",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
														children: "CUSTOMER EXPERIENCE"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-sm leading-6 text-[#6B7280]",
														children: "This view uses existing conversation and customer data only. It does not invent ratings or sentiment scores."
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setSelected("Inbox"),
														className: "inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]",
														children: "Open Conversations"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setSelected("Customers"),
														className: "inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]",
														children: "Open Customers"
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-6 grid gap-4 lg:grid-cols-2",
												children: [
													{
														label: "Customer satisfaction",
														value: "No satisfaction data",
														detail: "No satisfaction feedback has been captured yet."
													},
													{
														label: "Positive feedback",
														value: INBOX_CONVERSATIONS.filter((conversation) => conversation.message.toLowerCase().includes("thanks") || conversation.message.toLowerCase().includes("thank you") || conversation.message.toLowerCase().includes("great")).length.toString(),
														detail: "Conversations that include positive wording in the current inbox."
													},
													{
														label: "Negative feedback",
														value: INBOX_CONVERSATIONS.filter((conversation) => conversation.message.toLowerCase().includes("problem") || conversation.message.toLowerCase().includes("issue") || conversation.message.toLowerCase().includes("pause")).length.toString(),
														detail: "Conversations that mention a problem or request for change."
													},
													{
														label: "Unresolved requests",
														value: Math.max(0, INBOX_CONVERSATIONS.length - INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "ai_handled").length).toString(),
														detail: "Conversations that are still open or not marked as AI handled."
													}
												].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-medium text-[#6B7280]",
															children: item.label
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-3 text-2xl font-semibold text-[#111827]",
															children: item.value
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-sm text-[#6B7280]",
															children: item.detail
														})
													]
												}, item.label))
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
												className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
													children: "HUMAN ESCALATIONS"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4 space-y-3",
													children: INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).length > 0 ? INBOX_CONVERSATIONS.filter((conversation) => conversation.source === "needs_attention" || conversation.needsAttention).map((conversation) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold text-[#111827]",
															children: conversation.name || "Unknown contact"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-sm text-[#6B7280]",
															children: conversation.message
														})]
													}, conversation.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[20px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]",
														children: "No human escalations are currently flagged."
													})
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
												className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
													children: "FREQUENTLY REPEATED QUESTIONS"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4 space-y-3",
													children: (() => {
														const repeatedQuestions = Array.from(new Set(INBOX_CONVERSATIONS.filter((conversation) => conversation.message.toLowerCase().includes("pricing") || conversation.message.toLowerCase().includes("price") || conversation.message.toLowerCase().includes("product") || conversation.message.toLowerCase().includes("installation")).map((conversation) => {
															const message = conversation.message.toLowerCase();
															if (message.includes("pricing") || message.includes("price")) return "Pricing questions";
															if (message.includes("product") || message.includes("availability")) return "Product availability";
															if (message.includes("installation")) return "Installation requests";
															return "Other questions";
														})));
														return repeatedQuestions.length > 0 ? repeatedQuestions.map((question) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]",
															children: question
														}, question)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "rounded-[20px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]",
															children: "Customer experience insights will appear once your AI employee has handled enough conversations."
														});
													})()
												})]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
										value: "issues",
										className: "mt-6 space-y-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "max-w-2xl",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
													children: "ISSUES & IMPROVEMENTS"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm leading-6 text-[#6B7280]",
													children: "These issues are based only on current conversations, catalog state, playbooks, and escalation data already present in the workspace."
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-6 space-y-4",
												children: (() => {
													const visibleIssues = [
														{
															title: "Knowledge",
															items: [{
																issue: "Customers are asking about pricing, product availability, or related product details.",
																why: "These conversations point to a likely knowledge gap in the AI's current answers.",
																source: "Knowledge",
																actionLabel: "Open Knowledge",
																onAction: () => {
																	setSelected("AI Employee");
																	setActiveWorkspaceSection("Knowledge Hub");
																},
																enabled: INBOX_CONVERSATIONS.some((conversation) => {
																	const message = conversation.message.toLowerCase();
																	return message.includes("pricing") || message.includes("price") || message.includes("availability") || message.includes("product") || message.includes("catalogue");
																})
															}]
														},
														{
															title: "Catalogue",
															items: [{
																issue: "At least one offer is currently inactive in the catalogue.",
																why: "The AI may be directing customers toward an offer that is not currently available.",
																source: "Catalogue",
																actionLabel: "Open Catalogue",
																onAction: () => {
																	setSelected("AI Employee");
																	setActiveWorkspaceSection("Catalogue");
																},
																enabled: PRODUCTS.some((product) => !product.active)
															}]
														},
														{
															title: "Sales Playbooks",
															items: [{
																issue: "There are customer conversations and leads, but no sales playbooks are available yet.",
																why: "This suggests the AI is missing a structured guide for qualification and follow-up.",
																source: "Sales",
																actionLabel: "Open Sales Playbooks",
																onAction: () => {
																	setSelected("AI Employee");
																	setActiveWorkspaceSection("Sales Playbooks");
																},
																enabled: playbooks.length === 0 && (INBOX_CONVERSATIONS.length > 0 || CUSTOMERS.length > 0)
															}]
														},
														{
															title: "Policies",
															items: [{
																issue: "At least one conversation has been flagged for human review.",
																why: "This points to a policy-sensitive case that should be reviewed in the AI's policy workspace.",
																source: "Policies",
																actionLabel: "Open Policies",
																onAction: () => {
																	setSelected("AI Employee");
																	setActiveWorkspaceSection("Policies");
																},
																enabled: INBOX_CONVERSATIONS.some((conversation) => conversation.source === "needs_attention" || conversation.needsAttention)
															}]
														},
														{
															title: "Skills",
															items: [{
																issue: "Support and follow-up requests are appearing in customer conversations.",
																why: "These cases likely need stronger skill coverage in the AI's support and follow-up capabilities.",
																source: "Skills",
																actionLabel: "Open Skills",
																onAction: () => {
																	setSelected("AI Employee");
																	setActiveWorkspaceSection("Skills");
																},
																enabled: INBOX_CONVERSATIONS.some((conversation) => {
																	const message = conversation.message.toLowerCase();
																	return message.includes("support") || message.includes("issue") || message.includes("problem") || message.includes("cancel") || message.includes("refund") || message.includes("follow up");
																})
															}]
														},
														{
															title: "Integrations",
															items: [{
																issue: "Some integrations are still not fully connected or require setup.",
																why: "This suggests the AI may be missing the data or channels it needs to act effectively.",
																source: "Integrations",
																actionLabel: "Open Integrations",
																onAction: () => {
																	setSelected("AI Employee");
																	setActiveWorkspaceSection("Integrations");
																},
																enabled: getAllIntegrationItems().some((item) => getIntegrationStatus(item.id) === "setup_required" || getIntegrationStatus(item.id) === "available")
															}]
														}
													].flatMap((group) => group.items.filter((item) => item.enabled));
													return visibleIssues.length > 0 ? visibleIssues.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-5",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "max-w-2xl",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]",
																		children: item.source
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-base font-semibold text-[#111827]",
																		children: item.issue
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																		className: "mt-2 text-sm text-[#6B7280]",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "font-semibold text-[#111827]",
																				children: "Why it matters:"
																			}),
																			" ",
																			item.why
																		]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																		className: "mt-2 text-sm text-[#6B7280]",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "font-semibold text-[#111827]",
																				children: "Recommended action:"
																			}),
																			" ",
																			item.actionLabel
																		]
																	})
																]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: item.onAction,
																className: "inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]",
																children: item.actionLabel
															})]
														})
													}, `${item.source}-${index}`)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-[20px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-5 text-sm text-[#6B7280]",
														children: "No current issues detected. Your AI employee is not showing any supported performance problems right now."
													});
												})()
											})]
										})
									})
								]
							})]
						}),
						connectModalOpen && connectModalId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fixed inset-0 z-50 flex items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 bg-black/40",
								onClick: () => setConnectModalOpen(false)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: (e) => e.stopPropagation(),
								className: `${GLOBAL_RADIUS} bg-white p-6 z-10 w-full max-w-md transform transition-all duration-200 ease-out shadow-lg scale-100`,
								role: "dialog",
								"aria-modal": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-lg font-semibold mb-1",
										children: ["Connect ", getIntegrationName(connectModalId)]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-[#6B7280] mb-4",
										children: [
											"Connect your ",
											getIntegrationName(connectModalId),
											" account."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-medium",
										children: "Account Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										value: connectForm.email,
										onChange: (e) => setConnectForm((s) => ({
											...s,
											email: e.target.value
										})),
										className: INPUT_FIELD_WHITE,
										placeholder: "you@business.com"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mt-3 text-sm font-medium",
										children: "Business Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: connectForm.businessName,
										onChange: (e) => setConnectForm((s) => ({
											...s,
											businessName: e.target.value
										})),
										className: INPUT_FIELD_WHITE,
										placeholder: "Business Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mt-3 text-sm font-medium",
										children: "Phone Number"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										value: connectForm.phone,
										onChange: (e) => setConnectForm((s) => ({
											...s,
											phone: e.target.value
										})),
										className: INPUT_FIELD_WHITE,
										placeholder: "+254 7xx xxx xxx"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex justify-end gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setConnectModalOpen(false),
											className: BUTTON_TERTIARY,
											children: "Cancel"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: handleModalConnect,
											className: BUTTON_PRIMARY,
											children: "Connect"
										})]
									})
								]
							})]
						}),
						drawerOpen && drawerIntegrationId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fixed inset-0 z-40 pointer-events-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 bg-black/20 backdrop-blur-sm",
								onClick: closeDrawer
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
								className: "pointer-events-auto fixed right-0 top-0 h-full w-[420px] z-50 bg-white shadow-lg transform transition-transform duration-200 ease-out",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 flex flex-col h-full",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-12 w-12 rounded-[12px] bg-[#F3F4F6] flex items-center justify-center text-[#111827]",
													children: (() => {
														const id = drawerIntegrationId;
														for (const section of INTEGRATION_SECTIONS) {
															const found = section.items.find((item) => item.id === id);
															if (found) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(found.Icon, { className: "h-6 w-6" });
														}
														return null;
													})()
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-lg font-semibold",
													children: getIntegrationName(drawerIntegrationId)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm text-[#6B7280]",
													children: (integrationStates[drawerIntegrationId] || {}).accountName || "Connected account"
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: closeDrawer,
												className: "rounded-full p-2 text-[#6B7280] hover:bg-[#F3F4F6]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 rounded-md border border-[#E5E7EB] p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-medium",
														children: "Connection status"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm text-[#6B7280]",
														children: (integrationStates[drawerIntegrationId] || {}).status
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-sm text-[#94A3B8]",
													children: ["Last sync: ", (integrationStates[drawerIntegrationId] || {}).lastSynced || "—"]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 flex gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => handleReconnect(drawerIntegrationId),
														className: BUTTON_TERTIARY,
														children: "Reconnect"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => handleDisconnect(drawerIntegrationId),
														className: BUTTON_SECONDARY,
														children: "Disconnect"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => handleSyncNow(drawerIntegrationId),
														className: BUTTON_PRIMARY,
														children: "Sync Now"
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex-1 overflow-y-auto",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#111827] mb-3",
												children: "Permissions granted"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-2",
												children: (INTEGRATION_CAPABILITIES[drawerIntegrationId] || []).map((cap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center gap-3 text-sm text-[#374151]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#ECFDF5] text-[#16A34A]",
														children: "✓"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cap })]
												}, cap))
											})]
										})
									]
								})
							})]
						}),
						selected === "Settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `${CARD}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-between",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
												children: "Settings"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-2 text-2xl font-semibold text-[#111827]",
												children: "Business Profile"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl",
												children: "This information is used by your AI Employee when communicating with customers."
											})
										] })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 lg:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#111827]",
											children: "Business Details"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-semibold text-[#111827]",
													children: "Business Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: businessProfile.name,
													onChange: (e) => setBusinessProfile((s) => ({
														...s,
														name: e.target.value
													})),
													className: "mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
													placeholder: "e.g., Sokoos Internet"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-semibold text-[#111827]",
													children: "Industry"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: businessProfile.industry,
													onChange: (e) => setBusinessProfile((s) => ({
														...s,
														industry: e.target.value
													})),
													className: "mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
													placeholder: "e.g., Telecom & Connectivity"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-semibold text-[#111827]",
													children: "Description"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													value: businessProfile.description,
													onChange: (e) => setBusinessProfile((s) => ({
														...s,
														description: e.target.value
													})),
													className: "mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
													placeholder: "What does your business do?",
													rows: 4
												})] })
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#111827]",
											children: "Contact Information"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-semibold text-[#111827]",
													children: "Phone"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "tel",
													value: businessProfile.phone,
													onChange: (e) => setBusinessProfile((s) => ({
														...s,
														phone: e.target.value
													})),
													className: "mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
													placeholder: "e.g., +254 20 3949 0101"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-semibold text-[#111827]",
													children: "Email"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "email",
													value: businessProfile.email,
													onChange: (e) => setBusinessProfile((s) => ({
														...s,
														email: e.target.value
													})),
													className: "mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
													placeholder: "e.g., support@sokoos.co.ke"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-semibold text-[#111827]",
													children: "Location"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: businessProfile.location,
													onChange: (e) => setBusinessProfile((s) => ({
														...s,
														location: e.target.value
													})),
													className: "mt-2 w-full rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
													placeholder: "e.g., Nairobi, Kenya"
												})] })
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 lg:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#111827]",
											children: "Operations"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-semibold text-[#111827]",
												children: "Business Hours"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: businessProfile.businessHours,
												onChange: (e) => setBusinessProfile((s) => ({
													...s,
													businessHours: e.target.value
												})),
												className: "mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
												placeholder: "e.g., Mon–Fri, 8:00 AM - 6:00 PM"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-semibold text-[#111827]",
												children: "Service Areas"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: businessProfile.serviceAreas,
												onChange: (e) => setBusinessProfile((s) => ({
													...s,
													serviceAreas: e.target.value
												})),
												className: "mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
												placeholder: "e.g., Nairobi, Kiambu, Thika"
											})] })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#111827]",
											children: "Payment Methods"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-3 cursor-pointer rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														checked: businessProfile.paymentMethods.mPesa,
														onChange: () => setBusinessProfile((s) => ({
															...s,
															paymentMethods: {
																...s.paymentMethods,
																mPesa: !s.paymentMethods.mPesa
															}
														})),
														className: "w-4 h-4"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-semibold text-[#111827]",
														children: "M-Pesa"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-3 cursor-pointer rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														checked: businessProfile.paymentMethods.cash,
														onChange: () => setBusinessProfile((s) => ({
															...s,
															paymentMethods: {
																...s.paymentMethods,
																cash: !s.paymentMethods.cash
															}
														})),
														className: "w-4 h-4"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-semibold text-[#111827]",
														children: "Cash"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-3 cursor-pointer rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														checked: businessProfile.paymentMethods.bankTransfer,
														onChange: () => setBusinessProfile((s) => ({
															...s,
															paymentMethods: {
																...s.paymentMethods,
																bankTransfer: !s.paymentMethods.bankTransfer
															}
														})),
														className: "w-4 h-4"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-semibold text-[#111827]",
														children: "Bank Transfer"
													})]
												})
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `${CARD}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-between",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
												children: "Settings"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-2 text-2xl font-semibold text-[#111827]",
												children: "Personal Contacts"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl",
												children: "Manage personal contacts the business owner may need quick access to."
											})
										] })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 lg:grid-cols-[1.4fr_0.6fr]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#111827]",
												children: "Contacts"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-[#6B7280]",
												children: "Card view of personal contacts stored for quick reference."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-4 grid gap-4 sm:grid-cols-2",
												children: personalContacts.map((pc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-lg font-semibold text-[#111827]",
															children: pc.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-sm text-[#6B7280]",
															children: pc.relationship
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-sm text-[#111827]",
															children: pc.phone
														})]
													})
												}, pc.id))
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
										className: "rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#111827]",
												children: "Add Contact"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-[#6B7280]",
												children: "Add a personal contact for quick access."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-sm font-semibold text-[#111827]",
														children: "Name"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: newContact.name,
														onChange: (e) => setNewContact((s) => ({
															...s,
															name: e.target.value
														})),
														className: "mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
														placeholder: "e.g., Mary Wanjiku"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-sm font-semibold text-[#111827]",
														children: "Relationship"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: newContact.relationship,
														onChange: (e) => setNewContact((s) => ({
															...s,
															relationship: e.target.value
														})),
														className: "mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
														placeholder: "e.g., Wife, Supplier"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-sm font-semibold text-[#111827]",
														children: "Phone Number"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "tel",
														value: newContact.phone,
														onChange: (e) => setNewContact((s) => ({
															...s,
															phone: e.target.value
														})),
														className: "mt-2 w-full rounded-[24px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
														placeholder: "e.g., +254712345678"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex items-center justify-end",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: addPersonalContact,
															className: "inline-flex items-center justify-center rounded-[24px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#16A34A]",
															children: "Add contact"
														})
													})
												]
											})
										]
									})]
								})
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { cn as n, DashboardLayout as t };
