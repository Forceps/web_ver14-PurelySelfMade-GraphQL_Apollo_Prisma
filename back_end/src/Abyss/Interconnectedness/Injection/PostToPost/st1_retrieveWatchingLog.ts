import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (user_id: number) => {
  const old = await prisma.watched.findMany({
    where: {
      user: user_id,
      deprecated: 0,
    },
    select: {
      post: true,
      interest: true,
    },
    orderBy: {
      watched_id: "desc",
    },
    take: 4,
  });
  return old;
};
