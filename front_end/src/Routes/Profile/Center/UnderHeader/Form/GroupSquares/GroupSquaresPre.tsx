import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import TissueCellsCon from "./TissueCells/TissueCellsCon";

const Wrapper = styled(W100per)`
  height: calc(100vh - 50px);
  max-width: 600px;
  overflow: hidden;
`;

export default () => {
  return (
    <Wrapper>
      <TissueCellsCon />
    </Wrapper>
  );
};
