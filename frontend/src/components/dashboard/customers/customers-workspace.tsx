import { useMemo, useState, type ReactNode } from "react";
import {
  Check,
  List,
  MessageSquareText,
  Plus,
  Search,
  Target,
  Tag,
  Upload,
  User,
  X,
} from "lucide-react";

export type Customer = {
  id: string;
  avatar: string;
  name: string;
  phone: string;
  leadStatus: string;
  interestedProduct: string;
  lastInteraction: string;
};

type CustomerDirectoryItem = {
  id: string;
  name: string;
  notes: string;
  phoneNumbers: string[];
  emailAddresses: string[];
  otherContactMethods: string[];
  relationship: "Contact" | "Lead" | "Customer";
  source: string;
  recentInteractions: string[];
  tags: string[];
  status: string;
  lastInteraction: string;
};

type Segment = {
  id: string;
  name: string;
  description: string;
  criteria: string;
  matchCount: number;
};

type ReviewQueueItem = {
  id: string;
  category: "Possible duplicates" | "Incomplete profiles" | "Unclassified contacts";
  name: string;
  summary: string;
  existingProfile: string;
  newContact: string;
  relationship: string;
};

type ImportSource =
  | "WhatsApp"
  | "Website"
  | "Email"
  | "SMS"
  | "Manual"
  | "Import"
  | "Google Contacts"
  | "Other";

type InboxConversation = {
  id: string;
  phone?: string;
  name?: string | null;
};

type CustomersWorkspaceProps = {
  customers: Customer[];
  inboxConversations: InboxConversation[];
  setSelected: (value: string) => void;
  setActiveConversation: React.Dispatch<React.SetStateAction<string>>;
};

export function CustomersWorkspace({
  customers,
  inboxConversations,
  setSelected,
  setActiveConversation,
}: CustomersWorkspaceProps) {
  const [customerDirectoryQuery, setCustomerDirectoryQuery] = useState("");
  const [customerDirectoryFilter, setCustomerDirectoryFilter] = useState<"All" | "Contact" | "Lead" | "Customer">("All");
  const [customerDirectorySort, setCustomerDirectorySort] = useState<"lastInteraction" | "name" | "relationship">("lastInteraction");
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const [customerWorkspaceSection, setCustomerWorkspaceSection] = useState<"All" | "Leads" | "Customers" | "Segments" | "Sources & Imports" | "Review">("All");
  const [segments, setSegments] = useState<Segment[]>([]);
  const [segmentDraft, setSegmentDraft] = useState({ name: "", description: "", criteria: "" });
  const [segmentEditingId, setSegmentEditingId] = useState<string | null>(null);
  const [importSource, setImportSource] = useState<ImportSource>("Manual");
  const [showImportForm, setShowImportForm] = useState(false);
  const [reviewQueue, setReviewQueue] = useState<ReviewQueueItem[]>([
    {
      id: "review-duplicate-1",
      category: "Possible duplicates",
      name: "Mary Wanjiku",
      summary: "A new contact may match an existing profile and needs review before any action.",
      existingProfile: "+254 711 xxx xxx",
      newContact: "+254 722 xxx xxx",
      relationship: "Customer / Contact",
    },
    {
      id: "review-incomplete-1",
      category: "Incomplete profiles",
      name: "Samuel Otieno",
      summary: "Missing email and notes for a recently contacted person.",
      existingProfile: "Phone on file, no email",
      newContact: "No additional contact method",
      relationship: "Lead",
    },
    {
      id: "review-unclassified-1",
      category: "Unclassified contacts",
      name: "Amina Muthoni",
      summary: "Imported contact has not yet been classified as Contact, Lead, or Customer.",
      existingProfile: "Imported from spreadsheet",
      newContact: "Not classified",
      relationship: "Contact",
    },
  ]);
  const [pendingReviewMergeId, setPendingReviewMergeId] = useState<string | null>(null);

  const customerDirectoryItems = useMemo<CustomerDirectoryItem[]>(
    () =>
      customers.map((customer) => ({
        id: customer.id,
        name: customer.name,
        notes: `Primary interest: ${customer.interestedProduct}. Last interaction: ${customer.lastInteraction}.`,
        phoneNumbers: [customer.phone],
        emailAddresses: [],
        otherContactMethods: [],
        relationship: customer.leadStatus.toLowerCase().includes("customer")
          ? "Customer"
          : customer.leadStatus.toLowerCase().includes("lead")
          ? "Lead"
          : "Contact",
        source: "Manual import",
        recentInteractions: [customer.lastInteraction],
        tags: [customer.interestedProduct, customer.leadStatus],
        status: customer.leadStatus,
        lastInteraction: customer.lastInteraction,
      })),
    [customers]
  );

  const selectedCustomer = customerDirectoryItems.find((customer) => customer.id === selectedCustomerId) ?? null;

  const handleOpenInboxForCustomer = () => {
    setSelected("Inbox");

    if (!selectedCustomer) {
      return;
    }

    const exactCustomerPhone = selectedCustomer.phoneNumbers.find((phone) => phone.trim().length > 0);
    const exactCustomerName = selectedCustomer.name.trim();

    const matchedConversation = inboxConversations.find((conversation) => {
      if (!conversation.phone && !conversation.name) {
        return false;
      }

      const conversationPhone = conversation.phone?.replace(/\D/g, "") ?? "";
      const customerPhone = exactCustomerPhone?.replace(/\D/g, "") ?? "";
      const samePhone = Boolean(customerPhone && conversationPhone && customerPhone === conversationPhone);
      const sameName = Boolean(exactCustomerName && conversation.name && exactCustomerName.toLowerCase() === conversation.name.trim().toLowerCase());

      return samePhone || sameName;
    });

    if (matchedConversation) {
      setActiveConversation(matchedConversation.id);
    }
  };

  const leadRecords: Array<{
    id: string;
    name: string;
    contactMethods: string[];
    source: string;
    interestedProduct: string;
    lastInteraction: string;
    followUpStatus: string;
    notes: string;
  }> = [];

  const filteredLeadRecords = leadRecords.filter((lead) => {
    const searchableText = [
      lead.name,
      lead.source,
      lead.interestedProduct,
      lead.lastInteraction,
      lead.followUpStatus,
      lead.notes,
      lead.contactMethods.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return !customerDirectoryQuery || searchableText.includes(customerDirectoryQuery.toLowerCase());
  });

  const handleSaveSegment = () => {
    const name = segmentDraft.name.trim();
    const description = segmentDraft.description.trim();
    const criteria = segmentDraft.criteria.trim();

    if (!name) return;

    if (segmentEditingId) {
      setSegments((current) =>
        current.map((segment) =>
          segment.id === segmentEditingId
            ? {
                ...segment,
                name,
                description,
                criteria,
              }
            : segment
        )
      );
    } else {
      setSegments((current) => [
        {
          id: `segment-${Date.now()}`,
          name,
          description,
          criteria,
          matchCount: 0,
        },
        ...current,
      ]);
    }

    setSegmentDraft({ name: "", description: "", criteria: "" });
    setSegmentEditingId(null);
  };

  const handleDeleteSegment = (id: string) => {
    setSegments((current) => current.filter((segment) => segment.id !== id));
    if (segmentEditingId === id) {
      setSegmentEditingId(null);
      setSegmentDraft({ name: "", description: "", criteria: "" });
    }
  };

  const filteredCustomerDirectoryItems = useMemo(
    () =>
      customerDirectoryItems
        .filter((item) => {
          const searchableText = [
            item.name,
            item.relationship,
            item.source,
            item.lastInteraction,
            item.status,
            [...item.phoneNumbers, ...item.emailAddresses, ...item.otherContactMethods].join(" "),
            item.tags.join(" "),
          ]
            .join(" ")
            .toLowerCase();

          const matchesQuery = !customerDirectoryQuery || searchableText.includes(customerDirectoryQuery.toLowerCase());
          const matchesFilter = customerDirectoryFilter === "All" || item.relationship === customerDirectoryFilter;

          return matchesQuery && matchesFilter;
        })
        .sort((a, b) => {
          if (customerDirectorySort === "name") {
            return a.name.localeCompare(b.name);
          }

          if (customerDirectorySort === "relationship") {
            const order: Record<"Contact" | "Lead" | "Customer", number> = { Contact: 0, Lead: 1, Customer: 2 };
            return order[a.relationship] - order[b.relationship];
          }

          return a.lastInteraction.localeCompare(b.lastInteraction);
        }),
    [customerDirectoryItems, customerDirectoryQuery, customerDirectoryFilter, customerDirectorySort]
  );

  return (
    <div className="mx-auto w-full max-w-[1280px] space-y-6 px-4 pb-10 lg:px-6">
      <div className="border-b border-[#E5E7EB] pb-5">
        <div className="flex flex-col gap-5">
          <div className="max-w-3xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6B7280]">Customers</p>
            <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-[#111827] lg:text-[26px]">Customers</h2>
            <p className="mt-2 text-sm leading-6 text-[#6B7280]">
              Manage the people connected to your business and understand their relationship with your business.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-[20px] bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"
              >
                <Plus className="h-4 w-4" />
                Add Customer
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-[#F9FAFB]"
              >
                <Upload className="h-4 w-4" />
                Import
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_180px_180px]">
          <label className="flex items-center gap-3 rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#64748B] focus-within:border-[#22C55E] focus-within:ring-2 focus-within:ring-[#ECFDF5]">
            <Search className="h-4 w-4 shrink-0" />
            <input
              type="search"
              value={customerDirectoryQuery}
              onChange={(event) => setCustomerDirectoryQuery(event.target.value)}
              placeholder="Search customers, leads, phone numbers, email addresses, or tags"
              className="w-full bg-transparent text-sm text-[#111827] placeholder:text-[#94A3B8] outline-none"
            />
          </label>

          <label className="flex items-center gap-2 rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-3 text-sm text-[#475569]">
            <span className="font-medium">Filter</span>
            <select
              value={customerDirectoryFilter}
              onChange={(event) => setCustomerDirectoryFilter(event.target.value as "All" | "Contact" | "Lead" | "Customer")}
              className="w-full bg-transparent text-sm font-medium text-[#111827] outline-none"
            >
              <option value="All">All</option>
              <option value="Contact">Contact</option>
              <option value="Lead">Lead</option>
              <option value="Customer">Customer</option>
            </select>
          </label>

          <label className="flex items-center gap-2 rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-3 text-sm text-[#475569]">
            <span className="font-medium">Sort</span>
            <select
              value={customerDirectorySort}
              onChange={(event) => setCustomerDirectorySort(event.target.value as "lastInteraction" | "name" | "relationship")}
              className="w-full bg-transparent text-sm font-medium text-[#111827] outline-none"
            >
              <option value="lastInteraction">Last interaction</option>
              <option value="name">Name</option>
              <option value="relationship">Relationship</option>
            </select>
          </label>
        </div>
      </div>

      <nav aria-label="Customers workspace sections" className="rounded-[24px] border border-[#E5E7EB] bg-white p-2 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
        <div className="flex flex-wrap gap-2">
          {[
            "All",
            "Leads",
            "Customers",
            "Segments",
            "Sources & Imports",
            "Review",
          ].map((section) => {
            const active = customerWorkspaceSection === section;
            return (
              <button
                key={section}
                type="button"
                onClick={() => setCustomerWorkspaceSection(section as typeof customerWorkspaceSection)}
                aria-current={active ? "page" : undefined}
                className={`rounded-full border px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "border-[#86EFAC] bg-[#ECFDF5] text-[#166534]"
                    : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#D1FAE5] hover:bg-[#F9FCFA]"
                }`}
              >
                {section}
              </button>
            );
          })}
        </div>
      </nav>

      {customerWorkspaceSection === "Leads" ? (
        <section className="rounded-[24px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-8 text-center shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#22C55E] shadow-sm">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-[#111827]">No leads yet</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#6B7280]">
            There are no lead records in this workspace yet. When someone expresses interest but is not yet confirmed as a customer, the details will appear here as a separate lead record.
          </p>
          <div className="mt-5 rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#475569]">
            Leads are kept separate from contact information and are only created when a person is clearly marked as a lead.
          </div>
        </section>
      ) : customerWorkspaceSection === "Segments" ? (
        <section className="space-y-6">
          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">Segments</p>
                <h3 className="mt-1 text-2xl font-semibold text-[#111827]">Customer groups</h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSegmentEditingId(null);
                  setSegmentDraft({ name: "", description: "", criteria: "" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-[20px] bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"
              >
                <Plus className="h-4 w-4" />
                Create Segment
              </button>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
            <div className="grid gap-4 md:grid-cols-3">
              <label className="space-y-2 text-sm font-medium text-[#111827]">
                <span>Segment name</span>
                <input
                  type="text"
                  value={segmentDraft.name}
                  onChange={(event) => setSegmentDraft((current) => ({ ...current, name: event.target.value }))}
                  className="w-full rounded-[18px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
                  placeholder="e.g. Repeat buyers"
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-[#111827] md:col-span-2">
                <span>Description</span>
                <input
                  type="text"
                  value={segmentDraft.description}
                  onChange={(event) => setSegmentDraft((current) => ({ ...current, description: event.target.value }))}
                  className="w-full rounded-[18px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
                  placeholder="Describe the purpose of this group"
                />
              </label>
            </div>

            <div className="mt-4">
              <label className="space-y-2 text-sm font-medium text-[#111827]">
                <span>Optional conditions / criteria</span>
                <textarea
                  value={segmentDraft.criteria}
                  onChange={(event) => setSegmentDraft((current) => ({ ...current, criteria: event.target.value }))}
                  rows={3}
                  className="w-full rounded-[18px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
                  placeholder="Example: customers with a recent purchase and at least one tag related to repeat orders"
                />
              </label>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleSaveSegment}
                disabled={!segmentDraft.name.trim()}
                className="inline-flex items-center justify-center rounded-[20px] bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A] disabled:cursor-not-allowed disabled:bg-[#A7F3D0]"
              >
                {segmentEditingId ? "Save Segment" : "Create Segment"}
              </button>
            </div>
          </div>

          {segments.length === 0 ? (
            <section className="rounded-[24px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-8 text-center shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#22C55E] shadow-sm">
                <Tag className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#111827]">No segments yet</h3>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#6B7280]">
                Create a segment to group people by business-defined criteria. Examples can be used as placeholders only; no default segments are created automatically.
              </p>
            </section>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {segments.map((segment) => (
                <article key={segment.id} className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">Segment</p>
                      <h4 className="mt-1 text-xl font-semibold text-[#111827]">{segment.name}</h4>
                    </div>
                    <span className="rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-2.5 py-1 text-xs font-semibold text-[#166534]">
                      {segment.matchCount} people
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#475569]">
                    {segment.description || "No description provided."}
                  </p>

                  <div className="mt-4 rounded-[18px] border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#475569]">
                    <p className="font-medium text-[#111827]">Criteria</p>
                    <p className="mt-2 leading-6">{segment.criteria || "No conditions added yet."}</p>
                  </div>

                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSegmentEditingId(segment.id);
                        setSegmentDraft({
                          name: segment.name,
                          description: segment.description,
                          criteria: segment.criteria,
                        });
                      }}
                      className="inline-flex items-center justify-center rounded-[20px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F9FAFB]"
                    >
                      Edit Segment
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteSegment(segment.id)}
                      className="inline-flex items-center justify-center rounded-[20px] border border-[#FECACA] bg-[#FEF2F2] px-3 py-2 text-sm font-semibold text-[#B91C1C] transition hover:bg-[#FEE2E2]"
                    >
                      Delete Segment
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      ) : customerWorkspaceSection === "Sources & Imports" ? (
        <section className="space-y-6">
          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">Sources & Imports</p>
                <h3 className="mt-1 text-2xl font-semibold text-[#111827]">Where contacts come from</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setShowImportForm((current) => !current)}
                  className="inline-flex items-center justify-center gap-2 rounded-[20px] bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"
                >
                  <Upload className="h-4 w-4" />
                  Import Contacts
                </button>
                <button
                  type="button"
                  onClick={() => setShowImportForm(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-[#F9FAFB]"
                >
                  <List className="h-4 w-4" />
                  View Sources
                </button>
              </div>
            </div>
          </div>

          {showImportForm && (
            <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-[#111827]">
                  <span>Import source</span>
                  <select
                    value={importSource}
                    onChange={(event) => setImportSource(event.target.value as ImportSource)}
                    className="w-full rounded-[18px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-sm text-[#111827] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#ECFDF5]"
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Website">Website</option>
                    <option value="Email">Email</option>
                    <option value="SMS">SMS</option>
                    <option value="Manual">Manual</option>
                    <option value="Import">Import</option>
                    <option value="Google Contacts">Google Contacts</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label className="space-y-2 text-sm font-medium text-[#111827]">
                  <span>Initial relationship</span>
                  <input
                    type="text"
                    value="Contact"
                    readOnly
                    className="w-full rounded-[18px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-sm text-[#111827] outline-none"
                  />
                </label>
              </div>

              <div className="mt-4 rounded-[18px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-4 text-sm text-[#475569]">
                Upload a CSV or paste a contact list. This is a controlled import flow only; no automatic matching or merging is performed.
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowImportForm(false)}
                  className="inline-flex items-center justify-center rounded-[20px] bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"
                >
                  Start Import
                </button>
              </div>
            </div>
          )}

          <div className="grid gap-4 lg:grid-cols-2">
            {[
              { name: "WhatsApp", description: "Messages and customer conversations received from WhatsApp channels.", status: "Available when connected" },
              { name: "Website", description: "Visitors and inquiries captured through your website forms and chat flows.", status: "Available when connected" },
              { name: "Email", description: "Email-based contact and inquiry records from your business inbox.", status: "Available when connected" },
              { name: "SMS", description: "Text-message conversations and follow-ups sent from your business number.", status: "Available when connected" },
              { name: "Manual", description: "Contacts added directly by a team member in the dashboard.", status: "Ready" },
              { name: "Import", description: "Bulk contact list imports from spreadsheet or CSV files.", status: "Ready" },
              { name: "Google Contacts", description: "Available integration option; not connected unless configured separately.", status: "Not connected" },
              { name: "Other connected integrations", description: "Additional channels connected to the business workspace.", status: "Depends on setup" },
            ].map((source) => (
              <article key={source.name} className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">Source</p>
                    <h4 className="mt-1 text-xl font-semibold text-[#111827]">{source.name}</h4>
                  </div>
                  <span className="rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-2.5 py-1 text-[11px] font-semibold text-[#166534]">
                    {source.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#475569]">{source.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : customerWorkspaceSection === "Review" ? (
        <section className="space-y-6">
          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">Review</p>
                <h3 className="mt-1 text-2xl font-semibold text-[#111827]">Customer data review queue</h3>
              </div>
              <span className="rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-3 py-1.5 text-xs font-semibold text-[#166534]">
                {reviewQueue.length} items
              </span>
            </div>
          </div>

          {reviewQueue.length === 0 ? (
            <section className="rounded-[24px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-8 text-center shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#22C55E] shadow-sm">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#111827]">No review items</h3>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#6B7280]">
                There are no pending data review items in this workspace right now. New issues will appear here when a business owner needs to validate a record.
              </p>
            </section>
          ) : (
            <div className="space-y-4">
              {reviewQueue.map((item) => {
                const isPendingMerge = pendingReviewMergeId === item.id;
                return (
                  <article key={item.id} className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#166534]">
                            {item.category}
                          </span>
                        </div>
                        <h4 className="mt-3 text-xl font-semibold text-[#111827]">{item.name}</h4>
                        <p className="mt-2 text-sm leading-6 text-[#475569]">{item.summary}</p>
                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                          <div className="rounded-[18px] border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#475569]">
                            <p className="font-medium text-[#111827]">Existing profile</p>
                            <p className="mt-2">{item.existingProfile}</p>
                          </div>
                          <div className="rounded-[18px] border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-sm text-[#475569]">
                            <p className="font-medium text-[#111827]">New contact</p>
                            <p className="mt-2">{item.newContact}</p>
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-[#475569]">
                          <span className="font-medium text-[#111827]">Relationship:</span> {item.relationship}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 lg:min-w-[180px]">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-[18px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F9FAFB]"
                        >
                          Review
                        </button>
                        <button
                          type="button"
                          onClick={() => setPendingReviewMergeId(item.id)}
                          className="inline-flex items-center justify-center rounded-[18px] border border-[#D1FAE5] bg-[#ECFDF5] px-3 py-2 text-sm font-semibold text-[#166534] transition hover:bg-[#D1FAE5]"
                        >
                          Merge
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setReviewQueue((current) => current.filter((reviewItem) => reviewItem.id !== item.id));
                            setPendingReviewMergeId((current) => (current === item.id ? null : current));
                          }}
                          className="inline-flex items-center justify-center rounded-[18px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold text-[#475569] transition hover:bg-[#F9FAFB]"
                        >
                          Keep Separate
                        </button>
                      </div>
                    </div>

                    {isPendingMerge && (
                      <div className="mt-4 rounded-[18px] border border-[#FDE68A] bg-[#FEFCE8] p-4">
                        <p className="text-sm font-semibold text-[#92400E]">Confirm merge</p>
                        <p className="mt-2 text-sm leading-6 text-[#78350F]">
                          Automatic merging is not enabled. This action requires explicit business-owner confirmation before the records are combined.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setReviewQueue((current) => current.filter((reviewItem) => reviewItem.id !== item.id));
                              setPendingReviewMergeId(null);
                            }}
                            className="inline-flex items-center justify-center rounded-[18px] bg-[#22C55E] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
                          >
                            Confirm Merge
                          </button>
                          <button
                            type="button"
                            onClick={() => setPendingReviewMergeId(null)}
                            className="inline-flex items-center justify-center rounded-[18px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#F9FAFB]"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </section>
      ) : filteredCustomerDirectoryItems.length === 0 ? (
        <section className="rounded-[24px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-8 text-center shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#22C55E] shadow-sm">
            <User className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-[#111827]">
            {customerDirectoryQuery || customerDirectoryFilter !== "All"
              ? "No matching records"
              : "No customer records yet"}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#6B7280]">
            {customerDirectoryQuery || customerDirectoryFilter !== "All"
              ? "Try a different search term or reset the filter to see the full customer directory."
              : "There are no customer or contact records available in this workspace yet. Once your business connects a source or imports contacts, they will appear here in a searchable directory."}
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {(customerDirectoryQuery || customerDirectoryFilter !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setCustomerDirectoryQuery("");
                  setCustomerDirectoryFilter("All");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-[#F9FAFB]"
              >
                Reset search
              </button>
            )}
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-[20px] bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"
            >
              <Plus className="h-4 w-4" />
              Add Customer
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-[#F9FAFB]"
            >
              <Upload className="h-4 w-4" />
              Import
            </button>
          </div>
        </section>
      ) : (
        <section className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#F8FAFC] text-[#475569]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Relationship</th>
                  <th className="px-4 py-3 font-semibold">Contact method</th>
                  <th className="px-4 py-3 font-semibold">Source</th>
                  <th className="px-4 py-3 font-semibold">Last interaction</th>
                  <th className="px-4 py-3 font-semibold">Tags</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomerDirectoryItems.map((customer) => {
                  const isSelected = selectedCustomerId === customer.id;
                  return (
                    <tr
                      key={customer.id}
                      tabIndex={0}
                      onClick={() => setSelectedCustomerId(customer.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedCustomerId(customer.id);
                        }
                      }}
                      className={`cursor-pointer border-t border-[#E5E7EB] align-top transition hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 ${
                        isSelected ? "bg-[#F3FDF7]" : ""
                      }`}
                    >
                      <td className="px-4 py-3 font-medium text-[#111827]">{customer.name}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-[#ECFDF5] px-2.5 py-1 text-xs font-semibold text-[#166534]">
                          {customer.relationship}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#475569]">
                        {customer.phoneNumbers.length > 0 || customer.emailAddresses.length > 0 || customer.otherContactMethods.length > 0
                          ? [...customer.phoneNumbers, ...customer.emailAddresses, ...customer.otherContactMethods].join(", ")
                          : "No contact method added"}
                      </td>
                      <td className="px-4 py-3 text-[#475569]">{customer.source}</td>
                      <td className="px-4 py-3 text-[#475569]">{customer.lastInteraction}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          {customer.tags.length > 0 ? (
                            customer.tags.map((tag) => (
                              <span key={`${customer.id}-${tag}`} className="rounded-full border border-[#E5E7EB] bg-[#F9FAFC] px-2 py-1 text-[11px] font-medium text-[#475569]">
                                {tag}
                              </span>
                            ))
                          ) : (
                            <span className="text-[#94A3B8]">—</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1 text-xs font-semibold text-[#475569]">
                          {customer.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {selectedCustomer && (
        <div className="fixed inset-0 z-40 flex justify-end bg-black/20 backdrop-blur-[2px]">
          <aside className="h-full w-full max-w-[440px] overflow-y-auto border-l border-[#E5E7EB] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <div className="border-b border-[#E5E7EB] p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ECFDF5] font-semibold text-[#166534]">
                    {selectedCustomer.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase() || "P"}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Customer profile</p>
                    <h3 className="mt-1 text-xl font-semibold text-[#111827]">{selectedCustomer.name}</h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCustomerId(null)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#475569] transition hover:bg-[#F9FAFB]"
                  aria-label="Close customer profile"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Identity</p>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#94A3B8]">Name</p>
                    <p className="mt-1 text-sm font-medium text-[#111827]">{selectedCustomer.name}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#94A3B8]">Notes</p>
                    <p className="mt-1 text-sm leading-6 text-[#475569]">
                      {selectedCustomer.notes || "No notes recorded for this person yet."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Contact methods</p>
                <div className="mt-3 space-y-4 text-sm text-[#475569]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#94A3B8]">Phone numbers</p>
                    <ul className="mt-2 space-y-1">
                      {selectedCustomer.phoneNumbers.length > 0 ? (
                        selectedCustomer.phoneNumbers.map((phone) => <li key={`${selectedCustomer.id}-phone-${phone}`}>{phone}</li>)
                      ) : (
                        <li className="text-[#94A3B8]">No phone numbers recorded</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#94A3B8]">Email addresses</p>
                    <ul className="mt-2 space-y-1">
                      {selectedCustomer.emailAddresses.length > 0 ? (
                        selectedCustomer.emailAddresses.map((email) => <li key={`${selectedCustomer.id}-email-${email}`}>{email}</li>)
                      ) : (
                        <li className="text-[#94A3B8]">No email addresses recorded</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#94A3B8]">Other methods</p>
                    <ul className="mt-2 space-y-1">
                      {selectedCustomer.otherContactMethods.length > 0 ? (
                        selectedCustomer.otherContactMethods.map((method) => <li key={`${selectedCustomer.id}-method-${method}`}>{method}</li>)
                      ) : (
                        <li className="text-[#94A3B8]">No additional methods recorded</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Relationship</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-full bg-[#ECFDF5] px-2.5 py-1 text-xs font-semibold text-[#166534]">
                    {selectedCustomer.relationship}
                  </span>
                </div>
              </div>

              <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Source</p>
                <p className="mt-3 text-sm text-[#475569]">{selectedCustomer.source || "Source not recorded"}</p>
              </div>

              <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Actions</p>
                <button
                  type="button"
                  onClick={handleOpenInboxForCustomer}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-[18px] bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
                >
                  <MessageSquareText className="h-4 w-4" />
                  View Conversations
                </button>
              </div>

              <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Activity</p>
                <ul className="mt-3 space-y-2 text-sm text-[#475569]">
                  {selectedCustomer.recentInteractions.length > 0 ? (
                    selectedCustomer.recentInteractions.map((interaction) => (
                      <li key={`${selectedCustomer.id}-interaction-${interaction}`} className="rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-2">
                        {interaction}
                      </li>
                    ))
                  ) : (
                    <li className="text-[#94A3B8]">No recent activity recorded yet.</li>
                  )}
                </ul>
              </div>

              <div className="rounded-[20px] border border-[#E5E7EB] bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Tags</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedCustomer.tags.length > 0 ? (
                    selectedCustomer.tags.map((tag) => (
                      <span key={`${selectedCustomer.id}-tag-${tag}`} className="rounded-full border border-[#E5E7EB] bg-[#F9FAFC] px-2 py-1 text-[11px] font-medium text-[#475569]">
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="text-[#94A3B8]">No tags recorded</span>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
