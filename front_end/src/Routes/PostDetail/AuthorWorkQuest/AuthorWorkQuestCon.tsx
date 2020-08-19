import React from "react";
import AuthorWorkQuestPre from "./AuthorWorkQuestPre";

const AuthorWorkQuestCon = ({
  zIndex = 30,
  post,
  setAuthorWorkOpen,
}: AuthorWorkQuestConProps) => {
  return (
    <AuthorWorkQuestPre
      zIndex={zIndex}
      post={post}
      setAuthorWorkOpen={setAuthorWorkOpen}
    />
  );
};

interface AuthorWorkQuestConProps {
  zIndex?: number;
  post: any;
  setAuthorWorkOpen: any;
}

export default React.memo(AuthorWorkQuestCon);
