import React from "react";
import ProfileSectionPre from "./ProfileSectionPre";
import { useMutation } from "@apollo/react-hooks";
import { ADD_SUBSCRIBER } from "../../../GlobalLib/Apollo/GraphQL_Client/Relation/Subscriber/SubscriberCUD";
import {
  AmISubscribeOneRequest,
  AM_I_SUBSCRIBE_ONE,
} from "../../../GlobalLib/Apollo/GraphQL_Client/Relation/Subscriber/SubscriberR";

export default ({
  user_id,
  UserData,
  UserDataLoading,
  Mode,
  setMode,
}: ProfileSectionCon) => {
  const {
    data: yesISubscribeData,
    loading: yesISubscribeLoad,
  } = AmISubscribeOneRequest(user_id);
  const yesISubscribe =
    !yesISubscribeLoad && yesISubscribeData?.amISubscribeOne.length !== 0;
  const [addSubscriberMutation] = useMutation(ADD_SUBSCRIBER, {
    refetchQueries: [
      {
        query: AM_I_SUBSCRIBE_ONE,
        variables: { author: user_id },
      },
    ],
  });
  const addSubscriber = () => {
    try {
      addSubscriberMutation({
        variables: {
          author: user_id,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ProfileSectionPre
      user_id={user_id}
      UserData={UserData?.seeUser}
      UserDataLoading={UserDataLoading}
      addSubscriber={addSubscriber}
      yesISubscribe={yesISubscribe}
      Mode={Mode}
      setMode={setMode}
    />
  );
};

interface ProfileSectionCon {
  user_id: number;
  UserData: any;
  UserDataLoading: boolean;
  Mode: string;
  setMode: any;
}
