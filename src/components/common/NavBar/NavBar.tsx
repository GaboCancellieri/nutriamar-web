import React from "react";
import { Button, Logo, Typography } from "@ccomponents";
import style from "./navBar.module.scss";
import { NavBarProps } from "./types";
import { Link } from "react-router-dom";
import { ML_2, MR_6 } from "@constants/margins";
import classNames from "classnames";

const NavBar = ({ refs }: NavBarProps) => {
  const handleScroll = (ref: { offsetTop: number }) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={style.navBarContainer}>
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
        <Link
          to="/#about-me"
          onClick={() => {
            handleScroll(refs[1].current);
          }}
        >
          <Button variant="blank">
            <Typography>Sobre Mi</Typography>
          </Button>
        </Link>
        <Button variant="blank">
          <Typography>Metodología</Typography>
        </Button>
        <Button size="fit" variant="blank">
          <Typography>Plan Nutricional</Typography>
        </Button>
        <Button variant="blank">
          <Typography>Pacientes</Typography>
        </Button>
        <Button variant="blank">
          <Typography>Testimonio</Typography>
        </Button>
        <Button variant="blank">
          <Typography>Contacto</Typography>
        </Button>
      </div>
    </>
  );
};

export default NavBar;
