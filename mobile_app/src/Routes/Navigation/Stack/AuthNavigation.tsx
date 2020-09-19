import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/Auth/Signup";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import AuthHome from "../screens/Auth/AuthHome";

const { Navigator, Screen } = createStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="AuthHome" component={AuthHome} />
        <Screen name="Signup" component={Signup} />
        <Screen name="Login" component={Login} />
        <Screen name="Confirm" component={Confirm} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
