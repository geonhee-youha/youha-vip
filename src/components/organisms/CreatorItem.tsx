import {
  alpha,
  Box,
  ButtonBase,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import _ from "lodash";
import { useRecoilState, useSetRecoilState } from "recoil";
import { checkedCreatorIdsState, favoritedCreatorIdsState } from "../../datas";
import { creatorDialogState, creatorDrawerState } from "../../recoil";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import { setKoNumber } from "../../utils";
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
  const {
    id,
    thumbnail,
    title,
    subscriberCount,
    averageCommercialViewCount,
    standardCommercialPrice,
    CPV,
  } = item;
  const [creatorDrawer, setCreatorDrawer] = useRecoilState(creatorDrawerState);
  const [favoritedCreatorIds, setFavoritedCreatorIds] = useRecoilState(
    favoritedCreatorIdsState
  );
  const [checkedCreatorIds, setCheckedCreatorIds] = useRecoilState(
    checkedCreatorIdsState
  );
  const setCreatorDialog = useSetRecoilState(creatorDialogState);
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
            checked
              ? tempCheck
                ? blueGrey[900]
                : youhaBlue[500]
              : blueGrey[100]
          } !important`,
          boxShadow: `2px 2px 4px 0px ${alpha("#000000", 0.08)}`,
          transition: `all 0.35s ease`,
          "& *": {
            transition: `all 0.35s ease`,
            cursor: "pointer",
          },
          cursor: "pointer",
          backgroundColor: "#ffffff",
        }}
        onClick={handleClick}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            // alignItems: "flex-start",
            alignItems: "center",
            p: theme.spacing(2),
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: 104,
              height: 104,
              borderRadius: "50%",
              // border: `1px solid ${blueGrey[100]}`,
              border: `1px solid ${
                checked
                  ? tempCheck
                    ? blueGrey[900]
                    : youhaBlue[500]
                  : blueGrey[100]
              } !important`,
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
          <Box
            sx={{
              mt: 2,
              borderRadius: 0.5,
              mr: 0.5,
              height: 20,
              p: theme.spacing(0, 0.75),
              display: "flex",
              alignItems: "center",
              backgroundColor: checked
                ? tempCheck
                  ? blueGrey[50]
                  : youhaBlue[50]
                : blueGrey[50],
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                lineHeight: "16px",
                fontWeight: "700",
                color: checked
                  ? tempCheck
                    ? blueGrey[900]
                    : youhaBlue[500]
                  : blueGrey[500],
              }}
            >
              뷰티/패션
            </Typography>
          </Box>
          <Typo
            lines={1}
            sx={{
              mt: 0.5,
              fontSize: 18,
              lineHeight: "28px",
              fontWeight: "700",
              color: checked
                ? tempCheck
                  ? blueGrey[900]
                  : youhaBlue[500]
                : blueGrey[900],
              wordBreak: "break-all",
            }}
          >
            {title}
          </Typo>
          <Typography
            sx={{
              mt: 0.5,
              fontSize: 14,
              lineHeight: "20px",
              color: checked
                ? tempCheck
                  ? blueGrey[900]
                  : youhaBlue[500]
                : blueGrey[700],
            }}
          >
            구독자 {`${setKoNumber(subscriberCount)}명`}
          </Typography>
          {/* <Typography
            sx={{
              mt: 0.5,
              fontSize: 14,
              lineHeight: "20px",
              color: checked
                ? tempCheck
                  ? blueGrey[900]
                  : youhaBlue[500]
                : blueGrey[700],
            }}
          >
            평균 단가 {`${setKoNumber(standardCommercialPrice)}원`}
          </Typography> */}
          {/* <DataRow
            tempCheck={tempCheck}
            checked={checked}
            label="구독자"
            value={`${setKoNumber(subscriberCount)}명`}
          /> */}
          {/* <Stack
            spacing={1}
            alignItems="center"
            sx={{
              width: '100%',
              mt: 2,
            }}
          >
            <DataRow
              tempCheck={tempCheck}
              checked={checked}
              label="구독자"
              value={`${setKoNumber(subscriberCount)}명`}
            />
            <DataRow
              tempCheck={tempCheck}
              checked={checked}
              label="예상 광고단가"
              value={`${setKoNumber(standardCommercialPrice)}원`}
            />
            <DataRow
              tempCheck={tempCheck}
              checked={checked}
              label="예상 노출수"
              value={
                averageCommercialViewCount
                  ? `${setKoNumber(averageCommercialViewCount)}회`
                  : "집계중"
              }
            />
          </Stack> */}
        </Box>
        <Box
          sx={{
            // borderTop: `1px solid ${
            //   checked
            //     ? tempCheck
            //       ? blueGrey[900]
            //       : youhaBlue[500]
            //     : blueGrey[100]
            // } !important`,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            p: theme.spacing(0, 2, 2, 2),
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridAutoColumn: "1fr",
              gridTemplateRows: "auto auto",
              gridRowGap: 0,
              backgroundColor: checked
              ? tempCheck
                ? blueGrey[50]
                : youhaBlue[50]
              : blueGrey[50],
              borderRadius: 1,
              p: 1,
            }}
          >
            <DataCell
              tempCheck={tempCheck}
              checked={checked}
              label="영향력 지수"
              value={`높음`}
            />
            <DataCell
              tempCheck={tempCheck}
              checked={checked}
              label="트렌드 지수"
              value={`56점`}
            />
            <DataCell
              tempCheck={tempCheck}
              checked={checked}
              label="타겟 적합도"
              value={`${98}%`}
            />
            <DataCell
              tempCheck={tempCheck}
              checked={checked}
              label="예상 CPV"
              value={CPV ? `${CPV.toFixed(0)}원/회` : "집계중"}
            />
            <DataCell
              tempCheck={tempCheck}
              checked={checked}
              label="평균 단가"
              value={`3,230만원`}
            />
            <DataCell
              tempCheck={tempCheck}
              checked={checked}
              label="집행가능일"
              value={`11월 1일~`}
            />
          </Box>
        </Box>
      </ButtonBase>
      <Stack
        spacing={1}
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
                checked
                  ? tempCheck
                    ? blueGrey[900]
                    : youhaBlue[500]
                  : "#ffffff"
              } !important`,
              border: `1px solid ${
                checked
                  ? tempCheck
                    ? blueGrey[900]
                    : youhaBlue[500]
                  : blueGrey[100]
              }`,
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
        {!checkMode && (
          <IconButton
            sx={{
              width: 32,
              height: 32,
              backgroundColor: `${
                favorited ? pink[500] : "#ffffff"
              } !important`,
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
        )}
      </Stack>
    </Box>
  );
}
function DataRow({
  tempCheck,
  checked,
  label,
  value,
}: {
  tempCheck?: boolean;
  checked?: boolean;
  label: string;
  value: any;
}) {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: 14,
          lineHeight: "20px",
          minWidth: 84,
          color: checked
            ? tempCheck
              ? blueGrey[900]
              : youhaBlue[500]
            : blueGrey[900],
          // textAlign: "right",
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
          color: checked
            ? tempCheck
              ? blueGrey[900]
              : youhaBlue[500]
            : blueGrey[900],
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}
function DataCell({
  tempCheck,
  checked,
  label,
  value,
}: {
  tempCheck?: boolean;
  checked?: boolean;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        flex: 1,
        // width: 104,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& *": {
          textAlign: "center",
        },
        p: 1,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: 12,
            lineHeight: "16px",
            color: checked
              ? tempCheck
                ? blueGrey[900]
                : youhaBlue[500]
              : blueGrey[700],
          }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            mt: 0.5,
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: "700",
            color: checked
              ? tempCheck
                ? blueGrey[900]
                : youhaBlue[500]
              : blueGrey[900],
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}
