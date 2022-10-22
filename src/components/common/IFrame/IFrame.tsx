import React, { useState } from "react";
import { IFrameProps } from "./types";
import styles from "./iFrame.module.scss";
import { Button, Icon, Image } from "@ccomponents";
import {
  IFRAME_BACKGROUND_IMAGE_URL,
  IFRAME_BACKGROUND_VARIANTS,
} from "./constants";
import { checkEmbedUrl, getBackgroundImageSize } from "./utils";
import classNames from "classnames";
import { FIT } from "@constants/buttons";
import { FONT_AWESOME } from "@constants/icons";
import { IFRAME_BACKGROUND_SIZE } from "../IFrameEditModal/constants";

const IFrame = ({
  background = "none",
  enableEdit = false,
  onEdit = () => {},
  url,
}: IFrameProps) => {
  return (
    <>
      <div className={styles.iframeContainer}>
        {enableEdit && (
          <div className={styles.iframeEditButtonContainer}>
            <Button
              className={styles.iframeEditButton}
              variant="warning"
              size={FIT}
              onClick={onEdit}
            >
              <Icon
                iconId={"FaPencilAlt"}
                iconDesign={FONT_AWESOME}
                size="1x"
              />
            </Button>
          </div>
        )}
        {IFRAME_BACKGROUND_VARIANTS[background] !== "none" && (
          <div className={styles.iframeImageContainer}>
            <Image
              className={classNames(styles.iframeImage, {
                [styles.desktopFrame]: background === "desktop",
              })}
              width={`${getBackgroundImageSize(background, "width")}px`}
              height={`${getBackgroundImageSize(background, "height")}px`}
              altText={background}
              url={IFRAME_BACKGROUND_IMAGE_URL[background]}
            />
          </div>
        )}
        <iframe
          src={checkEmbedUrl(url)}
          height={IFRAME_BACKGROUND_SIZE[background].height}
          width={IFRAME_BACKGROUND_SIZE[background].width}
        ></iframe>
      </div>
    </>
  );
};

export default IFrame;
