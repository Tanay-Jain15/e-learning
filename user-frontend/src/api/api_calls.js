import { getApiWithoutToken } from "./api-interfaces";

export const getData = () => {
  return getApiWithoutToken("/");
};
