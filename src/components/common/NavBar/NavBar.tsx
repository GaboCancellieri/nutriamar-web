import React, { useState } from "react";
import { Button, LoginModal, Logo, Modal, Typography } from "@ccomponents";
import style from "./navBar.module.scss";
import { NavBarProps } from "./types";
import { Link } from "react-router-dom";
import { ML_2, MR_6 } from "@constants/margins";
import classNames from "classnames";
import { NAV_MENU } from "./constants";
import { BOLD, RIGHT, UPPERCASE } from "@constants/fonts";
import { COLOR_PRIMARY, COLOR_WHITE } from "@constants/colors";

const NavBar = ({ refs }: NavBarProps) => {
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
        <>
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
              >
                <Button variant="blank" size="fit">
                  <Typography>{item.name}</Typography>
                </Button>
              </Link>
            );
          })}
          <div style={{ alignSelf: "center" }}>
            <Button
              variant="secondaryLight"
              size="fit"
              align={RIGHT}
              onClick={handleShowLoginModal}
            >
              <Typography
                textTransform={UPPERCASE}
                color={COLOR_PRIMARY}
                variant={BOLD}
              >
                Login
              </Typography>
            </Button>
          </div>
        </>
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

export default NavBar;
