import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { mainTabWidth } from "../../constants";
import { adDrawerState, estimateDrawerState } from "../../recoil";
import { theme } from "../../themes/theme";
import Icon from "../atoms/Icon";
import EmptyItem from "../molecules/EmptyItem";
export default function AdDrawer() {
  const router = useRouter();
  const [adDrawer, setAdDrawer] = useRecoilState(adDrawerState);
  const setEstimateDrawer = useSetRecoilState(estimateDrawerState);
  useEffect(() => {
    handleClose();
  }, [router]);
  const handleClose = () => {
    setAdDrawer((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleClickEstimate = () => {
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        open: true,
      };
    });
  };
  return (
    <Drawer
      anchor="left"
      open={adDrawer.open}
      onClose={handleClose}
      sx={{
        "& .MuiBackdrop-root": {
          left: `calc(${mainTabWidth}px)`,
          "@media(min-width: 1920px)": {
            left: `calc((100vw - 1920px) / 2 + ${mainTabWidth}px)`,
          },
          backgroundColor: "transparent !important",
        },
        "& .MuiPaper-root": {
          position: "absolute",
          width: mainTabWidth,
          borderRight: `1px solid ${blueGrey[100]}`,
        },
        left: `calc(${mainTabWidth * 2}px)`,
        "@media(min-width: 1920px)": {
          left: `calc((100vw - 1920px) / 2 + ${mainTabWidth * 2}px)`,
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
          광고세트 등록
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
        <Button onClick={handleClickEstimate} sx={{ mt: "auto" }}>
          다음으로
        </Button>
      </Box>
    </Drawer>
  );
}
