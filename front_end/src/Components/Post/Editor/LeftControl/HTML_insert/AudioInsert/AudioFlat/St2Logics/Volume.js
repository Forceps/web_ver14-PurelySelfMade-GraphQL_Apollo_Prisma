import { selfAudioEl } from "../St1ReusableItems/AudioTargetSpecific";
import { audioGauge_x_axis } from "../St1ReusableItems/ReusingLogic";

const handleAudioVolumeClick = (e: any) => {
  const audioPlayer = selfAudioEl(e, "audio");
  const audioVolumeBtn = selfAudioEl(e, ".audioVolumeIcon");
  const audioVolumeBar = selfAudioEl(e, ".audio_volume_bar");
  if (audioPlayer.muted) {
    audioPlayer.muted = false;
    audioVolumeBtn?.setAttribute("class", "icon-volume audioVolumeIcon");
    audioVolumeBar?.setAttribute("value", `${audioPlayer.volume}`);
  } else {
    audioPlayer.muted = true;
    audioVolumeBtn?.setAttribute("class", "icon-volume-off audioVolumeIcon");
    audioVolumeBar?.setAttribute("value", "0");
  }
};
const audioVolumeControlMouseMove = (e: any) => {
  const audioPlayer = selfAudioEl(e, "audio");
  const audioVolumeBar = selfAudioEl(e, ".audio_volume_bar");
  const audioVolumeBtn = selfAudioEl(e, ".audioVolumeIcon");

  const movedValue = audioGauge_x_axis(e, audioVolumeBar);
  audioVolumeBar?.setAttribute("value", `${movedValue}`);
  audioPlayer.volume = movedValue;
  if (audioPlayer.volume > 0.5) {
    audioVolumeBtn?.setAttribute("class", "icon-volume audioVolumeIcon");
  } else if (audioPlayer.volume > 0) {
    audioVolumeBtn?.setAttribute("class", "icon-volume-down audioVolumeIcon");
  } else {
    audioVolumeBtn?.setAttribute("class", "icon-volume-off audioVolumeIcon");
  }
};
const audioVolumeControlMouseDown = (e: any) => {
  if (e.button === 0) {
    audioVolumeControlMouseMove(e);
    document.addEventListener("mousemove", audioVolumeControlMouseMove);
  }
};
const audioVolumeControlMouseUp = (e: any) => {
  if (e.button === 0) {
    document.removeEventListener("mousemove", audioVolumeControlMouseMove);
  }
};

export const audio_volume_init = () => {
  const audioVolumeBtn = document.getElementsByClassName("audioVolumeIcon");
  const audioVolumeBar = document.getElementsByClassName("audio_volume_bar");

  for (let i = 0; i < audioVolumeBtn.length; i++) {
    audioVolumeBtn[i].addEventListener("click", handleAudioVolumeClick);
    audioVolumeBar[i].addEventListener(
      "mousedown",
      audioVolumeControlMouseDown
    );
  }
  document.addEventListener("mouseup", audioVolumeControlMouseUp);
};
