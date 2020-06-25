import { PrismaClient } from "@prisma/client";
import { MusicGetQueryArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    musicGet: async (
      _: void,
      args: MusicGetQueryArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { skip, take } = args;
      let data: any = {};
      try {
        if ((skip || skip === 0) && (take || take === 0)) {
          data = await prisma.music.findMany({
            where: {
              directory_directoryTomusic: {
                user: user.user_id,
              },
            },
            orderBy: {
              music_id: "desc",
            },
            skip,
            take,
          });
        } else if (skip) {
          data = await prisma.music.findMany({
            where: {
              directory_directoryTomusic: {
                user: user.user_id,
              },
            },
            orderBy: {
              music_id: "desc",
            },
            take: skip,
          });
        } else {
          data = await prisma.music.findMany({
            where: {
              directory_directoryTomusic: {
                user: user.user_id,
              },
            },
            orderBy: {
              music_id: "desc",
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
