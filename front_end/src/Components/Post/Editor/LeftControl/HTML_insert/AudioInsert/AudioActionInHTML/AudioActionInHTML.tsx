import React, { useEffect, useState } from "react";
import cryptoRandomString from "crypto-random-string";
import AudioTargetSpecific from "./St1ReusableItems/AudioTargetSpecific";
import { useDummyState } from "../../../../../../../GlobalLib/Context/Lib/DummyState";

export default ({
  rerenderingPoint,
  InEditor = false,
  audioThumbnailTargetNode,
  setImgSubMenuOp2,
}: AudioActionInHTMLProps) => {
  const { DummyState, setDummyState } = useDummyState();
  const [audioContainers, setAudioContainers] = useState<any>([]);
  useEffect(() => {
    setDummyState((p: number) => p + 1);
    if (InEditor) {
      setAudioContainers(
        document.getElementById("CUedit")?.getElementsByClassName("audioPlayer")
      );
    }
    console.log(audioContainers);
    console.log(DummyState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerenderingPoint]);
  useEffect(() => {
    if (!InEditor && rerenderingPoint) {
      setDummyState((p: number) => p + 1);
      setAudioContainers(document.getElementsByClassName("audioPlayer"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerenderingPoint]);
  return (
    <>
      {audioContainers &&
        (() => {
          let arr: any[] = [];
          for (let i = 0; i < audioContainers.length; i++) {
            if (InEditor) {
              arr = arr.concat(
                <AudioTargetSpecific
                  key={i}
                  audioTarget={audioContainers[i]}
                  audioThumbnailTargetNode={audioThumbnailTargetNode}
                  setImgSubMenuOp2={setImgSubMenuOp2}
                  th={i}
                />
              );
            } else {
              arr = arr.concat(
                <AudioTargetSpecific
                  key={cryptoRandomString({ length: 10 })}
                  audioTarget={audioContainers[i]}
                  audioThumbnailTargetNode={audioThumbnailTargetNode}
                  setImgSubMenuOp2={setImgSubMenuOp2}
                  th={i}
                />
              );
            }
          }
          return arr;
        })()}
    </>
  );
};

interface AudioActionInHTMLProps {
  rerenderingPoint?: any;
  InEditor?: boolean;
  audioThumbnailTargetNode?: any;
  setImgSubMenuOp2?: any;
}
