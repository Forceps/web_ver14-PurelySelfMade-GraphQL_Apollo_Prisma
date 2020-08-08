import React from "react";
import PostCtrlPre from "./PostCtrlPre";
import { PostMetaInfoRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostMeta/PostMetaInfo";

export default () => {
  const { data, loading } = PostMetaInfoRequest();
  return loading ? <div /> : <PostCtrlPre data={data?.postMetaInfo} />;
};
