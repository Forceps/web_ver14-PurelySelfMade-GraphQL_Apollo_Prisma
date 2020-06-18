import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface amISubscribeOneArgsTypes {
  author: number;
}
export default {
  Query: {
    amISubscribeOne: async (
      _: null,
      args: amISubscribeOneArgsTypes,
      { request, isAuthenticated }: any
    ) => {
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
