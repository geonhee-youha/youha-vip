import { IconName } from '@fortawesome/fontawesome-svg-core';
export const mainTabWidth = 280
export const homeTabWidth = 280
export const homeTabItemMaxHeight = 280
export type SlugProps = {
    title: string;
    pathName: string;
}
export type PageProps = {
    title: string;
    iconName: IconName;
    pathName: string;
    slugs?: SlugProps[];
}
export const pages: PageProps[] = [
    {
        title: '홈',
        iconName: 'home-alt',
        pathName: '/home',
    },
    {
        title: '캠페인 관리',
        iconName: 'wand-magic-sparkles',
        pathName: '/campaign',
        slugs: [
            {
                title: '내 캠페인',
                pathName: '/campaign'
            },
            {
                title: '내 견적서',
                pathName: '/estimate'
            },
        ]
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
        ]
    },
    {
        title: '마이페이지',
        iconName: 'user',
        pathName: '/mypage',
        slugs: [
            {
                title: '브랜드/제품 관리',
                pathName: '/products'
            },
            {
                title: '계정 관리',
                pathName: '/account'
            },
        ]
    },
    {
        title: '즐겨찾기',
        iconName: 'star',
        pathName: '/favorite',
    },
    {
        title: '공지사항',
        iconName: 'bullhorn',
        pathName: '/notices',
    },
    {
        title: '검색',
        iconName: 'search',
        pathName: '/search',
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