import React from "react";
import { ScrollView, Text } from "react-native";
import StackFactory from "../../Navigation/Stack/StackFactory";

const ProfileScreen = () => {
  return (
    <ScrollView>
      <Text>Profile</Text>
    </ScrollView>
  );
};

export default () => {
  return (
    <StackFactory
      initialRoute={ProfileScreen}
      customConfig={{ title: "Profile" }}
    />
  );
};
