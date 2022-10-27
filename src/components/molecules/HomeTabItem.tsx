import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { HomeTabProps } from "../../constants";
import { theme } from "../../themes/theme";
import Icon from "../atoms/Icon";

export default function HomeTabItem({ item }: { item: HomeTabProps }) {
  const { title, iconName } = item;
  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "#ffffff",
        borderRadius: 1,
        border: `1px solid ${blueGrey[100]}`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          //   backgroundColor: blueGrey[500],
          //   borderBottom: `1px solid ${blueGrey[100]}`,
          p: theme.spacing(2),
        }}
      >
        <Icon
          name={iconName}
          color={blueGrey[700]}
          prefix="fad"
          //   color="#ffffff"
          size={20}
          sx={{ mr: 1 }}
        />
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: "24px",
            fontWeight: "700",
            color: blueGrey[700],
            // color: "#ffffff",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
