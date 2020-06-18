import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface seeWhosePostsArgsTypes {
  user: number;
}
export default {
  Query: {
    seeWhosePosts: async (_: null, args: seeWhosePostsArgsTypes) => {
      const { user } = args;
      try {
        return prisma.post.findMany({
          where: { user },
          include: { user_postTouser: true, directory_directoryTopost: true },
          orderBy: { post_id: "desc" },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
