import { alpha, ButtonBase } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { NoticeProps } from "../../datas";
import { displayedAt } from "../../utils";
import Typo from "../atoms/Typo";

export default function NoticeItem({ item }: { item: NoticeProps }) {
  const router = useRouter();
  const { id, title, body, createdAt } = item;
  const handleClick = () => {
    router.push(`/notices?id=${id}`);
  };
  return (
    <ButtonBase
      sx={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        p: 1,
        borderRadius: 1,
        "& .MuiTouchRipple-root *": {
          backgroundColor: alpha(blueGrey[900], 0.32),
        },
      }}
      onClick={handleClick}
    >
      <Typo
        lines={2}
        sx={{
          flex: 1,
          fontSize: 14,
          lineHeight: "20px",
          fontWeight: "700",
          color: blueGrey[700],
          mr: 0.5,
        }}
      >
        {title}
      </Typo>
      <Typo
        sx={{
          fontSize: 12,
          lineHeight: "16px",
          color: blueGrey[500],
        }}
      >
        {displayedAt(createdAt)}
      </Typo>
    </ButtonBase>
  );
}
