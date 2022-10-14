import { ReactNode } from "react";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
}

export interface IUserState {
  currentUser: IUser;
  accessToken: string;
  refreshToken: string;
  geoCountryCode: string;
}

export interface UserProviderProps {
  children: ReactNode;
}
