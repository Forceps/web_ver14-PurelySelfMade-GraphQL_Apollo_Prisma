import { MediaClock } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Time";
import { selfAudioEl } from "./AudioTargetSpecific";

export const getAudioCurrentTime = (e: any) => {
  const audioPlayer = selfAudioEl(e, "audio");
  const audioCurrentTime = selfAudioEl(e, ".audio_timebase_number");
  audioCurrentTime.textContent = MediaClock(
    Math.floor(audioPlayer.currentTime)
  );
};
export const statusBarMoving = (e: any) => {
  const audioPlayer = selfAudioEl(e, "audio");
  const audioTimeBar = selfAudioEl(e, ".audio_timebase_bar");
  const audioBarHandle = selfAudioEl(e, ".audio_timebase_bar_handle");
  const audioInfoMemory = selfAudioEl(e, ".audio_info_memory");
  const progressRatio =
    audioPlayer.currentTime / parseInt(audioInfoMemory.textContent);
  audioTimeBar?.setAttribute("value", `${progressRatio}`);
  let HandleLocation = audioTimeBar?.clientWidth * progressRatio;
  if (HandleLocation < 4) {
    HandleLocation = 0;
  } else if (HandleLocation > audioTimeBar?.clientWidth - 5) {
    HandleLocation = audioTimeBar?.clientWidth - 9;
  } else {
    HandleLocation = HandleLocation - 4;
  }
  audioBarHandle.style.left = `${HandleLocation}px`;
};
export const audioGauge_x_axis = (e: any, viewNode: any, clickNode?: any) => {
  let x = 0;
  x = e.pageX - viewNode.getBoundingClientRect().left;
  x = x / (clickNode ? clickNode.clientWidth : viewNode.clientWidth);
  if (x > 1) {
    x = 1;
  }
  if (x < 0) {
    x = 0;
  }
  return x;
};
export const audioSetTimeDenote = (e: any) => {
  getAudioCurrentTime(e);
  statusBarMoving(e);
};
