import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    watched: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { post_id } = args;
      try {
        await prisma.watched.create({
          data: {
            user: {
              connect: { user_id: user.user_id },
            },
            post: {
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
