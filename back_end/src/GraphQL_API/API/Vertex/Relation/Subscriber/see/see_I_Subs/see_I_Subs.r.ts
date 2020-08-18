import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    see_I_Subs: async (
      _: void,
      __: void,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { user } = req;
      try {
        const ISubscribeThem = prisma.user.findMany({
          where: {
            subscriber_subscriber_authorTouser: {
              some: {
                user_subscriber_readerTouser: {
                  user_id: user.user_id,
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
