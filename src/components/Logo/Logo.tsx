import { LogoProps } from "./types";

const Logo = ({ height, width, variant = "primary" }: LogoProps) => {
  return (
    <img src="/img/logos/Logo-Normal.png" alt="" style={{ width, height }} />
  );
};

export default Logo;
