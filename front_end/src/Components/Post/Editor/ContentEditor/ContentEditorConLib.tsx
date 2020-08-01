export const audioStyleChange = (id: string, address: string) => {
  const player = document.getElementById(id) as HTMLElement;
  const playerControle = player.querySelector(
    ".audioPlayer_controls"
  ) as HTMLElement;
  const backImgArea = player?.querySelector(
    ".audio_player_thumbnail_container"
  ) as HTMLElement;
  const audioMoreMenuScreen = player?.querySelector(
    ".audio_player_three_dot_menu"
  ) as HTMLElement;
  const audio_tag = player?.querySelector("audio") as HTMLAudioElement;

  if (address === "") {
    backImgArea.removeAttribute("style");
    playerControle.setAttribute("class", "audioPlayer_controls");
    audioMoreMenuScreen.style.width = "0px";
  } else {
    backImgArea.setAttribute("style", `background-image: url(${address});`);
    if (audio_tag.paused) {
      playerControle.setAttribute(
        "class",
        "audioPlayer_controls audioPlayer_controls_with_img_stop"
      );
    } else {
      playerControle.setAttribute(
        "class",
        "audioPlayer_controls audioPlayer_controls_with_img_playing"
      );
    }
    audioMoreMenuScreen.style.width = "0px";
  }
};
