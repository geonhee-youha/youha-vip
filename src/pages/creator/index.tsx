import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Box, ButtonBase, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import _ from "lodash";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import Icon from "../../components/atoms/Icon";
import Panel from "../../components/atoms/Panel";
import { creatorFilters, pages } from "../../constants";
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
  });
  return (
    <Panel>
      <Box
        sx={{
          p: theme.spacing(8, 6, 0, 6),
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderBottom: `1px solid ${blueGrey[100]}`,
            pb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 24,
              lineHeight: "32px",
              fontWeight: "700",
              mr: "auto",
            }}
          >
            {pageTitle}
          </Typography>
        </Box>
      </Box>
      <Stack
        spacing={1}
        sx={{
          p: theme.spacing(2, 5, 2, 5),
        }}
      >
        {creatorFilters.map((item, index) => (
          <FilterItem
            key={index}
            item={item}
            filter={filter}
            setFilter={setFilter}
          />
        ))}
        {/* <Typography
          sx={{
            fontSize: 16,
            lineHeight: "24px",
            color: blueGrey[500],
            "& span": {
              fontWeight: "700",
              color: blueGrey[800],
            },
          }}
        >
          총 <span>2,432</span>명의 크리에이터
        </Typography> */}
      </Stack>
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

function TagItem({
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
        border: `1px solid ${checked ? youhaBlue[500] : blueGrey[100]}`,
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
