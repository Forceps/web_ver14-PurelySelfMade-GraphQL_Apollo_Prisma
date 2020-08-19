import React from "react";
import styled from "styled-components";
import { W100per } from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import ContentEditable from "react-contenteditable";
import MetaInfoCon from "./MetaInfo/MetaInfoCon";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import Intro from "./Intro/Intro";

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
const ScrollToTop = styled(CommentToggle)`
  bottom: calc(40px + 2.7rem + 10px);
`;

export default ({
  post_id,
  post,
  AddCommentOpen,
  setAddCommentOpen,
  FirstImgSrc,
}: ContentSectionPreProps) => {
  return (
    <Surrounding>
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
          <MetaInfoCon
            post_id={post_id}
            post={post}
            setAddCommentOpen={setAddCommentOpen}
          />
          <ScrollToTop
            onClick={(e: any) => {
              spaped(e);
              window.scrollTo(0, 0);
            }}
          >
            <i className="icon-up-big" />
          </ScrollToTop>
          <CommentToggle
            onClick={(e) => {
              spaped(e);
              setAddCommentOpen((p: boolean) => !p);
            }}
          >
            {AddCommentOpen ? (
              <i className="icon-th-large" />
            ) : (
              <i className="icon-commenting-o" />
            )}
          </CommentToggle>
        </LocateMiddle>
      </Mean>
    </Surrounding>
  );
};

interface ContentSectionPreProps {
  post_id: number;
  post: any;
  AddCommentOpen: boolean;
  setAddCommentOpen: any;
  FirstImgSrc: string;
}
