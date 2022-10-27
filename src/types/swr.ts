export type SWRProps = {
  isLoading: boolean;
  error: boolean;
  mutate: () => void;
};
export type SWRInfiniteProps = {
  isLoading: boolean;
  error: boolean;
  isValidating: boolean;
  isLoadingMore: boolean;
  isRefreshing: boolean;
  mutate: (e?: any, v?: any) => void;
  size: number;
  setSize: (e: any) => void;
};
