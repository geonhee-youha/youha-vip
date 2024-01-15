import { EstimateInputProps } from './../recoil/index';
import { atom } from "recoil";
import { AgeProps, FilterProps, SexProps } from "../constants";
import creators from '../datas/creators.json'
import projects from '../datas/projects_full.json'
// 공지사항
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
//크리에이터
export type CreatorProps = any
export const testCreators: CreatorProps[] = creators
//캠페인
export type CampaignProps = {
    createdAt: any;
    id: number;
    title: string;
    description: string;
    categories: FilterProps[];
    keyword: string;
    ages: FilterProps[];
    sex?: FilterProps
}
export const campaignDefaultProps = {
    createdAt: new Date('2022-10-10'),
    id: 0,
    title: "",
    description: "",
    categories: [],
    keyword: "",
    ages: [],
    sex: undefined,
}
export const testCampaigns: CampaignProps[] = [
    {
        createdAt: new Date('2022-10-10'),
        id: 1,
        title: '동원샘물 캠페인',
        description: '동원 F&B의 동원샘물, 미네마인을 마케팅',
        categories: [{
            value: '1',
            title: '패션'
        }],
        keyword: '동원샘물',
        ages: [{ value: '20', title: '20~30대' }],
        sex: {
            value: 'female',
            title: '여성',
        },
    },
    {
        createdAt: new Date('2022-10-10'),
        id: 2,
        title: '네일 아트샵 방문 캠페인',
        description: '동원 F&B의 동원샘물, 미네마인을 마케팅',
        categories: [{
            value: '1',
            title: '패션'
        }],
        keyword: '동원샘물',
        ages: [{ value: '20', title: '20~30대' }],
        sex: {
            value: 'female',
            title: '여성',
        },
    }
]
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
        thumbnail: 'data:images/png;base64,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',
        description: '국내 최고의 광고대행사, 제일기획입니다.',
        team: {
            name: '영업팀',
            position: '팀장'
        }
    },
}
//플레이리스트
export type PlaylistProps = any
export const testPlaylists = projects as unknown as any[]
//비디오
export type VideoProps = any
export const testVideos: any[] = testPlaylists.flatMap(el => el.items)
//광고
export type LogProps = {
    body: string;
    createdAt: any;
}
export type AdProps = {
    id: any,
    set: {
        id: any;
    },
    creator: {
        id: any;
    },
    status: {
        value: any
    },
    title: string,
    description: string,
    changedAt: any,
    logs: LogProps[],
    check: {
        pay: boolean,
        date: boolean
    }
}
export const testAds: AdProps[] = [
    {
        id: 0,
        set: {
            id: 1,
        },
        status: {
            value: '0'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[0].id,
        },
        check: {
            pay: true,
            date: false
        }
    },
    {
        id: 1,
        set: {
            id: 1,
        },
        status: {
            value: '1'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[1].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
    {
        id: 2,
        set: {
            id: 1,
        },
        status: {
            value: '3'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[2].id,
        },
        check: {
            pay: false,
            date: false
        }
    },
    {
        id: 3,
        set: {
            id: 1,
        },
        status: {
            value: '0'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[3].id,
        },
        check: {
            pay: true,
            date: false
        }
    },
    {
        id: 4,
        set: {
            id: 2,
        },
        status: {
            value: '1'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[4].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
    {
        id: 5,
        set: {
            id: 2,
        },
        status: {
            value: '1'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[5].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
    {
        id: 6,
        set: {
            id: 4,
        },
        status: {
            value: '3'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[6].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
    {
        id: 7,
        set: {
            id: 4,
        },
        status: {
            value: '7'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[7].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
    {
        id: 8,
        set: {
            id: 3,
        },
        status: {
            value: '5'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[8].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
    {
        id: 9,
        set: {
            id: 3,
        },
        status: {
            value: '7'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[9].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
    {
        id: 10,
        set: {
            id: 3,
        },
        status: {
            value: '7'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[10].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
    {
        id: 11,
        set: {
            id: 5,
        },
        status: {
            value: '6'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[11].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
    {
        id: 12,
        set: {
            id: 5,
        },
        status: {
            value: '7'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[12].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
    {
        id: 13,
        set: {
            id: 5,
        },
        status: {
            value: '7'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[13].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
    {
        id: 14,
        set: {
            id: 6,
        },
        status: {
            value: '7'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[14].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
    {
        id: 15,
        set: {
            id: 6,
        },
        status: {
            value: '7'
        },
        title: "기획안 광고",
        description: "기획안 광고에 대한 설명입니다.",
        changedAt: "2022년 11월 1일",
        logs: [
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
            { body: "테스트 로그", createdAt: "2022년 11월 1일" },
        ],
        creator: {
            id: testCreators[15].id,
        },
        check: {
            pay: true,
            date: true
        }
    },
];
//견적서
export const estimatesFilter: FilterProps[] = [
    { value: '0', title: '대기중인' },
    { value: '1', title: '도착한' },
    { value: '2', title: '열람한' }
]
export type EstimateProps = {
    id: any;
    status: FilterProps,
    input: EstimateInputProps,
    campaignId: any,
    creatorIds: any[],
    playlistIds: any[],
    adSetIds: any[],
    mix?: boolean,
    createdAt: any;
}
export const testEstimates: EstimateProps[] = [
    {
        createdAt: '2022년 10월 23일',
        id: 1,
        status: {
            value: '0'
        },
        input: {
            budget: "30000000",
            startedAt: null,
            endedAt: null,
            purposies: [{ value: "0", title: '인지도 상승', },],
            medias: [{ value: "1", title: "유통/판매 채널", },],
            categories: [{ value: "0", title: "패션", },],
            channelCount: "",
            keyword: "키워드",
            sellingPoint: "셀링포인트",
            description: "",
            request: "",
            file: "",
            ages: [{
                value: '10',
                title: '10대',
            },],
            sex: {
                value: 'both',
                title: '성별무관',
            },
        },
        campaignId: 1,
        creatorIds: ['97c89b31-7db2-4e88-95ed-179f7e141a66', 'f4e56485-e126-4271-959d-ff6f977b61da', '9c516007-e952-4f8a-8bf2-aeb87d093e8a', 'a2147252-8a79-4485-9aba-660aa848399d'],
        playlistIds: ['PLbpi6ZahtOH5WB6TwnO2IH33sX_sczMzp', 'PLbpi6ZahtOH484FOxfEJrAn3JgQqZDVlH', 'PLbpi6ZahtOH6cI1toET0tbZtWxlZh2t0G', 'PL5hrGMysD_GsFYwSFDWDyUApfpHEwTDhE', 'PL5hrGMysD_GsdvpZSHyFKA7W8j96mskSh', 'PL5hrGMysD_GvvuoN4-pKTOFpd3DvNNcfc', 'PLNF8K9Ddz0kLX1niy_IAFTV1YKeSBhVsD', 'PLNF8K9Ddz0kJcZcKu24diA5alT-fCa-3a'],
        adSetIds: [],
        mix: true
    },
    {
        createdAt: '2022년 10월 23일',
        id: 2,
        status: {
            value: '0'
        },
        input: {
            budget: "30000000",
            startedAt: null,
            endedAt: null,
            purposies: [{ value: "0", title: '인지도 상승', },],
            medias: [{ value: "1", title: "유통/판매 채널", },],
            categories: [{ value: "0", title: "패션", },],
            channelCount: "",
            keyword: "키워드",
            sellingPoint: "셀링포인트",
            description: "",
            request: "",
            file: "",
            ages: [{
                value: '10',
                title: '10대',
            },],
            sex: {
                value: 'both',
                title: '성별무관',
            },
        },
        campaignId: 1,
        creatorIds: ['97c89b31-7db2-4e88-95ed-179f7e141a66', 'f4e56485-e126-4271-959d-ff6f977b61da', '9c516007-e952-4f8a-8bf2-aeb87d093e8a', 'a2147252-8a79-4485-9aba-660aa848399d'],
        playlistIds: ['PLbpi6ZahtOH5WB6TwnO2IH33sX_sczMzp', 'PLbpi6ZahtOH484FOxfEJrAn3JgQqZDVlH', 'PLbpi6ZahtOH6cI1toET0tbZtWxlZh2t0G', 'PL5hrGMysD_GsFYwSFDWDyUApfpHEwTDhE', 'PL5hrGMysD_GsdvpZSHyFKA7W8j96mskSh', 'PL5hrGMysD_GvvuoN4-pKTOFpd3DvNNcfc', 'PLNF8K9Ddz0kLX1niy_IAFTV1YKeSBhVsD', 'PLNF8K9Ddz0kJcZcKu24diA5alT-fCa-3a'],
        adSetIds: [],
        mix: true
    },
    {
        createdAt: '2022년 10월 23일',
        id: 3,
        status: {
            value: '0'
        },
        input: {
            budget: "30000000",
            startedAt: null,
            endedAt: null,
            purposies: [{ value: "0", title: '인지도 상승', },],
            medias: [{ value: "1", title: "유통/판매 채널", },],
            categories: [{ value: "0", title: "패션", },],
            channelCount: "",
            keyword: "키워드",
            sellingPoint: "셀링포인트",
            description: "",
            request: "",
            file: "",
            ages: [{
                value: '10',
                title: '10대',
            },],
            sex: {
                value: 'both',
                title: '성별무관',
            },
        },
        campaignId: 1,
        creatorIds: ['97c89b31-7db2-4e88-95ed-179f7e141a66', 'f4e56485-e126-4271-959d-ff6f977b61da', '9c516007-e952-4f8a-8bf2-aeb87d093e8a', 'a2147252-8a79-4485-9aba-660aa848399d'],
        playlistIds: ['PLbpi6ZahtOH5WB6TwnO2IH33sX_sczMzp', 'PLbpi6ZahtOH484FOxfEJrAn3JgQqZDVlH', 'PLbpi6ZahtOH6cI1toET0tbZtWxlZh2t0G', 'PL5hrGMysD_GsFYwSFDWDyUApfpHEwTDhE', 'PL5hrGMysD_GsdvpZSHyFKA7W8j96mskSh', 'PL5hrGMysD_GvvuoN4-pKTOFpd3DvNNcfc', 'PLNF8K9Ddz0kLX1niy_IAFTV1YKeSBhVsD', 'PLNF8K9Ddz0kJcZcKu24diA5alT-fCa-3a'],
        adSetIds: [],
        mix: true
    },
    {
        createdAt: '2022년 10월 23일',
        id: 4,
        status: {
            value: '1'
        },
        input: {
            budget: "30000000",
            startedAt: null,
            endedAt: null,
            purposies: [{ value: "0", title: '인지도 상승', },],
            medias: [{ value: "1", title: "유통/판매 채널", },],
            categories: [{ value: "0", title: "패션", },],
            channelCount: "",
            keyword: "키워드",
            sellingPoint: "셀링포인트",
            description: "",
            request: "",
            file: "",
            ages: [{
                value: '10',
                title: '10대',
            },],
            sex: {
                value: 'both',
                title: '성별무관',
            },
        },
        campaignId: 1,
        creatorIds: ['97c89b31-7db2-4e88-95ed-179f7e141a66', 'f4e56485-e126-4271-959d-ff6f977b61da', '9c516007-e952-4f8a-8bf2-aeb87d093e8a', 'a2147252-8a79-4485-9aba-660aa848399d'],
        playlistIds: ['PLbpi6ZahtOH5WB6TwnO2IH33sX_sczMzp', 'PLbpi6ZahtOH484FOxfEJrAn3JgQqZDVlH', 'PLbpi6ZahtOH6cI1toET0tbZtWxlZh2t0G', 'PL5hrGMysD_GsFYwSFDWDyUApfpHEwTDhE', 'PL5hrGMysD_GsdvpZSHyFKA7W8j96mskSh', 'PL5hrGMysD_GvvuoN4-pKTOFpd3DvNNcfc', 'PLNF8K9Ddz0kLX1niy_IAFTV1YKeSBhVsD', 'PLNF8K9Ddz0kJcZcKu24diA5alT-fCa-3a'],
        adSetIds: [1, 2, 3],
        mix: true
    },
    {
        createdAt: '2022년 10월 23일',
        id: 5,
        status: {
            value: '2'
        },
        input: {
            budget: "30000000",
            startedAt: null,
            endedAt: null,
            purposies: [{ value: "0", title: '인지도 상승', },],
            medias: [{ value: "1", title: "유통/판매 채널", },],
            categories: [{ value: "0", title: "패션", },],
            channelCount: "",
            keyword: "키워드",
            sellingPoint: "셀링포인트",
            description: "",
            request: "",
            file: "",
            ages: [{
                value: '10',
                title: '10대',
            },],
            sex: {
                value: 'both',
                title: '성별무관',
            },
        },
        campaignId: 1,
        creatorIds: ['97c89b31-7db2-4e88-95ed-179f7e141a66', 'f4e56485-e126-4271-959d-ff6f977b61da', '9c516007-e952-4f8a-8bf2-aeb87d093e8a', 'a2147252-8a79-4485-9aba-660aa848399d'],
        playlistIds: ['PLbpi6ZahtOH5WB6TwnO2IH33sX_sczMzp', 'PLbpi6ZahtOH484FOxfEJrAn3JgQqZDVlH', 'PLbpi6ZahtOH6cI1toET0tbZtWxlZh2t0G', 'PL5hrGMysD_GsFYwSFDWDyUApfpHEwTDhE', 'PL5hrGMysD_GsdvpZSHyFKA7W8j96mskSh', 'PL5hrGMysD_GvvuoN4-pKTOFpd3DvNNcfc', 'PLNF8K9Ddz0kLX1niy_IAFTV1YKeSBhVsD', 'PLNF8K9Ddz0kJcZcKu24diA5alT-fCa-3a'],
        adSetIds: [4, 5, 6],
        mix: true
    },
    {
        createdAt: '2022년 10월 23일',
        id: 6,
        status: {
            value: '2'
        },
        input: {
            budget: "30000000",
            startedAt: null,
            endedAt: null,
            purposies: [{ value: "0", title: '인지도 상승', },],
            medias: [{ value: "1", title: "유통/판매 채널", },],
            categories: [{ value: "0", title: "패션", },],
            channelCount: "",
            keyword: "키워드",
            sellingPoint: "셀링포인트",
            description: "",
            request: "",
            file: "",
            ages: [{
                value: '10',
                title: '10대',
            },],
            sex: {
                value: 'both',
                title: '성별무관',
            },
        },
        campaignId: 1,
        creatorIds: ['97c89b31-7db2-4e88-95ed-179f7e141a66', 'f4e56485-e126-4271-959d-ff6f977b61da', '9c516007-e952-4f8a-8bf2-aeb87d093e8a', 'a2147252-8a79-4485-9aba-660aa848399d'],
        playlistIds: ['PLbpi6ZahtOH5WB6TwnO2IH33sX_sczMzp', 'PLbpi6ZahtOH484FOxfEJrAn3JgQqZDVlH', 'PLbpi6ZahtOH6cI1toET0tbZtWxlZh2t0G', 'PL5hrGMysD_GsFYwSFDWDyUApfpHEwTDhE', 'PL5hrGMysD_GsdvpZSHyFKA7W8j96mskSh', 'PL5hrGMysD_GvvuoN4-pKTOFpd3DvNNcfc', 'PLNF8K9Ddz0kLX1niy_IAFTV1YKeSBhVsD', 'PLNF8K9Ddz0kJcZcKu24diA5alT-fCa-3a'],
        adSetIds: [2, 3, 4],
        mix: true
    },
    {
        createdAt: '2022년 10월 23일',
        id: 7,
        status: {
            value: '2'
        },
        input: {
            budget: "30000000",
            startedAt: null,
            endedAt: null,
            purposies: [{ value: "0", title: '인지도 상승', },],
            medias: [{ value: "1", title: "유통/판매 채널", },],
            categories: [{ value: "0", title: "패션", },],
            channelCount: "",
            keyword: "키워드",
            sellingPoint: "셀링포인트",
            description: "",
            request: "",
            file: "",
            ages: [{
                value: '10',
                title: '10대',
            },],
            sex: {
                value: 'both',
                title: '성별무관',
            },
        },
        campaignId: 1,
        creatorIds: ['97c89b31-7db2-4e88-95ed-179f7e141a66', 'f4e56485-e126-4271-959d-ff6f977b61da', '9c516007-e952-4f8a-8bf2-aeb87d093e8a', 'a2147252-8a79-4485-9aba-660aa848399d'],
        playlistIds: ['PLbpi6ZahtOH5WB6TwnO2IH33sX_sczMzp', 'PLbpi6ZahtOH484FOxfEJrAn3JgQqZDVlH', 'PLbpi6ZahtOH6cI1toET0tbZtWxlZh2t0G', 'PL5hrGMysD_GsFYwSFDWDyUApfpHEwTDhE', 'PL5hrGMysD_GsdvpZSHyFKA7W8j96mskSh', 'PL5hrGMysD_GvvuoN4-pKTOFpd3DvNNcfc', 'PLNF8K9Ddz0kLX1niy_IAFTV1YKeSBhVsD', 'PLNF8K9Ddz0kJcZcKu24diA5alT-fCa-3a'],
        adSetIds: [2, 3, 4],
        mix: true
    },
]
//광고 세트
export type ManagerProps = {
    name: string;
    thumbnail: string;
}
export type AdSetProps = {
    id: any,
    status: {
        value: any,
    },
    title: string;
    description: string;
    mix: boolean,
    manager: ManagerProps,
    createdAt: any,
    estimate: {
        id: any,
    },
}
export const testAdSets = [
    {
        id: 1,
        status: {
            value: '1'
        },
        title: "제작중인 광고세트 1",
        description: "광고세트에 대한 설명입니다.",
        mix: false,
        manager: {
            name: "임희정",
            thumbnail: "/images/manager-1.png",
        },
        createdAt: "2022년 11월 1일",
        estimate: {
            id: 1,
        },
    },
    {
        id: 2,
        status: {
            value: '1'
        },
        title: "제작중인 광고세트 2",
        description: "광고세트에 대한 설명입니다.",
        mix: false,
        manager: {
            name: "임희정",
            thumbnail: "/images/manager-1.png",
        },
        createdAt: "2022년 11월 1일",
        estimate: {
            id: 1,
        },
    },
    {
        id: 3,
        status: {
            value: '2'
        },
        title: "제작중인 광고세트 3",
        description: "광고세트에 대한 설명입니다.",
        mix: false,
        manager: {
            name: "임희정",
            thumbnail: "/images/manager-1.png",
        },
        createdAt: "2022년 11월 1일",
        estimate: {
            id: 1,
        },
    },
    {
        id: 4,
        status: {
            value: '2'
        },
        title: "유하 전용 믹스 광고세트",
        description: "광고세트에 대한 설명입니다.",
        mix: true,
        manager: {
            name: "임희정",
            thumbnail: "/images/manager-1.png",
        },
        createdAt: "2022년 11월 1일",
        estimate: {
            id: 2,
        },
    },
    {
        id: 5,
        status: {
            value: '3'
        },
        title: "10월 전용 믹스 아이템",
        description: "광고세트에 대한 설명입니다.",
        mix: true,
        manager: {
            name: "임희정",
            thumbnail: "/images/manager-1.png",
        },
        createdAt: "2022년 11월 1일",
        estimate: {
            id: 2,
        },
    },
    {
        id: 6,
        status: {
            value: '3'
        },
        title: "11월 특가 믹스 아이템",
        description: "광고세트에 대한 설명입니다.",
        mix: true,
        manager: {
            name: "임희정",
            thumbnail: "/images/manager-1.png",
        },
        createdAt: "2022년 11월 1일",
        estimate: {
            id: 2,
        },
    },
];
//recoils - 추후 데이터로 받아와야 함
export const checkedCreatorIdsState = atom<string[]>({
    key: "checkedCreatorIdsState",
    default: []
});
export const tempCheckedPlaylistIdsState = atom<string[]>({
    key: "tempCheckedPlaylistIdsState",
    default: []
});
export const favoritedCreatorIdsState = atom<string[]>({
    key: "favoritedCreatorIdsState",
    default: [
        '97c89b31-7db2-4e88-95ed-179f7e141a66',
        'f4e56485-e126-4271-959d-ff6f977b61da'
    ]
});
export const favoritedVideoIdsState = atom<string[]>({
    key: "favoritedVideoIdsState",
    default: []
});
export const checkedPlaylistIdsState = atom<string[]>({
    key: "checkedPlaylistIdsState",
    default: []
});
export const favoritedPlaylistIdsState = atom<string[]>({
    key: "favoritedPlaylistIdsState",
    default: []
});
export const userState = atom<UserProps | null>({
    key: "userState",
    default: testUser
});
export const testCampaignsState = atom<CampaignProps[]>({
    key: "testCampaignsState",
    default: testCampaigns
});