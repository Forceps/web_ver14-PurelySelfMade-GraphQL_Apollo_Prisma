import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    see_I_Subs: async (
      _: void,
      { user_id }: { user_id: number },
      { req, isAuthenticated }: contextType
    ) => {
      try {
        const ISubscribeThem = prisma.user.findMany({
          where: {
            subscriber_subscriber_authorTouser: {
              some: {
                user_subscriber_readerTouser: {
                  user_id: user_id === 0 ? req.user.user_id : user_id,
                },
              },
            },
          },
        });
        return ISubscribeThem;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
