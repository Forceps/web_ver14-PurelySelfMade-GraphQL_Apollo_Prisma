import React, { useState } from "react";
import IdentityPre from "./IdentityPre";
import { useMutation } from "@apollo/react-hooks";
import { useMyInfo } from "../../../../GlobalLib/Context/UserContext/Me";
import { SET_AVATAR } from "../../../../GlobalLib/Apollo/GraphQL_Client/User/UserCUD";
import { SEE_USER } from "../../../../GlobalLib/Apollo/GraphQL_Client/User/UserR";
import { S_N_to_N } from "../../../../GlobalLib/RecycleFunction/etc/type_convert";

export default ({
  UserDataLoading,
  UserData,
  MenuMode,
  setMenuMode,
}: IdentityConProps) => {
  const ME = useMyInfo();
  const [DesignateAvatar, setDesignateAvatar] = useState(false);
  const [UpdateAvatarMutation] = useMutation(SET_AVATAR, {
    refetchQueries: () => [
      {
        query: SEE_USER,
        variables: {
          user_id: S_N_to_N(ME.MEdata.user_id),
        },
      },
    ],
  });
  const AvatarPathInsert = (address: string): void => {
    UpdateAvatarMutation({
      variables: {
        avatar: address.replace(/\\/gi, "/"),
      },
    });
    setDesignateAvatar(false);
  };

  return (
    <IdentityPre
      UserDataLoading={UserDataLoading}
      UserData={UserData}
      DesignateAvatar={DesignateAvatar}
      setDesignateAvatar={setDesignateAvatar}
      AvatarPathInsert={AvatarPathInsert}
      MenuMode={MenuMode}
      setMenuMode={setMenuMode}
    />
  );
};

type IdentityConProps = {
  UserDataLoading: boolean;
  UserData: any;
  MenuMode: boolean;
  setMenuMode: any;
};
