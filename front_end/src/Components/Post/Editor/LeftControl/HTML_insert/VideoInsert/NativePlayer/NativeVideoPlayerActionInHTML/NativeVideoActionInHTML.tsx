import React, { useEffect, useState, RefObject } from "react";
import NativeVideoPlayerTargetSpecific from "./St1ReusableItems/NativeVideoPlayerTargetSpecific";

export default ({
  rerenderingPoint,
  InEditor,
  mediaTargetId,
  setImgSubMenuOp2,
  CaretLocation,
}: NativeVideoActionInHTMLProps) => {
  const [videoContainers, setVideoContainers] = useState<any>([]);
  useEffect(() => {
    const allVideo =
      InEditor.current?.getElementsByClassName("videoPlayer") || [];
    let arr: any[] = [];
    for (let i = 0; i < allVideo.length; i++) {
      arr = arr.concat(allVideo[i].id);
    }
    setVideoContainers(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerenderingPoint]);

  return (
    videoContainers.length !== 0 &&
    videoContainers.map((i: string) => {
      const videoTarget = document.getElementById(i);
      if (videoTarget) {
        return (
          <NativeVideoPlayerTargetSpecific
            key={i}
            videoTarget={videoTarget}
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

interface NativeVideoActionInHTMLProps {
  rerenderingPoint: any;
  InEditor: RefObject<HTMLElement>;
  mediaTargetId?: any;
  setImgSubMenuOp2?: any;
  CaretLocation: any;
}
