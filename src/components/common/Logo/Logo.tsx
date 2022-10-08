import React from "react";
import { LogoProps } from "./types";

const Logo = ({ className, height, width, variant = "primary" }: LogoProps) => {
  return (
    <img
      className={className}
      src="./public/img/logos/Logo-Normal.png"
      alt=""
      style={{ width, height }}
    />
  );
};

export default Logo;
