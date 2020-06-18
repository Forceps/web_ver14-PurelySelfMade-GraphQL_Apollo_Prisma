import { PrismaClient } from "@prisma/client";
import { rootArchiveDir } from "../../../../LibForGQL/findRootDir";
const prisma = new PrismaClient();

export default {
  Mutation: {
    musicUpload: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { address, caption, volume, directory_id, type } = args;

      try {
        const rootDir = await rootArchiveDir(user.user_id);
        for (let i = 0; i < address.length; i++) {
          if (directory_id[i] === 0) {
            await prisma.music.create({
              data: {
                address: address[i],
                caption: caption[i],
                type: type[i],
                volume: volume[i],
                directory: {
                  connect: { directory_id: rootDir },
                },
              },
            });
          } else {
            await prisma.music.create({
              data: {
                address: address[i],
                caption: caption[i],
                type: type[i],
                volume: volume[i],
                directory: { connect: { directory_id: directory_id[i] } },
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
