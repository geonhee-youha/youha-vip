import { alpha, ButtonBase } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import _ from "lodash";
import { EstimateProps, testCampaigns } from "../../datas";
import Typo from "../atoms/Typo";

export default function EstimateItem({ item }: { item: EstimateProps }) {
  const { campaignId } = item;
  const campaign =
    testCampaigns[_.findIndex(testCampaigns, (el) => el.id === campaignId)];
  const handleClick = () => {};
  return (
    <ButtonBase
      sx={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden",
        "& *": {
          cursor: "pointer",
        },
        cursor: "pointer",
        border: `1px solid${blueGrey[100]}`,
        boxShadow: `2px 2px 4px 0px ${alpha("#000000", 0.08)}`,
        borderRadius: 1,
        p: 2,
      }}
      onClick={handleClick}
    >
      <Typo
        lines={1}
        sx={{
          fontSize: 16,
          lineHeight: "24px",
          fontWeight: "700",
          wordBreak: "break-all",
        }}
      >
        {campaign.title}
      </Typo>
      <Typo
        lines={2}
        sx={{
          mt: 0.5,
          fontSize: 14,
          lineHeight: "20px",
          color: blueGrey[500],
          wordBreak: "break-all",
        }}
      >
        {campaign.description}
      </Typo>
    </ButtonBase>
  );
}
