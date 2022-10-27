import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRecoilState } from "recoil";
import { mainTabWidth } from "../../constants";
import { alarmDrawerState } from "../../recoil";
import { theme } from "../../themes/theme";
import Icon from "../atoms/Icon";
import EmptyItem from "../molecules/EmptyItem";
export function AlarmDrawer() {
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
          left: mainTabWidth,
        },
        "& .MuiPaper-root": {
          position: "absolute",
          width: 400,
        },
        left: mainTabWidth,
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
