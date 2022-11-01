import {
  Box,
  Button,
  Drawer,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  planPopupTabs,
  inputDefaultProps,
  InputProps,
  mainTabWidth,
} from "../../../constants";
import {
  checkedPlanIdsState,
  favoritedPlanIdsState,
  testPlans,
} from "../../../datas";
import { creatorPlanDrawerState, planPopupState } from "../../../recoil";
import { theme } from "../../../themes/theme";
import youhaBlue from "../../../themes/youhaBlue";
import Icon from "../../atoms/Icon";
import TextField from "../../atoms/TextField";
import PlanItem from "../../molecules/PlanItem";
import TabBar from "../TabBar";
import SwipeableViews from "react-swipeable-views";
import _ from "lodash";
export default function PlanPopup() {
  const serachRef = useRef<any>(null);
  const [searchInput, setSearchInput] = useState<InputProps>(inputDefaultProps);
  const [planPopup, setPlanPopup] = useRecoilState(planPopupState);
  const [checkedPlanIds, setCheckedPlanIds] = useRecoilState(
    checkedPlanIdsState
  );
  const [creatorPlanDrawer, setPlanPlanDrawer] = useRecoilState(
    creatorPlanDrawerState
  );
  const [favoritedPlanIds, setFavoritedPlanIds] = useRecoilState(
    favoritedPlanIdsState
  );
  const { open, creatorName } = planPopup;
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [sort, setSort] = useState<string>("subscriberCount");
  const plans =
    searchInput.value === ""
      ? _.sortBy(testPlans, sort).reverse()
      : _.filter(_.sortBy(testPlans, sort).reverse(), (el) =>
          el.title.includes(searchInput.value)
        );
  useEffect(() => {
    if (open) setCheckedPlanIds(creatorPlanDrawer.selectedPlanIds);
  }, [open]);
  const checkedPlans = _.filter(
    plans,
    (plansEl) =>
      _.findIndex(favoritedPlanIds, (el) => el === plansEl.id) !== -1
  );
  const favoritedPlans = _.filter(
    plans,
    (plansEl) =>
      _.findIndex(favoritedPlanIds, (el) => el === plansEl.id) !== -1
  );
  const handleClose = () => {
    setPlanPopup((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleKeyPressPlanName = () => {};
  const setPlanName = (input: InputProps) => {
    setPlanPopup((prev) => {
      return {
        ...prev,
        creatorName: input,
      };
    });
  };
  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  const handleClickNew = () => {};
  const handleClickCancel = () => {
    handleClose();
  };
  const handleClickConfirm = () => {
    handleClose();
    setPlanPlanDrawer((prev) => {
      return {
        ...prev,
        selectedPlanIds: checkedPlanIds,
      };
    });
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
          left: (mainTabWidth + 24) * 2 + 24,
          "@media(min-width: 1600px)": {
            left: `calc((100vw - 1600px) / 2 + ${
              (mainTabWidth + 24) * 2 + 24
            }px)`,
          },
          width: mainTabWidth * 2 + 24,
          borderRadius: 1,
          boxShadow: "none",
          height: "auto",
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
          기획안 등록
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
          p: theme.spacing(0, 3, 0, 3),
        }}
      >
        <TextField
          startAdornmentName="search"
          inputRef={serachRef}
          input={searchInput}
          setInput={setSearchInput}
          placeholder="기획안 이름을 검색하세요!"
          type="text"
        />
      </Box>
      <Box
        sx={{
          p: theme.spacing(0, 2, 0, 2),
        }}
      >
        <TabBar
          title="plan"
          tabs={planPopupTabs}
          index={tabIndex}
          setIndex={setTabIndex}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
          "& .react-swipeable-view-container": {
            overflowY: "hidden",
            flex: 1,
            display: "flex",
            height: "100%",
          },
        }}
      >
        <SwipeableViews
          index={tabIndex}
          onChangeIndex={setTabIndex}
          style={{
            overflow: "hidden",
            flex: 1,
          }}
        >
          <Box>
            <Box
              sx={{
                p: theme.spacing(2, 3, 2, 3),
              }}
            >
              <Select
                value={sort}
                onChange={handleChangeSort}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  backgroundColor: `${"transparent"} !important`,
                  height: 40,
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: "700",
                  color: blueGrey[700],
                  "& fieldset": {
                    // display: 'none',
                    borderColor: blueGrey[100],
                    borderWidth: `1px !important`,
                    boxShadow: "none !important",
                  },
                }}
              >
                <MenuItem value={"viewCount"}>구독자순</MenuItem>
                <MenuItem value={"subscriberCount"}>평균 조회순</MenuItem>
                <MenuItem value={"standardCommercialPrice"}>
                  예상 광고단가순
                </MenuItem>
              </Select>
            </Box>
            <Box
              sx={{
                overflow: "auto",
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridAutoColumn: "1fr",
                  gridTemplateRows: "auto auto",
                  gridRowGap: 8,
                  gridColumnGap: 8,
                  p: theme.spacing(0, 3, 20, 3),
                }}
              >
                {plans.map((item, index) => (
                  <PlanItem key={index} item={item} checkMode tempCheck />
                ))}
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                p: theme.spacing(2, 3, 2, 3),
              }}
            >
              <Select
                value={sort}
                onChange={handleChangeSort}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  backgroundColor: `${"transparent"} !important`,
                  height: 40,
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: "700",
                  color: blueGrey[700],
                  "& fieldset": {
                    // display: 'none',
                    borderColor: blueGrey[100],
                    borderWidth: `1px !important`,
                    boxShadow: "none !important",
                  },
                }}
              >
                <MenuItem value={"viewCount"}>구독자순</MenuItem>
                <MenuItem value={"subscriberCount"}>평균 조회순</MenuItem>
                <MenuItem value={"standardCommercialPrice"}>
                  예상 광고단가순
                </MenuItem>
              </Select>
            </Box>
            <Box
              sx={{
                overflow: "auto",
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridAutoColumn: "1fr",
                  gridTemplateRows: "auto auto",
                  gridRowGap: 8,
                  gridColumnGap: 8,
                  p: theme.spacing(0, 3, 20, 3),
                }}
              >
                {favoritedPlans.map((item, index) => (
                  <PlanItem key={index} item={item} checkMode tempCheck />
                ))}
              </Box>
            </Box>
          </Box>
        </SwipeableViews>
      </Box>
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
            backgroundColor:
              checkedPlanIds.length === 0
                ? `${blueGrey[50]} !important`
                : youhaBlue[500],
          }}
          disabled={checkedPlanIds.length === 0}
          onClick={handleClickConfirm}
        >
          <Icon
            name="list"
            size={16}
            prefix="fas"
            sx={{
              color: checkedPlanIds.length === 0 ? blueGrey[200] : "#ffffff",
              mr: 0.5,
            }}
          />
          <Typography
            sx={{
              fontSize: 16,
              lineHeight: "24px",
              fontWeight: "700",
              color:
                checkedPlanIds.length === 0
                  ? `${blueGrey[200]} !important`
                  : "#ffffff",
            }}
          >
            {checkedPlanIds.length === 0
              ? "기획안 선택"
              : `${checkedPlanIds.length}명의 기획안 등록하기`}
          </Typography>
        </Button>
      </Box>
    </Drawer>
  );
}
