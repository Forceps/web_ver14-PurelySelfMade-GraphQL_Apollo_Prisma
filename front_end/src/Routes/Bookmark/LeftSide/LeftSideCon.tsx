import React from "react";
import LeftSidePre from "./LeftSidePre";
import { See_I_subsRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Relation/Subscriber/SubscriberR";

export default () => {
  const { data, loading } = See_I_subsRequest();
  return loading ? <div /> : <LeftSidePre Isubs={data.see_I_Subs} />;
};
