import axios from "axios";

export const getHomeBannerInfo = async () => {
  return await axios.get("http://localhost:3001/api/web/homeBanner");
};
