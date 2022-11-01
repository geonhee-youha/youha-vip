import { Backdrop } from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  alarmDrawerState,
  alertDialogState,
  campaignDrawerState,
  creatorPlanDrawerState,
  searchDrawerState,
} from "../../recoil";

export default function BackDrop() {
  const [searchDrawer, setSearchDrawer] = useRecoilState(searchDrawerState);
  const [alarmDrawer, setAlarmDrawer] = useRecoilState(alarmDrawerState);
  const [campaignDrawer, setCampaignDrawer] =
    useRecoilState(campaignDrawerState);
  const [creatorPlanDrawer, setCreatorPlanDrawer] = useRecoilState(
    creatorPlanDrawerState
  );
  const setAlertDialog = useSetRecoilState(alertDialogState);
  const handleClick = () => {
    if (searchDrawer.open) {
      setSearchDrawer((prev) => {
        return {
          ...prev,
          open: false,
        };
      });
      return;
    }
    if (alarmDrawer.open) {
      setAlarmDrawer((prev) => {
        return {
          ...prev,
          open: false,
        };
      });
      return;
    }
    // if (creatorPlanDrawer.open) {
    //   setCreatorPlanDrawer((prev) => {
    //     return {
    //       ...prev,
    //       open: false,
    //     };
    //   });
    //   return;
    // }
    if (campaignDrawer.open) {
      if (campaignDrawer.selectedId !== null) {
        setAlertDialog((prev) => {
          return {
            ...prev,
            open: true,
            title: "잠깐, 창을 닫기 전에...",
            body: "현재 진행내용을 저장하시겠습니까? 저장하기를 선택하시면 현재 상태가 저장됩니다.",
            cancel: {
              title: "삭제하기",
              onClick: () => {
                setCampaignDrawer((prev) => {
                  return {
                    open: false,
                    selectedId: null,
                  };
                });
                setCreatorPlanDrawer((prev) => {
                  return {
                    open: false,
                    selectedCreatorIds: [],
                    selectedPlanIds: [],
                  };
                });
              },
            },
            confirm: {
              title: "저장하기",
              onClick: () => {
                setCampaignDrawer((prev) => {
                  return {
                    ...prev,
                    open: false,
                  };
                });
                setCreatorPlanDrawer((prev) => {
                  return {
                    ...prev,
                    open: false,
                  };
                });
              },
            },
          };
        });
        return;
      } else {
        setCampaignDrawer((prev) => {
          return {
            ...prev,
            open: false,
          };
        });
        setCreatorPlanDrawer((prev) => {
          return {
            ...prev,
            open: false,
          };
        });
        return;
      }
    }
  };
  return (
    <Backdrop
      open={
        searchDrawer.open ||
        alarmDrawer.open ||
        campaignDrawer.open ||
        creatorPlanDrawer.open
      }
      onClick={handleClick}
      sx={{
        zIndex: 9999,
      }}
    />
  );
}
