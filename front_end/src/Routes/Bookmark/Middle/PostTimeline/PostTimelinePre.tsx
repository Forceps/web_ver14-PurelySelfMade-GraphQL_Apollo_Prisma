import React from "react";
import styled from "styled-components";
import EachPostCon from "../../../../Components/Post/Shape/TimelineBlock/EachPostCon";
import Loading from "../../../../Components/ElementEtc/Effect/Loading";
import { useMyInfo } from "../../../../GlobalLib/Context/UserContext/Me";

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
  loading: boolean;
  data: any;
};
export default ({ loading, data }: PostTimelinePreProps) => {
  const me = useMyInfo();
  const Initiation = !loading && !me.MEloading;
  return (
    <Wrapper>
      {Initiation ? (
        <Posts>
          {data.map((post: any) => (
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
