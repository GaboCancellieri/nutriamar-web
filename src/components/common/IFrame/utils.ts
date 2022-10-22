import { IFRAME_BACKGROUND_SIZE } from "../IFrameEditModal/constants";
import {
  IFRAME_BACKGROUND_IMAGE_SIZE_OFFSET,
  IFRAME_BACKGROUND_VARIANTS,
} from "./constants";
import { IFrameBackgroundType } from "./types";

export const checkEmbedUrl = (url: string) => {
  if (url.toLowerCase().includes("youtube")) {
    const indexParams = url.indexOf("&t");
    return (
      (indexParams !== -1
        ? url.substring(0, indexParams).replace("watch?v=", "embed/")
        : url.replace("watch?v=", "embed/")) +
      "?modestbranding=1&showinfo=0&controls=0"
    );
  }
  return url;
};

export const getBackgroundImageSize = (
  background: IFrameBackgroundType,
  measurement: "width" | "height"
) => {
  return (
    IFRAME_BACKGROUND_SIZE[background][measurement] +
    IFRAME_BACKGROUND_SIZE[background][measurement] *
      IFRAME_BACKGROUND_IMAGE_SIZE_OFFSET[background][measurement]
  );
};
