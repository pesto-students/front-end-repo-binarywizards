import { axiosService } from "../axios-instance";
import { api } from "../config";

const rephrase = async (payload) => {
  const response = await axiosService.post(api.openai.rephrase, payload);
  return response;
};

export { rephrase };
