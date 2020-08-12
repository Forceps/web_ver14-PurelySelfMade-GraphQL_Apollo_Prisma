import React from "react";
import { saveSelection } from "../../../EditorLib";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { EdBtn2dot2 } from "../ParagraphShape";

export default ({ CaretLocation, setAnchorInputOpen }: AnchorInsertBtn) => {
  return (
    <EdBtn2dot2
      onMouseDown={async (e) => {
        spaped(e);
        CaretLocation.current = saveSelection();
      }}
      onClick={(e) => {
        spaped(e);
        setAnchorInputOpen((p: boolean) => !p);
      }}
    >
      <i className="icon-link" />
    </EdBtn2dot2>
  );
};
type AnchorInsertBtn = {
  CaretLocation: any;
  setAnchorInputOpen: any;
};
