import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    me: (_: null, __: null, { request, isAuthenticated }: any) => {
      isAuthenticated(request);
      const { user } = request;
      try {
        return prisma.user.findOne({ where: { user_id: user.user_id } });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
