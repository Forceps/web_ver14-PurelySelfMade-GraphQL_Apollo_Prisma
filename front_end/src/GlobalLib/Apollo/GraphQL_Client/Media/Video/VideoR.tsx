import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const VIDEO_GET = gql`
  query videoGet($skip: Int, $first: Int) {
    videoGet(skip: $skip, first: $first) {
      video_id
      address
      caption
      thumbnail
    }
  }
`;
export const VideoGetUpToN = (skip?: number, first?: number) =>
  useQuery(VIDEO_GET, {
    variables: { skip, first },
  });
