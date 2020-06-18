import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Container = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
`;
const Subject = styled.div`
  display: flex;
  font-size: 1.3rem;
  margin: 0 0 0 12px;
  align-items: center;
`;

export default () => {
  return (
    <Container>
      <Subject>Form</Subject>
    </Container>
  );
};
