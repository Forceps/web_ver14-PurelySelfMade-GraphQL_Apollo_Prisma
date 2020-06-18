import React, { useState } from "react";
import AuthPre from "./LoginModalPre";
import useInput from "../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMutation } from "@apollo/react-hooks";
import {
  LOGIN_USER,
  LOCAL_LOG_IN,
} from "../../../../GlobalLib/Apollo/GraphQL_Client/User/UserCUD";

export default ({ zIndex = 10, setLoginModalOpen }: LoginModalConProps) => {
  const email = useInput("");
  const PW = useInput("");
  const [SignUpMode, setSignUpMode] = useState(false);
  const [LoginDisable, setLoginDisable] = useState([false, ""]);
  const [loginUserMutation] = useMutation(LOGIN_USER, {
    variables: { password: PW.value, email: email.value },
  });
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);
  const LogInTrigger = async () => {
    try {
      const {
        data: { loginUser: result },
      } = await loginUserMutation();
      if (result === "emailNotExist") {
        setLoginDisable([true, "emailNotExist"]);
      } else if (result === "WorngPW") {
        setLoginDisable([true, "WorngPW"]);
      } else {
        if (result !== "" && result !== undefined) {
          localLogInMutation({ variables: { token: result } });
          setLoginDisable([false, ""]);
        } else {
          throw Error();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AuthPre
      setLoginModalOpen={setLoginModalOpen}
      zIndex={zIndex}
      email={email}
      PW={PW}
      SignUpMode={SignUpMode}
      setSignUpMode={setSignUpMode}
      LogInTrigger={LogInTrigger}
      LoginDisable={LoginDisable}
    />
  );
};

interface LoginModalConProps {
  zIndex?: number;
  setLoginModalOpen: any;
}
