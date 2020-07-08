import { PrismaClient } from "@prisma/client";
import { rootArchiveDir } from "../../../../../LibForGQL/findByPrisma/findRootDir";
import { ImgUpdateMutationArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Mutation: {
    imgUpdate: async (
      _: void,
      args: ImgUpdateMutationArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const { image_id, caption, directory_id } = args;
      const { user } = req;
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
        await prisma.image.update({
          data: {
            caption,
            directory_directoryToimage: {
              connect: { directory_id: directory },
            },
          },
          where: { image_id },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
