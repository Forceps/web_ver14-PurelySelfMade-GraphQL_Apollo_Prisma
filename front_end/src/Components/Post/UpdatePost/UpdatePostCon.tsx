import React, { useState, useEffect } from "react";
import UpdatePostPre from "./UpdatePostPre";
import { useMutation } from "@apollo/client";
import useInput from "../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { useDirMode } from "../../../GlobalLib/Context/ProfileContext/DirMode";
import { usePostDetail } from "../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { useUpdatePost } from "../../../GlobalLib/Context/PostContext/PostCRUD/UpdatePost";
import { EDIT_POST } from "../../../GlobalLib/Apollo/GraphQL_Client/Post/PostCUD";
import { titleImgSubstitute } from "../Editor/EditorLib";

export default () => {
  const PD = usePostDetail();
  const DC = useDirMode();
  const { setUpdatePost } = useUpdatePost();
  const caption = useInput(PD.postByID?.caption);
  const [Html, setHtml] = useState(PD.postByID?.content);
  const [TitleImg, setTitleImg] = useState(
    PD.postByID.face_type === "image" ? PD.postByID?.face : ""
  );
  const [editPostMutation] = useMutation(EDIT_POST);
  const UpdateProcess = async () => {
    try {
      await editPostMutation({
        variables: {
          post_id: PD.PostID,
          caption: caption.value,
          content: Html,
          directory_id: DC.Location,
          face: TitleImg ? TitleImg : titleImgSubstitute(),
          face_type_t: TitleImg ? "image" : "text",
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
    DC.setLocation(parseInt(PD.postByID?.directory));
    console.log(PD.postByID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PD.postByID]);
  return (
    <>
      {
        <UpdatePostPre
          caption={caption}
          Exit={Exit}
          Html={Html}
          setHtml={setHtml}
          UpdateProcess={UpdateProcess}
          TitleImg={TitleImg}
          setTitleImg={setTitleImg}
        />
      }
    </>
  );
};
