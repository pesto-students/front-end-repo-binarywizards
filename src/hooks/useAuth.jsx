import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { apiService } from "src/api-service/api-service";
import { refreshToken } from "src/api-service/axios-instance";
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from "src/utils/auth";
import { useDispatch } from "react-redux";
import { setUserInfo } from "src/store/userSlice";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      setUserData(null);
      handleExpiry();
    }
    if (isValid) {
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (userData) {
      dispatch(setUserInfo({ user: userData }));
    } else {
      dispatch(setUserInfo({ user: {} }));
    }
  }, [userData]);

  const authorize = async (credentials) => {
    // Perform the login logic, probably an API call
    // If successful, set the token in localStorage and update state
    const response = await apiService.login(credentials);
    if (response && response.status) {
      const { accessToken } = response.data;
      setAccessToken(accessToken);
      setRefreshToken("");
      setIsAuthenticated(true);
      setUserData(response.data.userData);
      return true;
    }
    toast.error(response.msg, {
      position: toast.POSITION.TOP_CENTER,
    });

    return false;
  };

  const signUp = async (userData) => {
    const response = await apiService.signUp(userData);
    if (response && response.status) {
      const { accessToken } = response.data;
      setAccessToken(accessToken);
      setRefreshToken("");
      setIsAuthenticated(true);
      setUserData(response.data.userData);
      return true;
    }
    toast.error(response.msg, {
      position: toast.POSITION.TOP_CENTER,
    });

    return false;
  };

  const logout = () => {
    // Clear the session/token
    setAccessToken("");
    setRefreshToken("");
    setIsAuthenticated(false);
    setUserData(null);
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
    userData,
    loading,
    authorize,
    logout,
    handleExpiry,
    isTokenValid,
    signUp,
  };
};

export default useAuth;
