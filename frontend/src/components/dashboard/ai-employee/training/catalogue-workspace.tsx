import { ChevronRight, Package, Search, Upload, X } from "lucide-react";
import { TemplateDownloadMenu } from "./template-download-menu";
import {
  CATALOGUE_FILTER_TABS,
  getCatalogueItemReadiness,
  isCatalogueLowStock,
  type CatalogueImportState,
  type CatalogueProduct,
  type CatalogueTab,
  type CatalogueAttentionFilter,
} from "./catalogue-model";

function CatalogueItemImage({
  src,
  alt,
  className,
}: {
  src?: string | null;
  alt: string;
  className: string;
}) {
  const imageSrc = src?.trim();
  if (imageSrc) {
    return <img src={imageSrc} alt={alt} className={className} />;
  }
  return (
    <div
      role="img"
      aria-label={`${alt} image unavailable`}
      className={`${className} flex items-center justify-center bg-[#F1F5F9] text-[#94A3B8]`}
    >
      <Package className="h-1/3 w-1/3 min-h-4 min-w-4" aria-hidden="true" />
    </div>
  );
}

function RuleChoice({
  legend,
  name,
  value,
  options,
  onChange,
}: {
  legend: string;
  name: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="rounded-2xl border border-[#E5E7EB] bg-white p-4 sm:p-5">
      <legend className="px-1 text-sm font-semibold text-[#111827]">
        {legend}
      </legend>
      <div className="mt-3 grid gap-2">
        {options.map((option) => {
          const selected = value === option.value;
          return (
            <label
              key={option.value}
              className={`flex min-h-11 cursor-pointer items-center rounded-xl border px-4 py-3 text-sm font-semibold transition ${selected ? "border-[#111827] bg-[#111827] text-white" : "border-[#E5E7EB] bg-white text-[#111827] hover:bg-[#F8FAFB]"}`}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={selected}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

type CatalogueTrainingWorkspaceProps = {
  activeStep: number;
  addButtonLabel: string;
  products: CatalogueProduct[];
  filteredProducts: CatalogueProduct[];
  catalogLoading: boolean;
  catalogError: string | null;
  catalogSaving: boolean;
  catalogDeletingId: number | null;
  mediaUploading: boolean;
  productSearch: string;
  selectedTab: CatalogueTab;
  attentionFilter: CatalogueAttentionFilter;
  catalogueImportOpen: boolean;
  catalogueImport: CatalogueImportState;
  addItemChoiceOpen: boolean;
  addItemTypes: string[];
  draft: CatalogueProduct | null;
  productFormErrors: Record<string, string>;
  pendingDelete: CatalogueProduct | null;
  upsellProducts: boolean;
  recommendAlternatives: boolean;
  askFollowUpQuestions: boolean;
  lessonPrimaryActionLabel: string;
  trainingFinished: boolean;
  onProductSearchChange: (value: string) => void;
  onSelectedTabChange: (tab: CatalogueTab) => void;
  onAttentionFilterChange: (filter: CatalogueAttentionFilter) => void;
  onClearFilters: () => void;
  onRetryCatalog: () => void;
  onAddItem: () => void;
  onSelectAddItemType: (type: string) => void;
  onCloseAddItemChoice: () => void;
  onToggleImport: () => void;
  onCloseImport: () => void;
  onImportFile: (file?: File | null) => void;
  onRemoveImport: () => void;
  onConfirmImport: () => void;
  onEditItem: (id: number) => void;
  onRequestDelete: (item: CatalogueProduct) => void;
  onCancelDelete: () => void;
  onConfirmDelete: () => void;
  onUpdateDraftField: (id: number, field: string, value: unknown) => void;
  onCloseEditor: () => void;
  onSaveItem: () => void;
  onUploadItemImage: (files: FileList | null) => void;
  onSetThumbnail: (productId: number, assetId: number) => void;
  onDeleteMedia: (productId: number, assetId: number) => void;
  onGoToProducts: () => void;
  onUpsellChange: (value: boolean) => void;
  onRecommendAlternativesChange: (value: boolean) => void;
  onAskFollowUpChange: (value: boolean) => void;
  onBack: () => void;
  onSave: () => void;
  onContinue: () => void;
};

export default function CatalogueTrainingWorkspace({
  activeStep,
  addButtonLabel,
  products,
  filteredProducts,
  catalogLoading,
  catalogError,
  catalogSaving,
  catalogDeletingId,
  mediaUploading,
  productSearch,
  selectedTab,
  attentionFilter,
  catalogueImportOpen,
  catalogueImport,
  addItemChoiceOpen,
  addItemTypes,
  draft,
  productFormErrors,
  pendingDelete,
  upsellProducts,
  recommendAlternatives,
  askFollowUpQuestions,
  lessonPrimaryActionLabel,
  trainingFinished,
  onProductSearchChange,
  onSelectedTabChange,
  onAttentionFilterChange,
  onClearFilters,
  onRetryCatalog,
  onAddItem,
  onSelectAddItemType,
  onCloseAddItemChoice,
  onToggleImport,
  onCloseImport,
  onImportFile,
  onRemoveImport,
  onConfirmImport,
  onEditItem,
  onRequestDelete,
  onCancelDelete,
  onConfirmDelete,
  onUpdateDraftField,
  onCloseEditor,
  onSaveItem,
  onUploadItemImage,
  onSetThumbnail,
  onDeleteMedia,
  onGoToProducts,
  onUpsellChange,
  onRecommendAlternativesChange,
  onAskFollowUpChange,
  onBack,
  onSave,
  onContinue,
}: CatalogueTrainingWorkspaceProps) {
  const savedCount = products.length;
  const typeCounts = products.reduce<Record<string, number>>((counts, item) => {
    counts[item.type] = (counts[item.type] ?? 0) + 1;
    return counts;
  }, {});
  const meaningfulCounts = Object.entries(typeCounts).filter(
    ([, count]) => count > 0,
  );
  const filtersActive = Boolean(
    productSearch || selectedTab !== "All" || attentionFilter !== "all",
  );
  const lowStockCount = products.filter(isCatalogueLowStock).length;
  const needsInformationCount = products.filter(
    (item) => !getCatalogueItemReadiness(item).isReady,
  ).length;
  const isNewDraft = Boolean(draft && draft.id < 0);
  const inputClass =
    "mt-2 h-11 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 text-sm text-[#111827] outline-none transition placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20";
  const labelClass = "text-sm font-semibold text-[#111827]";

  return (
    <div className="w-full min-w-0 space-y-4 overflow-x-hidden">
      {activeStep === 0 ? (
        <section className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-5">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-xl font-semibold tracking-[-0.02em] text-[#111827] sm:text-2xl">
                Products & Services
              </h1>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-[#475569]">
                Build the catalogue your AI Employee will use when talking to
                customers.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFB] px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                Catalogue
              </p>
              <p className="mt-1 text-sm font-semibold text-[#111827]">
                {catalogLoading
                  ? "Loading…"
                  : `${savedCount} ${savedCount === 1 ? "item" : "items"}`}
              </p>
              {meaningfulCounts.length > 0 ? (
                <p className="mt-1 text-sm text-[#64748B]">
                  {meaningfulCounts
                    .map(
                      ([type, count]) =>
                        `${count} ${count === 1 ? type : `${type}s`}`,
                    )
                    .join(" · ")}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={onAddItem}
                className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-[#111827] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1F2937] sm:w-auto"
              >
                {addButtonLabel}
              </button>
              <button
                type="button"
                aria-expanded={catalogueImportOpen}
                onClick={onToggleImport}
                className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-[#E5E7EB] bg-white px-5 text-sm font-semibold text-[#111827] shadow-sm transition hover:bg-[#F8FAFB] sm:w-auto"
              >
                <Upload
                  className="mr-2 h-4 w-4 text-[#475569]"
                  aria-hidden="true"
                />
                Import Catalogue
              </button>
            </div>
          </div>

          {catalogueImportOpen ? (
            <section
              aria-labelledby="catalogue-import-title"
              className="mt-5 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFB] p-4 sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2
                    id="catalogue-import-title"
                    className="text-base font-semibold text-[#111827]"
                  >
                    Import catalogue
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#64748B]">
                    Prepare a CSV or Excel file of products and services. This
                    step previews your file; it does not add items to your
                    catalogue yet.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onCloseImport}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#64748B] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
                  aria-label="Close catalogue import"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center">
                <TemplateDownloadMenu
                  templateHref="/templates/sokoos-catalogue-template.csv"
                  className="w-full"
                  triggerClassName="h-11 w-full rounded-xl border-[#E5E7EB] bg-white px-4 text-sm font-semibold text-[#111827] hover:bg-[#F8FAFB] hover:text-[#111827] focus-visible:ring-[#22C55E]"
                />
                <span className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
                  or
                </span>
                <label className="inline-flex h-11 cursor-pointer items-center justify-center rounded-xl bg-[#111827] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1F2937] focus-within:ring-2 focus-within:ring-[#22C55E] focus-within:ring-offset-2">
                  <Upload className="mr-2 h-4 w-4" aria-hidden="true" />
                  Upload file
                  <input
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    className="sr-only"
                    onChange={(event) => {
                      void onImportFile(event.target.files?.[0]);
                      event.currentTarget.value = "";
                    }}
                  />
                </label>
              </div>
              <p className="mt-3 text-xs text-[#64748B]">
                Accepted formats: CSV, XLSX, XLS. Excel files can be selected,
                but row preview is only available for CSV.
              </p>

              {catalogueImport.file ? (
                <div className="mt-4 rounded-xl border border-[#E5E7EB] bg-white p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">
                        File selected
                      </p>
                      <p className="mt-1 text-sm text-[#64748B]">
                        {catalogueImport.file.name} ·{" "}
                        {(catalogueImport.file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={onRemoveImport}
                      className="text-sm font-semibold text-[#475569] underline underline-offset-4 hover:text-[#111827]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : null}

              {catalogueImport.status === "selected" ? (
                <div className="mt-4 rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] p-4 text-sm text-[#1D4ED8]">
                  <p className="font-semibold">
                    Excel preview is not available yet
                  </p>
                  <p className="mt-1">
                    This file was selected, but items cannot be imported from
                    Excel in this version. Convert it to CSV to preview rows.
                  </p>
                </div>
              ) : null}
              {catalogueImport.preview ? (
                <div className="mt-4 rounded-xl border border-[#E5E7EB] bg-white p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">
                        Preview
                      </p>
                      <p className="mt-1 text-sm text-[#64748B]">
                        Showing the first{" "}
                        {Math.min(catalogueImport.preview.rows.length, 5)} of{" "}
                        {catalogueImport.preview.rows.length} rows. Confirming
                        does not add these items yet.
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${catalogueImport.status === "ready" ? "bg-[#ECFDF5] text-[#166534]" : "bg-[#FFFBEB] text-[#B45309]"}`}
                    >
                      {catalogueImport.status === "ready"
                        ? "Ready to review"
                        : "Needs attention"}
                    </span>
                  </div>
                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="border-b border-[#E5E7EB] text-xs text-[#64748B]">
                        <tr>
                          <th className="pb-2 pr-4 font-semibold">Name</th>
                          <th className="pb-2 pr-4 font-semibold">Category</th>
                          <th className="pb-2 font-semibold">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F1F5F9]">
                        {catalogueImport.preview.rows
                          .slice(0, 5)
                          .map((row, index) => (
                            <tr key={`${row.name}-${index}`}>
                              <td className="py-2 pr-4 text-[#111827]">
                                {row.name || "—"}
                              </td>
                              <td className="py-2 pr-4 text-[#475569]">
                                {row.category || "—"}
                              </td>
                              <td className="py-2 text-[#111827]">
                                {row.price || "—"}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}
              {catalogueImport.errors.length > 0 ? (
                <div
                  className="mt-4 rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-4 text-sm text-[#B91C1C]"
                  role="alert"
                >
                  <p className="font-semibold">Fix these before continuing</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {catalogueImport.errors.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {catalogueImport.status === "ready" ? (
                <div className="mt-4 flex flex-col gap-3 rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-[#92400E]">
                    Preview looks valid. Confirming stores this review locally
                    and does not add items to your catalogue.
                  </p>
                  <button
                    type="button"
                    onClick={onConfirmImport}
                    className="inline-flex h-10 shrink-0 items-center justify-center rounded-lg bg-[#111827] px-4 text-sm font-semibold text-white transition hover:bg-[#1F2937] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2"
                  >
                    Confirm preview
                  </button>
                </div>
              ) : null}
              {catalogueImport.status === "confirmed" ? (
                <div
                  className="mt-4 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-4 text-sm text-[#166534]"
                  role="status"
                >
                  <p className="font-semibold">Preview confirmed</p>
                  <p className="mt-1">
                    No catalogue items were added. Use Add Item to save products
                    and services one at a time until import is connected.
                  </p>
                </div>
              ) : null}
            </section>
          ) : null}

          {catalogError ? (
            <div
              className="mt-4 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3"
              role="alert"
            >
              <p className="text-sm font-semibold text-[#B91C1C]">
                Your catalogue could not be loaded.
              </p>
              <p className="mt-1 text-sm text-[#B91C1C]">{catalogError}</p>
              <button
                type="button"
                onClick={onRetryCatalog}
                className="mt-3 text-sm font-semibold text-[#111827] underline decoration-[#FECACA] underline-offset-4"
              >
                Retry
              </button>
            </div>
          ) : null}

          {catalogLoading ? (
            <div className="mt-5 rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFB] p-8 text-center text-sm text-[#64748B]">
              Loading your catalogue...
            </div>
          ) : savedCount === 0 && !filtersActive ? (
            <div className="mt-5 rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFB] p-6 text-center sm:p-8">
              <p className="text-lg font-semibold text-[#111827]">
                No products or services yet
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#475569]">
                Add your first product or service so your AI Employee can use
                your catalogue when helping customers.
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={onAddItem}
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-[#111827] px-5 text-sm font-semibold text-white"
                >
                  Add Item
                </button>
                <button
                  type="button"
                  onClick={onToggleImport}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white px-5 text-sm font-semibold text-[#111827]"
                >
                  Import Catalogue
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-5">
              <div className="relative">
                <label className="sr-only" htmlFor="catalogue-search">
                  Search products or services
                </label>
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]"
                  aria-hidden="true"
                />
                <input
                  id="catalogue-search"
                  type="search"
                  value={productSearch}
                  onChange={(event) =>
                    onProductSearchChange(event.target.value)
                  }
                  placeholder="Search products or services..."
                  className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white py-2 pl-11 pr-11 text-sm text-[#111827] outline-none transition placeholder:text-[#94A3B8] focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20"
                />
                {productSearch ? (
                  <button
                    type="button"
                    aria-label="Clear catalogue search"
                    onClick={() => onProductSearchChange("")}
                    className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-[#64748B] hover:bg-[#F1F5F9]"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                ) : null}
              </div>

              <div className="mt-3 flex flex-col gap-2">
                <div
                  className="flex flex-wrap gap-2"
                  aria-label="Filter catalogue items by type"
                >
                  {CATALOGUE_FILTER_TABS.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => onSelectedTabChange(tab)}
                      className={`inline-flex h-9 items-center justify-center rounded-full border px-3.5 text-xs font-semibold ${selectedTab === tab ? "border-[#111827] bg-[#111827] text-white" : "border-[#E5E7EB] bg-white text-[#475569]"}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    aria-pressed={attentionFilter === "low-stock"}
                    onClick={() =>
                      onAttentionFilterChange(
                        attentionFilter === "low-stock" ? "all" : "low-stock",
                      )
                    }
                    className={`inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-xs font-semibold ${attentionFilter === "low-stock" ? "border-[#B45309] bg-[#FFFBEB] text-[#B45309]" : "border-[#E5E7EB] bg-white text-[#475569]"}`}
                  >
                    Low stock{" "}
                    <span className="tabular-nums">{lowStockCount}</span>
                  </button>
                  <button
                    type="button"
                    aria-pressed={attentionFilter === "needs-information"}
                    onClick={() =>
                      onAttentionFilterChange(
                        attentionFilter === "needs-information"
                          ? "all"
                          : "needs-information",
                      )
                    }
                    className={`inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-xs font-semibold ${attentionFilter === "needs-information" ? "border-[#B45309] bg-[#FFFBEB] text-[#B45309]" : "border-[#E5E7EB] bg-white text-[#475569]"}`}
                  >
                    Needs information{" "}
                    <span className="tabular-nums">
                      {needsInformationCount}
                    </span>
                  </button>
                </div>
              </div>

              {filtersActive ? (
                <div className="mt-3 flex items-center gap-3 text-xs text-[#64748B]">
                  <span>
                    {filteredProducts.length} matching{" "}
                    {filteredProducts.length === 1 ? "item" : "items"}
                  </span>
                  <button
                    type="button"
                    onClick={onClearFilters}
                    className="font-semibold text-[#111827] underline decoration-[#CBD5E1] underline-offset-4"
                  >
                    Clear filters
                  </button>
                </div>
              ) : null}

              {filteredProducts.length === 0 ? (
                <div className="mt-5 rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFB] p-6 text-center">
                  <p className="text-base font-semibold text-[#111827]">
                    No matching items
                  </p>
                  <p className="mt-2 text-sm text-[#475569]">
                    Try a different search or clear filters to see your
                    catalogue.
                  </p>
                </div>
              ) : (
                <div className="mt-4 grid gap-3">
                  {filteredProducts.map((item) => {
                    const isAvailable =
                      item.availability === "In stock" ||
                      item.availability === "Available";
                    return (
                      <article
                        key={item.id}
                        className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-[0_6px_18px_rgba(15,23,42,0.04)]"
                      >
                        <div className="flex gap-3">
                          <CatalogueItemImage
                            src={item.image}
                            alt={item.name}
                            className="h-16 w-16 shrink-0 rounded-xl object-cover"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="text-base font-semibold leading-6 text-[#111827]">
                              {item.name || "Untitled item"}
                            </p>
                            <p className="mt-0.5 text-sm text-[#64748B]">
                              {[item.type, item.category]
                                .filter(Boolean)
                                .join(" · ")}
                            </p>
                            {item.price ? (
                              <p className="mt-2 text-sm font-semibold text-[#111827]">
                                {item.price}
                              </p>
                            ) : null}
                            <span
                              className={`mt-2 inline-flex h-7 items-center rounded-full px-2.5 text-xs font-semibold ${isAvailable ? "bg-[#ECFDF5] text-[#166534]" : "bg-[#FFFBEB] text-[#B45309]"}`}
                            >
                              {item.availability}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => onEditItem(item.id)}
                            className="inline-flex h-10 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-sm font-semibold text-[#111827] hover:bg-[#F8FAFB]"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => onRequestDelete(item)}
                            disabled={catalogDeletingId === item.id}
                            className="inline-flex h-10 items-center justify-center rounded-lg border border-[#FECACA] bg-white text-sm font-semibold text-[#B91C1C] hover:bg-[#FEF2F2] disabled:opacity-60"
                          >
                            {catalogDeletingId === item.id
                              ? "Deleting…"
                              : "Delete"}
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </section>
      ) : (
        <section className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-5">
          <h1 className="text-xl font-semibold tracking-[-0.02em] text-[#111827] sm:text-2xl">
            Catalogue Rules
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-[#475569]">
            Teach your AI Employee how to use your catalogue when helping
            customers.
          </p>

          {savedCount === 0 ? (
            <div className="mt-5 rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFB] p-6">
              <p className="text-lg font-semibold text-[#111827]">
                Your catalogue is empty.
              </p>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                Add your products or services in Products & Services before
                configuring how your AI Employee should use them.
              </p>
              <button
                type="button"
                onClick={onGoToProducts}
                className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-[#111827] px-5 text-sm font-semibold text-white"
              >
                Go to Products & Services
              </button>
            </div>
          ) : (
            <div className="mt-5 space-y-4">
              <p className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFB] px-4 py-3 text-sm leading-6 text-[#475569]">
                Your AI Employee can use the {savedCount}{" "}
                {savedCount === 1
                  ? "product or service"
                  : "products and services"}{" "}
                in your catalogue when helping customers.
              </p>
              <RuleChoice
                legend="Can your AI Employee recommend products or services?"
                name="catalogue-recommend"
                value={upsellProducts ? "yes" : "no"}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
                onChange={(value) => onUpsellChange(value === "yes")}
              />
              <RuleChoice
                legend="Can the AI recommend similar products or services?"
                name="catalogue-alternatives"
                value={recommendAlternatives ? "yes" : "no"}
                options={[
                  { value: "yes", label: "Yes, suggest alternatives" },
                  { value: "no", label: "No, only mention what is available" },
                ]}
                onChange={(value) =>
                  onRecommendAlternativesChange(value === "yes")
                }
              />
              <RuleChoice
                legend="Should the AI ask questions before recommending something?"
                name="catalogue-follow-up"
                value={askFollowUpQuestions ? "yes" : "no"}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
                onChange={(value) => onAskFollowUpChange(value === "yes")}
              />
            </div>
          )}
        </section>
      )}

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#EEF2F6] bg-white pt-5">
        <button
          type="button"
          onClick={onBack}
          disabled={activeStep === 0}
          className="text-sm font-semibold text-[#64748B] transition hover:text-[#111827] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Back
        </button>
        <div className="flex items-center gap-3">
          {activeStep === 1 ? (
            <button
              type="button"
              onClick={onSave}
              disabled={catalogSaving}
              className="inline-flex items-center justify-center rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-[#F8FAFB] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Save
            </button>
          ) : null}
          <button
            type="button"
            onClick={onContinue}
            disabled={catalogSaving}
            className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#334155] disabled:opacity-60"
          >
            {lessonPrimaryActionLabel}
            {trainingFinished ? null : <ChevronRight className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {addItemChoiceOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/30 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onCloseAddItemChoice();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="catalogue-item-type-title"
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                  Add to catalogue
                </p>
                <h2
                  id="catalogue-item-type-title"
                  className="mt-1 text-xl font-semibold text-[#111827]"
                >
                  What are you adding?
                </h2>
                <p className="mt-2 text-sm text-[#64748B]">
                  Choose the offer type so Sokoos knows how to recommend it.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close offer type selection"
                onClick={onCloseAddItemChoice}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#64748B] hover:bg-[#F1F5F9]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {addItemTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => onSelectAddItemType(type)}
                  className="min-h-12 rounded-xl border border-[#E5E7EB] bg-white px-4 py-4 text-left text-sm font-semibold text-[#111827] transition hover:border-[#86EFAC] hover:bg-[#F0FDF4]"
                >
                  {type}
                </button>
              ))}
            </div>
          </section>
        </div>
      ) : null}

      {draft ? (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-[#0F172A]/30"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onCloseEditor();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="catalogue-item-editor-title"
            className="flex h-full w-full max-w-2xl flex-col bg-[#F8FAFB] shadow-2xl"
          >
            <header className="flex items-start justify-between gap-4 border-b border-[#E5E7EB] bg-white px-4 py-4 sm:px-7 sm:py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                  {isNewDraft ? "New catalogue item" : "Edit catalogue item"}
                </p>
                <h2
                  id="catalogue-item-editor-title"
                  className="mt-1 text-xl font-semibold text-[#111827]"
                >
                  {isNewDraft
                    ? "Add item"
                    : draft.name.trim()
                      ? `Edit ${draft.name}`
                      : "Edit item"}
                </h2>
                <p className="mt-1 text-sm text-[#64748B]">
                  {isNewDraft
                    ? "This item stays a draft until you save it."
                    : "Changes stay in this form until you save them."}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close item editor"
                onClick={onCloseEditor}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#64748B] hover:bg-[#F1F5F9]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </header>
            <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-7">
              <form
                id="catalogue-item-form"
                noValidate
                onSubmit={(event) => {
                  event.preventDefault();
                  onSaveItem();
                }}
                className="space-y-4"
              >
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-[#111827]">
                    Basic information
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="sm:col-span-2">
                      <span className={labelClass}>
                        Name <span className="text-[#DC2626]">*</span>
                      </span>
                      <input
                        value={draft.name}
                        onChange={(event) =>
                          onUpdateDraftField(
                            draft.id,
                            "name",
                            event.target.value,
                          )
                        }
                        aria-invalid={Boolean(productFormErrors.name)}
                        className={inputClass}
                        placeholder="e.g. Deluxe hair treatment"
                      />
                      {productFormErrors.name ? (
                        <span className="mt-1 block text-xs text-[#B91C1C]">
                          {productFormErrors.name}
                        </span>
                      ) : null}
                    </label>
                    <label>
                      <span className={labelClass}>
                        Type <span className="text-[#DC2626]">*</span>
                      </span>
                      <select
                        value={draft.type}
                        onChange={(event) =>
                          onUpdateDraftField(
                            draft.id,
                            "type",
                            event.target.value,
                          )
                        }
                        className={inputClass}
                      >
                        <option value="Product">Product</option>
                        <option value="Service">Service</option>
                        <option value="Subscription">Subscription</option>
                        <option value="Digital Product">Digital product</option>
                        <option value="Membership">Membership</option>
                        <option value="Rental">Rental</option>
                      </select>
                    </label>
                    <label>
                      <span className={labelClass}>
                        Category <span className="text-[#DC2626]">*</span>
                      </span>
                      <input
                        value={draft.category}
                        onChange={(event) =>
                          onUpdateDraftField(
                            draft.id,
                            "category",
                            event.target.value,
                          )
                        }
                        aria-invalid={Boolean(productFormErrors.category)}
                        className={inputClass}
                        placeholder="e.g. Hair care"
                      />
                      {productFormErrors.category ? (
                        <span className="mt-1 block text-xs text-[#B91C1C]">
                          {productFormErrors.category}
                        </span>
                      ) : null}
                    </label>
                    <label className="sm:col-span-2">
                      <span className={labelClass}>
                        Description <span className="text-[#DC2626]">*</span>
                      </span>
                      <textarea
                        value={draft.description}
                        onChange={(event) =>
                          onUpdateDraftField(
                            draft.id,
                            "description",
                            event.target.value,
                          )
                        }
                        className="mt-2 min-h-28 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20"
                        placeholder="What is it, and what does the customer get?"
                      />
                      {productFormErrors.description ? (
                        <span className="mt-1 block text-xs text-[#B91C1C]">
                          {productFormErrors.description}
                        </span>
                      ) : null}
                    </label>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-[#111827]">
                    Pricing
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <label className="sm:col-span-2">
                      <span className={labelClass}>
                        Price <span className="text-[#DC2626]">*</span>
                      </span>
                      <input
                        value={draft.price}
                        onChange={(event) =>
                          onUpdateDraftField(
                            draft.id,
                            "price",
                            event.target.value,
                          )
                        }
                        aria-invalid={Boolean(productFormErrors.price)}
                        className={inputClass}
                        placeholder="e.g. $45.00 or From $45"
                      />
                      {productFormErrors.price ? (
                        <span className="mt-1 block text-xs text-[#B91C1C]">
                          {productFormErrors.price}
                        </span>
                      ) : null}
                    </label>
                    <label>
                      <span className={labelClass}>Currency</span>
                      <select
                        value={draft.currency ?? "USD"}
                        onChange={(event) =>
                          onUpdateDraftField(
                            draft.id,
                            "currency",
                            event.target.value,
                          )
                        }
                        className={inputClass}
                      >
                        <option value="USD">USD</option>
                        <option value="KES">KES</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-[#111827]">
                    Availability
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label>
                      <span className={labelClass}>Customer availability</span>
                      <select
                        value={draft.availability}
                        onChange={(event) =>
                          onUpdateDraftField(
                            draft.id,
                            "availability",
                            event.target.value,
                          )
                        }
                        className={inputClass}
                      >
                        <option value="Available">Available</option>
                        <option value="In stock">In stock</option>
                        <option value="Low stock">Low stock</option>
                        <option value="Unavailable">Unavailable</option>
                        <option value="By appointment">By appointment</option>
                      </select>
                    </label>
                    {["Product", "Rental"].includes(draft.type) ? (
                      <label>
                        <span className={labelClass}>Stock on hand</span>
                        <input
                          type="number"
                          min="0"
                          value={draft.currentStock ?? ""}
                          onChange={(event) =>
                            onUpdateDraftField(
                              draft.id,
                              "currentStock",
                              event.target.value === ""
                                ? undefined
                                : Number(event.target.value),
                            )
                          }
                          className={inputClass}
                          placeholder="Optional"
                        />
                      </label>
                    ) : null}
                  </div>
                  {["Service", "Subscription", "Membership"].includes(
                    draft.type,
                  ) ? (
                    <label className="mt-4 flex min-h-11 cursor-pointer items-center gap-3 rounded-xl bg-[#F8FAFB] p-3 text-sm text-[#475569]">
                      <input
                        type="checkbox"
                        checked={Boolean(draft.appointmentRequired)}
                        onChange={(event) =>
                          onUpdateDraftField(
                            draft.id,
                            "appointmentRequired",
                            event.target.checked,
                          )
                        }
                        className="h-4 w-4 rounded border-[#CBD5E1] text-[#22C55E] focus:ring-[#22C55E]"
                      />
                      Appointment required
                    </label>
                  ) : null}
                </div>
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-[#111827]">
                    Media
                  </h3>
                  <p className="mt-1 text-sm text-[#64748B]">
                    A clear image helps customers recognize this item.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <CatalogueItemImage
                      src={draft.image}
                      alt={draft.name || "Item"}
                      className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    />
                    <label className="inline-flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#E5E7EB] bg-white px-3 text-sm font-semibold text-[#111827] hover:bg-[#F8FAFB]">
                      <span>
                        {mediaUploading ? "Uploading…" : "Upload image"}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        disabled={mediaUploading || isNewDraft}
                        className="sr-only"
                        onChange={(event) =>
                          onUploadItemImage(event.target.files)
                        }
                      />
                    </label>
                  </div>
                  {isNewDraft ? (
                    <p className="mt-3 text-xs text-[#64748B]">
                      Save the item before uploading images.
                    </p>
                  ) : null}
                  {!isNewDraft && draft.mediaAssets.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {draft.mediaAssets.map((asset) => (
                        <div
                          key={asset.id}
                          className="flex items-center gap-2 rounded-lg border border-[#E5E7EB] p-2"
                        >
                          <CatalogueItemImage
                            src={asset.url}
                            alt={asset.altText || asset.name}
                            className="h-10 w-10 rounded object-cover"
                          />
                          <div className="flex gap-1">
                            <button
                              type="button"
                              disabled={asset.isThumbnail}
                              onClick={() =>
                                onSetThumbnail(draft.id, Number(asset.id))
                              }
                              className="rounded px-2 py-1 text-xs font-semibold text-[#166534] disabled:text-[#94A3B8]"
                            >
                              {asset.isThumbnail
                                ? "Thumbnail"
                                : "Set thumbnail"}
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                onDeleteMedia(draft.id, Number(asset.id))
                              }
                              className="rounded px-2 py-1 text-xs font-semibold text-[#B91C1C]"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
            <footer className="flex flex-col-reverse gap-2 border-t border-[#E5E7EB] bg-white px-4 py-4 sm:flex-row sm:justify-end sm:gap-3 sm:px-7">
              <button
                type="button"
                onClick={onCloseEditor}
                disabled={catalogSaving}
                className="inline-flex h-11 items-center justify-center rounded-lg px-4 text-sm font-semibold text-[#475569] hover:bg-[#F1F5F9] disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="catalogue-item-form"
                disabled={catalogSaving}
                className="inline-flex h-11 items-center justify-center rounded-lg bg-[#111827] px-4 text-sm font-semibold text-white disabled:opacity-60"
              >
                {catalogSaving
                  ? "Saving…"
                  : isNewDraft
                    ? "Save Item"
                    : "Save Changes"}
              </button>
            </footer>
          </section>
        </div>
      ) : null}

      {pendingDelete ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0F172A]/40 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onCancelDelete();
          }}
        >
          <section
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="catalogue-delete-title"
            aria-describedby="catalogue-delete-description"
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >
            <h2
              id="catalogue-delete-title"
              className="text-lg font-semibold text-[#111827]"
            >
              Delete this catalogue item?
            </h2>
            <p
              id="catalogue-delete-description"
              className="mt-2 text-sm leading-6 text-[#475569]"
            >
              This will remove{" "}
              {pendingDelete.name.trim()
                ? `“${pendingDelete.name}”`
                : "this item"}{" "}
              from your catalogue and from the information your AI Employee can
              use when helping customers.
            </p>
            <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onCancelDelete}
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#E5E7EB] px-4 text-sm font-semibold text-[#111827]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onConfirmDelete}
                disabled={catalogDeletingId !== null}
                className="inline-flex h-11 items-center justify-center rounded-lg bg-[#B91C1C] px-4 text-sm font-semibold text-white disabled:opacity-60"
              >
                {catalogDeletingId !== null ? "Deleting…" : "Delete Item"}
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
