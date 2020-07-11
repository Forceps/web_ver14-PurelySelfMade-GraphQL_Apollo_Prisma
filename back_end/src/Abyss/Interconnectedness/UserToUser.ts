import { PrismaClient } from "@prisma/client";
import { GeoMeanRound } from "../AbyssLib/formula";

const prisma = new PrismaClient();

export const UserInterconnection = async (
  user_id: number,
  post_id: number,
  latest: Latest
) => {
  const old = await prisma.watched.findMany({
    where: {
      post: post_id,
      deprecated: 0,
    },
    orderBy: {
      watched_id: "desc",
    },
    take: 8,
  });

  for (let i = 0; i < old.length; i++) {
    const exiCheck = await prisma.user_relevance.findMany({
      where: {
        OR: [
          {
            user1: old[i].user,
            user2: user_id,
          },
          {
            user1: user_id,
            user2: old[i].user,
          },
        ],
      },
      select: {
        user_relevance_id: true,
      },
    })[0];
    if (exiCheck) {
      prisma.user_relevance.update({
        where: {
          user_relevance_id: exiCheck.user_relevance_id,
        },
        data: {
          degree:
            exiCheck.degree + GeoMeanRound(old[i].interest, latest.interest),
        },
      });
    } else {
      prisma.user_relevance.create({
        data: {
          user_userTouser_relevance_user1: {
            connect: {
              user_id,
            },
          },
          user_userTouser_relevance_user2: {
            connect: {
              user_id: old[i].user,
            },
          },
          degree: GeoMeanRound(old[i].interest, latest.interest),
        },
      });
    }
  }
};

interface Latest {
  watched_id: number;
  count: number;
  interest: number;
  deprecated: number;
  post: number;
  user: number;
}
