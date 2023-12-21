// Short duration JWT token (5-10 min)
export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export function setAccessToken(token) {
  localStorage.setItem("accessToken", token);
}

// Longer duration refresh token (30-60 min)
export function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}

export function setRefreshToken(token) {
  localStorage.setItem("refreshToken", token);
}
