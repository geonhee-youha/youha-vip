import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { homeTabMaxHeight, HomeTabProps, homeTabWidth } from "../../constants";
import { theme } from "../../themes/theme";
import Icon from "../atoms/Icon";
export default function HomeTabItem({ item }: { item: HomeTabProps }) {
  const { title, iconName } = item;
  return (
    <Box
      sx={{
        flex: 1,
        width: homeTabWidth,
        minWidth: homeTabWidth,
        backgroundColor: "#ffffff",
        borderRadius: 1,
        border: `1px solid ${blueGrey[100]}`,
        overflow: "hidden",
        minHeight: homeTabMaxHeight,
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: theme.spacing(2),
        }}
      >
        <Icon
          name={iconName}
          color={blueGrey[700]}
          prefix="fad"
          size={20}
          sx={{ mr: 1 }}
        />
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: "24px",
            fontWeight: "700",
            color: blueGrey[700],
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
