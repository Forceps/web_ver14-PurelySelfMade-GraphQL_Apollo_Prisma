import { PrismaClient } from "@prisma/client";
import st1_myRelatedUser from "./st1_myRelatedUser";

const prisma = new PrismaClient();

export default async (user_id: number) => {
  const userCask = await st1_myRelatedUser(user_id);

  let finalResult: any[] = [];

  for (let i = 0; i < userCask.length; i++) {
    const [user_id] = userCask[i][0];
    const item = await prisma.user.findOne({
      where: {
        user_id,
      },
    });
    finalResult = finalResult.concat(item);
  }

  return finalResult;
};
