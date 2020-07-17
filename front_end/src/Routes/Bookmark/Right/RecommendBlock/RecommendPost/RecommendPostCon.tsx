import React from "react";
import RecommendPostPre from "./RecommendPostPre";
import { PostRecommendToUserRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostRecommend";

export default ({ user_id }: RecommendPostConProps) => {
  const {
    loading: recoP_loading,
    data: recoP_data,
  } = PostRecommendToUserRequest(user_id);

  return (
    <RecommendPostPre
      recoP_loading={recoP_loading}
      recoP_data={recoP_data?.postRecommendToUser}
    />
  );
};

interface RecommendPostConProps {
  user_id: number;
}
