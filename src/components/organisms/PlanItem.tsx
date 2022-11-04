import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Box, ButtonBase, IconButton, Stack, Typography } from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import _ from "lodash";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  categoryList,
  checkedPlanIdsState,
  favoritedPlanIdsState,
  testPlans,
} from "../../datas";
import { planDialogState, creatorDrawerState } from "../../recoil";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import { comma, setKoNumber } from "../../utils";
import Icon from "../atoms/Icon";
import Typo from "../atoms/Typo";

export default function PlanItem({
  item,
  small,
  checkMode,
  tempCheck,
}: {
  item: any;
  small?: boolean;
  checkMode?: boolean;
  tempCheck?: boolean;
}) {
  const { id, snippet } = item;
  console.log(item);

  const [creatorDrawer, setPlanPlanDrawer] = useRecoilState(
    creatorDrawerState
  );
  const [planDialog, setPlanDialog] = useRecoilState(planDialogState);
  const [favoritedPlanIds, setFavoritedPlanIds] = useRecoilState(
    favoritedPlanIdsState
  );
  const [checkedPlanIds, setCheckedPlanIds] =
    useRecoilState(checkedPlanIdsState);
  const [open, setOpen] = useState<boolean>(true);
  const targetCheckList = tempCheck
    ? checkedPlanIds
    : creatorDrawer.selectedPlanIds;
  const checked =
    checkMode && _.findIndex(targetCheckList, (el) => el === id) !== -1;
  const favorited = _.findIndex(favoritedPlanIds, (el) => el === id) !== -1;
  const handleClick = () => {
    setPlanDialog((prev) => {
      return {
        ...prev,
        open: true,
      };
    });
  };
  const handleClickCheck = () => {
    if (tempCheck) {
      setCheckedPlanIds((prev) => {
        let prevSelectedIds = _.cloneDeep(prev);
        if (prevSelectedIds.includes(id)) {
          prevSelectedIds = _.filter(prevSelectedIds, (el) => el !== id);
        } else {
          prevSelectedIds = [...prevSelectedIds, id];
        }
        return prevSelectedIds;
      });
      return;
    }
    setPlanPlanDrawer((prev) => {
      let prevSelectedIds = _.cloneDeep(prev.selectedPlanIds);
      if (prevSelectedIds.includes(id)) {
        prevSelectedIds = _.filter(prevSelectedIds, (el) => el !== id);
      } else {
        prevSelectedIds = [...prevSelectedIds, id];
      }
      return {
        ...prev,
        selectedPlanIds: prevSelectedIds,
      };
    });
  };
  const handleClickFavorite = () => {
    setFavoritedPlanIds((prev) => {
      let prevList = _.cloneDeep(prev);
      if (prevList.includes(id)) {
        prevList = _.filter(prevList, (el) => el !== id);
      } else {
        prevList = [...prevList, id];
      }
      return prevList;
    });
  };
  const randomIndex = Math.floor(Math.random() * (8 - 0) + 0);
  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
        position: "relative",
        display: "flex",
        alignSelf: "stretch",
      }}
    >
      <ButtonBase
        sx={{
          flex: 1,
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "flex-start",
          borderRadius: 1,
          border: `1px solid ${
            checked ? youhaBlue[500] : blueGrey[100]
          } !important`,
          boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, ${checked ? `0.08` : `0.08`})`,
          cursor: "pointer",
          "& *": {
            cursor: "pointer",
          },
        }}
        onClick={handleClick}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
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
                borderBottomRightRadius: 8,
                // borderBottomLeftRadius: 8,
                border: `1px solid ${
                  checked ? youhaBlue[500] : blueGrey[100]
                } !important`,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  pt: "56.25%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={snippet.thumbnails["maxres"].url}
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
          <Box
            sx={{
              p: theme.spacing(2, 2, 2, 2),
              // flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* <Box
                sx={{
                  borderRadius: 0.5,
                  mr: 0.5,
                  mb: 1,
                  height: 20,
                  p: theme.spacing(0, 0.75),
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: checked ? youhaBlue[50] : blueGrey[50],
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    lineHeight: "14px",
                    fontWeight: "700",
                    color: checked ? youhaBlue[500] : blueGrey[500],
                  }}
                >
                  {testPlans[randomIndex].contentGenre}
                </Typography>
              </Box> */}
              <Typo
                lines={1}
                sx={{
                  fontSize: 16,
                  lineHeight: "24px",
                  fontWeight: "700",
                  color: checked ? youhaBlue[500] : blueGrey[900],
                }}
              >
                {snippet.title}
              </Typo>
              <Typo
                lines={2}
                sx={{
                  mt: 0.5,
                  minHeight: 32,
                  fontSize: 12,
                  lineHeight: "16px",
                  color: checked ? youhaBlue[500] : blueGrey[500],
                }}
              >
                {snippet.description}
              </Typo>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Stack
            sx={{
              p: theme.spacing(0, 2, 2, 2),
            }}
          >
            <Stack spacing={1} alignItems="center">
              <DataRow
                iconName="coins"
                checked={checked}
                label="예상 광고단가"
                value={
                  // minPrice ? (
                  //   <>
                  //     {setKoNumber(minPrice)}원
                  //     {saleRatio > 0 && (
                  //       <span className="pink">{saleRatio}%할인</span>
                  //     )}
                  //   </>
                  // ) : (
                  //   <>가격없음</>
                  // )
                  <>
                    {setKoNumber(Number(generateRandomCode(10)))}원
                    <span className="pink">{generateRandomCode(2)}%할인</span>
                  </>
                }
              />
              <DataRow
                iconName="film"
                checked={checked}
                label="일정"
                value={'2022년 11월 1일'}
              />
            </Stack>
          </Stack>
        </Box>
      </ButtonBase>
      <Stack
        spacing={0.5}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        {checkMode && (
          <IconButton
            sx={{
              width: 32,
              height: 32,
              backgroundColor: `${
                checked ? youhaBlue[500] : "#ffffff"
              } !important`,
              border: `1px solid ${checked ? youhaBlue[500] : blueGrey[100]}`,
              boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
              zIndex: 98,
              borderRadius: 0.5,
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
        )}
        <IconButton
          sx={{
            width: 32,
            height: 32,
            backgroundColor: `${favorited ? pink[500] : "#ffffff"} !important`,
            border: `1px solid ${favorited ? pink[500] : blueGrey[100]}`,
            boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
            zIndex: 98,
            borderRadius: 0.5,
          }}
          onClick={handleClickFavorite}
        >
          <Icon
            name="heart"
            prefix="fas"
            size={16}
            color={favorited ? "#ffffff" : blueGrey[300]}
          />
        </IconButton>
      </Stack>
    </Box>
  );
}
function DataRow({
  checked,
  iconName,
  label,
  value,
}: {
  checked?: boolean;
  iconName: IconName;
  label: string;
  value: any;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Icon
          name={iconName}
          prefix="fal"
          size={12}
          sx={{
            maxWidth: 16,
            mr: 1,
            color: checked ? youhaBlue[500] : blueGrey[900],
          }}
        />
        <Typography
          sx={{
            fontSize: 12,
            lineHeight: "16px",
            minWidth: 96,
            color: checked ? youhaBlue[500] : blueGrey[900],
          }}
        >
          {label}
        </Typography>
      </Box>
      <Typography
        sx={{
          mt: 0.5,
          pl: 3,
          fontSize: 12,
          lineHeight: "16px",
          fontWeight: "700",
          // textAlign: "right",
          color: checked ? youhaBlue[500] : blueGrey[900],
          wordBreak: "keep-all",
          "& .pink": {
            color: checked ? youhaBlue[500] : pink[500],
            ml: 0.75,
          },
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
function DataCell({
  iconName,
  label,
  value,
}: {
  iconName: IconName;
  label: string;
  value: any;
}) {
  return (
    <Box
      sx={{
        flex: 1,
        // " *": {
        //   textAlign: "center",
        // },
        // p: theme.spacing(2, 2, 2, 2),
        // backgroundColor: blueGrey[50],
        // border: `1px solid ${blueGrey[50]}`,
        // borderRadius: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Icon
        name={iconName}
        prefix="fad"
        size={16}
        color={blueGrey[700]}
        sx={{
          mr: 1,
        }}
      />
      <Box>
        <Typography
          sx={{
            fontSize: 10,
            lineHeight: "14px",
          }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: "700",
            color: blueGrey[800],
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

function generateRandomCode(n: number) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += Math.floor(Math.random() * 10);
  }
  return str;
}
