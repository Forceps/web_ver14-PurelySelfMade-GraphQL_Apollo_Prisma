import React, { useState, useEffect } from "react";
import ImgInSPre from "./ImgInSPre";
import useInput from "../../../../GlobalLib/RecycleFunction/Hooks/useInput";
import { ImgGetByDirIdRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Media/Image/ImageR";

interface ImgURLProps {
  setImgSubMenuOp: any;
  ImgInsert: any;
  zIndex?: number;
}
const ImgInSCon = ({
  setImgSubMenuOp,
  ImgInsert,
  zIndex = 20,
}: ImgURLProps) => {
  const [imgSelectMode, setimgSelectMode] = useState("URL");
  const ImgURLText = useInput("");
  const {
    data: ImgList,
    loading: ImgListLod,
    refetch: ImgListRefetch,
  } = ImgGetByDirIdRequest(0, 0, 0, 10);
  const [AddImgOpen, setAddImgOpen] = useState(false);

  useEffect(() => {
    document.getElementById("ImgURLTextInput")?.focus();
    ImgListRefetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ImgInSPre
      setImgSubMenuOp={setImgSubMenuOp}
      imgSelectMode={imgSelectMode}
      ImgURLText={ImgURLText}
      setimgSelectMode={setimgSelectMode}
      ImgList={ImgList}
      ImgListLod={ImgListLod}
      ImgInsert={ImgInsert}
      AddImgOpen={AddImgOpen}
      setAddImgOpen={setAddImgOpen}
      ImgListRefetch={ImgListRefetch}
      zIndex={zIndex}
    />
  );
};

export default React.memo(ImgInSCon);
