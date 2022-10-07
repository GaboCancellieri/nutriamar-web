import React from "react";
import { Button, Logo, Typography } from "@ccomponents";
import style from "./navBar.module.scss";

const NavBar = () => {
  return (
    <>
      <div className={style.navBarContainer}>
        <Logo height="55px" width="111px" />
        <Button variant="blank">
          <Typography>Sobre Mi</Typography>
        </Button>
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
