import React, { useEffect } from "react";
import classNames from "classnames";
import { GRAY_LIGHT } from "@constants/colors";
import { RIGHT } from "@constants/fonts";
import { FONT_AWESOME } from "@constants/icons";
import Button from "../Button";
import Icon from "../Icon";
import styles from "./modal.module.scss";
import { ModalProps } from "./types";

const Modal = ({
  children,
  isActive = false,
  width,
  height,
  onCancel,
}: ModalProps) => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    }
  }, [isActive]);

  const handleModalCancel = (event: any) => {
    document.body.style.overflowY = "scroll";
    onCancel();
  };

  return (
    <div
      className={classNames(styles.modalContainer, {
        [styles.isVisible]: isActive,
        [styles.isActive]: isActive,
      })}
      onClick={handleModalCancel}
    >
      <div
        className={styles.modalContent}
        onClick={(event: any) => {
          event.stopPropagation();
        }}
        style={{ width, height }}
      >
        <div className={styles.buttonContainer}>
          <Button
            className={styles.cancelButton}
            variant={GRAY_LIGHT}
            onClick={handleModalCancel}
            align={RIGHT}
          >
            <Icon size="1x" iconId={"FaTimes"} iconDesign={FONT_AWESOME} />
          </Button>
        </div>
        <div className={styles.modalChildren}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
