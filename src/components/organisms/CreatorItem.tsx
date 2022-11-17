import {
  alpha,
  Box,
  Button,
  ButtonBase,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ageFilter, sexFilter } from "../../constants";
import {
  checkedCreatorIdsState,
  checkedPlaylistIdsState,
  favoritedCreatorIdsState,
  PlaylistProps,
  testPlaylists,
} from "../../datas";
import { creatorDialogState, creatorDrawerState } from "../../recoil";
import { theme } from "../../themes/theme";
import youhaBlue from "../../themes/youhaBlue";
import { displayedAt, setKoNumber } from "../../utils";
import DataCell from "../atoms/DataCell";
import Icon from "../atoms/Icon";
import Typo from "../atoms/Typo";
import dayjs from "dayjs";

export default function CreatorItem({
  item,
  playlists: playlistsOrigin,
  checkMode,
  tempCheck,
  forceCheck,
  inHome,
}: {
  item: any;
  playlists?: PlaylistProps[];
  big?: boolean;
  checkMode?: boolean;
  tempCheck?: boolean;
  forceCheck?: boolean;
  inHome?: boolean;
}) {
  const { id, thumbnail, title, subscriberCount, CPV } = item;
  const [creatorDrawer, setCreatorDrawer] = useRecoilState(creatorDrawerState);
  const [favoritedCreatorIds, setFavoritedCreatorIds] = useRecoilState(
    favoritedCreatorIdsState
  );
  const [checkedCreatorIds, setCheckedCreatorIds] = useRecoilState(
    checkedCreatorIdsState
  );
  const [checkedPlaylistIds, setCheckedPlaylistIds] = useRecoilState(
    checkedPlaylistIdsState
  );
  const setCreatorDialog = useSetRecoilState(creatorDialogState);
  const targetCheckList = tempCheck
    ? checkedCreatorIds
    : creatorDrawer.selectedCreatorIds;
  const checked =
    (forceCheck || checkMode) &&
    _.findIndex(targetCheckList, (el) => el === id) !== -1;
  const favorited = favoritedCreatorIds.includes(id);
  const playlists = _.filter(
    testPlaylists,
    (el: any) => el.youtubeCreatorId === id
  );
  const checkedPlaylists = _.filter(
    playlists,
    (el: any) =>
      el.youtubeCreatorId === id && checkedPlaylistIds.includes(el.id)
  );
  const handleClick = () => {
    setCreatorDialog((prev) => {
      return {
        ...prev,
        open: true,
        id: id,
        index: 0,
        checkMode: !tempCheck && checkMode ? true : false,
        forceCheck: forceCheck,
      };
    });
  };
  const handleClickCheck = () => {
    if (tempCheck) {
      setCheckedCreatorIds((prev) => {
        let prevSelectedIds = _.cloneDeep(prev);
        if (prevSelectedIds.includes(id)) {
          prevSelectedIds = _.filter(prevSelectedIds, (el) => el !== id);
        } else {
          prevSelectedIds = [...prevSelectedIds, id];
        }
        return prevSelectedIds;
      });
      return;
    }
    setCreatorDrawer((prev) => {
      let prevPass = _.cloneDeep(prev.pass);
      let prevSelectedIds = _.cloneDeep(prev.selectedCreatorIds);
      if (prevSelectedIds.includes(id)) {
        prevSelectedIds = _.filter(prevSelectedIds, (el) => el !== id);
      } else {
        prevPass = false;
        prevSelectedIds = [...prevSelectedIds, id];
      }
      return {
        ...prev,
        pass: prevPass,
        selectedCreatorIds: prevSelectedIds,
      };
    });
  };
  const handleClickFavorite = () => {
    setFavoritedCreatorIds((prev) => {
      let prevList = _.cloneDeep(prev);
      if (prevList.includes(id)) {
        prevList = _.filter(prevList, (el) => el !== id);
      } else {
        prevList = [...prevList, id];
      }
      return prevList;
    });
  };
  const handleClickPlaylist = () => {
    setCreatorDialog((prev) => {
      return {
        ...prev,
        open: true,
        id: id,
        index: 1,
        checkMode: true,
      };
    });
  };
  const vip = true;
  const averagePrice =
    Math.floor(
      (!isNaN(Number(item.basicPPLPrice)) ? Number(item.basicPPLPrice) : 0) +
        (!isNaN(Number(item.advancedPPLPrice))
          ? Number(item.advancedPPLPrice)
          : 0) +
        (!isNaN(Number(item.brandedCommercialPrice))
          ? Number(item.brandedCommercialPrice)
          : 0) +
        (!isNaN(Number(item.featuringPrice))
          ? Number(item.featuringPrice)
          : 0) /
          ((!isNaN(Number(item.basicPPLPrice)) ? 1 : 0) +
            (!isNaN(Number(item.advancedPPLPrice)) ? 1 : 0) +
            (!isNaN(Number(item.brandedCommercialPrice)) ? 1 : 0) +
            (!isNaN(Number(item.featuringPrice)) ? 1 : 0))
    ) * 10000;
  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
        position: "relative",
        display: "flex",
        alignSelf: "flex-start",
      }}
    >
      <ButtonBase
        sx={{
          flex: 1,
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          borderRadius: 1,
          border: `1px solid ${
            tempCheck && checked ? youhaBlue[500] : blueGrey[100]
          } !important`,
          boxShadow: `2px 2px 4px 0px ${alpha("#000000", 0.08)}`,
          "& *": {
            cursor: "pointer",
          },
          cursor: "pointer",
          backgroundColor: "#ffffff",
          pb:
            forceCheck ||
            (!tempCheck && checkMode && checkedPlaylists.length > 0)
              ? `${
                  (checkedPlaylists.length > 3
                    ? forceCheck
                      ? 208.74 - 16 - 40
                      : 208.74 - 16
                    : forceCheck
                    ? 133.38 - 8 - 16 - 40
                    : 133.38 - 8) + 28
                }px`
              : !tempCheck && checkMode
              ? `${208.74 - 133.38 - 16}px`
              : 0,
        }}
        onClick={handleClick}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: theme.spacing(2),
          }}
        >
          <Box
            sx={{
              mt: 1,
              mb: 1,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: 104,
                height: 104,
                borderRadius: "50%",
                border: `1px solid ${
                  tempCheck && checked ? youhaBlue[100] : blueGrey[100]
                } !important`,
                overflow: "hidden",
              }}
            >
              <img
                src={thumbnail}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                }}
              />
            </Box>
            {vip && (
              <>
                <Box
                  sx={{
                    position: "absolute",
                    top: -8,
                    left: -8,
                    right: -8,
                    bottom: -8,
                    borderRadius: "50%",
                    border: `4px solid ${pink[500]}`,
                  }}
                ></Box>
                {/* <Box
                  sx={{
                    position: "absolute",
                    right: -8,
                    bottom: -8,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: blueGrey[900],
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: -40,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      overflow: "hidden",
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        left: -2,
                        bottom: -2,
                        display: "flex",
                        alignItems: "flex-end",
                        "& img": {
                          width: 40,
                        },
                      }}
                    >
                      <img src="/images/rocket.png" />
                    </Box>
                  </Box>
                </Box> */}
                {item.mcn && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: -100,
                      right: -100,
                      bottom: -8,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: 0.5,
                        height: 24,
                        p: theme.spacing(0, 1),
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: pink[500],
                      }}
                    >
                      <img
                        src="/images/rocket.png"
                        style={{ height: 16, marginRight: 4 }}
                      />
                      <Typography
                        sx={{
                          fontSize: 14,
                          lineHeight: "20px",
                          fontWeight: "700",
                          color: "#ffffff",
                        }}
                      >
                        {item.mcn}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </>
            )}
          </Box>
          <Stack spacing={1} alignItems="center" sx={{ mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent:'center',
                mr: -0.5
              }}
            >
              <Box
                sx={{
                  mr: 0.5,
                  mb: 0.5,
                  borderRadius: 0.5,
                  height: 20,
                  p: theme.spacing(0, 0.75),
                  display: "flex",
                  alignItems: "center",
                  backgroundColor:
                    tempCheck && checked ? youhaBlue[50] : pink[50],
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    lineHeight: "16px",
                    fontWeight: "700",
                    color: tempCheck && checked ? youhaBlue[500] : pink[500],
                  }}
                >
                  {item.channelCategory}
                </Typography>
              </Box>
              {item.availableForSaleAt.includes("W") && (
                <Box
                  sx={{
                    mr: 0.5,
                    mb: 0.5,
                    borderRadius: 0.5,
                    height: 20,
                    p: theme.spacing(0, 0.75),
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: youhaBlue[50],
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      lineHeight: "16px",
                      fontWeight: "700",
                      // color: colors[adSet.id][500],
                      color: youhaBlue[500],
                    }}
                  >
                    {dayjs(
                      new Date(
                        new Date().getFullYear(),
                        new Date().getMonth(),
                        new Date().getDate() +
                          Number(item.availableForSaleAt.replace("W", "")) * 7
                      )
                    ).format("YYYY년 MM월 DD일~ ")}
                  </Typography>
                </Box>
              )}
            </Box>
          </Stack>
          <Typo
            lines={1}
            sx={{
              pt: 0.5,
              fontSize: 18,
              lineHeight: "28px",
              fontWeight: "700",
              color: tempCheck && checked ? youhaBlue[500] : blueGrey[900],
              wordBreak: "break-all",
            }}
          >
            {title}
          </Typo>
          <Typography
            sx={{
              mt: 0.5,
              fontSize: 14,
              lineHeight: "20px",
              color: tempCheck && checked ? youhaBlue[500] : blueGrey[700],
            }}
          >
            구독자 {`${setKoNumber(subscriberCount)}명`}
          </Typography>
        </Box>
        {!inHome && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              p: theme.spacing(0, 2, 2, 2),
            }}
          >
            <Box
              sx={{
                backgroundColor:
                  tempCheck && checked ? youhaBlue[50] : blueGrey[50],
                borderRadius: 1,
                p: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridAutoColumn: "1fr",
                  gridTemplateRows: "auto auto",
                  gridRowGap: 0,
                }}
              >
                {/* <DataCell
                tempCheck={tempCheck}
                checked={checked}
                label="영향력 지수"
                value={`높음`}
              />
              <DataCell
                tempCheck={tempCheck}
                checked={checked}
                label="트렌드 지수"
                value={`56점`}
              />
              <DataCell
                tempCheck={tempCheck}
                checked={checked}
                label="타겟 적합도"
                value={`${98}%`}
              /> */}
                <DataCell
                  tempCheck={tempCheck}
                  checked={checked}
                  label="타겟"
                  value={`${item.targetGender[0]} / ${item.targetAge[0]}`}
                />
                <DataCell
                  tempCheck={tempCheck}
                  checked={checked}
                  label="응답율"
                  value={"100%"}
                />
                <DataCell
                  tempCheck={tempCheck}
                  checked={checked}
                  label="평균 단가"
                  value={`${setKoNumber(averagePrice)}원`}
                />
                <DataCell
                  tempCheck={tempCheck}
                  checked={checked}
                  label="예상 CPV"
                  value={CPV ? `${CPV.toFixed(0)}원/회` : "집계중"}
                />
                {/* <DataCell
                tempCheck={tempCheck}
                checked={checked}
                label="집행가능일"
                value={`11월 1일~`}
              /> */}
              </Box>
            </Box>
          </Box>
        )}
      </ButtonBase>
      {checkMode && (
        <Stack
          spacing={1}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
        >
          <IconButton
            sx={{
              width: 32,
              height: 32,
              backgroundColor: `${
                tempCheck && checked ? youhaBlue[500] : "#ffffff"
              } !important`,
              border: `1px solid ${
                tempCheck && checked ? youhaBlue[500] : blueGrey[100]
              }`,
              boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
              zIndex: 98,
              borderRadius: 0.5,
              transition: "none",
            }}
            onClick={handleClickCheck}
          >
            <Icon
              name={!tempCheck && checked ? "trash-alt" : "check"}
              prefix="fas"
              size={16}
              color={
                !tempCheck && checked
                  ? blueGrey[300]
                  : checked
                  ? "#ffffff"
                  : blueGrey[300]
              }
            />
          </IconButton>
        </Stack>
      )}
      {!forceCheck && !tempCheck && !checkMode && (
        <Stack
          spacing={1}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
          }}
        >
          <IconButton
            sx={{
              width: 32,
              height: 32,
              backgroundColor: `${
                favorited ? pink[500] : "#ffffff"
              } !important`,
              border: `1px solid ${favorited ? pink[500] : blueGrey[100]}`,
              boxShadow: `2px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
              zIndex: 98,
              borderRadius: 0.5,
              transition: "none",
            }}
            onClick={handleClickFavorite}
          >
            <Icon
              name="heart"
              prefix="fas"
              size={16}
              color={favorited ? "#ffffff" : blueGrey[300]}
            />
          </IconButton>
        </Stack>
      )}
      {(forceCheck || (checkMode && !tempCheck)) && (
        <Stack
          spacing={2}
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            p: theme.spacing(2),
            zIndex: 9,
          }}
          onClick={handleClickPlaylist}
        >
          {checkedPlaylists.length > 0 && (
            <Typography
              sx={{
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: "700",
                opacity: checked ? 1 : 0.4,
                mb: -1,
                color: checked
                  ? tempCheck
                    ? blueGrey[900]
                    : youhaBlue[500]
                  : blueGrey[900],
              }}
            >
              관련 기획안
            </Typography>
          )}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridAutoColumn: "1fr",
              gridTemplateRows: "auto",
              gridGap: 8,
              opacity: checked ? 1 : 0.4,
            }}
          >
            {checkedPlaylists.length > 0 ? (
              <>
                {checkedPlaylists.map((item, index) => {
                  return index < 5 ? (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        borderRadius: 0.5,
                        border: `1px solid ${youhaBlue[500]} !important`,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          pt: "56.25%",
                        }}
                      >
                        <img
                          src={item?.thumbnail}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            objectFit: "cover",
                          }}
                        />
                        {/* <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: alpha(youhaBlue[500], 0.8),
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 10,
                              lineHeight: "14px",
                              color: "#ffffff",
                              fontWeight: "700",
                            }}
                          >
                            {item.count}
                          </Typography>
                          <Icon
                            name="list-ul"
                            prefix="fas"
                            size={12}
                            color="#ffffff"
                            sx={{ mt: 0.25 }}
                          />
                        </Box> */}
                        {!forceCheck && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: 4,
                              left: 4,
                              width: 20,
                              height: 20,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 0.25,
                              backgroundColor: youhaBlue[500],
                            }}
                          >
                            <Icon name="check" color="#ffffff" size={10} />
                          </Box>
                        )}
                      </Box>
                    </Box>
                  ) : null;
                })}
                {checkedPlaylists.length > 5 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                        lineHeight: "20px",
                        fontWeight: "700",
                        color: checked
                          ? tempCheck
                            ? blueGrey[900]
                            : youhaBlue[500]
                          : blueGrey[300],
                      }}
                    >
                      더보기
                    </Typography>
                  </Box>
                )}
              </>
            ) : null}
          </Box>
          {!forceCheck && (
            <Button
              fullWidth
              variant="outlined"
              color={checked ? "primary" : "secondary"}
              sx={{
                height: 40,
                minHeight: 40,
                borderColor: checked
                  ? youhaBlue[500]
                  : `${blueGrey[100]} !important`,
                color: checked ? youhaBlue[500] : blueGrey[300],
                transition: "background-color 0.35s ease",
              }}
              onClick={handleClickPlaylist}
            >
              {checked && checkedPlaylists.length > 0
                ? `${checkedPlaylists.length} / ${playlists.length}개의 기획안 선택중`
                : `${playlists.length}개의 기획안 선택가능`}
            </Button>
          )}
        </Stack>
      )}
    </Box>
  );
}
