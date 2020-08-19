import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    countComments: async (_: void, { post_id }: { post_id: number }) => {
      try {
        const commentsCount = await prisma.comment.count({
          where: {
            post: post_id,
          },
        });
        return { commentsCount };
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
