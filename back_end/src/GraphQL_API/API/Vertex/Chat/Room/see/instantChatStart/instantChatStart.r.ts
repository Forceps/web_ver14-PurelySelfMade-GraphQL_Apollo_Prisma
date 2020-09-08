import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    instantChatStart: async (
      _: void,
      { opponent },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const object = [req.user.user_id, opponent];
      try {
        const roomInYouAndI = await prisma.chat_room.findMany({
          where: {
            AND: [
              {
                chat_member: {
                  some: {
                    user: object[0],
                  },
                },
              },
              {
                chat_member: {
                  some: {
                    user: object[1],
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

        if (filtered.length === 0) {
          const newMade = await prisma.chat_room.create({
            data: {
              name: "chat room",
            },
          });
          for (let i = 0; i < object.length; i++) {
            await prisma.chat_member.create({
              data: {
                chat_room: {
                  connect: { chat_room_id: newMade.chat_room_id },
                },
                user_chat_memberTouser: {
                  connect: { user_id: object[i] },
                },
              },
            });
          }
          return newMade.chat_room_id;
        } else {
          return filtered[0].chat_room_id;
        }
      } catch (e) {
        console.log(e);
        return 0;
      }
    },
  },
};
