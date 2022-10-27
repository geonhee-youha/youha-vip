import { atom } from "recoil";
export type DrawerProps = {
  open: boolean;
}
export const alarmDrawerState = atom<DrawerProps>({
  key: "Drawer/alarmDrawerState",
  default: {
    open: false
  },
});
