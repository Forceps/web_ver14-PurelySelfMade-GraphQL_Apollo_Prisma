import React from "react";
import ShowImgOnlyPre from "./ShowImgOnlyPre";
import { ImgGetByDirIdRequest } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Image/ImageR";

const ShowImgOnlyCon = ({
  setAddImgScn,
  setShowOneOpen,
  setDetailInfo,
}: ShowImgOnlyConProps) => {
  const { data: Imgs, loading: ImgsLod } = ImgGetByDirIdRequest(0, 0, 0, 9);
  return (
    <ShowImgOnlyPre
      setAddImgScn={setAddImgScn}
      Imgs={Imgs}
      ImgsLod={ImgsLod}
      setShowOneOpen={setShowOneOpen}
      setDetailInfo={setDetailInfo}
    />
  );
};

interface ShowImgOnlyConProps {
  setAddImgScn: any;
  setShowOneOpen: any;
  setDetailInfo: any;
}

export default React.memo(ShowImgOnlyCon);
