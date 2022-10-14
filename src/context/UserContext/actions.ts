import { IUser } from "./types";

export const LOG_IN_USER = "LOG_IN_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";
export const SET_USER_COUNTRY = "SET_USER_COUNTRY";

export const logInUser = (
  user: IUser,
  accessToken: string,
  refreshToken: string
) => ({ action: LOG_IN_USER, payload: { user, accessToken, refreshToken } });

export const logOutUser = () => ({ action: LOG_OUT_USER });

export const setUserCountry = (countryCode: string) => ({
  action: LOG_OUT_USER,
  payload: { countryCode },
});
