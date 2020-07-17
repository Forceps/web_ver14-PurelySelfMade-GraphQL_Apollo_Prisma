import { PrismaClient } from "@prisma/client";
import step2_postExtractSort from "./step2_postExtractSort";

const prisma = new PrismaClient();

export default async (user_id: number) => {
  const postCask = await step2_postExtractSort(user_id);

  let finalResult: any[] = [];

  for (let i = 0; i < postCask.length; i++) {
    const [post_id] = postCask[i];
    const item = await prisma.post.findOne({
      where: {
        post_id,
      },
      include: {
        user_postTouser: true,
      },
    });
    finalResult = finalResult.concat(item);
  }

  return finalResult;
};
