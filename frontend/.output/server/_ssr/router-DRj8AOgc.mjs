import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { A as Calendar, D as ChevronLeft, E as ChevronRight, I as Activity, N as Box, P as Bot, _ as Megaphone, a as Settings, b as Image, d as Plus, g as Menu, n as Users, o as Send, s as Search, t as X, w as Cpu, x as House, y as Inbox } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DRj8AOgc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BvkmjR2h.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sokoos — The Operating System for African Businesses" },
			{
				name: "description",
				content: "Sokoos is an AI-powered WhatsApp assistant that answers customers, closes sales, and schedules Status posts 24/7 for African SMEs."
			},
			{
				property: "og:title",
				content: "Sokoos — Your AI Employee on WhatsApp"
			},
			{
				property: "og:description",
				content: "AI-powered WhatsApp assistant for African businesses. Never miss another customer again."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
function isAuthenticated() {
	try {
		return localStorage.getItem("mock_user") !== null;
	} catch (e) {
		return false;
	}
}
function signInMock(user) {
	try {
		localStorage.setItem("mock_user", JSON.stringify(user));
	} catch (e) {}
}
var Route$2 = createFileRoute("/sign-in")({ component: SignIn });
function SignIn() {
	(0, import_react.useEffect)(() => {
		signInMock({
			id: "1",
			name: "Mock User"
		});
		setTimeout(() => {
			window.location.href = "/dashboard";
		}, 50);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl font-semibold",
				children: "Signing you in…"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Redirecting to your dashboard."
			})]
		})
	});
}
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
		label: "Status Scheduler",
		href: "/dashboard/status",
		Icon: Calendar
	},
	{
		label: "Broadcasts",
		href: "/dashboard/broadcasts",
		Icon: Megaphone
	},
	{
		label: "Customers",
		href: "/dashboard/customers",
		Icon: Users
	},
	{
		label: "Catalog",
		href: "/dashboard/catalog",
		Icon: Box
	},
	{
		label: "AI Assistant",
		href: "/dashboard/assistant",
		Icon: Cpu
	},
	{
		label: "Analytics",
		href: "/dashboard/analytics",
		Icon: Activity
	},
	{
		label: "Settings",
		href: "/dashboard/settings",
		Icon: Settings
	}
];
var STAT_CARDS = [
	{
		label: "Messages Today",
		value: "1,284",
		delta: "+18%"
	},
	{
		label: "AI Responses",
		value: "912",
		delta: "+24%"
	},
	{
		label: "Team Takeovers",
		value: "72",
		delta: "-4%"
	},
	{
		label: "New Leads",
		value: "38",
		delta: "+11%"
	}
];
var CARD = "rounded-[20px] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-shadow duration-200 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)]";
var SECTION_HEADING = "text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]";
var CARD_TITLE = "text-[28px] font-semibold mb-6 text-[#0F172A]";
var CUSTOMER_NAME = "text-lg font-semibold text-[#111827]";
var SECONDARY = "text-sm text-[#64748B]";
var MESSAGE_PREVIEW = "text-sm text-[#475569]";
var TIME_LABEL = "text-xs text-[#64748B]";
var BADGE = "inline-flex h-7 items-center gap-1.5 rounded-full px-3 text-[12px] font-semibold";
var BADGE_ICON = "h-2.5 w-2.5 rounded-full";
var RECENT_ACTIVITY = [
	{
		title: "New customer inquiry",
		subtitle: "Received in WhatsApp inbox",
		time: "5m ago"
	},
	{
		title: "AI replied to lead",
		subtitle: "Followed up about pricing",
		time: "12m ago"
	},
	{
		title: "Status post scheduled",
		subtitle: "Weekly promotion goes live",
		time: "1h ago"
	},
	{
		title: "New product added",
		subtitle: "Shoes catalog updated",
		time: "3h ago"
	}
];
var QUICK_ACTIONS = [
	"Create Status Post",
	"View Inbox",
	"Pause AI",
	"Add Product"
];
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
var ANALYTICS_METRICS = [
	{
		label: "Messages",
		value: "13.4k",
		delta: "+12%",
		description: "Compared to last week"
	},
	{
		label: "Leads",
		value: "1,280",
		delta: "+8%",
		description: "Warm and new leads"
	},
	{
		label: "Sales",
		value: "KSh 4.2M",
		delta: "+18%",
		description: "Revenue from campaigns"
	},
	{
		label: "AI Resolution",
		value: "78%",
		delta: "+6%",
		description: "Handled without human support"
	}
];
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
var TOP_QUESTIONS = [
	{
		question: "How do I upgrade my plan?",
		volume: "320"
	},
	{
		question: "What are your business hours?",
		volume: "290"
	},
	{
		question: "Can I get a trial?",
		volume: "215"
	}
];
var POPULAR_PRODUCTS = [
	{
		name: "20 Mbps",
		sales: "520"
	},
	{
		name: "Business Package",
		sales: "320"
	},
	{
		name: "10 Mbps",
		sales: "270"
	}
];
var LANGUAGES = ["English", "Kiswahili"];
var TONES = [
	"Professional",
	"Friendly",
	"Formal",
	"Sales-focused"
];
var ASSISTANT_TABS = [
	"Business Knowledge",
	"AI Settings",
	"Test AI",
	"Escalation Rules",
	"Conversation Policies"
];
var TEST_AI_PROMPTS = [
	"What is the Business Package price?",
	"Can I get a trial before I sign up?",
	"When are you open for support?"
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
	"AI",
	"You",
	"Needs Attention"
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
	const [selected, setSelected] = (0, import_react.useState)("Home");
	const [assistantTab, setAssistantTab] = (0, import_react.useState)("Business Knowledge");
	const [activeConversation, setActiveConversation] = (0, import_react.useState)("c1");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [customerSearch, setCustomerSearch] = (0, import_react.useState)("");
	const [activeTab, setActiveTab] = (0, import_react.useState)("All");
	const activeConversationData = INBOX_CONVERSATIONS.find((item) => item.id === activeConversation);
	const activeCustomerProfile = CUSTOMER_PROFILES[activeConversation] ?? CUSTOMER_PROFILES.c1;
	const activeMessages = INBOX_MESSAGES[activeConversation] ?? [];
	const [sourceOverrides, setSourceOverrides] = (0, import_react.useState)({});
	const getEffectiveSource = (id, original) => sourceOverrides[id] ?? original ?? "owner";
	const [messageInput, setMessageInput] = (0, import_react.useState)("");
	const textareaRef = (0, import_react.useRef)(null);
	const [sidebarCollapsed, setSidebarCollapsed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const textarea = textareaRef.current;
		if (!textarea) return;
		textarea.style.height = "auto";
		const height = Math.min(textarea.scrollHeight, 120);
		textarea.style.height = `${height}px`;
		textarea.style.overflowY = textarea.scrollHeight > 120 ? "auto" : "hidden";
	}, [messageInput]);
	const filteredCustomers = CUSTOMERS.filter((customer) => {
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
	const [products, setProducts] = (0, import_react.useState)(PRODUCTS);
	const chartMax = Math.max(...ANALYTICS_CHART.map((point) => point.value));
	const [aiEnabled, setAiEnabled] = (0, import_react.useState)(true);
	const [businessHours, setBusinessHours] = (0, import_react.useState)("Mon–Fri, 8:00 AM - 6:00 PM");
	const [humanTakeover, setHumanTakeover] = (0, import_react.useState)(true);
	const [language, setLanguage] = (0, import_react.useState)("English");
	const [personality, setPersonality] = (0, import_react.useState)("Friendly");
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
		const aiMessage = {
			id: `ai-${Date.now()}`,
			role: "ai",
			text: trimmed.toLowerCase().includes("business package") ? "Our Business Package costs KES 5,000/month." : "This is a mock reply from your AI assistant based on the configured business knowledge.",
			source: "Products & Services → Business Package"
		};
		setTestAiMessages((current) => [
			...current,
			userMessage,
			aiMessage
		]);
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
	const [assistantName, setAssistantName] = (0, import_react.useState)("Nuru");
	const [primaryLanguage, setPrimaryLanguage] = (0, import_react.useState)("English");
	const [secondaryLanguage, setSecondaryLanguage] = (0, import_react.useState)("Kiswahili");
	const [tone, setTone] = (0, import_react.useState)("Friendly");
	const [upsellProducts, setUpsellProducts] = (0, import_react.useState)(true);
	const [recommendAlternatives, setRecommendAlternatives] = (0, import_react.useState)(true);
	const [closeSalesAutomatically, setCloseSalesAutomatically] = (0, import_react.useState)(false);
	const [businessInfo, setBusinessInfo] = (0, import_react.useState)({
		name: "Sokoos Internet",
		type: "Telecom & Connectivity",
		about: "We help local businesses stay online with reliable internet plans, fast support, and easy onboarding.",
		hours: "Mon–Fri, 8:00 AM - 6:00 PM",
		serviceAreas: "Nairobi, Kiambu, Thika",
		paymentMethods: "Mobile Money, Bank Transfer, Cash"
	});
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
	const activePersonalIcon = activePersonalEntry && [
		"wife",
		"husband",
		"spouse",
		"family"
	].some((k) => activePersonalEntry.relationship.toLowerCase().includes(k)) ? "🏠" : "👤";
	const effectiveActiveSource = isPersonalActive ? "personal" : getEffectiveSource(activeConversation, activeConversationData?.source);
	const activeAgentName = isPersonalActive ? "Personal" : String(effectiveActiveSource).startsWith("ai") ? "Sokoos AI" : OWNER_NAMES[activeConversation] ?? "You";
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
	const [policies, setPolicies] = (0, import_react.useState)({
		returnPolicy: "Customers may return services within 7 days if there is a technical issue requiring a fix.",
		deliveryPolicy: "We deliver service activation details via WhatsApp within 24 hours of payment.",
		cancellationPolicy: "Cancel anytime with 48 hours notice before the next billing cycle."
	});
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-screen min-h-screen bg-[#FFFFFF] text-[#111827]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `hidden md:fixed md:inset-y-0 md:left-0 md:flex md:flex-col md:pt-6 bg-[#FFFFFF] border-r border-[#E5E7EB]/20 transition-all duration-300 ease-out ${sidebarCollapsed ? "md:w-[80px]" : "md:w-[240px]"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 pb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 rounded-md bg-[#22C55E] flex items-center justify-center text-white font-bold",
								children: "S"
							}), !sidebarCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg font-bold",
								children: "Sokoos"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSidebarCollapsed((value) => !value),
							title: sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar",
							"aria-label": sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar",
							className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] transition hover:bg-[#F3F4F6]",
							children: sidebarCollapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: `flex-1 overflow-y-auto transition-all duration-300 ${sidebarCollapsed ? "px-1" : "px-2"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: NAV_ITEMS.map(({ label, href, Icon }) => {
							const active = selected === label;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelected(label),
								title: label,
								"aria-label": label,
								className: `w-full flex items-center gap-3 rounded-md py-2 text-sm font-medium transition-colors ${sidebarCollapsed ? "justify-center" : "justify-start px-3"} ${active ? "bg-[#22C55E] text-white" : "text-[#111827] hover:bg-[#F3F4F6] hover:text-[#111827]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 ${active ? "opacity-100" : "opacity-80"}` }), !sidebarCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
							}) }, href);
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "md:hidden fixed top-0 left-0 right-0 h-14 bg-[#FFFFFF] border-b border-[#E5E7EB]/20 flex items-center px-4 z-30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Open menu",
					onClick: () => setMobileOpen(true),
					className: "mr-3 inline-flex items-center justify-center rounded-md p-2 text-[#111827] hover:bg-[#F3F4F6]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-8 w-8 rounded-md bg-[#22C55E] flex items-center justify-center text-white font-bold",
						children: "S"
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
					className: "absolute left-0 top-0 bottom-0 w-72 bg-[#FFFFFF] border-r border-[#E5E7EB]/20 p-4 overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-8 w-8 rounded-md bg-[#22C55E] flex items-center justify-center text-white font-bold",
								children: "S"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: "Sokoos"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMobileOpen(false),
							className: "p-2 rounded-md hover:bg-[#F3F4F6]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: NAV_ITEMS.map(({ label, href, Icon }) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setSelected(label);
									setMobileOpen(false);
								},
								className: `w-full text-left flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${selected === label ? "bg-[#22C55E] text-white" : "text-[#111827] hover:bg-[#F3F4F6] hover:text-[#111827]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
							}) }, href);
						})
					}) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: `h-full pt-14 md:pt-0 transition-all duration-300 ${sidebarCollapsed ? "md:pl-[80px]" : "md:pl-[240px]"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto h-full p-4",
					children: [
						selected === "Home" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: CARD,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium text-[#475569]",
												children: "Good Afternoon, Frank 👋"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
												className: CARD_TITLE,
												children: "Welcome back to Sokoos"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: `mt-6 ${SECONDARY}`,
												children: "Here’s what’s happening with your business today."
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-2xl bg-[#F9FAFB] px-4 py-2 text-sm text-[#111827]",
											children: "Updated just now"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
									children: STAT_CARDS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: CARD,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: SECTION_HEADING,
											children: stat.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 flex items-end justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-3xl font-semibold text-[#111827]",
												children: stat.value
											}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#166534]",
												children: stat.delta
											})]
										})]
									}, stat.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 lg:grid-cols-[1.5fr_1fr]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: CARD,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center justify-between",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: SECTION_HEADING,
												children: "Recent Activity"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: CARD_TITLE,
												children: "What happened recently"
											})] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6 space-y-4",
											children: RECENT_ACTIVITY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-[20px] bg-[#F9FAFB] p-7 transition hover:bg-[#F1F5F9]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-semibold text-[#111827]",
														children: item.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs text-[#6B7280]",
														children: item.time
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-[#6B7280]",
													children: item.subtitle
												})]
											}, item.title))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: CARD,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: SECTION_HEADING,
											children: "Quick Actions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: CARD_TITLE,
											children: "Jump into work"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6 grid gap-3",
											children: QUICK_ACTIONS.map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "w-full rounded-[20px] border border-[#E5E7EB]/10 bg-[#F9FAFB] p-6 text-left text-sm font-semibold text-[#111827] transition hover:border-[#CBD5E1] hover:bg-[#F1F5F9]",
												children: action
											}, action))
										})]
									})]
								})
							]
						}),
						selected === "Inbox" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `grid h-[calc(100vh-4.5rem)] min-h-[calc(100vh-4.5rem)] gap-4 transition-all duration-300 ease-out items-stretch auto-rows-fr ${customerCollapsed ? "xl:grid-cols-[280px_minmax(0,1fr)]" : "xl:grid-cols-[280px_minmax(0,1fr)_320px]"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: `${CARD} h-full min-h-0 flex flex-col self-stretch overflow-hidden`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "border-b border-[#E5E7EB]/20 p-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center justify-between gap-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: CARD_TITLE,
													children: "Conversations"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: SECONDARY,
													children: "Recent messages and active chats"
												})] })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap items-center gap-3 px-4 pb-4",
											children: INBOX_TAB_ITEMS.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setActiveTab(tab),
												className: `whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition duration-200 ease-in-out ${activeTab === tab ? "bg-[#22C55E] text-white shadow-sm" : "bg-[#F3F4F6] text-[#111827] hover:bg-[#ECFDF5] hover:-translate-y-0.5"}`,
												children: tab
											}, tab))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex min-h-0 flex-1 flex-col p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-4 rounded-[20px] bg-[#F3F4F6] px-6 py-4 shadow-sm shadow-slate-200/60 ring-1 ring-[#D1D5DB]/40 transition duration-200 ease-out focus-within:ring-2 focus-within:ring-slate-200",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3 text-[#64748B]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "search",
														placeholder: "Search conversations",
														value: searchQuery,
														onChange: (event) => setSearchQuery(event.target.value),
														className: "w-full bg-transparent px-2 py-2 text-sm text-[#111827] placeholder:text-[#94A3B8] placeholder:font-medium outline-none"
													})]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex-1 space-y-3 overflow-y-auto overflow-x-hidden pr-2 scroll-smooth custom-scrollbar",
												children: INBOX_CONVERSATIONS.filter((conversation) => {
													const src = sourceOverrides[conversation.id] ?? conversation.source;
													if (activeTab === "Needs Attention") return src === "needs_attention";
													if (activeTab === "AI") return String(src).startsWith("ai");
													if (activeTab === "You") return src === "owner";
													return true;
												}).filter((conversation) => (conversation.name ?? "").toLowerCase().includes(searchQuery.toLowerCase()) || (conversation.phone ?? "").toLowerCase().includes(searchQuery.toLowerCase()) || conversation.message.toLowerCase().includes(searchQuery.toLowerCase())).map((conversation) => {
													const active = conversation.id === activeConversation;
													const effectiveSourceRaw = sourceOverrides[conversation.id] ?? conversation.source;
													const effectiveSource = personalContacts.some((pc) => pc.phone === conversation.phone) ? "personal" : effectiveSourceRaw;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														onClick: () => setActiveConversation(conversation.id),
														className: `w-full overflow-hidden rounded-[20px] p-6 text-left transition-colors duration-150 flex flex-col justify-between min-h-[92px] ${active ? "bg-[#ECFDF5] ring-1 ring-[#22C55E]/25 shadow-[0_10px_30px_rgba(15,23,42,0.08)]" : "bg-white hover:bg-[#F8FAFC]"}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-start justify-between gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-start gap-3 min-w-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#CBD5E1] text-sm font-semibold text-slate-700",
																	children: conversation.avatar
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "min-w-0",
																	children: [conversation.isSaved && conversation.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: `truncate ${CUSTOMER_NAME}`,
																		title: conversation.name,
																		children: conversation.name.length > 28 ? `${conversation.name.slice(0, 28)}…` : conversation.name
																	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: `truncate ${CUSTOMER_NAME}`,
																		title: conversation.phone ?? "Unknown Customer",
																		children: conversation.phone ?? "Unknown Customer"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "mt-2 flex items-center gap-2",
																		children: [
																			effectiveSource === "needs_attention" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																				className: `${BADGE} bg-[#FEF2F2] text-[#B91C1C]`,
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																					className: `${BADGE_ICON} bg-[#B91C1C]`,
																					"aria-hidden": true
																				}), " Attention"]
																			}),
																			effectiveSource === "personal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: `${BADGE} bg-[#F1F5F9] text-[#334155]`,
																				children: "👤 Personal"
																			}),
																			effectiveSource === "ai_handling" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: `${BADGE} bg-[#ECFDF5] text-[#166534]`,
																				children: "🤖 AI Handling"
																			}),
																			effectiveSource === "ai_handled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: `${BADGE} bg-[#F0FDF4] text-[#14532d]`,
																				children: "🤖 AI Handled"
																			}),
																			effectiveSource === "owner" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: `${BADGE} bg-[#EFF6FF] text-[#1E3A8A]`,
																				children: "👤 You"
																			})
																		]
																	})]
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex-shrink-0",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: `${TIME_LABEL}`,
																	children: formatConversationTime(conversation.time)
																})
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-4 flex items-center justify-between gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: `min-w-0 ${MESSAGE_PREVIEW} truncate`,
																children: conversation.message
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex-shrink-0",
																children: conversation.badge > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: `${BADGE} min-w-[24px] justify-center bg-[#22C55E] text-white`,
																	children: conversation.badge
																}) : null
															})]
														})]
													}, conversation.id);
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: `${CARD} flex h-full min-h-0 flex-col overflow-hidden self-stretch`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "border-b border-[#E5E7EB]/20 p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium text-[#6B7280]",
												children: "Live chat"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "text-[20px] font-semibold text-[#111827]",
													children: INBOX_CONVERSATIONS.find((item) => item.id === activeConversation)?.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-sm text-[#6B7280]",
													children: isPersonalActive ? "Personal contact — AI disabled for this conversation" : activeConversationData?.message ? `Last customer message • ${formatConversationTime(activeConversationData?.time)}` : "Waiting for customer response"
												})]
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [isPersonalActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-2 rounded-full bg-[#E5E7EB] px-3 py-1 text-xs font-semibold text-[#6B7280]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														"aria-hidden": true,
														children: "👤"
													}), "Personal"]
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: toggleAiForActive,
													"aria-label": "Toggle AI/Human mode",
													className: `inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold transition ${effectiveActiveSource.startsWith("ai") ? "bg-[#ECFDF5] text-[#166534]" : effectiveActiveSource === "needs_attention" ? "bg-[#FEF2F2] text-[#B91C1C]" : "bg-[#EFF6FF] text-[#1E3A8A]"}`,
													children: effectiveActiveSource.startsWith("ai") ? effectiveActiveSource === "ai_handling" ? "🤖 AI Mode" : "🤖 AI Handled" : effectiveActiveSource === "needs_attention" ? "🔴 Needs You" : "👤 Human Mode"
												}), customerCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setCustomerCollapsed(false),
													className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] transition hover:bg-[#F3F4F6]",
													"aria-label": "Expand customer panel",
													title: "Expand customer panel",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
												})]
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex min-h-0 flex-1 flex-col p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex-1 min-h-0 space-y-6 overflow-y-auto pr-4 pb-6 custom-scrollbar",
											children: activeMessages.map((message, index) => {
												const originalWasAi = String(activeConversationData?.source).startsWith("ai");
												if (message.from === "agent" && originalWasAi && !String(effectiveActiveSource).startsWith("ai")) return null;
												message.from;
												const isAgent = message.from === "agent";
												const isAi = isAgent && String(effectiveActiveSource).startsWith("ai");
												const senderLabel = isAi ? "Sokoos AI" : activeAgentName;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-4",
													children: [isAgent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex items-center gap-2 text-xs font-semibold text-[#6B7280]",
														children: isAi ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ECFDF5] text-[#0C4A6E]",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: senderLabel }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-[#E0F2FE] px-2 py-0.5 text-[11px] font-semibold text-[#0C4A6E]",
																children: "AI"
															})
														] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: senderLabel })
													}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: `flex ${isAgent ? "justify-start" : "justify-end"}`,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: `rounded-[16px] px-6 py-4 text-sm max-w-[78%] break-words ${isAgent ? isAi ? "bg-[#ECFDF5] text-[#064E3B]" : "bg-[#F3F4F6] text-[#111827]" : "bg-white text-[#111827] border border-[#E5E7EB]/20 shadow-[0_6px_18px_rgba(2,6,23,0.03)]"}`,
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mb-2 leading-relaxed",
																children: message.text
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: `${TIME_LABEL} text-right`,
																children: message.time
															})]
														})
													})]
												}, `${message.time}-${index}`);
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "sticky bottom-0 z-10 mt-6 bg-white/95 pt-6 pb-6 backdrop-blur-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-[20px] bg-[#F8FAFB]/85 p-4 border border-[#E5E7EB]/10 shadow-[0_4px_12px_rgba(15,23,42,0.04)]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
														ref: textareaRef,
														value: messageInput,
														onChange: (event) => setMessageInput(event.target.value),
														placeholder: `Type a message to ${activeCustomerProfile.name}...`,
														className: "min-w-0 flex-1 resize-none overflow-y-auto overflow-x-hidden custom-scrollbar rounded-[18px] border border-[#D1D5DB]/30 bg-white/95 px-6 py-4 text-sm leading-6 text-[#111827] outline-none placeholder:text-[#94A3B8] placeholder:font-medium focus:border-[#94A3B8] focus:ring-2 focus:ring-slate-200",
														rows: 2,
														style: {
															minHeight: 72,
															maxHeight: 180
														}
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														className: "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-sm transition hover:bg-[#16A34A]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-5 w-5" })
													})]
												})
											})
										})]
									})]
								}),
								!customerCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
									className: `${CARD} h-full min-h-0 flex flex-col self-stretch overflow-hidden transition-opacity duration-300 ease-out opacity-100`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-6 min-h-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-3 shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] font-medium uppercase tracking-[0.12em] text-[#6B7280]",
													children: "Customer"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "mt-3 text-[28px] font-semibold text-[#111827]",
													children: activeCustomerProfile.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-[#6B7280]",
													children: activeCustomerProfile.company
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setCustomerCollapsed(true),
												className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] transition hover:bg-[#F3F4F6] shrink-0",
												"aria-label": "Collapse customer panel",
												title: "Collapse customer panel",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 rotate-180" })
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex-1 min-h-0 overflow-y-auto custom-scrollbar",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-6 rounded-[20px] border border-[#E5E7EB]/10 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between gap-4 text-sm text-[#111827]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-[#334155]",
															children: "Phone"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[#0F172A]",
															children: activeCustomerProfile.phone
														})]
													}), isPersonalActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between gap-4 text-sm text-[#111827]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-[#334155]",
															children: "Contact type"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: `${BADGE} bg-[#EFF6FF] text-[#1E40AF]`,
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																"aria-hidden": true,
																children: activePersonalIcon
															}), activePersonalEntry?.relationship ?? "Personal"]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm text-[#475569]",
														children: "This is a personal contact. AI, analytics, and lead tracking are disabled for this conversation."
													})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col gap-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between gap-4 text-sm text-[#111827]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-medium text-[#334155]",
																children: "Lead status"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: `${BADGE} bg-[#ECFDF5] text-[#166534]`,
																children: activeCustomerProfile.leadStatus
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-medium text-sm text-[#111827]",
																children: "Tags"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex flex-wrap gap-2",
																children: activeCustomerProfile.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: `${BADGE} bg-[#F8FAFC] text-[#334155]`,
																	children: tag
																}, tag))
															})]
														})]
													}) })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-4 pt-4 border-t border-[#E5E7EB]/15",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold text-[#111827]",
														children: "Interested products"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid gap-2",
														children: activeCustomerProfile.interestedProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `${BADGE} bg-[#F8FAFC] text-[#334155]`,
															children: product
														}, product))
													})]
												})]
											})
										})]
									})
								})
							]
						}),
						selected === "Status Scheduler" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
									className: "inline-flex items-center gap-2 rounded-2xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]",
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
											className: "rounded-[20px] border border-[#E5E7EB]/70 bg-[#F8FAFC]/70 p-4",
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
														className: "mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] file:mr-4 file:rounded-full file:border-0 file:bg-[#22C55E] file:px-4 file:py-2 file:text-sm file:text-white",
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
													className: "mt-2 h-32 w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
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
														className: "mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
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
														className: "mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6] sm:w-auto",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4" }), "Generate With AI"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "inline-flex w-full items-center justify-center rounded-2xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A] sm:w-auto",
													children: "Schedule Post"
												})]
											})
										]
									})]
								})]
							})]
						}),
						selected === "Broadcasts" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-7 bg-white rounded-md border border-[#E5E7EB]/30 shadow-[0_6px_18px_rgba(16,24,40,0.04)]",
							children: "Sokoos Broadcasts"
						}),
						selected === "Customers" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `space-y-6 ${CARD}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
										children: "Customers"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 text-2xl font-semibold text-[#111827]",
										children: "Customer management"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl",
										children: "Search and review your WhatsApp leads with easy access to contact details and customer statuses."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative w-full sm:w-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: customerSearch,
										onChange: (event) => setCustomerSearch(event.target.value),
										placeholder: "Search customers by name, phone, product or status",
										className: "w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] py-3 pl-11 pr-4 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5] sm:w-85"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-3xl border border-[#E5E7EB]/20 bg-[#FFFFFF] shadow-[0_6px_18px_rgba(16,24,40,0.04)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "min-w-full divide-y divide-[#E5E7EB]/20 text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-[#F9FAFB]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-4 text-sm font-semibold text-[#6B7280]",
												children: "Avatar"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-4 text-sm font-semibold text-[#6B7280]",
												children: "Name"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-4 text-sm font-semibold text-[#6B7280]",
												children: "Phone"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-4 text-sm font-semibold text-[#6B7280]",
												children: "Lead Status"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-4 text-sm font-semibold text-[#6B7280]",
												children: "Interested Product"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-4 text-sm font-semibold text-[#6B7280]",
												children: "Last Interaction"
											})
										] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
										className: "divide-y divide-[#E5E7EB]/20 bg-white",
										children: [filteredCustomers.filter((customer) => !isPersonalByPhone(customer.phone)).map((customer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "hover:bg-[#F3F4F6] transition-colors",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#ECFDF5] text-sm font-semibold text-[#16A34A]",
														children: customer.avatar
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-medium text-[#111827]",
														children: customer.name
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4 text-sm text-[#6B7280]",
													children: customer.phone
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `inline-flex rounded-full px-3 py-1 text-xs font-semibold ${customer.leadStatus === "Hot lead" ? "bg-[#FEE2E2] text-[#B91C1C]" : customer.leadStatus === "Warm lead" ? "bg-[#FEF3C7] text-[#92400E]" : "bg-[#EFF6FF] text-[#1D4ED8]"}`,
														children: customer.leadStatus
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4 text-sm text-[#6B7280]",
													children: customer.interestedProduct
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4 text-sm text-[#6B7280]",
													children: customer.lastInteraction
												})
											]
										}, customer.id)), filteredCustomers.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											colSpan: 6,
											className: "px-6 py-8 text-center text-sm text-[#6B7280]",
											children: "No customers match your search."
										}) })]
									})]
								})
							})]
						}),
						selected === "Catalog" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `space-y-6 ${CARD}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
										children: "Catalog"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 text-2xl font-semibold text-[#111827]",
										children: "Product catalog"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl",
										children: "Manage your product offerings with active toggles, edit actions, and quick deletes."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "inline-flex items-center justify-center rounded-2xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]",
									children: "Add Product"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
								children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-[#6B7280]",
											children: product.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-3xl font-semibold text-[#111827]",
											children: product.price
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setProducts((current) => current.map((item) => item.id === product.id ? {
												...item,
												active: !item.active
											} : item)),
											className: `rounded-full px-3 py-2 text-xs font-semibold ${product.active ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#E5E7EB] text-[#6B7280]"}`,
											children: product.active ? "Active" : "Inactive"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex flex-wrap items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "rounded-2xl border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]",
											children: "Edit"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "rounded-2xl border border-[#FCA5A5] bg-[#FEE2E2] px-4 py-2 text-sm font-semibold text-[#B91C1C] transition hover:bg-[#FECACA]",
											children: "Delete"
										})]
									})]
								}, product.id))
							})]
						}),
						selected === "AI Assistant" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: CARD,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
												children: "AI Assistant"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-2 text-2xl font-semibold text-[#111827]",
												children: "Customize your business AI agent"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl",
												children: "Manage knowledge, behavior rules, escalation and testing from one place. All settings are mocked for now."
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setAiEnabled((value) => !value),
											className: `inline-flex items-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${aiEnabled ? "bg-[#22C55E] text-white" : "bg-[#E5E7EB] text-[#6B7280]"}`,
											children: aiEnabled ? "AI Enabled" : "AI Disabled"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 border-b border-[#E5E7EB] pb-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: ASSISTANT_TABS.map((tab) => {
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setAssistantTab(tab),
													className: `rounded-2xl px-4 py-2 text-sm font-semibold transition ${assistantTab === tab ? "bg-[#22C55E] text-white" : "bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]"}`,
													children: tab
												}, tab);
											})
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6 pt-4",
										children: [
											assistantTab === "Business Knowledge" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
														className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Business Information"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#6B7280]",
																children: "This information helps the AI respond accurately to customer questions."
															})] })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-6 grid gap-4 lg:grid-cols-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Business Name"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		value: businessInfo.name,
																		onChange: (event) => setBusinessInfo((prev) => ({
																			...prev,
																			name: event.target.value
																		})),
																		className: "mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Business Type"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		value: businessInfo.type,
																		onChange: (event) => setBusinessInfo((prev) => ({
																			...prev,
																			type: event.target.value
																		})),
																		className: "mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Business Hours"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		value: businessInfo.hours,
																		onChange: (event) => setBusinessInfo((prev) => ({
																			...prev,
																			hours: event.target.value
																		})),
																		className: "mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																	})] })
																]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "About Us"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																		value: businessInfo.about,
																		onChange: (event) => setBusinessInfo((prev) => ({
																			...prev,
																			about: event.target.value
																		})),
																		className: "mt-2 min-h-[130px] w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Service Areas"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		value: businessInfo.serviceAreas,
																		onChange: (event) => setBusinessInfo((prev) => ({
																			...prev,
																			serviceAreas: event.target.value
																		})),
																		className: "mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Payment Methods"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		value: businessInfo.paymentMethods,
																		onChange: (event) => setBusinessInfo((prev) => ({
																			...prev,
																			paymentMethods: event.target.value
																		})),
																		className: "mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																	})] })
																]
															})]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
														className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Products & Services"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#6B7280]",
																children: "Add the plans and prices your AI assistant should know."
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => setKnowledgeProducts((current) => [...current, {
																	id: `kp${current.length + 1}`,
																	name: "",
																	price: ""
																}]),
																className: "inline-flex items-center rounded-2xl bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#16A34A]",
																children: "Add product"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-6 space-y-4",
															children: knowledgeProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "grid gap-4 lg:grid-cols-[1fr_0.6fr]",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	value: product.name,
																	onChange: (event) => setKnowledgeProducts((current) => current.map((item) => item.id === product.id ? {
																		...item,
																		name: event.target.value
																	} : item)),
																	placeholder: "Product name",
																	className: "w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	value: product.price,
																	onChange: (event) => setKnowledgeProducts((current) => current.map((item) => item.id === product.id ? {
																		...item,
																		price: event.target.value
																	} : item)),
																	placeholder: "Price",
																	className: "w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																})]
															}, product.id))
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
														className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "FAQs"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#6B7280]",
																children: "Common customer questions the assistant will use when answering."
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => setFaqItems((current) => [...current, {
																	id: `faq${current.length + 1}`,
																	question: "",
																	answer: ""
																}]),
																className: "inline-flex items-center rounded-2xl bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#16A34A]",
																children: "Add FAQ"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-6 space-y-4",
															children: faqItems.map((faq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-3 rounded-3xl bg-white p-5 shadow-sm",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Question"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	value: faq.question,
																	onChange: (event) => setFaqItems((current) => current.map((item) => item.id === faq.id ? {
																		...item,
																		question: event.target.value
																	} : item)),
																	className: "mt-2 w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Answer"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																	value: faq.answer,
																	onChange: (event) => setFaqItems((current) => current.map((item) => item.id === faq.id ? {
																		...item,
																		answer: event.target.value
																	} : item)),
																	className: "mt-2 min-h-[100px] w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																})] })]
															}, faq.id))
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
														className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-4",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Policies"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#6B7280]",
																children: "This information is used by the AI when responding to customers."
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Return Policy"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																		value: policies.returnPolicy,
																		onChange: (event) => setPolicies((prev) => ({
																			...prev,
																			returnPolicy: event.target.value
																		})),
																		className: "mt-2 min-h-[100px] w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Delivery Policy"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																		value: policies.deliveryPolicy,
																		onChange: (event) => setPolicies((prev) => ({
																			...prev,
																			deliveryPolicy: event.target.value
																		})),
																		className: "mt-2 min-h-[100px] w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Cancellation Policy"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																		value: policies.cancellationPolicy,
																		onChange: (event) => setPolicies((prev) => ({
																			...prev,
																			cancellationPolicy: event.target.value
																		})),
																		className: "mt-2 min-h-[100px] w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																	})] })
																]
															})]
														})
													})
												]
											}),
											assistantTab === "AI Settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
														className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "AI Identity"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-sm text-[#6B7280]",
																children: "Give your assistant a name and personality."
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-4 space-y-4",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	htmlFor: "assistant-name",
																	children: "Assistant Name"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	id: "assistant-name",
																	type: "text",
																	value: assistantName,
																	onChange: (event) => setAssistantName(event.target.value),
																	className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
																	placeholder: "e.g., Nuru"
																})] })
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
														className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Languages"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-sm text-[#6B7280]",
																children: "Choose which languages your assistant uses."
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "mt-4 grid gap-4 sm:grid-cols-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	htmlFor: "primary-language",
																	children: "Primary Language"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mt-2 flex flex-wrap gap-2",
																	children: LANGUAGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		type: "button",
																		onClick: () => setPrimaryLanguage(option),
																		className: `rounded-2xl border px-3 py-2 text-sm font-semibold transition ${primaryLanguage === option ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-[#F9FAFB] text-[#111827] hover:bg-white"}`,
																		children: option
																	}, option))
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	htmlFor: "secondary-language",
																	children: "Secondary Language"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mt-2 flex flex-wrap gap-2",
																	children: LANGUAGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		type: "button",
																		onClick: () => setSecondaryLanguage(option),
																		className: `rounded-2xl border px-3 py-2 text-sm font-semibold transition ${secondaryLanguage === option ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-[#F9FAFB] text-[#111827] hover:bg-white"}`,
																		children: option
																	}, option))
																})] })]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
														className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Tone"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-sm text-[#6B7280]",
																children: "Select how your assistant communicates with customers."
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-4 space-y-3",
																children: TONES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "radio",
																		name: "tone",
																		value: option,
																		checked: tone === option,
																		onChange: () => setTone(option),
																		className: "w-4 h-4"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: option
																	})]
																}, option))
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
														className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Sales Behavior"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-sm text-[#6B7280]",
																children: "Configure how your assistant handles sales interactions."
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "mt-4 space-y-3",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																		className: "flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "checkbox",
																			checked: upsellProducts,
																			onChange: () => setUpsellProducts((value) => !value),
																			className: "w-4 h-4"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: "Upsell Products"
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																		className: "flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "checkbox",
																			checked: recommendAlternatives,
																			onChange: () => setRecommendAlternatives((value) => !value),
																			className: "w-4 h-4"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: "Recommend Alternatives"
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																		className: "flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "checkbox",
																			checked: closeSalesAutomatically,
																			onChange: () => setCloseSalesAutomatically((value) => !value),
																			className: "w-4 h-4"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: "Close Sales Automatically"
																		})]
																	})
																]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 text-sm text-[#6B7280]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "font-semibold text-[#111827]",
															children: "Note"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2",
															children: "These settings control how your assistant represents your business and interacts with customers. All changes are saved automatically."
														})]
													})
												]
											}),
											assistantTab === "Test AI" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-6 lg:grid-cols-[1.4fr_0.8fr]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
													className: "rounded-3xl border border-[#E5E7EB] bg-white shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex h-full min-h-[620px] flex-col",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "border-b border-[#E5E7EB] p-6",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Test your assistant"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-2 text-sm text-[#6B7280]",
																	children: "Run a mock conversation before customers interact with the AI."
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																ref: testAiScrollRef,
																className: "flex-1 overflow-y-auto px-6 py-5 space-y-4 bg-[#F9FAFB]",
																children: testAiMessages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: `max-w-[90%] ${message.role === "user" ? "ml-auto text-right" : "mr-auto text-left"}`,
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: `inline-block rounded-3xl px-5 py-4 text-sm shadow-sm ${message.role === "user" ? "bg-[#22C55E] text-white" : "bg-white text-[#111827]"}`,
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: message.text })
																	}), message.role === "ai" && message.source ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "mt-2 inline-flex rounded-full bg-[#E5E7EB] px-3 py-1 text-[11px] font-semibold text-[#475569]",
																		children: ["Source: ", message.source]
																	}) : null]
																}, message.id))
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "sticky bottom-0 border-t border-[#E5E7EB] bg-white p-4",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "space-y-3",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																			className: "text-sm font-semibold text-[#111827]",
																			htmlFor: "test-ai-prompt",
																			children: "Message"
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																			id: "test-ai-prompt",
																			value: testAiInput,
																			onChange: (event) => setTestAiInput(event.target.value),
																			onKeyDown: (event) => {
																				if (event.key === "Enter" && !event.shiftKey) {
																					event.preventDefault();
																					sendTestAiMessage();
																				}
																			},
																			className: "min-h-[110px] w-full rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
																			placeholder: "Type a message to the assistant..."
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-xs text-[#6B7280]",
																				children: "This is a mocked experience only; no backend call is made."
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																				type: "button",
																				onClick: sendTestAiMessage,
																				className: "inline-flex items-center justify-center rounded-2xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#16A34A]",
																				children: "Send message"
																			})]
																		})
																	]
																})
															})
														]
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
													className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7280]",
														children: "Quick prompts"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-4 space-y-3",
														children: TEST_AI_PROMPTS.map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setTestAiInput(prompt),
															className: "w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-left text-sm font-semibold text-[#111827] transition hover:bg-[#F3F4F6]",
															children: prompt
														}, prompt))
													})]
												})]
											}),
											assistantTab === "Escalation Rules" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
													className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold text-[#111827]",
															children: "Escalation Rules"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-sm text-[#6B7280]",
															children: "Choose which situations trigger handoff to a human representative."
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-6 space-y-3",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "checkbox",
																		checked: escalateComplaints,
																		onChange: () => setEscalateComplaints((value) => !value),
																		className: "mt-1 w-4 h-4"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Complaints"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-1 text-xs text-[#6B7280]",
																		children: "Detect negative sentiment and escalate immediately."
																	})] })]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "checkbox",
																		checked: escalateRefunds,
																		onChange: () => setEscalateRefunds((value) => !value),
																		className: "mt-1 w-4 h-4"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Refund Requests"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-1 text-xs text-[#6B7280]",
																		children: "Hand off all refund-related conversations to the owner."
																	})] })]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "checkbox",
																		checked: escalateLegalQuestions,
																		onChange: () => setEscalateLegalQuestions((value) => !value),
																		className: "mt-1 w-4 h-4"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Legal Questions"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-1 text-xs text-[#6B7280]",
																		children: "Escalate any conversation involving legal matters or regulations."
																	})] })]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "checkbox",
																		checked: escalateHumanRequested,
																		onChange: () => setEscalateHumanRequested((value) => !value),
																		className: "mt-1 w-4 h-4"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Human Requested"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-1 text-xs text-[#6B7280]",
																		children: "Stop responding when customers explicitly ask for a person."
																	})] })]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "checkbox",
																		checked: escalateUnknownQuestions,
																		onChange: () => setEscalateUnknownQuestions((value) => !value),
																		className: "mt-1 w-4 h-4"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Unknown Questions"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-1 text-xs text-[#6B7280]",
																		children: "Hand off queries outside the AI's knowledge base."
																	})] })]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "checkbox",
																		checked: escalateNegotiationsAbove10k,
																		onChange: () => setEscalateNegotiationsAbove10k((value) => !value),
																		className: "mt-1 w-4 h-4"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Negotiations Above KES 10,000"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-1 text-xs text-[#6B7280]",
																		children: "Escalate any negotiation involving amounts above KES 10,000."
																	})] })]
																})
															]
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 text-sm text-[#6B7280]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-semibold text-[#111827]",
														children: "How escalation works"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2",
														children: "When these situations occur, the AI stops responding and requests owner intervention. You'll receive a notification and can take over the conversation."
													})]
												})]
											}),
											assistantTab === "Conversation Policies" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
														className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Business Hours"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#6B7280]",
																children: "Set the hours when your business operates."
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "mt-4",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-sm font-semibold text-[#111827]",
																		htmlFor: "business-hours",
																		children: "Operating Hours"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		id: "business-hours",
																		type: "text",
																		value: businessHours,
																		onChange: (event) => setBusinessHours(event.target.value),
																		className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
																		placeholder: "e.g., 8:00 AM - 6:00 PM"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-xs text-[#6B7280]",
																		children: "Example: Mon–Fri 8:00 AM - 6:00 PM, Sat 9:00 AM - 2:00 PM"
																	})
																]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
														className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Outside Business Hours"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#6B7280]",
																children: "Choose how the AI behaves when customers message outside operating hours."
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "mt-4 space-y-3",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																		className: "flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "radio",
																			name: "outside-hours",
																			value: "continue",
																			checked: outsideHoursMode === "continue",
																			onChange: () => setOutsideHoursMode("continue"),
																			className: "mt-1 w-4 h-4"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: "Continue AI conversations"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-1 text-xs text-[#6B7280]",
																			children: "AI responds normally, treating it as in-hours."
																		})] })]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																		className: "flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "radio",
																			name: "outside-hours",
																			value: "collect",
																			checked: outsideHoursMode === "collect",
																			onChange: () => setOutsideHoursMode("collect"),
																			className: "mt-1 w-4 h-4"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: "Collect customer information only"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-1 text-xs text-[#6B7280]",
																			children: "AI gathers contact details and messages for follow-up."
																		})] })]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																		className: "flex items-start gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 hover:bg-white transition",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "radio",
																			name: "outside-hours",
																			value: "closed",
																			checked: outsideHoursMode === "closed",
																			onChange: () => setOutsideHoursMode("closed"),
																			className: "mt-1 w-4 h-4"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: "Inform customers that the business is closed"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-1 text-xs text-[#6B7280]",
																			children: "AI informs customers of next opening time and offers to store messages."
																		})] })]
																	})
																]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
														className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Maximum AI Messages"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 text-sm text-[#6B7280]",
																children: "Limit how many consecutive messages the AI can send before escalating to a human."
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "mt-4",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center gap-3",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "number",
																		value: maxAiMessages,
																		onChange: (event) => setMaxAiMessages(Math.max(1, parseInt(event.target.value) || 1)),
																		min: "1",
																		max: "50",
																		className: "w-20 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-sm text-[#6B7280]",
																		children: "messages per conversation"
																	})]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-2 text-xs text-[#6B7280]",
																	children: "Recommended: 8–12 messages before human escalation."
																})]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
														className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm space-y-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between gap-4",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Allow AI to Close Sales"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-sm text-[#6B7280]",
																children: "Let the AI send purchase confirmations and checkout links."
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => setAllowCloseSales((value) => !value),
																className: `rounded-full px-4 py-2 text-sm font-semibold transition ${allowCloseSales ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#E5E7EB] text-[#6B7280]"}`,
																children: allowCloseSales ? "On" : "Off"
															})]
														}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "border-t border-[#E5E7EB] pt-4",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between gap-4",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Allow AI to Schedule Appointments"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-1 text-sm text-[#6B7280]",
																	children: "Let the AI book consultations or service visits without human review."
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => setAllowScheduleAppointments((value) => !value),
																	className: `rounded-full px-4 py-2 text-sm font-semibold transition ${allowScheduleAppointments ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#E5E7EB] text-[#6B7280]"}`,
																	children: allowScheduleAppointments ? "On" : "Off"
																})]
															})
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 text-sm text-[#6B7280]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "font-semibold text-[#111827]",
															children: "Note"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2",
															children: "These policies guide how your AI assistant handles conversations across different scenarios. All changes are automatically saved and take effect immediately."
														})]
													})
												]
											})
										]
									})
								]
							})
						}),
						selected === "Analytics" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `space-y-6 ${CARD}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
											children: "Analytics"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-2 text-2xl font-semibold text-[#111827]",
											children: "Business performance overview"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl",
											children: "Monitor messaging trends, lead growth, sales performance and how AI is resolving customer requests."
										})
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
									children: ANALYTICS_METRICS.map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 shadow-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium text-[#6B7280]",
												children: metric.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 flex items-end justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-3xl font-semibold text-[#111827]",
													children: metric.value
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#166534]",
													children: metric.delta
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm text-[#6B7280]",
												children: metric.description
											})
										]
									}, metric.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 lg:grid-cols-[1.4fr_0.9fr]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#111827]",
												children: "Weekly messages"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-[#6B7280]",
												children: "Volume of incoming messages per day."
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-semibold text-[#6B7280]",
												children: "Mock trends"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 space-y-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-end gap-3",
												children: ANALYTICS_CHART.map((point) => {
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1 text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mx-auto h-40 w-full max-w-12 rounded-4xl bg-[#F3F4F6] p-1",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mx-auto h-full rounded-4xl bg-[#22C55E]",
																style: {
																	height: `${point.value / chartMax * 160}px`,
																	width: "100%"
																}
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-3 text-sm text-[#6B7280]",
															children: point.label
														})]
													}, point.label);
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-3xl bg-[#F9FAFB] p-4 text-sm text-[#6B7280]",
												children: "This chart shows weekly engagement across your WhatsApp campaign messages."
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "space-y-6 rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#111827]",
											children: "Top Questions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 space-y-3",
											children: TOP_QUESTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-medium text-[#111827]",
													children: item.question
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-2 text-sm text-[#6B7280]",
													children: [item.volume, " requests"]
												})]
											}, item.question))
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#111827]",
											children: "Popular Products"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 space-y-3",
											children: POPULAR_PRODUCTS.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-medium text-[#111827]",
													children: product.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm text-[#6B7280]",
													children: "Top choice for new customers"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold text-[#0C4A6E]",
													children: [product.sales, " sold"]
												})]
											}, product.name))
										})] })]
									})]
								})
							]
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
												children: "This information is used by the AI assistant when communicating with customers."
											})
										] })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 lg:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
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
													className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
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
													className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
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
													className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
													placeholder: "What does your business do?",
													rows: 4
												})] })
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
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
													className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
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
													className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
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
													className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
													placeholder: "e.g., Nairobi, Kenya"
												})] })
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 lg:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
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
												className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
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
												className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
												placeholder: "e.g., Nairobi, Kiambu, Thika"
											})] })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#111827]",
											children: "Payment Methods"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition",
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
													className: "flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition",
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
													className: "flex items-center gap-3 cursor-pointer rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 hover:bg-white transition",
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
										className: "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm",
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
													className: "rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4",
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
										className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm",
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
														className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
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
														className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
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
														className: "mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] shadow-sm focus:border-[#22C55E] focus:outline-none",
														placeholder: "e.g., +254712345678"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex items-center justify-end",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: addPersonalContact,
															className: "inline-flex items-center justify-center rounded-2xl bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#16A34A]",
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
var Route$1 = createFileRoute("/dashboard")({ component: Dashboard });
function Dashboard() {
	(0, import_react.useEffect)(() => {
		if (!isAuthenticated()) window.location.href = "/sign-in";
	}, []);
	if (!isAuthenticated()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-md text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl font-semibold",
				children: "Redirecting to sign in…"
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {});
}
var $$splitComponentImporter = () => import("./routes-BwGrOj07.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var SignInRoute = Route$2.update({
	id: "/sign-in",
	path: "/sign-in",
	getParentRoute: () => Route$3
});
var DashboardRoute = Route$1.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$3
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	DashboardRoute,
	SignInRoute
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
