import React from "react";
import AudioTargetSpecific from "./St1ReusableItems/AudioTargetSpecific";

export default ({ rerenderingPoint }: AudioActionInHTMLProps) => {
  const audioContainers = document.getElementsByClassName("audioPlayer");

  return (
    <>
      {(() => {
        let arr: any[] = [];
        for (let i = 0; i < audioContainers.length; i++) {
          arr = arr.concat(
            <AudioTargetSpecific
              audioTarget={audioContainers[i]}
              rerenderingPoint={rerenderingPoint}
            />
          );
        }
        return arr;
      })()}
    </>
  );
};

interface AudioActionInHTMLProps {
  rerenderingPoint?: any;
}
