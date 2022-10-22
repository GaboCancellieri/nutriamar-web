import { MouseEventHandler } from "react";
import { IFRAME_BACKGROUND_VARIANTS } from "./constants";

export type IFrameBackgroundType = keyof typeof IFRAME_BACKGROUND_VARIANTS;

export interface IFrameProps {
  background?: IFrameBackgroundType;
  url: string;
  enableEdit?: boolean;
  onEdit?: MouseEventHandler<HTMLButtonElement>;
}
