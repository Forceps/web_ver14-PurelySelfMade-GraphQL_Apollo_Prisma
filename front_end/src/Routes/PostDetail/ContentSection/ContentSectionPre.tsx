import React from "react";
import styled, { css } from "styled-components";
import { W100per } from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import Loading from "../../../Components/ElementEtc/Effect/Loading";
import ContentEditable from "react-contenteditable";
import MetaInfoCon from "./MetaInfo/MetaInfoCon";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import Intro from "./Intro/Intro";
// import AudioActionInHTML from "../../../Components/Post/Editor/LeftControl/HTML_insert/AudioInsert/AudioActionInHTML/AudioActionInHTML";

const Surrounding = styled(W100per)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0 5px 0;
`;
const Mean = styled(W100per)`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  min-height: 400px;
`;
export const LocateMiddle = styled.div`
  min-width: 500px;
  max-width: 700px;
  width: 60vw;
  position: relative;
`;
const OnePost = styled(({ ...rest }) => <ContentEditable {...rest} />)`
  width: 100%;
  word-break: break-all;
`;
const CommentToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 60px;
  width: 2.7rem;
  height: 2.7rem;
  background-color: #b2bec3;
  font-size: 1.4rem;
  border-radius: 50%;
  color: white;
  overflow: hidden;
  &:hover {
    background-color: #636e72;
  }
  cursor: pointer;
`;
interface ScrollToTopProps {
  AddCommentOpen: boolean;
}
const ScrollToTop = styled(CommentToggle)<ScrollToTopProps>`
  ${(p) => {
    if (p.AddCommentOpen) {
      return css`
        bottom: calc(40px + 2.7rem + 10px);
      `;
    } else {
      return css`
        bottom: 40px;
      `;
    }
  }}
`;

export default ({
  post,
  loading,
  setAddCommentOpen,
  AddCommentOpen,
  FirstImgSrc,
}: ContentSectionPreProps) => {
  return (
    <Surrounding>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Intro post={post} FirstImgSrc={FirstImgSrc} />
          <Mean>
            <LocateMiddle>
              <OnePost
                className="editable"
                tagName="article"
                html={post.content}
                spellCheck="false"
                disabled={true}
              />
              {!loading && (
                <MetaInfoCon
                  post={post}
                  setAddCommentOpen={setAddCommentOpen}
                />
              )}
              <ScrollToTop
                onClick={(e: any) => {
                  spaped(e);
                  window.scrollTo(0, 0);
                }}
                AddCommentOpen={AddCommentOpen}
              >
                <i className="icon-up-big" />
              </ScrollToTop>
            </LocateMiddle>
          </Mean>
        </>
      )}
      {/* <AudioActionInHTML rerenderingPoint={post} /> */}
    </Surrounding>
  );
};

interface ContentSectionPreProps {
  post: any;
  loading: boolean;
  setAddCommentOpen: any;
  AddCommentOpen: boolean;
  FirstImgSrc: string;
}
