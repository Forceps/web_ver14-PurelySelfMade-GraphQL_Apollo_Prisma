import "./AudioInsertStyle/Synthesis.scss";
import cryptoRandomString from "crypto-random-string";

export const AudioHtmlInsert = (address: string, audioInfo?: any) => {
  const temp_id = cryptoRandomString({ length: 20 });
  return new Promise((sol, jec) => {
    if (address) {
      const AudioHtml = /*html*/ `
      <div>
        <br>
      </div>
      <div><div id="${temp_id}" class="audioPlayer" contenteditable="false">
        <audio>
          <source src="${address}">
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
                <div class="audio_timebase_bar">
                  <div class="audio_timebase_navigate"></div>
                  <div class="audio_timebase_bar_buffer"></div>
                  <div class="audio_timebase_bar_value"></div>
                </div>
                <div class="audio_timebase_bar_handle"></div>
              </div>
            </div>
          </div>
          <div class="audioPlayer_controls_manipulator">
            <div class="audioPlayer_controls_buttons">
              <i class="icon-play audioPlayIcon"></i>
              <i class="icon-to-start audioBackToStart"></i>
              <i class="icon-fast-bw audioBackMove"></i>
              <i class="icon-fast-fw audioFrontMove"></i>
            </div>
            <div class="audioPlayer_controls_volume">
              <i class="icon-volume audioVolumeIcon"></i>
              <div class="audio_volume_bar_align">
                <div class="audio_volume_bar">
                  <div class="audio_volume_bar_value"></div>
                </div>
              </div>
            </div>
            <div class="audio_end_time_box">
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
            <div class="audio_player_menu_basic">
              <div class="audio_player_three_dot_menu_thumbnail">
                Thumbnail
              </div>
              <div class="audio_player_menu_playback_speed">
                Speed
              </div>
            </div>
            <div class="audio_player_menu_speed">
              <div class="audio_player_menu_speed_back_basic">
                <i class="icon-left-open"></i>
                Back
              </div>
              <div class="audio_player_menu_speed_dot25">
                0.25
              </div>
              <div class="audio_player_menu_speed_dot5">
                0.5
              </div>
              <div class="audio_player_menu_speed_dot75">
                0.75
              </div>
              <div class="audio_player_menu_speed_1">
                1
              </div>
              <div class="audio_player_menu_speed_1dot25">
                1.25
              </div>
              <div class="audio_player_menu_speed_1dot5">
                1.5
              </div>
              <div class="audio_player_menu_speed_1dot75">
                1.75
              </div>
              <div class="audio_player_menu_speed_2">
                2
              </div>
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
