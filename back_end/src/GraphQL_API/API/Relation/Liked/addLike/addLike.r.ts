import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface addLikeArgsTypes {
  post_id: number;
}
export default {
  Mutation: {
    addLike: async (
      _: null,
      args: addLikeArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { post_id } = args;
      try {
        const already_exists = await prisma.liked.findMany({
          where: {
            user: user.user_id,
            post: post_id,
          },
        });
        if (already_exists.length === 0) {
          await prisma.liked.create({
            data: {
              user_likedTouser: {
                connect: { user_id: user.user_id },
              },
              post_likedTopost: {
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
