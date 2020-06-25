import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    me: async (_: void, __: void, { request, isAuthenticated }: any) => {
      isAuthenticated(request);
      const { user } = request;
      try {
        const data = await prisma.user.findOne({
          where: { user_id: user.user_id },
        });
        return {
          ok: true,
          error: null,
          data,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: e.message,
          data: null,
        };
      }
    },
  },
};
