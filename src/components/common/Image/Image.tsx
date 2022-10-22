import classNames from "classnames";
import React, { useState } from "react";
import { ImageProps } from "./types";
import styles from "./image.module.scss";
import { Button, Icon, ImageEditModal } from "@ccomponents";
import { FONT_AWESOME } from "@constants/icons";
import { FIT } from "@constants/buttons";

const Image = ({
  className,
  url,
  altText,
  width,
  height,
  isFixed = false,
  enableEdit = false,
  onEdit = () => {},
}: ImageProps) => {
  return (
    <>
      <div className={classNames({ [styles.imageContainer]: isFixed })}>
        {enableEdit && (
          <div className={styles.imageEditButtonContainer}>
            <Button
              className={styles.imageEditButton}
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
        <img
          className={classNames(className, { [styles.imageFixed]: isFixed })}
          style={{ width, height }}
          src={url}
          alt={altText}
        />
      </div>
    </>
  );
};

export default Image;
