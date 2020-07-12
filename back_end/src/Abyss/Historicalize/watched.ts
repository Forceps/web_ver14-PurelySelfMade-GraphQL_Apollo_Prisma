import { PrismaClient } from "@prisma/client";
import { interestSigmoid } from "../AbyssLib/formula";
import { PostInterconnection } from "../Interconnectedness/PostToPost";
import { UserInterconnection } from "../Interconnectedness/UserToUser";

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
      },
    });
    let arrCount: number = existCheck.length;
    if (existCheck.length > 99) {
      arrCount = 99;
    }
    const Obj = await prisma.watched.create({
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
        count: arrCount + 1,
        interest: interestSigmoid(arrCount + 1),
      },
      select: {
        interest: true,
      },
    });
    await PostInterconnection(user_id, post_id, Obj);
    await UserInterconnection(user_id, post_id, Obj);
  } catch (e) {
    console.log(e);
  }
};
