import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    friendRequestReceived: async (
      _: void,
      __: void,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        const Rvalue = await prisma.user.findMany({
          where: {
            friend_friend_proposerTouser: {
              some: {
                respondent: req.user.user_id,
                consent: false,
              },
            },
          },
        });
        return Rvalue;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
