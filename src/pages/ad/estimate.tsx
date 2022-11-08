import { alpha, Box, Paper, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import _ from "lodash";
import { useRouter } from "next/router";
import List from "../../components/atoms/List";
import PaperHeader from "../../components/molecules/PaperHeader";
import EstimateItem from "../../components/organisms/EstimateItem";
import { estimateFilters, estimateSorts, pages } from "../../constants";
import { testEstimates } from "../../datas";
import { theme } from "../../themes/theme";

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
  const queryName = `page-${currentPathName.replace("/", "")}`;
  const data = testEstimates;
  return (
    <Paper
      elevation={4}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 1,
        boxShadow: `4px 4px 8px 4px rgba(0, 0, 0, 0.08)`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        className={`PaperTarget-${queryName}`}
      >
        <PaperHeader queryName={queryName} title={<>{pageTitle}</>} big />
        <Box
          sx={{
            p: theme.spacing(4, 3, 0, 3),
          }}
        >
          <Typography
            sx={{
              fontSize: 18,
              lineHeight: "28px",
              fontWeight: "700",
              mb: 0,
            }}
          >
            도착한 견적서
          </Typography>
        </Box>
        <List
          data={data}
          filters={estimateFilters}
          sorts={estimateSorts}
          columns={4}
          renderList={(data) => {
            return data.map((item, index) => (
              <EstimateItem key={index} item={item} />
            ));
          }}
          title="견적서가"
        />
        <Box
          sx={{
            p: theme.spacing(4, 3, 0, 3),
          }}
        >
          <Typography
            sx={{
              fontSize: 18,
              lineHeight: "28px",
              fontWeight: "700",
              mb: 0,
            }}
          >
            대기중인 견적서
          </Typography>
        </Box>
        <List
          data={data}
          filters={estimateFilters}
          sorts={estimateSorts}
          columns={4}
          renderList={(data) => {
            return data.map((item, index) => (
              <EstimateItem key={index} item={item} />
            ));
          }}
          title="견적서가"
        />
      </Box>
    </Paper>
  );
}
