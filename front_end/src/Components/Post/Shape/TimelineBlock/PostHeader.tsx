import React from "react";
import styled from "styled-components";
import { useMyInfo } from "../../../../GlobalLib/Context/UserContext/Me";
import { usePostDetail } from "../../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { useUpdatePost } from "../../../../GlobalLib/Context/PostContext/PostCRUD/UpdatePost";
import WH100per, {
  H100per,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { Link } from "react-router-dom";

const PostHeader = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 50px;
  align-items: center;
`;
const Title = styled(Link)`
  display: grid;
  align-items: center;
  overflow: hidden;
  color: black;
  cursor: pointer;
`;
const PostCtrlEach = styled(H100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  color: black;
  &:hover {
    background-color: rgba(45, 52, 54, 0.8);
    color: white;
  }
  transition-property: background-color;
  transition-duration: 0.18s;
  transition-timing-function: ease;
  cursor: pointer;
  z-index: 5;
`;
const EditPost = styled(PostCtrlEach)`
  font-size: 0.8rem;
  margin-top: -1px;
`;
const DeletePost = styled(PostCtrlEach)`
  font-size: 0.8rem;
`;
const PostCtrl = styled(WH100per)`
  display: none;
`;
type PostHeaderProps = {
  post: any;
  setPostDeleteConfirm: any;
};
export default ({ post, setPostDeleteConfirm }: PostHeaderProps) => {
  const { MEloading, MEdata } = useMyInfo();
  const PD = usePostDetail();
  const UP = useUpdatePost();
  return (
    <PostHeader>
      <Title
        onClick={(e) => {
          e.stopPropagation();
        }}
        to={`/post/detail/${post.post_id}`}
      >
        {post.caption}
      </Title>
      {MEloading ? (
        <div />
      ) : (
        <>
          {post.user_postTouser.user_id === MEdata.user_id ? (
            <PostCtrl className="ctrlpanel">
              <EditPost
                onClick={async (e) => {
                  spaped(e);
                  await PD.setPostID(post.post_id);
                  await UP.setUpdatePost(true);
                }}
              >
                <i className="icon-pencil" />
              </EditPost>
              <DeletePost
                onClick={(e) => {
                  spaped(e);
                  setPostDeleteConfirm(true);
                }}
              >
                <i className="icon-noun_x_2939490" />
              </DeletePost>
            </PostCtrl>
          ) : (
            <div />
          )}
        </>
      )}
    </PostHeader>
  );
};
