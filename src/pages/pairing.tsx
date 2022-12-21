import { Box, ButtonBase, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import BackHeader from "../components/organisms/BackHeader";
import { maxWidth } from "../constants";
import { theme } from "../themes/theme";

export default function Page() {
  const router = useRouter();
  const onClickButton = () => {
    router.push(`/complete`);
  };
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
            fontSize: 32,
            lineHeight: "40px",
            fontWeight: "900",
            color: "#ffffff",
          }}
        >
          페어링 한번으로
          <br />
          한도를 조회하세요.
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: "24px",
            color: grey[500],
            mt: 1,
          }}
        >
          당신의 유튜브 채널을 페어링하고
          <br />
          가장 나은 제안을 찾아 드릴게요.
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
                left: 0,
                width: "75%",
                transform: "translateY(-50%) rotate(-10deg)",
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
                <img src="/images/card.png" className="card" />
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: 0,
                width: "50%",
                transform: "translateY(-50%) rotate(5deg)",
                p: theme.spacing(16, 0, 0, 0),
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  animation: `up-down 2s infinite linear`,
                  "@keyframes up-down": {
                    "0%, 100%": {
                      transform: "translateY(4px)",
                    },
                    "50%": {
                      transform: "translateY(-4px)",
                    },
                  },
                  animationDelay: `1s`,
                  "& img": {
                    width: "100%",
                    height: "auto",
                  },
                }}
                className="imgContainer"
              >
                <img src="/images/youtube.png" className="youtube" />
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
        <Box
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
              background: "#ffffff",
              color: grey[900],
              height: 44,
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: "700",
              borderRadius: 0.5,
              justifyContent: "flex-start",
              alignItems: "center",
              p: theme.spacing(0, 2.5),
            }}
            onClick={onClickButton}
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
              <img src="/logos/google.png" />
            </Box>
            구글 계정으로 로그인
          </ButtonBase>
          <Typography
            sx={{
              fontSize: 12,
              color: grey[500],
              "& b": {
                fontWeight: "700",
              },
              mt: 1,
            }}
          >
            Jellysmack은 창작자의 데이터를 제3자에게 판매하지 않습니다.
            <br />
            한도를 조회하신 후에는 언제든지 페어링을 해제할 수 있습니다.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
