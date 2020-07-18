import React, { useEffect } from "react";
import ProfilePre from "./ProfilePre";
import { useParams } from "react-router-dom";
import ContextProvider from "../../GlobalLib/Context/Lib/ContextProvider";
import { useTargetsShown } from "../../GlobalLib/Context/PostContext/TargetsShown/TargetsShown";
import { useDummyState } from "../../GlobalLib/Context/Lib/DummyState";
import { usePostDetail } from "../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { useUpdatePost } from "../../GlobalLib/Context/PostContext/PostCRUD/UpdatePost";
import {
  ProfileDetailModeProvider,
  DirSelectorModeProvider,
} from "../../GlobalLib/Context/ProfileContext/PfDetailMode";
import { SeeUserRequest } from "../../GlobalLib/Apollo/GraphQL_Client/User/UserRseries/UserR";
import { S_N_to_N } from "../../GlobalLib/RecycleFunction/etc/type_convert";

export default () => {
  const { user_id: user_id_extract }: any = useParams();
  const user_id = S_N_to_N(user_id_extract);
  const DS = useDummyState();
  const PD = usePostDetail();
  const UP = useUpdatePost();
  const TSP = useTargetsShown();
  const { data: UserData, loading: UserDataLoading } = SeeUserRequest(user_id);
  const for_useEffect = async () => {
    await TSP.setWhose(user_id);
    await TSP.WsloadGreeting();
    TSP.setPostTargetMode("Whose");
  };
  useEffect(() => {
    for_useEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_id]);
  useEffect(() => {
    DS.setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PD, TSP]);

  return (
    <ContextProvider
      contexts={[ProfileDetailModeProvider, DirSelectorModeProvider]}
    >
      <ProfilePre
        UserData={UserData}
        UserDataLoading={UserDataLoading}
        PD={PD}
        UP={UP}
      />
    </ContextProvider>
  );
};
