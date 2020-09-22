import React from "react";
import { Platform } from "react-native";
import Icon from "../../../../Components/ElementEtc/Icon";
import MessagesLink from "../../../../Components/ElementEtc/MessagesLink";
import { SeePostAllRequest } from "../../../../GlobalLib/Apollo/GraphQL_Client/Post/PostRseries/PostR";
import StackFactory from "../../../Navigation/Stack/StackFactory";
import HomePre from "./HomePre";

const HomeScreen = () => {
  const { data: newPostData, loading: newPostLoading } = SeePostAllRequest(
    0,
    10
  );
  return (
    <HomePre
      newPostData={newPostData?.seePosts}
      newPostLoading={newPostLoading}
    />
  );
};

export default () => {
  return (
    <StackFactory
      initialRoute={HomeScreen}
      customConfig={{
        headerShown: false,
      }}
    />
  );
};
