import { PrismaClient } from "@prisma/client";
import { rootArchiveDir } from "../../../../LibForGQL/findByPrisma/findRootDir";
import { MusicUploadMutationArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    musicUpload: async (
      _: void,
      args: MusicUploadMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { address, caption, volume, directory_id, type } = args;

      try {
        const rootDir = await rootArchiveDir(user.user_id);
        for (let i = 0; i < address.length; i++) {
          await prisma.music.create({
            data: {
              address: address[i],
              caption: caption[i],
              type: type ? type[i] : null,
              volume: volume[i],
              directory_directoryTomusic: {
                connect: {
                  directory_id:
                    directory_id[i] === 0 ? rootDir : directory_id[i],
                },
              },
            },
          });
        }
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
