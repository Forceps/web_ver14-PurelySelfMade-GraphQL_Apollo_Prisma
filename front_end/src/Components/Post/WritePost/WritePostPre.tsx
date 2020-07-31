import React, { MutableRefObject } from "react";
import styled from "styled-components";
import TemporaryBackground from "../../ElementEtc/Effect/TemporaryBackground";
import EditorCon from "../Editor/EditorCon";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

type WritePostPrePorps = {
  caption: any;
  createPostTrigger: any;
  create_post_toggle: any;
  Html: MutableRefObject<string>;
  TitleImg: string;
  setTitleImg: any;
};
export default ({
  caption,
  createPostTrigger,
  create_post_toggle,
  Html,
  TitleImg,
  setTitleImg,
}: WritePostPrePorps) => {
  return (
    <Wrapper>
      <TemporaryBackground />
      <EditorCon
        caption={caption}
        Mutation={createPostTrigger}
        Exit={create_post_toggle}
        Html={Html}
        TitleImg={TitleImg}
        setTitleImg={setTitleImg}
      />
    </Wrapper>
  );
};
