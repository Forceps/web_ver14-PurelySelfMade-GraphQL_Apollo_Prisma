import React from "react";
import PDHeaderPre from "./PDHeaderPre";

export default ({
  post,
  setLoginOpen,
  setAuthorWorkOpen,
  zIndex = 20,
}: PDHeaderConProps) => {
  return (
    <PDHeaderPre
      zIndex={zIndex}
      post={post}
      setLoginOpen={setLoginOpen}
      setAuthorWorkOpen={setAuthorWorkOpen}
    />
  );
};

interface PDHeaderConProps {
  post: any;
  setLoginOpen: any;
  setAuthorWorkOpen: any;
  zIndex?: number;
}
