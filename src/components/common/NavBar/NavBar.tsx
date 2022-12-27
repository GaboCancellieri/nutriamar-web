import React, { useState } from "react";
import { Button, Icon, LoginModal, Logo, Typography } from "@ccomponents";
import style from "./navBar.module.scss";
import { NavBarProps } from "./types";
import { Link } from "react-router-dom";
import { ML_05, ML_1, ML_2, MR_1, MR_6 } from "@constants/margins";
import classNames from "classnames";
import { NAV_MENU } from "./constants";
import { BOLD, RIGHT, UPPERCASE } from "@constants/fonts";
import { COLOR_PRIMARY, COLOR_PRIMARY_HOVER, PRIMARY } from "@constants/colors";
import UserNavMenu from "./UserNavMenu/UserNavMenu";
import connect from "src/context/Store/connect";
import { ComponentPropsType } from "src/context/Store/connect/types";
import { UserStateContext } from "src/context/UserContext/UserContext";
import { IUser } from "src/context/UserContext/types";
import { WindowSizeStateContext } from "src/context/WindowSizeProvider/WindowSizeProvider";
import { IWindowSizeState } from "src/context/WindowSizeProvider/types";
import { FONT_AWESOME } from "@constants/icons";
import { FULL } from "@constants/buttons";

const NavBar = ({ refs, userLoggedIn, isMobileOrTablet }: NavBarProps) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleScroll = (ref: { offsetTop: number }) => {
    window.scrollTo({
      top: ref.offsetTop - 70,
      left: 0,
      behavior: "smooth",
    });
    if (showMobileMenu) {
      toggleMobileMenu();
    }
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCancelLoginModal = () => {
    setShowLoginModal(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  if (isMobileOrTablet) {
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
              <Logo height="55px" width="111px" variant={"alternative"} />
            </Link>
            <div style={{ cursor: "pointer" }} onClick={toggleMobileMenu}>
              <Icon
                iconId={!showMobileMenu ? "FaHamburger" : "FaTimes"}
                iconDesign={FONT_AWESOME}
                color={PRIMARY}
              />
            </div>
            {showMobileMenu && (
              <div className={style.mobileMenuContainer}>
                {NAV_MENU.map((navItem, index) => {
                  return (
                    <div
                      key={index}
                      className={style.mobileMenuElementContainer}
                      onClick={() => {
                        handleScroll(refs[index + 1]?.current);
                      }}
                    >
                      <Button variant="blank" size={FULL}>
                        <Typography
                          className={classNames(style.mobileElementName, ML_05)}
                          size={16}
                          color={PRIMARY}
                        >
                          {navItem.name}
                        </Typography>
                      </Button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

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
                  handleScroll(refs[index + 1]?.current);
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
    context: WindowSizeStateContext,
    mapStateToProps: ({ isMobileOrTablet }: IWindowSizeState) => ({
      isMobileOrTablet,
    }),
  },
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
  const { currentUser, isMobileOrTablet } = stateProps;
  const userLoggedIn = currentUser ? true : false;
  return {
    isMobileOrTablet,
    userLoggedIn,
    ...ownProps,
    ...dispatchProps,
  };
};

export default connect({ mapStateToProps, mergeProps })(NavBar);
