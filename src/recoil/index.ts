import { atom } from "recoil";
import { AgeProps, SexProps } from "../constants";
import { v1 } from "uuid";
export type DrawerProps = {
  id?: string;
  open: boolean;
}
export const searchDrawerState = atom<DrawerProps>({
  key: `searchDrawerState/${v1()}`,
  default: {
    open: false
  },
});
export const alarmDrawerState = atom<DrawerProps>({
  key: `alarmDrawerState/${v1()}`,
  default: {
    id: `alarmDrawer`,
    open: false
  },
});
export const campaignDrawerState = atom<DrawerProps & { selectedCampaignIds: any[] }>({
  key: `campaignDrawerState/${v1()}`,
  default: {
    id: `campaignDrawer`,
    open: false,
    selectedCampaignIds: []
  },
});
export const creatorDrawerState = atom<DrawerProps & { selectedCreatorIds: any[], selectedPlanIds: any[], pass: boolean }>({
  key: `creatorDrawerState/${v1()}`,
  default: {
    id: `creatorDrawer`,
    open: false,
    selectedCreatorIds: [],
    selectedPlanIds: [],
    pass: false
  },
});
export const estimateDrawerState = atom<DrawerProps & { mix?: boolean }>({
  key: `estimateDrawerState/${v1()}`,
  default: {
    id: `estimateDrawer`,
    open: false,
    mix: undefined
  },
});
export type PopupProps = DrawerProps & {
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
export const alertDialogState = atom<PopupProps>({
  key: `alertDialogState/${v1()}`,
  default: {
    id: 'alertDialog',
    open: false,
  },
});
export const creatorDialogState = atom<PopupProps>({
  key: `creatorDialogState/${v1()}`,
  default: {
    id: 'creatorDialog',
    open: false,
  },
});
export const campaignDialogState = atom<PopupProps>({
  key: `campaignDialogState/${v1()}`,
  default: {
    id: 'campaignDialog',
    open: false,
  },
});
export const planDialogState = atom<PopupProps>({
  key: `planDialogState/${v1()}`,
  default: {
    id: 'planDialog',
    open: false,
  },
});
export const estimateDialogState = atom<PopupProps>({
  key: `estimateDialogState/${v1()}`,
  default: {
    id: 'estimateDialog',
    open: false,
  },
});
export const adDialogState = atom<PopupProps>({
  key: `adDialogState/${v1()}`,
  default: {
    id: 'adDialog',
    open: false,
  },
});
export const estimateInputDialogState = atom<PopupProps & { mix?: boolean }>({
  key: `estimateInputDialogState/${v1()}`,
  default: {
    id: 'estimateInputDialog',
    open: false,
  },
});
export const campaignPopupState = atom<DrawerProps>({
  key: `campaignPopupState/${v1()}`,
  default: {
    id: 'campaignPopup',
    open: false,
  },
});
export const creatorPopupState = atom<DrawerProps>({
  key: `creatorPopupState/${v1()}`,
  default: {
    id: 'creatorPopup',
    open: false,
  },
});
export const planPopupState = atom<DrawerProps & { creatorName: string }>({
  key: `planPopupState/${v1()}`,
  default: {
    id: 'planPopup',
    open: false,
    creatorName: ''
  },
});