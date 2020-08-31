import React from "react";
import TilesShowWindowPre from "./TilesShowWindowPre";
import { PostsByDirIdRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostByDirId";
import { S_N_to_N } from "../../../../GlobalLib/RecycleFunction/etc/type_convert";
import { CountPostByDirIdRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostCount/PostCount";

const TilesShowWindowCon = ({ post, ChoosedDir }: TilesShowWindowConProps) => {
  const user_id = S_N_to_N(post.user_postTouser.user_id);
  const { data, loading } = PostsByDirIdRequest(
    user_id,
    ChoosedDir[0],
    "recent",
    0,
    15
  );
  const { data: WpcData, loading: WpcLoading } = CountPostByDirIdRequest(
    user_id,
    ChoosedDir[0]
  );
  return (
    <TilesShowWindowPre
      posts={data?.postsByDirId}
      loading={loading || WpcLoading}
      currentDirName={ChoosedDir[1]}
    />
  );
};

interface TilesShowWindowConProps {
  post: any;
  ChoosedDir: [number, string];
}

export default React.memo(TilesShowWindowCon);
