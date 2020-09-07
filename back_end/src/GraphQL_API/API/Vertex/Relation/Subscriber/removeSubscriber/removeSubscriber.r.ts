import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    removeSubscriber: async (
      _: void,
      { author },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      try {
        await prisma.subscriber.deleteMany({
          where: {
            author,
            reader: req.user.user_id,
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
