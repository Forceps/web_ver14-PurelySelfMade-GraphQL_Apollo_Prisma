import React, { useEffect } from "react";
import styled from "styled-components";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  audioDuration,
  audioPlayer,
  audioPlayBtn,
  audioBackToStartIcon,
  audioFrontMoveIcon,
  audioBackMoveIcon,
  rerenderingPoint,
  audioSetTimeDenote,
}: St2AudioActionLogicProps) => {
  const handleAudioPlayClick = () => {
    if (audioPlayer?.paused) {
      audioPlayer.play();
      audioPlayBtn?.setAttribute("class", "icon-pause-1 audioPlayIcon");
    } else {
      audioPlayer?.pause();
      audioPlayBtn?.setAttribute("class", "icon-play audioPlayIcon");
    }
  };
  const audioBackToStart = () => {
    if (audioPlayer) {
      audioPlayer.currentTime = 0;
      audioSetTimeDenote();
    }
  };
  const audioFrontMediumMove = () => {
    if (audioPlayer) {
      if (audioDuration.current > audioPlayer.currentTime + 15) {
        audioPlayer.currentTime = audioPlayer.currentTime + 15;
      } else {
        audioPlayer.currentTime = audioDuration.current;
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

  useEffect(() => {
    audioPlayBtn?.addEventListener("click", handleAudioPlayClick);
    audioBackToStartIcon?.addEventListener("click", audioBackToStart);
    audioFrontMoveIcon?.addEventListener("click", audioFrontMediumMove);
    audioBackMoveIcon?.addEventListener("click", audioBackMediumMove);

    return () => {
      audioPlayBtn?.removeEventListener("click", handleAudioPlayClick);
      audioBackToStartIcon?.removeEventListener("click", audioBackToStart);
      audioFrontMoveIcon?.removeEventListener("click", audioFrontMediumMove);
      audioBackMoveIcon?.removeEventListener("click", audioBackMediumMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerenderingPoint]);
  return <UnnecessaryDiv />;
};
interface St2AudioActionLogicProps {
  audioPlayer: HTMLAudioElement;
  audioPlayBtn: HTMLElement;
  audioBackToStartIcon: HTMLElement;
  audioFrontMoveIcon: HTMLElement;
  audioBackMoveIcon: HTMLElement;
  audioDuration: React.MutableRefObject<number>;
  audioSetTimeDenote: any;
  rerenderingPoint?: any;
}
