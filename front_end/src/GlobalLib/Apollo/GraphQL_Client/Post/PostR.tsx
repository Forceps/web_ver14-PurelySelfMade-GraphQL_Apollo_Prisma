import gql from "graphql-tag";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";

export const SEE_POST = gql`
  query seePost($post_id: Int!) {
    seePost(post_id: $post_id) {
      post_id
      caption
      content
      directory_directoryTopost {
        directory_id
      }
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
export const SeePostLazyRequest = (post_id: number) =>
  useLazyQuery(SEE_POST, {
    variables: { post_id },
  });
export const SeePostRequest = (post_id: number) =>
  useQuery(SEE_POST, {
    variables: { post_id },
  });

export const SEE_POST_ALL = gql`
  {
    seePosts {
      post_id
      caption
      content
      user_postTouser {
        user_id
        username
        avatar
      }
      directory_directoryTopost {
        directory_id
      }
      views
      likes
    }
  }
`;
export const SeePostAllRequest = () => useQuery(SEE_POST_ALL);

export const SEE_WHOSE_POSTS = gql`
  query seeWhosePosts($user: Int!) {
    seeWhosePosts(user: $user) {
      post_id
      caption
      content
      user_postTouser {
        user_id
        username
        avatar
      }
      directory_directoryTopost {
        directory_id
      }
      views
      likes
    }
  }
`;
export const SeeWhosePostsLazyRequest = (user: number) =>
  useLazyQuery(SEE_WHOSE_POSTS, {
    variables: { user },
  });
export const SeeWhosePostsRequest = (user: number) =>
  useQuery(SEE_WHOSE_POSTS, {
    variables: { user },
  });

export const SEE_SEARCH_POSTS = gql`
  query searchPost($keyWord: String!) {
    searchPost(keyWord: $keyWord) {
      post_id
      caption
      content
      user_postTouser {
        user_id
        username
        avatar
      }
      directory_directoryTopost {
        directory_id
      }
      views
      likes
    }
  }
`;
export const SeeSearchPostsRequest = (keyWord: string, user_id?: number) =>
  useLazyQuery(SEE_SEARCH_POSTS, {
    variables: { keyWord, user_id },
  });
