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
            chat_room: {
              chat_room_id,
            },
          },
          include: {
            user_chatTouser: true,
          },
          orderBy: { chat_id: "desc" },
          take: 1,
        });
        return result[0];
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
