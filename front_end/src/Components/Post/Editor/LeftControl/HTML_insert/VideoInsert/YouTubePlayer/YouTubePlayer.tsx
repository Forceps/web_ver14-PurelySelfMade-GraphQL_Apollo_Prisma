import "./YouTubePlayer.scss";

export const VideoInsertByYoutube = (address: string) => {
  return new Promise((sol, jec) => {
    const Raddress: string | boolean = RefinedYoutubePath(address);
    if (Raddress !== false) {
      const YoutubeVideoHtml = /*html*/ `
      <div><br></div>
      <div class="OutSide" contenteditable="false" >
        <iframe class="InSide" src="https://www.youtube.com/embed/${Raddress}" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" ></iframe>
        <div class="ResizeHandle" ></div>
      </div>
      <div><br></div>`;
      document.execCommand("insertHTML", false, YoutubeVideoHtml);
    }
    sol("");
  });
};

export const RefinedYoutubePath = (YoutubePath: string) => {
  try {
    let strArray = YoutubePath.split("v=");
    let strArray2 = strArray[1].split("&");
    let strArray3 = strArray2[0];
    if (strArray3 === "") {
      return "";
    } else {
      return strArray3;
    }
  } catch {
    return false;
  }
};
