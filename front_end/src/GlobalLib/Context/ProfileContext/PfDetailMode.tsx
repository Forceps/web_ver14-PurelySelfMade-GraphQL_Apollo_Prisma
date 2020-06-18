import React, {
  createContext,
  useState,
  useRef,
  ReactNode,
  useContext,
} from "react";

const ProfileDetailMode = createContext<PfDM_Obj | undefined>(undefined);
export const ProfileDetailModeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [Mode, setMode] = useState("TimeLine"); //Mode = "List", "TimeLine"
  const [AcMode, setAcMode] = useState("All"); //AcMode = "All", "Image", "Video", "Music"
  const recentState = useRef("TimeLine");
  const Obj = { Mode, setMode, recentState, AcMode, setAcMode };
  return (
    <ProfileDetailMode.Provider value={Obj}>
      {children}
    </ProfileDetailMode.Provider>
  );
};
interface PfDM_Obj {
  Mode: string;
  setMode: any;
  recentState: any;
  AcMode: string;
  setAcMode: any;
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
