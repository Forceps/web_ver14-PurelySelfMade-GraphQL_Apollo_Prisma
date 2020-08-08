import { PrismaClient } from "@prisma/client";
import { rootArchiveDir } from "../../../../../LibForGQL/findByPrisma/findRootDir";
import { MusicUploadMutationArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
import { contextType } from "../../../../../LibForGQL/typesLib";
const prisma = new PrismaClient();

export default {
  Mutation: {
    musicUpload: async (
      _: void,
      args: MusicUploadMutationArgs,
      { req, isAuthenticated }: contextType
    ) => {
      isAuthenticated(req);
      const { user } = req;
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
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
