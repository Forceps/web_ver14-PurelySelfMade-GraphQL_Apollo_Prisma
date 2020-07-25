import React, { useEffect, useState } from "react";
import ContentEditorPre from "./ContentEditorPre";

export default ({ Html, setHtml, setTitleImg }: ContentEditorProps) => {
  const [BlurComeback, setBlurComeback] = useState(true);
  const [OnlyOnce, setOnlyOnce] = useState(true);
  const InEditor = document.getElementById(`CUedit`);
  const Imgs = InEditor?.getElementsByTagName("img");

  const onBlurEvent = () => {
    console.log(InEditor);
    const dsdd = InEditor?.getElementsByClassName(
      "audioPlayIcon"
    ) as HTMLCollectionOf<HTMLElement>;
    const gdfs = InEditor?.getElementsByTagName("audio") as HTMLCollectionOf<
      HTMLAudioElement
    >;
    for (let i = 0; i < dsdd?.length; i++) {
      dsdd[i].setAttribute("class", "icon-play audioPlayIcon");
      gdfs[i].pause();
    }
    console.log(1234);
    setBlurComeback(false);
  };
  const onFocusEvent = () => {
    setBlurComeback(true);
  };

  useEffect(() => {
    if (Imgs && Imgs[0] && Imgs[0].src && OnlyOnce) {
      setTitleImg(Imgs[0].src);
      setOnlyOnce(false);
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
    />
  );
};
type ContentEditorProps = {
  Html: any;
  setHtml: any;
  setTitleImg: any;
};

//꼭 sanitize-html을 해줄 것
