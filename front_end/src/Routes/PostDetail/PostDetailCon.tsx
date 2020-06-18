import React, { useState } from "react";
import PostDetailPre from "./PostDetailPre";
import { withRouter } from "react-router-dom";
import { SeePostRequest } from "../../GlobalLib/Apollo/GraphQL_Client/Post/PostR";
import { S_N_to_N } from "../../GlobalLib/RecycleFunction/etc/type_convert";

export default withRouter(
  ({
    match: {
      params: { post_id },
    },
  }) => {
    post_id = S_N_to_N(post_id);
    const { data, loading } = SeePostRequest(post_id);
    const [AddCommentOpen, setAddCommentOpen] = useState(true);
    const [LoginOpen, setLoginOpen] = useState(false);

    return (
      <PostDetailPre
        post_id={post_id}
        post={data?.seePost}
        loading={loading}
        AddCommentOpen={AddCommentOpen}
        setAddCommentOpen={setAddCommentOpen}
        LoginOpen={LoginOpen}
        setLoginOpen={setLoginOpen}
      />
    );
  }
);
