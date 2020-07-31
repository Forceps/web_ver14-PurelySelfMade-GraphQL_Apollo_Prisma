import "./AudioInsertStyle/Synthesis.scss";

export const AudioHtmlInsert = (address: string, audioInfo?: any) => {
  return new Promise((sol, jec) => {
    if (address) {
      const AudioHtml = /*html*/ `
      <div>
        <br>
      </div>
      <div><div class="audioPlayer" contenteditable="false">
        <audio>
          <source src="${address}" style="opacity: 0;" >
        </audio>
        <div class="audio_player_thumbnail_container"></div>
        <div class="audioPlayer_controls">
          <div class="audioPlayer_controls_intro">
            <div class="audio_caption">${audioInfo.caption}</div>
            <div class="audioPlayer_more_menu">
              <i class="icon-ellipsis-vert audio_more_menu_icon"></i>
            </div>
          </div>
          <div class="audio_time_navigation">
            <div class="audio_time_navigate_number">0:00</div>
          </div>
          <div class="audioPlayer_controls_timebase_padding">
            <div class="audioPlayer_controls_timebase">
              <div class="audio_timebase_number">0:00</div>
              <div class="audio_timebase_bar_container">
                <progress class="audio_timebase_bar" value="0" max="1"></progress>
                <div class="audio_timebase_bar_handle"></div>
              </div>
            </div>
          </div>
          <div class="audioPlayer_controls_manipulator">
            <div class="audioPlayer_controls_buttons">
              <i class="icon-play audioPlayIcon"></i>
              <i class="icon-to-start audioRestIcon audioBackToStart"></i>
              <i class="icon-fast-bw audioRestIcon audioBackMove"></i>
              <i class="icon-fast-fw audioRestIcon audioFrontMove"></i>
            </div>
            <div class="audioPlayer_controls_volume">
              <i class="icon-volume audioVolumeIcon"></i>
              <div class="audio_volume_bar_align">
                <progress class="audio_volume_bar" value="0.5" max="1"></progress>
              </div>
            </div>
            <div class="audio_end_time_box WH100per">
              <div class="audio_end_time">0:00</div>
              <div class="audio_info_memory">0</div>
              <div class="audio_resize_handle"></div>
            </div>
          </div>
          <div class="audio_player_three_dot_menu">
            <div class="audio_player_three_dot_menu_back">
              <div class="audio_player_three_dot_menu_back_icon">
                <i class="icon-right-open"></i>
              </div>
            </div>
            <div class="audio_player_three_dot_menu_thumbnail">
              Thumbnail
            </div>
          </div>
        </div>
      </div></div>
      <div>
        <br>
      </div>`;
      document.execCommand("insertHTML", false, AudioHtml);
    }
    sol("");
  });
};
