import React from "react";
import styled from "styled-components";

const ButtonsColection = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 0 5px 0;
`;
const PlayIcon = styled.i`
  font-size: 1.4rem;
  cursor: pointer;
`;
const RestIcon = styled.i`
  font-size: 0.8rem;
  padding: 3px;
  margin: 0 2px 0 2px;
  cursor: pointer;
`;

export default () => {
  return (
    <ButtonsColection>
      <PlayIcon className="icon-play" />
      <RestIcon className="icon-to-start audioBackToStart" />
      <RestIcon className="icon-fast-bw audioBackMove" />
      <RestIcon className="icon-fast-fw audioFrontMove" />
    </ButtonsColection>
  );
};
