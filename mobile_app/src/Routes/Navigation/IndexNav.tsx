import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Tab/TabNavigation";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const IndexNav = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#fafafa" },
        }}
        headerMode="none"
        mode="modal"
      >
        <Screen name="TabNavigation" component={TabNavigation} />
      </Navigator>
    </NavigationContainer>
  );
};

export default IndexNav;
