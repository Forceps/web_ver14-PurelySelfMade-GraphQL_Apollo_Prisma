import gql from "graphql-tag";

export const authState_defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")),
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
