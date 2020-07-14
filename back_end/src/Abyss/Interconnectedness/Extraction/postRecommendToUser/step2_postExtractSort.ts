import { PrismaClient } from "@prisma/client";
import step1_myRelatedUser from "./step1_myRelatedUser";

const prisma = new PrismaClient();

export default async (user_id: number) => {
  const PeripheryUser = await step1_myRelatedUser(user_id);

  let postCask: number[][] = [];
  for (let i = 0; i < PeripheryUser.length; i++) {
    const { user, degree } = PeripheryUser[i];
    const eachUserHistory = await prisma.watched.findMany({
      where: {
        user,
      },
      select: {
        post: true,
        interest: true,
      },
    });
    for (let j = 0; j < eachUserHistory.length; j++) {
      const { post, interest } = eachUserHistory[j];
      postCask = postCask.concat([[post, interest * degree]]);
    }
  }

  if (postCask.length > 1) {
    postCask = postCask.sort((a, b) => {
      return b[1] - a[1];
    });

    let tempArr: number[][] = [postCask[0]];
    for (let i = 1; i < postCask.length; i++) {
      let duplicatesFlag = true;
      for (let j = 0; j < tempArr.length; j++) {
        if (tempArr[j][0] === postCask[i][0]) {
          duplicatesFlag = false;
          break;
        }
      }
      if (duplicatesFlag) {
        tempArr = tempArr.concat([postCask[i]]);
      }
    }
    postCask = tempArr;
  }

  return postCask;
};
