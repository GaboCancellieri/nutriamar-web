export const SHOW_ALERT = "SHOW_ALERT";
export const CLOSE_ALERT = "CLOSE_ALERT";

export const showAlert = ({
  type,
  variant,
  message,
}: {
  type: string;
  variant: string;
  message: string;
}) => ({ action: SHOW_ALERT, payload: { type, variant, message } });

export const closeAlert = () => ({ action: CLOSE_ALERT });
