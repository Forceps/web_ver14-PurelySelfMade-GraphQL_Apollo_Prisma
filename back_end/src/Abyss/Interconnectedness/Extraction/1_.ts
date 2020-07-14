import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (user_id: number) => {
  const myHistory = await prisma.watched.findMany({
    where: {
      user: user_id,
      deprecated: 0,
    },
    select: {
      post: true,
      interest: true,
    },
    take: 10,
  });

  let postLine: number[][] = [];
  for (let i = 0; i < myHistory.length; i++) {
    const { post, interest } = myHistory[i];
    const bundle = await prisma.post_relevance.findMany({
      where: {
        post1: post,
      },
      select: {
        post2: true,
        degree: true,
      },
    });
    for (let j = 0; j < myHistory.length; j++) {
      const { post2, degree } = bundle[j];
      postLine = postLine.concat([[post2, degree * interest]]);
    }
  }
  for (let i = 0; i < myHistory.length; i++) {
    const { post, interest } = myHistory[i];
    const bundle = await prisma.post_relevance.findMany({
      where: {
        post2: post,
      },
      select: {
        post1: true,
        degree: true,
      },
    });
    for (let j = 0; j < myHistory.length; j++) {
      const { post1, degree } = bundle[j];
      postLine = postLine.concat([[post1, degree * interest]]);
    }
  }
};
