import { PrismaClient } from "@prisma/client";
import { S_N_to_N } from "../../../../../../GlobalLib/recycleFunction/type_convert";
const prisma = new PrismaClient();

export default {
  Query: {
    seeFriends: async (_: void, { user_id }, { req, isAuthenticated }: any) => {
      isAuthenticated(req);
      const My_id = S_N_to_N(req.user.user_id);
      try {
        const Rvalue1 = await prisma.user.findMany({
          where: {
            friend_friend_proposerTouser: {
              some: {
                proposer: user_id ? user_id : My_id,
                consent: true,
              },
            },
          },
        });
        const Rvalue2 = await prisma.user.findMany({
          where: {
            friend_friend_proposerTouser: {
              some: {
                respondent: user_id ? user_id : My_id,
                consent: true,
              },
            },
          },
        });
        const Rvalue = [...Rvalue1, ...Rvalue2];
        return Rvalue;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
