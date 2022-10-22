import React from "react";
import { Button, Icon, Typography } from "@ccomponents";
import { FULL } from "@constants/buttons";
import { BLACK } from "@constants/colors";
import { UserMenuElementProps } from "./types";
import styles from "./userNavMenu.module.scss";
import { ML_05 } from "@constants/margins";
import classNames from "classnames";
import connect from "src/context/Store/connect";
import { ScreenStateContext } from "src/context/ScreenContext/ScreenContext";

const UserMenuElement = ({
  element,
  isEditMode,
  onClick,
}: UserMenuElementProps) => {
  return (
    <div className={styles.userMenuElementContainer}>
      <Button
        className={styles.menuElementButton}
        variant="blank"
        size={FULL}
        onClick={onClick}
      >
        <Icon
          iconId={element.iconId}
          iconDesign={element.iconDesign}
          size="1x"
          color={BLACK}
        ></Icon>
        <Typography className={classNames(styles.menuElementName, ML_05)}>
          {`${isEditMode && element.name.includes("Edición") ? "Salir" : ""} ${
            element.name
          }`}
        </Typography>
      </Button>
    </div>
  );
};

const mapStateToProps: any = [
  {
    context: ScreenStateContext,
    mapStateToProps: ({ isEditMode }: { isEditMode: boolean }) => ({
      isEditMode,
    }),
  },
];

export default connect({ mapStateToProps })(UserMenuElement);
