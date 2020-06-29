import React, { createContext, ReactNode, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { LOGIN_CHECK } from "../../Apollo/LocalState/auth/authQuery";

interface LoginCheckingLetGo {
  isLoggedIn: boolean;
}
const LoginChecking = createContext<LoginCheckingLetGo | undefined>(undefined);
export const LoginCheckingProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { isLoggedIn } = useQuery(LOGIN_CHECK).data;
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
