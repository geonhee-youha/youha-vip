import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import _ from "lodash";
import { useRouter } from "next/router";
import Panel from "../../components/atoms/Panel";
import TabBar from "../../components/organisms/TabBar";
import { favoriteTabs, pages } from "../../constants";
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
  return (
    <Panel>
      <Box
        sx={{
          p: theme.spacing(7, 5, 0, 5),
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
            lineHeight: "32px",
            fontWeight: "700",
            mr: "auto",
            p: 1,
          }}
        >
          {pageTitle}
        </Typography>
        <TabBar tabs={favoriteTabs} />
      </Box>
    </Panel>
  );
}
