import React from "react";
import styled from "styled-components";
import LeftSide from "./LeftSide/LeftSide";
import CenterCon from "./Center/CenterCon";
import RightPanelCon from "./RightPanel/RightPanelCon";
import UpdatePostCon from "../../Components/Post/UpdatePost/UpdatePostCon";
import { useProfileMode } from "../../GlobalLib/Context/ProfileContext/ProfileMode";

const Wrapper = styled.div``;
const BottomBody = styled.div`
  display: grid;
  grid-template-columns: 311px 1fr;
  min-height: 100vh;
  @media (max-width: 1300px) {
    grid-template-columns: 101px 1fr;
  }
`;

export default ({ PD, UP }: ProfilePreProps) => {
  const PfM = useProfileMode();
  return (
    <Wrapper>
      <BottomBody>
        <LeftSide />
        <CenterCon />
      </BottomBody>
      {(PfM.Mode[0] === "Post" || PfM.Mode[0] === "Archive") && (
        <RightPanelCon />
      )}
      {UP.UpdatePost &&
        PD.PostID !== "" &&
        !PD.postLoadingByID &&
        PD.postByID && <UpdatePostCon />}
    </Wrapper>
  );
};
type ProfilePreProps = {
  PD: any;
  UP: any;
};
