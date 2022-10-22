import React, { useState } from "react";
import { EditWrapperProps } from "./types";
import styles from "./editWrapper.module.scss";
import { UserStateContext } from "src/context/UserContext/UserContext";
import connect from "src/context/Store/connect";
import { ComponentPropsType } from "src/context/Store/connect/types";
import { IUser } from "src/context/UserContext/types";
import { Button, Icon, Typography } from "@ccomponents";
import { LEFT } from "@constants/fonts";
import { FONT_AWESOME, GAME_ICONS } from "@constants/icons";
import { COLOR_WHITE, WHITE } from "@constants/colors";
import { FIT } from "@constants/buttons";
import { ML_05, ML_1 } from "@constants/margins";
import { ScreenStateContext } from "src/context/ScreenContext/ScreenContext";
import classNames from "classnames";

const EditWrapper = ({
  className = "",
  children,
  showEditWrapper,
  onEditSection,
  onCancel,
  onSave,
}: EditWrapperProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditSection = () => {
    setIsEditing(true);
    onEditSection();
  };
  const handleCancel = () => {
    setIsEditing(false);
    onCancel();
  };
  const handleSave = () => {
    setIsEditing(false);
    onSave();
  };

  if (!showEditWrapper) {
    return <>{children}</>;
  }
  return (
    <div className={classNames(styles.editWrapperContainer, className)}>
      <div className={styles.mainButtonWrapper}>
        {!isEditing ? (
          <Button align={LEFT} size={FIT} onClick={handleEditSection}>
            <Icon
              iconId="GiPencilRuler"
              iconDesign={GAME_ICONS}
              color={WHITE}
              size="2x"
            ></Icon>
            <Typography className={ML_05} size={16} color={COLOR_WHITE}>
              Editar Sección
            </Typography>
          </Button>
        ) : (
          <>
            <Button
              align={LEFT}
              variant="success"
              size={FIT}
              onClick={handleSave}
            >
              <Icon
                iconId="FaCheck"
                iconDesign={FONT_AWESOME}
                color={WHITE}
                size="2x"
              ></Icon>
              <Typography className={ML_05} size={16} color={COLOR_WHITE}>
                Guardar
              </Typography>
            </Button>
            <Button
              className={ML_1}
              align={LEFT}
              variant="danger"
              size={FIT}
              onClick={handleCancel}
            >
              <Icon
                iconId="FaTimes"
                iconDesign={FONT_AWESOME}
                color={WHITE}
                size="2x"
              ></Icon>
              <Typography className={ML_05} size={16} color={COLOR_WHITE}>
                Cancelar
              </Typography>
            </Button>
          </>
        )}
      </div>
      <div className={styles.editContentWrapper}>{children}</div>
    </div>
  );
};

const mapStateToProps: any = [
  {
    context: UserStateContext,
    mapStateToProps: ({ currentUser }: { currentUser: IUser }) => ({
      currentUser,
    }),
  },
  {
    context: ScreenStateContext,
    mapStateToProps: ({ isEditMode }: { isEditMode: boolean }) => ({
      isEditMode,
    }),
  },
];

const mergeProps = (
  stateProps: ComponentPropsType,
  dispatchProps: ComponentPropsType,
  ownProps: ComponentPropsType
) => {
  const { currentUser, isEditMode } = stateProps;
  const showEditWrapper = isEditMode && currentUser && currentUser.isAdmin;

  return {
    showEditWrapper,
    ...ownProps,
    ...dispatchProps,
  };
};

export default connect({ mapStateToProps, mergeProps })(EditWrapper);
