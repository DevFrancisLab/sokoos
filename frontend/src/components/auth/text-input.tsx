import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export function TextInput({ label, id, className, ...props }: TextInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-[#111827]">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "h-11 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 text-sm text-[#111827] shadow-none outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/10",
          className,
        )}
        {...props}
      />
    </div>
  );
}
