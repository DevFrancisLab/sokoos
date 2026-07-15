import type { Dispatch, SetStateAction } from "react";
import { Building2, Phone, Sparkles, UserRound } from "lucide-react";

type BusinessProfile = {
  name: string;
  industry: string;
  description: string;
  phone: string;
  email: string;
  location: string;
  businessHours: string;
  serviceAreas: string;
  paymentMethods: { mPesa: boolean; cash: boolean; bankTransfer: boolean };
};

type ContactItem = {
  id: string;
  name: string;
  relationship: string;
  phone: string;
};

type SettingsPageProps = {
  CARD: string;
  businessProfile: BusinessProfile;
  setBusinessProfile: Dispatch<SetStateAction<BusinessProfile>>;
  personalContacts: ContactItem[];
  newContact: { name: string; relationship: string; phone: string };
  setNewContact: Dispatch<SetStateAction<{ name: string; relationship: string; phone: string }>>;
  addPersonalContact: () => void;
};

export default function SettingsPage({
  CARD,
  businessProfile,
  setBusinessProfile,
  personalContacts,
  newContact,
  setNewContact,
  addPersonalContact,
}: SettingsPageProps) {
  return (
    <div className="space-y-6">
      <div className={`${CARD} border-[#ECFDF5] bg-gradient-to-br from-[#F0FDF4] to-white`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">Business settings</p>
            <h1 className="mt-2 text-[34px] font-semibold text-[#0F172A]">Set your business details once, then let the AI use them</h1>
            <p className="mt-3 text-[15px] text-[#475569]">These fields are the foundation for helpful replies, accurate product recommendations, and smoother handoffs.</p>
          </div>
          <div className="rounded-[24px] border border-[#D1FAE5] bg-white/80 px-4 py-3 text-sm font-semibold text-[#065F46]">
            <div className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Easy owner setup</div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className={`${CARD}`}>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-[#22C55E]" />
            <h2 className="text-[24px] font-semibold text-[#0F172A]">Business profile</h2>
          </div>
          <div className="mt-5 space-y-4 text-sm text-[#475569]">
            <div>
              <label className="font-medium text-[#111827]">Business name</label>
              <input value={businessProfile.name} onChange={(event) => setBusinessProfile({ ...businessProfile, name: event.target.value })} className="mt-2 w-full rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] px-3 py-3 outline-none" />
            </div>
            <div>
              <label className="font-medium text-[#111827]">Industry</label>
              <input value={businessProfile.industry} onChange={(event) => setBusinessProfile({ ...businessProfile, industry: event.target.value })} className="mt-2 w-full rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] px-3 py-3 outline-none" />
            </div>
            <div>
              <label className="font-medium text-[#111827]">Short description</label>
              <textarea value={businessProfile.description} onChange={(event) => setBusinessProfile({ ...businessProfile, description: event.target.value })} className="mt-2 min-h-24 w-full rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] px-3 py-3 outline-none" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="font-medium text-[#111827]">Phone</label>
                <input value={businessProfile.phone} onChange={(event) => setBusinessProfile({ ...businessProfile, phone: event.target.value })} className="mt-2 w-full rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] px-3 py-3 outline-none" />
              </div>
              <div>
                <label className="font-medium text-[#111827]">Email</label>
                <input value={businessProfile.email} onChange={(event) => setBusinessProfile({ ...businessProfile, email: event.target.value })} className="mt-2 w-full rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] px-3 py-3 outline-none" />
              </div>
            </div>
          </div>
        </div>

        <div className={`${CARD}`}>
          <div className="flex items-center gap-2">
            <UserRound className="h-5 w-5 text-[#22C55E]" />
            <h2 className="text-[24px] font-semibold text-[#0F172A]">Helpful contacts</h2>
          </div>
          <div className="mt-5 space-y-3">
            {personalContacts.map((contact) => (
              <div key={contact.id} className="rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[#111827]">{contact.name}</p>
                    <p className="text-sm text-[#64748B]">{contact.relationship}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#475569]">
                    <Phone className="h-4 w-4 text-[#22C55E]" />
                    {contact.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-3 rounded-[20px] border border-[#EEF2F6] bg-white p-4">
            <div>
              <label className="font-medium text-[#111827]">Name</label>
              <input value={newContact.name} onChange={(event) => setNewContact({ ...newContact, name: event.target.value })} className="mt-2 w-full rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] px-3 py-3 outline-none" />
            </div>
            <div>
              <label className="font-medium text-[#111827]">Relationship</label>
              <input value={newContact.relationship} onChange={(event) => setNewContact({ ...newContact, relationship: event.target.value })} className="mt-2 w-full rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] px-3 py-3 outline-none" />
            </div>
            <div>
              <label className="font-medium text-[#111827]">Phone</label>
              <input value={newContact.phone} onChange={(event) => setNewContact({ ...newContact, phone: event.target.value })} className="mt-2 w-full rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] px-3 py-3 outline-none" />
            </div>
            <button type="button" onClick={addPersonalContact} className="rounded-[20px] bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white hover:bg-[#16A34A]">
              Add contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
