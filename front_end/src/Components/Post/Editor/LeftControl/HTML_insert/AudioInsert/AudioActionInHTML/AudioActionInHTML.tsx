import React, { useEffect, useState, RefObject } from "react";
import AudioTargetSpecific from "./St1ReusableItems/AudioTargetSpecific";

export default ({
  rerenderingPoint,
  InEditor,
  audioThumbnailTargetNode,
  setImgSubMenuOp2,
}: AudioActionInHTMLProps) => {
  const [audioContainers, setAudioContainers] = useState<any>([]);
  useEffect(() => {
    const allAudio =
      InEditor.current?.getElementsByClassName("audioPlayer") || [];
    let arr: any[] = [];
    for (let i = 0; i < allAudio.length; i++) {
      arr = arr.concat(allAudio[i].id);
    }
    setAudioContainers(arr);
    console.log(audioContainers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerenderingPoint]);
  return (
    audioContainers.length !== 0 &&
    audioContainers.map((i: string) => {
      const audioTarget = document.getElementById(i);
      if (audioTarget) {
        return (
          <AudioTargetSpecific
            key={i}
            audioTarget={audioTarget}
            audioThumbnailTargetNode={audioThumbnailTargetNode}
            setImgSubMenuOp2={setImgSubMenuOp2}
          />
        );
      }
      return <></>;
    })
  );
};

interface AudioActionInHTMLProps {
  rerenderingPoint: any;
  InEditor: RefObject<HTMLElement>;
  audioThumbnailTargetNode?: any;
  setImgSubMenuOp2?: any;
}
