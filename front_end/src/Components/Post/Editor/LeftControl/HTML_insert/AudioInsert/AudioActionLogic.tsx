import React, { useEffect } from "react";
import styled from "styled-components";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({ Html }: AudioActionLogicProps) => {
  const audioContainers = document.getElementsByClassName("audioPlayer");
  const audioPlayer = audioContainers[0]?.querySelector("audio");
  const audioplayBtn = audioContainers[0]?.querySelector(".audioPlayIcon");
  const handlePlayClick = () => {
    if (audioPlayer && audioplayBtn) {
      if (audioPlayer.paused) {
        audioPlayer.play();
        audioplayBtn.setAttribute("class", "icon-pause-1 audioPlayIcon");
      } else {
        audioPlayer.pause();
        audioplayBtn.setAttribute("class", "icon-play audioPlayIcon");
      }
    }
  };
  useEffect(() => {
    console.log(audioContainers);
    console.log(audioPlayer);
    console.log(audioplayBtn);
    if (audioplayBtn) {
      console.log("played");
      audioplayBtn.addEventListener("click", handlePlayClick);
    }
    return () => {
      if (audioplayBtn) {
        audioplayBtn.removeEventListener("click", handlePlayClick);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Html]);
  return <UnnecessaryDiv />;
};
interface AudioActionLogicProps {
  Html: string;
}
