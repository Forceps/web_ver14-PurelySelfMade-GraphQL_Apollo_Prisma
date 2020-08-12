import React from "react";
import styled from "styled-components";
import WH100per from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import ImgInSCon from "../../../../Media/Insert/ImgInsertScreen/ImgInSCon";
import { spaped } from "../../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";

const RestButn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 195px;
  height: 97.5px;
  margin: 0 5px 5px 0;
  background-color: white;
`;
const SbjNCtrlSet = styled(WH100per)`
  display: grid;
  grid-template-rows: 1fr 30px;
`;
const Sbj = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 0 0 6px;
`;
const Sample = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #636e72;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
const Reset = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #dfe6e9;
  }
  cursor: pointer;
`;
interface ImgPrevProps {
  url: string;
}
const ImgPrev = styled(WH100per)<ImgPrevProps>`
  background-image: url(${(p) => p.url});
  background-size: cover;
  background-position: center center;
`;
const BlackCover = styled(WH100per)`
  position: absolute;
  padding: 10px;
  color: white;
  background-color: rgba(45, 52, 54, 0.3);
  &:hover {
    background-color: rgba(45, 52, 54, 0.45);
  }
  cursor: pointer;
`;

export default ({
  ImgSet,
  setImgSet,
  ImgInsert,
  zIndex,
  Img,
  setImg,
}: TitleImgAppointmentPreProps) => {
  return (
    <>
      <RestButn>
        <SbjNCtrlSet>
          <Sbj>Title Image</Sbj>
          {Img === "" ? (
            <div />
          ) : (
            <Reset
              onClick={(e) => {
                spaped(e);
                setImg("");
              }}
            >
              <i className="icon-noun_x_2939490" />
            </Reset>
          )}
        </SbjNCtrlSet>
        <Sample
          onClick={(e) => {
            spaped(e);
            setImgSet(true);
          }}
        >
          {Img === "" ? (
            <i className="icon-picture" />
          ) : (
            <>
              <ImgPrev url={Img} />
              <BlackCover />
            </>
          )}
        </Sample>
      </RestButn>
      {ImgSet && (
        <ImgInSCon
          setImgSubMenuOp={setImgSet}
          ImgInsert={ImgInsert}
          zIndex={zIndex + 10}
        />
      )}
    </>
  );
};

interface TitleImgAppointmentPreProps {
  ImgSet: boolean;
  setImgSet: any;
  zIndex: number;
  Img: string;
  setImg: any;
  ImgInsert: (address: string) => void;
}
