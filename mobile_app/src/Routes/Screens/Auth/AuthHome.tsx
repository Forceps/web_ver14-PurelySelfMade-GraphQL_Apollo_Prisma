import React from "react";
import styled from "styled-components/native";
import constants from "../../constants";
import AuthButton from "../../components/AuthButton";
import { useNavigation } from "@react-navigation/native";

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
  color: ${(props) => props.theme.blueColor};
  font-weight: 600;
`;

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <AuthButton
        text={"Create New Account"}
        onPress={() => navigation.navigate("SignUp")}
      />
      <Touchable onPress={() => navigation.navigate("Login")}>
        <LoginLink>
          <LoginLinkText>Log in</LoginLinkText>
        </LoginLink>
      </Touchable>
    </View>
  );
};
