import {
  alpha,
  Box,
  ButtonBase,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { favoritedVideoIdsState } from "../../datas";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import { setKoNumber } from "../../utils";
import Icon from "../atoms/Icon";
import Typo from "../atoms/Typo";

export default function VideoItem({ item }: { item: any }) {
  const { id, thumbnail, title, description, href } = item;
  const [favoritedVideoIds, setFavoritedVideoIds] = useRecoilState(
    favoritedVideoIdsState
  );
  const favorited = favoritedVideoIds.includes(id);
  const handleClick = () => {
    window.open(href);
  };
  const handleClickFavorite = () => {
    setFavoritedVideoIds((prev) => {
      let prevList = _.cloneDeep(prev);
      if (prevList.includes(id)) {
        prevList = _.filter(prevList, (el) => el !== id);
      } else {
        prevList = [...prevList, id];
      }
      return prevList;
    });
  };
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <ButtonBase
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          borderRadius: 1,
          border: `1px solid ${blueGrey[100]} !important`,
          overflow: "hidden",
          boxShadow: `2px 2px 4px 0px ${alpha("#000000", 0.08)}`,
          "& *": {
            cursor: "pointer",
          },
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            pt: "56.25%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -1,
              left: -1,
              right: -1,
              bottom: -1,
              borderRadius: 1,
              overflow: "hidden",
              border: `1px solid ${blueGrey[100]} !important`,
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
        </Box>
        <Box
          sx={{
            flex: 1,
            alignSelf: "stretch",
            p: theme.spacing(2, 2),
          }}
        >
          <Typo
            lines={2}
            sx={{
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: "700",
              color: blueGrey[900],
              wordBreak: "break-all",
            }}
          >
            {title}
          </Typo>
          <Typo
            lines={2}
            sx={{
              mt: 0.5,
              fontSize: 12,
              lineHeight: "16px",
              color: blueGrey[500],
              wordBreak: "break-all",
            }}
          >
            {description}
          </Typo>
          <Typo
            lines={2}
            sx={{
              mt: 0.5,
              fontSize: 14,
              lineHeight: "20px",
              color: blueGrey[900],
            }}
          >
            {setKoNumber(32450000)}원
          </Typo>
        </Box>
      </ButtonBase>
      <Stack
        spacing={1}
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
        }}
      >
        <IconButton
          sx={{
            width: 32,
            height: 32,
            backgroundColor: `${favorited ? pink[500] : "#ffffff"} !important`,
            border: `1px solid ${favorited ? pink[500] : blueGrey[100]}`,
            boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
            zIndex: 98,
            borderRadius: 0.5,
            transition: "none",
          }}
          onClick={handleClickFavorite}
        >
          <Icon
            name="heart"
            prefix="fas"
            size={16}
            color={favorited ? "#ffffff" : blueGrey[300]}
          />
        </IconButton>
      </Stack>
    </Box>
  );
}
