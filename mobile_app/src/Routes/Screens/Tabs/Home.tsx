import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Icon from "../../../Components/ElementEtc/Icon";
import MessagesLink from "../../../Components/ElementEtc/MessagesLink";
import StackFactory from "../../Navigation/Stack/StackFactory";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default () => {
  return (
    <StackFactory
      initialRoute={HomeScreen}
      customConfig={{
        headerRight: () => <MessagesLink />,
        headerTitle: () => <Icon name="logo-instagram" size={36} />,
      }}
    />
  );
};
