import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const IMG_GET = gql`
  query imgGet($skip: Int, $first: Int) {
    imgGet(skip: $skip, first: $first) {
      image_id
      address
      caption
    }
  }
`;
export const ImgGetUpToN = (skip?: number, first?: number) =>
  useQuery(IMG_GET, {
    variables: { skip, first },
  });
