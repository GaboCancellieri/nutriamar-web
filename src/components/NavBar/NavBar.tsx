import Button from "../Button";
import Logo from "../Logo";
import style from "./navBar.module.scss";

const NavBar = () => {
  return (
    <>
      <div className={style.navBarContainer}>
        <Logo height="51px" width="111px" />
        <Button variant="blank" text="Sobre Mi" />
        <Button variant="blank" text="Metodología" />
        <Button size="fit" variant="blank" text="Plan Nutricional" />
        <Button variant="blank" text="Pacientes" />
        <Button variant="blank" text="Testimonio" />
        <Button variant="blank" text="Contacto" />
      </div>
    </>
  );
};

export default NavBar;
