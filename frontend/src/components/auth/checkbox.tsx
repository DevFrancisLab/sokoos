import { Check } from "lucide-react";
import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export function Checkbox({ label, id, className, ...props }: CheckboxProps) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-4 text-sm text-[#64748B]">
      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-[#CBD5E1] bg-white">
        <input id={id} type="checkbox" className={cn("peer sr-only", className)} {...props} />
        <Check className="hidden h-3 w-3 text-[#16A34A] peer-checked:block" strokeWidth={3} />
      </span>
      <span className="leading-5">{label}</span>
    </label>
  );
}
