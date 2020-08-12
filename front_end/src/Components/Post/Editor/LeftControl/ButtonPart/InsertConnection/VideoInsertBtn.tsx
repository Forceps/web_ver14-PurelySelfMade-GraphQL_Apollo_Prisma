import React from "react";
import { saveSelection } from "../../../EditorLib";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { EdBtn2dot2 } from "../ParagraphShape";

type VideoInsertBtn = {
  CaretLocation: any;
  setVideoSubMenuOp: any;
};
export default ({ CaretLocation, setVideoSubMenuOp }: VideoInsertBtn) => {
  return (
    <EdBtn2dot2
      onMouseDown={async (e) => {
        spaped(e);
        CaretLocation.current = saveSelection();
      }}
      onClick={(e) => {
        spaped(e);
        setVideoSubMenuOp(true);
      }}
    >
      <i className="icon-video" />
    </EdBtn2dot2>
  );
};
