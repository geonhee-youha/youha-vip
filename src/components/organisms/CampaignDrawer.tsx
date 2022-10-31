import {
  Box,
  Button,
  ButtonBase,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getDrawerWidth, mainTabWidth } from "../../constants";
import { testCampaigns } from "../../datas";
import {
  adDrawerState,
  alertPopupState,
  campaignDrawerState,
  estimateDrawerState,
} from "../../recoil";
import { theme } from "../../themes/theme";
import Icon from "../atoms/Icon";
import CampaignItem from "../molecules/CampaignItem";
export default function CampaignDrawer() {
  const router = useRouter();
  const [campaignDrawer, setCampaignDrawer] =
    useRecoilState(campaignDrawerState);
  const { open, selectedId } = campaignDrawer;
  const [adDrawer, setAdDrawer] = useRecoilState(adDrawerState);
  const [estimateDrawer, setEstimateDrawer] =
    useRecoilState(estimateDrawerState);
  const setAlertPopup = useSetRecoilState(alertPopupState);
  useEffect(() => {
    handleClose();
  }, [router]);
  const handleClose = () => {
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        open: false,
        selectedId: null,
      };
    });
    setTimeout(
      () => {
        setAdDrawer((prev) => {
          return {
            ...prev,
            open: false,
          };
        });
      },
      estimateDrawer.open ? 150 : 0
    );
    setTimeout(
      () => {
        setCampaignDrawer((prev) => {
          return {
            ...prev,
            open: false,
          };
        });
      },
      estimateDrawer.open && adDrawer.open
        ? 300
        : estimateDrawer.open || adDrawer.open
        ? 150
        : 0
    );
  };
  const handleClickClose = () => {
    if (open === true && selectedId !== null) {
      setAlertPopup((prev) => {
        return {
          ...prev,
          open: true,
          title: "잠깐, 창을 닫기 전에...",
          body: "현재 진행내용을 저장하시겠습니까? 저장하기를 선택하시면 현재 상태가 저장됩니다.",
          cancel: {
            title: "삭제하기",
            onClick: () => {
              setEstimateDrawer((prev) => {
                return {
                  open: false,
                  selectedId: null,
                };
              });
              setTimeout(
                () => {
                  setAdDrawer((prev) => {
                    return {
                      open: false,
                    };
                  });
                },
                estimateDrawer.open ? 150 : 0
              );
              setTimeout(
                () => {
                  setCampaignDrawer((prev) => {
                    return {
                      open: false,
                      selectedId: null,
                    };
                  });
                },
                estimateDrawer.open && adDrawer.open
                  ? 300
                  : estimateDrawer.open || adDrawer.open
                  ? 150
                  : 0
              );
            },
          },
          confirm: {
            title: "저장하기",
            onClick: () => {
              setEstimateDrawer((prev) => {
                return {
                  ...prev,
                  open: false,
                  selectedId: null,
                };
              });
              setTimeout(
                () => {
                  setAdDrawer((prev) => {
                    return {
                      ...prev,
                      open: false,
                    };
                  });
                },
                estimateDrawer.open ? 150 : 0
              );
              setTimeout(
                () => {
                  setCampaignDrawer((prev) => {
                    return {
                      ...prev,
                      open: false,
                    };
                  });
                },
                estimateDrawer.open && adDrawer.open
                  ? 300
                  : estimateDrawer.open || adDrawer.open
                  ? 150
                  : 0
              );
            },
          },
        };
      });
    } else {
      setCampaignDrawer((prev) => {
        return {
          ...prev,
          open: false,
        };
      });
    }
  };
  const handleClickNew = () => {
    setAdDrawer((prev) => {
      return {
        ...prev,
        open: true,
      };
    });
  };
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleClose}
      ModalProps={{
        container:
          typeof document !== "undefined"
            ? document.querySelector(".Drawers")
            : null,
        style: { position: "absolute" },
      }}
      sx={{
        "& .MuiBackdrop-root": {
          left: `calc(${mainTabWidth}px)`,
          "@media(min-width: 1920px)": {
            left: `calc((100vw - 1920px) / 2 + ${mainTabWidth}px)`,
          },
        },
        "& .MuiPaper-root": {
          position: "absolute",
          width: getDrawerWidth(1),
          borderRight: `1px solid ${blueGrey[100]}`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: theme.spacing(1.5, 2),
        }}
      >
        <Typography
          sx={{
            p: theme.spacing(0.5, 1),
            fontSize: 20,
            lineHeight: "32px",
            fontWeight: "700",
            mr: "auto",
          }}
        >
          캠페인 설정
        </Typography>
        <IconButton
          sx={{
            width: 40,
            height: 40,
            p: theme.spacing(1, 1),
          }}
          onClick={handleClickClose}
        >
          <Icon name="xmark" prefix="fas" size={20} color={blueGrey[400]} />
        </IconButton>
      </Box>
      <Box
        sx={{
          p: theme.spacing(0, 2, 5, 2),
          overflow: "auto",
        }}
      >
        <Stack spacing={2} sx={{ p: 1 }}>
          {testCampaigns.map((item, index) => {
            const checked = selectedId === item.id;
            return <CampaignItem key={index} item={item} checked={checked} />;
          })}
          <ButtonBase
            sx={{
              border: `2px dashed ${blueGrey[100]}`,
              p: 2,
              borderRadius: 1,
              flexDirection: "column",
              height: 108,
              " *": {
                textAlign: "center",
              },
            }}
            onClick={handleClickNew}
          >
            <Icon
              prefix="fas"
              name="plus"
              size={24}
              color={blueGrey[300]}
              padding={6}
            />
            <Typography
              sx={{
                mt: 0.5,
                fontSize: 14,
                lineHeight: "20px",
                color: blueGrey[300],
                fontWeight: "700",
              }}
            >
              신규 캠페인 등록하기
            </Typography>
          </ButtonBase>
        </Stack>
      </Box>
    </Drawer>
  );
}
