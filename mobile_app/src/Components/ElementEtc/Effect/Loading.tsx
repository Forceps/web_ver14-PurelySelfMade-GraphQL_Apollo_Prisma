import React from "react";
import styled from "styled-components/native";
import WH100per from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import Logo from "./Logo";

const Wrapper = styled(WH100per)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Wrapper>
      <Logo size={32} />
    </Wrapper>
  );
};

export default React.memo(Loading);
