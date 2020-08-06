import React, { useEffect } from "react";
import styled from "styled-components";
import { audioHtmlPlayerStructureInEditor } from "../../St1ReusableItems/AudioTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({ audioElem }: St2VideoActionLogicProps) => {
  const {
    audioPlayer,
    menu: {
      screenKinds: { basic, playBackSpeed },
      playBackSpeed: {
        back_to_basic,
        at_dot25,
        at_dot5,
        at_dot75,
        at_1,
        at_1dot25,
        at_1dot5,
        at_1dot75,
        at_2,
      },
    },
  } = audioElem;

  const backToBasic = () => {
    basic.style.display = "flex";
    playBackSpeed.style.display = "none";
  };
  const changeInSpeed = (e: MouseEvent) => {
    const list = playBackSpeed.getElementsByTagName("div");
    const targetBySpeed = audioPlayer.playbackRate * 4;
    list[targetBySpeed].style.borderLeft = "0px";
    for (let i = 1; i < list.length; i++) {
      if (list[i] === e.currentTarget) {
        audioPlayer.playbackRate = 0.25 * i;
        list[i].style.borderLeft = "4px solid #2d3436";
        break;
      }
    }
  };

  useEffect(() => {
    back_to_basic.addEventListener("click", backToBasic);
    at_dot25.addEventListener("click", changeInSpeed);
    at_dot5.addEventListener("click", changeInSpeed);
    at_dot75.addEventListener("click", changeInSpeed);
    at_1.addEventListener("click", changeInSpeed);
    at_1dot25.addEventListener("click", changeInSpeed);
    at_1dot5.addEventListener("click", changeInSpeed);
    at_1dot75.addEventListener("click", changeInSpeed);
    at_2.addEventListener("click", changeInSpeed);

    return () => {
      back_to_basic.removeEventListener("click", backToBasic);
      at_dot25.removeEventListener("click", changeInSpeed);
      at_dot5.removeEventListener("click", changeInSpeed);
      at_dot75.removeEventListener("click", changeInSpeed);
      at_1.removeEventListener("click", changeInSpeed);
      at_1dot25.removeEventListener("click", changeInSpeed);
      at_1dot5.removeEventListener("click", changeInSpeed);
      at_1dot75.removeEventListener("click", changeInSpeed);
      at_2.removeEventListener("click", changeInSpeed);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UnnecessaryDiv />;
};

interface St2VideoActionLogicProps {
  audioElem: audioHtmlPlayerStructureInEditor;
}
