import React, { useState, useRef } from "react";
import WritePostPre from "./WritePostPre";
import { useMutation } from "@apollo/client";
import useInput from "../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useDirMode } from "../../../GlobalLib/Context/ProfileContext/DirMode";
import { CREATE_POST } from "../../../GlobalLib/Apollo/GraphQL_Client/Post/PostCUD";
import { SEE_POST_ALL } from "../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostR";
import { S_N_to_N } from "../../../GlobalLib/RecycleFunction/etc/type_convert";
import { titleImgSubstitute } from "../Editor/EditorLib";

interface WritePostConProps {
  create_post_toggle: any;
}
export default ({ create_post_toggle }: WritePostConProps) => {
  const caption = useInput("");
  const { Location, DirData_refetch } = useDirMode();
  const Html = useRef(``);
  const [TitleImg, setTitleImg] = useState("");
  const [createPostMutation] = useMutation(CREATE_POST, {
    refetchQueries: () => [{ query: SEE_POST_ALL }],
  });
  const createPostTrigger = async () => {
    try {
      await createPostMutation({
        variables: {
          caption: caption.value,
          content: Html.current,
          directory_id: S_N_to_N(Location),
          face: TitleImg ? TitleImg : titleImgSubstitute(),
          face_type: TitleImg ? "image" : "text",
        },
      });
      create_post_toggle(false);
    } catch (e) {
      console.log(e);
    } finally {
      DirData_refetch();
    }
  };

  return (
    <WritePostPre
      caption={caption}
      createPostTrigger={createPostTrigger}
      create_post_toggle={create_post_toggle}
      Html={Html}
      TitleImg={TitleImg}
      setTitleImg={setTitleImg}
    />
  );
};
