import type { ReactNode } from "react";

export function KnowledgeWorkspace({ children }: { children: ReactNode }) {
  return (
    <section className="space-y-5" aria-label="Knowledge training">
      {children}
    </section>
  );
}
