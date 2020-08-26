import React, { useState } from "react";
import AccountEditPre from "./AccountEditPre";
import useInput from "../../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMyInfo } from "../../../../../../../GlobalLib/Context/UserContext/Me";

const AccountEditCon = ({
  setAccountEditOpen,
  zIndex = 20,
}: AccountEditProps) => {
  const { MEdata } = useMyInfo();
  const [CurPwConfirmed, setCurPwConfirmed] = useState(false);
  const EnPasswordStr = useInput("");
  const emailStr = useInput(MEdata.email);
  const passwordStr = useInput("");
  const password2Str = useInput("");
  const currntPasswordConfirm = () => {
    if (EnPasswordStr) {
      setCurPwConfirmed(true);
    } else {
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
