import React, { useEffect } from "react";
import styled from "styled-components";
import { spaped } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { audioHtmlPlayerStructureInEditor } from "../../St1ReusableItems/AudioTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  audioSetTimeDenote,
  keyboardShortCutAble,
  audioElem,
}: St2AudioActionLogicProps) => {
  const {
    audioPlayer,
    audioTarget,
    top: { controlsIntro },
    bottom: {
      basicButton: { playBtn, backToStartIcon, frontMoveIcon, backMoveIcon },
    },
    memory: { audioInfoMemory },
  } = audioElem;

  const handleAudioPlayClick = () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playBtn.setAttribute("class", "icon-pause-1 audioPlayIcon");
      const playerControle = audioTarget.querySelector(
        ".audioPlayer_controls_with_img_stop"
      );
      if (playerControle) {
        setTimeout(() => {
          playerControle.setAttribute(
            "class",
            "audioPlayer_controls audioPlayer_controls_with_img_playing"
          );
        }, 1000);
      }
    } else {
      audioPlayer.pause();
      playBtn.setAttribute("class", "icon-play audioPlayIcon");
      const playerControle = audioTarget.querySelector(
        ".audioPlayer_controls_with_img_playing"
      );
      if (playerControle) {
        playerControle.setAttribute(
          "class",
          "audioPlayer_controls audioPlayer_controls_with_img_stop"
        );
      }
    }
  };
  const audioBackToStart = () => {
    if (audioPlayer) {
      audioPlayer.currentTime = 0;
      audioSetTimeDenote();
    }
  };
  const audioTimeMediumMove = (direction: string, degree: number) => {
    if (audioInfoMemory.textContent) {
      if (direction === "front") {
        const totaltime = parseInt(audioInfoMemory.textContent);
        if (totaltime > audioPlayer.currentTime + degree) {
          audioPlayer.currentTime = audioPlayer.currentTime + degree;
        } else {
          audioPlayer.currentTime = totaltime;
        }
      } else {
        if (degree < audioPlayer.currentTime) {
          audioPlayer.currentTime = audioPlayer.currentTime - degree;
        } else {
          audioPlayer.currentTime = 0;
        }
      }
      audioSetTimeDenote();
    }
  };
  const keyboardShortCut = (e: any) => {
    if (keyboardShortCutAble()) {
      spaped(e);
      switch (e.keyCode) {
        case 32:
          handleAudioPlayClick();
          break;
        case 39:
          audioTimeMediumMove("front", 4);
          break;
        case 37:
          audioTimeMediumMove("back", 4);
      }
    }
  };

  useEffect(() => {
    playBtn.addEventListener("click", handleAudioPlayClick);
    backToStartIcon.addEventListener("click", audioBackToStart);
    frontMoveIcon.addEventListener("click", () => {
      audioTimeMediumMove("front", 15);
    });
    backMoveIcon.addEventListener("click", () => {
      audioTimeMediumMove("back", 15);
    });
    controlsIntro.addEventListener("click", handleAudioPlayClick);
    document.addEventListener("keydown", keyboardShortCut);

    return () => {
      playBtn.removeEventListener("click", handleAudioPlayClick);
      backToStartIcon.removeEventListener("click", audioBackToStart);
      frontMoveIcon.removeEventListener("click", () => {
        audioTimeMediumMove("front", 15);
      });
      backMoveIcon.removeEventListener("click", () => {
        audioTimeMediumMove("back", 15);
      });
      controlsIntro.removeEventListener("click", handleAudioPlayClick);
      document.removeEventListener("keydown", keyboardShortCut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2AudioActionLogicProps {
  audioSetTimeDenote: any;
  keyboardShortCutAble: () => boolean;
  audioElem: audioHtmlPlayerStructureInEditor;
}
