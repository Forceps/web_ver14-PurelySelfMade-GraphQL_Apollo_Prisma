import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import SearchBar from "../../components/SearchBar";
import {
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  RefreshControl,
  View,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import Loading from "../../../Components/ElementEtc/Effect/Loading";
import { useNavigation } from "@react-navigation/native";

export const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      id
      files {
        url
      }
      likeCount
      commentCount
    }
  }
`;

const NoResult = styled.Text`
  opacity: 0.6;
  font-size: 20px;
`;
const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;
const SearchContainer = styled(Wrapper)`
  padding: 10px;
`;
const NoResultContainer = styled(Wrapper)`
  padding: 10px;
  min-height: ${constants.height / 1.6};
  padding: 10px;
`;
const ResultContainer = styled.View`
  min-height: ${constants.height / 1.6};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default () => {
  const navigation = useNavigation();
  const [term, setTerm] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, refetch } = useQuery(SEARCH, {
    variables: {
      term,
    },
    skip: !shouldFetch,
    fetchPolicy: "network-only",
  });
  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await refetch({ variables: { term } });
    } catch (err) {
      console.log(err);
    } finally {
      setRefreshing(false);
    }
  };
  const onChange = (text: string) => {
    setTerm(text);
    setShouldFetch(false);
    navigation.setParams({
      term: text,
    });
  };
  const onSubmit = () => {
    setShouldFetch(true);
  };
  // console.log(loading, data);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    >
      {loading ? (
        <Loading />
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <SearchContainer>
              <SearchBar value={term} onChange={onChange} onSubmit={onSubmit} />
            </SearchContainer>
            <View>
              {data && data.searchPost && data.searchPost.length ? (
                <ResultContainer>
                  {data.searchPost.map((post) => (
                    <SquarePhoto key={post.id} {...post} />
                  ))}
                </ResultContainer>
              ) : (
                <NoResultContainer>
                  <NoResult>No result</NoResult>
                </NoResultContainer>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </ScrollView>
  );
};
