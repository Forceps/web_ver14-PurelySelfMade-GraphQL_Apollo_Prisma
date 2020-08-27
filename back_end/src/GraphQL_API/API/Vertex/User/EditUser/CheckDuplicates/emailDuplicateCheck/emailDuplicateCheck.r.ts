import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    emailDuplicateCheck: async (
      _: void,
      { email },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        const exist = await prisma.user.findMany({
          where: { email },
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
