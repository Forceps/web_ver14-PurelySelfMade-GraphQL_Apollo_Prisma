import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    seeFriends: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { proposer } = args;
      try {
        let Rvalue;
        if (proposer) {
          Rvalue = await prisma.friend.findMany({
            where: {
              proposer: { user_id: proposer },
            },
            include: { respondent: true },
          });
        } else {
          Rvalue = await prisma.friend.findMany({
            where: {
              proposer: { user_id: user.user_id },
            },
            include: { respondent: true },
          });
        }
        let refinedRvalue = [];
        for (let i = 0; i < Rvalue.length; i++) {
          let { respondent: UserInfo } = Rvalue[i];
          refinedRvalue = refinedRvalue.concat(UserInfo);
        }
        return refinedRvalue;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
