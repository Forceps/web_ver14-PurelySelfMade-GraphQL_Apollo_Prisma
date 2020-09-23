import React from "react";
import styled from "styled-components/native";
import StackFactory from "../../Navigation/Stack/StackFactory";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

const NotificationScreen = () => {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};

export default () => {
  return (
    <StackFactory
      initialRoute={NotificationScreen}
      customConfig={{ title: "Notifications" }}
    />
  );
};
