import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    setEmail: async (
      _: void,
      { email },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        await prisma.user.update({
          data: {
            email,
          },
          where: { user_id: req.user.user_id },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
