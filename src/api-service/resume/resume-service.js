import { axiosService } from "../axios-instance";
import { api } from "../config";

const createResume = async (payload) => {
  const response = await axiosService.post(api.resume.create, payload);
  return response;
};
const updateResume = async (id, payload) => {
  const response = await axiosService.put(api.resume.create, payload, id);
  return response;
};
const getResume = async (id) => {
  const response = await axiosService.get(api.resume.get, id);
  return response;
};

const getAllResumes = async () => {
  const response = await axiosService.get(api.resume.get);
  return response;
};

export { createResume, updateResume, getResume, getAllResumes };
