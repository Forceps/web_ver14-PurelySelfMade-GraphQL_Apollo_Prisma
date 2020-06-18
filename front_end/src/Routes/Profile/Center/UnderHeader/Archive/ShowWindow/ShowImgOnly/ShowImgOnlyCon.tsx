import React from "react";
import ShowImgOnlyPre from "./ShowImgOnlyPre";
import { ImgGetUpToN } from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Media/Image/ImageR";

export default ({
  setAddImgScn,
  setShowOneOpen,
  setDetailInfo,
}: ShowImgOnlyConProps) => {
  const { data: Imgs, loading: ImgsLod } = ImgGetUpToN(0, 9);
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
