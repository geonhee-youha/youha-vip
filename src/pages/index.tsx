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
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const cases = [
  {
    nation: "🇲🇽",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Luisito_Comunica.jpg",
    title: "Luisito Comunica",
    subtitle: "여행 크리에이터",
    budget: 3000000,
    subscribers: "3,980만",
    dialog: `“저는 이야기를 전달하는 새로운 방법을 찾는 데 열정을 가진 크리에이터입니다. 렌즈를 통해 나를 표현하고 다양한 디지털 채널에서 내 경험을 공유할 수 있게 돕는 플랫폼을 좋아합니다.”`,
  },
  {
    nation: "🇺🇸",
    src: "https://i1.sndcdn.com/artworks-BO9zYA3HToHqSnNi-Q9ozWA-t500x500.jpg",
    title: "Zach Choi",
    subtitle: "음식 크리에이터",
    budget: 3000000,
    subscribers: "1,720만",
    dialog: `“Jellysmack은 모든 소셜 미디어 플랫폼에서 콘텐츠를 성공시키는 데 필요한 기술, 데이터 및 인프라를 제공합니다. 우리는 글로벌 푸드 아이콘이 되기 위한 여정에서 그들의 성장 파트너입니다.”`,
  },
  {
    nation: "🇦🇺",
    src: "https://yt3.ggpht.com/ytc/AMLnZu9U3YuqOXjzTbdSYrWNUAgQVfrPGf_Cjq5KrefDKQ=s900-c-k-c0x00ffffff-no-rj",
    title: "HowToBasic",
    subtitle: "음식 크리에이터",
    budget: 3000000,
    subscribers: "1,710만",
    dialog: `“Jellysmack의 크리에이터 프로그램이 시작되기를 오랫동안 기다려 왔습니다. 지금까지 맺은 파트너십은 회사와 지역 저 모두에게 엄청난 성장 잠재력이 있음을 증명합니다. 미래가 어떻게 될지 기대됩니다.”`,
  },
  {
    nation: "🇮🇳",
    src: "https://i.scdn.co/image/ab67656300005f1fda7c4c5e42815c1f5ee91cb1",
    title: "Mythpat",
    subtitle: "게임 크리에이터",
    subscribers: "1,280만",
    dialog: `“인도는 글로벌 크리에이터 경제의 허브가 되기 위해 순조롭게 진행되고 있습니다. Jellysmack은 확실히 여기 인도에서 업계의 전반적인 성장에 중추적인 역할을 할 것입니다.”`,
  },
  {
    nation: "🇰🇷",
    src: "https://yt3.googleusercontent.com/ytc/AMLnZu_AOWkUT0yEUvsJCsao3ZTJ-jhSsRqES45jKFyTVw=s176-c-k-c0x00ffffff-no-rj",
    title: "야미보이",
    subtitle: "푸드 크리에이터",
    budget: 3000000,
    subscribers: "728만",
    dialog: `“좋은영상 만들고자 항상 노력하는 야미보이 입니다. 오늘도 시청해주시고 응원해주셔서 감사합니다.”`,
  },
  {
    nation: "🇰🇷",
    src: "https://yt3.ggpht.com/zQe7ypCPRCJraUm2N13qTVrSDcfBHnffhtf1aQj5PzQopslprvF1Yrak_pblon5ht4IcPG6l=s900-c-k-c0x00ffffff-no-rj",
    title: "디바제시카",
    subtitle: "범죄장르 크리에이터",
    budget: 3000000,
    subscribers: "224만",
    dialog: `“꿈을 향해 시간을 투자하고, 열심히 배우고, 고민하는 그대들을 만나 정말 보람찼습니다! 힘들다고 느끼는 하루하루가 쌓여 당신을 완성시키는 날이 온다고 믿어요! 나도 아직 그러는 과정입니다.”`,
  },
  {
    nation: "🇵🇹",
    src: "https://jellysmack.com/wp-content/uploads/2022/08/Screen-Shot-2022-08-09-at-9.27.09-AM-e1660147208277.png",
    title: "Gaba",
    subtitle: "음식 크리에이터",
    subscribers: "213만",
    dialog: `“Jellysmack을 통해 제 채널과 과거 영상들의 가치를 평가받게 되어 정말 기뻤습니다. 과거 제작해 온 콘텐츠들울 이용하여 새로운 수익을 얻었고, 이를 새 콘텐츠에 적용할 수 있어 정말 놀라운 경험이었어요.”`,
  },
  {
    nation: "🇧🇷",
    src: "https://jellysmack.com/wp-content/uploads/2022/08/br-mandy-candy-1-e1660146990512.jpeg",
    title: "Mandy Candy",
    subtitle: "라이프스타일 크리에이터",
    budget: 3000000,
    subscribers: "210만",
    dialog: `“제게 Jellysmack은 기회였어요. 새 영상 업로드가 힘든 시기에, 과거 영상들은 큰 수익이 되지 않아 어려웠던 적이 있어요. 그때 Jellysmack이 손을 내밀었고, 덕분에 다시 기회를 잡았어요.”`,
  },
  {
    nation: "🇺🇸",
    src: "https://jellysmack.com/wp-content/uploads/2022/08/rr_buildings-e1660165901999.jpg",
    title: "RR Buildings",
    subtitle: "공예 및 건축 크리에이터",
    budget: 3000000,
    subscribers: "115만",
    dialog: `"Jellysmack 덕분이에요. 저는 오랜 기간 쌓여야 할 수익을 한번에 받았죠, 그것도 선불로. 채널 운영이 힘들던 시기 단 하루만에 제 미래에 재투자할 수 있었습니다."`,
  },
  {
    nation: "🇰🇷",
    src: "https://blog.kakaocdn.net/dn/cGHXJg/btrv6X0MNuO/FExP1GA4CV5aEYdn0i9h31/img.png",
    title: "수빙수tv",
    subtitle: "수산물 크리에이터",
    budget: 3000000,
    subscribers: "117만",
    dialog: `“솔직히 아직도 실감이 나지 않아요. 내가 이렇게도 많은 사랑과 관심을 받아도 되는 걸까? 나는 이 아낌없는 사랑에 어떻게 잘 보답할 수 있을까 항상 고민하고 생각합니다!”`,
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
    subtitle: "게임 크리에이터",
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
    subtitle: "게임 크리에이터",
    subscribers: `1.1억명`,
    description: `Pewdiepie로 더 잘 알려진 YouTube의 가장 큰 단일 콘텐츠 제작자인 Felix Kjellberg가 연초에 잠시 쉬었던 3주간의 휴식에서 돌아왔다. 그는 복귀 에피소드에서 본인의 채널이 Jellysmack과 계약을 맺었음을 알렸다.`,
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
    subtitle: "게임 크리에이터",
    description: `젤리스맥은 ‘슬라임 만들기’로 세계적 인기를 얻고 있는 유튜버 ‘카리나 가르시아(Karina Garcia)’ 등을 비롯한 총 500여 명의 글로벌 톱 크리에이터들과 협업하고 있다. 실제로, 젤리스맥과 협업한 크리에이터 중 65% 이상이 서비스를 통해 약 25만 달러(한화 약 3억 원)의 총 수익을 창출했으며, 젤리스맥은 현재까지 글로벌 크리에이터들과 함께 1억 5천만 달러(한화 약 1820억 원) 이상의 수익을 올린 것으로 알려졌다.`,
    offer: `10억 이상`,
  },
];

const sections = [
  "intro",
  "big-cases",
  "small-cases",
  "slip1",
  "video",
  "revenue",
  "slip2",
  "logic",
  "offer",
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

export default function Index() {
  if (typeof window !== "undefined")
    window.location.href = "https://jellysmack.youha.info/";
  return null;
}

function Page() {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState<number>(0);
  const onScroll = () => {
    if (typeof document === "undefined") return;
    var container: any = document.querySelector(".container");
    const height = container.offsetHeight;
    const top = container.scrollTop;
    const index = parseInt(`${(top + 64) / height}`);
    setTabIndex(index);
  };
  useEffect(() => {
    router.replace("https://jellysmack.youha.info/");
  }, []);
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
        overflowY: "scroll",
        // scrollSnapType: "y mandatory",
        "& .color-js": {
          color: "#00e94f !important",
        },
        "& .mobile": {
          display: "none",
          "@media(max-width: 480px)": {
            display: "initial",
          },
        },
        "& .wrapper": {
          "@media(max-width: 480px)": {
            height: 640,
          },
        },
      }}
      className="container"
      onScroll={onScroll}
    >
      <Header />
      {sections.map((item, index) => {
        return item === "intro" ? (
          <Intro key={index} index={index} tabIndex={tabIndex} />
        ) : item === "small-cases" ? (
          <SmallCases key={index} index={index} />
        ) : item === "big-cases" ? (
          <BigCases key={index} index={index} />
        ) : item === "slip1" ? (
          <Slip1 key={index} index={index} />
        ) : item === "revenue" ? (
          <Revenue key={index} index={index} />
        ) : item === "offer" ? (
          <Offer key={index} index={index} />
        ) : item === "flow" ? (
          <Flow key={index} index={index} />
        ) : item === "outro" ? (
          <Outro key={index} index={index} />
        ) : item === "logic" ? (
          <Logic key={index} index={index} />
        ) : item === "slip2" ? (
          <Slip2 key={index} index={index} />
        ) : item === "video" ? (
          <Video key={index} index={index} />
        ) : item === "option" ? (
          <Option key={index} index={index} />
        ) : null;
      })}
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
  const onClickButton = () => {
    // window.open("https://webtvasia.catalog.jellysmack.com/");
    window.open(
      "https://app.catalog.jellysmack.com/ko?utm_source=jellysmack.com&utm_medium=referral&utm_campaign=JellyFi_CTA_ES"
    );
    router.push(`/complete`);
  };
  const [playing, setPlaying] = useState<boolean>(false);
  useEffect(() => {
    if (inView) setPlaying(inView);
  }, [inView]);
  const className = inView ? "shown" : "";
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
        className={`wrapper ${sections[index]}`}
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
                "@media(max-width: 480px)": {
                  fontSize: 32,
                },
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
                "@media(max-width: 480px)": {
                  fontSize: 32,
                },
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
                "@media(max-width: 480px)": {
                  fontSize: 32,
                },
              }}
              className={className}
            >
              지원합니다.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: 16,
                lineHeight: 1.4,
                color: grey[400],
                textAlign: "center",
                // color: "#ffffff",
                transform: "translateY(100%)",
                opacity: 0,
                transition: "all 0.35s ease",
                "&.shown": {
                  transform: "translateY(0)",
                  opacity: 1,
                },
                transitionDelay: `1.5s`,
                "@media(max-width: 480px)": {
                  fontSize: 14,
                },
              }}
              className={className}
            >
              최소 5천만원에서 최대 20억원까지,
              <br />
              오직 크리에이터에게만 주어지는 기회.
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
                transitionDelay: `2s`,
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
              "@media(max-width: 480px)": {
                fontSize: 12,
                lineHeight: `20px`,
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
              "@media(max-width: 480px)": {
                height: 40,
                fontSize: 14,
              },
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
        p: theme.spacing(10, 0, 4, 0),
      }}
      className={`wrapper ${sections[index]}`}
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
            크리에이터 기업
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
            <span className="color-js">Jellysmack</span>,
            <br />
            <span
              style={{
                color: `#0093ff`,
              }}
            >
              youha
            </span>
            와 함께 <br />
            국내 상륙!
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
        p: theme.spacing(10, 0, 4, 0),
        background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))`,
      }}
      className={`wrapper ${sections[index]}`}
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
        <span className="color-js">500명</span>이 넘는
        <br />
        크리에이터들을
        <br />
        지원합니다.
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
        이미 수많은 크리에이터들이 Jellysmack을 통해
        <br />더 많은 수익을 창출하며 성장하고 있습니다.
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

function Slip1({ index }: { index: number }) {
  const { ref, inView } = useInView();
  const className = inView ? "shown" : "";
  const onClickDown = () => {
    if (typeof document === "undefined") return;
    var container: any = document.querySelector(".container");
    var target: any = document.querySelector(`.${sections[index + 1]}`);
    if (container !== null) {
      container.scrollBy({
        top: target.getBoundingClientRect().top,
        behavior: "smooth",
      });
    }
  };
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
      className={`wrapper ${sections[index]}`}
    >
      <Box
        ref={ref}
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
        크리에이터 지원 예산
        <br />
        <span
          style={{
            color: `#e08af4`,
          }}
        >
          총 6,000억원,
        </span>
        <br />
        어떤 원리로 지급되나요?
      </Typography>
      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: 1,
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
            // transform: `rotate(180deg)`,
          },
        }}
        // className={className}
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
          더 알아보기
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
      className={`wrapper ${sections[index]}`}
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
          유튜브 영상 수익의{" "}
          <span className="mobile">
            <br />
          </span>
          대부분은
          <br />
          <span
            style={{
              // color: `#00d1b0`,
              color: "#00e94f",
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
          유튜브 영상 수익의 75%가 업로드 6일 이내 발생하며,
          <br />
          6일 이후 수익은 오랜 기간 누적해야 의미가 있습니다.
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
                    // color: "#00d1b0",
                    color: "#00e94f",
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
                        // color: "#00d1b0",
                        color: "#00e94f",
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
        background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))`,
      }}
      className={`wrapper ${sections[index]}`}
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
            대부분은 <br />
            <span
              style={{
                color: `#00e94f`,
              }}
            >
              30일 이내 업로드한 영상
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
            유튜브 채널에서 발생하는 월 전체 조회수 수익의
            <br />
            70%가 업로드 30일 이내의 영상에서 발생합니다.
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
              72.5%
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
              top: "12%",
              left: "30%",
              // transform: "translate(50%, 50%)",
              "@media(max-width: 480px)": {
                top: "8%",
                left: "26%",
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
              13.2%
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
              top: "25%",
              left: "15%",
              // transform: "translate(50%, 50%)",
              "@media(max-width: 480px)": {
                top: "24%",
                left: "12%",
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
              top: "40%",
              left: "11%",
              // transform: "translate(50%, 50%)",
              "@media(max-width: 480px)": {
                top: "38%",
                left: "8%",
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

function Slip2({ index }: { index: number }) {
  const { ref, inView } = useInView();
  const className = inView ? "shown" : "";
  const onClickDown = () => {
    if (typeof document === "undefined") return;
    var container: any = document.querySelector(".container");
    var target: any = document.querySelector(`.${sections[index + 1]}`);
    if (container !== null) {
      container.scrollBy({
        top: target.getBoundingClientRect().top,
        behavior: "smooth",
      });
    }
  };
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
        background: `linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1))`,
      }}
      className={`wrapper ${sections[index]}`}
    >
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1532007271951-c487760934ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80')`,
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
        이렇듯, 업로드 후<br />
        30일이 지난 영상들은
        <br />
        <span
          style={{
            color: `#00d1b0`,
          }}
        >
          조회수 수익이 크지 않습니다.
        </span>
        <br />
        <br />
        하지만{" "}
        <span
          style={{
            color: `#00d1b0`,
          }}
        >
          5년치를 한번에
        </span>
        <br />
        받을 수 있다면 어떨까요?
      </Typography>
      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: 1,
          transition: `all 0.35s ease`,
          cursor: "pointer",
          // "&.shown": {
          //   opacity: 1,
          //   "& svg": {
          //     transition: `all 0.35s ease`,
          //     transform: `rotate(0deg)`,
          //   },
          // },
          "& svg": {
            transition: `all 0.35s ease`,
            // transform: `rotate(180deg)`,
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
          더 알아보기
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
  );
}

function Offer({ index }: { index: number }) {
  const { ref, inView } = useInView();
  const [plan, setPlan] = useState<number>(5);
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
      className={`wrapper ${sections[index]}`}
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
            원하는 기간만큼만,
            <br />
            <span
              style={{
                color: `#0093ff`,
              }}
            >
              플랜을 선택
            </span>{" "}
            하세요!
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
            긴 기간을 선지급받기 부담스러우시다면,
            <br />
            다양한 기간 플랜을 선택하세요.
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
              flex: 1,
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              "@media(max-width: 480px)": {
                // flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                flex: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
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
                      // textAlign: "left",
                    },
                  }}
                >
                  조금씩 얻는 수익
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 12,
                      // textAlign: "left",
                    },
                  }}
                >
                  30일 이전 영상들의 수익
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="faucet"
                  prefix="fad"
                  color="#0093ff"
                  size={64}
                  sx={{
                    mt: 6,
                    transform: `scaleX(-1) translateX(-24px)`,
                    "@media(max-width: 480px)": {
                      mt: 0,
                    },
                  }}
                />
                <Box
                  sx={{
                    flex: 1,
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                      <Icon
                        key={index}
                        name="droplet"
                        color="#0093ff"
                        prefix="fas"
                        size={16}
                        sx={{
                          mb: 1,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <Box
                  sx={{
                    mt: -22,
                    position: "relative",
                    width: 200,
                    height: 200,
                    "@media(max-width: 480px)": {
                      width: "100%",
                      height: 128,
                      mt: -22,
                    },
                    borderLeft: `4px solid ${grey[700]}`,
                    borderRight: `4px solid ${grey[700]}`,
                    borderBottom: `4px solid ${grey[700]}`,
                    overflow: "hidden",
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    willChange: "transform",
                    transform: "translateZ(0)",
                    isolation: "isolate",
                    zIndex: 0,
                    "& .wave": {
                      position: "absolute",
                      left: 0,
                      top: 0,
                      zIndex: -1,
                      width: "100%",
                      height: "100%",
                      transform: `translate(0, calc(100% - 00%))`,
                      backgroundColor: "#0093ff",
                      transition: `all 2s`,
                    },
                    "& .wave .back": {
                      width: "200%",
                      position: "absolute",
                      bottom: "100%",
                      right: 0,
                      fill: grey[700],
                      animation: "wave-back 1.4s infinite linear",
                      "@keyframes wave-back": {
                        "100%": {
                          transform: "translate(50%, 0)",
                        },
                      },
                    },
                    "& .wave .front": {
                      width: "200%",
                      position: "absolute",
                      bottom: "100%",
                      left: 0,
                      mb: `-1px`,
                      fill: "#0093ff",
                      animation: "wave-front 0.7s infinite linear",
                      "@keyframes wave-front": {
                        "100%": {
                          transform: "translate(-50%, 0)",
                        },
                      },
                    },
                  }}
                >
                  <Box className="wave">
                    <svg viewBox="0 0 560 20" className="back">
                      <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                      <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                      <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                      <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                    </svg>
                    <svg viewBox="0 0 560 20" className="front">
                      <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                      <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                      <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                      <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                "@media(max-width: 480px)": {
                  width: 40,
                },
              }}
            >
              <Icon
                name="arrow-right"
                color="#ffffff"
                prefix="fas"
                size={32}
                sx={{
                  m: theme.spacing(0, 3),
                  "@media(max-width: 480px)": {
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    // transform: `rotate(90deg)`,
                    fontSize: `12px !important`,
                    // m: theme.spacing(3, "auto", 2, "auto"),
                    m: theme.spacing(0),
                    // display: "none",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "@media(max-width: 480px)": {
                  display: "none",
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
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 16,
                      textAlign: "left",
                    },
                  }}
                >
                  플랜 선택
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
                  원하는 기간만큼 플랜 선택
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {[1, 2, 3, 5].map((item, index) => {
                  const focused = item === plan;
                  const onClick = () => {
                    setPlan(item);
                  };
                  return (
                    <ButtonBase
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 1,
                        backgroundColor: "#0093ff",
                        width: 200,
                        "@media(max-width: 480px)": {
                          width: `calc((100vw - 40px)/3)`,
                        },
                        height: 40,
                        mt: 1,
                        opacity: focused ? 1 : 0.5,
                      }}
                      onClick={onClick}
                    >
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "700",
                          // color: grey[900],
                          color: "#ffffff",
                          "@media(max-width: 480px)": {
                            fontSize: 12,
                            fontWeight: "700",
                          },
                        }}
                      >
                        {`${item}년 플랜`}
                      </Typography>
                    </ButtonBase>
                  );
                })}
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: 12,
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 10,
                    },
                  }}
                >
                  플랜을 선택해 보세요!
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: "100%",
              }}
            >
              <Icon
                name="arrow-right"
                color="#ffffff"
                prefix="fas"
                size={32}
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
            </Box>
            <Box
              sx={{
                flex: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
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
                    // color: "#00e94f",
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 16,
                      // textAlign: "left",
                    },
                  }}
                >
                  한번에 선지급
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 12,
                      // textAlign: "left",
                    },
                  }}
                >
                  한번에 가용할 수 있는 수익
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Icon
                    // name="sack-dollar"
                    name="shower"
                    prefix="fad"
                    color="#0093ff"
                    size={72}
                    sx={{
                      "@media(max-width: 480px)": {
                        fontSize: `24px !important`,
                      },
                    }}
                  />
                  {/* <Typography
                    sx={{
                      mt: 1,
                      fontSize: 28,
                      lineHeight: 1.2,
                      fontWeight: "900",
                      color: "#0093ff",
                      textAlign: "center",
                      "@media(max-width: 480px)": {
                        fontSize: 16,
                      },
                    }}
                  >
                    새로운 콘텐츠에
                    <br />
                    투자하세요!
                  </Typography> */}
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    width: 200,
                    height: 200,
                    "@media(max-width: 480px)": {
                      width: "100%",
                      height: 128,
                      // mt: -16,
                    },
                    borderLeft: `4px solid ${grey[700]}`,
                    borderRight: `4px solid ${grey[700]}`,
                    borderBottom: `4px solid ${grey[700]}`,
                    overflow: "hidden",
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    willChange: "transform",
                    transform: "translateZ(0)",
                    isolation: "isolate",
                    zIndex: 0,
                    "& .wave": {
                      position: "absolute",
                      left: 0,
                      top: 0,
                      // zIndex: -1,
                      width: "100%",
                      height: "100%",
                      transform: `translate(0, calc(100% - ${
                        plan * 15 + 15
                      }%))`,
                      backgroundColor: "#0093ff",
                      transition: `all 2s`,
                    },
                    "& .wave .back": {
                      width: "200%",
                      position: "absolute",
                      bottom: "100%",
                      right: 0,
                      fill: grey[700],
                      animation: "wave-back 1.4s infinite linear",
                      "@keyframes wave-back": {
                        "100%": {
                          transform: "translate(50%, 0)",
                        },
                      },
                    },
                    "& .wave .front": {
                      width: "200%",
                      position: "absolute",
                      bottom: "100%",
                      left: 0,
                      mb: `-1px`,
                      fill: "#0093ff",
                      animation: "wave-front 0.7s infinite linear",
                      "@keyframes wave-front": {
                        "100%": {
                          transform: "translate(-50%, 0)",
                        },
                      },
                    },
                  }}
                >
                  <Box className="wave">
                    <svg viewBox="0 0 560 20" className="back">
                      <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                      <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                      <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                      <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                    </svg>
                    <svg viewBox="0 0 560 20" className="front">
                      <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                      <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                      <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                      <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                    </svg>
                  </Box>
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      right: 0,
                      transform: "translateY(-50%)",
                      fontSize: 20,
                      lineHeight: 1.4,
                      color: "#ffffff",
                      textAlign: "center",
                      fontWeight: "900",
                      "@media(max-width: 480px)": {
                        fontSize: 16,
                        textAlign: "center",
                      },
                    }}
                  >
                    {/* 새로운 콘텐츠에
                    <br />
                    투자 가능 */}
                    {`${plan}년치`}
                    <br />
                    미래 수익
                    {/* <br />
                    한번에 지급! */}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "none",
              "@media(max-width: 480px)": {
                display: "block",
              },
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: 3,
              }}
            >
              {[1, 2, 3, 5].map((item, index) => {
                const focused = item === plan;
                const onClick = () => {
                  setPlan(item);
                };
                return (
                  <ButtonBase
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 1,
                      backgroundColor: "#0093ff",
                      flex: 1,
                      height: 40,
                      opacity: focused ? 1 : 0.5,
                    }}
                    onClick={onClick}
                  >
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: "700",
                        // color: grey[900],
                        color: "#ffffff",
                        "@media(max-width: 480px)": {
                          fontSize: 12,
                          fontWeight: "700",
                        },
                      }}
                    >
                      {`${item}년 플랜`}
                    </Typography>
                  </ButtonBase>
                );
              })}
            </Stack>
            <Typography
              sx={{
                mt: 1,
                fontSize: 12,
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              플랜을 선택해 보세요!
            </Typography>
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
                  조금씩 나눠 들어오는 수익
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

function Logic({ index }: { index: number }) {
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
        background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
      }}
      className={`wrapper ${sections[index]}`}
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
            업로드 후 <br />
            30일이 지난 영상들의
            <br />
            <span
              style={{
                // color: `#e08af4`,
                color: `#0093ff`,
                // color: `#00d1b0`,
              }}
            >
              조회수 수익들
            </span>
            을 모아
            <br />
            <span
              style={{
                // color: `#e08af4`,
                color: `#0093ff`,
                // color: `#00d1b0`,
              }}
            >
              한번에 선지급
            </span>
            해 드립니다.
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
            오랜 기간 누적해야 의미있는 수익을
            <br />
            한번에 얻을 수 있는 기회!
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
                position: "relative",
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                "@media(max-width: 480px)": {
                  height: 280,
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 4,
                  backgroundColor: "#0093ff",
                  overflow: "visible",
                  mb: 6,
                  "@media(max-width: 480px)": {
                    mb: 5.5,
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
                    borderTop: `4px solid #0093ff`,
                    borderRight: `4px solid #0093ff`,
                    transform: `rotate(45deg)`,
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: `calc(50% - 172px)`,
                  top: 0,
                  bottom: 0,
                  transform: `translateX(-50%)`,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  "@media(max-width: 480px)": {
                    left: "calc(70% - 104px)",
                  },
                  zIndex: 9,
                }}
              >
                <Box sx={{ flex: 1 }}></Box>
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: 16,
                    backgroundColor: "#ffffff",
                    border: `4px solid #0093ff`,
                  }}
                />
                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: 14,
                    fontWeight: "700",
                    // color: grey[500],
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 12,
                    },
                  }}
                >
                  30일 이전
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: "700",
                    color: grey[500],
                    // color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 10,
                    },
                  }}
                >
                  {dayjs(
                    new Date(new Date().getTime() - 3600000 * 24 * 30)
                  ).format("YYYY년 MM월 DD일")}
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: `calc(50%)`,
                  top: 0,
                  bottom: 0,
                  transform: `translateX(-50%)`,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  zIndex: 9,
                  "@media(max-width: 480px)": {
                    left: `calc(70%)`,
                  },
                }}
              >
                <Box sx={{ flex: 1 }}></Box>
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: 16,
                    backgroundColor: "#ffffff",
                    border: `4px solid #0093ff`,
                  }}
                />
                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: 14,
                    fontWeight: "700",
                    // color: grey[500],
                    color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 12,
                    },
                  }}
                >
                  오늘
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: "700",
                    color: grey[500],
                    // color: "#ffffff",
                    textAlign: "center",
                    "@media(max-width: 480px)": {
                      fontSize: 10,
                    },
                  }}
                >
                  {dayjs(new Date()).format("YYYY년 MM월 DD일")}
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 52,
                  display: "flex",
                  alignItems: "flex-end",
                  // zIndex: -1,
                  "@media(max-width: 480px)": {
                    bottom: 48,
                  },
                }}
              >
                <Box
                  sx={{
                    width: `calc(50% - 172px - 0px)`,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    "@media(max-width: 480px)": {
                      width: `calc(70% - 104px - 0px)`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "none",
                      pb: 1,
                      pl: 1,
                      pr: 1,
                      mt: 10,
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      "@media(max-width: 480px)": {
                        mt: 4,
                      },
                    }}
                  >
                    <Icon
                      name="hand-holding-dollar"
                      prefix="fad"
                      color="#0093ff"
                      size={40}
                      sx={{
                        "@media(max-width: 480px)": {
                          fontSize: `16px !important`,
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: 1.4,
                        color: "#0093ff",
                        mt: 1,
                        textAlign: "center",
                        wordBreak: "keep-all",
                        "@media(max-width: 480px)": {
                          fontSize: 12,
                        },
                        "& b": {
                          fontWeight: "900",
                        },
                      }}
                    >
                      30일이 지난 영상들의 <br />
                      작은 조회수 수입들을 모아
                      <br />
                      <b>한번에 선지급</b>합니다.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "none",
                      m: theme.spacing(0, "auto"),
                      borderLeft: `2px dashed #0093ff`,
                      height: 48,
                    }}
                  />
                  <Box
                    sx={{
                      mt: 20,
                      borderRight: `2px dashed #0093ff`,
                      borderTop: `2px dashed #0093ff`,
                      background: `repeating-linear-gradient(45deg, ${alpha(
                        "#0093ff",
                        0.2
                      )}, ${alpha(
                        "#0093ff",
                        0.2
                      )} 1px, transparent 0, transparent 8px)`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      "@media(max-width: 480px)": {
                        mt: 12,
                        borderRight: `2px dashed #0093ff`,
                        borderTop: `2px dashed #0093ff`,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: "900",
                        color: "#0093ff",
                        textAlign: "center",
                        lineHeight: 1.2,
                        "@media(max-width: 480px)": {
                          fontSize: 14,
                        },
                      }}
                    >
                      30일 지난
                      <br />
                      영상들의 수익
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        fontSize: 14,
                        color: "#0093ff",
                        textAlign: "center",
                        wordBreak: "keep-all",
                        "@media(max-width: 480px)": {
                          fontSize: 10,
                        },
                      }}
                    >
                      Jelleysmack X youha
                      <br />
                      선지급 계약 대상
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      pb: 1,
                      pl: 1,
                      pr: 1,
                      display: "none",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      name="hands-holding-dollar"
                      prefix="fad"
                      color="#ffffff"
                      size={40}
                      sx={{
                        "@media(max-width: 480px)": {
                          fontSize: `16px !important`,
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: 1.4,
                        color: "#ffffff",
                        mt: 1,
                        textAlign: "center",
                        wordBreak: "keep-all",
                        "@media(max-width: 480px)": {
                          fontSize: 12,
                        },
                        "& b": {
                          fontWeight: "900",
                        },
                      }}
                    >
                      30일 이내 및
                      <br />
                      앞으로 업로드할 영상들의 수익은
                      <br />
                      <b>온전히 크리에이터님의 몫</b>입니다.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "none",
                      m: theme.spacing(0, "auto"),
                      borderLeft: `2px dashed ${grey[700]}`,
                      height: 48,
                    }}
                  />
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      position: "relative",
                      borderTop: `2px dashed ${grey[700]}`,
                      height: "calc(100%)",
                      // ml: `-2px`,
                    }}
                  >
                    <Box
                      sx={{
                        width: `calc(172px + 1px)`,
                        // backgroundColor: 'blue'
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderLeft: `2px dashed ${grey[700]}`,
                        borderRight: `2px dashed #ffffff`,
                        background: `repeating-linear-gradient(45deg, ${alpha(
                          "#ffffff",
                          0.2
                        )}, ${alpha(
                          "#ffffff",
                          0.2
                        )} 1px, transparent 0, transparent 8px)`,
                        "@media(max-width: 480px)": {
                          width: `calc(104px + 1px)`,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: "900",
                          color: "#ffffff",
                          textAlign: "center",
                          lineHeight: 1.2,
                          "@media(max-width: 480px)": {
                            fontSize: 14,
                          },
                        }}
                      >
                        30일 이내
                        <br />
                        영상들의 수익
                      </Typography>
                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: 14,
                          color: "#ffffff",
                          textAlign: "center",
                          "@media(max-width: 480px)": {
                            fontSize: 10,
                          },
                        }}
                      >
                        크리에이터님의 몫
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        // backgroundColor: "red",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        background: `repeating-linear-gradient(45deg, ${alpha(
                          grey[600],
                          0.2
                        )}, ${alpha(
                          grey[600],
                          0.2
                        )} 1px, transparent 0, transparent 8px)`,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: "900",
                          color: grey[400],
                          textAlign: "center",
                          lineHeight: 1.2,
                          "@media(max-width: 480px)": {
                            fontSize: 14,
                          },
                        }}
                      >
                        미래 업로드할
                        <br />
                        영상들의 수익
                      </Typography>
                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: 14,
                          color: grey[400],
                          textAlign: "center",
                          "@media(max-width: 480px)": {
                            fontSize: 10,
                          },
                        }}
                      >
                        크리에이터님의 몫
                      </Typography>
                    </Box>
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
      className={`wrapper ${sections[index]}`}
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
                // color: `#e08af4`,
                color: `#0093ff`,
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
            {/* <Box
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
                    // textAlign: "left",
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
                    // textAlign: "left",
                  },
                }}
              >
                수입의 대부분을 차지하는 30일 이내는 제외됩니다.
              </Typography>
            </Box> */}
            <Box
              sx={{
                mt: 2,
                position: "relative",
                height: 320,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                "@media(max-width: 480px)": {
                  height: 240,
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
                  width: "calc(70%)",
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
                        fontSize: 24,
                        lineHeight: 1.2,
                        fontWeight: "900",
                        color: "#e08af4",
                        textAlign: "center",
                        "@media(max-width: 480px)": {
                          fontSize: 20,
                        },
                      }}
                    >
                      내 수익
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: 1.4,
                        color: "#ffffff",
                        textAlign: "center",
                        mt: 0.5,
                        "@media(max-width: 480px)": {
                          fontSize: 12,
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
                    top: 128,
                    left: 0,
                    right: 0,
                    bottom: 36,
                    borderTop: `2px dashed ${grey[700]}`,
                    borderRight: `2px dashed ${grey[700]}`,
                    background: `repeating-linear-gradient(45deg, ${grey[700]}, ${grey[700]} 1px, transparent 0, transparent 8px)`,
                    "@media(max-width: 480px)": {
                      bottom: 32,
                      top: 64,
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
                        fontSize: 24,
                        fontWeight: "900",
                        color: grey[200],
                        "@media(max-width: 480px)": {
                          fontSize: 20,
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
                    color: grey[500],
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
                  left: `calc(70%)`,
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
                    // color: grey[500],
                    color: "#ffffff",
                    "@media(max-width: 480px)": {
                      fontSize: 12,
                    },
                  }}
                >
                  오늘
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "none",
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
      className={`wrapper ${sections[index]}`}
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
              // color: `#00d1b0`,
            }}
          >
            4주 안에
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
          젤리스맥과 유하는 단 4주면 충분합니다.
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
                    // color="#00d1b0"
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
      className={`wrapper ${sections[index]}`}
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
                m: theme.spacing(6, 0, 0, 0),
                "@media(max-width: 480px)": {
                  m: theme.spacing(3, 0, 0, 0),
                },
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
                  width: size - 128,
                  height: size - 128,
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
                  fontSize: 20,
                  fontWeight: "900",
                  color: "#ffffff",
                  textAlign: "center",
                  "@media(max-width: 480px)": {
                    fontSize: 16,
                  },
                }}
              >
                {item.nation} {title}
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#ffffff",
                  textAlign: "center",
                  "@media(max-width: 480px)": {
                    fontSize: 12,
                  },
                }}
              >
                구독자 {item.subscribers}명
              </Typography>
              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: 14,
                  color: grey[400],
                  textAlign: "center",
                  "@media(max-width: 480px)": {
                    fontSize: 12,
                  },
                }}
              >
                {subtitle}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: 14,
                  color: grey[600],
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
