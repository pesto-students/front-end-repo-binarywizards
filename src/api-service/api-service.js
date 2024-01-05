import { axiosService } from "./axios-instance";
import { api } from "./config";

const login = async (props = {}) => {
  const { payload, options } = props;
  const response = await axiosService.post({
    endpoint: api.auth.login,
    payload,
    options,
  });
  return response;
};

const signUp = async (props = {}) => {
  const { payload, options } = props;
  const response = await axiosService.post({
    endpoint: api.auth.signUp,
    payload,
    options,
  });
  return response;
};
const logout = async (props = {}) => {
  const { options } = props;
  const response = await axiosService.post({
    endpoint: api.auth.logout,
    options,
  });
  return response;
};
const forgotPassword = async (props = {}) => {
  const { payload, options } = props;
  const response = await axiosService.post({
    endpoint: api.auth.forgotPassword,
    payload,
    options,
  });
  return response;
};
const resetPassword = async (props = {}) => {
  const { payload, params, options } = props;
  const response = await axiosService.post({
    endpoint: api.auth.resetPassword,
    payload,
    params,
    options,
  });
  return response;
};

const user = async (props = {}) => {
  const { params, options } = props;
  const response = await axiosService.get({
    endpoint: api.user.profile,
    params,
    options,
  });
  return response;
};

const apiService = {
  login,
  logout,
  signUp,
  forgotPassword,
  resetPassword,
  user,
};

export { apiService };
