import { CommentProps } from "./comment";
import { MissionProps } from "./mission";

export type PlaceProps = {
  address: string | null;
  description: string | null;
  image: string | null;
  title: string | null;
  url: string | null;
};
export type ProductProps = {
  brand: string | null;
  id: string | null;
  image: string | null;
  price: string | null;
  title: string | null;
  type: string | null;
  url: string | null;
};
export type UserFeedProps = {
  emoji: string;
  id?: number;
  area: string;
  check_total: number;
  comment_total: number;
  content: string;
  created_at: string;
  emoji_total: number;
  feed_id: number;
  followers: number;
  gender: string;
  is_hidden?: boolean;
  has_check: number | boolean;
  has_comment: number;
  has_emoji: number;
  has_images: number;
  has_paid_check: number;
  image: string;
  image_type: string;
  is_following: number;
  mission_id: number;
  mission: string;
  missions: number;
  nickname: string;
  place: PlaceProps;
  product: ProductProps;
  profile_image: string | null;
  user_id: number;
  images: { type: string; image: string }[];
  users?: {
    feed_id: number;
    gender: string;
    id: number;
    nickname: string;
    profile_image: string | null;
  }[];
  checks: number;
  comments: number;
};
export type FeedProps = {
  id?: number;
  area: string;
  check_total: number;
  comment_total: number;
  content: string;
  created_at: string;
  emoji_total: number;
  feed_id: number;
  followers: number;
  gender: string;
  is_hidden?: boolean;
  has_check: number | boolean;
  has_comment: number;
  has_emoji: number;
  has_images: number;
  has_paid_check: number;
  image: string;
  image_type: string;
  is_following: number;
  missions: MissionProps[];
  nickname: string;
  place: PlaceProps;
  product: ProductProps;
  profile_image: string | null;
  user_id: number;
  images: { type: string; image: string }[];
  users?: {
    feed_id: number;
    gender: string;
    id: number;
    nickname: string;
    profile_image: string | null;
  }[];
  comments?: CommentProps[];
};
export const feedDefaultProps = {
  id: -1,
  area: "",
  check_total: 0,
  comment_total: 0,
  content: "",
  created_at: "",
  emoji_total: 0,
  feed_id: 0,
  followers: 0,
  gender: "",
  has_check: 0,
  has_comment: 0,
  has_emoji: 0,
  has_images: 0,
  has_paid_check: 0,
  image: "",
  image_type: "",
  is_following: 0,
  missions: [],
  nickname: "",
  place: {},
  product: {},
  profile_image: "",
  user_id: 0,
  images: [],
};
