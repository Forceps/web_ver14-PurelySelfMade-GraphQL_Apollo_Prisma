import React, { useEffect, RefObject, useRef } from "react";
import styled from "styled-components";
import { MediaClock } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Math/Time";
import getBlobDuration from "get-blob-duration";
import { mediaStateRenewalCycle } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Math/Formula";
import { audioHtmlPlayerStructureInEditor } from "../St1ReusableItems/AudioTargetSpecific";

const UnnecessaryDiv = styled.div`
  display: none;
`;

export default ({
  InEditor,
  getAudioCurrentTime,
  statusBarMoving,
  mediaTargetId,
  playerClicked,
  audioElem,
}: St2AudioActionLogicProps) => {
  const {
    audioPlayer,
    bottom: {
      basicButton: { audioPlayBtn },
      endTimeBox: { audioEndTime },
    },
    memory: { audioInfoMemory },
  } = audioElem;

  const getAudioDuration = async (audioPlayer: any) => {
    let duration: number;
    if (!isFinite(audioPlayer.duration)) {
      const blob = await fetch(audioPlayer.src).then((response) =>
        response.blob()
      );
      duration = await getBlobDuration(blob);
    } else {
      duration = audioPlayer.duration;
    }
    return duration;
  };
  const timeGo2 = useRef(0);
  const setAudioTotalTime = async () => {
    audioPlayer.volume = 0.5;
    const Duration = await getAudioDuration(audioPlayer);
    audioInfoMemory.textContent = `${Duration}`;
    const totalTimeString = MediaClock(Duration);
    audioEndTime.textContent = totalTimeString;
    timeGo2.current = setInterval(
      statusBarMoving,
      mediaStateRenewalCycle(Duration)
    );
  };
  const handleAudioEnded = () => {
    audioPlayer?.pause();
    audioPlayBtn?.setAttribute("class", "icon-play audioPlayIcon");
  };
  const clickPlayer = (e: any) => {
    const plau = e.target.closest(".audioPlayer");
    if (plau && plau.closest("#CUedit")) {
      e.stopPropagation();
      InEditor.current?.blur();
      mediaTargetId.current = plau.id;
      playerClicked.current = true;
    } else if (playerClicked.current) {
      playerClicked.current = false;
    }
  };

  useEffect(() => {
    setAudioTotalTime();
    audioPlayer?.addEventListener("loadedmetadata", setAudioTotalTime);
    audioPlayer?.addEventListener("ended", handleAudioEnded);
    const timeGo1 = setInterval(getAudioCurrentTime, 1000);
    document.addEventListener("click", clickPlayer);

    return () => {
      audioPlayer?.removeEventListener("loadedmetadata", setAudioTotalTime);
      audioPlayer?.removeEventListener("ended", handleAudioEnded);
      window.clearInterval(timeGo1);
      window.clearInterval(timeGo2.current);
      document.removeEventListener("click", clickPlayer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <UnnecessaryDiv />;
};

interface St2AudioActionLogicProps {
  InEditor: RefObject<HTMLElement>;
  getAudioCurrentTime: () => void;
  statusBarMoving: () => void;
  mediaTargetId: any;
  playerClicked: React.MutableRefObject<boolean>;
  audioElem: audioHtmlPlayerStructureInEditor;
}
