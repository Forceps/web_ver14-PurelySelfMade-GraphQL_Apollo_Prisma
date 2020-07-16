import { gql, useLazyQuery } from "@apollo/client";

export const AM_I_SUBSCRIBE_ONE = gql`
  query amISubscribeOne($author: Int!) {
    amISubscribeOne(author: $author) {
      subscriber_id
    }
  }
`;
export const AmISubscribeOneRequest = (author: number) =>
  useLazyQuery(AM_I_SUBSCRIBE_ONE, {
    variables: { author },
  });
