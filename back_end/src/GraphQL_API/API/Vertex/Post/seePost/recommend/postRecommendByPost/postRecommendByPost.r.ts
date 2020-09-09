import { PrismaClient, post } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  Query: {
    postRecommendByPost: async (_: void, { post_id, skip, take }) => {
      try {
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

        let postProsed: post[] = [];
        for (let i = 0; i < ranks.length; i++) {
          const {
            post_postTopost_relevance_post1,
            post_postTopost_relevance_post2,
          } = ranks[i];
          if (post_postTopost_relevance_post1.post_id === post_id) {
            postProsed = postProsed.concat(post_postTopost_relevance_post2);
          } else {
            postProsed = postProsed.concat(post_postTopost_relevance_post1);
          }
        }

        console.log(postProsed);
        return postProsed;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
