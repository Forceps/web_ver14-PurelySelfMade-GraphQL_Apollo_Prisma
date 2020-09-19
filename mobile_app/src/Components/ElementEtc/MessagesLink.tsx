import React from "react";
import styled from "styled-components/native";
import { withNavigation } from "react-navigation";
import { Platform } from "react-native";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";

const Container = styled.TouchableOpacity`
  padding-right: 17px;
`;

export default withNavigation(() => {
  const nav = useNavigation();
  return (
    <Container onPress={() => nav.navigate("MessageNavigation")}>
      <Icon
        name={Platform.OS === "ios" ? "ios-paper-plane" : "md-paper-plane"}
      />
    </Container>
  );
});
