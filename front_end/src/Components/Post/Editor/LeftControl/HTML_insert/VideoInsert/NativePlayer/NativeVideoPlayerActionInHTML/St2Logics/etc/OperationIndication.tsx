import React, { useEffect } from "react";
import styled from "styled-components";
import { videoHtmlPlayerStructureInEditor } from "../../St1ReusableItems/NativeVideoPlayerTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({ videoElem }: St2VideoActionLogicProps) => {
  useEffect(() => {
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2VideoActionLogicProps {
  videoElem: videoHtmlPlayerStructureInEditor;
}
