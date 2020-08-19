import { gql, useQuery } from "@apollo/client";

export const POSTS_BY_DIR_ID = gql`
  query postsByDirId($author_id: Int!, $directory_id: Int!) {
    postsByDirId(author_id: $author_id, directory_id: $directory_id) {
      post_id
      caption
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
export const PostsByDirIdRequest = (author_id: number, directory_id: number) =>
  useQuery(POSTS_BY_DIR_ID, {
    variables: { author_id, directory_id },
  });
