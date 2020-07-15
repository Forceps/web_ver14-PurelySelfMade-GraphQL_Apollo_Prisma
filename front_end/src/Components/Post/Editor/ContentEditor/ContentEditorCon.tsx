import React, { useEffect, useState } from "react";
import ContentEditorPre from "./ContentEditorPre";

export default ({ Html, setHtml, setTitleImg }: ContentEditorProps) => {
  const [OnlyOnce, setOnlyOnce] = useState(true);
  const InArticle = document.getElementById(`CUedit`);
  const Imgs = InArticle?.getElementsByTagName("img");
  useEffect(() => {
    if (Imgs && Imgs[0] && Imgs[0].src && OnlyOnce) {
      setTitleImg(Imgs[0].src);
      setOnlyOnce(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Html]);

  return <ContentEditorPre Html={Html} setHtml={setHtml} />;
};
type ContentEditorProps = {
  Html: any;
  setHtml: any;
  setTitleImg: any;
};

//꼭 sanitize-html을 해줄 것
