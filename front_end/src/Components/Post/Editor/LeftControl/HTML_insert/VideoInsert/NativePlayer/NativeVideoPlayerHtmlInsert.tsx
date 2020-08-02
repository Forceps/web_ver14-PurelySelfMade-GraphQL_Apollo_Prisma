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
        <div class="videoPlayer_controls">
          <div class="videoPlayer_controls_intro">
            <div class="video_caption">${videoInfo.caption}</div>
            <div class="videoPlayer_more_menu">
              <i class="icon-ellipsis-vert video_more_menu_icon"></i>
            </div>
          </div>
          <div class="video_time_navigation">
            <div class="video_time_navigate_number">0:00</div>
          </div>
          <div class="videoPlayer_controls_timebase_padding">
            <div class="videoPlayer_controls_timebase">
              <div class="video_timebase_bar_container">
                <div class="video_timebase_bar">
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
            <div class="videoPlayer_controls_volume">
              <i class="icon-volume videoVolumeIcon"></i>
              <div class="video_volume_bar_wide">
                <div class="video_volume_bar">
                  <div class="video_volume_bar_value"></div>                  
                </div>
                <div class="video_volume_bar_handle"></div>
              </div>
            </div>
            <div class="video_tool_box WH100per">
              <i class="icon-noun_fullscreen_1399012 video_native_fullscreen"></i>
              <div class="video_info_memory">0</div>
              <div class="video_resize_handle"></div>
            </div>
          </div>
          <div class="video_player_three_dot_menu">
            <div class="video_player_three_dot_menu_back">
              <div class="video_player_three_dot_menu_back_icon">
                <i class="icon-right-open"></i>
              </div>
            </div>
            <div class="video_player_three_dot_menu_thumbnail">
              Thumbnail
            </div>
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
