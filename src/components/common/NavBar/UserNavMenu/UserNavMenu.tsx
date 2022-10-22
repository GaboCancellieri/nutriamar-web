import React, { useState } from "react";
import { Button, Divider, Icon, Typography } from "@ccomponents";
import { FIT } from "@constants/buttons";
import { BOLD, RIGHT } from "@constants/fonts";
import { FONT_AWESOME } from "@constants/icons";
import styles from "./userNavMenu.module.scss";
import { ScreenDispatchContext } from "src/context/ScreenContext/ScreenContext";
import {
  UserDispatchContext,
  UserStateContext,
} from "src/context/UserContext/UserContext";
import connect from "src/context/Store/connect";
import { UserNavMenuProps } from "./types";
import { logOutUser } from "src/context/UserContext/actions";
import { toggleEditMode } from "src/context/ScreenContext/actions";
import { IUser } from "src/context/UserContext/types";
import { USER_MENU_ELEMENTS } from "./constants";
import UserMenuElement from "./UserMenuElement";
import { COLOR_PRIMARY_HOVER, GRAY_EXTRA_LIGHT } from "@constants/colors";

const UserNavMenu = ({
  screenDispatcher,
  userDispatcher,
  currentUser,
}: UserNavMenuProps) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const toggleDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
  };
  const toggleScreenEdit = () => {
    toggleDisplayMenu();
    screenDispatcher(toggleEditMode());
  };
  const handleLogOut = () => {
    userDispatcher(logOutUser());
  };
  return (
    <div className={styles.userNavMenuContainer}>
      <Button
        align={RIGHT}
        variant="primary"
        size={FIT}
        onClick={toggleDisplayMenu}
      >
        <Icon iconId="FaUserCircle" iconDesign={FONT_AWESOME} size="2x"></Icon>
      </Button>
      {displayMenu && (
        <div className={styles.userMenuContainer}>
          <Typography
            size={16}
            variant={BOLD}
            color={COLOR_PRIMARY_HOVER}
          >{`${currentUser.firstName} ${currentUser.lastName}`}</Typography>
          {USER_MENU_ELEMENTS.map((element, index) => {
            return (
              <div key={index}>
                <UserMenuElement
                  element={element}
                  onClick={[toggleScreenEdit, handleLogOut][index]}
                />
                {index !== USER_MENU_ELEMENTS.length - 1 && (
                  <Divider width="1px" color={GRAY_EXTRA_LIGHT}></Divider>
                )}
              </div>
            );
          })}
        </div>
      )}
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
];

const mapDispatchToProps: any = {
  screenDispatcher: ScreenDispatchContext,
  userDispatcher: UserDispatchContext,
};

export default connect({ mapStateToProps, mapDispatchToProps })(UserNavMenu);
