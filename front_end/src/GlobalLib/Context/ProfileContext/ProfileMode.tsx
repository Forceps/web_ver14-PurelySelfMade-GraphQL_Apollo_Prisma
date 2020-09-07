import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useRef,
} from "react";

const PMode = createContext<DirSelectorModeObj | undefined>(undefined);
export const PModeProvider = ({ children }: { children: ReactNode }) => {
  const [Mode, setMode] = useState(["Social"]);
  //"Post", "Archive", "Chat", "Settings", "Social"
  const rememberLatestMode = useRef(["Post"]);
  const Obj = { Mode, setMode, rememberLatestMode };

  return <PMode.Provider value={Obj}>{children}</PMode.Provider>;
};
interface DirSelectorModeObj {
  Mode: any[];
  setMode: any;
  rememberLatestMode: any;
}
export const useProfileMode = () => {
  const state = useContext(PMode);
  if (!state) throw new Error("PMode not found");
  return state;
};
