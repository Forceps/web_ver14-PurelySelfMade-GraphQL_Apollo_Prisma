import React from "react";
import TissueCellsPre from "./TissueCellsPre";
import { useQuery } from "@apollo/react-hooks";
import { SEE_MY_GROUPS } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Group/GroupR";

export default () => {
  const { data, loading } = useQuery(SEE_MY_GROUPS);
  return <TissueCellsPre data={data} loading={loading} />;
};
