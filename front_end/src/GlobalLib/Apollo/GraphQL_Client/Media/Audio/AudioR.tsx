import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const MUSIC_GET = gql`
  query musicGet($skip: Int, $first: Int) {
    musicGet(skip: $skip, first: $first) {
      music_id
      address
      caption
    }
  }
`;
export const AudioGetUpToN = (skip?: number, first?: number) =>
  useQuery(MUSIC_GET, {
    variables: { skip, first },
  });
