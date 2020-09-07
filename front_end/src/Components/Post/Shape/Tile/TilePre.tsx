import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
  GoodLink,
} from "../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../User/HumanBlock/Avatar";
import { useHistory } from "react-router-dom";

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
const PostHeader = styled(WH100per)`
  display: flex;
`;
const Title = styled.div`
  display: grid;
  overflow: hidden;
  font-size: 1rem;
`;
const Menifesting = styled(WH100per)`
  display: grid;
  grid-template-rows: 1fr 30px 40px;
  position: absolute;
  padding: 10px;
  color: white;
  background-color: rgba(45, 52, 54, 0.3);
  &:hover {
    background-color: rgba(45, 52, 54, 0.45);
  }
  transition-property: background-color;
  transition-duration: 0.12s;
  transition-timing-function: ease;
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
const TitleImgSubstitude = styled.div`
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
  font-size: 0.9rem;
  line-height: 1.2rem;
`;
const Capsel = styled(WH100per)`
  display: flex;
  padding: 35px 0 0 3px;
  background-color: #fafafa;
`;

export default ({ post, zIndex }: EachPostProps) => {
  const history = useHistory();
  const {
    post_id,
    caption,
    views,
    likes,
    user_postTouser: { avatar, user_id, username },
    face,
    face_type,
  } = post;
  return (
    <Wrapper zIndex={zIndex}>
      {face_type !== "image" ? (
        <Capsel>
          <TitleImgSubstitude>{face}</TitleImgSubstitude>
        </Capsel>
      ) : (
        <TitleImage url={face} />
      )}

      <Menifesting
        onClick={() => {
          history.push(`/post/detail/${post_id}`);
        }}
      >
        <PostHeader className="hovP">
          <Title>{caption}</Title>
        </PostHeader>
        <AdditionalInfo>
          <i className="icon-eye-1" /> {views}
          {"  "}
          <i className="icon-heart-empty" /> {likes}
        </AdditionalInfo>
        <MiniProfile>
          <Avatar url={avatar} size={40} link={`/blog/${user_id}`} />
          <UName>
            <GoodLink to={`/blog/${user_id}`} color={"white"}>
              {username}
            </GoodLink>
          </UName>
        </MiniProfile>
      </Menifesting>
    </Wrapper>
  );
};

interface EachPostProps {
  post: any;
  zIndex: number;
}
