import { n as __toESM } from "../_runtime.mjs";
import { t as sokoos_logo_default } from "./sokoos_logo-B5_i8UVb.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { B as ChevronDown, C as Menu, D as Inbox, H as ChartColumn, I as Cpu, J as BookOpen, K as Box, L as Clock, N as Eye, O as Image, P as EyeOff, R as CircleAlert, S as MessageCircle, T as MapPin, U as Calendar, V as Check, X as Activity, Y as ArrowRight, _ as Plug, a as Tag, b as Package, c as Smile, d as Send, f as Search, g as Plus, i as Target, j as Globe, k as House, l as Shield, q as Bot, r as User, s as Sparkles, t as X, u as Settings, v as Phone, w as Megaphone, y as Paperclip, z as ChevronRight } from "../_libs/lucide-react.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-bVO2bxzo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CCM36o59.css";
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
function ProtectedRoute() {
	const router = useRouter();
	const isAuthenticated = typeof window !== "undefined" && localStorage.getItem("sokoos-auth") === "true";
	(0, import_react.useEffect)(() => {
		if (!isAuthenticated) router.navigate({
			to: "/signin",
			replace: true
		});
	}, [isAuthenticated, router]);
	if (!isAuthenticated) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
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
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sokoos — The Operating System for Growing Businesses" },
			{
				name: "description",
				content: "Sokoos is an AI Employee that represents your business, serves customers, closes sales, and schedules Status posts 24/7."
			},
			{
				property: "og:title",
				content: "Sokoos — Your AI Employee on WhatsApp"
			},
			{
				property: "og:description",
				content: "An AI Employee for growing businesses. Never miss another customer again."
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
	const { queryClient } = Route$10.useRouteContext();
	const pathname = useRouter().state.location.pathname;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: pathname === "/dashboard" || pathname.startsWith("/dashboard/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
function AuthCard({ children, footer, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: cn("w-full max-w-[480px] rounded-[28px] border border-[#E5E7EB] bg-white p-7 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "p-0",
			children
		}), footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 border-t border-[#E5E7EB] pt-5 text-sm text-[#64748B]",
			children: footer
		}) : null]
	});
}
function AuthHeader({ eyebrow, title, description, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-4", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex w-fit items-center gap-2 rounded-full border border-[#DCFCE7] bg-[#F0FDF4] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#166534]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#16A34A]" }), eyebrow]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight text-[#111827]",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-6 text-[#64748B]",
					children: description
				})]
			}),
			children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pt-2",
				children
			}) : null
		]
	});
}
function AuthLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(22,163,74,0.10),_transparent_32%),linear-gradient(135deg,_#f8fafc_0%,_#ffffff_100%)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex w-fit items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/80 px-3 py-2 text-sm font-medium text-[#111827] shadow-sm backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: sokoos_logo_default,
					alt: "Sokoos",
					className: "h-8 w-8 rounded-lg object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-[#111827]",
					children: "Sokoos"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-1 items-center justify-center py-10 sm:py-12",
				children
			})]
		})
	});
}
function Checkbox({ label, id, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: id,
		className: "flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-4 text-sm text-[#64748B]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-[#CBD5E1] bg-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				type: "checkbox",
				className: cn("peer sr-only", className),
				...props
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "hidden h-3 w-3 text-[#16A34A] peer-checked:block",
				strokeWidth: 3
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "leading-5",
			children: label
		})]
	});
}
function PasswordInput({ label, id, className, ...props }) {
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "text-sm font-medium text-[#111827]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				type: showPassword ? "text" : "password",
				className: cn("h-11 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 pr-12 text-sm text-[#111827] shadow-none outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/10", className),
				...props
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setShowPassword((prev) => !prev),
				className: "absolute inset-y-0 right-3 flex items-center text-[#64748B] transition-colors hover:text-[#111827]",
				"aria-label": showPassword ? "Hide password" : "Show password",
				children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
			})]
		})]
	});
}
function PrimaryButton({ children, className, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type,
		className: cn("inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16A34A] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#15803D] disabled:cursor-not-allowed disabled:opacity-60", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
	});
}
function TextInput({ label, id, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "text-sm font-medium text-[#111827]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			className: cn("h-11 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 text-sm text-[#111827] shadow-none outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/10", className),
			...props
		})]
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
var Route$9 = createFileRoute("/sign-in")({ component: SignIn });
function SignIn() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && localStorage.getItem("sokoos-auth") === "true") router.navigate({
			to: "/dashboard",
			replace: true
		});
	}, [router]);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [touched, setTouched] = (0, import_react.useState)({
		email: false,
		password: false
	});
	const [authError, setAuthError] = (0, import_react.useState)("");
	const emailError = !email.trim() ? "Email is required." : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Enter a valid email address." : "";
	const passwordError = !password.trim() ? "Password is required." : "";
	const isValid = !emailError && !passwordError;
	const handleSubmit = (event) => {
		event.preventDefault();
		setTouched({
			email: true,
			password: true
		});
		if (!isValid) return;
		if (email.trim() === "demo@sokoos.com" && password === "password123") {
			localStorage.setItem("sokoos-auth", "true");
			signInMock({
				id: "demo",
				name: "Demo User"
			});
			setAuthError("");
			router.navigate({ to: "/dashboard" });
			return;
		}
		setAuthError("Invalid email or password.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthCard, {
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"New to Sokoos? ",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/sign-up",
				className: "font-semibold text-[#111827] transition-colors hover:text-[#16A34A]",
				children: "Create an account"
			})
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthHeader, {
				eyebrow: "Preview access",
				title: "Welcome back",
				description: "Sign in to your Sokoos workspace."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-5",
				onSubmit: handleSubmit,
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "email",
							label: "Email Address",
							type: "email",
							placeholder: "you@company.com",
							value: email,
							onChange: (event) => setEmail(event.target.value),
							onBlur: () => setTouched((prev) => ({
								...prev,
								email: true
							}))
						}), touched.email && emailError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#DC2626]",
							children: emailError
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
							id: "password",
							label: "Password",
							placeholder: "Enter your password",
							value: password,
							onChange: (event) => setPassword(event.target.value),
							onBlur: () => setTouched((prev) => ({
								...prev,
								password: true
							}))
						}), touched.password && passwordError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#DC2626]",
							children: passwordError
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							id: "remember-me",
							label: "Remember Me"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "font-medium text-[#111827] transition-colors hover:text-[#16A34A]",
							children: "Forgot Password?"
						})]
					}),
					authError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-[#DC2626]",
						children: authError
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						type: "submit",
						disabled: !isValid,
						children: "Sign In"
					})
				]
			})]
		})
	}) });
}
var Route$8 = createFileRoute("/signin")({ component: SignIn });
function SelectInput({ label, id, options, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "text-sm font-medium text-[#111827]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			id,
			className: cn("h-11 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 text-sm text-[#111827] shadow-none outline-none transition-colors focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/10", className),
			...props,
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option.value,
				children: option.label
			}, option.value))
		})]
	});
}
var Route$7 = createFileRoute("/sign-up")({ component: SignUp });
function SignUp() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && localStorage.getItem("sokoos-auth") === "true") router.navigate({
			to: "/dashboard",
			replace: true
		});
	}, [router]);
	const [formValues, setFormValues] = (0, import_react.useState)({
		fullName: "",
		businessEmail: "",
		password: "",
		confirmPassword: "",
		businessName: "",
		businessType: "",
		phoneNumber: "",
		country: "Kenya",
		terms: false
	});
	const [touched, setTouched] = (0, import_react.useState)({
		fullName: false,
		businessEmail: false,
		password: false,
		confirmPassword: false,
		businessName: false,
		businessType: false,
		phoneNumber: false,
		country: false,
		terms: false
	});
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [successMessage, setSuccessMessage] = (0, import_react.useState)("");
	const errors = {
		fullName: !formValues.fullName.trim() ? "Full name is required." : "",
		businessEmail: !formValues.businessEmail.trim() ? "Business email is required." : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.businessEmail) ? "Enter a valid email address." : "",
		password: formValues.password.length < 8 ? "Password must be at least 8 characters." : "",
		confirmPassword: !formValues.confirmPassword.trim() ? "Please confirm your password." : formValues.password !== formValues.confirmPassword ? "Passwords must match." : "",
		businessName: !formValues.businessName.trim() ? "Business name is required." : "",
		businessType: !formValues.businessType ? "Please select a business type." : "",
		phoneNumber: !formValues.phoneNumber.trim() ? "Phone number is required." : "",
		country: !formValues.country.trim() ? "Country is required." : "",
		terms: !formValues.terms ? "You must agree to the terms." : ""
	};
	const isValid = Object.values(errors).every((error) => !error);
	const handleSubmit = (event) => {
		event.preventDefault();
		setTouched({
			fullName: true,
			businessEmail: true,
			password: true,
			confirmPassword: true,
			businessName: true,
			businessType: true,
			phoneNumber: true,
			country: true,
			terms: true
		});
		if (!isValid) return;
		try {
			window.localStorage.setItem("sokoos-workspace-signup", JSON.stringify({
				businessName: formValues.businessName,
				businessType: formValues.businessType,
				country: formValues.country,
				businessEmail: formValues.businessEmail,
				phoneNumber: formValues.phoneNumber
			}));
		} catch {}
		setIsSubmitting(true);
		setSuccessMessage("");
		window.setTimeout(() => {
			setIsSubmitting(false);
			setSuccessMessage("Workspace created successfully.");
			signInMock({
				id: "demo",
				name: "Demo User"
			});
			window.setTimeout(() => {
				router.navigate({ to: "/dashboard" });
			}, 800);
		}, 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthCard, {
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Already have an account? ",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/signin",
				className: "font-semibold text-[#111827] transition-colors hover:text-[#16A34A]",
				children: "Sign in"
			})
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthHeader, {
				eyebrow: "Preview access",
				title: "Create your AI Employee",
				description: "Create your Sokoos workspace in under a minute."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: handleSubmit,
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "full-name",
							label: "Full Name",
							placeholder: "Jane Doe",
							value: formValues.fullName,
							onChange: (event) => setFormValues((prev) => ({
								...prev,
								fullName: event.target.value
							})),
							onBlur: () => setTouched((prev) => ({
								...prev,
								fullName: true
							}))
						}), touched.fullName && errors.fullName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#DC2626]",
							children: errors.fullName
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "business-email",
							label: "Business Email",
							type: "email",
							placeholder: "you@company.com",
							value: formValues.businessEmail,
							onChange: (event) => setFormValues((prev) => ({
								...prev,
								businessEmail: event.target.value
							})),
							onBlur: () => setTouched((prev) => ({
								...prev,
								businessEmail: true
							}))
						}), touched.businessEmail && errors.businessEmail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#DC2626]",
							children: errors.businessEmail
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
								id: "password",
								label: "Password",
								placeholder: "Create a password",
								value: formValues.password,
								onChange: (event) => setFormValues((prev) => ({
									...prev,
									password: event.target.value
								})),
								onBlur: () => setTouched((prev) => ({
									...prev,
									password: true
								}))
							}), touched.password && errors.password ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-[#DC2626]",
								children: errors.password
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
								id: "confirm-password",
								label: "Confirm Password",
								placeholder: "Repeat password",
								value: formValues.confirmPassword,
								onChange: (event) => setFormValues((prev) => ({
									...prev,
									confirmPassword: event.target.value
								})),
								onBlur: () => setTouched((prev) => ({
									...prev,
									confirmPassword: true
								}))
							}), touched.confirmPassword && errors.confirmPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-[#DC2626]",
								children: errors.confirmPassword
							}) : null]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "business-name",
							label: "Business Name",
							placeholder: "Sokoos Labs",
							value: formValues.businessName,
							onChange: (event) => setFormValues((prev) => ({
								...prev,
								businessName: event.target.value
							})),
							onBlur: () => setTouched((prev) => ({
								...prev,
								businessName: true
							}))
						}), touched.businessName && errors.businessName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#DC2626]",
							children: errors.businessName
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectInput, {
								id: "business-type",
								label: "Business Type",
								value: formValues.businessType,
								onChange: (event) => setFormValues((prev) => ({
									...prev,
									businessType: event.target.value
								})),
								onBlur: () => setTouched((prev) => ({
									...prev,
									businessType: true
								})),
								options: [
									{
										label: "Select type",
										value: ""
									},
									{
										label: "Retail",
										value: "retail"
									},
									{
										label: "Restaurant",
										value: "restaurant"
									},
									{
										label: "Service Business",
										value: "service"
									},
									{
										label: "Education",
										value: "education"
									},
									{
										label: "Healthcare",
										value: "healthcare"
									},
									{
										label: "Other",
										value: "other"
									}
								]
							}), touched.businessType && errors.businessType ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-[#DC2626]",
								children: errors.businessType
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								id: "phone-number",
								label: "Phone Number",
								placeholder: "0712 345 678",
								value: formValues.phoneNumber,
								onChange: (event) => setFormValues((prev) => ({
									...prev,
									phoneNumber: event.target.value
								})),
								onBlur: () => setTouched((prev) => ({
									...prev,
									phoneNumber: true
								}))
							}), touched.phoneNumber && errors.phoneNumber ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-[#DC2626]",
								children: errors.phoneNumber
							}) : null]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							id: "country",
							label: "Country",
							defaultValue: "Kenya",
							value: formValues.country,
							onChange: (event) => setFormValues((prev) => ({
								...prev,
								country: event.target.value
							})),
							onBlur: () => setTouched((prev) => ({
								...prev,
								country: true
							}))
						}), touched.country && errors.country ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#DC2626]",
							children: errors.country
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							id: "terms",
							label: "I agree to the Terms",
							checked: formValues.terms,
							onChange: (event) => setFormValues((prev) => ({
								...prev,
								terms: event.target.checked
							})),
							onBlur: () => setTouched((prev) => ({
								...prev,
								terms: true
							}))
						}), touched.terms && errors.terms ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#DC2626]",
							children: errors.terms
						}) : null]
					}),
					successMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-2xl border border-[#DCFCE7] bg-[#F0FDF4] px-4 py-3 text-sm font-medium text-[#166534]",
						children: successMessage
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						type: "submit",
						disabled: !isValid || isSubmitting,
						children: isSubmitting ? "Creating Workspace..." : "Create Workspace"
					})
				]
			})]
		})
	}) });
}
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
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
		label: "AI Employee",
		href: "/dashboard/ai",
		Icon: Cpu
	},
	{
		label: "Growth Pages",
		href: "/dashboard/pages",
		Icon: Globe
	},
	{
		label: "Marketing",
		href: "/dashboard/marketing",
		Icon: Megaphone
	},
	{
		label: "Analytics",
		href: "/dashboard/analytics",
		Icon: Activity
	},
	{
		label: "Integrations",
		href: "/dashboard/integrations",
		Icon: Bot
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
var AI_WORKSPACE_SUBTLE = "rounded-[24px] border border-[#E5E7EB] bg-[#FCFCFD] p-6";
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
var INTEGRATION_SECTIONS = [
	{
		section: "Communication",
		items: [
			{
				id: "whatsapp",
				name: "WhatsApp Business",
				Icon: MessageCircle,
				description: "Allow Sokoos AI to reply to customers directly inside WhatsApp.",
				status: "Connected"
			},
			{
				id: "facebook",
				name: "Facebook Messenger",
				Icon: MessageCircle,
				description: "Allow Sokoos AI to reply to customers on Facebook Messenger.",
				status: "Not Connected"
			},
			{
				id: "instagram",
				name: "Instagram",
				Icon: Image,
				description: "Allow Sokoos AI to respond to Instagram messages and DMs.",
				status: "Not Connected"
			},
			{
				id: "telegram",
				name: "Telegram",
				Icon: Send,
				description: "Allow Sokoos AI to manage Telegram conversations.",
				status: "Not Connected"
			},
			{
				id: "email",
				name: "Email",
				Icon: Send,
				description: "Allow Sokoos AI to read and send business emails.",
				status: "Connected"
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
				status: "Not Connected"
			},
			{
				id: "stripe",
				name: "Stripe",
				Icon: Tag,
				description: "Allow the AI to generate payment links.",
				status: "Not Connected"
			},
			{
				id: "paypal",
				name: "PayPal",
				Icon: Tag,
				description: "Allow the AI to generate PayPal payment links.",
				status: "Not Connected"
			},
			{
				id: "flutterwave",
				name: "Flutterwave",
				Icon: Globe,
				description: "Allow the AI to process payments across Africa and generate payment links.",
				status: "Coming Soon"
			}
		]
	},
	{
		section: "E-commerce",
		items: [
			{
				id: "shopify",
				name: "Shopify",
				Icon: Box,
				description: "Allow the AI to answer product questions using your store catalog.",
				status: "Connected"
			},
			{
				id: "woocommerce",
				name: "WooCommerce",
				Icon: Box,
				description: "Allow the AI to access your WooCommerce product catalog and orders.",
				status: "Not Connected"
			},
			{
				id: "custom_api",
				name: "Custom Website API",
				Icon: Globe,
				description: "Allow the AI to query your site's product and order APIs.",
				status: "Not Connected"
			}
		]
	},
	{
		section: "Business",
		items: [
			{
				id: "google_business",
				name: "Google Business Profile",
				Icon: Globe,
				description: "Allow the AI to update and read your business profile and respond to reviews.",
				status: "Not Connected"
			},
			{
				id: "google_calendar",
				name: "Google Calendar",
				Icon: Calendar,
				description: "Allow the AI to schedule appointments.",
				status: "Connected"
			},
			{
				id: "outlook",
				name: "Microsoft Outlook",
				Icon: Calendar,
				description: "Allow the AI to schedule meetings and manage business email/calendar.",
				status: "Not Connected"
			},
			{
				id: "gdrive",
				name: "Google Drive",
				Icon: Paperclip,
				description: "Allow the AI to access business documents and knowledge files.",
				status: "Connected"
			},
			{
				id: "dropbox",
				name: "Dropbox",
				Icon: Paperclip,
				description: "Allow the AI to access business documents stored in Dropbox.",
				status: "Not Connected"
			},
			{
				id: "onedrive",
				name: "OneDrive",
				Icon: Paperclip,
				description: "Allow the AI to access business documents stored in OneDrive.",
				status: "Not Connected"
			}
		]
	},
	{
		section: "Marketing",
		items: [
			{
				id: "meta_ads",
				name: "Meta Ads",
				Icon: Megaphone,
				description: "Allow the AI to sync campaign data and create audiences.",
				status: "Not Connected"
			},
			{
				id: "google_ads",
				name: "Google Ads",
				Icon: Globe,
				description: "Allow the AI to pull campaign performance and recommend optimizations.",
				status: "Not Connected"
			},
			{
				id: "tiktok",
				name: "TikTok",
				Icon: Globe,
				description: "Allow the AI to manage TikTok ad campaigns and creatives.",
				status: "Coming Soon"
			},
			{
				id: "mailchimp",
				name: "Mailchimp",
				Icon: Send,
				description: "Allow the AI to sync contact lists and send marketing campaigns.",
				status: "Connected"
			},
			{
				id: "brevo",
				name: "Brevo",
				Icon: Send,
				description: "Allow the AI to send campaigns and sync contact lists.",
				status: "Not Connected"
			}
		]
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
var CAPABILITY_FEATURES = [
	{
		id: "receive_whatsapp",
		title: "Receive WhatsApp messages",
		requires: ["whatsapp"]
	},
	{
		id: "send_quotations",
		title: "Send quotations",
		requires: [
			"whatsapp",
			"shopify",
			"custom_api",
			"woocommerce"
		].filter(Boolean)
	},
	{
		id: "schedule_appointments",
		title: "Schedule appointments",
		requires: ["google_calendar"]
	},
	{
		id: "collect_payments",
		title: "Collect payments",
		requires: ["mpesa", "stripe"]
	},
	{
		id: "send_invoices",
		title: "Send invoices",
		requires: [
			"mpesa",
			"stripe",
			"shopify",
			"custom_api"
		].filter(Boolean)
	},
	{
		id: "product_recommendations",
		title: "Generate product recommendations",
		requires: [
			"shopify",
			"custom_api",
			"woocommerce",
			"gdrive"
		]
	},
	{
		id: "read_business_documents",
		title: "Read business documents",
		requires: ["gdrive", "dropbox"]
	},
	{
		id: "reply_facebook",
		title: "Reply on Facebook",
		requires: ["facebook"]
	},
	{
		id: "reply_instagram",
		title: "Reply on Instagram",
		requires: ["instagram"]
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
var ANALYTICS_TOP_QUESTIONS = [
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
	const [selected, setSelected] = (0, import_react.useState)("Home");
	const [integrationStates, setIntegrationStates] = (0, import_react.useState)(() => {
		try {
			const raw = typeof window !== "undefined" ? window.localStorage.getItem("sokoos.integrationStates") : null;
			if (raw) return JSON.parse(raw);
		} catch (e) {}
		const map = {};
		INTEGRATION_SECTIONS.forEach((section) => {
			section.items.forEach((it) => {
				map[it.id] = { status: it.status };
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
			[id]: { status: "Not Connected" }
		}));
		closeDrawer();
	};
	const handleSyncNow = (id) => {
		setIntegrationStates((s) => ({
			...s,
			[id]: {
				...s[id] || {},
				status: "Connected",
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
	const handleModalConnect = () => {
		if (!connectModalId) return;
		const name = getIntegrationName(connectModalId);
		setIntegrationStates((s) => ({
			...s,
			[connectModalId]: {
				status: "Connected",
				accountName: connectForm.businessName || connectForm.email || `${name} Account`,
				lastSynced: "Just now"
			}
		}));
		setConnectModalOpen(false);
		setConnectModalId(null);
	};
	const [activeWorkspaceSection, setActiveWorkspaceSection] = (0, import_react.useState)("Identity");
	const [activeIdentityStep, setActiveIdentityStep] = (0, import_react.useState)(0);
	const [completedIdentitySteps, setCompletedIdentitySteps] = (0, import_react.useState)([]);
	const [activeKnowledgeStep, setActiveKnowledgeStep] = (0, import_react.useState)(0);
	const [completedKnowledgeSteps, setCompletedKnowledgeSteps] = (0, import_react.useState)([]);
	const [selectedKnowledgeSources, setSelectedKnowledgeSources] = (0, import_react.useState)([]);
	const [completionToast, setCompletionToast] = (0, import_react.useState)(null);
	const [previewReplyVisible, setPreviewReplyVisible] = (0, import_react.useState)(true);
	const [onboardingRestored, setOnboardingRestored] = (0, import_react.useState)(false);
	const identityLessonRef = (0, import_react.useRef)(null);
	const knowledgeLessonRef = (0, import_react.useRef)(null);
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
	const isDevMode = typeof import.meta !== "undefined" && Boolean(false);
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
			price: "$8.50",
			description: "Fresh mixed greens, candied ginger, citrus segments, and sesame vinaigrette.",
			availability: "In stock",
			imagesCount: 3,
			documentsCount: 0,
			image: "/assets/sample/food-salad.jpg"
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
			image: "/assets/sample/tee.jpg"
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
			image: "/assets/sample/clinic.jpg"
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
			image: "/assets/sample/workbook.jpg"
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
			image: "/assets/sample/apartment.jpg"
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
			image: "/assets/sample/salon.jpg"
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
			image: "/assets/sample/headphones.jpg"
		}
	];
	const [catalogProducts, setCatalogProducts] = (0, import_react.useState)(() => CATALOG_ITEMS);
	const [productSearch, setProductSearch] = (0, import_react.useState)("");
	const [categories, setCategories] = (0, import_react.useState)(() => Array.from(new Set(CATALOG_ITEMS.map((product) => product.category).filter(Boolean))).map((name, index) => ({
		id: `category-${index + 1}`,
		name,
		productCount: CATALOG_ITEMS.filter((product) => product.category === name).length
	})));
	const [showAddCategoryInput, setShowAddCategoryInput] = (0, import_react.useState)(false);
	const [newCategoryName, setNewCategoryName] = (0, import_react.useState)("");
	const [editingCategoryId, setEditingCategoryId] = (0, import_react.useState)(null);
	const [categoryDrafts, setCategoryDrafts] = (0, import_react.useState)({});
	const updateCatalogProductField = (id, field, value) => {
		setCatalogProducts((list) => list.map((p) => p.id === id ? {
			...p,
			[field]: value
		} : p));
	};
	const deleteCatalogProduct = (id) => {
		setCatalogProducts((list) => list.filter((product) => product.id !== id));
	};
	const [catalogueSubsection, setCatalogueSubsection] = (0, import_react.useState)("Products & Services");
	const [pricingSaved, setPricingSaved] = (0, import_react.useState)(false);
	const [pricingSectionComplete, setPricingSectionComplete] = (0, import_react.useState)(false);
	const [availabilitySaved, setAvailabilitySaved] = (0, import_react.useState)(false);
	const [importMenuOpen, setImportMenuOpen] = (0, import_react.useState)(false);
	const [showProductTypeDialog, setShowProductTypeDialog] = (0, import_react.useState)(false);
	const [showAddProductForm, setShowAddProductForm] = (0, import_react.useState)(false);
	const [selectedProductType, setSelectedProductType] = (0, import_react.useState)(null);
	const [selectedProductId, setSelectedProductId] = (0, import_react.useState)(null);
	const [productDrawerOpen, setProductDrawerOpen] = (0, import_react.useState)(false);
	const [productDrawerTab, setProductDrawerTab] = (0, import_react.useState)("general");
	const [completedProductStepIds, setCompletedProductStepIds] = (0, import_react.useState)([]);
	const [addProductFormData, setAddProductFormData] = (0, import_react.useState)(null);
	const [mediaAssets, setMediaAssets] = (0, import_react.useState)([
		{
			id: "m-img-1",
			name: "Ginger Citrus Salad.jpg",
			fileType: "Image",
			uploadDate: (/* @__PURE__ */ new Date()).toLocaleString(),
			size: "128 KB",
			url: "/assets/sample/food-salad.jpg",
			mime: "image/jpeg"
		},
		{
			id: "m-pdf-1",
			name: "Restaurant Menu.pdf",
			fileType: "PDF",
			uploadDate: (/* @__PURE__ */ new Date()).toLocaleString(),
			size: "320 KB",
			url: "/assets/sample/menu.pdf",
			mime: "application/pdf"
		},
		{
			id: "m-video-1",
			name: "Salon Promo.mp4",
			fileType: "Video",
			uploadDate: (/* @__PURE__ */ new Date()).toLocaleString(),
			size: "6.2 MB",
			url: "/assets/sample/promo.mp4",
			mime: "video/mp4"
		},
		{
			id: "m-logo-1",
			name: "Clinic Logo.png",
			fileType: "Logo",
			uploadDate: (/* @__PURE__ */ new Date()).toLocaleString(),
			size: "48 KB",
			url: "/assets/sample/clinic.jpg",
			mime: "image/png"
		}
	]);
	const productSectionIds = ["products", "pricing"];
	const selectedProduct = selectedProductId ? catalogProducts.find((product) => product.id === selectedProductId) ?? null : null;
	const openProductDrawer = (id) => {
		setSelectedProductId(id);
		setProductDrawerOpen(true);
		setProductDrawerTab("general");
	};
	const closeProductDrawer = () => {
		setProductDrawerOpen(false);
		setSelectedProductId(null);
	};
	const handleProductImageUpload = (files) => {
		if (!files || !selectedProduct) return;
		const file = files[0];
		const url = URL.createObjectURL(file);
		updateCatalogProductField(selectedProduct.id, "image", url);
	};
	const renderPricingEditor = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[12px] border border-[#EEF2F6] bg-white p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold text-[#111827]",
					children: "Services editor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-[#64748B]",
					children: "Manage service details, booking options, and media for your AI recommendations."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: addService,
					className: "rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white",
					children: "Add Service"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "min-w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-left text-[11px] uppercase tracking-[0.12em] text-[#6B7280]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2",
								children: "Service"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2",
								children: "Category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2",
								children: "Price"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2",
								children: "Duration"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2",
								children: "Area"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2",
								children: "Appt."
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: catalogServices.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: `border-t cursor-pointer ${service.id === selectedServiceId ? "bg-[#ECFDF5]" : "hover:bg-[#F8FAFB]"}`,
						onClick: () => setSelectedServiceId(service.id),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-2 align-middle text-sm text-[#111827]",
								children: service.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-2 align-middle text-sm text-[#475569]",
								children: service.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-2 align-middle text-sm text-[#475569]",
								children: service.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-2 align-middle text-sm text-[#475569]",
								children: service.duration
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-2 align-middle text-sm text-[#475569]",
								children: service.area
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-2 align-middle text-sm text-[#475569]",
								children: service.appointmentRequired ? "Yes" : "No"
							})
						]
					}, service.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[12px] border border-[#EEF2F6] bg-white p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-[#111827]",
						children: "Service details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs text-[#6B7280]",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: selectedService.name,
								onChange: (e) => updateServiceField(selectedService.id, "name", e.target.value),
								className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs text-[#6B7280]",
								children: "Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: selectedService.description,
								onChange: (e) => updateServiceField(selectedService.id, "description", e.target.value),
								className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[96px]"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs text-[#6B7280]",
									children: "Category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: selectedService.category,
									onChange: (e) => updateServiceField(selectedService.id, "category", e.target.value),
									className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs text-[#6B7280]",
									children: "Price"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: selectedService.price,
									onChange: (e) => updateServiceField(selectedService.id, "price", e.target.value),
									className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs text-[#6B7280]",
									children: "Duration"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: selectedService.duration,
									onChange: (e) => updateServiceField(selectedService.id, "duration", e.target.value),
									className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs text-[#6B7280]",
									children: "Service area"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: selectedService.area,
									onChange: (e) => updateServiceField(selectedService.id, "area", e.target.value),
									className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "inline-flex items-center gap-2 text-sm text-[#111827]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: selectedService.appointmentRequired,
										onChange: (e) => updateServiceField(selectedService.id, "appointmentRequired", e.target.checked),
										className: "h-4 w-4 rounded border border-[#D1D5DB] text-[#22C55E] focus:ring-[#22C55E]"
									}), "Appointment required"]
								})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[12px] border border-[#EEF2F6] bg-white p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#111827]",
							children: "Media and files"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#64748B]",
							children: "Upload images, videos, or supporting documents for this service."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-[12px] border-dashed border-2 border-[#E5E7EB] bg-[#FAFAFB] p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-[#111827]",
									children: "Drag & drop files here"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-[#64748B]",
									children: "Images, videos, documents, or any service resources."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: serviceFileInputRef,
										type: "file",
										multiple: true,
										className: "hidden",
										onChange: (e) => handleServiceFiles(e.target.files)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => serviceFileInputRef.current?.click(),
										className: "inline-flex items-center gap-2 rounded-[12px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white",
										children: "Upload files"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[12px] border border-[#EEF2F6] bg-white p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-[#111827]",
									children: "Files uploaded"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-[#64748B]",
									children: [selectedService.mediaAssets.length, " assets attached"]
								})]
							}), selectedService.mediaAssets.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: selectedService.mediaAssets.map((asset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-full flex-col rounded-[14px] border border-[#EEF2F6] bg-white p-3 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-3 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[10px] bg-[#F8FAFB]",
										children: asset.mime?.startsWith("image") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: asset.url,
											alt: asset.name,
											className: "h-full w-full object-cover"
										}) : asset.mime?.startsWith("video") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
											src: asset.url,
											controls: true,
											className: "h-full w-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center justify-center text-sm text-[#475569]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												width: "44",
												height: "44",
												viewBox: "0 0 24 24",
												fill: "none",
												xmlns: "http://www.w3.org/2000/svg",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													d: "M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
													stroke: "#64748B",
													strokeWidth: "1.5",
													strokeLinecap: "round",
													strokeLinejoin: "round"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-2",
												children: "File"
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex min-h-0 flex-1 flex-col",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-semibold text-[#111827]",
												children: asset.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 space-y-1 text-xs text-[#6B7280]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													asset.fileType,
													" • ",
													asset.size
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[#94A3B8]",
													children: asset.uploadDate
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 flex items-center justify-end gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => viewServiceAsset(asset),
													className: "rounded-[8px] border border-[#E5E7EB] bg-white px-2.5 py-1.5 text-xs font-semibold",
													children: "Preview"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => deleteServiceAsset(asset.id),
													className: "rounded-[8px] border border-[#FECACA] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#B91C1C]",
													children: "Delete"
												})]
											})
										]
									})]
								}, asset.id))
							})]
						})
					]
				})]
			})
		]
	});
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
		const mediaCompleted = catalogProducts.filter((product) => typeof product.image === "string" && product.image.trim().length > 0 && product.image !== "/assets/sample/placeholder.png").length;
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
	const fileInputRef = (0, import_react.useRef)(null);
	const productMediaFileInputRef = (0, import_react.useRef)(null);
	const serviceFileInputRef = (0, import_react.useRef)(null);
	const handleFiles = (files) => {
		if (!files || files.length === 0) return;
		const arr = Array.from(files).map((f) => ({
			id: `asset-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
			name: f.name,
			fileType: f.type.split("/")[0] || "file",
			uploadDate: (/* @__PURE__ */ new Date()).toLocaleString(),
			size: `${Math.round(f.size / 1024)} KB`,
			url: URL.createObjectURL(f),
			mime: f.type
		}));
		setMediaAssets((prev) => [...arr, ...prev]);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
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
	const createMediaAssets = (files) => {
		if (!files || files.length === 0) return [];
		return Array.from(files).map((f) => ({
			id: `service-asset-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
			name: f.name,
			fileType: f.type.split("/")[0] || "file",
			uploadDate: (/* @__PURE__ */ new Date()).toLocaleString(),
			size: `${Math.round(f.size / 1024)} KB`,
			url: URL.createObjectURL(f),
			mime: f.type
		}));
	};
	const updateServiceField = (id, field, value) => {
		setCatalogServices((list) => list.map((service) => service.id === id ? {
			...service,
			[field]: value
		} : service));
	};
	const selectedService = catalogServices.find((service) => service.id === selectedServiceId) ?? SERVICE_ITEMS[0];
	const handleServiceFiles = (files) => {
		if (!files || files.length === 0 || !selectedService) return;
		const arr = createMediaAssets(files);
		setCatalogServices((list) => list.map((service) => service.id === selectedService.id ? {
			...service,
			mediaAssets: [...arr, ...service.mediaAssets]
		} : service));
		if (serviceFileInputRef.current) serviceFileInputRef.current.value = "";
	};
	const viewServiceAsset = (asset) => {
		window.open(asset.url, "_blank");
	};
	const deleteServiceAsset = (id) => {
		if (!selectedService) return;
		const asset = selectedService.mediaAssets.find((m) => m.id === id);
		if (!asset) return;
		if (!window.confirm(`Delete ${asset.name}?`)) return;
		try {
			if (asset.url.startsWith("blob:")) URL.revokeObjectURL(asset.url);
		} catch {}
		setCatalogServices((list) => list.map((service) => service.id === selectedService.id ? {
			...service,
			mediaAssets: service.mediaAssets.filter((m) => m.id !== id)
		} : service));
	};
	const addService = () => {
		const id = `s-${Date.now()}`;
		const newService = {
			id,
			name: `Service ${catalogServices.length + 1}`,
			description: "Describe this service for customers and your AI.",
			category: "General",
			price: "$0.00",
			duration: "30 minutes",
			area: "Online",
			appointmentRequired: false,
			image: "/assets/sample/placeholder.png",
			mediaAssets: []
		};
		setCatalogServices((list) => [newService, ...list]);
		setSelectedServiceId(id);
	};
	const addProductWithData = (data) => {
		const newItem = {
			id: `p-${Date.now()}`,
			name: data.name,
			category: data.category,
			price: data.price,
			description: "",
			availability: data.availability,
			imagesCount: 0,
			documentsCount: 0,
			image: data.image || "/assets/sample/placeholder.png"
		};
		setCatalogProducts((p) => [newItem, ...p]);
	};
	const onDrop = (e) => {
		e.preventDefault();
		handleFiles(e.dataTransfer.files);
	};
	const onDragOver = (e) => e.preventDefault();
	const viewAsset = (asset) => {
		window.open(asset.url, "_blank");
	};
	const deleteAsset = (id) => {
		const a = mediaAssets.find((m) => m.id === id);
		if (!a) return;
		if (!window.confirm(`Delete ${a.name}?`)) return;
		try {
			if (a.url.startsWith("blob:")) URL.revokeObjectURL(a.url);
		} catch (e) {}
		setMediaAssets((prev) => prev.filter((m) => m.id !== id));
	};
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
	const addQuoteTemplate = () => {
		const newT = {
			id: `t-${Date.now()}`,
			companyName: "New Company",
			header: "Quote",
			footer: "",
			terms: "",
			currency: "USD",
			tax: "0%",
			signature: "",
			primaryColor: "#065F46"
		};
		setQuoteTemplates((s) => [newT, ...s]);
		setSelectedTemplateId(newT.id);
	};
	const updateTemplate = (id, patch) => {
		setQuoteTemplates((s) => s.map((t) => t.id === id ? {
			...t,
			...patch
		} : t));
	};
	const duplicateTemplate = (id) => {
		const t = quoteTemplates.find((x) => x.id === id);
		if (!t) return;
		const copy = {
			...t,
			id: `t-${Date.now()}`
		};
		setQuoteTemplates((s) => [copy, ...s]);
		setSelectedTemplateId(copy.id);
	};
	const deleteTemplate = (id) => {
		if (!window.confirm("Delete this template?")) return;
		setQuoteTemplates((s) => s.filter((t) => t.id !== id));
		setSelectedTemplateId((prev) => prev === id ? quoteTemplates[0]?.id ?? null : prev);
	};
	const uploadLogoForTemplate = (id, f) => {
		if (!f) return;
		updateTemplate(id, { companyLogo: URL.createObjectURL(f) });
	};
	const [playbooks, setPlaybooks] = (0, import_react.useState)([{
		id: "p-1",
		title: "Pricing & Quote Flow",
		steps: [
			"Customer asks about pricing",
			"Recommend suitable product",
			"Suggest upgrade",
			"Offer discount if available",
			"Collect customer details",
			"Generate quotation",
			"Ask to proceed"
		],
		allowed: true
	}]);
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
	const [skills, setSkills] = (0, import_react.useState)([
		{
			id: "s-1",
			name: "Answer Questions",
			icon: "💬",
			description: "Respond to customer queries with helpful answers.",
			enabled: true,
			status: "Active"
		},
		{
			id: "s-2",
			name: "Recommend Products",
			icon: "🛍️",
			description: "Suggest products based on customer needs.",
			enabled: true,
			status: "Active"
		},
		{
			id: "s-3",
			name: "Upsell Customers",
			icon: "⬆️",
			description: "Recommend higher tier or add-ons.",
			enabled: false,
			status: "Disabled"
		},
		{
			id: "s-4",
			name: "Cross-sell",
			icon: "🔗",
			description: "Suggest complementary products.",
			enabled: false,
			status: "Disabled"
		},
		{
			id: "s-5",
			name: "Generate Quotes",
			icon: "🧾",
			description: "Create quotations based on selected items.",
			enabled: true,
			status: "Active"
		},
		{
			id: "s-6",
			name: "Book Appointments",
			icon: "📅",
			description: "Schedule appointments with customers.",
			enabled: false,
			status: "Disabled"
		},
		{
			id: "s-7",
			name: "Collect Leads",
			icon: "📇",
			description: "Capture lead details for follow-up.",
			enabled: true,
			status: "Active"
		},
		{
			id: "s-8",
			name: "Generate Invoices",
			icon: "💳",
			description: "Produce invoices for completed sales.",
			enabled: false,
			status: "Disabled"
		},
		{
			id: "s-9",
			name: "Follow-up Customers",
			icon: "🔔",
			description: "Send follow-ups or reminders.",
			enabled: false,
			status: "Idle"
		},
		{
			id: "s-10",
			name: "Translate Messages",
			icon: "🌐",
			description: "Translate customer messages to preferred language.",
			enabled: true,
			status: "Active"
		}
	]);
	const toggleSkill = (id) => {
		setSkills((s) => s.map((k) => k.id === id ? {
			...k,
			enabled: !k.enabled,
			status: k.enabled ? "Disabled" : "Active"
		} : k));
	};
	const [policySections, setPolicySections] = (0, import_react.useState)([
		{
			id: "pol-1",
			title: "Business Rules",
			content: "Business rules that govern pricing, discounts, and who can approve special offers."
		},
		{
			id: "pol-2",
			title: "Refund Policy",
			content: "Refunds processed within 30 days with receipt and original packaging."
		},
		{
			id: "pol-3",
			title: "Cancellation Policy",
			content: "Orders can be cancelled within 2 hours of placement; after that contact support."
		},
		{
			id: "pol-4",
			title: "Delivery Policy",
			content: "Standard delivery in 3-5 business days. Express options available."
		},
		{
			id: "pol-5",
			title: "Escalation Rules",
			content: "Escalate to manager for refunds over $1000 or repeated complaints."
		},
		{
			id: "pol-6",
			title: "Outside Business Hours",
			content: "Outside hours, log requests and respond next business day."
		},
		{
			id: "pol-7",
			title: "Allowed AI Actions",
			content: "AI may suggest products and collect basic contact info; it must not provide legal advice."
		}
	]);
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
	const chartMax = Math.max(...ANALYTICS_CHART.map((point) => point.value));
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
	const [serviceAreaInput, setServiceAreaInput] = (0, import_react.useState)("");
	const [companyAbout, setCompanyAbout] = (0, import_react.useState)("");
	const [companyMission, setCompanyMission] = (0, import_react.useState)("");
	const [companyVision, setCompanyVision] = (0, import_react.useState)("");
	const [yearsInBusiness, setYearsInBusiness] = (0, import_react.useState)("");
	const [industriesServed, setIndustriesServed] = (0, import_react.useState)("");
	const [targetCustomers, setTargetCustomers] = (0, import_react.useState)("");
	const [differentiators, setDifferentiators] = (0, import_react.useState)("");
	const [customerProblems, setCustomerProblems] = (0, import_react.useState)("");
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
			value: `${mediaAssets.length}`,
			Icon: Image,
			ready: mediaAssets.length > 0
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
		Skills: Math.min(100, Math.round(skills.filter((skill) => skill.enabled).length / Math.max(1, skills.length) * 100)),
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2",
								children: NAV_ITEMS.map(({ label, href, Icon }) => {
									const active = selected === label;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setSelected(label);
											if (typeof window !== "undefined") window.history.pushState({}, "", href);
										},
										title: label,
										"aria-label": label,
										className: `w-full flex items-center justify-center rounded-[20px] p-2 text-sm font-medium transition duration-200 ${active ? "bg-[#ECFDF5] text-[#047857] shadow-sm" : "text-[#6B7280] hover:bg-[#EFF6FF]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 ${active ? "text-[#059669] opacity-100" : "text-[#6B7280] opacity-90"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: label
										})]
									}) }, href);
								})
							})
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
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2",
										children: NAV_ITEMS.map(({ label, href, Icon }) => {
											const active = selected === label;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => {
													setSelected(label);
													if (typeof window !== "undefined") window.history.pushState({}, "", href);
												},
												title: label,
												"aria-label": label,
												className: `w-full text-left flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium transition duration-200 ${active ? "bg-[#ECFDF5] text-[#047857]" : "text-[#475569] hover:bg-[#EFF6FF]"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-5 w-5 ${active ? "text-[#059669]" : "text-[#6B7280]"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
											}) }, href);
										})
									})
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
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: NAV_ITEMS.map(({ label, href, Icon }) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setSelected(label);
									setMobileOpen(false);
									if (typeof window !== "undefined") window.history.pushState({}, "", href);
								},
								className: `w-full text-left flex items-center gap-2.5 rounded-[20px] px-3 py-2 text-sm font-medium transition duration-200 ${selected === label ? "bg-[#F0FDF4] text-[#065F46] shadow-sm ring-1 ring-[#D1FAE5]/40" : "text-[#475569] hover:bg-[#EFF6FF] hover:text-[#111827]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
							}) }, href);
						})
					}) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "h-full overflow-x-hidden pt-14 md:pt-0 md:pl-[72px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto h-full p-4 overflow-x-hidden",
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
						selected === "AI Employee" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
												children: activeWorkspaceSection === "Identity" ? "Identity training" : activeWorkspaceSection === "Catalogue" ? "Catalogue workspace" : "KNOWLEDGE TRAINING"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-[#475569]",
												children: activeWorkspaceSection === "Identity" ? "Onboard your AI employee one focused decision at a time." : activeWorkspaceSection === "Catalogue" ? "Manage your AI catalogue so it can recommend products and services with confidence." : "Build and refine your knowledge base so your AI responds with relevant, trusted answers."
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
																								children: "Business Type"
																							}),
																							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																								id: "industry",
																								required: true,
																								value: businessInfo.type,
																								onChange: (event) => setBusinessInfo((current) => ({
																									...current,
																									type: event.target.value
																								})),
																								placeholder: "e.g. Retail, Hospitality, Services",
																								className: `${AI_TRAINING_FIELD} w-full`
																							}),
																							businessInfo.type && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
																								className: "pointer-events-none absolute right-3 top-[39px] h-4 w-4 text-[#22C55E]",
																								"aria-label": "Business type is ready"
																							})
																						]
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
																			disabled: !businessInfo.name.trim() || !businessInfo.type.trim() || !businessInfo.country.trim() || !businessInfo.about.trim(),
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
										className: "w-full max-w-[1600px] min-w-0 overflow-x-hidden lg:max-h-[calc(100vh-180px)] lg:overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-5 items-start lg:grid-cols-[minmax(0,1fr)_310px] lg:max-h-[calc(100vh-200px)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1 lg:min-h-0",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "sticky top-0 z-30 mb-4 rounded-[18px] border border-[#E5E7EB] bg-white/90 p-3 shadow-sm backdrop-blur-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex flex-wrap items-center justify-between gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-wrap items-center gap-3",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "relative",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => setShowProductTypeDialog(true),
																			className: "inline-flex items-center gap-2 rounded-[12px] bg-[#22C55E] px-3 py-1 text-sm font-semibold text-white transition duration-200 ease-out hover:shadow-sm hover:bg-[#16A34A]",
																			children: "+ Add Product"
																		})
																	}),
																	showProductTypeDialog && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "w-full max-w-md rounded-[12px] bg-white p-6",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex items-center justify-between",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																					className: "text-lg font-semibold",
																					children: "What are you adding?"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																					type: "button",
																					onClick: () => setShowProductTypeDialog(false),
																					className: "text-sm text-[#6B7280]",
																					children: "Cancel"
																				})]
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "mt-6 grid gap-3",
																				children: [
																					"Physical Product",
																					"Service",
																					"Subscription",
																					"Digital Product"
																				].map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																					type: "button",
																					onClick: () => {
																						setSelectedProductType(type);
																						setShowProductTypeDialog(false);
																						setAddProductFormData({
																							name: `${type} ${catalogProducts.length + 1}`,
																							category: type,
																							price: "$0.00",
																							availability: "Available"
																						});
																						setShowAddProductForm(true);
																					},
																					className: "rounded-[16px] border border-[#E5E7EB] bg-white px-4 py-4 text-left text-sm font-semibold text-[#111827] transition hover:bg-[#F8FAFB]",
																					children: type
																				}, type))
																			})]
																		})
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "relative",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => setImportMenuOpen((s) => !s),
																			className: "inline-flex items-center gap-2 rounded-[12px] border border-[#E5E7EB] bg-white px-3 py-1 text-sm font-semibold transition duration-200 ease-out hover:shadow-sm hover:bg-[#F8FAFB]",
																			children: ["Import", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 text-[#6B7280]" })]
																		}), importMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "absolute right-0 mt-2 w-48 rounded-md border bg-white shadow-lg z-50",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																					className: "block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer",
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
																					className: "block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer",
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
																					className: "block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer",
																					children: ["PDF", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																						type: "file",
																						accept: ".pdf",
																						className: "hidden",
																						onChange: (e) => {
																							setImportMenuOpen(false);
																							simulateImport("PDF Catalogues", e.target.files?.[0] ?? null);
																						}
																					})]
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																					className: "block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer",
																					children: ["Images", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																						type: "file",
																						accept: "image/*",
																						multiple: true,
																						className: "hidden",
																						onChange: (e) => {
																							setImportMenuOpen(false);
																							handleFiles(e.target.files);
																						}
																					})]
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																					className: "block px-3 py-2 text-sm hover:bg-[#F8FAFB] cursor-pointer",
																					children: ["Bulk Upload", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																						type: "file",
																						accept: "*/*",
																						multiple: true,
																						className: "hidden",
																						onChange: (e) => {
																							setImportMenuOpen(false);
																							handleFiles(e.target.files);
																						}
																					})]
																				})
																			]
																		})]
																	})
																]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex-1 min-w-[180px]",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	value: productSearch,
																	onChange: (e) => setProductSearch(e.target.value),
																	placeholder: "Search products, categories, or descriptions",
																	className: "w-full rounded-[12px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm shadow-sm focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#ECFDF5]"
																})
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-3 text-sm text-[#64748B]",
															children: [
																"Showing ",
																CATALOG_ITEMS.length,
																" items"
															]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "lg:max-h-[calc(100vh-290px)] lg:overflow-y-auto",
														children: showAddProductForm && addProductFormData && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "w-full max-w-lg rounded-[12px] bg-white p-6",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center justify-between",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
																			className: "text-lg font-semibold",
																			children: ["Add ", selectedProductType]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			onClick: () => {
																				setShowAddProductForm(false);
																				setSelectedProductType(null);
																			},
																			className: "text-sm text-[#6B7280]",
																			children: "Close"
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "mt-4 space-y-3",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																				className: "text-xs text-[#6B7280]",
																				children: "Name"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																				value: addProductFormData.name,
																				onChange: (e) => setAddProductFormData((d) => d ? {
																					...d,
																					name: e.target.value
																				} : d),
																				className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																			})] }),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "grid grid-cols-2 gap-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																					className: "text-xs text-[#6B7280]",
																					children: "Category"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																					value: addProductFormData.category,
																					onChange: (e) => setAddProductFormData((d) => d ? {
																						...d,
																						category: e.target.value
																					} : d),
																					className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																					className: "text-xs text-[#6B7280]",
																					children: "Price"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																					value: addProductFormData.price,
																					onChange: (e) => setAddProductFormData((d) => d ? {
																						...d,
																						price: e.target.value
																					} : d),
																					className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																				})] })]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																				className: "text-xs text-[#6B7280]",
																				children: "Availability"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
																				value: addProductFormData.availability,
																				onChange: (e) => setAddProductFormData((d) => d ? {
																					...d,
																					availability: e.target.value
																				} : d),
																				className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Available" }),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "In stock" }),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Out of stock" }),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "By appointment" })
																				]
																			})] })
																		]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "mt-6 flex justify-end gap-3",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			onClick: () => {
																				setShowAddProductForm(false);
																				setSelectedProductType(null);
																			},
																			className: "rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm",
																			children: "Cancel"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			onClick: () => {
																				if (addProductFormData) addProductWithData(addProductFormData);
																				setShowAddProductForm(false);
																				setSelectedProductType(null);
																			},
																			className: "rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white",
																			children: "Create Product"
																		})]
																	})
																]
															})
														})
													}),
													catalogueSubsection === "Imports" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mb-6",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "overflow-x-auto pb-1 custom-scrollbar",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "flex min-w-max items-center gap-3 px-1 py-1",
																	children: [
																		{
																			label: "Products",
																			value: "Products & Services"
																		},
																		{
																			label: "Services",
																			value: "Pricing"
																		},
																		{
																			label: "Inventory",
																			value: "Availability"
																		},
																		{
																			label: "Review",
																			value: "Review"
																		}
																	].map((lesson, index) => {
																		const selectedIndex = [
																			"Products & Services",
																			"Pricing",
																			"Availability",
																			"Review"
																		].indexOf(catalogueSubsection);
																		const isActive = selectedIndex === index;
																		const isCompleted = selectedIndex >= 0 && index < selectedIndex;
																		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => setCatalogueSubsection(lesson.value),
																			className: `inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${isActive ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm" : isCompleted ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]"}`,
																			children: [isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A] text-[11px] text-white",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
																			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: `flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isCompleted ? "bg-[#22C55E] text-white" : isActive ? "bg-[#111827] text-white" : "bg-[#F8FAFC] text-[#64748B]"}`,
																				children: isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																					className: "text-[11px]",
																					children: index + 1
																				})
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lesson.label })]
																		}, lesson.label);
																	})
																})
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mb-6 flex flex-wrap items-start justify-between gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Import Catalogue"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-1 text-xs text-[#6B7280]",
																children: "Quickly teach your AI using your existing catalogue."
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "font-semibold",
																		children: "Est."
																	}),
																	" ",
																	Object.keys(importState).length > 0 ? "In progress" : "Not started"
																]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
															children: IMPORT_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex h-full flex-col rounded-[18px] border border-[#EEF2F6] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.05),0_14px_24px_rgba(15,23,42,0.04)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center gap-3",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#F8FAFB] text-[#22C55E] ring-1 ring-[#E2E8F0]",
																			children: t === "Website Import" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-5 w-5" }) : t === "PDF Catalogues" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5" })
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: t
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																		className: "mt-3 text-sm leading-5 text-[#64748B]",
																		children: [
																			t === "Excel" && "Import products, SKUs, prices, categories, and stock levels from an .xlsx file.",
																			t === "CSV" && "Import simple product lists and pricing from CSV files.",
																			t === "PDF Catalogues" && "Extract product listings from PDF catalogs with best-effort parsing.",
																			t === "Website Import" && "Pull product pages from a website URL and turn them into catalog entries."
																		]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-4",
																		children: t === "Website Import" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex gap-2",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																				placeholder: "https://example.com/catalog",
																				className: "flex-1 rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm shadow-sm outline-none transition focus:border-[#22C55E] focus:ring-2 focus:ring-[#DCFCE7]",
																				id: `url-${t}`
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																				type: "button",
																				onClick: () => simulateImport(t, null),
																				className: "rounded-[10px] bg-[#22C55E] px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#16A34A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7F3D0] focus-visible:ring-offset-2",
																				children: "Start"
																			})]
																		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "flex items-center gap-2",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																				type: "file",
																				accept: t === "Excel" ? ".xlsx, .xls" : ".csv",
																				onChange: (e) => simulateImport(t, e.target.files?.[0] ?? null),
																				className: "text-sm file:mr-3 file:rounded-[10px] file:border-0 file:bg-[#F1F5F9] file:px-2.5 file:py-1.5 file:text-xs file:font-medium file:text-[#334155]"
																			})
																		})
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "mt-4",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "h-2.5 w-full overflow-hidden rounded-full bg-[#F1F5F9] ring-1 ring-[#E2E8F0]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: `h-2.5 rounded-full bg-[#22C55E] transition-[width] duration-300 ${importState[t]?.status === "uploading" ? "animate-pulse" : ""}`,
																				style: { width: `${importState[t]?.progress ?? 0}%` }
																			})
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-2 text-xs text-[#64748B]",
																			children: importState[t]?.status === "uploading" ? `Uploading (${importState[t]?.progress ?? 0}%)` : importState[t]?.status === "done" ? "Completed" : "Idle"
																		})]
																	}),
																	importState[t]?.status === "done" && importState[t]?.result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "mt-4 rounded-[10px] bg-[#F8FAFB] p-3 text-sm",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "font-semibold text-[#111827]",
																				children: importState[t].result.message
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																				className: "mt-1 text-xs text-[#64748B]",
																				children: ["Products imported: ", importState[t].result.productsImported]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																				className: "mt-1 text-xs text-[#F59E0B]",
																				children: ["Duplicates found: ", importState[t].result.duplicatesFound]
																			}),
																			importState[t].result.warnings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-2 text-xs text-[#F59E0B]",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "font-semibold",
																					children: "Warnings:"
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
																					className: "ml-4 list-disc",
																					children: importState[t].result.warnings.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: w }, i))
																				})]
																			})
																		]
																	})
																]
															}, t))
														})
													] }) : catalogueSubsection === "Quote Templates" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid gap-6 lg:grid-cols-[1fr_420px]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mb-4 flex items-center justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm font-semibold text-[#111827]",
																children: "Quote Templates"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: addQuoteTemplate,
																	className: "rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white",
																	children: "Create Template"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => {
																		const t = quoteTemplates.find((x) => x.id === selectedTemplateId);
																		if (t) alert(`Create Quote from template: ${t.companyName}`);
																	},
																	className: "rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm font-semibold",
																	children: "Create Quote"
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex gap-3 overflow-x-auto pb-2",
																children: quoteTemplates.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																	onClick: () => setSelectedTemplateId(t.id),
																	className: `min-w-[160px] flex-shrink-0 rounded-[10px] border p-3 text-left ${selectedTemplateId === t.id ? "border-[#22C55E] bg-[#ECFDF5]" : "bg-white"}`,
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold",
																		children: t.companyName
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-xs text-[#64748B] truncate",
																		children: t.header
																	})]
																}, t.id))
															}), selectedTemplateId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "rounded-[12px] border border-[#EEF2F6] bg-white p-4",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "grid gap-3",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center gap-3",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																					className: "h-12 w-12 rounded-md overflow-hidden bg-[#F8FAFB] flex items-center justify-center",
																					children: quoteTemplates.find((q) => q.id === selectedTemplateId)?.companyLogo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																						src: quoteTemplates.find((q) => q.id === selectedTemplateId).companyLogo,
																						alt: "logo",
																						className: "h-full w-full object-cover"
																					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "text-xs text-[#94A3B8]",
																						children: "Logo"
																					})
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																					className: "flex-1",
																					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																						value: quoteTemplates.find((q) => q.id === selectedTemplateId)?.companyName || "",
																						onChange: (e) => updateTemplate(selectedTemplateId, { companyName: e.target.value }),
																						className: "w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																					})
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex flex-col gap-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "text-xs text-[#6B7280]",
																						children: "Logo"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																						type: "file",
																						accept: "image/*",
																						onChange: (e) => uploadLogoForTemplate(selectedTemplateId, e.target.files?.[0] ?? null)
																					})]
																				})
																			]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																			className: "text-xs text-[#6B7280]",
																			children: "Header"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			value: quoteTemplates.find((q) => q.id === selectedTemplateId)?.header || "",
																			onChange: (e) => updateTemplate(selectedTemplateId, { header: e.target.value }),
																			className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																		})] }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																			className: "text-xs text-[#6B7280]",
																			children: "Footer"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			value: quoteTemplates.find((q) => q.id === selectedTemplateId)?.footer || "",
																			onChange: (e) => updateTemplate(selectedTemplateId, { footer: e.target.value }),
																			className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																		})] }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																			className: "text-xs text-[#6B7280]",
																			children: "Terms & Conditions"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																			value: quoteTemplates.find((q) => q.id === selectedTemplateId)?.terms || "",
																			onChange: (e) => updateTemplate(selectedTemplateId, { terms: e.target.value }),
																			className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm min-h-[80px]"
																		})] }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "grid grid-cols-2 gap-3",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																				className: "text-xs text-[#6B7280]",
																				children: "Currency"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																				value: quoteTemplates.find((q) => q.id === selectedTemplateId)?.currency || "",
																				onChange: (e) => updateTemplate(selectedTemplateId, { currency: e.target.value }),
																				className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																				className: "text-xs text-[#6B7280]",
																				children: "Tax"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																				value: quoteTemplates.find((q) => q.id === selectedTemplateId)?.tax || "",
																				onChange: (e) => updateTemplate(selectedTemplateId, { tax: e.target.value }),
																				className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																			})] })]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																			className: "text-xs text-[#6B7280]",
																			children: "Signature"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			value: quoteTemplates.find((q) => q.id === selectedTemplateId)?.signature || "",
																			onChange: (e) => updateTemplate(selectedTemplateId, { signature: e.target.value }),
																			className: "mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm"
																		})] }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																			className: "text-xs text-[#6B7280]",
																			children: "Primary Color"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "color",
																			value: quoteTemplates.find((q) => q.id === selectedTemplateId)?.primaryColor || "#065F46",
																			onChange: (e) => updateTemplate(selectedTemplateId, { primaryColor: e.target.value }),
																			className: "mt-1 h-10 w-20 p-0 border-none"
																		})] }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex justify-end gap-2",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																				type: "button",
																				onClick: () => duplicateTemplate(selectedTemplateId),
																				className: "rounded-[8px] border border-[#E5E7EB] px-3 py-2 text-sm",
																				children: "Duplicate"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																				type: "button",
																				onClick: () => deleteTemplate(selectedTemplateId),
																				className: "rounded-[8px] border border-[#FECACA] px-3 py-2 text-sm text-[#B91C1C]",
																				children: "Delete"
																			})]
																		})
																	]
																})
															})]
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: `${AI_WORKSPACE_SUBTLE}`,
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center justify-between",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center gap-3",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "h-12 w-12 rounded-md overflow-hidden bg-[#F8FAFB] flex items-center justify-center",
																			children: quoteTemplates.find((q) => q.id === selectedTemplateId)?.companyLogo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																				src: quoteTemplates.find((q) => q.id === selectedTemplateId).companyLogo,
																				alt: "logo",
																				className: "h-full w-full object-cover"
																			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "text-xs text-[#94A3B8]",
																				children: "Logo"
																			})
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-sm font-semibold",
																			children: quoteTemplates.find((q) => q.id === selectedTemplateId)?.companyName
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-xs text-[#64748B]",
																			children: quoteTemplates.find((q) => q.id === selectedTemplateId)?.header
																		})] })]
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "text-sm text-[#6B7280]",
																		children: quoteTemplates.find((q) => q.id === selectedTemplateId)?.currency
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mt-4 border-t pt-4",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																		className: "text-sm text-[#475569]",
																		children: ["Item lines would appear here in a real quote. Tax: ", quoteTemplates.find((q) => q.id === selectedTemplateId)?.tax]
																	})
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-6 border-t pt-4",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm text-[#64748B]",
																		children: "Terms"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-1 text-sm text-[#475569]",
																		children: quoteTemplates.find((q) => q.id === selectedTemplateId)?.terms
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-6 flex items-center justify-between",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold",
																		children: quoteTemplates.find((q) => q.id === selectedTemplateId)?.signature
																	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		type: "button",
																		className: "rounded-[10px] bg-white border border-[#E5E7EB] px-3 py-2 text-sm",
																		children: "Preview"
																	}) })]
																})
															]
														}) })]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-[16px] border border-[#E5E7EB] bg-white p-6",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mb-6",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "overflow-x-auto pb-1 custom-scrollbar",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "flex min-w-max items-center gap-3 px-1 py-1",
																	children: [
																		{
																			label: "Products",
																			value: "Products & Services"
																		},
																		{
																			label: "Services",
																			value: "Pricing"
																		},
																		{
																			label: "Inventory",
																			value: "Availability"
																		},
																		{
																			label: "Review",
																			value: "Review"
																		}
																	].map((lesson, index) => {
																		const selectedIndex = [
																			"Products & Services",
																			"Pricing",
																			"Availability",
																			"Review"
																		].indexOf(catalogueSubsection);
																		const isActive = selectedIndex === index;
																		const isCompleted = selectedIndex >= 0 && index < selectedIndex;
																		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																			type: "button",
																			onClick: () => setCatalogueSubsection(lesson.value),
																			className: `inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${isActive ? "border-[#22C55E] bg-[#ECFDF5] text-[#166534] shadow-sm" : isCompleted ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#86EFAC] hover:text-[#111827]"}`,
																			children: [isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A] text-[11px] text-white",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
																			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: `flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isCompleted ? "bg-[#22C55E] text-white" : isActive ? "bg-[#111827] text-white" : "bg-[#F8FAFC] text-[#64748B]"}`,
																				children: isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																					className: "text-[11px]",
																					children: index + 1
																				})
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lesson.label })]
																		}, lesson.label);
																	})
																})
															}), catalogueSubsection === "Pricing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-wrap items-start justify-between gap-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Services"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-1 text-xs text-[#6B7280]",
																	children: "Help your AI understand your service offerings and how customers can book them."
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "font-semibold",
																			children: "Est."
																		}),
																		" ",
																		catalogProducts.length > 0 ? "In progress" : "Not started"
																	]
																})]
															}) : catalogueSubsection === "Availability" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-wrap items-start justify-between gap-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Inventory management"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-1 text-xs text-[#64748B]",
																	children: "Set stock levels, warehouse locations, and inventory status for each product."
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "font-semibold",
																			children: "Est."
																		}),
																		" ",
																		catalogProducts.length > 0 ? "In progress" : "Not started"
																	]
																})]
															}) : catalogueSubsection === "Review" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-wrap items-start justify-between gap-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Review"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-1 text-xs text-[#6B7280]",
																	children: "Verify your catalogue before your AI starts recommending products."
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "font-semibold",
																			children: "Est."
																		}),
																		" ",
																		catalogProducts.length > 0 ? "Almost ready" : "Needs setup"
																	]
																})]
															}) : catalogueSubsection === "Categories" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-wrap items-start justify-between gap-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Categories"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-1 text-xs text-[#6B7280]",
																	children: "Organize your catalogue so your AI can recommend accurately."
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "font-semibold",
																			children: "Est."
																		}),
																		" ",
																		catalogProducts.length > 0 ? "In progress" : "Not started"
																	]
																})]
															}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-wrap items-start justify-between gap-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Products"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-1 text-xs text-[#6B7280]",
																	children: "Teach your AI what you sell with full product, pricing, and availability details."
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-[10px] border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "font-semibold",
																			children: "Est."
																		}),
																		" ",
																		catalogProducts.length > 0 ? "In progress" : "Not started"
																	]
																})]
															})]
														}), catalogueSubsection === "Products & Services" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[24px] border border-[#E5E7EB] bg-gradient-to-br from-[#F8FAFC] via-white to-[#ECFDF5] p-5 shadow-sm",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-[11px] font-semibold uppercase tracking-[0.24em] text-[#64748B]",
																		children: "Catalogue status"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-2 text-xl font-semibold text-[#111827]",
																		children: "Catalogue Health"
																	})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "rounded-full border border-[#D1FAE5] bg-[#F0FDF4] px-3 py-1.5 text-sm font-semibold text-[#166534]",
																		children: [catalogueHealthMetrics.reduce((sum, item) => sum + item.percentage, 0) / catalogueHealthMetrics.length, "%"]
																	})]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4",
																	children: catalogueHealthMetrics.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex items-center justify-between gap-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-sm font-semibold text-[#111827]",
																					children: item.label
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																					className: "rounded-full bg-[#F3F4F6] px-2 py-1 text-[11px] font-medium text-[#475569]",
																					children: [item.percentage, "%"]
																				})]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "mt-4 space-y-2 text-sm text-[#475569]",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex items-center justify-between",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Completed" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																							className: "font-semibold text-[#111827]",
																							children: item.completed
																						})]
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex items-center justify-between",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Missing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																							className: "font-semibold text-[#111827]",
																							children: item.missing
																						})]
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex items-center justify-between",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Percentage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																							className: "font-semibold text-[#111827]",
																							children: [item.percentage, "%"]
																						})]
																					})
																				]
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "mt-4 h-2.5 overflow-hidden rounded-full bg-[#E5E7EB]",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																					className: "h-full rounded-full bg-gradient-to-r from-[#22C55E] to-[#4ADE80]",
																					style: { width: `${item.percentage}%` }
																				})
																			})
																		]
																	}, item.label))
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
																id: "products",
																className: "rounded-[28px] border border-[#E8EDF3] bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.05),0_18px_40px_rgba(15,23,42,0.04)] sm:p-7",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-[#64748B]",
																				children: "Panel 2"
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "mt-2 text-2xl font-semibold text-[#111827]",
																				children: "Products"
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "mt-3 max-w-2xl text-sm leading-6 text-[#475569]",
																				children: "Manage your product catalogue with quick actions, search, and a modern product list."
																			})
																		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																				type: "button",
																				onClick: () => setShowProductTypeDialog(true),
																				className: "inline-flex items-center justify-center rounded-[14px] bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(17,24,39,0.18)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#1F2937] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7F3D0] focus-visible:ring-offset-2",
																				children: "Add Product"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																				type: "button",
																				onClick: () => setCatalogueSubsection("Imports"),
																				className: "inline-flex items-center justify-center rounded-[14px] border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm font-semibold text-[#111827] shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8FAFB] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7D2FE] focus-visible:ring-offset-2",
																				children: "Import"
																			})]
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-6 grid gap-4 lg:grid-cols-[1fr_auto] items-start",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFB] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "min-w-[240px] flex-1",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																						className: "text-xs font-semibold uppercase tracking-[0.24em] text-[#64748B]",
																						htmlFor: "product-search",
																						children: "Search products"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																						id: "product-search",
																						value: productSearch,
																						onChange: (e) => setProductSearch(e.target.value),
																						placeholder: "Search products, categories, or descriptions",
																						className: "mt-2 h-12 w-full rounded-[16px] border border-[#E2E8F0] bg-white px-4 text-sm text-[#111827] shadow-sm outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-2 focus:ring-[#DCFCE7] focus:ring-offset-0"
																					})]
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "rounded-[16px] border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-semibold text-[#111827] shadow-sm",
																					children: [catalogProducts.length, " products"]
																				})]
																			})
																		})
																	}),
																	(() => {
																		if (catalogProducts.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "mt-6 rounded-[24px] border border-dashed border-[#CBD5E1] bg-[#F8FAFB] p-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																					className: "mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-[28px] bg-white shadow-[0_6px_20px_rgba(15,23,42,0.06)] ring-1 ring-[#E2E8F0]",
																					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#DBEAFE] text-[#1D4ED8] shadow-inner",
																						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
																							xmlns: "http://www.w3.org/2000/svg",
																							className: "h-10 w-10",
																							fill: "none",
																							viewBox: "0 0 24 24",
																							stroke: "currentColor",
																							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																								strokeLinecap: "round",
																								strokeLinejoin: "round",
																								strokeWidth: 1.5,
																								d: "M4 6.75h16M7.5 10.75h9M6 15.75h12"
																							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																								strokeLinecap: "round",
																								strokeLinejoin: "round",
																								strokeWidth: 1.5,
																								d: "M8.5 5.75 12 9.25l3.5-3.5"
																							})]
																						})
																					})
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-2xl font-semibold text-[#111827]",
																					children: "No Products Yet"
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "mx-auto mt-3 max-w-xl text-sm leading-6 text-[#475569]",
																					children: "Add your first product so your AI can recommend it."
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																						onClick: () => setShowProductTypeDialog(true),
																						className: "rounded-[14px] bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(15,23,42,0.16)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7F3D0] focus-visible:ring-offset-2",
																						children: "Add Product"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																						onClick: () => setCatalogueSubsection("Imports"),
																						className: "rounded-[14px] border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#334155] shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8FAFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7D2FE] focus-visible:ring-offset-2",
																						children: "Import catalogue"
																					})]
																				})
																			]
																		});
																		const query = productSearch.trim().toLowerCase();
																		const filtered = catalogProducts.filter((p) => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || (p.description || "").toLowerCase().includes(query));
																		if (filtered.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "mt-6 rounded-[22px] border border-[#E2E8F0] bg-[#F8FAFB] p-6 text-center shadow-sm",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																					className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E2E8F0] text-[#475569]",
																					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
																						xmlns: "http://www.w3.org/2000/svg",
																						className: "h-5 w-5",
																						fill: "none",
																						viewBox: "0 0 24 24",
																						stroke: "currentColor",
																						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																							strokeLinecap: "round",
																							strokeLinejoin: "round",
																							strokeWidth: 1.8,
																							d: "M21 21l-4.35-4.35m1.15-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
																						})
																					})
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-base font-semibold text-[#111827]",
																					children: "No products found"
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "mt-2 text-sm text-[#64748B]",
																					children: "Try another search or add a new product."
																				})
																			]
																		});
																		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3",
																			children: filtered.map((item) => {
																				const isAvailable = item.availability === "In stock" || item.availability === "Available";
																				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
																					className: "group flex h-full min-w-0 w-full flex-col overflow-hidden rounded-[24px] border border-[#E7E5E4] bg-[#FDFDFC] shadow-[0_1px_3px_rgba(15,23,42,0.06),0_18px_36px_rgba(15,23,42,0.06)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.10)] focus-within:ring-2 focus-within:ring-[#A7F3D0] focus-within:ring-offset-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "relative overflow-hidden bg-[#F5F5F4]",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																							src: item.image,
																							alt: item.name,
																							className: "aspect-[5/4] h-full w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																							className: `absolute right-4 top-4 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] ${isAvailable ? "border-[#D1FAE5] bg-[#ECFDF5] text-[#166534]" : "border-[#FDE68A] bg-[#FFFBEB] text-[#B45309]"}`,
																							children: item.availability
																						})]
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																						className: "flex flex-1 flex-col p-5",
																						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																							className: "space-y-3",
																							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																								className: "flex items-center justify-between gap-3",
																								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																									className: "text-xl font-semibold leading-6 text-[#111827]",
																									children: item.name
																								})
																							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																								className: "flex items-center justify-between gap-3 text-sm text-[#6B7280]",
																								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																									className: "font-medium text-[#475569]",
																									children: item.category
																								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																									className: "text-base font-semibold text-[#111827]",
																									children: item.price
																								})]
																							})]
																						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																							className: "mt-5 flex items-center gap-2.5 pt-4",
																							children: [
																								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																									type: "button",
																									onClick: (e) => {
																										e.stopPropagation();
																										openProductDrawer(item.id);
																									},
																									className: "inline-flex flex-1 items-center justify-center rounded-[12px] bg-[#111827] px-3.5 py-2.5 text-sm font-medium text-white shadow-[0_4px_12px_rgba(17,24,39,0.16)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#1F2937] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7F3D0] focus-visible:ring-offset-2",
																									children: "Edit"
																								}),
																								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																									type: "button",
																									onClick: (e) => {
																										e.stopPropagation();
																										deleteCatalogProduct(item.id);
																									},
																									className: "inline-flex items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm font-medium text-[#111827] shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8FAFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7D2FE] focus-visible:ring-offset-2",
																									children: "Delete"
																								}),
																								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																									type: "button",
																									onClick: (e) => {
																										e.stopPropagation();
																										openProductDrawer(item.id);
																									},
																									className: "inline-flex items-center justify-center rounded-[12px] border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm font-medium text-[#111827] shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8FAFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7D2FE] focus-visible:ring-offset-2",
																									children: "More"
																								})
																							]
																						})]
																					})]
																				}, item.id);
																			})
																		});
																	})()
																]
															})]
														}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "space-y-4",
															children: (() => {
																if (catalogProducts.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-[24px] border border-dashed border-[#CBD5E1] bg-[#F8FAFB] p-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-[28px] bg-white shadow-[0_6px_20px_rgba(15,23,42,0.06)] ring-1 ring-[#E2E8F0]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#DBEAFE] text-[#1D4ED8] shadow-inner",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
																					xmlns: "http://www.w3.org/2000/svg",
																					className: "h-10 w-10",
																					fill: "none",
																					viewBox: "0 0 24 24",
																					stroke: "currentColor",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																						strokeLinecap: "round",
																						strokeLinejoin: "round",
																						strokeWidth: 1.5,
																						d: "M4 6.75h16M7.5 10.75h9M6 15.75h12"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																						strokeLinecap: "round",
																						strokeLinejoin: "round",
																						strokeWidth: 1.5,
																						d: "M8.5 5.75 12 9.25l3.5-3.5"
																					})]
																				})
																			})
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-2xl font-semibold text-[#111827]",
																			children: "No products yet"
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mx-auto mt-3 max-w-xl text-sm leading-6 text-[#475569]",
																			children: "Add your products and services so your AI can recommend them to customers."
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																				onClick: () => setShowProductTypeDialog(true),
																				className: "rounded-[14px] bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(15,23,42,0.16)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7F3D0] focus-visible:ring-offset-2",
																				children: "Add product"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																				onClick: () => setCatalogueSubsection("Imports"),
																				className: "rounded-[14px] border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#334155] shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#F8FAFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7D2FE] focus-visible:ring-offset-2",
																				children: "Import catalogue"
																			})]
																		})
																	]
																});
																const query = productSearch.trim().toLowerCase();
																const filtered = catalogProducts.filter((p) => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || (p.description || "").toLowerCase().includes(query));
																if (filtered.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-[22px] border border-[#E2E8F0] bg-[#F8FAFB] p-6 text-center shadow-sm",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#E2E8F0] text-[#475569]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
																				xmlns: "http://www.w3.org/2000/svg",
																				className: "h-5 w-5",
																				fill: "none",
																				viewBox: "0 0 24 24",
																				stroke: "currentColor",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
																					strokeLinecap: "round",
																					strokeLinejoin: "round",
																					strokeWidth: 1.8,
																					d: "M21 21l-4.35-4.35m1.15-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
																				})
																			})
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-base font-semibold text-[#111827]",
																			children: "No products found"
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-2 text-sm text-[#64748B]",
																			children: "Use \"Add Product\" to create one."
																		})
																	]
																});
																return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "grid gap-4 items-stretch",
																	style: { gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))" },
																	children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "group h-full min-w-0 w-full overflow-hidden rounded-[18px] border border-[#EEF2F6] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06),0_12px_22px_rgba(15,23,42,0.05)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.10)]",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "aspect-[4/3] w-full overflow-hidden bg-[#F8FAFB]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																				src: item.image,
																				alt: item.name,
																				className: "h-full w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
																			})
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex flex-col gap-2 p-3",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				className: "min-h-0",
																				children: [
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "text-sm font-semibold text-[#111827] leading-5 line-clamp-2",
																						children: item.name
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "mt-1 text-[11px] text-[#6B7280] uppercase tracking-[0.12em]",
																						children: item.category
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "mt-2",
																						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																							className: "text-sm font-semibold text-[#111827]",
																							children: item.price
																						})
																					}),
																					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: `mt-2 inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${item.availability === "In stock" || item.availability === "Available" ? "border-[#D1FAE5] bg-[#ECFDF5] text-[#065F46]" : "border-[#FDE8C7] bg-[#FFFBEB] text-[#B45309]"}`,
																						children: item.availability
																					})
																				]
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				className: "mt-auto pt-2",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																					type: "button",
																					className: "w-full rounded-[10px] border border-[#E5E7EB] bg-white px-2.5 py-2 text-sm font-semibold text-[#111827] shadow-sm transition-all duration-200 ease-out hover:bg-[#F8FAFB] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7D2FE] focus-visible:ring-offset-2",
																					children: "Edit"
																				})
																			})]
																		})]
																	}, item.id))
																});
															})()
														})]
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
												className: "hidden xl:block rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] p-4 xl:sticky xl:top-6 xl:min-w-[280px]",
												children: catalogueSubsection === "Review" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-4",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold",
															children: "Next steps"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm text-[#64748B]",
															children: "You're ready — continue to Sales Playbooks to define selling flows."
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-3",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => setActiveWorkspaceSection("Sales Playbooks"),
																className: "w-full rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white",
																children: "Continue"
															})
														})
													]
												}) : catalogueSubsection === "Categories" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold",
														children: "Category tips"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm text-[#64748B]",
														children: "Keep categories short and consistent so products are easier to find and recommend."
													})]
												}) : null
											})]
										})
									}),
									activeWorkspaceSection === "Sales Playbooks" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-4 rounded-[24px] border border-[#E5E7EB] bg-white p-5 sm:flex-row sm:items-center sm:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#111827]",
												children: "Sales playbooks"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-[#6B7280]",
												children: "Define how your AI Employee sells in customer conversations."
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex gap-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: addPlaybook,
													className: "rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white",
													children: "Create Playbook"
												})
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
											})() : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-[12px] border border-[#EEF2F6] bg-white p-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm text-[#64748B]",
													children: "Select a playbook to edit or create a new one."
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex gap-2",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => {
																if (playbooks[0]) setEditingPlaybookId(playbooks[0].id);
															},
															className: "rounded-[8px] border border-[#E5E7EB] px-3 py-2 text-sm",
															children: "Edit first"
														})
													})
												})]
											}) })]
										})]
									}),
									activeWorkspaceSection === "Skills" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-4 rounded-[24px] border border-[#E5E7EB] bg-white p-5 sm:flex-row sm:items-center sm:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#111827]",
												children: "Skills"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-[#6B7280]",
												children: "Choose the actions your AI Employee can perform."
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setSkills(skills.map((s) => ({
														...s,
														enabled: true,
														status: "Active"
													}))),
													className: "rounded-[10px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white",
													children: "Enable All"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setSkills(skills.map((s) => ({
														...s,
														enabled: false,
														status: "Disabled"
													}))),
													className: "rounded-[10px] border border-[#E5E7EB] px-3 py-2 text-sm font-semibold",
													children: "Disable All"
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
											children: skills.map((sk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-12 w-12 rounded-md bg-[#F8FAFB] flex items-center justify-center text-2xl",
													children: sk.icon
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-start justify-between gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold",
															children: sk.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-xs text-[#64748B]",
															children: sk.description
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-right",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "inline-flex items-center gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: `text-xs font-medium ${sk.status === "Active" ? "text-[#16A34A]" : sk.status === "Idle" ? "text-[#F59E0B]" : "text-[#B91C1C]"}`,
																	children: sk.status
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "relative inline-flex items-center cursor-pointer",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "checkbox",
																			checked: sk.enabled,
																			onChange: () => toggleSkill(sk.id),
																			className: "sr-only peer"
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-11 h-6 bg-[#E5E7EB] peer-checked:bg-[#22C55E] rounded-full peer-focus:ring-2 peer-focus:ring-[#22C55E] transition-colors" }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full peer-checked:translate-x-5 transform transition-transform" })
																	]
																})]
															})
														})]
													})
												})]
											}, sk.id))
										})]
									}),
									activeWorkspaceSection === "Policies" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-[24px] border border-[#E5E7EB] bg-white p-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-[#111827]",
												children: "Policies"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm text-[#6B7280]",
												children: "Set what your AI Employee can and cannot do for your business."
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-2",
											children: policySections.map((sec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-[16px] border border-[#E5E7EB] bg-white",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => togglePolicy(sec.id),
													className: "flex w-full items-center justify-between px-5 py-4 text-left",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold",
														children: sec.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-[#94A3B8]",
														children: "Click to expand and edit"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs text-[#64748B]",
														children: sec.expanded ? "Collapse" : "Expand"
													})]
												}), sec.expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "px-4 pb-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
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
													})]
												})]
											}, sec.id))
										})]
									}),
									activeWorkspaceSection === "Integrations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#166534]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plug, { className: "h-5 w-5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-lg font-semibold text-[#111827]",
												children: "Connect your AI’s tools"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm leading-6 text-[#64748B]",
												children: "Give your AI Employee access to the systems it needs to serve customers well."
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 flex flex-wrap items-center gap-3 rounded-xl border border-[#FEF3C7] bg-[#FFFBEB] p-4 text-sm text-[#92400E]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex-1",
													children: "Some tools still need to be connected."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setSelected("Integrations"),
													className: "rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#92400E] shadow-sm transition hover:bg-[#FEF3C7]",
													children: "Manage integrations"
												})
											]
										})]
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
										className: "rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-5 shadow-sm",
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
										className: "rounded-[24px] border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium text-[#6B7280]",
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
												className: "rounded-[24px] bg-[#F9FAFB] p-4 text-sm text-[#6B7280]",
												children: "This chart shows weekly engagement across your WhatsApp campaign messages."
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "space-y-6 rounded-[24px] border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-[#111827]",
											children: "Top Questions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 space-y-3",
											children: ANALYTICS_TOP_QUESTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-4",
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
												className: "flex items-center justify-between rounded-[24px] border border-[#E5E7EB] bg-[#F9FAFB] p-4",
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
						selected === "Integrations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full overflow-y-auto overflow-x-hidden space-y-6 pr-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `${CARD}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-between",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]",
												children: "Integrations"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-2 text-2xl font-semibold text-[#111827]",
												children: "Integrations"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-6 text-[#6B7280] max-w-2xl",
												children: "Connect the systems your AI Employee can access across your business."
											})
										] })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `${CARD} flex items-center justify-between gap-6`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [(() => {
												const totalIntegrations = INTEGRATION_SECTIONS.reduce((a, s) => a + s.items.length, 0);
												const connectedCount = Object.values(integrationStates).filter((v) => v.status === "Connected").length;
												const percent = totalIntegrations === 0 ? 0 : Math.round(connectedCount / totalIntegrations * 100);
												const radius = 36;
												const circumference = 2 * Math.PI * radius;
												const offset = Math.max(0, circumference * (1 - percent / 100));
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
														width: "88",
														height: "88",
														viewBox: "0 0 88 88",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
															transform: "translate(44,44)",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																	r: radius,
																	stroke: "#F3F4F6",
																	strokeWidth: "8",
																	fill: "none"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																	r: radius,
																	stroke: "#22C55E",
																	strokeWidth: "8",
																	strokeLinecap: "round",
																	fill: "none",
																	strokeDasharray: circumference,
																	strokeDashoffset: offset,
																	transform: "rotate(-90)",
																	style: { transition: "stroke-dashoffset 300ms ease-out" }
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
																	x: "0",
																	y: "4",
																	textAnchor: "middle",
																	className: "text-[20px] font-semibold",
																	fill: "#0F172A",
																	children: [percent, "%"]
																})
															]
														})]
													})
												});
											})(), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold",
													children: "AI Employee Readiness"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-[#6B7280]",
													children: "Connected integrations and capability readiness"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-3 grid grid-cols-4 gap-3 text-sm",
													children: (() => {
														return [
															{
																label: "Communication",
																reqs: [
																	"whatsapp",
																	"facebook",
																	"instagram",
																	"telegram",
																	"email"
																]
															},
															{
																label: "Payments",
																reqs: [
																	"mpesa",
																	"stripe",
																	"paypal",
																	"flutterwave"
																]
															},
															{
																label: "Knowledge",
																reqs: [
																	"gdrive",
																	"dropbox",
																	"onedrive"
																]
															},
															{
																label: "Scheduling",
																reqs: ["google_calendar", "outlook"]
															}
														].map((m) => {
															const connected = m.reqs.filter((r) => (integrationStates[r] || { status: "Not Connected" }).status === "Connected").length;
															const status = connected === 0 ? "Missing" : connected < m.reqs.length ? "Partial" : "Ready";
															const statusClass = status === "Ready" ? "text-[#16A34A]" : status === "Partial" ? "text-[#B45309]" : "text-[#B91C1C]";
															return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-col items-start",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-xs text-[#6B7280]",
																	children: m.label
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: `text-sm font-semibold ${statusClass}`,
																	children: status
																})]
															}, m.label);
														});
													})()
												})
											] })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "ml-auto text-right",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm text-[#6B7280]",
												children: "Connected integrations"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-2xl font-semibold",
												children: [
													Object.values(integrationStates).filter((v) => v.status === "Connected").length,
													" / ",
													INTEGRATION_SECTIONS.reduce((a, s) => a + s.items.length, 0)
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-2 text-sm text-[#6B7280]",
												children: "AI capabilities unlocked"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-2xl font-semibold",
												children: CAPABILITY_FEATURES.filter((cap) => cap.requires.every((r) => (integrationStates[r] || { status: "Not Connected" }).status === "Connected")).length
											})
										]
									})]
								}),
								INTEGRATION_SECTIONS.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold text-[#6B7280] mb-3",
									children: section.section
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
									children: section.items.map((it) => {
										const state = integrationStates[it.id] || { status: it.status };
										const isConnected = state.status === "Connected";
										const isComing = state.status === "Coming Soon" || state.status === "ComingSoon";
										const isDisconnected = !isConnected && !isComing;
										const badgeClass = isConnected ? "border-[#A7F3D0] bg-[#ECFDF5] text-[#166534]" : isComing ? "border-[#E9D5FF] bg-[#F5F3FF] text-[#6D28D9]" : "border-[#F3F4F6] bg-[#F3F4F6] text-[#6B7280]";
										const iconWrapClass = isConnected ? "h-12 w-12 rounded-[12px] bg-[#ECFDF5] flex items-center justify-center text-[#166534]" : isComing ? "h-12 w-12 rounded-[12px] bg-[#F9FAFB] flex items-center justify-center text-[#94A3B8] opacity-80" : "h-12 w-12 rounded-[12px] bg-[#F3F4F6] flex items-center justify-center text-[#9CA3AF]";
										const cardStateClass = isComing ? "opacity-70 grayscale" : "opacity-100";
										const onConnect = () => {
											if (isComing) return;
											setConnectModalId(it.id);
											setConnectForm({
												email: "",
												businessName: "",
												phone: ""
											});
											setConnectModalOpen(true);
										};
										const onManage = () => {
											openDrawer(it.id);
										};
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `${CARD} flex flex-col justify-between ${cardStateClass} transition-all duration-300 ease-out transform-gpu`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: iconWrapClass,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.Icon, { className: `h-6 w-6 ${isDisconnected ? "opacity-60" : ""}` })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: `text-sm font-semibold ${isComing ? "text-[#6B7280]" : "text-[#111827]"}`,
															children: [" ", it.name]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-sm text-[#6B7280]",
															children: it.description
														}),
														isConnected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-2 flex items-center gap-3 text-sm text-[#6B7280]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "inline-flex items-center gap-2 text-[13px] text-[#374151]",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#16A34A]" }),
																	" ",
																	state.accountName
																]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-[12px] text-[#94A3B8]",
																children: ["Last synced ", state.lastSynced]
															})]
														})
													] })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `${BADGE} ${badgeClass} ${isComing ? "text-[11px]" : ""}`,
													children: isConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-[#16A34A]" }), " Connected"]
													}) : isComing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Coming Soon" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Disconnected" })
												}) })]
											}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-6",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "transition-all duration-250 ease-out transform",
													children: [
														isConnected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: onManage,
															className: `${BUTTON_SECONDARY} w-full`,
															children: "Manage"
														}) }),
														isDisconnected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: onConnect,
															className: `${BUTTON_PRIMARY} w-full`,
															children: "Connect"
														}),
														isComing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															className: `${BUTTON_TERTIARY} w-full opacity-60 pointer-events-none`,
															children: "Coming Soon"
														})
													]
												})
											})]
										}, it.id);
									})
								})] }, section.section)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-semibold text-[#6B7280] mb-3",
										children: "What your AI Employee can do"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
										children: CAPABILITY_FEATURES.map((cap) => {
											const missing = cap.requires.filter((r) => (integrationStates[r] || { status: "Not Connected" }).status !== "Connected");
											const enabled = missing.length === 0;
											const badgeClass = enabled ? "border-[#A7F3D0] bg-[#ECFDF5] text-[#166534]" : "border-[#F3F4F6] bg-[#F3F4F6] text-[#6B7280]";
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `${AI_WORKSPACE_SUBTLE}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-semibold text-[#111827]",
														children: cap.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "mt-1 text-sm text-[#6B7280]",
														children: ["Requires: ", cap.requires.map((r) => getIntegrationName(r)).join(", ")]
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `${BADGE} ${badgeClass}`,
														children: enabled ? "Enabled" : "Disabled"
													}) })]
												}), !enabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-4 text-sm text-[#374151]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-medium mb-2",
														children: "Missing integrations"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
														className: "list-none space-y-2",
														children: missing.map((mid) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
															className: "flex items-center gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#FEE2E2] text-[#B91C1C]",
																children: "×"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: getIntegrationName(mid) })]
														}, mid))
													})]
												})]
											}, cap.id);
										})
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
																for (const s of INTEGRATION_SECTIONS) {
																	const found = s.items.find((i) => i.id === id);
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
														className: "flex items-center justify-between",
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
								productDrawerOpen && selectedProduct && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "fixed inset-0 z-50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 bg-black/20 backdrop-blur-sm",
										onClick: closeProductDrawer
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
										className: "absolute right-0 top-0 h-full w-full max-w-[560px] bg-white shadow-2xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex h-full flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between border-b border-[#E5E7EB] px-6 py-5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm uppercase tracking-[0.24em] text-[#6B7280]",
															children: "Product details"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
															className: "mt-2 text-2xl font-semibold text-[#111827]",
															children: selectedProduct.name
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 text-sm text-[#64748B]",
															children: "Manage this item without leaving your catalogue workspace."
														})
													] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: closeProductDrawer,
														className: "rounded-full border border-[#E5E7EB] p-2 text-[#6B7280] hover:bg-[#F3F4F6]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "px-6 py-5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
														value: productDrawerTab,
														onValueChange: (value) => setProductDrawerTab(value),
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
															className: "space-x-2",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
																	value: "general",
																	children: "General"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
																	value: "pricing",
																	children: "Pricing"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
																	value: "media",
																	children: "Media"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
																	value: "inventory",
																	children: "Inventory"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
																	value: "ai-knowledge",
																	children: "AI Knowledge"
																})
															]
														})
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1 overflow-y-auto px-6 pb-6",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
															value: "general",
															className: "space-y-5",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Name"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	value: selectedProduct.name,
																	onChange: (e) => updateCatalogProductField(selectedProduct.id, "name", e.target.value),
																	className: "mt-2 w-full rounded-[16px] border border-[#E5E7EB] px-4 py-3 text-sm"
																})] }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Category"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	value: selectedProduct.category,
																	onChange: (e) => updateCatalogProductField(selectedProduct.id, "category", e.target.value),
																	className: "mt-2 w-full rounded-[16px] border border-[#E5E7EB] px-4 py-3 text-sm"
																})] }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Description"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
																	value: selectedProduct.description,
																	onChange: (e) => updateCatalogProductField(selectedProduct.id, "description", e.target.value),
																	className: "mt-2 w-full rounded-[16px] border border-[#E5E7EB] px-4 py-3 text-sm"
																})] }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Availability"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
																	value: selectedProduct.availability,
																	onChange: (e) => updateCatalogProductField(selectedProduct.id, "availability", e.target.value),
																	className: "mt-2 w-full rounded-[16px] border border-[#E5E7EB] px-4 py-3 text-sm",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Available" }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "In stock" }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Out of stock" }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "By appointment" })
																	]
																})] })
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
															value: "pricing",
															className: "space-y-5",
															children: renderPricingEditor()
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
															value: "media",
															className: "space-y-5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFB] p-4",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "aspect-[5/3] overflow-hidden rounded-[16px] bg-white",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																		src: selectedProduct.image,
																		alt: selectedProduct.name,
																		className: "h-full w-full object-cover"
																	})
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "mt-4 flex items-center justify-between gap-4",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm font-semibold text-[#111827]",
																		children: "Cover image"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-sm text-[#64748B]",
																		children: "Upload a representative image for this product."
																	})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																		className: "inline-flex cursor-pointer items-center rounded-[16px] bg-[#111827] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#111827]/90",
																		children: ["Upload", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "file",
																			accept: "image/*",
																			className: "sr-only",
																			onChange: (e) => handleProductImageUpload(e.target.files)
																		})]
																	})]
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "flex items-center justify-between gap-3",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: "Product media library"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-sm text-[#64748B]",
																			children: "Upload, preview, and manage supporting files for this product."
																		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => productMediaFileInputRef.current?.click(),
																			className: "rounded-[12px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white",
																			children: "Upload"
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		ref: productMediaFileInputRef,
																		type: "file",
																		accept: "image/*,video/*,.pdf",
																		multiple: true,
																		className: "hidden",
																		onChange: (e) => {
																			handleFiles(e.target.files);
																			e.currentTarget.value = "";
																		}
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		onDrop,
																		onDragOver,
																		className: "mt-4 rounded-[16px] border-2 border-dashed border-[#E5E7EB] bg-[#F8FAFB] p-5 text-center",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-sm font-semibold text-[#111827]",
																			children: "Drag & drop media files"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "mt-2 text-sm text-[#64748B]",
																			children: "Images, videos, and other resources for your product showcase."
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "mt-5 space-y-3",
																		children: mediaAssets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "rounded-[12px] border border-[#E5E7EB] bg-[#F8FAFB] p-4 text-sm text-[#64748B]",
																			children: "No media uploaded yet."
																		}) : mediaAssets.map((asset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center gap-3 rounded-[16px] border border-[#E5E7EB] bg-white p-3",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																					className: "h-16 w-16 overflow-hidden rounded-[12px] bg-[#F8FAFB]",
																					children: asset.mime?.startsWith("image") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																						src: asset.url,
																						alt: asset.name,
																						className: "h-full w-full object-cover"
																					}) : asset.mime?.startsWith("video") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
																						src: asset.url,
																						className: "h-full w-full object-cover",
																						muted: true,
																						playsInline: true
																					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																						className: "flex h-full w-full items-center justify-center text-[10px] font-semibold uppercase text-[#64748B]",
																						children: "File"
																					})
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "min-w-0 flex-1",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																						className: "truncate text-sm font-semibold text-[#111827]",
																						children: asset.name
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																						className: "mt-1 text-xs text-[#64748B]",
																						children: [
																							asset.fileType,
																							" • ",
																							asset.size
																						]
																					})]
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																					className: "flex items-center gap-2",
																					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																						type: "button",
																						onClick: () => viewAsset(asset),
																						className: "rounded-[8px] border border-[#E5E7EB] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#111827]",
																						children: "Preview"
																					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																						type: "button",
																						onClick: () => deleteAsset(asset.id),
																						className: "rounded-[8px] border border-[#FECACA] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#B91C1C]",
																						children: "Delete"
																					})]
																				})
																			]
																		}, asset.id))
																	})
																]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
															value: "inventory",
															className: "space-y-5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "grid gap-4 sm:grid-cols-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Current stock"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "number",
																	value: selectedProduct.currentStock ?? 0,
																	onChange: (e) => updateCatalogProductField(selectedProduct.id, "currentStock", Number(e.target.value)),
																	className: "mt-2 w-full rounded-[16px] border border-[#E5E7EB] px-4 py-3 text-sm"
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Stock status"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
																	value: selectedProduct.stockStatus || "In stock",
																	onChange: (e) => updateCatalogProductField(selectedProduct.id, "stockStatus", e.target.value),
																	className: "mt-2 w-full rounded-[16px] border border-[#E5E7EB] px-4 py-3 text-sm",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "In stock" }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Low stock" }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Out of stock" }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Backordered" })
																	]
																})] })]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "grid gap-4 sm:grid-cols-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Low stock threshold"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "number",
																	value: selectedProduct.lowStockThreshold ?? 10,
																	onChange: (e) => updateCatalogProductField(selectedProduct.id, "lowStockThreshold", Number(e.target.value)),
																	className: "mt-2 w-full rounded-[16px] border border-[#E5E7EB] px-4 py-3 text-sm"
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Warehouse / branch"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	value: selectedProduct.warehouseLocation || "Main warehouse",
																	onChange: (e) => updateCatalogProductField(selectedProduct.id, "warehouseLocation", e.target.value),
																	className: "mt-2 w-full rounded-[16px] border border-[#E5E7EB] px-4 py-3 text-sm"
																})] })]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
															value: "ai-knowledge",
															className: "space-y-5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "AI-ready summary"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
																	value: selectedProduct.description,
																	onChange: (e) => updateCatalogProductField(selectedProduct.id, "description", e.target.value),
																	className: "mt-2 w-full rounded-[16px] border border-[#E5E7EB] px-4 py-3 text-sm"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-2 text-sm text-[#64748B]",
																	children: "This text helps your AI understand the product for customer conversations."
																})
															] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-[16px] border border-[#E5E7EB] bg-[#F8FAFB] p-4",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-sm font-semibold text-[#111827]",
																	children: "Knowledge insights"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-2 text-sm text-[#64748B]",
																	children: "Customers ask about pricing, availability, and delivery. Keep descriptions clear and helpful."
																})]
															})]
														})
													]
												})
											]
										})
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
var Route$6 = createFileRoute("/dashboard")({ component: Dashboard });
function Dashboard() {
	const router = useRouter();
	const authenticated = isAuthenticated();
	(0, import_react.useEffect)(() => {
		if (!authenticated) router.navigate({
			to: "/signin",
			replace: true
		});
	}, [authenticated, router]);
	if (!authenticated) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {});
}
var $$splitComponentImporter = () => import("./routes-hgChB1Oi.mjs");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var Route$4 = createFileRoute("/dashboard/settings")({ component: SettingsRoute });
function SettingsRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {});
}
var Route$3 = createFileRoute("/dashboard/integrations")({ component: IntegrationsRoute });
function IntegrationsRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {});
}
var Route$2 = createFileRoute("/dashboard/inbox")({ component: InboxRoute });
function InboxRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {});
}
var Route$1 = createFileRoute("/dashboard/customers")({ component: CustomersRoute });
function CustomersRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {});
}
var Route = createFileRoute("/dashboard/catalog")({ component: CatalogRoute });
function CatalogRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {});
}
var SigninRoute = Route$8.update({
	id: "/signin",
	path: "/signin",
	getParentRoute: () => Route$10
});
var SignUpRoute = Route$7.update({
	id: "/sign-up",
	path: "/sign-up",
	getParentRoute: () => Route$10
});
var SignInRoute = Route$9.update({
	id: "/sign-in",
	path: "/sign-in",
	getParentRoute: () => Route$10
});
var DashboardRoute = Route$6.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$10
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var DashboardSettingsRoute = Route$4.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => DashboardRoute
});
var DashboardIntegrationsRoute = Route$3.update({
	id: "/integrations",
	path: "/integrations",
	getParentRoute: () => DashboardRoute
});
var DashboardInboxRoute = Route$2.update({
	id: "/inbox",
	path: "/inbox",
	getParentRoute: () => DashboardRoute
});
var DashboardCustomersRoute = Route$1.update({
	id: "/customers",
	path: "/customers",
	getParentRoute: () => DashboardRoute
});
var DashboardRouteChildren = {
	DashboardCatalogRoute: Route.update({
		id: "/catalog",
		path: "/catalog",
		getParentRoute: () => DashboardRoute
	}),
	DashboardCustomersRoute,
	DashboardInboxRoute,
	DashboardIntegrationsRoute,
	DashboardSettingsRoute
};
var rootRouteChildren = {
	IndexRoute,
	DashboardRoute: DashboardRoute._addFileChildren(DashboardRouteChildren),
	SignInRoute,
	SignUpRoute,
	SigninRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
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
