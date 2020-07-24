import React, { useEffect, useState } from "react";
import cryptoRandomString from "crypto-random-string";
import AudioTargetSpecific from "./St1ReusableItems/AudioTargetSpecific";
import { useDummyState } from "../../../../../../../GlobalLib/Context/Lib/DummyState";

export default ({
  rerenderingPoint,
  InEditor = false,
}: AudioActionInHTMLProps) => {
  const { setDummyState } = useDummyState();
  const [audioContainers, setAudioContainers] = useState<any>([]);
  useEffect(() => {
    if (InEditor) {
      setAudioContainers(
        document.getElementById("CUedit")?.getElementsByClassName("audioPlayer")
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!InEditor && rerenderingPoint) {
      setDummyState((p: number) => p + 1);
      setAudioContainers(document.getElementsByClassName("audioPlayer"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerenderingPoint]);
  console.log(audioContainers);
  return (
    <>
      {audioContainers &&
        (() => {
          let arr: any[] = [];
          for (let i = 0; i < audioContainers.length; i++) {
            arr = arr.concat(
              <AudioTargetSpecific
                key={cryptoRandomString({ length: 10 })}
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
  InEditor?: boolean;
}
