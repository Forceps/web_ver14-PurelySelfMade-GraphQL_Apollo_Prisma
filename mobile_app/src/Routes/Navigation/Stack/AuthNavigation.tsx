import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthHome from "../../Screens/Auth/AuthHome";
import SignUp from "../../Screens/Auth/SignUp";
import Login from "../../Screens/Auth/Login";
import Confirm from "../../Screens/Auth/Confirm";

const { Navigator, Screen } = createStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none" initialRouteName="AuthHome">
        <Screen name="AuthHome" component={AuthHome} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="Login" component={Login} />
        <Screen name="Confirm" component={Confirm} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
