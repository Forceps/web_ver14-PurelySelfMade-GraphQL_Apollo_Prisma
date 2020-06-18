import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface viewPostArgsTypes {
  post_id: number;
}
export default {
  Mutation: {
    viewPost: async (_: null, args: viewPostArgsTypes) => {
      const { post_id } = args;

      try {
        await prisma.executeRaw`UPDATE square_post.post SET views = views + 1 WHERE post_id = ${post_id}`;

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
