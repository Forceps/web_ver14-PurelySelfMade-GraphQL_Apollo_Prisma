import { PrismaClient } from "@prisma/client";
import { rootArchiveDir } from "../../../../LibForGQL/findRootDir";
const prisma = new PrismaClient();

interface imgUpdateArgsTypes {
  image_id: number;
  caption: string;
  directory_id: number;
}
export default {
  Mutation: {
    imgUpdate: async (
      _: null,
      args: imgUpdateArgsTypes,
      { request, isAuthenticated }: any
    ) => {
      isAuthenticated(request);
      const { image_id, caption, directory_id } = args;
      const { user } = request;
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
