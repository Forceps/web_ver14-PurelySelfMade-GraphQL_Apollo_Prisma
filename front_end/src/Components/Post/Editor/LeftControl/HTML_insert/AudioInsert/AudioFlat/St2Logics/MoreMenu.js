import { selfAudioEl } from "../St1ReusableItems/AudioTargetSpecific";

const audioMoreMenuIconClick = (e: any) => {
  const audioMoreMenuScreen = selfAudioEl(e, ".audio_player_three_dot_menu");
  e.stopPropagation();
  audioMoreMenuScreen.style.width = "100px";
};
const audioMoreMenuCloseClick = (e: any) => {
  const audioMoreMenuScreen = selfAudioEl(e, ".audio_player_three_dot_menu");
  audioMoreMenuScreen.style.width = "0px";
};
const audioMoreMenuThumbnailClick = () => {
  // setImgSubMenuOp2(true);
};

export const audio_moremenu_init = () => {
  const audioMoreMenuIcon = document.getElementsByClassName(
    ".audio_more_menu_icon"
  );
  const audioMoreMenuClose = document.getElementsByClassName(
    ".audio_player_three_dot_menu_back"
  );
  const audioMoreMenuThumbnail = document.getElementsByClassName(
    ".audio_player_three_dot_menu_thumbnail"
  );

  for (let i = 0; i < audioMoreMenuIcon.length; i++) {
    audioMoreMenuIcon[i].addEventListener("click", audioMoreMenuIconClick);
    audioMoreMenuClose[i].addEventListener("click", audioMoreMenuCloseClick);
    audioMoreMenuThumbnail[i].addEventListener(
      "click",
      audioMoreMenuThumbnailClick
    );
  }
};
