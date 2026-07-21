import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AuthHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
};

export function AuthHeader({ eyebrow, title, description, className, children }: AuthHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {eyebrow ? (
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#DCFCE7] bg-[#F0FDF4] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#166534]">
          <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
          {eyebrow}
        </div>
      ) : null}

      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-[#111827]">{title}</h1>
        <p className="text-base leading-6 text-[#64748B]">{description}</p>
      </div>

      {children ? <div className="pt-2">{children}</div> : null}
    </div>
  );
}
