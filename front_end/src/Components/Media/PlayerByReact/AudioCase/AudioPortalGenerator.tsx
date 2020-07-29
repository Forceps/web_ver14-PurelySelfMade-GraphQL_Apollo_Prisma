import React from "react";
import AudioPlayerCon from "./AudioInsertStyle/AudioPlayerCon";
import ReactDOM from "react-dom";

export default () => {
  const elem = document.getElementsByClassName("notYet");
  return (
    <>
      {(() => {
        if (elem[0]) {
          const save = elem[0];
          save.setAttribute("class", "audioInsertPlace");
          return <Player address={"dd"} element={save} />;
        }
      })()}
    </>
  );
};

const Player = ({ address, element }: { address: string; element: any }) => {
  return ReactDOM.createPortal(<AudioPlayerCon address={address} />, element);
};
