import { useState } from "react";
import {
  ArrowRight,
  Bell,
  ChevronRight,
  CreditCard,
  Download,
  MailPlus,
  KeyRound,
  LockKeyhole,
  MonitorSmartphone,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

type AccountUser = {
  id: string;
  name: string;
  email?: string;
  avatarUrl?: string;
};

type SettingsCategory = "profile" | "security" | "notifications" | "preferences" | "team" | "billing" | "dataExport" | "deleteAccount";

type AccountSettingsProps = {
  user: AccountUser;
  onEditProfile: () => void;
};

const navigation: Array<{
  heading?: string;
  items: Array<{ id: SettingsCategory; label: string; Icon: typeof UserRound }>;
}> = [
  {
    heading: "Account",
    items: [
      { id: "profile", label: "Profile", Icon: UserRound },
      { id: "security", label: "Security", Icon: LockKeyhole },
      { id: "notifications", label: "Notifications", Icon: Bell },
      { id: "preferences", label: "Preferences", Icon: Settings2 },
    ],
  },
  {
    heading: "Workspace",
    items: [
      { id: "team", label: "Team & Access", Icon: UsersRound },
      { id: "billing", label: "Subscription & Billing", Icon: CreditCard },
    ],
  },
  {
    heading: "Danger Zone",
    items: [
      { id: "dataExport", label: "Data export", Icon: Download },
      { id: "deleteAccount", label: "Delete account", Icon: ShieldAlert },
    ],
  },
];

const notificationGroups = [
  {
    title: "Customer activity",
    items: [
      { id: "newCustomer", label: "New customer" },
      { id: "importantCustomerMessage", label: "Important customer message" },
      { id: "humanHandoffRequired", label: "Human handoff required" },
    ],
  },
  {
    title: "Sales",
    items: [
      { id: "newSalesOpportunity", label: "New sales opportunity" },
      { id: "followUpRequired", label: "Follow-up required" },
      { id: "saleCompleted", label: "Sale completed" },
    ],
  },
  {
    title: "AI employee",
    items: [
      { id: "aiCouldNotCompleteTask", label: "AI could not complete a task" },
      { id: "aiNeedsHumanIntervention", label: "AI needs human intervention" },
      { id: "importantAiActivity", label: "Important AI activity" },
    ],
  },
  {
    title: "System",
    items: [
      { id: "securityAlerts", label: "Security alerts" },
      { id: "productAccountUpdates", label: "Product/account updates" },
    ],
  },
] as const;

type NotificationPreference = (typeof notificationGroups)[number]["items"][number]["id"];

type AccountPreferences = {
  language: string;
  timezone: string;
  dateFormat: string;
  currency: string;
};

const defaultNotificationPreferences: Record<NotificationPreference, boolean> = {
  newCustomer: true,
  importantCustomerMessage: true,
  humanHandoffRequired: true,
  newSalesOpportunity: true,
  followUpRequired: true,
  saleCompleted: true,
  aiCouldNotCompleteTask: true,
  aiNeedsHumanIntervention: true,
  importantAiActivity: true,
  securityAlerts: true,
  productAccountUpdates: true,
};

const preferenceOptions = {
  languages: ["English", "Kiswahili"],
  timezones: ["East Africa Time (EAT)", "West Africa Time (WAT)", "Central Africa Time (CAT)", "UTC"],
  dateFormats: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"],
  currencies: ["KES — Kenyan Shilling", "USD — US Dollar"],
} as const;

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function SettingsPanel({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-lg font-semibold text-[#111827]">{title}</h2>
      <p className="mt-1 max-w-2xl text-sm leading-6 text-[#64748B]">{description}</p>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function UnavailableNotice({ children }: { children: React.ReactNode }) {
  return <p className="rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-3 text-sm leading-6 text-[#475569]">{children}</p>;
}

export function AccountSettings({ user, onEditProfile }: AccountSettingsProps) {
  const [activeCategory, setActiveCategory] = useState<SettingsCategory>("profile");
  const [notificationPreferences, setNotificationPreferences] = useState(defaultNotificationPreferences);
  const [preferences, setPreferences] = useState<AccountPreferences>({
    language: preferenceOptions.languages[0],
    timezone: preferenceOptions.timezones[0],
    dateFormat: preferenceOptions.dateFormats[0],
    currency: preferenceOptions.currencies[0],
  });
  const [deletionAcknowledged, setDeletionAcknowledged] = useState(false);

  const renderContent = () => {
    switch (activeCategory) {
      case "profile":
        return (
          <SettingsPanel title="Profile" description="Manage the personal information associated with your Sokoos account.">
            <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFC] p-4 sm:p-5">
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 bg-white text-[#111827] shadow-sm">
                  {user.avatarUrl ? <AvatarImage src={user.avatarUrl} alt={`${user.name}'s profile photo`} /> : <AvatarFallback>{initials(user.name)}</AvatarFallback>}
                </Avatar>
                <div className="min-w-0 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">Full name</p>
                    <p className="mt-1 truncate text-sm font-semibold text-[#111827]">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">Email</p>
                    <p className="mt-1 truncate text-sm text-[#475569]">{user.email || "No email address available"}</p>
                  </div>
                </div>
              </div>
              <Button type="button" variant="link" className="mt-4 h-auto px-0 text-[#047857] hover:text-[#065F46]" onClick={onEditProfile}>
                Edit profile <ArrowRight />
              </Button>
            </div>
          </SettingsPanel>
        );
      case "security":
        return (
          <SettingsPanel title="Security" description="Review the security options for signing in to your Sokoos account.">
            <div className="space-y-3">
              <div className="flex flex-col gap-4 rounded-[20px] border border-[#E5E7EB] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <KeyRound className="mt-0.5 h-5 w-5 shrink-0 text-[#16A34A]" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#111827]">Password</h3>
                    <p className="mt-1 text-sm leading-6 text-[#64748B]">Change your account password.</p>
                  </div>
                </div>
                <Button type="button" variant="outline" disabled>Change password</Button>
              </div>
              <div className="flex flex-col gap-4 rounded-[20px] border border-[#E5E7EB] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <MonitorSmartphone className="mt-0.5 h-5 w-5 shrink-0 text-[#16A34A]" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#111827]">Sessions</h3>
                    <p className="mt-1 text-sm leading-6 text-[#64748B]">Manage where your Sokoos account is currently signed in.</p>
                  </div>
                </div>
                <Button type="button" variant="outline" disabled>View active sessions</Button>
              </div>
              <div className="flex flex-col gap-4 rounded-[20px] border border-[#E5E7EB] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#16A34A]" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#111827]">Two-factor authentication</h3>
                    <p className="mt-1 text-sm leading-6 text-[#64748B]">Add an additional layer of security to your account.</p>
                  </div>
                </div>
                <Button type="button" variant="outline" disabled>Set up 2FA</Button>
              </div>
              <UnavailableNotice>Security actions are not connected to an account service yet.</UnavailableNotice>
            </div>
          </SettingsPanel>
        );
      case "notifications":
        return (
          <SettingsPanel title="Notifications" description="Choose how Sokoos contacts you about your account and workspace.">
            <div className="grid gap-4 xl:grid-cols-2">
              {notificationGroups.map((group) => (
                <section key={group.title} className="rounded-[20px] border border-[#E5E7EB] bg-white p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">{group.title}</h3>
                  <div className="mt-3 divide-y divide-[#E5E7EB]">
                    {group.items.map((item) => {
                      const controlId = `notification-${item.id}`;
                      return (
                        <div key={item.id} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                          <label htmlFor={controlId} className="cursor-pointer text-sm font-medium text-[#111827]">{item.label}</label>
                          <Switch
                            id={controlId}
                            checked={notificationPreferences[item.id]}
                            onCheckedChange={(checked) => setNotificationPreferences((current) => ({ ...current, [item.id]: checked }))}
                            aria-label={item.label}
                          />
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
            <p className="mt-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-3 text-sm leading-6 text-[#475569]">These preferences are currently stored only in this open frontend session and are not yet connected to notification delivery.</p>
          </SettingsPanel>
        );
      case "preferences":
        return (
          <SettingsPanel title="Preferences" description="Set personal preferences for your Sokoos account.">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="account-language" className="text-sm font-semibold text-[#111827]">Language</label>
                <Select value={preferences.language} onValueChange={(language) => setPreferences((current) => ({ ...current, language }))}>
                  <SelectTrigger id="account-language"><SelectValue /></SelectTrigger>
                  <SelectContent>{preferenceOptions.languages.map((language) => <SelectItem key={language} value={language}>{language}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="account-timezone" className="text-sm font-semibold text-[#111827]">Time zone</label>
                <Select value={preferences.timezone} onValueChange={(timezone) => setPreferences((current) => ({ ...current, timezone }))}>
                  <SelectTrigger id="account-timezone"><SelectValue /></SelectTrigger>
                  <SelectContent>{preferenceOptions.timezones.map((timezone) => <SelectItem key={timezone} value={timezone}>{timezone}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="account-date-format" className="text-sm font-semibold text-[#111827]">Date format</label>
                <Select value={preferences.dateFormat} onValueChange={(dateFormat) => setPreferences((current) => ({ ...current, dateFormat }))}>
                  <SelectTrigger id="account-date-format"><SelectValue /></SelectTrigger>
                  <SelectContent>{preferenceOptions.dateFormats.map((dateFormat) => <SelectItem key={dateFormat} value={dateFormat}>{dateFormat}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="account-currency" className="text-sm font-semibold text-[#111827]">Currency</label>
                <Select value={preferences.currency} onValueChange={(currency) => setPreferences((current) => ({ ...current, currency }))}>
                  <SelectTrigger id="account-currency"><SelectValue /></SelectTrigger>
                  <SelectContent>{preferenceOptions.currencies.map((currency) => <SelectItem key={currency} value={currency}>{currency}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
            <p className="mt-5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-3 text-sm leading-6 text-[#475569]">These preferences are stored only in this open frontend session and are not yet connected to your account.</p>
          </SettingsPanel>
        );
      case "team":
        return (
          <SettingsPanel title="Team & Access" description="Manage who can access this workspace and what they can do.">
            <div className="space-y-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[#111827]">Workspace members</h3>
                  <p className="mt-1 text-sm text-[#64748B]">People with access to this Sokoos workspace.</p>
                </div>
                <Button type="button" disabled><MailPlus />Invite member</Button>
              </div>
              <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                <div className="flex min-w-0 items-center gap-3">
                  <Avatar className="h-11 w-11 bg-white text-[#111827] shadow-sm">
                    {user.avatarUrl ? <AvatarImage src={user.avatarUrl} alt={`${user.name}'s profile photo`} /> : <AvatarFallback>{initials(user.name)}</AvatarFallback>}
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-[#111827]">{user.name}</p>
                    <p className="mt-0.5 text-sm text-[#64748B]">Owner</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCFCE7] px-2.5 py-1 text-xs font-semibold text-[#166534]"><span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />Active</span>
                </div>
              </div>
              <div className="rounded-[20px] border border-[#E5E7EB] p-4">
                <h3 className="text-sm font-semibold text-[#111827]">Member roles</h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {[
                    ["Owner", "Full workspace access"],
                    ["Admin", "Manage workspace access"],
                    ["Staff", "Use assigned workspace tools"],
                  ].map(([role, detail]) => (
                    <div key={role} className="rounded-xl bg-[#F8FAFC] p-3">
                      <p className="text-sm font-semibold text-[#111827]">{role}</p>
                      <p className="mt-1 text-xs leading-5 text-[#64748B]">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <UnavailableNotice>Member invitations and role changes are not connected to a workspace access service yet.</UnavailableNotice>
            </div>
          </SettingsPanel>
        );
      case "billing":
        return (
          <SettingsPanel title="Subscription & Billing" description="View your Sokoos plan, billing details, and invoices.">
            <div className="space-y-5">
              <dl className="overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white">
                {[
                  ["Current plan", "Not configured"],
                  ["Billing cycle", "Not configured"],
                  ["Next billing date", "Not configured"],
                  ["Payment method", "Not configured"],
                ].map(([label, value], index) => (
                  <div key={label} className={`flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${index > 0 ? "border-t border-[#E5E7EB]" : ""}`}>
                    <dt className="text-sm font-medium text-[#475569]">{label}</dt>
                    <dd className="text-sm font-semibold text-[#111827]">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button type="button" disabled>Change plan</Button>
                <Button type="button" variant="outline" disabled>Manage billing</Button>
                <Button type="button" variant="outline" disabled>View invoices</Button>
              </div>
              <UnavailableNotice>Subscription and billing management is not connected to an account service yet.</UnavailableNotice>
            </div>
          </SettingsPanel>
        );
      case "dataExport":
        return (
          <SettingsPanel title="Data export" description="Export your Sokoos account and workspace data.">
            <div className="space-y-4">
              <div className="flex flex-col gap-4 rounded-[20px] border border-[#E5E7EB] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div>
                  <h3 className="text-sm font-semibold text-[#111827]">Export data</h3>
                  <p className="mt-1 text-sm leading-6 text-[#64748B]">Download a copy of your account and workspace data.</p>
                </div>
                <Button type="button" variant="outline" disabled className="shrink-0"><Download />Export data</Button>
              </div>
              <UnavailableNotice>Data export is not connected to an account service yet.</UnavailableNotice>
            </div>
          </SettingsPanel>
        );
      case "deleteAccount":
        return (
          <SettingsPanel title="Delete account" description="Permanently delete your Sokoos account.">
            <div className="rounded-[20px] border border-[#FECACA] bg-[#FFF7F7] p-4 sm:p-5">
              <h3 className="text-sm font-semibold text-[#991B1B]">Delete account</h3>
              <p className="mt-1 text-sm leading-6 text-[#7F1D1D]">This action may permanently remove your account and workspace data.</p>
              <AlertDialog onOpenChange={(open) => { if (!open) setDeletionAcknowledged(false); }}>
                <AlertDialogTrigger asChild>
                  <Button type="button" variant="destructive" className="mt-4">Delete account</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete your Sokoos account?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action is potentially irreversible. Deleting your account may permanently remove account and workspace data and cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <label className="flex items-start gap-3 rounded-xl border border-[#FECACA] bg-[#FFF7F7] p-3 text-sm leading-5 text-[#7F1D1D]">
                    <input
                      type="checkbox"
                      checked={deletionAcknowledged}
                      onChange={(event) => setDeletionAcknowledged(event.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-[#FCA5A5] accent-[#DC2626]"
                    />
                    <span>I understand that deleting my account may be permanent and cannot be undone.</span>
                  </label>
                  <p className="text-sm leading-6 text-[#64748B]">Account deletion is not connected to a backend service yet.</p>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled className="bg-[#DC2626] hover:bg-[#B91C1C]">Deletion unavailable</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </SettingsPanel>
        );
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 pb-4">
      <header>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#64748B]">Account settings</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[#111827] sm:text-3xl">Account Settings</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#64748B]">Manage your account and workspace settings.</p>
      </header>

      <div className="lg:hidden">
        <label htmlFor="account-settings-navigation" className="sr-only">Account settings section</label>
        <Select value={activeCategory} onValueChange={(value) => setActiveCategory(value as SettingsCategory)}>
          <SelectTrigger id="account-settings-navigation" className="bg-white"><SelectValue /></SelectTrigger>
          <SelectContent>
            {navigation.flatMap((group) => group.items.map((item) => (
              <SelectItem key={item.id} value={item.id}>{group.heading} · {item.label}</SelectItem>
            )))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        <nav aria-label="Account settings categories" className="hidden h-fit rounded-[24px] border border-[#E5E7EB] bg-white p-2 shadow-sm lg:block">
          {navigation.map((group) => (
            <div key={group.heading} className="p-2">
              <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">{group.heading}</p>
              <div className="space-y-1">
                {group.items.map(({ id, label, Icon }) => {
                  const active = activeCategory === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActiveCategory(id)}
                      aria-current={active ? "page" : undefined}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 ${active ? "bg-[#ECFDF5] text-[#047857]" : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#111827]"}`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="min-w-0 flex-1">{label}</span>
                      {active ? <ChevronRight className="h-4 w-4" aria-hidden="true" /> : null}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="min-w-0">{renderContent()}</div>
      </div>
    </div>
  );
}
