import React from "react";
import styled, { css } from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import WH100per, {
  W100per,
} from "../../../GlobalLib/Styles/IteratePattern/WH100per";
import { spaped } from "../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import Loading from "../../ElementEtc/Effect/Loading";
import { useMyInfo } from "../../../GlobalLib/Context/UserContext/Me";
import LoginModalCon from "../../User/Auth/LoginModal/LoginModalCon";
import { useLoginCheck } from "../../../GlobalLib/Context/UserContext/IsLoggedIn";
import Avatar from "../../User/Avatar";

const Comments = styled(W100per)`
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 0;
`;
const AddBox = styled(W100per)`
  display: grid;
  grid-template-columns: 1fr 40px;
  margin: 20px 0 40px 0;
  min-height: 50px;
`;
interface AddingProps {
  submitCheck: boolean;
}
const Adding = styled(({ submitCheck, ...rest }) => (
  <TextareaAutosize {...rest} />
))<AddingProps>`
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  background-color: #fafafa;
  border: 0;
  ${(p) => {
    if (p.submitCheck) {
      return css`
        border-bottom: 1px solid #fab1a0;
      `;
    } else {
      return css`
        border-bottom: 1px solid #b2bec3;
      `;
    }
  }}
  resize: none;
  &:focus {
    outline: none;
  }
`;
const CommentSubmit = styled(WH100per)<AddingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b2bec3;
  font-size: 1.3rem;
  color: white;
  ${(p) => {
    if (p.submitCheck) {
      return css`
        background-color: #fab1a0;
        &:hover {
          background-color: #e17055;
        }
      `;
    } else {
      return css`
        background-color: #b2bec3;
        &:hover {
          background-color: #636e72;
        }
      `;
    }
  }}
  cursor: pointer;
`;
const CommentCell = styled(W100per)`
  display: grid;
  grid-template-columns: 45px 1fr;
  min-height: 80px;
  margin: 0 0 30px 0;
`;
const ForTheAvatar = styled(WH100per)`
  display: grid;
  grid-template-rows: 45px 1fr;
`;
const Username = styled.div`
  cursor: pointer;
`;
const Hedge = styled(WH100per)`
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  padding: 0 0 0 8px;
`;
const FirstFloor = styled(WH100per)`
  display: flex;
  overflow: hidden;
`;
const SecondFloor = styled(WH100per)`
  padding: 6px 0 6px 0;
  font-size: 0.9rem;
  line-height: 1.3rem;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
`;
const CreatedAt = styled(WH100per)`
  color: #b2bec3;
`;
const ThirdFloor = styled(WH100per)`
  display: grid;
  grid-template-columns: 1fr 126px;
`;
const NumInfo = styled(WH100per)``;
const LikeIcon = styled.i`
  cursor: pointer;
`;
const DisLikeIcon = styled.i`
  display: inline-block;
  transform: rotate(360deg) scaleX(-1);
  cursor: pointer;
`;
const CommentUpdateIcon = styled.i`
  margin: 0 0 0 10px;
  font-size: 0.9rem;
  cursor: pointer;
`;

export default ({
  commentInput,
  commentSubmit,
  commentsLoading,
  comments,
  submitCheck,
  LoginOpen,
  setLoginOpen,
}: CommentsPartPreProps) => {
  const { MEloading, MEdata } = useMyInfo();
  const { isLoggedIn } = useLoginCheck();
  return (
    <Comments>
      <AddBox>
        <Adding
          placeholder="Add comment (300 characters or less)"
          spellCheck="false"
          submitCheck={submitCheck}
          onClick={() => {
            if (!isLoggedIn) {
              setLoginOpen(true);
            }
          }}
          onChange={commentInput.onChange}
          value={commentInput.value}
        />
        <CommentSubmit
          onClick={(e: any) => {
            spaped(e);
            if (!isLoggedIn) {
              setLoginOpen(true);
            } else {
              commentSubmit();
            }
          }}
          submitCheck={submitCheck}
        >
          {!submitCheck ? (
            <i className="icon-plus" />
          ) : (
            <i className="icon-attention-alt" />
          )}
        </CommentSubmit>
      </AddBox>
      {!commentsLoading ? (
        <>
          {comments.map((i: any) => (
            <CommentCell key={i.comment_id}>
              <ForTheAvatar>
                <Avatar
                  url={i.user_commentTouser?.avatar}
                  size={45}
                  link={`/blog/${i.user_commentTouser.user_id}`}
                />{" "}
              </ForTheAvatar>
              <Hedge>
                <FirstFloor>
                  <Username>{i.user_commentTouser.username}</Username>
                  {isLoggedIn &&
                    !MEloading &&
                    i.user_commentTouser.user_id === MEdata.user_id && (
                      <CommentUpdateIcon className="icon-pencil-alt" />
                    )}
                </FirstFloor>
                <SecondFloor>{i.comment}</SecondFloor>
                <ThirdFloor>
                  <NumInfo>
                    <LikeIcon className="icon-thumbs-up" /> {i.likes}{" "}
                    <DisLikeIcon className="icon-thumbs-down" /> reply
                  </NumInfo>
                  <CreatedAt>
                    {i.year}. {i.month}. {i.day}. {i.hour}:{i.minute}
                  </CreatedAt>
                </ThirdFloor>
              </Hedge>
            </CommentCell>
          ))}
          {LoginOpen && <LoginModalCon setLoginModalOpen={setLoginOpen} />}
        </>
      ) : (
        <Loading />
      )}
    </Comments>
  );
};

interface CommentsPartPreProps {
  commentInput: any;
  commentSubmit: () => void;
  commentsLoading: boolean;
  comments: any;
  submitCheck: boolean;
  LoginOpen: boolean;
  setLoginOpen: any;
}
