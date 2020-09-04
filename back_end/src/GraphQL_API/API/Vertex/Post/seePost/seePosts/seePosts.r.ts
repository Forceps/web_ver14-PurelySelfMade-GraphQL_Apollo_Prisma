import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    seePosts: async (_: void, { skip, take }) => {
      try {
        const result = await prisma.post.findMany({
          include: { user_postTouser: true, directory_directoryTopost: true },
          orderBy: { post_id: "desc" },
          skip: typeof skip === "number" ? skip : 0,
          take: take ? take : 10,
        });
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
