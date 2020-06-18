import React from "react";
import BlogHeaderPre from "./BlogHeaderPre";

export default ({ setLoginOpen }: BlogHeaderConProps) => {
  return <BlogHeaderPre setLoginOpen={setLoginOpen} />;
};

interface BlogHeaderConProps {
  setLoginOpen: any;
}
