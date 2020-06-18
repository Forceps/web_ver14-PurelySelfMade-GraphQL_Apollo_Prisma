import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Mutation: {
    viewPost: async (_, args) => {
      const { post_id } = args;

      try {
        await prisma.raw`UPDATE square_post.post SET views = views + 1 WHERE post_id = ${post_id}`;

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
