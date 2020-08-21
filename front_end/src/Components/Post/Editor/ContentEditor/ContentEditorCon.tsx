import React, {
  useEffect,
  useState,
  useRef,
  RefObject,
  MutableRefObject,
  useCallback,
} from "react";
import ContentEditorPre from "./ContentEditorPre";
import ImgInSCon from "../../../Media/Insert/ImgInsertScreen/ImgInSCon";
import { restoreSelection } from "../EditorLib";
import { audioStyleChange } from "./ContentEditorLib";

const CediCon = ({
  InEditor,
  Html,
  CaretLocation,
  setTitleImg,
  zIndex,
}: ContentEditorProps) => {
  const [OnlyOnce, setOnlyOnce] = useState(true);
  const [ImgSubMenuOp2, setImgSubMenuOp2] = useState(false);
  const Imgs = InEditor.current?.getElementsByTagName("img");
  const mediaTargetId = useRef<string>("");
  const [HtmlChange, setHtmlChange] = useState(0);

  const audioThumbnailInsert = async (address: string) => {
    await restoreSelection(CaretLocation.current);
    InEditor.current?.focus();
    audioStyleChange(mediaTargetId.current, address);
    setImgSubMenuOp2(false);
  };
  const pastInEditor = useCallback((e: any) => {
    e.preventDefault();
    const pastedData = e.clipboardData;
    const textData = pastedData.getData("Text").replace(/\r\n/gi, "<br>");
    document.execCommand("insertHTML", false, textData);
  }, []);

  useEffect(() => {
    if (Imgs && Imgs[0] && Imgs[0].src && OnlyOnce) {
      setTitleImg(Imgs[0].src);
      setOnlyOnce(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [HtmlChange]);

  return (
    <>
      <ContentEditorPre
        InEditor={InEditor}
        Html={Html}
        setImgSubMenuOp2={setImgSubMenuOp2}
        mediaTargetId={mediaTargetId}
        setHtmlChange={setHtmlChange}
        HtmlChange={HtmlChange}
        CaretLocation={CaretLocation}
        pastInEditor={pastInEditor}
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
