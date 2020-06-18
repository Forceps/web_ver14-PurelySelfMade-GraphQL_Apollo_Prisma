import gql from "graphql-tag";

export const LOGIN_CHECK = gql`
  {
    isLoggedIn @client
  }
`;
