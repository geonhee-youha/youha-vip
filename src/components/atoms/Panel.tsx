import { Box, SxProps } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
export default function Panel({
  children,
  sx,
}: {
  children?: React.ReactNode;
  sx?: SxProps;
}) {
  return (
    <Box
      sx={{
        height: "100vh",
        p: 3,
        ...sx,
      }}
    >
      <Box
        sx={{
          minHeight: '100%',
          borderRadius: 1,
          backgroundColor: "#ffffff",
          border: `1px solid ${blueGrey[100]}`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
