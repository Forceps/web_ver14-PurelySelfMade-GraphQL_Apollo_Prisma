import { gql, useLazyQuery, useQuery } from "@apollo/client";

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

export const SEE_I_SUBS = gql`
  query see_I_Subs {
    see_I_Subs {
      user_id
      avatar
      username
    }
  }
`;
export const See_I_subsRequest = () => useQuery(SEE_I_SUBS);
export const SEE_MY_SUBS = gql`
  query see_My_Subs {
    see_My_Subs {
      user_id
      avatar
      username
    }
  }
`;
export const See_My_SubsRequest = () => useQuery(SEE_MY_SUBS);
