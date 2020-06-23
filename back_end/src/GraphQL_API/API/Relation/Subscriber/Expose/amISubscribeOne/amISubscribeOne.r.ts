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
            author,
            reader: user.user_id,
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
