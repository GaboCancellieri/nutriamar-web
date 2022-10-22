import { IFrameBackgroundType } from "../IFrame/types";

export interface IFrameEditModalProps {
  isActive?: boolean;
  onClose?: Function;
  onSave?: Function;
}

export interface IIFrameBackgroundTypeButton {
  icon: string;
  value: IFrameBackgroundType;
}
