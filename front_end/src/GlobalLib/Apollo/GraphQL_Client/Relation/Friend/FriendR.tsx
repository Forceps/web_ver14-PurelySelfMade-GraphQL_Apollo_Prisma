import gql from "graphql-tag";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";

export const SEE_FRIENDS = gql`
  query seeFriends($user_id: Int!) {
    seeFriends(user_id: $user_id) {
      user_id
      username
      avatar
    }
  }
`;
export const SeeFriendsLazyRequest = (user_id: number) =>
  useLazyQuery(SEE_FRIENDS, {
    variables: { user_id },
  });
export const SeeFriendsRequest = (user_id?: number) =>
  useQuery(SEE_FRIENDS, {
    variables: { user_id },
  });
