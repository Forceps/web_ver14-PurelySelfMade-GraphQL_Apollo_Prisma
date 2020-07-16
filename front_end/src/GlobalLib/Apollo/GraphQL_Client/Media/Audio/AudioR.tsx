import { gql, useQuery } from "@apollo/client";

export const MUSIC_GET = gql`
  query musicGet($skip: Int, $take: Int) {
    musicGet(skip: $skip, take: $take) {
      music_id
      address
      caption
    }
  }
`;
export const AudioGetUpToN = (skip?: number, take?: number) =>
  useQuery(MUSIC_GET, {
    variables: { skip, take },
  });
