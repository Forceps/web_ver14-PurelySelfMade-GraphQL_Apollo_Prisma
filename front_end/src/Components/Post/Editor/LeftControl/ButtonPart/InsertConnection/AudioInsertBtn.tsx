import React from "react";
import { saveSelection } from "../../../EditorLib";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { EdBtn2dot2 } from "../GenControls";

type VideoInsertBtn = {
  CaretLocation: any;
  setAudioSubMenuOp: any;
};
export default ({ CaretLocation, setAudioSubMenuOp }: VideoInsertBtn) => {
  return (
    <EdBtn2dot2
      onMouseDown={async (e) => {
        spaped(e);
        CaretLocation.current = saveSelection();
      }}
      onClick={(e) => {
        spaped(e);
        setAudioSubMenuOp(true);
      }}
    >
      <i className="icon-music" />
    </EdBtn2dot2>
  );
};
