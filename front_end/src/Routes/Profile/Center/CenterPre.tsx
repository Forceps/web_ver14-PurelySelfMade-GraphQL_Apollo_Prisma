import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import PostMode from "./UnderHeader/Post/PostMode";
import { useProfileMode } from "../../../GlobalLib/Context/ProfileContext/ProfileMode";
import ArchiveMode from "./UnderHeader/Archive/ArchiveMode";
import FormCon from "./UnderHeader/Form/FormCon";
import SettingsMode from "./UnderHeader/Settings/SettingsMode";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
`;

export default () => {
  const { Mode } = useProfileMode();
  return (
    <Wrapper>
      <Header />
      {Mode[0] === "Archive" ? (
        <ArchiveMode />
      ) : Mode[0] === "Form" ? (
        <FormCon />
      ) : Mode[0] === "Settings" ? (
        <SettingsMode />
      ) : (
        <PostMode />
      )}
    </Wrapper>
  );
};
