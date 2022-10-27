import { Dispatch, SetStateAction } from "react";

export type PageProps = {
  id: number;
  value: string;
  label: string;
};

export type TabProps = {
  id: number;
  value: string;
  icon: string;
  label: string;
  pages: PageProps[];
};

export type StackProps = {
  key: number;
  stack: string;
  id: number | null;
  focused: boolean;
  title?: string;
};

export type SetStackProps = Dispatch<SetStateAction<StackProps[]>>;
