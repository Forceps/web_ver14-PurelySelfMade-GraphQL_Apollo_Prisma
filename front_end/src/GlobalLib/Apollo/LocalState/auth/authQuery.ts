import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const authState_defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false,
};

export const LOGIN_CHECK = gql`
  {
    isLoggedIn @client
  }
`;
export const IsLoggedIn = () => useQuery(LOGIN_CHECK).data?.isLoggedIn;

export const LOCAL_LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
