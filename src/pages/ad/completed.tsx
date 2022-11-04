import {
  Box,
  ButtonBase,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import _ from "lodash";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import Icon from "../../components/atoms/Icon";
import Panel from "../../components/atoms/Panel";
import { pages } from "../../constants";
import { adDialogState } from "../../recoil";
import { theme } from "../../themes/theme";
const ads = [
  {
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
];
export default function Page() {
  const router = useRouter();
  const currentPathName = `/${router.pathname.split("?")[0].split("/")[1]}`;
  const currentSlugPathName = `/${router.pathname.split("?")[0].split("/")[2]}`;
  const pageTitle =
    currentSlugPathName !== "/undefined"
      ? _.findLast(
          _.findLast(pages, (el) => el.pathName === currentPathName)?.slugs,
          (el) => el.pathName === currentSlugPathName
        )?.title
      : _.findLast(pages, (el) => el.pathName === currentPathName)?.title;
  const [adDialog, setAdDialog] = useRecoilState(adDialogState);
  return (
    <Panel
      sx={{
        overflow: "auto !important",
      }}
    >
      <Box
        sx={{
          mt: 0,
          position: "sticky",
          top: 0,
          p: theme.spacing(2.25, 3, 0, 3),
          backgroundColor: "#ffffff",
          zIndex: 98,
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderBottom: `1px solid ${blueGrey[50]}`,
            pb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 24,
              lineHeight: "36px",
              fontWeight: "700",
              mr: "auto",
            }}
          >
            {pageTitle}
          </Typography>
        </Box>
      </Box>
      <Stack
        spacing={1}
        sx={{
          p: theme.spacing(2, 2),
        }}
      >
        {ads.map((item, index) => (
          <ButtonBase
            key={index}
            sx={{
              p: 1,
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              borderRadius: 1,
            }}
            onClick={() =>
              setAdDialog((prev) => {
                return { ...prev, open: true };
              })
            }
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: 18,
                  lineHeight: "28px",
                  fontWeight: "700",
                  color: blueGrey[700],
                }}
              >
                {item.title} 완료
              </Typography>
              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: 12,
                  lineHeight: "16px",
                  color: blueGrey[500],
                }}
              >
                {item.changedAt} 완료
              </Typography>
            </Box>
            {/* <Stack
              spacing={1}
              sx={{
                width: 200,
                borderRadius: 1,
                background: blueGrey[50],
                p: 2,
              }}
            >
              {item.logs.map((item: any, index: number) => (
                <Box key={index} sx={{}}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      lineHeight: "16px",
                      color: blueGrey[800],
                    }}
                  >
                    {item.body}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 10,
                      lineHeight: "14px",
                      color: blueGrey[800],
                    }}
                  >
                    {item.createdAt}
                  </Typography>
                </Box>
              ))}
            </Stack> */}
            <Tooltip title="성과 리포트 보기">
              <IconButton
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: `${blueGrey[50]} !important`,
                }}
              >
                <Icon
                  name="file"
                  prefix="fas"
                  size={20}
                  color={blueGrey[700]}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="최종 계약서 다운로드">
              <IconButton
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: `${blueGrey[50]} !important`,
                  ml: 1,
                }}
              >
                <Icon
                  name="paperclip"
                  prefix="fas"
                  size={20}
                  color={blueGrey[700]}
                />
              </IconButton>
            </Tooltip>
          </ButtonBase>
        ))}
      </Stack>
    </Panel>
  );
}
