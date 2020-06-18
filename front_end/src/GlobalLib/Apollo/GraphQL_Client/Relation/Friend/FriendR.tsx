import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";

export const SEE_MY_FRIENDS = gql`
  {
    seeFriends {
      user_id
      username
      avatar
      back_img
    }
  }
`;
export const SEE_WHOSE_FRIENDS = gql`
  query seeFriends($proposer: Int!) {
    seeFriends(proposer: $proposer) {
      user_id
      username
      avatar
      back_img
    }
  }
`;
export const SeeWhoseFriendsRequest = (proposer: number) =>
  useLazyQuery(SEE_WHOSE_FRIENDS, {
    variables: { proposer },
  });
