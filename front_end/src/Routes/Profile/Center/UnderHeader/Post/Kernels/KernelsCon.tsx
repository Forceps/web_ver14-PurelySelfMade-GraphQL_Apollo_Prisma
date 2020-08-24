import React from "react";
import KernelsPre from "./KernelsPre";
import { PostsByDirIdRequest } from "../../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostByDirId";
import { useMyInfo } from "../../../../../../GlobalLib/Context/UserContext/Me";
import { S_N_to_N } from "../../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import { useProfileDetailMode } from "../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import { useDirMode } from "../../../../../../GlobalLib/Context/ProfileContext/DirMode";

export default () => {
  const { MEdata } = useMyInfo();
  const PfDM = useProfileDetailMode();
  const { Location } = useDirMode();
  const { data, loading } = PostsByDirIdRequest(
    S_N_to_N(MEdata.user_id),
    Location,
    PfDM.Mode
  );

  return <KernelsPre data={data?.postsByDirId} loading={loading} />;
};
