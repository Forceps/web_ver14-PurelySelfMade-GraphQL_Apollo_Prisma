import React, { useState } from "react";
import BlogRelationPre from "./BlogRelationPre";
import { SeeFriendsRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Friend/FriendR";
import { useMyInfo } from "../../../../GlobalLib/Context/UserContext/Me";
import {
  See_I_subsRequest,
  See_My_SubsRequest,
} from "../../../../GlobalLib/Apollo/GraphQL_Client/Relation/Subscriber/SubscriberR";

export default ({ user_id }: BlogRelationConProps) => {
  const { MEdata, MEloading } = useMyInfo();
  const [RelationSortBy, setRelationSortBy] = useState("all");
  const [AddFriendConfirm, setAddFriendConfirm] = useState(true);
  const { data: friendsData, loading: friendsLoading } = SeeFriendsRequest(
    user_id
  );
  const { data: I_SubsData, loading: I_SubsLoading } = See_I_subsRequest(
    user_id
  );
  const { data: My_SubsData, loading: My_SubsLoading } = See_My_SubsRequest(
    user_id
  );
  return MEloading ? (
    <div />
  ) : (
    <BlogRelationPre
      RelationSortBy={RelationSortBy}
      setRelationSortBy={setRelationSortBy}
      I_SubsData={I_SubsData?.see_I_Subs}
      I_SubsLoading={I_SubsLoading}
      My_SubsData={My_SubsData?.see_My_Subs}
      My_SubsLoading={My_SubsLoading}
      friendsData={friendsData?.seeFriends}
      friendsLoading={friendsLoading}
      MEdata={MEdata}
      user_id={user_id}
      AddFriendConfirm={AddFriendConfirm}
      setAddFriendConfirm={setAddFriendConfirm}
    />
  );
};

interface BlogRelationConProps {
  user_id: number;
}
