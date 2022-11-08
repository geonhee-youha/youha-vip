import { Box, Button, Drawer, Paper, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import _ from "lodash";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ages, sexs, testCategories } from "../../../constants";
import {
  campaignDefaultProps,
  CampaignProps,
  testCampaignsState,
} from "../../../datas";
import { campaignPopupState } from "../../../recoil";
import { theme } from "../../../themes/theme";
import youhaBlue from "../../../themes/youhaBlue";
import Icon from "../../atoms/Icon";
import Textfield from "../../atoms/Textfield";
import PaperHeader from "../../molecules/PaperHeader";

export default function CampaignPopup() {
  const titleRef = useRef<any>(null);
  const descriptionRef = useRef<any>(null);
  const categoryRef = useRef<any>(null);
  const keywordRef = useRef<any>(null);
  const sexRef = useRef<any>(null);
  const ageRef = useRef<any>(null);
  const [testCampaigns, setTestCampaigns] = useRecoilState(testCampaignsState);
  const [campaignPopup, setCampaignPopup] = useRecoilState(campaignPopupState);
  const { id, open, mode, campaignId } = campaignPopup;
  const [input, setInput] = useState<CampaignProps>(campaignDefaultProps);
  const confirmable =
    input.title !== "" &&
    input.description !== "" &&
    input.categories.length > 0 &&
    input.keyword !== "" &&
    input.target?.sex !== undefined &&
    input.target?.ages !== undefined &&
    input.target?.ages.length > 0;
  const title =
    mode === "add"
      ? "신규 캠페인 등록"
      : mode === "edit"
      ? "캠페인 수정"
      : "캠페인 정보";
  const buttonTitle =
    mode === "add"
      ? "위 내용으로 등록하기"
      : mode === "edit"
      ? "위 내용으로 수정하기"
      : "캠페인 수정하기";
  const disabled = mode === undefined;
  useEffect(() => {
    if (open && mode !== "add" && campaignId !== undefined && input.id === 0)
      setInput(
        testCampaigns[_.findIndex(testCampaigns, (el) => el.id === campaignId)]
      );
    if (!open) setInput(campaignDefaultProps);
  }, [open]);
  const handleClose = () => {
    setCampaignPopup((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput((prev) => {
      return {
        ...prev,
        title: value,
      };
    });
  };
  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput((prev) => {
      return {
        ...prev,
        description: value,
      };
    });
  };
  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput((prev) => {
      return {
        ...prev,
        keyword: value,
      };
    });
  };
  const handleResetTitle = () => {
    setInput((prev) => {
      return {
        ...prev,
        title: "",
      };
    });
  };
  const handleResetKeyword = () => {
    setInput((prev) => {
      return {
        ...prev,
        keyword: "",
      };
    });
  };
  const handleKeyPressTitle = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      titleRef.current.blur();
      descriptionRef.current.focus();
    }
  };
  const handleKeyPressKeyword = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      keywordRef.current.blur();
      sexRef.current.focus();
    }
  };
  const handleKeyPressDescription = () => {};
  const handleClickConfirm = () => {
    if (mode === undefined) {
      setCampaignPopup((prev) => {
        return {
          ...prev,
          mode: "edit",
        };
      });
    } else if (mode === "edit") {
      setTestCampaigns((prev) => {
        let prevList = _.cloneDeep(prev);
        prevList[_.findIndex(prevList, (el) => el.id === campaignId)] = input;
        return prevList;
      });
      setCampaignPopup((prev) => {
        return {
          ...prev,
          mode: undefined,
        };
      });
    } else {
      handleClose();
      setTestCampaigns((prev) => {
        return [
          ...prev,
          {
            ...input,
            id: prev.length + 1,
          },
        ];
      });
    }
  };
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDrawer-paper": {
          position: "absolute",
          top: 24,
          bottom: 24,
          left: 376 + 16 + 24,
          "@media(min-width: 1600px)": {
            left: `calc((100vw - 1600px) / 2 + ${376 + 16 + 24}px)`,
          },
          width: 376,
          backgroundColor: "transparent !important",
          boxShadow: "none !important",
        },
        position: "fixed",
        zIndex: 99999,
        right: 0,
        overflow: "auto",
      }}
      ModalProps={{
        container:
          typeof document !== "undefined"
            ? document.querySelector("#_next")
            : null,
        keepMounted: true,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
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
          <PaperHeader id={id} title={title} onClose={handleClose} />
          <Stack
            spacing={3}
            sx={{
              p: theme.spacing(0, 3, 2 + 16, 3),
            }}
          >
            <Textfield
              inputRef={titleRef}
              onKeyPress={handleKeyPressTitle}
              label="캠페인 제목"
              essential
              value={input.title}
              onChange={handleChangeTitle}
              onReset={handleResetTitle}
              type="text"
              disabled={disabled}
            />
            <Textfield
              inputRef={descriptionRef}
              onKeyPress={handleKeyPressDescription}
              label="캠페인 설명"
              essential
              value={input.description}
              onChange={handleChangeDescription}
              type="text"
              multiline
              minRows={3}
              disabled={disabled}
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
                    if (disabled) return;
                    setInput((prev) => {
                      let prevCategories = _.cloneDeep(prev.categories);
                      if (prevCategories.includes(item)) {
                        prevCategories = _.filter(
                          prevCategories,
                          (el) => el !== item
                        );
                      } else {
                        prevCategories = [...prevCategories, item];
                      }
                      return { ...prev, categories: prevCategories };
                    });
                  };
                  return (
                    <Button
                      key={index}
                      ref={index === 0 ? categoryRef : null}
                      variant="outlined"
                      color={checked ? "primary" : "secondary"}
                      sx={{
                        display: !checked && disabled ? "none" : "inline-flex",
                        p: theme.spacing(0, 1.25),
                        height: 32,
                        minHeight: 32,
                        border: `1px solid ${
                          checked ? youhaBlue[500] : blueGrey[100]
                        } !important`,
                        boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, ${
                          checked && disabled ? `0` : `0.08`
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
            <Textfield
              inputRef={keywordRef}
              onKeyPress={handleKeyPressKeyword}
              label="핵심 키워드 (1개)"
              value={input.keyword}
              onChange={handleChangeKeyword}
              onReset={handleResetKeyword}
              type="text"
              disabled={disabled}
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
                타겟 성별
                <span>*</span>
              </Typography>
              <Stack direction="row" spacing={0.5} sx={{ mt: 1 }}>
                {sexs.map((item, index) => {
                  const checked = input.target.sex === item;
                  const handleClick = () => {
                    if (disabled) return;
                    setInput((prev) => {
                      return {
                        ...prev,
                        target: {
                          ...prev.target,
                          sex: prev.target.sex === item ? undefined : item,
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
                        display: !checked && disabled ? "none" : "inline-flex",
                        p: theme.spacing(0, 1.25),
                        height: 32,
                        minHeight: 32,
                        border: `1px solid ${
                          checked ? youhaBlue[500] : blueGrey[100]
                        } !important`,
                        boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, ${
                          checked && disabled ? `0` : `0.08`
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
                    if (disabled) return;
                    setInput((prev) => {
                      let prevList: any = _.cloneDeep(prev.target.ages);
                      if (prevList.includes(item)) {
                        prevList = _.filter(prevList, (el) => el !== item);
                      } else {
                        prevList = [...prevList, item];
                      }
                      return {
                        ...prev,
                        target: {
                          ...prev.target,
                          ages: prevList,
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
                        display: !checked && disabled ? "none" : "inline-flex",
                        p: theme.spacing(0, 1.25),
                        height: 32,
                        minHeight: 32,
                        border: `1px solid ${
                          checked ? youhaBlue[500] : blueGrey[100]
                        } !important`,
                        boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, ${
                          checked && disabled ? `0` : `0.08`
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
          </Stack>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            p: theme.spacing(2, 3),
            zIndex: 98,
            backgroundColor: "#ffffff",
            boxShadow: `4px 4px 8px 4px rgba(0, 0, 0, 0.08)`,
          }}
        >
          <Button
            color={mode !== undefined ? "primary" : "secondary"}
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
              name={mode === "add" ? "layer-plus" : "pen"}
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
              {buttonTitle}
            </Typography>
          </Button>
        </Box>
      </Paper>
    </Drawer>
  );
}
