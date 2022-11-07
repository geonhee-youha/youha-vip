import { Box, Paper } from "@mui/material";
import _ from "lodash";
import { useRouter } from "next/router";
import PaperHeader from "../../components/molecules/PaperHeader";
import { Playlists } from "../../components/templetes/Dialog/CreatorDialog";
import { pages } from "../../constants";
import { testPlaylists } from "../../datas";
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
          overflow: "auto",
        }}
        className={`PaperTarget-${id}`}
      >
        <PaperHeader id={id} title={pageTitle} big />
        <Playlists
          playlists={testPlaylists
            .flatMap((el) => el.playlistItems)
            .slice(0, 22)}
          columns={4}
        />
      </Box>
    </Paper>
  );
}
