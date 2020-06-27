import { pubSub } from "../../../../server";

export default {
  Subscription: {
    chatListening: {
      subscribe: (_: void, __: void, { request, isAuthenticated }: any) => {
        // isAuthenticated(request);
        return pubSub.asyncIterator("chatSting");
      },
    },
  },
};
