import { atom } from "recoil";
import { AgeProps, SexProps } from "../constants";
import { v1 } from "uuid";
import { CampaignProps } from "../datas";
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
export const campaignDrawerDefaultProps = {
  id: `campaignDrawer`,
  open: false,
  selectedCampaignIds: []
}
export const campaignDrawerState = atom<DrawerProps & { selectedCampaignIds: any[] }>({
  key: `campaignDrawerState/${v1()}`,
  default: campaignDrawerDefaultProps
});
export const creatorDrawerDefaultProps = {
  id: `creatorDrawer`,
  open: false,
  selectedCreatorIds: [],
  selectedPlanIds: [],
  pass: false
}
export const creatorDrawerState = atom<DrawerProps & { selectedCreatorIds: any[], selectedPlanIds: any[], pass: boolean }>({
  key: `creatorDrawerState/${v1()}`,
  default: creatorDrawerDefaultProps
});
export const estimateDrawerDefaultProps = {
  id: `estimateDrawer`,
  open: false,
  mix: undefined
}
export const estimateDrawerState = atom<DrawerProps & { mix?: boolean }>({
  key: `estimateDrawerState/${v1()}`,
  default: estimateDrawerDefaultProps
});
export type PopupProps = DrawerProps & {
  title?: string;
  body?: string;
  cancel?: {
    hide?: boolean;
    title?: string;
    onClick?: any
  },
  confirm?: {
    hide?: boolean;
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
export const campaignDialogState = atom<PopupProps>({
  key: `campaignDialogState/${v1()}`,
  default: {
    id: 'campaignDialog',
    open: false,
  },
});
export const creatorDialogState = atom<PopupProps & { creatorId?: string, tabIndex: number, checkMode?: boolean, forceCheck?: boolean }>({
  key: `creatorDialogState/${v1()}`,
  default: {
    id: 'playlist',
    creatorId: '',
    open: false,
    tabIndex: 0,
    checkMode: undefined,
    forceCheck: undefined
  },
});
export type EstimateInputProps = {
  budget: string;
  duration: string;
  purposies: string[];
  categories: string[];
  channelCount: string;
  keyword: string;
  sellingPoint: string;
  description: string;
  request: string;
  file: any;
  target: {
    ages?: AgeProps[],
    sex?: SexProps,
  },
}
export const estimateInputDefaultProps = {
  budget: "",
  duration: "",
  purposies: [],
  categories: [],
  channelCount: "",
  keyword: "",
  sellingPoint: "",
  description: "",
  request: "",
  file: "",
  target: {
    ages: [],
    sex: undefined,
  }
}
export const estimateDialogState = atom<PopupProps & {
  temp?: boolean,
  campaign?: CampaignProps,
  creators?: any[],
  input: EstimateInputProps,
  mix?: boolean
}>({
  key: `estimateDialogState/${v1()}`,
  default: {
    id: 'estimateDialog',
    open: false,
    temp: undefined,
    campaign: undefined,
    creators: undefined,
    input: estimateInputDefaultProps,
    mix: undefined,
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