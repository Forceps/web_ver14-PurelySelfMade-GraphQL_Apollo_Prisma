import React from "react";
import ReactDOM from "react-dom";
import "./AudioInsertStyle/Synthesis.scss";
import styled from "styled-components";
import WH100per from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Intro from "./Parts/Intro";
import TimeBar from "./Parts/TimeBar";
import Buttons from "./Parts/Pannel/Buttons";
import Volume from "./Parts/Pannel/Volume";
import RestZone from "./Parts/Pannel/RestZone";
import MoreMenu from "./Parts/MoreMenu";

const AudioPlayer = styled.div`
  display: inline-block;
  user-select: none;
  max-width: 100%;
  width: 350px;
  position: relative;
`;
const Thumbnail = styled(WH100per)`
  background-size: cover;
  background-position: center center;
  min-height: 123px;
  min-width: 323px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Controls = styled(WH100per)`
  display: grid;
  grid-template-rows: 1fr 18px 20px 45px;
  min-height: 123px;
  min-width: 323px;
  border-left: 3px solid #636e72;
  padding: 0 0 0 5px;
  overflow: hidden;
  position: relative;
`;
const Manipulator = styled(WH100per)`
  display: grid;
  grid-template-columns: 125px 130px 1fr;
`;

//ideveloper2.dev/blog/2020-06-27--video-tag-react-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A1%9C-custom-%ED%95%98%EA%B8%B0/

https: export default () => {
  const element = (
    <>
      <div>
        <br />
      </div>
      <div>
        <AudioPlayer contentEditable={false}>
          <audio>
            <source src="address" />
          </audio>
          <Thumbnail />
          <Controls>
            <Intro />
            <TimeBar />
            <Manipulator>
              <Buttons />
              <Volume />
              <RestZone />
            </Manipulator>
            <MoreMenu />
          </Controls>
        </AudioPlayer>
      </div>
      <div>
        <br />
      </div>
    </>
  );

  ReactDOM.render(element, document.getElementById("root"));
};
