import { PrismaClient } from "@prisma/client";
import { rootArchiveDir } from "../../../../../LibForGQL/findByPrisma/findRootDir";
import { VideoUpdateMutationArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    videoUpdate: async (
      _: void,
      args: VideoUpdateMutationArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const { video_id, caption, directory_id } = args;
      const { user } = req;
      let directory: any = null;
      try {
        if (directory_id === 0) {
          directory = await rootArchiveDir(user.user_id);
        } else {
          directory = directory_id;
        }
      } catch (e) {
        console.log(e);
      }

      try {
        await prisma.video.update({
          data: {
            caption,
            directory_directoryTovideo: {
              connect: { directory_id: directory },
            },
          },
          where: { video_id },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
