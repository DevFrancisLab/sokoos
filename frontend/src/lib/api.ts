import { getAuthorizationHeader } from "./auth";

const defaultApiBaseUrl = "http://127.0.0.1:8000";

const apiBaseUrl = (
  import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl
).replace(/\/$/, "");

export type ApiResponse<T> = {
  data: T | null;
  status: number;
};

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number | null,
    public readonly data: unknown,
    public readonly isNetworkError = false,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function parseJsonResponse(response: Response): Promise<unknown> {
  const responseText = await response.text();

  if (!responseText) return null;

  try {
    return JSON.parse(responseText);
  } catch {
    return null;
  }
}

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  let response: Response;

  try {
    const isFormData = options.body instanceof FormData;

    response = await fetch(
      `${apiBaseUrl}${path.startsWith("/") ? path : `/${path}`}`,
      {
        ...options,
        headers: {
          ...(isFormData ? {} : { "Content-Type": "application/json" }),
          ...options.headers,
        },
      },
    );
  } catch {
    throw new ApiError(
      "Unable to connect to Sokoos right now. Please try again.",
      null,
      null,
      true,
    );
  }

  const data = await parseJsonResponse(response);

  if (!response.ok) {
    throw new ApiError(
      "The request could not be completed.",
      response.status,
      data,
    );
  }

  return { data: data as T | null, status: response.status };
}

export type PasswordResetRequestResponse = {
  success: boolean;
  message: string;
};

export type PasswordResetConfirmResponse = {
  success: boolean;
  message: string;
};

export type ChangePasswordResponse = {
  success: boolean;
  message: string;
};

export function requestPasswordReset(email: string) {
  return apiRequest<PasswordResetRequestResponse>("/api/auth/password-reset/", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export function confirmPasswordReset(
  uid: string,
  token: string,
  newPassword: string,
  confirmNewPassword: string,
) {
  return apiRequest<PasswordResetConfirmResponse>(
    "/api/auth/password-reset/confirm/",
    {
      method: "POST",
      body: JSON.stringify({
        uid,
        token,
        new_password: newPassword,
        confirm_new_password: confirmNewPassword,
      }),
    },
  );
}

export function changePassword(
  currentPassword: string,
  newPassword: string,
  confirmNewPassword: string,
) {
  return apiRequest<ChangePasswordResponse>("/api/auth/change-password/", {
    method: "POST",
    headers: getAuthorizationHeader() as HeadersInit,
    body: JSON.stringify({
      current_password: currentPassword,
      new_password: newPassword,
      confirm_new_password: confirmNewPassword,
    }),
  });
}

export type CatalogItemType =
  | "product"
  | "service"
  | "subscription"
  | "digital_product"
  | "membership"
  | "rental";

export type CatalogCategory = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type CatalogMedia = {
  id: number;
  file: string;
  original_name: string;
  mime_type: string;
  alt_text: string;
  is_thumbnail: boolean;
  created_at: string;
};

export type CatalogItem = {
  id: number;
  category: Pick<CatalogCategory, "id" | "name">;
  name: string;
  item_type: CatalogItemType;
  description: string;
  price: string;
  currency: "USD" | "KES" | "EUR" | "GBP";
  price_note: string;
  availability: "available" | "unavailable" | "by_appointment";
  sku: string;
  tags: string[];
  current_stock: number | null;
  low_stock_threshold: number | null;
  stock_status: "in_stock" | "low_stock" | "out_of_stock" | null;
  warehouse_location: string;
  appointment_required: boolean;
  service_duration_minutes: number | null;
  customer_information: string;
  faq_items: string[];
  media: CatalogMedia[];
  readiness: {
    label: string;
    is_ready: boolean;
    needs_information: boolean;
    missing_image: boolean;
    missing_faq: boolean;
  };
  created_at: string;
  updated_at: string;
};

export type CatalogItemInput = {
  category_id: number;
  name: string;
  item_type: CatalogItemType;
  description: string;
  price: string;
  currency: CatalogItem["currency"];
  price_note: string;
  availability: CatalogItem["availability"];
  sku: string;
  tags: string[];
  current_stock?: number | null;
  low_stock_threshold?: number | null;
  warehouse_location?: string;
  appointment_required?: boolean;
  service_duration_minutes?: number | null;
  customer_information: string;
  faq_items: string[];
};

type CatalogItemMutation = { success: boolean; catalog_item: CatalogItem };
type CatalogCategoryMutation = { success: boolean; category: CatalogCategory };
type CatalogMediaMutation = { success: boolean; media: CatalogMedia };

const authenticatedJson = (method: string, body?: unknown): RequestInit => ({
  method,
  headers: getAuthorizationHeader() as HeadersInit,
  ...(body === undefined ? {} : { body: JSON.stringify(body) }),
});

export function getCatalog(params: {
  search?: string;
  item_type?: CatalogItemType;
  low_stock?: boolean;
  readiness?: "needs_information";
} = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") query.set(key, String(value));
  });
  return apiRequest<CatalogItem[]>(`/api/catalog/${query.size ? `?${query}` : ""}`, authenticatedJson("GET"));
}

export function getCatalogItem(itemId: number) {
  return apiRequest<CatalogItem>(`/api/catalog/${itemId}/`, authenticatedJson("GET"));
}

export function createCatalogItem(item: CatalogItemInput) {
  return apiRequest<CatalogItemMutation>("/api/catalog/", authenticatedJson("POST", item));
}

export function updateCatalogItem(itemId: number, item: Partial<CatalogItemInput>) {
  return apiRequest<CatalogItemMutation>(`/api/catalog/${itemId}/`, authenticatedJson("PATCH", item));
}

export function deleteCatalogItem(itemId: number) {
  return apiRequest<{ success: boolean; message: string }>(`/api/catalog/${itemId}/`, authenticatedJson("DELETE"));
}

export function getCatalogCategories() {
  return apiRequest<CatalogCategory[]>("/api/catalog/categories/", authenticatedJson("GET"));
}

export function createCatalogCategory(name: string) {
  return apiRequest<CatalogCategoryMutation>("/api/catalog/categories/", authenticatedJson("POST", { name }));
}

export function updateCatalogCategory(categoryId: number, name: string) {
  return apiRequest<CatalogCategoryMutation>(`/api/catalog/categories/${categoryId}/`, authenticatedJson("PATCH", { name }));
}

export function deleteCatalogCategory(categoryId: number) {
  return apiRequest<{ success: boolean; message: string }>(`/api/catalog/categories/${categoryId}/`, authenticatedJson("DELETE"));
}

export function getCatalogMedia(itemId: number) {
  return apiRequest<CatalogMedia[]>(`/api/catalog/${itemId}/media/`, authenticatedJson("GET"));
}

export function uploadCatalogMedia(itemId: number, file: File, altText = "", isThumbnail = false) {
  const body = new FormData();
  body.append("file", file);
  body.append("alt_text", altText);
  body.append("is_thumbnail", String(isThumbnail));
  return apiRequest<CatalogMediaMutation>(`/api/catalog/${itemId}/media/`, {
    method: "POST",
    headers: getAuthorizationHeader() as HeadersInit,
    body,
  });
}

export function updateCatalogMedia(itemId: number, mediaId: number, data: { alt_text?: string; is_thumbnail?: boolean }) {
  return apiRequest<CatalogMediaMutation>(`/api/catalog/${itemId}/media/${mediaId}/`, authenticatedJson("PATCH", data));
}

export function deleteCatalogMedia(itemId: number, mediaId: number) {
  return apiRequest<{ success: boolean; message: string }>(`/api/catalog/${itemId}/media/${mediaId}/`, authenticatedJson("DELETE"));
}
