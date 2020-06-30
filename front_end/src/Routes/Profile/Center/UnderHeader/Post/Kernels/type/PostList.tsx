import React from "react";
import styled from "styled-components";
import { useProfileDetailMode } from "../../../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";
import { useTargetsShown } from "../../../../../../../GlobalLib/Context/PostContext/TargetsShown/TargetsShown";
import { usePostDetail } from "../../../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { useUpdatePost } from "../../../../../../../GlobalLib/Context/PostContext/PostCRUD/UpdatePost";
import { useDeletePost } from "../../../../../../../GlobalLib/Context/PostContext/PostCRUD/DeletePost";
import WH100per, {
  W100per,
} from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import PostDetailT from "../../../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetailT";
import ControlsV from "../../Controls/ControlsV";
import IncludeScrollBar from "../../../../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";

const Belt = styled(W100per)`
  display: grid;
  grid-template-columns: 240px 1fr;
  width: 60vw;
  max-width: 900px;
  max-height: 100%;
  overflow: hidden;
`;
const List = styled(IncludeScrollBar)`
  display: flex;
  flex-direction: column;
  min-width: 200px;
`;
const Division = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 65px;
  min-height: 40px;
  padding: 0 0 0 10px;
  cursor: pointer;
  & > .hov {
    display: none;
  }
  &:hover {
    padding: 0 0 0 7px;
    border-left: 3px solid black;
    .hov {
      display: flex;
    }
  }
  &:nth-child(2n - 1) {
    background-color: rgba(178, 190, 195, 0.3);
  }
`;
const CapCon = styled(WH100per)`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;
const CtrlIcon = styled.i`
  display: grid;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(45, 52, 54, 0.2);
  }
  cursor: pointer;
`;
const Ctrl = styled(WH100per)`
  display: flex;
`;

export default () => {
  const PfDM = useProfileDetailMode();
  const TSP = useTargetsShown();
  const PD = usePostDetail();
  const UP = useUpdatePost();
  const DP = useDeletePost();
  return (
    <Belt>
      <ControlsV />
      <List>
        {TSP.posts?.map((post: any) => (
          <Division key={post.post_id}>
            <CapCon
              onClick={() => {
                PfDM.recentState.current = "List";
                PD.setPostID(post.post_id);
                PD.setOpenSeePostDetail(true);
              }}
            >
              {post.caption}
            </CapCon>
            <Ctrl className="hov">
              <CtrlIcon
                className="icon-pencil"
                onClick={async (e) => {
                  spaped(e);
                  await PD.setPostID(post.post_id);
                  UP.setUpdatePost(true);
                }}
              />
              <CtrlIcon
                className="icon-noun_x_2939490"
                onClick={(e) => {
                  spaped(e);
                  DP.PostDeleteProcess(post.post_id);
                }}
              />
            </Ctrl>
          </Division>
        ))}
      </List>
      {PD.OpenSeePostDetail && <PostDetailT />}
    </Belt>
  );
};
