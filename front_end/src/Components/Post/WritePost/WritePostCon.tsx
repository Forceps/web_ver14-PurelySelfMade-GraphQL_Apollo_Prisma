import React, { useState } from "react";
import WritePostPre from "./WritePostPre";
import { useMutation } from "@apollo/react-hooks";
import useInput from "../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useTargetsShown } from "../../../GlobalLib/Context/PostContext/TargetsShown/TargetsShown";
import { useDirMode } from "../../../GlobalLib/Context/ProfileContext/DirMode";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me/Me";
import { CREATE_POST } from "../../../GlobalLib/Apollo/GraphQL_Client/Post/PostCUD";
import {
  SEE_POST_ALL,
  SEE_WHOSE_POSTS,
} from "../../../GlobalLib/Apollo/GraphQL_Client/Post/PostR";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";

type WritePostConProps = {
  create_post_toggle: any;
};
export default ({ create_post_toggle }: WritePostConProps) => {
  const TSP = useTargetsShown();
  const caption = useInput("");
  const DC = useDirMode();
  const { MEdata } = useMyInfo();
  const [Html, setHtml] = useState(``);
  const [createPostMutation] = useMutation(CREATE_POST, {
    refetchQueries: () => [
      { query: SEE_POST_ALL },
      {
        query: SEE_WHOSE_POSTS,
        variables: { user: S_N_to_N(MEdata?.user_id) },
      },
    ],
  });
  const createPostTrigger = async () => {
    try {
      await createPostMutation({
        variables: {
          caption: caption.value,
          content: Html,
          directory_id: S_N_to_N(DC.Location),
        },
      });
      create_post_toggle(false);
    } catch (e) {
      console.log(e);
    } finally {
      TSP.posts_refetch();
      DC.DirData_refetch();
    }
  };

  return (
    <WritePostPre
      caption={caption}
      createPostTrigger={createPostTrigger}
      create_post_toggle={create_post_toggle}
      Html={Html}
      setHtml={setHtml}
    />
  );
};
