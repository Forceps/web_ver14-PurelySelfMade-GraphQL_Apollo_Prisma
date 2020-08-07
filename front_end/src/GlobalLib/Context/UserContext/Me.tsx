import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLazyQuery } from "@apollo/client";
import { ME } from "../../Apollo/GraphQL_Client/User/UserRseries/UserR";
import { useLoginCheck } from "./IsLoggedIn";

interface MeContext {
  MEdata: MedataStructure;
  MEloading: boolean;
}
const MeContext = createContext<MeContext | undefined>(undefined);
export const MeProvider = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useLoginCheck();
  const [OnlyOnce, setOnlyOnce] = useState(true);
  const [queryLoad_me, { called, data, loading, refetch }] = useLazyQuery(ME);
  const MEdata = data?.me;
  const MEloading = loading || !called;
  const me = { MEdata, MEloading, refetch };

  useEffect(() => {
    if (isLoggedIn && OnlyOnce) {
      queryLoad_me();
      setOnlyOnce(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return <MeContext.Provider value={me}>{children}</MeContext.Provider>;
};
export const useMyInfo = () => {
  const state = useContext(MeContext);
  if (!state) throw new Error("MeContext not found");
  return state;
};

export interface MedataStructure {
  user_id: string;
  username: string;
  email: string;
  avatar: string;
  back_img: string;
  guaranteed_capacity: string;
  daily_allocated_capacity: string;
}
