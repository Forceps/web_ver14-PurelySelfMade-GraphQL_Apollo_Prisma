import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    acceptFriendRequest: async (
      _: void,
      { proposer },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        await prisma.friend.updateMany({
          where: {
            proposer,
            respondent: req.user.user_id,
          },
          data: {
            consent: true,
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
