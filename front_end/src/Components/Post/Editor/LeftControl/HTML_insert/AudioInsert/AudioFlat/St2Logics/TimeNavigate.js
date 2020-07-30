import { MediaClock } from "../../../../../../../../GlobalLib/RecycleFunction/etc/Time";
import { selfAudioEl } from "../St1ReusableItems/AudioTargetSpecific";
import { audioGauge_x_axis } from "../St1ReusableItems/ReusingLogic";

const audioTimeNavigate = (e: any) => {
  const audioTimeBarContainer = selfAudioEl(e, ".audio_timebase_bar_container");
  const audioTimeNavigateNumber = selfAudioEl(e, ".audio_time_navigate_number");
  const audioInfoMemory = selfAudioEl(e, ".audio_info_memory");
  const audioTimeNavigation = selfAudioEl(e, ".audio_time_navigation");
  const audioCurrentTime = selfAudioEl(e, ".audio_timebase_number");

  const movedValue = audioGauge_x_axis(e, audioTimeBarContainer);
  const virtualTime = MediaClock(
    movedValue * parseInt(audioInfoMemory.textContent)
  );
  audioTimeNavigateNumber.style.display = "flex";
  audioTimeNavigateNumber.textContent = virtualTime;

  const fullGapSize = audioCurrentTime.offsetWidth;
  const gapSize = fullGapSize - 9;
  const MousePosition =
    e.pageX - audioTimeNavigation.getBoundingClientRect().left;
  let x = 0;
  if (MousePosition < fullGapSize + gapSize / 2) {
    x = fullGapSize;
  } else if (MousePosition > audioTimeNavigation.clientWidth - gapSize / 2) {
    x = audioTimeNavigation.clientWidth - gapSize;
  } else {
    x = MousePosition - gapSize / 2;
  }
  audioTimeNavigateNumber.style.left = `${x}px`;
};
const audioTimeNavigateShow = (e: any) => {
  const audioTimeBarContainer = selfAudioEl(e, ".audio_timebase_bar_container");
  audioTimeNavigate(e);
  audioTimeBarContainer.addEventListener("mousemove", audioTimeNavigate);
};
const audioTimeNavigateHide = (e: any) => {
  const audioTimeBarContainer = selfAudioEl(e, ".audio_timebase_bar_container");
  const audioTimeNavigateNumber = selfAudioEl(e, ".audio_time_navigate_number");
  audioTimeNavigateNumber.style.display = "none";
  audioTimeBarContainer.removeEventListener("mousemove", audioTimeNavigate);
};

export const audio_timeNavi_init = () => {
  const audioTimeBarContainer = document.getElementsByClassName(
    "audio_timebase_bar_container"
  );

  for (let i = 0; i < audioTimeBarContainer.length; i++) {
    audioTimeBarContainer[i].addEventListener(
      "mouseover",
      audioTimeNavigateShow
    );
    audioTimeBarContainer[i].addEventListener(
      "mouseout",
      audioTimeNavigateHide
    );
  }
};
