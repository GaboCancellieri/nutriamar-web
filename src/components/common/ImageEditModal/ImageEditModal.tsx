import React, { useState } from "react";
import { Input, Modal, Typography, Image, Button } from "@ccomponents";
import {
  IMAGE_EDIT_MODAL_ALT_TEXT_LABEL,
  IMAGE_EDIT_MODAL_PREVIEW_LABEL,
  IMAGE_EDIT_MODAL_SAVE_BUTTON_TEXT,
  IMAGE_EDIT_MODAL_TITLE,
  IMAGE_EDIT_MODAL_URL_LABEL,
} from "./constants";
import { ImageEditModalProps } from "./types";
import { BOLD, CENTER, LEFT } from "@constants/fonts";
import styles from "./imageEditModal.module.scss";
import { MT_1 } from "@constants/margins";
import { restorePageOverflowY } from "src/utils/modal";
import { COLOR_PRIMARY } from "@constants/colors";

const ImageEditModal = ({
  isActive = true,
  previewWidth,
  previewHeight,
  onClose = () => {},
  onSave = () => {},
}: ImageEditModalProps) => {
  const [url, setUrl] = useState("");
  const [altText, setAltText] = useState("");

  const handleClose = () => {
    setUrl("");
    setAltText("");
    onClose();
  };

  const handleImageSave = () => {
    restorePageOverflowY();
    onSave(url, altText);
    setUrl("");
    setAltText("");
  };

  return (
    <Modal
      onCancel={handleClose}
      isActive={isActive}
      width={"900px"}
      height={"600px"}
    >
      <div className={styles.imageEditModalContainer}>
        <Typography
          size={30}
          variant={BOLD}
          align={CENTER}
          color={COLOR_PRIMARY}
        >
          {IMAGE_EDIT_MODAL_TITLE}
        </Typography>
        <div className={styles.imageEditModalContent}>
          <Typography size={16} align={LEFT}>
            {IMAGE_EDIT_MODAL_URL_LABEL}
          </Typography>
          <Input
            className={styles.imageEditInput}
            value={url}
            onChange={(event: any) => setUrl(event.target.value)}
          />
          <Typography className={MT_1} size={16} align={LEFT}>
            {IMAGE_EDIT_MODAL_ALT_TEXT_LABEL}
          </Typography>
          <Input
            value={altText}
            onChange={(event: any) => setAltText(event.target.value)}
          />
          <div className={styles.imagePreviewContainer}>
            <Typography className={MT_1} size={16} align={LEFT}>
              {IMAGE_EDIT_MODAL_PREVIEW_LABEL}
            </Typography>
            <Image
              width={previewWidth}
              height={previewHeight}
              altText={altText}
              url={url}
            />
          </div>
          <Button variant="success" onClick={handleImageSave}>
            <Typography>{IMAGE_EDIT_MODAL_SAVE_BUTTON_TEXT}</Typography>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ImageEditModal;
