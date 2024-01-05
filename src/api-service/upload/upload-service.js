import { axiosService } from "../axios-instance";
import { api } from "../config";

const uploadPhoto = async (props = {}) => {
  const { payload, options } = props;
  const response = await axiosService.multipart({
    endpoint: api.upload.s3,
    payload,
    options,
  });
  return response;
};

export { uploadPhoto };
