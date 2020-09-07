import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import Avatar from "../../../../../Components/User/HumanBlock/Avatar";

const RecommendBlock = styled.div`
  display: grid;
  grid-template-rows: 21px 1fr;
  margin: 0 0 10px 10px;
  width: 250px;
`;
const RecommendAuthor = styled(RecommendBlock)`
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
  grid-template-columns: 50px 1fr;
  height: 50px;
  margin: 5px 0 1px 0;
  padding: 0 3px 0 0;
  &:hover {
    border-right: 3px solid #636e72;
    padding: 0 0 0 0;
  }
  cursor: pointer;
`;
const Author = styled(WH100per)`
  display: grid;
  grid-template-rows: 1fr 25px;
`;
const AuthorName = styled(WH100per)`
  padding: 5px;
  font-size: 0.9rem;
`;

export default ({ recoU_loading, recoU_data }: RecommendAuthorPreProps) => {
  return (
    <RecommendAuthor>
      <RSubSbj>Author</RSubSbj>
      <Lists>
        {!recoU_loading &&
          (recoU_data === null ||
          recoU_data === undefined ||
          recoU_data.length === 0 ? (
            <div />
          ) : (
            recoU_data.map((rc: any) => (
              <Rectangle key={rc.user_id}>
                <Avatar size={50} url={rc.avatar} />
                <Author>
                  <AuthorName>{rc.username}</AuthorName>
                </Author>
              </Rectangle>
            ))
          ))}
      </Lists>
    </RecommendAuthor>
  );
};

interface RecommendAuthorPreProps {
  recoU_loading: boolean;
  recoU_data: any;
}
