import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as Calendar, D as Clock, F as ArrowRight, M as Boxes, O as Check, P as Bot, T as Database, _ as MessageCircle, b as Linkedin, d as RefreshCw, g as MessageSquareOff, h as Package, i as Sparkles, j as Brain, k as ChartColumn, l as Rocket, n as Users, p as Plug, r as Star, u as Repeat, w as Facebook, x as Inbox } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BwGrOj07.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_dashboard_default = "/assets/hero-dashboard-D-CXLQyc.png";
var solution_dashboard_default = "/assets/solution-dashboard-BITB5GZi.png";
function Reveal({ children, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					el.classList.add("fade-in-up");
					io.disconnect();
				}
			});
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: {
			animationDelay: `${delay}ms`,
			opacity: 0
		},
		children
	});
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-soft)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
				className: "h-4 w-4",
				strokeWidth: 2.5
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-lg font-bold tracking-tight",
			children: "Sokoos"
		})]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-16 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [
						["Features", "#features"],
						["How it works", "#how"],
						["Ecosystem", "#ecosystem"],
						["Pricing", "#pricing"]
					].map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						children: label
					}, href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/dashboard",
						className: "hidden rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary sm:inline-flex",
						children: "Sign in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#cta",
						className: "inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5",
						children: ["Start free", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden",
		style: { backgroundImage: "var(--gradient-hero)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page relative pt-16 pb-10 sm:pt-24 sm:pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl",
							children: [
								"Your AI Employee",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"on ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "WhatsApp"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Sokoos helps businesses answer customers, close sales, schedule WhatsApp Status posts, and stay available 24/7—even when you're offline."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-col items-center gap-3 sm:flex-row",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#cta",
								className: "group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5",
								children: ["Start Free Trial", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
							})
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mt-14 max-w-6xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-8 top-8 -z-10 h-full rounded-3xl bg-primary/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-elevated)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_dashboard_default,
								alt: "Sokoos WhatsApp assistant dashboard showing conversations, AI responses, scheduled status posts and analytics",
								width: 1600,
								height: 1120,
								className: "h-auto w-full"
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 250,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-16 max-w-4xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs font-medium uppercase tracking-wider text-muted-foreground",
							children: "Trusted across industries"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground/80",
							children: [
								"Internet Providers",
								"Retail Shops",
								"Hardware Stores",
								"Schools",
								"Clinics",
								"Real Estate",
								"Restaurants"
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3",
								children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-border" }), s]
							}, s))
						})]
					})
				})
			]
		})
	});
}
function SectionHeader({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl text-center",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-semibold uppercase tracking-wider text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
				children: subtitle
			})
		]
	});
}
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "The problem",
				title: "Your Customers Should Never Wait",
				subtitle: "Every unanswered message is a lost sale. Sokoos fixes the gaps that quietly cost you money."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: MessageSquareOff,
						title: "Missed sales when you're offline",
						desc: "Customers move on if no one replies within minutes."
					},
					{
						icon: Clock,
						title: "Delayed responses",
						desc: "Slow replies mean lost trust and lost revenue."
					},
					{
						icon: Repeat,
						title: "Repetitive questions",
						desc: "Your team answers the same things a hundred times a day."
					},
					{
						icon: RefreshCw,
						title: "Difficult follow-ups",
						desc: "Leads slip through the cracks without a system."
					},
					{
						icon: Database,
						title: "No customer management",
						desc: "Conversations scattered across phones and staff."
					},
					{
						icon: Users,
						title: "Understaffed support",
						desc: "Growth stalls because you can't hire fast enough."
					}
				].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-base font-semibold",
								children: it.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: it.desc
							})
						]
					})
				}, it.title))
			})]
		})
	});
}
function Solution() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-primary",
						children: "The solution"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl",
						children: ["Meet ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Sokoos Chat"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "A smart WhatsApp assistant trained on your business. It talks to customers like your best salesperson would — and your team stays in full control."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-3 sm:grid-cols-2",
						children: [
							"Answers customers instantly",
							"Closes sales automatically",
							"Humans can take over anytime",
							"Works directly with WhatsApp",
							"Supports multiple team members",
							"Operates 24/7 — even offline"
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "h-3 w-3",
									strokeWidth: 3
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: b
							})]
						}, b))
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-elevated)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: solution_dashboard_default,
								alt: "Sokoos unified WhatsApp inbox with AI assistant and product catalog",
								loading: "lazy",
								width: 1408,
								height: 1008,
								className: "h-auto w-full"
							})
						})]
					})
				})]
			})
		})
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Features",
				title: "Everything you need to run WhatsApp like a pro",
				subtitle: "Purpose-built for African SMEs who want to sell more without hiring more."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: Bot,
						title: "AI WhatsApp Assistant",
						desc: "Automatically responds to customers and helps close deals.",
						emoji: "🤖"
					},
					{
						icon: Inbox,
						title: "Unified Inbox",
						desc: "Reply from your phone or directly from the Sokoos dashboard.",
						emoji: "💬"
					},
					{
						icon: Users,
						title: "Human Takeover",
						desc: "Your team can instantly take over any conversation.",
						emoji: "👥"
					},
					{
						icon: Calendar,
						title: "Status Scheduler",
						desc: "Create and schedule WhatsApp Status marketing campaigns.",
						emoji: "📅"
					},
					{
						icon: Package,
						title: "Product Catalog",
						desc: "Manage products and services that power your AI assistant.",
						emoji: "📦"
					},
					{
						icon: ChartColumn,
						title: "Business Insights",
						desc: "Track conversations, leads, and sales performance.",
						emoji: "📊"
					}
				].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-125" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-lg font-semibold",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: f.desc
								})
							]
						})]
					})
				}, f.title))
			})]
		})
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "bg-surface py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "How it works",
				title: "Live in under 10 minutes",
				subtitle: "No code. No complex setup. Just plug in and start selling."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16 grid gap-8 md:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-8 right-8 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" }), [
					{
						icon: Plug,
						title: "Connect Your WhatsApp",
						desc: "Link your business number in minutes."
					},
					{
						icon: Boxes,
						title: "Add Products & Info",
						desc: "Upload your catalog, hours, and policies."
					},
					{
						icon: Brain,
						title: "Sokoos Learns Your Business",
						desc: "The AI is trained on your data and tone."
					},
					{
						icon: Rocket,
						title: "AI Serves Customers 24/7",
						desc: "Sit back — Sokoos handles conversations."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 grid h-12 w-12 place-items-center rounded-full border border-border bg-white text-primary shadow-[var(--shadow-soft)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold uppercase tracking-wider text-primary",
									children: ["Step ", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-base font-semibold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
									children: s.desc
								})
							]
						})]
					})
				}, s.title))]
			})]
		})
	});
}
function Ecosystem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "ecosystem",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "The ecosystem",
				title: "More Than Just a Chatbot",
				subtitle: "Sokoos is becoming the operating system for African businesses — one module at a time."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-16 max-w-5xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-fit items-center gap-3 rounded-2xl border border-border bg-white px-6 py-4 shadow-[var(--shadow-elevated)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "h-5 w-5",
							strokeWidth: 2.5
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-lg font-bold",
						children: "Sokoos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "One platform. Every workflow."
					})] })]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						{
							name: "Chat",
							status: "Available Now",
							icon: MessageCircle
						},
						{
							name: "Marketing",
							status: "Coming Soon",
							icon: Sparkles
						},
						{
							name: "POS",
							status: "Coming Soon",
							icon: Package
						},
						{
							name: "Inventory",
							status: "Coming Soon",
							icon: Boxes
						},
						{
							name: "Payments",
							status: "Coming Soon",
							icon: Repeat
						},
						{
							name: "Analytics",
							status: "Coming Soon",
							icon: ChartColumn
						}
					].map((m, i) => {
						const available = m.status === "Available Now";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `group relative h-full rounded-2xl border p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 ${available ? "border-primary/30 bg-primary-soft" : "border-border bg-card"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `grid h-10 w-10 place-items-center rounded-xl ${available ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${available ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`,
										children: m.status
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-4 text-lg font-semibold",
									children: ["Sokoos ", m.name]
								})]
							})
						}, m.name);
					})
				})]
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Loved by SMEs",
				title: "Real businesses. Real results."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 md:grid-cols-3",
				children: [
					{
						name: "James",
						role: "Internet Provider",
						quote: "Sokoos responds to customers even when I'm asleep. We've closed more sales without hiring extra staff."
					},
					{
						name: "Grace",
						role: "Boutique Owner",
						quote: "The status scheduler alone saves me hours every week. My WhatsApp finally feels like a real storefront."
					},
					{
						name: "David",
						role: "Hardware Store Manager",
						quote: "Customers get instant quotes and product info. Our conversion rate has nearly doubled."
					}
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5 text-primary",
								children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-4 flex-1 text-sm leading-relaxed text-foreground",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-6 flex items-center gap-3 border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-sm font-bold text-primary",
									children: t.name.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: t.role
								})] })]
							})
						]
					})
				}, t.name))
			})]
		})
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Pricing",
				title: "Simple pricing. Serious ROI.",
				subtitle: "Start free for 14 days. No card required. Cancel anytime."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 md:grid-cols-3",
				children: [
					{
						name: "Starter",
						price: "KSh 2,500",
						period: "/month",
						desc: "For solo owners just getting started.",
						features: [
							"1 WhatsApp number",
							"AI Assistant (500 replies/mo)",
							"Unified inbox",
							"Product catalog",
							"Email support"
						],
						cta: "Start Free Trial",
						highlight: false
					},
					{
						name: "Business",
						price: "KSh 5,000",
						period: "/month",
						desc: "For growing teams who sell every day.",
						features: [
							"1 WhatsApp number",
							"AI Assistant (unlimited replies)",
							"Human takeover for 5 team members",
							"Status scheduler",
							"Business insights dashboard",
							"Priority support"
						],
						cta: "Start Free Trial",
						highlight: true
					},
					{
						name: "Enterprise",
						price: "Custom",
						period: "",
						desc: "For multi-location businesses.",
						features: [
							"Multiple WhatsApp numbers",
							"Unlimited team members",
							"Custom AI training",
							"API access & integrations",
							"Dedicated account manager"
						],
						cta: "Contact Sales",
						highlight: false
					}
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative flex h-full flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 ${t.highlight ? "border-primary bg-foreground text-background shadow-[var(--shadow-glow)]" : "border-border bg-card shadow-[var(--shadow-soft)]"}`,
						children: [
							t.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground",
								children: "Recommended"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-1 text-sm ${t.highlight ? "text-background/70" : "text-muted-foreground"}`,
								children: t.desc
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-baseline gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-extrabold tracking-tight",
									children: t.price
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-sm ${t.highlight ? "text-background/70" : "text-muted-foreground"}`,
									children: t.period
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex-1 space-y-3",
								children: t.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: `mt-0.5 h-4 w-4 shrink-0 ${t.highlight ? "text-primary" : "text-primary"}`,
										strokeWidth: 3
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#cta",
								className: `mt-8 inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${t.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-foreground text-background hover:bg-foreground/90"}`,
								children: [t.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})
				}, t.name))
			})]
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cta",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-foreground p-10 text-background shadow-[var(--shadow-elevated)] sm:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-extrabold tracking-tight sm:text-5xl",
								children: "Never Miss Another Customer Again"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-background/70 sm:text-lg",
								children: "Let Sokoos handle your WhatsApp conversations while you focus on growing your business."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									className: "inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5",
									children: ["Start Free Trial", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-white/10",
									children: "Book Demo"
								})]
							})
						]
					})
				]
			}) })
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-surface py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-muted-foreground",
						children: "The Operating System for African Businesses."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex items-center gap-2",
						children: [
							{
								icon: MessageCircle,
								label: "WhatsApp"
							},
							{
								icon: Facebook,
								label: "Facebook"
							},
							{
								icon: Linkedin,
								label: "LinkedIn"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": s.label,
							className: "grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
						}, s.label))
					})
				] }), [
					{
						title: "Product",
						links: [
							["Features", "#features"],
							["Pricing", "#pricing"],
							["Ecosystem", "#ecosystem"]
						]
					},
					{
						title: "Company",
						links: [["Contact", "#"], ["About", "#"]]
					},
					{
						title: "Legal",
						links: [["Privacy Policy", "#"], ["Terms", "#"]]
					}
				].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold",
					children: col.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: col.links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: label
					}) }, label))
				})] }, col.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Sokoos. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Made for African SMEs." })]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Solution, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ecosystem, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
