import { Box, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { homeTabs } from "../../constants";
import HomeTabItem from "../molecules/HomeTabItem";
export default function HomeTab() {
  const router = useRouter();
  const currentPathName = `/${router.pathname.split("/")[1]}`;
  return currentPathName === "/home" ? (
    <Stack
      spacing={1}
      sx={{
        width: 400,
        p: 3,
      }}
    >
      {homeTabs.map((item, index) => (
        <HomeTabItem item={item} />
      ))}
    </Stack>
  ) : (
    <></>
  );
}
