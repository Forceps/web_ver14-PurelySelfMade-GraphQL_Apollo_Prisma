import React from "react";
import PDHeaderCon from "./PDHeader/PDHeaderCon";
import styled from "styled-components";
import WH100per from "../../GlobalLib/Styles/IteratePattern/WH100per";
import ContentSectionCon from "./ContentSection/ContentSectionCon";
import UndersCon from "./Unders/UndersCon";
import LoginModalCon from "../../Components/User/Auth/LoginModal/LoginModalCon";
import AuthorWorkQuestCon from "./AuthorWorkQuest/AuthorWorkQuestCon";

const Divistion = styled(WH100per)``;

export default ({
  post_id,
  post,
  loading,
  AddCommentOpen,
  setAddCommentOpen,
  LoginOpen,
  setLoginOpen,
  AuthorWorkOpen,
  setAuthorWorkOpen,
}: PostDetailPreProps) => {
  return (
    <Divistion>
      <PDHeaderCon
        post={post}
        loading={loading}
        setLoginOpen={setLoginOpen}
        setAuthorWorkOpen={setAuthorWorkOpen}
        zIndex={20}
      />
      <ContentSectionCon
        post_id={post_id}
        post={post}
        loading={loading}
        AddCommentOpen={AddCommentOpen}
        setAddCommentOpen={setAddCommentOpen}
      />
      {!loading && (
        <UndersCon
          post_id={post_id}
          post={post}
          AddCommentOpen={AddCommentOpen}
        />
      )}
      {LoginOpen && (
        <LoginModalCon zIndex={30} setLoginModalOpen={setLoginOpen} />
      )}
      {AuthorWorkOpen && !loading && (
        <AuthorWorkQuestCon
          setAuthorWorkOpen={setAuthorWorkOpen}
          zIndex={30}
          post={post}
        />
      )}
    </Divistion>
  );
};

interface PostDetailPreProps {
  post_id: number;
  post: any;
  loading: boolean;
  AddCommentOpen: boolean;
  setAddCommentOpen: any;
  LoginOpen: boolean;
  setLoginOpen: any;
  AuthorWorkOpen: boolean;
  setAuthorWorkOpen: any;
}
