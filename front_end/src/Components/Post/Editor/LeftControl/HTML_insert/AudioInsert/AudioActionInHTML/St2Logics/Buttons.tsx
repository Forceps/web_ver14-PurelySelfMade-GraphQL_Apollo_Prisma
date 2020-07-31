import React, { useEffect } from "react";
import styled from "styled-components";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  audioTarget,
  audioInfoMemory,
  audioPlayer,
  audioPlayBtn,
  audioBackToStartIcon,
  audioFrontMoveIcon,
  audioBackMoveIcon,
  audioSetTimeDenote,
  audioControlsIntro,
}: St2AudioActionLogicProps) => {
  const handleAudioPlayClick = () => {
    if (audioPlayer?.paused) {
      audioPlayer.play();
      audioPlayBtn?.setAttribute("class", "icon-pause-1 audioPlayIcon");
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
      audioPlayer?.pause();
      audioPlayBtn?.setAttribute("class", "icon-play audioPlayIcon");
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
  const audioFrontMediumMove = () => {
    if (audioPlayer && audioInfoMemory.textContent) {
      const totaltime = parseInt(audioInfoMemory.textContent);
      if (totaltime > audioPlayer.currentTime + 15) {
        audioPlayer.currentTime = audioPlayer.currentTime + 15;
      } else {
        audioPlayer.currentTime = totaltime;
      }
      audioSetTimeDenote();
    }
  };
  const audioBackMediumMove = () => {
    if (audioPlayer) {
      if (15 < audioPlayer.currentTime) {
        audioPlayer.currentTime = audioPlayer.currentTime - 15;
      } else {
        audioPlayer.currentTime = 0;
      }
      audioSetTimeDenote();
    }
  };
  const pressSpacebar = (e: any) => {
    if (e.keyCode === 32) {
      handleAudioPlayClick();
    }
  };

  useEffect(() => {
    audioPlayBtn?.addEventListener("click", handleAudioPlayClick);
    audioBackToStartIcon?.addEventListener("click", audioBackToStart);
    audioFrontMoveIcon?.addEventListener("click", audioFrontMediumMove);
    audioBackMoveIcon?.addEventListener("click", audioBackMediumMove);
    audioControlsIntro?.addEventListener("click", handleAudioPlayClick);
    document.addEventListener("keydown", pressSpacebar);

    return () => {
      audioPlayBtn?.removeEventListener("click", handleAudioPlayClick);
      audioBackToStartIcon?.removeEventListener("click", audioBackToStart);
      audioFrontMoveIcon?.removeEventListener("click", audioFrontMediumMove);
      audioBackMoveIcon?.removeEventListener("click", audioBackMediumMove);
      audioControlsIntro?.removeEventListener("click", handleAudioPlayClick);
      document.removeEventListener("keydown", pressSpacebar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <UnnecessaryDiv />;
};
interface St2AudioActionLogicProps {
  audioTarget: Element;
  audioPlayer: HTMLAudioElement;
  audioPlayBtn: HTMLElement;
  audioBackToStartIcon: HTMLElement;
  audioFrontMoveIcon: HTMLElement;
  audioBackMoveIcon: HTMLElement;
  audioInfoMemory: HTMLElement;
  audioSetTimeDenote: any;
  audioControlsIntro: HTMLElement;
}
