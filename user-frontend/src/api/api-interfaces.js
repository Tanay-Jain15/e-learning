import axios from "axios";
import { base_url } from "../utils/baseurl";

export const getApiWithoutToken = (path) => {
  return axios.get(base_url + path, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
