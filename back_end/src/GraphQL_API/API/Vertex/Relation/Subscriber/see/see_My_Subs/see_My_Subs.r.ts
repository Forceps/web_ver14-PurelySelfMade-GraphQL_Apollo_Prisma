import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    see_My_Subs: async (
      _: void,
      { user_id }: { user_id: number },
      { req, isAuthenticated }: contextType
    ) => {
      try {
        const TheySubscribeMe = prisma.user.findMany({
          where: {
            subscriber_subscriber_readerTouser: {
              some: {
                user_subscriber_authorTouser: {
                  user_id: user_id === 0 ? req.user.user_id : user_id,
                },
              },
            },
          },
        });
        return TheySubscribeMe;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
