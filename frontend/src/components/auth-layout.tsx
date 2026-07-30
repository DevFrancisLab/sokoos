import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import sokoosLogo from "@/assets/sokoos_logo.png";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(22,163,74,0.10),_transparent_32%),linear-gradient(135deg,_#f8fafc_0%,_#ffffff_100%)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/80 px-3 py-2 text-sm font-medium text-[#111827] shadow-sm backdrop-blur"
        >
          <img src={sokoosLogo} alt="Sokoos" className="h-8 w-8 rounded-lg object-cover" />
          <span className="text-sm font-medium text-[#111827]">Sokoos</span>
        </Link>

        <div className="flex flex-1 items-center justify-center py-10 sm:py-12">{children}</div>
      </div>
    </div>
  );
}
