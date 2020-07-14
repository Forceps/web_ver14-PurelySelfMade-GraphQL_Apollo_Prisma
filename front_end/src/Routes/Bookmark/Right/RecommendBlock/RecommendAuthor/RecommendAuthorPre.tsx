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

export default () => {
  return (
    <RecommendPost>
      <RSubSbj>Author</RSubSbj>
    </RecommendPost>
  );
};
