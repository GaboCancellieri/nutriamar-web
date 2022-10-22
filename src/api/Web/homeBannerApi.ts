import axios from "axios";
import { IHomeBannerInfo } from "src/components/layout/HomeBanner/context/types";

const configHeaders = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
    "Content-Type": "application/json",
  },
};

export const getHomeBannerInfo = async () => {
  return await axios.get("http://localhost:3001/api/web/homeBanner");
};

export const updateHomeBannerInfo = async (
  id: string,
  payload: IHomeBannerInfo
) => {
  return await axios.patch(
    `http://localhost:3001/api/web/homeBanner/${id}`,
    { payload },
    configHeaders
  );
};
