import React from "react";
import ProfileEditPre from "./ProfileEditPre";
import useInput from "../../../../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useMyInfo } from "../../../../../../../GlobalLib/Context/UserContext/Me";
import { useMutation } from "@apollo/client";
import {
  SET_USERNAME,
  SET_PHONE_NUMBER,
} from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/User/UserCUD";
import { ME } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/User/UserRseries/UserR";

const ProfileEditCon = ({
  setProfileEditOpen,
  zIndex = 20,
}: ProfileEditProps) => {
  const { MEdata } = useMyInfo();
  const usernameStr = useInput(MEdata.username);
  const phoneNumberStr = useInput("");
  const [setUsernameMutation] = useMutation(SET_USERNAME, {
    variables: {
      username: usernameStr.value,
    },
    refetchQueries: () => [{ query: ME }],
  });
  const [setPhoneNumberMutation] = useMutation(SET_PHONE_NUMBER, {
    variables: {
      phone_number: phoneNumberStr.value,
    },
    refetchQueries: () => [{ query: ME }],
  });
  const saveProfileInfo = async () => {
    try {
      if (usernameStr.value !== "" && usernameStr.value !== MEdata.username) {
        await setUsernameMutation();
      }
      if (phoneNumberStr.value !== "") {
        await setPhoneNumberMutation();
      }
      setProfileEditOpen(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ProfileEditPre
      setProfileEditOpen={setProfileEditOpen}
      zIndex={zIndex}
      usernameStr={usernameStr}
      phoneNumberStr={phoneNumberStr}
      saveProfileInfo={saveProfileInfo}
    />
  );
};
interface ProfileEditProps {
  setProfileEditOpen: any;
  zIndex?: number;
}

export default React.memo(ProfileEditCon);
