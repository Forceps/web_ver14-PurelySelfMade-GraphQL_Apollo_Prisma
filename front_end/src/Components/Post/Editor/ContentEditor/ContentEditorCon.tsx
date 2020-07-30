import React, { useEffect, useState, useRef } from "react";
import ContentEditorPre from "./ContentEditorPre";
import { saveSelection, restoreSelection } from "../EditorLib";

export default ({ Html, setHtml, setTitleImg, zIndex }: ContentEditorProps) => {
  const [BlurComeback, setBlurComeback] = useState(true);
  const [OnlyOnce, setOnlyOnce] = useState(true);
  const [ImgSubMenuOp2, setImgSubMenuOp2] = useState(false);
  const Imgs = document.getElementById(`CUedit`)?.getElementsByTagName("img");
  const CaretLocation2 = useRef<any>();
  const audioThumbnailTargetNode = useRef<any>();

  const onBlurEvent = () => {
    CaretLocation2.current = saveSelection();
    const InEditor = document.getElementById(`CUedit`);
    const dsdd = InEditor?.getElementsByClassName(
      "audioPlayIcon"
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < dsdd?.length; i++) {
      dsdd[i].setAttribute("class", "icon-play audioPlayIcon");
    }
    setBlurComeback(false);
  };
  const onFocusEvent = async () => {
    setBlurComeback(true);
    if (CaretLocation2.current) {
      await restoreSelection(CaretLocation2.current);
    }
  };
  const audioThumbnailInsert = (address: string) => {
    const editor = document.getElementById("CUedit");
    editor?.focus();

    const player = editor?.getElementsByClassName("audioPlayer")[
      audioThumbnailTargetNode.current
    ] as HTMLElement;
    const playerControle = player.querySelector(
      ".audioPlayer_controls"
    ) as HTMLElement;
    const backImgArea = player?.querySelector(
      ".audio_player_thumbnail_container"
    ) as HTMLElement;

    backImgArea.setAttribute("style", `background-image: url(${address});`);
    playerControle.setAttribute(
      "class",
      "audioPlayer_controls audioPlayer_controls_with_img_stop"
    );

    document.execCommand("insertHTML", false, "<div></div>");
    setImgSubMenuOp2(false);
  };

  useEffect(() => {
    if (Imgs && Imgs[0] && Imgs[0].src && OnlyOnce) {
      setTitleImg(Imgs[0].src);
      setOnlyOnce(false);
    }
    const editor = document.getElementById("CUedit");
    const ddd = editor?.getElementsByClassName("audioPlayer") || [];
    for (let i = 0; i < ddd.length; i++) {
      if (!ddd[i].querySelector("source")) {
        ddd[i].parentNode?.removeChild(ddd[i]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Html]);

  return (
    <ContentEditorPre
      Html={Html}
      setHtml={setHtml}
      BlurComeback={BlurComeback}
      onBlurEvent={onBlurEvent}
      onFocusEvent={onFocusEvent}
      ImgSubMenuOp2={ImgSubMenuOp2}
      setImgSubMenuOp2={setImgSubMenuOp2}
      audioThumbnailInsert={audioThumbnailInsert}
      zIndex={zIndex}
      audioThumbnailTargetNode={audioThumbnailTargetNode}
    />
  );
};
type ContentEditorProps = {
  Html: any;
  setHtml: any;
  setTitleImg: any;
  zIndex: number;
};

//꼭 sanitize-html을 해줄 것
