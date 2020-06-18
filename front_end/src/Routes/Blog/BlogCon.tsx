import React, { useState } from "react";
import BlogPre from "./BlogPre";
import { withRouter } from "react-router-dom";
import { S_N_to_N } from "../../GlobalLib/RecycleFunction/etc/type_convert";
import { SeeUserRequest } from "../../GlobalLib/Apollo/GraphQL_Client/User/UserR";

export default withRouter(
  ({
    match: {
      params: { user_id },
    },
  }) => {
    user_id = S_N_to_N(user_id);
    const { data: UserData, loading: UserDataLoading } = SeeUserRequest(
      user_id
    );
    const [Mode, setMode] = useState("post");

    return (
      <BlogPre
        user_id={user_id}
        UserData={UserData}
        UserDataLoading={UserDataLoading}
        Mode={Mode}
        setMode={setMode}
      />
    );
  }
);
