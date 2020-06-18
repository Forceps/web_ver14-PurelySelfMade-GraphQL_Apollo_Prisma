import React from "react";
import styled from "styled-components";
import LeftSideMenuCon from "./LeftSideMenu/LeftSideMenuCon";
import MiddleCon from "./Middle/MiddleCon";
import RightCon from "./Right/RightCon";
import { W100per } from "../../GlobalLib/Styles/IteratePattern/WH100per";
import { usePostDetail } from "../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import PostDetailT from "../../GlobalLib/Context/PostContext/PostDetail/PostDetailT";
import UpdatePostCon from "../../Components/Post/UpdatePost/UpdatePostCon";
import { useUpdatePost } from "../../GlobalLib/Context/PostContext/PostCRUD/UpdatePost";

const Body = styled(W100per)`
  display: flex;
  position: relative;
  z-index: 0;
`;

export default ({ SeeMode, setSeeMode }: BookmarkPreProps) => {
  const PD = usePostDetail();
  const UP = useUpdatePost();
  return (
    <Body>
      <LeftSideMenuCon />
      <MiddleCon SeeMode={SeeMode} />
      <RightCon setSeeMode={setSeeMode} />
      {PD.OpenSeePostDetail && <PostDetailT zIndex={20} commentsShow={true} />}
      {UP.UpdatePost &&
        PD.PostID !== 0 &&
        !PD.postLoadingByID &&
        PD.postByID && <UpdatePostCon />}
    </Body>
  );
};

interface BookmarkPreProps {
  SeeMode: string;
  setSeeMode: any;
}
