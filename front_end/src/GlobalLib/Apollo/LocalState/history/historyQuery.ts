import gql from "graphql-tag";

export const historyState_defaults = {
  history: [],
};

export const LOGIN_CHECK = gql`
  {
    isLoggedIn @client
  }
`;

export const LOCAL_LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
