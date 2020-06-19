import React from "react";
import UndersPre from "./UndersPre";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import { SeeWhosePostsRequest } from "../../../GlobalLib/Apollo/GraphQL_Client/Post/PostR";

export default ({
  post_id,
  post,
  AddCommentOpen,
  setAddCommentOpen,
}: UndersConProps) => {
  const { data: AuthorPost, loading: AuthorPostLoading } = SeeWhosePostsRequest(
    S_N_to_N(post.user_postTouser.user_id)
  );

  return (
    <UndersPre
      post_id={post_id}
      AuthorName={post.user_postTouser.username}
      AuthorPost={AuthorPost?.seeWhosePosts}
      AuthorPostLoading={AuthorPostLoading}
      AddCommentOpen={AddCommentOpen}
      setAddCommentOpen={setAddCommentOpen}
    />
  );
};
interface UndersConProps {
  post_id: number;
  post: any;
  AddCommentOpen: boolean;
  setAddCommentOpen: any;
}
