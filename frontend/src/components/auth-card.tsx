import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AuthCardProps = {
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function AuthCard({ children, footer, className }: AuthCardProps) {
  return (
    <Card
      className={cn(
        "w-full max-w-[480px] rounded-[28px] border border-[#E5E7EB] bg-white p-7 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8",
        className,
      )}
    >
      <CardContent className="p-0">{children}</CardContent>

      {footer ? (
        <div className="mt-6 border-t border-[#E5E7EB] pt-5 text-sm text-[#64748B]">{footer}</div>
      ) : null}
    </Card>
  );
}
