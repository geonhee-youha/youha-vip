import { Box, ButtonBase } from "@mui/material";
import { CreatorProps } from "../../datas";

export default function CreatorItem({ item }: { item: CreatorProps }) {
  const { thumbnail } = item;
  return (
    <ButtonBase>
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
          src={thumbnail}
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
    </ButtonBase>
  );
}
