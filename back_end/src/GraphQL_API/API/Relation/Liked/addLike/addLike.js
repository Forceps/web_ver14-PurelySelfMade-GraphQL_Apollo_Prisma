import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    addLike: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { post_id } = args;
      try {
        const already_exists = await prisma.liked.findMany({
          where: {
            user: { user_id: user.user_id },
            post: { post_id },
          },
        });
        if (already_exists.length === 0) {
          await prisma.liked.create({
            data: {
              user: {
                connect: { user_id: user.user_id },
              },
              post: {
                connect: { post_id },
              },
            },
          });
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
