import React, { createContext, useState, ReactNode, useContext } from "react";
import { SearchUserRequest } from "../../Apollo/GraphQL_Client/User/UserRseries/UserR";

const SearchUser = createContext<SearchUserContext | undefined>(undefined);
export const SearchUserProvider = ({ children }: { children: ReactNode }) => {
  const [KeyWord, setKeyWord] = useState("");

  const [loadGreeting, { called, data, loading, refetch }] = SearchUserRequest(
    KeyWord
  );

  const Obj = {
    KeyWord,
    setKeyWord,
    loadGreeting,
    called,
    data,
    loading,
    refetch,
  };
  return <SearchUser.Provider value={Obj}>{children}</SearchUser.Provider>;
};
interface SearchUserContext {
  KeyWord: string;
  setKeyWord: any;
  loadGreeting: any;
  called: boolean;
  data: any;
  loading: boolean;
  refetch: any;
}

export const useSearchUser = () => {
  const state = useContext(SearchUser);
  if (!state) throw new Error("SearchUser not found");
  return state;
};
