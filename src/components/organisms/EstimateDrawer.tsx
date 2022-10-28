import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { mainTabWidth } from "../../constants";
import { estimateDrawerState } from "../../recoil";
import { theme } from "../../themes/theme";
import Icon from "../atoms/Icon";
import EmptyItem from "../molecules/EmptyItem";
export default function EstimateDrawer() {
  const router = useRouter();
  const [estimateDrawer, setEstimateDrawer] =
    useRecoilState(estimateDrawerState);
  useEffect(() => {
    handleClose();
  }, [router]);
  const handleClose = () => {
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  return (
    <Drawer
      anchor="left"
      open={estimateDrawer.open}
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
        left: `calc(${mainTabWidth * 3}px)`,
        "@media(min-width: 1920px)": {
          left: `calc((100vw - 1920px) / 2 + ${mainTabWidth * 3}px)`,
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
          견적 확인
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
      ></Box>
    </Drawer>
  );
}
