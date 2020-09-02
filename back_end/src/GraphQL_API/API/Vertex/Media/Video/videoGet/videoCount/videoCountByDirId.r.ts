import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";

const prisma = new PrismaClient();

export default {
  Query: {
    videoCountByDirId: async (
      _: void,
      { author_id, directory_id },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { user } = req;
      try {
        const videoCount = await prisma.video.count({
          where:
            directory_id === 0
              ? {
                  directory_directoryTovideo: {
                    user: author_id === 0 ? user.user_id : author_id,
                  },
                }
              : {
                  directory: directory_id,
                },
        });
        return videoCount;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
