import { gql, useLazyQuery, useQuery } from "@apollo/client";

export const POST_RECOMMEND_TO_USER = gql`
  query postRecommendToUser($user_id: Int!) {
    postRecommendToUser(user_id: $user_id) {
      post_id
      caption
      content
      user_postTouser {
        user_id
        avatar
        username
      }
      views
      likes
    }
  }
`;
export const PostRecommendToUserLazyRequest = (user_id: number) =>
  useLazyQuery(POST_RECOMMEND_TO_USER, {
    variables: { user_id },
  });
export const PostRecommendToUserRequest = (user_id: number) =>
  useQuery(POST_RECOMMEND_TO_USER, {
    variables: { user_id },
  });
