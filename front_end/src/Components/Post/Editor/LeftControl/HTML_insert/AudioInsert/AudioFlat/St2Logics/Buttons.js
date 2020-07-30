import { selfAudioEl } from "../St1ReusableItems/AudioTargetSpecific";
import { audioSetTimeDenote } from "../St1ReusableItems/ReusingLogic";

const handleAudioPlayClick = (e: any) => {
  const audioPlayer = selfAudioEl(e, "audio");
  const audioPlayBtn = selfAudioEl(e, ".audioPlayIcon");
  if (audioPlayer?.paused) {
    audioPlayer.play();
    audioPlayBtn?.setAttribute("class", "icon-pause-1 audioPlayIcon");
    const playerControle = selfAudioEl(
      e,
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
    const playerControle = selfAudioEl(
      e,
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
const audioBackToStart = (e: any) => {
  selfAudioEl(e, "audio").currentTime = 0;
  audioSetTimeDenote(e);
};

const audioFrontMediumMove = (e: any) => {
  const audioPlayer = selfAudioEl(e, "audio");
  const audioInfoMemory = selfAudioEl(e, ".audio_info_memory");
  const totaltime = parseInt(audioInfoMemory.textContent);
  if (totaltime > audioPlayer.currentTime + 15) {
    audioPlayer.currentTime = audioPlayer.currentTime + 15;
  } else {
    audioPlayer.currentTime = totaltime;
  }
  audioSetTimeDenote(e);
};
const audioBackMediumMove = (e: any) => {
  const audioPlayer = selfAudioEl(e, "audio");
  if (15 < audioPlayer.currentTime) {
    audioPlayer.currentTime = audioPlayer.currentTime - 15;
  } else {
    audioPlayer.currentTime = 0;
  }
  audioSetTimeDenote(e);
};

export const audio_button_init = () => {
  const audioPlayBtn = document.getElementsByClassName(".audioPlayIcon");
  const audioBackToStartIcon = document.getElementsByClassName(
    ".audioBackToStart"
  );
  const audioFrontMoveIcon = document.getElementsByClassName(".audioFrontMove");
  const audioBackMoveIcon = document.getElementsByClassName(".audioBackMove");
  const audioControlsIntro = document.getElementsByClassName(
    ".audioPlayer_controls_intro"
  );

  for (let i = 0; i < audioPlayBtn.length; i++) {
    audioPlayBtn[i].addEventListener("click", handleAudioPlayClick);
    audioBackToStartIcon[i].addEventListener("click", audioBackToStart);
    audioFrontMoveIcon[i].addEventListener("click", audioFrontMediumMove);
    audioBackMoveIcon[i].addEventListener("click", audioBackMediumMove);
    audioControlsIntro[i].addEventListener("click", handleAudioPlayClick);
  }
};
