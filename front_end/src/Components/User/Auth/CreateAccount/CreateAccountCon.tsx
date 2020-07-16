import React, { useState } from "react";
import CreateAccountPre from "./CreateAccountPre";
import useInput from "../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMutation } from "@apollo/client";
import {
  CREATE_ACCOUNT,
  LOGIN_USER,
  LOCAL_LOG_IN,
} from "../../../../GlobalLib/Apollo/GraphQL_Client/User/UserCUD";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface CreateAccountConProps {
  zIndex?: number;
  setSignUpMode: any;
}
export default ({ zIndex = 20, setSignUpMode }: CreateAccountConProps) => {
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
  const [UN_Valid, setUN_Valid] = useState(false);
  const [EmailValid, setEmailValid] = useState([false, ""]);
  const [PW_Valid, setPW_Valid] = useState(false);
  const [CPW_Valid, setCPW_Valid] = useState(false);
  const [SignUp_Valid, setSignUp_Valid] = useState([false, ""]);
  const [Assurance, setAssurance] = useState(false);
  const UN_Bool = username.value.length > 60 || username.value.length < 2;
  const Email_Bool1 = email.value.length > 150;
  const Email_Bool2 = !emailRegex.test(email.value);
  const PW_Bool = password.value.length > 45 || password.value.length < 10;
  const CPW_Bool = password.value !== Confirmpassword.value;
  const totalBool =
    !UN_Bool && !Email_Bool1 && !Email_Bool2 && !PW_Bool && !CPW_Bool;
  const UN_ValidPop = () => {
    setUN_Valid(false);
    if (UN_Bool && username.value.length !== 0) {
      setUN_Valid(true);
    }
  };
  const EmailValidPop = () => {
    setEmailValid([false, ""]);
    if (Email_Bool1) {
      setEmailValid([true, "length"]);
    } else if (Email_Bool2 && email.value.length !== 0) {
      setEmailValid([true, "Regex"]);
    }
  };
  const PW_ValidPop = () => {
    setPW_Valid(false);
    if (PW_Bool && password.value.length !== 0) {
      setPW_Valid(true);
    }
  };
  const Assur = () => {
    setAssurance(false);
    if (totalBool) {
      setAssurance(true);
    }
  };
  const CPW_ValidPop = () => {
    setCPW_Valid(false);
    if (CPW_Bool) {
      setCPW_Valid(true);
    }
    Assur();
  };
  const AccountCreate = async () => {
    setSignUp_Valid([false, ""]);
    if (totalBool) {
      try {
        const {
          data: { createAccount },
        } = await createAccountMutation();
        if (createAccount) {
          setSignUp_Valid([true, "loading"]);
          const {
            data: { loginUser: result },
          } = await loginUserMutation();
          await localLogInMutation({ variables: { token: result } });
          return true;
        }
      } catch (e) {
        console.log(e);
        setSignUp_Valid([true, "error2"]);
        console.log("email taken", "Log in instead");
        return false;
      }
    } else {
      setSignUp_Valid([true, "error1"]);
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
      UN_Valid={UN_Valid}
      EmailValid={EmailValid}
      PW_Valid={PW_Valid}
      CPW_Valid={CPW_Valid}
      UN_ValidPop={UN_ValidPop}
      EmailValidPop={EmailValidPop}
      PW_ValidPop={PW_ValidPop}
      CPW_ValidPop={CPW_ValidPop}
      SignUp_Valid={SignUp_Valid}
      Assurance={Assurance}
      Assur={Assur}
    />
  );
};
