export type StepItem = {
  title: string;
  icon: string;
  description: string;
};

export interface StepItemProps {
  step: StepItem;
  index: number;
}
