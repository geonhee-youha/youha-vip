export type UserProps = {
  badge: {
    feeds: number;
    messages: number;
    missions: number;
    notifies: number;
  };
  category: any[];
  result: boolean;
  today_paid_count: number;
  user: {
    access_token: string;
    agree1: number;
    agree2: number;
    agree3: number;
    agree4: number;
    agree5: number;
    agree_ad: number;
    agree_push: number;
    agree_push_mission: number;
    area: string;
    area_code: string;
    area_updated_at: string;
    background_image: string;
    birthday: string;
    created_at: string;
    deleted_at: string | null;
    device_token: string;
    device_type: string;
    email: string;
    email_verified_at: string | null;
    family_name: string | null;
    gender: string;
    given_name: string | null;
    greeting: string;
    id: number;
    last_login_at: string;
    last_login_ip: string;
    lat: number;
    lng: number;
    name: string | null;
    nickname: string;
    phone: string | null;
    phone_verified_at: string | null;
    point: number;
    profile_image: string;
    refresh_token: string | null;
    refresh_token_expire_in: string | null;
    socket_id: string;
    updated_at: string;
  };
  wallpapers: any[];
  yesterday_check: number;
  yesterday_feeds_count: number;
  yesterday_paid_count: number;
  yesterday_point: number;
};
export const userDefaultProps = {
  badge: {
    feeds: 0,
    messages: 0,
    missions: 0,
    notifies: 0,
  },
  category: [],
  result: false,
  today_paid_count: 0,
  user: {
    access_token: "",
    agree1: 0,
    agree2: 0,
    agree3: 0,
    agree4: 0,
    agree5: 0,
    agree_ad: 0,
    agree_push: 0,
    agree_push_mission: 0,
    area: "",
    area_code: "",
    area_updated_at: "",
    background_image: "",
    birthday: "",
    created_at: "", //2021-09-02T18:47:45.000000Z
    deleted_at: "", //null
    device_token: "",
    device_type: "", //ios
    email: "",
    email_verified_at: "", //null
    family_name: "", //null
    gender: "", //W
    given_name: "", //null
    greeting: "",
    id: 0,
    // id: 4083,
    last_login_at: "", //2021-09-03 07:52:11
    last_login_ip: "",
    lat: 37,
    lng: 127,
    name: "", //null
    nickname: "",
    phone: "", //null
    phone_verified_at: "", //null
    point: 0,
    profile_image: "",
    refresh_token: "", //null
    refresh_token_expire_in: "", //null
    socket_id: "",
    updated_at: "", //2021-09-02T23:04:02.000000Z
  },
  wallpapers: [],
  yesterday_check: 0,
  yesterday_feeds_count: 0,
  yesterday_paid_count: 0,
  yesterday_point: 0,
};
export type SomeoneProps = {
  area: string;
  bookmarks: number;
  comments: number;
  description: string;
  emoji: string;
  ended_at: string;
  event_type: string;
  feed_id: number;
  feeds_count: number;
  gender: string;
  has_check: number;
  id: number;
  is_bookmark: number;
  is_event: number;
  is_old_event: number;
  is_following: number;
  mission_category_id: number;
  mission_stat_id: number;
  mission_stat_user_id: number;
  nickname: string;
  place_address: string;
  place_description: string;
  place_image: string;
  place_title: string;
  place_url: string;
  product_brand: string;
  product_id: string;
  product_image: string;
  product_price: string;
  product_title: string;
  product_type: string;
  product_url: string;
  profile_image: string;
  started_at: string;
  success_count: number;
  thumbnail_image: string;
  title: string;
  today_upload: number;
  user_id: number;
  users: [
    {
      gender: string;
      id: number;
      mission_id: number;
      nickname: "0";
      profile_image: string;
    },
    {
      gender: string;
      id: number;
      mission_id: number;
      nickname: "0";
      profile_image: string;
    }
  ];
};
export const someoneDefaultProps = {
  area: "",
  bookmarks: 0,
  comments: 0,
  description: "",
  emoji: "",
  ended_at: "",
  event_type: "",
  feed_id: 0,
  feeds_count: 0,
  gender: "",
  has_check: 0,
  id: 0,
  is_bookmark: 0,
  is_event: 0,
  is_old_event: 0,
  is_following: 0,
  mission_category_id: 0,
  mission_stat_id: 0,
  mission_stat_user_id: 0,
  nickname: "",
  place_address: "",
  place_description: "",
  place_image: "",
  place_title: "",
  place_url: "",
  product_brand: "",
  product_id: "",
  product_image: "",
  product_price: "",
  product_title: "",
  product_type: "",
  product_url: "",
  profile_image: "",
  started_at: "",
  success_count: 0,
  thumbnail_image: "",
  title: "",
  today_upload: 0,
  user_id: 0,
  users: [
    {
      gender: "",
      id: 0,
      mission_id: 0,
      nickname: "0",
      profile_image: "",
    },
    {
      gender: "",
      id: 0,
      mission_id: 0,
      nickname: "0",
      profile_image: "",
    },
  ],
};
export type UserListItemProps = {
    area: string;
    follower: number;
    gender: string;
    id: number;
    is_following: number;
    nickname: string;
    profile_image: string;
  };