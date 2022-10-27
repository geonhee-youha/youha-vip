import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRecoilState } from "recoil";
import { mainTabWidth } from "../../constants";
import { alarmDrawerState } from "../../recoil";
import { theme } from "../../themes/theme";
import Icon from "../atoms/Icon";
import EmptyItem from "../molecules/EmptyItem";
export default function AlarmDrawer() {
  const [alarmDrawer, setAlarmDrawer] = useRecoilState(alarmDrawerState);
  const handleClose = () => {
    setAlarmDrawer((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  return (
    <Drawer
      anchor="left"
      open={alarmDrawer.open}
      onClose={handleClose}
      sx={{
        "& .MuiBackdrop-root": {
          left: `calc(${mainTabWidth}px + 1px)`,
          "@media(min-width: 1920px)": {
            left: `calc((100vw - 1920px) / 2 + ${mainTabWidth}px)`,
          },
        },
        "& .MuiPaper-root": {
          position: "absolute",
          width: 400,
        },
        left: `calc(${mainTabWidth}px + 1px)`,
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
          알림
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
        <EmptyItem />
      </Box>
    </Drawer>
  );
}
