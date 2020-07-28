import React from "react";
import styled from "styled-components";

const VolumeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 0 5px 0;
`;
const VolumeIcon = styled.i`
  font-size: 0.9rem;
  padding: 3px;
  margin: 0 5px 0 3px;
  cursor: pointer;
`;
const VolumeBarAlign = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 0 2px 0;
`;
const VolumeBar = styled.progress`
  display: flex;
  height: 15px;
  width: 90px;
  cursor: pointer;
`;

export default () => {
  return (
    <VolumeContainer>
      <VolumeIcon />
      <VolumeBarAlign>
        <VolumeBar value="0.5" max="1" />
      </VolumeBarAlign>
    </VolumeContainer>
  );
};
