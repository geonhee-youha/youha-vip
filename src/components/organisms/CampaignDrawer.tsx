import {
  Box,
  Button,
  ButtonBase,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { mainTabWidth } from "../../constants";
import {
  adDrawerState,
  alertPopupState,
  campaignDrawerState,
  estimateDrawerState,
} from "../../recoil";
import { theme } from "../../themes/theme";
import Icon from "../atoms/Icon";
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
    if (open === true && selectedId !== null) {
      setAlertPopup((prev) => {
        return {
          ...prev,
          open: true,
          title: "잠깐, 창을 닫기 전에...",
          body: "현재 진행내용을 저장하시겠습니까? 저장하기를 선택하시면 현재 상태가 저장됩니다.",
          cancel: {
            title: "그만두기",
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
        container: document.querySelector(".Drawers"),
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
          width: mainTabWidth,
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
          onClick={handleClose}
        >
          <Icon name="xmark" prefix="fas" size={20} color={blueGrey[400]} />
        </IconButton>
      </Box>
      <Box
        sx={{
          p: theme.spacing(1.5, 2),
        }}
      >
        <Box sx={{ p: 1 }}>
          <ButtonBase
            sx={{
              border: `1px solid ${blueGrey[100]}`,
              p: 1,
              borderRadius: 1,
            }}
            onClick={handleClickNew}
          >
            신규 캠페인 등록
          </ButtonBase>
        </Box>
        <CampaignItem />
      </Box>
    </Drawer>
  );
}

function CampaignItem() {
  const [campaignDrawer, setCampaignDrawer] =
    useRecoilState(campaignDrawerState);
  const { open, selectedId } = campaignDrawer;
  const handleClickItem = () => {
    setCampaignDrawer((prev) => {
      return {
        ...prev,
        open: true,
        selectedId: 1,
      };
    });
  };
  return <ButtonBase onClick={handleClickItem}>테스트로 1번 캠페인</ButtonBase>;
}
