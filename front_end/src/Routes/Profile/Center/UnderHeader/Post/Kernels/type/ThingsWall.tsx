import React from "react";
import { useTargetsShown } from "../../../../../../../GlobalLib/Context/PostContext/TargetsShown/TargetsShown";
import { usePostDetail } from "../../../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import PostDetailT from "../../../../../../../GlobalLib/Context/PostContext/PostDetail/PostDetailT";
import Tile from "../../../../../../../Components/Post/Shape/Tile/TileCon";
import styled from "styled-components";
import WH100per from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import ControlsH from "../../Controls/ControlsH";
import IncludeScrollBar from "../../../../../../../GlobalLib/Styles/IteratePattern/IncludeScrollBar";

const Embosom = styled(WH100per)`
  display: grid;
  grid-template-rows: 100px 1fr;
  max-height: 100%;
  overflow: hidden;
`;
const RestArea = styled(IncludeScrollBar)`
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  max-height: 100%;
`;

export default () => {
  const TSP = useTargetsShown();
  const PD = usePostDetail();
  return (
    <Embosom>
      <ControlsH />
      <RestArea>
        {TSP.posts?.map((post: any) => (
          <Tile key={post.post_id} post={post} />
        ))}
      </RestArea>
      {PD.OpenSeePostDetail && <PostDetailT />}
    </Embosom>
  );
};
