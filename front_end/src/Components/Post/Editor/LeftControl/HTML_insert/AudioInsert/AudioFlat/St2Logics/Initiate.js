import { MediaClock } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Time";
import getBlobDuration from "get-blob-duration";
import { selfAudioEl } from "../St1ReusableItems/AudioTargetSpecific";
import {
  statusBarMoving,
  getAudioCurrentTime,
} from "../St1ReusableItems/ReusingLogic";

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
const setAudioTotalTime = async (e: any) => {
  const audioPlayer = selfAudioEl(e, "audio");
  const audioInfoMemory = selfAudioEl(e, ".audio_info_memory");
  const audioEndTime = selfAudioEl(e, ".audio_end_time");
  audioPlayer.volume = 0.5;
  audioInfoMemory.textContent = `${await getAudioDuration(audioPlayer)}`;
  const totalTimeString = MediaClock(parseInt(audioInfoMemory.textContent));
  audioEndTime.textContent = totalTimeString;
  setInterval(() => {
    getAudioCurrentTime(e);
  }, 1000);
  setInterval(() => {
    statusBarMoving(e);
  }, 100);
};
const handleAudioEnded = (e: any) => {
  const audioPlayer = selfAudioEl(e, "audio");
  const audioPlayBtn = selfAudioEl(e, ".audioPlayIcon");
  audioPlayer.pause();
  audioPlayBtn.setAttribute("class", "icon-play audioPlayIcon");
};

export const audio_initiate_init = () => {
  const audioPlayer = document.getElementsByTagName("audio");

  for (let i = 0; i < audioPlayer.length; i++) {
    audioPlayer[i].addEventListener("loadedmetadata", setAudioTotalTime);
    audioPlayer[i].addEventListener("ended", handleAudioEnded);
  }
};
