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
export const campaignDrawerState = atom<DrawerProps>({
  key: "campaignDrawerState",
  default: {
    open: false
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
export const alertPopupState