import { PrismaClient } from "@prisma/client";
import { VideoGetQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    videoGet: async (
      _: void,
      args: VideoGetQueryArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const { user } = req;
      const { skip, take } = args;
      try {
        return prisma.video.findMany({
          where: {
            directory_directoryTovideo: {
              user: user.user_id,
            },
          },
          orderBy: {
            video_id: "desc",
          },
          skip: skip ? skip : 0,
          take: take ? take : 6,
        });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
