import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    postRecommendByPost: async (_: void, { post_id, skip, take }) => {
      try {
        const result = await prisma.post.findMany({
          include: { user_postTouser: true, directory_directoryTopost: true },
          orderBy: { post_id },
          skip: typeof skip === "number" ? skip : 0,
          take: take ? take : 15,
        });
        const ranks = await prisma.post_relevance.findMany({
          where: {
            OR: [
              {
                post1: post_id,
              },
              {
                post2: post_id,
              },
            ],
          },
          orderBy: {
            degree: "desc",
          },
          include: {
            post_postTopost_relevance_post1: {
              include: {
                user_postTouser: true,
                directory_directoryTopost: true,
              },
            },
            post_postTopost_relevance_post2: {
              include: {
                user_postTouser: true,
                directory_directoryTopost: true,
              },
            },
          },
          skip: typeof skip === "number" ? skip : 0,
          take: take ? take : 15,
        });
        return result;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
