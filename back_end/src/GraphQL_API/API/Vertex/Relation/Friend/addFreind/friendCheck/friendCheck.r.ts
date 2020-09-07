import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    friendCheck: async (
      _: void,
      { user_id }: { user_id: number },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        const result = await prisma.friend.findMany({
          where: {
            OR: [
              {
                proposer: user_id,
                respondent: req.user.user_id,
              },
              {
                respondent: user_id,
                proposer: req.user.user_id,
              },
            ],
          },
          select: {
            consent: true,
          },
        });
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
