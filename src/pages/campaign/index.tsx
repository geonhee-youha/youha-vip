import { Box, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import _ from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";
import Panel from "../../components/atoms/Panel";
import CampaignItem from "../../components/molecules/CampaignItem";
import { getDrawerWidth, pages } from "../../constants";
import { testCampaigns } from "../../datas";
import { theme } from "../../themes/theme";
export default function Page() {
  const router = useRouter();
  const currentPathName = `/${router.pathname.split("?")[0].split("/")[1]}`;
  const currentSlugPathName = `/${router.pathname.split("?")[0].split("/")[2]}`;
  const pageTitle =
    currentSlugPathName !== "/undefined"
      ? `${
          _.findLast(
            _.findLast(pages, (el) => el.pathName === currentPathName)?.slugs,
            (el) => el.pathName === currentSlugPathName
          )?.title
        }`
      : `${_.findLast(pages, (el) => el.pathName === currentPathName)?.title}`;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const campaigns = [
    ...testCampaigns,
    ...testCampaigns,
    ...testCampaigns,
    ...testCampaigns,
    ...testCampaigns,
  ];
  return (
    <Panel>
      <Box
        sx={{
          p: theme.spacing(7, 0, 0, 0),
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
            lineHeight: "32px",
            fontWeight: "700",
            mr: "auto",
            p: theme.spacing(1, 6),
          }}
        >
          {pageTitle}
        </Typography>
      </Box>
      <Box
        sx={{
          flexWrap: "nowrap",
          p: theme.spacing(2, 0, 1, 0),
          overflowX: "scroll",
        }}
        className="Container"
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            p: theme.spacing(0, 6),
          }}
        >
          {campaigns.map((item, index) => {
            const checked = selectedIndex === index;
            const handleClick = () => {
              let containerEl: any = document.querySelector(`.Container`);
              let targetEl: any = document.querySelector(
                `.CampaignItem-${index}`
              );
              containerEl.scrollTo({
                top: 0,
                left: targetEl.offsetLeft - 48,
                behavior: "smooth",
              });
              setSelectedIndex(index);
            };
            return (
              <CampaignItem
                key={index}
                index={index}
                item={item}
                checked={checked}
                onClick={handleClick}
                sx={{
                  width: (getDrawerWidth(3) - 96 - 4 * 16) / 5,
                  flex: "0 0 auto",
                }}
              />
            );
          })}
          <Box sx={{ minWidth: 32, height: 48 }} />
        </Stack>
      </Box>
      <Typography
        sx={{
          p: theme.spacing(3, 6, 1, 6),
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        트렌드 인사이트
      </Typography>
      <Box
        sx={{
          p: theme.spacing(1, 6),
        }}
      >
        <Box
          sx={{
            borderRadius: 1,
            // backgroundColor: blueGrey[50],
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridAutoColumn: "1fr",
            gridTemplateRows: "auto auto",
            gridRowGap: 16,
            gridColumnGap: 16,
            // p: theme.spacing(3, 3, 3, 3),
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                backgroundColor: blueGrey[50],
                height: 200,
                borderRadius: 1,
              }}
            />
          ))}
        </Box>
      </Box>
      <Typography
        sx={{
          p: theme.spacing(3, 6, 1, 6),
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        추천 광고영상
      </Typography>
      <Typography
        sx={{
          p: theme.spacing(3, 6, 1, 6),
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        추천 크리에이터
      </Typography>
      <Typography
        sx={{
          p: theme.spacing(3, 6, 1, 6),
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        추천 기획안
      </Typography>
    </Panel>
  );
}
