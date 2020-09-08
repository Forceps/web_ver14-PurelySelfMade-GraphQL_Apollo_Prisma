import React, { useState } from "react";
import CurrentFriendsPre from "./CurrentFriendsPre";
import { useMyInfo } from "../../../../../../../../../GlobalLib/Context/UserContext/Me";
import { S_N_to_N } from "../../../../../../../../../GlobalLib/RecycleFunction/etc/type_convert";
import { SeeFriendsRequest } from "../../../../../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendR";
import { useMutation } from "@apollo/client";
import { REMOVE_FRIEND } from "../../../../../../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendCUD";

const CurrentFriendsCon = () => {
  const { MEdata } = useMyInfo();
  const [RoomEnter, setRoomEnter] = useState(false);
  const [ParticularRoom, setParticularRoom] = useState(0);
  const [FdRemoveModalOp, setFdRemoveModalOp] = useState(false);
  const [DeleteTarget, setDeleteTarget] = useState(0);

  const {
    data: friendsData,
    loading: friendsLoading,
    refetch: friendsRefetch,
  } = SeeFriendsRequest(S_N_to_N(MEdata.user_id));

  const [removeFriendMutation] = useMutation(REMOVE_FRIEND);
  const removeFriend = async () => {
    if (DeleteTarget !== 0) {
      try {
        await removeFriendMutation({
          variables: {
            user_id: DeleteTarget,
          },
        });
        friendsRefetch();
      } catch (e) {
        console.log(e);
      }
    }
  };
  const {} = FindRoomByUserIdRequest();
  const chatStart = () => {};

  return friendsLoading ? (
    <div />
  ) : (
    <CurrentFriendsPre
      friendsData={friendsData}
      setFdRemoveModalOp={setFdRemoveModalOp}
      setDeleteTarget={setDeleteTarget}
      FdRemoveModalOp={FdRemoveModalOp}
      removeFriend={removeFriend}
      RoomEnter={RoomEnter}
      setRoomEnter={setRoomEnter}
      ParticularRoom={ParticularRoom}
      setParticularRoom={setParticularRoom}
    />
  );
};

export default CurrentFriendsCon;
