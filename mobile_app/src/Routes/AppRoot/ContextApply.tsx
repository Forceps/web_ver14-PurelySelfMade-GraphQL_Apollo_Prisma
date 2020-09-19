import React from "react";
import { View } from "react-native";
import ContextProvider from "../../GlobalLib/Context/Lib/ContextProvider";
import { DummyStateProvider } from "../../GlobalLib/Context/Lib/DummyState";
import { AuthProvider } from "../../GlobalLib/Context/UserContext/LoginAuth";
import { MeProvider } from "../../GlobalLib/Context/UserContext/Me";
import Router from "./Router";

export default ({ isLoggedIn }: ContextApplyProps) => {
  return (
    <View style={{ flex: 1 }}>
      <AuthProvider isLoggedIn={isLoggedIn}>
        <ContextProvider
          contexts={[MeProvider, DummyStateProvider]} //위에 배치될수록 더 하위의 컴포넌트가 된다.
        >
          <Router isLoggedIn={isLoggedIn} />
        </ContextProvider>
      </AuthProvider>
    </View>
  );
};
interface ContextApplyProps {
  isLoggedIn: null | boolean;
}
