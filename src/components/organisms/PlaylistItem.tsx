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
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  checkedPlaylistIdsState,
  favoritedPlaylistIdsState,
  tempCheckedPlaylistIdsState,
  testCreators,
} from "../../datas";
import { creatorDialogState, playlistDialogState } from "../../recoil";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import { comma, setKoNumber } from "../../utils";
import Icon from "../atoms/Icon";
import Typo from "../atoms/Typo";
import dayjs from "dayjs";

export default function PlaylistItem({
  item,
  checkMode,
  forceCheck,
  inCreator,
}: {
  item: any;
  checkMode?: boolean;
  forceCheck?: boolean;
  inCreator?: boolean;
}) {
  const { id, expectedViewCount, snippet } = item;
  const [tempCheckedPlaylistIds, setTempCheckedPlaylistIds] = useRecoilState(
    tempCheckedPlaylistIdsState
  );
  const [favoritedPlaylistIds, setFavoritedPlaylistIds] = useRecoilState(
    favoritedPlaylistIdsState
  );
  const setCreatorDialog = useSetRecoilState(creatorDialogState);
  const setPlaylistDialog = useSetRecoilState(playlistDialogState);
  const checked =
    (forceCheck || checkMode) && tempCheckedPlaylistIds.includes(item.id);
  const favorited = favoritedPlaylistIds.includes(id);
  const boost = item.youtubePlaylistId === "";
  const handleClick = () => {
    if (boost) return null;
    setPlaylistDialog((prev) => {
      return {
        ...prev,
        open: true,
        id: id,
      };
    });
  };
  const handleClickCheck = () => {
    setTempCheckedPlaylistIds((prev) => {
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
  const handleClickCreator = () => {
    setCreatorDialog((prev) => {
      return {
        ...prev,
        open: true,
        id: creator.id,
        index: 0,
      };
    });
  };
  const creator =
    _.findLast(testCreators, (el) => el.id === item.youtubeCreatorId) ??
    testCreators[0];
  const averagePrice =
    Math.floor(
      (!isNaN(Number(creator.basicPPLPrice))
        ? Number(creator.basicPPLPrice)
        : 0) +
        (!isNaN(Number(creator.advancedPPLPrice))
          ? Number(creator.advancedPPLPrice)
          : 0) +
        (!isNaN(Number(creator.brandedCommercialPrice))
          ? Number(creator.brandedCommercialPrice)
          : 0) +
        (!isNaN(Number(creator.featuringPrice))
          ? Number(creator.featuringPrice)
          : 0) /
          ((!isNaN(Number(creator.basicPPLPrice)) ? 1 : 0) +
            (!isNaN(Number(creator.advancedPPLPrice)) ? 1 : 0) +
            (!isNaN(Number(creator.brandedCommercialPrice)) ? 1 : 0) +
            (!isNaN(Number(creator.featuringPrice)) ? 1 : 0))
    ) * 10000;
  const minPrice =
    item.youtubePlaylistId === ""
      ? Math.min(
          ...[item.brandedPrice, item.pplPrice].filter<number>(
            (n): n is number => n != null && n > 0
          )
        )
      : null;
  const originPrice =
    minPrice && minPrice === item.brandedPrice && item.brandedPrice
      ? item.brandedCost ?? 0
      : minPrice && minPrice === item.pplPrice && item.pplPrice
      ? item.pplCost ?? 0
      : 0;
  const saleRatio =
    minPrice && originPrice
      ? Math.floor(((originPrice - minPrice) / originPrice) * 100)
      : 0;
  const minAd = minPrice
    ? minPrice === item.brandedPrice
      ? "브랜디드"
      : minPrice === item.pplPrice
      ? "PPL"
      : ""
    : null;
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        alignSelf: "stretch",
        justifySelf: "stretch",
      }}
    >
      <ButtonBase
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
          justifySelf: "stretch",
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
                backgroundColor: checked ? youhaBlue[100] : blueGrey[100],
              }}
            >
              <img
                src={
                  item.thumbnail === "https://i.ytimg.com/img/no_thumbnail.jpg"
                    ? "/images/no-image.png"
                    : item.thumbnail
                }
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
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: alpha("#000000", 0.1),
                }}
              />
              {boost && (
                <>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: 1,
                      border: `4px solid ${pink[500]}`,
                      boxShadow: `0px 0px 0px 4px ${"#ffffff"} inset`,
                      zIndex: 9,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      backgroundColor: pink[500],
                      p: theme.spacing(0.5, 1),
                      fontSize: 12,
                      lineHeight: "16px",
                      color: "#ffffff",
                      fontWeight: "700",
                      zIndex: 9,
                      borderTopLeftRadius: 8,
                    }}
                  >
                    ORIGINAL
                  </Box>
                </>
              )}
              {/* <Box
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
                  {expectedViewCount}
                </Typography>
                <Icon
                  name="list-ul"
                  prefix="fas"
                  size={16}
                  color="#ffffff"
                  sx={{ mt: 0.5 }}
                />
              </Box> */}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            p: theme.spacing(2, 2, !inCreator ? 11 : 2, 2),
          }}
        >
          <Box
            sx={{
              pb: 0.5,
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                mr: 0.5,
                mb: 0.5,
                borderRadius: 0.5,
                height: 20,
                p: theme.spacing(0, 0.75),
                display: "flex",
                alignItems: "center",
                backgroundColor: pink[50],
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: "16px",
                  fontWeight: "700",
                  color: pink[500],
                }}
              >
                {item.contentGenre && item.contentGenre !== ""
                  ? item.contentGenre
                  : "미분류"}
              </Typography>
            </Box>
            {boost && (
              <Box
                sx={{
                  mr: 0.5,
                  mb: 0.5,
                  borderRadius: 0.5,
                  height: 20,
                  p: theme.spacing(0, 0.75),
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: youhaBlue[50],
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    lineHeight: "16px",
                    fontWeight: "700",
                    // color: colors[adSet.id][500],
                    color: youhaBlue[500],
                  }}
                >
                  {
                    item.dueDateForUploading ?? "미정"
                    // dayjs(
                    //     new Date(
                    //       new Date().getFullYear(),
                    //       new Date().getMonth(),
                    //       new Date().getDate() +
                    //         Number(
                    //           creator.availableForSaleAt.replace("W", "")
                    //         ) *
                    //           7
                    //     )
                    //   ).format("YYYY년 MM월 DD일~ ")
                  }
                </Typography>
              </Box>
            )}
          </Box>
          <Box sx={{ flex: 1 }}>
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
              {item.title}
            </Typo>
            <Typo
              lines={2}
              sx={{
                minHeight: 40,
                mt: 0.5,
                fontSize: 14,
                lineHeight: "20px",
                color: checked ? youhaBlue[500] : blueGrey[500],
                wordBreak: "break-all",
              }}
            >
              {item.description}
            </Typo>
          </Box>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <Box sx={{}}>
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: "16px",
                  fontWeight: "700",
                  color: blueGrey[700],
                  // "@media(max-width: 1023px)": {
                  //     fontSize: 10,
                  //     lineHeight: "14px",
                  // },
                }}
              >
                예상 조회수
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  lineHeight: "24px",
                  fontWeight: "700",
                  "& .won": {
                    fontSize: 12,
                    lineHeight: "16px",
                    ml: 0.25,
                  },
                  "& .ratio": {
                    mr: 0.5,
                    color: pink[500],
                  },
                }}
              >
                {expectedViewCount ? (
                  <>
                    {/* <span className="ratio">30%</span> */}
                    {setKoNumber(expectedViewCount)}
                    <span className="won">회</span>
                  </>
                ) : (
                  "집계중"
                )}
              </Typography>
            </Box>
            <Box sx={{}}>
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: "16px",
                  fontWeight: "700",
                  color: blueGrey[700],
                  // "@media(max-width: 1023px)": {
                  //     fontSize: 10,
                  //     lineHeight: "14px",
                  // },
                }}
              >
                {minAd ? `${minAd} 기준 최소단가` : "예상 단가"}
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  lineHeight: "24px",
                  fontWeight: "700",
                  "& .won": {
                    fontSize: 12,
                    lineHeight: "16px",
                    ml: 0.25,
                  },
                  "& .ratio": {
                    mr: 0.5,
                    color: pink[500],
                  },
                }}
              >
                {boost &&
                item.pplPrice === null &&
                item.brandedPrice === null ? (
                  "가격미정"
                ) : minPrice ? (
                  <>
                    {saleRatio > 0 && (
                      <span className="ratio">{saleRatio}%</span>
                    )}
                    {comma(minPrice)}원
                  </>
                ) : averagePrice ? (
                  <>
                    {comma(averagePrice)}
                    <span className="won">원</span>
                  </>
                ) : (
                  "집계중"
                )}
              </Typography>
            </Box>
            {/* <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon
                prefix="fad"
                name="eye"
                size={14}
                sx={{
                  mr: 0.5,
                  color: checked ? youhaBlue[500] : blueGrey[500],
                }}
              />
              <Typo
                lines={2}
                sx={{
                  fontSize: 14,
                  lineHeight: "20px",
                  color: checked ? youhaBlue[500] : blueGrey[500],
                  fontWeight: "700",
                }}
              >
                {setKoNumber(3204000)}회 예상
              </Typo>
            </Box> */}
          </Stack>
        </Box>
      </ButtonBase>
      {!inCreator && (
        <ButtonBase
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            borderTop: `1px solid ${blueGrey[100]}`,
            p: theme.spacing(2),
            display: "flex",
            alignItems: "center",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
          onClick={handleClickCreator}
        >
          <Box
            sx={{
              position: "relative",
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: `1px solid ${blueGrey[100]} !important`,
              overflow: "hidden",
            }}
          >
            <img
              src={creator.thumbnail}
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
              pl: 1,
              flex: 1,
            }}
          >
            <Typo
              lines={1}
              sx={{
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: "700",
                color: blueGrey[900],
                wordBreak: "break-all",
              }}
            >
              {creator.title}
            </Typo>
            <Typography
              sx={{
                mt: 0.5,
                fontSize: 12,
                lineHeight: "16px",
                color: blueGrey[700],
                wordBreak: "break-all",
              }}
            >
              구독자 {`${setKoNumber(creator.subscriberCount)}명`}
            </Typography>
          </Box>
        </ButtonBase>
      )}
      <Stack
        spacing={1}
        sx={{
          position: "absolute",
          top: boost ? 16 : 8,
          left: boost ? 16 : 8,
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
