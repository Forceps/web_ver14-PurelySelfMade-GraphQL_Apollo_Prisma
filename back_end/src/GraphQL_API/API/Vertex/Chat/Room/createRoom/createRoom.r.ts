import { PrismaClient } from "@prisma/client";
import { S_N_to_N } from "../../../../../../GlobalLib/recycleFunction/type_convert";
const prisma = new PrismaClient();

export default {
  Mutation: {
    createRoom: async (
      _: void,
      { name, users },
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const user_id = S_N_to_N(req.user.user_id);

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
        for (let i = 0; i < users.length; i++) {
          await prisma.chat_member.create({
            data: {
              chat_room: {
                connect: { chat_room_id: foundation.chat_room_id },
              },
              user_chat_memberTouser: {
                connect: { user_id: users[i] },
              },
            },
          });
        }
        return foundation.chat_room_id;
      } catch (e) {
        console.log(e);
        return 0;
      }
    },
  },
};
