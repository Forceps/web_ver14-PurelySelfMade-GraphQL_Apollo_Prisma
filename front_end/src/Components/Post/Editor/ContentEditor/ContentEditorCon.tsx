import React, {
  useEffect,
  useState,
  useRef,
  RefObject,
  MutableRefObject,
} from "react";
import ContentEditorPre from "./ContentEditorPre";
import ImgInSCon from "../../../Media/Insert/ImgInsertScreen/ImgInSCon";

export const CediCon = ({
  InEditor,
  Html,
  CaretLocation,
  setTitleImg,
  zIndex,
}: ContentEditorProps) => {
  const [OnlyOnce, setOnlyOnce] = useState(true);
  const [ImgSubMenuOp2, setImgSubMenuOp2] = useState(false);
  const Imgs = InEditor.current?.getElementsByTagName("img");
  const audioThumbnailTargetNode = useRef<string>("");
  const [HtmlChange, setHtmlChange] = useState(0);

  const audioThumbnailInsert = (address: string) => {
    InEditor.current?.focus();

    const player = document.getElementById(
      audioThumbnailTargetNode.current
    ) as HTMLElement;
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
    const ddd = InEditor?.current?.getElementsByClassName("audioPlayer") || [];
    for (let i = 0; i < ddd.length; i++) {
      if (!ddd[i].querySelector("source")) {
        ddd[i].parentNode?.removeChild(ddd[i]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [HtmlChange]);

  return (
    <>
      <ContentEditorPre
        InEditor={InEditor}
        Html={Html}
        setImgSubMenuOp2={setImgSubMenuOp2}
        audioThumbnailTargetNode={audioThumbnailTargetNode}
        setHtmlChange={setHtmlChange}
        HtmlChange={HtmlChange}
      />
      {ImgSubMenuOp2 && (
        <ImgInSCon
          setImgSubMenuOp={setImgSubMenuOp2}
          ImgInsert={audioThumbnailInsert}
          zIndex={zIndex + 10}
        />
      )}
    </>
  );
};
interface ContentEditorProps {
  InEditor: RefObject<HTMLElement>;
  Html: MutableRefObject<string>;
  CaretLocation: any;
  setTitleImg: any;
  zIndex: number;
}

//꼭 sanitize-html을 해줄 것

export default React.memo(CediCon);
