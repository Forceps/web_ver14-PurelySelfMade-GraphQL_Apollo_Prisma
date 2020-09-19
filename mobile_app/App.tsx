import { ApolloProvider } from "@apollo/client";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import { persistCache } from "apollo-cache-persist";
import { PersistentStorage } from "apollo-cache-persist/types";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider } from "styled-components";
import Loading from "./src/Components/ElementEtc/Effect/Loading";
import { client } from "./src/GlobalLib/Apollo/ApolloConnection";
import { cache } from "./src/GlobalLib/Apollo/LocalState/LocalState";
import { NOrU } from "./src/GlobalLib/RecycleFunction/etc/type_convert";
import Theme from "./src/GlobalLib/Styles/GlobalStyle/Theme";
import ContextApply from "./src/Routes/AppRoot/ContextApply";

const App = () => {
  const [Loaded, setLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null);
  const preLoad = async () => {
    // await AsyncStorage.clear(); //강제 로그아웃
    try {
      await Font.loadAsync({
        ...Ionicons.font,
      });
      await persistCache({
        cache,
        storage: AsyncStorage as PersistentStorage<string | null>,
      });
      const isLoggedIn2 = await AsyncStorage.getItem("isLoggedIn");
      if (NOrU(isLoggedIn2) || isLoggedIn2 === "false") {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return Loaded && isLoggedIn !== null ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <ContextApply isLoggedIn={isLoggedIn} />
      </ThemeProvider>
    </ApolloProvider>
  ) : (
    <Loading />
  );
};

AppRegistry.registerComponent("MyApplication", () => App);

export default App;
