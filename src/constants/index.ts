import { IconName } from '@fortawesome/fontawesome-svg-core';
export const mainTabWidth = (1600 - 24 * 3) / 4
export const homeTabWidth = (1600 - 24 * 3) / 4
export const homeTabItemMaxHeight = 240
export type InputProps = {
    value: string;
    error: boolean;
    helperText: string;
};
export const inputDefaultProps: InputProps = {
    value: "",
    error: false,
    helperText: "",
};
export type AgeProps = '10대' | '20~30대' | '40~50대' | '60대 이상'
export type SexProps = '남성' | '여성'
export const testCategories = ["패션",
    "뷰티",
    "비건/친환경",
    "가구/인테리어",
    "건강",
    "다이어트",
    "여행",
    "게임",
    "펫/동물",
    "IT/앱",
    "가전/전자기기",
    "영화/드라마",
    "웹툰/애니",
    "자동차",
    "음악",
    "운동",
    "시사/정치",
    "교육",
    "키즈",
    "은행",
    "증권",
    "카드",
    "금융",
    "투자/제태크",
    "주류",
    "음료",
    "음식",
    "음식점",
    "출판",
    "공기업/관공서",
    "병원",
    "엔터테인먼트",
    "종교",
    "사회적 기업",
    "기타",]
export const ages: AgeProps[] = [
    '10대', '20~30대', '40~50대', '60대 이상',
]
export const sexs: SexProps[] = [
    '남성', '여성',
]
export type SlugProps = {
    title: string;
    pathName: string;
}
export type PageProps = {
    title: string;
    iconName: IconName;
    pathName: string;
    slugs?: SlugProps[];
    inMainTab?: boolean;
}
export const pages: PageProps[] = [
    {
        title: '내 캠페인',
        iconName: 'grid-2',
        pathName: '/campaign',
        inMainTab: true
    },
    {
        title: '광고집행 관리',
        iconName: 'rectangle-ad',
        pathName: '/ad',
        slugs: [
            {
                title: '견적내기',
                pathName: '/'
            },
            {
                title: '견적서 관리',
                pathName: '/estimate'
            },
            {
                title: '진행중인 광고',
                pathName: '/proceeding'
            },
            {
                title: '완료된 광고',
                pathName: '/completed'
            },
        ],
        inMainTab: true
    },
    {
        title: '인사이트',
        iconName: 'lightbulb-exclamation',
        pathName: '/insight',
        slugs: [
            {
                title: '추천 크리에이터',
                pathName: '/creator'
            },
            {
                title: '추천 광고영상',
                pathName: '/video'
            },
            {
                title: '추천 기획안',
                pathName: '/plan'
            },
            // {
            //     title: '추천 믹스',
            //     pathName: '/mix'
            // },
        ],
        inMainTab: true
    },
    {
        title: '크리에이터 리스트',
        iconName: 'address-book',
        pathName: '/creator',
        inMainTab: true
    },
    {
        title: '즐겨찾기',
        iconName: 'star',
        pathName: '/favorite',
        inMainTab: true
    },
    {
        title: '공지사항',
        iconName: 'bullhorn',
        pathName: '/notice',
    },
    {
        title: '마이페이지',
        iconName: 'user',
        pathName: '/mypage',
    },
]
export type HomeTabProps = {
    title: string;
    iconName: IconName
};
export const homeTabs: HomeTabProps[] = [
    {
        title: "체크리스트",
        iconName: 'check-circle'
    },
    {
        title: "진행리스트",
        iconName: 'rectangle-list'
    },
];
export type TabProps = {
    id: number;
    title: string;
    value: string;
}
export const favoriteTabs: TabProps[] = [
    {
        id: 0,
        title: '크리에이터',
        value: ''
    },
    {
        id: 1,
        title: '광고영상',
        value: ''
    },
    {
        id: 2,
        title: '기획안',
        value: ''
    },
]
export const creatorPopupTabs: TabProps[] = [
    {
        id: 0,
        title: '추천 크리에이터',
        value: ''
    },
    {
        id: 1,
        title: '즐겨찾기',
        value: ''
    },
]
export const planPopupTabs: TabProps[] = [
    {
        id: 0,
        title: '추천 기획안',
        value: ''
    },
    {
        id: 1,
        title: '즐겨찾기',
        value: ''
    },
]
export type creatorFilter = {
    title: string;
    iconName: IconName;
    tags: string[]
}
export const creatorFilters: creatorFilter[] = [
    {
        title: '성별',
        iconName: 'people-simple',
        tags: sexs
    },
    {
        title: '연령',
        iconName: 'calendar',
        tags: ages
    },
    {
        title: '구독',
        iconName: 'users',
        tags: []
    }
]