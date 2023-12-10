import { useEffect } from "react";
import { useState } from "react";
import { apiService } from "src/api-service/api-service";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check for existing session/token
    const token = localStorage.getItem("authToken");
    // TODO validate the token, check for expiry, etc.
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const authorize = async (credentials) => {
    // Perform the login logic, probably an API call
    // If successful, set the token in localStorage and update state
    const { accessToken } = await apiService.login(credentials);
    if (accessToken) {
      localStorage.setItem("authToken", accessToken);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    // Clear the session/token
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  // Optional: Implement a function to handle token/session expiry
  const handleExpiry = () => {
    // Logic to handle expirationu
    // E.g., logging the user out, refreshing the token, etc.
  };

  return { isAuthenticated, loading, authorize, logout, handleExpiry };
};

export default useAuth;
