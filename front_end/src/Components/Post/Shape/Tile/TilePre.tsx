import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
  WH100perLink,
  GoodLink,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import ContentEditable from "react-contenteditable";

interface zindexProp {
  zIndex: number;
}
const Wrapper = styled.div<zindexProp>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 260px;
  margin: 10px 0 0 10px;
  overflow: hidden;
  z-index: ${(p) => p.zIndex};
`;
const MiniProfile = styled(WH100per)`
  display: grid;
  grid-template-columns: 40px 1fr;
`;
const UName = styled(W100per)`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0 0 0 7px;
`;
const DACon = styled(WH100perLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: #dfe6e9;
`;
const DefaultAvatar = styled.i`
  display: grid;
  margin: 8px 0 0 0;
  padding: 0;
  color: black;
`;
interface AvatarProps {
  url: string;
}
const Avatar = styled(DACon)<AvatarProps>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
`;
const Contents = styled(({ ...rest }) => <ContentEditable {...rest} />)`
  display: inline-block;
  overflow: hidden;
  word-break: break-all;
  font-size: 0.75rem;
`;
const PostHeader = styled(WH100per)`
  display: flex;
`;
const Title = styled.div`
  display: grid;
  overflow: hidden;
  font-size: 1rem;
`;
const Menifesting = styled(WH100perLink)`
  display: grid;
  grid-template-rows: 1fr 30px 40px;
  position: absolute;
  padding: 10px;
  color: white;
  background-color: rgba(45, 52, 54, 0.3);
  &:hover {
    background-color: rgba(45, 52, 54, 0.45);
  }
  cursor: pointer;
`;
const AdditionalInfo = styled(WH100per)``;
interface TitleImageProp {
  url: string;
}
const TitleImage = styled(WH100per)<TitleImageProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;

export default ({ post, ImgSamples, zIndex }: EachPostProps) => {
  return (
    <Wrapper zIndex={zIndex}>
      {ImgSamples[1] === true &&
        (ImgSamples[0].length === 0 || !ImgSamples[0][0]?.src ? (
          <Contents
            className="postCells"
            tagName="article"
            html={post.content}
            spellCheck="false"
            disabled={true}
          />
        ) : (
          <TitleImage url={ImgSamples[0][0].src} />
        ))}

      <Menifesting to={`/post/detail/${post.post_id}`}>
        <PostHeader className="hovP">
          <Title>{post.caption}</Title>
        </PostHeader>
        <AdditionalInfo>
          <i className="icon-eye-1" /> {post.views}
          {"  "}
          <i className="icon-heart-empty" /> {post.likes}
        </AdditionalInfo>
        <MiniProfile>
          {post.user_postTouser?.avatar ? (
            <Avatar
              onClick={(e) => {
                e.stopPropagation();
              }}
              to={`/blog/${post.user_postTouser.user_id}`}
              url={post.user_postTouser.avatar}
            />
          ) : (
            <DACon
              onClick={(e) => {
                e.stopPropagation();
              }}
              to={`/blog/${post.user_postTouser.user_id}`}
            >
              <DefaultAvatar className="icon-noun_user_856030" />
            </DACon>
          )}
          <UName>
            <GoodLink
              to={`/blog/${post.user_postTouser.user_id}`}
              color={"white"}
            >
              {post.user_postTouser.username}
            </GoodLink>
          </UName>
        </MiniProfile>
      </Menifesting>
    </Wrapper>
  );
};

interface EachPostProps {
  post: any;
  ImgSamples: any;
  zIndex: number;
}
