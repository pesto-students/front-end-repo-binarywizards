import { axiosService } from "../axios-instance";
import { api } from "../config";

const getTemplate = async (params) => {
  const response = await axiosService.get(api.templates.get, params);
  return response;
};

export { getTemplate };
