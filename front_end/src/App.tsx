import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Theme from "./GlobalLib/Styles/GlobalStyle/Theme";
import Routes from "./Routes";
import GlobalStyles from "./GlobalLib/Styles/GlobalStyle/GlobalStyles";
import ContextProvider from "./GlobalLib/Context/Lib/ContextProvider";
import { SearchUserProvider } from "./GlobalLib/Context/UserContext/SearchUser";
import { SeeFriendsProvider } from "./GlobalLib/Context/UserContext/SeeFriends";
import { PostDeleteProcessProvider } from "./GlobalLib/Context/PostContext/PostCRUD/DeletePost";
import { UpdatePostProvider } from "./GlobalLib/Context/PostContext/PostCRUD/UpdatePost";
import { FileDeleteProcessProvider } from "./GlobalLib/Context/FileContext/FileCRUD/DeleteFile";
import { CDLProvider } from "./GlobalLib/Context/ProfileContext/DirMode";
import { TargetsShownProvider } from "./GlobalLib/Context/PostContext/TargetsShown/TargetsShown";
import { BackImgInSProvider } from "./GlobalLib/Context/ProfileContext/BackImgInS";
import { PostDetailProvider } from "./GlobalLib/Context/PostContext/PostDetail/PostDetail";
import { MeProvider } from "./GlobalLib/Context/UserContext/Me";
import { DummyStateProvider } from "./GlobalLib/Context/Lib/DummyState";
import { PModeProvider } from "./GlobalLib/Context/ProfileContext/ProfileMode";
import { LoginCheckingProvider } from "./GlobalLib/Context/UserContext/IsLoggedIn";

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <ContextProvider
        contexts={[
          SearchUserProvider,
          SeeFriendsProvider,
          PostDeleteProcessProvider,
          UpdatePostProvider,
          FileDeleteProcessProvider,
          CDLProvider,
          TargetsShownProvider,
          BackImgInSProvider,
          PostDetailProvider,
          MeProvider,
          DummyStateProvider,
          PModeProvider,
          LoginCheckingProvider,
        ]} //위에 배치될수록 더 하위의 컴포넌트가 된다.
      >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
};
