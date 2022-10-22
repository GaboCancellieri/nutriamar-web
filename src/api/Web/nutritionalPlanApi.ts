import axios from "axios";
import { INutritionalPlanInfo } from "src/components/layout/NutritionalPlan/context/types";

const configHeaders = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
    "Content-Type": "application/json",
  },
};

export const getNutritionalPlanInfo = async () => {
  return await axios.get("http://localhost:3001/api/web/nutritionalPlan");
};

export const updateNutritionalPlanInfo = async (
  id: string,
  payload: INutritionalPlanInfo
) => {
  return await axios.patch(
    `http://localhost:3001/api/web/nutritionalPlan/${id}`,
    { payload },
    configHeaders
  );
};
