import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import _ from "lodash";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import Panel from "../../components/atoms/Panel";
import { pages } from "../../constants";
import { adDialogState } from "../../recoil";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
const status = [
  "계약 준비중",
  "계약",
  "기획안 전달",
  "기획안 확정",
  "촬영",
  "편집본 전달",
  "업로드",
  "완료",
];
const ads = [
  {
    status: 0,
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    status: 0,
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    status: 0,
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    status: 0,
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    status: 1,
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    status: 1,
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    status: 3,
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    status: 4,
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    status: 5,
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    status: 7,
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    status: 7,
    title: "광고 집행 테스트 제목",
    description: "광고 집행 테스트 설명",
    changedAt: "2022년 11월 1일",
    logs: [
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
      { body: "테스트 로그", createdAt: "2022년 11월 1일" },
    ],
  },
  {
    status: 7,
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
      <Box sx={{}}>
        <Box>
          <Box
            sx={{
              overflow: "auto",
            }}
          >
            <Box
              sx={{
                width: 1920,
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                gridAutoColumn: "1fr",
                gridTemplateRows: "auto auto",
                gridRowGap: 8,
                gridColumnGap: 8,
                p: theme.spacing(3, 3, 0, 3),
              }}
            >
              {status.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    width: "100%",
                    backgroundColor: youhaBlue[50],
                    borderRadius: 1,
                    p: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: "20px",
                      fontWeight: "700",
                      color: youhaBlue[500],
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                width: 1920,
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                gridAutoColumn: "1fr",
                gridTemplateRows: "auto auto",
                gridRowGap: 8,
                gridColumnGap: 8,
                p: theme.spacing(0, 3, 20, 3),
              }}
            >
              {status.map((item, i) => (
                <Stack spacing={1} key={i} sx={{ flex: 1 }}>
                  {_.filter(ads, (el) => el.status === i).map((item, index) => {
                    return (
                      <ButtonBase
                        key={index}
                        sx={{
                          width: "100%",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          borderRadius: 1,
                          p: 2,
                          border: `1px solid ${blueGrey[50]}`,
                        }}
                        onClick={() =>
                          setAdDialog((prev) => {
                            return { ...prev, open: true };
                          })
                        }
                      >
                        <Typography
                          sx={{
                            fontSize: 18,
                            lineHeight: "28px",
                            fontWeight: "700",
                            color: blueGrey[700],
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            mt: 0.5,
                            fontSize: 12,
                            lineHeight: "16px",
                            color: blueGrey[500],
                          }}
                        >
                          {item.description}
                        </Typography>
                        <Stack
                          spacing={1}
                          sx={{
                            borderRadius: 1,
                            background: blueGrey[50],
                            width: "100%",
                            mt: 2,
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
                        </Stack>
                        <Typography
                          sx={{
                            mt: 1,
                            width: "100%",
                            fontSize: 12,
                            lineHeight: "16px",
                            color: blueGrey[500],
                            textAlign: "right",
                          }}
                        >
                          {item.changedAt}
                        </Typography>
                      </ButtonBase>
                    );
                  })}
                </Stack>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Panel>
  );
}
