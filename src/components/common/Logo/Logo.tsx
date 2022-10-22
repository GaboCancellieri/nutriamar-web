import React from "react";
import { LogoProps } from "./types";

const Logo = ({ className, height, width, variant = "normal" }: LogoProps) => {
  return (
    <img
      className={className}
      src={`./public/img/logos/logo-${variant}.png`}
      alt={`Logo-${variant}`}
      style={{ width, height }}
    />
  );
};

export default Logo;
