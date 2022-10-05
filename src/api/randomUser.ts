import axios, { AxiosResponse } from "axios";

export const getRandomUser = () => {
  return axios
    .get("https://randomuser.me/api/")
    .then((response: AxiosResponse<any, any>) => response.data);
};
