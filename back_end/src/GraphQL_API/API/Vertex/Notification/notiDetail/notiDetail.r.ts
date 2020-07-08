import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    notiDetail: async (
      _: void,
      { notification_id },
      { req, isAuthenticated }: any
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
