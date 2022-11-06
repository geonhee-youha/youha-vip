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
import {
  checkedPlaylistIdsState,
  favoritedPlaylistIdsState,
} from "../../datas";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import { setKoNumber } from "../../utils";
import Icon from "../atoms/Icon";
import Typo from "../atoms/Typo";

export default function PlaylistItem({
  item,
  checkMode,
  forceCheck,
}: {
  item: any;
  checkMode?: boolean;
  forceCheck?: boolean;
}) {
  const { id, count } = item;
  const [checkedPlaylistIds, setCheckedPlaylistIds] = useRecoilState(
    checkedPlaylistIdsState
  );
  const [favoritedPlaylistIds, setFavoritedPlaylistIds] = useRecoilState(
    favoritedPlaylistIdsState
  );
  const checked =
    (forceCheck || checkMode) && checkedPlaylistIds.includes(item.id);
  const favorited = favoritedPlaylistIds.includes(id);
  const handleClick = () => {};
  const handleClickCheck = () => {
    setCheckedPlaylistIds((prev) => {
      let prevList = _.cloneDeep(prev);
      if (prevList.includes(id)) {
        prevList = _.filter(prevList, (el) => el !== id);
      } else {
        prevList = [...prevList, id];
      }
      return prevList;
    });
  };
  const handleClickFavorite = () => {
    setFavoritedPlaylistIds((prev) => {
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
          border: `1px solid ${
            checked ? youhaBlue[500] : blueGrey[100]
          } !important`,
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
            width: "100%",
            // p: theme.spacing(2, 2, 0, 2),
          }}
        >
          <Box
            sx={{
              position: "relative",
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
                border: `1px solid ${
                  checked ? youhaBlue[500] : blueGrey[100]
                } !important`,
              }}
            >
              <img
                src={item?.snippet?.thumbnails["maxres"]?.url}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: alpha(
                    checked ? youhaBlue[500] : "#000000",
                    0.8
                  ),
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: "20px",
                    color: "#ffffff",
                    fontWeight: "700",
                  }}
                >
                  {count}
                </Typography>
                <Icon
                  name="list-ul"
                  prefix="fas"
                  size={16}
                  color="#ffffff"
                  sx={{ mt: 0.5 }}
                />
              </Box>
            </Box>
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
            lines={1}
            sx={{
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: "700",
              color: checked ? youhaBlue[500] : blueGrey[900],
              wordBreak: "break-all",
            }}
          >
            {item.snippet.title}
          </Typo>
          <Typo
            lines={1}
            sx={{
              mt: 0.5,
              fontSize: 12,
              lineHeight: "16px",
              color: checked ? youhaBlue[500] : blueGrey[500],
            }}
          >
            최근 게시일 2022.11.01
          </Typo>
          <Typo
            lines={2}
            sx={{
              mt: 0.5,
              fontSize: 14,
              lineHeight: "20px",
              color: checked ? youhaBlue[500] : blueGrey[900],
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
        {!forceCheck && checkMode && (
          <IconButton
            sx={{
              width: 32,
              height: 32,
              backgroundColor: `${
                checked ? youhaBlue[500] : "#ffffff"
              } !important`,
              border: `1px solid ${checked ? youhaBlue[500] : blueGrey[100]}`,
              boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
              zIndex: 98,
              borderRadius: 0.5,
              transition: "none",
            }}
            onClick={handleClickCheck}
          >
            <Icon
              name="check"
              prefix="fas"
              size={16}
              color={checked ? "#ffffff" : blueGrey[300]}
            />
          </IconButton>
        )}
        {!forceCheck && !checkMode && (
          <IconButton
            sx={{
              width: 32,
              height: 32,
              backgroundColor: `${
                favorited ? pink[500] : "#ffffff"
              } !important`,
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
        )}
      </Stack>
    </Box>
  );
}
