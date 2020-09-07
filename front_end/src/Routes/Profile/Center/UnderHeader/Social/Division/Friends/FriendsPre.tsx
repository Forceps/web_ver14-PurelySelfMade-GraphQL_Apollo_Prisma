import React from "react";
import styled from "styled-components";
import WH100per, {
  W100per,
} from "../../../../../../../GlobalLib/Styles/IteratePattern/WH100per";
import BusinessCard from "../../../../../../../Components/User/HumanBlock/BusinessCard";
import { FlexCenter } from "../../../../../../../GlobalLib/Styles/IteratePattern/ToCenter";
import { useHistory } from "react-router-dom";
import { S_N_to_N } from "../../../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import ConfirmationModal from "../../../../../../../Components/ElementEtc/Effect/ConfirmationModal";

const FriendsPreContainer = styled(W100per)`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const BlocksContainer = styled(W100per)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const SbjLine = styled(W100per)`
  display: flex;
  align-items: center;
  height: 35px;
  font-size: 1.15rem;
  padding: 0 0 0 10px;
  &:nth-child(n + 2) {
    margin: 20px 0 0 0;
  }
`;
export const VoidNotice = styled(W100per)`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #636e72;
  height: 100px;
  padding: 0 0 0 20px;
`;
const CardCtrlDetail = styled(WH100per)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 18px;
`;
const BtnInCard = styled(FlexCenter)`
  height: 32px;
  width: 100px;
  margin: 0 0 5px 0;
  background-color: rgba(223, 230, 233, 0.7);
  &:hover {
    background-color: rgba(223, 230, 233, 1);
  }
  cursor: pointer;
`;

const FriendsPre = ({
  friendsData,
  moorageFriendsData,
  setDeleteTarget,
  removeFriend,
  FdRemoveModalOp,
  setFdRemoveModalOp,
  FdRejectModalOp,
  setFdRejectModalOp,
  acceptFriendRequest,
}: FriendsPreProps) => {
  const history = useHistory();

  return (
    <FriendsPreContainer>
      <SbjLine>Current friend</SbjLine>
      <BlocksContainer>
        {friendsData.length === 0 ? (
          <VoidNotice>No Friends</VoidNotice>
        ) : (
          friendsData.map((i: any) => (
            <BusinessCard key={i.user_id} user_data={i}>
              <CardCtrlDetail>
                <BtnInCard
                  onClick={() => {
                    history.push(`/blog/${i.user_id}`);
                  }}
                >
                  <i className="icon-vector-pencil" />
                  Blog
                </BtnInCard>
                <BtnInCard>
                  <i className="icon-comment-empty" />
                  Chat
                </BtnInCard>
                <BtnInCard
                  onClick={() => {
                    setFdRemoveModalOp(true);
                    setDeleteTarget(S_N_to_N(i.user_id));
                  }}
                >
                  <i className="icon-noun_x_2939490" />
                  Delete
                </BtnInCard>
              </CardCtrlDetail>
            </BusinessCard>
          ))
        )}
      </BlocksContainer>
      {FdRemoveModalOp && (
        <ConfirmationModal
          subject="Remove friend"
          message="Are you sure you want to delete your friend?"
          functionExecute={removeFriend}
          setConfirmationModalOpen={setFdRemoveModalOp}
          yesName="Delete"
        />
      )}
      <SbjLine>Friend proposer</SbjLine>
      <BlocksContainer>
        {moorageFriendsData.length === 0 ? (
          <VoidNotice>No proposer</VoidNotice>
        ) : (
          moorageFriendsData.map((i: any) => (
            <BusinessCard key={i.user_id} user_data={i}>
              <CardCtrlDetail>
                <BtnInCard
                  onClick={() => {
                    history.push(`/blog/${i.user_id}`);
                  }}
                >
                  <i className="icon-vector-pencil" />
                  Blog
                </BtnInCard>
                <BtnInCard
                  onClick={() => {
                    acceptFriendRequest(S_N_to_N(i.user_id));
                  }}
                >
                  <i className="icon-ok" />
                  Accept
                </BtnInCard>
                <BtnInCard
                  onClick={() => {
                    setFdRejectModalOp(true);
                    setDeleteTarget(S_N_to_N(i.user_id));
                  }}
                >
                  <i className="icon-noun_x_2939490" />
                  Reject
                </BtnInCard>
              </CardCtrlDetail>
            </BusinessCard>
          ))
        )}
      </BlocksContainer>
      {FdRejectModalOp && (
        <ConfirmationModal
          subject="Reject friend request"
          message="Do you really want to decline your friend request?"
          functionExecute={removeFriend}
          setConfirmationModalOpen={setFdRejectModalOp}
          yesName="Reject"
        />
      )}
    </FriendsPreContainer>
  );
};

interface FriendsPreProps {
  friendsData: any;
  moorageFriendsData: any;
  setDeleteTarget: any;
  removeFriend: () => Promise<void>;
  FdRemoveModalOp: boolean;
  setFdRemoveModalOp: any;
  FdRejectModalOp: boolean;
  setFdRejectModalOp: any;
  acceptFriendRequest: (proposer: number) => Promise<void>;
}

export default React.memo(FriendsPre);
