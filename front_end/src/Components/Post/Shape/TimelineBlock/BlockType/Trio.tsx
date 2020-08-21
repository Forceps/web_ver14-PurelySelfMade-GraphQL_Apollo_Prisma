import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { BackImgForTimeline } from "./Solo";
import { TextForTimeline } from "./Duo";

const Partition = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 380px;
`;
const Text = styled(TextForTimeline)`
  left: 15%;
`;
const Right = styled(WH100per)`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Trio = ({ Texts, ImgSamples }: TrioProps) => {
  return Texts ? (
    <Partition>
      <Text>{Texts}</Text>
      <BackImgForTimeline url={ImgSamples[0][0]} />
      <BackImgForTimeline url={ImgSamples[0][1]} />
    </Partition>
  ) : (
    <Partition>
      <BackImgForTimeline url={ImgSamples[0][0]} />
      <Right>
        <BackImgForTimeline url={ImgSamples[0][1]} />
        <BackImgForTimeline url={ImgSamples[0][2]} />
      </Right>
    </Partition>
  );
};

interface TrioProps {
  Texts: string;
  ImgSamples: [string[], boolean];
}

export default Trio;
