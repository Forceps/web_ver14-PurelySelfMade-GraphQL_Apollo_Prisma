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
      let data: any = {};
      try {
        if ((skip || skip === 0) && (take || take === 0)) {
          data = await prisma.video.findMany({
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
          data = await prisma.video.findMany({
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
          data = await prisma.video.findMany({
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
        return {
          ok: true,
          error: null,
          data,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: e.message,
          data: null,
        };
      }
    },
  },
};
