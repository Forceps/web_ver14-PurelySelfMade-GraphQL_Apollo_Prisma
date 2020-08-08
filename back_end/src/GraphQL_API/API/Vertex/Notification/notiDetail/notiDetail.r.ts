import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    notiDetail: async (
      _: void,
      { notification_id },
      { req, isAuthenticated }: contextType
    ) => {
      try {
        isAuthenticated(req);
        const result = await prisma.notification.findOne({
          where: {
            notification_id,
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
