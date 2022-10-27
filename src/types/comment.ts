export type CommentProps = {
  comment: string;
  created_at: string;
  depth: number;
  gender: string;
  group: number;
  id: number;
  is_delete: number;
  nickname: string;
  profile_image: string;
  user_id: number;
};
export const commentDefaultProps = {
  comment: "",
  created_at: "",
  depth: 0,
  gender: "",
  group: 0,
  id: -1,
  is_delete: 0,
  nickname: "",
  profile_image: "",
  user_id: -1,
};
