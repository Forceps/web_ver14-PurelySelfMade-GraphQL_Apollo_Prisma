import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import EditorPre from "./EditorPre";
// import iro from "@jaames/iro";
// import { colorPickerConfig } from "./EditorLib";

type EditorConProps = {
  caption: any;
  Mutation: any;
  Exit: any;
  Html: MutableRefObject<string>;
  Mode?: any;
  zIndex?: number;
  TitleImg: string;
  setTitleImg: any;
};
export default ({
  caption,
  Mutation,
  Exit,
  Html,
  Mode,
  zIndex = 10,
  TitleImg,
  setTitleImg,
}: EditorConProps) => {
  const [FcOpen, setFcOpen] = useState(false);
  const [ColorPiked, setColorPiked] = useState(null);
  const IroColor = useRef(null);
  const CaretLocation = useRef();
  const InEditor = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   if (FcOpen) {
  //     IroColor.current = new iro.ColorPicker(
  //       ".color-picker-container",
  //       colorPickerConfig
  //     );
  //   }
  // }, [FcOpen]);
  useEffect(() => {
    document.getElementById("EditorPostCaption")?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <EditorPre
        InEditor={InEditor}
        caption={caption}
        Mutation={Mutation}
        Exit={Exit}
        Html={Html}
        FcOpen={FcOpen}
        setFcOpen={setFcOpen}
        ColorPiked={ColorPiked}
        setColorPiked={setColorPiked}
        IroColor={IroColor}
        Mode={Mode}
        CaretLocation={CaretLocation}
        zIndex={zIndex}
        TitleImg={TitleImg}
        setTitleImg={setTitleImg}
      />
    </>
  );
};
