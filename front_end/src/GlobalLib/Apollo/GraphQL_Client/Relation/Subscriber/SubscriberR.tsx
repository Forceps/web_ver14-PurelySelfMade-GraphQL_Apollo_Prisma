import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const AM_I_SUBSCRIBE_ONE = gql`
  query amISubscribeOne($author: Int!) {
    amISubscribeOne(author: $author) {
      subscriber_id
    }
  }
`;
export const AmISubscribeOneRequest = (author: number) =>
  useQuery(AM_I_SUBSCRIBE_ONE, {
    variables: { author },
  });
