import { gql, useQuery } from "@apollo/client";

export const SUBSCRIPTION_POST = gql`
  query subscriptionPost {
    subscriptionPost {
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
      face
      face_type
    }
  }
`;
export const SubscriptionPostRequest = () => useQuery(SUBSCRIPTION_POST);
