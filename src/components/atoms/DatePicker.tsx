import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as Date } from "@mui/x-date-pickers/DatePicker";
import { blueGrey, red } from "@mui/material/colors";
import { alpha } from "@mui/material";
import youhaBlue from "../../themes/youhaBlue";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers";

export default function DatePicker({
  value,
  onChange,
  disabled,
  error,
}: {
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
  disabled?: boolean;
  error?: boolean;
}) {
  const isWeekend = (date: Dayjs) => {
    const day = date.day();

    return day === 0 || day === 6;
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        disabled={disabled}
        value={value}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              "& *": {
                transition: "all 0.35 ease",
              },
              "&.MuiFormControl-root": {
                border: `none !important`,
                boxShadow: `none !important`,
              },
              "& fieldset": {
                display: "none",
              },
              "& .MuiInputBase-root": {
                p: `12px 16px !important`,
                borderRadius: "8px !important",
                minHeight: 40,
                border: `none !important`,
                backgroundColor: `${blueGrey[50]} !important`,
                "&.Mui-disabled": {
                  backgroundColor: `${blueGrey[50]} !important`,
                  "& input": {
                    color: `${blueGrey[400]} !important`,
                    WebkitTextFillColor: `${blueGrey[900]} !important`,
                    cursor: "default !important",
                  },
                  "& textarea": {
                    color: `${blueGrey[400]} !important`,
                    WebkitTextFillColor: `${blueGrey[900]} !important`,
                    cursor: "default !important",
                  },
                },
                boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, ${
                  disabled ? 0 : 0.08
                }), ${
                  error
                    ? alpha(red[500], 1)
                    : alpha(disabled ? blueGrey[50] : blueGrey[100], 1)
                } 0px 0px 0px 1px inset`,
                "&.Mui-focused": {
                  backgroundColor: `${alpha(blueGrey[50], 0)} !important`,
                  boxShadow: `${alpha(
                    error ? red[500] : youhaBlue[500],
                    0.24
                  )} 2px 2px 4px 0px, ${alpha(
                    error ? red[500] : youhaBlue[500],
                    1
                  )} 0px 0px 0px 1px inset`,
                },
                "&:not(.Mui-focused) .reset-button": {
                  display: "none",
                },
                "& input": {
                  flex: 1,
                  minHeight: 24,
                  fontSize: 16,
                  lineHeight: "24px",
                  p: `0 !important`,
                  "&::placeholder": {
                    color: blueGrey[300],
                    opacity: 1,
                  },
                },
                "& textarea": {
                  p: `0 !important`,
                  minHeight: 24,
                  fontSize: 16,
                  lineHeight: "24px",
                  "&::placeholder": {
                    color: blueGrey[300],
                    opacity: 1,
                  },
                },
                "&::before": {
                  display: `none !important`,
                },
                "&::after": {
                  display: `none !important`,
                },
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
