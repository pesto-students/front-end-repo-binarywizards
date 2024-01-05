import { axiosService } from "../axios-instance";
import { api } from "../config";

const rephrase = async (props = {}) => {
  const { payload, options } = props;
  const response = await axiosService.post({
    endpoint: api.openai.rephrase,
    payload,
    options,
  });
  return response;
};

export { rephrase };
