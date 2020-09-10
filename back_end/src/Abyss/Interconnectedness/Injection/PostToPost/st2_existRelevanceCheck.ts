import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (post1: number, post2: number) => {
  const exiCheck = await prisma.post_relevance.findMany({
    where: {
      OR: [
        {
          post1,
          post2,
        },
        {
          post1,
          post2,
        },
      ],
    },
    select: {
      post_relevance_id: true,
      degree: true,
      post_postTopost_relevance_post1: {
        select: {
          user: true,
        },
      },
      post_postTopost_relevance_post2: {
        select: {
          user: true,
        },
      },
    },
  });
  return exiCheck;
};
