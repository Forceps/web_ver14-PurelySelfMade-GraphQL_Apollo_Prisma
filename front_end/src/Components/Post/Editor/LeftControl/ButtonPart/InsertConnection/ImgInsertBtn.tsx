import React from "react";
import { saveSelection } from "../../../EditorLib";
import { spaped } from "../../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { EdBtn2dot2 } from "../ParagraphShape";

type ImgInsertBtn = {
  CaretLocation: any;
  setImgSubMenuOp: any;
};
export default ({ CaretLocation, setImgSubMenuOp }: ImgInsertBtn) => {
  return (
    <EdBtn2dot2
      onMouseDown={async (e) => {
        spaped(e);
        CaretLocation.current = saveSelection();
      }}
      onClick={(e) => {
        spaped(e);
        setImgSubMenuOp(true);
      }}
    >
      <i className="icon-picture" />
    </EdBtn2dot2>
  );
};
