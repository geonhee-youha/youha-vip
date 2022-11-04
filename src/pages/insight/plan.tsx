import { IconName } from "@fortawesome/fontawesome-svg-core";
import {
  Box,
  ButtonBase,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import _ from "lodash";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import Icon from "../../components/atoms/Icon";
import Panel from "../../components/atoms/Panel";
import PlanItem from "../../components/organisms/PlanItem";
import { creatorFilters, pages } from "../../constants";
import { testPlans } from "../../datas";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
export default function Page() {
  const router = useRouter();
  const currentPathName = `/${router.pathname.split("?")[0].split("/")[1]}`;
  const currentSlugPathName = `/${router.pathname.split("?")[0].split("/")[2]}`;
  const pageTitle =
    currentSlugPathName !== "/undefined"
      ? _.findLast(
          _.findLast(pages, (el) => el.pathName === currentPathName)?.slugs,
          (el) => el.pathName === currentSlugPathName
        )?.title
      : _.findLast(pages, (el) => el.pathName === currentPathName)?.title;
  const [filter, setFilter] = useState<{ [key: string]: string }>({
    성별: "전체",
    연령: "전체",
    구독: "전체",
  });
  const [sort, setSort] = useState<string>("subscriberCount");
  const creators = _.sortBy(testPlans, sort).reverse();
  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  return (
    <Panel
      sx={{
        overflow: "auto !important",
      }}
    >
      <Box
        sx={{
          mt: 0,
          position: "sticky",
          top: 0,
          p: theme.spacing(2.25, 3, 0, 3),
          backgroundColor: "#ffffff",
          zIndex: 98,
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderBottom: `1px solid ${blueGrey[50]}`,
            pb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 24,
              lineHeight: "36px",
              fontWeight: "700",
              mr: "auto",
            }}
          >
            {pageTitle}
          </Typography>
        </Box>
      </Box>
      <Box sx={{}}>
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
                  borderColor: blueGrey[50],
                  borderWidth: `1px !important`,
                  boxShadow: "none !important",
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
              overflow: "auto",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridAutoColumn: "1fr",
                gridTemplateRows: "auto auto",
                gridRowGap: 8,
                gridColumnGap: 8,
                p: theme.spacing(0, 3, 20, 3),
              }}
            >
              {creators.map((item, index) => (
                <PlanItem key={index} item={item} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Panel>
  );
}

function FilterItem({
  item,
  filter,
  setFilter,
}: {
  item: { title: string; iconName: IconName; tags: string[] };
  filter: { [key: string]: string };
  setFilter: Dispatch<SetStateAction<{ [key: string]: string }>>;
}) {
  const { title, iconName, tags } = item;
  return (
    <Box
      sx={{
        p: theme.spacing(0, 1),
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon
            prefix="fad"
            size={20}
            name={iconName}
            color={blueGrey[700]}
            sx={{
              maxWidth: 24,
              mr: 2,
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
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            pt: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          {["전체", ...tags].map((item, index) => (
            <TagItem
              key={index}
              item={item}
              title={title}
              filter={filter}
              setFilter={setFilter}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export function TagItem({
  item,
  title,
  filter,
  setFilter,
}: {
  item: string;
  title: string;
  filter: { [key: string]: string };
  setFilter: Dispatch<SetStateAction<{ [key: string]: string }>>;
}) {
  const checked = filter[title] === item;
  const handleClick = () => {
    setFilter((prev) => {
      let prevFilter = _.cloneDeep(prev);
      if (prevFilter[title] === item) {
        prevFilter[title] = "전체";
      } else {
        prevFilter[title] = item;
      }
      return prevFilter;
    });
  };
  return (
    <ButtonBase
      sx={{
        p: theme.spacing(0, 1.5),
        height: 32,
        border: `1px solid ${checked ? youhaBlue[500] : blueGrey[50]}`,
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
}
