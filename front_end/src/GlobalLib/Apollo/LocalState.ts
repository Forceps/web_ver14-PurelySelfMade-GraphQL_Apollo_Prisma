import gql from "graphql-tag";

export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false,
};

export const resolvers = {
  Mutation: {
    logUserIn: (_: any, { token }: any, { cache }: any) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: { isLoggedIn: true },
      });
      window.location.reload();
      return null;
    },
    logUserOut: (_: any, __: any, { cache }: any) => {
      localStorage.removeItem("token");
      window.location.href = "/";
      return null;
    },
  },
};

export const LOCAL_LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
