import { PrismaClient } from "@prisma/client";
import { rootArchiveDir } from "../../../../LibForGQL/findByPrisma/findRootDir";
import { VideoUploadMutationArgs } from "../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    videoUpload: async (
      _: void,
      args: VideoUploadMutationArgs,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { user } = request;
      const { address, caption, volume, directory_id, type, thumbnail } = args;

      try {
        const rootDir = await rootArchiveDir(user.user_id);
        for (let i = 0; i < address.length; i++) {
          if (directory_id[i] === 0) {
            await prisma.video.create({
              data: {
                address: address[i],
                caption: caption[i],
                type: type ? type[i] : null,
                volume: volume[i],
                directory_directoryTovideo: {
                  connect: { directory_id: rootDir },
                },
                thumbnail: thumbnail ? thumbnail[i] : null,
              },
            });
          } else {
            await prisma.video.create({
              data: {
                address: address[i],
                caption: caption[i],
                type: type ? type[i] : null,
                volume: volume[i],
                directory_directoryTovideo: {
                  connect: { directory_id: directory_id[i] },
                },
                thumbnail: thumbnail ? thumbnail[i] : null,
              },
            });
          }
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
