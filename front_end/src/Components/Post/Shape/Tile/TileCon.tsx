import React from "react";
import TilePre from "./TilePre";

export default ({ post, zIndex = 0 }: EachPostProps) => {
  return <TilePre post={post} zIndex={zIndex} />;
};

interface EachPostProps {
  post: any;
  zIndex?: number;
}
