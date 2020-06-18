import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    likePost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { post_id } = args;

      try {
        await prisma.raw`UPDATE square_post.post SET likes = likes + 1 WHERE post_id = ${post_id}`;

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
