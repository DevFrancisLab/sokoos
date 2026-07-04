import { useState } from "react";
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
} from "lucide-react";

const NAV_ITEMS: { label: string; href: string; Icon: any }[] = [
  { label: "Home", href: "/dashboard", Icon: Home },
  { label: "Inbox", href: "/dashboard/inbox", Icon: Inbox },
  { label: "Status Scheduler", href: "/dashboard/status", Icon: Calendar },
  { label: "Broadcasts", href: "/dashboard/broadcasts", Icon: Megaphone },
  { label: "Customers", href: "/dashboard/customers", Icon: Users },
  { label: "Catalog", href: "/dashboard/catalog", Icon: Box },
  { label: "AI Assistant", href: "/dashboard/assistant", Icon: Cpu },
  { label: "Analytics", href: "/dashboard/analytics", Icon: Activity },
  { label: "Settings", href: "/dashboard/settings", Icon: Settings },
];

const STAT_CARDS = [
  { label: "Messages Today", value: "1,284", delta: "+18%" },
  { label: "AI Responses", value: "912", delta: "+24%" },
  { label: "Human Takeovers", value: "72", delta: "-4%" },
  { label: "New Leads", value: "38", delta: "+11%" },
];

const RECENT_ACTIVITY = [
  { title: "New customer inquiry", subtitle: "Received in WhatsApp inbox", time: "5m ago" },
  { title: "AI replied to lead", subtitle: "Followed up about pricing", time: "12m ago" },
  { title: "Status post scheduled", subtitle: "Weekly promotion goes live", time: "1h ago" },
  { title: "New product added", subtitle: "Shoes catalog updated", time: "3h ago" },
];

const QUICK_ACTIONS = [
  "Create Status Post",
  "View Inbox",
  "Pause AI",
  "Add Product",
];

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Home");

  return (
    <div className="h-screen min-h-screen bg-[#FFFFFF] text-[#111827]">
      {/* Desktop fixed left sidebar */}
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:w-64 md:flex md:flex-col md:pt-6 bg-[#FFFFFF] border-r border-[#E5E7EB]">
        <div className="px-4 pb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-[#22C55E] flex items-center justify-center text-white font-bold">S</div>
            <span className="text-lg font-bold">Sokoos</span>
          </div>
        </div>

        <nav className="flex-1 px-2 overflow-y-auto">
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ label, href, Icon }) => {
              const active = selected === label;
              return (
                <li key={href}>
                  <button
                    onClick={() => setSelected(label)}
                    className={`w-full text-left flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[#22C55E] text-white"
                        : "text-[#111827] hover:bg-[#F3F4F6] hover:text-[#111827]"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${active ? "opacity-100" : "opacity-80"}`} />
                    <span>{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile top header with menu button */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#FFFFFF] border-b border-[#E5E7EB] flex items-center px-4 z-30">
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="mr-3 inline-flex items-center justify-center rounded-md p-2 text-[#111827] hover:bg-[#F3F4F6]"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-[#22C55E] flex items-center justify-center text-white font-bold">S</div>
          <span className="font-semibold">Sokoos</span>
        </div>
      </header>

      {/* Mobile slide-over sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#FFFFFF] border-r border-[#E5E7EB] p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-[#22C55E] flex items-center justify-center text-white font-bold">S</div>
                <span className="font-semibold">Sokoos</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-md hover:bg-[#F3F4F6]">
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
                        }}
                        className={`w-full text-left flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          active
                            ? "bg-[#22C55E] text-white"
                            : "text-[#111827] hover:bg-[#F3F4F6] hover:text-[#111827]"
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
      <main className="h-full md:pl-64 pt-14 md:pt-0">
        <div className="max-w-7xl mx-auto h-full p-4">
          {/* Render placeholder pages based on selected state */}
          {selected === "Home" && (
            <div className="space-y-6">
              <div className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#22C55E]">Good Afternoon, Frank 👋</p>
                    <h1 className="mt-2 text-3xl font-semibold text-[#111827]">Welcome back to Sokoos</h1>
                    <p className="mt-2 text-sm text-[#6B7280]">Here’s what’s happening with your business today.</p>
                  </div>
                  <div className="rounded-2xl bg-[#F9FAFB] px-4 py-2 text-sm text-[#111827]">
                    Updated just now
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {STAT_CARDS.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-5 shadow-sm">
                    <p className="text-sm font-medium text-[#6B7280]">{stat.label}</p>
                    <div className="mt-4 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-3xl font-semibold text-[#111827]">{stat.value}</p>
                      </div>
                      <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#16A34A]">
                        {stat.delta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
                <section className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Recent Activity</p>
                      <h2 className="mt-2 text-xl font-semibold text-[#111827]">What happened recently</h2>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    {RECENT_ACTIVITY.map((item) => (
                      <div key={item.title} className="rounded-3xl bg-[#F9FAFB] p-4">
                        <div className="flex items-center justify-between gap-4">
                          <p className="font-semibold text-[#111827]">{item.title}</p>
                          <span className="text-xs text-[#6B7280]">{item.time}</span>
                        </div>
                        <p className="mt-2 text-sm text-[#6B7280]">{item.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7280]">Quick Actions</p>
                    <h2 className="mt-2 text-xl font-semibold text-[#111827]">Jump into work</h2>
                  </div>
                  <div className="mt-6 grid gap-3">
                    {QUICK_ACTIONS.map((action) => (
                      <button
                        key={action}
                        type="button"
                        className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-left text-sm font-medium text-[#111827] transition hover:border-[#22C55E] hover:bg-[#ECFDF5]"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          )}
          {selected === "Inbox" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Inbox</div>
          )}
          {selected === "Status Scheduler" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Status Scheduler</div>
          )}
          {selected === "Broadcasts" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Broadcasts</div>
          )}
          {selected === "Customers" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Customers</div>
          )}
          {selected === "Catalog" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Catalog</div>
          )}
          {selected === "AI Assistant" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos AI Assistant</div>
          )}
          {selected === "Analytics" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Analytics</div>
          )}
          {selected === "Settings" && (
            <div className="p-6 bg-white rounded-md border border-[#E5E7EB]">Sokoos Settings</div>
          )}
        </div>
      </main>
    </div>
  );
}
