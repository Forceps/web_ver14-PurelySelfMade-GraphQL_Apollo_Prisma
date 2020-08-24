import React, { useEffect } from "react";
import ProfilePre from "./ProfilePre";
import ContextProvider from "../../GlobalLib/Context/Lib/ContextProvider";
import { useTargetsShown } from "../../GlobalLib/Context/PostContext/TargetsShown/TargetsShown";
import { useDummyState } from "../../GlobalLib/Context/Lib/DummyState";
import { usePostDetail } from "../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { useUpdatePost } from "../../GlobalLib/Context/PostContext/PostCRUD/UpdatePost";
import {
  ProfileDetailModeProvider,
  DirSelectorModeProvider,
} from "../../GlobalLib/Context/ProfileContext/PfDetailMode";
import { useMyInfo } from "../../GlobalLib/Context/UserContext/Me";

export default () => {
  const { MEloading } = useMyInfo();
  const DS = useDummyState();
  const PD = usePostDetail();
  const UP = useUpdatePost();
  const TSP = useTargetsShown();
  useEffect(() => {
    DS.setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PD, TSP]);

  return (
    <ContextProvider
      contexts={[ProfileDetailModeProvider, DirSelectorModeProvider]}
    >
      {!MEloading && <ProfilePre PD={PD} UP={UP} />}
    </ContextProvider>
  );
};
