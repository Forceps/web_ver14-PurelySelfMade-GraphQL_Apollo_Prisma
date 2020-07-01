import { PrismaClient } from "@prisma/client";
import { MusicGetQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    musicGet: async (
      _: void,
      args: MusicGetQueryArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const { user } = req;
      const { skip, take } = args;
      try {
        return prisma.music.findMany({
          where: {
            directory_directoryTomusic: {
              user: user.user_id,
            },
          },
          orderBy: {
            music_id: "desc",
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
