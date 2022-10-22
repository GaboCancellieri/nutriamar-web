import { Button, Icon, Typography } from "@ccomponents";
import { COLOR_WHITE } from "@constants/colors";
import { BOLD } from "@constants/fonts";
import { MT_2, MT_3, MT_4 } from "@constants/margins";
import classNames from "classnames";
import React from "react";
import connect from "src/context/Store/connect";
import styles from "./alert.module.scss";
import { ALERT_VARIANTS } from "./constants";
import { AlertProps, AlertVariant } from "./types";

const Alert = ({ type, variant }: AlertProps) => {
  const alert: AlertVariant = ALERT_VARIANTS[variant];
  return (
    <div className={classNames(styles[`${type}Container`], styles.alert)}>
      {alert.icon && (
        <Icon
          size={alert.icon.size}
          iconId={alert.icon.id}
          iconDesign={alert.icon.design}
          color={alert.icon.color}
        />
      )}
      {alert.title && (
        <Typography
          className={MT_3}
          size={alert.title.size}
          color={alert.title.color}
          variant={BOLD}
        >
          {alert.title.text}
        </Typography>
      )}
      {alert.description && (
        <Typography
          className={MT_2}
          size={alert.description.size}
          color={alert.description.color}
        >
          {alert.description.text}
        </Typography>
      )}
      <Button className={styles.confirmButton} variant="secondary">
        <Typography size={16} variant={BOLD} color={COLOR_WHITE}>
          OK!
        </Typography>
      </Button>
    </div>
  );
};

const mapStateToProps: any = [];

export default Alert;
