import React, { useState, useEffect, useRef } from "react";
import EditorPre from "./EditorPre";
// import iro from "@jaames/iro";
// import { colorPickerConfig } from "./EditorLib";

type EditorConProps = {
  caption: any;
  Mutation: any;
  Exit: any;
  Html: any;
  setHtml: any;
  Mode?: any;
};
export default ({
  caption,
  Mutation,
  Exit,
  Html,
  setHtml,
  Mode
}: EditorConProps) => {
  const [FcOpen, setFcOpen] = useState(false);
  const [ColorPiked, setColorPiked] = useState(null);
  const IroColor = useRef(null);
  const CaretLocation = useRef();

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
    <EditorPre
      caption={caption}
      Mutation={Mutation}
      Exit={Exit}
      Html={Html}
      setHtml={setHtml}
      FcOpen={FcOpen}
      setFcOpen={setFcOpen}
      ColorPiked={ColorPiked}
      setColorPiked={setColorPiked}
      IroColor={IroColor}
      Mode={Mode}
      CaretLocation={CaretLocation}
    />
  );
};
