import React from "react";
import { useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ComponentClass, FunctionComponent } from "react";
import Theme from "../../../GlobalLib/Styles/GlobalStyle/Theme";

const { Navigator, Screen } = createStackNavigator();

const StackFactory = ({ initialRoute, customConfig }: StackFactoryProps) => {
  const {
    params: { name },
  } = useRoute();
  return (
    <Navigator
      headerMode="none"
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
        component={Detail}
        options={{
          title: "Photo",
        }}
      />
      <Screen
        name="UserDetail"
        component={UserDetail}
        options={{
          title: name,
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
