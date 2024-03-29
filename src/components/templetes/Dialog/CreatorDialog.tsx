import {
  alpha,
  Box,
  Button,
  Dialog,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import _ from "lodash";
import { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useRecoilState, useSetRecoilState } from "recoil";
import dayjs from "dayjs";
import {
  ageFilter,
  creatorDialogTabs,
  playlistFilters,
  playlistSorts,
  sexFilter,
  videoFilters,
  videoSorts,
} from "../../../constants";
import {
  checkedPlaylistIdsState,
  favoritedCreatorIdsState,
  tempCheckedPlaylistIdsState,
  testCreators,
  testPlaylists,
  testVideos,
} from "../../../datas";
import { creatorDialogState } from "../../../recoil";
import { theme } from "../../../themes/theme";
import youhaBlue from "../../../themes/youhaBlue";
import { setKoNumber } from "../../../utils";
import DataCell from "../../atoms/DataCell";
import Icon from "../../atoms/Icon";
import Typo from "../../atoms/Typo";
import PaperHeader from "../../molecules/PaperHeader";
import PlaylistItem from "../../organisms/PlaylistItem";
import TabBar from "../../molecules/TabBar";
import { Chart } from "react-chartjs-2";
import VideoItem from "../../organisms/VideoItem";
import Slide from "../../atoms/Slide";
import List from "../../atoms/List";

export default function CreatorDialog() {
  const [creatorDialog, setCreatorDialog] = useRecoilState(creatorDialogState);
  const [favoritedCreatorIds, setFavoritedCreatorIds] = useRecoilState(
    favoritedCreatorIdsState
  );
  const { queryName, open, id, index, checkMode, forceCheck } = creatorDialog;
  const creator =
    _.findIndex(testCreators, (el) => el.id === id) !== -1
      ? testCreators[_.findIndex(testCreators, (el) => el.id === id)]
      : null;
  const playlists = creator
    ? _.filter(testPlaylists, (el: any) => el.youtubeCreatorId === creator.id)
    : [];
  const videos = playlists ? playlists.flatMap((el: any) => el.items) : [];
  const favorited = favoritedCreatorIds.includes(id);
  const [tabIndex, setTabIndex] = useState<number>(0);
  useEffect(() => {
    if (index !== undefined) setTabIndex(index);
  }, [index, open]);
  const handleClose = () => {
    setCreatorDialog((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleClickFavorite = () => {
    setFavoritedCreatorIds((prev) => {
      let prevList = _.cloneDeep(prev);
      if (prevList.includes(id)) {
        prevList = _.filter(prevList, (el) => el !== id);
      } else {
        prevList = [...prevList, id];
      }
      return prevList;
    });
  };
  const [checkedPlaylistIds, setCheckedPlaylistIds] = useRecoilState(
    checkedPlaylistIdsState
  );
  const [tempCheckedPlaylistIds, setTempCheckedPlaylistIdsState] =
    useRecoilState(tempCheckedPlaylistIdsState);
  const confirmable = tempCheckedPlaylistIds.length > 0;
  useEffect(() => {
    if (open && checkMode) setTempCheckedPlaylistIdsState(checkedPlaylistIds);
  }, [open]);
  const handleClickConfirm = () => {
    handleClose();
    setCheckedPlaylistIds(tempCheckedPlaylistIds);
  };
  const CPV = creator?.CPV;
  const trendIndex = (creator && creator.trendIndex) ?? 0;
  const commercialIdeaPerfomanceIndex =
    (creator && creator.commercialIdeaPerfomanceIndex) ?? 0;
  const fullfillmentIndex = (creator && creator.fullfillmentIndex) ?? 0;
  const influenceIndex = (creator && creator.influenceIndex) ?? 0;
  const advertisementIndex =
    creator && creator.advertisementIndex
      ? creator.advertisementIndex * 100
      : 0;
  const cleanIndex = (creator && creator.cleanIndex) ?? 0;
  const totalChartData = {
    labels: [
      "트렌드 지수",
      "광고 기획력",
      "이행 지수",
      "영향력 지수",
      "광고 지수",
      "클린 지수",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          trendIndex,
          commercialIdeaPerfomanceIndex,
          fullfillmentIndex,
          influenceIndex,
          100 - advertisementIndex,
          cleanIndex,
        ],
        fill: true,
        pointRadius: 6,
        pointBorderWidth: 6,
        borderWidth: 8,
        backgroundColor: youhaBlue[500],
        borderColor: youhaBlue[500],
        pointBackgroundColor: blueGrey[50],
        pointBorderColor: youhaBlue[500],
        pointHoverBackgroundColor: blueGrey[50],
        pointHoverBorderColor: youhaBlue[500],
      },
    ],
  };
  const totalChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        ticks: {
          display: false,
          background: blueGrey[50],
          font: {
            size: 14,
            family: "Pretendard",
            weight: "700",
          },
          color: blueGrey[700],
        },
        pointLabels: {
          font: {
            size: 14,
            family: "Pretendard",
            weight: "700",
          },
        },
        angleLines: {
          display: false,
        },
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
    maintainAspectRatio: false,
  };
  const vip = id !== "35349f9e-2b17-430f-bfee-6eff01964619";
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onBackdropClick={handleClose}
      aria-labelledby="playlist-dialog-title"
      aria-describedby="playlist-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          position: "absolute",
          top: 24,
          left: `${376 + 16 + 24}px`,
          "@media(min-width: 1600px)": {
            left: `calc((100vw - 1600px) / 2 + ${376 + 16 + 24}px)`,
          },
          bottom: 24,
          width: (376 + 16) * 2,
          minWidth: (376 + 16) * 2,
          maxWidth: (376 + 16) * 2,
          maxHeight: `initial`,
          m: 0,
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
            title={"크리에이터 정보"}
            onClose={handleClose}
          >
            {creator && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  p: theme.spacing(2, 3, 4, 3),
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
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
                        width: 188,
                        height: 188,
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
                    {vip && (
                      <>
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: "50%",
                            border: `4px solid ${pink[500]}`,
                          }}
                        ></Box>
                        {/* <Box
                  sx={{
                    position: "absolute",
                    right: -8,
                    bottom: -8,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: blueGrey[900],
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: -40,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      overflow: "hidden",
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        left: -2,
                        bottom: -2,
                        display: "flex",
                        alignItems: "flex-end",
                        "& img": {
                          width: 40,
                        },
                      }}
                    >
                      <img src="/images/rocket.png" />
                    </Box>
                  </Box>
                </Box> */}
                        {creator.mcn && (
                          <Box
                            sx={{
                              position: "absolute",
                              left: -32,
                              right: -32,
                              bottom: 0,
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              sx={{
                                borderRadius: 0.5,
                                height: 24,
                                p: theme.spacing(0, 1),
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: pink[500],
                              }}
                            >
                              <img
                                src="/images/rocket.png"
                                style={{ height: 16, marginRight: 4 }}
                              />
                              <Typography
                                sx={{
                                  fontSize: 14,
                                  lineHeight: "20px",
                                  fontWeight: "700",
                                  color: "#ffffff",
                                }}
                              >
                                {creator.mcn}
                              </Typography>
                            </Box>
                          </Box>
                        )}
                      </>
                    )}
                  </Box>
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
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Stack spacing={1} alignItems="center" sx={{ mt: 2 }}>
                      <Stack direction="row" spacing={0.5}>
                        <Box
                          sx={{
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
                            {creator.channelCategory}
                          </Typography>
                        </Box>
                        {creator.availableForSaleAt.includes("W") && (
                          <Box
                            sx={{
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
                              {dayjs(
                                new Date(
                                  new Date().getFullYear(),
                                  new Date().getMonth(),
                                  new Date().getDate() +
                                    Number(
                                      creator.availableForSaleAt.replace(
                                        "W",
                                        ""
                                      )
                                    ) *
                                      7
                                )
                              ).format("YYYY년 MM월 DD일~ ")}
                            </Typography>
                          </Box>
                        )}
                      </Stack>
                    </Stack>
                    <Typo
                      lines={1}
                      sx={{
                        mt: 1,
                        fontSize: 20,
                        lineHeight: "32px",
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
                        fontSize: 14,
                        lineHeight: "20px",
                        color: blueGrey[700],
                      }}
                    >
                      구독자 {`${setKoNumber(creator.subscriberCount)}명`}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gridAutoColumn: "1fr",
                        gridTemplateRows: "auto",
                        gridRowGap: 0,
                        backgroundColor: blueGrey[50],
                        borderRadius: 1,
                        p: 1,
                      }}
                    >
                      {/* <DataCell label="영향력 지수" value={`높음`} />
                      <DataCell label="트렌드 지수" value={`56점`} />
                      <DataCell label="타겟 적합도" value={`${98}%`} />
                      <DataCell
                        label="예상 CPV"
                        value={
                          creator.CPV
                            ? `${creator.CPV.toFixed(0)}원/회`
                            : "집계중"
                        }
                      />
                      <DataCell label="평균 단가" value={`3,230만원`} />
                      <DataCell label="집행가능일" value={`11월 1일~`} /> */}
                      <DataCell
                        label="타겟"
                        value={`${creator.targetGender[0]} / ${creator.targetAge[0]}`}
                      />
                      <DataCell label="응답율" value={"100%"} />
                      <DataCell label="평균 단가" value={`3,230만원`} />
                      <DataCell
                        label="예상 CPV"
                        value={CPV ? `${CPV.toFixed(0)}원/회` : "집계중"}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
            <Box
              sx={{
                p: theme.spacing(0, 2, 0, 2),
              }}
            >
              <TabBar
                color="secondary"
                title="creatorDialog"
                tabs={
                  vip
                    ? creatorDialogTabs
                    : [creatorDialogTabs[2], creatorDialogTabs[3]]
                }
                index={tabIndex}
                setIndex={setTabIndex}
              />
            </Box>
          </PaperHeader>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              width: "100%",
              position: "relative",
            }}
          >
            {vip ? (
              <SwipeableViews
                index={tabIndex}
                onChangeIndex={setTabIndex}
                style={{
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Slide>
                  <Box
                    sx={{
                      p: theme.spacing(4, 3, 2, 3),
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 18,
                        lineHeight: "28px",
                        fontWeight: "700",
                        mb: 1,
                      }}
                    >
                      채널 스코어 분석
                    </Typography>
                    <Box
                      sx={{
                        m: `0 auto`,
                        width: 320,
                        height: 280,
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <Chart
                          type="radar"
                          data={totalChartData}
                          options={totalChartOptions}
                        />
                      </Box>
                    </Box>
                    <Stack
                      // direction="row"
                      spacing={0}
                      sx={{
                        mt: 4,
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: `repeat(${2}, 1fr)`,
                        gridAutoColumn: "1fr",
                        gridTemplateRows: "auto",
                        gridRowGap: 16,
                        gridColumnGap: 16,
                      }}
                    >
                      {[
                        {
                          title: "트렌드 지수",
                          value:
                            trendIndex === 0
                              ? "집계중"
                              : `${Math.floor(trendIndex)}점`,
                          reason: "설명이 들어갈 예정입니다.",
                          tooltip:
                            "해당 크리에이터의 채널의 영상이 최근 얼마나 이슈화 되는지 확인하는 지수 입니다.",
                        },
                        {
                          title: "광고 기획력",
                          value:
                            commercialIdeaPerfomanceIndex === 0
                              ? "집계중"
                              : `${Math.floor(
                                  commercialIdeaPerfomanceIndex
                                )}점`,
                          reason: "설명이 들어갈 예정입니다.",
                          tooltip:
                            "크리에이터가 해당 광고를 얼마나 자연스럽고 거부감 없이 콘텐츠에 반영하였는지 확인하는 지수입니다. 광고 관련 경력 5년 이상의 종사자, PD, 영화감독, 작가로 구성된 유하 검증단이 평가하였습니다.",
                        },
                        {
                          title: "이행 지수",
                          value:
                            fullfillmentIndex === 0
                              ? "집계중"
                              : `${Math.floor(fullfillmentIndex)}점`,
                          reason: "설명이 들어갈 예정입니다.",
                          tooltip:
                            "해당 크리에이터의 이전 광고 집행 과정에 참여한 적이 있는 대행사, MCN의 의견을 기준으로 평가하였습니다.",
                        },
                        {
                          title: "영향력 지수",
                          value:
                            influenceIndex === 0
                              ? "집계중"
                              : `${Math.floor(influenceIndex)}점`,
                          reason: "설명이 들어갈 예정입니다.",
                          tooltip:
                            "해당 크리에이터의 최근 광고가 유튜브 채널을 제외하고 포털, SNS에 얼마나 빠르게 언급되는지 측정하는 지표입니다.",
                        },
                        {
                          title: "광고 지수",
                          value:
                            advertisementIndex === 0
                              ? "집계중"
                              : `${Math.floor(advertisementIndex)}%`,
                          reason: "설명이 들어갈 예정입니다.",
                          tooltip:
                            "해당 크리에이터 채널의 광고 포화지수를 측정한 지수입니다.",
                        },
                        {
                          title: "클린 지수",
                          value:
                            cleanIndex === 0
                              ? "집계중"
                              : `${Math.floor(cleanIndex)}%`,
                          reason: "설명이 들어갈 예정입니다.",
                          tooltip:
                            "크리에이터와 관련된 논란이 없었는지를 기록하는 지수입니다. 해당 지수는 포털사이트, SNS 크롤링을 통해 논란의 관련 언급 여부를 통해 평가하였습니다.",
                        },
                      ].map((item, index) => (
                        <Box
                          key={index}
                          sx={{
                            borderRadius: 1,
                            border: `1px solid ${blueGrey[100]}`,
                            p: 2,
                            flex: 1,
                          }}
                        >
                          <Stack direction="row" spacing={0.5}>
                            <Typography
                              sx={{
                                fontSize: 14,
                                lineHeight: "20px",
                              }}
                            >
                              {item.title}
                            </Typography>
                            {/* <Box
                            sx={{
                              position: "relative",
                              ":hover .tooltip": {
                                opacity: 1,
                              },
                            }}
                          >
                            <Icon
                              name="exclamation-circle"
                              color={blueGrey[500]}
                              size={14}
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                transform: `translateY(-100%)`,
                                p: theme.spacing(1),
                                backgroundColor: alpha(blueGrey[800], 1),
                                borderRadius: 0.5,
                                maxWidth: 200,
                                display: "flex",
                                alignItems: "center",
                                width: "max-content",
                                opacity: 0,
                                transition: `opacity 0.35s ease`,
                              }}
                              className="tooltip"
                            >
                              <Typography
                                sx={{
                                  fontSize: 12,
                                  lineHeight: "16px",
                                  color: "#ffffff",
                                }}
                              >
                                {item.tooltip}
                              </Typography>
                            </Box>
                          </Box> */}
                          </Stack>
                          <Typography
                            sx={{
                              fontSize: 16,
                              lineHeight: "24px",
                              fontWeight: "700",
                            }}
                          >
                            {item.value}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 14,
                              lineHeight: "20px",
                              p: 2,
                              borderRadius: 1,
                              backgroundColor: blueGrey[50],
                              mt: 2,
                            }}
                          >
                            <Box sx={{ display: "inline-flex", mr: 0.5 }}>
                              <Icon
                                name="exclamation-circle"
                                color={blueGrey[500]}
                                size={12}
                              />
                            </Box>
                            {item.tooltip}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Slide>
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Slide>
                    <List
                      data={playlists}
                      filters={playlistFilters}
                      sorts={playlistSorts}
                      columns={3}
                      renderList={(data) => {
                        return data.map((item, index) => (
                          <PlaylistItem
                            key={index}
                            item={item}
                            checkMode={checkMode}
                            forceCheck={forceCheck}
                            inCreator
                          />
                        ));
                      }}
                      title="플레이리스트가"
                    ></List>
                  </Slide>
                  <>
                    {checkMode && (
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          p: theme.spacing(2, 3),
                          zIndex: 999,
                          backgroundColor: "#ffffff",
                          boxShadow: `4px 4px 8px 4px rgba(0, 0, 0, 0.08)`,
                        }}
                      >
                        <Button
                          fullWidth
                          sx={{
                            minHeight: 48,
                            height: 48,
                            boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
                          }}
                          disabled={!confirmable}
                          onClick={handleClickConfirm}
                        >
                          <Icon
                            name="users"
                            size={20}
                            color="#ffffff"
                            prefix="fas"
                            sx={{
                              mr: 1,
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: 16,
                              lineHeight: "24px",
                              fontWeight: "700",
                              color: "#ffffff",
                            }}
                          >
                            {tempCheckedPlaylistIds.length === 0
                              ? "기획안 선택"
                              : `${tempCheckedPlaylistIds.length}개의 기획안 담기`}
                          </Typography>
                        </Button>
                      </Box>
                    )}
                  </>
                </Box>
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
                    title="광고영상이"
                  />
                </Slide>
                <Slide>
                  <Box
                    sx={{
                      p: theme.spacing(4, 3, 2, 3),
                    }}
                  >
                    <Box
                      sx={{
                        ml: -7.5,
                        mr: -7.5,
                      }}
                    >
                      <img src="/images/creator-0.png" />
                      <img src="/images/creator-1.png" />
                    </Box>
                  </Box>
                </Slide>
              </SwipeableViews>
            ) : (
              <SwipeableViews
                index={tabIndex}
                onChangeIndex={setTabIndex}
                style={{
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
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
                    title="광고영상이"
                  />
                </Slide>
                <Slide>
                  <Box
                    sx={{
                      p: theme.spacing(4, 3, 2, 3),
                    }}
                  >
                    <Box
                      sx={{
                        ml: -7.5,
                        mr: -7.5,
                      }}
                    >
                      <img src="/images/creator-0.png" />
                      <img src="/images/creator-1.png" />
                    </Box>
                  </Box>
                </Slide>
              </SwipeableViews>
            )}
          </Box>
        </Box>
      </Paper>
    </Dialog>
  );
}
