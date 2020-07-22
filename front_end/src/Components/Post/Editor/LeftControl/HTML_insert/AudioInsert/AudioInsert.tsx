import "./AudioInsert.scss";

export const AudioHtmlInsert = (address: string, audioInfo?: any) => {
  return new Promise((sol, jec) => {
    if (address) {
      const AudioHtml = /*html*/ `
      <div><br></div>

      <div contenteditable="false">
      <div><br></div>
      <div class="audioPlayer" contenteditable="false">
        <audio>
          <source src="${address}" >
        </audio>
        <div class="audioPlayer_controls">
          <div class="audioPlayer_controls_intro">
            ${audioInfo.caption}
          </div>
          <div class="audioPlayer_controls_timebase">
            <div class="audio_timebase_number">0:00</div>
            <div class="audio_timebase_bar_container">
              <progress class="audio_timebase_bar" value="0" max="1"></progress>
            </div>
          </div>
          <div class="audioPlayer_controls_manipulator">
            <div class="audioPlayer_controls_buttons">
              <i class="icon-play audioPlayIcon"></i>
              <i class="icon-to-start audioRestIcon audioBackToStart"></i>
              <i class="icon-fast-bw audioRestIcon audioFrontMove"></i>
              <i class="icon-fast-fw audioRestIcon audioBackMove"></i>
            </div>
            <div class="audioPlayer_controls_volume">
              <i class="icon-volume audioVolumeIcon"></i>
              <div class="audio_volume_bar_align">
                <progress class="audio_volume_bar" value="0.5" max="1"></progress>
              </div>
            </div>
            <div class="audio_end_time_box WH100per">
              <div class="audio_end_time">0:00</div>
            </div>
          </div>
        </div>
      </div>
      <div><br></div>
      </div>

      <div><br></div>`;
      document.execCommand("insertHTML", false, AudioHtml);
    }
    sol("");
  });
};
