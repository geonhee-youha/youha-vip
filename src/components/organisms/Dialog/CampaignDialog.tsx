import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRecoilState } from "recoil";
import { campaignDialogState } from "../../../recoil";
import { theme } from "../../../themes/theme";
import Icon from "../../atoms/Icon";

export default function CampaignDialog() {
  const [campaignDialog, setCampaignDialog] =
    useRecoilState(campaignDialogState);
  const { open, title, body, cancel, confirm } = campaignDialog;
  const handleClose = () => {
    setCampaignDialog((prev) => {
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
      aria-labelledby="campaign-dialog-title"
      aria-describedby="campaign-dialog-description"
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
          캠페인 정보
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
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: "24px",
            color: blueGrey[700],
          }}
        >
          {body}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
