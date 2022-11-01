import { atom } from "recoil";
import { AgeProps, inputDefaultProps, InputProps, SexProps } from "../constants";
import { v1 } from "uuid";
export type DrawerProps = {
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
    open: false
  },
});
export const campaignDrawerState = atom<DrawerProps & { selectedId: number | null }>({
  key: `campaignDrawerState/${v1()}`,
  default: {
    open: false,
    selectedId: null
  },
});
export const creatorPlanDrawerState = atom<DrawerProps & { selectedCreatorIds: any[], selectedPlanIds: any[] }>({
  key: `creatorPlanDrawerState/${v1()}`,
  default: {
    open: false,
    selectedCreatorIds: [],
    selectedPlanIds: []
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
    open: false,
  },
});
export const creatorDialogState = atom<PopupProps>({
  key: `creatorDialogState/${v1()}`,
  default: {
    open: false,
  },
});
export const campaignDialogState = atom<PopupProps>({
  key: `campaignDialogState/${v1()}`,
  default: {
    open: false,
  },
});
export const planDialogState = atom<PopupProps>({
  key: `planDialogState/${v1()}`,
  default: {
    open: false,
  },
});
export const estimateDialogState = atom<PopupProps>({
  key: `estimateDialogState/${v1()}`,
  default: {
    open: false,
  },
});
export const adDialogState = atom<PopupProps>({
  key: `adDialogState/${v1()}`,
  default: {
    open: false,
  },
});
export const estimateInputDialogState = atom<PopupProps & { mix?: boolean }>({
  key: `estimateInputDialogState/${v1()}`,
  default: {
    open: false,
  },
});
export const campaignPopupState = atom<DrawerProps & {
  input: {
    title: InputProps,
    description: InputProps,
    categories: string[],
    keyword: InputProps,
    keywords: InputProps,
    target: {
      age?: AgeProps,
      sex?: SexProps,
    }
  }
}>({
  key: `campaignPopupState/${v1()}`,
  default: {
    open: false,
    input: {
      title: inputDefaultProps,
      description: inputDefaultProps,
      categories: [],
      keyword: inputDefaultProps,
      keywords: inputDefaultProps,
      target: {}
    }
  },
});
export const creatorPopupState = atom<DrawerProps & { creatorName: InputProps }>({
  key: `creatorPopupState/${v1()}`,
  default: {
    open: false,
    creatorName: inputDefaultProps
  },
});
export const planPopupState = atom<DrawerProps & { creatorName: InputProps }>({
  key: `planPopupState/${v1()}`,
  default: {
    open: false,
    creatorName: inputDefaultProps
  },
});