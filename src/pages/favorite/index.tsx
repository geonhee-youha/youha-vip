import {
  Box,
  MenuItem,
  Paper,
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
import { useRecoilValue, useSetRecoilState } from "recoil";
import Panel from "../../components/atoms/Panel";
import PaperHeader from "../../components/molecules/PaperHeader";
import CreatorItem from "../../components/organisms/CreatorItem";
import {
  Creators,
  Playlists,
  Slide,
  Videos,
} from "../../components/templetes/Dialog/CreatorDialog";
import TabBar from "../../components/templetes/TabBar";
import { creatorFilters, favoriteTabs, pages } from "../../constants";
import {
  favoritedCreatorIdsState,
  favoritedPlaylistIdsState,
  favoritedVideoIdsState,
  testCreators,
  testPlaylists,
  testVideos,
} from "../../datas";
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
  const favoritedCreatorIds = useRecoilValue(favoritedCreatorIdsState);
  const favoritedPlaylistIds = useRecoilValue(favoritedPlaylistIdsState);
  const favoritedVideoIds = useRecoilValue(favoritedVideoIdsState);
  const id = `page-${currentPathName.replace("/", "")}`;
  return (
    <Paper
      elevation={4}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 1,
        boxShadow: `4px 4px 8px 4px rgba(0, 0, 0, 0.08)`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        className={`PaperTarget-${id}`}
      >
        <PaperHeader id={id} title={"즐겨찾기"}>
          <Box
            sx={{
              p: theme.spacing(0, 2, 0, 2),
            }}
          >
            <TabBar
              color="secondary"
              title="creatorDialog"
              tabs={favoriteTabs}
              index={tabIndex}
              setIndex={setTabIndex}
            />
          </Box>
        </PaperHeader>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            overflow: "hidden",
            "& .react-swipeable-view-container": {
              flex: 1,
              display: "flex",
              height: "100%",
            },
          }}
        >
          <SwipeableViews
            index={tabIndex}
            onChangeIndex={setTabIndex}
            style={{
              overflow: "hidden",
              height: "100%",
            }}
          >
            <Slide>
              <Creators
                creators={_.filter(testCreators, (el) =>
                  favoritedCreatorIds.includes(el.id)
                )}
                columns={3}
              />
            </Slide>
            <Slide>
              <Playlists
                playlists={_.filter(
                  testPlaylists.flatMap((el) => el.playlistItems),
                  (el) => favoritedPlaylistIds.includes(el.id)
                )}
                columns={4}
              />
            </Slide>
            <Slide>
              <Videos
                videos={_.filter(testVideos, (el) =>
                  favoritedVideoIds.includes(el.id)
                )}
                columns={4}
              />
            </Slide>
          </SwipeableViews>
        </Box>
      </Box>
    </Paper>
  );
}
