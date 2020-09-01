import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    postsByDirId: async (
      _: void,
      { author_id, directory_id, sortBy, skip, take }
    ) => {
      try {
        const p_by_dir_id = await prisma.post.findMany({
          where:
            directory_id === 0
              ? {
                  user: author_id,
                }
              : {
                  directory: directory_id,
                },
          include: {
            user_postTouser: true,
          },
          orderBy:
            sortBy === "recent"
              ? {
                  post_id: "desc",
                }
              : {
                  views: "desc",
                },
          skip: skip ? skip : 0,
          take: take ? take : 15,
        });
        return p_by_dir_id;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
