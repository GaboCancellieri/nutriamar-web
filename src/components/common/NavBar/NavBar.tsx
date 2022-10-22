import React, { useState } from "react";
import { Button, LoginModal, Logo, Typography } from "@ccomponents";
import style from "./navBar.module.scss";
import { NavBarProps } from "./types";
import { Link } from "react-router-dom";
import { MB_1, ML_1, ML_2, MR_1, MR_6 } from "@constants/margins";
import classNames from "classnames";
import { NAV_MENU } from "./constants";
import { BOLD, RIGHT, UPPERCASE } from "@constants/fonts";
import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_HOVER,
  COLOR_SECONDARY_HOVER,
} from "@constants/colors";
import UserNavMenu from "./UserNavMenu/UserNavMenu";
import connect from "src/context/Store/connect";
import { ComponentPropsType } from "src/context/Store/connect/types";
import { UserStateContext } from "src/context/UserContext/UserContext";
import { IUser } from "src/context/UserContext/types";

const NavBar = ({ refs, userLoggedIn }: NavBarProps) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleScroll = (ref: { offsetTop: number }) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCancelLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <div className={style.navBarContainer}>
        <div className={style.navBarContent}>
          <Link
            to="/"
            onClick={() => {
              handleScroll(refs[0].current);
            }}
          >
            <Logo
              className={classNames(MR_6, ML_2)}
              height="55px"
              width="111px"
              variant={"alternative"}
            />
          </Link>
          {NAV_MENU.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.linkTo}
                onClick={() => {
                  handleScroll(refs[index + 1].current);
                }}
                style={{ textDecoration: "none" }}
              >
                <Button variant="blank" size="fit">
                  <Typography
                    className={style.menuTextButton}
                    color={COLOR_PRIMARY_HOVER}
                    variant={BOLD}
                  >
                    {item.name}
                  </Typography>
                </Button>
              </Link>
            );
          })}
          <div style={{ alignSelf: "center" }}>
            {!userLoggedIn ? (
              <Button
                variant="white"
                size="fit"
                align={RIGHT}
                onClick={handleShowLoginModal}
              >
                <Typography
                  textTransform={UPPERCASE}
                  className={classNames(MR_1, ML_1)}
                  color={COLOR_PRIMARY}
                  variant={BOLD}
                >
                  Login
                </Typography>
              </Button>
            ) : (
              <UserNavMenu></UserNavMenu>
            )}
          </div>
        </div>
      </div>
      {
        <LoginModal
          onCancel={handleCancelLoginModal}
          isActive={showLoginModal}
        />
      }
    </>
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

const mergeProps = (
  stateProps: ComponentPropsType,
  dispatchProps: ComponentPropsType,
  ownProps: ComponentPropsType
) => {
  const { currentUser } = stateProps;
  const userLoggedIn = currentUser ? true : false;
  return {
    userLoggedIn,
    ...ownProps,
    ...dispatchProps,
  };
};

export default connect({ mapStateToProps, mergeProps })(NavBar);
