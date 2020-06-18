import gql from "graphql-tag";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";

export const SEE_USER = gql`
  query seeUser($user_id: Int!) {
    seeUser(user_id: $user_id) {
      username
      email
      avatar
      back_img
    }
  }
`;
export const SeeUserRequest = (e: number) =>
  useQuery(SEE_USER, {
    variables: { user_id: e },
  });

export const SEARCH_USER = gql`
  query searchUser($keyWord: String!) {
    searchUser(keyWord: $keyWord) {
      user_id
      username
      avatar
      back_img
    }
  }
`;
export const SearchUserRequest = (keyWord: string) =>
  useLazyQuery(SEARCH_USER, {
    variables: { keyWord },
  });

export const ME = gql`
  query me {
    me {
      user_id
      username
      email
      avatar
      back_img
    }
  }
`;
