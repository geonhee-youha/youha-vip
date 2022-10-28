import { atom } from "recoil";
export type DrawerProps = {
  open: boolean;
}
export const searchDrawerState = atom<DrawerProps>({
  key: "searchDrawerState",
  default: {
    open: false
  },
});
export const alarmDrawerState = atom<DrawerProps>({
  key: "alarmDrawerState",
  default: {
    open: false
  },
});
export const campaignDrawerState = atom<DrawerProps & { selectedId: number | null }>({
  key: "campaignDrawerState",
  default: {
    open: false,
    selectedId: null
  },
});
export const adDrawerState = atom<DrawerProps>({
  key: "adDrawerState",
  default: {
    open: false
  },
});
export const estimateDrawerState = atom<DrawerProps>({
  key: "estimateDrawerState",
  default: {
    open: false
  },
});
export type PopupProps = {
  open: boolean;
  title?: string;
  body?: string;
  cancel?: {
    title?: string;
    onClick?: any
  },
  confirm?: {
    title?: string;
    onClick?: any
  },
}
export const alertPopupState = atom<PopupProps>({
  key: "alertPopupState",
  default: {
    open: false,
  },
});