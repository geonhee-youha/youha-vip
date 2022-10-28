import { IconName } from '@fortawesome/fontawesome-svg-core';
export const mainTabWidth = 384
export const homeTabWidth = 384
export const homeTabItemMaxHeight = 240
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
                title: '추천 광고영상',
                pathName: '/video'
            },
            {
                title: '추천 크리에이터',
                pathName: '/creator'
            },
            {
                title: '추천 기획안',
                pathName: '/plan'
            },
            {
                title: '추천 믹스',
                pathName: '/mix'
            },
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
        title: '광고영상',
        value: 'video'
    },
    {
        id: 1,
        title: '크리에이터',
        value: 'creator'
    },
    {
        id: 2,
        title: '기획안',
        value: 'plan'
    },
    {
        id: 3,
        title: '믹스',
        value: 'mix'
    },
]