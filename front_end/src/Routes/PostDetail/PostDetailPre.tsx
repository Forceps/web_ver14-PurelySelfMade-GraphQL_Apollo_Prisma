import React from "react";
import PDHeaderCon from "./PDHeader/PDHeaderCon";
import styled from "styled-components";
import WH100per from "../../GlobalLib/Styles/IteratePattern/WH100per";
import ContentSectionCon from "./ContentSection/ContentSectionCon";
import UndersCon from "./Unders/UndersCon";
import LoginModalCon from "../../Components/User/Auth/LoginModal/LoginModalCon";

const Divistion = styled(WH100per)``;

export default ({
  post_id,
  post,
  loading,
  AddCommentOpen,
  setAddCommentOpen,
  LoginOpen,
  setLoginOpen,
}: PostDetailPreProps) => {
  return (
    <Divistion>
      <PDHeaderCon setLoginOpen={setLoginOpen} />
      <ContentSectionCon
        post={post}
        loading={loading}
        setAddCommentOpen={setAddCommentOpen}
        AddCommentOpen={AddCommentOpen}
      />
      {!loading && (
        <UndersCon
          post_id={post_id}
          post={post}
          AddCommentOpen={AddCommentOpen}
          setAddCommentOpen={setAddCommentOpen}
        />
      )}
      {LoginOpen && (
        <LoginModalCon zIndex={30} setLoginModalOpen={setLoginOpen} />
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
}
