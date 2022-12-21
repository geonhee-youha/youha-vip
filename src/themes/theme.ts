import { alpha } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import {
  red,
  purple,
  cyan,
  grey,
} from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: cyan,
    secondary: purple,
    grey: grey,
    error: red,
    action: {
      active: alpha(grey[900], 0.54),
      hover: alpha(grey[900], 0.04),
      selected: alpha(grey[900], 0.08),
      disabled: alpha(grey[900], 0.26),
      disabledBackground: alpha(grey[900], 0.12),
      focus: alpha(grey[900], 0.12),
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `LINESeedKR, Pretendard, -apple-system, BlinkMacSystemFont, system- ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo","Noto Sans KR", "Malgun Gothic", sans- serif`,
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          textAlign: "left",
          cursor: 'pointer !important',
          '& *': {
            cursor: 'pointer !important',
          },
          transition: `all 0.35s ease`,
          fontFamily: `LINESeedKR, Pretendard, -apple-system, BlinkMacSystemFont, system- ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo","Noto Sans KR", "Malgun Gothic", sans- serif`,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          maxWidth: 1440,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
        size: "large",
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 28,
          height: 28,
          borderRadius: 8,
          padding: 0,
          cursor: 'pointer',
          '& *': {
            cursor: 'pointer',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          font: 'initial !important',
          fontSize: 16,
          lineHeight: '24px',
          '& input': {
            fontFamily: 'LINESeedKR',
            fontSize: 16,
            lineHeight: '24px !important',
            padding: 0,
            height: 'auto',
          }
        }
      }
    }
  },
});
