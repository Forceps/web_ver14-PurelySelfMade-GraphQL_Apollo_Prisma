import React, { useState } from "react";
import styled from "styled-components/native";
import { useQuery } from "react-apollo-hooks";
import { ScrollView, RefreshControl } from "react-native";
import Post from "../../components/Post";
import { POST_FRAGMENT } from "../../fragments";
import Loading from "../../../Components/ElementEtc/Effect/Loading";

export const FEED_QUERY = gql`
  {
    seeFeed {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default () => {
  const [refreshing, setRefreshing] = useState(false);
  const { loading, data, refetch } = useQuery(FEED_QUERY);
  const refresh = async () => {
    try {
      setRefreshing(true);
      await refetch();
    } catch (err) {
      console.log(err);
    } finally {
      setRefreshing(false);
    }
  };
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refresh} />
      }
    >
      {loading ? (
        <Loading />
      ) : (
        data &&
        data.seeFeed &&
        data.seeFeed.map((post) => <Post key={post.id} {...post} />)
      )}
    </FlatList> //ScrollView보다 같은 기능을 하는 FlatList가 훨씬 더 성능이 좋다. 나중에 활용하게 되면 FlatList를 사용할 것.
  );
};
