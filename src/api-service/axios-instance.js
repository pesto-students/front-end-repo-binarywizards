import { default as axios } from "axios";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "src/utils/auth";

const isProduction = import.meta.env.PROD;
const prod = "https://perfectresume-ai.onrender.com";
const dev = "http://localhost:3000";

const backend = isProduction ? prod : dev;

const instance = axios.create({
  baseURL: backend,
  withCredentials: true,
  timeout: 2000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        refreshToken();
        const accessToken = getAccessToken();
        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
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

// const successCodes = [200, 201, 202, 203, 204, 205];

const resolveError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    const response = error.response;
    return {
      status: false,
      msg: response.data.message,
      data: response.data,
    };
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
    return {
      status: false,
      msg: error.message || "Something went wrong!",
      data: {},
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
    return {
      status: false,
      msg: error.message || "Something went wrong!",
      data: {},
    };
  }
};

const axiosService = {
  post: async (endpoint, payload) => {
    return instance
      .post(endpoint, payload)
      .then(function (response) {
        console.log("Response: ", response);
        return { status: true, data: response.data };
      })
      .catch(function (error) {
        return resolveError(error);
      });
  },
  multipart: async (endpoint, formData) => {
    return instance
      .post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 1000 * 10,
      })
      .then(function (response) {
        console.log("Response: ", response);
        return { status: true, data: response.data };
      })
      .catch(function (error) {
        return resolveError(error);
      });
  },
  multipartPut: async (endpoint, formData, params) => {
    if (params) {
      endpoint = `${endpoint}/${params}`;
    }
    return instance
      .put(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 1000 * 10,
      })
      .then(function (response) {
        console.log("Response: ", response);
        return { status: true, data: response.data };
      })
      .catch(function (error) {
        return resolveError(error);
      });
  },
  put: async (endpoint, payload, params) => {
    if (params) {
      endpoint = `${endpoint}/${params}`;
    }
    return instance
      .put(endpoint, payload)
      .then(function (response) {
        return { status: true, data: response.data };
      })
      .catch(function (error) {
        return resolveError(error);
      });
  },
  get: async (endpoint, params) => {
    if (params) {
      endpoint = `${endpoint}/${params}`;
    }
    return instance
      .get(endpoint)
      .then(function (response) {
        return { status: true, data: response.data };
      })
      .catch(function (error) {
        return resolveError(error);
      });
  },
};

export { axiosService, refreshToken };
