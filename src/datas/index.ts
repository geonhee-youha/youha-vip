import { atom } from "recoil";

export type NoticeProps = {
    id: number;
    title: string;
    body: string;
    createdAt: any;
}
export const notices: NoticeProps[] = [
    {
        id: 1,
        title: '브랜드 2개 이상 등록하신 고객님 대상 이벤트',
        body: '유하 VIP 서비스가 런칭되었어요.',
        createdAt: '2022-10-27T15:43:00.000Z'
    },
    {
        id: 2,
        title: '서버 점검 공지',
        body: '유하 VIP 서비스가 런칭되었어요.',
        createdAt: '2022-10-16T05:43:00.000Z'
    },
    {
        id: 3,
        title: '유하 VIP 서비스가 런칭 기념 이벤트',
        body: '유하 VIP 서비스가 런칭되었어요.',
        createdAt: '2022-09-06T05:43:00.000Z'
    }
]
export type CreatorProps = {
    id: number;
    thumbnail?: string;
    name: string;
    url: string;
    subscribes?: number;
}
export type VideoProps = {
    id: number;
    thumbnail?: string;
    title: string;
    url: string;
    createdAt: string | Date;
    creator: CreatorProps;
    view: number;
}
export type CampaignProps = {
    type: 'brand' | 'product'; //브랜드인지 제품인지
    name: string; //캠페인 이름
    description: string; //캠페인 설명
    createdAt: string | Date; //캠페인 시작시간
    endedAt: string | Date; //캠페인 종료시간
    category: any; //캠페인 카테고리
    target: {
        age: '10대' | '20~30대' | '40~50대' | '60대 이상', //캠페인 타겟 연령
        sex?: 'male' | 'female', //켐페인 타겟 성별
    },
    budget: number; //캠페인 예산
}
export type ProductProps = {
    // 제품 이름
    // 제품 사진
    // 제품 설명
    // 제품 태그
}
export type BrandProps = {
    // 브랜드 이름
    // 브랜드 로고?
    // 브랜드 태그 - 특징 관련된 태그들
    // 브랜드 설명
    // 제품들
}
export type UserProps = {
    id: number;
    email: string;
    name: string;
    phone: string;
    company: {
        name: string;
        thumbnail?: string;
        description?: string;
        team: {
            name: string;
            position: string;
        }
    },
}
export const testUser = {
    id: 0,
    email: 'yeongyu.yu@youha.info',
    name: '유연규',
    phone: '01027126294',
    company: {
        name: '제일기획',
        thumbnail: 'https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/293374986_5335367496509641_2054553399806748063_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lElbOiSbPxMAX_B4aac&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCnfA-fuleC4w9roUIuGbdBtAVZAI29kUSBZ59Zn1gzXg&oe=636109B6',
        description: '국내 최고의 광고대행사, 제일기획입니다.',
        team: {
            name: '영업팀',
            position: '팀장'
        }
    },
}
export const userState = atom<UserProps | null>({
    key: "userState",
    default: testUser
});

