import { Box, Typography } from "@mui/material";
export default function Page() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "ceneter",
      }}
    >
      <Typography
        sx={{
          fontSize: 40,
          lineHeight: "56px",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        홈 화면
      </Typography>
    </Box>
  );
}
