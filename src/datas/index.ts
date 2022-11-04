import { atom } from "recoil";
import { AgeProps, SexProps } from "../constants";

export type NoticeProps = {
    id: number;
    title: string;
    body: string;
    createdAt: any;
}
export const testNotices: NoticeProps[] = [
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
export const checkedCreatorIdsState = atom<string[]>({
    key: "checkedCreatorIdsState",
    default: []
});
export const favoritedCreatorIdsState = atom<string[]>({
    key: "favoritedCreatorIdsState",
    default: []
});
export const checkedPlanIdsState = atom<string[]>({
    key: "checkedPlanIdsState",
    default: []
});
export const favoritedPlanIdsState = atom<string[]>({
    key: "favoritedPlanIdsState",
    default: []
});
export const testPlans = [
    {
        "id": "aee81c4b-381b-4403-b18f-208963651a5b",
        "title": "렌탈(여자)친구",
        "status": "open",
        "cover": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F3038158e-5bf7-43fa-a21b-5f19aaa5c50e%2Fyouha-fastbooking_project_thumbnail-rectangle-03.png",
        "squareThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Fa75c0cb5-557c-4908-9869-8c4466ed0b77%2Fyouha-fastbooking_project_thumbnail-square-03.png",
        "youtubeChannel": {
            "id": "96985ee9-fbf5-4ce8-9742-44b2657d031d",
            "youtubeChannelId": "UCaba63ac6-fb18-43f6-811d-b76db607db8f",
            "title": "test_inf_swjang@youha.info 테스트 채널",
            "descriptionOnYoutube": "유하 개발팀에서 생성한 테스트 용 계정입니다.",
            "descriptionOnYouha": "유하 개발팀에서 생성한 테스트 용 계정입니다.",
            "thumbnail": "https://yt3.ggpht.com/ytc/AAUvwnjQnNB1hH0F3mVszWY50k8SFgqnZwvrxm8dNpZRsA=s240-c-k-c0x00ffffff-no-rj",
            "createdAt": "2021-09-15T04:59:11.444000Z",
            "lastUpdatedAt": "2022-10-14T05:32:37.031000Z",
            "belongsWithMCN": "deb39fac-d8ac-4818-a731-939ec2b74270",
            "owner": "af36e604-48f7-49f6-88a1-af5198f9b71d",
            "channelCategory": "397dd6d9-8d93-4d6b-9d26-482d93b54b0a",
            "nation": "KR",
            "showAtYouha": true,
            "status": "verified",
            "tags": [],
            "uploadsPlaylistId": "UUe14230e7-9e9b-4d55-a38b-b9f6ac9be812",
            "subscriberCount": 16500,
            "viewCount": 194021,
            "lastRank": null,
            "lastRankInCategory": null,
            "currency": "KRW",
            "commercialCases": null,
            "isContactable": true,
            "averageCommercialViewCount": null,
            "standardCommercialPrice": 25000000,
            "priceVerified": false,
            "CPV": null,
            "preferenceRatioOfCommercials": null,
            "genderRatioInThread": null,
            "majorAgeInThread": null
        },
        "detail": "연애 경험치가 부족한 남성을 위한 연애 콘텐츠 \n이상형을 의뢰 받아 연애 경험치를 채워주는 프로그램",
        "minPrice": 20000000,
        "brandedPrice": 20000000,
        "pplPrice": null,
        "brandedPriceOrigin": 25000000,
        "pplPriceOrigin": 0,
        "contentGenre": "연애 리얼리티 웹 예능",
        "contentDuration": "20분 내외",
        "commercialType": [
            "branded"
        ],
        "commercialDuration": null,
        "favoredAdvertiserType": null,
        "fundingRequestCount": 2,
        "createdAt": "2022-09-06T05:43:00.000Z",
        "brandCategories": [
            "liquor",
            "food",
            "beverage",
            "fashion",
            "entertainment"
        ],
        "currentHosts": [],
        "currentGuests": [],
        "pastHosts": [],
        "pastGuests": [],
        "relatedVideoIds": [
            "vTwnT3_dnbU",
            "MoP5GFsGXbA",
            "_20X4jr2rMQ",
            "OrUS-R3nvMY",
            "GlkEeYW4GUU",
            "VEqdmHMrPz4",
            "lTaafBR7Quw",
            "qnlcijGyZiE"
        ],
        "releaseAt": "펀딩일로 부터 4주 뒤, 매주 수요일",
        "rectangleThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Fb5f76e0d-a924-4d8b-95ba-d4d37e682f0d%2Fyouha-fastbooking_project_thumbnail-rectangle-03.png",
        "relatedVideos": [
            {
                "id": "vTwnT3_dnbU",
                "publishedAt": "2022-04-27T11:00:28Z",
                "title": "교복은 처음입니다",
                "thumbnail": "https://i.ytimg.com/vi/vTwnT3_dnbU/mqdefault.jpg",
                "viewCount": 501546
            },
            {
                "id": "MoP5GFsGXbA",
                "publishedAt": "2022-04-13T11:00:11Z",
                "title": "하려고 렌탈했습니다",
                "thumbnail": "https://i.ytimg.com/vi/MoP5GFsGXbA/mqdefault.jpg",
                "viewCount": 415156
            },
            {
                "id": "_20X4jr2rMQ",
                "publishedAt": "2022-03-30T11:00:29Z",
                "title": "하고 싶습니다. 제 이상형은 마른 글래머입니다",
                "thumbnail": "https://i.ytimg.com/vi/_20X4jr2rMQ/mqdefault.jpg",
                "viewCount": 918483
            },
            {
                "id": "OrUS-R3nvMY",
                "publishedAt": "2022-05-11T11:00:22Z",
                "title": "인간 남친 렌탈하다",
                "thumbnail": "https://i.ytimg.com/vi/OrUS-R3nvMY/mqdefault.jpg",
                "viewCount": 508431
            },
            {
                "id": "GlkEeYW4GUU",
                "publishedAt": "2022-05-25T11:00:12Z",
                "title": "품절남이 되어버린 1화 출연자 | 렌탈친구 후기",
                "thumbnail": "https://i.ytimg.com/vi/GlkEeYW4GUU/mqdefault.jpg",
                "viewCount": 254712
            },
            {
                "id": "VEqdmHMrPz4",
                "publishedAt": "2022-06-01T11:00:17Z",
                "title": "29살까지 못 해본 남자",
                "thumbnail": "https://i.ytimg.com/vi/VEqdmHMrPz4/mqdefault.jpg",
                "viewCount": 531681
            },
            {
                "id": "qnlcijGyZiE",
                "publishedAt": "2022-07-20T11:00:37Z",
                "title": "이상형은 설현입니다",
                "thumbnail": "https://i.ytimg.com/vi/qnlcijGyZiE/mqdefault.jpg",
                "viewCount": 239963
            }
        ]
    },
    {
        "id": "cf53aec1-b012-4688-a629-5d2e474c0370",
        "title": "인생 그래프 그리기",
        "status": "open",
        "cover": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F45c73919-e1cb-447c-b97e-df0074291849%2Fyouha-fastbooking_project_thumbnail-rectangle-04.png",
        "squareThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Fccbe1ea0-837d-467b-aab2-4fe56e6584e8%2Fyouha-fastbooking_project_thumbnail-square-04.png",
        "youtubeChannel": {
            "id": "6f62d61f-eb15-4a8b-a697-578555426add",
            "youtubeChannelId": "UCOVtwrWmXPB7Q35RB_RZ1Ew",
            "title": "키즐 kizzle",
            "descriptionOnYoutube": "사회의 다양한 시선\nDifferent Perspectives of Society\n\n",
            "descriptionOnYouha": "",
            "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu-gJhDVdhEFfQJnIU5w1-rz7TyP08sYA1MWtGVpLg=s240-c-k-c0x00ffffff-no-rj",
            "createdAt": "2020-01-30T04:30:27.910000Z",
            "lastUpdatedAt": "2022-10-12T01:05:52.823000Z",
            "belongsWithMCN": "deb39fac-d8ac-4818-a731-939ec2b74270",
            "owner": null,
            "channelCategory": "ec634c84-2e6c-4609-8754-d4fc69cdfc1f",
            "nation": "KR",
            "showAtYouha": true,
            "status": "verified",
            "tags": [],
            "uploadsPlaylistId": "UUOVtwrWmXPB7Q35RB_RZ1Ew",
            "subscriberCount": 1130000,
            "viewCount": 323077877,
            "lastRank": 237,
            "lastRankInCategory": 53,
            "currency": "KRW",
            "commercialCases": null,
            "isContactable": false,
            "averageCommercialViewCount": 334334,
            "standardCommercialPrice": 45000000,
            "priceVerified": false,
            "CPV": null,
            "preferenceRatioOfCommercials": 0.3115205349854921,
            "genderRatioInThread": 0.609,
            "majorAgeInThread": 20
        },
        "detail": "연예인과 어린이의 순수한 만남\n연예인이 직접 어린이에게 털어놓는 과거부터 현재까지 겪은 즐거웠던, 힘들었던 이야기들",
        "minPrice": 30000000,
        "brandedPrice": 35000000,
        "pplPrice": 30000000,
        "brandedPriceOrigin": 45000000,
        "pplPriceOrigin": 35000000,
        "contentGenre": "스튜디오 1:1 힐링 토크",
        "contentDuration": "8~10분 내외",
        "commercialType": [
            "branded",
            "basic-PPL"
        ],
        "commercialDuration": null,
        "favoredAdvertiserType": null,
        "fundingRequestCount": 1,
        "createdAt": "2022-09-06T05:43:00.000Z",
        "brandCategories": [
            "healthcare",
            "diet",
            "beverage",
            "food",
            "entertainment",
            "it"
        ],
        "currentHosts": [],
        "currentGuests": [],
        "pastHosts": [],
        "pastGuests": [
            "9a3d7452-1b3f-42bd-b983-ad51b8dec322",
            "e5e88227-412c-47b1-99e2-892d451607e1"
        ],
        "relatedVideoIds": [
            "0WuYvCdcWiY",
            "FThaohsOXY8"
        ],
        "releaseAt": "2022년 하반기 중 순차공개",
        "rectangleThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Fb149b484-2a74-4d17-9ad0-87cc80fdaa0d%2Fyouha-fastbooking_project_thumbnail-rectangle-04.png",
        "relatedVideos": [
            {
                "id": "0WuYvCdcWiY",
                "publishedAt": "2021-07-08T11:01:52Z",
                "title": "아이에게 전소연 설명하기 | Studio Kizzle",
                "thumbnail": "https://i.ytimg.com/vi/0WuYvCdcWiY/mqdefault.jpg",
                "viewCount": 926032
            },
            {
                "id": "FThaohsOXY8",
                "publishedAt": "2022-01-21T11:00:08Z",
                "title": "14년도 데뷔 가수를 만난 14년생 (feat. 휘인) | Studio Kizzle",
                "thumbnail": "https://i.ytimg.com/vi/FThaohsOXY8/mqdefault.jpg",
                "viewCount": 581001
            }
        ]
    },
    {
        "id": "923a42d2-1db9-4654-b2bf-629be09b210c",
        "title": "군벤져스",
        "status": "open",
        "cover": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F15a2fb12-f08c-4b23-b8b6-cda15327e4de%2Fyouha-fastbooking_project_thumbnail-rectangle-05.png",
        "squareThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F749f56b0-da68-4e82-89aa-5d180146b84e%2Fyouha-fastbooking_project_thumbnail-square-05.png",
        "youtubeChannel": {
            "id": "4f4f98b5-05ea-49a3-a366-fd6ee1644c6a",
            "youtubeChannelId": "UCoCvTlU0KpNYwnMIgs7MPrA",
            "title": "BODA 보다",
            "descriptionOnYoutube": "누구나, 쉽게, 재밌게 볼 수 있는 영상\n\n색다른 직업, 유익한 지식, 자신만의 이야기를 가지신 분의 연락을 기다리겠습니다. \n여러분들의 이야기로 유익한 영상을 만들겠습니다!\n\n제작 : 어썸엔터테인먼트 (주)\n광고/인터뷰 문의 : boooda.kr@gmail.com\n\n쉽게, 재밌게 볼수있는 영상을 BODA\n",
            "descriptionOnYouha": "",
            "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_ZqlTABIBL-z855n83WH3AIkcaLcU3UtRWn-pvOA=s240-c-k-c0x00ffffff-no-rj",
            "createdAt": "2019-05-29T01:41:43.757000Z",
            "lastUpdatedAt": "2022-10-12T01:07:08.679000Z",
            "belongsWithMCN": null,
            "owner": null,
            "channelCategory": "62cf35e6-13eb-4a0b-8678-1f04b9b7238c",
            "nation": "KR",
            "showAtYouha": true,
            "status": "verified",
            "tags": [],
            "uploadsPlaylistId": "UUoCvTlU0KpNYwnMIgs7MPrA",
            "subscriberCount": 962000,
            "viewCount": 539691103,
            "lastRank": 242,
            "lastRankInCategory": 49,
            "currency": "KRW",
            "commercialCases": null,
            "isContactable": true,
            "averageCommercialViewCount": 209732,
            "standardCommercialPrice": 25000000,
            "priceVerified": false,
            "CPV": null,
            "preferenceRatioOfCommercials": 0.09974139910487201,
            "genderRatioInThread": 0.35,
            "majorAgeInThread": 40
        },
        "detail": "남자들의 향수를 자극하는 본격 리얼 밀리터리 토크쇼 ‘군벤져스’",
        "minPrice": 10000000,
        "brandedPrice": 20000000,
        "pplPrice": 10000000,
        "brandedPriceOrigin": 25000000,
        "pplPriceOrigin": 12500000,
        "contentGenre": "토크, 예능, 밀리터리",
        "contentDuration": "15~20분 내외",
        "commercialType": [
            "branded",
            "basic-PPL"
        ],
        "commercialDuration": null,
        "favoredAdvertiserType": null,
        "fundingRequestCount": 1,
        "createdAt": "2022-09-06T05:43:00.000Z",
        "brandCategories": [
            "movie-drama-production",
            "webtoon-animation",
            "publisher",
            "it",
            "beverage",
            "food"
        ],
        "currentHosts": [
            "7ac570b9-9eef-4f0e-adde-b015ac776904",
            "6a5fbf07-4b0d-4831-93c6-05d8ed1fe6bf"
        ],
        "currentGuests": [
            "9bb79fa7-4a1c-4275-8963-3b4546feb8d3",
            "6a5fbf07-4b0d-4831-93c6-05d8ed1fe6bf"
        ],
        "pastHosts": [
            "4e9fc584-c392-43a0-a46a-1c29ff005b8d"
        ],
        "pastGuests": [
            "4e9fc584-c392-43a0-a46a-1c29ff005b8d",
            "1e173c28-966f-4cfa-bac6-39dd09a4c900"
        ],
        "relatedVideoIds": [
            "r6JoVrZWjCg",
            "Pf4DKUcDyJE",
            "k8IkaigP9J0",
            "Mi3k71Dy1BM",
            "j3OsvWOm25k",
            "Ymv5_w_RVQY",
            "UMjtiX74KcI",
            "CGMPwx05MoY"
        ],
        "releaseAt": "2022.09.17",
        "rectangleThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Fcaeb68e3-ef2a-42f6-87fe-70161dfcca77%2Fyouha-fastbooking_project_thumbnail-rectangle-05.png",
        "relatedVideos": [
            {
                "id": "r6JoVrZWjCg",
                "publishedAt": "2022-04-09T03:00:16Z",
                "title": "\"군대에서 욕 한 번도 안 했습니다\" 군대 허언증 모음 (★★사단장, 러셀, 김상호, 효자손)",
                "thumbnail": "https://i.ytimg.com/vi/r6JoVrZWjCg/mqdefault.jpg",
                "viewCount": 567341
            },
            {
                "id": "Pf4DKUcDyJE",
                "publishedAt": "2022-04-13T10:00:13Z",
                "title": "재입대한다는 사단장님 ㅋㅋㅣ군대 밸런스 게임 (★★사단장, 러셀, 김상호, 효자손)",
                "thumbnail": "https://i.ytimg.com/vi/Pf4DKUcDyJE/mqdefault.jpg",
                "viewCount": 488907
            },
            {
                "id": "k8IkaigP9J0",
                "publishedAt": "2022-04-15T10:23:33Z",
                "title": "유튜브 하려고 전역하는 군인들? (★★사단장 고성균, 러셀, 김상호, 효자손) ㅣ알쓸군잡 1부",
                "thumbnail": "https://i.ytimg.com/vi/k8IkaigP9J0/mqdefault.jpg",
                "viewCount": 213445
            },
            {
                "id": "Mi3k71Dy1BM",
                "publishedAt": "2022-04-19T09:54:27Z",
                "title": "★★★★참모총장에게 반말한 대대장의 결말ㄷㄷ (고성균, 러셀, 김상호, 효자손) ㅣ알쓸군잡 2부",
                "thumbnail": "https://i.ytimg.com/vi/Mi3k71Dy1BM/mqdefault.jpg",
                "viewCount": 961812
            },
            {
                "id": "j3OsvWOm25k",
                "publishedAt": "2022-04-24T02:00:06Z",
                "title": "군대에서 의외로 많이 볼 수 있다는 유형 ㅋㅋ(고성균, 러셀, 김상호, 효자손)ㅣ알쓸군잡 3부",
                "thumbnail": "https://i.ytimg.com/vi/j3OsvWOm25k/mqdefault.jpg",
                "viewCount": 642511
            },
            {
                "id": "Ymv5_w_RVQY",
                "publishedAt": "2022-06-13T11:52:22Z",
                "title": "★★사단장도 못믿는 레전드 군대 썰 ㄷㄷ  (오킹,★★고성균,김상호,강철부대 정성훈)",
                "thumbnail": "https://i.ytimg.com/vi/Ymv5_w_RVQY/mqdefault.jpg",
                "viewCount": 1187123
            },
            {
                "id": "UMjtiX74KcI",
                "publishedAt": "2022-06-16T11:00:43Z",
                "title": "군필자가 보면 소름돋는 전쟁직전 실제상황 ㄷㄷ (오킹,★★고성균,김상호,강철부대 정성훈)",
                "thumbnail": "https://i.ytimg.com/vi/UMjtiX74KcI/mqdefault.jpg",
                "viewCount": 865783
            },
            {
                "id": "CGMPwx05MoY",
                "publishedAt": "2022-06-23T09:30:04Z",
                "title": "★★사단장도 인정하는 군대 계급별 특징 (오킹, 고성균, 김상호, 정성훈)",
                "thumbnail": "https://i.ytimg.com/vi/CGMPwx05MoY/mqdefault.jpg",
                "viewCount": 632589
            }
        ]
    },
    {
        "id": "e6eb1f5b-fc85-43e4-807d-bc2e34d3e033",
        "title": "러브퐁",
        "status": "open",
        "cover": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F054c3da9-b50c-4850-9d81-95cf27cabcf5%2Fyouha-fastbooking_project_thumbnail-rectangle-06.png",
        "squareThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F8c692c21-6478-4af2-818e-7a245f241d9f%2Fyouha-fastbooking_project_thumbnail-square-06.png",
        "youtubeChannel": {
            "id": "55ae31b3-8f75-47a3-8908-742c97782a9b",
            "youtubeChannelId": "UCqshHEVBj0HtH9wF8Y_Hdqw",
            "title": "비행시간 AirplaneTime",
            "descriptionOnYoutube": "사랑에 대한 모든 이야기.\nAll the stories of love\n\n🔔 비행시간 (Airplane Time)🔔\n\n🛫비행시간은 매주 화, 토 8시 업로드 됩니다 :)\n🛫The 'airplane time' video is uploaded every Tuesday and Saturday at 8 p.m. :)\n\n비지니스 문의 : playtown808@gmail.com",
            "descriptionOnYouha": "",
            "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_n55Ai4WyUm0MJmv8cwta57dtg0X3K8IjJADBWfg=s240-c-k-c0x00ffffff-no-rj",
            "createdAt": "2020-04-10T09:40:48.064000Z",
            "lastUpdatedAt": "2022-10-12T01:06:36.823000Z",
            "belongsWithMCN": null,
            "owner": null,
            "channelCategory": "07b4b043-b893-4644-a8da-e8c08deea599",
            "nation": "KR",
            "showAtYouha": true,
            "status": "verified",
            "tags": [],
            "uploadsPlaylistId": "UUqshHEVBj0HtH9wF8Y_Hdqw",
            "subscriberCount": 1230000,
            "viewCount": 320415076,
            "lastRank": 215,
            "lastRankInCategory": 4,
            "currency": "KRW",
            "commercialCases": null,
            "isContactable": true,
            "averageCommercialViewCount": 293990,
            "standardCommercialPrice": 30000000,
            "priceVerified": false,
            "CPV": null,
            "preferenceRatioOfCommercials": 0.2546568991497453,
            "genderRatioInThread": 0.769,
            "majorAgeInThread": 20
        },
        "detail": "사랑에 대한 모든 이야기, 짐승남 섹시녀의 비어퐁 소개팅\n비어퐁 게임을 테마로한 자극적이고 알딸딸한 어른들의 소개팅",
        "minPrice": 20000000,
        "brandedPrice": 25000000,
        "pplPrice": 20000000,
        "brandedPriceOrigin": 30000000,
        "pplPriceOrigin": 25000000,
        "contentGenre": "게임형 소개팅 관찰 예능",
        "contentDuration": "6~8분 내외",
        "commercialType": [
            "branded",
            "basic-PPL"
        ],
        "commercialDuration": null,
        "favoredAdvertiserType": null,
        "fundingRequestCount": 1,
        "createdAt": "2022-09-06T05:43:00.000Z",
        "brandCategories": [
            "fashion",
            "beauty",
            "food",
            "restaurant",
            "diet",
            "beverage",
            "game",
            "it"
        ],
        "currentHosts": [],
        "currentGuests": [],
        "pastHosts": [],
        "pastGuests": [],
        "relatedVideoIds": [
            "ziw6K_RXr8M",
            "2ecM5D08j8A",
            "ea1hKOo3Yoo",
            "MOj1JnIdm-U"
        ],
        "releaseAt": "2022 하반기 중 순차 공개",
        "rectangleThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F1fd82d4f-9b1e-4fcf-b20c-1712d0ef644f%2Fyouha-fastbooking_project_thumbnail-rectangle-06.png",
        "relatedVideos": [
            {
                "id": "ziw6K_RXr8M",
                "publishedAt": "2021-11-09T11:00:23Z",
                "title": "벗기는 소개팅 | 러브퐁 (love pong)",
                "thumbnail": "https://i.ytimg.com/vi/ziw6K_RXr8M/mqdefault.jpg",
                "viewCount": 1656442
            },
            {
                "id": "2ecM5D08j8A",
                "publishedAt": "2022-03-19T11:00:01Z",
                "title": "술 마시면서 하는 소개팅 | 러브퐁 (love pong)",
                "thumbnail": "https://i.ytimg.com/vi/2ecM5D08j8A/mqdefault.jpg",
                "viewCount": 1304971
            },
            {
                "id": "ea1hKOo3Yoo",
                "publishedAt": "2022-03-26T11:00:31Z",
                "title": "만지는 소개팅  | 러브퐁 (love pong)",
                "thumbnail": "https://i.ytimg.com/vi/ea1hKOo3Yoo/mqdefault.jpg",
                "viewCount": 6610945
            },
            {
                "id": "MOj1JnIdm-U",
                "publishedAt": "2022-09-13T11:00:10Z",
                "title": "벗어서 보여주는 소개팅",
                "thumbnail": "https://i.ytimg.com/vi/MOj1JnIdm-U/mqdefault.jpg",
                "viewCount": 2362756
            }
        ]
    },
    {
        "id": "2b5793c7-1a72-4ebc-b61b-712b384dae98",
        "title": "코스프레 ASMR 먹방",
        "status": "open",
        "cover": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F30368817-4b35-4406-84ee-56d52a3c0579%2Fyouha-fastbooking_project_thumbnail-rectangle-07.png",
        "squareThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Fbd0ec362-0cb7-4314-8903-f3325e6399e5%2Fyouha-fastbooking_project_thumbnail-square-07.png",
        "youtubeChannel": {
            "id": "d9334d0c-d919-4a7c-8f88-cdf570535319",
            "youtubeChannelId": "UC4PpFUrfT2Pou7OwpVF0MUQ",
            "title": "쏘영 Ssoyoung",
            "descriptionOnYoutube": "Hello, I'm Ssoyoung!\n\nPlease give us lots of love and support!\n‘Subscription’, ‘Like’, and ‘Comment’ are love.♡\nI will play the real sound of eating all kinds of food.\n\n안녕하세요 쏘영 Ssoyoung입니다!\n\n많은 관심과 사랑 부탁드려요!\n구독과 좋아요, 댓글은 사랑입니다♡\n\n먹방 인스타그램(Mukbang Instagram)  @ssoyoung_Mukbang\n일상 인스타그램(Daily Life Instagram) @ssoyoung6497\n틱톡(Tiktok)@ssoyoungmukbang\n\n콜라보, 협찬 등 비즈니스 문의는 아래 메일로 보내주세요\nssoyoung@alohamedia.co.kr\n\nFor global business inquiries:\nssoyoung@alohamedia.co.kr\n",
            "descriptionOnYouha": "",
            "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu9Zi4wl9Xjrvx1i0Ad9jjinD878gx-442z8b6x4ww=s240-c-k-c0x00ffffff-no-rj",
            "createdAt": "2019-04-12T08:01:32.696000Z",
            "lastUpdatedAt": "2022-10-12T01:06:51.440000Z",
            "belongsWithMCN": null,
            "owner": null,
            "channelCategory": "397dd6d9-8d93-4d6b-9d26-482d93b54b0a",
            "nation": "KR",
            "showAtYouha": true,
            "status": "verified",
            "tags": [],
            "uploadsPlaylistId": "UU4PpFUrfT2Pou7OwpVF0MUQ",
            "subscriberCount": 8790000,
            "viewCount": 1140073208,
            "lastRank": 16,
            "lastRankInCategory": 3,
            "currency": "KRW",
            "commercialCases": null,
            "isContactable": true,
            "averageCommercialViewCount": 688088,
            "standardCommercialPrice": 30000000,
            "priceVerified": false,
            "CPV": null,
            "preferenceRatioOfCommercials": 0.2739504647589356,
            "genderRatioInThread": 0.867,
            "majorAgeInThread": 20
        },
        "detail": "요즘 핫한 영화/드라마 등장인물을 쏘영이가 코스프레한 후\n어울리는 음식을 ASMR 먹방으로 즐겨요!",
        "minPrice": 20000000,
        "brandedPrice": 20000000,
        "pplPrice": null,
        "brandedPriceOrigin": 30000000,
        "pplPriceOrigin": 0,
        "contentGenre": "ASMR 먹방",
        "contentDuration": "8 ~ 10분",
        "commercialType": [
            "branded"
        ],
        "commercialDuration": null,
        "favoredAdvertiserType": null,
        "fundingRequestCount": 0,
        "createdAt": "2022-09-06T05:43:00.000Z",
        "brandCategories": [
            "bank",
            "stock",
            "credit-card",
            "finance",
            "investment",
            "public-office"
        ],
        "currentHosts": [],
        "currentGuests": [],
        "pastHosts": [],
        "pastGuests": [],
        "relatedVideoIds": [
            "S-MyVA3SqXI",
            "Z86Gby-ntkE",
            "nWrVHrgNTY",
            "UypLrMmPQuU",
            "Cda1qJCYyG8",
            "sX2WuV3fwUQ",
            "ILIFqml-2x8",
            "MmMtqNIzmjg",
            "xzLDtVye8nI"
        ],
        "releaseAt": "펀딩일 기준 한달 뒤 업로드 가능",
        "rectangleThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F150055ed-1f05-4e27-a8ae-8f3deb98f9fa%2Fyouha-fastbooking_project_thumbnail-rectangle-07.png",
        "relatedVideos": [
            {
                "id": "S-MyVA3SqXI",
                "publishedAt": "2020-07-25T09:30:05Z",
                "title": "[Mukbang] 방망이🏏와 총🔫먹는 배고픈 할리퀸 EDIBLE GOODS Mukbang EATINGSOUNDS SSOYOUNG",
                "thumbnail": "https://i.ytimg.com/vi/S-MyVA3SqXI/mqdefault.jpg",
                "viewCount": 1100307
            },
            {
                "id": "Z86Gby-ntkE",
                "publishedAt": "2020-07-22T10:00:33Z",
                "title": "[Mukbang] 배고파서 타이어를 먹었습니다😂카센타 먹방 I ate tires😂Car repair shop mukbang ASMR eatingshow Ssoyoung",
                "thumbnail": "https://i.ytimg.com/vi/Z86Gby-ntkE/mqdefault.jpg",
                "viewCount": 701915
            },
            {
                "id": "UypLrMmPQuU",
                "publishedAt": "2020-12-23T10:00:07Z",
                "title": "[Mukbang ASMR] 구미호🦊가 떡볶이를 먹는다고?! Spicy Tteokbokki(Korean Spicy Rice Cakes) Eatingshow Ssoyoung",
                "thumbnail": "https://i.ytimg.com/vi/UypLrMmPQuU/mqdefault.jpg",
                "viewCount": 514187
            },
            {
                "id": "Cda1qJCYyG8",
                "publishedAt": "2020-12-24T10:00:02Z",
                "title": "[Mukbang ASMR] Merry Christmas ❣ 랍스터스테이크 트리케이크🦞Lobster+Steak+Christmas tree CAKE🎄Eatingshow Ssoyoung",
                "thumbnail": "https://i.ytimg.com/vi/Cda1qJCYyG8/mqdefault.jpg",
                "viewCount": 391835
            },
            {
                "id": "sX2WuV3fwUQ",
                "publishedAt": "2019-07-17T11:00:11Z",
                "title": "[Mukbang ASMR] 구미호가 돼지 통 족발🐷(Whole Pigs Feet)를 먹는다면? | Eating Sounds [Ssoyoung 쏘영 ASMR]",
                "thumbnail": "https://i.ytimg.com/vi/sX2WuV3fwUQ/mqdefault.jpg",
                "viewCount": 308499
            },
            {
                "id": "ILIFqml-2x8",
                "publishedAt": "2019-08-12T09:39:20Z",
                "title": "[Mukbang ASMR] 베트남 쌀국수🍜 (Rice Noodles)+짜조, 월남쌈까지~  리얼사운드먹방 | Eating show Ssoyoung 쏘영",
                "thumbnail": "https://i.ytimg.com/vi/ILIFqml-2x8/mqdefault.jpg",
                "viewCount": 286740
            },
            {
                "id": "MmMtqNIzmjg",
                "publishedAt": "2019-07-03T11:00:06Z",
                "title": "[Mukbang ASMR] 🦊구미호가 짜장면을 먹는다면? (Black Bean Noodles Mukbang)  | Eating Sounds [Ssoyoung 쏘영 ASMR]",
                "thumbnail": "https://i.ytimg.com/vi/MmMtqNIzmjg/mqdefault.jpg",
                "viewCount": 195751
            },
            {
                "id": "xzLDtVye8nI",
                "publishedAt": "2019-06-15T08:00:04Z",
                "title": "[Mukbang ASMR] 알라딘(Aladdin)자스민공주가 사과🍎(Apple) 먹방 ASMR을? | Eating Sounds먹방 [Ssoyoung 쏘영 ASMR]",
                "thumbnail": "https://i.ytimg.com/vi/xzLDtVye8nI/mqdefault.jpg",
                "viewCount": 170992
            }
        ]
    },
    {
        "id": "1cb1bee7-7c3c-4205-b858-f08a9dbb3995",
        "title": "동네스타K 시즌2",
        "status": "open",
        "cover": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Fc67e83fc-d693-4fd3-af6c-cb577c8979c3%2Fyouha-fastbooking_project_thumbnail-rectangle-08.png",
        "squareThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F9a18d301-9b27-4439-8acb-a43052e88b3b%2Fyouha-fastbooking_project_thumbnail-square-08.png",
        "youtubeChannel": {
            "id": "2c0da159-b70e-4279-95f1-309f24b6ecdc",
            "youtubeChannelId": "UCWYzc_p0GgfCepIWDHGFmEg",
            "title": "디글 :Diggle",
            "descriptionOnYoutube": "방송국놈들이 덕질하는 채널\n\nwe’re :DIGGLE family\n",
            "descriptionOnYouha": "",
            "thumbnail": "https://yt3.ggpht.com/rl3snx0_-uMp17TAeRBA2OmCGUR8nLkIsOqfdFs_HtVcYraPo3rAzZXuP9KvDJBYhpjZbHmXcg=s240-c-k-c0x00ffffff-no-rj",
            "createdAt": "2020-04-16T15:00:06.641000Z",
            "lastUpdatedAt": "2022-10-12T01:06:05.264000Z",
            "belongsWithMCN": null,
            "owner": null,
            "channelCategory": "313204b4-69d5-4484-83df-8ceef2807fc7",
            "nation": "KR",
            "showAtYouha": true,
            "status": "ready-to-work",
            "tags": [],
            "uploadsPlaylistId": "UUWYzc_p0GgfCepIWDHGFmEg",
            "subscriberCount": 1990000,
            "viewCount": 4809096839,
            "lastRank": null,
            "lastRankInCategory": null,
            "currency": "KRW",
            "commercialCases": null,
            "isContactable": false,
            "averageCommercialViewCount": 157814,
            "standardCommercialPrice": 60000000,
            "priceVerified": false,
            "CPV": null,
            "preferenceRatioOfCommercials": 0.10199991306213535,
            "genderRatioInThread": 0.3142857142857143,
            "majorAgeInThread": 40
        },
        "detail": "K-팝을 사랑하는 K-콩고왕자 조나단\n유튜브, 틱톡 등에서 인기몰이 중인 mz 대표 스타들과 근황, 인터뷰를 하며 함께 K-팝을 부른다.\n스트레스를 노래하라, 동네스타K!",
        "minPrice": 30000000,
        "brandedPrice": 50000000,
        "pplPrice": 30000000,
        "brandedPriceOrigin": 60000000,
        "pplPriceOrigin": 40000000,
        "contentGenre": "예능",
        "contentDuration": "15분 내외",
        "commercialType": [
            "branded",
            "basic-PPL"
        ],
        "commercialDuration": null,
        "favoredAdvertiserType": null,
        "fundingRequestCount": 0,
        "createdAt": "2022-09-06T05:43:00.000Z",
        "brandCategories": [
            "food",
            "beverage",
            "restaurant",
            "fashion"
        ],
        "currentHosts": [
            "77e61ccb-f3c2-41c8-b6fe-2d5122c45290"
        ],
        "currentGuests": [],
        "pastHosts": [],
        "pastGuests": [
            "948e5b82-4303-4f20-aedb-06cea65ea91e",
            "9bb79fa7-4a1c-4275-8963-3b4546feb8d3",
            "d9be4290-d816-4f11-a535-8235c8d7c76f",
            "e61d759b-8836-44f2-81bf-0085726e55d2",
            "d6d5c3ac-6726-4763-a4d4-3b6b8436b5c2",
            "637f54b6-bc5e-4b3f-8d4d-879258b7f6ac"
        ],
        "relatedVideoIds": [
            "oqE_AClwQ38",
            "XEky-W_t2fs",
            "D9yR-_KfGwo",
            "ECA7i4HJaxI",
            "1FYNlQ0UBIM",
            "RBdI93zdFnc",
            "3RuPAi9b0p8",
            "WhT_Ov-enLw",
            "oGh6iOEPbmo",
            "nNsxuc7zn1w",
            "sLQGNQsTBqo",
            "KJJeaI9_EiA",
            "n7LBoQWExDE",
            "e54q4YIB84s",
            "qKPXzSNUBA4"
        ],
        "releaseAt": "2022.09.17",
        "rectangleThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F65b04be6-c9b5-47d5-b41f-ac36e1ec306f%2Fyouha-fastbooking_project_thumbnail-rectangle-08.png",
        "relatedVideos": [
            {
                "id": "oqE_AClwQ38",
                "publishedAt": "2022-03-12T11:00:23Z",
                "title": "조나단이 찾은 첫 번째 스타⭐ 유튜브 생태계의 악뮤, 조나단X파트리샤 K-남매의 찐 불협화음 | 동네스타K EP.0",
                "thumbnail": "https://i.ytimg.com/vi/oqE_AClwQ38/mqdefault.jpg",
                "viewCount": 1136103
            },
            {
                "id": "XEky-W_t2fs",
                "publishedAt": "2022-03-19T11:00:27Z",
                "title": "현실고증 120% 숏박스 장기연애 커플한테 K-트림했다가 후두려 맞는 조나단 ㅋㅋ (ft. 엄지윤 노래) | 동네스타K EP.1",
                "thumbnail": "https://i.ytimg.com/vi/XEky-W_t2fs/mqdefault.jpg",
                "viewCount": 2045672
            },
            {
                "id": "D9yR-_KfGwo",
                "publishedAt": "2022-03-26T11:00:05Z",
                "title": "[ENG] \"내가 이 노래방에서 제일 불행한 놈이다!!!\" 지금 우리 학교는 K-좀비 윤찬영과 조나단 | 동네스타K EP.2",
                "thumbnail": "https://i.ytimg.com/vi/D9yR-_KfGwo/mqdefault.jpg",
                "viewCount": 567871
            },
            {
                "id": "ECA7i4HJaxI",
                "publishedAt": "2022-04-02T11:00:06Z",
                "title": "유튜버 아니었으면 이 XX 안했다는 일주어터의 다이어트 꿀팁ㅋㅋㅋ | 동네스타K EP.3",
                "thumbnail": "https://i.ytimg.com/vi/ECA7i4HJaxI/mqdefault.jpg",
                "viewCount": 300332
            },
            {
                "id": "1FYNlQ0UBIM",
                "publishedAt": "2022-04-09T11:00:01Z",
                "title": "Real 폐급 군인 문상훈의 조나단 군대 생활 꿀팁ㅋㅋㅋ (ft. 우영우, 펭수) | 동네스타K EP.4",
                "thumbnail": "https://i.ytimg.com/vi/1FYNlQ0UBIM/mqdefault.jpg",
                "viewCount": 895041
            },
            {
                "id": "RBdI93zdFnc",
                "publishedAt": "2022-04-16T11:00:11Z",
                "title": "조나단을 조종하는 흑마법사 김용명ㅋㅋㅋㅋㅋ 틱톡짤과 노래부터 사투리까지 | 동네스타K EP.5",
                "thumbnail": "https://i.ytimg.com/vi/RBdI93zdFnc/mqdefault.jpg",
                "viewCount": 1004416
            },
            {
                "id": "3RuPAi9b0p8",
                "publishedAt": "2022-04-23T11:00:02Z",
                "title": "알고리즘의 간택! 유튜브 여신 빵떡 오늘 탈탈 털리고 감ㅋㅋㅋ (What's the loss to 먀↗) | 동네스타K EP.6",
                "thumbnail": "https://i.ytimg.com/vi/3RuPAi9b0p8/mqdefault.jpg",
                "viewCount": 1374533
            },
            {
                "id": "WhT_Ov-enLw",
                "publishedAt": "2022-04-30T11:00:14Z",
                "title": "귀화 준비생 조나단의 노래방에 귀화 선배 일리야 등판🌟 K-패치 완료된 대한러시안 일리야가 정의해주는 하남자특ㅋㅋㅋ | 동네스타K EP.7",
                "thumbnail": "https://i.ytimg.com/vi/WhT_Ov-enLw/mqdefault.jpg",
                "viewCount": 288015
            },
            {
                "id": "oGh6iOEPbmo",
                "publishedAt": "2022-05-07T11:00:16Z",
                "title": "[ENG] 비비지 밥밥 노래방 버전 라이브! K-노래방 퀸덤 왕관주인은 조나단? | 동네스타K EP.8",
                "thumbnail": "https://i.ytimg.com/vi/oGh6iOEPbmo/mqdefault.jpg",
                "viewCount": 610951
            },
            {
                "id": "nNsxuc7zn1w",
                "publishedAt": "2022-05-14T11:00:24Z",
                "title": "조나단 당황할 정도로 아슬아슬한 수위를 넘나드는 피알오 유튜버 코미꼬😎 알 유 레디 아미고🔥 | 동네스타K EP.9",
                "thumbnail": "https://i.ytimg.com/vi/nNsxuc7zn1w/mqdefault.jpg",
                "viewCount": 794805
            },
            {
                "id": "sLQGNQsTBqo",
                "publishedAt": "2022-05-21T11:00:33Z",
                "title": "존재가 Princess 어쩌면 공주병👑 미연 공주님의 동스케 행차! 조나단과 동성동본? | 동네스타K EP.10",
                "thumbnail": "https://i.ytimg.com/vi/sLQGNQsTBqo/mqdefault.jpg",
                "viewCount": 1663693
            },
            {
                "id": "KJJeaI9_EiA",
                "publishedAt": "2022-05-28T11:00:08Z",
                "title": "찐남매로 다시 찾아온 전설의 레전드 숏박스⭐ 조나단 전용 탈곡기💦 (ft.K-남매 파트리샤)  | 동네스타K EP.11",
                "thumbnail": "https://i.ytimg.com/vi/KJJeaI9_EiA/mqdefault.jpg",
                "viewCount": 1319014
            },
            {
                "id": "n7LBoQWExDE",
                "publishedAt": "2022-09-03T09:00:25Z",
                "title": "[#동네스타K2] 드디어 트와이스 오셨다✨ 한치의 양보없는 나연X모모X사나의 입담ㅋㅋㅋ(ft. 부승관) | EP.1",
                "thumbnail": "https://i.ytimg.com/vi/n7LBoQWExDE/mqdefault.jpg",
                "viewCount": 1393922
            },
            {
                "id": "e54q4YIB84s",
                "publishedAt": "2022-09-10T09:00:18Z",
                "title": "[#동네스타K2] K-일진 강유미한테 절대 안 지는 일진 연습생 조나단ㅋㅋㅋ (ft. 돌싱 브이로그) | EP.2",
                "thumbnail": "https://i.ytimg.com/vi/e54q4YIB84s/mqdefault.jpg",
                "viewCount": 498535
            },
            {
                "id": "qKPXzSNUBA4",
                "publishedAt": "2022-09-17T09:00:24Z",
                "title": "[#동네스타K2] 너 뭐 돼..?🤭 5평 원룸에서 트리마제 사는 레오제이의 저 세상 텐션ㅋㅋㅋ (ft.파트리샤 메이크업) l EP.3",
                "thumbnail": "https://i.ytimg.com/vi/qKPXzSNUBA4/mqdefault.jpg",
                "viewCount": 524916
            }
        ]
    },
    {
        "id": "559d793c-243a-4c49-9a96-f6ca6e14448b",
        "title": "스까묵자!",
        "status": "funding_closed",
        "cover": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Ff2a2eed0-7461-41dd-bc77-ff6f480c07ba%2Fyouha-fastbooking_project_thumbnail-rectangle-01.png",
        "squareThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F7d3a0350-1559-48ed-a471-972396975c10%2Fyouha-fastbooking_project_thumbnail-square-01.png",
        "youtubeChannel": {
            "id": "8535e5c6-00ac-4798-8a3d-8e5b8d066256",
            "youtubeChannelId": "UCmxDK1eWo-KvQQJ23p95XGw",
            "title": "스튜디오 룰루랄라 디랩 - SLLDLAB",
            "descriptionOnYoutube": "언제 어디서든 즐길 수 있는 공감 가득한 이야기! \n스튜디오 룰루랄라(Studio Lululala)가 SLLDLAB이라는 새로운 이름으로 시작합니다♥\n구독하면 일상이 꿀잼! \n\n익숙하지만 새로운 즐거움, SLLDLAB\n* 비즈니스 문의 : lululala.ad@jtbc.co.kr\n\nFun stories that is familiar but never met before!\nSet up a subscription + alarm and be the first to meet the contents of SLLDLAB ♥\n \n\n* Business Inquiry : lululala.ad@jtbc.co.kr",
            "descriptionOnYouha": "",
            "thumbnail": "https://yt3.ggpht.com/wdUEB-khycaoeRkmaHO93kCzj49Nabb1DeSWQ0cTKriQcfK_y5ww_Q_LseH34Kzvm2Lzs8J1=s240-c-k-c0x00ffffff-no-rj",
            "createdAt": "2019-04-12T08:01:39.142000Z",
            "lastUpdatedAt": "2022-10-18T10:05:23.641000Z",
            "belongsWithMCN": "deb39fac-d8ac-4818-a731-939ec2b74270",
            "owner": null,
            "channelCategory": "ec634c84-2e6c-4609-8754-d4fc69cdfc1f",
            "nation": "KR",
            "showAtYouha": true,
            "status": "verified",
            "tags": [],
            "uploadsPlaylistId": "UUmxDK1eWo-KvQQJ23p95XGw",
            "subscriberCount": 757000,
            "viewCount": 246263217,
            "lastRank": 374,
            "lastRankInCategory": 92,
            "currency": "KRW",
            "commercialCases": null,
            "isContactable": true,
            "averageCommercialViewCount": 230609,
            "standardCommercialPrice": 50000000,
            "priceVerified": false,
            "CPV": null,
            "preferenceRatioOfCommercials": 0.1649947139872494,
            "genderRatioInThread": 0.6859999999999999,
            "majorAgeInThread": 20
        },
        "detail": "맛있는 음식을 먹으며 우리 친해져요~🙂\n전혀 다른 두 캐릭터가 만나 친구가 되어 각자 취향에 맞춰 주어진 재료로 요리를 해준다.\n친구가 된다면 각자의 밥을 스까묵자!",
        "minPrice": 40000000,
        "brandedPrice": 40000000,
        "pplPrice": null,
        "brandedPriceOrigin": 50000000,
        "pplPriceOrigin": 25000000,
        "contentGenre": "토크인터뷰",
        "contentDuration": "미정",
        "commercialType": [
            "branded"
        ],
        "commercialDuration": null,
        "favoredAdvertiserType": null,
        "fundingRequestCount": 0,
        "createdAt": "2022-09-06T05:43:00.000Z",
        "brandCategories": [
            "fashion",
            "beauty",
            "beverage",
            "food",
            "diet",
            "music"
        ],
        "currentHosts": [],
        "currentGuests": [],
        "pastHosts": [],
        "pastGuests": [
            "1b1d988e-7e13-418d-9c11-bad2617825c4",
            "75c25984-0bb2-4957-9bae-4ad6c3b8a2ae"
        ],
        "relatedVideoIds": [
            "Q5TyrmaHg9Y"
        ],
        "releaseAt": null,
        "rectangleThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F330e9a58-efae-4bfc-b634-0ba2fb4090ca%2Fyouha-fastbooking_project_thumbnail-rectangle-01.png",
        "relatedVideos": [
            {
                "id": "Q5TyrmaHg9Y",
                "publishedAt": "2022-06-19T09:00:19Z",
                "title": "배도 오디오도 빌 틈 없음 🔥히밥X일주어터🔥 레전드 한~~~~~끼 먹방 가보자고!ㅣ스까묵자ㅣMUKBANG",
                "thumbnail": "https://i.ytimg.com/vi/Q5TyrmaHg9Y/mqdefault.jpg",
                "viewCount": 163849
            }
        ]
    },
    {
        "id": "eec5e527-f2ab-4637-ba97-cccbdc904057",
        "title": "머니키퍼",
        "status": "funding_closed",
        "cover": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Fd000f500-6e9c-48e6-b0a3-acb8718f4675%2Fyouha-fastbooking_project_thumbnail-rectangle-02.png",
        "squareThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Fa3a813a6-fa3c-4617-95a1-deaafdceb9e2%2Fyouha-fastbooking_project_thumbnail-square-02.png",
        "youtubeChannel": {
            "id": "8535e5c6-00ac-4798-8a3d-8e5b8d066256",
            "youtubeChannelId": "UCmxDK1eWo-KvQQJ23p95XGw",
            "title": "스튜디오 룰루랄라 디랩 - SLLDLAB",
            "descriptionOnYoutube": "언제 어디서든 즐길 수 있는 공감 가득한 이야기! \n스튜디오 룰루랄라(Studio Lululala)가 SLLDLAB이라는 새로운 이름으로 시작합니다♥\n구독하면 일상이 꿀잼! \n\n익숙하지만 새로운 즐거움, SLLDLAB\n* 비즈니스 문의 : lululala.ad@jtbc.co.kr\n\nFun stories that is familiar but never met before!\nSet up a subscription + alarm and be the first to meet the contents of SLLDLAB ♥\n \n\n* Business Inquiry : lululala.ad@jtbc.co.kr",
            "descriptionOnYouha": "",
            "thumbnail": "https://yt3.ggpht.com/wdUEB-khycaoeRkmaHO93kCzj49Nabb1DeSWQ0cTKriQcfK_y5ww_Q_LseH34Kzvm2Lzs8J1=s240-c-k-c0x00ffffff-no-rj",
            "createdAt": "2019-04-12T08:01:39.142000Z",
            "lastUpdatedAt": "2022-10-18T10:05:23.641000Z",
            "belongsWithMCN": "deb39fac-d8ac-4818-a731-939ec2b74270",
            "owner": null,
            "channelCategory": "ec634c84-2e6c-4609-8754-d4fc69cdfc1f",
            "nation": "KR",
            "showAtYouha": true,
            "status": "verified",
            "tags": [],
            "uploadsPlaylistId": "UUmxDK1eWo-KvQQJ23p95XGw",
            "subscriberCount": 757000,
            "viewCount": 246263217,
            "lastRank": 374,
            "lastRankInCategory": 92,
            "currency": "KRW",
            "commercialCases": null,
            "isContactable": true,
            "averageCommercialViewCount": 230609,
            "standardCommercialPrice": 50000000,
            "priceVerified": false,
            "CPV": null,
            "preferenceRatioOfCommercials": 0.1649947139872494,
            "genderRatioInThread": 0.6859999999999999,
            "majorAgeInThread": 20
        },
        "detail": "그렇게 살아서 부자 될 수 있겠어요?\n대국민 경제 체질 개선 프로젝트!",
        "minPrice": 20000000,
        "brandedPrice": 40000000,
        "pplPrice": 20000000,
        "brandedPriceOrigin": 50000000,
        "pplPriceOrigin": 25000000,
        "contentGenre": "금융, 경제",
        "contentDuration": "10분 내외",
        "commercialType": [
            "branded",
            "basic-PPL"
        ],
        "commercialDuration": null,
        "favoredAdvertiserType": null,
        "fundingRequestCount": 0,
        "createdAt": "2022-09-06T05:43:00.000Z",
        "brandCategories": [
            "movie-drama-production",
            "webtoon-animation",
            "publisher"
        ],
        "currentHosts": [
            "ca849bb8-5b07-459d-bbad-d377fd931a87"
        ],
        "currentGuests": [],
        "pastHosts": [],
        "pastGuests": [],
        "relatedVideoIds": [],
        "releaseAt": "2022 하반기 중 순차 공개",
        "rectangleThumbnail": "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Ffb4c6a03-8678-4024-adcd-627a83554641%2Fyouha-fastbooking_project_thumbnail-rectangle-02.png",
        "relatedVideos": []
    }
]
export const testCreators = [
    {
        "href": "api.youha.info/api/v4/youtubeChannels/97c89b31-7db2-4e88-95ed-179f7e141a66",
        "youtubeChannelId": "UCOmHUn--16B90oW2L6FRR3A",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "BLACKPINK",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.875,
        "createdAt": "2019-04-12T07:55:33.980000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 82600000,
        "lastUpdatedAt": "2022-10-31T02:09:09.407000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "BLACKPINK Official YouTube Channel\n\ube14\ub799\ud551\ud06c \uacf5\uc2dd \uc720\ud29c\ube0c \ucc44\ub110\uc785\ub2c8\ub2e4.\n\nJISOO, JENNIE, ROS\u00c9, LISA\n\uc9c0\uc218, \uc81c\ub2c8, \ub85c\uc81c, \ub9ac\uc0ac",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 27612195034,
        "standardCommercialPrice": 926092511,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "97c89b31-7db2-4e88-95ed-179f7e141a66",
        "uploadsPlaylistId": "UUOmHUn--16B90oW2L6FRR3A",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/hZDUwjoeQqigphL4A1tkg9c6hVp5yXmbboBR7PYFUSFj5PIJSA483NB5v7b0XVoTN9GCku3tqQ=s240-c-k-c0x00ffffff-no-nd-rj",
        "lastRankInCategory": 1,
        "lastRank": 1
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/f4e56485-e126-4271-959d-ff6f977b61da",
        "youtubeChannelId": "UCLkAepWjdylmXSltofFvsYQ",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "BANGTANTV",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.8,
        "createdAt": "2019-04-12T08:01:21.832000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 71500000,
        "lastUpdatedAt": "2022-10-31T02:09:34.975000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "This is the official YouTube channel of BTS. \ubc29\ud0c4\uc18c\ub144\ub2e8 \uacf5\uc2dd \uc720\ud29c\ube0c \ucc44\ub110 \uc785\ub2c8\ub2e4.",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 18236623384,
        "standardCommercialPrice": 809518606,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "f4e56485-e126-4271-959d-ff6f977b61da",
        "uploadsPlaylistId": "UULkAepWjdylmXSltofFvsYQ",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/NDWZM_aZQZJ81KRMyctZ5WYJbMIeDXLXBbAYfudK9idNpn7jIiamnj4-_3XIvCvKr1fEU7551A=s240-c-k-c0x00ffffff-no-nd-rj",
        "lastRankInCategory": 2,
        "lastRank": 2
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/a2147252-8a79-4485-9aba-660aa848399d",
        "youtubeChannelId": "UC3IZKseVpdzPSBaWxBxundA",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "HYBE LABELS",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.857,
        "createdAt": "2019-04-12T07:55:36.012000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 68700000,
        "lastUpdatedAt": "2022-10-31T02:09:55.439000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "Welcome to the official YouTube channel of HYBE, the content hub for BIGHIT MUSIC, BELIFT LAB, SOURCE MUSIC, PLEDIS Entertainment, KOZ ENTERTAINMENT, ADOR and more.",
        "majorAgeInThread": 20.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 24978420093,
        "standardCommercialPrice": 779927430,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "a2147252-8a79-4485-9aba-660aa848399d",
        "uploadsPlaylistId": "UU3IZKseVpdzPSBaWxBxundA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu9bDs3ccaLSmgkMJOGZgQZaCqXsnghhHGahdmSwZA=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 3,
        "lastRank": 3
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/9c516007-e952-4f8a-8bf2-aeb87d093e8a",
        "youtubeChannelId": "UCBR8-60-B28hp2BmDPdntcQ",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "YouTube",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.8,
        "createdAt": "2019-12-06T15:00:40.428000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 33900000,
        "lastUpdatedAt": "2022-10-31T02:09:45.049000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "YouTube's Official Channel helps you discover what's new & trending globally. Watch must-see videos, from music to culture to Internet phenomena",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 2756010054,
        "standardCommercialPrice": 425061826,
        "descriptionOnYouha": "",
        "channelCategory": "59635f49-bd81-4b0b-a118-709979bdee89",
        "id": "9c516007-e952-4f8a-8bf2-aeb87d093e8a",
        "uploadsPlaylistId": "UUBR8-60-B28hp2BmDPdntcQ",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 1,
        "lastRank": 4
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/fd7485ff-8390-4c2c-97c9-749e62fd6643",
        "youtubeChannelId": "UCEf_Bc-KVd7onSeifS3py9g",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "SMTOWN",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 24515242,
        "preferenceRatioOfCommercials": 0.34432354369579543,
        "genderRatioInThread": 0.75,
        "createdAt": "2019-04-12T07:55:33.923000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 31000000,
        "lastUpdatedAt": "2022-10-31T02:09:52.221000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "Welcome to SM Entertainment Official YouTube Channel!\nWe deeply appreciate all of your love and support again.\nYou can enjoy SM artist's latest videos on SMTOWN Official YouTube Channel.",
        "majorAgeInThread": 40.0,
        "CPV": 15.156775078948844,
        "owner": null,
        "currency": "KRW",
        "viewCount": 25783672786,
        "standardCommercialPrice": 371572009,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "fd7485ff-8390-4c2c-97c9-749e62fd6643",
        "uploadsPlaylistId": "UUEf_Bc-KVd7onSeifS3py9g",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/_1Z4I2qpWaCN9g3BcDd3cVA9MDHOG43lE1YNWDNkKro49haGxkjwuFK-I8faWTKM6Jle9qb4ag=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 4,
        "lastRank": 5
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/6a9083c8-4d6f-428d-9fa1-143c2a2b8648",
        "youtubeChannelId": "UCU2zNeYhf9pi_wSqFbYE96w",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Boram Tube Vlog [\ubcf4\ub78c\ud29c\ube0c \ube0c\uc774\ub85c\uadf8]",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.5,
        "createdAt": "2019-04-12T08:01:32.937000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 29500000,
        "lastUpdatedAt": "2022-10-30T19:54:31.097000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "\uc548\ub155\ud558\uc138\uc694~ \uce5c\uad6c\ub4e4 ^^ \nBoram Tube Vlog [\ubcf4\ub78c\ud29c\ube0c \ube0c\uc774\ub85c\uadf8] \ucc44\ub110\uc5d0\uc11c\ub294  \n\ubcf4\ub78c\uc774\uc758 \uc77c\uc0c1 \uc774\uc57c\uae30\uc640 \uc7ac\ubbf8\uc788\ub294 \uc7a5\ub09c\uac10 \ub180\uc774 \uc601\uc0c1\uc774 \uc5c5\ub85c\ub4dc \ub429\ub2c8\ub2e4! \n\uc5c9\ub6b1\ubc1c\ub784 \uadc0\uc5ec\uc6b4 \ubcf4\ub78c\uc774\uc640 \ub9e4\uc77c\ub9e4\uc77c \uc7ac\ubc0c\ub294 \ucd94\uc5b5 \ub9cc\ub4e4\uc5b4\uc694 ~^0^\n\n\ubcf4\ub78c\ud29c\ube0c \ube0c\uc774\ub85c\uadf8\n\ubb34\ub8cc \uad6c\ub3c5\ud558\uae30\u2661 http://goo.gl/V4XFyf\n\ucc44\ub110 \uad6c\ub3c5\uacfc \uc88b\uc544\uc694\ub294 \ucc44\ub110\uc5d0\uac8c \ud070 \ud798\uc774\ub429\ub2c8\ub2e4. \n\ud56d\uc0c1 \uc7ac\ubbf8\uc788\uace0 \uc990\uac81\uace0 \uc720\ucf8c\ud55c \uc601\uc0c1\uc73c\ub85c \ucc3e\uc544\uc62c\uaed8\uc694~ \uc5ec\ub7ec\ubd84 \uac10\uc0ac\ud569\ub2c8\ub2e4 \uc0ac\ub791\ud574\uc6a9~ ^0^  \n\nHello ~ everyone!\nIn Boram Tube Vlog channel\nI will upload a funny and surprise toy story and vlog\nlet's makes memories of everyday fun with boram who cute and cheerful girl ^ 0 ^\n\nBoram Tube Vlog Free Subscription \u2661 http://goo.gl/V4XFyf\nChannel subscriptions and likes are great powers for the Boram Tube Toy Reviews channel.\nI will always find funny, pleasant and pleasant video ~ Thank you very much  ^ 0 ^\n\n\n\n * \ube44\uc9c0\ub2c8\uc2a4/\uad11\uace0/\uc81c\ud734 \ubb38\uc758: boramtube@gmail.com",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 13202811089,
        "standardCommercialPrice": 373438224,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "6a9083c8-4d6f-428d-9fa1-143c2a2b8648",
        "uploadsPlaylistId": "UUU2zNeYhf9pi_wSqFbYE96w",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu8hRJ4_CZNp7SvQrvHE_rT5OT_CxH2BdO2eW_NNCA=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 1,
        "lastRank": 6
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/ae97c581-090e-4011-830d-8b073c967e8c",
        "youtubeChannelId": "UCTheFErn4MureanSiqgKIag",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "DONA \ub3c4\ub098",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.929,
        "createdAt": "2019-05-29T01:43:25.591000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 28700000,
        "lastUpdatedAt": "2022-10-31T02:08:51.813000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "\ub3c4\ub098\uc758 \uc7ac\ubbf8\uc788\ub294 ASMR \uba39\ubc29! \ub9db\uc788\uac8c \ubcf4\uc138\uc694:)\nDONA exciting ASMR Mukbang! Watch me deliciously~! Thank you :)\n\n\ube44\uc9c0\ub2c8\uc2a4 \ubb38\uc758 : hi.tnt.ent@gmail.com",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 18926550308,
        "standardCommercialPrice": 336751264,
        "descriptionOnYouha": "",
        "channelCategory": "7553fabb-6268-42a4-8c00-688d39d09568",
        "id": "ae97c581-090e-4011-830d-8b073c967e8c",
        "uploadsPlaylistId": "UUTheFErn4MureanSiqgKIag",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu9Gcr7d5-HD8lBdloEfNw00nJmcQwSpEcXop7mo=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 1,
        "lastRank": 7
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/689c1788-7393-49ff-8dd7-9c31ed5f3cc0",
        "youtubeChannelId": "UCKqx9r4mrFglauNBJc1L_eg",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "ToypuddingTV",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.857,
        "createdAt": "2019-04-12T07:55:38.962000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 26700000,
        "lastUpdatedAt": "2022-10-31T02:09:43.396000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "ToyPudding is active on MIMTOK\n",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 15616070854,
        "standardCommercialPrice": 340321361,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "689c1788-7393-49ff-8dd7-9c31ed5f3cc0",
        "uploadsPlaylistId": "UUKqx9r4mrFglauNBJc1L_eg",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/82aGGY55zhtbltDjgBeKWk7LQy48ZtNQTtrgUK4eshc-R_mRcbnNjJa04ynrXJplkSYquFQ1=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 2,
        "lastRank": 8
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/841f8085-eb7b-4095-a9a3-ae626b5e1e80",
        "youtubeChannelId": "UCaO6TYtlC8U5ttz62hTrZgg",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "JYP Entertainment",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 89822943,
        "preferenceRatioOfCommercials": 0.19671399544323548,
        "genderRatioInThread": 0.9,
        "createdAt": "2019-04-12T07:55:34.019000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 25900000,
        "lastUpdatedAt": "2022-10-31T02:08:52.426000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "JYPnation Official YouTube\n\nLEADER IN ENTERTAINMENT\n\nThere are values and goals that JYP Entertainment (JYP) has pursued. JYP prides itself with those values and strives to be an exemplary leader in the entertainment industry. \n\nWith the lead of Park Jin Young as one of Asia\u2019s most prominent producers in the entertainment industry, JYP has discovered and produced some of the most popular and successful K-Pop artists, such as god, Rain, Wonder Girls, 2PM, 2AM, miss A, GOT7, DAY6, TWICE, Stray Kids, ITZY, Xdinary Heroes and NMIXX.\n\nAlso, we have introduced and led K-Pop\u2019s dominance by expanding the activities of our artists to the global music industry through the network of our overseas subsidiaries, JYP Japan and JYP China. \n\nJYP not only focuses on ordinary business, like planning and creating music, finding and managing artists, conducting online, mobile and overseas business, but also strives to scout creative talents and develop them to be suitable for the entertainment industry.\n",
        "majorAgeInThread": 10.0,
        "CPV": 3.4992364255978563,
        "owner": null,
        "currency": "KRW",
        "viewCount": 17907691838,
        "standardCommercialPrice": 314311714,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "841f8085-eb7b-4095-a9a3-ae626b5e1e80",
        "uploadsPlaylistId": "UUaO6TYtlC8U5ttz62hTrZgg",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/fxlLUAZQPfYiK_6B-8ZQDbT1C_o-LkTTT75RO_JZ_78SbTSrNrRHB-X7nJkUJYKUb2XOos_Tnw=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 5,
        "lastRank": 9
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/058c83d2-aeaa-4365-98f6-619a654b1d88",
        "youtubeChannelId": "UCw8ZhLPdQ0u_Y-TLKd61hGA",
        "tags": [],
        "priceVerified": true,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "1MILLION Dance Studio",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 496945,
        "preferenceRatioOfCommercials": 0.445986236958275,
        "genderRatioInThread": 0.917,
        "createdAt": "2019-04-12T07:55:47.174000Z",
        "status": "verified",
        "belongsWithMCN": "2042a7ef-c5c8-45c4-9986-02daeb8a8021",
        "nation": "KR",
        "subscriberCount": 25700000,
        "lastUpdatedAt": "2022-10-31T02:09:35.005000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "South Korea, Seoul\n\n1MILLION Dance Studio",
        "majorAgeInThread": 20.0,
        "CPV": 140.86065862419383,
        "owner": null,
        "currency": "KRW",
        "viewCount": 7528045025,
        "standardCommercialPrice": 70000000,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "058c83d2-aeaa-4365-98f6-619a654b1d88",
        "uploadsPlaylistId": "UUw8ZhLPdQ0u_Y-TLKd61hGA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu-0jhNMAcMjDrXUNj_DIvUNJkCM8KHKuSVDH_dTSA=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 6,
        "lastRank": 10
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/fab9b3c1-d271-4d0e-9612-d2859c918f78",
        "youtubeChannelId": "UCweOkPb1wVVH0Q0Tlj4a5Pw",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "1theK (\uc6d0\ub354\ucf00\uc774)",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.9329999999999999,
        "createdAt": "2019-04-12T07:55:33.959000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 24300000,
        "lastUpdatedAt": "2022-10-31T02:09:32.714000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "\"K-pop Wonderland\" 1theK\n\nK-pop\uc744 \uc774\ub044\ub294 \uad6d\ub0b4 \ucd5c\uace0 \uc544\ud2f0\uc2a4\ud2b8\ub4e4\uc758 \ubba4\uc9c1\ube44\ub514\uc624\ubd80\ud130,\n\uc804 \uc138\uacc4 \ud32c\ub4e4\uc774 \ubcf4\uace0, \ub4e3\uace0, \ucc38\uc5ec\ud560 \uc218 \uc788\ub294 \uc624\ub9ac\uc9c0\ub110 \ucee8\ud150\uce20\ub4e4\uae4c\uc9c0!\n1theK\uc5d0\uc11c \uac00\uc7a5 \ube60\ub974\uac8c \ub9cc\ub098\ubcf4\uc138\uc694! :)\n\n\nWelcome to the official YouTube page of \"K-pop Wonderland\" 1theK\nEnjoy the leading K-Pop artists\u2019 M/Vs, teasers and more exclusive originals for the K-pop fans all over the world on 1theK! \nStay tuned for the latest updates!\n\n\n*Business contact : 1theK.ad@kakaoent.com",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 22942003773,
        "standardCommercialPrice": 296197798,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "fab9b3c1-d271-4d0e-9612-d2859c918f78",
        "uploadsPlaylistId": "UUweOkPb1wVVH0Q0Tlj4a5Pw",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu-zlk7fnoK5PIr5o9uhmr8_yHojC7DOqWXQQsFm2o0=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 7,
        "lastRank": 11
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/8c1dfb3b-b5e0-4707-b611-e6870679a974",
        "youtubeChannelId": "UCbD8EppRX3ZwJSou-TVo90A",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Mnet K-POP",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 76893,
        "preferenceRatioOfCommercials": 0.4925495275726491,
        "genderRatioInThread": 0.882,
        "createdAt": "2019-04-12T07:55:35.971000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 19900000,
        "lastUpdatedAt": "2022-10-31T02:09:28.912000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "K-POP Channel of World's No.1 Music Channel Mnet\nWatch the latest and hottest K-POP contents on \u2728Mnet K-POP\u2728\n\n\u24d2CJ ENM. Corp ALL RIGHTS RESERVED\n",
        "majorAgeInThread": 10.0,
        "CPV": 3198.6336987762215,
        "owner": null,
        "currency": "KRW",
        "viewCount": 13575896645,
        "standardCommercialPrice": 245952541,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "8c1dfb3b-b5e0-4707-b611-e6870679a974",
        "uploadsPlaylistId": "UUbD8EppRX3ZwJSou-TVo90A",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu99y-1jtfLoATFaHVHv2AjIVTXYfXpnDovjUiFqxPc=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 8,
        "lastRank": 12
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/fc50abc1-1aaa-4345-b486-83f1a4ef1a9b",
        "youtubeChannelId": "UC5BMQOsAB8hKUyHu9KI6yig",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "KBS WORLD TV",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.9,
        "createdAt": "2019-04-12T07:55:46.651000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 18400000,
        "lastUpdatedAt": "2022-10-31T02:09:31.897000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "KBS WORLD TV is a television channel for international audiences provided by the Korean Broadcasting System (KBS).\nIt's your premier window on Korean contents with a nonstop, 24-hour a day, 7-day a week stream of Korea's latest and most popular programs.",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 14219829649,
        "standardCommercialPrice": 246656829,
        "descriptionOnYouha": "",
        "channelCategory": "40095cbe-381b-45a5-a314-1106d370bd73",
        "id": "fc50abc1-1aaa-4345-b486-83f1a4ef1a9b",
        "uploadsPlaylistId": "UU5BMQOsAB8hKUyHu9KI6yig",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu8El1qc8zBPmTcX3UTnjV2Coqj_wPCYMNWF_c-nfN4=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 1,
        "lastRank": 13
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/6c128e40-487b-4784-be62-bdb859ec03d0",
        "youtubeChannelId": "UCrDkAvwZum-UTjHmzDI2iIw",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "officialpsy",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.857,
        "createdAt": "2019-04-12T07:55:36.125000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 17600000,
        "lastUpdatedAt": "2022-10-31T02:09:43.400000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "PSY Official YouTube Channel",
        "majorAgeInThread": 40.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 10068499191,
        "standardCommercialPrice": 219399059,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "6c128e40-487b-4784-be62-bdb859ec03d0",
        "uploadsPlaylistId": "UUrDkAvwZum-UTjHmzDI2iIw",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/VXVR9IKCRGRAtjdXcul8EcB2MoT1ZC7d8YMlkzVfB8Iuulf3WK5HA_h6BihPBe-OnpS4Fufrag=s240-c-k-c0x00ffffff-no-nd-rj",
        "lastRankInCategory": 9,
        "lastRank": 14
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/b592d0bb-df5d-4210-942e-90cdc44fb85a",
        "youtubeChannelId": "UClkRzsdvg7_RKVhwDwiDZOA",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "JFlaMusic",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.737,
        "createdAt": "2019-04-12T07:55:38.440000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 17600000,
        "lastUpdatedAt": "2022-10-31T02:09:31.778000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "\nI really hope you guys enjoy my videos\u2665\n\n\n",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 3697158502,
        "standardCommercialPrice": 219399059,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "b592d0bb-df5d-4210-942e-90cdc44fb85a",
        "uploadsPlaylistId": "UUlkRzsdvg7_RKVhwDwiDZOA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu-4mMgO8D6TmPTO2U-I-4YHH9wRiyNvNo_kgipteg=s240-c-k-c0x00ffffff-no-rj-mo",
        "lastRankInCategory": 10,
        "lastRank": 15
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/6c3cad80-19ba-418f-b597-69bfbf03a459",
        "youtubeChannelId": "UC2fsxQr6Hcx1enORxXgKpxQ",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Jane ASMR \uc81c\uc778",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 10,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.929,
        "createdAt": "2019-04-12T08:01:32.533000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 17000000,
        "lastUpdatedAt": "2022-10-31T02:09:09.891000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "Jane ASMR \uba39\ubc29 \ucc44\ub110\uc785\ub2c8\ub2e4.\n\uc601\uc0c1\uc740 \ub9e4\uc77c \uc5c5\ub85c\ub4dc \ud569\ub2c8\ub2e4.\n\nWelcome to Jane's ASMR eating sounds channel.\nDaily uploads",
        "majorAgeInThread": 20.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 6717142205,
        "standardCommercialPrice": 206862925,
        "descriptionOnYouha": "",
        "channelCategory": "7553fabb-6268-42a4-8c00-688d39d09568",
        "id": "6c3cad80-19ba-418f-b597-69bfbf03a459",
        "uploadsPlaylistId": "UU2fsxQr6Hcx1enORxXgKpxQ",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_zfcUb9YfnVqk38ByFJmaDRtltBnz7GxEOpHXwmw=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 2,
        "lastRank": 16
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/1d68af95-482b-4ecc-979f-aaf7a71f900b",
        "youtubeChannelId": "UC6ye474SJCiPsEPueO_b3Gw",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "With Kids[\uc704\ub4dc\ud0a4\uc988]",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": null,
        "createdAt": "2019-04-12T07:55:51.106000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 15600000,
        "lastUpdatedAt": "2022-10-31T02:09:10.178000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "[With Kids]\ucc44\ub110\uc740?\n\u2605 \uc544\ube60\uc640 \ud568\uaed8 \uc544\ub4e4\uc778 \uc608\uc900\uc774\uac00 \ub9cc\ub4e4\uc5b4 \uac00\ub294 \ud0a4\uc988 \ucc44\ub110\uc785\ub2c8\ub2e4\n\u2605 \uc608\uc900\uc774\uc640 \uc544\ube60\uac00 \ud568\uaed8 \uc7a5\ub09c\uac10 \ub180\uc774\ub97c \ud558\uba70 \ub3c4\uc804\ud558\uace0 \uacbd\ud5d8\ud558\uace0, \uc11c\ub85c \ub300\ud654\ud558\uace0 \ud559\uc2b5\ud558\uba70 \uac19\uc740 \uc2dc\uac04\uc744 \uacf5\uc720\ud558\ub294 \uc7ac\ubbf8\uc788\ub294 \uc601\uc0c1\uc744 \ub9cc\ub4e4\ub824\uace0 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\u2605 \uad6c\ub3c5 + \uc88b\uc544\uc694 + \ub313\uae00 + \uacf5\uc720 \ud574\uc8fc\uc2dc\uba74 With Kids\ucc44\ub110\uc5d0 \ud070 \ud798\uc774 \ub41c\ub2f5\ub2c8\ub2e4 ^^\n\n\u2605 We Make Kids Video Channel My son, Ye Jun With Daddy\n\u2605 Ye Jun and Dad are Trying to Create and Funny Kids Videos That Challenge, Experience, Communicate, Learn and Share the Same Time Together With Toy Play\n\u2605 Please Subscribe+Like + Comment+share our channel and give us extra ENERGY and FEEDBACK to share on the [With Kids] channel!\n\n\u2605[With Kids] E-Mail : loveis3478@gmail.com",
        "majorAgeInThread": null,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 8248322103,
        "standardCommercialPrice": 206405186,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "1d68af95-482b-4ecc-979f-aaf7a71f900b",
        "uploadsPlaylistId": "UU6ye474SJCiPsEPueO_b3Gw",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_1m-d7-n1V8-zU89W8kqBjTLyv7TruepXi5RzTwQ=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 3,
        "lastRank": 17
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/8a07dd65-0ebb-445a-86c0-ba2f877348d2",
        "youtubeChannelId": "UCzw-C7fNfs018R1FzIKnlaA",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "BIGBANG",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.85,
        "createdAt": "2019-04-12T07:55:34.056000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 14900000,
        "lastUpdatedAt": "2022-10-31T02:09:24.156000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "BIGBANG Official YouTube Channel\n\ube45\ubc45 \uacf5\uc2dd \uc720\ud29c\ube0c \ucc44\ub110\uc785\ub2c8\ub2e4.\n\nG-DRAGON, TAEYANG, T.O.P, DAESUNG\n\uc9c0\ub4dc\ub798\uace4, \ud0dc\uc591, \ud0d1, \ub300\uc131",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 7468137015,
        "standardCommercialPrice": 187926097,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "8a07dd65-0ebb-445a-86c0-ba2f877348d2",
        "uploadsPlaylistId": "UUzw-C7fNfs018R1FzIKnlaA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu8dUcfYRIIIcOxgq2pEyMqtABLVfDBVazh3X3jtPQ=s240-c-k-c0x00ffffff-no-rj-mo",
        "lastRankInCategory": 11,
        "lastRank": 18
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/86a64a90-53e7-4bad-b9fc-0b9bc8b555e3",
        "youtubeChannelId": "UCzgxx_DM2Dcb9Y1spb9mUJA",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "TWICE",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.875,
        "createdAt": "2019-04-12T07:55:36.434000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 14900000,
        "lastUpdatedAt": "2022-10-31T02:09:38.465000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "TWICE Official YouTube Channel",
        "majorAgeInThread": 10.0,
        "CPV": 103.94926926337406,
        "owner": null,
        "currency": "KRW",
        "viewCount": 4110569757,
        "standardCommercialPrice": 187926097,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "86a64a90-53e7-4bad-b9fc-0b9bc8b555e3",
        "uploadsPlaylistId": "UUzgxx_DM2Dcb9Y1spb9mUJA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/lwQGFALB-po5ZJy3mn132-i5OF__sSeAWAlhpeWrUgYpS4VB0xnUezLhnR6x1RXzV4SgA4OOig=s240-c-k-c0x00ffffff-no-nd-rj",
        "lastRankInCategory": 12,
        "lastRank": 19
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/c2f76a3f-669b-41f6-9bcf-4343e6f4cb15",
        "youtubeChannelId": "UC3pnQ7MHDABUFungNcMQ7dA",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Boram Tube ToysReview [\ubcf4\ub78c\ud29c\ube0c \ud1a0\uc774\ub9ac\ubdf0]",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 1101201,
        "preferenceRatioOfCommercials": 0.034144538553815336,
        "genderRatioInThread": 0.5,
        "createdAt": "2019-05-28T01:17:05.744000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 14400000,
        "lastUpdatedAt": "2022-10-31T02:09:43.400000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "\uc548\ub155\ud558\uc138\uc694~\uc5b8\ub2c8 \uc624\ube60 \uce5c\uad6c\ub4e4 ^^ \n\uc0c8\ub85c\uc6b4 \ubcf4\ub78c\ud29c\ube0c [Boram Toys Review] \ucc44\ub110\uc5d0\uc11c\ub294  \n\uc7ac\ubbf8\uc788\uace0 \uc2e0\uae30\ud55c \uc7a5\ub09c\uac10 \uc774\uc57c\uae30\uc640 \ub9cc\ub4e4\uae30 \ub180\uc774, \uc990\uac70\uc6b4 \ud0a4\uc988\uce74\ud398 \ub180\uc774\ud130 \uc601\uc0c1\uc744 \uc62c\ub9b4\uac70\uc608\uc694!!\n\uc5c9\ub6b1\ubc1c\ub784 \uadc0\uc5ec\uc6b4 \ubcf4\ub78c\uc774\uc640 \ub9e4\uc77c\ub9e4\uc77c \uc7ac\ubc0c\ub294 \ucd94\uc5b5 \ub9cc\ub4e4\uc5b4\uc694 ~^0^\n\n\ubcf4\ub78c\ud29c\ube0c\ud1a0\uc774\ub9ac\ubdf0 \n\ubb34\ub8cc \uad6c\ub3c5\ud558\uae30\u2661 https://goo.gl/4pSLV5\n\ucc44\ub110 \uad6c\ub3c5\uacfc \uc88b\uc544\uc694\ub294 \ubcf4\ub78c\ud29c\ube0c\ud1a0\uc774\ub9ac\ubdf0 \ucc44\ub110\uc5d0\uac8c \ud070 \ud798\uc774\ub429\ub2c8\ub2e4. \n\ud56d\uc0c1 \uc7ac\ubbf8\uc788\uace0 \uc990\uac81\uace0 \uc720\ucf8c\ud55c \uc601\uc0c1\uc73c\ub85c \ucc3e\uc544\uc62c\uaed8\uc694~ \uc5ec\ub7ec\ubd84 \uac10\uc0ac\ud569\ub2c8\ub2e4 \uc0ac\ub791\ud574\uc6a9~ ^0^  \n\nHello ~ everyone!\nIn the new Boram Toys Review channel\nI will upload a funny and surprise toy story, making play, and a fun kids' cafe playground!\nlet's makes memories of everyday fun with boram who cute and cheerful girl ^ 0 ^\n\nBoram Tube Toy Review Free Subscription \u2661 https://goo.gl/4pSLV5\nChannel subscriptions and likes are great powers for the Boram Tube Toy Reviews channel.\nI will always find funny, pleasant and pleasant video ~ Thank you very much ^ ^ 0 ^\n\n\n\n * \ube44\uc9c0\ub2c8\uc2a4/\uad11\uace0/\uc81c\ud734 \ubb38\uc758: boramtube@gmail.com",
        "majorAgeInThread": 10.0,
        "CPV": 173.9943525296472,
        "owner": null,
        "currency": "KRW",
        "viewCount": 4935150538,
        "standardCommercialPrice": 191602755,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "c2f76a3f-669b-41f6-9bcf-4343e6f4cb15",
        "uploadsPlaylistId": "UU3pnQ7MHDABUFungNcMQ7dA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu9H24o5UsVrGQafMQgKeesZ5N64Eax7dmk1PITR=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 4,
        "lastRank": 20
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/6d27e94b-307a-4e82-bf63-a7724165c2fe",
        "youtubeChannelId": "UCxtLc0Jqq3SKBWlIXM_OC9g",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Hongyu ASMR \ud64d\uc720",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 10,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.875,
        "createdAt": "2019-05-28T01:16:49.964000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 14100000,
        "lastUpdatedAt": "2022-10-31T02:08:54.441000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "Welcome to Hongyu ASMR \ud64d\uc720 Official Channel :)\n\ud64d\uc720 \ucc44\ub110\uc5d0 \uc624\uc2e0 \uac78 \ud658\uc601\ud569\ub2c8\ub2e4 \ud83c\udf08\n",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 4514176975,
        "standardCommercialPrice": 173850263,
        "descriptionOnYouha": "",
        "channelCategory": "7553fabb-6268-42a4-8c00-688d39d09568",
        "id": "6d27e94b-307a-4e82-bf63-a7724165c2fe",
        "uploadsPlaylistId": "UUxtLc0Jqq3SKBWlIXM_OC9g",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/qmpb9WUcmKSYJJ9VmQmlGbyVsCF5r2slasFLWfUctzk3m48S1siKJWQRDSkel0q3fYDomSssMw=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 3,
        "lastRank": 21
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/4dad9bff-454c-4216-991b-9281aa354abd",
        "youtubeChannelId": "UCL4r3zHKJpcJ0jEYSbobk1Q",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "BIBO\uc640 \uc7a5\ub09c\uac10",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.5,
        "createdAt": "2019-12-20T01:07:16.708000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 12700000,
        "lastUpdatedAt": "2022-10-31T02:08:54.607000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "BIBO\uc640 \uc7a5\ub09c\uac10 \uacf5\uc2dd \ucc44\ub110.",
        "majorAgeInThread": 10.0,
        "CPV": 258.0150562541363,
        "owner": null,
        "currency": "KRW",
        "viewCount": 2979775844,
        "standardCommercialPrice": 68615492,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "4dad9bff-454c-4216-991b-9281aa354abd",
        "uploadsPlaylistId": "UUL4r3zHKJpcJ0jEYSbobk1Q",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu-SkbKnbowprPgtsQrrgFPFiMvUwQ10XmNkvz3KSQ=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 5,
        "lastRank": 22
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/f117f62e-c2c3-4e0e-a69c-98881b089b89",
        "youtubeChannelId": "UCQs-tWGqacJ7vuuJDtXq28w",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Kids Line\u2661\u30ad\u30c3\u30ba\u30e9\u30a4\u30f3",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.8,
        "createdAt": "2020-04-21T13:19:24.288000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 12500000,
        "lastUpdatedAt": "2022-10-31T02:09:31.430000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "welcome to our channel channel that best fits during parenting!We publish videos that parents and children enjoy, such as introductions to toys, kids manners, and family go outs. It would be a pleasure if the channel could be some of a help and enjoyment for parents around the world. \n\n\u304a\u3082\u3061\u3083\u306e\u7d39\u4ecb\u3084\u30ad\u30c3\u30ba\u30de\u30ca\u30fc\u3001\u5bb6\u65cf\u3067\u304a\u51fa\u304b\u3051\u52d5\u753b\u306a\u3069\u89aa\u5b50\u3067\u697d\u3057\u3081\u308b\u3088\u3046\u306a\u52d5\u753b\u3092\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002\u30db\u30c3\u3068\u4e00\u606f\u30bf\u30a4\u30e0\u306b\u6d3b\u7528\u3057\u3066\u3082\u3089\u3063\u305f\u308a\u3001\u304a\u3082\u3061\u3083\u3092\u8cfc\u5165\u3059\u308b\u969b\u3084\u304a\u51fa\u304b\u3051\u306e\u53c2\u8003\u306b\u3057\u3066\u3082\u3089\u3048\u308b\u3068\u672c\u671b\u3067\u3059\u2764\n\u79c1\u81ea\u8eab\u3001\u5b50\u80b2\u3066\u771f\u3063\u6700\u4e2d\u306e\u30de\u30de\u3067\u3059\u3002\u30d9\u30d3\u30fc\u306e\u9803\u306f\u3001\u5b50\u4f9b\u3092\u7523\u3080\u524d\u306e\u81ea\u5206\u306e\u60f3\u50cf\u3092\u7d76\u3059\u308b\u307b\u3069\u306e\u5927\u5909\u3055\u306b\u9a5a\u304d\u307e\u3057\u305f\u3002\uff12\u4eba\u3067\uff11\u3064\u72b6\u614b\u306f\u3001\u5e78\u305b\u306a\u53cd\u9762\u307e\u3068\u308f\u308a\u3064\u304b\u308c\u308b\u3068\u4f55\u3082\u3067\u304d\u306a\u3044\u3053\u3068\u306b\u82e6\u60a9\u3057\u307e\u305f\u3002\u30ab\u30ef\u30a4\u30a4\u3093\u3067\u3059\u3051\u3069\u306d\u3002\u4e16\u754c\u4e2d\u306e\u5b50\u80b2\u3066\u4e16\u5e2f\u306e\u5c11\u3057\u3067\u3082\u304a\u5f79\u306b\u7acb\u3066\u305f\u3089\u5e78\u751a\u3067\u3059\u3002\nBlog https://ameblo.jp/kidsline\nTwitter https://twitter.com/kidslineTV\nHP http://kidsline.tv/\n\n\u25c6\u30d3\u30b8\u30cd\u30b9\u95a2\u4fc2\u306e\u304a\u554f\u3044\u5408\u308f\u305b\u306f\u3053\u3061\u3089\u3078\uff01\nbusiness@kidsline.tv\n\u25c6\u304a\u624b\u7d19\u306a\u3069\u306f\u3053\u3061\u3089\u3078\uff01\n\u3012105-0004 \u6771\u4eac\u90fd\u6e2f\u533a\u65b0\u6a4b\u56db\u4e01\u76ee1\u756a1\u53f7 \u65b0\u864e\u901a\u308aCORE\n\u682a\u5f0f\u4f1a\u793e\u30af\u30ea\u30fc\u30af\u30fb\u30a2\u30f3\u30c9\u30fb\u30ea\u30d0\u30fc\u793e\n\u30aa\u30f3\u30e9\u30a4\u30f3\u30fb\u30af\u30ea\u30a8\u30a4\u30bf\u30fc\u30fb\u30c7\u30a3\u30d3\u30b8\u30e7\u30f3\n\u30ad\u30c3\u30ba\u30e9\u30a4\u30f3\u3000\u30d5\u30a1\u30f3\u30ec\u30bf\u30fc\u30fb\u30d7\u30ec\u30bc\u30f3\u30c8\u4fc2\nAll Content \u00a9 2022 \uff77\uff6f\uff7d\uff9e\uff97\uff72\uff9dKidsLine\u2122. All Rights Reserved",
        "majorAgeInThread": 10.0,
        "CPV": 5702.23359757126,
        "owner": null,
        "currency": "KRW",
        "viewCount": 10819279015,
        "standardCommercialPrice": 67617086,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "f117f62e-c2c3-4e0e-a69c-98881b089b89",
        "uploadsPlaylistId": "UUQs-tWGqacJ7vuuJDtXq28w",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/fLX-A-Xt-IH0blkufAAzIpOi3TT3vaaUNz1yev7ozMc7tzMiI4-yD-J_dFo2v4ccpAuslYIOdQ=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 6,
        "lastRank": 23
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/2333edb0-1955-4d84-88c5-03e06341a0bd",
        "youtubeChannelId": "UCqXwKu6dKobXEQFhdKtiJLQ",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "\ud551\ud06c\ud401 (\uc778\uae30 \ub3d9\uc694\u30fb\ub3d9\ud654)",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 191730,
        "preferenceRatioOfCommercials": 0.07155896312522819,
        "genderRatioInThread": null,
        "createdAt": "2019-04-12T07:55:36.540000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 11000000,
        "lastUpdatedAt": "2022-10-31T02:09:18.950000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "\uc804\uc138\uacc4 \uc5b4\ub9b0\uc774\ub4e4\uc758 \ub9c8\uc74c\uc744 \uc0ac\ub85c\uc7a1\uc740 \ud551\ud06c\ud401 \uc544\uae30\uc0c1\uc5b4!\n\n\uae00\ub85c\ubc8c \uc720\uc544\uad50\uc721 \ube0c\ub79c\ub4dc \ud551\ud06c\ud401\uc758 \uacf5\uc2dd \ud55c\uad6d\uc5b4 \uc720\ud29c\ube0c \ucc44\ub110\uc785\ub2c8\ub2e4.\n\n2,300\uc5ec\ud3b8\uc758 \ud551\ud06c\ud401 \ub3d9\uc694\u30fb\ub3d9\ud654 \uc601\uc0c1 \ucf58\ud150\uce20\ub294 \n\uc720\uc544 \uad50\uc721 \uc804\ubb38\uac00\ub4e4\uc774 \uc790\uccb4\uc801\uc73c\ub85c \uc81c\uc791\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\n\uc2e0\ub098\ub294 \ud551\ud06c\ud401 \ub3d9\uc694\u2219\ub3d9\ud654\ub97c \ubcf4\uba74\uc11c \uacf5\ub8e1 \uc774\ub984\ubd80\ud130 \uc54c\ud30c\ubcb3\uae4c\uc9c0 \ubc30\uc6cc\ubcf4\uc138\uc694!\n\n\ud551\ud06c\ud401 \uacf5\uc2dd \uc720\ud29c\ube0c \ucc44\ub110\uc744 \uad6c\ub3c5\ud558\uc2dc\uba74\n\ub9e4\uc8fc \uc5c5\ub85c\ub4dc\ub418\ub294 \uc601\uc0c1\uc744 \uac00\uc7a5 \ube60\ub974\uac8c \ub9cc\ub098\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc9c0\uae08 \ubc14\ub85c \ud551\ud06c\ud401 \uc720\ud29c\ube0c [\uad6c\ub3c5] \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694!\n\n\ud551\ud06c\ud401 \ub3d9\uc694\u30fb\ub3d9\ud654\ub97c \uc571\uc73c\ub85c\ub3c4 \ub9cc\ub098\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\u2605 \ubb34\ub8cc \uc571 \ub2e4\uc6b4\ub85c\ub4dc : http://i.sstudy.kr/L/588/des/\n\n\ud551\ud06c\ud401 \ub3c4\uc11c\ub098 \uc778\ud615 \ub4f1 \ub2e4\uc591\ud55c \uc0c1\ud488\uc744 \ub9cc\ub098\ubcf4\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694?\n\u2605 \ud551\ud06c\ud401 \uc2a4\ud1a0\uc5b4: http://pinkfong.com\n\n\ud551\ud06c\ud401 SNS\ub97c \ud314\ub85c\uc6b0\ud558\uace0 \uad50\uc721 \uc815\ubcf4\uc640 \uc774\ubca4\ud2b8 \uc18c\uc2dd\ub3c4 \ubc1b\uc544\ubcf4\uc138\uc694!\n\u2605 \ud398\uc774\uc2a4\ubd81: https://www.facebook.com/pinkfong.ko\n\u2605 \uc778\uc2a4\ud0c0\uadf8\ub7a8: https://www.instagram.com/pinkfong.ko\n\u2605 \uce74\uce74\uc624\uc2a4\ud1a0\ub9ac: https://story.kakao.com/ch/pinkfong\n\n[\uc911\uc694]\n\ud551\ud06c\ud401\uc758 \uc0ac\uc804 \ub3d9\uc758 \uc5c6\uc774 \ud551\ud06c\ud401\uc758 \ub3d9\uc694, \uc560\ub2c8\uba54\uc774\uc158\uc744 \ud3ec\ud568\ud55c \uae30\ud0c0 \ubaa8\ub4e0 \uc9c0\uc801\uc7ac\uc0b0\ub4e4(\ud1b5\ud2c0\uc5b4 '\ucf58\ud150\uce20'\ub77c \uce6d\ud568)\uc744 \uc601\ub9ac\uc801 \ubaa9\uc801 \ubc0f \ube44\uc601\ub9ac\uc801 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \ubd88\ubc95\uc73c\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4.\n\ud551\ud06c\ud401\uc758 \ucf58\ud150\uce20 \uc0ac\uc6a9\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \ubb38\uc758\ub294 \uc544\ub798 '\ube44\uc9c0\ub2c8\uc2a4 \ubb38\uc758' \ub9c1\ud06c\ub97c \ud1b5\ud574 \uc804\ub2ec \ubd80\ud0c1 \ub4dc\ub9bd\ub2c8\ub2e4. \n\ube44\uc9c0\ub2c8\uc2a4 \ubb38\uc758: https://bizpinkfong.zendesk.com/hc/ko/\n\n\n",
        "majorAgeInThread": null,
        "CPV": 778.0936733948782,
        "owner": null,
        "currency": "KRW",
        "viewCount": 6787208386,
        "standardCommercialPrice": 149183900,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "2333edb0-1955-4d84-88c5-03e06341a0bd",
        "uploadsPlaylistId": "UUqXwKu6dKobXEQFhdKtiJLQ",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu9_KRRXYQLvtYocDN2ddj0sGWPtLiG_cjETvOYGsw=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 7,
        "lastRank": 24
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/86a2c79a-21a9-41b5-85ea-cde54455e0d7",
        "youtubeChannelId": "UC9rMiEjNaCSsebs31MRDCRA",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Stray Kids",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 2064433,
        "preferenceRatioOfCommercials": 1.0,
        "genderRatioInThread": 0.95,
        "createdAt": "2019-04-12T08:01:21.948000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 10900000,
        "lastUpdatedAt": "2022-10-31T02:08:49.804000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "Stray Kids Official YouTube",
        "majorAgeInThread": 10.0,
        "CPV": 68.087894351621,
        "owner": null,
        "currency": "KRW",
        "viewCount": 2297941066,
        "standardCommercialPrice": 140562896,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "86a2c79a-21a9-41b5-85ea-cde54455e0d7",
        "uploadsPlaylistId": "UU9rMiEjNaCSsebs31MRDCRA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ZCM7NOMgHdmqYhSFyentnIYFtrGASRNSL5XaHiyvhG1FU03GEyNop3MnWWnCxh7h_zp-P6z7ZB0=s240-c-k-c0x00ffffff-no-nd-rj",
        "lastRankInCategory": 13,
        "lastRank": 26
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/62dcef58-f91f-4677-99ef-d767dc993e20",
        "youtubeChannelId": "UCIafb9ExBkh4WsCOagZssZA",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "\uc124\uae30\uc591SULGI",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 10,
        "showAtYouha": true,
        "averageCommercialViewCount": 2086554,
        "preferenceRatioOfCommercials": 0.1591067195182419,
        "genderRatioInThread": 0.875,
        "createdAt": "2019-05-29T01:41:59.994000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 10900000,
        "lastUpdatedAt": "2022-10-31T02:09:43.400000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "\ub9ac\uc5bc\uc0ac\uc6b4\ub4dc \uba39\ubc29\uc744 \uc62c\ub9ac\ub294 \uc124\uae30\uc591\uc785\ub2c8\ub2e4 :)\n\uba54\ub274\ucd94\ucc9c\ub3c4 \uc88b\uace0 \uc5b4\ub5a4 \ud53c\ub4dc\ubc31\uc774\ub4e0 \uac10\uc0ac\ud788 \ub4e3\uaca0\uc2b5\ub2c8\ub2e4\n\uc81c \uc601\uc0c1\uc744 \ubcf4\uc2dc\ub294 \ubd84\ub4e4 \ubaa8\ub450 \uace0\ub9c8\uc6cc\uc694 \uc0ac\ub791\ud574\uc694\u2661\n\n\uc774\uba54\uc77c sulgiyang0329@gmail.com\n\uc778\uc2a4\ud0c0 \uc544\uc774\ub514 sulgiiiii",
        "majorAgeInThread": 40.0,
        "CPV": 65.60208554391595,
        "owner": "d357316d-7d0a-44d2-819a-0357ea8e8036",
        "currency": "KRW",
        "viewCount": 2737442006,
        "standardCommercialPrice": 136882294,
        "descriptionOnYouha": "",
        "channelCategory": "7553fabb-6268-42a4-8c00-688d39d09568",
        "id": "62dcef58-f91f-4677-99ef-d767dc993e20",
        "uploadsPlaylistId": "UUIafb9ExBkh4WsCOagZssZA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_rmqetzkZ2dDwgnG-k1iX7YZvM1Ru1SyEqWHGe8Q=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 4,
        "lastRank": 25
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/05789eb7-6f5e-4b2a-a86f-ca0595d6a1f9",
        "youtubeChannelId": "UC0vDCy8moGUhR7kRL19wWpw",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Toymong tv \ud1a0\uc774\ubabdTV",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": null,
        "createdAt": "2019-04-12T07:55:33.860000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 10500000,
        "lastUpdatedAt": "2022-10-31T02:09:20.456000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "\ud1a0\uc774\ubabd\uc5d0 \uc624\uc2e0 \uc5ec\ub7ec\ubd84~ \ud658\uc601\ud569\ub2c8\ub2e4^^\n\ub9e4\uc77c \uc5c5\ub370\uc774\ud2b8\ub418\ub294 \uc7a5\ub09c\uac10\ub180\uc774~\n\ub9ce\uc774 \uad6c\ub3c5\ud574 \uc8fc\uc138\uc694\u2661\n\uc88b\uc544\uc694~\ubabd!  \uad6c\ub3c5~\ubabd!\n-------------------------------------------------------------\nWelcome to coming to ToyMong. ^^\ntoy play or updated every day,\nPlease, subscribed to it much \u2661\nThat sounds good! mong! Subscription! mong!",
        "majorAgeInThread": null,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 4364581797,
        "standardCommercialPrice": 142877085,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "05789eb7-6f5e-4b2a-a86f-ca0595d6a1f9",
        "uploadsPlaylistId": "UU0vDCy8moGUhR7kRL19wWpw",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_9XBcClEYO8GY4Nrub2-RuJPdjg3evStASAFGvwQ=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 8,
        "lastRank": 28
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/decd1f80-c0ac-46ec-a972-0b65faa1ae52",
        "youtubeChannelId": "UC_pwIXKXNm5KGhdEVzmY60A",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Stone Music Entertainment",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.75,
        "createdAt": "2019-04-12T07:55:33.942000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 10500000,
        "lastUpdatedAt": "2022-10-31T02:09:02.163000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "Stone Music Entertainment is the leader of the worldwide K-POP sensation. Standing on top of Korea's music industry with the largest scale of investment, production and distribution, Stone Music Entertainment's exceptional operation drives the global music scene.\n\n[\uc74c\uc6d0\uc720\ud1b5 \ubb38\uc758]\n\n\uc548\ub155\ud558\uc138\uc694, Stone Music Entertainment \uc785\ub2c8\ub2e4.\n\n\ud604\uc7ac \ub2f9\uc0ac \ubc1c\ub9e4 \ud504\ub85c\uc138\uc2a4\ub294 \uc74c\uc6d0\uad00\ub9ac \uc0ac\uc774\ud2b8\uc778 GEMSTONE\uc5d0 \ud68c\uc6d0\uac00\uc785 \ud6c4 \uc74c\uc6d0, \uc568\ubc94\uc18c\uac1c\uae00, \uc568\ubc94\ucee4\ubc84 \ub4f1\uc744 \uc5c5\ub85c\ub4dc \ud574\uc8fc\uc2dc\uba74 \uc720\ud1b5 \uc2ec\uc0ac \uc774\ud6c4 \uc2b9\uc778\ub41c \uac74\uc5d0 \ud55c\ud558\uc5ec \uc568\ubc94\ubc1c\ub9e4\uac00 \uc9c4\ud589\ub429\ub2c8\ub2e4.\n\n\uad6c\uccb4\uc801\uc778 \uc568\ubc94 \ubc1c\ub9e4\uc2dc\uae30 \ub4f1\uc740 \uc2ec\uc0ac\uc2b9\uc778 \uc774\ud6c4 \ud611\uc758\ud558\uac8c \ub429\ub2c8\ub2e4.\n\n\uc74c\uc6d0\uc720\ud1b5 \ubb38\uc758\ub294 \ud558\uae30 \ub9c1\ud06c\uc5d0 \uc811\uc18d\ud558\uc5ec \uacc4\uc815 \uc2e0\uccad \ud6c4 \uc9c4\ud589 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.\n\n\u25b6Gemstone URL:  https://gemstone.geniemusic.co.kr/\n",
        "majorAgeInThread": 40.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 9153186054,
        "standardCommercialPrice": 135768231,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "decd1f80-c0ac-46ec-a972-0b65faa1ae52",
        "uploadsPlaylistId": "UU_pwIXKXNm5KGhdEVzmY60A",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/jv3r-jNHhG2jktdZcbxgdOUqdX6Yu-AbrpS6kYpYAeoAc0nZyMB5x7jjdjoDzxmHo2Q0LZQC=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 14,
        "lastRank": 27
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/46b30faa-b46c-4b0a-89b8-d959a0e24928",
        "youtubeChannelId": "UCPKNKldggioffXPkSmjs5lQ",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "[\ud584\uc9c0]Hamzy",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 30,
        "showAtYouha": true,
        "averageCommercialViewCount": 7071142,
        "preferenceRatioOfCommercials": 0.13673505366701622,
        "genderRatioInThread": 0.773,
        "createdAt": "2019-09-23T04:22:52.804000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 10500000,
        "lastUpdatedAt": "2022-10-31T02:09:21.045000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "\u2764 \ub300\ub9ac\ub9cc\uc8711000%%% [\ud584\uc9c0]Hamzy's \uba39\ubc29 \u2764\n\n\ubb38\uc758 : hjh35550@gmail.com",
        "majorAgeInThread": 20.0,
        "CPV": 18.697659303122467,
        "owner": "289bcbe5-0f14-4f3d-ab77-ec98ec96d417",
        "currency": "KRW",
        "viewCount": 3425016811,
        "standardCommercialPrice": 132213804,
        "descriptionOnYouha": "",
        "channelCategory": "7553fabb-6268-42a4-8c00-688d39d09568",
        "id": "46b30faa-b46c-4b0a-89b8-d959a0e24928",
        "uploadsPlaylistId": "UUPKNKldggioffXPkSmjs5lQ",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_x4cDqBlu11HMji0kbSwwVYs2t-uCnhSFSHcCX9g=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 5,
        "lastRank": 29
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/a713ad55-145d-4087-b0d4-3a34080d8a03",
        "youtubeChannelId": "UCMa-5a4Hg3KnbiDOvhdfb3w",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "TwinRoozi \uc30d\ub465\uc774 \ub8e8\uc9c0",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 1655549,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.5,
        "createdAt": "2019-05-28T01:17:05.757000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 10400000,
        "lastUpdatedAt": "2022-10-31T02:09:18.539000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "Hi~\nThe TwinRoozi is identical twins.\nI'd like to upload a variety of food and daily V-logs.~^^\n\nBusiness contact: kunstwoo@gmail.com\n\n\uc30d\ub465\uc774 \ub8e8\uc9c0\ub294 \uc77c\ub780\uc131 \uc30d\ub465\uc774\uc785\ub2c8\ub2e4.\n\uba39\uac70\ub9ac\uc640 \uc5ec\ud589 \uc77c\uc0c1 V-log \ub450\ub8e8\ub450\ub8e8 \uc62c\ub9ac\uaca0\uc2b5\ub2c8\ub2e4~^^\n\n\ube44\uc988\ub2c8\uc2a4 \ubb38\uc758: kunstwoo@gmail.com",
        "majorAgeInThread": 10.0,
        "CPV": 85.53859535416953,
        "owner": null,
        "currency": "KRW",
        "viewCount": 6217368729,
        "standardCommercialPrice": 141613336,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "a713ad55-145d-4087-b0d4-3a34080d8a03",
        "uploadsPlaylistId": "UUMa-5a4Hg3KnbiDOvhdfb3w",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu-wCPWgoTvwtJ6xKLEaVlOzcn_-7YKAkf0O6kjOTA=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 9,
        "lastRank": 30
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/00672a5e-e36b-49c2-822e-8fa697dfc720",
        "youtubeChannelId": "UCraaN4FiNe7l3F4XR6s246A",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "\uc11c\uc740\uc77c\uc0c1\uc774\uc57c\uae30",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": null,
        "createdAt": "2019-04-12T07:55:56.735000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 10200000,
        "lastUpdatedAt": "2022-10-31T02:08:51.913000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "\uc11c\uc740\uc774\uc57c\uae30\uc5d0 \uc62c\ub9ac\uc9c0 \ubabb\ud55c \ub3d9\uc601\uc0c1\ub4e4\uc744 \uc62c\ub9ac\uace0 \uc788\uc2b5\ub2c8\ub2e4. \n\uc77c\uc0c1 \uc774\uc57c\uae30, \ud0a4\uc988\uce74\ud398, \uce5c\uad6c\ub4e4 \uc774\uc57c\uae30\uc744 \uc62c\ub9b4 \uc608\uc815\uc785\ub2c8\ub2e4.\n\uadc0\uc5fd\uac8c \ubd10\uc8fc\uc138\uc694^^",
        "majorAgeInThread": null,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 2533410104,
        "standardCommercialPrice": 139083385,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "00672a5e-e36b-49c2-822e-8fa697dfc720",
        "uploadsPlaylistId": "UUraaN4FiNe7l3F4XR6s246A",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu8ynkIRO1ysJFs2NEbZPvaFGN01KJr-Po7Ex0Gn=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 10,
        "lastRank": 31
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/11486810-044f-4ae7-afc7-4f01685799c6",
        "youtubeChannelId": "UCe52oeb7Xv_KaJsEzcKXJJg",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "MBCkpop",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 92346,
        "preferenceRatioOfCommercials": 0.4381332592162114,
        "genderRatioInThread": 0.741,
        "createdAt": "2019-04-12T07:55:38.515000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 10000000,
        "lastUpdatedAt": "2022-10-31T02:08:51.675000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "Welcome to the official YouTube page of MBC, MBC Kpop\nEnjoy \"Show! Music Core\" the hottest K-pop program and the essence of live music on \"The Masked Singer\". Subscribe and stay tuned for the latest updates!",
        "majorAgeInThread": 40.0,
        "CPV": 1515.4566629848614,
        "owner": null,
        "currency": "KRW",
        "viewCount": 8406594568,
        "standardCommercialPrice": 139946361,
        "descriptionOnYouha": "",
        "channelCategory": "40095cbe-381b-45a5-a314-1106d370bd73",
        "id": "11486810-044f-4ae7-afc7-4f01685799c6",
        "uploadsPlaylistId": "UUe52oeb7Xv_KaJsEzcKXJJg",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu-aHTHvY_WU4Cj6URDgF6ufqmlDHQHTFtgNJTqADA=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 2,
        "lastRank": 32
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/dac46ebd-7eab-4581-8b04-d8c88bbf1c86",
        "youtubeChannelId": "UCph-WGR0oCbJDpaWmNHb5zg",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Larva TUBA",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.5,
        "createdAt": "2019-05-28T01:17:05.307000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 9850000,
        "lastUpdatedAt": "2022-10-31T02:09:18.239000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "Welcome to the official LARVA channel by tubaN.\n\ntubaN is an animation studio well known for its skillful techniques on 3D CGI production.  \nThe company has more than 12 years of experience of creating various portfolios.\nOver the years, \u2018TUBA n\u2019 has been exploring new paths to deliver happiness to more people. \n\nOur priority is to deliver a \"Big Smile For Everyone\".",
        "majorAgeInThread": 40.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 4390191916,
        "standardCommercialPrice": 134647926,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "dac46ebd-7eab-4581-8b04-d8c88bbf1c86",
        "uploadsPlaylistId": "UUph-WGR0oCbJDpaWmNHb5zg",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu__IQt5TsoGgpykEnJ4BmXOExmVi5yuBOaL4Ilf4A=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 11,
        "lastRank": 33
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/089ff415-2254-4650-bd45-1bd49fd0ad3b",
        "youtubeChannelId": "UCtiObj3CsEAdNU6ZPWDsddQ",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "TOMORROW X TOGETHER OFFICIAL",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.929,
        "createdAt": "2019-05-28T01:17:00.732000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 9850000,
        "lastUpdatedAt": "2022-10-31T02:09:45.519000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "#\ud22c\ubaa8\ub85c\uc6b0\ubc14\uc774\ud22c\uac8c\ub354 \uacf5\uc2dd \uc720\ud29c\ube0c \uc785\ub2c8\ub2e4.\nThis is the official YouTube for #TOMORROW_X_TOGETHER",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 972172451,
        "standardCommercialPrice": 127950529,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "089ff415-2254-4650-bd45-1bd49fd0ad3b",
        "uploadsPlaylistId": "UUtiObj3CsEAdNU6ZPWDsddQ",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/v6IV5xUMnlJ-ecsQxRZT3ez3kbknJwEgspfMmjHMw-oUjDRVhz0W00DzNSpl1F4r7A2CjKy5TA=s240-c-k-c0x00ffffff-no-nd-rj",
        "lastRankInCategory": 15,
        "lastRank": 34
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/02150218-51e2-4dda-8f44-242636ea7458",
        "youtubeChannelId": "UC-oIulX1JBJ0aKAB0GHnThA",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "\ube14\ub77c\ub4dc\uc640 \ub2c8\ud0a4\ud0c0",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 629366,
        "preferenceRatioOfCommercials": 0.052232499768947185,
        "genderRatioInThread": null,
        "createdAt": "2020-05-27T06:00:19.082000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 9500000,
        "lastUpdatedAt": "2022-10-31T02:09:36.419000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "Vlad & Niki \uac00\uac8c: https://vladandniki.com/",
        "majorAgeInThread": null,
        "CPV": 206.87786121271247,
        "owner": null,
        "currency": "KRW",
        "viewCount": 3906963929,
        "standardCommercialPrice": 130201892,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "02150218-51e2-4dda-8f44-242636ea7458",
        "uploadsPlaylistId": "UU-oIulX1JBJ0aKAB0GHnThA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu82yrDyod3gIYDYfLTYlw6-BtB6oPNOZVUnxJuZKg=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 12,
        "lastRank": 35
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/b04e5968-063f-416a-a5fb-702d52a4fb40",
        "youtubeChannelId": "UC2B5onlYkZ7IaVekR9yIB6w",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "GONGSAM TABLE \uc774\uacf5\uc0bc",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 10,
        "showAtYouha": true,
        "averageCommercialViewCount": 2273487,
        "preferenceRatioOfCommercials": 0.18274365911629728,
        "genderRatioInThread": 0.867,
        "createdAt": "2019-09-16T05:21:06.381000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 9500000,
        "lastUpdatedAt": "2022-10-31T02:09:34.559000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "\uc548\ub155\ud558\uc138\uc694!! :)\n\ub9db\uc788\ub294 \uc74c\uc2dd\uc774 \uac00\ub4dd\ud55c GONG SAM TABLE \uc774\uacf5\uc0bc \uc785\ub2c8\ub2e4!!\n\uba39\uc74c\uc9c1\uc2a4\ub7ec\uc6b4 \ub9ac\uc5bc\uc0ac\uc6b4\ub4dc \uba39\ubc29 \uc601\uc0c1\uc744 \ub9cc\ub4e4\uace0 \uc788\uc5b4\uc694!!\ud83d\ude4b\n\nHllo, This is GONG SAM :)\nI'm making a realistic sound eating show(Mukbang)!!\n\nfacebook : GONGSAMTABLE203\ninstagram :  gongsam_table\nTik Tok : gongsam_table\nbilibili : GONGSAM\u96f6\u53c1\n\n\ubb38\uc758\uc0ac\ud56d: gongsam203@gmail.com",
        "majorAgeInThread": 10.0,
        "CPV": 52.99755397765635,
        "owner": "37fad706-2fe9-4d24-8994-4487b66af97f",
        "currency": "KRW",
        "viewCount": 2089496842,
        "standardCommercialPrice": 120489250,
        "descriptionOnYouha": "",
        "channelCategory": "7553fabb-6268-42a4-8c00-688d39d09568",
        "id": "b04e5968-063f-416a-a5fb-702d52a4fb40",
        "uploadsPlaylistId": "UU2B5onlYkZ7IaVekR9yIB6w",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_PSYt3oOu1LUMeeP7RxmezuUHYAmMZkz08Poj-aQ=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 6,
        "lastRank": 36
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/5288402c-0f4a-46a7-ad2c-cabdc6f90e35",
        "youtubeChannelId": "UCVihezVtsguXEouYvtKmKYA",
        "tags": [],
        "priceVerified": true,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "\uc11c\uc740\uc774\uc57c\uae30[SeoeunStory]",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.5,
        "createdAt": "2019-04-12T07:55:35.300000Z",
        "status": "verified",
        "belongsWithMCN": "2042a7ef-c5c8-45c4-9986-02daeb8a8021",
        "nation": "KR",
        "subscriberCount": 9430000,
        "lastUpdatedAt": "2022-10-31T02:09:24.174000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "\uc560\uc815\uacb0\ud54d \ud604\uc0c1\uc744 \ubcf4\uc778 \uc11c\uc740\uc774\ub97c \ub354 \uc798 \ud0a4\uc6b0\uace0 \ub354 \uc798 \ub180\uc544\uc8fc\uae30 \uc704\ud55c \uc5c4\ub9c8\uc544\ube60\uc758 \ub178\ub825\uc785\ub2c8\ub2e4. ^^\n\uc7ac\ubc0c\uac8c \ubd10\uc8fc\uc2dc\uace0 \uc11c\uc740\uc774\uac00 \ucee4\uac00\ub294\uac78 \uc9c0\ucf1c\ubd10\uc8fc\uc138\uc694 ~~~\n\n",
        "majorAgeInThread": 10.0,
        "CPV": 33.72097467105189,
        "owner": null,
        "currency": "KRW",
        "viewCount": 3289820332,
        "standardCommercialPrice": 30000000,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "5288402c-0f4a-46a7-ad2c-cabdc6f90e35",
        "uploadsPlaylistId": "UUVihezVtsguXEouYvtKmKYA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu--73-d1pgjKbgt32wHoA_C6FKFxX8-_oSZDYKG=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 13,
        "lastRank": 37
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/678fef4f-3490-4243-a1c8-c37953be65a5",
        "youtubeChannelId": "UCzCedBCSSltI1TFd3bKyN6g",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "EXO",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.889,
        "createdAt": "2019-04-12T08:01:21.887000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 8960000,
        "lastUpdatedAt": "2022-10-31T02:09:56.391000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "Welcome to EXO Official YouTube Channel!\n\n",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 678257810,
        "standardCommercialPrice": 117189550,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "678fef4f-3490-4243-a1c8-c37953be65a5",
        "uploadsPlaylistId": "UUzCedBCSSltI1TFd3bKyN6g",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/e3qrmehEVcT91H56oXJF2TdHGQBUElvTE_Bqb_0n_NhMOHuEAL0qRGNlwoIIEDd7o3E5CxhBcT0=s240-c-k-c0x00ffffff-no-nd-rj",
        "lastRankInCategory": 16,
        "lastRank": 38
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/d02ee624-2a3f-4016-a321-cf95887571ad",
        "youtubeChannelId": "UCepUWUpH45hRTi-QePdq1Bg",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Mnet TV",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 483137,
        "preferenceRatioOfCommercials": 0.13796467731259632,
        "genderRatioInThread": 0.522,
        "createdAt": "2019-04-12T07:55:38.496000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 8940000,
        "lastUpdatedAt": "2022-10-31T02:09:31.869000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "\ub2e4\uc591\ud55c \uc74c\uc545 \uc608\ub2a5\uc73c\ub85c \uc990\uac70\uc6c0\uc744 \uc120\uc0ac\ud558\ub294\nMnet \uc74c\uc545 \ubc84\ub77c\uc774\uc5b4\ud2f0 \uacf5\uc2dd \ucc44\ub110 \"Mnet TV\ud83d\udcfa\"\n\n\u24d2CJ ENM. Corp ALL RIGHTS RESERVED\n",
        "majorAgeInThread": 20.0,
        "CPV": 242.05749507903556,
        "owner": null,
        "currency": "KRW",
        "viewCount": 11062138252,
        "standardCommercialPrice": 116946932,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "d02ee624-2a3f-4016-a321-cf95887571ad",
        "uploadsPlaylistId": "UUepUWUpH45hRTi-QePdq1Bg",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/NLKnIGLdCfPuDOm-VDJWIPsX5Mr8bG9ea9IZ1hgAjHvLF5wR720CGGaUFHRbzQ5Towdb_-iHEio=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 17,
        "lastRank": 39
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/608e6652-6b72-4e93-97f5-db1d6714d7be",
        "youtubeChannelId": "UC4PpFUrfT2Pou7OwpVF0MUQ",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "\uc3d8\uc601 Ssoyoung",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 10,
        "showAtYouha": true,
        "averageCommercialViewCount": 647830,
        "preferenceRatioOfCommercials": 0.2702633691941064,
        "genderRatioInThread": 0.812,
        "createdAt": "2019-04-12T08:01:32.696000Z",
        "status": "verified",
        "belongsWithMCN": "9661b355-2be1-446e-9fba-37e4bd1971f8",
        "nation": "KR",
        "subscriberCount": 8890000,
        "lastUpdatedAt": "2022-10-31T02:09:49.463000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "Hello, I'm Ssoyoung!\n\nPlease give us lots of love and support!\n\u2018Subscription\u2019, \u2018Like\u2019, and \u2018Comment\u2019 are love.\u2661\nI will play the real sound of eating all kinds of food.\n\n\uc548\ub155\ud558\uc138\uc694 \uc3d8\uc601 Ssoyoung\uc785\ub2c8\ub2e4!\n\n\ub9ce\uc740 \uad00\uc2ec\uacfc \uc0ac\ub791 \ubd80\ud0c1\ub4dc\ub824\uc694!\n\uad6c\ub3c5\uacfc \uc88b\uc544\uc694, \ub313\uae00\uc740 \uc0ac\ub791\uc785\ub2c8\ub2e4\u2661\n\n\uba39\ubc29 \uc778\uc2a4\ud0c0\uadf8\ub7a8(Mukbang Instagram)  @ssoyoung_Mukbang\n\uc77c\uc0c1 \uc778\uc2a4\ud0c0\uadf8\ub7a8(Daily Life Instagram) @ssoyoung6497\n\ud2f1\ud1a1(Tiktok)@ssoyoungmukbang\n\n\ucf5c\ub77c\ubcf4, \ud611\ucc2c \ub4f1 \ube44\uc988\ub2c8\uc2a4 \ubb38\uc758\ub294 \uc544\ub798 \uba54\uc77c\ub85c \ubcf4\ub0b4\uc8fc\uc138\uc694\nssoyoung@alohamedia.co.kr\n\nFor global business inquiries:\nssoyoung@alohamedia.co.kr\n",
        "majorAgeInThread": 10.0,
        "CPV": 46.308445116774465,
        "owner": "a7c53833-e190-4177-a649-e83e647a475b",
        "currency": "KRW",
        "viewCount": 1168162711,
        "standardCommercialPrice": 30000000,
        "descriptionOnYouha": "",
        "channelCategory": "7553fabb-6268-42a4-8c00-688d39d09568",
        "id": "608e6652-6b72-4e93-97f5-db1d6714d7be",
        "uploadsPlaylistId": "UU4PpFUrfT2Pou7OwpVF0MUQ",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu9Zi4wl9Xjrvx1i0Ad9jjinD878gx-442z8b6x4ww=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 7,
        "lastRank": 40
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/4cf222ad-276f-424a-b4bd-a21babe4d4d9",
        "youtubeChannelId": "UCiBr0bK06imaMbLc8sAEz0A",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "MBCentertainment",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 16092,
        "preferenceRatioOfCommercials": 0.03479990057171265,
        "genderRatioInThread": 0.654,
        "createdAt": "2019-04-12T07:55:46.534000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 8870000,
        "lastUpdatedAt": "2022-10-31T02:09:38.489000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "Welcome to the official YouTube page of MBC, MBCentertainment\nA perfect channel full of entertainment and fun!\nEnjoy our exclusive content, Subscribe and stay tuned for the latest updates!",
        "majorAgeInThread": 40.0,
        "CPV": 7780.748757146408,
        "owner": null,
        "currency": "KRW",
        "viewCount": 16369073606,
        "standardCommercialPrice": 125207809,
        "descriptionOnYouha": "",
        "channelCategory": "40095cbe-381b-45a5-a314-1106d370bd73",
        "id": "4cf222ad-276f-424a-b4bd-a21babe4d4d9",
        "uploadsPlaylistId": "UUiBr0bK06imaMbLc8sAEz0A",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu8OJ0Q1TeduOPb-U0KcXJxaQO8PAF81NgxjQDn6uQ=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 3,
        "lastRank": 41
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/fc607f46-3642-4a7d-8f79-207e5c7764a0",
        "youtubeChannelId": "UCJedRe-OQCN-75DhLmG3VPQ",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Boram Tube [\u5b9d\u84dd\u548c\u670b\u53cb\u4eec]",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 6192420,
        "preferenceRatioOfCommercials": 0.03538250718257198,
        "genderRatioInThread": 0.5,
        "createdAt": "2019-04-12T07:55:33.821000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 8830000,
        "lastUpdatedAt": "2022-10-31T02:09:26.948000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "\uc548\ub155\ud558\uc138\uc694~^0^\n\n5\uc0b4 \ubcf4\ub78c\uc774\uc640 7\uc0b4 \ucf54\ub09c 6\uc0b4 \ub610\uce58\uc0bc\ucd0c\uc774 \uc7ac\ubbf8\uc788\uac8c \ub9cc\ub4e4\uc5b4 \uac00\ub294 \ucc44\ub110\uc774\ub78d\ub2c8\ub2e4.\n\n\ubcf4\ub78c\uc774\uc640 \ucf54\ub09c \ub610\uce58\uc0bc\ucd0c\uc740 \ubaa8\ub450 \uce5c\uad6c\ub78d\ub2c8\ub2e4~^^ \n\n\uc7a5\ub09c\uac10, \ucc4c\ub9b0\uc9c0\uac8c\uc784, \uc0c1\ud669\uadf9, \ub180\uc774, \uc5ec\ud589\ub4f1 \uc7ac\ubbf8\uc788\ub294 \ub0b4\uc6a9\uc774 \ub9e4\uc77c \uc5c5\ub370\uc774\ud2b8 \ub429\ub2c8\ub2e4~ \n\n\uad6c\ub3c5\uad6c\ub3c5\ud574\uc11c \uc0ac\ub791\uc2a4\ub7f0 \ubcf4\ub78c\uc774\uc640 \ub9e4\uc77c \ub9cc\ub098\ubcf4\uc544\uc694~^^ \n\n\ubcf4\ub78c\ud29c\ube0c \ubb34\ub8cc \uad6c\ub3c5\ud558\uae30\u2661 https://goo.gl/a2ERvp\n\n\ucc44\ub110 \uad6c\ub3c5\uacfc \uc88b\uc544\uc694\ub294 \ubcf4\ub78c\ud29c\ube0c \ucc44\ub110\uc5d0\uac8c \ud070 \ud798\uc774\ub429\ub2c8\ub2e4. \n\n\ud56d\uc0c1 \uc7ac\ubbf8\uc788\uace0 \uc990\uac81\uace0 \uc720\ucf8c\ud55c \uc601\uc0c1\uc73c\ub85c \ucc3e\uc544\uc62c\uaed8\uc694~ \uc5ec\ub7ec\ubd84 \uac10\uc0ac\ud569\ub2c8\ub2e4 \uc0ac\ub791\ud574\uc6a9~ ^0^  \n\n\nHello~^0^.\n\nThis is the Tube that 5year old Boram, 7 year old Conan, 6 year old Thotchi and a mother are making.\n\nBoram, Conan and Thotchi are friends.\n\nWe are updating toys, challenges, playing, role playing and traveling everyday.\n\nSubscribe Boram Tube to see boram each day.\n\nTo subscribe boram tube for free : https://www.youtube.com/c/BoramTube\ubcf4\ub78c\ud29c\ube0c\n\nSubscribe and Like can be very powerful to us.\n\nWe will always bring funny interesting pleasant videos.\n\nThank you.\nWe love you all~ ^0^\n\n\n\n\n\n\n\n\n * \ube44\uc9c0\ub2c8\uc2a4/\uad11\uace0/\uc81c\ud734 \ubb38\uc758: boramtube@gmail.com",
        "majorAgeInThread": 10.0,
        "CPV": 19.64657985084991,
        "owner": null,
        "currency": "KRW",
        "viewCount": 2363510946,
        "standardCommercialPrice": 121659874,
        "descriptionOnYouha": "",
        "channelCategory": "e1ec8454-a51a-4157-b4ab-deb6b1c3ecaf",
        "id": "fc607f46-3642-4a7d-8f79-207e5c7764a0",
        "uploadsPlaylistId": "UUJedRe-OQCN-75DhLmG3VPQ",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu-YBA0_7AJFKAKykjR6O7wTJEb7cHnYERqzWxFavg=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 14,
        "lastRank": 42
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/7334290f-a2de-46e1-9ee4-9cfa377c8235",
        "youtubeChannelId": "UCNYi_zGmR519r5gYdOKLTjQ",
        "tags": [],
        "priceVerified": true,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Jennierubyjane Official",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 4498798,
        "preferenceRatioOfCommercials": 1.0,
        "genderRatioInThread": 0.9642857142857143,
        "createdAt": "2021-01-17T15:00:41.587000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 8780000,
        "lastUpdatedAt": "2022-10-31T02:09:18.136000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "",
        "majorAgeInThread": 10.0,
        "CPV": 41.610469063069736,
        "owner": null,
        "currency": "KRW",
        "viewCount": 111181295,
        "standardCommercialPrice": 187197095,
        "descriptionOnYouha": "",
        "channelCategory": "190b8643-b5d2-4255-a107-8d2fc2dd4e1b",
        "id": "7334290f-a2de-46e1-9ee4-9cfa377c8235",
        "uploadsPlaylistId": "UUNYi_zGmR519r5gYdOKLTjQ",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_daroa26eW6xhWgeN0_cL1s9myixtzvHie4fjW=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 1,
        "lastRank": 43
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/2356ac6c-f8e3-4e7d-ac0d-4b3a8ce6928d",
        "youtubeChannelId": "UCWxCyZibDIWIrGIgP25mbfw",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "iKON",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.833,
        "createdAt": "2019-04-12T07:55:36.188000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 8750000,
        "lastUpdatedAt": "2022-10-31T02:09:51.937000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "iKON Official YouTube Channel\n\uc544\uc774\ucf58 \uacf5\uc2dd \uc720\ud29c\ube0c \ucc44\ub110\uc785\ub2c8\ub2e4.\n\nJAY, BOBBY, SONG, JU-NE, DK, CHAN\n\uae40\uc9c4\ud658, BOBBY, \uc1a1\uc724\ud615, \uad6c\uc900\ud68c, \uae40\ub3d9\ud601, \uc815\ucc2c\uc6b0",
        "majorAgeInThread": 20.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 2392573611,
        "standardCommercialPrice": 114640234,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "2356ac6c-f8e3-4e7d-ac0d-4b3a8ce6928d",
        "uploadsPlaylistId": "UUWxCyZibDIWIrGIgP25mbfw",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu85DkezXeZxg-wc5kh6YBRKIT7MWK11CSqQpfjI=s240-c-k-c0x00ffffff-no-rj-mo",
        "lastRankInCategory": 18,
        "lastRank": 44
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/c6608ffa-b6fd-4944-9afe-2ad3ef7956ea",
        "youtubeChannelId": "UCTQVIXvcHrR9jYoJ6qaBAow",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "M2",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 113307,
        "preferenceRatioOfCommercials": 0.49953378729315534,
        "genderRatioInThread": 0.9,
        "createdAt": "2019-04-12T07:55:48.206000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 8700000,
        "lastUpdatedAt": "2022-10-31T02:09:20.882000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "Mnet Digital Studio, M2 \n\uc5e0\ub137 \ub514\uc9c0\ud138 \uc2a4\ud29c\ub514\uc624, M2(\uc5e0\ud22c)\n\n\ud611\uc5c5 \ubc0f \uc81c\ud734 \ubb38\uc758: mnetdigitalstudio@gmail.com",
        "majorAgeInThread": 40.0,
        "CPV": 1006.404317473766,
        "owner": null,
        "currency": "KRW",
        "viewCount": 7234254227,
        "standardCommercialPrice": 114032654,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "c6608ffa-b6fd-4944-9afe-2ad3ef7956ea",
        "uploadsPlaylistId": "UUTQVIXvcHrR9jYoJ6qaBAow",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu-9OiE_xfvFOhAqnaTFvN0kdVUfmy4LlEu3guirWQ=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 19,
        "lastRank": 45
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/1effec13-7f53-43f0-a8e1-67eabdbc8fa1",
        "youtubeChannelId": "UCfkXDY7vwkcJ8ddFGz8KusA",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "SEVENTEEN",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.833,
        "createdAt": "2019-04-12T08:01:21.871000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 8590000,
        "lastUpdatedAt": "2022-10-31T02:09:23.899000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "#SEVENTEEN Official Youtube\n#\uc138\ube10\ud2f4 \uacf5\uc2dd \uc720\ud29c\ube0c\n",
        "majorAgeInThread": 20.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 3312466730,
        "standardCommercialPrice": 112695150,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "1effec13-7f53-43f0-a8e1-67eabdbc8fa1",
        "uploadsPlaylistId": "UUfkXDY7vwkcJ8ddFGz8KusA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/2P2_SgKCaShQOMAe0C-wqpz-PI9jxD2-LeCgr1v4p2uQHMWKtUG8dwJGufaRO86Kc5dvGQaUhA=s240-c-k-c0x00ffffff-no-nd-rj",
        "lastRankInCategory": 20,
        "lastRank": 46
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/88b83ce3-8c1b-4466-a70c-aba9cdfd69fa",
        "youtubeChannelId": "UCRtoqRleHkDQRVgN9OwV6TA",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "SIO ASMR",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 10,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.727,
        "createdAt": "2019-05-28T01:16:49.994000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 8390000,
        "lastUpdatedAt": "2022-10-31T02:08:53.481000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "ASMR \uacfc \uba39\ubc29\uc744 \ud558\ub294 \uc2dc\uc624 \uc785\ub2c8\ub2e4\ud83d\ude06\n\uad6c\ub3c5\uacfc \uc88b\uc544\uc694 \uc54c\ub9bc\uc124\uc815 \uace0\ub9d9sio~~!!!\n\nHELLO, This is SIO :) I do ASMR & Eating show. Please click Like and Subscribe!\n\ninstagram.: sio_yo\n\n\uc2dc\uc791\uc77c: 2018.04.15~\n\n\ube44\uc988\ub2c8\uc2a4 \ubb38\uc758: kiki_05@naver.com",
        "majorAgeInThread": 10.0,
        "CPV": 72.06631068718387,
        "owner": null,
        "currency": "KRW",
        "viewCount": 1682047984,
        "standardCommercialPrice": 107377206,
        "descriptionOnYouha": "",
        "channelCategory": "7553fabb-6268-42a4-8c00-688d39d09568",
        "id": "88b83ce3-8c1b-4466-a70c-aba9cdfd69fa",
        "uploadsPlaylistId": "UURtoqRleHkDQRVgN9OwV6TA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu_Vdhb-Prklz-zm17N-ANXy1QsBndGhJevb4RnOlw=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 9,
        "lastRank": 48
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/be201cd1-a24e-4379-b618-972aeba4d220",
        "youtubeChannelId": "UCoLQZ4ZClFqVPCvvjuiUSRA",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": "2022-03-30T07:03:53.390000Z",
        "title": "\ubb38\ubcf5\ud76c Eat with Boki",
        "consentToShareDemographicDataToAdvertiser": true,
        "receivedProposalCountLevel": 10,
        "showAtYouha": true,
        "averageCommercialViewCount": 5894796,
        "preferenceRatioOfCommercials": 0.15147317969460122,
        "genderRatioInThread": 0.8640000000000001,
        "createdAt": "2019-09-10T06:01:07.716000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 8380000,
        "lastUpdatedAt": "2022-10-31T02:09:20.864000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "ASMR Eating :)",
        "majorAgeInThread": 20.0,
        "CPV": 18.195468002624686,
        "owner": "26998d64-0b44-41c2-aff9-a2194d8c82d7",
        "currency": "KRW",
        "viewCount": 2195126435,
        "standardCommercialPrice": 107258572,
        "descriptionOnYouha": "",
        "channelCategory": "7553fabb-6268-42a4-8c00-688d39d09568",
        "id": "be201cd1-a24e-4379-b618-972aeba4d220",
        "uploadsPlaylistId": "UUoLQZ4ZClFqVPCvvjuiUSRA",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu9MQ3EItFfjQrcJ8v6dGQPLPCCECIKxwRvGkRaL0A=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 8,
        "lastRank": 47
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/7a891600-d0df-4cd6-98fe-b3aeef09103f",
        "youtubeChannelId": "UC3SyT4_WLHzN7JmHQwKQZww",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "\uc774\uc9c0\uae08 [IU Official]",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": null,
        "preferenceRatioOfCommercials": null,
        "genderRatioInThread": 0.833,
        "createdAt": "2019-04-12T07:55:48.912000Z",
        "status": "verified",
        "belongsWithMCN": null,
        "nation": "KR",
        "subscriberCount": 8190000,
        "lastUpdatedAt": "2022-10-31T02:09:34.805000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": false,
        "descriptionOnYoutube": "\uc544\uc774\uc720(IU) Official YouTube Channel",
        "majorAgeInThread": 10.0,
        "CPV": null,
        "owner": null,
        "currency": "KRW",
        "viewCount": 1769912733,
        "standardCommercialPrice": 107821705,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "7a891600-d0df-4cd6-98fe-b3aeef09103f",
        "uploadsPlaylistId": "UU3SyT4_WLHzN7JmHQwKQZww",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu-UWvwHCKwBxSfbMOjy5D2z03jrZz4hnOWyksk1gw=s240-c-k-c0x00ffffff-no-rj-mo",
        "lastRankInCategory": 21,
        "lastRank": 49
    },
    {
        "href": "api.youha.info/api/v4/youtubeChannels/372437c8-7779-4a10-bea9-eaeffad99069",
        "youtubeChannelId": "UCgI8VzlDGsHCp0-9Een1eKw",
        "tags": [],
        "priceVerified": false,
        "consentToShareDemographicDataToAdvertiserAt": null,
        "title": "Big Marvel",
        "consentToShareDemographicDataToAdvertiser": null,
        "receivedProposalCountLevel": 0,
        "showAtYouha": true,
        "averageCommercialViewCount": 490170,
        "preferenceRatioOfCommercials": 0.2856661974417039,
        "genderRatioInThread": 0.5,
        "createdAt": "2019-04-22T13:17:10.831000Z",
        "status": "verified",
        "belongsWithMCN": "0787b8c0-733e-4ef5-ba43-01b1807497a1",
        "nation": "KR",
        "subscriberCount": 7950000,
        "lastUpdatedAt": "2022-10-31T02:09:09.205000Z",
        "exclusiveContractWithMCN": false,
        "isContactable": true,
        "descriptionOnYoutube": "contact,business \u2192 steamercyep@gmail.com",
        "majorAgeInThread": 40.0,
        "CPV": 213.98702694983373,
        "owner": null,
        "currency": "KRW",
        "viewCount": 1394854963,
        "standardCommercialPrice": 104890021,
        "descriptionOnYouha": "",
        "channelCategory": "90c02ece-0e65-4b13-964b-f393378610cb",
        "id": "372437c8-7779-4a10-bea9-eaeffad99069",
        "uploadsPlaylistId": "UUgI8VzlDGsHCp0-9Een1eKw",
        "commercialCases": null,
        "thumbnail": "https://yt3.ggpht.com/ytc/AMLnZu-vm7AhikJ4bTXr9N9K2tIcWF0oNGyvfPCX93iHgg=s240-c-k-c0x00ffffff-no-rj",
        "lastRankInCategory": 22,
        "lastRank": 50
    }
]
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
    id: number;
    title: string;
    description: string;
    categories: string[];
    keyword: string;
    target: {
        ages?: AgeProps[],
        sex?: SexProps,
    },
}
export const campaignDefaultProps = {
    id: 0,
    title: "",
    description: "",
    categories: [],
    keyword: "",
    target: {
        ages: [],
        sex: undefined,
    },
}
export const testCampaigns: CampaignProps[] = [
    {
        id: 0,
        title: '동원샘물 캠페인',
        description: '동원 F&B의 동원샘물, 미네마인을 마케팅',
        categories: ['패션'],
        keyword: '동원샘물',
        target: {
            ages: ['20~30대'],
            sex: '여성',
        },
    },
    {
        id: 1,
        title: '네일 아트샵 방문 캠페인',
        description: '동원 F&B의 동원샘물, 미네마인을 마케팅',
        categories: ['패션'],
        keyword: '네일',
        target: {
            ages: ['20~30대'],
            sex: '남성',
        },
    }
]
export const testCampaignsState = atom<CampaignProps[]>({
    key: "testCampaignsState",
    default: testCampaigns
});
export type AdProps = {
    id: number;
    title: string;
    description: string;
    createdAt: string | Date;
    endedAt: string | Date;
    target: {
        ages: AgeProps[],
        sex?: SexProps,
    },
    budget: number;
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
        thumbnail: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD////IyMjo6Oi8vLyJiYm5ubn8/Pzw8PDMzMyBgYGcnJwbGxvU1NSoqKgEBAT29vbX19ff39+ysrIyMjKjo6Nra2s3NzcdHR0MDAxAQEDCwsIrKyteXl52dnaTk5NNTU2YmJhZWVl8fHxnZ2eNjY0mJiZFRUU5UntSAAAFHklEQVR4nO2a22KiMBRFQVQQRUDF+7VK/f8/HFAhOScgcUpoH/Z6mWkISRa5J1oWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODPsFlnbH67FIb4uoycyH4QzUanLyXCJhT/D0Pl8cdIaYTWZKMm3EYmJefhS07gTbd51oKd7QpGP89zIKVnB+tnoCPlYQ9/nsmLQ5wrubLf44/eVo7Vk5+3YJhKye2Kj+nImfR/nsmDxYhXn2AuxWvbcCC+5rgMNGHok7rjOKsyojFD2xeBBgzn7/zyD1wOOaYMXXlQa9+QFLuac1XU9gyzViKNZ60bvumCJdHiGdeMYbyxTBo2NdEns2cZjBjuWGDLhlctwWKoM2E45oHtGn4rs3yd4z6PbmA+9JXAdg13tjpRuFHV5PGYFts3PKiBrRp+Mbes2Md8dTi5xor3JOuJnxrmffd7mexix5kFu+lyb9FV4PHOIrduyMfRSHxSpYMOrOo6/Lom8/78tPyuzOEYkAYRp5PGQrVpuGU16O2LJ9n3PDDDoMrw0BcdOT5atIayxZLHv5PtJtLccIyDkrhnwHDKcj+TAl5Y0TaK4TagUWZ3ksBCaeoPvGUZQ15525EBQ/aF5+yxQx/fmGGvYqZZSq8fale7SRFlIId67Rueab7unj0f0+cnZlgpcCvfPtb52eJbmjY80Wx79GnIv8BQXcKqklExkvBuTEm6MdzRXK9KhPWEoLVIf1XPvmEpsezEcEYzXTS/oWH4qkQ+D3msz3udGNJMo+YXdAztfM4gndC1R7d1VqsDkt+0A8M9LdmsJcO5UsrB6+213GjctXlDOt/zgea/DfOVwVIOSMvXN3LnPHVuqJMWNxzdVtsj684OiyfaRkhG75l5wzstmc7JJDN8be3oyiYr6EaeRVJpnbOQIy66rkO+1W42DCoT8lgjJesIufS+ccMVNQya3yCGbra3CyvK5LHFUCAjV+7UuOGarkgcvjFoMLS9MnqfFZQtJWoY/fn5UAwhCSsoG3tqcDpf06hXTWk6SAVXZiiaNWmVnrJnqcEzb8gOEi/8OTvjcGrPaf6sIdvfKYuahD6PtQ3ZxvL3DNmyTTn3YgXlu6d6wz/TD3lJWCXyLayvbShHi/w6bh0Y0i2wK04XckLem1bahnLzdt8drhk2DPmM+FwNF7BTpkcNaxqS2r8pGXdmaFVcy+yK29Aza8Fu1khrT4S54bduGc0bkpXw0yS4XJf+WD0HfOSvaWiR16WFaZhMS9JODLMe8/aCW8L/xNCXA2KRndxmki4MQ92pqyimriGd80evH8pshnLovgtDSzkzrcNdfGIY0qLbUXJYrG5TaYfvPg87ujCkDaqW11m2tiGdait6QrTJY3ViaF00BIuzJO1Waq0a+nc356Uv2NF3BeVZkr6hdXub4mvi7ciw8S5fXLd8YPj23qK4u+/K0Nq+WyrH4idRnxiG1rl2E1XeH3RlmHX5tO6aIUot6XTjkzrks4P4ZOLHgJ3VYc6pamb02E9ByG1EsccPlVOMkvvjkxSDzuPf2VF6XnlDSqpe5wRQi7yWDnN2cLNb8min/rCkL84EjnLwnCS6GMfSqOoN6R70Jr04LF6cyqkNrHbZHy/9YJbRmw7uzdH1CA+DpN/r9RO/tSRBA23+tNp8sgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8Bv8AMp9DmDVfcYoAAAAASUVORK5CYII=',
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
export const categoryList: { [key: string]: { value: string; emoji: string; label: string } } = {
    fashion: { value: "fashion", emoji: "🛍️", label: "패션" },
    beauty: { value: "beauty", emoji: "💄", label: "뷰티" },
    eco: { value: "eco", emoji: "🌳", label: "비건/친환경" },
    interior: { value: "interior", emoji: "🛋️", label: "가구/인테리어" },
    healthcare: { value: "healthcare", emoji: "💪", label: "건강" },
    diet: { value: "diet", emoji: "🥗", label: "다이어트" },
    travel: { value: "travel", emoji: "✈️", label: "여행" },
    game: { value: "game", emoji: "🎮", label: "게임" },
    pet: { value: "pet", emoji: "🐶", label: "펫/동물" },
    it: { value: "it", emoji: "📱", label: "IT/앱" },
    electronics: { value: "electronics", emoji: "📺", label: "가전/전자기기" },
    "movie-drama-production": { value: "movie-drama-production", emoji: "📽️", label: "영화/드라마" },
    "webtoon-animation": { value: "webtoon-animation", emoji: "👸", label: "웹툰/애니" },
    car: { value: "car", emoji: "🏎️", label: "자동차" },
    music: { value: "music", emoji: "🎹", label: "음악" },
    "outdoor-exercise": { value: "outdoor-exercise", emoji: "🏃‍♀️", label: "운동" },
    politics: { value: "politics", emoji: "🗳️", label: "시사/정치" },
    education: { value: "education", emoji: "🏫", label: "교육" },
    kids: { value: "kids", emoji: "🧒", label: "키즈" },
    bank: { value: "bank", emoji: "🏦", label: "은행" },
    stock: { value: "stock", emoji: "📈", label: "증권" },
    "credit-card": { value: "credit-card", emoji: "💳", label: "카드" },
    finance: { value: "finance", emoji: "🪙", label: "금융" },
    investment: { value: "investment", emoji: "💸", label: "투자/제태크" },
    liquor: { value: "liquor", emoji: "🍷", label: "주류" },
    beverage: { value: "beverage", emoji: "🧃", label: "음료" },
    food: { value: "food", emoji: "🍲", label: "음식" },
    restaurant: { value: "restaurant", emoji: "🥢", label: "음식점" },
    publisher: { value: "publisher", emoji: "📖", label: "출판" },
    "public-office": { value: "public-office", emoji: "📢", label: "공기업/관공서" },
    hospital: { value: "hospital", emoji: "🏥", label: "병원" },
    entertainment: { value: "entertainment", emoji: "💃", label: "엔터테인먼트" },
    religion: { value: "religion", emoji: "📿", label: "종교" },
    "social-enterprise": { value: "social-enterprise", emoji: "🐧", label: "사회적 기업" },
    etc: { value: "etc", emoji: "", label: "기타" },
};


export const testPlanDatas = [
    {
        "kind": "youtube#playlist",
        "etag": "q808n4ZQNM0lZD3W8YSsU1k8tnc",
        "id": "PLNF8K9Ddz0kLX1niy_IAFTV1YKeSBhVsD",
        "snippet": {
            "publishedAt": "2022-08-11T15:02:24Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "Pink Venom",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/gQlMMD8auMs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/gQlMMD8auMs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/gQlMMD8auMs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/gQlMMD8auMs/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/gQlMMD8auMs/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "Pink Venom",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "Lxlw5wZVJ_6MNZIgKb9Ev3bDwDI",
        "id": "PLNF8K9Ddz0kKuIYCH9b9epXgQBuOkACPN",
        "snippet": {
            "publishedAt": "2022-08-02T03:45:45Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "BORN PINK",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/POe9SOEKotk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/POe9SOEKotk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/POe9SOEKotk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/POe9SOEKotk/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/POe9SOEKotk/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "BORN PINK",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "jrfenJa06AhKRa95wJ8O1AZWVeA",
        "id": "PLNF8K9Ddz0kKlf_ogkL9_31b--vTfJhMf",
        "snippet": {
            "publishedAt": "2021-08-26T12:00:34Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "LISA",
            "description": "More about BLACKPINK @ http://www.blackpinkofficial.com/ http://www.facebook.com/BLACKPINKOFFICIAL http://www.youtube.com/BLACKPINKOFFICIAL http://www.instagram.com/BLACKPINKOFFICIAL http://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/awkkyBH2zEo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/awkkyBH2zEo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/awkkyBH2zEo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/awkkyBH2zEo/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/awkkyBH2zEo/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "LISA",
                "description": "More about BLACKPINK @ http://www.blackpinkofficial.com/ http://www.facebook.com/BLACKPINKOFFICIAL http://www.youtube.com/BLACKPINKOFFICIAL http://www.instagram.com/BLACKPINKOFFICIAL http://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "dEP7arOvynVwBL80kGr-qopBk1E",
        "id": "PLNF8K9Ddz0kKZAbwpPPJxU2jpWqNToguE",
        "snippet": {
            "publishedAt": "2021-08-03T05:01:24Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "5th ANNIVERSARY [4+1]",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/8k3QLN3WbwE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/8k3QLN3WbwE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/8k3QLN3WbwE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/8k3QLN3WbwE/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/8k3QLN3WbwE/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "5th ANNIVERSARY [4+1]",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "TZM-qhna1CgVw5EY67vYPkvAHF8",
        "id": "PLNF8K9Ddz0kJcZcKu24diA5alT-fCa-3a",
        "snippet": {
            "publishedAt": "2021-06-01T10:31:26Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "BLACKPINK in JAPAN",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Ra6Y5EMbghY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Ra6Y5EMbghY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Ra6Y5EMbghY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/Ra6Y5EMbghY/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/Ra6Y5EMbghY/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "BLACKPINK in JAPAN",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "EsJfJpw8aSUIOtgsE82IRTXxrVI",
        "id": "PLNF8K9Ddz0kItIojCCyaEbKK6WoH2ohRK",
        "snippet": {
            "publishedAt": "2021-03-06T01:18:38Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "ROSÉ \"On The Ground\" Premiere Countdown on RELEASED",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/S7_iy3BOgvk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/S7_iy3BOgvk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/S7_iy3BOgvk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/S7_iy3BOgvk/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/S7_iy3BOgvk/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "ROSÉ \"On The Ground\" Premiere Countdown on RELEASED",
                "description": ""
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "-G8_vnjU_m-b9AGrJTdPY2ayNQk",
        "id": "PLNF8K9Ddz0kJ36dXtkVmHHhcXVgSzoXIs",
        "snippet": {
            "publishedAt": "2021-03-01T15:24:28Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "ROSÉ",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/CKZvWhCqx1s/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/CKZvWhCqx1s/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/CKZvWhCqx1s/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/CKZvWhCqx1s/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/CKZvWhCqx1s/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "ROSÉ",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "_Y4NDrjCCNhLxsW3XD2yske48Zs",
        "id": "PLNF8K9Ddz0kLj74XBzZD8z3_QPdsqFtkN",
        "snippet": {
            "publishedAt": "2020-12-03T02:06:54Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "THE SHOW",
            "description": "Buy Access for the 2021.01.31 2PM (KST) Livestream Concert @ https://yt.be/music/BLACKPINKTheShow",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/oIupRdK7pwM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/oIupRdK7pwM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/oIupRdK7pwM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/oIupRdK7pwM/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/oIupRdK7pwM/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "THE SHOW",
                "description": "Buy Access for the 2021.01.31 2PM (KST) Livestream Concert @ https://yt.be/music/BLACKPINKTheShow"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "qFhucdtnkL04SfZAYagWgnQxw0c",
        "id": "PLNF8K9Ddz0kJWSgNkDMo6yh8J6yelIYXP",
        "snippet": {
            "publishedAt": "2020-09-29T06:48:24Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "Watch us on RELEASED",
            "description": "Exclusive access, never been seen footage, and your latest music news leading up to our worldwide music video premiere \"Lovesick Girls\"",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/_oGv-g2HSEc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/_oGv-g2HSEc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/_oGv-g2HSEc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/_oGv-g2HSEc/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/_oGv-g2HSEc/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "Watch us on RELEASED",
                "description": "Exclusive access, never been seen footage, and your latest music news leading up to our worldwide music video premiere \"Lovesick Girls\""
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "N263nLP12sV87YGNj8Hq6JYkzSM",
        "id": "PLNF8K9Ddz0kKeTUhlNE2bCQyvO7o3O3Bd",
        "snippet": {
            "publishedAt": "2020-09-26T23:50:45Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "THE ALBUM",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/dyRsYk0LyA8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/dyRsYk0LyA8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/dyRsYk0LyA8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/dyRsYk0LyA8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/dyRsYk0LyA8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "THE ALBUM",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "tYWV5Uj09ywMgD-zrYPHiwqq1oI",
        "id": "PLNF8K9Ddz0kIp11y8S69Kzvdl-ymzNPip",
        "snippet": {
            "publishedAt": "2020-08-23T11:29:28Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "Ice Cream",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/vRXZj0DzXIA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/vRXZj0DzXIA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/vRXZj0DzXIA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/vRXZj0DzXIA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/vRXZj0DzXIA/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "Ice Cream",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "sLrLuQ2rh69H4rKOrJFw8XQgbQs",
        "id": "PLNF8K9Ddz0kJQldfxlGv4ZlXmdXM3D_ru",
        "snippet": {
            "publishedAt": "2020-06-17T23:48:19Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "How You Like That",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ioNng23DkIM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ioNng23DkIM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ioNng23DkIM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/ioNng23DkIM/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/ioNng23DkIM/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "How You Like That",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "w7E1mlYqa1---4X66RXoSToChUE",
        "id": "PLNF8K9Ddz0kIrPevRMAxtlj5_BK7KPg57",
        "snippet": {
            "publishedAt": "2020-06-13T01:01:23Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "24/365 with BLACKPINK",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/O_ibCeLnhPQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/O_ibCeLnhPQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/O_ibCeLnhPQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/O_ibCeLnhPQ/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/O_ibCeLnhPQ/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "24/365 with BLACKPINK",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "QsT6tmgLcHNE73jgI4x0O3tLc3I",
        "id": "PLNF8K9Ddz0kI2GdcJrk82MNhF9bkWRpSY",
        "snippet": {
            "publishedAt": "2019-05-30T06:29:56Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "SQUARE UP",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/IHNzOHi8sJs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/IHNzOHi8sJs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/IHNzOHi8sJs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/IHNzOHi8sJs/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "SQUARE UP",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "0lVMiXs_fqzrNmqswJWnLnmk-e0",
        "id": "PLNF8K9Ddz0kLOiKe-yqXiMJX57cFd4Egy",
        "snippet": {
            "publishedAt": "2019-05-30T06:29:46Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "마지막처럼",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Amq-qlqbjYA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Amq-qlqbjYA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Amq-qlqbjYA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/Amq-qlqbjYA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/Amq-qlqbjYA/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "마지막처럼",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "ZKiOHkcMDkQCpEH58NtAsa00iNs",
        "id": "PLNF8K9Ddz0kJMdhJX4ISswMgpsqhr31v4",
        "snippet": {
            "publishedAt": "2019-05-30T06:29:36Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "SQUARE TWO",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/9pdj4iJD08s/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/9pdj4iJD08s/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/9pdj4iJD08s/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/9pdj4iJD08s/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/9pdj4iJD08s/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "SQUARE TWO",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "or7wrmd1pF2w047Uqmuo28HHav0",
        "id": "PLNF8K9Ddz0kLSb3CSZtsS1OtHysCoUcg-",
        "snippet": {
            "publishedAt": "2019-05-30T06:29:26Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "SQUARE ONE",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/dISNgvVpWlo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/dISNgvVpWlo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/dISNgvVpWlo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/dISNgvVpWlo/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/dISNgvVpWlo/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "SQUARE ONE",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "Lp9Bl1CzBsg4GWqRP4Ef4sblDnU",
        "id": "PLNF8K9Ddz0kJlgxgD4Bnkk1jhQ61gW6W4",
        "snippet": {
            "publishedAt": "2019-04-02T05:15:56Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "JENNIE",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/b73BI9eUkjM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/b73BI9eUkjM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/b73BI9eUkjM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/b73BI9eUkjM/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/b73BI9eUkjM/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "JENNIE",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "EkOBrKwoIHrOJAVAJrbr0FfzER4",
        "id": "PLNF8K9Ddz0kI-fTJtkPI7PFDjdM-nJtSG",
        "snippet": {
            "publishedAt": "2019-04-02T05:14:43Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "KILL THIS LOVE",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/2S24-y0Ij3Y/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/2S24-y0Ij3Y/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/2S24-y0Ij3Y/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/2S24-y0Ij3Y/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/2S24-y0Ij3Y/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "KILL THIS LOVE",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "ji67djwQawR11yV3lotplcNu9UE",
        "id": "PLNF8K9Ddz0kIPqeB0P0DNtDL10w3mko_q",
        "snippet": {
            "publishedAt": "2019-03-01T01:03:39Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "BLACKPINK DIARIES",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/hownMyg3g3M/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/hownMyg3g3M/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/hownMyg3g3M/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/hownMyg3g3M/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/hownMyg3g3M/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "BLACKPINK DIARIES",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "wEoFKJFyf85LXUWZ3yBeVHGwTfI",
        "id": "PLNF8K9Ddz0kJWl_ftRAo0aNJCSZlQVkRd",
        "snippet": {
            "publishedAt": "2017-11-04T01:01:30Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "BLACKPINK HOUSE",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/wpMn2cFX_EQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/wpMn2cFX_EQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/wpMn2cFX_EQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/wpMn2cFX_EQ/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/wpMn2cFX_EQ/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "BLACKPINK HOUSE",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "vcpeRF1WBCG_6-9mB9bRVmgYOrI",
        "id": "PLNF8K9Ddz0kKKkPixGOA_xfLYqUG1QXlF",
        "snippet": {
            "publishedAt": "2016-08-14T09:12:03Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "PERFORMANCES",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PjrAwC4TIPA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PjrAwC4TIPA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PjrAwC4TIPA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PjrAwC4TIPA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PjrAwC4TIPA/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "PERFORMANCES",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "JhtDZBqm7p284-fyHf9b4JbHcUo",
        "id": "PLNF8K9Ddz0kJ_ucHOcUZoQvR1vt_nBw9G",
        "snippet": {
            "publishedAt": "2016-08-08T11:23:08Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "BEHIND THE SCENES",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/L0zIUVVEW6g/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/L0zIUVVEW6g/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/L0zIUVVEW6g/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/L0zIUVVEW6g/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/L0zIUVVEW6g/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "BEHIND THE SCENES",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "rqXOHFUm8z7zcHnmbRs6K082FSg",
        "id": "PLNF8K9Ddz0kKfujG6blfAxngYh_C66C_q",
        "snippet": {
            "publishedAt": "2016-08-08T02:53:57Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "MUSIC VIDEOS",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/POe9SOEKotk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/POe9SOEKotk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/POe9SOEKotk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/POe9SOEKotk/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/POe9SOEKotk/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "MUSIC VIDEOS",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    },
    {
        "kind": "youtube#playlist",
        "etag": "Mbz4iLc0po6gAfdyTQJVCjd_9Vo",
        "id": "PLNF8K9Ddz0kI4uLrV7BYrdcebUuMf06z1",
        "snippet": {
            "publishedAt": "2016-07-06T01:03:07Z",
            "channelId": "UCOmHUn--16B90oW2L6FRR3A",
            "title": "DANCE PRACTICE VIDEOS",
            "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PjrAwC4TIPA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PjrAwC4TIPA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PjrAwC4TIPA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/PjrAwC4TIPA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/PjrAwC4TIPA/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "BLACKPINK",
            "localized": {
                "title": "DANCE PRACTICE VIDEOS",
                "description": "More about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink"
            }
        }
    }
]
