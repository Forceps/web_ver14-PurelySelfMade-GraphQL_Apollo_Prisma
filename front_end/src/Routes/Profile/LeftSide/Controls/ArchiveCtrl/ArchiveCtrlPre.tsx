import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";

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

export default () => {
  const [used, total] = [200, 300];
  return (
    <Suburb>
      <AvailTotal>Total capacity: {total}MB</AvailTotal>
      <RatioBar used={used} total={total}>
        <UsedBar />
        <AvailableBar />
      </RatioBar>
      <Used>
        Used: {used}MB ({Math.round((100 * used) / total)}%)
      </Used>
      <Avail>
        Available: {total - used}MB (
        {Math.round((100 * (total - used)) / total)}%)
      </Avail>
      <Circumstance>
        <i className="icon-picture" /> Image
        <CountAndVol>count: 32 &nbsp; volume: 50MB</CountAndVol>
      </Circumstance>
      <Circumstance>
        <i className="icon-video" /> Video
        <CountAndVol>count: 32 &nbsp; volume: 50MB</CountAndVol>
      </Circumstance>
      <Circumstance>
        <i className="icon-music" /> Music
        <CountAndVol>count: 32 &nbsp; volume: 50MB</CountAndVol>
      </Circumstance>
    </Suburb>
  );
};
