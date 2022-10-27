import { Stack } from "@mui/material";
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
        height: "100%",
        minHeight: 840,
        p: 3,
      }}
    >
      {homeTabs.map((item, index) => (
        <HomeTabItem key={index} item={item} />
      ))}
    </Stack>
  ) : (
    <></>
  );
}
