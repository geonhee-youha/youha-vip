import { Box, ButtonBase, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import _ from "lodash";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TabProps } from "../../constants";
import youhaBlue from "../../themes/youhaBlue";

export default function TabBar({
  tabs,
  index,
  setIndex,
  title,
}: {
  tabs: TabProps[];
  index?: number;
  setIndex?: Dispatch<SetStateAction<number>>;
  title?: string;
}) {
  const router = useRouter();
  const currentPathName = `/${router.pathname.split("?")[0].split("/")[1]}`;
  const { value: queryValue } = router.query;
  const tabIndex = Math.max(
    typeof index === "undefined"
      ? _.findIndex(tabs, (el) => el.value === queryValue ?? tabs[0].value)
      : index,
    0
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
      typeof index !== "undefined"
        ? `${title ? `.${title} ` : ""}.TabItemIndex.TabItem-${index}`
        : `${title ? `.${title} ` : ""}.TabItemValue.TabItem-${
            queryValue ?? tabs[0].value
          }`
    );
    if (targetEl !== null) {
      let targetWidth = targetEl.offsetWidth - 16;      
      if (tabIndex > 0) {
        let widths = [];
        let prevEls: any = document.querySelectorAll(
          typeof index !== "undefined"
            ? `${title ? `.${title} ` : ""}.TabItemIndex`
            : `${title ? `.${title} ` : ""}.TabItemValue`
        );
        for (let i: any = 0; i <= prevEls.length; i += 1) {
          if (i < tabIndex)
            prevEls[i] && widths.push(prevEls[i].offsetWidth - 16);
        }
        let prevElWidth = _.sum(widths);
        setIndicator({
          width: targetWidth,
          left: `calc(${prevElWidth}px + ${16 * tabIndex}px + 8px)`,
        });
      } else {
        setIndicator({
          width: targetWidth,
          left: 8,
        });
      }
    }
  }, [tabIndex]);
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
      className={title ?? ""}
    >
      {tabs.map((item, index) => {
        const focused = tabIndex === index;
        const handleClick = () => {
          if (typeof setIndex !== "undefined") {
            setIndex(index);
            return;
          }
          router.push(`${currentPathName}?value=${item.value}`);
        };
        return (
          <TabItem
            key={index}
            index={index}
            item={item}
            focused={focused}
            onClick={handleClick}
          />
        );
      })}
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
function TabItem({
  item,
  index,
  focused,
  onClick,
}: {
  item: TabProps;
  index: number;
  focused: boolean;
  onClick: () => void;
}) {
  const { title, value } = item;
  return (
    <ButtonBase
      sx={{
        p: 1,
        borderRadius: 1,
      }}
      onClick={onClick}
      className={
        value !== ""
          ? `TabItemValue TabItem-${value}`
          : `TabItemIndex TabItem-${index}`
      }
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
