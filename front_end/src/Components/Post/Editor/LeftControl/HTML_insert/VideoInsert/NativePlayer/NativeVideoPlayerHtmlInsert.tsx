import "./NativeVideoPlayerInsertStyle/Synthesis.scss";
import cryptoRandomString from "crypto-random-string";

export default (address: string, videoInfo?: any) => {
  const temp_id = cryptoRandomString({ length: 20 });
  return new Promise((sol, jec) => {
    if (address) {
      const VideoHtml = /*html*/ `
      <div><br></div>

      <div><div id="${temp_id}" class="videoPlayer" contenteditable="false">
        <video class="video_tag">
          <source src="${address}" >
        </video>
        <div class="videoPlayer_controls videoPlayer_controls_at_stop">
          <div class="videoPlayer_controls_intro">
            <div class="video_caption">${videoInfo.caption}</div>
            <div class="videoPlayer_more_menu">
              <i class="icon-menu video_more_menu_icon"></i>
            </div>
          </div>
          <div class="videoPlayer_controls_timebase_padding">
            <div class="video_time_navigation">
              <div class="video_time_navigate_number">0:00</div>
            </div>
          </div>
          <div class="videoPlayer_bottom">
            <div class="videoPlayer_controls_timebase_padding">
              <div class="videoPlayer_controls_timebase">
                <div class="video_timebase_bar_container">
                  <div class="video_timebase_bar">
                    <div class="video_timebase_navigate"></div>
                    <div class="video_timebase_bar_buffer"></div>
                    <div class="video_timebase_bar_value"></div>
                  </div>
                  <div class="video_timebase_bar_handle"></div>
                </div>
              </div>
            </div>
            <div class="videoPlayer_controls_manipulator">
              <div class="videoPlayer_controls_buttons">
                <i class="icon-play videoPlayIcon"></i>
                <i class="icon-to-start videoBackToStart"></i>
              </div>
              <div class="video_timebase_number_container">
                <div class="video_timebase_number">0:00</div>
                <div class="video_time_slash">&nbsp/&nbsp</div>
                <div class="video_end_time">0:00</div>
              </div>
              <div class="videoPlayer_controls_volume volumeBarHide">
                <i class="icon-volume videoVolumeIcon"></i>
                <div class="video_volume_bar_wide">
                  <div class="video_volume_bar">
                    <div class="video_volume_bar_value"></div>
                  </div>
                </div>
              </div>
              <div class="video_tool_box">
                <i class="icon-noun_fullscreen_1399012 video_native_fullscreen"></i>
                <div class="video_info_memory">0</div>
                <div class="video_resize_handle"></div>
              </div>
            </div>
          </div>
          <div class="video_player_three_dot_menu">
            <div class="video_player_three_dot_menu_back">
              <div class="video_player_three_dot_menu_back_icon">
                <i class="icon-right-open"></i>
              </div>
            </div>
            <div class="video_player_menu_basic">
              <div class="video_player_menu_playback_speed">
                Speed
              </div>
            </div>
            <div class="video_player_menu_speed">
              <div class="video_player_menu_speed_back_basic">
                <i class="icon-left-open"></i>
                Back
              </div>
              <div class="video_player_menu_speed_dot25">
                0.25
              </div>
              <div class="video_player_menu_speed_dot5">
                0.5
              </div>
              <div class="video_player_menu_speed_dot75">
                0.75
              </div>
              <div class="video_player_menu_speed_1">
                1
              </div>
              <div class="video_player_menu_speed_1dot25">
                1.25
              </div>
              <div class="video_player_menu_speed_1dot5">
                1.5
              </div>
              <div class="video_player_menu_speed_1dot75">
                1.75
              </div>
              <div class="video_player_menu_speed_2">
                2
              </div>
            </div>
          </div>
          <div class="native_video_operation_indication native_video_operation_indication_hide">
            <i class="icon-play voiPlay"></i>
          </div>
        </div>
      </div></div>

      <div><br></div>`;
      document.execCommand("insertHTML", false, VideoHtml);
    }
    sol("");
  });
};

export const RefinedFilePath = (filePath: string) => {
  let strArray = filePath.split("\\");
  let refinedStr = strArray[0] + "\\...\\" + strArray[strArray.length - 1];
  if (strArray[strArray.length - 1] === "") {
    return "";
  } else {
    return refinedStr;
  }
};
