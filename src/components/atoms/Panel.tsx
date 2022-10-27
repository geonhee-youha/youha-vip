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
        borderRight: `1px solid ${blueGrey[100]}`,
        backgroundColor: "#ffffff",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
