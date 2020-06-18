import React, { useState } from "react";
import MetaInfoPre from "./MetaInfoPre";
import { useMutation } from "@apollo/react-hooks";
import { LIKE_POST } from "../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostCUD";
import { S_N_to_N } from "../../../../GlobalLib/RecycleFunction/etc/type_convert";
import { useLoginCheck } from "../../../../GlobalLib/Context/UserContext/IsLoggedIn/IsLoggedIn";

export default ({ post, setAddCommentOpen }: MetaInfoConProps) => {
  const { isLoggedIn } = useLoginCheck();
  const [likePostMutation] = useMutation(LIKE_POST);
  const [InitLikes, setInitLikes] = useState(post.likes);
  const [LikeClicked, setLikeClicked] = useState(false);
  const [LoginOpen, setLoginOpen] = useState(false);
  const postLikeIncrease = () => {
    if (isLoggedIn) {
      try {
        likePostMutation({
          variables: {
            post_id: S_N_to_N(post.post_id),
          },
        });
        setInitLikes((p: number) => p + 1);
        setLikeClicked(true);
      } catch (e) {
        console.log(e);
      }
    } else {
      setLoginOpen(true);
    }
  };
  return (
    <MetaInfoPre
      post={post}
      setAddCommentOpen={setAddCommentOpen}
      InitLikes={InitLikes}
      LikeClicked={LikeClicked}
      postLikeIncrease={postLikeIncrease}
      LoginOpen={LoginOpen}
      setLoginOpen={setLoginOpen}
    />
  );
};

interface MetaInfoConProps {
  post: any;
  setAddCommentOpen: any;
}
