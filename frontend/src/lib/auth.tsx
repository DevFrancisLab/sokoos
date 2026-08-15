export type AuthUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  is_verified?: boolean;
  avatar_url?: string | null;
};

const authTokenKey = "sokoos-auth-token";
const currentUserKey = "sokoos-current-user";

export function getAuthToken() {
  try {
    return localStorage.getItem(authTokenKey);
  } catch {
    return null;
  }
}

export function getCurrentUser(): AuthUser | null {
  try {
    const storedUser = localStorage.getItem(currentUserKey);
    return storedUser ? (JSON.parse(storedUser) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function saveAuthSession(token: string, user: AuthUser) {
  try {
    localStorage.setItem(authTokenKey, token);
    localStorage.setItem(currentUserKey, JSON.stringify(user));
  } catch {
    // Storage may be unavailable in the current browser context.
  }
}

export function clearAuthSession() {
  try {
    localStorage.removeItem(authTokenKey);
    localStorage.removeItem(currentUserKey);
  } catch {
    // Storage may be unavailable in the current browser context.
  }
}

export function isAuthenticated() {
  return Boolean(getAuthToken());
}

export function getAuthorizationHeader() {
  const token = getAuthToken();
  return token ? { Authorization: `Token ${token}` } : {};
}

export function getUserDisplayName(user: AuthUser) {
  return [user.first_name, user.last_name].filter(Boolean).join(" ") || user.email;
}

// Compatibility exports for dashboard code.
export function getMockUser() {
  return getCurrentUser();
}

export function signOutMock() {
  clearAuthSession();
}
