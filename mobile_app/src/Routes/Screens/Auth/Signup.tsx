import React, { useState } from "react";
import styled from "styled-components/native";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT } from "../../../GlobalLib/Apollo/GraphQL_Client/User/UserCUD";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default () => {
  const navigation = useNavigation();
  const nameInput = useInput("");
  const emailInput = useInput(navigation.getParam("email", ""));
  const PwInput = useInput("");
  const [loading, setLoading] = useState(false);
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: nameInput.value,
      email: emailInput.value,
      password: PwInput.value,
    },
  });
  const handleSignup = async () => {
    const { value: PW } = PwInput;
    const { value: name } = nameInput;
    const { value: email } = emailInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      return Alert.alert("That email is invalid");
    }
    if (PW === "") {
      return Alert.alert("First name is empty");
    }
    try {
      setLoading(true);
      const {
        data: { createAccount },
      } = await createAccountMutation();
      if (createAccount) {
        Alert.alert("Account created", "Log in now");
        navigation.navigate("Login", { email });
      }
    } catch (err) {
      console.log(err);
      Alert.alert("User name taken", "Log in instead");
      navigation.navigate("Login", { email });
    } finally {
      setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...nameInput}
          placeholder="User name"
          returnKeyType="send"
          autoCorrect={false}
        />
        <AuthInput
          {...emailInput}
          placeholder="email"
          keyboardType="email-address"
          returnKeyType="send"
          autoCorrect={false}
        />
        <AuthInput {...PwInput} placeholder="Password" autoCorrect={false} />
        <AuthButton loading={loading} onPress={handleSignup} text="Sign up" />
      </View>
    </TouchableWithoutFeedback>
  );
};
