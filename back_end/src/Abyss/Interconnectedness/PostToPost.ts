import { PrismaClient } from "@prisma/client";
import { relevanceSigmoid } from "../AbyssLib/formula";

const prisma = new PrismaClient();

export const PostInterconnection = async (user_id: number, post_id: number) => {
  const readyMade = await prisma.watched.findMany({
    where: {
      post_postTowatched: {
        OR: [
          {
            post_relevance_postTopost_relevance_post1: {
              some: {
                post1: post_id,
              },
            },
          },
          {
            post_relevance_postTopost_relevance_post2: {
              some: {
                post2: post_id,
              },
            },
          },
        ],
      },
    },
  });
  const alteration = await prisma.watched.findMany({
    where: {
      user: user_id,
    },
  });

  for (let i = 0; i < alteration.length; i++) {
    for (let j = 0; j < readyMade.length; j++) {
      const exiCheck = await prisma.post_relevance.findMany({
        where: {
          OR: [
            {
              post1: alteration[i].post,
              post2: readyMade[j].post,
            },
            {
              post1: readyMade[j].post,
              post2: alteration[i].post,
            },
          ],
        },
        select: {
          post_relevance_id: true,
        },
      });
      if (exiCheck) {
        prisma.post_relevance.update({
          where: {
            post_relevance_id: exiCheck[0].post_relevance_id,
          },
          data: {
            degree: relevanceSigmoid(
              alteration[i].interest,
              readyMade[j].interest
            ),
          },
        });
      } else {
      }
    }
  }
};
