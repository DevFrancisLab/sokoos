type SuggestedReplyCardProps = {
  title?: string;
  reply?: string;
  buttonText?: string;
  onInsert?: () => void;
};

export default function SuggestedReplyCard({
  title = "Suggested Reply",
  reply = "This customer is asking about installation and would like to know the setup timeline.",
  buttonText = "Insert into Chat",
  onInsert,
}: SuggestedReplyCardProps) {
  return (
    <div className="rounded-3xl border border-[#E5E7EB]/10 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[#0F172A]">{title}</p>
          <p className="mt-1 text-xs text-[#64748B]">AI recommended next reply (mock)</p>
        </div>
      </div>

      <div className="mt-5 rounded-[20px] border border-[#E5E7EB]/80 bg-[#F8FAFB] px-4 py-4 text-sm leading-6 text-[#111827]">
        <span className="text-[#475569]">"</span>
        <span>{reply}</span>
        <span className="text-[#475569]">"</span>
      </div>

      <button
        type="button"
        onClick={onInsert}
        className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[#111827] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0b1220]"
      >
        {buttonText}
      </button>
    </div>
  );
}
