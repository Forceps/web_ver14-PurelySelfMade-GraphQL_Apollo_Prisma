import { PrismaClient } from "@prisma/client";
import { S_N_to_N } from "../../../../GlobalLib/recycleFunction/type_convert";
const prisma = new PrismaClient();

export default {
  Query: {
    seeRooms: async (_: void, __: void, { req, isAuthenticated }: any) => {
      try {
        isAuthenticated(req);
        const user_id = S_N_to_N(req.user.user_id);
        const result = await prisma.chat_room.findMany({
          where: {
            chat_member: {
              some: {
                user: user_id,
              },
            },
          },
          include: { chat: true, chat_member: true },
          orderBy: { chat_room_id: "desc" },
        });
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
