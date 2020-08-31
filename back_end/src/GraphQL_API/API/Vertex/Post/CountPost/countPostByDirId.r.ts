import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    countPostByDirId: async (_: void, { author_id, directory_id }) => {
      try {
        const postCount = await prisma.post.count({
          where:
            directory_id === 0
              ? {
                  user: author_id,
                }
              : {
                  directory: directory_id,
                },
        });
        return postCount;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
