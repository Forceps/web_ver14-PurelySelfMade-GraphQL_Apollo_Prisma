import React from "react";
import ReactDOM from "react-dom";
import "./AudioInsertStyle/Synthesis.scss";
import AudioPlayerCon from "./AudioInsertStyle/AudioPlayerCon";

export const AudioHtmlInsert = (address: string, audioInfo?: any) => {
  return new Promise((sol, jec) => {
    if (address) {
      const AudioHtml = /*html*/ `
      <div>
      
      </div>`;
      document.execCommand("insertHTML", false, AudioHtml);

      ReactDOM.render(
        <AudioPlayerCon address={address} />,
        document.getElementById("root")
      );
    }
    sol("");
  });
};
