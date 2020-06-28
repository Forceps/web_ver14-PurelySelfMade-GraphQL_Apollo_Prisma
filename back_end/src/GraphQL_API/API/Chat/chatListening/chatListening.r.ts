import { pubSub } from "../../../../server";
import { withFilter } from "graphql-subscriptions";
import { Chat_member } from "../../../LibForGQL/mergedSchema/types/graph";

export default {
  Subscription: {
    chatListening: {
      subscribe: withFilter(
        () => pubSub.asyncIterator("chatSting"),
        (payload, _, { context }) => {
          const {
            chatListening: { room },
          } = payload;
          const member: Chat_member[] = context.user.chat_member.filter(
            (p: Chat_member) => p.room == room
          );
          return member.length !== 0;
        }
      ),
    },
  },
};
