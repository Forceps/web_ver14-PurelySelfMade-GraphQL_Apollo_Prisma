import React from "react";
import styled from "styled-components";
import GroupSquaresCon from "./GroupSquares/GroupSquaresCon";
import FunctionalityCon from "./Functionality/FunctionalityCon";

const Divide = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
`;

export default () => {
  return (
    <Divide>
      <GroupSquaresCon />
      <FunctionalityCon />
    </Divide>
  );
};
