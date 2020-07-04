import { PrismaClient } from "@prisma/client";
import { CommentingMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
import when_is_it_now from "../../../../GlobalLib/recycleFunction/when_is_it_now";
import { S_N_to_N } from "../../../../GlobalLib/recycleFunction/type_convert";
import { pubSub } from "../../../../server";
const prisma = new PrismaClient();

export default {
  Mutation: {
    commenting: async (
      _: void,
      args: CommentingMutationArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const user_id = S_N_to_N(req.user.user_id);
      const { chat_room_id, comment } = args;
      const { year, month, day, hour, minute, second } = when_is_it_now();

      try {
        const chat = await prisma.chat.create({
          data: {
            chat_room: { connect: { chat_room_id } },
            user_chatTouser: { connect: { user_id } },
            comment,
            year,
            month,
            day,
            hour,
            minute,
            second,
          },
          include: {
            user_chatTouser: true,
          },
        });
        pubSub.publish("chatSting", { chatListening: chat });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
