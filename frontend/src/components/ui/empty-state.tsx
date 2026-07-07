import { LucideIcon } from "lucide-react";

type EmptyStateProps = {
  icon: LucideIcon;
  label: string;
};

export default function EmptyState({ icon: Icon, label }: EmptyStateProps) {
  return (
    <div className="rounded-[22px] border border-[#E5E7EB]/20 bg-[#F8FAFB] p-10 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-3xl bg-[#DCFCE7] text-[#166534]">
        <Icon className="h-6 w-6" />
      </div>
      <p className="mt-4 text-sm font-semibold text-[#111827]">{label}</p>
    </div>
  );
}
