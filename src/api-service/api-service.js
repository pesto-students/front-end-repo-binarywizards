import { axiosService } from "./axios-instance";
import { api } from "./config";

const login = async (credentials) => {
  const response = await axiosService.post(api.auth.login, credentials);
  return response;
};

const signUp = async (userData) => {
  const response = await axiosService.post(api.auth.signUp, userData);
  return response;
};
const user = async (params) => {
  const response = await axiosService.get(api.user.profile, params);
  return response;
};

const apiService = {
  login,
  signUp,
  user,
};

export { apiService };
