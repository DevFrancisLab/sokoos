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
