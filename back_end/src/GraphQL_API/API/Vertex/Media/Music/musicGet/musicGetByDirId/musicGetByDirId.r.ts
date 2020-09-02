import { PrismaClient } from "@prisma/client";
import { contextType } from "../../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Query: {
    musicGetByDirId: async (
      _: void,
      { author_id, directory_id, skip, take },
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { user } = req;
      try {
        return prisma.music.findMany({
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
          orderBy: {
            music_id: "desc",
          },
          skip: skip ? skip : 0,
          take: take ? take : 4,
        });
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
