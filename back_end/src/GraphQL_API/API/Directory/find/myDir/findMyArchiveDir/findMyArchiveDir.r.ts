import { PrismaClient } from "@prisma/client";
import { FindMyArchiveDirQueryArgs } from "../../../../../LibForGQL/mergedSchema/types/graph";
const prisma = new PrismaClient();

export default {
  Query: {
    findMyArchiveDir: async (
      _: void,
      args: FindMyArchiveDirQueryArgs,
      { req, isAuthenticated }: any
    ) => {
      isAuthenticated(req);
      const { user } = req;
      const { directory_id } = args;
      try {
        if (directory_id === 0) {
          const ret = await prisma.directory.findMany({
            where: {
              root: true,
              name: "My Archive",
              user: user.user_id,
            },
            include: {
              other_directory: true,
              image: true,
              video: true,
              music: true,
            },
          });
          return ret[0];
        } else {
          return prisma.directory.findOne({
            where: { directory_id },
            include: {
              directory: true,
              other_directory: true,
              image: true,
              video: true,
              music: true,
            },
          });
        }
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
