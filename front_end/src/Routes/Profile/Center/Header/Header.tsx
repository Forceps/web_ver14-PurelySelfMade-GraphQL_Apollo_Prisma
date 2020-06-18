import React from "react";
import styled from "styled-components";
import AtPost from "./Mode/AtPost";
import AtArchive from "./Mode/AtArchive";
import { useProfileMode } from "../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import AtForm from "./Mode/AtForm";

const Wrapper = styled.div`
  display: flex;
  background-color: white;
`;
export default () => {
  const PfM = useProfileMode();
  return (
    <Wrapper>
      {PfM.Mode[0] === "Post" && <AtPost />}
      {PfM.Mode[0] === "Archive" && <AtArchive />}
      {PfM.Mode[0] === "Form" && <AtForm />}
    </Wrapper>
  );
};
