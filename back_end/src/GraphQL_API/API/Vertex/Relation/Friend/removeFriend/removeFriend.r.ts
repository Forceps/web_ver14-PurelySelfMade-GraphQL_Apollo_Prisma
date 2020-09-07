import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    removeFriend: async (
      _: void,
      { user_id },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        await prisma.friend.deleteMany({
          where: {
            OR: [
              {
                proposer: user_id,
                respondent: req.user.user_id,
              },
              {
                proposer: req.user.user_id,
                respondent: user_id,
              },
            ],
          },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
