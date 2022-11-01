import {
  Box,
  Button,
  ButtonBase,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { mainTabWidth } from "../../../constants";
import { testCreators, testPlans } from "../../../datas";
import {
  alertDialogState,
  campaignDrawerState,
  creatorPlanDrawerState,
  creatorPopupState,
  estimateInputDialogState,
  planPopupState,
} from "../../../recoil";
import { theme } from "../../../themes/theme";
import Icon from "../../atoms/Icon";
import CreatorItem from "../../molecules/CreatorItem";
import PlanItem from "../../molecules/PlanItem";
export default function CreatorPlanDrawer() {
  const router = useRouter();
  const campaignDrawer = useRecoilValue(campaignDrawerState);
  const [creatorPlanDrawer, setCreatorPlanDrawer] = useRecoilState(
    creatorPlanDrawerState
  );
  const { open, selectedCreatorIds, selectedPlanIds } = creatorPlanDrawer;
  const creators = testCreators;
  const plans = testPlans;
  const setAlertDialog = useSetRecoilState(alertDialogState);
  const setCreatorPopup = useSetRecoilState(creatorPopupState);
  const setPlanPopup = useSetRecoilState(planPopupState);
  const [estimateInputDialog, setEstimateInputDialog] = useRecoilState(
    estimateInputDialogState
  );
  useEffect(() => {
    handleClose();
  }, [router]);
  const handleClose = () => {
    setCreatorPlanDrawer((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleClickNewCreator = () => {
    setCreatorPopup((prev) => {
      return {
        ...prev,
        open: true,
      };
    });
  };
  const handleClickNewPlan = () => {
    setPlanPopup((prev) => {
      return {
        ...prev,
        open: true,
      };
    });
  };
  const handleClickResetCreator = () => {
    setCreatorPlanDrawer((prev) => {
      return {
        ...prev,
        selectedCreatorIds: [],
      };
    });
  };
  const handleClickResetPlan = () => {
    setCreatorPlanDrawer((prev) => {
      return {
        ...prev,
        selectedPlanIds: [],
      };
    });
  };
  const handleClickConfirm = (mix: boolean) => {
    setEstimateInputDialog((prev) => {
      return {
        ...prev,
        open: true,
        mix: mix,
      };
    });
  };
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 24,
          left: (mainTabWidth + 24) * 2 + 24,
          width: mainTabWidth * 2 + 24,
          transform: open ? 0 : `translateY(-100px)`,
          "@media(min-width: 1600px)": {
            left: `calc((100vw - 1600px) / 2 + ${
              (mainTabWidth + 24) * 2 + 24
            }px)`,
          },
          borderRadius: 1,
          backgroundColor: "#ffffff",
          zIndex: 99997,
          transition: `transform 0.35s ease`,
          overflow: "hidden",
          display: "none",
          flexDirection: "column",
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
            크리에이터 / 기획안 선택
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
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 24,
          bottom: 200 + 24,
          left: (mainTabWidth + 24) * 2 + 24,
          width: mainTabWidth,
          transform:
            !campaignDrawer.open && !open
              ? `translateX(-${(mainTabWidth + 24) * 2}px)`
              : open
              ? 0
              : `translateX(-${mainTabWidth + 24}px)`,
          "@media(min-width: 1600px)": {
            left: `calc((100vw - 1600px) / 2 + ${
              (mainTabWidth + 24) * 2 + 24
            }px)`,
          },
          borderRadius: 1,
          backgroundColor: "#ffffff",
          zIndex: 99997,
          transition: `transform 0.35s ease, width 0.35s ease`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
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
              },
            }}
          >
            크리에이터 선택{" "}
            {selectedCreatorIds.length > 0 && (
              <span>{selectedCreatorIds.length}</span>
            )}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            p: theme.spacing(0, 2, 20, 2),
            overflow: "auto",
          }}
        >
          <Stack spacing={1} sx={{ p: theme.spacing(0, 1, 1, 1) }}>
            {_.filter(
              creators,
              (creatorsEl) =>
                _.findIndex(
                  selectedCreatorIds,
                  (el) => el === creatorsEl.id
                ) !== -1
            ).map((item, index) => (
              <CreatorItem key={index} item={item} checkMode />
            ))}
            {selectedCreatorIds.length === 0 && (
              <ButtonBase
                sx={{
                  border: `1px dash\ed ${blueGrey[100]}`,
                  p: 2,
                  borderRadius: 1,
                  flexDirection: "column",
                  height: 108,
                  " *": {
                    textAlign: "center",
                  },
                }}
                onClick={handleClickNewCreator}
              >
                <Icon
                  prefix="fas"
                  name="plus"
                  size={24}
                  color={blueGrey[300]}
                  padding={6}
                />
                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: blueGrey[300],
                    fontWeight: "700",
                  }}
                >
                  크리에이터 등록하기
                </Typography>
              </ButtonBase>
            )}
          </Stack>
        </Box>
        {selectedCreatorIds.length > 0 && (
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
            <Button
              color="secondary"
              fullWidth
              sx={{
                minHeight: 48,
                height: 48,
                backgroundColor: blueGrey[100],
              }}
              onClick={handleClickResetCreator}
            >
              <Icon
                name="undo"
                size={16}
                prefix="fas"
                sx={{
                  color: blueGrey[700],
                  mr: 0.5,
                }}
              />
              <Typography
                sx={{
                  fontSize: 16,
                  lineHeight: "24px",
                  fontWeight: "700",
                  color: blueGrey[700],
                }}
              >
                선택 초기화
              </Typography>
            </Button>
            <Button
              color="primary"
              fullWidth
              sx={{
                minHeight: 48,
                height: 48,
              }}
              onClick={handleClickNewCreator}
            >
              <Icon
                name="plus"
                size={16}
                prefix="fas"
                sx={{
                  mr: 0.5,
                  color: "#ffffff",
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
                추가 선택하기
              </Typography>
            </Button>
          </Stack>
        )}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 24,
          bottom: 200 + 24,
          left: (mainTabWidth + 24) * 3 + 24,
          width: mainTabWidth,
          transform:
            !campaignDrawer.open && !open
              ? `translateX(-${(mainTabWidth + 24) * 3}px)`
              : open
              ? 0
              : `translateX(-${(mainTabWidth + 24) * 2}px)`,
          "@media(min-width: 1600px)": {
            left: `calc((100vw - 1600px) / 2 + ${
              (mainTabWidth + 24) * 3 + 24
            }px)`,
          },
          borderRadius: 1,
          backgroundColor: "#ffffff",
          zIndex: 99990,
          transition: `transform 0.35s ease, width 0.35s ease`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
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
              },
            }}
          >
            기획안 선택{" "}
            {selectedPlanIds.length > 0 && (
              <span>{selectedPlanIds.length}</span>
            )}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            p: theme.spacing(0, 2, 20, 2),
            overflow: "auto",
          }}
        >
          <Stack spacing={1} sx={{ p: theme.spacing(0, 1, 1, 1) }}>
            {_.filter(
              plans,
              (plansEl) =>
                _.findIndex(selectedPlanIds, (el) => el === plansEl.id) !== -1
            ).map((item, index) => (
              <PlanItem key={index} item={item} checkMode />
            ))}
            {selectedPlanIds.length === 0 && (
              <ButtonBase
                sx={{
                  border: `1px dash\ed ${blueGrey[100]}`,
                  p: 2,
                  borderRadius: 1,
                  flexDirection: "column",
                  height: 108,
                  " *": {
                    textAlign: "center",
                  },
                }}
                onClick={handleClickNewPlan}
              >
                <Icon
                  prefix="fas"
                  name="plus"
                  size={24}
                  color={blueGrey[300]}
                  padding={6}
                />
                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: blueGrey[300],
                    fontWeight: "700",
                  }}
                >
                  기획안 등록하기
                </Typography>
              </ButtonBase>
            )}
          </Stack>
        </Box>
        {selectedPlanIds.length > 0 && (
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
            <Button
              color="secondary"
              fullWidth
              sx={{
                minHeight: 48,
                height: 48,
                backgroundColor: blueGrey[100],
              }}
              onClick={handleClickResetPlan}
            >
              <Icon
                name="undo"
                size={16}
                prefix="fas"
                sx={{
                  color: blueGrey[700],
                  mr: 0.5,
                }}
              />
              <Typography
                sx={{
                  fontSize: 16,
                  lineHeight: "24px",
                  fontWeight: "700",
                  color: blueGrey[700],
                }}
              >
                선택 초기화
              </Typography>
            </Button>
            <Button
              color="primary"
              fullWidth
              sx={{
                minHeight: 48,
                height: 48,
              }}
              onClick={handleClickNewPlan}
            >
              <Icon
                name="plus"
                size={16}
                prefix="fas"
                sx={{
                  mr: 0.5,
                  color: "#ffffff",
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
                추가 선택하기
              </Typography>
            </Button>
          </Stack>
        )}
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          left: (mainTabWidth + 24) * 2 + 24,
          width: mainTabWidth * 2 + 24,
          height: 200,
          "@media(min-width: 1600px)": {
            left: `calc((100vw - 1600px) / 2 + ${
              (mainTabWidth + 24) * 2 + 24
            }px)`,
          },
          zIndex: 99997,
          transition: `opacity 0.35s ease, width 0.35s ease`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          opacity: open ? 1 : 0,
          p: 1,
        }}
      >
        <Stack spacing={1}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                flex: 1,
                fontSize: 14,
                lineHeight: "20px",
                color: "#ffffff",
                mr: 3,
                textAlign: "right",
              }}
            >
              지금 이대로
              <br />
              견적을 받고자 하신다면?
            </Typography>
            <Button
              color="secondary"
              fullWidth
              sx={{
                maxWidth: 300,
                minHeight: 48,
                height: 48,
                backgroundColor: blueGrey[700],
              }}
              onClick={() => handleClickConfirm(false)}
            >
              <Icon
                name="money-check-dollar-pen"
                size={16}
                prefix="fas"
                sx={{
                  mr: 0.5,
                  color: "#ffffff",
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
                견적받기
              </Typography>
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                flex: 1,
                fontSize: 14,
                lineHeight: "20px",
                color: "#ffffff",
                mr: 3,
                textAlign: "right",
              }}
            >
              선택하신 항목 이외에
              <br />
              크리에이터/기획안 추천이 필요하시다면?
            </Typography>
            <Button
              color="primary"
              fullWidth
              sx={{
                maxWidth: 300,
                minHeight: 48,
                height: 48,
              }}
              onClick={() => handleClickConfirm(true)}
            >
              <Icon
                name="rectangle-pro"
                size={16}
                prefix="fas"
                sx={{
                  mr: 0.5,
                  color: "#ffffff",
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
                유하 믹스 견적받기
              </Typography>
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
