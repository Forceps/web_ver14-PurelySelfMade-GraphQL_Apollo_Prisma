import React from "react";
import styled, { css } from "styled-components";
import WH100per, {
  H100per,
  W100per,
  WH100perLink,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";

const Intro = styled(W100per)`
  position: relative;
  height: 220px;
`;
interface TitleBackImgProps {
  FirstImgSrc: string;
}
const TitleBackImg = styled(WH100per)<TitleBackImgProps>`
  position: absolute;
  top: 0;
  left: 0;
  ${(p) => {
    if (p.FirstImgSrc) {
      return css`
        background-image: url(${p.FirstImgSrc});
        background-size: cover;
        background-position: center center;
      `;
    } else {
      return css`
        background-color: rgba(178, 190, 195, 0.3);
      `;
    }
  }}
`;
const Cover = styled(WH100per)<TitleBackImgProps>`
  display: flex;
  justify-content: center;
  position: absolute;
  ${(p) => {
    if (p.FirstImgSrc) {
      return css`
        color: white;
        background-color: rgba(45, 52, 54, 0.3);
      `;
    }
  }}
`;
const CentreBox = styled(H100per)`
  display: grid;
  grid-template-rows: 1fr 60px;
  min-width: 500px;
  max-width: 700px;
  width: 60vw;
  padding: 25px 0 15px 0;
`;
const Title = styled(WH100per)`
  display: flex;
  font-size: 1.5rem;
`;
const AuthorInfo = styled(WH100per)`
  display: grid;
  grid-template-columns: 60px 1fr;
`;
const DACon = styled(WH100perLink)`
  display: flex;
  align-items: center;
  background-color: #dfe6e9;
  font-size: 5rem;
  border: 1px solid white;
  cursor: pointer;
`;
const DefaultAvatar = styled.i`
  margin: 10px 0 0 -7.5px;
`;
interface AvatarProp {
  url: string;
}
const Avatar = styled(DACon)<AvatarProp>`
  background-image: url(${(props: any) => props.url});
  background-size: cover;
  background-position: center center;
`;
const UserName = styled(WH100perLink)`
  display: flex;
  padding: 0 0 0 10px;
  font-size: 1.1rem;
  word-break: normal;
  overflow: hidden;
  line-height: 1.8rem;
  cursor: pointer;
`;

export default ({ post, FirstImgSrc }: IntroProps) => {
  return (
    <Intro>
      <TitleBackImg FirstImgSrc={FirstImgSrc} />
      <Cover FirstImgSrc={FirstImgSrc}>
        <CentreBox>
          <Title>{post.caption}</Title>
          <AuthorInfo>
            {post.user.avatar ? (
              <Avatar
                to={`/blog/${post.user.user_id}`}
                url={post.user.avatar}
              />
            ) : (
              <DACon to={`/blog/${post.user.user_id}`}>
                <DefaultAvatar className="icon-noun_user_856030" />
              </DACon>
            )}
            <UserName to={`/blog/${post.user.user_id}`}>
              {post.user.username}
            </UserName>
          </AuthorInfo>
        </CentreBox>
      </Cover>
    </Intro>
  );
};

interface IntroProps {
  post: any;
  FirstImgSrc: string;
}
