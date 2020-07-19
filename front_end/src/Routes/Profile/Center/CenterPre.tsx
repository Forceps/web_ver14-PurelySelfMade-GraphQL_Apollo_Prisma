import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import PostMode from "./UnderHeader/Post/PostMode";
import { useProfileMode } from "../../../GlobalLib/Context/ProfileContext/ProfileMode";
import ArchiveMode from "./UnderHeader/Archive/ArchiveMode";
import FormCon from "./UnderHeader/Form/FormCon";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
`;

export default ({ UserData, UserDataLoading }: CenterPre) => {
  const { Mode } = useProfileMode();
  return (
    <Wrapper>
      <Header />
      {Mode[0] === "Archive" ? (
        <ArchiveMode />
      ) : Mode[0] === "Form" ? (
        <FormCon />
      ) : (
        <PostMode UserData={UserData} UserDataLoading={UserDataLoading} />
      )}
    </Wrapper>
  );
};

type CenterPre = {
  UserData: any;
  UserDataLoading: boolean;
};
