import type { SelectHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  id: string;
  options: Array<{ label: string; value: string }>;
};

export function SelectInput({ label, id, options, className, ...props }: SelectInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-[#111827]">
        {label}
      </label>
      <select
        id={id}
        className={cn(
          "h-11 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 text-sm text-[#111827] shadow-none outline-none transition-colors focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/10",
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
