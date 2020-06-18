import { PrismaClient } from "@prisma/client";
import { rootArchiveDir } from "../../../../LibForGQL/findRootDir";
const prisma = new PrismaClient();

export default {
  Mutation: {
    videoUpdate: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { video_id, caption, directory_id } = args;
      const { user } = request;
      let directory = null;
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
            directory: {
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
