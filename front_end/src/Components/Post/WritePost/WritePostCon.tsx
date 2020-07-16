import React, { useState } from "react";
import WritePostPre from "./WritePostPre";
import { useMutation } from "@apollo/client";
import useInput from "../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useTargetsShown } from "../../../GlobalLib/Context/PostContext/TargetsShown/TargetsShown";
import { useDirMode } from "../../../GlobalLib/Context/ProfileContext/DirMode";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me";
import { CREATE_POST } from "../../../GlobalLib/Apollo/GraphQL_Client/Post/PostCUD";
import {
  SEE_POST_ALL,
  SEE_WHOSE_POSTS,
} from "../../../GlobalLib/Apollo/GraphQL_Client/Post/PostR";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import { titleImgSubstitute } from "../Editor/EditorLib";

type WritePostConProps = {
  create_post_toggle: any;
};
export default ({ create_post_toggle }: WritePostConProps) => {
  const { posts_refetch } = useTargetsShown();
  const caption = useInput("");
  const { Location, DirData_refetch } = useDirMode();
  const { MEdata } = useMyInfo();
  const [Html, setHtml] = useState(``);
  const [TitleImg, setTitleImg] = useState("");
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
          directory_id: S_N_to_N(Location),
          face: TitleImg ? TitleImg : titleImgSubstitute(),
          face_type: TitleImg ? "image" : "text",
        },
      });
      create_post_toggle(false);
    } catch (e) {
      console.log(e);
    } finally {
      posts_refetch();
      DirData_refetch();
    }
  };

  return (
    <WritePostPre
      caption={caption}
      createPostTrigger={createPostTrigger}
      create_post_toggle={create_post_toggle}
      Html={Html}
      setHtml={setHtml}
      TitleImg={TitleImg}
      setTitleImg={setTitleImg}
    />
  );
};
