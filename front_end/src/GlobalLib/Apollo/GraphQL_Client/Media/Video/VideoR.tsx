import { gql, useQuery } from "@apollo/client";

export const VIDEO_GET = gql`
  query videoGetByDirId($skip: Int, $take: Int) {
    videoGetByDirId(skip: $skip, take: $take) {
      video_id
      address
      caption
      thumbnail
    }
  }
`;
export const VideoGetByDirIdUpToN = (skip?: number, take?: number) =>
  useQuery(VIDEO_GET, {
    variables: { skip, take },
  });
