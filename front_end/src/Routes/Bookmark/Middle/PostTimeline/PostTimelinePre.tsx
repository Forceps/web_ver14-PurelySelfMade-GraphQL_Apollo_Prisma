import React from "react";
import styled from "styled-components";
import EachPostCon from "../../../../Components/Post/Shape/TimelineBlock/EachPostCon";
import Loading from "../../../../Components/Effect/Loading";
import { useMyInfo } from "../../../../GlobalLib/Context/UserContext/Me/Me";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
`;
const LoadingWrapper = styled.div`
  display: flex;
  height: 78%;
  justify-content: center;
  align-items: center;
`;
const Posts = styled.div`
  display: inline-block;
  padding: 11px;
  width: 100%;
`;

type PostTimelinePreProps = {
  TSP: any;
  PD: any;
  UP: any;
};
export default ({ TSP, PD, UP }: PostTimelinePreProps) => {
  const me = useMyInfo();
  const Initiation = !TSP.posts_loading && !me.MEloading;
  return (
    <Wrapper>
      {Initiation ? (
        <Posts>
          {TSP.posts?.map((post: any) => (
            <EachPostCon key={post.post_id} post={post} />
          ))}
        </Posts>
      ) : (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
    </Wrapper>
  );
};
