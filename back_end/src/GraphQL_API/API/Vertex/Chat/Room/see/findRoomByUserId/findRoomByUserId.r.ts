import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    findRoomByUserId: async (
      _: void,
      { opponent },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        const roomInYouAndI = await prisma.chat_room.findMany({
          where: {
            AND: [
              {
                chat_member: {
                  some: {
                    user: req.user.user_id,
                  },
                },
              },
              {
                chat_member: {
                  some: {
                    user: opponent,
                  },
                },
              },
            ],
          },
          include: {
            chat_member: true,
          },
        });
        const filtered = roomInYouAndI.filter(
          (i) => i.chat_member.length === 2
        );
        const result = filtered[0].chat_room_id;
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
