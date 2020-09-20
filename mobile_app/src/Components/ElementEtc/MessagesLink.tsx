import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import Icon from "./Icon";

const Container = styled.TouchableOpacity`
  padding-right: 17px;
`;

export default () => (
  <Container>
    <Icon name={Platform.OS === "ios" ? "ios-paper-plane" : "md-paper-plane"} />
  </Container>
);
