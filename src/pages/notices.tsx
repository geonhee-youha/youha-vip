import { Box, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Panel from "../components/atoms/Panel";
import NoticeItem from "../components/molecules/NoticeItem";
import { notices } from "../datas";
import { theme } from "../themes/theme";
export default function Page() {
  return (
    <Panel>
      <Box
        sx={{
          p: theme.spacing(5, 6, 0, 6),
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderBottom: `1px solid ${blueGrey[100]}`,
            pb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 24,
              lineHeight: "32px",
              fontWeight: "700",
              mr: "auto",
            }}
          >
            공지사항
          </Typography>
        </Box>
      </Box>
      <Stack
        spacing={1}
        sx={{
          p: theme.spacing(2, 5, 5, 5),
        }}
      >
        {notices.map((item, index) => (
          <NoticeItem key={index} item={item} />
        ))}
      </Stack>
    </Panel>
  );
}
