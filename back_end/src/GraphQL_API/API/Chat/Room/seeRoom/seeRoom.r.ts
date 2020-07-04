import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    seeRoom: async (
      _: void,
      { chat_room_id },
      { req, isAuthenticated }: any
    ) => {
      try {
        isAuthenticated(req);
        const result = await prisma.chat_room.findOne({
          where: {
            chat_room_id,
          },
        });
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
