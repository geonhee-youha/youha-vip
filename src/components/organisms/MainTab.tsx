import { Box, IconButton, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { mainTabs, mainTabWidth } from "../../constants";
import { notices } from "../../datas";
import { alarmDrawerState } from "../../recoil";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import Icon from "../atoms/Icon";
import MainTabItem from "../molecules/MainTabItem";
import NoticeItem from "../molecules/NoticeItem";
export default function MainTab() {
  const router = useRouter();
  const currentPathName = `/${router.pathname.split("/")[1]}`;
  const setAlarmDrawer = useSetRecoilState(alarmDrawerState);
  const handleClickLogo = () => {
    router.push("/home");
  };
  const handleClickSearch = () => {
    router.push("/search");
  };
  const handleClickAlarm = () => {
    setAlarmDrawer((prev) => {
      return {
        ...prev,
        open: !prev.open,
      };
    });
  };
  return (
    <Box
      sx={{
        "@media(min-width: 1920px)": {
          pl: `calc((100vw - 1920px) / 2)`,
        },
        height: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        sx={{
          width: mainTabWidth,
          minWidth: mainTabWidth,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRight: `1px solid ${blueGrey[100]}`,
          borderLeft: `1px solid ${blueGrey[100]}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: theme.spacing(1.5, 2),
          }}
        >
          <Box
            sx={{
              p: theme.spacing(1, 1),
              mr: "auto",
            }}
          >
            <img
              src="/image/logo/youha_logo-black.png"
              style={{
                height: 24,
                cursor: "pointer",
              }}
              onClick={handleClickLogo}
            />
          </Box>
          <IconButton
            sx={{
              width: 40,
              height: 40,
              p: theme.spacing(1, 1),
            }}
            onClick={handleClickSearch}
          >
            <Icon
              name="search"
              prefix="fas"
              size={20}
              color={
                currentPathName === "/search" ? youhaBlue[500] : blueGrey[400]
              }
            />
          </IconButton>
          <IconButton
            sx={{
              width: 40,
              height: 40,
              p: theme.spacing(1, 1),
            }}
            onClick={handleClickAlarm}
          >
            <Icon
              name="bell"
              prefix="fas"
              size={20}
              color={blueGrey[400]}
              badgeCount={3}
            />
          </IconButton>
        </Box>
        <Stack
          spacing={1}
          sx={{
            flex: 1,
            p: theme.spacing(1.5, 2, 1, 2),
          }}
        >
          {mainTabs.map((item, index) => (
            <MainTabItem key={index} item={item} />
          ))}
        </Stack>
        <Stack
          spacing={1}
          sx={{
            p: theme.spacing(0, 2, 1.5, 2),
          }}
        >
          <MainTabItem
            item={{
              title: "공지사항",
              iconName: "bullhorn",
              pathName: "/notices",
            }}
            right
          />
          <Box
            sx={{
              pl: 1,
              pr: 1,
            }}
          >
            <Box
              sx={{
                p: 1,
                backgroundColor: blueGrey[50],
                borderRadius: 1,
              }}
            >
              {notices.map((item, index) => (
                <NoticeItem key={index} item={item} />
              ))}
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: 10,
              lineHeight: "14px",
              color: blueGrey[400],
              textAlign: "center",
              p: 1,
            }}
          >
            ⓒ Ticketplace Inc.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
