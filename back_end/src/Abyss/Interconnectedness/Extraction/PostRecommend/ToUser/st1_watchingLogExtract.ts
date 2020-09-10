import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (user_id: number) => {
  let myHistory = await prisma.watched.findMany({
    where: {
      user: user_id,
      deprecated: 0,
    },
    select: {
      post: true,
      interest: true,
    },
    orderBy: {
      interest: "desc",
    },
    take: 7,
  });
  let tempArr1: any[] = [myHistory[0]];
  for (let i = 1; i < myHistory.length; i++) {
    let duplicatesFlag = true;
    for (let j = 0; j < tempArr1.length; j++) {
      if (tempArr1[j].post === myHistory[i].post) {
        duplicatesFlag = false;
        break;
      }
    }
    if (duplicatesFlag) {
      tempArr1 = tempArr1.concat(myHistory[i]);
    }
  }
  myHistory = tempArr1;

  return myHistory;
};
