import { n as __toESM } from "../_runtime.mjs";
import { t as sokoos_logo_default } from "./sokoos_logo-B5_i8UVb.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { $ as ArrowRight, A as Inbox, C as MessageCircle, F as Facebook, G as Check, J as Brain, K as ChartColumn, N as Heart, O as Linkedin, S as MessageSquareOff, V as Clock, Y as Boxes, Z as Bot, c as Sparkles, g as RefreshCw, h as Repeat, m as Rocket, n as Users, q as Calendar, s as Star, v as Plug, x as Package, z as Database } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-hgChB1Oi.js
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: sokoos_logo_default,
			alt: "Sokoos",
			className: "h-8 w-8 rounded-lg object-cover"
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/signin",
						className: "hidden rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary sm:inline-flex",
						children: "Sign in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/sign-up",
						className: "inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5",
						children: ["Get Started", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})]
				})
			]
		})
	});
}
function FloatingSokoosAI() {
	const STORAGE_KEY = "sokoos-ai-greeting-shown";
	const [isGreetingVisible, setIsGreetingVisible] = (0, import_react.useState)(false);
	const [isChatOpen, setIsChatOpen] = (0, import_react.useState)(false);
	const [isChatClosing, setIsChatClosing] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [isTyping, setIsTyping] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([{
		id: 1,
		role: "assistant",
		content: "👋 Welcome! I’m your AI Employee. Ask me about pricing, features, WhatsApp, or growth pages."
	}]);
	const messagesEndRef = (0, import_react.useRef)(null);
	const suggestedQuestions = [
		"How much does Sokoos cost?",
		"Can I connect WhatsApp?",
		"Can I use Sokoos for my ISP?",
		"How does the AI learn my business?"
	];
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "true") return;
		const timer = window.setTimeout(() => {
			setIsGreetingVisible(true);
			sessionStorage.setItem(STORAGE_KEY, "true");
		}, 2500);
		return () => window.clearTimeout(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isChatOpen) return;
		const timer = window.setTimeout(() => {
			messagesEndRef.current?.scrollIntoView({
				behavior: "smooth",
				block: "end"
			});
		}, 80);
		return () => window.clearTimeout(timer);
	}, [
		messages,
		isTyping,
		isChatOpen
	]);
	const openChat = () => {
		setIsGreetingVisible(false);
		setIsChatClosing(false);
		setIsChatOpen(true);
		if (typeof window !== "undefined") sessionStorage.setItem(STORAGE_KEY, "true");
	};
	const closeGreeting = () => {
		setIsGreetingVisible(false);
		if (typeof window !== "undefined") sessionStorage.setItem(STORAGE_KEY, "true");
	};
	const closeChat = () => {
		setIsChatClosing(true);
		window.setTimeout(() => {
			setIsChatOpen(false);
			setIsChatClosing(false);
		}, 220);
	};
	const getMockReply = (value) => {
		const normalized = value.toLowerCase();
		if (/(price|pricing|cost)/.test(normalized)) return "Our plans are designed for businesses of every size.";
		if (/(isp|internet service provider)/.test(normalized)) return "Sokoos is perfect for Internet Service Providers.";
		if (/school/.test(normalized)) return "Sokoos helps schools answer parent enquiries automatically.";
		if (/restaurant/.test(normalized)) return "Sokoos helps restaurants automate customer conversations.";
		if (/whatsapp/.test(normalized)) return "Sokoos connects directly with WhatsApp Business.";
		return "That’s a great question. Once connected to the backend I’ll answer using the real AI.";
	};
	const sendMessage = (content) => {
		const trimmed = content.trim();
		if (!trimmed) return;
		setMessages((prev) => [...prev, {
			id: Date.now(),
			role: "user",
			content: trimmed
		}]);
		setMessage("");
		setIsTyping(true);
		window.setTimeout(() => {
			const reply = getMockReply(trimmed);
			setMessages((prev) => [...prev, {
				id: Date.now() + 1,
				role: "assistant",
				content: reply
			}]);
			setIsTyping(false);
		}, 700);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		sendMessage(message);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes floatingPanelSlide {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes assistantPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.28);
          }
          50% {
            transform: scale(1.03);
            box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
          }
        }
      ` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed bottom-8 right-8 z-[100] flex flex-col items-end",
			children: [!isChatOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mb-3 w-[240px] rounded-[24px] border border-[#E5E7EB] bg-white p-4 text-left shadow-[0_20px_50px_rgba(15,23,42,0.16)] transition-all duration-300 ease-out ${isGreetingVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0"}`,
				style: { transformOrigin: "bottom right" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: closeGreeting,
						"aria-label": "Close greeting",
						className: "absolute right-3 top-3 rounded-full p-1 text-[#64748B] transition-colors hover:bg-[#F3F4F6] hover:text-[#111827]",
						children: "×"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pr-6 text-2xl leading-none",
						children: "👋 Hi!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-semibold text-[#111827]",
						children: "I'm Sokoos AI."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-5 text-[#64748B]",
						children: "Need help learning about Sokoos?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: openChat,
						className: "mt-3 inline-flex items-center rounded-full bg-[#16A34A] px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5",
						children: "Ask me"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: openChat,
				className: "relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#EEF2F6] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.16)] transition-transform duration-200 hover:scale-105",
				style: { animation: "assistantPulse 2.4s ease-in-out infinite" },
				"aria-label": "Open Sokoos AI",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border border-[#22C55E]/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-0.5 -right-0.5 h-4.5 w-4.5 rounded-full border-2 border-white bg-[#22C55E] shadow-sm" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-3xl",
						children: "🤖"
					})
				]
			})]
		}),
		isChatOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[110] flex items-end justify-end bg-black/10 p-4 backdrop-blur-[2px]",
			onClick: closeChat,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `w-full max-w-[420px] rounded-[28px] border border-[#EEF2F6] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] transition-all duration-300 ease-out ${isChatClosing ? "translate-y-5 scale-95 opacity-0" : "translate-y-0 scale-100 opacity-100"}`,
				style: {
					height: "560px",
					animation: "floatingPanelSlide 0.25s ease-out"
				},
				onClick: (event) => event.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-[#F3F4F6] px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-11 w-11 items-center justify-center rounded-full border border-[#D1FAE5] bg-[#F0FDF4] text-xl",
							children: "🤖"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-[#111827]",
								children: "Sokoos AI"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#22C55E]" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#64748B]",
							children: "AI Employee"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: closeChat,
						"aria-label": "Close chat",
						className: "rounded-full p-2 text-[#64748B] transition-colors hover:bg-[#F3F4F6] hover:text-[#111827]",
						children: "×"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-[calc(560px-88px)] flex-col px-5 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-y-auto rounded-[24px] bg-[#F8FAFC] p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								messages.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex ${entry.role === "user" ? "justify-end" : "justify-start"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 shadow-sm ${entry.role === "user" ? "bg-[#16A34A] text-white" : "bg-white text-[#334155]"}`,
										style: { animation: "floatingPanelSlide 0.25s ease-out" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "whitespace-pre-line",
											children: entry.content
										})
									})
								}, entry.id)),
								messages.length === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-start",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "max-w-full rounded-2xl bg-white p-3 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-[#111827]",
											children: "Try one of these:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 flex flex-wrap gap-2",
											children: suggestedQuestions.map((suggestion) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => sendMessage(suggestion),
												className: "rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-1.5 text-sm text-[#334155] transition-all hover:border-[#16A34A] hover:bg-[#ECFDF5] hover:text-[#166534]",
												children: suggestion
											}, suggestion))
										})]
									})
								}),
								isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-start",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-2xl bg-white px-3.5 py-2.5 shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "h-2 w-2 animate-bounce rounded-full bg-[#94A3B8]",
													style: { animationDelay: "0ms" }
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "h-2 w-2 animate-bounce rounded-full bg-[#94A3B8]",
													style: { animationDelay: "120ms" }
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "h-2 w-2 animate-bounce rounded-full bg-[#94A3B8]",
													style: { animationDelay: "240ms" }
												})
											]
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: messagesEndRef })
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "mt-4 flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-2 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: message,
							onChange: (event) => setMessage(event.target.value),
							placeholder: "Ask anything...",
							className: "h-11 flex-1 border-0 bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#94A3B8]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "flex h-11 w-11 items-center justify-center rounded-full bg-[#16A34A] text-white transition-transform hover:scale-105",
							"aria-label": "Send message",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						})]
					})]
				})]
			})
		})
	] });
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center rounded-full bg-[#ECFDF5] px-4 py-2 text-sm font-semibold text-[#166534] shadow-sm shadow-[#ECFDF5]/60",
							children: "✨ Acquire • Convert • Retain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl",
							children: [
								"Never Miss a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#16A34A]",
									children: "Lead"
								}),
								" or Lose a",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#16A34A]",
									children: "Customer"
								}),
								" Again"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: ["Your AI employee that acquires customers, converts leads into customers, and keeps them coming back, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative isolate font-semibold text-[#166534] after:absolute after:bottom-[-0.16em] after:left-0 after:-z-10 after:h-[0.42em] after:w-full after:-rotate-[1.5deg] after:rounded-[55%_45%_50%_45%] after:bg-[#86EFAC]/70",
								children: "across every channel."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-col items-center gap-3 sm:flex-row",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sign-up",
								className: "group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5",
								children: ["Get Started", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 text-[#166534]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4 text-[#16A34A]" }), "Acquire Customers"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "→"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 text-[#166534]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-[#16A34A]" }), "Convert Leads"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "→"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 text-[#166534]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 text-[#16A34A]" }), "Retain Customers"]
								})
							]
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
								alt: "Sokoos AI Employee dashboard showing conversations, customer responses, scheduled status posts and performance",
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
							children: "Helping Businesses Grow Across Industries"
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
				eyebrow: "Why businesses struggle to grow",
				title: "Why Growing Businesses Lose Customers",
				subtitle: "Growing a business shouldn't mean losing customers. Slow responses, missed follow-ups, scattered conversations, and limited customer engagement quietly reduce sales every day."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: MessageSquareOff,
						title: "Missed Sales",
						desc: "Potential customers move on when they don't receive a quick response."
					},
					{
						icon: Clock,
						title: "Slow Response Times",
						desc: "Delayed replies reduce trust and lower your chances of closing sales."
					},
					{
						icon: Repeat,
						title: "Repetitive Customer Questions",
						desc: "Your team spends valuable time answering the same questions instead of growing the business."
					},
					{
						icon: RefreshCw,
						title: "Missed Follow-ups",
						desc: "Without consistent follow-ups, qualified leads are easily forgotten."
					},
					{
						icon: Database,
						title: "No Customer Visibility",
						desc: "Customer conversations and information are scattered across different devices and team members."
					},
					{
						icon: Users,
						title: "Limited Capacity",
						desc: "Your business can only grow as fast as your team can respond to customers."
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
						children: "How Sokoos helps you grow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl",
						children: ["How ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Sokoos Helps You Acquire, Convert & Retain Customers"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Sokoos brings together AI, WhatsApp, automation, and customer engagement tools to help your business attract new customers, convert more leads into sales, and build long-term customer relationships."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-3 sm:grid-cols-2",
						children: [
							"Acquire new customers through your digital channels",
							"Respond instantly on WhatsApp with AI",
							"Qualify leads and close more sales",
							"Book appointments automatically",
							"Follow up with customers without manual work",
							"Retain customers with ongoing engagement and insights"
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
								alt: "Sokoos unified WhatsApp inbox with an AI Employee and product catalogue",
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
				title: "Everything You Need to Acquire, Convert & Retain Customers",
				subtitle: "Sokoos gives growing businesses the tools to attract customers, automate conversations, close more sales, and build lasting customer relationships."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: Bot,
						title: "AI Employee",
						desc: "Responds instantly, qualifies leads, and helps customers make buying decisions.",
						emoji: "🤖"
					},
					{
						icon: Inbox,
						title: "Unified Inbox",
						desc: "Manage every customer conversation from one shared workspace.",
						emoji: "💬"
					},
					{
						icon: Users,
						title: "Human Takeover",
						desc: "Jump into any conversation whenever your team wants to assist.",
						emoji: "👥"
					},
					{
						icon: Calendar,
						title: "Marketing Automation",
						desc: "Create and schedule WhatsApp marketing campaigns that keep customers engaged.",
						emoji: "📅"
					},
					{
						icon: Package,
						title: "Product Catalog",
						desc: "Showcase products and services that your AI can recommend instantly.",
						emoji: "📦"
					},
					{
						icon: ChartColumn,
						title: "Business Insights",
						desc: "Track customer engagement, conversions, and business growth from one dashboard.",
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
				title: "Start Growing in Minutes",
				subtitle: "Set up Sokoos in minutes and let AI start helping your business acquire, convert, and retain customers."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16 grid gap-8 md:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-8 right-8 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" }), [
					{
						icon: Plug,
						title: "Connect Your Business",
						desc: "Connect your WhatsApp Business account and set up your workspace."
					},
					{
						icon: Boxes,
						title: "Train Your AI Employee",
						desc: "Add products, services, FAQs, business hours and company information."
					},
					{
						icon: Brain,
						title: "Launch Customer Automation",
						desc: "Your AI starts responding, qualifying leads, booking appointments and supporting customers."
					},
					{
						icon: Rocket,
						title: "Grow With Insights",
						desc: "Track conversations, leads, sales performance and continuously improve your business."
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
				eyebrow: "The Sokoos Growth Platform",
				title: "One Platform. Every Stage of Customer Growth.",
				subtitle: "Sokoos helps businesses acquire customers, convert leads into sales, and retain loyal customers through AI-powered automation."
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
							name: "AI Employee",
							status: "Available Today",
							desc: "Respond instantly and qualify leads 24/7.",
							icon: Bot
						},
						{
							name: "Landing Pages",
							status: "Coming Soon",
							desc: "Generate beautiful business websites in minutes.",
							icon: Sparkles
						},
						{
							name: "Marketing",
							status: "Coming Soon",
							desc: "Launch campaigns across WhatsApp and social media.",
							icon: MessageCircle
						},
						{
							name: "CRM",
							status: "Coming Soon",
							desc: "Manage customer relationships in one place.",
							icon: Users
						},
						{
							name: "Payments",
							status: "Coming Soon",
							desc: "Collect payments seamlessly from customers.",
							icon: Package
						},
						{
							name: "Analytics",
							status: "Coming Soon",
							desc: "Understand customer behaviour and business performance.",
							icon: ChartColumn
						}
					].map((m, i) => {
						const available = m.status === "Available Today";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `group relative h-full rounded-2xl border p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 ${available ? "border-primary/30 bg-primary-soft" : "border-border bg-card"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `grid h-10 w-10 place-items-center rounded-xl ${available ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${available ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`,
											children: m.status
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-lg font-semibold",
										children: m.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
										children: m.desc
									})
								]
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
						quote: "We went from losing leads to closing them. Instant responses mean more customers stay with us, and our sales doubled without hiring a team."
					},
					{
						name: "Grace",
						role: "Boutique Owner",
						quote: "I save 10 hours a week on customer responses. More time to grow the business, and customers love getting answers instantly. My revenue is up 40%."
					},
					{
						name: "David",
						role: "Hardware Store Manager",
						quote: "Customers get instant answers 24/7. Our close rate jumped by 60%, and I'm not spending my evenings answering the same questions."
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
				title: "Simple Pricing for Growing Businesses",
				subtitle: "Choose a plan that grows with your business."
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
							"AI Employee (500 replies/mo)",
							"Unified inbox",
							"Product catalog",
							"Email support"
						],
						cta: "Get Started",
						highlight: false
					},
					{
						name: "Business",
						price: "KSh 5,000",
						period: "/month",
						desc: "For growing teams who sell every day.",
						features: [
							"1 WhatsApp number",
							"AI Employee (unlimited replies)",
							"Human takeover for 5 team members",
							"Status scheduler",
							"Business insights dashboard",
							"Priority support"
						],
						cta: "Get Started",
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
							t.cta === "Get Started" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sign-up",
								className: `mt-8 inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${t.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-foreground text-background hover:bg-foreground/90"}`,
								children: [t.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
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
								children: "Start Growing Your Business with Sokoos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-background/70 sm:text-lg",
								children: "From attracting new customers to closing sales and building customer loyalty, Sokoos helps your business grow with AI-powered automation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/sign-up",
									className: "inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5",
									children: ["Get Started", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
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
						children: "Helping businesses acquire, convert, and retain customers."
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
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Made for modern businesses." })]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingSokoosAI, {}),
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
