import type { Dispatch, SetStateAction } from "react";
import { Users, Search, Sparkles } from "lucide-react";

type Customer = {
  id: string;
  avatar: string;
  name: string;
  phone: string;
  leadStatus: string;
  interestedProduct: string;
  lastInteraction: string;
};

type CustomersPageProps = {
  CARD: string;
  customerSearch: string;
  setCustomerSearch: Dispatch<SetStateAction<string>>;
  filteredCustomers: Customer[];
  isPersonalByPhone: (phone?: string | null) => boolean;
};

export default function CustomersPage({
  CARD,
  customerSearch,
  setCustomerSearch,
  filteredCustomers,
  isPersonalByPhone,
}: CustomersPageProps) {
  return (
    <div className="space-y-6">
      <div className={`${CARD} border-[#ECFDF5] bg-gradient-to-br from-[#F0FDF4] to-white`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">Customer onboarding</p>
            <h1 className="mt-2 text-[34px] font-semibold text-[#0F172A]">Keep every customer conversation moving forward</h1>
            <p className="mt-3 text-[15px] text-[#475569]">The AI can help you qualify leads, route hot opportunities, and keep track of what each prospect cares about.</p>
          </div>
          <div className="rounded-[24px] border border-[#D1FAE5] bg-white/80 px-4 py-3 text-sm font-semibold text-[#065F46]">
            <div className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Simple lead follow-up</div>
          </div>
        </div>
      </div>

      <div className={`${CARD}`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-[#22C55E]" />
            <h2 className="text-[24px] font-semibold text-[#0F172A]">Prospects and customers</h2>
          </div>
          <label className="flex items-center gap-2 rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] px-3 py-3 text-sm text-[#64748B]">
            <Search className="h-4 w-4" />
            <input value={customerSearch} onChange={(event) => setCustomerSearch(event.target.value)} placeholder="Search customers" className="w-full bg-transparent outline-none" />
          </label>
        </div>

        <div className="mt-5 space-y-3">
          {filteredCustomers.map((customer) => (
            <div key={customer.id} className="flex flex-col gap-4 rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DBEAFE] font-semibold text-[#1D4ED8]">
                  {customer.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">{customer.name}</p>
                  <p className="text-sm text-[#64748B]">{customer.phone}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-[#ECFDF5] px-3 py-1 font-medium text-[#047857]">{customer.leadStatus}</span>
                <span className="rounded-full bg-white px-3 py-1 font-medium text-[#475569]">{customer.interestedProduct}</span>
                <span className="rounded-full bg-[#EFF6FF] px-3 py-1 font-medium text-[#1D4ED8]">{customer.lastInteraction}</span>
              </div>
              {isPersonalByPhone(customer.phone) && <span className="text-sm font-semibold text-[#22C55E]">Personal contact</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
