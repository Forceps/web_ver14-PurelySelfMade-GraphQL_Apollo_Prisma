import { PrismaClient } from "@prisma/client";
import { WatchSigmoid } from "../AbyssLib/formula";

const prisma = new PrismaClient();

export const watchingLoging = async (user_id: number, post_id: number) => {
  try {
    const existCheck = await prisma.watched.findMany({
      where: {
        user: user_id,
        post: post_id,
        deprecated: 0,
      },
      select: {
        watched_id: true,
        count: true,
        interest: true,
      },
    })[0];
    if (existCheck) {
      if (existCheck.count < 100) {
        prisma.watched.update({
          where: {
            watched_id: existCheck.watched_id,
          },
          data: {
            count: existCheck.count + 1,
            interest: WatchSigmoid(existCheck.count + 1),
          },
        });
      }
    } else {
      prisma.watched.create({
        data: {
          user_userTowatched: {
            connect: {
              user_id,
            },
          },
          post_postTowatched: {
            connect: {
              post_id,
            },
          },
          interest: WatchSigmoid(1),
        },
      });
    }
  } catch (e) {
    console.log(e);
  }
};
