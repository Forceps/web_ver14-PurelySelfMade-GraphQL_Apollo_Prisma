import { PrismaClient } from "@prisma/client";
import { rootArchiveDir } from "../../../../LibForGQL/findRootDir";
const prisma = new PrismaClient();

interface musicUpdateArgsTypes {
  music_id: number;
  caption: string;
  directory_id: number;
}
export default {
  Mutation: {
    musicUpdate: async (
      _: null,
      args: musicUpdateArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { music_id, caption, directory_id } = args;
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
        await prisma.music.update({
          data: {
            caption,
            directory_directoryTomusic: {
              connect: { directory_id: directory },
            },
          },
          where: { music_id },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
