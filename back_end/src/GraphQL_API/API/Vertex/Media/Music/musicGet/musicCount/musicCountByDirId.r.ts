import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";

const prisma = new PrismaClient();

export default {
  Query: {
    musicCountByDirId: async (
      _: void,
      { author_id, directory_id },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { user } = req;
      try {
        const musicCount = await prisma.music.count({
          where:
            directory_id === 0
              ? {
                  directory_directoryTomusic: {
                    user: author_id === 0 ? user.user_id : author_id,
                  },
                }
              : {
                  directory: directory_id,
                },
        });
        return musicCount;
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
