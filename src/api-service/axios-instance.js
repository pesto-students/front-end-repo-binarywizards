import { default as axios } from "axios";
// const api = "https://perfectresume-ai.onrender.com";
// const dev = "http://localhost:5500";
const backend = "http://localhost:3000";

const instance = axios.create({
  baseURL: backend,
  withCredentials: true,
  timeout: 1000,
});

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

export { axiosService };
