import AsyncStorage from "@react-native-community/async-storage";
import React, { createContext, ReactNode, useContext, useState } from "react";

const AuthContext = createContext<AuthProviderReturnType | undefined>(
  undefined
);

export const AuthProvider = ({
  children,
  isLoggedIn: isLoggedInProp,
}: {
  children: ReactNode;
  isLoggedIn: null | boolean;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInProp);
  const logUserIn = async (token: string) => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "true");
      await AsyncStorage.setItem("jwt", token);
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };
  const logUserOut = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false);
    } catch (e) {
      console.log(e);
    }
  };

  const obj: AuthProviderReturnType = {
    isLoggedIn,
    logUserIn,
    logUserOut,
  };
  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};
interface AuthProviderReturnType {
  isLoggedIn: null | boolean;
  logUserIn: (token: string) => Promise<void>;
  logUserOut: () => Promise<void>;
}

export const useLoginAuth = () => {
  const state = useContext(AuthContext);
  if (!state) throw new Error("LoginChecking not found");
  return state;
};
