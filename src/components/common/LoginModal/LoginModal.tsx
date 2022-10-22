import React, { useReducer } from "react";
import { Button, Input, Logo, Modal, Typography } from "@ccomponents";
import styles from "./loginModal.module.scss";
import { LoginModalProps } from "./types";
import { BOLD, CENTER, UPPERCASE } from "@constants/fonts";
import { MT_1, MT_2 } from "@constants/margins";
import { COLOR_PRIMARY, SECONDARY_LIGHT } from "@constants/colors";
import { FIT } from "@constants/buttons";
import { INPUT_TYPE_PASSWORD } from "@constants/inputs";
import { login } from "@systemApi/authApi";
import { loginInitialState, loginReducer } from "./context/reducer";
import {
  setLoginEmail,
  setLoginIsError,
  setLoginIsSubmitted,
  setLoginPassword,
} from "./context/actions";
import connect from "src/context/Store/connect";
import { UserDispatchContext } from "src/context/UserContext/UserContext";
import { logInUser } from "src/context/UserContext/actions";
import { getUserAccessToken } from "src/utils/user";

const LoginModal = ({
  onCancel,
  isActive = false,
  userDispatcher,
}: LoginModalProps) => {
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    loginInitialState
  );

  const handleEmailChange = (event: any) => {
    loginDispatch(setLoginEmail(event.target.value));
  };

  const handlePasswordChange = (event: any) => {
    loginDispatch(setLoginPassword(event.target.value));
  };

  const handleLogin = async () => {
    try {
      loginDispatch(setLoginIsSubmitted(true));
      const result = await login({
        email: loginState.email,
        password: loginState.password,
      });
      const user = getUserAccessToken(result.data.accessToken);
      if (user) {
        userDispatcher(
          logInUser(user, result.data.accessToken, result.data.refreshToken)
        );
        localStorage.setItem("accessToken", result.data.accessToken);
        localStorage.setItem("refreshToken", result.data.refreshToken);
        () => onCancel;
      }
    } catch (error: any) {
      if (error.response.status > 200) loginDispatch(setLoginIsError(true));
    }
  };

  return (
    <Modal
      onCancel={onCancel}
      isActive={isActive}
      width={"300px"}
      height={"380px"}
    >
      <div className={styles.content}>
        <Logo variant="normal" height={"100px"} width={"200px"} />
        <Input
          className={MT_2}
          placeholder="email"
          onChange={handleEmailChange}
          state={
            loginState.isError && loginState.isSubmitted ? "error" : "normal"
          }
        ></Input>
        <Input
          className={MT_1}
          placeholder="contraseña"
          type={INPUT_TYPE_PASSWORD}
          onChange={handlePasswordChange}
          state={
            loginState.isError && loginState.isSubmitted ? "error" : "normal"
          }
        ></Input>
        <Button
          className={styles.loginButton}
          variant={SECONDARY_LIGHT}
          size={FIT}
          onClick={handleLogin}
          disabled={!loginState.email || !loginState.password}
        >
          <Typography
            color={COLOR_PRIMARY}
            variant={BOLD}
            textTransform={UPPERCASE}
            align={CENTER}
          >
            Iniciar Sesion
          </Typography>
        </Button>
      </div>
    </Modal>
  );
};

const mapDispatchToProps: any = {
  userDispatcher: UserDispatchContext,
};

export default connect({ mapDispatchToProps })(LoginModal);
