import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (user_id: number) => {
  const preFind1 = await prisma.user_relevance.findMany({
    where: {
      user1: user_id,
    },
    select: {
      user_relevance_id: true,
      user2: true,
      degree: true,
    },
  });
  let find1: userBowl[] = [];
  for (let i = 0; i < preFind1.length; i++) {
    const { user_relevance_id, user2, degree } = preFind1[i];
    find1 = find1.concat({
      user_relevance_id,
      user: user2,
      degree,
    });
  }
  const preFind2 = await prisma.user_relevance.findMany({
    where: {
      user2: user_id,
    },
    select: {
      user_relevance_id: true,
      user1: true,
      degree: true,
    },
  });
  let find2: userBowl[] = [];
  for (let i = 0; i < preFind2.length; i++) {
    const { user_relevance_id, user1, degree } = preFind2[i];
    find1 = find1.concat({
      user_relevance_id,
      user: user1,
      degree,
    });
  }
  let relevanceUserList: userBowl[] = [...find1, ...find2];
  if (relevanceUserList.length > 1) {
    relevanceUserList = relevanceUserList.sort((a, b) => {
      return b.degree - a.degree;
    });
  }

  return relevanceUserList;
};

interface userBowl {
  user_relevance_id: number;
  user: number;
  degree: number;
}
