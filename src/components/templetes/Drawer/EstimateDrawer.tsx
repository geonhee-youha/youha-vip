import {
  alpha,
  Box,
  Button,
  ButtonBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import _ from "lodash";
import { useRouter } from "next/router";
import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ages, sexs, testCategories, testPurposies } from "../../../constants";
import { testCampaigns, testCreators } from "../../../datas";
import {
  campaignDrawerState,
  creatorDrawerState,
  estimateDialogState,
  estimateDrawerState,
  estimateInputDefaultProps,
  estimateInputDialogState,
  EstimateInputProps,
} from "../../../recoil";
import { theme } from "../../../themes/theme";
import youhaBlue from "../../../themes/youhaBlue";
import { setKoNumber } from "../../../utils";
import Icon from "../../atoms/Icon";
import Textfield from "../../atoms/Textfield";
import PaperHeader from "../../molecules/PaperHeader";

export default function EstimateDrawer() {
  const router = useRouter();
  const budgetRef = useRef<any>(null);
  const durationRef = useRef<any>(null);
  const purposeRef = useRef<any>(null);
  const categoryRef = useRef<any>(null);
  const ageRef = useRef<any>(null);
  const sexRef = useRef<any>(null);
  const channelCountRef = useRef<any>(null);
  const keywordRef = useRef<any>(null);
  const sellingPointRef = useRef<any>(null);
  const descriptionRef = useRef<any>(null);
  const requestRef = useRef<any>(null);
  const fileRef = useRef<any>(null);
  const campaignDrawer = useRecoilValue(campaignDrawerState);
  const creatorDrawer = useRecoilValue(creatorDrawerState);
  const [estimateDrawer, setEstimateDrawer] =
    useRecoilState(estimateDrawerState);
  const setEstimateDialog = useSetRecoilState(estimateDialogState);
  const { id, open, mix, input } = estimateDrawer;
  console.log(estimateDrawer);
  
  const confirmable =
    input.budget !== "" &&
    input.duration !== "" &&
    input.purposies.length > 0 &&
    (mix === false ||
      (mix &&
        input.categories.length > 0 &&
        input.channelCount !== "" &&
        input.target.sex !== undefined &&
        input.target.ages &&
        input.target.ages.length > 0));
  useEffect(() => {
    handleClose();
  }, [router]);
  const handleClose = () => {
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        open: false,
        mix: undefined,
      };
    });
  };
  const handleChangeBudget = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          budget: value.length > 12 ? prev.input.budget : value,
        },
      };
    });
  };
  const handleResetBudget = () => {
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          budget: "",
        },
      };
    });
  };
  const handleKeyPressBudget = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      budgetRef.current.blur();
      durationRef.current.focus();
    }
  };
  const handleChangeDuration = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          duration: value,
        },
      };
    });
  };
  const handleResetDuration = () => {
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          duration: "",
        },
      };
    });
  };
  const handleKeyPressDuration = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      durationRef.current.blur();
      purposeRef.current.focus();
    }
  };
  const handleChangeChannelCount = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          channelCount: value,
        },
      };
    });
  };
  const handleResetChannelCount = () => {
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          channelCount: "",
        },
      };
    });
  };
  const handleKeyPressChannelCount = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key == "Enter") {
      channelCountRef.current.blur();
      keywordRef.current.focus();
    }
  };
  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          keyword: value,
        },
      };
    });
  };
  const handleResetKeyword = () => {
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          keyword: "",
        },
      };
    });
  };
  const handleKeyPressKeyword = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      keywordRef.current.blur();
      sellingPointRef.current.focus();
    }
  };
  const handleChangeSellingPoint = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          sellingPoint: value,
        },
      };
    });
  };
  const handleResetSellingPoint = () => {
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          sellingPoint: "",
        },
      };
    });
  };
  const handleKeyPressSellingPoint = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key == "Enter") {
      sellingPointRef.current.blur();
      descriptionRef.current.focus();
    }
  };
  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          description: value,
        },
      };
    });
  };
  const handleResetDescription = () => {
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          description: "",
        },
      };
    });
  };
  const handleKeyPressDescription = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key == "Enter") {
      descriptionRef.current.blur();
      requestRef.current.focus();
    }
  };
  const handleChangeRequest = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          request: value,
        },
      };
    });
  };
  const handleResetRequest = () => {
    setEstimateDrawer((prev) => {
      return {
        ...prev,
        input: {
          ...input,
          request: "",
        },
      };
    });
  };
  const handleKeyPressRequest = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      requestRef.current.blur();
      fileRef.current.focus();
    }
  };
  const handleClickConfirm = () => {
    setEstimateDialog((prev) => {
      return {
        ...prev,
        open: true,
        temp: true,
        campaign: testCampaigns[campaignDrawer.selectedCampaignIds[0]],
        creators: creatorDrawer.pass
          ? []
          : _.filter(testCreators, (el) =>
              creatorDrawer.selectedCreatorIds.includes(el.id)
            ),
        input: input,
        mix: mix,
      };
    });
  };
  return (
    <Box
      sx={{
        position: "absolute",
        top: 24,
        bottom: 24,
        left: open ? (376 + 16) * 3 + 24 : 24,
        zIndex: 99996,
        width: 376,
        transition: `left 0.35s ease, opacity 0.35s ease`,
        opacity: open ? 1 : 0,
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
            overflow: "auto",
          }}
          className={`PaperTarget-${id}`}
        >
          <PaperHeader id={id} title="상세정보 작성" onClose={handleClose} />
          <Stack
            spacing={3}
            sx={{
              p: theme.spacing(0, 3, 2 + 16, 3),
            }}
          >
            <Textfield
              inputRef={budgetRef}
              onKeyPress={handleKeyPressBudget}
              label="총 예산"
              placeholder="총 예산금액을 입력해 주세요."
              essential
              value={input.budget}
              onChange={handleChangeBudget}
              onReset={handleResetBudget}
              type="number"
              helperText={
                input.budget === ""
                  ? " "
                  : `${setKoNumber(Number(input.budget))}원`
              }
            />
            <Textfield
              inputRef={durationRef}
              onKeyPress={handleKeyPressDuration}
              label="광고 일정"
              placeholder="ex) 2022.11.31 ~ 2022.12.31"
              essential
              value={input.duration}
              onChange={handleChangeDuration}
              onReset={handleResetDuration}
              type="text"
            />
            <Box>
              <Typography
                sx={{
                  mb: 0.5,
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: "700",
                  "& span": {
                    color: youhaBlue[500],
                  },
                }}
              >
                광고 목적 (최소 1개)
                <span>*</span>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  mt: 1,
                  mb: -1,
                }}
              >
                {testPurposies.map((item, index) => {
                  const checked = input.purposies.includes(item);
                  const handleClick = () => {
                    setEstimateDrawer((prev) => {
                      let prevList = _.cloneDeep(prev.input.purposies);
                      if (prevList.includes(item)) {
                        prevList = _.filter(prevList, (el) => el !== item);
                      } else {
                        prevList = [...prevList, item];
                      }
                      return {
                        ...prev,
                        input: {
                          ...prev.input,
                          purposies: prevList,
                        },
                      };
                    });
                  };
                  return (
                    <Button
                      key={index}
                      ref={index === 0 ? categoryRef : null}
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
                      onClick={handleClick}
                    >
                      <Typography
                        sx={{
                          fontSize: 14,
                          lineHeight: "20px",
                          fontWeight: "700",
                          color: checked ? youhaBlue[500] : blueGrey[300],
                        }}
                      >
                        {item}
                      </Typography>
                    </Button>
                  );
                })}
              </Box>
            </Box>
            {mix && (
              <>
                <Box>
                  <Typography
                    sx={{
                      mb: 0.5,
                      fontSize: 14,
                      lineHeight: "20px",
                      fontWeight: "700",
                      "& span": {
                        color: youhaBlue[500],
                      },
                    }}
                  >
                    카테고리 (최소 1개)
                    <span>*</span>
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      mt: 1,
                      mb: -1,
                    }}
                  >
                    {testCategories.map((item, index) => {
                      const checked = input.categories.includes(item);
                      const handleClick = () => {
                        setEstimateDrawer((prev) => {
                          let prevList = _.cloneDeep(prev.input.categories);
                          if (prevList.includes(item)) {
                            prevList = _.filter(prevList, (el) => el !== item);
                          } else {
                            prevList = [...prevList, item];
                          }
                          return {
                            ...prev,
                            input: {
                              ...prev.input,
                              categories: prevList,
                            },
                          };
                        });
                      };
                      return (
                        <Button
                          key={index}
                          ref={index === 0 ? categoryRef : null}
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
                          onClick={handleClick}
                        >
                          <Typography
                            sx={{
                              fontSize: 14,
                              lineHeight: "20px",
                              fontWeight: "700",
                              color: checked ? youhaBlue[500] : blueGrey[300],
                            }}
                          >
                            {item}
                          </Typography>
                        </Button>
                      );
                    })}
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      mb: 0.5,
                      fontSize: 14,
                      lineHeight: "20px",
                      fontWeight: "700",
                      "& span": {
                        color: youhaBlue[500],
                      },
                    }}
                  >
                    타겟 성별
                    <span>*</span>
                  </Typography>
                  <Stack direction="row" spacing={0.5} sx={{ mt: 1 }}>
                    {sexs.map((item, index) => {
                      const checked = input.target.sex === item;
                      const handleClick = () => {
                        setEstimateDrawer((prev) => {
                          return {
                            ...prev,
                            input: {
                              ...prev.input,
                              target: {
                                ...prev.input.target,
                                sex:
                                  prev.input.target.sex === item
                                    ? undefined
                                    : item,
                              },
                            },
                          };
                        });
                      };
                      return (
                        <Button
                          key={index}
                          ref={index === 0 ? sexRef : null}
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
                          }}
                          onClick={handleClick}
                        >
                          <Typography
                            sx={{
                              fontSize: 14,
                              lineHeight: "20px",
                              fontWeight: "700",
                              color: checked ? youhaBlue[500] : blueGrey[300],
                            }}
                          >
                            {item}
                          </Typography>
                        </Button>
                      );
                    })}
                  </Stack>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      mb: 0.5,
                      fontSize: 14,
                      lineHeight: "20px",
                      fontWeight: "700",
                      "& span": {
                        color: youhaBlue[500],
                      },
                    }}
                  >
                    타겟 연령대 (중복 가능)
                    <span>*</span>
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={0.5}
                    sx={{
                      mt: 1,
                    }}
                  >
                    {ages.map((item, index) => {
                      const checked =
                        input.target.ages && input.target.ages.includes(item);
                      const handleClick = () => {
                        setEstimateDrawer((prev) => {
                          let prevList: any = _.cloneDeep(
                            prev.input.target.ages
                          );
                          if (prevList.includes(item)) {
                            prevList = _.filter(prevList, (el) => el !== item);
                          } else {
                            prevList = [...prevList, item];
                          }
                          return {
                            ...prev,
                            input: {
                              ...prev.input,
                              target: {
                                ...prev.input.target,
                                ages: prevList,
                              },
                            },
                          };
                        });
                      };
                      return (
                        <Button
                          key={index}
                          ref={index === 0 ? ageRef : null}
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
                          }}
                          onClick={handleClick}
                        >
                          <Typography
                            sx={{
                              fontSize: 14,
                              lineHeight: "20px",
                              fontWeight: "700",
                              color: checked ? youhaBlue[500] : blueGrey[300],
                            }}
                          >
                            {item}
                          </Typography>
                        </Button>
                      );
                    })}
                  </Stack>
                </Box>
                <Textfield
                  inputRef={channelCountRef}
                  onKeyPress={handleKeyPressChannelCount}
                  label="희망 채널 갯수"
                  placeholder="ex) 3개"
                  essential
                  value={input.channelCount}
                  onChange={handleChangeChannelCount}
                  onReset={handleResetChannelCount}
                  type="text"
                />
              </>
            )}
            <Textfield
              inputRef={keywordRef}
              onKeyPress={handleKeyPressKeyword}
              label="핵심 키워드"
              value={input.keyword}
              onChange={handleChangeKeyword}
              onReset={handleResetKeyword}
              type="text"
            />
            <Textfield
              inputRef={sellingPointRef}
              onKeyPress={handleKeyPressSellingPoint}
              label="셀링 포인트"
              value={input.sellingPoint}
              onChange={handleChangeSellingPoint}
              onReset={handleResetSellingPoint}
              type="text"
              multiline
              minRows={3}
            />
            <Textfield
              inputRef={descriptionRef}
              onKeyPress={handleKeyPressDescription}
              label="광고 기획의도 상세"
              value={input.description}
              onChange={handleChangeDescription}
              onReset={handleResetDescription}
              type="text"
              multiline
              minRows={3}
            />
            <Textfield
              inputRef={requestRef}
              onKeyPress={handleKeyPressRequest}
              label="기타 요청사항"
              value={input.request}
              onChange={handleChangeRequest}
              onReset={handleResetRequest}
              type="text"
              multiline
              minRows={3}
            />
          </Stack>
        </Box>
        {mix === undefined && (
          <Box
            sx={{
              position: "absolute",
              top: 64,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: alpha("#ffffff", 0.6),
              backdropFilter: "blur(2px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        )}
        <Stack
          spacing={1}
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            p: theme.spacing(1, 2),
            zIndex: 98,
            backgroundColor: "#ffffff",
            boxShadow: `4px 4px 8px 4px rgba(0, 0, 0, 0.08)`,
          }}
        >
          <ButtonBase
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              p: 1,
              borderRadius: 1,
            }}
            onClick={() =>
              setEstimateDrawer((prev) => {
                return {
                  ...prev,
                  mix: !prev.mix,
                };
              })
            }
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                backgroundColor: `${
                  mix ? blueGrey[900] : "#ffffff"
                } !important`,
                border: `1px solid ${mix ? blueGrey[900] : blueGrey[100]}`,
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
          <Box sx={{ p: theme.spacing(0, 1, 1, 1) }}>
            <Button
              color="secondary"
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
                name="eye"
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
                최종 견적 내용 미리보기
              </Typography>
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
