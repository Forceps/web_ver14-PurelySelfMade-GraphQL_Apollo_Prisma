export default {
  Mutation: {
    logUserIn: (_: void, { token }: any, { cache }: any) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: { isLoggedIn: true },
      });
      window.location.reload();
      return null;
    },
    logUserOut: (_: void, __: void, { cache }: any) => {
      localStorage.removeItem("token");
      cache.writeData({
        data: { isLoggedIn: false },
      });
      window.location.href = "/";
      return null;
    },
  },
};
