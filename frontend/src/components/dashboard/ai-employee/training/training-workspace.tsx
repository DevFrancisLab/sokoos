import { useEffect, useState, type ReactNode } from "react";
import { Check, ChevronDown, type LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type TrainingWorkspaceItem = {
  title: string;
  description: string;
  section: string;
  Icon: LucideIcon;
  complete: boolean;
  percent: number;
  completedLessons: number;
  totalLessons: number;
  unlocked: boolean;
};

export type TrainingLessonNavItem = {
  title: string;
  completed: boolean;
  current: boolean;
  disabled?: boolean;
};

export type TrainingHeaderCta = {
  id:
    | "loading"
    | "start"
    | "continue-setup"
    | "connect-channel"
    | "activate"
    | "manage";
  label: string;
  disabled?: boolean;
};

export type TrainingEssentialItem = {
  title: string;
  complete: boolean;
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
  essentialSetupItems?: TrainingEssentialItem[];
  headerCta: TrainingHeaderCta;
  onHeaderCta: () => void;
  onContinueTraining?: () => void;
  onRetryAiConfiguration?: () => void;
  lessons?: TrainingLessonNavItem[];
  onSelectLesson?: (index: number) => void;
  children?: ReactNode;
};

const workspaceStatus = (
  item: TrainingWorkspaceItem,
  managementMode: boolean,
) => {
  if (item.complete) return managementMode ? "Configured" : "Complete";
  if (item.completedLessons > 0 || item.percent > 0) return "In progress";
  return "Not started";
};

function TrainingProgressBar({
  percent,
  complete = false,
  size = "md",
}: {
  percent: number;
  complete?: boolean;
  size?: "md" | "sm";
}) {
  const width = Math.max(0, Math.min(100, percent));
  return (
    <div
      className={cn(
        "overflow-hidden rounded-full bg-[#EEF2F6]",
        size === "sm" ? "h-1" : "h-2",
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "h-full rounded-full transition-all duration-300",
          complete ? "bg-[#22C55E]" : "bg-[#86EFAC]",
        )}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

function LessonStatusMark({
  lesson,
  index,
}: {
  lesson: TrainingLessonNavItem;
  index: number;
}) {
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
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#111827] text-[10px] font-semibold text-white"
        aria-hidden="true"
      >
        {index + 1}
      </span>
    );
  }

  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#D1D5DB] bg-white"
      aria-hidden="true"
    >
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
                !lesson.current &&
                  lesson.completed &&
                  "font-medium text-[#166534] hover:bg-[#F8FAFC]",
                !lesson.current &&
                  !lesson.completed &&
                  "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#111827]",
                lesson.disabled &&
                  "cursor-not-allowed opacity-45 hover:bg-transparent",
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
  aiReadinessStatus,
  aiReadinessDetail,
  aiConfigurationError,
  essentialSetupItems = [],
  headerCta,
  onHeaderCta,
  onContinueTraining,
  onRetryAiConfiguration,
  lessons = [],
  onSelectLesson,
  children,
}: Props) {
  const activeItem = workspaceNavigatorItems.find(
    (item) => item.section === activeWorkspaceSection,
  );
  const ActiveIcon = activeItem?.Icon;
  const currentLessonIndex = lessons.findIndex((lesson) => lesson.current);
  const currentLesson =
    currentLessonIndex >= 0 ? lessons[currentLessonIndex] : undefined;
  const lessonCount = lessons.length;
  const lessonNumber =
    currentLessonIndex >= 0
      ? currentLessonIndex + 1
      : currentTrainingStepNumber;
  const totalLessons = lessonCount || currentTrainingLessonCount;
  const completedLessonCount = lessons.filter(
    (lesson) => lesson.completed,
  ).length;
  const lessonPercent =
    totalLessons > 0
      ? Math.round((completedLessonCount / totalLessons) * 100)
      : (activeItem?.percent ?? 0);
  const completedWorkspaceCount = workspaceNavigatorItems.filter(
    (item) => item.complete,
  ).length;
  const totalWorkspaceCount = workspaceNavigatorItems.length;
  const workspaceProgressPercent =
    totalWorkspaceCount > 0
      ? Math.round((completedWorkspaceCount / totalWorkspaceCount) * 100)
      : 0;
  const allWorkspacesComplete =
    totalWorkspaceCount > 0 && completedWorkspaceCount >= totalWorkspaceCount;
  const aiEmployeeActive = headerCta.id === "manage";
  const progressLoading = headerCta.id === "loading";
  const showEssentialSetupList =
    !progressLoading &&
    !aiEmployeeActive &&
    (headerCta.id === "continue-setup" || headerCta.id === "connect-channel") &&
    essentialSetupItems.length > 0;
  const showContinueTraining =
    Boolean(onContinueTraining) &&
    !progressLoading &&
    !allWorkspacesComplete &&
    (aiEmployeeActive || headerCta.id === "activate");
  const headerWorkspace = dialogOpen
    ? activeItem
    : (workspaceNavigatorItems.find((item) => !item.complete) ??
      workspaceNavigatorItems[workspaceNavigatorItems.length - 1]);
  const headerWorkspaceLessonCount =
    dialogOpen && lessonCount > 0
      ? lessonCount
      : (headerWorkspace?.totalLessons ?? 0);
  const headerWorkspaceCompletedLessons =
    dialogOpen && lessonCount > 0
      ? completedLessonCount
      : (headerWorkspace?.completedLessons ?? 0);
  const headerWorkspaceLessonPercent =
    headerWorkspaceLessonCount > 0
      ? Math.round(
          (headerWorkspaceCompletedLessons / headerWorkspaceLessonCount) * 100,
        )
      : 0;
  const headerWorkspaceLessonsComplete =
    headerWorkspaceLessonCount > 0 &&
    headerWorkspaceCompletedLessons >= headerWorkspaceLessonCount;
  const hasStartedWorkspaceProgress = workspaceNavigatorItems.some(
    (item) => item.completedLessons > 0 || item.percent > 0,
  );
  const showCurrentWorkspaceProgress =
    !allWorkspacesComplete &&
    !progressLoading &&
    Boolean(headerWorkspace) &&
    headerWorkspaceLessonCount > 0 &&
    (dialogOpen || hasStartedWorkspaceProgress);
  const readinessIsError = Boolean(aiConfigurationError);
  const readinessIsActive = aiReadinessStatus === "Active";
  const readinessIsPositive =
    readinessIsActive ||
    aiReadinessStatus === "Ready to activate" ||
    aiReadinessStatus === "Ready to connect";
  const [mobileLessonNavOpen, setMobileLessonNavOpen] = useState(false);

  useEffect(() => {
    if (!dialogOpen) setMobileLessonNavOpen(false);
  }, [dialogOpen, activeWorkspaceSection, currentLessonIndex]);

  return (
    <div className="w-full space-y-6 pb-10">
      <header className="max-w-3xl">
        <h2 className="text-[24px] font-semibold tracking-[-0.02em] text-[#111827] lg:text-[26px]">
          AI Employee Setup
        </h2>
        {aiEmployeeActive ? (
          <>
            <p className="mt-2 text-base font-semibold text-[#111827]">
              {allWorkspacesComplete
                ? "Your AI Employee is trained and ready"
                : "Your AI Employee is working for your business"}
            </p>
            <p className="mt-1 text-sm leading-6 text-[#6B7280]">
              You can continue improving its training at any time.
            </p>
          </>
        ) : (
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            Prepare your AI Employee to understand your business, follow your
            instructions, and connect with customers.
          </p>
        )}
      </header>

      <section
        className="rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-5"
        aria-label="AI Employee readiness and training progress"
      >
        <div
          className={`rounded-xl border p-3 sm:p-4 ${readinessIsError ? "border-[#FECACA] bg-[#FEF2F2]" : readinessIsPositive ? "border-[#BBF7D0] bg-[#F7FEF9]" : "border-[#E5E7EB] bg-[#F8FAFC]"}`}
        >
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${readinessIsError ? "text-[#B91C1C]" : "text-[#166534]"}`}
          >
            AI Readiness
          </p>
          <p className="mt-1 text-lg font-semibold text-[#111827]">
            {aiReadinessStatus}
          </p>
          <p
            role={readinessIsError ? "alert" : undefined}
            className={`mt-1 text-sm leading-6 ${readinessIsError ? "text-[#B91C1C]" : "text-[#64748B]"}`}
          >
            {aiReadinessDetail}
          </p>
          {readinessIsError && onRetryAiConfiguration ? (
            <button
              type="button"
              onClick={onRetryAiConfiguration}
              className="mt-3 text-xs font-semibold text-[#111827] underline decoration-[#CBD5E1] underline-offset-4 transition hover:text-[#166534] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2"
            >
              Retry
            </button>
          ) : null}
          {showEssentialSetupList ? (
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {essentialSetupItems.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-2 text-xs font-medium text-[#334155]"
                >
                  <span
                    className={
                      item.complete ? "text-[#166534]" : "text-[#94A3B8]"
                    }
                    aria-hidden="true"
                  >
                    {item.complete ? "✓" : "○"}
                  </span>
                  {item.title}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={onHeaderCta}
            disabled={headerCta.disabled}
            aria-label={headerCta.label}
            className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#111827] px-4 text-sm font-semibold text-white transition hover:bg-[#334155] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45 sm:w-auto"
          >
            {headerCta.label}
          </button>
          {showContinueTraining ? (
            <button
              type="button"
              onClick={onContinueTraining}
              className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-[#E5E7EB] bg-white px-4 text-sm font-semibold text-[#111827] transition hover:bg-[#F8FAFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 sm:w-auto"
            >
              Continue Training
            </button>
          ) : null}
        </div>

        <div className="mt-5 min-w-0 border-t border-[#EEF2F6] pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
            Training progress
          </p>
          <p className="mt-1 text-sm font-semibold text-[#111827]">
            {progressLoading
              ? "Loading training progress…"
              : `${completedWorkspaceCount} of ${totalWorkspaceCount} workspaces complete · ${allWorkspacesComplete ? 100 : workspaceProgressPercent}% complete`}
          </p>
          {progressLoading ? null : (
            <div className="mt-3">
              <TrainingProgressBar
                percent={allWorkspacesComplete ? 100 : workspaceProgressPercent}
                complete={allWorkspacesComplete || overallTrainingComplete}
                size="md"
              />
            </div>
          )}
          {allWorkspacesComplete ? (
            <p className="mt-3 text-sm leading-6 text-[#64748B]">
              Training complete. You can continue updating your AI Employee
              whenever your business changes.
            </p>
          ) : aiEmployeeActive ? (
            <p className="mt-3 text-sm leading-6 text-[#64748B]">
              Continue improving your AI Employee
            </p>
          ) : null}

          {showCurrentWorkspaceProgress && headerWorkspace ? (
            <div className="mt-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
                Current workspace
              </p>
              <p className="mt-1 text-sm font-semibold text-[#111827]">
                {headerWorkspace.title}
              </p>
              <p className="mt-0.5 text-xs font-medium text-[#64748B]">
                {headerWorkspaceCompletedLessons} of{" "}
                {headerWorkspaceLessonCount} lessons complete ·{" "}
                {headerWorkspaceLessonsComplete
                  ? 100
                  : headerWorkspaceLessonPercent}
                % complete
              </p>
              <div className="mt-2">
                <TrainingProgressBar
                  percent={
                    headerWorkspaceLessonsComplete
                      ? 100
                      : headerWorkspaceLessonPercent
                  }
                  complete={headerWorkspaceLessonsComplete}
                  size="sm"
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section aria-label="AI employee training workspaces">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {workspaceNavigatorItems.map((item) => {
            const status = workspaceStatus(item, aiEmployeeActive);
            const showWorkspaceIcon = aiEmployeeActive || !item.complete;
            const actionLabel =
              aiEmployeeActive && item.complete ? "Edit workspace" : "Open";
            return (
              <button
                key={item.section}
                type="button"
                onClick={() => onOpenWorkspace(item.section)}
                aria-label={`${actionLabel} ${item.title}`}
                className="group cursor-pointer rounded-[20px] border border-[#E5E7EB] bg-white p-5 text-left shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[#86EFAC] hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.complete ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#ECFDF5] text-[#166534]"}`}
                  >
                    {showWorkspaceIcon ? (
                      <item.Icon className="h-5 w-5" />
                    ) : (
                      <Check className="h-5 w-5" />
                    )}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${item.complete ? "bg-[#ECFDF5] text-[#166534]" : item.completedLessons > 0 || item.percent > 0 ? "bg-[#FFFBEB] text-[#B45309]" : "bg-[#F8FAFC] text-[#64748B]"}`}
                  >
                    {status}
                  </span>
                </div>
                <p className="mt-4 text-base font-semibold text-[#111827]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-[#64748B]">
                  {item.description}
                </p>
                <div className="mt-4">
                  <TrainingProgressBar
                    percent={item.percent}
                    complete={item.complete}
                    size="sm"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between gap-2 text-xs font-semibold text-[#64748B]">
                  <span className="min-w-0 truncate">
                    {item.totalLessons > 0
                      ? `${item.completedLessons} of ${item.totalLessons} lessons`
                      : `${item.percent}%`}
                  </span>
                  <span className="shrink-0 text-[#166534]">{actionLabel}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <Dialog open={dialogOpen} onOpenChange={onDialogOpenChange}>
        <DialogContent
          overlayClassName="bg-slate-950/40"
          className="flex !flex h-[100dvh] max-h-[100dvh] min-h-0 w-full max-w-none left-0 top-0 translate-x-0 translate-y-0 flex-col !flex-col gap-0 overflow-clip rounded-none border-[#E5E7EB] bg-white p-0 shadow-[0_24px_80px_rgba(15,23,42,0.18)] duration-200 md:left-[50%] md:top-[50%] md:h-[min(88vh,860px)] md:max-h-[calc(100vh-2.5rem)] md:w-[90vw] md:max-w-[1250px] md:translate-x-[-50%] md:translate-y-[-50%] md:rounded-2xl"
        >
          <DialogHeader className="shrink-0 space-y-3 border-b border-[#EEF2F6] px-5 py-4 pr-14 text-left md:px-6">
            <div className="flex items-start gap-3">
              {ActiveIcon ? (
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${activeItem?.complete ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#ECFDF5] text-[#166534]"}`}
                >
                  {activeItem?.complete ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <ActiveIcon className="h-5 w-5" />
                  )}
                </span>
              ) : null}
              <div className="min-w-0">
                <DialogTitle className="text-[18px] font-semibold tracking-[-0.02em] text-[#111827] md:text-[20px]">
                  {activeItem?.title ?? activeWorkspaceSection}
                </DialogTitle>
                <DialogDescription className="mt-1 text-sm leading-6 text-[#64748B]">
                  {activeItem?.description ??
                    (aiEmployeeActive
                      ? "Update this workspace whenever your business changes."
                      : "Continue training this workspace.")}
                </DialogDescription>
              </div>
            </div>
            {totalLessons > 0 ? (
              <div>
                <div className="flex items-center justify-between gap-3 text-xs font-medium text-[#64748B]">
                  <p>
                    <span className="font-semibold text-[#111827]">
                      {activeItem?.title ?? activeWorkspaceSection}
                    </span>
                    <span className="mx-1.5 text-[#D1D5DB]">·</span>
                    {completedLessonCount} of {totalLessons} lessons complete
                  </p>
                  <span className="tabular-nums text-[#166534]">
                    {Math.max(0, Math.min(100, lessonPercent))}%
                  </span>
                </div>
                <div className="mt-2">
                  <TrainingProgressBar
                    percent={lessonPercent}
                    complete={lessonPercent >= 100}
                    size="sm"
                  />
                </div>
              </div>
            ) : activeItem ? (
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#64748B]">
                  <span>{workspaceStatus(activeItem, aiEmployeeActive)}</span>
                  <span className="text-[#166534]">{activeItem.percent}%</span>
                </div>
                <div className="mt-2">
                  <TrainingProgressBar
                    percent={activeItem.percent}
                    complete={activeItem.complete}
                    size="sm"
                  />
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
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-[#64748B] transition",
                    mobileLessonNavOpen && "rotate-180",
                  )}
                />
              </button>
              {mobileLessonNavOpen ? (
                <div
                  id="training-mobile-lesson-nav"
                  className="mt-3 max-h-[40vh] overflow-y-auto rounded-xl border border-[#EEF2F6] bg-white p-2"
                >
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
              <div
                data-training-lesson-scroll
                className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto px-5 py-5 sm:px-7 sm:py-6"
              >
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
