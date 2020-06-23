import { PrismaClient } from "@prisma/client";
import { rootArchiveDir } from "../../../../LibForGQL/findRootDir";
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
                type: type[i],
                volume: volume[i],
                directory_directoryTovideo: {
                  connect: { directory_id: rootDir },
                },
                thumbnail: thumbnail[i],
              },
            });
          } else {
            await prisma.video.create({
              data: {
                address: address[i],
                caption: caption[i],
                type: type[i],
                volume: volume[i],
                directory_directoryTovideo: {
                  connect: { directory_id: directory_id[i] },
                },
                thumbnail: thumbnail[i],
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
