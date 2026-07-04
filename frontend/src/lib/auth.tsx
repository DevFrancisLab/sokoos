export function isAuthenticated() {
  try {
    return localStorage.getItem("mock_user") !== null;
  } catch (e) {
    return false;
  }
}

export function signInMock(user: { id: string; name: string }) {
  try {
    localStorage.setItem("mock_user", JSON.stringify(user));
  } catch (e) {
    // ignore
  }
}

export function signOutMock() {
  try {
    localStorage.removeItem("mock_user");
  } catch (e) {
    // ignore
  }
}

export function getMockUser() {
  try {
    const v = localStorage.getItem("mock_user");
    return v ? JSON.parse(v) : null;
  } catch (e) {
    return null;
  }
}
