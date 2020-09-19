import { createStackNavigator } from "@react-navigation/stack";
import Theme from "../../../GlobalLib/Styles/GlobalStyle/Theme";
import UploadPhoto from "../../Screens/Photo/UploadPhoto";
import PhotoTabs from "../Tab/PhotoTabs";

const { Navigator, Screen } = createStackNavigator();

export default () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FAFAFA" },
        headerTitleAlign: "center",
        headerTintColor: Theme.blackColor,
      }}
    >
      <Screen
        name="PhotoTabs"
        component={PhotoTabs}
        options={{
          title: "Choose photo",
        }}
      />
      <Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{
          title: "Upload",
        }}
      />
    </Navigator>
  );
};
