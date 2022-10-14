import jwt_decode from "jwt-decode";

export const getUserAccessToken = (accessToken: string) => {
  return jwt_decode(accessToken);
};
