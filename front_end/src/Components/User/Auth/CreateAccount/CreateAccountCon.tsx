import React, { useState } from "react";
import CreateAccountPre from "./CreateAccountPre";
import useInput from "../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMutation } from "@apollo/client";
import {
  CREATE_ACCOUNT,
  LOGIN_USER,
  LOCAL_LOG_IN,
} from "../../../../GlobalLib/Apollo/GraphQL_Client/User/UserCUD";
import { useShortMessage } from "../../../../GlobalLib/Context/EtcContext/ShortMessage/ShortMessage";

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface CreateAccountConProps {
  zIndex?: number;
  setSignUpMode: any;
}
export default ({ zIndex = 20, setSignUpMode }: CreateAccountConProps) => {
  const { addMessage } = useShortMessage();
  const username = useInput("");
  const email = useInput("");
  const password = useInput("");
  const Confirmpassword = useInput("");
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: username.value,
      email: email.value,
      password: password.value,
    },
  });
  const [loginUserMutation] = useMutation(LOGIN_USER, {
    variables: { password: password.value, email: email.value },
  });
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);
  const [Assurance, setAssurance] = useState(false);
  const UN_Bool = username.value.length > 60 || username.value.length < 2;
  const Email_Bool1 = email.value.length > 150;
  const Email_Bool2 = !emailRegex.test(email.value);
  const PW_Bool = password.value.length > 45 || password.value.length < 10;
  const CPW_Bool = password.value !== Confirmpassword.value;
  const totalBool =
    !UN_Bool && !Email_Bool1 && !Email_Bool2 && !PW_Bool && !CPW_Bool;

  const UN_ValidPop = () => {
    if (UN_Bool && username.value.length !== 0) {
      addMessage(
        "User name",
        "must be more than 1 characters and less than 60 characters."
      );
    }
  };
  const EmailValidPop = () => {
    if (Email_Bool1) {
      addMessage("e-mail", "must be less than 150 characters.");
    } else if (Email_Bool2 && email.value.length !== 0) {
      addMessage("e-mail", "email is invalid");
    }
  };
  const PW_ValidPop = () => {
    if (PW_Bool && password.value.length !== 0) {
      addMessage(
        "Password",
        "must be at least 10 characters and less than 45 characters."
      );
    }
  };
  const Assur = () => {
    setAssurance(false);
    if (totalBool) {
      setAssurance(true);
    }
  };
  const CPW_ValidPop = () => {
    if (CPW_Bool) {
      addMessage(
        "Confirm password",
        "Password and Confirm password do not match."
      );
    }
    Assur();
  };
  const AccountCreate = async () => {
    if (totalBool) {
      try {
        const {
          data: { createAccount },
        } = await createAccountMutation();
        switch (createAccount) {
          case "created":
            addMessage("welcome", "Loading...");
            const {
              data: { loginUser: result },
            } = await loginUserMutation();
            await localLogInMutation({ variables: { token: result } });
            return true;
          case "This email is already taken":
            addMessage("e-mail", "The email was already taken, Log in instead");
            return false;
          case "This username is already taken":
            addMessage(
              "User name",
              "The username was already taken, Log in instead"
            );
            return false;
        }
      } catch (e) {
        console.log(e);
        return false;
      }
    } else {
      addMessage("Empty value exists", "Please fill in all fields");
    }
  };
  return (
    <CreateAccountPre
      zIndex={zIndex}
      setSignUpMode={setSignUpMode}
      username={username}
      email={email}
      password={password}
      Confirmpassword={Confirmpassword}
      AccountCreate={AccountCreate}
      UN_ValidPop={UN_ValidPop}
      EmailValidPop={EmailValidPop}
      PW_ValidPop={PW_ValidPop}
      CPW_ValidPop={CPW_ValidPop}
      Assurance={Assurance}
      Assur={Assur}
    />
  );
};
