import { alpha, Box, ButtonBase, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PageProps, SlugProps } from "../../constants";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import Icon from "../atoms/Icon";

export default function MainTabItem({
  item,
  right,
}: {
  item: PageProps;
  right?: boolean;
}) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const { title, iconName, pathName, slugs } = item;
  const currentPathName = `/${router.pathname.split('?')[0].split("/")[1]}`;
  const checked = currentPathName === pathName;
  const handleClick = () => {
    if (slugs) return setOpen((prev) => !prev);
    router.push(pathName);
  };
  return (
    <Box>
      <ButtonBase
        sx={{
          width: "100%",
          justifyContent: "flex-start",
          p: 1,
          borderRadius: 1,
          "& .MuiTouchRipple-root *": {
            backgroundColor: alpha(blueGrey[900], 0.32),
          },
        }}
        onClick={handleClick}
      >
        <Icon
          prefix="fad"
          name={iconName}
          size={20}
          sx={{
            maxWidth: 24,
            mr: 2,
            color: checked ? youhaBlue[500] : blueGrey[700],
          }}
        />
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: "24px",
            fontWeight: "700",
            color: checked ? youhaBlue[500] : blueGrey[700],
          }}
        >
          {title}
        </Typography>
        {slugs && (
          <Icon
            name="angle-down"
            sx={{
              ml: "auto",
              transform: `rotate(${open ? 180 : 0}deg)`,
              transition: `all 0.35s ease`,
            }}
          />
        )}
        {right && (
          <Icon
            name="angle-right"
            sx={{
              ml: "auto",
            }}
          />
        )}
      </ButtonBase>
      {slugs && (
        <Box
          sx={{
            pl: 1,
            pr: 1,
            maxHeight: open ? slugs.length * 36 + 8 * 2 + 8 : 0,
            transition: `all 0.35s ease`,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              pt: 1,
              pb: 1,
              pl: 1,
              pr: 1,
              mt: 1,
              backgroundColor: blueGrey[50],
              borderRadius: 1,
            }}
          >
            {slugs.map((item, index) => (
              <SlugItem key={index} item={item} pathName={pathName} setOpen={setOpen}/>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
function SlugItem({
  item,
  pathName: parentPathName,
  setOpen,
}: {
  item: SlugProps;
  pathName: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const { title, pathName } = item;
  const currentPathName = `/${router.pathname.split('?')[0].split("/")[2]}`;
  const checked = currentPathName === pathName;
  const handleClick = () => {
    router.push(`${parentPathName}${pathName}`);
  };
  useEffect(() => {
    if (checked) {
      setOpen && setOpen(true);
    }
  }, [checked]);
  return (
    <ButtonBase
      sx={{
        width: "100%",
        justifyContent: "flex-start",
        p: 1,
        borderRadius: 1,
        "& .MuiTouchRipple-root *": {
          backgroundColor: alpha(blueGrey[900], 0.32),
        },
      }}
      onClick={handleClick}
    >
      <Typography
        sx={{
          fontSize: 14,
          lineHeight: "20px",
          fontWeight: "700",
          color: checked ? youhaBlue[500] : blueGrey[700],
        }}
      >
        {title}
      </Typography>
    </ButtonBase>
  );
}
