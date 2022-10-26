import { Button, Icon, Modal, Typography } from "@ccomponents";
import { COLOR_WHITE } from "@constants/colors";
import { BOLD } from "@constants/fonts";
import { MT_2, MT_3 } from "@constants/margins";
import classNames from "classnames";
import React from "react";
import { closeAlert } from "src/context/AlertContext/actions";
import {
  AlertDispatchContext,
  AlertStateContext,
} from "src/context/AlertContext/AlertContext";
import { IAlert } from "src/context/AlertContext/types";
import connect from "src/context/Store/connect";
import { restorePageOverflowY } from "src/utils/modal";
import styles from "./alert.module.scss";
import { AlertProps } from "./types";

const Alert = ({ alert, dispatch }: AlertProps) => {
  const handleClose = () => {
    restorePageOverflowY();
    dispatch(closeAlert());
  };
  if (!alert) {
    return <></>;
  }
  console.log(alert);
  return (
    <>
      {alert.type === "urgent" ? (
        <Modal
          onCancel={handleClose}
          width={"500px"}
          height={"400px"}
          isActive={Boolean(alert)}
        >
          <div className={classNames(styles.urgentContainer)}>
            {alert.variant.icon && (
              <Icon
                size={alert.variant.icon.size}
                iconId={alert.variant.icon.id}
                iconDesign={alert.variant.icon.design}
                color={alert.variant.icon.color}
              />
            )}
            {alert.variant.title && (
              <Typography
                className={MT_3}
                size={alert.variant.title.size}
                color={alert.variant.title.color}
                variant={BOLD}
              >
                {alert.variant.title.text}
              </Typography>
            )}
            {alert.variant.description && (
              <Typography
                className={MT_2}
                size={alert.variant.description.size}
                color={alert.variant.description.color}
              >
                {alert.message}
              </Typography>
            )}
            <Button
              className={styles.confirmButton}
              variant="secondary"
              onClick={handleClose}
            >
              <Typography size={16} variant={BOLD} color={COLOR_WHITE}>
                OK!
              </Typography>
            </Button>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

const mapStateToProps: any = [
  {
    context: AlertStateContext,
    mapStateToProps: ({ currentAlert }: { currentAlert: IAlert }) => ({
      alert: currentAlert,
    }),
  },
];

const mapDispatchToProps: any = {
  dispatch: AlertDispatchContext,
};

export default connect({ mapStateToProps, mapDispatchToProps })(Alert);
