import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    deletePost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { post_id } = args;
      try {
        await prisma.raw`DELETE FROM square_post.post WHERE post_id = ${post_id};`;
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
