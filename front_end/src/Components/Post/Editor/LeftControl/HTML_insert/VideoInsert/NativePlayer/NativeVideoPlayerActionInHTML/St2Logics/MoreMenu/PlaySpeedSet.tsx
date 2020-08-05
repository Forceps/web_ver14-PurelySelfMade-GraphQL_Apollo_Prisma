import React, { useEffect } from "react";
import styled from "styled-components";
import { videoHtmlPlayerStructureInEditor } from "../../St1ReusableItems/NativeVideoPlayerTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({ videoElem }: St2VideoActionLogicProps) => {
  const {
    videoPlayer,
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
  } = videoElem;

  const backToBasic = () => {
    basic.style.display = "flex";
    playBackSpeed.style.display = "none";
  };
  const changeInSpeed = (n: number) => {
    videoPlayer.playbackRate = n;
    backToBasic();
  };

  useEffect(() => {
    back_to_basic.addEventListener("click", backToBasic);
    at_dot25.addEventListener("click", () => {
      changeInSpeed(0.25);
    });
    at_dot5.addEventListener("click", () => {
      changeInSpeed(0.5);
    });
    at_dot75.addEventListener("click", () => {
      changeInSpeed(0.75);
    });
    at_1.addEventListener("click", () => {
      changeInSpeed(1);
    });
    at_1dot25.addEventListener("click", () => {
      changeInSpeed(1.25);
    });
    at_1dot5.addEventListener("click", () => {
      changeInSpeed(1.5);
    });
    at_1dot75.addEventListener("click", () => {
      changeInSpeed(1.75);
    });
    at_2.addEventListener("click", () => {
      changeInSpeed(2);
    });

    return () => {
      back_to_basic.removeEventListener("click", backToBasic);
      at_dot25.removeEventListener("click", () => {
        changeInSpeed(0.25);
      });
      at_dot5.removeEventListener("click", () => {
        changeInSpeed(0.5);
      });
      at_dot75.removeEventListener("click", () => {
        changeInSpeed(0.75);
      });
      at_1.removeEventListener("click", () => {
        changeInSpeed(1);
      });
      at_1dot25.removeEventListener("click", () => {
        changeInSpeed(1.25);
      });
      at_1dot5.removeEventListener("click", () => {
        changeInSpeed(1.5);
      });
      at_1dot75.removeEventListener("click", () => {
        changeInSpeed(1.75);
      });
      at_2.removeEventListener("click", () => {
        changeInSpeed(2);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UnnecessaryDiv />;
};

interface St2VideoActionLogicProps {
  videoElem: videoHtmlPlayerStructureInEditor;
}
