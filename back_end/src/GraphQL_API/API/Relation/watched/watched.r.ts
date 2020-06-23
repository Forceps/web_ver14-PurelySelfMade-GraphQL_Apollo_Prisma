import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface watchedArgsTypes {
  post_id: number;
}
export default {
  Mutation: {
    watched: async (
      _: null,
      args: watchedArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { post_id } = args;
      try {
        await prisma.watched.create({
          data: {
            user_userTowatched: {
              connect: { user_id: user.user_id },
            },
            post_postTowatched: {
              connect: { post_id },
            },
          },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
