export const USER_TYPE_ADMIN = "ADMIN";
export const USER_TYPE_NORMAL = "USER";
export const USER_TYPE_REGISTERED = "REGISTERED";

export type UserAdminType =
  | "ADMIN"
  | "USER"
  | "REGISTERED"
  | "PROVISIONAL_TOKEN";

const userTypes = { USER_TYPE_ADMIN, USER_TYPE_NORMAL, USER_TYPE_REGISTERED };
export default userTypes;
