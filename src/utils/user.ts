import jwt_decode from "jwt-decode";
import { IUser } from "src/context/UserContext/types";

export const getUserAccessToken = (
  accessToken: string | null
): IUser | null => {
  return !accessToken ? null : jwt_decode(accessToken);
};
