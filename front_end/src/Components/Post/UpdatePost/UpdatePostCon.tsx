import React, { useState, useEffect, useRef } from "react";
import UpdatePostPre from "./UpdatePostPre";
import { useMutation } from "@apollo/client";
import useInput from "../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useDirMode } from "../../../GlobalLib/Context/ProfileContext/DirMode";
import { usePostDetail } from "../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { useUpdatePost } from "../../../GlobalLib/Context/PostContext/PostCRUD/UpdatePost";
import { EDIT_POST } from "../../../GlobalLib/Apollo/GraphQL_Client/Post/PostCUD";
import { titleImgSubstitute } from "../Editor/EditorLib";

export default () => {
  const { postByID, PostID } = usePostDetail();
  const { Location, setLocation } = useDirMode();
  const { setUpdatePost } = useUpdatePost();
  const caption = useInput(postByID?.caption);
  const Html = useRef<string>(postByID?.content);
  const [TitleImg, setTitleImg] = useState("");
  const [editPostMutation] = useMutation(EDIT_POST);

  const UpdateProcess = async () => {
    try {
      await editPostMutation({
        variables: {
          post_id: PostID,
          caption: caption.value,
          content: Html.current,
          directory_id: Location,
          face: TitleImg ? TitleImg : titleImgSubstitute(),
          face_type: TitleImg ? "image" : "text",
        },
      });
      setUpdatePost(false);
    } catch (e) {
      console.log(e);
    } finally {
      window.location.reload();
    }
  };
  const Exit = () => {
    setUpdatePost(false);
  };

  useEffect(() => {
    if (postByID) {
      setLocation(parseInt(postByID.directory));
      if (postByID.face_type === "image") {
        setTitleImg(postByID.face);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postByID]);

  return (
    <UpdatePostPre
      caption={caption}
      Exit={Exit}
      Html={Html}
      UpdateProcess={UpdateProcess}
      TitleImg={TitleImg}
      setTitleImg={setTitleImg}
    />
  );
};
