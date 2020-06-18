import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    amISubscribeOne: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { author } = args;
      try {
        return prisma.subscriber.findMany({
          where: {
            author: { user_id: author },
            reader: { user_id: user.user_id },
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
