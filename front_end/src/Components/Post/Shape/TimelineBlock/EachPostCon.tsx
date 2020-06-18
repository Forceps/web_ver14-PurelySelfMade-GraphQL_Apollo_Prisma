import React, { useEffect, useState } from "react";
import EachPostPre from "./EachPostPre";
import styled from "styled-components";
import ContentEditable from "react-contenteditable";

const AnalysisTarget = styled.div`
  display: none;
`;
const Contents = styled(({ ...rest }) => <ContentEditable {...rest} />)`
  display: none;
`;

interface EachPostConProps {
  post: any;
  zIndex?: number;
}
export default ({ post, zIndex = 0 }: EachPostConProps) => {
  const [Texts, setTexts] = useState("");
  const [ImgSamples, setImgSamples] = useState<any>([1, false]);
  useEffect(() => {
    if (post) {
      const InArticle = document.getElementById(post.post_id);
      let text = InArticle?.textContent;
      if (text) {
        if (text.length > 200) {
          text = text.substring(0, 200) + " ......View more";
        } else {
          text = text + " ......View more";
        }
        setTexts(text);
      }
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
      <EachPostPre
        post={post}
        Texts={Texts}
        ImgSamples={ImgSamples}
        zIndex={zIndex}
      />
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
