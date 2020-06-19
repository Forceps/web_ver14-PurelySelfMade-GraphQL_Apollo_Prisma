import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    seePosts: async () => {
      try {
        const result = await prisma.post.findMany({
          include: { user_postTouser: true, directory_directoryTopost: true },
          orderBy: { post_id: "desc" },
        });
        return result;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
