export type TemplateProcessingStage =
  | "idle"
  | "file_selected"
  | "uploading"
  | "processing"
  | "information_found"
  | "review_changes"
  | "applying"
  | "applied"
  | "error";

export type TemplateProcessingFinding = {
  id: string;
  section: string;
  field: string;
  currentValue?: string | null;
  proposedValue?: string | null;
};

export type TemplateProcessingState = {
  stage: TemplateProcessingStage;
  message?: string;
  findings?: TemplateProcessingFinding[];
  error?: string;
};

/**
 * Contract for a future template-processing integration. The frontend does not
 * implement this adapter yet; a backend integration can provide it later.
 */
export type TemplateProcessingAdapter = {
  beginUpload: (file: File, workspaceName: string) => Promise<void>;
  reviewChanges: () => Promise<void>;
  applyChanges: () => Promise<void>;
};
