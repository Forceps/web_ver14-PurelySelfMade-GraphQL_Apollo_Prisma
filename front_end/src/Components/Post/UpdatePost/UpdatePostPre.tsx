import React, { useRef } from "react";
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

type UpdatePostPreProps = {
  caption: any;
  UpdateProcess: any;
  Exit: any;
  Html: any;
  setHtml: any;
};
export default ({
  caption,
  UpdateProcess,
  Exit,
  Html,
  setHtml,
}: UpdatePostPreProps) => {
  const UpdateMode = useRef("update");
  return (
    <Wrapper>
      <TemporaryBackground />
      <EditorCon
        caption={caption}
        Mutation={UpdateProcess}
        Exit={Exit}
        Html={Html}
        setHtml={setHtml}
        Mode={UpdateMode}
      />
    </Wrapper>
  );
};
