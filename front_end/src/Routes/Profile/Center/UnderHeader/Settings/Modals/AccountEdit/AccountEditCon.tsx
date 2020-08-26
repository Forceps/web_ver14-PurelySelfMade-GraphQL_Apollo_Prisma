import React, { useState } from "react";
import AccountEditPre from "./AccountEditPre";
import useInput from "../../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMyInfo } from "../../../../../../../GlobalLib/Context/UserContext/Me";
import { useMutation } from "@apollo/client";
import { CURRENT_PASSWORD_CONFIRM } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/User/UserCUD";
import { useShortMessage } from "../../../../../../../GlobalLib/Context/EtcContext/ShortMessage/ShortMessage";

const AccountEditCon = ({
  setAccountEditOpen,
  zIndex = 20,
}: AccountEditProps) => {
  const { addMessage } = useShortMessage();
  const { MEdata } = useMyInfo();
  const [CurPwConfirmed, setCurPwConfirmed] = useState(false);
  const EnPasswordStr = useInput("");
  const emailStr = useInput(MEdata.email);
  const passwordStr = useInput("");
  const password2Str = useInput("");
  const [currentPasswordConfirmMutation] = useMutation(
    CURRENT_PASSWORD_CONFIRM,
    {
      variables: {
        current_password: EnPasswordStr.value,
      },
    }
  );
  const currntPasswordConfirm = async () => {
    addMessage(
      "Current password",
      "Current password is incorrect. Please try again"
    );
    if (!CurPwConfirmed) {
      try {
        const checkResult = await currentPasswordConfirmMutation();
        if (checkResult) {
          setCurPwConfirmed(checkResult.data.currentPasswordConfirm);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <AccountEditPre
      setAccountEditOpen={setAccountEditOpen}
      zIndex={zIndex}
      EnPasswordStr={EnPasswordStr}
      emailStr={emailStr}
      passwordStr={passwordStr}
      password2Str={password2Str}
      CurPwConfirmed={CurPwConfirmed}
      setCurPwConfirmed={setCurPwConfirmed}
      currntPasswordConfirm={currntPasswordConfirm}
    />
  );
};
interface AccountEditProps {
  setAccountEditOpen: any;
  zIndex?: number;
}

export default React.memo(AccountEditCon);
