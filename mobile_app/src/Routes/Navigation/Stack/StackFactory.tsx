import React from "react";
import { useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ComponentClass, FunctionComponent } from "react";
import Theme from "../../../GlobalLib/Styles/GlobalStyle/Theme";
import { View } from "react-native";

const { Navigator, Screen } = createStackNavigator();

const StackFactory = ({ initialRoute, customConfig }: StackFactoryProps) => {
  const { params } = useRoute<any>();
  return (
    <Navigator
      initialRouteName="initialRoute"
      screenOptions={{
        headerStyle: { backgroundColor: "#FAFAFA" },
        headerTitleAlign: "center",
        headerTintColor: Theme.blackColor,
        headerBackTitle: "null",
      }}
    >
      <Screen
        name="initialRoute"
        component={initialRoute}
        options={customConfig}
      />
      <Screen
        name="Detail"
        component={View}
        options={{
          title: "Photo",
        }}
      />
      <Screen
        name="UserDetail"
        component={View}
        options={{
          title: params?.name ?? "user",
        }}
      />
    </Navigator>
  );
};

interface StackFactoryProps {
  initialRoute: ComponentClass<any, any> | FunctionComponent<any>;
  customConfig: any;
}

export default StackFactory;
