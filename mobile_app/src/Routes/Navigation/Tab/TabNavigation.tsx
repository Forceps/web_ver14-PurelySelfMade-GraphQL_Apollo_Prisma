import React from "react";
import Home from "../../screens/Tabs/Home";
import Search from "../../Screens/Tabs/Search";
import Notifications from "../../Screens/Tabs/Notifications";
import Profile from "../../Screens/Tabs/Profile";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackFactory from "../Stack/StackFactory";
import Icon from "../../../Components/ElementEtc/Icon";
import { useNavigation } from "@react-navigation/native";
import MessagesLink from "../../../Components/ElementEtc/MessagesLink";
import PhotoNavigation from "../Stack/PhotoNavigation";

const Tab = createBottomTabNavigator();

export default () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: "#FAFAFA" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={() => (
          <StackFactory
            initialRoute={Home}
            customConfig={{
              headerRight: () => <MessagesLink />,
              headerTitle: () => <Icon name="logo-instagram" size={36} />,
            }}
          />
        )}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-home" : "md-home"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={() => (
          <StackFactory
            initialRoute={Search}
            customConfig={{
              headerTitle: () => {
                return (
                  <Icon
                    size={28}
                    name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                  />
                );
              },
            }}
          />
        )}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={PhotoNavigation}
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
        name="Notifications"
        component={() => (
          <StackFactory
            initialRoute={Notifications}
            customConfig={{ title: "Notifications" }}
          />
        )}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              focused={focused}
              name={
                Platform.OS === "ios"
                  ? focused
                    ? "ios-heart"
                    : "ios-heart-empty"
                  : focused
                  ? "md-heart"
                  : "md-heart-empty"
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={() => (
          <StackFactory
            initialRoute={Profile}
            customConfig={{ title: "Profile" }}
          />
        )}
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
