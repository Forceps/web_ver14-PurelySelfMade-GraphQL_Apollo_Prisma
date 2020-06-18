import React, { useState } from "react";
import CommentsPartPre from "./CommentsPartPre";
import useInput from "../../../GlobalLib/RecycleFunction/Hooks/useInput";
import {
  SEE_COMMENTS,
  SeeCommentsRequest,
} from "../../../GlobalLib/Apollo/GraphQL_Client/Comment/CommentR";
import { useMutation } from "@apollo/react-hooks";
import { ADD_COMMENT } from "../../../GlobalLib/Apollo/GraphQL_Client/Comment/CommentCUD";

export default ({ post_id, setAddCommentOpen }: CommentsPartConProps) => {
  const commentInput = useInput("");
  const submitCheck = commentInput.value.length > 300;
  const [LoginOpen, setLoginOpen] = useState(false);
  const { loading: commentsLoading, data: comments } = SeeCommentsRequest(
    post_id
  );
  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    refetchQueries: () => [
      {
        query: SEE_COMMENTS,
        variables: { post_id },
      },
    ],
  });
  const commentSubmit = () => {
    if (!submitCheck) {
      try {
        addCommentMutation({
          variables: {
            post_id,
            comment: commentInput.value,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <CommentsPartPre
      setAddCommentOpen={setAddCommentOpen}
      commentInput={commentInput}
      commentSubmit={commentSubmit}
      commentsLoading={commentsLoading}
      comments={comments?.seeComments}
      submitCheck={submitCheck}
      LoginOpen={LoginOpen}
      setLoginOpen={setLoginOpen}
    />
  );
};

interface CommentsPartConProps {
  post_id: number;
  setAddCommentOpen?: any;
}
