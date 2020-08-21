import React from "react";
import styled from "styled-components";
import { usePostDetail } from "../../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import WH100per, {
  W100per,
  WH100perLink,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import PostHeader from "./PostHeader";
import Avatar from "../../../User/Avatar";
import Duo from "./BlockType/Duo";
import Solo from "./BlockType/Solo";
import Trio from "./BlockType/Trio";
import Quartet from "./BlockType/Quartet";
import Quintet from "./BlockType/Quintet";

interface InclosureProps {
  zIndex: number;
}
const Inclosure = styled(W100per)<InclosureProps>`
  display: grid;
  grid-template-columns: 60px 1fr;
  margin: 20px 0 40px 0;
  z-index: ${(prop) => prop.zIndex};
`;
const Wrapper = styled(W100per)`
  display: grid;
  grid-template-rows: 50px 1fr;
  overflow: hidden;
  &:hover {
    box-shadow: 0 13px 27px -60px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    .ctrlpanel {
      display: flex;
    }
  }
`;
const EachContain = styled(W100per)`
  display: flex;
  position: relative;
  padding: 10px 0 0 0;
`;
const UName = styled(WH100perLink)`
  display: flex;
  align-items: center;
  font-size: 1rem;
  word-break: break-all;
  overflow: hidden;
`;
const Countable = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
`;
const Rest = styled(WH100per)`
  display: grid;
  grid-template-rows: 25px 1fr;
  padding: 0 0 0 5px;
`;
const Divid = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 230px;
`;

interface EachPostPreProps {
  post: any;
  Texts: string;
  ImgSamples: [string[], boolean];
  zIndex: number;
  PartitionLevel: number;
}
export default ({
  post,
  Texts,
  ImgSamples,
  zIndex,
  PartitionLevel,
}: EachPostPreProps) => {
  const PD = usePostDetail();
  return (
    <>
      <Inclosure zIndex={zIndex}>
        <Avatar
          url={post.user_postTouser?.avatar}
          size={50}
          link={`/blog/${post.user_postTouser.user_id}`}
        />
        <Wrapper>
          <Rest>
            <PostHeader post={post} />
            <Divid>
              <UName to={`/blog/${post.user_postTouser.user_id}`}>
                {post.user_postTouser.username}
              </UName>
              <Countable>
                <i className="icon-eye-1" /> {post.views}{" "}
                <i className="icon-heart-empty" /> {post.likes}
              </Countable>
            </Divid>
          </Rest>
          <EachContain
            onClick={async () => {
              await PD.setPostID(post.post_id);
              PD.setOpenSeePostDetail(true);
            }}
          >
            {PartitionLevel === 0 ? (
              <div />
            ) : PartitionLevel === 1 ? (
              <Solo Texts={Texts} ImgSamples={ImgSamples} />
            ) : PartitionLevel === 2 ? (
              <Duo Texts={Texts} ImgSamples={ImgSamples} />
            ) : PartitionLevel === 3 ? (
              <Trio Texts={Texts} ImgSamples={ImgSamples} />
            ) : PartitionLevel === 4 ? (
              <Quartet Texts={Texts} ImgSamples={ImgSamples} />
            ) : (
              <Quintet Texts={Texts} ImgSamples={ImgSamples} />
            )}
          </EachContain>
        </Wrapper>
      </Inclosure>
    </>
  );
};
