import _ from "lodash";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pages, mainTabWidth } from "../../constants";
import { notices, testUser } from "../../datas";
import {
  alarmDrawerState,
  campaignDrawerState,
  searchDrawerState,
} from "../../recoil";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import Icon from "../atoms/Icon";
import MainTabItem from "../molecules/MainTabItem";
import NoticeItem from "../molecules/NoticeItem";
import UserItem from "../molecules/UserItem";
export default function MainTab() {
  const router = useRouter();
  const [searchDrawer, setSearchDrawer] = useRecoilState(searchDrawerState);
  const [alarmDrawer, setAlarmDrawer] = useRecoilState(alarmDrawerState);
  const setCampaignDrawer = useSetRecoilState(campaignDrawerState);
  const handleClickLogo = () => {
    router.push("/home");
  };
  const handleClickSearch = () => {
    setSearchDrawer((prev) => {
      return {
        ...prev,
        open: !prev.open,
      };
    });
    setAlarmDrawer((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
    setCampaignDrawer((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleClickAlarm = () => {
    setAlarmDrawer((prev) => {
      return {
        ...prev,
        open: !prev.open,
      };
    });
    setSearchDrawer((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
    setCampaignDrawer((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleClickEstimate = () => {
    setCampaignDrawer((prev) => {
      return {
        ...prev,
        open: !prev.open,
      };
    });
    setSearchDrawer((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
    setAlarmDrawer((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  return (
    <Box
      sx={{
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
          backgroundColor: "#ffffff",
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
              " *": {
                cursor: "pointer !important",
              },
            }}
            onClick={handleClickSearch}
          >
            <Icon
              name="search"
              prefix="fas"
              size={20}
              color={searchDrawer.open ? youhaBlue[500] : blueGrey[400]}
            />
          </IconButton>
          <IconButton
            sx={{
              width: 40,
              height: 40,
              p: theme.spacing(1, 1),
              " *": {
                cursor: "pointer !important",
              },
            }}
            onClick={handleClickAlarm}
          >
            <Icon
              name="bell"
              prefix="fas"
              size={20}
              color={alarmDrawer.open ? youhaBlue[500] : blueGrey[400]}
              badgeCount={3}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            p: theme.spacing(0, 2, 2, 2),
          }}
        >
          <Box
            sx={{
              p: 1,
            }}
          >
            <Box
              sx={{
                p: 1,
                borderRadius: 1,
                backgroundColor: blueGrey[50],
              }}
            >
              <UserItem item={testUser} />
            </Box>
          </Box>
          <Box
            sx={{
              p: theme.spacing(0, 1, 1, 1),
            }}
          >
            <Button
              fullWidth
              sx={{
                mt: 1,
                minHeight: 40,
                height: 40,
              }}
              onClick={handleClickEstimate}
            >
              <Icon
                name="wand-magic-sparkles"
                size={14}
                color="#ffffff"
                prefix="fas"
                sx={{
                  mr: 0.5,
                }}
              />
              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: "700",
                  color: "#ffffff",
                }}
              >
                광고 견적내기
              </Typography>
            </Button>
          </Box>
        </Box>
        <Stack
          spacing={1}
          sx={{
            flex: 1,
          }}
        >
          <Stack
            spacing={1}
            sx={{
              flex: 1,
              p: theme.spacing(1.5, 2, 0, 2),
            }}
          >
            {_.filter(pages, (el) => el.inMainTab === true).map(
              (item, index) => (
                <MainTabItem key={index} item={item} />
              )
            )}
          </Stack>
          <Stack
            spacing={1}
            sx={{
              p: theme.spacing(0, 2, 1.5, 2),
            }}
          >
            {_.filter(pages, (el) => el.pathName === "/notice").map(
              (item, index) => (
                <MainTabItem key={index} item={item} right />
              )
            )}
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
                  <NoticeItem key={index} item={item} inMainTab />
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
        </Stack>
      </Box>
    </Box>
  );
}
