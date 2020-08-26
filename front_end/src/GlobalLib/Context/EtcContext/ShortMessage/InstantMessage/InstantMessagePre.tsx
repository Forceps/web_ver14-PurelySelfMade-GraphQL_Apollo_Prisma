import React from "react";
import styled from "styled-components";
import WH100per from "../../../../Styles/IteratePattern/WH100per";
import { spaped } from "../../../../RecycleFunction/etc/StopAndPrevent";

interface BoxProps {
  Show: boolean;
  Hide: boolean;
}
const Box = styled.div<BoxProps>`
  display: grid;
  grid-template-columns: 3px 1fr;
  position: fixed;
  bottom: 40px;
  left: ${(p) => (p.Hide ? "-400px" : p.Show ? "20px" : "-400px")};
  width: 300px;
  height: 150px;
  background-color: #fafafa;
  z-index: 8000;
  box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  cursor: pointer;
  overflow: hidden;
  transition-property: left, bottom;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(0.02, 0.86, 0.4, 0.98);
`;
const Content = styled(WH100per)`
  display: grid;
  grid-template-rows: 30px 1fr;
`;
const Sbj = styled(WH100per)`
  display: flex;
  align-items: center;
  padding: 0 8px 0 8px;
  font-size: 1.1rem;
`;
const Intent = styled(WH100per)`
  padding: 10px;
  font-size: 0.93rem;
  color: #636e72;
  line-height: 1.25rem;
`;
const ExtinctivePrescription = styled(WH100per)`
  display: flex;
  align-items: flex-end;
  background-color: rgba(178, 190, 195, 0.5);
`;
const Progressed = styled(WH100per)`
  background-color: #2d3436;
  transform-origin: bottom;
`;
const Header = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 30px 30px;
`;
const Fasten = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Off = styled(WH100per)`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #2d3436;
    color: #fafafa;
  }
  cursor: pointer;
`;

const InstantMessagePre = ({
  BoxEl,
  Subject,
  Message,
  progressBar,
  ProgressStop,
  Stop,
  Show,
  Hide,
  setHide,
}: InstantMessagePreProps) => {
  return (
    <Box
      onClick={(e) => {
        spaped(e);
        ProgressStop();
      }}
      ref={BoxEl}
      Show={Show}
      Hide={Hide}
      className="instantMessageBox"
    >
      <ExtinctivePrescription>
        <Progressed ref={progressBar} />
      </ExtinctivePrescription>
      <Content>
        <Header>
          <Sbj>{Subject ? Subject : "Subject"}</Sbj>
          <Fasten>{Stop && <i className="icon-pinboard" />}</Fasten>
          <Off
            onClick={(e) => {
              spaped(e);
              setHide(true);
            }}
          >
            <i className="icon-noun_x_2939490" />
          </Off>
        </Header>
        <Intent>{Message ? Message : "Message is empty"}</Intent>
      </Content>
    </Box>
  );
};

interface InstantMessagePreProps {
  BoxEl: React.RefObject<HTMLDivElement>;
  Subject?: string;
  Message?: string;
  progressBar: React.RefObject<HTMLDivElement>;
  ProgressStop: () => void;
  Stop: boolean;
  Show: boolean;
  Hide: boolean;
  setHide: any;
}

export default React.memo(InstantMessagePre);
