import { PrismaClient } from "@prisma/client";
import { CreateRoomMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createRoom: async (
      _: void,
      { name }: CreateRoomMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;

      try {
        await prisma.chat_room.create({
          data: {
            name
          },
        });
        await prisma.chat.
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
