import Axios from "axios";
import { http_BackEnd } from "../../Apollo/apolloSetting/BackendWay";

export default async (files: FileList | null) => {
  const formData = new FormData();
  if (files) {
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }
  }
  const {
    data: { fileNames },
  } = await Axios.post(http_BackEnd.toString() + "/api/upload", formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return fileNames;
};
