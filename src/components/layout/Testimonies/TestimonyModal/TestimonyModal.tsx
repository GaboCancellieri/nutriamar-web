import React, { useEffect, useState } from "react";
import { Button, Input, Modal, TextArea, Typography } from "@ccomponents";
import { ITestimony } from "../context/types";
import styles from "./testimonyModal.module.scss";
import { BOLD, CENTER, LEFT } from "@constants/fonts";
import { COLOR_PRIMARY, WHITE } from "@constants/colors";
import { MODAL_LABELS } from "./constants";
import { MT_1 } from "@constants/margins";
import { FIT } from "@constants/buttons";

interface TestimonyModalProps {
  selectedTestimony: ITestimony;
  isActive: boolean;
  onClose: Function;
  onSave: Function;
}

const TestimonyModal = ({
  selectedTestimony,
  isActive,
  onClose,
  onSave,
}: TestimonyModalProps) => {
  const [newTestimony, setNewTestimony] = useState<ITestimony>(
    selectedTestimony?.id
      ? selectedTestimony
      : {
          name: "",
          age: "",
          imageURL: "",
          comment: "",
        }
  );

  console.log({ newTestimony });

  const handleClose = () => {
    onClose();
  };
  const handleSave = () => {
    onSave(newTestimony);
  };

  return (
    <Modal
      onCancel={handleClose}
      isActive={isActive}
      width={"900px"}
      height={"fit-content"}
    >
      <div className={styles.modalContainer}>
        <Typography
          size={30}
          variant={BOLD}
          align={CENTER}
          color={COLOR_PRIMARY}
        >
          {`${selectedTestimony?.id ? "Editar" : "Agregar"} Testimonio`}
        </Typography>
        <div className={styles.modalContent}>
          <Typography size={16} align={LEFT}>
            {MODAL_LABELS.name}
          </Typography>
          <Input
            className={styles.iframeEditInput}
            value={newTestimony.name}
            placeholder={newTestimony.name}
            onChange={(event: any) =>
              setNewTestimony({ ...newTestimony, name: event.target.value })
            }
          />
          <Typography className={MT_1} size={16} align={LEFT}>
            {MODAL_LABELS.age}
          </Typography>
          <Input
            className={styles.iframeEditInput}
            value={newTestimony.age}
            placeholder={newTestimony.age}
            onChange={(event: any) =>
              setNewTestimony({ ...newTestimony, age: event.target.value })
            }
          />
          <Typography className={MT_1} size={16} align={LEFT}>
            {MODAL_LABELS.imageURL}
          </Typography>
          <Input
            className={styles.iframeEditInput}
            placeholder={newTestimony.imageURL}
            value={newTestimony.imageURL}
            onChange={(event: any) =>
              setNewTestimony({ ...newTestimony, imageURL: event.target.value })
            }
          />
          <Typography className={MT_1} size={16} align={LEFT}>
            {MODAL_LABELS.comment}
          </Typography>
          <TextArea
            className={styles.iframeEditInput}
            value={newTestimony.comment}
            onChange={(event: any) =>
              setNewTestimony({ ...newTestimony, comment: event.target.value })
            }
          />
        </div>
        <Button
          size={FIT}
          variant="secondary"
          align={CENTER}
          onClick={handleSave}
          disabled={
            !newTestimony.name ||
            !newTestimony.age ||
            !newTestimony.imageURL ||
            !newTestimony.comment
          }
        >
          <Typography size={18} color={WHITE} variant={BOLD}>
            Guardar
          </Typography>
        </Button>
      </div>
    </Modal>
  );
};

export default TestimonyModal;
