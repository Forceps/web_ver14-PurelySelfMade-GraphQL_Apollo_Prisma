import React, { useState } from "react";
import FriendsPre from "./FriendsPre";
import { useMyInfo } from "../../../../../../../GlobalLib/Context/UserContext/Me";
import { S_N_to_N } from "../../../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import {
  SeeFriendsRequest,
  FriendRequestReceivedRequest,
} from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendR";
import { useMutation } from "@apollo/client";
import {
  REMOVE_FRIEND,
  ACCEPT_FRIEND_REQUEST,
} from "../../../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendCUD";

const FriendsCon = () => {
  const {
    MEdata: { user_id },
  } = useMyInfo();
  const [FdRemoveModalOp, setFdRemoveModalOp] = useState(false);
  const [FdRejectModalOp, setFdRejectModalOp] = useState(false);
  const [DeleteTarget, setDeleteTarget] = useState(0);
  const {
    data: friendsData,
    loading: friendsLoading,
    refetch: friendsRefetch,
  } = SeeFriendsRequest(S_N_to_N(user_id));
  const {
    data: moorageFriendsData,
    loading: moorageFriendsLoading,
    refetch: moorageFriendsRefetch,
  } = FriendRequestReceivedRequest();

  const [acceptFriendRequestMutation] = useMutation(ACCEPT_FRIEND_REQUEST);
  const acceptFriendRequest = async (proposer: number) => {
    try {
      await acceptFriendRequestMutation({
        variables: {
          proposer,
        },
      });
      moorageFriendsRefetch();
      friendsRefetch();
    } catch (e) {
      console.log(e);
    }
  };

  const [removeFriendMutation] = useMutation(REMOVE_FRIEND);
  const removeFriend = async () => {
    if (DeleteTarget !== 0) {
      try {
        await removeFriendMutation({
          variables: {
            user_id: DeleteTarget,
          },
        });
        if (FdRemoveModalOp) {
          friendsRefetch();
        } else if (FdRejectModalOp) {
          moorageFriendsRefetch();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return friendsLoading || moorageFriendsLoading ? (
    <div />
  ) : (
    <FriendsPre
      friendsData={friendsData?.seeFriends}
      moorageFriendsData={moorageFriendsData?.friendRequestReceived}
      setDeleteTarget={setDeleteTarget}
      removeFriend={removeFriend}
      FdRemoveModalOp={FdRemoveModalOp}
      setFdRemoveModalOp={setFdRemoveModalOp}
      FdRejectModalOp={FdRejectModalOp}
      setFdRejectModalOp={setFdRejectModalOp}
      acceptFriendRequest={acceptFriendRequest}
    />
  );
};

export default FriendsCon;
