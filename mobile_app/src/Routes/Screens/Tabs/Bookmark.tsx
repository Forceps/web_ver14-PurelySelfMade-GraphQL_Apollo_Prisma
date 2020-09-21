import React from "react";
import { Platform, ScrollView, Text } from "react-native";
import Icon from "../../../Components/ElementEtc/Icon";
import StackFactory from "../../Navigation/Stack/StackFactory";

const SearchScreen = () => {
  return (
    <ScrollView>
      <Text>Search</Text>
    </ScrollView>
  );
};

export default () => {
  return (
    <StackFactory
      initialRoute={SearchScreen}
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
  );
};
