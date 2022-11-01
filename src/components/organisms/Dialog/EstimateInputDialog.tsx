import {
  Box,
  Button,
  ButtonBase,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import _ from "lodash";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  AgeProps,
  ages,
  inputDefaultProps,
  InputProps,
  mainTabWidth,
  SexProps,
  sexs,
  testCategories,
} from "../../../constants";
import { testCampaigns, testCreators, testPlans } from "../../../datas";
import {
  campaignDrawerState,
  creatorPlanDrawerState,
  estimateInputDialogState,
} from "../../../recoil";
import { theme } from "../../../themes/theme";
import youhaBlue from "../../../themes/youhaBlue";
import Icon from "../../atoms/Icon";
import TextField from "../../atoms/TextField";
import CampaignItem from "../../molecules/CampaignItem";
import CreatorItem from "../../molecules/CreatorItem";
import PlanItem from "../../molecules/PlanItem";

export default function EstimateInputDialog() {
  const [campaignDrawer, setCampaignDrawer] =
    useRecoilState(campaignDrawerState);
  const [estimateInputDialog, setEstimateInputDialog] = useRecoilState(
    estimateInputDialogState
  );
  const [creatorPlanDrawer, setCreatorPlanDrawer] = useRecoilState(
    creatorPlanDrawerState
  );
  const { open, body, cancel, confirm, mix } = estimateInputDialog;
  const { selectedCreatorIds, selectedPlanIds } = creatorPlanDrawer;
  const titleRef = useRef<any>(null);
  const [title, setTitle] = useState<InputProps>(inputDefaultProps);
  const [description, setDescription] = useState<InputProps>(inputDefaultProps);
  const [categories, setCategories] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<InputProps>(inputDefaultProps);
  const [keywords, setKeywords] = useState<InputProps>(inputDefaultProps);
  const [sex, setSex] = useState<SexProps | undefined>(undefined);
  const [age, setAge] = useState<AgeProps | undefined>(undefined);
  const selectedCreators = _.filter(
    testCreators,
    (creatorsEl) =>
      _.findIndex(selectedCreatorIds, (el) => el === creatorsEl.id) !== -1
  );
  const selectedPlans = _.filter(
    testPlans,
    (plansEl) => _.findIndex(selectedPlanIds, (el) => el === plansEl.id) !== -1
  );
  const handleClose = () => {
    setEstimateInputDialog((prev) => {
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
      aria-labelledby="estimateInput-dialog-title"
      aria-describedby="estimateInput-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          width: mainTabWidth * 2 + 24,
          maxWidth: 1000,
          height: "calc((100vh - 48px) * 0.9)",
          maxHeight: "calc((100vh - 48px) * 0.9)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: theme.spacing(2, 2.5, 2, 3),
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            p: theme.spacing(0.5, 0),
            fontSize: 20,
            lineHeight: "32px",
            fontWeight: "700",
            mr: "auto",
            "& span": {
              color: pink[500],
              mr: 0.5,
            },
          }}
        >
          견적 세부사항 입력하기
        </Typography>
        <IconButton
          sx={{
            width: 40,
            height: 40,
            p: theme.spacing(1, 1),
          }}
          onClick={handleClose}
        >
          <Icon name="xmark" prefix="fas" size={20} color={blueGrey[400]} />
        </IconButton>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Stack
            spacing={2}
            sx={{
              height: "100%",
              p: theme.spacing(0, 3, 20, 3),
              overflow: "auto",
            }}
          >
            <Box>
              <Typography
                sx={{
                  pt: 0.5,
                  pb: 0.5,
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: "700",
                  "& span": {
                    color: youhaBlue[500],
                  },
                }}
              >
                캠페인 정보
              </Typography>
              <Box sx={{ mt: 1 }}>
                <CampaignItem
                  item={
                    testCampaigns[
                      _.findIndex(
                        testCampaigns,
                        (el) => el.id === campaignDrawer.selectedId
                      )
                    ]
                  }
                />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  pt: 0.5,
                  pb: 0.5,
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: "700",
                  "& span": {
                    color: youhaBlue[500],
                  },
                }}
              >
                크리에이터 정보
              </Typography>
              <Stack spacing={1} sx={{ mt: 1 }}>
                {selectedCreators.length === 0 ? (
                  <Box
                    sx={{
                      borderRadius: 1,
                      height: 100,
                      border: `1px solid ${blueGrey[50]}`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: "20px",
                        color: blueGrey[300],
                        textAlign: "center",
                      }}
                    >
                      선택하신 크리에이터가 없습니다!
                    </Typography>
                  </Box>
                ) : (
                  selectedCreators.map((item, index) => (
                    <CreatorItem key={index} item={item} checkMode />
                  ))
                )}
              </Stack>
            </Box>
            <Box>
              <Typography
                sx={{
                  pt: 0.5,
                  pb: 0.5,
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: "700",
                  "& span": {
                    color: youhaBlue[500],
                  },
                }}
              >
                기획안 정보
              </Typography>
              <Stack spacing={1} sx={{ mt: 1 }}>
                {selectedPlans.length === 0 ? (
                  <Box
                    sx={{
                      borderRadius: 1,
                      height: 100,
                      border: `1px solid ${blueGrey[50]}`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: "20px",
                        color: blueGrey[300],
                        textAlign: "center",
                      }}
                    >
                      선택하신 기획안이 없습니다!
                    </Typography>
                  </Box>
                ) : (
                  selectedPlans.map((item, index) => (
                    <PlanItem key={index} item={item} checkMode />
                  ))
                )}
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            flex: 1,
            position: "relative",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              height: "100%",
              p: theme.spacing(0, 3, 20, 3),
              overflow: "auto",
            }}
          >
            <TextField
              inputRef={titleRef}
              // onKeyPress={handleKeyPressCampaignName}
              label="총 예산"
              essential
              input={title}
              setInput={setTitle}
              type="text"
            />
            <TextField
              inputRef={titleRef}
              // onKeyPress={handleKeyPressCampaignName}
              label="일정"
              essential
              input={description}
              setInput={setDescription}
              type="text"
            />
            <TextField
              inputRef={titleRef}
              // onKeyPress={handleKeyPressCampaignName}
              label="희망채널 수"
              essential
              input={description}
              setInput={setDescription}
              type="text"
            />
            <TextField
              inputRef={titleRef}
              // onKeyPress={handleKeyPressCampaignName}
              label="광고 목적"
              essential
              input={description}
              setInput={setDescription}
              type="text"
              multiline
              minRows={3}
            />
            <Box>
              <Typography
                sx={{
                  pt: 0.5,
                  pb: 0.5,
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
                  mt: 0.5,
                  mb: -1,
                }}
              >
                {testCategories.map((item, index) => {
                  const checked = categories.includes(item);
                  const handleClick = () => {
                    setCategories((prev) => {
                      let prevCategories = _.cloneDeep(prev);
                      if (prevCategories.includes(item)) {
                        prevCategories = _.filter(
                          prevCategories,
                          (el) => el !== item
                        );
                      } else {
                        prevCategories = [...prevCategories, item];
                      }
                      return prevCategories;
                    });
                  };
                  return (
                    <ButtonBase
                      key={index}
                      sx={{
                        p: theme.spacing(0, 2),
                        height: 32,
                        border: `1px solid ${
                          checked ? youhaBlue[500] : blueGrey[100]
                        }`,
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
                    </ButtonBase>
                  );
                })}
              </Box>
            </Box>
            <TextField
              inputRef={titleRef}
              // onKeyPress={handleKeyPressCampaignName}
              label="핵심 키워드 (1개)"
              input={keyword}
              setInput={setKeyword}
              type="text"
            />
            <TextField
              inputRef={titleRef}
              // onKeyPress={handleKeyPressCampaignName}
              label="셀링포인트"
              input={keywords}
              setInput={setKeywords}
              type="text"
              multiline
              minRows={2}
            />
            <TextField
              inputRef={titleRef}
              // onKeyPress={handleKeyPressCampaignName}
              label="기획 의도"
              input={keywords}
              setInput={setKeywords}
              type="text"
              multiline
              minRows={3}
            />
            <TextField
              inputRef={titleRef}
              // onKeyPress={handleKeyPressCampaignName}
              label="기타 요청사항"
              input={keywords}
              setInput={setKeywords}
              type="text"
              multiline
              minRows={2}
            />
            <Box>
              <Typography
                sx={{
                  pt: 0.5,
                  pb: 0.5,
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
              <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                {sexs.map((item, index) => {
                  const checked = sex === item;
                  const handleClick = () => {
                    setSex(item);
                  };
                  return (
                    <ButtonBase
                      key={index}
                      sx={{
                        flex: 1,
                        p: theme.spacing(0, 2),
                        height: 40,
                        border: `1px solid ${
                          checked ? youhaBlue[500] : blueGrey[100]
                        }`,
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
                    </ButtonBase>
                  );
                })}
              </Stack>
            </Box>
            <Box>
              <Typography
                sx={{
                  pt: 0.5,
                  pb: 0.5,
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: "700",
                  "& span": {
                    color: youhaBlue[500],
                  },
                }}
              >
                타겟 연령대
                <span>*</span>
              </Typography>
              <Stack spacing={1} sx={{ mt: 0.5 }}>
                {ages.map((item, index) => {
                  const checked = age === item;
                  const handleClick = () => {
                    setAge(item);
                  };
                  return (
                    <ButtonBase
                      key={index}
                      sx={{
                        p: theme.spacing(0, 2),
                        height: 40,
                        border: `1px solid ${
                          checked ? youhaBlue[500] : blueGrey[100]
                        }`,
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
                    </ButtonBase>
                  );
                })}
              </Stack>
            </Box>
            <Box>
              <Typography
                sx={{
                  pt: 0.5,
                  pb: 0.5,
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: "700",
                  "& span": {
                    color: youhaBlue[500],
                  },
                }}
              >
                첨부파일
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  sx={{
                    minHeight: 40,
                    height: 40,
                  }}
                  onClick={handleClickConfirm}
                >
                  <Icon
                    name="upload"
                    size={14}
                    color={blueGrey[900]}
                    prefix="fas"
                    sx={{
                      mr: 0.5,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: "20px",
                      fontWeight: "700",
                      color: blueGrey[900],
                    }}
                  >
                    파일 첨부하기
                  </Typography>
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          p: theme.spacing(3),
          zIndex: 99,
          background: `linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1), 
rgba(255,255,255,1),
rgba(255,255,255,1),
rgba(255,255,255,1))`,
        }}
      >
        {/* <Button
          color="secondary"
          fullWidth
          sx={{
            minHeight: 48,
            height: 48,
          }}
          onClick={handleClickConfirm}
        >
          <Icon
            name="wand-magic-sparkles"
            size={16}
            color="#ffffff"
            prefix="fas"
            sx={{
              mr: 0.5,
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
            견적 내용 저장하기
          </Typography>
        </Button> */}
        <Button
          color={mix ? "primary" : "secondary"}
          fullWidth
          sx={{
            minHeight: 48,
            height: 48,
          }}
          onClick={handleClickConfirm}
        >
          <Icon
            name="wand-magic-sparkles"
            size={16}
            color="#ffffff"
            prefix="fas"
            sx={{
              mr: 0.5,
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
            {mix ? "유하 믹스 " : "최종 "}견적 요청하기
          </Typography>
        </Button>
      </Stack>
    </Dialog>
  );
}
