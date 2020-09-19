import React, { useState } from "react";
import styled from "styled-components/native";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default ({ navigation }) => {
  const fNameInput = useInput("");
  const lNameInput = useInput("");
  const nameInput = useInput("");
  const emailInput = useInput(navigation.getParam("email", ""));
  const [loading, setLoading] = useState(false);
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      name: nameInput.value,
      email: emailInput.value,
      firstName: fNameInput.value,
      lastName: lNameInput.value,
    },
  });
  const handleSignup = async () => {
    const { value: fName } = fNameInput;
    const { value: lName } = lNameInput;
    const { value: name } = nameInput;
    const { value: email } = emailInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      return Alert.alert("That email is invalid");
    }
    if (fName === "") {
      return Alert.alert("First name is empty");
    }
    if (fName === "") {
      return Alert.alert("Invalid name");
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
          {...fNameInput}
          placeholder="First name"
          autoCorrect={false}
          autoCapitalize="words"
        />
        <AuthInput
          {...lNameInput}
          placeholder="Last name"
          autoCorrect={false}
          autoCapitalize="words"
        />
        <AuthInput
          {...emailInput}
          placeholder="email"
          keyboardType="email-address"
          returnKeyType="send"
          autoCorrect={false}
        />
        <AuthInput
          {...nameInput}
          placeholder="User name"
          returnKeyType="send"
          autoCorrect={false}
        />
        <AuthButton loading={loading} onPress={handleSignup} text="Sign up" />
      </View>
    </TouchableWithoutFeedback>
  );
};
