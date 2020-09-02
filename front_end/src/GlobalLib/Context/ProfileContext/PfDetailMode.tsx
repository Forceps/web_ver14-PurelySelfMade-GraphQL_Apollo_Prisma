import React, {
  createContext,
  useState,
  useRef,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
  MutableRefObject,
  useEffect,
} from "react";
import { useProfileMode } from "./ProfileMode";

const ProfileDetailMode = createContext<PfDM_Obj | undefined>(undefined);
export const ProfileDetailModeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const PM = useProfileMode();
  const [Mode, setMode] = useState("recent"); //Mode = "popularity", "recent"
  const [AcMode, setAcMode] = useState("All"); //AcMode = "All", "Image", "Video", "Music"
  const recentState = useRef("Recent");
  const [CurrentPage, setCurrentPage] = useState(1);
  const [TotalCount, setTotalCount] = useState(0);
  const [OneTimeShow, setOneTimeShow] = useState(15);

  useEffect(() => {
    setCurrentPage(1);
    if (PM.Mode[0] === "Post") {
      setOneTimeShow(15);
    } else if (PM.Mode[0] === "Archive") {
      setOneTimeShow(16);
    }
  }, [PM.Mode]);

  const Obj = {
    Mode,
    setMode,
    recentState,
    AcMode,
    setAcMode,
    CurrentPage,
    setCurrentPage,
    TotalCount,
    setTotalCount,
    OneTimeShow,
    setOneTimeShow,
  };
  return (
    <ProfileDetailMode.Provider value={Obj}>
      {children}
    </ProfileDetailMode.Provider>
  );
};
interface PfDM_Obj {
  Mode: string;
  setMode: Dispatch<SetStateAction<string>>;
  AcMode: string;
  setAcMode: Dispatch<SetStateAction<string>>;
  recentState: MutableRefObject<string>;
  CurrentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  TotalCount: number;
  setTotalCount: Dispatch<SetStateAction<number>>;
  OneTimeShow: number;
  setOneTimeShow: Dispatch<SetStateAction<number>>;
}
export const useProfileDetailMode = () => {
  const state = useContext(ProfileDetailMode);
  if (!state) throw new Error("ProfileDetailMode not found");
  return state;
};

const DirSelectorMode = createContext<DirSelectorModeObj | undefined>(
  undefined
);
export const DirSelectorModeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [Mode, setMode] = useState(true);
  const Obj = { Mode, setMode };
  return (
    <DirSelectorMode.Provider value={Obj}>{children}</DirSelectorMode.Provider>
  );
};
interface DirSelectorModeObj {
  Mode: boolean;
  setMode: any;
}
export const useDirSelectorMode = () => {
  const state = useContext(DirSelectorMode);
  if (!state) throw new Error("DirSelectorMode not found");
  return state;
};
