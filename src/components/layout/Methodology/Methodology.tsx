import { Typography } from "@ccomponents";
import React, { LegacyRef } from "react";
import { METHODOLOGY_TITLE } from "./constants";

const Methodology = React.forwardRef(({}, ref) => {
  return (
    <div ref={ref as LegacyRef<HTMLDivElement> | undefined}>
      <Typography size={24}>{METHODOLOGY_TITLE}</Typography>
    </div>
  );
});

export default Methodology;
