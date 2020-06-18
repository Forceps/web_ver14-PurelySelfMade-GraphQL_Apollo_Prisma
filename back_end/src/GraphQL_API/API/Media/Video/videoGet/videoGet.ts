import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface videoGetArgsTypes {
  skip: number;
  take: number;
}
export default {
  Query: {
    videoGet: async (
      _: null,
      args: videoGetArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { skip, take } = args;
      try {
        if ((skip || skip === 0) && (take || take === 0)) {
          return prisma.video.findMany({
            where: {
              directory_directoryTovideo: {
                user: user.user_id,
              },
            },
            orderBy: {
              video_id: "desc",
            },
            skip,
            take,
          });
        } else if (skip) {
          return prisma.video.findMany({
            where: {
              directory_directoryTovideo: {
                user: user.user_id,
              },
            },
            orderBy: {
              video_id: "desc",
            },
            take: skip,
          });
        } else {
          return prisma.video.findMany({
            where: {
              directory_directoryTovideo: {
                user: user.user_id,
              },
            },
            orderBy: {
              video_id: "desc",
            },
            take: 4,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
}; // skip은 n개를 생략하고 first는 m개를 보여준다.
