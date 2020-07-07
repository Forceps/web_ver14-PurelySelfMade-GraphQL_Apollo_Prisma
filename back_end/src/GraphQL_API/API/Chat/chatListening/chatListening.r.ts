import { pubSub } from "../../../../server";
import { withFilter } from "graphql-subscriptions";

export default {
  Subscription: {
    chatListening: {
      subscribe: withFilter(
        () => pubSub.asyncIterator("chatSting"),
        (payload, { chat_room_id }, { context }) => {
          const {
            chatListening: { room },
          } = payload;
          return room === chat_room_id;
        }
      ),
    },
  },
};
