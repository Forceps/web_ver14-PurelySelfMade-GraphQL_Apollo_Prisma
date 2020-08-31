import React from "react";
import styled from "styled-components";
import { W100per } from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { BackImgForTimeline } from "./Solo";
import { FlexCenter } from "../../../../../GlobalLib/Styles/IteratePattern/ToCenter";

const Partition1 = styled(W100per)`
  display: flex;
`;
const Partition2 = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const TextForTimeline = styled(FlexCenter)`
  font-size: 0.9rem;
  width: 45%;
  height: 100%;
  position: absolute;
  padding: 5px 5px 15px 5px;
  line-height: 1.2rem;
  overflow: hidden;
  backdrop-filter: blur(3px);
  background-color: rgba(223, 230, 233, 0.7);
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
`;
const Images = styled(W100per)`
  height: 380px;
`;

const Duo = ({ Texts, ImgSamples }: DuoProps) => {
  return Texts ? (
    <Partition1>
      <TextForTimeline>{Texts}</TextForTimeline>
      <Images>
        <BackImgForTimeline url={ImgSamples[0][0]} />
      </Images>
    </Partition1>
  ) : (
    <Partition2>
      <Images>
        <BackImgForTimeline url={ImgSamples[0][0]} />
      </Images>
      <Images>
        <BackImgForTimeline url={ImgSamples[0][1]} />
      </Images>
    </Partition2>
  );
};

interface DuoProps {
  Texts: string;
  ImgSamples: [string[], boolean];
}

export default Duo;
