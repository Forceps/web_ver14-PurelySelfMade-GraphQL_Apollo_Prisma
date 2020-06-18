import { useState } from "react";

export default (url: string): boolean => {
  const [PreviewImgExist, setPreviewImgExist] = useState(false);
  let tester = new Image();
  tester.onload = () => {
    setPreviewImgExist(true);
  };
  tester.onerror = () => {
    setPreviewImgExist(false);
  };
  tester.src = url;
  return PreviewImgExist;
};
