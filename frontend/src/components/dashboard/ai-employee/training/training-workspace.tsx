import { type ReactNode } from "react";
import { Check, ChevronRight, type LucideIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export type TrainingWorkspaceItem = {
  title: string;
  description: string;
  section: string;
  Icon: LucideIcon;
  complete: boolean;
  percent: number;
  unlocked: boolean;
};

type Props = {
  workspaceNavigatorItems: TrainingWorkspaceItem[];
  activeWorkspaceSection: string;
  dialogOpen: boolean;
  onDialogOpenChange: (open: boolean) => void;
  onOpenWorkspace: (section: string) => void;
  overallTrainingComplete: boolean;
  currentTrainingStepNumber: number;
  currentTrainingLessonCount: number;
  currentTrainingLessonLabel: string;
  completedTrainingLessonCount: number;
  totalTrainingLessonCount: number;
  overallTrainingPercent: number;
  aiReadinessStatus: string;
  aiReadinessDetail: string;
  aiConfigurationError: string | null;
  onContinueTraining: () => void;
  onContinueLessons?: () => void;
  children?: ReactNode;
};

const workspaceStatus = (item: TrainingWorkspaceItem) => {
  if (item.complete) return "Complete";
  if (item.percent > 0) return "In progress";
  return "Not started";
};

export default function TrainingWorkspace({
  workspaceNavigatorItems,
  activeWorkspaceSection,
  dialogOpen,
  onDialogOpenChange,
  onOpenWorkspace,
  overallTrainingComplete,
  currentTrainingStepNumber,
  currentTrainingLessonCount,
  currentTrainingLessonLabel,
  completedTrainingLessonCount,
  totalTrainingLessonCount,
  overallTrainingPercent,
  aiReadinessStatus,
  aiReadinessDetail,
  aiConfigurationError,
  onContinueTraining,
  onContinueLessons,
  children,
}: Props) {
  const activeItem = workspaceNavigatorItems.find((item) => item.section === activeWorkspaceSection);
  const ActiveIcon = activeItem?.Icon;

  return (
    <div className="mx-auto w-full max-w-[1280px] space-y-6 px-4 pb-10 lg:px-6">
      <header className="max-w-3xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6B7280]">AI Training</p>
        <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-[#111827] lg:text-[26px]">
          Your AI Employee&apos;s training workspaces
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#6B7280]">
          Choose a workspace to train your AI. Lessons open in a focused view so you can work through one area at a time.
        </p>
      </header>

      <section className="rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)]" aria-label="AI setup score">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
          <div className="flex gap-3">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg shadow-sm ${overallTrainingComplete ? "bg-[#22C55E] text-white" : "bg-[#ECFDF5] text-[#166534]"}`}>
              {overallTrainingComplete ? "🎉" : "🤖"}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[#111827]">{overallTrainingComplete ? "Setup checklist complete" : "Setting up your AI Employee"}</p>
              <p className="mt-1 text-xs text-[#475569]">
                {overallTrainingComplete
                  ? "The available configuration and knowledge workflow steps are complete."
                  : `Step ${currentTrainingStepNumber} of ${currentTrainingLessonCount} · ${currentTrainingLessonLabel}`}
              </p>
              <p className="mt-1 text-xs leading-5 text-[#64748B]">
                {overallTrainingComplete
                  ? "You can update this configuration as your business changes."
                  : "Open a workspace to continue training."}
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#EEF2F6]">
                <div className="h-full rounded-full bg-[#22C55E] transition-all duration-300" style={{ width: `${overallTrainingComplete ? 100 : overallTrainingPercent}%` }} />
              </div>
              <p className="mt-2 text-[11px] font-semibold text-[#166534]">
                {completedTrainingLessonCount} of {totalTrainingLessonCount} workflow steps complete · {overallTrainingComplete ? 100 : overallTrainingPercent}% complete
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#BBF7D0] bg-[#F7FEF9] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#166534]">AI Readiness</p>
            <p className="mt-1 text-lg font-semibold text-[#111827]">{aiReadinessStatus}</p>
            <p role={aiConfigurationError ? "alert" : undefined} className={`mt-1 text-xs ${aiConfigurationError ? "text-[#B91C1C]" : "text-[#64748B]"}`}>
              {aiReadinessDetail}
            </p>
            <button
              type="button"
              onClick={onContinueTraining}
              className="mt-3 text-xs font-semibold text-[#166534] transition hover:text-[#047857] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2"
            >
              Continue training <ChevronRight className="inline h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      <section aria-label="AI employee training workspaces">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {workspaceNavigatorItems.map((item) => {
            const status = workspaceStatus(item);
            return (
              <button
                key={item.section}
                type="button"
                onClick={() => onOpenWorkspace(item.section)}
                className="group cursor-pointer rounded-[20px] border border-[#E5E7EB] bg-white p-5 text-left shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[#86EFAC] hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.complete ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#ECFDF5] text-[#166534]"}`}>
                    {item.complete ? <Check className="h-5 w-5" /> : <item.Icon className="h-5 w-5" />}
                  </span>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${item.complete ? "bg-[#ECFDF5] text-[#166534]" : item.percent > 0 ? "bg-[#FFFBEB] text-[#B45309]" : "bg-[#F8FAFC] text-[#64748B]"}`}>
                    {status}
                  </span>
                </div>
                <p className="mt-4 text-base font-semibold text-[#111827]">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-[#64748B]">{item.description}</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#EEF2F6]">
                  <div className={`h-full rounded-full transition-all duration-500 ${item.complete ? "bg-[#22C55E]" : "bg-[#86EFAC]"}`} style={{ width: `${Math.max(item.percent > 0 ? item.percent : 4, 4)}%` }} />
                </div>
                <div className="mt-2 flex items-center justify-between text-xs font-semibold text-[#64748B]">
                  <span>{item.percent}%</span>
                  <span className="inline-flex items-center gap-0.5 text-[#166534]">
                    Open <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <Dialog open={dialogOpen} onOpenChange={onDialogOpenChange}>
        <DialogContent className="flex h-[100dvh] max-h-[100dvh] w-full max-w-none left-0 top-0 translate-x-0 translate-y-0 flex-col gap-0 overflow-y-auto rounded-none border-[#E5E7EB] p-0 sm:left-[50%] sm:top-[50%] sm:h-auto sm:max-h-[90vh] sm:w-[calc(100%-2rem)] sm:max-w-[850px] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-[24px]">
          <DialogHeader className="sticky top-0 z-10 shrink-0 space-y-3 border-b border-[#E5E7EB] bg-white px-5 py-5 pr-14 text-left sm:px-6">
            <div className="flex items-start gap-3">
              {ActiveIcon ? (
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${activeItem?.complete ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#ECFDF5] text-[#166534]"}`}>
                  {activeItem?.complete ? <Check className="h-5 w-5" /> : <ActiveIcon className="h-5 w-5" />}
                </span>
              ) : null}
              <div className="min-w-0">
                <DialogTitle className="text-[20px] font-semibold tracking-[-0.02em] text-[#111827]">
                  {activeItem?.title ?? activeWorkspaceSection}
                </DialogTitle>
                <DialogDescription className="mt-1 text-sm leading-6 text-[#64748B]">
                  {activeItem?.description ?? "Continue training this workspace."}
                </DialogDescription>
              </div>
            </div>
            {activeItem ? (
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#64748B]">
                  <span>{workspaceStatus(activeItem)}</span>
                  <span className="text-[#166534]">{activeItem.percent}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#EEF2F6]">
                  <div className={`h-full rounded-full ${activeItem.complete ? "bg-[#22C55E]" : "bg-[#86EFAC]"}`} style={{ width: `${Math.max(activeItem.percent > 0 ? activeItem.percent : 4, 4)}%` }} />
                </div>
              </div>
            ) : null}
          </DialogHeader>
          <div className="px-4 py-5 sm:px-6">
            {children}
          </div>
          {onContinueLessons ? (
            <div className="sticky bottom-0 shrink-0 border-t border-[#E5E7EB] bg-white px-5 py-4 sm:px-6">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onContinueLessons}
                  className="inline-flex items-center gap-1 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2"
                >
                  Continue <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
