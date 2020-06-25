import { PrismaClient } from "@prisma/client";
import { rootArchiveDir } from "../../../../LibForGQL/findByPrisma/findRootDir";
import { MusicUpdateMutationArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    musicUpdate: async (
      _: void,
      args: MusicUpdateMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { music_id, caption, directory_id } = args;
      let directory: any = null;
      try {
        directory_id === 0
          ? (directory = await rootArchiveDir(user.user_id))
          : (directory = directory_id);
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: e.message,
        };
      }

      try {
        await prisma.music.update({
          data: {
            caption,
            directory_directoryTomusic: {
              connect: { directory_id: directory },
            },
          },
          where: { music_id },
        });
        return {
          ok: true,
          error: null,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
};
