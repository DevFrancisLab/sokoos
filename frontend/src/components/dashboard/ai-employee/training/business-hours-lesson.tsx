import { useState } from "react";
import { Calendar as CalendarIcon, Check, ChevronRight, Clock, Plus, X } from "lucide-react";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

type WeekDay = (typeof WEEK_DAYS)[number];

type DayHours = {
  day: WeekDay;
  open: boolean;
  opens: string;
  closes: string;
};

type HolidayPeriod = {
  id: string;
  name: string;
  from: string;
  to: string;
};

type HoursErrors = Record<string, string>;

const WEEKDAY_SET = new Set<WeekDay>(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);

const TIMEZONE_OPTIONS = [
  "East Africa Time (EAT)",
  "West Africa Time (WAT)",
  "Central Africa Time (CAT)",
  "UTC",
] as const;

function createDefaultSchedule(): DayHours[] {
  return WEEK_DAYS.map((day) => {
    const open = WEEKDAY_SET.has(day);
    return {
      day,
      open,
      opens: open ? "09:00" : "",
      closes: open ? "17:00" : "",
    };
  });
}

function createHolidayPeriod(): HolidayPeriod {
  return {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `holiday-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: "",
    from: "",
    to: "",
  };
}

function normalizeTime(value: string): string {
  const match = /^(\d{1,2}):(\d{2})/.exec(value);
  if (!match) return "";
  const hours = Number(match[1]);
  if (hours > 23) return "";
  return `${String(hours).padStart(2, "0")}:${match[2]}`;
}

function formatTime12h(value: string): string {
  const normalized = normalizeTime(value);
  if (!normalized) return "";
  const [hourText, minutes] = normalized.split(":");
  const hours = Number(hourText);
  const period = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${String(hour12).padStart(2, "0")}:${minutes} ${period}`;
}

function parseISODate(value: string): Date | undefined {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return undefined;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return undefined;
  }
  return date;
}

function toISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatFriendlyDate(value: string): string {
  const date = parseISODate(value);
  if (!date) return "";
  return format(date, "MMM d, yyyy");
}

function shortDayName(day: WeekDay): string {
  return day.slice(0, 3);
}

export function summarizeBusinessHours(days: DayHours[]): string {
  const groups: { start: WeekDay; end: WeekDay; opens: string; closes: string }[] = [];

  for (const day of days) {
    if (!day.open) continue;
    const last = groups[groups.length - 1];
    const previousIndex = last ? WEEK_DAYS.indexOf(last.end) : -1;
    const currentIndex = WEEK_DAYS.indexOf(day.day);
    if (
      last &&
      previousIndex === currentIndex - 1 &&
      last.opens === day.opens &&
      last.closes === day.closes
    ) {
      last.end = day.day;
      continue;
    }
    groups.push({
      start: day.day,
      end: day.day,
      opens: day.opens,
      closes: day.closes,
    });
  }

  if (groups.length === 0) return "Closed all week";

  return groups
    .map((group) => {
      const daysLabel =
        group.start === group.end
          ? shortDayName(group.start)
          : `${shortDayName(group.start)}–${shortDayName(group.end)}`;
      return `${daysLabel}, ${formatTime12h(group.opens)} – ${formatTime12h(group.closes)}`;
    })
    .join("; ");
}

function validateHours(options: {
  days: DayHours[];
  holidays: HolidayPeriod[];
  vacationEnabled: boolean;
  vacationFrom: string;
  vacationUntil: string;
}): HoursErrors {
  const errors: HoursErrors = {};

  for (const day of options.days) {
    if (!day.open) continue;
    if (!day.opens) {
      errors[`${day.day}-opens`] = `Choose an opening time for ${day.day}.`;
    }
    if (!day.closes) {
      errors[`${day.day}-closes`] = `Choose a closing time for ${day.day}.`;
    }
    if (day.opens && day.closes && day.closes <= day.opens) {
      errors[`${day.day}-range`] = "Closing time must be after opening time.";
    }
  }

  options.holidays.forEach((holiday, index) => {
    const hasAnyValue = Boolean(holiday.name.trim() || holiday.from || holiday.to);
    if (!hasAnyValue) return;
    if (!holiday.from || !holiday.to) {
      errors[`holiday-${index}`] = "Choose a start date and an end date.";
      return;
    }
    if (holiday.to < holiday.from) {
      errors[`holiday-${index}`] = "End date must be on or after the start date.";
    }
  });

  if (options.vacationEnabled) {
    if (!options.vacationFrom || !options.vacationUntil) {
      errors.vacation = "Choose a start date and an end date.";
    } else if (options.vacationUntil < options.vacationFrom) {
      errors.vacation = "End date must be on or after the start date.";
    }
  }

  return errors;
}

function SegmentedChoice({
  legend,
  value,
  options,
  onChange,
}: {
  legend: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-[#E5E7EB] bg-[#F8FAFC] p-1" role="group" aria-label={legend}>
      {options.map((option) => {
        const active = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={cn(
              "min-h-11 min-w-[4.75rem] rounded-full px-4 text-sm font-semibold transition",
              active
                ? "bg-[#111827] text-white shadow-sm"
                : "text-[#64748B] hover:text-[#111827]",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function TimePickerField({
  id,
  label,
  value,
  error,
  fieldClassName,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  fieldClassName: string;
  onChange: (value: string) => void;
}) {
  const display = formatTime12h(value);

  return (
    <div className="min-w-0 space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-[#111827]">
        {label}
      </label>
      <input
        id={id}
        type="time"
        step={60}
        value={value}
        onChange={(event) => onChange(normalizeTime(event.target.value))}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : display ? `${id}-display` : undefined}
        className={cn(
          fieldClassName,
          "mt-0 min-h-12 cursor-pointer appearance-auto pr-3.5",
          error ? "border-[#FECACA] focus:border-[#FECACA] focus:ring-[#FEE2E2]/80" : "",
        )}
      />
      {display ? (
        <p id={`${id}-display`} className="text-sm text-[#64748B]">
          {display}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-[#B91C1C]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function DatePickerField({
  id,
  label,
  value,
  error,
  fieldClassName,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  fieldClassName: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = parseISODate(value);
  const display = formatFriendlyDate(value);

  return (
    <div className="min-w-0 space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-[#111827]">
        {label}
      </label>
      <Popover open={open} onOpenChange={setOpen} modal>
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            className={cn(
              fieldClassName,
              "mt-0 flex items-center justify-between gap-3 pr-3.5 text-left",
              error ? "border-[#FECACA] focus:border-[#FECACA] focus:ring-[#FEE2E2]/80" : "",
            )}
          >
            <span className={display ? "truncate text-sm font-medium text-[#111827]" : "truncate text-sm text-[#94A3B8]"}>
              {display || "Select date"}
            </span>
            <CalendarIcon className="h-4 w-4 shrink-0 text-[#64748B]" aria-hidden="true" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={8}
          collisionPadding={16}
          className="z-[80] w-auto p-0"
        >
          <Calendar
            mode="single"
            selected={selected}
            defaultMonth={selected}
            captionLayout="dropdown"
            startMonth={new Date(new Date().getFullYear() - 1, 0, 1)}
            endMonth={new Date(new Date().getFullYear() + 5, 11, 31)}
            onSelect={(date) => {
              if (!date) return;
              onChange(toISODate(date));
              setOpen(false);
            }}
            className="[--cell-size:2.75rem]"
          />
        </PopoverContent>
      </Popover>
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-[#B91C1C]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type BusinessHoursLessonProps = {
  timezone: string;
  onTimezoneChange: (value: string) => void;
  onBusinessHoursChange: (value: string) => void;
  onDirty: () => void;
  onBack: () => void;
  onSaveAndContinue: () => void;
  fieldClassName: string;
  textareaClassName: string;
  actionsClassName: string;
};

export function BusinessHoursLesson({
  timezone,
  onTimezoneChange,
  onBusinessHoursChange,
  onDirty,
  onBack,
  onSaveAndContinue,
  fieldClassName,
  textareaClassName,
  actionsClassName,
}: BusinessHoursLessonProps) {
  const [days, setDays] = useState<DayHours[]>(createDefaultSchedule);
  const [holidays, setHolidays] = useState<HolidayPeriod[]>(() => [createHolidayPeriod()]);
  const [holidayMessage, setHolidayMessage] = useState("");
  const [vacationEnabled, setVacationEnabled] = useState(false);
  const [vacationFrom, setVacationFrom] = useState("");
  const [vacationUntil, setVacationUntil] = useState("");
  const [vacationMessage, setVacationMessage] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [errors, setErrors] = useState<HoursErrors>({});

  const markDirty = () => {
    onDirty();
  };

  const updateDay = (day: WeekDay, patch: Partial<DayHours>) => {
    setDays((current) =>
      current.map((item) => (item.day === day ? { ...item, ...patch } : item)),
    );
    setErrors((current) => {
      const next = { ...current };
      delete next[`${day}-opens`];
      delete next[`${day}-closes`];
      delete next[`${day}-range`];
      return next;
    });
    markDirty();
  };

  const handleSaveAndContinue = () => {
    const nextErrors = validateHours({
      days,
      holidays,
      vacationEnabled,
      vacationFrom,
      vacationUntil,
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstErrorKey = Object.keys(nextErrors)[0];
      const firstField = document.getElementById(
        firstErrorKey.startsWith("holiday-")
          ? `holiday-from-${firstErrorKey.replace("holiday-", "")}`
          : firstErrorKey === "vacation"
            ? "vacation-from"
            : firstErrorKey.replace("-range", "-opens"),
      );
      firstField?.focus();
      return;
    }

    onBusinessHoursChange(summarizeBusinessHours(days));
    onSaveAndContinue();
  };

  return (
    <div className="space-y-5">
      <div className="flex gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF7ED] text-[#C2410C]">
          <Clock className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[20px] font-semibold text-[#111827]">Business Hours</p>
          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            Teach your AI when your business is open so it can answer availability questions.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <section className="space-y-2">
          <div>
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#111827]">Timezone</h3>
            <p className="mt-1 text-sm leading-6 text-[#6B7280]">
              Choose the timezone used by your business.
            </p>
          </div>
          <label className="sr-only" htmlFor="timezone">
            Timezone
          </label>
          <select
            id="timezone"
            value={timezone}
            onChange={(event) => {
              onTimezoneChange(event.target.value);
              markDirty();
            }}
            className={fieldClassName}
          >
            {TIMEZONE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </section>

        <section className="space-y-4">
          <div>
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#111827]">
              Weekly schedule
            </h3>
            <p className="mt-1 text-sm leading-6 text-[#6B7280]">Set your normal opening hours.</p>
          </div>
          <div className="space-y-4">
            {days.map((day) => {
              const rangeError = errors[`${day.day}-range`];
              return (
                <div key={day.day} className="rounded-xl border border-[#E5E7EB] bg-white p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-semibold text-[#111827]">{day.day}</p>
                    <SegmentedChoice
                      legend={`${day.day} availability`}
                      value={day.open ? "open" : "closed"}
                      options={[
                        { value: "open", label: "Open" },
                        { value: "closed", label: "Closed" },
                      ]}
                      onChange={(value) =>
                        updateDay(day.day, {
                          open: value === "open",
                          opens: value === "open" ? day.opens || "09:00" : "",
                          closes: value === "open" ? day.closes || "17:00" : "",
                        })
                      }
                    />
                  </div>
                  {day.open ? (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <TimePickerField
                        id={`${day.day}-opens`}
                        label="Opens"
                        value={day.opens}
                        error={errors[`${day.day}-opens`]}
                        fieldClassName={fieldClassName}
                        onChange={(value) => updateDay(day.day, { opens: value })}
                      />
                      <TimePickerField
                        id={`${day.day}-closes`}
                        label="Closes"
                        value={day.closes}
                        error={errors[`${day.day}-closes`] || rangeError}
                        fieldClassName={fieldClassName}
                        onChange={(value) => updateDay(day.day, { closes: value })}
                      />
                    </div>
                  ) : (
                    <p className="mt-3 text-sm text-[#64748B]">{day.day} is marked closed.</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#111827]">
              Holiday Mode
            </h3>
            <p className="mt-1 text-sm leading-6 text-[#6B7280]">Set temporary holiday closures.</p>
          </div>
          <div className="space-y-4">
            {holidays.map((holiday, index) => (
              <div key={holiday.id} className="space-y-3 rounded-xl border border-[#E5E7EB] bg-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <label className="min-w-0 flex-1 space-y-1.5" htmlFor={`holiday-name-${index}`}>
                    <span className="block text-sm font-semibold text-[#111827]">Holiday name</span>
                    <input
                      id={`holiday-name-${index}`}
                      value={holiday.name}
                      onChange={(event) => {
                        const name = event.target.value;
                        setHolidays((current) =>
                          current.map((item) => (item.id === holiday.id ? { ...item, name } : item)),
                        );
                        markDirty();
                      }}
                      placeholder="Christmas Holiday"
                      className={`${fieldClassName} mt-0`}
                    />
                  </label>
                  {holidays.length > 1 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setHolidays((current) => current.filter((item) => item.id !== holiday.id));
                        markDirty();
                      }}
                      className="mt-7 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E5E7EB] text-[#64748B] transition hover:text-[#111827]"
                      aria-label="Remove holiday period"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <DatePickerField
                    id={`holiday-from-${index}`}
                    label="From"
                    value={holiday.from}
                    fieldClassName={fieldClassName}
                    onChange={(from) => {
                      setHolidays((current) =>
                        current.map((item) => (item.id === holiday.id ? { ...item, from } : item)),
                      );
                      setErrors((current) => {
                        const next = { ...current };
                        delete next[`holiday-${index}`];
                        return next;
                      });
                      markDirty();
                    }}
                  />
                  <DatePickerField
                    id={`holiday-to-${index}`}
                    label="To"
                    value={holiday.to}
                    fieldClassName={fieldClassName}
                    onChange={(to) => {
                      setHolidays((current) =>
                        current.map((item) => (item.id === holiday.id ? { ...item, to } : item)),
                      );
                      setErrors((current) => {
                        const next = { ...current };
                        delete next[`holiday-${index}`];
                        return next;
                      });
                      markDirty();
                    }}
                  />
                </div>
                {errors[`holiday-${index}`] ? (
                  <p role="alert" className="text-sm text-[#B91C1C]">
                    {errors[`holiday-${index}`]}
                  </p>
                ) : null}
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                setHolidays((current) => [...current, createHolidayPeriod()]);
                markDirty();
              }}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3.5 text-sm font-semibold text-[#111827] transition hover:bg-[#F8FAFB]"
            >
              <Plus className="h-4 w-4" />
              Add holiday
            </button>
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-[#111827]" htmlFor="holiday-mode">
                Holiday message
              </label>
              <textarea
                id="holiday-mode"
                rows={2}
                value={holidayMessage}
                onChange={(event) => {
                  setHolidayMessage(event.target.value);
                  markDirty();
                }}
                placeholder="We are closed for public holidays and reopen on the next business day."
                className={`${textareaClassName} mt-0 w-full resize-none`}
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#111827]">
                Vacation Mode
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#6B7280]">Set longer temporary closures.</p>
            </div>
            <SegmentedChoice
              legend="Vacation Mode"
              value={vacationEnabled ? "on" : "off"}
              options={[
                { value: "off", label: "Off" },
                { value: "on", label: "On" },
              ]}
              onChange={(value) => {
                setVacationEnabled(value === "on");
                setErrors((current) => {
                  const next = { ...current };
                  delete next.vacation;
                  return next;
                });
                markDirty();
              }}
            />
          </div>
          {vacationEnabled ? (
            <div className="space-y-3 rounded-xl border border-[#E5E7EB] bg-white p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <DatePickerField
                  id="vacation-from"
                  label="From"
                  value={vacationFrom}
                  fieldClassName={fieldClassName}
                  onChange={(value) => {
                    setVacationFrom(value);
                    setErrors((current) => {
                      const next = { ...current };
                      delete next.vacation;
                      return next;
                    });
                    markDirty();
                  }}
                />
                <DatePickerField
                  id="vacation-until"
                  label="Until"
                  value={vacationUntil}
                  fieldClassName={fieldClassName}
                  onChange={(value) => {
                    setVacationUntil(value);
                    setErrors((current) => {
                      const next = { ...current };
                      delete next.vacation;
                      return next;
                    });
                    markDirty();
                  }}
                />
              </div>
              {errors.vacation ? (
                <p role="alert" className="text-sm text-[#B91C1C]">
                  {errors.vacation}
                </p>
              ) : null}
            </div>
          ) : null}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-[#111827]" htmlFor="vacation-mode">
              Vacation message
            </label>
            <textarea
              id="vacation-mode"
              rows={2}
              value={vacationMessage}
              onChange={(event) => {
                setVacationMessage(event.target.value);
                markDirty();
              }}
              placeholder="We are currently on vacation and will respond once we are back."
              className={`${textareaClassName} mt-0 w-full resize-none`}
            />
          </div>
        </section>

        <section className="space-y-2">
          <div>
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#111827]">
              Emergency Contact
            </h3>
            <p className="mt-1 text-sm leading-6 text-[#6B7280]">
              Provide an alternative contact if applicable.
            </p>
          </div>
          <label className="sr-only" htmlFor="emergency-contact">
            Emergency Contact
          </label>
          <input
            id="emergency-contact"
            value={emergencyContact}
            onChange={(event) => {
              setEmergencyContact(event.target.value);
              markDirty();
            }}
            placeholder="+254 700 000 000"
            className={fieldClassName}
          />
        </section>
      </div>

      <div className="rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-[#F0FDF4] to-white p-4">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] text-white">
            <Check className="h-3.5 w-3.5" />
          </span>
          <p className="text-sm font-semibold text-[#166534]">How the AI uses these hours</p>
        </div>
        <p className="mt-3 text-sm leading-6 text-[#475569]">
          These hours are used by the AI when customers ask whether the business is open. They help
          set accurate expectations and guide when the AI should respond with availability
          information.
        </p>
      </div>

      <div className={actionsClassName}>
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-semibold text-[#64748B] transition hover:text-[#111827]"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSaveAndContinue}
          className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Save & Continue <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
