import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
  H100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Partition = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 380px;
`;
const Text = styled(H100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  width: 45%;
  left: 15%;
  position: absolute;
  word-break: break-all;
  padding: 5px 5px 15px 5px;
  line-height: 1.2rem;
  overflow: hidden;
  backdrop-filter: blur(3px);
  background-color: rgba(223, 230, 233, 0.7);
`;
const Images = styled(WH100per)``;
interface BackImgProp {
  url: string;
}
const BackImg = styled(WH100per)<BackImgProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
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
        <Images>
          <BackImg url={ImgSamples[0][0].src} />
        </Images>
        <Images>
          <BackImg url={ImgSamples[0][1].src} />
        </Images>
      </Left>
      <Right>
        <Images>
          <BackImg url={ImgSamples[0][2].src} />
        </Images>
        <Images>
          <BackImg url={ImgSamples[0][3].src} />
        </Images>
      </Right>
    </Partition>
  );
};

interface QuintetProps {
  Texts: string;
  ImgSamples: [any, boolean];
}

export default Quintet;
