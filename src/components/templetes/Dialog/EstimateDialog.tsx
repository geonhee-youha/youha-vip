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
import { estimateDialogTabs, videoFilters, videoSorts } from "../../../constants";
import {
  favoritedCreatorIdsState,
  testCampaignsState,
  testCreators,
  testEstimates,
  testPlaylists,
  testVideos,
} from "../../../datas";
import { creatorDialogState, estimateDialogState } from "../../../recoil";
import { theme } from "../../../themes/theme";
import { setKoNumber } from "../../../utils";
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

export default function EstimateDialog() {
  const [estimateDialog, setEstimateDialog] =
    useRecoilState(estimateDialogState);
  const { queryName, open, id } = estimateDialog;
  return id !== "" ? <Inner /> : null;
}
function Inner() {
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
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onBackdropClick={handleClose}
      aria-labelledby="estimate-dialog-title"
      aria-describedby="estimate-dialog-description"
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
            }}
          >
            <Box sx={{ flex: 1, overflow: "auto" }}>
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
            <Box sx={{ flex: 1, overflow: "auto" }}>
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
                <InputRow label="광고 일정" value={input.duration} essential />
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
                              color: checked ? youhaBlue[500] : blueGrey[300],
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
                              color: checked ? youhaBlue[500] : blueGrey[300],
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
                              color: checked ? youhaBlue[500] : blueGrey[300],
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
                <InputRow label="첨부파일" value={"유하용_제안서_최종.pdf"} />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Dialog>
  );
}
