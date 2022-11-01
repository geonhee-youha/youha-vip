import { Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { homeTabs, homeTabWidth } from "../../constants";
import HomeTabItem from "../molecules/HomeTabItem";
export default function HomeTab() {
  const router = useRouter();
  const currentPathName = `/${router.pathname.split("?")[0].split("/")[1]}`;
  return currentPathName === "/home" ? (
    <Stack
      spacing={1}
      sx={{
        height: "100%",
        width: homeTabWidth,
        minWidth: homeTabWidth,
        p: 3,
        borderLeft: `1px solid ${blueGrey[100]}`,
      }}
    >
      {homeTabs.map((item, index) => (
        <HomeTabItem key={index} item={item} />
      ))}
    </Stack>
  ) : null;
}
