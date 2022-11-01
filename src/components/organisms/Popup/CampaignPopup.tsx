import {
  Box,
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import _ from "lodash";
import { ChangeEvent, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  AgeProps,
  ages,
  inputDefaultProps,
  InputProps,
  mainTabWidth,
  SexProps,
  sexs,
  testCategories
} from "../../../constants";
import { testCampaignsState } from "../../../datas";
import { campaignPopupState } from "../../../recoil";
import { theme } from "../../../themes/theme";
import youhaBlue from "../../../themes/youhaBlue";
import Icon from "../../atoms/Icon";
import TextField from "../../atoms/TextField";

export default function CampaignPopup() {
  const titleRef = useRef<any>(null);
  const setTestCampaigns = useSetRecoilState(testCampaignsState);
  const [campaignPopup, setCampaignPopup] = useRecoilState(campaignPopupState);
  const [title, setTitle] = useState<InputProps>(inputDefaultProps);
  const [description, setDescription] = useState<InputProps>(inputDefaultProps);
  const [categories, setCategories] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<InputProps>(inputDefaultProps);
  const [keywords, setKeywords] = useState<InputProps>(inputDefaultProps);
  const [sex, setSex] = useState<SexProps | undefined>(undefined);
  const [age, setAge] = useState<AgeProps | undefined>(undefined);
  const { open } = campaignPopup;
  const handleClose = () => {
    setCampaignPopup((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleClickCancel = () => {
    handleClose();
  };
  const handleClickConfirm = () => {
    handleClose();
    setTestCampaigns((prev) => {
      return [
        ...prev,
        {
          id: prev.length,
          title: title.value,
          description: description.value,
          category: categories[0],
          target: {
            age: age,
            sex: sex,
          },
        },
      ];
    });
    setTitle(inputDefaultProps)
    setDescription(inputDefaultProps)
    setCategories([])
    setKeyword(inputDefaultProps)
    setKeywords(inputDefaultProps)
    setSex(undefined)
    setAge(undefined)
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
          left: mainTabWidth + 24 + 24,
          "@media(min-width: 1600px)": {
            left: `calc((100vw - 1600px) / 2 + ${mainTabWidth + 24 + 24}px)`,
          },
          width: mainTabWidth,
          borderRadius: 1,
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
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
          }}
        >
          신규 캠페인 등록
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
      <Stack
        spacing={2}
        sx={{
          flex: 1,
          p: theme.spacing(0, 3, 20, 3),
          overflow: "auto",
        }}
      >
        <TextField
          inputRef={titleRef}
          // onKeyPress={handleKeyPressCampaignName}
          label="캠페인 제목"
          essential
          input={title}
          setInput={setTitle}
          type="text"
        />
        <TextField
          inputRef={titleRef}
          // onKeyPress={handleKeyPressCampaignName}
          label="캠페인 설명"
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
          label="보조 키워드 (최대 5개)"
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
      </Stack>
      <Box
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
        <Button
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
            위 내용으로 등록하기
          </Typography>
        </Button>
      </Box>
    </Drawer>
  );
}
