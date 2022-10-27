import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { homeTabs, homeTabWidth } from "../../constants";
import HomeTabItem from "../molecules/HomeTabItem";
export default function HomeTab() {
  const router = useRouter();
  const currentPathName = `/${router.pathname.split("/")[1]}`;
  return (
    <Stack
      spacing={1}
      sx={{
        height: "100%",
        width: homeTabWidth,
        minWidth: homeTabWidth,
        p: 3,
      }}
    >
      {currentPathName === "/home" &&
        homeTabs.map((item, index) => <HomeTabItem key={index} item={item} />)}
    </Stack>
  );
}
