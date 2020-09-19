import React from "react";
import { View } from "react-native";
import AuthNavigation from "../Navigation/Stack/AuthNavigation";

export default ({ isLoggedIn }: NavControllerProps) => {
  return isLoggedIn ? <View /> : <AuthNavigation />;
};

interface NavControllerProps {
  isLoggedIn: null | boolean;
}
