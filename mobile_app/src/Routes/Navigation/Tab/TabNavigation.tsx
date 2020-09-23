import React from "react";
import Home from "../../Screens/Tabs/Home/HomeCon";
import Bookmark from "../../Screens/Tabs/Bookmark";
import Comment from "../../Screens/Tabs/Comment";
import Profile from "../../Screens/Tabs/Profile";
import { Platform, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "../../../Components/ElementEtc/Icon";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: "#FAFAFA" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              focused={focused}
              name="home-outline"
              size={27}
              kind="MaterialCommunityIcons"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              focused={focused}
              name={focused ? "bookmark" : "bookmark-o"}
              kind="FontAwesome"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={View}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-add" : "md-add"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Comment"
        component={Comment}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              focused={focused}
              name={focused ? "comment" : "comment-o"}
              kind="FontAwesome"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-person" : "md-person"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default React.memo(TabNavigation);
