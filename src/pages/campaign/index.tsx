import {
  alpha,
  Box,
  ButtonBase,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  blue,
  blueGrey,
  cyan,
  green,
  indigo,
  pink,
  red,
  teal,
} from "@mui/material/colors";
import _ from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Icon from "../../components/atoms/Icon";
import Panel from "../../components/atoms/Panel";
import CreatorItem from "../../components/molecules/CreatorItem";
import { ages, pages } from "../../constants";
import { testCampaignsState, testCreators } from "../../datas";
import { campaignDialogState, campaignPopupState } from "../../recoil";
import { theme } from "../../themes/theme";
import { Chart } from "react-chartjs-2";
import youhaBlue from "../../themes/youhaBlue";
export default function Page() {
  const router = useRouter();
  const currentPathName = `/${router.pathname.split("?")[0].split("/")[1]}`;
  const currentSlugPathName = `/${router.pathname.split("?")[0].split("/")[2]}`;
  const pageTitle =
    currentSlugPathName !== "/undefined"
      ? `${
          _.findLast(
            _.findLast(pages, (el) => el.pathName === currentPathName)?.slugs,
            (el) => el.pathName === currentSlugPathName
          )?.title
        }`
      : `${_.findLast(pages, (el) => el.pathName === currentPathName)?.title}`;
  const [tabIndex, setTabIndex] = useState<number>(0);
  const testCampaigns = useRecoilValue(testCampaignsState);
  const setCampaignPopup = useSetRecoilState(campaignPopupState);
  const setCampaignDialog = useSetRecoilState(campaignDialogState);
  const campaigns = [...testCampaigns];
  const handleClickNewCampaign = () => {
    setCampaignPopup((prev) => {
      return {
        ...prev,
        open: true,
      };
    });
  };
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%", pt: 5 }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          height: 40,
          left: 0,
          right: 0,
          backgroundColor: blueGrey[50],
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          flexWrap: "nowrap",
          overflowX: "scroll",
        }}
        className="Container"
      >
        <Stack
          direction="row"
          sx={{
            display: "flex",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          {campaigns.map((item, index) => {
            const focused = tabIndex === index;
            const handleClick = () => {
              let containerEl: any = document.querySelector(`.Container`);
              let targetEl: any = document.querySelector(
                `.CampaignItem-${index}`
              );
              containerEl.scrollTo({
                top: 0,
                left: targetEl.offsetLeft - 48,
                behavior: "smooth",
              });
              setTabIndex(index);
            };
            const handleClickEdit = (e: any) => {
              e.preventDefault();
              setCampaignDialog((prev) => {
                return {
                  ...prev,
                  open: true,
                };
              });
            };
            return (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  flex: "0 0 auto",
                }}
              >
                <ButtonBase
                  sx={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    p: theme.spacing(1.25, 4, 1.25, 3),
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: focused ? "#ffffff" : "transparent",
                    zIndex: focused
                      ? campaigns.length * 2
                      : ((campaigns.length - index) / campaigns.length) *
                        campaigns.length,
                    position: "relative",
                    "&:after": {
                      position: "absolute",
                      top: 12,
                      bottom: 12,
                      right: -2,
                      content: '""',
                      width: `2px`,
                      backgroundColor: blueGrey[100],
                      display: focused ? "none" : "flex",
                    },
                  }}
                  onClick={handleClick}
                  className={`CampaignItem-${index}`}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: "20px",
                      fontWeight: "700",
                      color: focused ? blueGrey[900] : blueGrey[300],
                      mr: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                </ButtonBase>
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    width: 24,
                    height: 24,
                    zIndex: 9,
                  }}
                  onClick={handleClickEdit}
                >
                  <Icon
                    name="pen"
                    prefix="fas"
                    size={12}
                    color={focused ? blueGrey[900] : blueGrey[300]}
                  />
                </IconButton>
              </Box>
            );
          })}
          <Box
            sx={{
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              p: theme.spacing(0, 1, 0, 1),
              display: "flex",
              alignItems: "center",
              flex: "0 0 auto",
              position: "relative",
            }}
          >
            <IconButton
              sx={{
                width: 32,
                height: 32,
              }}
              onClick={handleClickNewCampaign}
            >
              <Icon name="plus" prefix="fas" size={16} color={blueGrey[300]} />
            </IconButton>
          </Box>
        </Stack>
      </Box>
      <Panel
        sx={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          height: "100%",
          "& .react-swipeable-view-container": {
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
          {testCampaigns.map((item, index) => (
            <Box
              key={index}
              sx={{
                height: "100%",
                overflow: "auto",
              }}
            >
              <Box
                sx={{
                  mt: 3,
                  position: "sticky",
                  top: 0,
                  p: theme.spacing(2.25, 3, 0, 3),
                  backgroundColor: "#ffffff",
                  zIndex: 99,
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
                      lineHeight: "36px",
                      fontWeight: "700",
                      mr: "auto",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  p: theme.spacing(2, 2, 1, 2),
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    flex: 1,
                    p: theme.spacing(1),
                    fontSize: 18,
                    lineHeight: "28px",
                    fontWeight: "700",
                  }}
                >
                  트렌드 인사이트
                </Typography>
              </Box>
              <Box
                sx={{
                  p: theme.spacing(0, 3, 3, 3),
                }}
              >
                <Box
                  sx={{
                    borderRadius: 1,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridAutoColumn: "1fr",
                    gridTemplateRows: "auto auto",
                    gridRowGap: 8,
                    gridColumnGap: 8,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      backgroundColor: blueGrey[50],
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        lineHeight: "24px",
                        fontWeight: "700",
                        color: blueGrey[900],
                      }}
                    >
                      종합 성과 지수
                    </Typography>
                    <Box
                      sx={{
                        mt: 1,
                        mb: 1,
                        height: 160,
                        position: "relative",
                      }}
                    >
                      <Chart
                        type="doughnut"
                        data={totalChartData}
                        options={totalChartOptions}
                      />
                      <Stack
                        spacing={0}
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-end",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 32,
                              lineHeight: "40px",
                              fontWeight: "700",
                              color: blueGrey[700],
                              textAlign: "center",
                            }}
                          >
                            96
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 14,
                              lineHeight: "28px",
                              fontWeight: "700",
                              color: blueGrey[700],
                              textAlign: "center",
                              ml: 0.25,
                            }}
                          >
                            점
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: 12,
                            lineHeight: "16px",
                            fontWeight: "700",
                            color: blueGrey[700],
                            textAlign: "center",
                          }}
                        >
                          아주 좋아요!
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      backgroundColor: blueGrey[50],
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        lineHeight: "24px",
                        fontWeight: "700",
                        color: blueGrey[900],
                      }}
                    >
                      구글/네이버 키워드 지수
                    </Typography>
                    <Box
                      sx={{
                        mt: 2,
                        height: 160,
                      }}
                    >
                      <Chart
                        type="line"
                        data={trendChartData}
                        options={trendChartOptions}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      backgroundColor: blueGrey[50],
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 16,
                        lineHeight: "24px",
                        fontWeight: "700",
                        color: blueGrey[900],
                      }}
                    >
                      SNS 바이럴 지수
                    </Typography>
                    <Box
                      sx={{
                        mt: 2,
                        height: 160,
                      }}
                    >
                      <Chart
                        type="bar"
                        data={keywordChartData}
                        options={keywordChartOptions}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      backgroundColor: blueGrey[50],
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        lineHeight: "24px",
                        fontWeight: "700",
                        color: blueGrey[900],
                      }}
                    >
                      성별 지수
                    </Typography>
                    <Box
                      sx={{
                        mt: 1,
                        mb: 1,
                        height: 160,
                        position: "relative",
                      }}
                    >
                      <Chart
                        type="pie"
                        data={sexChartData}
                        options={sexChartOptions}
                      />
                      <Stack
                        spacing={0}
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-end",
                          }}
                        >
                          <Typography
                            sx={{
                              flex: 1,
                              fontSize: 12,
                              lineHeight: "24px",
                              fontWeight: "700",
                              color: blueGrey[700],
                              textAlign: "left",
                              mr: 0.5,
                            }}
                          >
                            남성
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 18,
                              lineHeight: "28px",
                              fontWeight: "700",
                              color: blueGrey[700],
                              textAlign: "right",
                              "& span": {
                                fontSize: 14,
                                lineHeight: "24px",
                              },
                            }}
                          >
                            48.6<span>%</span>
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-end",
                          }}
                        >
                          <Typography
                            sx={{
                              flex: 1,
                              fontSize: 12,
                              lineHeight: "24px",
                              fontWeight: "700",
                              color: blueGrey[700],
                              textAlign: "left",
                              mr: 0.5,
                            }}
                          >
                            여성
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 18,
                              lineHeight: "28px",
                              fontWeight: "700",
                              color: blueGrey[700],
                              textAlign: "right",
                              "& span": {
                                fontSize: 14,
                                lineHeight: "24px",
                              },
                            }}
                          >
                            51.2<span>%</span>
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      backgroundColor: blueGrey[50],
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        lineHeight: "24px",
                        fontWeight: "700",
                        color: blueGrey[900],
                      }}
                    >
                      연령 지수
                    </Typography>
                    <Box
                      sx={{
                        mt: 2,
                        height: 160,
                      }}
                    >
                      <Chart
                        type="doughnut"
                        data={ageChartData}
                        options={ageChartOptions}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      backgroundColor: blueGrey[50],
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 16,
                        lineHeight: "24px",
                        fontWeight: "700",
                        color: blueGrey[900],
                      }}
                    >
                      이슈성 지수
                    </Typography>
                    <Box
                      sx={{
                        mb: 1,
                        height: 160,
                        position: "relative",
                      }}
                    >
                      <Chart
                        type="doughnut"
                        data={issueChartData}
                        options={issueChartOptions}
                      />
                      <Stack
                        spacing={0}
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-end",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 32,
                              lineHeight: "40px",
                              fontWeight: "700",
                              color: blueGrey[700],
                              textAlign: "center",
                            }}
                          >
                            24.6
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 14,
                              lineHeight: "28px",
                              fontWeight: "700",
                              color: blueGrey[700],
                              textAlign: "center",
                              ml: 0.25,
                            }}
                          >
                            %
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: 12,
                            lineHeight: "16px",
                            fontWeight: "700",
                            color: blueGrey[700],
                            textAlign: "center",
                          }}
                        >
                          나쁘지 않군요.
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  p: theme.spacing(2, 2, 1, 2),
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    flex: 1,
                    p: theme.spacing(1),
                    fontSize: 18,
                    lineHeight: "28px",
                    fontWeight: "700",
                  }}
                >
                  추천 크리에이터
                </Typography>
                <ButtonBase
                  onClick={() => router.push("/insight/creator")}
                  sx={{
                    p: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: "20px",
                      color: blueGrey[500],
                      fontWeight: "700",
                    }}
                  >
                    전체보기
                  </Typography>
                  <Icon
                    name="angle-right"
                    size={12}
                    prefix="fas"
                    color={blueGrey[500]}
                  />
                </ButtonBase>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                  gridAutoColumn: "1fr",
                  gridTemplateRows: "auto auto",
                  gridRowGap: 8,
                  gridColumnGap: 8,
                  p: theme.spacing(0, 3, 3, 3),
                }}
                className="Container"
              >
                {testCreators.map((item, index) => {
                  return (
                    index < 5 && <CreatorItem key={index} item={item} small />
                  );
                })}
              </Box>
              <Box
                sx={{
                  p: theme.spacing(2, 2, 1, 2),
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    flex: 1,
                    p: theme.spacing(1),
                    fontSize: 18,
                    lineHeight: "28px",
                    fontWeight: "700",
                  }}
                >
                  추천 광고영상
                </Typography>
                <ButtonBase
                  onClick={() => router.push("/insight/video")}
                  sx={{
                    p: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: "20px",
                      color: blueGrey[500],
                      fontWeight: "700",
                    }}
                  >
                    전체보기
                  </Typography>
                  <Icon
                    name="angle-right"
                    size={12}
                    prefix="fas"
                    color={blueGrey[500]}
                  />
                </ButtonBase>
              </Box>
              <Box
                sx={{
                  p: theme.spacing(2, 2, 1, 2),
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    flex: 1,
                    p: theme.spacing(1),
                    fontSize: 18,
                    lineHeight: "28px",
                    fontWeight: "700",
                  }}
                >
                  추천 기획안
                </Typography>
                <ButtonBase
                  onClick={() => router.push("/insight/plan")}
                  sx={{
                    p: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: "20px",
                      color: blueGrey[500],
                      fontWeight: "700",
                    }}
                  >
                    전체보기
                  </Typography>
                  <Icon
                    name="angle-right"
                    size={12}
                    prefix="fas"
                    color={blueGrey[500]}
                  />
                </ButtonBase>
              </Box>
              <Box sx={{ height: 200 }} />
            </Box>
          ))}
        </SwipeableViews>
      </Panel>
    </Box>
  );
}
const totalChartData = {
  datasets: [
    {
      type: "doughnut" as const,
      label: "Dataset 1",
      data: [150, 20],
      backgroundColor: [blueGrey[800], blueGrey[100]],
      borderWidth: 0,
      spacing: 0,
    },
  ],
};
const totalChartOptions = {
  cutout: 60,
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          color: blueGrey[700],
          family: "Pretendard",
          weight: "700",
        },
      },
    },
  },
  maintainAspectRatio: false,
};
const trendChartData = {
  labels: ["6/2", "6/9", "6/16", "6/23", "6/30", "7/6", "7/13", "7/20"],
  datasets: [
    {
      type: "line" as const,
      label: "Dataset 1",
      data: [0.3, 40.5, 58.1, 90.8, 112.2, 140.3, 168.2, 300],
      pointRadius: 6,
      pointBorderWidth: 6,
      borderWidth: 8,
      backgroundColor: blueGrey[50],
      borderColor: blueGrey[800],
      curve: 3,
    },
    {
      type: "line" as const,
      label: "Dataset 2",
      data: [160, 100, 40, 84, 36, 64, 250, 150],
      pointRadius: 6,
      pointBorderWidth: 6,
      borderWidth: 8,
      backgroundColor: blueGrey[50],
      borderColor: green[500],
      curve: 3,
    },
  ],
};
const trendChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
        font: {
          size: 10,
          family: "Pretendard",
          weight: "700",
        },
        color: blueGrey[700],
      },
      grid: {
        // display: false,
        drawBorder: false,
      },
    },
    x: {
      ticks: {
        font: {
          size: 10,
          family: "Pretendard",
          weight: "700",
        },
        color: blueGrey[700],
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  maintainAspectRatio: false,
};
const keywordChartData = {
  labels: ["6/2", "6/9", "6/16", "6/23", "6/30", "7/6", "7/13", "7/20"],
  datasets: [
    {
      type: "bar" as const,
      label: "Dataset 1",
      data: [4, 40.5, 58.1, 90.8, 112.2, 140.3, 168.2, 300],
      borderWidth: 0,
      // backgroundColor: blueGrey[50],
      backgroundColor: blueGrey[800],
      pointBorderWidth: 0,
      barThickness: 12,
      borderRadius: 24,
      curve: 3,
    },
    {
      type: "bar" as const,
      label: "Dataset 2",
      data: [160, 100, 40, 84, 36, 64, 250, 150],
      borderWidth: 0,
      // backgroundColor: blueGrey[50],
      backgroundColor: pink[500],
      pointBorderWidth: 0,
      barThickness: 12,
      borderRadius: 24,
      curve: 3,
    },
  ],
};
const keywordChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
        font: {
          size: 10,
          family: "Pretendard",
          weight: "700",
        },
        color: blueGrey[700],
      },
      grid: {
        // display: false,
        drawBorder: false,
      },
    },
    x: {
      ticks: {
        font: {
          size: 10,
          family: "Pretendard",
          weight: "700",
        },
        color: blueGrey[700],
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  maintainAspectRatio: false,
};
const sexChartData = {
  labels: ["남성", "여성"],
  datasets: [
    {
      type: "doughnut" as const,
      label: "Dataset 1",
      data: [150, 200],
      backgroundColor: [indigo[500], pink[500]],
      borderWidth: 0,
      spacing: 10,
    },
  ],
};
const sexChartOptions = {
  cutout: 55,
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          color: blueGrey[700],
          family: "Pretendard",
          weight: "700",
        },
      },
    },
  },
  maintainAspectRatio: false,
};
const ageChartData = {
  labels: ages,
  datasets: [
    {
      type: "bar" as const,
      label: "Dataset 1",
      data: [12, 25, 32, 4],
      barThickness: 12,
      borderWidth: 0,
      borderRadius: 24,
      // backgroundColor: blueGrey[50],
      backgroundColor: blueGrey[800],
      pointBorderWidth: 0,
      curve: 3,
    },
  ],
};
const ageChartOptions = {
  indexAxis: "y" as const,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        font: {
          size: 10,
          family: "Pretendard",
          weight: "700",
        },
        color: blueGrey[700],
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    x: {
      ticks: {
        display: false,
        font: {
          size: 10,
          family: "Pretendard",
          weight: "700",
        },
        color: blueGrey[700],
      },
      grid: {
        // display: false,
        drawBorder: false,
      },
    },
  },
  maintainAspectRatio: false,
};
const issueChartData = {
  datasets: [
    {
      type: "doughnut" as const,
      label: "Dataset 1",
      data: [24, 86],
      backgroundColor: [blueGrey[800], blueGrey[100]],
      borderWidth: 0,
      spacing: 0,
    },
  ],
};
const issueChartOptions = {
  cutout: 60,
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          color: blueGrey[700],
          family: "Pretendard",
          weight: "700",
        },
      },
    },
  },
  maintainAspectRatio: false,
};
