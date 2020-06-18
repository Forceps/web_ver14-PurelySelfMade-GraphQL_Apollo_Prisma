import React, { useState, useEffect } from "react";
import ContentSectionPre from "./ContentSectionPre";

export default ({
  post,
  loading,
  setAddCommentOpen,
  AddCommentOpen,
}: ContentSectionConProps) => {
  const [FirstImgSrc, setTagExtract] = useState<any>(undefined);
  useEffect(() => {
    if (!loading) {
      const InArticle = document.getElementsByTagName("article")[0];
      const firstImg = InArticle.getElementsByTagName("img")[0];
      if (firstImg) {
        console.log(firstImg.src);
        setTagExtract(firstImg.src);
      }
    }
  }, [loading]);
  return (
    <ContentSectionPre
      post={post}
      loading={loading}
      setAddCommentOpen={setAddCommentOpen}
      AddCommentOpen={AddCommentOpen}
      FirstImgSrc={FirstImgSrc}
    />
  );
};

interface ContentSectionConProps {
  post: any;
  loading: boolean;
  setAddCommentOpen: any;
  AddCommentOpen: boolean;
}
