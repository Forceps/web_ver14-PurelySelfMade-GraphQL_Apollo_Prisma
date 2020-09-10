import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (post_ids: number[], skip: number, take: number) => {
  let transPostIdArr: any[] = [];
  for (let i = 0; i < post_ids.length; i++) {
    transPostIdArr = transPostIdArr
      .concat({
        post1: post_ids[i],
      })
      .concat({
        post2: post_ids[i],
      });
  }

  const ranks = await prisma.post_relevance.findMany({
    where: {
      OR: transPostIdArr,
    },
    orderBy: {
      degree: "desc",
    },
    include: {
      post_postTopost_relevance_post1: {
        include: {
          user_postTouser: true,
        },
      },
      post_postTopost_relevance_post2: {
        include: {
          user_postTouser: true,
        },
      },
    },
    skip: skip ? skip : 0,
    take: take ? take : 15,
  });

  return ranks;
};
