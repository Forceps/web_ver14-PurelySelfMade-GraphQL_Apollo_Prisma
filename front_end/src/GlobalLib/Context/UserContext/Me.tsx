import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { ME } from "../../Apollo/GraphQL_Client/User/UserR";
import { useLoginCheck } from "./IsLoggedIn";

interface MeContext {
  MEdata: any;
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
