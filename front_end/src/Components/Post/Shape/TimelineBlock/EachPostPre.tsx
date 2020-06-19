import React from "react";
import styled from "styled-components";
import { usePostDetail } from "../../../../GlobalLib/Context/PostContext/PostDetail/PostDetail";
import WH100per, {
  W100per,
  WH100perLink,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import PostHeader from "./PostHeader";
import { Link } from "react-router-dom";
import ContentEditable from "react-contenteditable";

interface InclosureProps {
  zIndex: number;
}
const Inclosure = styled(W100per)<InclosureProps>`
  display: grid;
  grid-template-columns: 60px 1fr;
  margin: 20px 0 20px 0;
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
interface AvatarProps {
  url: string;
}
const Avatar = styled(Link)<AvatarProps>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
  width: 50px;
  height: 50px;
`;
const UName = styled(WH100perLink)`
  display: flex;
  align-items: center;
  font-size: 1rem;
  word-break: break-all;
  overflow: hidden;
`;
const DACon = styled(Link)`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  width: 50px;
  height: 50px;
  background-color: #dfe6e9;
  cursor: default;
`;
const DefaultAvatar = styled.i`
  display: grid;
  margin: 10px 0 0 0;
  padding: 0;
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
const VisualPost = styled(W100per)`
  display: grid;
`;
const Partition = styled(W100per)`
  display: flex;
  flex-direction: column;
`;
const Text = styled(W100per)`
  max-height: 100px;
  /* white-space: pre; */
  font-size: 0.9rem;
  word-break: break-all;
  padding: 5px 5px 15px 5px;
  line-height: 1.2rem;
  overflow: hidden;
`;
const Images = styled(W100per)`
  height: 300px;
  max-height: 320px;
  padding: 5px;
`;
interface BackImgProp {
  url: string;
}
const BackImg = styled(WH100per)<BackImgProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;
const VisualContents = styled(({ ...rest }) => <ContentEditable {...rest} />)`
  display: inline-block;
  min-height: 120px;
  max-height: 370px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
  font-size: 0.9rem;
  word-break: break-all;
  z-index: 5;
`;

interface EachPostPreProps {
  post: any;
  Texts: string;
  ImgSamples: any;
  zIndex: number;
}
export default ({ post, Texts, ImgSamples, zIndex }: EachPostPreProps) => {
  const PD = usePostDetail();
  return (
    <>
      <Inclosure zIndex={zIndex}>
        {post.user_postTouser?.avatar ? (
          <Avatar
            to={`/blog/${post.user_postTouser.user_id}`}
            url={post.user_postTouser.avatar}
          />
        ) : (
          <DACon to={`/blog/${post.user_postTouser.user_id}`}>
            <DefaultAvatar className="icon-noun_user_856030" />
          </DACon>
        )}
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
            {ImgSamples[1] === true &&
              (ImgSamples[0].length === 0 ? (
                <VisualPost>
                  <VisualContents
                    className="postCells"
                    tagName="article"
                    html={post.content}
                    spellCheck="false"
                    disabled={true}
                  />
                </VisualPost>
              ) : (
                <Partition>
                  <Text>{Texts}</Text>
                  {ImgSamples[0][0]?.src && (
                    <Images>
                      <BackImg url={ImgSamples[0][0].src} />
                    </Images>
                  )}
                </Partition>
              ))}
          </EachContain>
        </Wrapper>
      </Inclosure>
      {/* <Contour /> */}
    </>
  );
};
