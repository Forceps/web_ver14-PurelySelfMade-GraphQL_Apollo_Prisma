import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface likePostArgsTypes {
  post_id: number;
}
export default {
  Mutation: {
    likePost: async (
      _: null,
      args: likePostArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { post_id } = args;

      try {
        await prisma.executeRaw`UPDATE square_post.post SET likes = likes + 1 WHERE post_id = ${post_id}`;

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
