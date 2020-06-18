import React, { useEffect } from "react";
import styled from "styled-components";
import Loading from "../../../../Components/Effect/Loading";
import TemporaryBackground from "../../../../Components/Effect/TemporaryBackground";
import { Content } from "./PostDetailLib";
import { usePostDetail } from "./PostDetail";
import { useDummyState } from "../../Lib/DummyState";
import IncludeScrollBar from "../../../Styles/IteratePattern/IncludeScrollBar";
import { spaped } from "../../../RecycleFunction/etc/StopAndPrevent";
import CommentsPartCon from "../../../../Components/Post/CommentsPart/CommentsPartCon";
import { S_N_to_N } from "../../../RecycleFunction/etc/type_convert";
import WH100per, { W100per } from "../../../Styles/IteratePattern/WH100per";

interface WrapperProps {
  zIndex: number;
}
const Wrapper = styled(WH100per)<WrapperProps>`
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: ${(prop) => prop.zIndex};
`;
const Template = styled(IncludeScrollBar)<WrapperProps>`
  position: relative;
  min-width: 550px;
  max-width: 750px;
  width: 55vw;
  min-height: 400px;
  max-height: 96vh;
  background-color: #fafafa;
  overflow: auto;
  z-index: ${(prop) => prop.zIndex};
`;
const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 85%;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  padding: 8px;
`;
const Caption = styled.div`
  font-size: 17px;
  color: black;
`;
const CommentsWrap = styled(W100per)`
  padding: 0 12px 0 12px;
`;
const CSubj = styled(W100per)`
  font-size: 1.3rem;
  padding: 60px 0 0 0;
`;

export default ({ zIndex = 10, commentsShow = false }: PostDetailTProps) => {
  const PD = usePostDetail();
  const DS = useDummyState();

  useEffect(() => {
    DS.setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PD]);
  return (
    <Wrapper zIndex={zIndex}>
      <TemporaryBackground
        onClick={(e: any) => {
          spaped(e);
          PD.setOpenSeePostDetail(false);
        }}
        zIndex={zIndex + 1}
      />
      <Template zIndex={zIndex + 2}>
        {PD.postLoadingByID ? (
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        ) : (
          <>
            <Header>
              <Caption>{PD.postByID?.caption}</Caption>
            </Header>
            <Content html={PD.postByID?.content} />
            {commentsShow && (
              <CommentsWrap>
                <CSubj>Comments</CSubj>
                <CommentsPartCon post_id={S_N_to_N(PD.postByID?.post_id)} />
              </CommentsWrap>
            )}
          </>
        )}
      </Template>
    </Wrapper>
  );
};

interface PostDetailTProps {
  zIndex?: number;
  commentsShow?: boolean;
}
