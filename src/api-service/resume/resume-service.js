import { axiosService } from "../axios-instance";
import { api } from "../config";

const createResume = async (payload) => {
  const response = await axiosService.multipart(api.resume.create, payload);
  return response;
};
const updateResume = async (id, payload) => {
  const response = await axiosService.multipartPut(
    api.resume.update,
    payload,
    id,
  );
  return response;
};
const getResume = async (id) => {
  const response = await axiosService.get(api.resume.get, id);
  return response;
};

const getAllResumes = async () => {
  const response = await axiosService.get(api.resume.getAll);
  return response;
};

const generatePdf = async ({ data, id }) => {
  const response = await axiosService.getPDF(api.resume.generatePdf, data, id);
  return response;
};

export { createResume, updateResume, getResume, getAllResumes, generatePdf };
