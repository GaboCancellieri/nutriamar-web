import { Button, Icon, IFrame, Input, Modal, Typography } from "@ccomponents";
import React, { useState } from "react";
import { restorePageOverflowY } from "src/utils/modal";
import { IFrameEditModalProps, IIFrameBackgroundTypeButton } from "./types";
import styles from "./iframeEditModal.module.scss";
import { BOLD, CENTER, LEFT } from "@constants/fonts";
import {
  COLOR_DANGER,
  COLOR_PRIMARY,
  COLOR_WHITE,
  WHITE,
} from "@constants/colors";
import {
  IFRAME_BACKGROUND_SIZE,
  IFRAME_MODAL_BACKGROUND_TYPE_BUTTONS,
  IFRAME_MODAL_PREVIEW_LABEL,
  IFRAME_MODAL_PREVIEW_NO_URL,
  IFRAME_MODAL_SAVE_BUTTON_TEXT,
  IFRAME_MODAL_TITLE,
  IFRAME_MODAL_URL_LABEL,
} from "./constants";
import { MB_1, ML_05, MT_1 } from "@constants/margins";
import { IFRAME_BACKGROUND_VARIANTS } from "../IFrame/constants";
import { FONT_AWESOME } from "@constants/icons";
import { FIT } from "@constants/buttons";
import classNames from "classnames";
import { IFrameBackgroundType } from "../IFrame/types";

const IFrameEditModal = ({
  isActive = true,
  onClose = () => {},
  onSave = () => {},
}: IFrameEditModalProps) => {
  const [url, setUrl] = useState("");
  const [backgroundType, setBackgroundType] =
    useState<IFrameBackgroundType>("none");

  const handleClose = () => {
    setUrl("");
    setBackgroundType("none");
    onClose();
  };

  const handleImageSave = () => {
    restorePageOverflowY();
    onSave(url, backgroundType);
    setUrl("");
    setBackgroundType("none");
  };
  return (
    <Modal
      onCancel={handleClose}
      isActive={isActive}
      width={"900px"}
      height={"fit-content"}
    >
      <div className={styles.iframeEditModalContainer}>
        <Typography
          size={30}
          variant={BOLD}
          align={CENTER}
          color={COLOR_PRIMARY}
        >
          {IFRAME_MODAL_TITLE}
        </Typography>
        <div className={styles.iframeEditModalContent}>
          <div className={styles.iframeInputs}>
            <Typography size={16} align={LEFT}>
              {IFRAME_MODAL_URL_LABEL}
            </Typography>
            <Input
              className={styles.iframeEditInput}
              value={url}
              onChange={(event: any) => setUrl(event.target.value)}
            />
            <div className={styles.buttonGroup}>
              {IFRAME_MODAL_BACKGROUND_TYPE_BUTTONS.map(
                (buttonItem: IIFrameBackgroundTypeButton, index: number) => {
                  return (
                    <Button
                      key={index}
                      onClick={() => setBackgroundType(buttonItem.value)}
                      size={FIT}
                      hover
                      focus={backgroundType === buttonItem.value}
                    >
                      <Icon
                        iconId={buttonItem.icon}
                        iconDesign={FONT_AWESOME}
                        size="2x"
                      />
                    </Button>
                  );
                }
              )}
            </div>
          </div>
          <div className={styles.iframePreviewContainer}>
            <Typography
              className={classNames(MT_1, MB_1)}
              size={16}
              align={CENTER}
            >
              {IFRAME_MODAL_PREVIEW_LABEL}
            </Typography>
            {url ? (
              <IFrame background={backgroundType} url={url} />
            ) : (
              <Typography
                className={classNames(MT_1, MB_1)}
                size={16}
                align={CENTER}
                variant={"italic"}
                color={COLOR_DANGER}
              >
                {IFRAME_MODAL_PREVIEW_NO_URL}
              </Typography>
            )}
          </div>
        </div>
        <Button
          variant="success"
          onClick={handleImageSave}
          disabled={!url || !backgroundType}
        >
          <Icon
            iconId="FaCheck"
            iconDesign={FONT_AWESOME}
            color={WHITE}
            size="1x"
          ></Icon>
          <Typography className={ML_05} color={COLOR_WHITE}>
            {IFRAME_MODAL_SAVE_BUTTON_TEXT}
          </Typography>
        </Button>
      </div>
    </Modal>
  );
};

export default IFrameEditModal;
