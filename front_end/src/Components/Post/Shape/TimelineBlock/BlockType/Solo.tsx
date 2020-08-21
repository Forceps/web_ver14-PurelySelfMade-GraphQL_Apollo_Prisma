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
  min-height: 50px;
  max-height: 330px;
  line-height: 1.2rem;
  overflow: hidden;
  padding: 10px 5px 10px 5px;
`;
const Images = styled(W100per)`
  height: 380px;
  padding: 5px;
`;
interface BackImgProp {
  url: string;
}
export const BackImgForTimeline = styled(WH100per)<BackImgProp>`
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
          <BackImgForTimeline url={ImgSamples[0][0]} />
        </Images>
      )}
    </Partition>
  );
};

interface SoloProps {
  Texts: string;
  ImgSamples: [string[], boolean];
}

export default Solo;
