import React, { useState } from "react";
import TitleImgAppointmentPre from "./TitleImgAppointmentPre";

export default ({ zIndex }: TitleImgAppointmentConProps) => {
  const [ImgSet, setImgSet] = useState(false);
  const [TitleImg, setTitleImg] = useState("");

  const ImgInsert = async (address: string) => {
    setTitleImg(address);
    setImgSet(false);
  };

  return (
    <TitleImgAppointmentPre
      ImgSet={ImgSet}
      setImgSet={setImgSet}
      zIndex={zIndex}
      Img={TitleImg}
      setImg={setTitleImg}
      ImgInsert={ImgInsert}
    />
  );
};

interface TitleImgAppointmentConProps {
  zIndex: number;
}
