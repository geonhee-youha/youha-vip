import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Box, ButtonBase, IconButton, Stack, Typography } from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import _ from "lodash";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { checkedCreatorIdsState, favoritedCreatorIdsState } from "../../datas";
import { creatorDialogState, creatorDrawerState } from "../../recoil";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import { comma, setKoNumber } from "../../utils";
import Icon from "../atoms/Icon";
import Typo from "../atoms/Typo";

export default function CreatorItem({
  item,
  big,
  checkMode,
  tempCheck,
}: {
  item: any;
  big?: boolean;
  checkMode?: boolean;
  tempCheck?: boolean;
}) {
  console.log(item);

  const {
    id,
    thumbnail,
    title,
    subscriberCount,
    viewCount,
    averageCommercialViewCount,
    standardCommercialPrice,
    CPV,
  } = item;
  const [creatorDrawer, setCreatorDrawer] = useRecoilState(
    creatorDrawerState
  );
  const [creatorDialog, setCreatorDialog] = useRecoilState(creatorDialogState);
  const [favoritedCreatorIds, setFavoritedCreatorIds] = useRecoilState(
    favoritedCreatorIdsState
  );
  const [checkedCreatorIds, setCheckedCreatorIds] = useRecoilState(
    checkedCreatorIdsState
  );
  const [open, setOpen] = useState<boolean>(true);
  const targetCheckList = tempCheck
    ? checkedCreatorIds
    : creatorDrawer.selectedCreatorIds;
  const checked =
    checkMode && _.findIndex(targetCheckList, (el) => el === id) !== -1;
  const favorited = _.findIndex(favoritedCreatorIds, (el) => el === id) !== -1;
  const handleClick = () => {
    setCreatorDialog((prev) => {
      return {
        ...prev,
        open: true,
      };
    });
  };
  const handleClickCheck = () => {
    if (tempCheck) {
      setCheckedCreatorIds((prev) => {
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
    setCreatorDrawer((prev) => {
      let prevSelectedIds = _.cloneDeep(prev.selectedCreatorIds);
      if (prevSelectedIds.includes(id)) {
        prevSelectedIds = _.filter(prevSelectedIds, (el) => el !== id);
      } else {
        prevSelectedIds = [...prevSelectedIds, id];
      }
      return {
        ...prev,
        selectedCreatorIds: prevSelectedIds,
      };
    });
  };
  const handleClickFavorite = () => {
    setFavoritedCreatorIds((prev) => {
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
        flex: 1,
        width: "100%",
        position: "relative",
        display: "flex",
        alignSelf: "flex-start",
      }}
    >
      <ButtonBase
        sx={{
          flex: 1,
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          borderRadius: 1,
          border: `1px solid ${
            checked ? youhaBlue[500] : blueGrey[100]
          } !important`,
          boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, ${checked ? `0.08` : `0.08`})`,
          cursor: "pointer",
          "& *": {
            cursor: "pointer",
          },
          backgroundColor: "#ffffff",
        }}
        onClick={handleClick}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            p: theme.spacing(0, 0, 2, 0),
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: 108,
              height: 114,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -1,
                left: -1,
                width: "100%",
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
                  pt: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={thumbnail}
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
              p: theme.spacing(2, 2, 0, 2),
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              // mr: 6,
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
                뷰티/패션
              </Typography>
            </Box>
            <Typo
              lines={2}
              sx={{
                mt: 1,
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "700",
                color: checked ? youhaBlue[500] : blueGrey[900],
              }}
            >
              {title}
            </Typo>
            <Typography
              sx={{
                mt: 0.5,
                fontSize: 12,
                lineHeight: "16px",
                color: checked ? youhaBlue[500] : blueGrey[700],
                "& span": {
                  fontWeight: "700",
                  color: checked ? youhaBlue[500] : blueGrey[700],
                },
              }}
            >
              구독자 <span>{`${comma(subscriberCount)}명`}</span>
            </Typography>
          </Box>
        </Box>
        <Stack
          spacing={2}
          sx={{
            mt: 0,
            width: "100%",
            p: theme.spacing(0, 2, 2, 2),
          }}
        >
          <Stack spacing={1} alignItems="center">
            <DataRow
              iconName="crown"
              checked={checked}
              label="영향력 지수"
              value={`높음`}
            />
            <DataRow
              iconName="arrow-trend-up"
              checked={checked}
              label="트렌드 지수"
              value={`56점`}
            />
            <DataRow
              iconName="user"
              checked={checked}
              label="타겟 적합도"
              value={`${98}%`}
            />
            <DataRow
              iconName="coin"
              checked={checked}
              label="예상 CPV"
              value={CPV ? `${CPV.toFixed(0)}원/회` : "집계중"}
            />
          </Stack>
          <Stack
            spacing={1}
            alignItems="center"
            sx={{
              mt: 2,
              borderTop: `1px solid ${
                checked ? youhaBlue[500] : blueGrey[100]
              } !important`,
              pt: 2,
            }}
          >
            <DataRow
              iconName="coins"
              checked={checked}
              label="예상 광고단가"
              value={`${setKoNumber(standardCommercialPrice)}원`}
            />
            <DataRow
              iconName="film"
              checked={checked}
              label="예상 노출수"
              value={
                averageCommercialViewCount
                  ? `${setKoNumber(averageCommercialViewCount)}회`
                  : "집계중"
              }
            />
          </Stack>
        </Stack>
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
        width: "100%",
      }}
    >
      <Icon
        name={iconName}
        prefix="fal"
        size={12}
        sx={{
          maxWidth: 16,
          mr: 1,
          color: checked ? youhaBlue[500] : blueGrey[700],
        }}
      />
      <Typography
        sx={{
          fontSize: 12,
          lineHeight: "16px",
          minWidth: 80,
          color: checked ? youhaBlue[500] : blueGrey[700],
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          flex: 1,
          fontSize: 12,
          lineHeight: "16px",
          fontWeight: "700",
          // textAlign: "right",
          color: checked ? youhaBlue[500] : blueGrey[700],
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
