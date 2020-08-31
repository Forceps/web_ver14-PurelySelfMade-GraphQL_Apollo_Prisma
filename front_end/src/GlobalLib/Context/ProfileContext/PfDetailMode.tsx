import React, {
  createContext,
  useState,
  useRef,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";

const ProfileDetailMode = createContext<PfDM_Obj | undefined>(undefined);
export const ProfileDetailModeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [Mode, setMode] = useState("recent"); //Mode = "popularity", "recent"
  const [AcMode, setAcMode] = useState("All"); //AcMode = "All", "Image", "Video", "Music"
  const recentState = useRef("Recent");
  const [CurrentPostPage, setCurrentPostPage] = useState(1);
  const [TotalPostCount, setTotalPostCount] = useState(0);
  const [PostOneTimeShow, setPostOneTimeShow] = useState(1);

  const Obj = {
    Mode,
    setMode,
    recentState,
    AcMode,
    setAcMode,
    CurrentPostPage,
    setCurrentPostPage,
    TotalPostCount,
    setTotalPostCount,
    PostOneTimeShow,
    setPostOneTimeShow,
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
  CurrentPostPage: number;
  setCurrentPostPage: Dispatch<SetStateAction<number>>;
  TotalPostCount: number;
  setTotalPostCount: Dispatch<SetStateAction<number>>;
  PostOneTimeShow: number;
  setPostOneTimeShow: Dispatch<SetStateAction<number>>;
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
