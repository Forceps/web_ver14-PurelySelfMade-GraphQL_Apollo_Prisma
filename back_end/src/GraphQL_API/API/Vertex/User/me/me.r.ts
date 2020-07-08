import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    me: (_: void, __: void, { req, isAuthenticated }: any) => {
      isAuthenticated(req);
      const { user } = req;
      try {
        return prisma.user.findOne({ where: { user_id: user.user_id } });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
