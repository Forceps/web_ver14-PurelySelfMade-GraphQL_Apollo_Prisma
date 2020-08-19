import React, { useState } from "react";
import BlogPostPre from "./BlogPostPre";
import { WhosePostDirRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryR";
import { PostsByDirIdRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostByDirId";

export default ({ user_id }: DisplayCon) => {
  const [ChoosedDir, setChoosedDir] = useState<[number, string]>([
    0,
    "Recent all",
  ]);
  const [PostSortBy, setPostSortBy] = useState("recent");
  const { data: WpData, loading: WpLoading } = PostsByDirIdRequest(
    user_id,
    ChoosedDir[0]
  );
  const { data: RootDirData, loading: RootDirDataLoad } = WhosePostDirRequest(
    user_id
  );

  return (
    <BlogPostPre
      WpData={WpData?.postsByDirId}
      WpLoading={WpLoading}
      RootDirData={RootDirData?.whosePostDir}
      RootDirDataLoad={RootDirDataLoad}
      ChoosedDir={ChoosedDir}
      setChoosedDir={setChoosedDir}
      PostSortBy={PostSortBy}
      setPostSortBy={setPostSortBy}
    />
  );
};

interface DisplayCon {
  user_id: number;
}
