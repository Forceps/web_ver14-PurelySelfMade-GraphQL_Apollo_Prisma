import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentEditable from "react-contenteditable";
import TilePre from "./TilePre";

const AnalysisTarget = styled.div`
  display: none;
`;
const Contents = styled(({ ...rest }) => <ContentEditable {...rest} />)`
  display: none;
`;

export default ({ post, zIndex = 0 }: EachPostProps) => {
  const [ImgSamples, setImgSamples] = useState<any>([1, false]);
  useEffect(() => {
    if (post) {
      const InArticle = document.getElementById(post.post_id);
      const Imgs = InArticle?.getElementsByTagName("img");
      if (Imgs) {
        setImgSamples([Imgs, true]);
      } else {
        setImgSamples([[], true]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);
  return (
    <>
      <TilePre post={post} ImgSamples={ImgSamples} zIndex={zIndex} />
      <AnalysisTarget id={post.post_id}>
        <Contents
          className="postCells"
          tagName="article"
          html={post.content}
          spellCheck="false"
          disabled={true}
        />
      </AnalysisTarget>
    </>
  );
};

interface EachPostProps {
  post: any;
  zIndex?: number;
}
