import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import { Link } from "react-router-dom";
import { MedataStructure } from "../../../../../GlobalLib/Context/UserContext/Me";
import {
  byteIntoUnit,
  unitIntoByte,
} from "../../../../../GlobalLib/RecycleFunction/etc/Math/Arithmetic";
import { useProfileDetailMode } from "../../../../../GlobalLib/Context/ProfileContext/PfDetailMode";

const Suburb = styled(W100per)`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  padding: 30px 10px 0 10px;
`;
const AvailTotal = styled(W100per)`
  padding: 10px 0 15px 0;
`;
interface RatioBarProps {
  used: number;
  total: number;
}
const RatioBar = styled(W100per)<RatioBarProps>`
  display: grid;
  grid-template-columns: ${(p) =>
    `${p.used / p.total}fr ${(p.total - p.used) / p.total}fr`};
  height: 4px;
`;
const UsedBar = styled(WH100per)`
  background-color: #636e72;
`;
const AvailableBar = styled(WH100per)`
  background-color: #dfe6e9;
`;
const Used = styled(W100per)`
  padding: 15px 0 5px 0;
`;
const Avail = styled(W100per)`
  padding: 5px 0 18px 0;
`;
const Circumstance = styled(W100per)`
  padding: 16px 0 16px 0;
`;
const CountAndVol = styled(W100per)`
  padding: 10px 5px 0 6px;
`;
const CapacityManipulation = styled(W100per)`
  margin: 8px 0 0 0;
`;
const CapacitySituationBoard = styled(W100per)`
  display: flex;
  flex-direction: column;
  padding: 4px 0 0 0;
`;
const Contour = styled.div`
  border-top: 1px solid black;
  width: 50px;
  margin: 0 0 10px 0;
`;
const DailyBenefits = styled(CapacitySituationBoard)``;
const MinimumGuaranteed = styled(CapacitySituationBoard)``;
const AmountNum = styled.div`
  padding: 8.5px;
`;
const CapacityPayment = styled(W100per)`
  display: flex;
  justify-content: flex-end;
  padding: 15px 0 0 0;
`;
const CPlink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export default ({
  data: { images, videos, musics },
  MEdata: { daily_allocated_capacity, guaranteed_capacity },
}: ArchiveCtrlPreProps) => {
  const { AcMode } = useProfileDetailMode();
  const used = images.volume + videos.volume + musics.volume;
  const total = unitIntoByte(300, "MB");
  return (
    <Suburb>
      <AvailTotal>
        Total capacity: {byteIntoUnit(total).number} {byteIntoUnit(total).unit}
      </AvailTotal>
      <RatioBar used={used} total={total}>
        <UsedBar />
        <AvailableBar />
      </RatioBar>
      <Used>
        Used: {byteIntoUnit(used).number} {byteIntoUnit(used).unit} (
        {Math.round((100 * used) / total)}%)
      </Used>
      <Avail>
        Available: {byteIntoUnit(total - used).number}{" "}
        {byteIntoUnit(total - used).unit} (
        {Math.round((100 * (total - used)) / total)}%)
      </Avail>
      {(AcMode === "Image" || AcMode === "All") && (
        <Circumstance>
          <i className="icon-picture" /> Image
          <CountAndVol>
            count: {images.count} &nbsp; volume:{" "}
            {byteIntoUnit(images.volume).number}{" "}
            {byteIntoUnit(images.volume).unit}
          </CountAndVol>
        </Circumstance>
      )}
      {(AcMode === "Video" || AcMode === "All") && (
        <Circumstance>
          <i className="icon-video" /> Video
          <CountAndVol>
            count: {videos.count} &nbsp; volume:{" "}
            {byteIntoUnit(videos.volume).number}{" "}
            {byteIntoUnit(videos.volume).unit}
          </CountAndVol>
        </Circumstance>
      )}
      {(AcMode === "Music" || AcMode === "All") && (
        <Circumstance>
          <i className="icon-music" /> Music
          <CountAndVol>
            count: {musics.count} &nbsp; volume:{" "}
            {byteIntoUnit(musics.volume).number}{" "}
            {byteIntoUnit(musics.volume).unit}
          </CountAndVol>
        </Circumstance>
      )}
      {AcMode !== "All" && (
        <Circumstance>Pagination, 선택모드, 추가</Circumstance>
      )}
      {AcMode === "All" && (
        <CapacityManipulation>
          <Contour />
          <DailyBenefits>
            Daily extra amount
            <AmountNum>{daily_allocated_capacity} MB</AmountNum>
          </DailyBenefits>
          <MinimumGuaranteed>
            Minimum guaranteed capacity
            <AmountNum>{guaranteed_capacity} MB</AmountNum>
          </MinimumGuaranteed>
          <CapacityPayment>
            <CPlink to={`/`}>Increase capacity</CPlink>
          </CapacityPayment>
        </CapacityManipulation>
      )}
    </Suburb>
  );
};

interface ArchiveCtrlPreProps {
  MEdata: MedataStructure;
  data: any;
}
