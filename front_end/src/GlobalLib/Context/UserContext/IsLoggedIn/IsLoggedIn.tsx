import React, { createContext, ReactNode, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { LOGIN_CHECK } from "./IsLoggedInLib";

interface LoginCheckingLetGo {
  isLoggedIn: boolean;
}
const LoginChecking = createContext<LoginCheckingLetGo | undefined>(undefined);
export const LoginCheckingProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const isLoggedIn = useQuery(LOGIN_CHECK).data?.isLoggedIn;
  const obj = { isLoggedIn };

  return (
    <LoginChecking.Provider value={obj}>{children}</LoginChecking.Provider>
  );
};
export const useLoginCheck = () => {
  const state = useContext(LoginChecking);
  if (!state) throw new Error("LoginChecking not found");
  return state;
};
