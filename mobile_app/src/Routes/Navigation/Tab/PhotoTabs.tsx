import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Platform } from "react-native";
import Theme from "../../../GlobalLib/Styles/GlobalStyle/Theme";
import SelectPhoto from "../../Screens/Photo/SelectPhoto";
import TakePhoto from "../../Screens/Photo/TakePhoto";

let tabBarOptions_Bottom = 0;

if (Platform.OS === "ios") {
  tabBarOptions_Bottom = 20;
}

const { Navigator, Screen } = createMaterialTopTabNavigator();

export default () => (
  <Navigator
    tabBarPosition="bottom"
    tabBarOptions={{
      indicatorStyle: {
        backgroundColor: Theme.blackColor,
        marginBottom: tabBarOptions_Bottom,
      },
      labelStyle: {
        color: Theme.blackColor,
        fontWeight: "600",
      },
      style: {
        backgroundColor: "#FAFAFA",
        paddingBottom: tabBarOptions_Bottom,
      },
    }}
  >
    <Screen
      name="Select"
      component={SelectPhoto}
      options={{
        tabBarLabel: "Select",
      }}
    />
    <Screen
      name="Take"
      component={TakePhoto}
      options={{
        tabBarLabel: "Take",
      }}
    />
  </Navigator>
);
