import { IconName } from "@fortawesome/fontawesome-svg-core";
import {
  alpha,
  Box,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  SxProps,
  Typography,
} from "@mui/material";
import { blueGrey, pink, red } from "@mui/material/colors";
import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useState,
} from "react";
import { inputDefaultProps, InputProps } from "../../constants";
import youhaBlue from "../../themes/youhaBlue";
import Icon from "./Icon";
type TextFieldProps = {
  inputRef?: any;
  input: InputProps;
  setInput: Dispatch<SetStateAction<any>>;
  type?: string;
  label?: React.ReactNode;
  essential?: boolean;
  placeholder?: string;
  multiline?: boolean;
  showButton?: boolean;
  startAdornmentName?: IconName;
  minRows?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: any) => void;
  uneditable?: boolean;
  sx?: SxProps;
};
export default function TextField({
  inputRef,
  input,
  setInput,
  type,
  label,
  essential,
  placeholder,
  multiline,
  showButton,
  startAdornmentName,
  minRows,
  onChange,
  onKeyPress,
  uneditable,
  sx,
}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange !== undefined) return onChange(event);
    const value = event.target.value;
    setInput((prev: any) => {
      return { ...prev, value: value, error: false, helperText: "" };
    });
  };
  const handleClickReset = () => {
    setInput(inputDefaultProps);
  };
  const handleMouseDown = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Box sx={{ ...sx }}>
      <FormControl fullWidth variant="filled" error={input.error}>
        {label && (
          <Typography
            sx={{
              pt: 0.5,
              pb: 0.5,
              fontSize: 14,
              lineHeight: "20px",
              fontWeight: "700",
              "& span": {
                color: youhaBlue[500],
              },
              color: input.error ? red[500] : blueGrey[900],
            }}
          >
            {label}
            {essential && <span>*</span>}
          </Typography>
        )}
        <FilledInput
          inputRef={inputRef}
          value={input.value}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyPress={onKeyPress}
          autoComplete="off"
          type={showPassword ? "text" : type}
          multiline={multiline}
          minRows={minRows}
          disabled={uneditable}
          startAdornment={
            startAdornmentName && (
              <Icon
                name={startAdornmentName}
                prefix="fas"
                size={16}
                sx={{
                  color: blueGrey[700],
                  width: 20,
                  height: 20,
                  p: 0,
                  ml: -1,
                  mr: 1,
                }}
              />
            )
          }
          endAdornment={
            <>
              {input.value !== "" && !multiline && type !== "number" && (
                <IconButton
                  tabIndex={-1}
                  onClick={handleClickReset}
                  onMouseDown={handleMouseDown}
                  sx={{
                    width: 20,
                    height: 20,
                    p: 0,
                    mr: -1,
                    ml: 1,
                  }}
                  className="reset-button"
                >
                  <Icon
                    name="times-circle"
                    prefix="fas"
                    size={16}
                    sx={{
                      color: blueGrey[500],
                      width: 20,
                      height: 20,
                    }}
                  />
                </IconButton>
              )}
              {showButton && (
                <IconButton
                  tabIndex={-1}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDown}
                  sx={{
                    width: 20,
                    height: 20,
                    p: 0,
                    mr: 4,
                    ml: 1,
                  }}
                >
                  {showPassword ? (
                    <Icon
                      name="eye-slash"
                      prefix="fas"
                      size={16}
                      sx={{
                        color: pink[500],
                        width: 20,
                        height: 20,
                        // "@media(max-width: 1023px)": {
                        //     width: 20,
                        //     height: 20,
                        //     fontSize: 7,
                        // },
                      }}
                    />
                  ) : (
                    <Icon
                      name="eye"
                      prefix="fas"
                      size={16}
                      sx={{
                        color: pink[500],
                        width: 20,
                        height: 20,
                        // "@media(max-width: 1023px)": {
                        //     width: 20,
                        //     height: 20,
                        //     fontSize: 7,
                        // },
                      }}
                    />
                  )}
                </IconButton>
              )}
            </>
          }
          sx={{
            mt: 0.5,
            fontSize: "14px !important",
            lineHeight: "20px !important",
            "&.MuiInputBase-root": {
              p: `12px 16px !important`,
              borderRadius: "8px !important",
              minHeight: 48,
              backgroundColor: `${
                input.error ? `#ffffff` : blueGrey[50]
              } !important`,
              "&.Mui-disabled": {
                backgroundColor: `${blueGrey[400]} !important`,
                "& input": {
                  color: `${blueGrey[900]} !important`,
                  WebkitTextFillColor: `${blueGrey[900]} !important`,
                },
              },
              border: `1px solid ${
                input.error ? red[500] : blueGrey[50]
              } !important`,
              "&.Mui-focused": {
                backgroundColor: `${alpha(blueGrey[50], 1)} !important`,
                border: `1px solid ${
                  input.error ? red[500] : blueGrey[900]
                } !important`,
              },
              "&:not(.Mui-focused) .reset-button": {
                display: "none",
              },
              "& input": {
                flex: 1,
                p: `0 !important`,
                fontSize: 14,
                lineHeight: "20px",
                "&::placeholder": {
                  color: blueGrey[500],
                  opacity: 1,
                },
                // "@media(max-width: 1023px)": {
                //     p: `9px 0`,
                //     fontSize: 14,
                //     lineHeight: "20px",
                // },
              },
              "& textarea": {
                p: `0 !important`,
                fontSize: 14,
                lineHeight: "20px",
                "&::placeholder": {
                  color: blueGrey[500],
                  opacity: 1,
                },
                // "@media(max-width: 1023px)": {
                //     p: `9px 0`,
                //     fontSize: 14,
                //     lineHeight: "20px",
                // },
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
        {input.helperText && (
          <FormHelperText
            sx={{
              m: 0,
              // p: input.error ? "4px 0" : 0,
              p: "4px 0",
              fontSize: 14,
              lineHeight: "20px",
              color: input.error ? `${red[500]} !important` : blueGrey[900],
            }}
          >
            {input.helperText}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
}
