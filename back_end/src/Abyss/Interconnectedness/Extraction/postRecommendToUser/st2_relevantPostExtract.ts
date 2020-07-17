import { PrismaClient } from "@prisma/client";
import { interestFadeSigmoid } from "../../../AbyssLib/formula";
import st1_watchingLogExtract from "./st1_watchingLogExtract";

const prisma = new PrismaClient();

export default async (user_id: number, eachTake: number = 6) => {
  const myHistory = await st1_watchingLogExtract(user_id);

  if (
    myHistory.length !== 0 &&
    myHistory[0] !== null &&
    myHistory[0] !== undefined
  ) {
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
        orderBy: {
          degree: "desc",
        },
        take: eachTake,
      });
      for (let j = 0; j < bundle.length; j++) {
        const { post2, degree } = bundle[j];
        postLine = postLine.concat([
          [post2, degree * interestFadeSigmoid(interest, i + 1)],
        ]);
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
        orderBy: {
          degree: "desc",
        },
        take: eachTake,
      });
      for (let j = 0; j < bundle.length; j++) {
        const { post1, degree } = bundle[j];
        postLine = postLine.concat([
          [post1, degree * interestFadeSigmoid(interest, i + 1)],
        ]);
      }
    }

    if (postLine.length > 1) {
      postLine = postLine.sort((a, b) => {
        return b[1] - a[1];
      });

      let tempArr: number[][] = [postLine[0]];
      for (let i = 1; i < postLine.length; i++) {
        let duplicatesFlag = true;
        for (let j = 0; j < tempArr.length; j++) {
          if (tempArr[j][0] === postLine[i][0]) {
            duplicatesFlag = false;
            break;
          }
        }
        if (duplicatesFlag) {
          tempArr = tempArr.concat([postLine[i]]);
        }
      }
      postLine = tempArr;
    }

    return postLine;
  } else {
    return [];
  }
};
