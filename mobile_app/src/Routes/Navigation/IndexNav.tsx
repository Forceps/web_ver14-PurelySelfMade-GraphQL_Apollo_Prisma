import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Tab/TabNavigation";

const IndexNav = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default IndexNav;
