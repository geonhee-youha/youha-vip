import { Box, ButtonBase, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TabProps } from "../../constants";
import youhaBlue from "../../themes/youhaBlue";

export default function TabBar({ tabs }: { tabs: TabProps[] }) {
  const router = useRouter();
  const { value: queryValue } = router.query;
  const index = _.findIndex(
    tabs,
    (el) => el.value === queryValue ?? tabs[0].value
  );
  const [indicator, setIndicator] = useState<{
    width: number;
    left: number | string;
  }>({
    width: 53.72,
    left: 8,
  });
  useEffect(() => {
    var targetEl: any = document.querySelector(
      `.TabItem.${queryValue ?? tabs[0].value}`
    );
    if (targetEl !== null) {
      let targetWidth = targetEl.offsetWidth - 16;
      if (index > 0) {
        let widths = [];
        let prevEls: any = document.querySelectorAll(`.TabItem`);
        for (let i: any = 0; i <= prevEls.length; i += 1) {
          if (i < index) prevEls[i] && widths.push(prevEls[i].offsetWidth - 16);
        }
        let prevElWidth = _.sum(widths);
        setIndicator({
          width: targetWidth,
          left: `calc(${prevElWidth}px + ${16 * index}px + 8px)`,
        });
      } else {
        setIndicator({
          width: targetWidth,
          left: 8,
        });
      }
    }
  }, [queryValue]);
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        height: 40,
        mt: 1,
        "&:before": {
          position: "absolute",
          content: '""',
          left: 8,
          right: 8,
          bottom: 0,
          height: `1px`,
          backgroundColor: blueGrey[100],
        },
      }}
    >
      {tabs.map((item, index) => (
        <TabItem key={index} item={item} />
      ))}
      <Box
        sx={{
          position: "absolute",
          left: indicator.left,
          bottom: 0,
          width: indicator.width,
          height: `2px`,
          backgroundColor: youhaBlue[500],
          transition: `all 0.35s ease`,
        }}
        className="TabBar_Indicator"
      />
    </Box>
  );
}
function TabItem({ item }: { item: TabProps }) {
  const router = useRouter();
  const currentPathName = `/${router.pathname.split('?')[0].split("/")[1]}`;
  const { value: queryValue } = router.query;
  const { id, title, value } = item;
  const focused = `${queryValue}` === `${value}` || (id === 0 && !queryValue);
  const handleClick = () => {
    router.push(`${currentPathName}?value=${value}`);
  };
  return (
    <ButtonBase
      sx={{
        p: 1,
        borderRadius: 1,
      }}
      onClick={handleClick}
      className={`TabItem ${value}`}
    >
      <Typography
        sx={{
          fontSize: 16,
          lineHeight: "24px",
          fontWeight: "700",
          color: focused ? youhaBlue[500] : blueGrey[200],
        }}
      >
        {title}
      </Typography>
    </ButtonBase>
  );
}
