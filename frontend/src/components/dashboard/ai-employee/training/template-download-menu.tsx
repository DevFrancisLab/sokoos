import { useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  TEMPLATE_DOWNLOAD_OPTIONS,
  downloadTrainingTemplate,
  type TemplateDownloadFormat,
} from "./template-download";

type TemplateDownloadMenuProps = {
  templateHref: string;
  disabled?: boolean;
  className?: string;
  triggerClassName?: string;
  onDownload?: () => void;
};

export function TemplateDownloadMenu({
  templateHref,
  disabled = false,
  className,
  triggerClassName,
  onDownload,
}: TemplateDownloadMenuProps) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async (format: TemplateDownloadFormat) => {
    if (busy || disabled) return;
    setBusy(true);
    setError(null);
    try {
      await downloadTrainingTemplate(templateHref, format);
      onDownload?.();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "The template could not be downloaded. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className={cn("flex min-w-0 flex-col items-stretch", className)}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="outline"
            disabled={disabled || busy}
            aria-haspopup="menu"
            aria-label="Download template"
            className={cn(
              "border-[#BBF7D0] bg-white text-[#047857] hover:bg-[#ECFDF5] hover:text-[#065F46]",
              triggerClassName,
            )}
          >
            <Download aria-hidden="true" />
            {busy ? "Preparing…" : "Download template"}
            <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="bottom" sideOffset={6} className="z-[80] min-w-[12.5rem]">
          {TEMPLATE_DOWNLOAD_OPTIONS.map((option) => (
            <DropdownMenuItem
              key={option.format}
              disabled={busy}
              onSelect={() => {
                void handleDownload(option.format);
              }}
            >
              <span>{option.label}</span>
              <span className="ml-auto text-xs text-[#64748B]">{option.extension}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {error ? (
        <p className="mt-2 text-xs leading-5 text-[#B91C1C]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
