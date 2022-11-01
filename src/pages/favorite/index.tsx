import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import _ from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Panel from "../../components/atoms/Panel";
import CreatorItem from "../../components/molecules/CreatorItem";
import PlanItem from "../../components/molecules/PlanItem";
import TabBar from "../../components/organisms/TabBar";
import { creatorFilters, favoriteTabs, pages } from "../../constants";
import { testCreators, testPlans } from "../../datas";
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
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [sort, setSort] = useState<string>("subscriberCount");
  const creators = _.sortBy(testCreators, sort).reverse();
  const plans = _.sortBy(testPlans, sort).reverse();
  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  return (
    <Panel
      sx={{
        overflow: "hidden",
        "& .react-swipeable-view-container": {
          height: "100%",
        },
      }}
    >
      <Box
        sx={{
          mt: 0,
          position: "sticky",
          top: 0,
          p: theme.spacing(2.25, 3, 0, 3),
          backgroundColor: "#ffffff",
          zIndex: 99,
        }}
        className="Header"
      >
        <Typography
          sx={{
            fontSize: 24,
            lineHeight: "36px",
            fontWeight: "700",
            mr: "auto",
          }}
          className="Title"
        >
          {pageTitle}
        </Typography>
        <Box sx={{
          ml: -1,
          mr: -1,
        }}>
          <TabBar
            tabs={favoriteTabs}
            index={tabIndex}
            setIndex={setTabIndex}
            title="favorite"
          />
        </Box>
      </Box>
      <SwipeableViews
        index={tabIndex}
        onChangeIndex={setTabIndex}
        style={{
          // overflow: "hidden",
          // height: "auto",
          flex: 1,
        }}
        className="Swiper"
      >
        {favoriteTabs.map((item, index) => (
          <Box key={index} sx={{ overflow: "auto" }} className="Slide">
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
                      borderColor: blueGrey[100],
                      borderWidth: `1px !important`,
                      boxShadow: "none !important",
                    },
                  }}
                >
                  <MenuItem value={"viewCount"}>구독자순</MenuItem>
                  <MenuItem value={"standardCommercialPrice"}>
                    예상 광고단가 순
                  </MenuItem>
                  <MenuItem value={"subscriberCount"}>예상 노출수 순</MenuItem>
                  <MenuItem value={"CPV"}>예상 CPV</MenuItem>
                </Select>
              </Box>
              <Box sx={{}}>
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
                  {index === 0
                    ? creators.map((item, index) => (
                        <CreatorItem key={index} item={item} />
                      ))
                    : plans.map((item, index) => (
                        <PlanItem key={index} item={item} />
                      ))}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </SwipeableViews>
    </Panel>
  );
}
