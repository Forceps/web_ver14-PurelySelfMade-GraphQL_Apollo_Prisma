import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const SEE_COMMENTS = gql`
  query seeComments($post_id: Int!) {
    seeComments(post_id: $post_id) {
      comment_id
      user {
        user_id
        avatar
        username
      }
      comment
      likes
      year
      month
      day
      hour
      minute
    }
  }
`;
export const SeeCommentsRequest = (post_id: number) =>
  useQuery(SEE_COMMENTS, {
    variables: { post_id },
  });
