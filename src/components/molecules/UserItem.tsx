import { Box, ButtonBase, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { UserProps } from "../../datas";
import { theme } from "../../themes/theme";
import Icon from "../atoms/Icon";

export default function UserItem({ item }: { item: UserProps }) {
  const router = useRouter();
  const { name, email, company } = item;
  const handleClickUser = () => {
    router.push(`/mypage`);
  };
  return (
    <ButtonBase
      sx={{
        width: "100%",
        justifyContent: "flex-start",
        p: theme.spacing(1),
        borderRadius: 1,
      }}
      onClick={handleClickUser}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: 1,
          width: 64,
          height: 64,
          overflow: "hidden",
        }}
      >
        <img
          src={company.thumbnail}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          ml: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            lineHeight: "16px",
            fontWeight: "700",
            color: blueGrey[900],
          }}
        >
          {company.name} {company.team.name}
        </Typography>
        <Typography
          component="span"
          sx={{
            fontSize: 20,
            lineHeight: "32px",
            fontWeight: "700",
            color: blueGrey[900],
          }}
        >
          {name}
          <Typography
            component="span"
            sx={{
              fontSize: 12,
              lineHeight: "24px",
              fontWeight: "700",
              color: blueGrey[900],
              ml: 0.5,
            }}
          >
            {company.team.position}
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            lineHeight: "16px",
            color: blueGrey[400],
          }}
        >
          {email}
        </Typography>
      </Box>
      <Icon
        name="angle-right"
        sx={{
          ml: "auto",
          transition: `all 0.35s ease`,
        }}
      />
    </ButtonBase>
  );
}