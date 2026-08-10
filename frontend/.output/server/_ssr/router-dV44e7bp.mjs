import { n as __toESM } from "../_runtime.mjs";
import { t as sokoos_logo_default } from "./sokoos_logo-B5_i8UVb.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { F as Eye, I as EyeOff, Q as ArrowRight, W as Check } from "../_libs/lucide-react.mjs";
import { n as cn, t as DashboardLayout } from "./dashboard-layout-CKCVLYk9.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-dV44e7bp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C2j76NKe.css";
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
var Route$12 = createRootRouteWithContext()({
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
	const { queryClient } = Route$12.useRouteContext();
	const pathname = useRouter().state.location.pathname;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: pathname === "/dashboard" || pathname.startsWith("/dashboard/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
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
var Route$11 = createFileRoute("/sign-in")({ component: SignIn });
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
var Route$10 = createFileRoute("/signin")({ component: SignIn });
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
var Route$9 = createFileRoute("/sign-up")({ component: SignUp });
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
var Route$8 = createFileRoute("/dashboard")({ component: Dashboard });
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
var $$splitComponentImporter$2 = () => import("./routes-hgChB1Oi.mjs");
var Route$7 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var Route$6 = createFileRoute("/dashboard/settings")({ component: SettingsRoute });
function SettingsRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {});
}
var $$splitComponentImporter$1 = () => import("./performance-CKGlMEui.mjs");
var Route$5 = createFileRoute("/dashboard/performance")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var Route$4 = createFileRoute("/dashboard/integrations")({ component: IntegrationsRoute });
function IntegrationsRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {});
}
var Route$3 = createFileRoute("/dashboard/inbox")({ component: InboxRoute });
function InboxRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {});
}
var Route$2 = createFileRoute("/dashboard/customers")({ component: CustomersRoute });
function CustomersRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {});
}
var Route$1 = createFileRoute("/dashboard/catalog")({ component: CatalogRoute });
function CatalogRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {});
}
var $$splitComponentImporter = () => import("./ai-BNyQd7-V.mjs");
var Route = createFileRoute("/dashboard/ai")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var SigninRoute = Route$10.update({
	id: "/signin",
	path: "/signin",
	getParentRoute: () => Route$12
});
var SignUpRoute = Route$9.update({
	id: "/sign-up",
	path: "/sign-up",
	getParentRoute: () => Route$12
});
var SignInRoute = Route$11.update({
	id: "/sign-in",
	path: "/sign-in",
	getParentRoute: () => Route$12
});
var DashboardRoute = Route$8.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$12
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var DashboardSettingsRoute = Route$6.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => DashboardRoute
});
var DashboardPerformanceRoute = Route$5.update({
	id: "/performance",
	path: "/performance",
	getParentRoute: () => DashboardRoute
});
var DashboardIntegrationsRoute = Route$4.update({
	id: "/integrations",
	path: "/integrations",
	getParentRoute: () => DashboardRoute
});
var DashboardInboxRoute = Route$3.update({
	id: "/inbox",
	path: "/inbox",
	getParentRoute: () => DashboardRoute
});
var DashboardCustomersRoute = Route$2.update({
	id: "/customers",
	path: "/customers",
	getParentRoute: () => DashboardRoute
});
var DashboardCatalogRoute = Route$1.update({
	id: "/catalog",
	path: "/catalog",
	getParentRoute: () => DashboardRoute
});
var DashboardRouteChildren = {
	DashboardAiRoute: Route.update({
		id: "/ai",
		path: "/ai",
		getParentRoute: () => DashboardRoute
	}),
	DashboardCatalogRoute,
	DashboardCustomersRoute,
	DashboardInboxRoute,
	DashboardIntegrationsRoute,
	DashboardPerformanceRoute,
	DashboardSettingsRoute
};
var rootRouteChildren = {
	IndexRoute,
	DashboardRoute: DashboardRoute._addFileChildren(DashboardRouteChildren),
	SignInRoute,
	SignUpRoute,
	SigninRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
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
