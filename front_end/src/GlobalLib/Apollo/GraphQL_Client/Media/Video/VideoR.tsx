import { gql, useQuery } from "@apollo/client";

export const VIDEO_GET = gql`
  query videoGet($skip: Int, $take: Int) {
    videoGet(skip: $skip, take: $take) {
      video_id
      address
      caption
      thumbnail
    }
  }
`;
export const VideoGetUpToN = (skip?: number, take?: number) =>
  useQuery(VIDEO_GET, {
    variables: { skip, take },
  });
