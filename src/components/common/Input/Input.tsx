import {
  INPUT_STATE_ERROR,
  INPUT_STATE_NORMAL,
  INPUT_STATE_SUCCESS,
  INPUT_TYPE_TEXT,
} from "@constants/inputs";
import classNames from "classnames";
import React from "react";
import styles from "./input.module.scss";
import { InputProps } from "./types";

const Input = ({
  className = "",
  placeholder = "",
  type = INPUT_TYPE_TEXT,
  state = INPUT_STATE_NORMAL,
  onChange = () => {},
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={classNames(styles.inputBox, className, {
          [styles.onError]: state === INPUT_STATE_ERROR,
          [styles.onSuccess]: state === INPUT_STATE_SUCCESS,
        })}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
