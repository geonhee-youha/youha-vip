import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRecoilState } from "recoil";
import { alertPopupState } from "../../recoil";

export default function AlertPopup() {
  const [alertPopup, setAlertPopup] = useRecoilState(alertPopupState);
  const { open, title, body, cancel, confirm } = alertPopup;
  const handleClose = () => {
    setAlertPopup((prev) => {
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
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Typography
          sx={{
            fontSize: 20,
            lineHeight: "32px",
            fontWeight: "700",
          }}
        >
          {title}
        </Typography>
      </DialogTitle>
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
      <DialogActions>
        <Button
          onClick={handleClickCancel}
          variant="text"
          color="secondary"
          sx={{
            color: blueGrey[400],
          }}
        >
          {cancel?.title ?? "취소"}
        </Button>
        <Button onClick={handleClickConfirm} autoFocus variant="text">
          {confirm?.title ?? "확인"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
