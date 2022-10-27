import { SxProps } from "@mui/material";

export type DietDialogProps = {
  open: boolean;
  pathname: string;
  cancel: {
    show: boolean;
    title: string;
    disabled: boolean;
    onClick: () => void;
  };
  confirm: {
    title: string;
    onClick: () => void;
    onConfirm: (e?: any) => void;
  };
  sx?: SxProps;
  children?: React.ReactNode;
};

export const DietDialogDefaultProps = {
  open: false,
  title: "",
  content: "",
  pathname: "/",
  cancel: {
    show: true,
    title: "취소",
    disabled: false,
    onClick: () => {},
  },
  confirm: {
    title: "확인",
    onClick: () => {},
    onConfirm: () => {},
  },
};
