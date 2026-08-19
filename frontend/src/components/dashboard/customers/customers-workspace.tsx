import { useEffect, useRef, useState } from "react";
import { LoaderCircle, MessageSquareText, Pencil, Plus, RefreshCw, Search, Trash2, User, X } from "lucide-react";

import { ApiError, createCustomer, deleteCustomer, getCustomers, updateCustomer, type Customer, type CustomerInput, type CustomerRelationship, type CustomerSource } from "@/lib/api";

type Props = { setSelected: (value: string) => void };
type Section = "All" | "Leads" | "Customers";
type Form = Required<CustomerInput>;

const emptyForm = (): Form => ({ name: "", phone: "", email: "", company: "", location: "", notes: "", relationship: "contact", lead_status: "", source: "manual" });
const relationshipLabels: Record<CustomerRelationship, string> = { contact: "Contact", lead: "Lead", customer: "Customer" };
const sourceLabels: Record<CustomerSource, string> = { whatsapp: "WhatsApp", website: "Website", email: "Email", sms: "SMS", manual: "Manual", import: "Import", google_contacts: "Google Contacts", other: "Other" };
const leadLabels = { new: "New", cold: "Cold", warm: "Warm", hot: "Hot" } as const;
const toForm = (customer: Customer): Form => ({ name: customer.name, phone: customer.phone, email: customer.email, company: customer.company, location: customer.location, notes: customer.notes, relationship: customer.relationship, lead_status: customer.lead_status, source: customer.source });

const messageFor = (error: unknown) => {
  if (!(error instanceof ApiError)) return "Unable to complete the customer request.";
  const errors = (error.data as { errors?: Record<string, string[] | string> } | null)?.errors;
  if (errors) return Object.values(errors).flat().join(" ");
  if (error.status === 401) return "Your session has expired. Please sign in again.";
  if (error.status === 404) return "Business not found.";
  return error.message;
};

export function CustomersWorkspace({ setSelected }: Props) {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<Section>("All");
  const [ordering, setOrdering] = useState<"-created_at" | "name" | "relationship">("-created_at");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Customer | null>(null);
  const [form, setForm] = useState<Form>(emptyForm);
  const [formError, setFormError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const requestId = useRef(0);
  const relationship = section === "Leads" ? "lead" : section === "Customers" ? "customer" : undefined;
  const selected = customers.find((customer) => customer.id === selectedId) ?? null;

  const load = async () => {
    const id = ++requestId.current;
    setLoading(true); setError(null);
    try {
      const result = await getCustomers({ search: query, relationship, ordering });
      if (id !== requestId.current) return;
      const next = result.data ?? [];
      setCustomers(next);
      setSelectedId((current) => next.some((customer) => customer.id === current) ? current : null);
    } catch (requestError) {
      if (id === requestId.current) { setCustomers([]); setSelectedId(null); setError(messageFor(requestError)); }
    } finally { if (id === requestId.current) setLoading(false); }
  };

  useEffect(() => {
    const timer = window.setTimeout(() => { void load(); }, query ? 250 : 0);
    return () => window.clearTimeout(timer);
  }, [query, relationship, ordering]);

  const openCreate = () => { setEditing(null); setForm(emptyForm()); setFormError(null); setFormOpen(true); };
  const openEdit = (customer: Customer) => { setEditing(customer); setForm(toForm(customer)); setFormError(null); setFormOpen(true); };
  const save = async () => {
    if (!form.name.trim() || saving) return;
    setSaving(true); setFormError(null);
    const payload: CustomerInput = { ...form, lead_status: form.relationship === "lead" ? form.lead_status || "new" : "" };
    try {
      const result = editing ? await updateCustomer(editing.id, payload) : await createCustomer(payload);
      const saved = result.data?.customer;
      if (!saved) throw new Error("Customer response was empty.");
      setCustomers((current) => (editing ? current.map((customer) => customer.id === saved.id ? saved : customer) : [saved, ...current]).filter((customer) => !relationship || customer.relationship === relationship));
      setSelectedId(saved.id); setFormOpen(false);
    } catch (requestError) { setFormError(messageFor(requestError)); }
    finally { setSaving(false); }
  };
  const remove = async () => {
    if (!selected || deleting) return;
    setDeleting(true); setFormError(null);
    try { await deleteCustomer(selected.id); setCustomers((current) => current.filter((customer) => customer.id !== selected.id)); setSelectedId(null); }
    catch (requestError) { setFormError(messageFor(requestError)); }
    finally { setDeleting(false); }
  };

  return <div className="mx-auto w-full max-w-[1280px] space-y-6 px-4 pb-10 lg:px-6">
    <header className="flex flex-col gap-5 border-b border-[#E5E7EB] pb-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6B7280]">Customers</p><h2 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-[#111827] lg:text-[26px]">Customers</h2><p className="mt-2 text-sm leading-6 text-[#6B7280]">Manage the people connected to your business and their relationship with it.</p></div><button type="button" onClick={openCreate} className="inline-flex items-center justify-center gap-2 rounded-[20px] bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"><Plus className="h-4 w-4" /> Add Customer</button></header>
    <section className="rounded-[24px] border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"><div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_180px_180px_auto]"><label className="flex items-center gap-3 rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#64748B]"><Search className="h-4 w-4 shrink-0" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search customers, phone numbers, email addresses, or notes" className="w-full bg-transparent text-sm text-[#111827] outline-none" /></label><Select label="Filter" value={section} onChange={(value) => setSection(value as Section)} options={[["All", "All"], ["Leads", "Leads"], ["Customers", "Customers"]]} /><Select label="Sort" value={ordering} onChange={(value) => setOrdering(value as typeof ordering)} options={[["-created_at", "Newest"], ["name", "Name"], ["relationship", "Relationship"]]} /><button type="button" onClick={() => void load()} disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-[#E5E7EB] px-4 py-3 text-sm font-semibold text-[#111827] disabled:opacity-60"><RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Reload</button></div></section>
    {error ? <ErrorState message={error} onRetry={() => void load()} /> : loading ? <section className="flex items-center justify-center gap-3 rounded-[24px] border border-[#E5E7EB] bg-white p-10 text-sm text-[#64748B]"><LoaderCircle className="h-5 w-5 animate-spin" /> Loading customers…</section> : customers.length === 0 ? <EmptyState filtered={Boolean(query || relationship)} onCreate={openCreate} /> : <CustomerTable customers={customers} selectedId={selectedId} onSelect={setSelectedId} />}
    {selected && <CustomerPanel customer={selected} error={formError} deleting={deleting} onClose={() => { setSelectedId(null); setFormError(null); }} onEdit={() => openEdit(selected)} onDelete={() => void remove()} onInbox={() => setSelected("Inbox")} />}
    {formOpen && <CustomerDialog form={form} editing={Boolean(editing)} saving={saving} error={formError} onClose={() => !saving && setFormOpen(false)} onChange={setForm} onSave={() => void save()} />}
  </div>;
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: Array<[string, string]> }) { return <label className="flex items-center gap-2 rounded-[20px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-3 text-sm text-[#475569]"><span className="font-medium">{label}</span><select value={value} onChange={(event) => onChange(event.target.value)} className="w-full bg-transparent text-sm font-medium text-[#111827] outline-none">{options.map(([value, text]) => <option key={value} value={value}>{text}</option>)}</select></label>; }
function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) { return <section role="alert" className="rounded-[24px] border border-[#FECACA] bg-[#FEF2F2] p-6 text-center"><h3 className="text-lg font-semibold text-[#991B1B]">Customers could not be loaded</h3><p className="mt-2 text-sm text-[#B91C1C]">{message}</p><button type="button" onClick={onRetry} className="mt-4 rounded-[18px] bg-white px-4 py-2 text-sm font-semibold text-[#991B1B]">Try again</button></section>; }
function EmptyState({ filtered, onCreate }: { filtered: boolean; onCreate: () => void }) { return <section className="rounded-[24px] border border-dashed border-[#E5E7EB] bg-[#F9FAFB] p-8 text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#22C55E]"><User className="h-6 w-6" /></div><h3 className="mt-4 text-xl font-semibold text-[#111827]">{filtered ? "No matching records" : "No customer records yet"}</h3><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#6B7280]">{filtered ? "Try a different search term or filter." : "Add your first customer to begin building your business directory."}</p><button type="button" onClick={onCreate} className="mt-5 inline-flex items-center gap-2 rounded-[20px] bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white"><Plus className="h-4 w-4" /> Add Customer</button></section>; }
function CustomerTable({ customers, selectedId, onSelect }: { customers: Customer[]; selectedId: number | null; onSelect: (id: number) => void }) { return <section className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]"><div className="flex justify-between border-b border-[#E5E7EB] px-4 py-3 text-sm text-[#64748B]"><span>{customers.length} {customers.length === 1 ? "record" : "records"}</span><span>Business-scoped directory</span></div><div className="overflow-x-auto"><table className="min-w-full text-left text-sm"><thead className="bg-[#F8FAFC] text-[#475569]"><tr><th className="px-4 py-3 font-semibold">Name</th><th className="px-4 py-3 font-semibold">Relationship</th><th className="px-4 py-3 font-semibold">Contact</th><th className="px-4 py-3 font-semibold">Company / location</th><th className="px-4 py-3 font-semibold">Source</th><th className="px-4 py-3 font-semibold">Status</th></tr></thead><tbody>{customers.map((customer) => <tr key={customer.id} tabIndex={0} onClick={() => onSelect(customer.id)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onSelect(customer.id); } }} className={`cursor-pointer border-t border-[#E5E7EB] transition hover:bg-[#F8FAFC] ${selectedId === customer.id ? "bg-[#F3FDF7]" : ""}`}><td className="px-4 py-3 font-medium text-[#111827]">{customer.name}</td><td className="px-4 py-3">{relationshipLabels[customer.relationship]}</td><td className="px-4 py-3 text-[#475569]">{[customer.phone, customer.email].filter(Boolean).join(", ") || "No contact method"}</td><td className="px-4 py-3 text-[#475569]">{[customer.company, customer.location].filter(Boolean).join(" · ") || "—"}</td><td className="px-4 py-3 text-[#475569]">{sourceLabels[customer.source]}</td><td className="px-4 py-3 text-[#475569]">{customer.relationship === "lead" ? leadLabels[customer.lead_status as keyof typeof leadLabels] : "—"}</td></tr>)}</tbody></table></div></section>; }
function CustomerPanel({ customer, error, deleting, onClose, onEdit, onDelete, onInbox }: { customer: Customer; error: string | null; deleting: boolean; onClose: () => void; onEdit: () => void; onDelete: () => void; onInbox: () => void }) { const details = [["Contact", [customer.phone, customer.email]], ["Business details", [customer.company, customer.location]], ["Relationship", [relationshipLabels[customer.relationship], customer.relationship === "lead" ? leadLabels[customer.lead_status as keyof typeof leadLabels] : ""]], ["Source", [sourceLabels[customer.source]]], ["Notes", [customer.notes || "No notes recorded."]]]; return <div className="fixed inset-0 z-40 flex justify-end bg-black/20 backdrop-blur-[2px]"><aside className="h-full w-full max-w-[440px] overflow-y-auto border-l border-[#E5E7EB] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]"><div className="flex justify-between border-b border-[#E5E7EB] p-5"><div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">Customer profile</p><h3 className="mt-1 text-xl font-semibold text-[#111827]">{customer.name}</h3></div><button type="button" onClick={onClose} aria-label="Close customer profile"><X className="h-5 w-5" /></button></div><div className="space-y-4 p-5">{details.map(([title, values]) => <section key={title as string} className="rounded-[20px] border border-[#E5E7EB] bg-[#F8FAFC] p-4"><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">{title}</p>{(values as string[]).filter(Boolean).map((value) => <p key={value} className="mt-2 text-sm text-[#475569]">{value}</p>)}</section>)}{error && <p role="alert" className="rounded-xl bg-[#FEF2F2] p-3 text-sm text-[#B91C1C]">{error}</p>}<button type="button" onClick={onEdit} className="inline-flex w-full items-center justify-center gap-2 rounded-[18px] border border-[#E5E7EB] px-4 py-2.5 text-sm font-semibold"><Pencil className="h-4 w-4" /> Edit customer</button><button type="button" onClick={onInbox} className="inline-flex w-full items-center justify-center gap-2 rounded-[18px] bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white"><MessageSquareText className="h-4 w-4" /> Open Inbox</button><button type="button" onClick={onDelete} disabled={deleting} className="inline-flex w-full items-center justify-center gap-2 rounded-[18px] border border-[#FECACA] bg-[#FEF2F2] px-4 py-2.5 text-sm font-semibold text-[#B91C1C] disabled:opacity-60"><Trash2 className="h-4 w-4" /> {deleting ? "Deleting…" : "Delete customer"}</button></div></aside></div>; }
function CustomerDialog({ form, editing, saving, error, onClose, onChange, onSave }: { form: Form; editing: boolean; saving: boolean; error: string | null; onClose: () => void; onChange: (form: Form) => void; onSave: () => void }) { const set = <K extends keyof Form>(key: K, value: Form[K]) => onChange({ ...form, [key]: value }); return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"><div role="dialog" aria-modal="true" className="max-h-full w-full max-w-2xl overflow-y-auto rounded-[24px] bg-white p-6 shadow-xl"><div className="flex justify-between"><div><h3 className="text-xl font-semibold">{editing ? "Edit customer" : "Add customer"}</h3><p className="mt-1 text-sm text-[#64748B]">Ownership is assigned by your business account.</p></div><button type="button" onClick={onClose} aria-label="Close form"><X className="h-5 w-5" /></button></div>{error && <p role="alert" className="mt-4 rounded-xl bg-[#FEF2F2] p-3 text-sm text-[#B91C1C]">{error}</p>}<div className="mt-5 grid gap-4 sm:grid-cols-2"><Field label="Name" value={form.name} required onChange={(value) => set("name", value)} /><Field label="Phone" value={form.phone} onChange={(value) => set("phone", value)} /><Field label="Email" type="email" value={form.email} onChange={(value) => set("email", value)} /><Field label="Company" value={form.company} onChange={(value) => set("company", value)} /><Field label="Location" value={form.location} onChange={(value) => set("location", value)} /><Select label="Relationship" value={form.relationship} onChange={(value) => set("relationship", value as CustomerRelationship)} options={[["contact", "Contact"], ["lead", "Lead"], ["customer", "Customer"]]} />{form.relationship === "lead" && <Select label="Lead status" value={form.lead_status || "new"} onChange={(value) => set("lead_status", value as Form["lead_status"])} options={[["new", "New"], ["cold", "Cold"], ["warm", "Warm"], ["hot", "Hot"]]} />}<Select label="Source" value={form.source} onChange={(value) => set("source", value as CustomerSource)} options={Object.entries(sourceLabels)} /><label className="grid gap-1.5 text-sm font-medium text-[#334155] sm:col-span-2"><span>Notes</span><textarea value={form.notes} onChange={(event) => set("notes", event.target.value)} rows={4} className="rounded-lg border border-[#DCE3EA] px-3 py-2 text-sm" /></label></div><div className="mt-6 flex justify-end gap-3"><button type="button" onClick={onClose} disabled={saving} className="px-4 py-2 text-sm font-semibold text-[#475569]">Cancel</button><button type="button" onClick={onSave} disabled={saving || !form.name.trim()} className="rounded-lg bg-[#22C55E] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">{saving ? "Saving…" : editing ? "Save changes" : "Add customer"}</button></div></div></div>; }
function Field({ label, value, onChange, required = false, type = "text" }: { label: string; value: string; onChange: (value: string) => void; required?: boolean; type?: "text" | "email" }) { return <label className="grid gap-1.5 text-sm font-medium text-[#334155]"><span>{label}</span><input type={type} required={required} value={value} onChange={(event) => onChange(event.target.value)} className="rounded-lg border border-[#DCE3EA] px-3 py-2 text-sm" /></label>; }
