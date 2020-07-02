import { PrismaClient } from "@prisma/client";
import { S_N_to_N } from "../../../../GlobalLib/recycleFunction/type_convert";
const prisma = new PrismaClient();

export default {
  Query: {
    talkComrades: async (
      _: void,
      { skip, take },
      { req, isAuthenticated }: any
    ) => {
      try {
        isAuthenticated(req);
        const user_id = S_N_to_N(req.user.user_id);
        const result = await prisma.user.findMany({
          where: {
            chat_member: {
              some: {
                user: user_id,
              },
            },
          },
          skip: skip ? skip : 0,
          take: take ? take : 6,
        });
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
