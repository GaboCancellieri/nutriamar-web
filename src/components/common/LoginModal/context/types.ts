export interface LoginState {
  email: string | null;
  password: string | null;
  isSubmitted: boolean;
  isError: boolean;
}

export interface IReducerOptions {
  action: string;
  payload: any;
}
