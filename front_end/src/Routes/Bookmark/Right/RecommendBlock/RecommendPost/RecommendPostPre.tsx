import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
  H100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../../../Components/User/HumanBlock/Avatar";
import { FlexCenter100per } from "../../../../../GlobalLib/Styles/IteratePattern/ToCenter";

const RecommendBlock = styled.div`
  display: grid;
  grid-template-rows: 21px 1fr;
  margin: 0 0 10px 10px;
  width: 250px;
`;
const RecommendPost = styled(RecommendBlock)`
  min-height: 40px;
`;
const RSubSbj = styled(W100per)`
  display: grid;
  justify-content: right;
  padding: 0 5px 0 0;
  font-size: 0.85rem;
  border-bottom: 1px solid #b2bec3;
`;
const Lists = styled(W100per)`
  display: flex;
  flex-direction: column;
`;
const Rectangle = styled(W100per)`
  display: grid;
  grid-template-columns: 70px 1fr;
  height: 70px;
  margin: 5px 0 1px 0;
  padding: 0 3px 0 0;
  &:hover {
    border-right: 3px solid #636e72;
    padding: 0 0 0 0;
  }
  cursor: pointer;
`;
const FaceT = styled(FlexCenter100per)`
  font-size: 1rem;
  padding: 5px;
  background-color: #dfe6e9;
`;
interface TitleImageProp {
  url: string;
}
const FaceI = styled(WH100per)<TitleImageProp>`
  background-image: url(${(p: any) => p.url});
  background-size: cover;
  background-position: center center;
`;
const TextMain = styled(WH100per)`
  display: grid;
  grid-template-rows: 1fr 28px;
`;
const Caption = styled(WH100per)`
  padding: 5px;
  font-size: 0.9rem;
`;
const Author = styled(WH100per)`
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
  font-size: 0.8rem;
`;
const AuthorName = styled(H100per)`
  display: flex;
  align-items: center;
  margin: 0 0 0 6px;
`;

export default ({ recoP_loading, recoP_data }: RecommendPostPreProps) => {
  return (
    <RecommendPost>
      <RSubSbj>Post</RSubSbj>
      <Lists>
        {!recoP_loading &&
          recoP_data.map((rc: any) => (
            <Rectangle key={rc.post_id}>
              {rc.face_type === "text" ? (
                <FaceT>Post</FaceT>
              ) : (
                <FaceI url={rc.face} />
              )}
              <TextMain>
                <Caption>{rc.caption}</Caption>
                <Author>
                  <Avatar size={28} url={rc.user_postTouser.avatar} />
                  <AuthorName>{rc.user_postTouser.username}</AuthorName>
                </Author>
              </TextMain>
            </Rectangle>
          ))}
      </Lists>
    </RecommendPost>
  );
};

interface RecommendPostPreProps {
  recoP_loading: boolean;
  recoP_data: any;
}
