import React from "react";
import EachGroupsPre from "./EachGroupsPre";
import { withRouter } from "react-router-dom";
import { GroupDetailRequest } from "../../GlobalLib/Apollo/GraphQL_Client/Group/GroupR";

export default withRouter(
  ({
    match: {
      params: { group_id },
    },
  }) => {
    group_id = parseInt(group_id);
    const { data: G_Data, loading: G_Loading } = GroupDetailRequest(group_id);
    return <EachGroupsPre G_Data={G_Data?.groupDetail} G_Loading={G_Loading} />;
  }
);
