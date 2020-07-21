import "./LeftControl.scss";

export const ImgHtmlInsert = (address: string) => {
  return new Promise((sol, jec) => {
    const imgHtml = /*html*/ `
    <div><br></div>
    <img src='${address}' class="InsertedImg" ></img>
    <div><br></div>`;
    document.execCommand("insertHTML", false, imgHtml);
    sol("");
  });
};
export const AnchorInsert = (address: string, object: string) => {
  return new Promise((sol, jec) => {
    const a_tag_Html = /*html*/ `<a href='${address}' target='_blank'>${object}</a>`;
    document.execCommand("insertHTML", false, a_tag_Html);
    sol("");
  });
};
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
export const RefinedFilePath = (filePath: string) => {
  let strArray = filePath.split("\\");
  let refinedStr = strArray[0] + "\\...\\" + strArray[strArray.length - 1];
  if (strArray[strArray.length - 1] === "") {
    return "";
  } else {
    return refinedStr;
  }
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

export const AudioHtmlInsert = (address: string) => {
  return new Promise((sol, jec) => {
    if (address) {
      const AudioHtml = /*html*/ `
      <div><br></div>
      <audio controls>
        <source src="${address}" >
      </audio>
      <div><br></div>`;
      document.execCommand("insertHTML", false, AudioHtml);
    }
    sol("");
  });
};
