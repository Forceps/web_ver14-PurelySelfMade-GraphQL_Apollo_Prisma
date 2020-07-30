// const audioPlayer = audioTarget.querySelector("audio") as HTMLAudioElement;
// const audioPlayBtn = audioTarget.querySelector(".audioPlayIcon") as HTMLElement;
// const audioVolumeBtn = audioTarget.querySelector(
//   ".audioVolumeIcon"
// ) as HTMLElement;
// const audioVolumeBar = audioTarget.querySelector(
//   ".audio_volume_bar"
// ) as HTMLElement;
// const audioCurrentTime = audioTarget.querySelector(
//   ".audio_timebase_number"
// ) as HTMLElement;
// const audioEndTime = audioTarget.querySelector(
//   ".audio_end_time"
// ) as HTMLElement;
// const audioTimeBar = audioTarget.querySelector(
//   ".audio_timebase_bar"
// ) as HTMLElement;
// const audioTimeBarContainer = audioTarget.querySelector(
//   ".audio_timebase_bar_container"
// ) as HTMLElement;
// const audioBackToStartIcon = audioTarget.querySelector(
//   ".audioBackToStart"
// ) as HTMLElement;
// const audioFrontMoveIcon = audioTarget.querySelector(
//   ".audioFrontMove"
// ) as HTMLElement;
// const audioBackMoveIcon = audioTarget.querySelector(
//   ".audioBackMove"
// ) as HTMLElement;
// const audioBarHandle = audioTarget.querySelector(
//   ".audio_timebase_bar_handle"
// ) as HTMLElement;
// const audioTimeNavigation = audioTarget.querySelector(
//   ".audio_time_navigation"
// ) as HTMLElement;
// const audioTimeNavigateNumber = audioTarget.querySelector(
//   ".audio_time_navigate_number"
// ) as HTMLElement;
// const audioInfoMemory = audioTarget.querySelector(
//   ".audio_info_memory"
// ) as HTMLElement;
// const audioResizeHandle = audioTarget.querySelector(
//   ".audio_resize_handle"
// ) as HTMLElement;
// const audioMoreMenuIcon = audioTarget.querySelector(
//   ".audio_more_menu_icon"
// ) as HTMLElement;
// const audioMoreMenuScreen = audioTarget.querySelector(
//   ".audio_player_three_dot_menu"
// ) as HTMLElement;
// const audioMoreMenuClose = audioTarget.querySelector(
//   ".audio_player_three_dot_menu_back"
// ) as HTMLElement;
// const audioMoreMenuThumbnail = audioTarget.querySelector(
//   ".audio_player_three_dot_menu_thumbnail"
// ) as HTMLElement;
// const audioControlsIntro = audioTarget.querySelector(
//   ".audioPlayer_controls_intro"
// ) as HTMLElement;

export const selfAudioEl = (e: any, idOrClass: string) => {
  const specEl = e.target.closest(".audioPlayer").querySelector(idOrClass);
  return specEl;
};
export const audioTarget = (e: any): HTMLElement => {
  return e.target.closest(".audioPlayer");
};
