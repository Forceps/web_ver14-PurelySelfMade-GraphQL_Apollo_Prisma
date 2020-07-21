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
            <div class="audio_timebase_bar">
              <div class="audio_timebase_seen"></div>
              <div class="audio_timebase_willsee"></div>
            </div>
          </div>
          <div class="audioPlayer_controls_manipulator">
            <div class="audioPlayer_controls_buttons">
              <i class="icon-play audioPlayIcon"></i>
              <i class="icon-stop audioStopIcon"></i>
              <i class="icon-fast-bw audioStopIcon"></i>
              <i class="icon-fast-fw audioStopIcon"></i>
            </div>
            <div class="audioPlayer_controls_volume">
              <i class="icon-volume audioVolumeIcon"></i>
              <div class="audio_volume_bar_align">
                <div class="audio_volume_bar">
                  <div class="audio_volume_take"></div>
                  <div class="audio_volume_take_yet"></div>
                </div>
              </div>
            </div>
            <div class="audio_end_time_box WH100per">
              <div class="audio_end_time">4:12</div>
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
