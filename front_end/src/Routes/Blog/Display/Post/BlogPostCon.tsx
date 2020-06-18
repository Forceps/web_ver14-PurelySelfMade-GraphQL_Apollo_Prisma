import React, { useState } from "react";
import BlogPostPre from "./BlogPostPre";
import { SeeWhosePostsRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostR";
import { WhosePostDirRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Directory/DirectoryR";

export default ({ user_id }: DisplayCon) => {
  const { data: WpData, loading: WpLoading } = SeeWhosePostsRequest(user_id);
  const { data: RootDirData, loading: RootDirDataLoad } = WhosePostDirRequest(
    user_id
  );
  const [ChoosedDir, setChoosedDir] = useState(0);
  const [PostSortBy, setPostSortBy] = useState("recent");

  return (
    <BlogPostPre
      WpData={WpData?.seeWhosePosts}
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
