import { useEffect, useState, type ReactNode } from "react";
import { Check, ChevronDown, type LucideIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type TrainingWorkspaceItem = {
  title: string;
  description: string;
  section: string;
  Icon: LucideIcon;
  complete: boolean;
  percent: number;
  unlocked: boolean;
};

export type TrainingLessonNavItem = {
  title: string;
  completed: boolean;
  current: boolean;
  disabled?: boolean;
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
  lessons?: TrainingLessonNavItem[];
  onSelectLesson?: (index: number) => void;
  children?: ReactNode;
};

const workspaceStatus = (item: TrainingWorkspaceItem) => {
  if (item.complete) return "Complete";
  if (item.percent > 0) return "In progress";
  return "Not started";
};

function LessonStatusMark({ lesson, index }: { lesson: TrainingLessonNavItem; index: number }) {
  if (lesson.completed) {
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white">
        <Check className="h-3 w-3" aria-hidden="true" />
        <span className="sr-only">Completed</span>
      </span>
    );
  }

  if (lesson.current) {
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#111827] text-[10px] font-semibold text-white" aria-hidden="true">
        {index + 1}
      </span>
    );
  }

  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#D1D5DB] bg-white" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-[#D1D5DB]" />
    </span>
  );
}

function LessonNavList({
  workspaceTitle,
  lessons,
  onSelectLesson,
  onLessonChosen,
}: {
  workspaceTitle: string;
  lessons: TrainingLessonNavItem[];
  onSelectLesson?: (index: number) => void;
  onLessonChosen?: () => void;
}) {
  return (
    <nav aria-label={`${workspaceTitle} lessons`}>
      <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">
        {workspaceTitle}
      </p>
      <ol className="mt-3 space-y-0.5">
        {lessons.map((lesson, index) => (
          <li key={`${lesson.title}-${index}`}>
            <button
              type="button"
              disabled={lesson.disabled}
              aria-current={lesson.current ? "step" : undefined}
              aria-label={`${lesson.title}${lesson.completed ? ", completed" : lesson.current ? ", current lesson" : ""}`}
              onClick={() => {
                if (lesson.disabled) return;
                onSelectLesson?.(index);
                onLessonChosen?.();
              }}
              className={cn(
                "flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left text-sm leading-5 transition",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2",
                lesson.current && "bg-[#ECFDF5] font-semibold text-[#14532D]",
                !lesson.current && lesson.completed && "font-medium text-[#166534] hover:bg-[#F8FAFC]",
                !lesson.current && !lesson.completed && "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#111827]",
                lesson.disabled && "cursor-not-allowed opacity-45 hover:bg-transparent",
              )}
            >
              <LessonStatusMark lesson={lesson} index={index} />
              <span className="min-w-0">{lesson.title}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}

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
  lessons = [],
  onSelectLesson,
  children,
}: Props) {
  const activeItem = workspaceNavigatorItems.find((item) => item.section === activeWorkspaceSection);
  const ActiveIcon = activeItem?.Icon;
  const currentLessonIndex = lessons.findIndex((lesson) => lesson.current);
  const currentLesson = currentLessonIndex >= 0 ? lessons[currentLessonIndex] : undefined;
  const lessonCount = lessons.length;
  const lessonNumber = currentLessonIndex >= 0 ? currentLessonIndex + 1 : currentTrainingStepNumber;
  const totalLessons = lessonCount || currentTrainingLessonCount;
  const completedLessonCount = lessons.filter((lesson) => lesson.completed).length;
  const lessonPercent = totalLessons > 0 ? Math.round((completedLessonCount / totalLessons) * 100) : activeItem?.percent ?? 0;
  const [mobileLessonNavOpen, setMobileLessonNavOpen] = useState(false);

  useEffect(() => {
    if (!dialogOpen) setMobileLessonNavOpen(false);
  }, [dialogOpen, activeWorkspaceSection, currentLessonIndex]);

  return (
    <div className="mx-auto w-full max-w-[1280px] space-y-6 px-4 pb-10 lg:px-6">
      <header className="max-w-3xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6B7280]">AI Training</p>
        <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-[#111827] lg:text-[26px]">
          Your AI Employee&apos;s training workspaces
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#6B7280]">
          Train your AI Employee one workspace at a time.
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
              Continue training
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
                  <div className={`h-full rounded-full transition-all duration-500 ${item.complete ? "bg-[#22C55E]" : "bg-[#86EFAC]"}`} style={{ width: `${Math.max(0, Math.min(100, item.percent))}%` }} />
                </div>
                <div className="mt-2 flex items-center justify-between text-xs font-semibold text-[#64748B]">
                  <span>{item.percent}%</span>
                  <span className="text-[#166534]">Open</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <Dialog open={dialogOpen} onOpenChange={onDialogOpenChange}>
        <DialogContent
          overlayClassName="bg-slate-950/40"
          className="flex !flex h-[100dvh] max-h-[100dvh] min-h-0 w-full max-w-none left-0 top-0 translate-x-0 translate-y-0 flex-col !flex-col gap-0 overflow-clip rounded-none border-[#E5E7EB] bg-white p-0 shadow-[0_24px_80px_rgba(15,23,42,0.18)] duration-200 md:left-[50%] md:top-[50%] md:h-[min(88vh,860px)] md:max-h-[calc(100vh-2.5rem)] md:w-[92vw] md:max-w-[1160px] md:translate-x-[-50%] md:translate-y-[-50%] md:rounded-2xl"
        >
          <DialogHeader className="shrink-0 space-y-3 border-b border-[#EEF2F6] px-5 py-4 pr-14 text-left md:px-6">
            <div className="flex items-start gap-3">
              {ActiveIcon ? (
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${activeItem?.complete ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#ECFDF5] text-[#166534]"}`}>
                  {activeItem?.complete ? <Check className="h-5 w-5" /> : <ActiveIcon className="h-5 w-5" />}
                </span>
              ) : null}
              <div className="min-w-0">
                <DialogTitle className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827] md:text-[20px]">
                  {activeItem?.title ?? activeWorkspaceSection}
                </DialogTitle>
                <DialogDescription className="mt-1 text-sm leading-6 text-[#64748B]">
                  {activeItem?.description ?? "Continue training this workspace."}
                </DialogDescription>
              </div>
            </div>
            {totalLessons > 0 ? (
              <div>
                <div className="flex items-center justify-between gap-3 text-xs font-medium text-[#64748B]">
                  <p>
                    <span className="font-semibold text-[#111827]">{activeItem?.title ?? activeWorkspaceSection}</span>
                    <span className="mx-1.5 text-[#D1D5DB]">·</span>
                    {lessonNumber} of {totalLessons} lessons
                  </p>
                  <span className="tabular-nums text-[#166534]">{Math.max(0, Math.min(100, lessonPercent))}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#EEF2F6]" aria-hidden="true">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${lessonPercent >= 100 ? "bg-[#22C55E]" : "bg-[#86EFAC]"}`}
                    style={{ width: `${Math.max(0, Math.min(100, lessonPercent))}%` }}
                  />
                </div>
              </div>
            ) : activeItem ? (
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#64748B]">
                  <span>{workspaceStatus(activeItem)}</span>
                  <span className="text-[#166534]">{activeItem.percent}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#EEF2F6]">
                  <div className={`h-full rounded-full ${activeItem.complete ? "bg-[#22C55E]" : "bg-[#86EFAC]"}`} style={{ width: `${Math.max(0, Math.min(100, activeItem.percent))}%` }} />
                </div>
              </div>
            ) : null}
          </DialogHeader>

          {lessonCount > 0 ? (
            <div className="shrink-0 border-b border-[#EEF2F6] px-5 py-3 md:hidden">
              <button
                type="button"
                aria-expanded={mobileLessonNavOpen}
                aria-controls="training-mobile-lesson-nav"
                onClick={() => setMobileLessonNavOpen((open) => !open)}
                className="flex w-full items-center justify-between gap-3 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2"
              >
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">
                    {lessonNumber} of {totalLessons}
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-semibold text-[#111827]">
                    {currentLesson?.title ?? currentTrainingLessonLabel}
                  </span>
                </span>
                <ChevronDown className={cn("h-4 w-4 shrink-0 text-[#64748B] transition", mobileLessonNavOpen && "rotate-180")} />
              </button>
              {mobileLessonNavOpen ? (
                <div id="training-mobile-lesson-nav" className="mt-3 max-h-[40vh] overflow-y-auto rounded-xl border border-[#EEF2F6] bg-white p-2">
                  <LessonNavList
                    workspaceTitle={activeItem?.title ?? activeWorkspaceSection}
                    lessons={lessons}
                    onSelectLesson={onSelectLesson}
                    onLessonChosen={() => setMobileLessonNavOpen(false)}
                  />
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
            {lessonCount > 0 ? (
              <aside className="hidden w-[240px] shrink-0 overflow-y-auto border-r border-[#EEF2F6] px-4 py-5 md:block">
                <LessonNavList
                  workspaceTitle={activeItem?.title ?? activeWorkspaceSection}
                  lessons={lessons}
                  onSelectLesson={onSelectLesson}
                />
              </aside>
            ) : null}
            <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
              <div data-training-lesson-scroll className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
                <div className="flex min-h-full flex-col">
                {currentLesson ? (
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">
                    Lesson {lessonNumber} of {totalLessons}
                  </p>
                ) : null}
                {children}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
