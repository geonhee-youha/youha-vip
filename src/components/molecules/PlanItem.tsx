import {
  Box,
  ButtonBase,
  IconButton,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import _ from "lodash";
import { ChangeEventHandler } from "react";
import { useRecoilState } from "recoil";
import { checkedPlanIdsState, favoritedPlanIdsState } from "../../datas";
import { creatorPlanDrawerState } from "../../recoil";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import { comma } from "../../utils";
import Icon from "../atoms/Icon";
import Typo from "../atoms/Typo";

export default function PlanItem({
  item,
  checkMode,
  tempCheck,
}: {
  item: any;
  checkMode?: boolean;
  tempCheck?: boolean;
}) {
  console.log(item);
  
  const {
    id,
    squareThumbnail,
    title,
    subscriberCount,
    viewCount,
    standardCommercialPrice,
    CPV,
  } = item;
  const [creatorPlanDrawer, setCreatorPlanDrawer] = useRecoilState(
    creatorPlanDrawerState
  );
  const [favoritedPlanIds, setFavoritedPlanIds] = useRecoilState(
    favoritedPlanIdsState
  );
  const [checkedPlanIds, setCheckedPlanIds] =
    useRecoilState(checkedPlanIdsState);
  const targetCheckList = tempCheck
    ? checkedPlanIds
    : creatorPlanDrawer.selectedPlanIds;
  const checked = _.findIndex(targetCheckList, (el) => el === id) !== -1;
  const favorited = _.findIndex(favoritedPlanIds, (el) => el === id) !== -1;
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
    setCreatorPlanDrawer((prev) => {
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
  return (
    <Box
      sx={{
        position: "relative",
        flex: 1,
        display: "flex",
      }}
    >
      {checkMode && (
        <IconButton
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 40,
            height: 40,
            backgroundColor: `${
              checked ? youhaBlue[500] : blueGrey[50]
            } !important`,
            zIndex: 9,
            borderRadius: 1,
          }}
          onClick={handleClickCheck}
        >
          <Icon
            name="check"
            prefix="fas"
            size={20}
            color={checked ? "#ffffff" : blueGrey[400]}
          />
        </IconButton>
      )}
      <IconButton
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          width: 40,
          height: 40,
          backgroundColor: `${blueGrey[50]} !important`,
          zIndex: 9,
        }}
        onClick={handleClickFavorite}
      >
        <Icon
          name="heart"
          prefix="fas"
          size={20}
          color={favorited ? pink[500] : blueGrey[400]}
        />
      </IconButton>
      <ButtonBase
        sx={{
          flex: 1,
          borderRadius: 1,
          flexDirection: "column",
          justifyContent: "center",
          border: `1px solid ${
            checkMode && checked ? youhaBlue[500] : blueGrey[100]
          }`,
          p: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: 1,
            width: 104,
            height: 104,
            overflow: "hidden",
            border: `1px solid ${blueGrey[50]}`,
          }}
        >
          <img
            src={squareThumbnail}
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            spacing={1}
            sx={{
              mt: 2,
            }}
          >
            <Box
              sx={{
                borderRadius: 1,
                display: "flex",
                height: 24,
                alignSelf: "center",
                alignItems: "center",
                p: theme.spacing(0, 1),
                backgroundColor: youhaBlue[50],
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: "16px",
                  fontWeight: "700",
                  color: youhaBlue[500],
                }}
              >
                뷰티/패션
              </Typography>
            </Box>
          </Stack>
          <Typo
            lines={1}
            sx={{
              mt: 0.5,
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            {title}
          </Typo>
        </Box>
        <Stack
          spacing={1}
          alignItems="center"
          sx={{
            mt: 2,
            width: "100%",
            p: theme.spacing(2, 2, 2, 2),
            backgroundColor: blueGrey[50],
            borderRadius: 1,
          }}
        >
          <DataRow label="구독자수" value={`${comma(subscriberCount)}명`} />
          <DataRow
            label="예상 광고단가"
            value={`${comma(standardCommercialPrice)}원`}
          />
          <DataRow label="예상 노출수" value={`${comma(viewCount)}회`} />
          <DataRow
            label="예상 CPV"
            value={CPV ? `${CPV.toFixed(0)}원/회` : "집계중"}
          />
          <Box sx={{ mt: 1 }}>
            <Box
              sx={{
                borderRadius: 1,
                display: "flex",
                height: 24,
                alignSelf: "center",
                alignItems: "center",
                p: theme.spacing(0, 1),
                backgroundColor: "#ffffff",
              }}
            >
              <Icon
                name="calendar"
                color={blueGrey[500]}
                size={12}
                prefix="fas"
                sx={{
                  mr: 0.5,
                }}
              />
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: "16px",
                  fontWeight: "700",
                  color: blueGrey[500],
                }}
              >
                2022년 11월 13일 집행 가능
              </Typography>
            </Box>
          </Box>
        </Stack>
      </ButtonBase>
    </Box>
  );
}
function DataRow({ label, value }: { label: string; value: any }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: 14,
          lineHeight: "20px",
          minWidth: 100,
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          flex: 1,
          fontSize: 14,
          lineHeight: "20px",
          fontWeight: "700",
          textAlign: "right",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
function DataCell({ label, value }: { label: string; value: any }) {
  return (
    <Box
      sx={{
        flex: 1,
        " *": {
          textAlign: "center",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: 12,
          lineHeight: "16px",
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
  );
}

function nFormatter(num: number, price?: boolean) {
  if (price) {
    if (num >= 100000000) {
      return (num / 100000000).toFixed(1).replace(/\.0$/, "") + "억";
    }
    if (num >= 10000) {
      return comma(Number((num / 10000).toFixed(0).replace(/\.0$/, ""))) + "만";
    }
  } else {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
  }
  return num;
}
