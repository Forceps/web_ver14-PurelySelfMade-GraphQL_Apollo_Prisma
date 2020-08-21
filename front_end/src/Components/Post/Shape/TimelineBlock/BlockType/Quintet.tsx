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
const Left = styled(WH100per)`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
const Right = styled(WH100per)`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Quintet = ({ Texts, ImgSamples }: QuintetProps) => {
  return (
    <Partition>
      <Text>{Texts}</Text>
      <Left>
        <BackImgForTimeline url={ImgSamples[0][0]} />
        <BackImgForTimeline url={ImgSamples[0][1]} />
      </Left>
      <Right>
        <BackImgForTimeline url={ImgSamples[0][2]} />
        <BackImgForTimeline url={ImgSamples[0][3]} />
      </Right>
    </Partition>
  );
};

interface QuintetProps {
  Texts: string;
  ImgSamples: [string[], boolean];
}

export default Quintet;
