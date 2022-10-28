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
import { adDrawerState, campaignDrawerState } from "../../recoil";
import { theme } from "../../themes/theme";
import Icon from "../atoms/Icon";
export default function CampaignDrawer() {
  const router = useRouter();
  const [campaignDrawer, setCampaignDrawer] =
    useRecoilState(campaignDrawerState);
  const setAdDrawer = useSetRecoilState(adDrawerState);
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
      open={campaignDrawer.open}
      onClose={handleClose}
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
        left: `calc(${mainTabWidth}px)`,
        "@media(min-width: 1920px)": {
          left: `calc((100vw - 1920px) / 2 + ${mainTabWidth}px)`,
        },
        overflow: "hidden",
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
      </Box>
    </Drawer>
  );
}
