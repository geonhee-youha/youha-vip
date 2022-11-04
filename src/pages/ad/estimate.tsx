import {
  Box,
  ButtonBase,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import { Stack } from "@mui/system";
import _ from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import Panel from "../../components/atoms/Panel";
import { pages } from "../../constants";
import { estimateDialogState } from "../../recoil";
import { theme } from "../../themes/theme";
const testEstimates: any[] = [
  {
    id: 0,
    title: "테스트 견적서",
    manager: "임희정",
    createdAt: "2022년 11월 3일",
    estimateCount: 3,
  },
  {
    id: 0,
    title: "테스트 견적서",
    manager: "임희정",
    createdAt: "2022년 11월 1일",
    estimateCount: 2,
  },
  {
    id: 0,
    title: "테스트 견적서",
    manager: "임희정",
    createdAt: "2022년 11월 1일",
    estimateCount: 1,
  },
  {
    id: 0,
    title: "테스트 견적서",
    manager: "임희정",
    createdAt: "2022년 11월 1일",
    estimateCount: 3,
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
  const setEstimateDialog = useSetRecoilState(estimateDialogState);
  const [sort, setSort] = useState<string>("");
  const estimates = _.sortBy(testEstimates, sort).reverse();
  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
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
              p: theme.spacing(2, 3, 2, 3),
            }}
          >
            <Select
              value={sort}
              onChange={handleChangeSort}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                backgroundColor: `${"transparent"} !important`,
                height: 40,
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: "700",
                color: blueGrey[700],
                "& fieldset": {
                  borderColor: blueGrey[50],
                  borderWidth: `1px !important`,
                  boxShadow: "none !important",
                },
              }}
            >
              <MenuItem value={""}>작성일자 순</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              overflow: "auto",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridAutoColumn: "1fr",
                gridTemplateRows: "auto auto",
                gridRowGap: 8,
                gridColumnGap: 8,
                p: theme.spacing(0, 3, 20, 3),
              }}
            >
              {estimates.map((item, index) => {
                return (
                  <ButtonBase
                    key={index}
                    sx={{
                      borderRadius: 1,
                      border: `1px solid ${blueGrey[50]}`,
                      p: 2,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                    onClick={() =>
                      setEstimateDialog((prev) => {
                        return {
                          ...prev,
                          open: true,
                        };
                      })
                    }
                  >
                    <Typography
                      sx={{
                        fontSize: 20,
                        lineHeight: "32px",
                        fontWeight: "700",
                        color: blueGrey[700],
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: "20px",
                        fontWeight: "700",
                        color: blueGrey[700],
                      }}
                    >
                      {item.manager} 매니저
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.5,
                        fontSize: 12,
                        lineHeight: "16px",
                        color: blueGrey[500],
                      }}
                    >
                      {item.createdAt} 작성
                    </Typography>
                    <Typography
                      sx={{
                        mt: 2,
                        fontSize: 16,
                        lineHeight: "24px",
                        fontWeight: "700",
                        color: blueGrey[700],
                        "& span": {
                          color: pink[500],
                        },
                      }}
                    >
                      총 견적 수 <span>3</span>
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 1,
                          overflow: "hidden",
                        }}
                      >
                        <img src="https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F9a18d301-9b27-4439-8acb-a43052e88b3b%2Fyouha-fastbooking_project_thumbnail-square-08.png" />
                      </Box>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 1,
                          overflow: "hidden",
                        }}
                      >
                        <img src="https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F14d05370-15ef-48bf-b8db-cfbbc409b318%2Fthumbnail-square-02.png" />
                      </Box>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 1,
                          overflow: "hidden",
                        }}
                      >
                        <img src="https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Fed0b5c6e-8ccf-4dfc-a285-7e44d108d42c%2Fthumbnail-square-04.png" />
                      </Box>
                    </Stack>
                  </ButtonBase>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Panel>
  );
}
