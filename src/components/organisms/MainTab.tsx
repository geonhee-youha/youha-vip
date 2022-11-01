import _ from "lodash";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { pages, mainTabWidth } from "../../constants";
import { testNotices, testUser } from "../../datas";
import {
  alarmDrawerState,
  alertDialogState,
  campaignDrawerState,
  creatorPlanDrawerState,
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
  const [campaignDrawer, setCampaignDrawer] =
    useRecoilState(campaignDrawerState);
  const [creatorPlanDrawer, setCreatorPlanDrawer] = useRecoilState(
    creatorPlanDrawerState
  );
  const setAlertDialog = useSetRecoilState(alertDialogState);
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
    setCreatorPlanDrawer((prev) => {
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
    setCreatorPlanDrawer((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleClickEstimate = () => {
    if (campaignDrawer.selectedId !== null) {
      if (campaignDrawer.open === true) {
        setAlertDialog((prev) => {
          return {
            ...prev,
            open: true,
            title: "잠깐, 창을 닫기 전에...",
            body: "현재 진행내용을 저장하시겠습니까? 저장하기를 선택하시면 현재 상태가 저장됩니다.",
            cancel: {
              title: "삭제하기",
              onClick: () => {
                setCampaignDrawer((prev) => {
                  return {
                    open: false,
                    selectedId: null,
                  };
                });
                setCreatorPlanDrawer((prev) => {
                  return {
                    open: false,
                    selectedCreatorIds: [],
                    selectedPlanIds: [],
                  };
                });
              },
            },
            confirm: {
              title: "저장하기",
              onClick: () => {
                setCampaignDrawer((prev) => {
                  return {
                    ...prev,
                    open: false,
                  };
                });
                setCreatorPlanDrawer((prev) => {
                  return {
                    ...prev,
                    open: false,
                  };
                });
              },
            },
          };
        });
      } else {
        setAlertDialog((prev) => {
          return {
            ...prev,
            open: true,
            title: "진행중인 견적이 있습니다!",
            body: "저장된 진행내용을 이어하시겠습니까? 새로하기를 누르시면 기존 진행내용은 삭제됩니다.",
            cancel: {
              title: "새로하기",
              onClick: () => {
                setCampaignDrawer((prev) => {
                  return {
                    open: true,
                    selectedId: null,
                  };
                });
              },
            },
            confirm: {
              title: "이어하기",
              onClick: () => {
                setCampaignDrawer((prev) => {
                  return {
                    ...prev,
                    open: true,
                  };
                });
                setCreatorPlanDrawer((prev) => {
                  return {
                    ...prev,
                    open: true,
                  };
                });
              },
            },
          };
        });
      }
    } else {
      setCampaignDrawer((prev) => {
        return {
          ...prev,
          open: !prev.open,
        };
      });
    }
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
        position: "absolute",
        top: 24,
        left: 24,
        bottom: 24,
        width: mainTabWidth,
        minWidth: mainTabWidth,
        backgroundColor: "#ffffff",
        borderRadius: 1,
        zIndex: 99999,
        "@media(min-width: 1600px)": {
          left: `calc((100vw - 1600px) / 2 + ${24}px)`,
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: theme.spacing(2, 1.5, 2, 2),
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
            flex: 1,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              p: theme.spacing(0, 2, 1, 2),
            }}
          >
            <Box
              sx={{
                p: theme.spacing(0, 1, 0, 1),
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
                p: theme.spacing(1, 1, 1, 1),
              }}
            >
              <Button
                fullWidth
                sx={{
                  minHeight: 48,
                  height: 48,
                }}
                onClick={handleClickEstimate}
              >
                <Icon
                  name="wand-magic-sparkles"
                  size={16}
                  color="#ffffff"
                  prefix="fas"
                  sx={{
                    mr: 0.5,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 16,
                    lineHeight: "24px",
                    fontWeight: "700",
                    color: "#ffffff",
                  }}
                >
                  광고 견적내기
                </Typography>
                {campaignDrawer.open === false &&
                  campaignDrawer.selectedId !== null && (
                    <Box
                      sx={{
                        borderRadius: 0.5,
                        ml: 1,
                        height: 24,
                        p: theme.spacing(0, 1),
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: pink[500],
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 12,
                          lineHeight: "16px",
                          fontWeight: "700",
                          color: "#ffffff",
                        }}
                      >
                        저장됨
                      </Typography>
                    </Box>
                  )}
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
                p: theme.spacing(2, 2, 0, 2),
              }}
            >
              {_.filter(pages, (el) => el.inMainTab === true).map(
                (item, index) => (
                  <MainTabItem
                    key={index}
                    item={item}
                    handleClickEstimate={handleClickEstimate}
                  />
                )
              )}
            </Stack>
            <Stack
              spacing={1}
              sx={{
                p: theme.spacing(0, 2, 2, 2),
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
                  {testNotices.map((item, index) => (
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
    </Box>
  );
}
