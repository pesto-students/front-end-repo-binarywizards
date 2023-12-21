import { axiosService } from "./axios-instance";
import { api } from "./config";

const login = async (credentials) => {
  const response = await axiosService.post(api.auth.login, credentials);
  if (!response.status) {
    throw new Error(response.msg);
  }

  return response.data;
};

const signUp = async (userData) => {
  const response = await axiosService.post(api.auth.signUp, userData);
  if (!response.status) {
    throw new Error(response.msg);
  }
  console.log(response.data);
  console.log(response);
  return response.data;
};
const user = async (params) => {
  const response = await axiosService.get(api.user.profile, params);
  if (!response.status) {
    throw new Error(response.msg);
  }

  return response.data;
};
const template = async (params) => {
  const response = await axiosService.get(api.templates.get, params);
  if (!response.status) {
    throw new Error(response.msg);
  }

  return response.data;
};

const apiService = {
  login,
  signUp,
  user,
  template,
};

export { apiService };
