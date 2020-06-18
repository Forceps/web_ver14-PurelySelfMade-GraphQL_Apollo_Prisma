import { PrismaClient, OrderByArg } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    seePosts: async () => {
      try {
        return prisma.post.findMany({
          include: { user: true, directory: true },
          orderBy: { post_id: OrderByArg.desc },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
