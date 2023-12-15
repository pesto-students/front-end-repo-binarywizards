import { default as axios } from "axios";
import {
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "src/utils/auth";
// const api = "https://perfectresume-ai.onrender.com";
// const dev = "http://localhost:5500";
const backend = "http://localhost:3000";

const instance = axios.create({
  baseURL: backend,
  withCredentials: true,
  timeout: 1000,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        refreshToken();
        return axios(originalRequest);
      } catch (error) {
        console.log(error);
        return Promise.reject({ status: 401, action: "logout" });
      }
    }
    return Promise.reject(error);
  },
);

const refreshToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    const response = await axios.post("/api/refresh-token", {
      refreshToken,
    });
    const { accessToken } = response.data;
    setAccessToken(accessToken);
    setRefreshToken("");
    return true;
  } catch (error) {
    return Promise.reject({ status: 401, action: "logout" });
  }
};

const successCodes = [200, 201, 202, 203, 204, 205];

const axiosService = {
  post: async (endpoint, payload) => {
    const response = await instance.post(endpoint, payload);

    if (!successCodes.includes(response.status)) {
      return { status: false, msg: response.message };
    }
    return { status: true, data: response.data };
  },
  get: async (endpoint, params) => {
    console.log("endpoint: ", endpoint);
    console.log("params: ", params);
    const response = await instance.get(endpoint);
    if (response.status !== 200) {
      return { status: false, msg: response.message };
    }
    return { status: true, data: response.data };
  },
};

export { axiosService, refreshToken };
