import React, { useState, useEffect } from "react";
import ContentSectionPre from "./ContentSectionPre";

export default ({
  post_id,
  post,
  AddCommentOpen,
  setAddCommentOpen,
}: ContentSectionConProps) => {
  const [FirstImgSrc, setTagExtract] = useState<any>(undefined);
  useEffect(() => {
    const InArticle = document.getElementsByTagName("article")[0];
    const firstImg = InArticle.getElementsByTagName("img")[0];
    if (firstImg) {
      console.log(firstImg.src);
      setTagExtract(firstImg.src);
    }
  }, []);
  return (
    <ContentSectionPre
      post_id={post_id}
      post={post}
      AddCommentOpen={AddCommentOpen}
      setAddCommentOpen={setAddCommentOpen}
      FirstImgSrc={FirstImgSrc}
    />
  );
};

interface ContentSectionConProps {
  post_id: number;
  post: any;
  AddCommentOpen: boolean;
  setAddCommentOpen: any;
}
