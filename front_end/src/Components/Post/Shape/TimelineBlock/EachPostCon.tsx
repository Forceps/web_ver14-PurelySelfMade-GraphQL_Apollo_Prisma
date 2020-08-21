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
  const [ImgSamples, setImgSamples] = useState<[string[], boolean]>([
    [],
    false,
  ]);
  const [PartitionLevel, setPartitionLevel] = useState(0);
  useEffect(() => {
    if (post) {
      const InArticle = document.getElementById(post.post_id);

      let ImgsCase: string[] = [];
      const Imgs = InArticle?.getElementsByTagName("img");
      if (Imgs) {
        for (let i = 0; i < Imgs.length; i++) {
          ImgsCase = ImgsCase.concat(Imgs[i].src);
        }
      }
      const audioImgs = InArticle?.getElementsByClassName(
        "audio_player_thumbnail_container"
      ) as HTMLCollectionOf<HTMLAudioElement>;
      if (audioImgs) {
        for (let i = 0; i < audioImgs.length; i++) {
          ImgsCase = ImgsCase.concat(
            audioImgs[i].style.backgroundImage.slice(5, -2)
          );
        }
      }
      setImgSamples([ImgsCase, true]);

      const auau = InArticle?.querySelector(".audioPlayer");
      if (auau && auau.parentNode) auau.parentNode.removeChild(auau);
      const vivi = InArticle?.querySelector(".videoPlayer");
      if (vivi && vivi.parentNode) vivi.parentNode.removeChild(vivi);
      let text = InArticle?.textContent?.trim() || "";
      console.log(text);
      const txtLength = 250;
      const trimedText = text.replace(/\s/gi, "");
      if (text && text !== "" && trimedText) {
        if (text.length > txtLength) {
          text = text.substring(0, txtLength) + " ......View more";
        }
        setTexts(text);
        setPartitionLevel(1);
      }

      let ImgsCount = ImgsCase.length;
      if (ImgsCount > 4) ImgsCount = 4;
      setPartitionLevel((p) => p + ImgsCount);
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
        PartitionLevel={PartitionLevel}
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
