import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Partition = styled(W100per)`
  display: flex;
`;
const Text = styled(WH100per)`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  word-break: break-all;
  min-height: 50px;
  line-height: 1.2rem;
  overflow: hidden;
  padding: 10px 5px 10px 5px;
  border-left: 3px solid #636e72;
`;
const Images = styled(W100per)`
  height: 380px;
  padding: 5px;
`;
interface BackImgProp {
  url: string;
}
const BackImg = styled(WH100per)<BackImgProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;

const Solo = ({ Texts, ImgSamples }: SoloProps) => {
  return (
    <Partition>
      {Texts ? (
        <Text>{Texts}</Text>
      ) : (
        <Images>
          <BackImg url={ImgSamples[0][0].src} />
        </Images>
      )}
    </Partition>
  );
};

interface SoloProps {
  Texts: string;
  ImgSamples: [any, boolean];
}

export default Solo;
