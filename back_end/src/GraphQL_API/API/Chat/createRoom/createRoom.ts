import { PrismaClient } from "@prisma/client";
import { CreateRoomMutationArgs } from "../../../LibForGQL/mergedSchema/types/graph";
import { S_N_to_N } from "src/GlobalLib/recycleFunction/type_convert";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createRoom: async (
      _: void,
      { name }: CreateRoomMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const user_id = S_N_to_N(request.user.user_id);

      try {
        const foundation = await prisma.chat_room.create({
          data: {
            name,
          },
        });
        await prisma.chat_member.create({
          data: {
            chat_room: {
              connect: { chat_room_id: foundation.chat_room_id },
            },
            user_chat_memberTouser: {
              connect: { user_id },
            },
          },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
