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
import SwipeableViews from "react-swipeable-views";
import { maxWidth } from "../constants";

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

const sections = ["intro", "jellysmack", "cases", "info"];

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
      {sections.map((item, index) => {
        return item === "intro" ? (
          <Intro key={index} index={index} tabIndex={tabIndex} />
        ) : item === "cases" ? (
          <Cases key={index} index={index} />
        ) : item === "info" ? (
          <Info key={index} index={index} />
        ) : item === "jellysmack" ? (
          <Jellysmack key={index} index={index} />
        ) : null;
      })}
    </Box>
  );
}

export function Header() {
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
  const onClickButton = () => {
    router.push(`pairing`);
  };
  return (
    <>
      <Box
        sx={{
          scrollSnapAlign: "center",
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
              최대 2억원,
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
                p: theme.spacing(0, 2.5),
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
              지금 바로 내 한도 확인하기
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
      <Stack
        spacing={0}
        alignItems="center"
        sx={{
          display: playing ? "flex" : "none",
          position: "fixed",
          top: "50%",
          left: 0,
          transition: `all 0.35s ease`,
          transform: `translateX(${inView ? "-100%" : "16px"})`,
          zIndex: 99,
          width: 16,
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
                  width: focused ? 16 : 12,
                  height: focused ? 16 : 12,
                  backgroundColor: "#ffffff",
                  opacity: focused ? 1 : 0.5,
                  borderRadius: 16,
                  transition: `all 0.35s ease`,
                }}
              />
            </ButtonBase>
          );
        })}
      </Stack>
      <Box
        sx={{
          display: playing ? "flex" : "none",
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          transition: `all 0.35s ease`,
          transform: "translateY(0)",
          "&.shown": {
            transform: "translateY(100%)",
          },
          zIndex: 99,
          background: `linear-gradient(rgba(33, 33,33, 0), rgba(33, 33,33, 1))`,
        }}
        className={className}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: maxWidth,
            m: theme.spacing(0, "auto"),
            p: theme.spacing(2, 3),
          }}
        >
          <ButtonBase
            sx={{
              width: "100%",
              background: `linear-gradient(90deg, rgb(4,232,78, 1), rgb(28,90,246, 1)) !important`,
              color: "#ffffff",
              height: 44,
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: "700",
              borderRadius: 0.5,
              justifyContent: "center",
              alignItems: "center",
              p: theme.spacing(0, 2.5),
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
            지금 바로 내 한도 확인하기
          </ButtonBase>
        </Box>
      </Box>
    </>
  );
}

function Jellysmack({ index }: { index: number }) {
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
        scrollSnapAlign: "start",
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
                fontSize: 28,
                textAlign: "center",
              },
            }}
          >
            글로벌 1위
            <br />
            크리에이터 플랫폼
            <br />
            <span className="color-js">Jellysmack</span>
            <br />
            국내 지원 시작!
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
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
                  '& > div': {
                    position:'relative',
                    top: 'initial',
                    left: 'initial',
                    right: 'initial',
                    bottom: 'initial',
                  }
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
                              color: grey[500],
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
                                  fontSize: 12,
                                },
                              }}
                            >
                              {item.description}
                            </Typography>
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

function Cases({ index }: { index: number }) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        position: "relative",
        p: theme.spacing(10, 0, 12, 0),
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
          fontSize: 20,
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

function Info({ index }: { index: number }) {
  return (
    <Box
      sx={{
        scrollSnapAlign: "start",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={sections[index]}
    >
      <Typography
        sx={{
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        jellysmack webpage를 기반으로 해
        <br />
        금번 펀딩에 관한 설명을 추가할 예정입니다.
        <br />
        <br />
        - 기업 및 펀딩 소개
        <br />
        - 펀딩 성공 사례
        <br />
        - 펀딩 프로세스
        <br />
        - 펀딩 조건
        <br />- 상세 정보 (플랜, 한도 등)
      </Typography>
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
        const size = 200;
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
            }}
          >
            <Box
              sx={{
                width: size - 64,
                height: size - 64,
                background: `linear-gradient(270deg,#00d1b0 0,#00e94f 48.96%,#0093ff 73.96%,#e08af4 97.92%)`,
                p: theme.spacing(0.5),
                borderRadius: 224,
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
