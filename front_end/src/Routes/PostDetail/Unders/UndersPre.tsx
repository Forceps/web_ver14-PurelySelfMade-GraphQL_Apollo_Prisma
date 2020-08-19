import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import Loading from "../../../Components/ElementEtc/Effect/Loading";
import Tile from "../../../Components/Post/Shape/Tile/TileCon";
import CommentsPartCon from "../../../Components/Post/CommentsPart/CommentsPartCon";
import { LocateMiddle } from "../ContentSection/ContentSectionPre";

const Wrp = styled(W100per)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0 0 0;
`;
const PieceOfWork = styled(W100per)`
  margin: 90px 0 0 0;
`;
const HemIn = styled(W100per)`
  display: grid;
  grid-template-rows: 40px 1fr;
  padding: 10px 20px 20px 20px;
`;
const WriterName = styled(WH100per)`
  padding: 0 0 0 10px;
  font-size: 1.2rem;
`;
const PostBoxes = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
`;

export default ({
  post_id,
  AuthorName,
  AuthorPost,
  AuthorPostLoading,
  AddCommentOpen,
}: UndersPreProps) => {
  return (
    <Wrp>
      {AddCommentOpen && (
        <LocateMiddle>
          <CommentsPartCon post_id={post_id} />
        </LocateMiddle>
      )}
      <PieceOfWork>
        <HemIn>
          <WriterName>{AuthorName}'s Other Work</WriterName>
          <PostBoxes>
            {AuthorPostLoading ? (
              <Loading />
            ) : (
              <>
                {AuthorPost.map((post: any) => (
                  <Tile key={post.post_id} post={post} />
                ))}
              </>
            )}
          </PostBoxes>
        </HemIn>
        <HemIn>
          <WriterName>Related</WriterName>
          <PostBoxes></PostBoxes>
        </HemIn>
      </PieceOfWork>
    </Wrp>
  );
};
interface UndersPreProps {
  post_id: number;
  AuthorName: string;
  AuthorPost: any;
  AuthorPostLoading: boolean;
  AddCommentOpen: boolean;
}
