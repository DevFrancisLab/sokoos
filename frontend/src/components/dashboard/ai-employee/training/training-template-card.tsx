import { type ChangeEvent, useId, useRef, useState } from "react";
import { CheckCircle2, CircleAlert, Download, FileText, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type TrainingTemplateUploadStatus = {
  tone: "neutral" | "success" | "error";
  message: string;
};

export type TrainingTemplateCardProps = {
  workspaceName: string;
  description: string;
  onDownload?: () => void;
  templateHref?: string;
  acceptedFileTypes: string[];
  uploadStatus?: TrainingTemplateUploadStatus;
  disabled?: boolean;
  compact?: boolean;
  onUploadSelected?: (file: File) => void;
};

function acceptsFile(file: File, acceptedFileTypes: string[]) {
  if (acceptedFileTypes.length === 0) return true;

  const fileName = file.name.toLowerCase();
  const fileType = file.type.toLowerCase();

  return acceptedFileTypes.some((acceptedType) => {
    const normalizedType = acceptedType.toLowerCase();
    return normalizedType.startsWith(".")
      ? fileName.endsWith(normalizedType)
      : fileType === normalizedType;
  });
}

export function TrainingTemplateCard({
  workspaceName,
  description,
  onDownload,
  templateHref,
  acceptedFileTypes,
  uploadStatus,
  disabled = false,
  compact = false,
  onUploadSelected,
}: TrainingTemplateCardProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);
  const hasDownloadAction = Boolean(templateHref || onDownload);
  const displayedStatus = validationMessage
    ? { tone: "error" as const, message: validationMessage }
    : uploadStatus;

  const handleFileSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!acceptsFile(file, acceptedFileTypes)) {
      setSelectedFileName(null);
      setValidationMessage(`Choose a supported file: ${acceptedFileTypes.join(", ")}.`);
      event.target.value = "";
      return;
    }

    setSelectedFileName(file.name);
    setValidationMessage(null);
    onUploadSelected?.(file);
    // Resetting lets the user choose the same file again after correcting it.
    event.target.value = "";
  };

  const statusIcon = displayedStatus?.tone === "error"
    ? <CircleAlert className="h-4 w-4 shrink-0 text-[#B91C1C]" aria-hidden="true" />
    : displayedStatus?.tone === "success"
      ? <CheckCircle2 className="h-4 w-4 shrink-0 text-[#15803D]" aria-hidden="true" />
      : <FileText className="h-4 w-4 shrink-0 text-[#475569]" aria-hidden="true" />;

  return (
    <Card className="border-[#E5E7EB] bg-[#F8FAFC] shadow-none">
      <CardHeader className={`gap-3 ${compact ? "p-4 pb-0" : "p-5 pb-0 sm:p-6 sm:pb-0"}`}>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#15803D]">
            <FileText className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#15803D]">Optional template</p>
            <CardTitle className="mt-1 text-base text-[#111827]">{workspaceName} template</CardTitle>
            <CardDescription className="mt-1 leading-6 text-[#64748B]">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className={compact ? "p-4 pt-4" : "p-5 pt-5 sm:p-6 sm:pt-5"}>
        <p className="text-sm leading-6 text-[#475569]">Prefer to work offline? Download the template, fill it in, and upload it to Sokoos.</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {templateHref && !disabled ? (
            <Button asChild variant="outline" className="border-[#BBF7D0] bg-white text-[#047857] hover:bg-[#ECFDF5] hover:text-[#065F46]">
              <a href={templateHref} download>
                <Download aria-hidden="true" />
                Download template
              </a>
            </Button>
          ) : (
            <Button type="button" variant="outline" disabled={disabled || !hasDownloadAction} onClick={onDownload} className="border-[#BBF7D0] bg-white text-[#047857] hover:bg-[#ECFDF5] hover:text-[#065F46]">
              <Download aria-hidden="true" />
              Download template
            </Button>
          )}
          <input
            ref={inputRef}
            id={inputId}
            type="file"
            accept={acceptedFileTypes.join(",")}
            className="sr-only"
            aria-label={`Upload a completed ${workspaceName} template`}
            disabled={disabled}
            onChange={handleFileSelection}
          />
          <Button type="button" disabled={disabled} aria-controls={inputId} onClick={() => inputRef.current?.click()} className="bg-[#16A34A] text-white hover:bg-[#15803D]">
            <Upload aria-hidden="true" />
            Upload completed template
          </Button>
        </div>
        <p className="mt-3 text-xs leading-5 text-[#64748B]">Accepted files: {acceptedFileTypes.join(", ") || "Any file type"}. Files remain in this browser until a workspace adds import support.</p>
        {selectedFileName ? <p className="mt-3 text-sm font-medium text-[#111827]">Selected: {selectedFileName}</p> : null}
        {displayedStatus ? (
          <p className={`mt-3 flex items-start gap-2 rounded-xl px-3 py-2.5 text-sm leading-6 ${displayedStatus.tone === "error" ? "bg-[#FEF2F2] text-[#991B1B]" : displayedStatus.tone === "success" ? "bg-[#ECFDF5] text-[#166534]" : "bg-white text-[#475569]"}`} role={displayedStatus.tone === "error" ? "alert" : "status"}>
            {statusIcon}
            <span>{displayedStatus.message}</span>
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
