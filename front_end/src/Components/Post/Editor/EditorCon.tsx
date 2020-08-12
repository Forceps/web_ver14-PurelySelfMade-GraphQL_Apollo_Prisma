import React, { useEffect, useRef, MutableRefObject } from "react";
import EditorPre from "./EditorPre";

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
  const CaretLocation = useRef();
  const InEditor = useRef<HTMLElement>(null);

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
        Mode={Mode}
        CaretLocation={CaretLocation}
        zIndex={zIndex}
        TitleImg={TitleImg}
        setTitleImg={setTitleImg}
      />
    </>
  );
};
