import React from "react";
import ProfileEditPre from "./ProfileEditPre";
import useInput from "../../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMyInfo } from "../../../../../../../GlobalLib/Context/UserContext/Me";

const ProfileEditCon = ({
  setProfileEditOpen,
  zIndex = 20,
}: ProfileEditProps) => {
  const { MEdata } = useMyInfo();
  const usernameStr = useInput(MEdata.username);
  const phoneNumberStr = useInput("");
  return (
    <ProfileEditPre
      setProfileEditOpen={setProfileEditOpen}
      zIndex={zIndex}
      usernameStr={usernameStr}
      phoneNumberStr={phoneNumberStr}
    />
  );
};
interface ProfileEditProps {
  setProfileEditOpen: any;
  zIndex?: number;
}

export default React.memo(ProfileEditCon);
