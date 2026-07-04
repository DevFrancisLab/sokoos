import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { A as Calendar, C as House, E as Cpu, I as Activity, N as Box, S as Image, a as Smile, c as Search, f as Plus, m as Paperclip, n as Users, o as Settings, s as Send, t as X, v as Menu, x as Inbox, y as Megaphone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DZ2c7msM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D1gMtWN8.css";
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
var CARD = "rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg";
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
var PERSONALITIES = [
	"Friendly",
	"Professional",
	"Sales Focused"
];
var INBOX_CONVERSATIONS = [
	{
		id: "c1",
		name: "Aisha from Nairobi",
		message: "Can you share the latest pricing?",
		time: "2m",
		badge: 3,
		source: "team",
		avatar: "AM"
	},
	{
		id: "c2",
		name: "James - Tech Store",
		message: "How do I update product availability?",
		time: "14m",
		badge: 0,
		source: "ai",
		avatar: "J"
	},
	{
		id: "c3",
		name: "Grace",
		message: "Thanks for the quick response!",
		time: "37m",
		badge: 1,
		source: "needs_attention",
		needsAttention: true,
		avatar: "G"
	},
	{
		id: "c4",
		name: "Michael",
		message: "Please pause the AI for tonight.",
		time: "1h",
		badge: 0,
		source: "ai",
		avatar: "M"
	}
];
var INBOX_TAB_ITEMS = [
	"All",
	"AI",
	"Team",
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
	}]
};
var CUSTOMER_PROFILE = {
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
};
function DashboardLayout() {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)("Home");
	const [activeConversation, setActiveConversation] = (0, import_react.useState)("c1");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [customerSearch, setCustomerSearch] = (0, import_react.useState)("");
	const [activeTab, setActiveTab] = (0, import_react.useState)("All");
	const filteredCustomers = CUSTOMERS.filter((customer) => {
		const query = customerSearch.toLowerCase();
		return customer.name.toLowerCase().includes(query) || customer.phone.toLowerCase().includes(query) || customer.interestedProduct.toLowerCase().includes(query) || customer.leadStatus.toLowerCase().includes(query);
	});
	const [scheduledPosts, setScheduledPosts] = (0, import_react.useState)(SCHEDULED_POSTS);
	const [newPost, setNewPost] = (0, import_react.useState)({
		image: "",
		caption: "",
		date: "",
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
	const [imageLabel, setImageLabel] = (0, import_react.useState)("No file selected");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-screen min-h-screen bg-[#FFFFFF] text-[#111827]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden md:fixed md:inset-y-0 md:left-0 md:w-64 md:flex md:flex-col md:pt-6 bg-[#FFFFFF] border-r border-[#E5E7EB]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 pb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-10 w-10 rounded-md bg-[#22C55E] flex items-center justify-center text-white font-bold",
							children: "S"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-bold",
							children: "Sokoos"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex-1 px-2 overflow-y-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: NAV_ITEMS.map(({ label, href, Icon }) => {
							const active = selected === label;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelected(label),
								className: `w-full text-left flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-[#22C55E] text-white" : "text-[#111827] hover:bg-[#F3F4F6] hover:text-[#111827]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 ${active ? "opacity-100" : "opacity-80"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
							}) }, href);
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "md:hidden fixed top-0 left-0 right-0 h-14 bg-[#FFFFFF] border-b border-[#E5E7EB] flex items-center px-4 z-30",
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
					className: "absolute left-0 top-0 bottom-0 w-72 bg-[#FFFFFF] border-r border-[#E5E7EB] p-4 overflow-y-auto",
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
				className: "h-full md:pl-64 pt-14 md:pt-0",
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
												className: "text-sm font-medium text-[#22C55E]",
												children: "Good Afternoon, Frank 👋"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
												className: "mt-2 text-3xl font-semibold text-[#111827]",
												children: "Welcome back to Sokoos"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-[#6B7280]",
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
										className: `${CARD} p-5`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-[#6B7280]",
											children: stat.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex items-end justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-3xl font-semibold text-[#111827]",
												children: stat.value
											}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#16A34A]",
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
												className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
												children: "Recent Activity"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-2 text-xl font-semibold text-[#111827]",
												children: "What happened recently"
											})] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6 space-y-4",
											children: RECENT_ACTIVITY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-3xl bg-[#F9FAFB] p-4 transition hover:bg-[#ECFDF5]",
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
											className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
											children: "Quick Actions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-2 text-xl font-semibold text-[#111827]",
											children: "Jump into work"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6 grid gap-3",
											children: QUICK_ACTIONS.map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-left text-sm font-semibold text-[#111827] transition hover:border-[#22C55E] hover:bg-[#ECFDF5]",
												children: action
											}, action))
										})]
									})]
								})
							]
						}),
						selected === "Inbox" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid h-[calc(100vh-4.5rem)] gap-4 xl:grid-cols-[280px_minmax(0,1fr)_320px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: `${CARD} flex min-h-0 flex-col overflow-hidden`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "border-b border-[#E5E7EB] p-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center justify-between gap-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "text-lg font-semibold text-[#111827]",
													children: "Conversations"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm text-[#6B7280]",
													children: "Recent messages and active chats"
												})] })
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-nowrap items-center gap-2 overflow-x-auto px-4 pb-4",
											children: INBOX_TAB_ITEMS.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setActiveTab(tab),
												className: `whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition duration-200 ease-in-out ${activeTab === tab ? "bg-[#22C55E] text-white shadow-sm" : "bg-[#F3F4F6] text-[#111827] hover:bg-[#ECFDF5] hover:-translate-y-0.5"}`,
												children: tab
											}, tab))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex min-h-0 flex-1 flex-col p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-4 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-[#6B7280]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "search",
														placeholder: "Search conversations",
														value: searchQuery,
														onChange: (event) => setSearchQuery(event.target.value),
														className: "w-full bg-transparent text-sm text-[#111827] outline-none"
													})]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex-1 space-y-2 overflow-y-auto overflow-x-hidden pr-2",
												children: INBOX_CONVERSATIONS.filter((conversation) => {
													if (activeTab === "Needs Attention") return conversation.source === "needs_attention";
													if (activeTab === "AI") return conversation.source === "ai";
													if (activeTab === "Team") return conversation.source === "team";
													return true;
												}).filter((conversation) => conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) || conversation.message.toLowerCase().includes(searchQuery.toLowerCase())).map((conversation) => {
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														onClick: () => setActiveConversation(conversation.id),
														className: `w-full overflow-hidden rounded-3xl border px-3 py-3 text-left transition ${conversation.id === activeConversation ? "border-[#22C55E] bg-[#ECFDF5]" : "border-transparent bg-[#FFFFFF] hover:border-[#E5E7EB] hover:bg-[#F9FAFB]"}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#22C55E] text-sm font-semibold text-white",
																	children: conversation.avatar
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "min-w-0 max-w-[12ch]",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center gap-2",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-base font-medium text-[#111827] truncate",
																			title: conversation.name,
																			children: conversation.name && conversation.name.length > 12 ? `${conversation.name.slice(0, 12)}…` : conversation.name
																		}), conversation.source === "needs_attention" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																			className: "inline-flex items-center gap-1 rounded-full bg-[#fee2e2] px-2 py-0.5 text-[11px] font-semibold text-[#b91c1c]",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "inline-block h-2 w-2 rounded-full bg-[#b91c1c]",
																				"aria-hidden": true
																			}), "Needs Attention"]
																		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: `inline-block h-2 w-2 rounded-full ${conversation.source === "ai" ? "bg-[#16A34A]" : "bg-[#6B7280]"}`,
																			"aria-hidden": true
																		})]
																	})
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-xs text-[#6B7280]",
																children: conversation.time
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-1 flex items-center justify-between gap-2 text-[#6B7280]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "min-w-0 text-sm truncate",
																children: conversation.message
															}), conversation.badge > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-[#22C55E] px-2 py-0.5 text-[10px] font-semibold text-white",
																children: conversation.badge
															}) : null]
														})]
													}, conversation.id);
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: `${CARD} flex min-h-0 flex-col overflow-hidden`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "border-b border-[#E5E7EB] p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium text-[#6B7280]",
												children: "Live chat"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-xl font-semibold text-[#111827]",
												children: INBOX_CONVERSATIONS.find((item) => item.id === activeConversation)?.name
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-2xl bg-[#F9FAFB] px-3 py-2 text-sm text-[#111827]",
												children: "Active now"
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex min-h-0 flex-1 flex-col p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-4 overflow-y-auto pr-2",
											children: INBOX_MESSAGES[activeConversation].map((message, index) => {
												const isAgent = message.from === "agent";
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `flex ${isAgent ? "justify-start" : "justify-end"}`,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: `rounded-3xl px-4 py-3 text-sm ${isAgent ? "bg-[#F3F4F6] text-[#111827]" : "bg-[#22C55E] text-white"}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: message.text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-1 text-[11px] text-[#6B7280] text-right",
															children: message.time
														})]
													})
												}, `${message.time}-${index}`);
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-3 shadow-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														className: "rounded-full p-2 text-[#6B7280] hover:bg-[#F3F4F6]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smile, { className: "h-5 w-5" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														className: "rounded-full p-2 text-[#6B7280] hover:bg-[#F3F4F6]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "h-5 w-5" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														className: "rounded-full p-2 text-[#6B7280] hover:bg-[#F3F4F6]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-5 w-5" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														placeholder: "Type a message",
														className: "min-w-0 flex-1 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														className: "inline-flex items-center justify-center rounded-full bg-[#22C55E] px-4 py-3 text-white shadow-sm transition hover:bg-[#16A34A]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-5 w-5" })
													})
												]
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
									className: `${CARD} flex min-h-0 flex-col overflow-hidden p-6`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
												children: "Customer"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-2 text-xl font-semibold text-[#111827]",
												children: CUSTOMER_PROFILE.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-[#6B7280]",
												children: CUSTOMER_PROFILE.company
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-4 rounded-3xl bg-[#F9FAFB] p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between text-sm text-[#111827]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium",
															children: "Phone"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CUSTOMER_PROFILE.phone })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between text-sm text-[#111827]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium",
															children: "Lead status"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-[#ECFDF5] px-2 py-1 text-xs font-semibold text-[#16A34A]",
															children: CUSTOMER_PROFILE.leadStatus
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between text-sm text-[#111827]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium",
															children: "Location"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CUSTOMER_PROFILE.location })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between text-sm text-[#111827]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium",
															children: "Last order"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CUSTOMER_PROFILE.lastOrder })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-sm text-[#111827]",
															children: "Tags"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex flex-wrap gap-2",
															children: CUSTOMER_PROFILE.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "inline-flex items-center rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#16A34A]",
																children: tag
															}, tag))
														})]
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-3xl border border-[#E5E7EB] bg-white p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold text-[#111827]",
													children: "Interested products"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-3 space-y-2",
													children: CUSTOMER_PROFILE.interestedProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-2xl bg-[#F9FAFB] px-3 py-2 text-sm text-[#111827]",
														children: product
													}, product))
												})]
											})]
										})]
									})
								})
							]
						}),
						selected === "Status Scheduler" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `space-y-6 ${CARD}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
										children: "Status Scheduler"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 text-2xl font-semibold text-[#111827]",
										children: "Schedule WhatsApp status updates"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl",
										children: "Plan and publish status posts ahead of time. Use AI to generate copy, then schedule images and captions for the week."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
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
											className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold text-[#111827]",
													children: post.caption
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-[#6B7280]",
													children: post.image
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-right",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold text-[#111827]",
														children: post.date
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm text-[#6B7280]",
														children: post.time
													})]
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
							className: "p-6 bg-white rounded-md border border-[#E5E7EB]",
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
								className: "overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "min-w-full divide-y divide-[#E5E7EB] text-left",
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
										className: "divide-y divide-[#E5E7EB] bg-white",
										children: [filteredCustomers.map((customer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
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
						selected === "AI Assistant" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `space-y-6 ${CARD}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
										children: "AI Assistant"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 text-2xl font-semibold text-[#111827]",
										children: "Business AI settings"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl",
										children: "Keep your AI assistant aligned with business hours, handoff rules, languages and tone without the technical jargon."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setAiEnabled((value) => !value),
									className: `inline-flex items-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${aiEnabled ? "bg-[#22C55E] text-white" : "bg-[#E5E7EB] text-[#6B7280]"}`,
									children: aiEnabled ? "Enabled" : "Disabled"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 lg:grid-cols-[1.2fr_0.8fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
									className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-3xl bg-white p-5 shadow-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold text-[#111827]",
													children: "Business Hours"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-[#6B7280]",
													children: "Set the hours when support should be prioritized."
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-semibold text-[#0C4A6E]",
													children: businessHours
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-3xl bg-white p-5 shadow-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold text-[#111827]",
													children: "Team Takeover"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-[#6B7280]",
													children: "Allow a team member to step in when the customer needs real support."
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setHumanTakeover((value) => !value),
													className: `rounded-full px-4 py-2 text-sm font-semibold transition ${humanTakeover ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#E5E7EB] text-[#6B7280]"}`,
													children: humanTakeover ? "On" : "Off"
												})]
											})
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "space-y-6 rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7280]",
											children: "Languages"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 flex flex-wrap gap-3",
											children: LANGUAGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setLanguage(option),
												className: `rounded-2xl border px-4 py-3 text-sm font-semibold transition ${language === option ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#111827] hover:bg-[#F3F4F6]"}`,
												children: option
											}, option))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7280]",
											children: "Personality"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 flex flex-wrap gap-3",
											children: PERSONALITIES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setPersonality(option),
												className: `rounded-2xl border px-4 py-3 text-sm font-semibold transition ${personality === option ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#111827] hover:bg-[#F3F4F6]"}`,
												children: option
											}, option))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 text-sm text-[#6B7280]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-[#111827]",
												children: "Note"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2",
												children: "These settings keep your assistant sounding professional and helpful while making it easy to hand off conversations to a person."
											})]
										})
									]
								})]
							})]
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
						selected === "Settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-6 bg-white rounded-md border border-[#E5E7EB]",
							children: "Sokoos Settings"
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
