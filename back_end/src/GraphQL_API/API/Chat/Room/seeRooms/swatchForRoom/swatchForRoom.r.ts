import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    swatchForRoom: async (
      _: void,
      { chat_room_id },
      { req, isAuthenticated }: any
    ) => {
      try {
        isAuthenticated(req);
        const result = await prisma.chat.findMany({
          where: {
            room: chat_room_id,
          },
          include: {
            user_chatTouser: true,
          },
          orderBy: { chat_id: "desc" },
          take: 2,
        });
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
