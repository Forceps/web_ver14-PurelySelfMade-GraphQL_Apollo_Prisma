import { pubSub } from "../../../../server";

export default {
  Subscription: {
    chatListening: {
      subscribe: (_: void, __: void) => pubSub.asyncIterator("chatSting"),
    },
  },
};
