import { Box, ButtonBase, Typography } from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CampaignProps } from "../../datas";
import {
  adDrawerState,
  campaignDrawerState,
  estimateDrawerState,
} from "../../recoil";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import Icon from "../atoms/Icon";
export default function CampaignItem({
  item,
  checked,
}: {
  item: CampaignProps;
  checked?: boolean;
}) {
  const { title, description, category, target } = item;
  const [campaignDrawer, setCampaignDrawer] =
    useRecoilState(campaignDrawerState);
  const setAdDrawer = useSetRecoilState(adDrawerState);
  const [estimateDrawer, setEstimateDrawer] =
    useRecoilState(estimateDrawerState);
  const handleClick = () => {
    setCampaignDrawer((prev) => {
      return {
        ...prev,
        selectedId: prev.selectedId === item.id ? null : item.id,
      };
    });
    if (campaignDrawer.selectedId === item.id) {
      setEstimateDrawer((prev) => {
        return {
          ...prev,
          open: false,
        };
      });
      setTimeout(
        () => {
          setAdDrawer((prev) => {
            return {
              ...prev,
              open: false,
            };
          });
        },
        estimateDrawer.open ? 150 : 0
      );
    } else {
      if (campaignDrawer.selectedId === null) {
        setAdDrawer((prev) => {
          return {
            ...prev,
            open: true,
          };
        });
      } else {
        if (estimateDrawer.open) {
          setTimeout(() => {
            setEstimateDrawer((prev) => {
              return {
                ...prev,
                open: true,
              };
            });
          }, 450);
        }
        setEstimateDrawer((prev) => {
          return {
            ...prev,
            open: false,
          };
        });
        setTimeout(
          () => {
            setAdDrawer((prev) => {
              return {
                ...prev,
                open: false,
              };
            });
          },
          estimateDrawer.open ? 150 : 0
        );
        setTimeout(
          () => {
            setAdDrawer((prev) => {
              return {
                ...prev,
                open: true,
              };
            });
          },
          estimateDrawer.open ? 300 : 150
        );
      }
    }
  };
  return (
    <ButtonBase
      sx={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 1,
        p: 2,
        backgroundColor: checked ? youhaBlue[500] : blueGrey[50],
        transition: `all 0.35s ease`,
        " *": {
          transition: `all 0.35s ease`,
        },
      }}
      onClick={handleClick}
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
              backgroundColor:
                //   checked ? pink[500] :
                blueGrey[700],
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
          color: checked ? "#ffffff" : blueGrey[700],
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          mt: 0.5,
          fontSize: 12,
          lineHeight: "16px",
          color: checked ? "#ffffff" : blueGrey[500],
        }}
      >
        {description}
      </Typography>
    </ButtonBase>
  );
}
