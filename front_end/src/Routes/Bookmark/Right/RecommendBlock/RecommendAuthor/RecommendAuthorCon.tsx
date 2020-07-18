import React from "react";
import RecommendAuthorPre from "./RecommendAuthorPre";
import { RecommendAuthorByUserIdRequest } from "../../../../../GlobalLib/Apollo/GraphQL_Client/User/UserRseries/UserSubscription";

export default () => {
  const {
    loading: recoU_loading,
    data: recoU_data,
  } = RecommendAuthorByUserIdRequest();
  return (
    <RecommendAuthorPre
      recoU_loading={recoU_loading}
      recoU_data={recoU_data?.recommendAuthorByUserId}
    />
  );
};
