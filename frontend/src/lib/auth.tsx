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
let transientAuthToken: string | null = null;
let transientCurrentUser: AuthUser | null = null;

export function getAuthToken() {
  try {
    return localStorage.getItem(authTokenKey) ?? transientAuthToken;
  } catch {
    return transientAuthToken;
  }
}

export function getCurrentUser(): AuthUser | null {
  try {
    const storedUser = localStorage.getItem(currentUserKey);
    return storedUser ? (JSON.parse(storedUser) as AuthUser) : transientCurrentUser;
  } catch {
    return transientCurrentUser;
  }
}

export function saveAuthSession(token: string, user: AuthUser, remember = true) {
  try {
    localStorage.removeItem(authTokenKey);
    localStorage.removeItem(currentUserKey);
    sessionStorage.removeItem(authTokenKey);
    sessionStorage.removeItem(currentUserKey);
    transientAuthToken = null;
    transientCurrentUser = null;

    if (remember) {
      localStorage.setItem(authTokenKey, token);
      localStorage.setItem(currentUserKey, JSON.stringify(user));
    } else {
      transientAuthToken = token;
      transientCurrentUser = user;
    }
  } catch {
    transientAuthToken = token;
    transientCurrentUser = user;
  }
}

export function clearAuthSession() {
  try {
    localStorage.removeItem(authTokenKey);
    localStorage.removeItem(currentUserKey);
    sessionStorage.removeItem(authTokenKey);
    sessionStorage.removeItem(currentUserKey);
    transientAuthToken = null;
    transientCurrentUser = null;
  } catch {
    transientAuthToken = null;
    transientCurrentUser = null;
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
