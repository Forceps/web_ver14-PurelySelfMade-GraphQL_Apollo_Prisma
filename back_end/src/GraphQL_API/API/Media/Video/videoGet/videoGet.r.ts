import { PrismaClient } from "@prisma/client";
import { VideoGetQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    videoGet: async (
      _: void,
      args: VideoGetQueryArgs,
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
        return null;
      }
    },
  },
};
