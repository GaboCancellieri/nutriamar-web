import Button from "../Button";
import Logo from "../Logo";
import style from "./navBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={style.navBarContainer}>
        <Logo />
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
