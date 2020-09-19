import React, {
  createContext,
  useState,
  useRef,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { useProfileMode } from "./ProfileMode";
import {
  FindMyPostDirRequest,
  FindMyArchiveDirRequest,
} from "../../Apollo/GraphQL_Client/Directory/DirectoryR";
import { useLoginAuth } from "../UserContext/LoginAuth";

const CurrentDirLocation = createContext<DirMode | undefined>(undefined);
export const CDLProvider = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useLoginAuth();
  const { Mode } = useProfileMode();
  const [OnlyOnce, setOnlyOnce] = useState(true);
  const [Location, setLocation] = useState(0);
  const rememberLocation = useRef(0);
  const [DirData, setDirData] = useState(null);
  const [DirData_loading, setDirData_loading] = useState(true);
  const [DirData_refetch, setDirData_refetch]: any = useState(null);
  const [
    queryLoad_Pdir,
    { data: PsData, loading: PsLoading, refetch: PsRefetch },
  ] = FindMyPostDirRequest(Location);
  const [
    queryLoad_Adir,
    { data: AcData, loading: AcLoading, refetch: AcRefetch },
  ] = FindMyArchiveDirRequest(Location);

  useEffect(() => {
    if (Mode[0] === "Post") {
      setDirData(PsData?.findMyPostDir);
      setDirData_loading(PsLoading);
      setDirData_refetch(() => PsRefetch);
    } else if (Mode[0] === "Archive") {
      setDirData(AcData?.findMyArchiveDir);
      setDirData_loading(AcLoading);
      setDirData_refetch(() => AcRefetch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Mode, PsLoading, AcLoading, Location, PsData, AcData]);

  const [RemmPostDirLo, setRemmPostDirLo] = useState(0);
  const [RemmArcvDirLo, setRemmArcvDirLo] = useState(0);
  useEffect(() => {
    if (Mode[0] === "Post") {
      setRemmPostDirLo(Location);
    } else if (Mode[0] === "Archive") {
      setRemmArcvDirLo(Location);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Location]);
  useEffect(() => {
    if (Mode[0] === "Post") {
      setLocation(RemmPostDirLo);
    } else if (Mode[0] === "Archive") {
      setLocation(RemmArcvDirLo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Mode[0]]);
  useEffect(() => {
    if (isLoggedIn && OnlyOnce) {
      queryLoad_Pdir();
      queryLoad_Adir();
      setOnlyOnce(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const Obj = {
    Location,
    setLocation,
    rememberLocation,
    DirData,
    DirData_loading,
    DirData_refetch,
  };
  return (
    <CurrentDirLocation.Provider value={Obj}>
      {children}
    </CurrentDirLocation.Provider>
  );
};
interface DirMode {
  Location: number;
  setLocation: any;
  rememberLocation: any;
  DirData: any;
  DirData_loading: any;
  DirData_refetch: any;
}

export const useDirMode = () => {
  const state = useContext(CurrentDirLocation);
  if (!state) throw new Error("CurrentDirLocation not found");
  return state;
};
