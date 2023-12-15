import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { apiService } from "src/api-service/api-service";
import { refreshToken } from "src/api-service/axios-instance";
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from "src/utils/auth";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // check for existing session/token
    const token = getAccessToken();
    if (!token) {
      setLoading(false);
      return setIsAuthenticated(false);
    }
    // TODO validate the token, check for expiry, etc.
    const isValid = isAccessTokenValid();
    if (!isValid) {
      handleExpiry();
    }
    if (isValid) {
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, []);

  const authorize = async (credentials) => {
    // Perform the login logic, probably an API call
    // If successful, set the token in localStorage and update state
    const { accessToken } = await apiService.login(credentials);
    if (accessToken) {
      setAccessToken(accessToken);
      setRefreshToken("");
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    // Clear the session/token
    setAccessToken("");
    setRefreshToken("");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const handleExpiry = async () => {
    try {
      const response = await refreshToken();
      if (response === true) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      if (error.status === 401 && error.action === "logout") {
        logout();
      }
    }
    setLoading(false);
  };

  const isTokenValid = (token) => {
    try {
      const decoded = jwtDecode(token);
      const expirationTimeInSeconds = decoded.exp * 1000;
      const now = new Date();
      const isValid = expirationTimeInSeconds >= now.getTime();
      return isValid;
    } catch (error) {
      return false;
    }
  };

  const isAccessTokenValid = () => {
    const token = getAccessToken();
    return isTokenValid(token);
  };

  return {
    isAuthenticated,
    loading,
    authorize,
    logout,
    handleExpiry,
    isTokenValid,
  };
};

export default useAuth;
