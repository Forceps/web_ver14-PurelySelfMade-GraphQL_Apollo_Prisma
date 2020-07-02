import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import {
  SEE_FRIENDS,
  SeeFriendsLazyRequest,
} from "../../Apollo/GraphQL_Client/Relation/Friend/FriendR";
import { useLoginCheck } from "./IsLoggedIn";

const SeeFriends = createContext<SeeFriendsContext | undefined>(undefined);
export const SeeFriendsProvider = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useLoginCheck();
  const [proposer, setProposer] = useState(0);

  const [
    loadGreeting,
    { called, data: whF, loading: whF_load, refetch: whF_refetch },
  ] = SeeFriendsLazyRequest(proposer);
  const [
    queryLoad_MyF,
    {
      called: myF_called,
      data: myF,
      loading: myF_loading,
      refetch: myF_refetch,
    },
  ] = useLazyQuery(SEE_FRIENDS);
  const myF_load = myF_loading || !myF_called;
  useEffect(() => {
    if (isLoggedIn && proposer !== 0) {
      queryLoad_MyF();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Obj = {
    proposer,
    setProposer,
    loadGreeting,
    called,
    whF,
    whF_load,
    whF_refetch,
    myF,
    myF_load,
    myF_refetch,
  };
  return <SeeFriends.Provider value={Obj}>{children}</SeeFriends.Provider>;
};
interface SeeFriendsContext {
  proposer: number;
  setProposer: any;
  loadGreeting: any;
  called: boolean;
  whF: any;
  whF_load: boolean;
  whF_refetch: any;
  myF: any;
  myF_load: boolean;
  myF_refetch: any;
}

export const useSeeFriends = () => {
  const state = useContext(SeeFriends);
  if (!state) throw new Error("SeeFriends not found");
  return state;
};
