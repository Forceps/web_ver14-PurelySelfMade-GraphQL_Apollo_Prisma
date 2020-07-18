import { PrismaClient } from "@prisma/client";
import st2_manufacturingDataStructure from "./st2_manufacturingDataStructure";

const prisma = new PrismaClient();

export default async (user_id: number) => {
  const userCask = await st2_manufacturingDataStructure(user_id);

  let finalResult: any[] = [];

  for (let i = 0; i < userCask.length; i++) {
    const user_id = userCask[i].user;
    const item = await prisma.user.findOne({
      where: {
        user_id,
      },
    });
    finalResult = finalResult.concat(item);
  }
  return finalResult;
};
