import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

const App = () => {
  const [Loaded, setLoaded] = useState(false);
  return (
    <ApolloProvider client={client}>
      {Loaded ? (
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      ) : (
        <AppLoading />
      )}
    </ApolloProvider>
  );
};

AppRegistry.registerComponent("MyApplication", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
