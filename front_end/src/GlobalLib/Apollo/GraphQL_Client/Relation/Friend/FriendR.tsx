import { gql, useLazyQuery, useQuery } from "@apollo/client";

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

export const FRIEND_CHECK = gql`
  query friendCheck($user_id: Int!) {
    friendCheck(user_id: $user_id) {
      consent
    }
  }
`;
export const FriendCheckLazyRequest = (user_id: number) =>
  useLazyQuery(FRIEND_CHECK, {
    variables: { user_id },
  });
export const FriendCheckRequest = (user_id: number) =>
  useQuery(FRIEND_CHECK, {
    variables: { user_id },
  });
