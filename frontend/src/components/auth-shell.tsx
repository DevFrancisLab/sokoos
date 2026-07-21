import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type AuthShellProps = {
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
};

export function AuthShell({ title, description, children, footer }: AuthShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(22,163,74,0.10),_transparent_32%),linear-gradient(135deg,_#f8fafc_0%,_#ffffff_100%)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/80 px-3 py-2 text-sm font-medium text-[#111827] shadow-sm backdrop-blur"
        >
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
          </div>
          Sokoos
        </Link>

        <div className="flex flex-1 items-center justify-center py-10 sm:py-12">
          <Card className="w-full max-w-[480px] rounded-[28px] border border-[#E5E7EB] bg-white p-7 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8">
            <CardHeader className="p-0">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#DCFCE7] bg-[#F0FDF4] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#166534]">
                <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
                Preview access
              </div>
              <CardTitle className="mt-5 text-3xl font-semibold tracking-tight text-[#111827]">
                {title}
              </CardTitle>
              <CardDescription className="mt-2 text-base leading-6 text-[#64748B]">
                {description}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 pt-6">{children}</CardContent>

            <div className="mt-6 border-t border-[#E5E7EB] pt-5 text-sm text-[#64748B]">
              {footer}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
