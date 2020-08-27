import React, { useState } from "react";
import AuthPre from "./LoginModalPre";
import useInput from "../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMutation } from "@apollo/client";
import {
  LOGIN_USER,
  LOCAL_LOG_IN,
} from "../../../../GlobalLib/Apollo/GraphQL_Client/User/UserCUD";
import { useShortMessage } from "../../../../GlobalLib/Context/EtcContext/ShortMessage/ShortMessage";

export default ({ zIndex = 10, setLoginModalOpen }: LoginModalConProps) => {
  const { addMessage } = useShortMessage();
  const email = useInput("");
  const PW = useInput("");
  const [SignUpMode, setSignUpMode] = useState(false);
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
        addMessage("e-mail", "email does not exist");
      } else if (result === "WorngPW") {
        addMessage("Password", "Worng Password");
      } else {
        if (result !== "" && result !== undefined) {
          localLogInMutation({ variables: { token: result } });
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
    />
  );
};

interface LoginModalConProps {
  zIndex?: number;
  setLoginModalOpen: any;
}
