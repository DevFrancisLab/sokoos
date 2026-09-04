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

export type WhatsAppIntegration = {
  id: number;
  meta_business_account_id: string;
  phone_number_id: string;
  is_enabled: boolean;
  created_at: string;
  updated_at: string;
};

type WhatsAppIntegrationMutation = {
  success: boolean;
  whatsapp_integration: WhatsAppIntegration;
};

export function getWhatsAppIntegration() {
  return apiRequest<WhatsAppIntegration>("/api/business/whatsapp/", authenticatedJson("GET"));
}

export function saveWhatsAppIntegration(data: Pick<WhatsAppIntegration, "meta_business_account_id" | "phone_number_id">) {
  return apiRequest<WhatsAppIntegrationMutation>("/api/business/whatsapp/", authenticatedJson("POST", data));
}

export function updateWhatsAppIntegration(data: Partial<Pick<WhatsAppIntegration, "meta_business_account_id" | "phone_number_id" | "is_enabled">>) {
  return apiRequest<WhatsAppIntegrationMutation>("/api/business/whatsapp/", authenticatedJson("PATCH", data));
}

export type CustomerRelationship = "contact" | "lead" | "customer";
export type CustomerLeadStatus = "" | "new" | "cold" | "warm" | "hot";
export type CustomerSource = "whatsapp" | "website" | "email" | "sms" | "manual" | "import" | "google_contacts" | "other";

export type Customer = {
  id: number;
  name: string;
  phone: string;
  email: string;
  company: string;
  location: string;
  notes: string;
  relationship: CustomerRelationship;
  lead_status: CustomerLeadStatus;
  source: CustomerSource;
  created_at: string;
  updated_at: string;
};

export type CustomerInput = {
  name: string;
  phone?: string;
  email?: string;
  company?: string;
  location?: string;
  notes?: string;
  relationship?: CustomerRelationship;
  lead_status?: CustomerLeadStatus;
  source?: CustomerSource;
};

type CustomerMutation = { success: boolean; customer: Customer };

export function getCustomers(params: {
  search?: string;
  relationship?: CustomerRelationship;
  lead_status?: Exclude<CustomerLeadStatus, "">;
  source?: CustomerSource;
  ordering?: "name" | "-name" | "relationship" | "-relationship" | "created_at" | "-created_at" | "updated_at" | "-updated_at";
} = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") query.set(key, String(value));
  });
  return apiRequest<Customer[]>(`/api/customers/${query.size ? `?${query}` : ""}`, authenticatedJson("GET"));
}

export function createCustomer(customer: CustomerInput) {
  return apiRequest<CustomerMutation>("/api/customers/", authenticatedJson("POST", customer));
}

export function updateCustomer(customerId: number, customer: Partial<CustomerInput>) {
  return apiRequest<CustomerMutation>(`/api/customers/${customerId}/`, authenticatedJson("PATCH", customer));
}

export function deleteCustomer(customerId: number) {
  return apiRequest<{ success: boolean; message: string }>(`/api/customers/${customerId}/`, authenticatedJson("DELETE"));
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

export type ConversationChannel = "whatsapp" | "website" | "email" | "sms" | "facebook" | "instagram" | "telegram";
export type ConversationStatus = "active" | "needs_reply" | "resolved";
export type ConversationHandlingMode = "ai" | "human";

export type ConversationCustomer = {
  id: number;
  name: string;
  phone: string;
  email: string;
  company: string;
  location: string;
  relationship: string;
  lead_status: string;
};

export type ConversationMessage = {
  id: number;
  sender_type: "customer" | "human" | "ai";
  body: string;
  created_at: string;
};

export type Conversation = {
  id: number;
  customer: ConversationCustomer | null;
  channel: ConversationChannel;
  participant_address: string;
  status: ConversationStatus;
  handling_mode: ConversationHandlingMode;
  unread_count: number;
  last_message_at: string | null;
  latest_message: ConversationMessage | null;
  created_at: string;
  updated_at: string;
};

type ConversationMutation = { success: boolean; conversation: Conversation };
type MessageMutation = { success: boolean; message: ConversationMessage };

export function getConversations(params: {
  search?: string;
  status?: ConversationStatus;
  handling_mode?: ConversationHandlingMode;
  channel?: ConversationChannel;
  unread?: boolean;
  ordering?: "last_message_at" | "-last_message_at" | "created_at" | "-created_at";
} = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") query.set(key, String(value));
  });
  return apiRequest<Conversation[]>(`/api/conversations/${query.size ? `?${query}` : ""}`, authenticatedJson("GET"));
}

export function getConversation(conversationId: number) {
  return apiRequest<Conversation>(`/api/conversations/${conversationId}/`, authenticatedJson("GET"));
}

export function getConversationMessages(conversationId: number) {
  return apiRequest<ConversationMessage[]>(`/api/conversations/${conversationId}/messages/`, authenticatedJson("GET"));
}

export function sendConversationMessage(conversationId: number, body: string) {
  return apiRequest<MessageMutation>(`/api/conversations/${conversationId}/messages/`, authenticatedJson("POST", { body }));
}

export function sendWhatsAppReply(conversationId: number, body: string) {
  return apiRequest<MessageMutation>(`/api/conversations/${conversationId}/whatsapp-reply/`, authenticatedJson("POST", { body }));
}

export function updateConversation(conversationId: number, data: Partial<Pick<Conversation, "status" | "handling_mode">>) {
  return apiRequest<ConversationMutation>(`/api/conversations/${conversationId}/`, authenticatedJson("PATCH", data));
}

export function markConversationRead(conversationId: number) {
  return apiRequest<ConversationMutation>(`/api/conversations/${conversationId}/read/`, authenticatedJson("POST"));
}

export type AIEmployeePersonality = "Friendly" | "Professional" | "Warm" | "Playful" | "Luxury" | "Technical" | "Casual" | "Formal";
export type AIEmployeeCommunicationStyle = "Short & Direct" | "Balanced" | "Detailed";
export type AIEmployeeEmojiUsage = "Never" | "Sometimes" | "Often";
export type AIEmployeePreferredTone = "Helpful" | "Confident" | "Educational" | "Sales-focused" | "Conversational";
export type AIEmployeeLanguage = "English" | "Kiswahili" | "French" | "Arabic" | "German" | "Spanish" | "Portuguese" | "Somali" | "Amharic" | "Hindi" | "Chinese" | "Italian";
export type KnowledgeSourceFAQCategory = "" | "General" | "Pricing" | "Delivery" | "Support" | "Other";

export type AIEmployeeConfiguration = {
  id: number | null;
  is_enabled: boolean; human_takeover_enabled: boolean; primary_language: AIEmployeeLanguage; supported_languages: AIEmployeeLanguage[];
  personality: AIEmployeePersonality; communication_style: AIEmployeeCommunicationStyle; emoji_usage: AIEmployeeEmojiUsage; preferred_tone: AIEmployeePreferredTone;
  writing_examples: string; writing_style_options: Record<string, boolean>; welcome_message: string;
  away_message: string; closing_message: string; outside_hours_mode: "continue" | "collect" | "closed";
  max_ai_messages: number; upsell_products: boolean; recommend_alternatives: boolean;
  close_sales_automatically: boolean; business_context: Record<string, string | string[]>;
  readiness: { configured_sections: string[]; missing_sections: string[]; is_configured: boolean };
  created_at: string | null; updated_at: string | null;
};

export type KnowledgeSource = {
  id: number; kind: "faq" | "document" | "website"; title: string; faq_question: string; faq_answer: string;
  faq_category: KnowledgeSourceFAQCategory; file: string | null; original_name: string; mime_type: string; file_size: number | null;
  url: string; instructions: string; created_at: string; updated_at: string;
};

type AIEmployeeMutation = { success: boolean; ai_employee: AIEmployeeConfiguration };
type KnowledgeMutation = { success: boolean; knowledge_source: KnowledgeSource };

export function getAIEmployeeConfiguration() { return apiRequest<AIEmployeeConfiguration>("/api/ai-employee/me/", authenticatedJson("GET")); }
export function updateAIEmployeeConfiguration(data: Partial<Omit<AIEmployeeConfiguration, "id" | "readiness" | "created_at" | "updated_at">>) { return apiRequest<AIEmployeeMutation>("/api/ai-employee/me/", authenticatedJson("PATCH", data)); }
export function getKnowledgeSources(kind?: KnowledgeSource["kind"]) { return apiRequest<KnowledgeSource[]>(`/api/ai-employee/knowledge/${kind ? `?kind=${kind}` : ""}`, authenticatedJson("GET")); }
export function createKnowledgeSource(data: Record<string, string | File>) {
  const body = new FormData(); Object.entries(data).forEach(([key, value]) => body.append(key, value));
  return apiRequest<KnowledgeMutation>("/api/ai-employee/knowledge/", { method: "POST", headers: getAuthorizationHeader() as HeadersInit, body });
}
export function updateKnowledgeSource(sourceId: number, data: Record<string, string>) { return apiRequest<KnowledgeMutation>(`/api/ai-employee/knowledge/${sourceId}/`, authenticatedJson("PATCH", data)); }
export function deleteKnowledgeSource(sourceId: number) { return apiRequest<{ success: boolean; message: string }>(`/api/ai-employee/knowledge/${sourceId}/`, authenticatedJson("DELETE")); }
