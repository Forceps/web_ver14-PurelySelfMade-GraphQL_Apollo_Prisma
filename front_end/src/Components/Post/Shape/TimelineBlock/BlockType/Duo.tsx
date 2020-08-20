import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
  H100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Partition1 = styled(W100per)`
  display: flex;
`;
const Partition2 = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Text = styled(H100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  width: 45%;
  position: absolute;
  word-break: break-all;
  padding: 5px 5px 15px 5px;
  line-height: 1.2rem;
  overflow: hidden;
  backdrop-filter: blur(3px);
  background-color: rgba(223, 230, 233, 0.7);
`;
const Images = styled(W100per)`
  height: 380px;
`;
interface BackImgProp {
  url: string;
}
const BackImg = styled(WH100per)<BackImgProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;

const Duo = ({ Texts, ImgSamples }: DuoProps) => {
  return Texts ? (
    <Partition1>
      <Text>{Texts}</Text>
      <Images>
        <BackImg url={ImgSamples[0][0].src} />
      </Images>
    </Partition1>
  ) : (
    <Partition2>
      <Images>
        <BackImg url={ImgSamples[0][0].src} />
      </Images>
      <Images>
        <BackImg url={ImgSamples[0][1].src} />
      </Images>
    </Partition2>
  );
};

interface DuoProps {
  Texts: string;
  ImgSamples: [any, boolean];
}

export default Duo;
