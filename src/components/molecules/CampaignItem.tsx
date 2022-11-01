import {
  Box,
  ButtonBase,
  IconButton,
  SxProps,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CampaignProps } from "../../datas";
import {
  campaignDialogState,
  campaignDrawerState,
  creatorDialogState,
  creatorPlanDrawerState,
} from "../../recoil";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import Icon from "../atoms/Icon";
export default function CampaignItem({
  item,
  index,
}: {
  item: CampaignProps;
  index?: number;
}) {
  const { id, title, description, category, target } = item;
  const [campaignDrawer, setCampaignDrawer] =
    useRecoilState(campaignDrawerState);
  const [campaignDialog, setCampaignDialog] =
    useRecoilState(campaignDialogState);
  const [creatorPlanDrawer, setCreatorPlanDrawer] = useRecoilState(
    creatorPlanDrawerState
  );
  const checked = campaignDrawer.selectedId === id;
  const handleClick = () => {
    setCampaignDialog((prev) => {
      return {
        ...prev,
        open: true,
      };
    });
  };
  const handleClickCheck = () => {
    setCampaignDrawer((prev) => {
      return {
        ...prev,
        selectedId: prev.selectedId === item.id ? null : item.id,
      };
    });
    if (campaignDrawer.selectedId === item.id) {
      setCreatorPlanDrawer((prev) => {
        return {
          ...prev,
          open: false,
        };
      });
    } else {
      setCreatorPlanDrawer((prev) => {
        return {
          ...prev,
          open: true,
        };
      });
    }
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
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
          zIndex: 99,
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
      <ButtonBase
        sx={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          borderRadius: 1,
          p: 2,
          border: `1px solid ${checked ? youhaBlue[500] : blueGrey[100]}`,
        }}
        onClick={handleClick}
        className={typeof index !== "undefined" ? `CampaignItem-${index}` : ""}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {[category, target.sex, target.age].map((item, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: 0.5,
                mr: 0.5,
                mb: 0.5,
                height: 20,
                p: theme.spacing(0, 0.75),
                display: "flex",
                alignItems: "center",
                backgroundColor: blueGrey[700],
              }}
            >
              <Typography
                sx={{
                  fontSize: 10,
                  lineHeight: "14px",
                  fontWeight: "700",
                  color: "#ffffff",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          sx={{
            fontSize: 20,
            lineHeight: "32px",
            fontWeight: "700",
            color: blueGrey[700],
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mt: 0.5,
            fontSize: 12,
            lineHeight: "16px",
            color: blueGrey[500],
          }}
        >
          {description}
        </Typography>
      </ButtonBase>
    </Box>
  );
}
