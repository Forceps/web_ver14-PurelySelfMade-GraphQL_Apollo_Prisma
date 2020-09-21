import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Theme from "../../../GlobalLib/Styles/GlobalStyle/Theme";
import constants from "../../../GlobalLib/Styles/IteratePattern/constants";
import { Text, TouchableOpacity } from "react-native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.Image`
  width: ${constants.width / 2};
  margin-bottom: -70px;
  margin-top: -80px;
`;

const Touchable = styled.TouchableOpacity``;

const LoginLink = styled.View``;
const LoginLinkText = styled.Text`
  color: ${Theme.blueColor};
  font-weight: 600;
`;

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Create New Account</Text>
      </TouchableOpacity>
      <Touchable onPress={() => navigation.navigate("Login")}>
        <LoginLink>
          <LoginLinkText>Log in</LoginLinkText>
        </LoginLink>
      </Touchable>
    </View>
  );
};
