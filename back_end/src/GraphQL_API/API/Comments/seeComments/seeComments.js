import { PrismaClient, OrderByArg } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    seeComments: async (_, args) => {
      const { post_id } = args;
      try {
        return prisma.comment.findMany({
          where: { post: { post_id } },
          include: { user: true },
          orderBy: { comment_id: OrderByArg.desc },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
