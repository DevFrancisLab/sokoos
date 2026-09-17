import type { CatalogItem } from "@/lib/api";

export type CatalogueMediaAsset = {
  id: number | string;
  name: string;
  fileType: string;
  uploadDate: string;
  size: string;
  url: string;
  mime?: string;
  duration?: string;
  altText?: string;
  isThumbnail?: boolean;
};

export type CatalogueProduct = {
  id: number;
  name: string;
  category: string;
  categoryId?: number;
  type: string;
  price: string;
  description: string;
  availability: string;
  image: string;
  mediaAssets: CatalogueMediaAsset[];
  sku?: string;
  tags?: string[];
  priceNote?: string;
  currentStock?: number;
  stockStatus?: string;
  lowStockThreshold?: number;
  warehouseLocation?: string;
  currency?: CatalogItem["currency"];
  appointmentRequired?: boolean;
  serviceDurationMinutes?: number;
  faqs?: string[];
  customerInformation?: string;
  readiness?: CatalogItem["readiness"];
};

export type CatalogueTab =
  | "All"
  | "Products"
  | "Services"
  | "Subscriptions"
  | "Digital Products"
  | "Memberships"
  | "Rentals";

export type CatalogueAttentionFilter =
  | "all"
  | "low-stock"
  | "needs-information";

export type CatalogueImportPreview = {
  headers: string[];
  rows: Array<Record<string, string>>;
};
export type CatalogueImportStatus =
  | "idle"
  | "selected"
  | "preview"
  | "error"
  | "ready"
  | "confirmed";
export type CatalogueImportState = {
  file?: File;
  status: CatalogueImportStatus;
  errors: string[];
  preview?: CatalogueImportPreview;
};

export const CATALOGUE_TAB_TO_TYPE: Record<
  Exclude<CatalogueTab, "All">,
  string
> = {
  Products: "Product",
  Services: "Service",
  Subscriptions: "Subscription",
  "Digital Products": "Digital Product",
  Memberships: "Membership",
  Rentals: "Rental",
};

export const CATALOGUE_FILTER_TABS: CatalogueTab[] = [
  "All",
  "Products",
  "Services",
  "Subscriptions",
  "Digital Products",
  "Memberships",
  "Rentals",
];

export function cloneCatalogueProduct(
  item: CatalogueProduct,
): CatalogueProduct {
  return {
    ...item,
    tags: item.tags ? [...item.tags] : [],
    faqs: item.faqs ? [...item.faqs] : [],
    mediaAssets: item.mediaAssets.map((asset) => ({ ...asset })),
  };
}

export function createCatalogueDraft(
  type: string,
  category?: { id: number; name: string },
): CatalogueProduct {
  return {
    id: -Date.now(),
    name: "",
    category: category?.name ?? "",
    categoryId: category?.id,
    type,
    price: "",
    description: "",
    availability: "Available",
    image: "",
    mediaAssets: [],
  };
}

export function getCatalogueItemReadiness(item: CatalogueProduct) {
  if (item.readiness) {
    return {
      label: item.readiness.label,
      isReady: item.readiness.is_ready,
      needsInformation: item.readiness.needs_information,
      missingImage: item.readiness.missing_image,
      missingFaq: item.readiness.missing_faq,
    };
  }

  const hasDescription = item.description.trim().length > 0;
  const hasImages = Boolean(item.image.trim() || item.mediaAssets.length > 0);
  const hasFAQs = Boolean(item.faqs?.some((faq) => faq.trim()));
  const hasPrice = item.price.trim().length > 0;
  const hasInventory =
    !["Product", "Rental"].includes(item.type) ||
    typeof item.currentStock === "number";
  const label = !hasImages
    ? "Needs Images"
    : !hasFAQs
      ? "Needs FAQ"
      : !hasDescription
        ? "Needs Description"
        : !hasPrice
          ? "Needs Pricing"
          : !hasInventory
            ? "Needs Inventory"
            : "100% Ready";

  return {
    label,
    isReady: label === "100% Ready",
    needsInformation: !hasDescription || !hasPrice || !hasInventory,
    missingImage: !hasImages,
    missingFaq: !hasFAQs,
  };
}

export function isCatalogueLowStock(item: CatalogueProduct) {
  const stock = item.currentStock;
  const threshold = item.lowStockThreshold ?? 5;
  return (
    item.availability.toLowerCase() === "low stock" ||
    (typeof stock === "number" && stock <= threshold)
  );
}

export function filterCatalogueProducts(
  items: CatalogueProduct[],
  search: string,
  tab: CatalogueTab,
  attention: CatalogueAttentionFilter,
) {
  const query = search.trim().toLowerCase();
  return items.filter((item) => {
    if (item.id < 0) return false;
    if (tab !== "All" && item.type !== CATALOGUE_TAB_TO_TYPE[tab]) return false;
    if (attention === "low-stock" && !isCatalogueLowStock(item)) return false;
    if (
      attention === "needs-information" &&
      getCatalogueItemReadiness(item).isReady
    )
      return false;
    if (!query) return true;
    return [item.name, item.category, item.type, item.description, item.price]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });
}
