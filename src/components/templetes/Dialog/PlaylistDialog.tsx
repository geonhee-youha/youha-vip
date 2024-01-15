import {
  alpha,
  Box,
  ButtonBase,
  Dialog,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { videoFilters, videoSorts } from "../../../constants";
import {
  favoritedCreatorIdsState,
  favoritedPlaylistIdsState,
  testCreators,
  testPlaylists,
  testVideos,
} from "../../../datas";
import { creatorDialogState, playlistDialogState } from "../../../recoil";
import { theme } from "../../../themes/theme";
import { comma, setKoNumber } from "../../../utils";
import Icon from "../../atoms/Icon";
import Typo from "../../atoms/Typo";
import PaperHeader from "../../molecules/PaperHeader";
import VideoItem from "../../organisms/VideoItem";
import Slide from "../../atoms/Slide";
import List from "../../atoms/List";
import youhaBlue from "../../../themes/youhaBlue";

export default function PlaylistDialog() {
  const [playlistDialog, setPlaylistDialog] =
    useRecoilState(playlistDialogState);
  const [favoritedPlaylistIds, setFavoritedPlaylistIds] = useRecoilState(
    favoritedPlaylistIdsState
  );
  const [favoritedCreatorIds, setFavoritedCreatorIds] = useRecoilState(
    favoritedCreatorIdsState
  );
  const [creatorDialog, setCreatorDialog] = useRecoilState(creatorDialogState);
  const { queryName, open, id, index } = playlistDialog;
  const playlist =
    testPlaylists[_.findIndex(testPlaylists, (el: any) => el.id === id)];
  const item = playlist;
  const videos = playlist ? playlist.items : [];
  const creator = item
    ? _.findLast(testCreators, (el) => el.id === item.youtubeCreatorId)
    : null;
  const favorited = favoritedPlaylistIds.includes(id);
  const creatorFavorited = creator
    ? favoritedCreatorIds.includes(creator.id)
    : false;
  const handleClose = () => {
    setPlaylistDialog((prev) => {
      return {
        ...prev,
        open: false,
      };
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
  const handleClickCreatorFavorite = () => {
    setFavoritedCreatorIds((prev) => {
      let prevList = _.cloneDeep(prev);
      if (prevList.includes(creator.id)) {
        prevList = _.filter(prevList, (el) => el !== creator.id);
      } else {
        prevList = [...prevList, creator.id];
      }
      return prevList;
    });
  };
  const averagePrice = creator
    ? Math.floor(
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
      ) * 10000
    : null;
  const boost = item && item.youtubePlaylistId === "";
  const minPrice =
    item && item.youtubePlaylistId === ""
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
    <Dialog
      open={open}
      onClose={handleClose}
      onBackdropClick={handleClose}
      aria-labelledby="playlist-dialog-title"
      aria-describedby="playlist-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          width: 376 * 2 + 16,
          minWidth: 376 * 2 + 16,
          maxWidth: 376 * 2 + 16,
          height: `calc((100vh - ${24 * 2}px))`,
          maxHeight: `calc((100vh - ${24 * 2}px))`,
        },
        position: "fixed",
        zIndex: 999999,
        right: 0,
        overflow: "auto",
      }}
      className={queryName}
    >
      <Paper
        elevation={4}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          borderRadius: 1,
          boxShadow: `4px 4px 8px 4px rgba(0, 0, 0, 0.08)`,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
          className={`PaperTarget-${queryName}`}
        >
          <PaperHeader
            queryName={queryName}
            title={"기획안 정보"}
            onClose={handleClose}
            borderBottom
          >
            {playlist && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  p: theme.spacing(2, 3, 2, 3),
                }}
              >
                <Box>
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        width: 40,
                        height: 40,
                        backgroundColor: `${
                          favorited ? pink[500] : "#ffffff"
                        } !important`,
                        border: `1px solid ${
                          favorited ? pink[500] : blueGrey[100]
                        }`,
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
                        size={20}
                        color={favorited ? "#ffffff" : blueGrey[300]}
                      />
                    </IconButton>
                    <Box
                      sx={{
                        position: "relative",
                        width: 168 / 0.5625,
                        height: 168,
                        borderRadius: 1,
                        border: `1px solid ${blueGrey[100]} !important`,
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={item.thumbnail}
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
                    </Box>
                  </Box>
                  {creator && (
                    <Stack
                      // direction="row"
                      spacing={2}
                      sx={{
                        mt: 2,
                        // p: theme.spacing(4, 3, 2, 3),
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <ButtonBase
                          sx={{
                            borderRadius: 1,
                            border: `1px solid ${blueGrey[100]}`,
                            boxShadow: `2px 2px 4px 0px ${alpha(
                              "#000000",
                              0.08
                            )}`,
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            p: theme.spacing(1, 1.5),
                          }}
                          onClick={handleClickCreator}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              width: 48,
                              height: 48,
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
                              flex: 1,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              ml: 2,
                            }}
                          >
                            {/* <Box
                          sx={{
                            borderRadius: 0.5,
                            mr: 0.5,
                            height: 20,
                            p: theme.spacing(0, 0.75),
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: blueGrey[50],
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 12,
                              lineHeight: "16px",
                              fontWeight: "700",
                              color: blueGrey[500],
                            }}
                          >
                            뷰티/패션
                          </Typography>
                        </Box> */}
                            <Typo
                              lines={1}
                              sx={{
                                fontSize: 16,
                                lineHeight: "24px",
                                fontWeight: "700",
                                color: blueGrey[900],
                                wordBreak: "break-all",
                                width: 168 / 0.5625 - 136,
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
                              }}
                            >
                              구독자{" "}
                              {`${setKoNumber(creator.subscriberCount)}명`}
                            </Typography>
                          </Box>
                        </ButtonBase>
                        <IconButton
                          sx={{
                            position: "absolute",
                            top: "50%",
                            right: 16,
                            transform: "translateY(-50%)",
                            width: 32,
                            height: 32,
                            backgroundColor: `${
                              creatorFavorited ? pink[500] : "#ffffff"
                            } !important`,
                            border: `1px solid ${
                              creatorFavorited ? pink[500] : blueGrey[100]
                            }`,
                            boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
                            zIndex: 98,
                            borderRadius: 0.5,
                            transition: "none",
                          }}
                          onClick={handleClickCreatorFavorite}
                        >
                          <Icon
                            name="heart"
                            prefix="fas"
                            size={16}
                            color={creatorFavorited ? "#ffffff" : blueGrey[300]}
                          />
                        </IconButton>
                      </Box>
                      <Box
                        sx={{
                          flex: 1,
                          position: "relative",
                        }}
                      ></Box>
                    </Stack>
                  )}
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    width: "100%",
                    pl: 3,
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
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typo
                      lines={1}
                      sx={{
                        fontSize: 20,
                        lineHeight: "32px",
                        fontWeight: "700",
                        color: blueGrey[900],
                        wordBreak: "break-all",
                      }}
                    >
                      {item.title}
                    </Typo>
                  </Box>
                  <Typography
                    sx={{
                      mt: 0.5,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: blueGrey[700],
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
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
                        {item.expectedViewCount ? (
                          <>
                            {/* <span className="ratio">30%</span> */}
                            {setKoNumber(item.expectedViewCount)}
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
                        {minPrice ? (
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
              </Box>
            )}
          </PaperHeader>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <Slide>
              <List
                data={videos}
                filters={videoFilters}
                sorts={videoSorts}
                spacing={1}
                renderList={(data) => {
                  return data.map((item, index) => (
                    <VideoItem key={index} item={item} inCreator />
                  ));
                }}
                title="플레이리스트가"
              />
            </Slide>
          </Box>
        </Box>
      </Paper>
    </Dialog>
  );
}
