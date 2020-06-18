import { PrismaClient, OrderByArg } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    seeWhosePosts: async (_, args) => {
      const { user } = args;
      try {
        return prisma.post.findMany({
          where: { user: { user_id: user } },
          include: { user: true, directory: true },
          orderBy: { post_id: OrderByArg.desc },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
