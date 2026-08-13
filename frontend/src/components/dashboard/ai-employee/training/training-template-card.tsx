import { type ChangeEvent, useId, useRef, useState } from "react";
import { CheckCircle2, CircleAlert, Download, FileText, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { TemplateProcessingState } from "./template-processing";

const MAX_TEMPLATE_FILE_SIZE_BYTES = 10 * 1024 * 1024;

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
  onContinueSelected?: (file: File) => void;
  processingState?: TemplateProcessingState;
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

function getFileTypeLabel(file: File) {
  const extension = file.name.split(".").pop()?.trim();
  if (extension) return extension.toUpperCase();
  return file.type || "Unknown";
}

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getProcessingStatus(processingState?: TemplateProcessingState): TrainingTemplateUploadStatus | undefined {
  if (!processingState || processingState.stage === "idle" || processingState.stage === "file_selected") return undefined;
  if (processingState.stage === "error") {
    return { tone: "error", message: processingState.error || processingState.message || "Template processing could not be completed." };
  }

  const messages: Record<Exclude<TemplateProcessingState["stage"], "idle" | "file_selected" | "error">, string> = {
    uploading: "Uploading template…",
    processing: "Processing template…",
    information_found: "Information found. Review changes before applying them to this workspace.",
    review_changes: "Review the extracted changes before applying them to this workspace.",
    applying: "Applying approved changes…",
    applied: "Approved changes have been applied to this workspace.",
  };

  return {
    tone: processingState.stage === "applied" ? "success" : "neutral",
    message: processingState.message || messages[processingState.stage],
  };
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
  onContinueSelected,
  processingState,
}: TrainingTemplateCardProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);
  const [continueMessage, setContinueMessage] = useState<string | null>(null);
  const hasDownloadAction = Boolean(templateHref || onDownload);
  const displayedStatus = validationMessage
    ? { tone: "error" as const, message: validationMessage }
    : continueMessage
      ? { tone: "neutral" as const, message: continueMessage }
      : getProcessingStatus(processingState) || uploadStatus;

  const handleFileSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!acceptsFile(file, acceptedFileTypes)) {
      setSelectedFile(null);
      setContinueMessage(null);
      setValidationMessage("File type not supported.");
      event.target.value = "";
      return;
    }

    if (file.size > MAX_TEMPLATE_FILE_SIZE_BYTES) {
      setSelectedFile(null);
      setContinueMessage(null);
      setValidationMessage("File exceeds the maximum allowed size.");
      event.target.value = "";
      return;
    }

    setSelectedFile(file);
    setValidationMessage(null);
    setContinueMessage(null);
    onUploadSelected?.(file);
    // Resetting lets the user choose the same file again after correcting it.
    event.target.value = "";
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
    setValidationMessage(null);
    setContinueMessage(null);
    if (inputRef.current) inputRef.current.value = "";
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
        {!selectedFile ? (
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
            <Button type="button" disabled={disabled} aria-controls={inputId} onClick={() => inputRef.current?.click()} className="bg-[#16A34A] text-white hover:bg-[#15803D]">
              <Upload aria-hidden="true" />
              Upload completed template
            </Button>
          </div>
        ) : null}
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
        <p className="mt-3 text-xs leading-5 text-[#64748B]">Accepted files: {acceptedFileTypes.join(", ") || "Any file type"}. Maximum file size: 10 MB. Files remain in this browser until a workspace adds import support.</p>
        {selectedFile ? (
          <div className="mt-3 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-3">
            <div className="flex items-start gap-2 text-sm text-[#166534]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <div className="min-w-0">
                <p className="truncate font-semibold text-[#166534]">{selectedFile.name}</p>
                <p className="mt-1 text-[#475569]">Type: {getFileTypeLabel(selectedFile)} · Size: {formatFileSize(selectedFile.size)}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button type="button" variant="outline" onClick={removeSelectedFile} disabled={disabled}>Remove</Button>
              <Button
                type="button"
                onClick={() => {
                  if (onContinueSelected) {
                    onContinueSelected(selectedFile);
                    return;
                  }
                  setContinueMessage("File selected only. It has not been uploaded or processed.");
                }}
                disabled={disabled}
                className="bg-[#16A34A] text-white hover:bg-[#15803D]"
              >
                Continue
              </Button>
            </div>
          </div>
        ) : null}
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
