import "./NativeVideoPlayerInsertStyle/NativePlayer.scss";

export const VideoInsertByGeneral = (address: string) => {
  return new Promise((sol, jec) => {
    if (address) {
      const VideoHtml = /*html*/ `
      <div><br></div>
      <video class="SelfVideo" controls>
        <source src="${address}" >
      </video>
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
