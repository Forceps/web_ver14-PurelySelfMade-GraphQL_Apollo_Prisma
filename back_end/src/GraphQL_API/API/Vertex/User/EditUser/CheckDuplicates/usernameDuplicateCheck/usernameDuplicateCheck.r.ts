import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    usernameDuplicateCheck: async (
      _: void,
      { username },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        const exist = await prisma.user.findMany({
          where: { username },
          select: {
            user_id: true,
          },
        });
        if (exist.length === 0) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
