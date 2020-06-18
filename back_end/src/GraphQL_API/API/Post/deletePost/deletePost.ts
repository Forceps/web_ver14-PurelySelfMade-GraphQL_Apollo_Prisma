import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface deletePostArgsTypes {
  post_id: number;
}
export default {
  Mutation: {
    deletePost: async (
      _: null,
      args: deletePostArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { post_id } = args;
      try {
        await prisma.executeRaw`DELETE FROM square_post.post WHERE post_id = ${post_id};`;
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
