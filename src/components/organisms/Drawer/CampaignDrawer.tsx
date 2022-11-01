import { Box, ButtonBase, IconButton, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { mainTabWidth } from "../../../constants";
import { testCampaignsState } from "../../../datas";
import {
  alertDialogState,
  campaignDrawerState,
  campaignPopupState,
  creatorPlanDrawerState,
} from "../../../recoil";
import { theme } from "../../../themes/theme";
import Icon from "../../atoms/Icon";
import CampaignItem from "../../molecules/CampaignItem";
export default function CampaignDrawer() {
  const router = useRouter();
  const testCampaigns = useRecoilValue(testCampaignsState);
  const [campaignDrawer, setCampaignDrawer] =
    useRecoilState(campaignDrawerState);
  const [creatorPlanDrawer, setCreatorPlanDrawer] = useRecoilState(
    creatorPlanDrawerState
  );
  const { open, selectedId } = campaignDrawer;
  const setAlertDialog = useSetRecoilState(alertDialogState);
  const setCampaignPopup = useSetRecoilState(campaignPopupState);
  useEffect(() => {
    handleClose();
  }, [router]);
  const handleClose = () => {
    setCampaignDrawer((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleClickClose = () => {
    if (open === true && selectedId !== null) {
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
      setCampaignDrawer((prev) => {
        return {
          ...prev,
          open: false,
        };
      });
    }
  };
  const handleClickNew = () => {
    setCampaignPopup((prev) => {
      return {
        ...prev,
        open: true,
      };
    });
  };
  return (
    <Box
      sx={{
        position: "absolute",
        top: 24,
        bottom: 24,
        left: mainTabWidth + 48,
        width: mainTabWidth,
        transform: open ? 0 : `translateX(-${mainTabWidth + 24}px)`,
        "@media(min-width: 1600px)": {
          left: `calc((100vw - 1600px) / 2 + ${mainTabWidth + 48}px)`,
        },
        borderRadius: 1,
        backgroundColor: "#ffffff",
        zIndex: 99998,
        transition: `transform 0.35s ease`,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: theme.spacing(2, 2.5, 2, 3),
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            p: theme.spacing(0.5, 0),
            fontSize: 20,
            lineHeight: "32px",
            fontWeight: "700",
            mr: "auto",
          }}
        >
          캠페인 선택
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
      <Box sx={{ p: theme.spacing(0, 2, 2, 2), overflow: "auto" }}>
        <Stack spacing={1} sx={{ p: theme.spacing(0, 1, 1, 1) }}>
          {testCampaigns.map((item, index) => {
            return <CampaignItem key={index} item={item} />;
          })}
          <ButtonBase
            sx={{
              border: `1px dash\ed ${blueGrey[100]}`,
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
    </Box>
  );
}
