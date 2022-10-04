import { typographyVariant } from "./constants";
import { TypographyProps } from "./types";

const Typography = ({
  align = "center",
  color = "#000000",
  children,
  fontFamily = "lato",
  size = 14,
  variant = "regular",
}: TypographyProps) => {
  return (
    <div
      style={{
        color,
        fontSize: size,
        fontFamily: typographyVariant[fontFamily][variant],
        textAlign: align,
      }}
    >
      {children}
    </div>
  );
};

export default Typography;
