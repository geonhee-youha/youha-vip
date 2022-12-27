import {
  alpha,
  Box,
  ButtonBase,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import dynamic from "next/dynamic";
import Icon from "../components/atoms/Icon";
import { theme } from "../themes/theme";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
  videoChart,
  videoChartMobile,
  chartOptions,
  chartOptionsMobile,
  maxWidth,
  revenueChartData,
  revenueChartOptions,
  revenueChartOptionsMobile,
} from "../constants";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Chart } from "react-chartjs-2";
import Typo from "../components/atoms/Typo";
import { IconName } from "@fortawesome/fontawesome-svg-core";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const cases = [
  {
    src: "https://images.axios.com/78wSW59uOBxN6c2bLQxFA_t38Y0=/700x0:3367x2667/1600x1600/2022/10/24/1666642218954.jpg",
    title: "Mr.Beast",
    subtitle: "게임 및 콘텐츠 크리에이터",
    budget: 3000000,
    dialog: `“제 라이브러리에 대해 평가를 받고 몇 년 간 제작한 동영상이 얼마나 가치가 있는지 알 수 있게 되어 정말 기뻤습니다. 제가 이미 제작한 콘텐츠를 이용하여 새로운 수익을 창출하고 다른 프로젝트에 적용할 수 있으니 정말 놀라웠죠.”`,
  },
  {
    src: "https://jellysmack.com/wp-content/uploads/2022/08/Screen-Shot-2022-08-09-at-9.27.09-AM-e1660147208277.png",
    title: "Gaba",
    subtitle: "음식 크리에이터",
    budget: 3000000,
    dialog: `“제 라이브러리에 대해 평가를 받고 몇 년 간 제작한 동영상이 얼마나 가치가 있는지 알 수 있게 되어 정말 기뻤습니다. 제가 이미 제작한 콘텐츠를 이용하여 새로운 수익을 창출하고 다른 프로젝트에 적용할 수 있으니 정말 놀라웠죠.”`,
  },
  {
    src: "https://jellysmack.com/wp-content/uploads/2022/08/br-mandy-candy-1-e1660146990512.jpeg",
    title: "RR Buildings",
    subtitle: "공예 및 건축 크리에이터",
    budget: 3000000,
    dialog: `"Jellysmack 덕분에 정말 쉬워졌어요… 저는 수표를 선불로 받아서 하루 만에 제 미래에 직접 다시 투자할 수 있었습니다."`,
  },
  {
    src: "https://jellysmack.com/wp-content/uploads/2022/08/rr_buildings-e1660165901999.jpg",
    title: "Mandy Candy",
    subtitle: "라이프스타일 크리에이터",
    budget: 3000000,
    dialog: `“제 라이브러리에 대해 평가를 받고 몇 년 간 제작한 동영상이 얼마나 가치가 있는지 알 수 있게 되어 정말 기뻤습니다. 제가 이미 제작한 콘텐츠를 이용하여 새로운 수익을 창출하고 다른 프로젝트에 적용할 수 있으니 정말 놀라웠죠.”`,
  },
  {
    src: "https://yt3.ggpht.com/zQe7ypCPRCJraUm2N13qTVrSDcfBHnffhtf1aQj5PzQopslprvF1Yrak_pblon5ht4IcPG6l=s900-c-k-c0x00ffffff-no-rj",
    title: "디바제시카",
    subtitle: "범죄장르 크리에이터",
    budget: 3000000,
    dialog: `“제 라이브러리에 대해 평가를 받고 몇 년 간 제작한 동영상이 얼마나 가치가 있는지 알 수 있게 되어 정말 기뻤습니다. 제가 이미 제작한 콘텐츠를 이용하여 새로운 수익을 창출하고 다른 프로젝트에 적용할 수 있으니 정말 놀라웠죠.”`,
  },
  {
    src: "https://blog.kakaocdn.net/dn/cGHXJg/btrv6X0MNuO/FExP1GA4CV5aEYdn0i9h31/img.png",
    title: "수빙수tv",
    subtitle: "해산물 크리에이터",
    budget: 3000000,
    dialog: `“제 라이브러리에 대해 평가를 받고 몇 년 간 제작한 동영상이 얼마나 가치가 있는지 알 수 있게 되어 정말 기뻤습니다. 제가 이미 제작한 콘텐츠를 이용하여 새로운 수익을 창출하고 다른 프로젝트에 적용할 수 있으니 정말 놀라웠죠.”`,
  },
  {
    src: "https://yt3.googleusercontent.com/ytc/AMLnZu_AOWkUT0yEUvsJCsao3ZTJ-jhSsRqES45jKFyTVw=s176-c-k-c0x00ffffff-no-rj",
    title: "야미보이",
    subtitle: "푸드 크리에이터",
    budget: 3000000,
    dialog: `“제 라이브러리에 대해 평가를 받고 몇 년 간 제작한 동영상이 얼마나 가치가 있는지 알 수 있게 되어 정말 기뻤습니다. 제가 이미 제작한 콘텐츠를 이용하여 새로운 수익을 창출하고 다른 프로젝트에 적용할 수 있으니 정말 놀라웠죠.”`,
  },
];

const views = [
  {
    srcs: [
      "https://img.insight.co.kr/static/2022/11/27/700/img_20221127173109_4850gt6l.jpg",
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202111/29/ebf67a39-a33a-4d7a-aeb4-9e3f62c4ff3b.jpg",
      "https://storage.googleapis.com/cdn.media.bluedot.so/bluedot.excitingfx/2021/12/MrBeastGame.png",
    ],
    title: <>MrBeast </>,
    subscribers: `1.2억명`,
    description: `공개 된지 2주가 안된 시점에서 조회수 1.5억을 돌파하였다. 이는 MrBeast의 영상의 최고 조회수이며, 한국 시간 기준으로 12일 월 10일 1위 자리를 차지했다고 한다. 2022년 1월 15일 기준으로 2억회를 돌파했고 2022년 11월 기준으로 3억회를 돌파했다. 오징어 게임 관련 영상 중 조회수 1위다.`,
    offer: `30억 이상`,
  },
  {
    srcs: [
      "https://veja.abril.com.br/wp-content/uploads/2017/02/entretenimento-youtuber-pewdiepie.jpg?quality=70&strip=info&w=680&h=453&crop=1",
      "https://www.convinceandconvert.com/wp-content/uploads/2016/07/Why-PewDiePie-Is-More-Than-a-YouTube-Sensation.jpg",
      "https://wp.clutchpoints.com/wp-content/uploads/2022/01/Pewdiepie-will-take-a-break-from-Youtube-this-January.png",
    ],
    title: <>PewDiePie</>,
    subscribers: `1.1억명`,
    description: `Pewdiepie로 더 잘 알려진 YouTube의 가장 큰 단일 콘텐츠 제작자인 Felix Kjellberg가 연초에 잠시 쉬었던 3 주간의 휴식에서 돌아왔습니다. 그의 복귀 에피소드에서, 우리는 Pewdiepie (유튜브에서 10 년을 보낸 후)가 마침내 우리에게 얼굴을 공개 할 것이라는 사실과 Jellysmack과 계약을 맺었음을 알게 되었습니다.`,
    offer: `20억 이상`,
  },
  {
    srcs: [
      "https://blog.jellysmack.com/wp-content/uploads/sites/2/2022/04/Karina-Garcia-featured-2.png",
      "https://vz.cnwimg.com/wp-content/uploads/2017/07/Karina-Garcia-e1500360609958.jpg",
      "https://www.tubefilter.com/wp-content/uploads/2019/01/karina-garcia.jpg",
    ],
    title: <>Karina Garcia </>,
    subscribers: `923만명`,
    description: `젤리스맥은 ‘슬라임 만들기’로 세계적 인기를 얻고 있는 유튜버 ‘카리나 가르시아(Karina Garcia)’ 등을 비롯한 총 500여 명의 글로벌 톱 크리에이터들과 협업하고 있다. 실제로, 젤리스맥과 협업한 크리에이터 중 65% 이상이 서비스를 통해 약 25만 달러(한화 약 3억 원)의 총 수익을 창출했으며, 젤리스맥은 현재까지 글로벌 크리에이터들과 함께 1억 5천만 달러(한화 약 1820억 원) 이상의 수익을 올린 것으로 알려졌다.`,
    offer: `10억 이상`,
  },
];

const sections = [
  "intro",
  "big-cases",
  "small-cases",
  "slip",
  "video",
  "revenue",
  "offer",
  "option",
  "flow",
  "outro",
];

const flows: {
  icon: IconName | null;
  title: React.ReactNode;
  duration?: string | null;
}[] = [
  {
    icon: "arrow-pointer",
    title: "한도 조회 신청",
    duration: "1분",
  },
  {
    icon: "chart-pie-simple",
    title: (
      <>
        채널 가치 분석 및<br />
        선지급 가능여부 분석
      </>
    ),
    duration: "1일",
  },
  {
    icon: "calculator",
    title: (
      <>
        지급액 분석 및<br />
        한도설명서 전달
      </>
    ),
    duration: "3~5일",
  },
  {
    icon: "comment-check",
    title: "지급 완료!",
  },
  {
    icon: "handshake",
    title: "입금 완료",
    duration: "2주",
  },
  {
    icon: "stamp",
    title: "동의 절차",
    duration: "1주",
  },
];

export default function Page() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const onScroll = () => {
    if (typeof document === "undefined") return;
    var container: any = document.querySelector(".container");
    const height = container.offsetHeight;
    const top = container.scrollTop;
    const index = parseInt(`${(top + 64) / height}`);
    setTabIndex(index);
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
        "& .color-js": {
          color: "#00e94f !important",
        },
      }}
      className="container"
      onScroll={onScroll}
    >
      <Header />
      <Intro index={0} tabIndex={tabIndex} />
      <BigCases index={1} />
      <SmallCases index={2} />
      <Slip index={3} />
      <Video index={4} />
      <Revenue index={5} />
      <Offer index={6} />
      <Option index={7} />
      <Flow index={8} />
      <Outro index={9} />
      {/* {sections.map((item, index) => {
        return item === "intro" ? (
          <Intro key={index} index={index} tabIndex={tabIndex} />
        ) : item === "small-cases" ? (
          <SmallCases key={index} index={index} />
        ) : item === "big-cases" ? (
          <BigCases key={index} index={index} />
        ) : item === "slip" ? (
          <Slip key={index} index={index} />
        ) : item === "revenue" ? (
          <Revenue key={index} index={index} />
        ) : item === "offer" ? (
          <Offer key={index} index={index} />
        ) : item === "flow" ? (
          <Flow key={index} index={index} />
        ) : item === "outro" ? (
          <Outro key={index} index={index} />
        ) : null;
      })} */}
    </Box>
  );
}

function Header() {
  const router = useRouter();
  const onClickLogo = () => {
    if (router.pathname === "/") {
      if (typeof document === "undefined") return;
      var container: any = document.querySelector(".container");
      var target: any = document.querySelector(`.${sections[0]}`);
      if (container !== null) {
        container.scrollBy({
          top: target.getBoundingClientRect().top,
          behavior: "smooth",
        });
      }
    } else router.push(`/`);
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        background: `linear-gradient(rgb(0, 0, 0, 1), rgb(0, 0, 0, 0)) !important`,
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: 56,
          display: "flex",
          alignItems: "center",
          maxWidth: maxWidth,
          m: theme.spacing(0, "auto"),
          p: theme.spacing(0, 2),
          "& img": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            height: 24,
            cursor: "pointer",
          },
        }}
      >
        <img src="/logos/collab-white.png" onClick={onClickLogo} />
        {/* <IconButton>
          <Icon name="bars-sort" color="#ffffff" />
        </IconButton> */}
      </Box>
    </Box>
  );
}

function Intro({ index, tabIndex }: { index: number; tabIndex: number }) {
  const router = useRouter();
  const { ref, inView } = useInView();
  const className = inView ? "shown" : "";
  const onClickButton = () => {
    router.push(`pairing`);
  };
  const [playing, setPlaying] = useState<boolean>(false);
  useEffect(() => {
    if (inView) setPlaying(inView);
  }, [inView]);
  const onClickDown = () => {
    if (typeof document === "undefined") return;
    var container: any = document.querySelector(".container");
    var target: any = document.querySelector(`.${sections[1]}`);
    if (container !== null) {
      container.scrollBy({
        top: target.getBoundingClientRect().top,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Box
        sx={{
          // scrollSnapAlign: "start",
          position: "relative",
          height: "100vh",
          "& video": {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            objectFit: "cover",
          },
        }}
        className={sections[index]}
      >
        <ReactPlayer
          url="https://jellysmack.com/wp-content/uploads/2022/02/ADDTL_jellysmack_longform_1920x1080_SANSattribution.mp4"
          autoPlay
          playing
          muted
          loop
          playsinline
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgba(0,0,0,1))`,
            p: theme.spacing(7, 0),
            zIndex: 9,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            ref={ref}
            sx={{
              p: theme.spacing(12, 3),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: 1.2,
                fontWeight: "900",
                textAlign: "center",
                color: "#ffffff",
                transform: "translateY(100%)",
                opacity: 0,
                transition: "all 0.35s ease",
                "&.shown": {
                  transform: "translateY(0)",
                  opacity: 1,
                },
                transitionDelay: `0s`,
              }}
              className={className}
            >
              최대 20억원,
            </Typography>
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: 1.2,
                fontWeight: "900",
                textAlign: "center",
                color: "#ffffff",
                transform: "translateY(100%)",
                opacity: 0,
                transition: "all 0.35s ease",
                "&.shown": {
                  transform: "translateY(0)",
                  opacity: 1,
                },
                transitionDelay: `0.5s`,
              }}
              className={className}
            >
              당신의 유튜브를
            </Typography>
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: 1.2,
                fontWeight: "900",
                textAlign: "center",
                color: "#ffffff",
                transform: "translateY(100%)",
                opacity: 0,
                transition: "all 0.35s ease",
                "&.shown": {
                  transform: "translateY(0)",
                  opacity: 1,
                },
                transitionDelay: `1s`,
              }}
              className={className}
            >
              지원합니다.
            </Typography>
            <ButtonBase
              sx={{
                background: `linear-gradient(90deg, rgb(4,232,78, 1), rgb(28,90,246, 1)) !important`,
                color: "#ffffff",
                height: 44,
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "700",
                borderRadius: 0.5,
                justifyContent: "center",
                alignItems: "center",
                p: theme.spacing(0, 2.5, 0, 2),
                transform: "translateY(100%)",
                opacity: 0,
                "&.shown": {
                  transform: "translateY(0)",
                  opacity: 1,
                },
                transitionDelay: `1.5s`,
                m: theme.spacing(3, 0, 0, 0),
              }}
              className={className}
              onClick={onClickButton}
            >
              <Icon
                name="coins"
                prefix="fas"
                color="#ffffff"
                size={20}
                sx={{ mr: 1 }}
              />
              지금 바로 한도 확인하기
            </ButtonBase>
          </Box>
        </Box>
        <Box
          sx={{
            position: "fixed",
            left: "50%",
            bottom: 24,
            transform: "translateX(-50%)",
            zIndex: 9,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: 0,
            transition: `all 0.35s ease`,
            cursor: "pointer",
            "&.shown": {
              opacity: 1,
              "& svg": {
                transition: `all 0.35s ease`,
                transform: `rotate(0deg)`,
              },
            },
            "& svg": {
              transition: `all 0.35s ease`,
              transform: `rotate(180deg)`,
            },
          }}
          className={className}
          onClick={onClickDown}
        >
          <Typography
            sx={{
              fontSize: 12,
              color: "#ffffff",
              textAlign: "center",
              "& b": {
                fontWeight: "700",
              },
            }}
          >
            <b>크리에이터 펀딩</b>
            <br />더 알아보기
          </Typography>
          <Box
            sx={{
              m: theme.spacing(1, 0, 0, 0),
              animation: `up-down 1.5s infinite linear`,
              "@keyframes up-down": {
                "0%, 100%": {
                  transform: "translateY(4px)",
                },
                "50%": {
                  transform: "translateY(-4px)",
                },
              },
              transition: `all 0.35s ease`,
            }}
          >
            <Icon name="chevrons-down" color="#ffffff" size={24} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: playing ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          position: "fixed",
          top: "50%",
          left: 0,
          transition: `all 0.35s ease`,
          transform: `translateX(${inView ? "-100%" : "12px"})`,
          zIndex: 99,
          width: 12,
          "@media(max-width: 480px)": {
            top: 0,
            flexDirection: "row",
            left: "50%",
            width: "auto",
            transform: `translate(-50%, ${inView ? "-100%" : "48px"})`,
          },
        }}
        className={className}
      >
        {sections.map((item, index) => {
          const focused = tabIndex === index;
          const onClick = () => {
            if (typeof document === "undefined") return;
            var container: any = document.querySelector(".container");
            var target: any = document.querySelector(`.${item}`);
            if (container !== null) {
              container.scrollBy({
                top: target.getBoundingClientRect().top,
                behavior: "smooth",
              });
            }
          };
          return (
            <ButtonBase key={index} onClick={onClick} sx={{ p: 0.5 }}>
              <Box
                sx={{
                  width: focused ? 12 : 10,
                  height: focused ? 12 : 10,
                  backgroundColor: "#ffffff",
                  opacity: focused ? 1 : 0.5,
                  borderRadius: 16,
                  transition: `all 0.35s ease`,
                  "@media(max-width: 480px)": {
                    width: focused ? 8 : 6,
                    height: focused ? 8 : 6,
                  },
                }}
              />
            </ButtonBase>
          );
        })}
      </Box>
      <Box
        sx={{
          display: playing ? "flex" : "none",
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          transition: `all 0.35s ease`,
          transform: `translateY(${
            tabIndex < sections.length - 1 ? "0%" : "100%"
          })`,
          "&.shown": {
            transform: `translateY(${"100%"})`,
          },
          zIndex: 99,
          // background: `linear-gradient(rgba(33, 33,33, 0), rgba(33, 33,33, 1))`,
          background: `linear-gradient(rgb(33, 33, 33, 0), rgb(33, 33, 33, 1)) !important`,
        }}
        className={className}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: "100%",
            maxWidth: maxWidth,
            m: theme.spacing(0, "auto"),
            p: theme.spacing(2, 3),
            display: "flex",
          }}
        >
          <Typography
            sx={{
              mr: 1,
              fontSize: 14,
              color: "#ffffff",
              "& b": {
                fontWeight: "900",
              },
            }}
          >
            <b>1분 안에</b>
            <br />
            신청 가능!
          </Typography>
          <ButtonBase
            sx={{
              flex: 1,
              // width: "100%",
              background: `linear-gradient(90deg, rgb(4,232,78, 1), rgb(28,90,246, 1)) !important`,
              color: "#ffffff",
              height: 44,
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: "700",
              borderRadius: 0.5,
              justifyContent: "center",
              alignItems: "center",
              p: theme.spacing(0, 2.5, 0, 2),
            }}
            onClick={onClickButton}
          >
            <Icon
              name="coins"
              prefix="fas"
              color="#ffffff"
              size={20}
              sx={{ mr: 1 }}
            />
            지금 바로 한도 확인하기
          </ButtonBase>
        </Stack>
      </Box>
    </>
  );
}

function BigCases({ index }: { index: number }) {
  const swipeableViewsRef = useRef<any>(null);
  const { ref, inView } = useInView();
  const [viewIndex, setViewIndex] = useState<number>(0);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // scrollSnapAlign: "start",
        position: "relative",
        background: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0))`,
        p: theme.spacing(10, 0, 12, 0),
      }}
      className={sections[index]}
    >
      <Box
        ref={ref}
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          maxWidth: maxWidth * 2,
          "@media(max-width: 480px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 9,
            "@media(max-width: 480px)": {
              position: "initial",
              top: "initial",
              left: "initial",
              bottom: "initial",
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 40,
              lineHeight: 1.2,
              fontWeight: "900",
              color: "#ffffff",
              "@media(max-width: 480px)": {
                fontSize: 14,
                fontWeight: "400",
                mb: 1,
                textAlign: "center",
                "& br": {
                  display: "none",
                },
              },
            }}
          >
            글로벌 1위 <br />
            크리에이터 플랫폼
          </Typography>
          <Typography
            sx={{
              fontSize: 40,
              lineHeight: 1.2,
              fontWeight: "900",
              color: "#ffffff",
              "@media(max-width: 480px)": {
                fontSize: 28,
                textAlign: "center",
              },
            }}
          >
            <span className="color-js">Jellysmack</span>
            <br />
            국내 지원 시작!
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.4,
              color: grey[500],
              mt: 2,
              "@media(max-width: 480px)": {
                fontSize: 14,
                mb: 4,
                textAlign: "center",
              },
            }}
          >
            세계 최초 구독자 1억 PewDiePie
            <br />
            현실판 오징어게임의 MrBeast
            <br />
            다음 주인공은 누구?
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            height: "100%",
            "@media(max-width: 480px)": {
              position: "relative",
              overflowX: "visible",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              position: "absolute",
              top: 0,
              left: 400,
              right: 0,
              bottom: 0,
              "& > div": {
                width: "100%",
                height: "100%",
                overflowX: "visible",
                "@media(max-width: 480px)": {
                  position: "relative",
                  p: theme.spacing(0, 3),
                  "& > div": {
                    position: "relative",
                    top: "initial",
                    left: "initial",
                    right: "initial",
                    bottom: "initial",
                  },
                },
              },
              "@media(max-width: 480px)": {
                left: 0,
                right: 0,
              },
            }}
          >
            <IconButton
              disabled={viewIndex === 0}
              sx={{
                position: "absolute",
                top: "50%",
                left: -24,
                transform: "translateY(-50%)",
                zIndex: 9,
                opacity: viewIndex === 0 ? 0.2 : 1,
                "@media(max-width: 480px)": {
                  left: 12,
                },
              }}
              onClick={() => {
                if (viewIndex === 0) return;
                setViewIndex(viewIndex - 1);
              }}
            >
              <Icon name="chevron-left" color="#ffffff" size={24} />
            </IconButton>
            <IconButton
              disabled={viewIndex === views.length - 1}
              sx={{
                position: "absolute",
                top: "50%",
                right: -24,
                transform: "translateY(-50%)",
                zIndex: 9,
                opacity: viewIndex === views.length - 1 ? 0.2 : 1,
                "@media(max-width: 480px)": {
                  right: 12,
                },
              }}
              onClick={() => {
                if (viewIndex === views.length - 1) return;
                setViewIndex(viewIndex + 1);
              }}
            >
              <Icon name="chevron-right" color="#ffffff" size={24} />
            </IconButton>
            <SwipeableViews
              ref={swipeableViewsRef}
              index={viewIndex}
              onChangeIndex={setViewIndex}
              enableMouseEvents
            >
              {views.map((item, index) => {
                const { srcs, title } = item;
                const focused = viewIndex === index;
                return (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      height: "100%",
                      transition: `all 0.35s ease`,
                      transform: `scale(${focused ? 1 : 0.9})`,
                      opacity: focused ? 1 : 0.2,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        maxHeight: `800px`,
                        backgroundColor: "#000000",
                        "@media(max-width: 480px)": {
                          maxHeight: `320px`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            pt: `${56.25 * 2 * 0.6}%`,
                            "& img": {
                              objectFit: "cover",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              width: "100%",
                              display: "flex",
                            }}
                          >
                            <Box
                              sx={{
                                position: "relative",
                                width: "40%",
                              }}
                            >
                              <Box
                                sx={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  backgroundImage: `url(${srcs[0]})`,
                                  backgroundRepeat: `no-repeat`,
                                  backgroundSize: `cover`,
                                  backgroundPosition: `center center`,
                                }}
                              />
                            </Box>
                            <Box
                              sx={{
                                flex: 1,
                              }}
                            >
                              <Box
                                sx={{
                                  position: "relative",
                                  width: "100%",
                                  pt: `56.25%`,
                                }}
                              >
                                <Box
                                  sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundImage: `url(${srcs[1]})`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundSize: `cover`,
                                    backgroundPosition: `center center`,
                                  }}
                                />
                              </Box>
                              <Box
                                sx={{
                                  position: "relative",
                                  width: "100%",
                                  pt: `56.25%`,
                                }}
                              >
                                <Box
                                  sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundImage: `url(${srcs[2]})`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundSize: `cover`,
                                    backgroundPosition: `center center`,
                                  }}
                                />
                              </Box>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3), rgba(0,0,0,1))`,
                              "@media(max-width: 480px)": {
                                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8), rgba(0,0,0,1))`,
                              },
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 32,
                              fontWeight: "900",
                              color: "#ffffff",
                              "@media(max-width: 480px)": {
                                fontSize: 24,
                              },
                            }}
                          >
                            {title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 16,
                              color: "#ffffff",
                              "@media(max-width: 480px)": {
                                fontSize: 14,
                              },
                            }}
                          >
                            구독자 {item.subscribers}
                          </Typography>
                          <Box
                            sx={{
                              mt: 2,
                              flex: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: 14,
                                color: grey[500],
                                "@media(max-width: 480px)": {
                                  display: "none",
                                },
                              }}
                            >
                              {item.description}
                            </Typography>
                            <Typo
                              lines={3}
                              sx={{
                                fontSize: 12,
                                color: grey[500],
                                display: "none",
                                "@media(max-width: 480px)": {
                                  display: "-webkit-box",
                                },
                              }}
                            >
                              {item.description}
                            </Typo>
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                mt: 6,
                                fontSize: 14,
                                color: grey[500],
                                "@media(max-width: 480px)": {
                                  mt: 3,
                                  fontSize: 12,
                                },
                              }}
                            >
                              지원금액
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: 28,
                                fontWeight: "900",
                                color: "#e08af4",
                                "@media(max-width: 480px)": {
                                  fontSize: 20,
                                },
                              }}
                            >
                              {item.offer}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </SwipeableViews>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function SmallCases({ index }: { index: number }) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // scrollSnapAlign: "start",
        position: "relative",
        p: theme.spacing(10, 0, 12, 0),
        background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))`,
      }}
      className={sections[index]}
    >
      <Typography
        sx={{
          fontSize: 40,
          lineHeight: 1.2,
          fontWeight: "900",
          textAlign: "center",
          color: "#ffffff",
          "@media(max-width: 480px)": {
            fontSize: 28,
          },
        }}
      >
        <span className="color-js">Jellysmack</span>과 함께
        <br />
        급성장한 크리에이터들
      </Typography>
      <Typography
        sx={{
          fontSize: 16,
          lineHeight: 1.4,
          color: grey[500],
          textAlign: "center",
          mt: 2,
          mb: 8,
          "@media(max-width: 480px)": {
            fontSize: 14,
            mb: 4,
          },
        }}
      >
        국내외 크리에이터들이 펀딩의 효과를 보았어요!
      </Typography>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "@media(max-width: 480px)": {
              height: "100%",
            },
          }}
        >
          <Gallery />
          <Gallery />
          <Gallery />
        </Box>
      </Box>
    </Box>
  );
}

function Slip({ index }: { index: number }) {
  return (
    <Box
      sx={{
        position: "relative",
        // scrollSnapAlign: "start",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: theme.spacing(10, 0, 12, 0),
        background: `linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))`,
      }}
      className={sections[index]}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80')`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`,
          zIndex: -1,
        }}
      />
      <Typography
        sx={{
          fontSize: 40,
          lineHeight: 1.2,
          fontWeight: "900",
          textAlign: "center",
          color: "#ffffff",
          "@media(max-width: 480px)": {
            fontSize: 28,
          },
        }}
      >
        총 예산{" "}
        <span
          style={{
            color: `#e08af4`,
          }}
        >
          6,000억,
        </span>
        <br />
        어떤 원리로 지급되나요?
      </Typography>
    </Box>
  );
}

function Video({ index }: { index: number }) {
  const { ref, inView } = useInView();
  return (
    <Box
      sx={{
        // scrollSnapAlign: "start",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: theme.spacing(10, 0, 12, 0),
        background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
      }}
      className={sections[index]}
    >
      <Box
        ref={ref}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          maxWidth: maxWidth * 2,
          "@media(max-width: 480px)": {
            flexDirection: "column",
            p: theme.spacing(0, 3),
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 40,
            lineHeight: 1.2,
            fontWeight: "900",
            color: "#ffffff",
            textAlign: "center",
            "@media(max-width: 480px)": {
              fontSize: 28,
            },
          }}
        >
          유튜브 영상 수익의 대부분은
          <br />
          <span
            style={{
              color: `#00d1b0`,
            }}
          >
            6일 이내
          </span>{" "}
          일어납니다.
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: 1.4,
            color: grey[500],
            textAlign: "center",
            mt: 2,
            mb: 8,
            "@media(max-width: 480px)": {
              fontSize: 14,
              mb: 4,
            },
          }}
        >
          유큐브 영상은 6일 이후에도 수익이 되지만,
          <br />
          오랜 시간 쌓여야 의미가 있을 정도로 적습니다.
        </Typography>
        <Box
          sx={{
            flex: 1,
            position: "relative",
            width: "100%",
            height: "100%",
            maxHeight: 480,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            "@media(max-width: 480px)": {
              maxHeight: 320,
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          >
            <Box
              sx={{
                position: "relative",
                flex: 1,
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  pr: 3,
                  "@media(max-width: 480px)": {
                    display: "none",
                  },
                }}
              >
                <Chart type="line" data={videoChart} options={chartOptions} />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "none",
                  pr: 3,
                  "@media(max-width: 480px)": {
                    display: "initial",
                  },
                }}
              >
                <Chart
                  type="line"
                  data={videoChartMobile}
                  options={chartOptionsMobile}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: 40,
                  left: `calc(${(6 / 30) * 100}% + 6px)`,
                  bottom: 32,
                  pl: 2,
                  "@media(max-width: 480px)": {
                    left: `calc(${(6 / 30) * 100}% + 6px)`,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 0,
                    bottom: 0,
                    borderLeft: `2px dashed #ffffff`,
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontSize: 32,
                    fontWeight: "900",
                    color: "#00d1b0",
                    "@media(max-width: 480px)": {
                      fontSize: 24,
                    },
                  }}
                >
                  75%
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#ffffff",
                    "@media(max-width: 480px)": {
                      fontSize: 12,
                    },
                  }}
                >
                  영상 수익 중 75%가
                  <br />
                  게시 후 6일 이내에 발생합니다
                  <br />
                  (게시 당일 32%).
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: 40,
                  left: `calc(${(7 / 30) * 100}% + 6px)`,
                  right: `calc(-6px)`,
                  bottom: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      height: 160,
                      "@media(max-width: 480px)": {
                        height: 120,
                      },
                      left: "50%",
                      bottom: 0,
                      pl: 2,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: 0,
                        bottom: 0,
                        borderLeft: `2px dashed #ffffff`,
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        fontSize: 32,
                        fontWeight: "900",
                        color: "#00d1b0",
                        "@media(max-width: 480px)": {
                          fontSize: 24,
                        },
                      }}
                    >
                      25%
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "#ffffff",
                        "@media(max-width: 480px)": {
                          fontSize: 12,
                        },
                      }}
                    >
                      영상으로 평생 벌 수 있는 수익의 25%는
                      <br />첫 주 이후에 발생합니다.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    height: 100,
                    "@media(max-width: 480px)": {
                      height: 48,
                    },
                    borderTop: `2px dashed #ffffff`,
                    borderLeft: `2px dashed #ffffff`,
                    borderRight: `2px dashed #ffffff`,
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: "700",
                  // color: grey[700],
                  color: "#ffffff",
                  mb: 0.5,
                  "@media(max-width: 480px)": {
                    fontSize: 12,
                  },
                }}
              >
                Lifetime
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Revenue({ index }: { index: number }) {
  const { ref, inView } = useInView();
  return (
    <Box
      sx={{
        // scrollSnapAlign: "start",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: theme.spacing(10, 0, 12, 0),
        // background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
      }}
      className={sections[index]}
    >
      <Box
        ref={ref}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          maxWidth: maxWidth * 2,
          "@media(max-width: 480px)": {
            flexDirection: "column",
            p: theme.spacing(0, 3),
          },
        }}
      >
        <Box
          sx={{
            width: 400,
          }}
        >
          <Typography
            sx={{
              fontSize: 40,
              lineHeight: 1.2,
              fontWeight: "900",
              color: "#ffffff",
              "@media(max-width: 480px)": {
                fontSize: 28,
                textAlign: "center",
              },
            }}
          >
            월 조회수 수익의
            <br />
            대부분은{" "}
            <span
              style={{
                color: `#00e94f`,
              }}
            >
              30일 이내 영상
            </span>{" "}
            <br />
            에서 발생합니다.
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.4,
              color: grey[500],
              mt: 2,
              "@media(max-width: 480px)": {
                textAlign: "center",
                fontSize: 14,
                mb: 4,
              },
            }}
          >
            유튜브 채널에서 발생하는 월 조회수 수익의
            <br />
            70%가 30일 이내의 영상에서 발생하고 있습니다.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            position: "relative",
            width: "100%",
            height: "100%",
            maxHeight: 480,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            "@media(max-width: 480px)": {
              maxHeight: 320,
            },
            "& .web": {
              display: "initial !important",
              "@media(max-width: 480px)": {
                display: "none !important",
              },
            },
            "& .mobile": {
              display: "none !important",
              "@media(max-width: 480px)": {
                display: "initial !important",
              },
            },
          }}
        >
          <Chart
            type="pie"
            data={revenueChartData}
            options={revenueChartOptions}
            className="web"
          />
          <Chart
            type="pie"
            data={revenueChartData}
            options={revenueChartOptionsMobile}
            className="mobile"
          />
          <Box
            sx={{
              position: "absolute",
              right: "24%",
              bottom: "16%",
              // transform: "translate(50%, 50%)",
            }}
          >
            <Typography
              sx={{
                fontSize: 52,
                lineHeight: "60px",
                fontWeight: "900",
                textAlign: "right",
                "@media(max-width: 480px)": {
                  fontSize: 24,
                  lineHeight: "32px",
                },
              }}
            >
              68.5%
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                textAlign: "right",
                "@media(max-width: 480px)": {
                  fontSize: 14,
                },
              }}
            >
              30일 이내 영상
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "15%",
              left: "25%",
              // transform: "translate(50%, 50%)",
              "@media(max-width: 480px)": {
                top: "12%",
                left: "20%",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 32,
                lineHeight: "40px",
                fontWeight: "900",
                color: "#ffffff",
                // textAlign: "right",
                "@media(max-width: 480px)": {
                  fontSize: 20,
                  lineHeight: "28px",
                },
              }}
            >
              17.2%
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: "#ffffff",
                // textAlign: "right",
                "@media(max-width: 480px)": {
                  fontSize: 12,
                },
              }}
            >
              1년이 지난 영상
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "34%",
              left: "12%",
              // transform: "translate(50%, 50%)",
              "@media(max-width: 480px)": {
                top: "34%",
                left: "6%",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "28px",
                fontWeight: "900",
                color: "#ffffff",
                // textAlign: "right",
                "@media(max-width: 480px)": {
                  fontSize: 14,
                  lineHeight: "20px",
                },
              }}
            >
              6.3%
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: "#ffffff",
                // textAlign: "right",
                "@media(max-width: 480px)": {
                  fontSize: 10,
                },
              }}
            >
              91일 ~ 1년 이내 영상
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "49%",
              left: "11%",
              // transform: "translate(50%, 50%)",
              "@media(max-width: 480px)": {
                top: "48%",
                left: "4%",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "28px",
                fontWeight: "900",
                color: "#ffffff",
                // textAlign: "right",
                "@media(max-width: 480px)": {
                  fontSize: 14,
                  lineHeight: "20px",
                },
              }}
            >
              8%
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: "#ffffff",
                // textAlign: "right",
                "@media(max-width: 480px)": {
                  fontSize: 10,
                },
              }}
            >
              31일 ~ 90일
              <br />
              이내 영상
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Offer({ index }: { index: number }) {
  const { ref, inView } = useInView();
  return (
    <Box
      sx={{
        // scrollSnapAlign: "start",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={sections[index]}
    >
      <Box
        ref={ref}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          maxWidth: maxWidth * 2,
          "@media(max-width: 480px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            mb: 6,
            "@media(max-width: 480px)": {
              mb: 4,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 40,
              lineHeight: 1.2,
              fontWeight: "900",
              textAlign: "center",
              color: "#ffffff",
              "@media(max-width: 480px)": {
                fontSize: 28,
                textAlign: "center",
              },
            }}
          >
            당신의 미래 수익을
            <br />
            <span
              style={{
                color: `#0093ff`,
              }}
            >
              한번에
            </span>{" "}
            지급합니다.
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.4,
              color: grey[500],
              mt: 2,
              textAlign: "center",
              "@media(max-width: 480px)": {
                fontSize: 14,
                textAlign: "center",
              },
            }}
          >
            당신의 콘텐츠는 6일 이후에도 수익이 됩니다.
            <br />
            하지만 한번에 수익이 되지 않습니다.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxHeight: `480px`,
            "@media(max-width: 480px)": {
              width: "100%",
              height: "auto",
              flex: "initial",
              p: theme.spacing(0, 3),
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              "@media(max-width: 480px)": {
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                flex: 1,
                height: "100%",
                display: 'flex',
                flexDirection:'column',
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  "@media(max-width: 480px)": {
                    mb: 2,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: "900",
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 16,
                      textAlign: "left",
                    },
                  }}
                >
                  기존 수익 방식
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 12,
                      textAlign: "left",
                    },
                  }}
                >
                  조금씩 나눠 들어오는 30일 이전 수익
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  position: "relative",
                  display: 'flex',
                  flexDirection:'column',
                  alignItems:'center',
                }}
              >
                <Icon
                  name="faucet"
                  prefix="fad"
                  color="#0093ff"
                  size={64}
                  sx={{
                    transform: `scaleX(-1) translateX(-24px)`,
                  }}
                />
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <Icon name="droplet" color="#0093ff" prefix="fas" size={16} />
                  <Icon name="droplet" color="#0093ff" prefix="fas" size={16} />
                  <Icon name="droplet" color="#0093ff" prefix="fas" size={16} />
                  <Icon name="droplet" color="#0093ff" prefix="fas" size={16} />
                  <Icon name="droplet" color="#0093ff" prefix="fas" size={16} />
                  <Icon name="droplet" color="#0093ff" prefix="fas" size={16} />
                  <Icon name="droplet" color="#0093ff" prefix="fas" size={16} />
                  <Icon name="droplet" color="#0093ff" prefix="fas" size={16} />
                  <Icon name="droplet" color="#0093ff" prefix="fas" size={16} />
                </Box>
                <Box sx={{
                  mt: -6,
                  width: 200,
                  height: 100,
                  borderBottomLeftRadius: 24,
                  borderBottomRightRadius: 24,
                  borderLeft: `4px solid ${grey[700]}`,
                  borderRight: `4px solid ${grey[700]}`,
                  borderBottom: `4px solid ${grey[700]}`,
                }}></Box>
              </Box>
            </Box>
            <Icon
              name="arrow-right"
              color="#ffffff"
              prefix="fas"
              size={48}
              sx={{
                m: theme.spacing(0, 3),
                "@media(max-width: 480px)": {
                  transform: `rotate(90deg)`,
                  fontSize: `16px !important`,
                  m: theme.spacing(3, "auto", 2, "auto"),
                  display: "none",
                },
              }}
            />
            <Box
              sx={{
                flex: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "@media(max-width: 480px)": {
                  mt: 4,
                },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  "@media(max-width: 480px)": {
                    mb: 2,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: "900",
                    color: "#00e94f",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 16,
                      textAlign: "left",
                    },
                  }}
                >
                  Jellysmack의 제안
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 12,
                      textAlign: "left",
                    },
                  }}
                >
                  한번에 가용할 수 있는 미래 수익
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  flex: 1,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    pt: "100%",
                    "@media(max-width: 480px)": {
                      pt: "25%",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#00e94f",
                        borderRadius: "50%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        "@media(max-width: 480px)": {
                          borderRadius: 1,
                          flexDirection: "row",
                        },
                      }}
                    >
                      <Icon
                        name="sack-dollar"
                        prefix="fad"
                        color={grey[900]}
                        size={80}
                        sx={{
                          "@media(max-width: 480px)": {
                            fontSize: `24px !important`,
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          mt: 2,
                          fontSize: 32,
                          lineHeight: 1.2,
                          fontWeight: "900",
                          color: grey[900],
                          textAlign: "center",
                          "@media(max-width: 480px)": {
                            mt: 0,
                            fontSize: 20,
                            textAlign: "left",
                            mr: 2,
                          },
                        }}
                      >
                        5년치 수익을
                        <br />
                        한번에 지급!
                      </Typography>
                    </Box>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        width: "100%",
                        mt: -1,
                        p: `0 16px`,
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          left: "10%",
                          bottom: "10%",
                          backgroundColor: "#ffffff",
                          p: theme.spacing(1, 2),
                          borderRadius: 0.5,
                          transform: "scale(1.1)",
                          "@media(max-width: 480px)": {
                            position: "relative",
                            top: "initial",
                            left: "initial",
                            right: "initial",
                            bottom: "initial",
                            transform: "none",
                            flex: 1,
                            p: theme.spacing(0.5, 0),
                            display: "flex",
                            justifyContent: "center",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontWeight: "900",
                            "@media(max-width: 480px)": {
                              fontSize: 10,
                              // letterSpacing: `-1.5px !important`,
                            },
                          }}
                        >
                          고정지출 운용
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          right: "5%",
                          top: "25%",
                          backgroundColor: "#ffffff",
                          p: theme.spacing(1, 2),
                          borderRadius: 0.5,
                          transform: "scale(1.5)",
                          "@media(max-width: 480px)": {
                            position: "relative",
                            top: "initial",
                            left: "initial",
                            right: "initial",
                            bottom: "initial",
                            transform: "none",
                            flex: 1,
                            p: theme.spacing(0.5, 0),
                            display: "flex",
                            justifyContent: "center",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontWeight: "900",
                            "@media(max-width: 480px)": {
                              fontSize: 10,
                              // letterSpacing: `-1.5px !important`,
                            },
                          }}
                        >
                          신규 콘텐츠 제작
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          left: "6%",
                          top: "15%",
                          backgroundColor: "#ffffff",
                          p: theme.spacing(1, 2),
                          borderRadius: 0.5,
                          transform: "scale(1)",
                          "@media(max-width: 480px)": {
                            flex: 1,
                            position: "relative",
                            top: "initial",
                            left: "initial",
                            right: "initial",
                            bottom: "initial",
                            transform: "none",
                            p: theme.spacing(0.5, 0),
                            display: "flex",
                            justifyContent: "center",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontWeight: "900",
                            "@media(max-width: 480px)": {
                              fontSize: 10,
                              // letterSpacing: `-1.5px !important`,
                            },
                          }}
                        >
                          채널 및 구독자 성장
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            height: "100%",
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            maxHeight: `480px`,
            "@media(max-width: 480px)": {
              width: "100%",
              height: "auto",
              flex: "initial",
              p: theme.spacing(0, 3),
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              "@media(max-width: 480px)": {
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                flex: 1,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  "@media(max-width: 480px)": {
                    mb: 2,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: "900",
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 16,
                      textAlign: "left",
                    },
                  }}
                >
                  기존 수익 방식
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 12,
                      textAlign: "left",
                    },
                  }}
                >
                  조금씩 나눠 들어오는 30일 이전 수익
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "grid",
                    gridTemplateColumns: "repeat(40, 1fr)",
                    gridTemplateRows: "auto",
                    gridGap: 4,
                  }}
                >
                  {days().map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        "@media(max-width: 480px)": {
                          display: index < 400 ? "flex" : "none",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          pt: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            // backgroundColor: index < 6 ? "#00e94f" : grey[800],
                            backgroundColor: "#00e94f",
                            borderRadius: "50%",
                            opacity: index < 4 ? 1 : 0.15,
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    // display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "none",
                    "@media(max-width: 480px)": {
                      // position: "relative",
                      // mt: 1,
                      // top: "initial",
                      // left: "initial",
                      // transform: "none",
                      // backgroundColor: grey[800],
                      // borderRadius: 0.5,
                      flexDirection: "row",
                      // p: theme.spacing(1, 0),
                      display: "none",
                    },
                  }}
                >
                  <Icon
                    name="face-woozy"
                    prefix="fas"
                    color={grey[600]}
                    size={80}
                    sx={{
                      "@media(max-width: 480px)": {
                        fontSize: `24px !important`,
                        display: "none",
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      mt: 2,
                      fontSize: 32,
                      lineHeight: 1.2,
                      fontWeight: "900",
                      color: grey[600],
                      textAlign: "center",
                      "@media(max-width: 480px)": {
                        mt: 0,
                        fontSize: 14,
                        // color: grey[400],
                        "& br": {
                          display: "none",
                        },
                      },
                    }}
                  >
                    목돈 운용이 어려운 <br />
                    30일 이전 수익
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Icon
              name="arrow-right"
              color="#ffffff"
              prefix="fas"
              size={48}
              sx={{
                m: theme.spacing(0, 3),
                "@media(max-width: 480px)": {
                  transform: `rotate(90deg)`,
                  fontSize: `16px !important`,
                  m: theme.spacing(3, "auto", 2, "auto"),
                  display: "none",
                },
              }}
            />
            <Box
              sx={{
                flex: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "@media(max-width: 480px)": {
                  mt: 4,
                },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  "@media(max-width: 480px)": {
                    mb: 2,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: "900",
                    color: "#00e94f",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 16,
                      textAlign: "left",
                    },
                  }}
                >
                  Jellysmack의 제안
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 12,
                      textAlign: "left",
                    },
                  }}
                >
                  한번에 가용할 수 있는 미래 수익
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  flex: 1,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    pt: "100%",
                    "@media(max-width: 480px)": {
                      pt: "25%",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#00e94f",
                        borderRadius: "50%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        "@media(max-width: 480px)": {
                          borderRadius: 1,
                          flexDirection: "row",
                        },
                      }}
                    >
                      <Icon
                        name="sack-dollar"
                        prefix="fad"
                        color={grey[900]}
                        size={80}
                        sx={{
                          "@media(max-width: 480px)": {
                            fontSize: `24px !important`,
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          mt: 2,
                          fontSize: 32,
                          lineHeight: 1.2,
                          fontWeight: "900",
                          color: grey[900],
                          textAlign: "center",
                          "@media(max-width: 480px)": {
                            mt: 0,
                            fontSize: 20,
                            textAlign: "left",
                            mr: 2,
                          },
                        }}
                      >
                        5년치 수익을
                        <br />
                        한번에 지급!
                      </Typography>
                    </Box>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        width: "100%",
                        mt: -1,
                        p: `0 16px`,
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          left: "10%",
                          bottom: "10%",
                          backgroundColor: "#ffffff",
                          p: theme.spacing(1, 2),
                          borderRadius: 0.5,
                          transform: "scale(1.1)",
                          "@media(max-width: 480px)": {
                            position: "relative",
                            top: "initial",
                            left: "initial",
                            right: "initial",
                            bottom: "initial",
                            transform: "none",
                            flex: 1,
                            p: theme.spacing(0.5, 0),
                            display: "flex",
                            justifyContent: "center",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontWeight: "900",
                            "@media(max-width: 480px)": {
                              fontSize: 10,
                              // letterSpacing: `-1.5px !important`,
                            },
                          }}
                        >
                          고정지출 운용
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          right: "5%",
                          top: "25%",
                          backgroundColor: "#ffffff",
                          p: theme.spacing(1, 2),
                          borderRadius: 0.5,
                          transform: "scale(1.5)",
                          "@media(max-width: 480px)": {
                            position: "relative",
                            top: "initial",
                            left: "initial",
                            right: "initial",
                            bottom: "initial",
                            transform: "none",
                            flex: 1,
                            p: theme.spacing(0.5, 0),
                            display: "flex",
                            justifyContent: "center",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontWeight: "900",
                            "@media(max-width: 480px)": {
                              fontSize: 10,
                              // letterSpacing: `-1.5px !important`,
                            },
                          }}
                        >
                          신규 콘텐츠 제작
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          left: "6%",
                          top: "15%",
                          backgroundColor: "#ffffff",
                          p: theme.spacing(1, 2),
                          borderRadius: 0.5,
                          transform: "scale(1)",
                          "@media(max-width: 480px)": {
                            flex: 1,
                            position: "relative",
                            top: "initial",
                            left: "initial",
                            right: "initial",
                            bottom: "initial",
                            transform: "none",
                            p: theme.spacing(0.5, 0),
                            display: "flex",
                            justifyContent: "center",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontWeight: "900",
                            "@media(max-width: 480px)": {
                              fontSize: 10,
                              // letterSpacing: `-1.5px !important`,
                            },
                          }}
                        >
                          채널 및 구독자 성장
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const days = () => {
  let arr = [];
  for (let i = 0; i < 1600; i += 1) {
    arr.push(i);
  }
  return arr;
};

function Option({ index }: { index: number }) {
  const { ref, inView } = useInView();
  return (
    <Box
      sx={{
        // scrollSnapAlign: "start",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={sections[index]}
    >
      <Box
        ref={ref}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          maxWidth: maxWidth * 2,
          "@media(max-width: 480px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            mb: 6,
            "@media(max-width: 480px)": {
              width: "100%",
              mb: 6,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 40,
              lineHeight: 1.2,
              fontWeight: "900",
              color: "#ffffff",
              textAlign: "center",
              "@media(max-width: 480px)": {
                fontSize: 28,
                textAlign: "center",
              },
            }}
          >
            대부분의 수익은
            <br />
            <span
              style={{
                color: `#e08af4`,
              }}
            >
              온전히 보장
            </span>
            됩니다.
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              lineHeight: 1.4,
              color: grey[500],
              mt: 2,
              textAlign: "center",
              "@media(max-width: 480px)": {
                fontSize: 14,
                textAlign: "center",
              },
            }}
          >
            내 조회수 수익이 확 줄어들까 걱정이신가요?
            <br />
            걱정마세요. 오직 30일 이전의 수익만 선지급합니다.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxHeight: `480px`,
            "@media(max-width: 480px)": {
              width: "100%",
              height: "auto",
              flex: "initial",
              p: theme.spacing(0, 3),
            },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                mb: 4,
                "@media(max-width: 480px)": {
                  mb: 2,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "900",
                  color: "#ffffff",
                  textAlign: "center",
                  "@media(max-width: 480px)": {
                    fontSize: 16,
                    textAlign: "left",
                  },
                }}
              >
                당장 수익의 큰 변화가 없어요!
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#ffffff",
                  textAlign: "center",
                  "@media(max-width: 480px)": {
                    fontSize: 12,
                    textAlign: "left",
                  },
                }}
              >
                수입의 대부분을 차지하는 30일 이내는 제외됩니다.
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 2,
                position: "relative",
                height: 168,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                "@media(max-width: 480px)": {
                  height: 120,
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 4,
                  backgroundColor: "#e08af4",
                  overflow: "visible",
                  mb: 4,
                  "@media(max-width: 480px)": {
                    mb: 3.5,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: -4,
                    width: 12,
                    height: 12,
                    borderTop: `4px solid #e08af4`,
                    borderRight: `4px solid #e08af4`,
                    transform: `rotate(45deg)`,
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: "calc(60%)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 36,
                    borderTop: `2px dashed #e08af4`,
                    borderLeft: `2px dashed #e08af4`,
                    "@media(max-width: 480px)": {
                      bottom: 32,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      right: 0,
                      top: -5,
                      width: 8,
                      height: 8,
                      borderTop: `2px solid #e08af4`,
                      borderRight: `2px solid #e08af4`,
                      transform: `rotate(45deg)`,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 20,
                        lineHeight: 1.2,
                        fontWeight: "900",
                        color: "#e08af4",
                        textAlign: "center",
                        "@media(max-width: 480px)": {
                          fontSize: 16,
                        },
                      }}
                    >
                      내 수익
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 12,
                        lineHeight: 1.4,
                        color: "#ffffff",
                        textAlign: "center",
                        mt: 0.5,
                        "@media(max-width: 480px)": {
                          fontSize: 10,
                        },
                      }}
                    >
                      수익의 대부분이
                      <br />
                      온전히 보장됩니다.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "calc(40% - 2px)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 48,
                    left: 0,
                    right: 0,
                    bottom: 36,
                    borderTop: `2px dashed ${grey[700]}`,
                    borderRight: `2px dashed ${grey[700]}`,
                    background: `repeating-linear-gradient(45deg, ${grey[700]}, ${grey[700]} 1px, transparent 0, transparent 8px)`,
                    "@media(max-width: 480px)": {
                      bottom: 32,
                      top: 24,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: -5,
                      width: 8,
                      height: 8,
                      borderTop: `2px solid ${grey[700]}`,
                      borderRight: `2px solid ${grey[700]}`,
                      transform: `rotate(225deg)`,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: "900",
                        color: grey[200],
                        "@media(max-width: 480px)": {
                          fontSize: 14,
                        },
                      }}
                    >
                      담보분
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: `calc(40%)`,
                  top: 0,
                  bottom: 0,
                  transform: `translateX(-50%)`,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ flex: 1 }}></Box>
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: 16,
                    backgroundColor: "#ffffff",
                    border: `4px solid #e08af4`,
                  }}
                />
                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: 14,
                    fontWeight: "700",
                    color: grey[700],
                    "@media(max-width: 480px)": {
                      fontSize: 12,
                    },
                  }}
                >
                  30일 이전
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: `calc(60%)`,
                  top: 0,
                  bottom: 0,
                  transform: `translateX(-50%)`,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ flex: 1 }}></Box>
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: 16,
                    backgroundColor: "#ffffff",
                    border: `4px solid #e08af4`,
                  }}
                />
                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: 14,
                    fontWeight: "700",
                    color: grey[700],
                    "@media(max-width: 480px)": {
                      fontSize: 12,
                    },
                  }}
                >
                  당일
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              mt: 8,
              "@media(max-width: 480px)": {
                mt: 4,
              },
            }}
          >
            <Box
              sx={{
                mb: 4,
                "@media(max-width: 480px)": {
                  mb: 2,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "900",
                  color: "#ffffff",
                  textAlign: "center",
                  "@media(max-width: 480px)": {
                    fontSize: 16,
                    textAlign: "left",
                  },
                }}
              >
                원하는 만큼 기간 선택이 가능해요!
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#ffffff",
                  textAlign: "center",
                  "@media(max-width: 480px)": {
                    fontSize: 12,
                    textAlign: "left",
                  },
                }}
              >
                5년이 부담스러우시다면, 기간을 줄이세요.
              </Typography>
            </Box>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                height: 44,
                "@media(max-width: 480px)": {
                  height: 32,
                },
              }}
            >
              {[1, 2, 3, 5].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 1,
                    backgroundColor: "#e08af4",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: "700",
                      color: grey[900],
                      "@media(max-width: 480px)": {
                        fontSize: 12,
                        fontWeight: "700",
                      },
                    }}
                  >
                    {`${item}년 플랜`}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Flow({ index }: { index: number }) {
  const { ref, inView } = useInView();
  return (
    <Box
      sx={{
        // scrollSnapAlign: "start",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: theme.spacing(10, 0, 12, 0),
      }}
      className={sections[index]}
    >
      <Box
        ref={ref}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          maxWidth: maxWidth * 2,
          "@media(max-width: 480px)": {
            flexDirection: "column",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 40,
            lineHeight: 1.2,
            fontWeight: "900",
            color: "#ffffff",
            textAlign: "center",
            "@media(max-width: 480px)": {
              fontSize: 28,
            },
          }}
        >
          신청으로부터{" "}
          <span
            style={{
              color: `#0093ff`,
            }}
          >
            3주 안에
          </span>
          <br />
          입금까지 완료!
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: 1.4,
            color: grey[500],
            textAlign: "center",
            mt: 2,
            mb: 8,
            "@media(max-width: 480px)": {
              fontSize: 14,
              mb: 4,
            },
          }}
        >
          신청에서부터 입금까지
          <br />
          젤리스맥과 유하는 단 3주면 충분합니다.
        </Typography>
        <Box
          sx={{
            flex: 1,
            position: "relative",
            width: "100%",
            maxHeight: 480,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridAutoColumn: "1fr 1fr",
            gridTemplateRows: "auto auto",
            "@media(max-width: 480px)": {
              maxHeight: 320,
            },
          }}
        >
          {flows.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              {item.icon && (
                <>
                  <Icon
                    name={item.icon}
                    color="#0093ff"
                    prefix="fad"
                    size={64}
                    sx={{
                      "@media(max-width: 480px)": {
                        fontSize: `20px !important`,
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: index === 1 || index === 2 ? 16 : 20,
                      color: "#ffffff",
                      fontWeight: "900",
                      mt: 2,
                      textAlign: "center",
                      "@media(max-width: 480px)": {
                        fontSize: index === 1 || index === 2 ? 12 : 14,
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: grey[500],
                      mt: 0.5,
                      "@media(max-width: 480px)": {
                        fontSize: 12,
                      },
                    }}
                  >
                    {item.duration ? `${item.duration} 소요` : "총 3~4주"}
                  </Typography>
                </>
              )}
              {index < 2 ? (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translate(50%, -50%)",
                  }}
                >
                  <Icon
                    name="arrow-right"
                    color={grey[800]}
                    size={48}
                    prefix="fas"
                    sx={{
                      "@media(max-width: 480px)": {
                        fontSize: `12px !important`,
                      },
                    }}
                  />
                </Box>
              ) : index === 2 ? (
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    bottom: 0,
                    transform: "translate(-50%, 50%)",
                  }}
                >
                  <Icon
                    name="arrow-down"
                    color={grey[800]}
                    size={48}
                    prefix="fas"
                    sx={{
                      "@media(max-width: 480px)": {
                        fontSize: `12px !important`,
                      },
                    }}
                  />
                </Box>
              ) : index !== 3 ? (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Icon
                    name="arrow-left"
                    color={grey[800]}
                    size={48}
                    prefix="fas"
                    sx={{
                      "@media(max-width: 480px)": {
                        fontSize: `12px !important`,
                      },
                    }}
                  />
                </Box>
              ) : null}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Outro({ index }: { index: number }) {
  const router = useRouter();
  const { ref, inView } = useInView();
  const className = inView ? "shown" : "";
  const onClickButton = () => {
    router.push(`pairing`);
  };
  const onClickJellysmack = () => {
    router.push(`https://jellysmack.com/ko`);
  };
  const onClickYouha = () => {
    router.push(`https://youha.info`);
  };
  return (
    <Box
      sx={{
        // scrollSnapAlign: "start",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={sections[index]}
    >
      <Box ref={ref} sx={{ flex: 1, width: "100%", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.0), rgba(0,0,0,0))`,
            p: theme.spacing(7, 0),
            zIndex: 9,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            ref={ref}
            sx={{
              p: theme.spacing(12, 3),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: 1.2,
                fontWeight: "900",
                textAlign: "center",
                color: "#ffffff",
                transform: "translateY(100%)",
                opacity: 0,
                transition: "all 0.35s ease",
                "&.shown": {
                  transform: "translateY(0)",
                  opacity: 1,
                },
                transitionDelay: `0s`,
                "@media(max-width: 480px)": {
                  fontSize: 24,
                },
              }}
              className={className}
            >
              국내 1위{" "}
              <span
                style={{
                  color: "#0093ff",
                }}
              >
                youha
              </span>
              와
            </Typography>
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: 1.2,
                fontWeight: "900",
                textAlign: "center",
                color: "#ffffff",
                transform: "translateY(100%)",
                opacity: 0,
                transition: "all 0.35s ease",
                "&.shown": {
                  transform: "translateY(0)",
                  opacity: 1,
                },
                transitionDelay: `0.5s`,
                "@media(max-width: 480px)": {
                  fontSize: 24,
                },
              }}
              className={className}
            >
              글로벌 1위{" "}
              <span
                style={{
                  color: "#00e94f",
                }}
              >
                Jellysmack
              </span>
              이
            </Typography>
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: 1.2,
                fontWeight: "900",
                textAlign: "center",
                color: "#ffffff",
                transform: "translateY(100%)",
                opacity: 0,
                transition: "all 0.35s ease",
                "&.shown": {
                  transform: "translateY(0)",
                  opacity: 1,
                },
                transitionDelay: `1s`,
                "@media(max-width: 480px)": {
                  fontSize: 24,
                },
              }}
              className={className}
            >
              함께합니다.
            </Typography>
            <Stack
              spacing={1}
              sx={{
                transition: "all 0.35s ease",
                transform: "translateY(100%)",
                opacity: 0,
                "&.shown": {
                  transform: "translateY(0)",
                  opacity: 1,
                },
                transitionDelay: `1.5s`,
                m: theme.spacing(3, 0, 0, 0),
              }}
              className={className}
            >
              <ButtonBase
                sx={{
                  width: "100%",
                  background: `#00e94f`,
                  color: "#000000",
                  height: 44,
                  fontSize: 16,
                  lineHeight: "24px",
                  fontWeight: "700",
                  borderRadius: 0.5,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  p: theme.spacing(0, 2.5),
                }}
                onClick={onClickJellysmack}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 2,
                    "& img": {
                      width: 20,
                      height: 20,
                    },
                  }}
                >
                  <img src="/logos/jellysmack-square-black.png" />
                </Box>
                jellysmack 더 알아보러 가기
              </ButtonBase>
              <ButtonBase
                sx={{
                  width: "100%",
                  background: `#0093ff`,
                  color: "#ffffff",
                  height: 44,
                  fontSize: 16,
                  lineHeight: "24px",
                  fontWeight: "700",
                  borderRadius: 0.5,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  p: theme.spacing(0, 2.5),
                }}
                onClick={onClickYouha}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 2,
                    "& img": {
                      width: 20,
                      height: 20,
                    },
                  }}
                >
                  <img src="/logos/youha-square-white.png" />
                </Box>
                youha 더 알아보러 가기
              </ButtonBase>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: grey[900],
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: maxWidth * 2,
            p: theme.spacing(3, 3, 10, 3),
            m: theme.spacing(0, "auto"),
          }}
        >
          <Box
            sx={{
              display: "flex",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                mr: 2,
              }}
              onClick={onClickJellysmack}
            >
              <img src="/logos/jellysmack-square-white.png" />
            </Box>
            <Box
              sx={{
                width: 24,
                height: 24,
                mr: 2,
              }}
              onClick={onClickYouha}
            >
              <img src="/logos/youha-square-white.png" />
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: 14,
              lineHeight: "20px",
              color: grey[500],
              "@media(max-width: 480px)": {
                fontSize: 12,
                lineHeight: "16px",
              },
            }}
          >
            주식회사 티켓플레이스
            <br />
            사업자등록번호: 145-87-00100
            <br />
            서울특별시 강남구 봉은사로 2길 21, 반석빌딩 5층
            <br />
            대표이사 한준희
            <br />
            <br />ⓒ Ticketplace Inc.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function Gallery() {
  return (
    <Box
      sx={{
        display: "flex",
        animation: `swipe 15000ms linear infinite backwards`,
        "@keyframes swipe": {
          "0%": {
            transform: `translate(0)`,
          },
          "100%": {
            transform: `translate(-100%)`,
          },
        },
      }}
    >
      {cases.map((item, index) => {
        const { src, title, subtitle, budget, dialog } = item;
        const size = 240;
        return (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: size,
              p: theme.spacing(0, 3, 0, 0),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "@media(max-width: 480px)": {
                width: size - 40,
              },
            }}
          >
            <Box
              sx={{
                width: size - 64,
                height: size - 64,
                background: `linear-gradient(270deg,#00d1b0 0,#00e94f 48.96%,#0093ff 73.96%,#e08af4 97.92%)`,
                p: theme.spacing(0.5),
                borderRadius: 224,
                "@media(max-width: 480px)": {
                  width: size - 104,
                  height: size - 104,
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#000000",
                  overflow: "hidden",
                  backgroundImage: `url(${src})`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% auto`,
                  backgroundPosition: `center center`,
                  borderRadius: 224,
                  border: `4px solid #000000`,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(rgb(0,0,0,0.2), rgb(0,0,0,0.0.2))`,
                  }}
                ></Box>
              </Box>
            </Box>
            <Box
              sx={{
                mt: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: "900",
                  color: "#ffffff",
                  textAlign: "center",
                  "@media(max-width: 480px)": {
                    fontSize: 20,
                  },
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  color: "#ffffff",
                  textAlign: "center",
                  "@media(max-width: 480px)": {
                    fontSize: 14,
                  },
                }}
              >
                {subtitle}
              </Typography>
              {/* <Typography
                sx={{
                  mt: 0.5,
                  fontSize: 12,
                  color: grey[500],
                  textAlign: "center",
                }}
              >
                2022.02.01 투자완료
              </Typography> */}
              <Typography
                sx={{
                  mt: 1,
                  fontSize: 14,
                  color: grey[500],
                  "@media(max-width: 480px)": {
                    fontSize: 12,
                  },
                }}
              >
                {dialog ?? ""}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
