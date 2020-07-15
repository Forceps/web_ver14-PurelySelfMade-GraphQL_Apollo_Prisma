import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const RecommendBlock = styled.div`
  display: grid;
  grid-template-rows: 21px 1fr;
  margin: 0 0 10px 10px;
  width: 250px;
`;
const RecommendPost = styled(RecommendBlock)`
  min-height: 40px;
`;
const RSubSbj = styled(W100per)`
  display: grid;
  justify-content: right;
  padding: 0 5px 0 0;
  font-size: 0.85rem;
  border-bottom: 1px solid #b2bec3;
`;
const Lists = styled(W100per)`
  display: flex;
  flex-direction: column;
`;
const Rectangle = styled(W100per)`
  display: grid;
  grid-template-columns: 50px 1fr;
  height: 50px;
  margin: 5px 0 10px 0;
`;

export default ({ recoP_loading, recoP_data }: RecommendPostPreProps) => {
  return (
    <RecommendPost>
      <RSubSbj>Post</RSubSbj>
      <Lists>
        {!recoP_loading &&
          recoP_data.map((rc: any) => <Rectangle key={rc.post_id}></Rectangle>)}
      </Lists>
    </RecommendPost>
  );
};

interface RecommendPostPreProps {
  recoP_loading: boolean;
  recoP_data: any;
}
