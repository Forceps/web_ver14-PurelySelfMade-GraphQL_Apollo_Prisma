import React from "react";
import TilesShowWindowPre from "./TilesShowWindowPre";
import { PostsByDirIdRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostByDirId";
import { S_N_to_N } from "../../../../GlobalLib/RecycleFunction/etc/type_convert";

const TilesShowWindowCon = ({ post, ChoosedDir }: TilesShowWindowConProps) => {
  const { data, loading } = PostsByDirIdRequest(
    S_N_to_N(post.user_postTouser.user_id),
    ChoosedDir[0],
    "recent"
  );
  return (
    <TilesShowWindowPre
      posts={data?.postsByDirId}
      loading={loading}
      currentDirName={ChoosedDir[1]}
    />
  );
};

interface TilesShowWindowConProps {
  post: any;
  ChoosedDir: [number, string];
}

export default React.memo(TilesShowWindowCon);
