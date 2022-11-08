import {
  alpha,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useRecoilState, useSetRecoilState } from "recoil";
import { creatorDialogTabs } from "../../../constants";
import {
  checkedPlaylistIdsState,
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
import TabBar from "../TabBar";
import { Chart } from "react-chartjs-2";
import VideoItem from "../../organisms/VideoItem";
import CreatorItem from "../../organisms/CreatorItem";

export default function CreatorDialog() {
  const [creatorDialog, setCreatorDialog] = useRecoilState(creatorDialogState);
  const setCheckedPlaylistIds = useSetRecoilState(checkedPlaylistIdsState);
  const {
    id,
    open,
    title,
    body,
    cancel,
    confirm,
    creatorId,
    checkMode,
    forceCheck,
  } = creatorDialog;
  const creator =
    _.findIndex(testCreators, (el) => el.id === creatorId) !== -1
      ? testCreators[_.findIndex(testCreators, (el) => el.id === creatorId)]
      : null;
  const playlists = creator
    ? _.filter(
        testPlaylists.flatMap((el) => el.playlistItems),
        (el: any) => el.snippet.channelTitle === creator.title
      )
    : [];
  const videos = testVideos;
  const [tabIndex, setTabIndex] = useState<number>(0);
  useEffect(() => {
    setTabIndex(creatorDialog.tabIndex);
  }, [creatorDialog.tabIndex]);
  const handleClose = () => {
    setCreatorDialog((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleClickCancel = () => {
    cancel?.onClick();
    handleClose();
  };
  const handleClickConfirm = () => {
    confirm?.onClick();
    handleClose();
  };
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
          className={`PaperTarget-${id}`}
        >
          <PaperHeader id={id} title={"기획안 선택"} onClose={handleClose}>
            {creator && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  p: theme.spacing(2, 3, 2, 3),
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: 164,
                    height: 164,
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
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    ml: 3,
                  }}
                >
                  <Box
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
                  </Box>
                  <Typo
                    lines={1}
                    sx={{
                      mt: 0.5,
                      fontSize: 18,
                      lineHeight: "28px",
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
                        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
                        gridAutoColumn: "1fr",
                        gridTemplateRows: "auto",
                        gridRowGap: 0,
                        backgroundColor: blueGrey[50],
                        borderRadius: 1,
                        p: 1,
                      }}
                    >
                      <DataCell label="영향력 지수" value={`높음`} />
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
                      <DataCell label="집행가능일" value={`11월 1일~`} />
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
                tabs={creatorDialogTabs}
                index={tabIndex}
                setIndex={setTabIndex}
              />
            </Box>
          </PaperHeader>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              overflow: "hidden",
              width: "100%",
              position: "relative",
              "& .react-swipeable-view-container": {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                height: "100%",
                width: "100%",
              },
            }}
          >
            <SwipeableViews
              index={tabIndex}
              onChangeIndex={setTabIndex}
              style={{
                overflow: "hidden",
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
                      width: 400,
                      height: 360,
                      borderRadius: 1,
                      backgroundColor: blueGrey[50],
                      p: theme.spacing(2, 4),
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
                  <Box
                    sx={{
                      ml: -7.5,
                      mr: -7.5,
                    }}
                  >
                    <img src="/image/creator-0.png" />
                  </Box>
                </Box>
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
                    <img src="/image/creator-1.png" />
                  </Box>
                </Box>
              </Slide>
              <Slide>
                <Playlists
                  playlists={playlists}
                  checkMode={checkMode}
                  forceCheck={forceCheck}
                  inCreator
                />
              </Slide>
              <Slide>
                <Videos videos={videos} inCreator />
              </Slide>
            </SwipeableViews>
          </Box>
        </Box>
      </Paper>
    </Dialog>
  );
}
export function Slide({ children }: { children?: React.ReactNode }) {
  const boxRef = useRef<any>(null);
  const shadowRef = useRef<any>(null);
  const handleScroll = (e: any) => {
    if (boxRef.current.scrollTop > 0) {
      shadowRef.current.style.boxShadow = `4px 4px 8px 4px rgba(0, 0, 0, 0.08)`;
    } else {
      shadowRef.current.style.boxShadow = ``;
    }
  };
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
      }}
    >
      <Box
        ref={shadowRef}
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: -40,
          height: 40,
          backgroundColor: "#ffffff",
          transition: `all 0.35s ease`,
          zIndex: 999,
        }}
      />
      <Box
        ref={boxRef}
        sx={{
          position: "relative",
          height: "100%",
          overflow: "auto",
        }}
        onScroll={handleScroll}
      >
        {children}
      </Box>
    </Box>
  );
}
export function Creators({
  creators,
  columns = 3,
}: {
  creators: any[];
  columns?: number;
}) {
  const [sort, setSort] = useState<string>("subscriberCount");
  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  const data = _.sortBy(creators, sort).reverse();
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          p: theme.spacing(2, 3, 0, 3),
        }}
      >
        <Select
          color="secondary"
          value={sort}
          onChange={handleChangeSort}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            backgroundColor: `${"transparent"} !important`,
            height: 40,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: "700",
            color: blueGrey[300],
            "& fieldset": {
              borderColor: `${blueGrey[100]} !important`,
              borderWidth: `1px !important`,
              boxShadow: "none !important",
            },
            boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
            "&.Mui-focused": {
              boxShadow: `2px 2px 4px 0px ${alpha(blueGrey[900], 0.24)}`,
            },
            "&:hover *": {
              borderColor: blueGrey[900],
            },
          }}
        >
          <MenuItem value={"viewCount"}>구독자순</MenuItem>
          <MenuItem value={"standardCommercialPrice"}>
            예상 광고단가 순
          </MenuItem>
          <MenuItem value={"subscriberCount"}>예상 노출수 순</MenuItem>
          <MenuItem value={"CPV"}>예상 CPV</MenuItem>
        </Select>
      </Box>
      <Box
        sx={{
          width: "100%",
          p: theme.spacing(2, 3, 2 + 2, 3),
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridAutoColumn: "1fr",
            gridTemplateRows: "auto",
            gridRowGap: 16,
            gridColumnGap: 16,
          }}
        >
          {data.map((item, index) => (
            <CreatorItem key={index} item={item} />
          ))}
        </Box>
      </Box>
      {data.length === 0 && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#ffffff",
            zIndex: 999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            overflow: "hidden",
            // boxShadow: `2px 2px 4px 0px ${alpha("#000000", 0.08)}`,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              lineHeight: "20px",
              fontWeight: "700",
              color: blueGrey[300],
              textAlign: "center",
            }}
          >
            해당하는 크리에이터가 없습니다!
          </Typography>
        </Box>
      )}
    </Box>
  );
}
export function Playlists({
  playlists,
  checkMode,
  forceCheck,
  columns = 3,
  inCreator,
}: {
  playlists: any[];
  checkMode?: boolean;
  forceCheck?: boolean;
  columns?: number;
  inCreator?: boolean;
}) {
  const [sort, setSort] = useState<string>("subscriberCount");
  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  const data = _.sortBy(playlists, sort).reverse();
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          p: theme.spacing(2, 3, 0, 3),
        }}
      >
        <Select
          color="secondary"
          value={sort}
          onChange={handleChangeSort}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            backgroundColor: `${"transparent"} !important`,
            height: 40,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: "700",
            color: blueGrey[300],
            "& fieldset": {
              borderColor: `${blueGrey[100]} !important`,
              borderWidth: `1px !important`,
              boxShadow: "none !important",
            },
            boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
            "&.Mui-focused": {
              boxShadow: `2px 2px 4px 0px ${alpha(blueGrey[900], 0.24)}`,
            },
            "&:hover *": {
              borderColor: blueGrey[900],
            },
          }}
        >
          <MenuItem value={"viewCount"}>구독자순</MenuItem>
          <MenuItem value={"standardCommercialPrice"}>
            예상 광고단가 순
          </MenuItem>
          <MenuItem value={"subscriberCount"}>예상 노출수 순</MenuItem>
          <MenuItem value={"CPV"}>예상 CPV</MenuItem>
        </Select>
      </Box>
      <Box
        sx={{
          width: "100%",
          p: theme.spacing(2, 3, 2 + 2, 3),
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridAutoColumn: "1fr",
            gridTemplateRows: "auto",
            gridRowGap: 16,
            gridColumnGap: 16,
          }}
        >
          {data.map((item, index) => (
            <PlaylistItem
              key={index}
              item={item}
              checkMode={checkMode}
              forceCheck={forceCheck}
              inCreator={inCreator}
            />
          ))}
        </Box>
      </Box>
      {data.length === 0 && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#ffffff",
            zIndex: 999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            overflow: "hidden",
            // boxShadow: `2px 2px 4px 0px ${alpha("#000000", 0.08)}`,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              lineHeight: "20px",
              fontWeight: "700",
              color: blueGrey[300],
              textAlign: "center",
            }}
          >
            해당하는 기획안이 없습니다!
          </Typography>
        </Box>
      )}
    </Box>
  );
}
export function Videos({
  videos,
  inCreator,
  columns = 3,
}: {
  videos: any[];
  inCreator?: boolean;
  columns?: number;
}) {
  const [sort, setSort] = useState<string>("subscriberCount");
  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  const data = _.sortBy(videos, sort).reverse();
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          p: theme.spacing(2, 3, 0, 3),
        }}
      >
        <Select
          color="secondary"
          value={sort}
          onChange={handleChangeSort}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            backgroundColor: `${"transparent"} !important`,
            height: 40,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: "700",
            color: blueGrey[300],
            "& fieldset": {
              borderColor: `${blueGrey[100]} !important`,
              borderWidth: `1px !important`,
              boxShadow: "none !important",
            },
            boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
            "&.Mui-focused": {
              boxShadow: `2px 2px 4px 0px ${alpha(blueGrey[900], 0.24)}`,
            },
            "&:hover *": {
              borderColor: blueGrey[900],
            },
          }}
        >
          <MenuItem value={"viewCount"}>구독자순</MenuItem>
          <MenuItem value={"standardCommercialPrice"}>
            예상 광고단가 순
          </MenuItem>
          <MenuItem value={"subscriberCount"}>예상 노출수 순</MenuItem>
          <MenuItem value={"CPV"}>예상 CPV</MenuItem>
        </Select>
      </Box>
      <Box
        sx={{
          width: "100%",
          p: theme.spacing(2, 3, 2 + 2, 3),
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridAutoColumn: "1fr",
            gridTemplateRows: "auto",
            gridRowGap: 16,
            gridColumnGap: 16,
          }}
        >
          {data.map((item, index) => (
            <VideoItem key={index} item={item} inCreator={inCreator} />
          ))}
        </Box>
      </Box>
      {data.length === 0 && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#ffffff",
            zIndex: 999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            overflow: "hidden",
            // boxShadow: `2px 2px 4px 0px ${alpha("#000000", 0.08)}`,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              lineHeight: "20px",
              fontWeight: "700",
              color: blueGrey[300],
              textAlign: "center",
            }}
          >
            해당하는 광고영상이 없습니다!
          </Typography>
        </Box>
      )}
    </Box>
  );
}

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
      data: [65, 59, 90, 81, 56, 40],
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
