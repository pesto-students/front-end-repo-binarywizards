import { axiosService } from "../axios-instance";
import { api } from "../config";

const getTemplate = async (props = {}) => {
  const { params, options } = props;
  const response = await axiosService.get({
    endpoint: api.templates.get,
    params,
    options,
  });
  return response;
};
const getAllTemplates = async (props = {}) => {
  const { options } = props;
  const response = await axiosService.get({
    endpoint: api.templates.getAll,
    options,
  });
  return response;
};

export { getTemplate, getAllTemplates };
