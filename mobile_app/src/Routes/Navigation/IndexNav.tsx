import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./Stack/AuthNavigation";

const IndexNav = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default IndexNav;
