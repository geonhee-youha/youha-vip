import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Icon from "../components/atoms/Icon";
import BackHeader from "../components/organisms/BackHeader";
import { maxWidth } from "../constants";
import { theme } from "../themes/theme";

export default function Page() {
  const router = useRouter();
  const onClickJellysmack = () => {
    router.push(`https://jellysmack.com/ko`);
  };
  const onClickYouha = () => {
    router.push(`https://youha.info`);
  };
  const onClickHome = () => {
    router.push(`/`);
  };
  useEffect(() => {}, []);
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: "scroll",
      }}
    >
      <BackHeader />
      <Box
        sx={{
          p: theme.spacing(8, 3, 16, 3),
          width: "100%",
          height: "100%",
          maxWidth: maxWidth,
          m: theme.spacing(0, "auto"),
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: 28,
            lineHeight: 1.2,
            fontWeight: "900",
            color: "#ffffff",
          }}
        >
          신청 후 3~5일 내
          <br />
          연락드리겠습니다.
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: 1.4,
            color: grey[500],
            mt: 1,
          }}
        >
          한도 조회 신청을 완료하시면.
          <br />
          최대한 빠르게 연락드리겠습니다.
        </Typography>
        <Box
          sx={{
            flex: 1,
            p: theme.spacing(0, 4),
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              "& imgContainer": {
                "& img": {
                  transition: `all 0.35s ease`,
                },
                "&:hover": {
                  "& img": {
                    transform: "scale(1.2)",
                  },
                },
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "60%",
                transform: "translate(-50%, -50%) rotate(0deg)",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  animation: `up-down 2s infinite linear`,
                  "@keyframes up-down": {
                    "0%, 100%": {
                      transform: "translateY(8px)",
                    },
                    "50%": {
                      transform: "translateY(-8px)",
                    },
                  },
                  "& img": {
                    width: "100%",
                    height: "auto",
                  },
                }}
                className="imgContainer"
              >
                <img src="/images/envelope.png" className="card" />
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: "60%",
                width: "45%",
                transform: "translate(25%, -150%) rotate(-10deg)",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  animation: `up-down 2s infinite linear`,
                  "@keyframes up-down": {
                    "0%, 100%": {
                      transform: "translateY(8px)",
                    },
                    "50%": {
                      transform: "translateY(-8px)",
                    },
                  },
                  "& img": {
                    width: "100%",
                    height: "auto",
                  },
                }}
                className="imgContainer"
              >
                <img src="/images/message-heart.png" className="card" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          p: theme.spacing(3),
        }}
      >
        <Stack
          spacing={1}
          sx={{
            width: "100%",
            maxWidth: maxWidth,
            bottom: 0,
            m: theme.spacing(0, "auto"),
          }}
        >
          <ButtonBase
            sx={{
              width: "100%",
              // background: `linear-gradient(270deg,#00d1b0 0,#00e94f 48.96%,#0093ff 73.96%,#e08af4 97.92%)`,
              background: "#00e94f",
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
              // background: `linear-gradient(270deg, #0046DD, rgba(28, 90, 246, 1))`,
              background: "#0093ff",
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
          <ButtonBase
            sx={{
              width: "100%",
              background: `linear-gradient(270deg, ${grey[800]}, ${grey[700]})`,
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
            onClick={onClickHome}
          >
            <Icon name="home-lg-alt" color="#ffffff" size={20} sx={{ mr: 2 }} />
             홈으로 돌아가기
          </ButtonBase>
        </Stack>
      </Box>
    </Box>
  );
}
