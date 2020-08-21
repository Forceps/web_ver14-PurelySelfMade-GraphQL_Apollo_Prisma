import React, { useEffect, useState, RefObject } from "react";
import AudioTargetSpecific from "./St1ReusableItems/AudioTargetSpecific";

const AudioActionInHTML = ({
  rerenderingPoint,
  InEditor,
  mediaTargetId,
  setImgSubMenuOp2,
  CaretLocation,
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
            mediaTargetId={mediaTargetId}
            setImgSubMenuOp2={setImgSubMenuOp2}
            CaretLocation={CaretLocation}
            InEditor={InEditor}
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
  mediaTargetId?: any;
  setImgSubMenuOp2?: any;
  CaretLocation: any;
}

export default React.memo(AudioActionInHTML);
