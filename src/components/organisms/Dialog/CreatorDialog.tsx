import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Chart } from "react-chartjs-2";
import { useRecoilState } from "recoil";
import { creatorDialogState } from "../../../recoil";
import { theme } from "../../../themes/theme";
import youhaBlue from "../../../themes/youhaBlue";
import Icon from "../../atoms/Icon";

export default function CreatorDialog() {
  const [creatorDialog, setCreatorDialog] = useRecoilState(creatorDialogState);
  const { open, title, body, cancel, confirm } = creatorDialog;
  const handleClose = () => {
    setCreatorDialog((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleClickCancel = () => {
    cancel?.onClick();
    handleClose();
  };
  const handleClickConfirm = () => {
    confirm?.onClick();
    handleClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onBackdropClick={handleClose}
      aria-labelledby="creator-dialog-title"
      aria-describedby="creator-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          width: "calc((100vw - 48px) * 0.9)",
          maxWidth: 1000,
          height: "calc((100vh - 48px) * 0.9)",
        },
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
          크리에이터 정보
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
      <DialogContent>
        <Box sx={{ height: 300 }}>
          <Chart
            type="radar"
            data={totalChartData}
            options={totalChartOptions}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
const totalChartData = {
  labels: [
    "트렌드 지수",
    "광고 기획력",
    "이행 지수",
    "영향력 지수",
    "광고 지수",
    "클린 지수",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 40],
      fill: true,
      pointRadius: 6,
      pointBorderWidth: 6,
      borderWidth: 8,
      backgroundColor: youhaBlue[500],
      borderColor: youhaBlue[500],
      pointBackgroundColor: blueGrey[50],
      pointBorderColor: youhaBlue[500],
      pointHoverBackgroundColor: blueGrey[50],
      pointHoverBorderColor: youhaBlue[500],
    },
  ],
};
const totalChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    r: {
      ticks: {
        display: false,
        background: blueGrey[50],
        font: {
          size: 10,
          family: "Pretendard",
          weight: "700",
        },
        color: blueGrey[700],
      },
      pointLabels: {
        font: {
          size: 10,
          family: "Pretendard",
          weight: "700",
        },
      },
      angleLines: {
        display: false,
      },
      suggestedMin: 50,
      suggestedMax: 100,
    },
  },
  maintainAspectRatio: false,
};