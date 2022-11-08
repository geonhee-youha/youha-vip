import {
  alpha,
  Box,
  Button,
  Drawer,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { creatorPopupTabs } from "../../../constants";
import {
  checkedCreatorIdsState,
  favoritedCreatorIdsState,
  testCreators,
} from "../../../datas";
import { creatorPopupState } from "../../../recoil";
import { theme } from "../../../themes/theme";
import Icon from "../../atoms/Icon";
import TextField from "../../atoms/Textfield";
import CreatorItem from "../../organisms/CreatorItem";
import TabBar from "../TabBar";
import SwipeableViews from "react-swipeable-views";
import _ from "lodash";
import PaperHeader from "../../molecules/PaperHeader";
import { useRouter } from "next/router";

export default function CreatorPopup() {
  const router = useRouter();
  const searchRef = useRef<any>(null);
  const [input, setInput] = useState<{ search: string }>({ search: "" });
  const [creatorPopup, setCreatorPopup] = useRecoilState(creatorPopupState);
  const checkedCreatorIds = useRecoilValue(checkedCreatorIdsState);
  const favoritedCreatorIds = useRecoilValue(favoritedCreatorIdsState);
  const { id, open } = creatorPopup;
  const [tabIndex, setTabIndex] = useState<number>(0);
  const creators = testCreators;
  const favoritedCreators = _.filter(creators, (el) =>
    favoritedCreatorIds.includes(el.id)
  );
  const confirmable = checkedCreatorIds.length > 0;
  useEffect(() => {
    handleClose();
  }, [router]);
  const handleClose = () => {
    setCreatorPopup((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };
  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput((prev) => {
      return {
        ...prev,
        search: value,
      };
    });
  };
  const handleResetSearch = () => {
    setInput((prev) => {
      return {
        ...prev,
        search: "",
      };
    });
  };
  const handleClickConfirm = () => {
    handleClose();
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
          left: (376 + 16) * 2 + 24,
          "@media(min-width: 1600px)": {
            left: `calc((100vw - 1600px) / 2 + ${(376 + 16) * 2 + 24}px)`,
          },
          width: 376 * 2 + 16,
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
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
          className={`PaperTarget-${id}`}
        >
          <PaperHeader title="크리에이터 찾기" onClose={handleClose}>
            <Box
              sx={{
                p: theme.spacing(0, 3, 0, 3),
              }}
            >
              <TextField
                startAdornmentName="search"
                inputRef={searchRef}
                value={input.search}
                onChange={handleChangeSearch}
                onReset={handleResetSearch}
                placeholder="크리에이터 이름을 검색하세요!"
                type="text"
              />
            </Box>
            <Box
              sx={{
                p: theme.spacing(0, 2, 0, 2),
              }}
            >
              <TabBar
                color="secondary"
                title="creator"
                tabs={creatorPopupTabs}
                index={tabIndex}
                setIndex={setTabIndex}
              />
            </Box>
          </PaperHeader>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              overflow: "hidden",
              "& .react-swipeable-view-container": {
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
                height: "100%",
              }}
            >
              <Page creators={testCreators} input={input} />
              <Page creators={favoritedCreators} input={input} />
            </SwipeableViews>
          </Box>
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
            fullWidth
            color="secondary"
            sx={{
              minHeight: 48,
              height: 48,
              boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
            }}
            disabled={!confirmable}
            onClick={handleClickConfirm}
          >
            <Icon
              name="users"
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
              {checkedCreatorIds.length === 0
                ? "크리에이터 선택"
                : `${checkedCreatorIds.length}명의 크리에이터 담기`}
            </Typography>
          </Button>
        </Box>
      </Paper>
    </Drawer>
  );
}
function Page({
  creators,
  input,
}: {
  creators: any[];
  input: { search: string };
}) {
  const boxRef = useRef<any>(null);
  const shadowRef = useRef<any>(null);
  const [sort, setSort] = useState<string>("subscriberCount");
  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  const data =
    input.search === ""
      ? _.sortBy(creators, sort).reverse()
      : _.filter(_.sortBy(creators, sort).reverse(), (el) =>
          el.title.includes(input.search)
        );
  const handleScroll = (e: any) => {
    if (boxRef.current.scrollTop > 0) {
      shadowRef.current.style.boxShadow = `4px 4px 8px 4px rgba(0, 0, 0, 0.08)`;
    } else {
      shadowRef.current.style.boxShadow = ``;
    }
  };
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
      }}
    >
      <Box
        ref={shadowRef}
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: -40,
          height: 40,
          backgroundColor: "#ffffff",
          transition: `all 0.35s ease`,
          zIndex: 999,
        }}
      />
      <Box
        ref={boxRef}
        sx={{
          position: "relative",
          height: "100%",
          overflow: "auto",
        }}
        onScroll={handleScroll}
      >
        <Box
          sx={{
            p: theme.spacing(2, 3, 0, 3),
            // "& .Mui-focused .MuiSelect-select": {
            //   color: `${youhaBlue[500]} !important`,
            // },
            // "& .Mui-focused svg": {
            //   color: `${youhaBlue[500]} !important`,
            // },
          }}
        >
          <Select
            color="secondary"
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
              color: blueGrey[300],
              "& fieldset": {
                borderColor: `${blueGrey[100]} !important`,
                borderWidth: `1px !important`,
                boxShadow: "none !important",
              },
              boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
              "&.Mui-focused": {
                boxShadow: `2px 2px 4px 0px ${alpha(blueGrey[900], 0.24)}`,
              },
              "&:hover *": {
                borderColor: blueGrey[900],
              },
            }}
          >
            <MenuItem value={"viewCount"}>구독자순</MenuItem>
            <MenuItem value={"standardCommercialPrice"}>
              예상 광고단가 순
            </MenuItem>
            <MenuItem value={"subscriberCount"}>예상 노출수 순</MenuItem>
            <MenuItem value={"CPV"}>예상 CPV</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            p: theme.spacing(2, 3, 2 + 18, 3),
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `1fr 1fr`,
              gridAutoColumn: "1fr",
              gridTemplateRows: "auto",
              gridRowGap: 16,
              gridColumnGap: 16,
            }}
          >
            {data.map((item, index) => (
              <CreatorItem key={index} item={item} checkMode tempCheck />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}