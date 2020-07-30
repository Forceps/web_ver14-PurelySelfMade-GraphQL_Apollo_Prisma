import {
  audioGauge_x_axis,
  audioSetTimeDenote,
} from "../St1ReusableItems/ReusingLogic";
import { selfAudioEl } from "../St1ReusableItems/AudioTargetSpecific";

const audioCurrentTimeControlMouseMove = (e: any) => {
  const audioPlayer = selfAudioEl(e, "audio");
  const audioInfoMemory = selfAudioEl(e, ".audio_info_memory");
  const audioTimeBar = selfAudioEl(e, ".audio_info_memory");
  const audioTimeBarContainer = selfAudioEl(e, ".audio_info_memory");
  const movedValue = audioGauge_x_axis(e, audioTimeBar, audioTimeBarContainer);
  audioPlayer.currentTime = movedValue * parseInt(audioInfoMemory.textContent);
  audioSetTimeDenote(e);
};
const audioCurrentTimeControlMouseDown = (e: any) => {
  if (e.button === 0) {
    audioCurrentTimeControlMouseMove(e);
    document.addEventListener("mousemove", audioCurrentTimeControlMouseMove);
  }
};
const audioCurrentTimeControlMouseUp = (e: any) => {
  if (e.button === 0) {
    document.removeEventListener("mousemove", audioCurrentTimeControlMouseMove);
  }
};

export const audio_timeAppointing_init = () => {
  const audioTimeBarContainer = document.getElementsByClassName(
    ".audioPlayIcon"
  );

  for (let i = 0; i < audioTimeBarContainer.length; i++) {
    audioTimeBarContainer[i].addEventListener(
      "mousedown",
      audioCurrentTimeControlMouseDown
    );
  }
  document.addEventListener("mouseup", audioCurrentTimeControlMouseUp);
};
