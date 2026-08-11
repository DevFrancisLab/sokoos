import { type ReactNode } from "react";
import { Check, ChevronRight, ChevronDown, Sparkles, User, MessageCircle } from "lucide-react";

type NavigatorItem = {
  title: string;
  description: string;
  section: string;
  Icon: any;
  complete: boolean;
  percent: number;
  unlocked: boolean;
};

type Props = {
  workspaceNavigatorItems: NavigatorItem[];
  activeWorkspaceSection: string;
  handleWorkspaceSectionSelection: (section: string) => void;
  setActiveWorkspaceSection: (section: string) => void;
  focusKnowledgeLesson: (step: number) => void;
  focusIdentityLesson: (step: number) => void;
  activeKnowledgeStep: number;
  activeIdentityStep: number;
  overallTrainingComplete: boolean;
  aiReadiness: number;
  currentTrainingStepNumber: number;
  currentTrainingLessonCount: number;
  currentTrainingLessonLabel: string;
  completedTrainingLessonCount: number;
  totalTrainingLessonCount: number;
  overallTrainingPercent: number;
  children?: ReactNode;
};

export default function TrainingWorkspace({
  workspaceNavigatorItems,
  activeWorkspaceSection,
  handleWorkspaceSectionSelection,
  setActiveWorkspaceSection,
  focusKnowledgeLesson,
  focusIdentityLesson,
  activeKnowledgeStep,
  activeIdentityStep,
  overallTrainingComplete,
  aiReadiness,
  currentTrainingStepNumber,
  currentTrainingLessonCount,
  currentTrainingLessonLabel,
  completedTrainingLessonCount,
  totalTrainingLessonCount,
  overallTrainingPercent,
  children,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-[1280px] space-y-6 px-4 pb-10 lg:px-6">
      <div className="border-b border-[#E5E7EB] pb-5">
        <div className="flex flex-col gap-5">
          <div className="max-w-3xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6B7280]">Your new teammate</p>
            <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-[#111827] lg:text-[26px]">Hire and train your AI Employee.</h2>
            <p className="mt-2 text-sm leading-6 text-[#6B7280]">Give your new teammate the context, voice, and tools it needs to do great work from day one.</p>
          </div>

          <section className="rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)]" aria-label="AI setup score">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
              <div className="flex gap-3">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg shadow-sm ${overallTrainingComplete ? "bg-[#22C55E] text-white" : "bg-[#ECFDF5] text-[#166534]"}`}>{overallTrainingComplete ? "🎉" : "🤖"}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#111827]">{overallTrainingComplete ? "Your AI Employee is Ready" : "Training Your AI Employee"}</p>
                  <p className="mt-1 text-xs text-[#475569]">{overallTrainingComplete ? "Your AI has completed the available training and is ready to represent your business." : `Step ${currentTrainingStepNumber} of ${currentTrainingLessonCount} · ${currentTrainingLessonLabel}`}</p>
                  <p className="mt-1 text-xs leading-5 text-[#64748B]">{overallTrainingComplete ? "Keep teaching your AI as your business grows." : activeWorkspaceSection === "Knowledge Hub" ? "Your AI is building knowledge so it can answer with more confidence." : "Your AI is learning about your business so it can represent you confidently in every customer conversation."}</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#EEF2F6]"><div className="h-full rounded-full bg-[#22C55E] transition-all duration-300" style={{ width: `${overallTrainingComplete ? 100 : overallTrainingPercent}%` }} /></div>
                  <p className="mt-2 text-[11px] font-semibold text-[#166534]">{completedTrainingLessonCount} of {totalTrainingLessonCount} lessons complete · {overallTrainingComplete ? 100 : overallTrainingPercent}% trained</p>
                </div>
              </div>
              <div className="rounded-xl border border-[#BBF7D0] bg-[#F7FEF9] p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#166534]">AI Readiness</p>
                <p className="mt-1 text-lg font-semibold text-[#111827]">{overallTrainingComplete ? 100 : aiReadiness}% ready</p>
                <p className="mt-1 text-xs text-[#64748B]">{overallTrainingComplete ? "Ready for customer conversations" : `About ${Math.max(1, 6 - completedTrainingLessonCount)} min left`}</p>
                <button type="button" onClick={() => { if (activeWorkspaceSection === "Knowledge Hub") { setActiveWorkspaceSection("Knowledge Hub"); focusKnowledgeLesson(activeKnowledgeStep); } else { setActiveWorkspaceSection("Identity"); focusIdentityLesson(activeIdentityStep); } }} className="mt-3 text-xs font-semibold text-[#166534] transition hover:text-[#047857]">Continue training <ChevronRight className="inline h-3.5 w-3.5" /></button>
              </div>
            </div>
          </section>

          <nav aria-label="AI employee workspace sections" className="sticky top-0 z-30 -mx-4 border-y border-[#E5E7EB] bg-white/95 px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur lg:hidden">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {workspaceNavigatorItems.map((tab) => {
                const active = activeWorkspaceSection === tab.section;
                return (
                  <button key={tab.title} type="button" onClick={() => handleWorkspaceSectionSelection(tab.section)} aria-current={active ? "page" : undefined} className={`relative flex min-w-0 flex-col gap-2 rounded-xl border px-2.5 py-2.5 text-left text-xs font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 ${active ? "border-[#86EFAC] bg-[#ECFDF5] text-[#166534] shadow-sm" : "border-[#E5E7EB] bg-white text-[#475569] hover:border-[#D1FAE5] hover:bg-[#F9FCFA]"}`}>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${active ? "bg-[#22C55E] text-white" : tab.complete ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#F1F5F9] text-[#64748B]"}`}>
                          {tab.complete ? <Check className="h-3.5 w-3.5" /> : <tab.Icon className="h-3.5 w-3.5" />}
                        </span>
                        <span className="truncate">{tab.title}</span>
                      </div>
                      {tab.complete ? <Check className="h-3.5 w-3.5 shrink-0 text-[#16A34A]" /> : null}
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#E5E7EB]"><div className={`h-full rounded-full transition-all duration-500 ${tab.complete ? "bg-[#22C55E]" : "bg-[#CBD5E1]"}`} style={{ width: `${Math.max(4, tab.percent)}%` }} /></div>
                    <span className="text-[10px] font-medium text-[#64748B]">{tab.percent}%</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      <main className="relative space-y-5 pb-28 lg:pl-[252px]">
        <aside className="hidden w-[228px] lg:sticky lg:top-5 lg:float-left lg:-ml-[252px] lg:block" aria-label="AI employee workspaces">
          <div className="rounded-xl border border-[#E5E7EB] bg-white p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
            <div className="px-2.5 pb-2 pt-1.5"><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">AI training</p><p className="mt-1 text-xs text-[#64748B]">Watch your AI grow one workspace at a time.</p></div>
            <nav className="space-y-2" aria-label="AI Employee workspace navigator">
              {workspaceNavigatorItems.map((item) => {
                const active = activeWorkspaceSection === item.section;
                return <button key={item.title} type="button" onClick={() => handleWorkspaceSectionSelection(item.section)} aria-current={active ? "page" : undefined} className={`w-full rounded-xl border px-2.5 py-2.5 text-left transition-all duration-200 ease-out ${active ? "border-[#86EFAC] bg-[#ECFDF5] shadow-sm" : "border-[#E5E7EB] bg-white hover:border-[#D1FAE5] hover:bg-[#F9FCFA]"}`}>
                  <div className="flex items-center gap-2.5">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${active ? "bg-[#22C55E] text-white" : item.complete ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#F1F5F9] text-[#64748B]"}`}>
                      {item.complete ? <Check className="h-3.5 w-3.5" /> : <item.Icon className="h-3.5 w-3.5" />}
                    </span>
                    <span className="min-w-0 flex-1"><span className={`block truncate text-xs font-semibold ${active ? "text-[#166534]" : "text-[#111827]"}`}>{item.title}</span><span className="mt-0.5 block truncate text-[10px] text-[#64748B]">{item.description}</span></span>
                    {item.complete && <Check className="h-3.5 w-3.5 shrink-0 text-[#16A34A]" />}
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E5E7EB]"><div className={`h-full rounded-full transition-all duration-500 ${item.complete ? "bg-[#22C55E]" : "bg-[#CBD5E1]"}`} style={{ width: `${Math.max(4, item.percent)}%` }} /></div>
                  <div className="mt-1 flex items-center justify-between text-[10px] font-medium text-[#64748B]"><span>{active ? "In progress" : "Ready"}</span><span>{item.percent}%</span></div>
                </button>;
              })}
            </nav>
          </div>
        </aside>

        {/* children will render the actual training workspace content kept in DashboardLayout */}
        {children}
      </main>
    </div>
  );
}
