import {
  alpha,
  Box,
  Button,
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
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  estimateDialogTabs,
  videoFilters,
  videoSorts,
} from "../../../constants";
import {
  favoritedCreatorIdsState,
  testCampaignsState,
  testCreators,
  testEstimates,
  testPlaylists,
  testVideos,
} from "../../../datas";
import { alertDialogState, creatorDialogState, estimateDialogState } from "../../../recoil";
import { theme } from "../../../themes/theme";
import { comma, setKoNumber } from "../../../utils";
import Icon from "../../atoms/Icon";
import Typo from "../../atoms/Typo";
import PaperHeader from "../../molecules/PaperHeader";
import VideoItem from "../../organisms/VideoItem";
import Slide from "../../atoms/Slide";
import List from "../../atoms/List";
import { InputRow } from "./EstimateConfirmDialog";
import youhaBlue from "../../../themes/youhaBlue";
import CampaignItem from "../../organisms/CampaignItem";
import CreatorItem from "../../organisms/CreatorItem";
import TabBar from "../../molecules/TabBar";
import SwipeableViews from "react-swipeable-views";

export default function EstimateDialog() {
  const [estimateDialog, setEstimateDialog] =
    useRecoilState(estimateDialogState);
  const { queryName, open, id } = estimateDialog;
  return id !== "" ? <Inner /> : null;
}
function Inner() {
  const setAlertDialog = useSetRecoilState(alertDialogState)
  const [estimateDialog, setEstimateDialog] =
    useRecoilState(estimateDialogState);
  const { queryName, open, id, index } = estimateDialog;
  const estimate =
    testEstimates[_.findIndex(testEstimates, (el) => el.id === id)];
  const checked = true;
  const disabled = true;
  const input = estimate.input;
  const mix = estimate.mix;
  const testCampaigns = useRecoilValue(testCampaignsState);
  const campaign =
    testCampaigns[
      _.findIndex(testCampaigns, (el) => el.id === estimate.campaignId)
    ];
  const creators = _.filter(testCreators, (el) =>
    estimate.creatorIds.includes(el.id)
  );
  const playlists = _.filter(testPlaylists, (el) =>
    estimate.playlistIds.includes(el.id)
  );
  const [tabIndex, setTabIndex] = useState<number>(0);
  useEffect(() => {
    if (index !== undefined) setTabIndex(index);
  }, [index, open]);
  const handleClose = () => {
    setEstimateDialog((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const [check, setCheck] = useState<number | null>(null);
  const handleClickConfirm = () => {
    handleClose();
    setAlertDialog((prev) => {
      return {
        ...prev,
        open: true,
        title: "광고 요청이 완료되었습니다.",
        body: "조금만 기다려 주세요, 최대한 빠르게 유하에서 견적 결과를 알려드립니다!",
        lottie: "/lotties/48945-launch.json",
        cancel: {
          ...prev.cancel,
          hide: true,
          onClick: () => {},
        },
        confirm: {
          ...prev.confirm,
          title: "네 알겠어요!",
          onClick: () => {},
        },
      };
    });
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onBackdropClick={handleClose}
      aria-labelledby="estimate-dialog-title"
      aria-describedby="estimate-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          width: 376 * 3 + 16 * 2,
          minWidth: 376 * 3 + 16 * 2,
          maxWidth: 376 * 3 + 16 * 2,
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
            title={"견적서 정보"}
            onClose={handleClose}
          >
            <Box
              sx={{
                p: theme.spacing(0, 2, 0, 2),
              }}
            >
              <TabBar
                color="secondary"
                title="creatorDialog"
                tabs={estimateDialogTabs}
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
            }}
          >
            <SwipeableViews
              index={tabIndex}
              onChangeIndex={setTabIndex}
              style={{
                overflow: "hidden",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box sx={{ width: 376, overflow: "auto" }}>
                  {campaign && (
                    <Box
                      sx={{
                        p: theme.spacing(2, 3, 2, 3),
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
                        선택한 캠페인
                      </Typography>
                      <Stack spacing={1}>
                        <CampaignItem item={campaign} />
                      </Stack>
                    </Box>
                  )}
                  {creators && (
                    <Box
                      sx={{
                        p: theme.spacing(2, 3, 2, 3),
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
                        선택한 크리에이터
                      </Typography>
                      <Stack spacing={1}>
                        {creators.length > 0 ? (
                          creators.map((item: any, index: number) => (
                            <CreatorItem
                              key={index}
                              item={item}
                              playlists={playlists}
                              forceCheck
                            />
                          ))
                        ) : (
                          <Box
                            sx={{
                              borderRadius: 1,
                              border: `1px solid ${blueGrey[100]}`,
                              height: 374,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
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
                              선택한 크리에이터가
                              <br />
                              없습니다.
                            </Typography>
                          </Box>
                        )}
                      </Stack>
                    </Box>
                  )}
                </Box>
                <Box sx={{ width: 376, overflow: "auto" }}>
                  <Box
                    sx={{
                      p: theme.spacing(2, 3, 1, 3),
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
                      견적 상세정보
                    </Typography>
                  </Box>
                  <Stack
                    spacing={3}
                    sx={{
                      p: theme.spacing(0, 3, 2, 3),
                    }}
                  >
                    <ButtonBase
                      disabled
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        borderRadius: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          backgroundColor: `${
                            mix ? youhaBlue[500] : "#ffffff"
                          } !important`,
                          border: `1px solid ${
                            mix ? youhaBlue[500] : blueGrey[100]
                          }`,
                          boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
                          zIndex: 98,
                          borderRadius: 0.5,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          mr: 1,
                        }}
                      >
                        <Icon
                          name="check"
                          prefix="fas"
                          size={12}
                          color={mix ? "#ffffff" : blueGrey[300]}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: 14,
                          lineHeight: "20px",
                          color: blueGrey[500],
                        }}
                      >
                        유하의 크리에이터 추천을 받겠습니다.
                      </Typography>
                    </ButtonBase>
                    <InputRow
                      label="총 예산"
                      value={`${setKoNumber(Number(input.budget))}원`}
                      essential
                    />
                    <InputRow
                      label="광고 일정"
                      value={input.duration}
                      essential
                    />
                    <InputRow label="광고 목적" essential>
                      <Box sx={{ mb: -1 }}>
                        {input.purposies.map((item, index) => {
                          const checked = true;
                          return (
                            <Button
                              key={index}
                              variant="outlined"
                              color={checked ? "primary" : "secondary"}
                              sx={{
                                p: theme.spacing(0, 1.25),
                                height: 32,
                                minHeight: 32,
                                border: `1px solid ${
                                  checked ? youhaBlue[500] : blueGrey[100]
                                } !important`,
                                boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, ${
                                  checked ? `0.08` : `0.08`
                                })`,
                                borderRadius: 1,
                                mr: 1,
                                mb: 1,
                              }}
                              disabled
                            >
                              <Typography
                                sx={{
                                  fontSize: 14,
                                  lineHeight: "20px",
                                  fontWeight: "700",
                                  color: checked
                                    ? youhaBlue[500]
                                    : blueGrey[300],
                                }}
                              >
                                {item.title}
                              </Typography>
                            </Button>
                          );
                        })}
                      </Box>
                    </InputRow>
                    <InputRow label="매체 활용" essential>
                      <Box sx={{ mb: -1 }}>
                        {input.medias.map((item, index) => {
                          const checked = true;
                          return (
                            <Button
                              key={index}
                              variant="outlined"
                              color={checked ? "primary" : "secondary"}
                              sx={{
                                p: theme.spacing(0, 1.25),
                                height: 32,
                                minHeight: 32,
                                border: `1px solid ${
                                  checked ? youhaBlue[500] : blueGrey[100]
                                } !important`,
                                boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, ${
                                  checked ? `0.08` : `0.08`
                                })`,
                                borderRadius: 1,
                                mr: 1,
                                mb: 1,
                              }}
                              disabled
                            >
                              <Typography
                                sx={{
                                  fontSize: 14,
                                  lineHeight: "20px",
                                  fontWeight: "700",
                                  color: checked
                                    ? youhaBlue[500]
                                    : blueGrey[300],
                                }}
                              >
                                {item.title}
                              </Typography>
                            </Button>
                          );
                        })}
                      </Box>
                    </InputRow>
                    {mix && (
                      <>
                        <InputRow label="카테고리" essential>
                          <Box sx={{ mb: -1 }}>
                            {input.categories.map((item, index) => {
                              const checked = true;
                              return (
                                <Button
                                  key={index}
                                  variant="outlined"
                                  color={checked ? "primary" : "secondary"}
                                  sx={{
                                    p: theme.spacing(0, 1.25),
                                    height: 32,
                                    minHeight: 32,
                                    border: `1px solid ${
                                      checked ? youhaBlue[500] : blueGrey[100]
                                    } !important`,
                                    boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, ${
                                      checked ? `0.08` : `0.08`
                                    })`,
                                    borderRadius: 1,
                                    mr: 1,
                                    mb: 1,
                                  }}
                                  disabled
                                >
                                  <Typography
                                    sx={{
                                      fontSize: 14,
                                      lineHeight: "20px",
                                      fontWeight: "700",
                                      color: checked
                                        ? youhaBlue[500]
                                        : blueGrey[300],
                                    }}
                                  >
                                    {item.title}
                                  </Typography>
                                </Button>
                              );
                            })}
                          </Box>
                        </InputRow>
                        <InputRow label="타겟 성별" essential>
                          <Box sx={{ mb: -1 }}>
                            <Button
                              variant="outlined"
                              color={checked ? "primary" : "secondary"}
                              sx={{
                                p: theme.spacing(0, 1.25),
                                height: 32,
                                minHeight: 32,
                                border: `1px solid ${
                                  checked ? youhaBlue[500] : blueGrey[100]
                                } !important`,
                                boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, ${
                                  checked ? `0.08` : `0.08`
                                })`,
                                borderRadius: 1,
                                mr: 1,
                                mb: 1,
                              }}
                              disabled
                            >
                              <Typography
                                sx={{
                                  fontSize: 14,
                                  lineHeight: "20px",
                                  fontWeight: "700",
                                  color: checked
                                    ? youhaBlue[500]
                                    : blueGrey[300],
                                }}
                              >
                                {input.sex?.title}
                              </Typography>
                            </Button>
                          </Box>
                        </InputRow>
                        <InputRow label="타겟 연령대" essential>
                          <Box sx={{ mb: -1 }}>
                            {input.ages.map((item, index) => {
                              const checked = true;
                              return (
                                <Button
                                  key={index}
                                  variant="outlined"
                                  color={checked ? "primary" : "secondary"}
                                  sx={{
                                    p: theme.spacing(0, 1.25),
                                    height: 32,
                                    minHeight: 32,
                                    border: `1px solid ${
                                      checked ? youhaBlue[500] : blueGrey[100]
                                    } !important`,
                                    boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, ${
                                      checked ? `0.08` : `0.08`
                                    })`,
                                    borderRadius: 1,
                                    mr: 1,
                                    mb: 1,
                                  }}
                                  disabled
                                >
                                  <Typography
                                    sx={{
                                      fontSize: 14,
                                      lineHeight: "20px",
                                      fontWeight: "700",
                                      color: checked
                                        ? youhaBlue[500]
                                        : blueGrey[300],
                                    }}
                                  >
                                    {item.title}
                                  </Typography>
                                </Button>
                              );
                            })}
                          </Box>
                        </InputRow>
                        <InputRow
                          label="희망 채널 갯수"
                          essential
                          value={input.channelCount}
                        />
                      </>
                    )}
                    <InputRow label="핵심 키워드" value={input.keyword} />
                    <InputRow
                      label="셀링 포인트"
                      value={input.sellingPoint}
                      minRows={3}
                    />
                    <InputRow
                      label="광고 기획의도 상세"
                      value={input.description}
                      minRows={3}
                    />
                    <InputRow
                      label="기타 요청사항"
                      value={input.request}
                      minRows={3}
                    />
                    <InputRow
                      label="첨부파일"
                      value={"유하용_제안서_최종.pdf"}
                    />
                  </Stack>
                </Box>
              </Box>
              <Box sx={{ height: "100%" }}>
                <Stack
                  spacing={2}
                  sx={{
                    p: theme.spacing(2, 3),
                    height: "100%",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      borderRadius: 1,
                      boxShadow: `2px 2px 4px 0px ${alpha("#000000", 0.08)}`,
                      overflow: "hidden",
                      display: "flex",
                    }}
                  >
                    {[
                      {
                        package: false,
                        title: "1안. 웹 예능 중심",
                        mixs: [
                          {
                            title: "노빠꾸탁재훈 시즌2",
                            description:
                              "남자들의 향수를 자극하는 본격 리얼 밀리터리 토크쇼 ‘군벤져스’",
                            thumbnail:
                              "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F6a7970a9-b926-445d-b7fc-fa576d7b328e%2Fthumbnail-rectangle-02.png",
                            genre: "리얼리티 웹 예능",
                            type: "브랜디드",
                            date: "11월 9일 또는 11월 16일",
                            viewCount: 700000,
                            price: 30000000,
                          },
                          {
                            title: "워크맨 시즌2",
                            description:
                              "남자들의 향수를 자극하는 본격 리얼 밀리터리 토크쇼 ‘군벤져스’",
                            thumbnail:
                              "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F11933fc8-f1e5-4121-8511-41f8e67d2dfd%2Fthumbnail-rectangle-04.png",
                            genre: "리얼리티 웹 예능",
                            type: "브랜디드",
                            date: "11월 9일 또는 11월 16일",
                            viewCount: 700000,
                            price: 30000000,
                          },
                          {
                            title: "동네스타K 시즌2",
                            description:
                              "남자들의 향수를 자극하는 본격 리얼 밀리터리 토크쇼 ‘군벤져스’",
                            thumbnail:
                              "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F65b04be6-c9b5-47d5-b41f-ac36e1ec306f%2Fyouha-fastbooking_project_thumbnail-rectangle-08.png",
                            genre: "리얼리티 웹 예능",
                            type: "브랜디드",
                            date: "11월 9일 또는 11월 16일",
                            viewCount: 700000,
                            price: 30000000,
                          },
                        ],
                      },
                      {
                        package: false,
                        title: "2안. 일상 노출 중심",
                        mixs: [
                          {
                            title: "루대숲",
                            description:
                              "남자들의 향수를 자극하는 본격 리얼 밀리터리 토크쇼 ‘군벤져스’",
                            thumbnail:
                              "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2Ff1e6afd3-312a-4925-b2be-e4fe51854752%2Fthumbnail-rectangle-05.png",
                            genre: "리얼리티 웹 예능",
                            type: "브랜디드",
                            date: "11월 9일 또는 11월 16일",
                            viewCount: 700000,
                            price: 30000000,
                          },
                          {
                            title: "노빠꾸탁재훈 시즌2",
                            description:
                              "남자들의 향수를 자극하는 본격 리얼 밀리터리 토크쇼 ‘군벤져스’",
                            thumbnail:
                              "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F6a7970a9-b926-445d-b7fc-fa576d7b328e%2Fthumbnail-rectangle-02.png",
                            genre: "리얼리티 웹 예능",
                            type: "브랜디드",
                            date: "11월 9일 또는 11월 16일",
                            viewCount: 700000,
                            price: 30000000,
                          },
                          {
                            title: "노빠꾸탁재훈 시즌2",
                            description:
                              "남자들의 향수를 자극하는 본격 리얼 밀리터리 토크쇼 ‘군벤져스’",
                            thumbnail:
                              "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F6a7970a9-b926-445d-b7fc-fa576d7b328e%2Fthumbnail-rectangle-02.png",
                            genre: "리얼리티 웹 예능",
                            type: "브랜디드",
                            date: "11월 9일 또는 11월 16일",
                            viewCount: 700000,
                            price: 30000000,
                          },
                        ],
                      },
                      {
                        package: true,
                        title: "3안. 트레져헌터 믹스 패키지",
                        mixs: [
                          {
                            title: "노빠꾸탁재훈 시즌2",
                            description:
                              "남자들의 향수를 자극하는 본격 리얼 밀리터리 토크쇼 ‘군벤져스’",
                            thumbnail:
                              "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F6a7970a9-b926-445d-b7fc-fa576d7b328e%2Fthumbnail-rectangle-02.png",
                            genre: "리얼리티 웹 예능",
                            type: "브랜디드",
                            date: "11월 9일 또는 11월 16일",
                            viewCount: 700000,
                            price: 30000000,
                          },
                          {
                            title: "노빠꾸탁재훈 시즌2",
                            description:
                              "남자들의 향수를 자극하는 본격 리얼 밀리터리 토크쇼 ‘군벤져스’",
                            thumbnail:
                              "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F6a7970a9-b926-445d-b7fc-fa576d7b328e%2Fthumbnail-rectangle-02.png",
                            genre: "리얼리티 웹 예능",
                            type: "브랜디드",
                            date: "11월 9일 또는 11월 16일",
                            viewCount: 700000,
                            price: 30000000,
                          },
                          {
                            title: "노빠꾸탁재훈 시즌2",
                            description:
                              "남자들의 향수를 자극하는 본격 리얼 밀리터리 토크쇼 ‘군벤져스’",
                            thumbnail:
                              "https://youhasharosu-s3-for-funding-storage-production.s3.amazonaws.com/projectUploadedFiles%2F6a7970a9-b926-445d-b7fc-fa576d7b328e%2Fthumbnail-rectangle-02.png",
                            genre: "리얼리티 웹 예능",
                            type: "브랜디드",
                            date: "11월 9일 또는 11월 16일",
                            viewCount: 700000,
                            price: 30000000,
                          },
                        ],
                      },
                    ].map((item, index) => {
                      const checked = check === index;
                      const handleClickCheck = () => {
                        setCheck((prev) => (prev === index ? null : index));
                      };
                      return (
                        <Box
                          key={index}
                          sx={{
                            flex: 1,
                            position: "relative",
                            borderTopLeftRadius: index === 0 ? 8 : 0,
                            borderTopRightRadius: index === 2 ? 8 : 0,
                            borderBottomLeftRadius: index === 0 ? 8 : 0,
                            borderBottomRightRadius: index === 2 ? 8 : 0,
                            borderTop: `1px solid ${
                              checked ? youhaBlue[500] : blueGrey[100]
                            }`,
                            borderLeft: `${index === 2 ? 0 : 1}px solid ${
                              checked || (index === 1 && check === 0)
                                ? youhaBlue[500]
                                : blueGrey[100]
                            }`,
                            borderRight: `${index === 0 ? 0 : 1}px solid ${
                              checked || (index === 1 && check === 2)
                                ? youhaBlue[500]
                                : blueGrey[100]
                            }`,
                            borderBottom: `1px solid ${
                              checked ? youhaBlue[500] : blueGrey[100]
                            }`,
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Stack
                            // direction="row"
                            spacing={1}
                            // alignItems="center"
                            sx={{
                              pt: 2,
                              pb: 2,
                              pl: 2,
                              pr: 2,
                              borderBottom: `1px solid ${
                                checked ? youhaBlue[500] : blueGrey[100]
                              }`,
                              backgroundColor: blueGrey[50],
                            }}
                          >
                            <IconButton
                              sx={{
                                width: 32,
                                height: 32,
                                backgroundColor: `${
                                  checked ? youhaBlue[500] : "#ffffff"
                                } !important`,
                                border: `1px solid ${
                                  checked ? youhaBlue[500] : blueGrey[100]
                                }`,
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
                            <Box>
                              <Typography
                                sx={{
                                  fontSize: 18,
                                  lineHeihgt: "28px",
                                  fontWeight: "700",
                                }}
                              >
                                {item.title}
                              </Typography>
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
                                    <>
                                      {/* <span className="ratio">30%</span> */}
                                      {setKoNumber(3204000)}
                                      <span className="won">회</span>
                                    </>
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
                                    예상 가격
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
                                    <>
                                      <span className="ratio">30%</span>
                                      {comma(24000000)}
                                      <span className="won">원</span>
                                    </>
                                  </Typography>
                                </Box>
                              </Stack>
                            </Box>
                          </Stack>
                          <Box
                            sx={{
                              flex: 1,
                              overflow: "auto",
                            }}
                          >
                            {item.mixs.map((item, index) => (
                              <Box
                                sx={{
                                  p: 2,
                                }}
                              >
                                <Box
                                  sx={{
                                    borderRadius: 1,
                                    border: `1px solid ${blueGrey[100]}`,
                                    p: 2,
                                  }}
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
                                          border: `1px solid ${blueGrey[100]} !important`,
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
                                      </Box>
                                    </Box>
                                  </Box>
                                  <Typo
                                    lines={1}
                                    sx={{
                                      mt: 1,
                                      fontSize: 16,
                                      lineHeight: "24px",
                                      fontWeight: "700",
                                      wordBreak: "break-all",
                                    }}
                                  >
                                    {index}. {item.title}
                                  </Typo>
                                  <Typo
                                    lines={3}
                                    sx={{
                                      mt: 1,
                                      fontSize: 14,
                                      lineHeight: "20px",
                                      wordBreak: "break-all",
                                    }}
                                  >
                                    {item.description}
                                  </Typo>
                                  <Stack spacing={1} sx={{ mt: 2 }}>
                                    <Box
                                      sx={{
                                        display: "flex",
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          width: 64,
                                        }}
                                      >
                                        컨텐츠 장르
                                      </Typography>
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          fontWeight: "700",
                                        }}
                                      >
                                        {item.genre}
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        display: "flex",
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          width: 64,
                                        }}
                                      >
                                        광고 형식
                                      </Typography>
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          fontWeight: "700",
                                        }}
                                      >
                                        {item.type}
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        display: "flex",
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          width: 64,
                                        }}
                                      >
                                        게시 예정일
                                      </Typography>
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          fontWeight: "700",
                                        }}
                                      >
                                        {item.date}
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        display: "flex",
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          width: 64,
                                        }}
                                      >
                                        예상 조회수
                                      </Typography>
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          fontWeight: "700",
                                          color: youhaBlue[500],
                                        }}
                                      >
                                        {comma(item.viewCount)}회
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        display: "flex",
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          width: 64,
                                        }}
                                      >
                                        기본 단가
                                      </Typography>
                                      <Typography
                                        sx={{
                                          fontSize: 12,
                                          lineHeight: "16px",
                                          fontWeight: "700",
                                          color: youhaBlue[500],
                                        }}
                                      >
                                        {comma(item.price)}원
                                      </Typography>
                                    </Box>
                                  </Stack>
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                  <Button
                    color="primary"
                    fullWidth
                    sx={{
                      minHeight: 48,
                      height: 48,
                      boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
                    }}
                    disabled={check === null}
                    onClick={handleClickConfirm}
                  >
                    <Icon
                      name="check"
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
                      광고 제안하기
                    </Typography>
                  </Button>
                </Stack>
              </Box>
            </SwipeableViews>
          </Box>
        </Box>
      </Paper>
    </Dialog>
  );
}
