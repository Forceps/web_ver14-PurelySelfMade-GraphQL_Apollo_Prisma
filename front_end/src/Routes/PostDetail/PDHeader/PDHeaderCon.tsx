import React from "react";
import PDHeaderPre from "./PDHeaderPre";

export default ({
  post,
  loading,
  setLoginOpen,
  setAuthorWorkOpen,
  zIndex = 20,
}: PDHeaderConProps) => {
  return loading ? (
    <div />
  ) : (
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
  loading: boolean;
  setLoginOpen: any;
  setAuthorWorkOpen: any;
  zIndex?: number;
}
